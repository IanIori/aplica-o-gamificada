import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  root: 'frontend/', // Define a raiz do projeto como a pasta frontend
  build: {
    outDir: '../backend/public', // Define a saída para a pasta pública do backend
    emptyOutDir: true, // Esvazia a pasta de saída antes de construir
  },
})
