
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  define: {
    // Vercel-dagi API_KEY ni brauzerga o'tkazish
    'process.env.API_KEY': JSON.stringify(process.env.API_KEY)
  }
});

