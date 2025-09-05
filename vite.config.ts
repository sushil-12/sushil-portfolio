import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // Optimize dependencies
  optimizeDeps: {
    exclude: ['fsevents']
  },
  // Build configuration
  build: {
    commonjsOptions: {
      include: [/node_modules/],
      transformMixedEsModules: true
    },
    rollupOptions: {
      external: ['fsevents']
    }
  },
  // Define global variables
  define: {
    global: 'globalThis'
  }
})
