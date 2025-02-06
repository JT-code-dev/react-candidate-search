
// https://vitejs.dev/config/
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  preview: {
    allowedHosts: ['jt-react-candidate-search.onrender.com'],
  },
  plugins: [react()],
  server: {
    host: '0.0.0.0', // Allows Render to detect the server
    port: 3000,      // Change to 10000 if using Render's default
    strictPort: true, // Ensures the exact port is used
  
  }
});

