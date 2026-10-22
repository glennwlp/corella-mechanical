// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://corella-mechanical.glenn-b84.workers.dev',
  output: 'static',
  vite: { plugins: [tailwindcss()] },
});
