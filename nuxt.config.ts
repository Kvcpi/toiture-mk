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
  nitro: {
    preset: 'vercel',
    prerender: {
      crawlLinks: true,
      routes: ['/']
    }
  },
  routeRules: {
    '/': { prerender: true },
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
