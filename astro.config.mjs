import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://dynasports.sn',
  integrations: [
    tailwind(),
    react(),
    sitemap(),
  ],
  image: {
    service: {
      entrypoint: 'astro/assets/services/sharp'
    }
  },
  vite: {
    server: {
      allowedHosts: ['f6caf62b-a21b-4091-8584-c46e7687e964-00-3qhbsj2wdqnqx.picard.replit.dev']
    },
    ssr: {
      noExternal: ['swiper', 'maplibre-gl']
    }
  }
});