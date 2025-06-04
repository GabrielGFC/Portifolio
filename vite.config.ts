import { defineConfig, type UserConfigExport } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
// @ts-ignore
export default defineConfig((_ctx): UserConfigExport => ({
  plugins: [react()],
  base: '/Portifolio/', // Caminho correto para deploy em subdiretório
}));
