import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/Portifolio/',
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    sourcemap: true,
    rollupOptions: {
      input: 'index.html',
      output: {
        manualChunks: undefined
      }
    }
  },
  resolve: {
    alias: {
      '@': '/src'
    }
  }
});
