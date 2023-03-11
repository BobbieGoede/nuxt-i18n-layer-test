// https://v3.nuxtjs.org/api/configuration/nuxt.config
// test
export default defineNuxtConfig({
  modules: ['@nuxtjs/i18n'],
  i18n: {
    locales: [
      { code: 'en', name: 'English', iso: 'en-US', file: 'en.json' },
      { code: 'nl', name: 'Nederlands', iso: 'nl-NL', file: 'nl.json' },
    ],
    langDir: 'lang',
    strategy: 'prefix',
    defaultLocale: 'en',
  },
});
