// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// Use GitHub Actions values when available, with local fallbacks.
const site = process.env.SITE ?? 'https://irishmay29.github.io';
const base = process.env.BASE_PATH ?? '/My-Portfolio/';

// https://astro.build/config
export default defineConfig({
  site,
  base,
  vite: {
    plugins: [tailwindcss()]
  }
});