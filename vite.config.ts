import { defineConfig } from 'vite'
import 'vite-ssg'
import vue from '@vitejs/plugin-vue'
import path from 'path'

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue()],
  base: '/',
  ssgOptions: { dirStyle: 'nested', beastiesOptions: false },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src') // "@" → "src"
    }
  }
})
