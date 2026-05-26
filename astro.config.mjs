// @ts-check
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';
import { BUSINESS } from './src/config/business.ts';

export default defineConfig({
  site: BUSINESS.domain,
  output: 'static',
  integrations: [react(), sitemap()],
});
