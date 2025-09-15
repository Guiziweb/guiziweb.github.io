// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  // Configuration pour GitHub Pages - DOMAINE FINAL
  site: 'https://guiziweb.github.io',
  // Pas de base path car domaine racine

  integrations: [
    sitemap({
      changefreq: 'weekly',
      priority: 0.7,
      lastmod: new Date(),
      // Personnaliser certaines pages
      customPages: [
        'https://guiziweb.github.io/',
        'https://guiziweb.github.io/blog/',
      ],
      // Exclure des pages si nécessaire
      filter: (page) => !page.includes('/admin/'),
    })
  ],

  vite: {
    plugins: [tailwindcss()],
  },
});

