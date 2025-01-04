import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: '/',
  plugins: [react()],
  build: {
    outDir: 'dist',
    rollupOptions: {
      input: '/src/main.jsx', // Ensure Vite knows where to start
    },
  },
  server:{
    host: true,
  },
})
