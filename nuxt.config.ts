import { defineNuxtConfig } from "nuxt/config";

// nuxt.config.ts
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: [
    '~/assets/css/main.css',
    '@fortawesome/fontawesome-free/css/all.min.css' // Ajout de FontAwesome installé localement
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
  compatibilityDate: '2025-01-15',
  
  // Ajout du module color-mode
  modules: ['@nuxtjs/color-mode'],
  colorMode: {
    preference: 'system', // default value of $colorMode.preference
    fallback: 'light', // fallback value if not system preference found
    hid: 'nuxt-color-mode-script',
    globalName: '__NUXT_COLOR_MODE__',
    componentName: 'ColorScheme',
    classPrefix: '',
    classSuffix: '-mode',
    storage: 'localStorage', // or 'sessionStorage' or 'cookie'
    storageKey: 'nuxt-color-mode'
  }
});
