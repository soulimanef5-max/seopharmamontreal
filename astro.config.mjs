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
      filter: (page) => !page.includes('/404') && !page.includes('/og/'),
      lastmod: new Date(),
      serialize(item) {
        item.lastmod = new Date().toISOString().slice(0, 10);
        return item;
      },
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});
