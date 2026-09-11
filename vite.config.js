import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
  server: {
    watch: {
      ignored: [
        '**/src/assets/_canela-preview/**',
        '**/src/assets/canela-font-family.zip',
        '**/.design-audit/**',
      ],
    },
  },
})
