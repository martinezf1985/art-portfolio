import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'
import tailwindcss from 'tailwindcss'
import autoprefixer from 'autoprefixer'

export default defineConfig({
  plugins: [react()],
  css: {
    postcss: {
      plugins: [
        tailwindcss(), // Tailwind CSS
        autoprefixer(), // Autoprefixer
      ],
    },
  },
  resolve: {
    alias: {
      'slick-carousel/slick/slick.css': path.resolve(__dirname, 'node_modules/slick-carousel/slick/slick.css'),
      'slick-carousel/slick/slick-theme.css': path.resolve(__dirname, 'node_modules/slick-carousel/slick/slick-theme.css')
    }
  }
})