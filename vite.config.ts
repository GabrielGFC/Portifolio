import { defineConfig, type UserConfigExport } from 'vite';
import react from '@vitejs/plugin-react';

// Corrija o base para '/Portifolio/' para garantir que os assets sejam resolvidos corretamente no GitHub Pages
export default defineConfig((_ctx): UserConfigExport => ({
  plugins: [react()],
  base: '/Portifolio/', // Caminho correto para deploy em subdiretório
}));
