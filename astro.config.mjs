// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://seopharmamontreal.com',
  trailingSlash: 'always',
  integrations: [
    sitemap({
      i18n: {
        defaultLocale: 'fr',
        locales: {
          fr: 'fr-CA',
          en: 'en-CA',
        },
      },
      // Exclure les pages utilitaires
      filter: (page) => !page.includes('/404') && !page.includes('/confidentialite') && !page.includes('/conditions') && !page.includes('/privacy') && !page.includes('/terms'),
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});
