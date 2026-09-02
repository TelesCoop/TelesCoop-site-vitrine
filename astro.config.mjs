import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://telescoop.fr',
  outDir: './dist',
  publicDir: './public',
  integrations: [
    sitemap({
      changefreq: 'weekly',
      priority: 0.7,
      lastmod: new Date(),
      filter: (page) => !page.includes('/admin') && !page.includes('/404'),
    })
  ],
  vite: {
    plugins: [tailwindcss()]
  },
  // Astro 7 minifie par défaut selon les règles JSX, qui suppriment le
  // retour à la ligne séparant un texte d'un élément inline suivant.
  compressHTML: true,
  build: {
    format: 'directory'
  }
});
