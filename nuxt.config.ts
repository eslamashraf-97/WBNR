// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  app: {
    head: {
      title: "WBNR",
      htmlAttrs: {
        dir: "rtl",
      },
      meta: [
        {
          "http-equiv": "Content-Security-Policy",
          content: "upgrade-insecure-requests",
        },
      ],
    },
  },
  css: ["~/assets/styles/main.scss"],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  modules: ["nuxt-icon", "nuxt-swiper"],
});
