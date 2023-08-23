export default defineNuxtConfig({
  extends: ['nuxt-umami'],
  appConfig: {
    umami: {
      host: 'https://ml-umami.netlify.app',
      id: '82d2c873-ad36-4ea3-9829-e283bc681a81',
      version: 2,
      debug: true,
    },
  },
});
