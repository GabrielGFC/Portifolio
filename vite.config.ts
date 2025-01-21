import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/', // use o nome correto do repositório
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});