import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import react from '@astrojs/react';
import sharp from 'sharp';

import icon from 'astro-icon';

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), react(), icon()],
  assets: {
    addSharpInstructions: true,
    services: [
      {
        name: 'sharp',
        constructor: sharp,
      },
    ],
  },
  site: "https://medmarvelsolutions.com",
});