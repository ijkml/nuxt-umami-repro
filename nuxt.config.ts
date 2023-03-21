// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  extends: ['nuxt-umami'],
  appConfig: {
    umami: {
      host: 'https://ml-umami.netlify.app',
      id: 'ba4c9424-c4b7-48df-b66d-4213730673e5',
    },
  },
});
