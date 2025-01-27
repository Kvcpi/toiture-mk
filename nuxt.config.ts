// nuxt.config.ts
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],
  app: {
    pageTransition: {
      name: 'slide-fade',
      mode: 'out-in',
      duration: 350,
      appear: true
    }
  },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  compatibilityDate: '2025-01-15'
})