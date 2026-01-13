// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: false,
  app: {
    head: {
      title: "FE-1 Simple",
      meta: [
        { charset: "utf-8" },
        {
          name: "viewport",
          content:
            "width=device-width, initial-scale=1, user-scale=0,maximum-scale=1",
        },
      ],
    },
  },
  css: ["~/assets/css/main.css"],
  modules: ["@nuxt/ui", "@pinia/nuxt"],
  ui: {
    colorMode: false,
  },
  runtimeConfig: {
    public: {
      app_base_url: process.env.BACKENDAPI,
    },
  },
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
});
