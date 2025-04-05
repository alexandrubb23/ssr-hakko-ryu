import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import svgr from 'vite-plugin-svgr';

// https://vite.dev/config/
export default defineConfig({
  plugins: [svgr(), react()],
  resolve: {
    alias: {
      '@assets': '/src/assets',
      '@components': '/src/components',
      '@hooks': '/src/hooks',
      '@providers': '/src/providers',
      '@utils': '/src/utils',
      '@style': '/src/style',
      '@routes': '/src/routes',
      '@types': '/src/types',
    },
  },
});
