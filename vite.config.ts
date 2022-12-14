/// <reference types="vitest" />

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tsconfigPaths from 'vite-tsconfig-paths'
// https://vitejs.dev/config/


export default defineConfig({
  plugins: [react(),tsconfigPaths()],
  test: {
    environment: 'jsdom',
    globals: true,
    include: ['src/**/*.{test,spec}.{js,mjs,cjs,ts,mts,cts,jsx,tsx}'],
    setupFiles: 'jest.setup.js',
    
  },
  resolve: {
    alias: [{ find: '@', replacement: '/src' }],
   },
})
