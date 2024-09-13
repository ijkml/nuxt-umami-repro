export default defineNuxtConfig({
  devtools: { enabled: true },
  compatibilityDate: '2024-08-08',

  modules: ['nuxt-umami'],

  umami: {
    // enabled: false,
    host: 'https://savory.ijkml.dev/',
    id: '94c6eb8c-646d-41ff-8b5b-a924ce2b4111',
    useDirective: true,
    logErrors: true,
  },

  appConfig: {
    shareUrl: 'https://savory.ijkml.dev/share/xj2RHnDuAD8khsui/localhost',
  },

  css: ['@/assets/reset.css'],
});
