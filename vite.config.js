import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { reponame } from './config'

// https://vitejs.dev/config/
export default defineConfig({
  base: reponame,
  plugins: [react()],
  define: {
    'process.env': {}
  }
})
