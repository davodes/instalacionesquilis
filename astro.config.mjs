import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';
import vercel from '@astrojs/vercel/static';

export default defineConfig({
  site: 'https://instalacionesquilis.com',
  integrations: [
    tailwind(),
    sitemap()
  ],
  output: 'static',
  adapter: vercel({
    webAnalytics: { enabled: true }
  }),
  vite: {
    build: {
      cssMinify: 'lightningcss'
    }
  },
  compressHTML: true,
  build: {
    inlineStylesheets: 'auto'
  }
});