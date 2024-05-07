export default defineNuxtPlugin({
  name: 'test-ssr-hook',
  hooks: {
    'page:finish': function () {
      incrementCount();
    },
  },
});
