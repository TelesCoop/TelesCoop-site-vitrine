#!/usr/bin/env node
/**
 * Optimise les images de `public/img` : redimensionnement à une largeur
 * maximale et conversion vers un format web léger.
 *
 * Le script est idempotent : une image déjà au format cible et sous la
 * largeur maximale est laissée intacte. Il est destiné à être lancé
 * manuellement après l'ajout de médias (`npm run images:optimize`), et non
 * pendant le build, afin que les sources versionnées restent la référence.
 *
 * Les références aux fichiers renommés (extension modifiée) sont mises à jour
 * dans le contenu et les composants.
 */
import { readdir, readFile, stat, unlink, writeFile } from 'node:fs/promises';
import { extname, join, relative } from 'node:path';
import sharp from 'sharp';

const IMAGE_ROOT = 'public/img';
const MAX_WIDTH = 1600;
const WEBP_QUALITY = 82;

/** Formats convertis en WebP. Les SVG et GIF sont laissés tels quels. */
const CONVERTIBLE_EXTENSIONS = new Set(['.png', '.jpg', '.jpeg']);

/**
 * Dossiers laissés intacts : les favicons ont des tailles imposées et les
 * images Open Graph doivent rester en PNG/JPEG, WebP étant mal supporté par
 * les crawlers sociaux.
 */
const EXCLUDED_PATHS = ['public/img/favicon', 'public/img/og-image'];

/** Fichiers texte dans lesquels les références aux images sont mises à jour. */
const REFERENCE_GLOBS = ['src', 'public/admin'];

async function collectFiles(directory, predicate) {
  const entries = await readdir(directory, { withFileTypes: true });
  const files = await Promise.all(
    entries.map((entry) => {
      const path = join(directory, entry.name);
      if (entry.isDirectory()) return collectFiles(path, predicate);
      return predicate(path) ? [path] : [];
    })
  );
  return files.flat();
}

function isExcluded(path) {
  return EXCLUDED_PATHS.some((excluded) => path.startsWith(excluded));
}

async function optimizeImage(path) {
  const extension = extname(path).toLowerCase();
  const image = sharp(path);
  const { width } = await image.metadata();
  const { size: sizeBefore } = await stat(path);

  const needsResize = width > MAX_WIDTH;
  const needsConversion = CONVERTIBLE_EXTENSIONS.has(extension);
  if (!needsResize && !needsConversion) return null;

  const targetPath = needsConversion ? path.replace(/\.[^.]+$/, '.webp') : path;
  const pipeline = needsResize ? image.resize({ width: MAX_WIDTH }) : image;
  const buffer = await (needsConversion
    ? pipeline.webp({ quality: WEBP_QUALITY })
    : pipeline
  ).toBuffer();

  await writeFile(targetPath, buffer);
  if (targetPath !== path) await unlink(path);

  return {
    from: `/${relative('public', path)}`,
    to: `/${relative('public', targetPath)}`,
    sizeBefore,
    sizeAfter: buffer.length,
  };
}

async function updateReferences(renames) {
  if (renames.length === 0) return 0;

  const isTextFile = (path) => /\.(astro|md|ts|js|mjs|yml|html|css)$/.test(path);
  const files = (
    await Promise.all(REFERENCE_GLOBS.map((root) => collectFiles(root, isTextFile)))
  ).flat();

  let updatedCount = 0;
  for (const file of files) {
    const original = await readFile(file, 'utf8');
    const updated = renames.reduce(
      (content, { from, to }) => content.split(from).join(to),
      original
    );
    if (updated !== original) {
      await writeFile(file, updated);
      updatedCount += 1;
    }
  }
  return updatedCount;
}

const kilobytes = (bytes) => `${Math.round(bytes / 1024)} Ko`;

const images = await collectFiles(
  IMAGE_ROOT,
  (path) => /\.(png|jpe?g|webp)$/i.test(path) && !isExcluded(path)
);

const results = (await Promise.all(images.map(optimizeImage))).filter(Boolean);

if (results.length === 0) {
  console.log('Toutes les images sont déjà optimisées.');
  process.exit(0);
}

const totalBefore = results.reduce((sum, { sizeBefore }) => sum + sizeBefore, 0);
const totalAfter = results.reduce((sum, { sizeAfter }) => sum + sizeAfter, 0);

for (const { from, to, sizeBefore, sizeAfter } of results) {
  const arrow = from === to ? from : `${from} → ${to}`;
  console.log(`${arrow}  ${kilobytes(sizeBefore)} → ${kilobytes(sizeAfter)}`);
}

const updatedFiles = await updateReferences(results.filter(({ from, to }) => from !== to));

console.log(
  `\n${results.length} image(s) optimisée(s) : ${kilobytes(totalBefore)} → ${kilobytes(totalAfter)} ` +
    `(-${Math.round((1 - totalAfter / totalBefore) * 100)} %)`
);
console.log(`${updatedFiles} fichier(s) mis à jour pour les nouvelles extensions.`);
