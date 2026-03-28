import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://relava.io',
  output: 'static',
  build: {
    assets: 'assets',
  },
});
