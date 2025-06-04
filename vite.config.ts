import { defineConfig, type UserConfigExport } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig((_ctx): UserConfigExport => ({
  plugins: [react()],
  base: '/Portifolio/',
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    sourcemap: true,
    rollupOptions: {
      input: {
        main: './index.html'
      }
    }
  }
}));
