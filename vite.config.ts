import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path';
// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@components': path.resolve(__dirname, 'src/components'),
      '@Pages': path.resolve(__dirname, 'src/Pages'),
      '@contexts': path.resolve(__dirname, 'src/contexts'),
      '@assets': path.resolve(__dirname, 'src/assets'),
      '@config': path.resolve(__dirname, 'src/config'),
      '@layout': path.resolve(__dirname, 'src/layout'),
      '@utils': path.resolve(__dirname, 'src/utils'),
      '@Types': path.resolve(__dirname, 'src/Types'),
      '@services': path.resolve(__dirname, 'src/services'),
      
    }
  } 
})
