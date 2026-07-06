import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://telescoop.fr',
  outDir: './dist',
  publicDir: './public',
  integrations: [
    tailwind(),
    sitemap({
      changefreq: 'weekly',
      priority: 0.7,
      lastmod: new Date(),
      filter: (page) => !page.includes('/admin') && !page.includes('/404'),
    })
  ],
  build: {
    format: 'directory'
  }
});
