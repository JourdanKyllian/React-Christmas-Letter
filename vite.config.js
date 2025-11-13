// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/React-Christmas-Letter/', // <-- ajoute ce chemin
  plugins: [react()],
})
