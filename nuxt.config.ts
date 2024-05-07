export default defineNuxtConfig({
  extends: ['nuxt-umami'],
  appConfig: {
    umami: {
      // add options here if you like
    },
  },
  ssr: false,
  css: ['@/assets/reset.css'],
});
