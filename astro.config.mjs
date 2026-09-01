import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://ticket-rechner.de',
  output: 'static',
  trailingSlash: 'always',
  build: { inlineStylesheets: 'auto' }
});
