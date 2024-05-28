import { defineConfig } from 'astro/config';
import react from '@astrojs/react';

import partytown from '@astrojs/partytown';

// https://astro.build/config
export default defineConfig({
  outDir: './dist',
  css: {
    preprocessor: 'sass',
  },
  integrations: [
    react({
      experimentalReactChildren: true,
    }),
    partytown({
      config: {
        forward: ['dataLayer.push'],
      },
    }),
  ],
});
