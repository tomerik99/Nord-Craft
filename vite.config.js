import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig({
  plugins: [react()],
  root: '.', // 👈 gjør at index.html i root brukes
  build: {
    outDir: 'dist',
    rollupOptions: {
      input: path.resolve(__dirname, 'index.html'),
    },
  },
})
