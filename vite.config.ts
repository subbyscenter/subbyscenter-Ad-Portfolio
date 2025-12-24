import { defineConfig } from 'vite';

export default defineConfig({
  base: '/',
  build: {
    outDir: 'dist',
    rollupOptions: {
      input: './index.html'
    }
  },
  define: {
    // Cloudflare Environment Variables 사용
    'process.env.API_KEY': JSON.stringify(process.env.VITE_API_KEY || '')
  }
});
