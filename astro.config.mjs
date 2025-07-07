import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

import tailwindcss from '@tailwindcss/vite';

import netlify from '@astrojs/netlify';

export default defineConfig({
  integrations: [tailwind()],

  vite: {
    plugins: [tailwindcss()],
  },

  adapter: netlify(),
});