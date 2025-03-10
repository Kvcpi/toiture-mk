import { defineNuxtConfig } from "nuxt/config";

export default defineNuxtConfig({
  devtools: { enabled: true },
  css: [
    '~/assets/css/main.css',
    '@fortawesome/fontawesome-free/css/all.min.css'
  ],
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
  // Configuration correcte pour Vercel
  nitro: {
    preset: 'vercel',
    publicAssets: [{
      dir: 'public',
      maxAge: 60 * 60 * 24 * 365 // Cache pendant 1 an
    }]
  },
  routeRules: {
    '/realisations/**': { static: true },
  },
  compatibilityDate: '2025-01-15'
});