import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  base: '/keivoraInternational/',
  plugins: [
    react(),
    tailwindcss(),
  ],optimizeDeps: {
    include: ['tslib', '@react-pdf/renderer']
  }
})