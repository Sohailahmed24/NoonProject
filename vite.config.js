/* import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  server:{
   proxy:{
    '/api': {
        target: 'https://food.noon.com/_svc/mp-food-api-catalog/api/',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ''),
        secure: false,
      },
      '/guest': {
        target: 'https://food.noon.com/_svc/mp-food-api-mpnoon/consumer/restaurant/outlet/details/guest/',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/guest/, ''),
        secure: false,
        followRedirects: true, // Follow redirects
      },
   },
  },
  plugins: [react()],
})
 */


import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/', // Base public path when served in production
  plugins: [react()], // Plugins to use, in this case, React
  server: {
    proxy: {
      '/api': {
        target: import.meta.env.VITE_API_BASE_URL,
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ''),
      },
    },
  },
  build: {
    outDir: 'dist', // Output directory for the production build
    sourcemap: true, // Generate source maps for debugging
  },
});
