import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  output: 'static',
  site: 'https://hon-luu.github.io',
  base: '/ds-portfolio',
  integrations: [tailwind()],
});
