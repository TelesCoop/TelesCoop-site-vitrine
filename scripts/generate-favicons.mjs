#!/usr/bin/env node
/**
 * Génère l'ensemble des icônes du site à partir d'une source unique : la
 * lettre T, blanche sur fond noir, dans un carré aux angles à peine adoucis.
 *
 * Le traitement est délibérément plus sobre que le reste du site : monochromie
 * stricte, grotesque neutre, angles presque vifs. L'icône est le seul élément
 * de marque affiché hors de son contexte — dans une barre d'onglets, aux côtés
 * de n'importe quel autre site — et gagne à y être lue comme une marque, non
 * comme un fragment d'affiche.
 *
 * Le T est tracé en géométrie plutôt que composé en texte : les polices ne sont
 * pas installées sur la machine de build, et un tracé garantit un rendu
 * identique partout.
 *
 * Lancer après toute évolution de l'identité visuelle : `npm run favicons`.
 */
import { mkdir, writeFile } from 'node:fs/promises';
import { join } from 'node:path';
import sharp from 'sharp';

const OUTPUT_DIR = 'public/img/favicon';

const BEIGE = '#FFF9F0';
const BLACK = '#000000';
const WHITE = '#FFFFFF';

/** Fond de l'icône, repris comme couleur de tuile et de manifeste. */
const ICON_BACKGROUND = BLACK;
/** Couleur de la lettre : blanc pur, la monochromie étant ici stricte. */
const ICON_SIGNAL = WHITE;
/** Rayon des angles : assez marqué pour ne pas être un carré nu, assez faible
 *  pour rester net une fois réduit à 16 px. */
const CORNER_RADIUS = 24;

/**
 * Tracé de la lettre, commun à toutes les déclinaisons. Proportions de
 * grotesque neutre — barre large, fût fin, terminaisons droites — plutôt que
 * la condensée du site, qui s'empâte aux petites tailles.
 *
 * Le T est légèrement remonté par rapport au centre géométrique : sa barre
 * concentrant la masse, un centrage strict le ferait paraître trop bas.
 */
const letterT = (color) => `
  <g fill="${color}">
    <rect x="118" y="106" width="276" height="50" />
    <rect x="230" y="106" width="52" height="300" />
  </g>`;

/** Icône destinée aux onglets : le carré fait partie du dessin. */
const framedIcon = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
  <rect width="512" height="512" rx="${CORNER_RADIUS}" fill="${ICON_BACKGROUND}"/>
  ${letterT(ICON_SIGNAL)}
</svg>`;

/**
 * Icône pleine, pour les systèmes qui appliquent eux-mêmes un masque. Le signe
 * est réduit pour tenir dans la zone sûre des icônes maskables, qu'Android
 * peut rogner jusqu'à un cercle inscrit.
 */
const filledIcon = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
  <rect width="512" height="512" fill="${ICON_BACKGROUND}"/>
  <g transform="translate(256,256) scale(0.78) translate(-256,-256)">
    ${letterT(ICON_SIGNAL)}
  </g>
</svg>`;

/** Silhouette monochrome exigée par Safari pour les onglets épinglés. */
const pinnedTabIcon = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
  ${letterT('black')}
</svg>`;

const PNG_TARGETS = [
  { file: 'favicon-16x16.png', size: 16, source: framedIcon },
  { file: 'favicon-32x32.png', size: 32, source: framedIcon },
  { file: 'apple-touch-icon.png', size: 180, source: filledIcon },
  { file: 'android-chrome-192x192.png', size: 192, source: filledIcon },
  { file: 'android-chrome-512x512.png', size: 512, source: filledIcon },
  { file: 'mstile-150x150.png', size: 150, source: filledIcon },
];

/** Tailles embarquées dans le fichier .ico, du plus petit au plus grand. */
const ICO_SIZES = [16, 32, 48];

const ICO_HEADER_SIZE = 6;
const ICO_ENTRY_SIZE = 16;

/**
 * Assemble un fichier ICO à partir d'images PNG déjà rendues. Le format ICO
 * accepte des PNG bruts depuis Windows Vista, ce qui évite d'encoder du BMP.
 */
function buildIco(pngBuffers) {
  const header = Buffer.alloc(ICO_HEADER_SIZE);
  header.writeUInt16LE(0, 0); // réservé
  header.writeUInt16LE(1, 2); // type : icône
  header.writeUInt16LE(pngBuffers.length, 4);

  let offset = ICO_HEADER_SIZE + ICO_ENTRY_SIZE * pngBuffers.length;
  const entries = pngBuffers.map(({ size, buffer }) => {
    const entry = Buffer.alloc(ICO_ENTRY_SIZE);
    entry.writeUInt8(size >= 256 ? 0 : size, 0);
    entry.writeUInt8(size >= 256 ? 0 : size, 1);
    entry.writeUInt8(0, 2); // palette
    entry.writeUInt8(0, 3); // réservé
    entry.writeUInt16LE(1, 4); // plans
    entry.writeUInt16LE(32, 6); // bits par pixel
    entry.writeUInt32LE(buffer.length, 8);
    entry.writeUInt32LE(offset, 12);
    offset += buffer.length;
    return entry;
  });

  return Buffer.concat([header, ...entries, ...pngBuffers.map(({ buffer }) => buffer)]);
}

const render = (svg, size) =>
  sharp(Buffer.from(svg)).resize(size, size).png({ compressionLevel: 9 }).toBuffer();

await mkdir(OUTPUT_DIR, { recursive: true });

for (const { file, size, source } of PNG_TARGETS) {
  await writeFile(join(OUTPUT_DIR, file), await render(source, size));
  console.log(`${file} (${size}px)`);
}

const icoBuffers = await Promise.all(
  ICO_SIZES.map(async (size) => ({ size, buffer: await render(framedIcon, size) }))
);
await writeFile(join(OUTPUT_DIR, 'favicon.ico'), buildIco(icoBuffers));
console.log(`favicon.ico (${ICO_SIZES.join(', ')}px)`);

await writeFile(join(OUTPUT_DIR, 'safari-pinned-tab.svg'), pinnedTabIcon);
console.log('safari-pinned-tab.svg');

await writeFile(
  join(OUTPUT_DIR, 'site.webmanifest'),
  `${JSON.stringify(
    {
      name: 'TelesCoop',
      short_name: 'TelesCoop',
      icons: [
        { src: '/img/favicon/android-chrome-192x192.png', sizes: '192x192', type: 'image/png' },
        { src: '/img/favicon/android-chrome-512x512.png', sizes: '512x512', type: 'image/png' },
        {
          src: '/img/favicon/android-chrome-512x512.png',
          sizes: '512x512',
          type: 'image/png',
          purpose: 'maskable',
        },
      ],
      theme_color: ICON_BACKGROUND,
      background_color: BEIGE,
      display: 'standalone',
    },
    null,
    2
  )}\n`
);
console.log('site.webmanifest');

await writeFile(
  join(OUTPUT_DIR, 'browserconfig.xml'),
  `<?xml version="1.0" encoding="utf-8"?>
<browserconfig>
    <msapplication>
        <tile>
            <square150x150logo src="/img/favicon/mstile-150x150.png"/>
            <TileColor>${ICON_BACKGROUND}</TileColor>
        </tile>
    </msapplication>
</browserconfig>
`
);
console.log('browserconfig.xml');
