import { defineConfig } from 'astro/config';
import github from '@astrojs/github-pages';

export default defineConfig({
  output: 'static',
  site: 'https://kairoxx.store',
  integrations: [github()],
});