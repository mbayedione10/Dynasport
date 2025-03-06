import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://dynasports.com',
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
      allowedHosts: ['41b2abff-7d31-40d9-84e9-7aa90aaa51be-00-1o6ilov52hxa5.janeway.replit.dev']
    },
    ssr: {
      noExternal: ['swiper', 'maplibre-gl']
    }
  }
});