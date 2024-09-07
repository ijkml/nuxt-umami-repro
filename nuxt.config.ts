export default defineNuxtConfig({
  devtools: { enabled: true },
  compatibilityDate: '2024-08-08',

  modules: ['nuxt-umami'],

  umami: {
    enabled: false,
    host: 'https://savory.vercel.app/',
    id: '84cc2d28-8689-4df0-b575-2202e34a75aa',
    proxy: 'cloak',
    useDirective: true,
    logErrors: true,
  },

  css: ['@/assets/reset.css'],
});
