import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

// TODO: cambia "site" por tu dominio final (ej. https://adaptoseguros.com.sv)
export default defineConfig({
  site: 'https://adaptoseguros.com.sv',
  integrations: [sitemap()],
  vite: {
    plugins: [tailwindcss()],
  },
});
