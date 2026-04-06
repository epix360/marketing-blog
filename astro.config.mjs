// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  output: 'static',
  base: '/marketing-blog/',
  site: 'https://epix360.github.io/marketing-blog',
  integrations: [sitemap()],
  vite: {
    build: {
      rollupOptions: {
        external: ['/pagefind/pagefind.js']
      }
    }
  }
});
