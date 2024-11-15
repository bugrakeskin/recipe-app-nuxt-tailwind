// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  devtools: { enabled: true },

  future: {
    compatibilityVersion: 4,
  },

  // To re-enable _all_ Nuxt v3 behaviour, set the following options:
  modules: [
    "@nuxtjs/tailwindcss",
    "@nuxt/icon",
    "@nuxtjs/google-fonts",
    "@nuxt/image",
  ],

  googleFonts: {
    families: {
      Montserrat: true,
    },
  },
  image: {
    domains: ["https://cdn.dummyjson.com"],
  },
});
