import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/', // Add this to ensure correct base path handling for routing
  plugins: [react()],
  server: {
    host: true,
  },
});
