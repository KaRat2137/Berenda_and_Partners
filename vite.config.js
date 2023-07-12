// vite.config.js
import { resolve } from 'path'
import { defineConfig } from 'vite'

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        polish: resolve(__dirname, 'pl/index.html'),
        english: resolve(__dirname, 'en/index.html'),
      },
    },
  },
})