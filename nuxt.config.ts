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
        {
          property: "og:title",
          content: "FE-1 Simple - Study Smarter. Pass Confidently.",
        },
        {
          property: "og:description",
          content:
            "The all-in-one FE-1 learning and practice platform built to simplify your exam prep with lessons, quizzes, past questions, and AI-powered feedback..",
        },
        {
          property: "og:image",
          content:
            "https://res.cloudinary.com/dfoavqrms/image/upload/v1768661941/dashboard_img_kiavy6.png",
        },
      ],
      link: [
        {
          rel: "apple-touch-icon",
          sizes: "180x180",
          href: "/apple-touch-icon.png",
        },
        { rel: "icon", sizes: "16x16", href: "/favicon-16x16.png" },
        { rel: "icon", sizes: "32x32", href: "/favicon-32x32.png" },
        { rel: "manifest", sizes: "32x32", href: "/site.webmanifest" },
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
