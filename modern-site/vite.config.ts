import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // Relative base makes the built site work from any subfolder/static host path
  // (e.g., GitHub Pages, cPanel subdirectory, S3 folder).
  base: './',
})
