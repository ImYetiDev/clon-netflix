// @ts-check
import { defineConfig } from 'astro/config';
import netlify from '@astrojs/netlify/functions';
import dotenv from 'dotenv';
import tailwindcss from '@tailwindcss/vite';

dotenv.config();

export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
  },
  adapter: netlify({}), 
  output: 'server',
});
