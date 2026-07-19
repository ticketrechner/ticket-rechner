import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// Static output — ideal for Cloudflare Pages (no adapter needed).
// GTFS route pages later: generate as static pages in batches via getStaticPaths.
export default defineConfig({
  site: 'https://ticket-rechner.de',
  output: 'static',
  integrations: [sitemap()],
  trailingSlash: 'never',
  build: { inlineStylesheets: 'auto' }
});
