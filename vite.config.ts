import { defineConfig, type UserConfigExport } from 'vite';
import react from '@vitejs/plugin-react';

// Certifique-se que o base está correto para o GitHub Pages
export default defineConfig((_ctx): UserConfigExport => ({
  plugins: [react()],
  base: '/Portifolio/', // Caminho correto para deploy em subdiretório
}));
