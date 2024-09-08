export default defineNuxtConfig({
  devtools: { enabled: true },
  compatibilityDate: '2024-08-08',

  modules: ['nuxt-umami'],

  umami: {
    enabled: false,
    host: 'https://umami-neon.netlify.app/',
    id: 'b78d83da-5580-4b4a-a32f-95f56ff8e51d',
    proxy: 'cloak',
    useDirective: true,
    logErrors: true,
  },

  css: ['@/assets/reset.css'],
});
