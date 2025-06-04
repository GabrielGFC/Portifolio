import { defineConfig, type UserConfigExport } from 'vite';
import react from '@vitejs/plugin-react';


// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error

export default defineConfig((_ctx): UserConfigExport => ({
  plugins: [react()],
  base: '/Portifolio/', // barra no final garante que os assets sejam resolvidos corretamente
}));
