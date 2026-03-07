import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
import path from 'path';

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'client/src'),
      '@shared': path.resolve(__dirname, '../Dsac-Website_Secondary/shared'),
      '@assets': path.resolve(__dirname, '../Dsac-Website_Secondary/attached_assets'),
    },
  },
  css: {
    postcss: {
      plugins: [],
    },
  },
  root: path.resolve(__dirname, 'client'),
  build: {
    outDir: "dist",
    emptyOutDir: true,
  },
  server: {
    host: 'localhost',
    port: 5000,
    strictPort: true,
    proxy: {
      '/api': {
        target: 'http://127.0.0.1:3001',
        changeOrigin: true,
      },
    },
    fs: {
      strict: true,
      deny: ['**/.*'],
    },
  },
  base: process.env.VITE_BASE_PATH || '/',
});
