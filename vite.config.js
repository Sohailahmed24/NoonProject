import { defineConfig } from 'vite'
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
