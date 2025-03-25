export default defineNuxtConfig({
  devtools: { enabled: true },
  css: [
    '~/assets/css/main.css',
    '@fortawesome/fontawesome-free/css/all.min.css'
  ],
  ssr: true,
  app: {
    head: {
      htmlAttrs: {
        lang: 'fr'
      },
      title: 'Toiture Mk - Expert en toiture à Zaventem',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'format-detection', content: 'telephone=no' },
        { name: 'description', content: 'Expert en rénovation, construction et isolation de toiture à Zaventem. Devis gratuit et intervention rapide dans toute la région.' },
        { name: 'theme-color', content: '#f97316' },
        // Open Graph
        { property: 'og:title', content: 'Toiture MK - Expert en toiture à Zaventem' },
        { property: 'og:description', content: 'Expert en rénovation, construction et isolation de toiture à Zaventem. Devis gratuit et intervention rapide dans toute la région.' },
        { property: 'og:type', content: 'website' },
        { property: 'og:image', content: '/images/hero.webp' },
        // Twitter Card
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:title', content: 'Toiture MK - Expert en toiture à Zaventem' },
        { name: 'twitter:description', content: 'Expert en rénovation, construction et isolation de toiture à Zaventem.' }
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        { rel: 'canonical', href: 'https://toiture-mk.be' }
      ]
    },
    pageTransition: { name: 'page', mode: 'out-in' },
    layoutTransition: { name: 'layout', mode: 'out-in' }
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
      routes: [
        '/',
        '/realisations',
        '/privacy'
      ]
    }
  },
  routeRules: {
    '/**': { ssr: true }
  },
  compatibilityDate: '2025-01-15',
  build: {
    transpile: ['gsap']
  },
  experimental: {
    payloadExtraction: false
  }
});
