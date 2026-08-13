import { stat } from 'node:fs/promises';
import { join } from 'node:path';
import sharp from 'sharp';

const PUBLIC_DIR = 'public';

export interface ImageDimensions {
  width: number;
  height: number;
}

/**
 * Lit les dimensions d'une image servie depuis `public/`, afin de pouvoir
 * renseigner les attributs `width`/`height` et éviter tout décalage de mise en
 * page pendant le chargement (CLS).
 *
 * @param publicPath chemin absolu côté site, par exemple `/img/projet/akuo.webp`
 */
export async function getImageDimensions(publicPath: string): Promise<ImageDimensions> {
  const filePath = join(PUBLIC_DIR, publicPath);

  await stat(filePath).catch(() => {
    throw new Error(`Image introuvable : ${publicPath} (attendue dans ${filePath})`);
  });

  const { width, height } = await sharp(filePath).metadata();
  if (!width || !height) {
    throw new Error(`Dimensions illisibles pour l'image ${publicPath}`);
  }

  return { width, height };
}
