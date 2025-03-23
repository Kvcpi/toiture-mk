export default defineNuxtConfig({
  devtools: { enabled: true },
  css: [
    '~/assets/css/main.css',
    '@fortawesome/fontawesome-free/css/all.min.css'
  ],
  app: {
    head: {
      htmlAttrs: {
        lang: 'fr'
      }
    },
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
  plugins: [
    '~/plugins/aos.js',
    '~/plugins/gsap.client.ts'
  ],
  // Configuration correcte pour Vercel
  nitro: {
    preset: 'vercel',
    publicAssets: [{
      dir: 'public',
      maxAge: 60 * 60 * 24 * 365 // Cache pendant 1 an
    }],
    minify: true,
    compressPublicAssets: true
  },
  routeRules: {
    '/': { ssr: true },
    '/realisations/**': { static: true },
  },
  compatibilityDate: '2025-01-15',
  build: {
    transpile: ['gsap']
  },
  experimental: {
    payloadExtraction: false
  },
  ssr: true
});
