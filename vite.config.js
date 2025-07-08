import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { twMerge } from 'tailwind-merge'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss(), twMerge()],
})
