import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: '/', // Ensure this is set correctly
  plugins: [react()],
  build: {
    outDir: 'dist', // This ensures Vite builds the app into the dist folder
  },
  server: {
    host: true, // This makes the server accessible externally
  },
})
