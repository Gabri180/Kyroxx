import { defineConfig } from 'astro/config';
import github from '@astrojs/github';

export default defineConfig({
  // ...otras opciones...
  output: 'static',
  integrations: [github()],
  site: 'https://kairoxx.store', // o tu URL de GitHub Pages si no tienes dominio
});