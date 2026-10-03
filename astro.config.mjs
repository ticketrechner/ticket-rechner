import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://ticket-rechner.de',
  output: 'static',
  trailingSlash: 'never',
  build: { inlineStylesheets: 'auto' }
});
