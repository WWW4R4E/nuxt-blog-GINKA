// nuxt.config.ts
import { defineNuxtConfig } from 'nuxt/config'
export default defineNuxtConfig({
  plugins: [
    '~/plugins/axios.ts',
    '~/plugins/pinia.ts',
  ],

  nitro: {
    devProxy: {
      '/api': {
        target: 'http://localhost:9999',
        changeOrigin: true,
      }
    }
  },

  compatibilityDate: '2024-11-16'
})