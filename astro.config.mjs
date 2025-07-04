// @ts-check
import { defineConfig } from 'astro/config';
import dotenv from 'dotenv';

import tailwindcss from '@tailwindcss/vite';

dotenv.config();

export default defineConfig({
  vite: {
    plugins: [tailwindcss()]
  }
});