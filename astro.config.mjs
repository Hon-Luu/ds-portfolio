import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://hon-luu.github.io',
  base: '/ds-portfolio',
  output: 'static',
  integrations: [tailwind()],
});
