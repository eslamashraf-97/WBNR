// https://nuxt.com/docs/api/configuration/nuxt-config
// @ts-ignore
export default defineNuxtConfig({
  devtools: { enabled: true },
  app: {
    head: {
      title: "WBNR",
      htmlAttrs: {
        dir: "rtl",
      },
      script: [
        {
          src: "https://accounts.google.com/gsi/client",
          async: true,
          defer: true,
        },
        {
          src: "https://connect.facebook.net/en_US/sdk.js",
          async: true,
          defer: true,
        },
      ],
      // meta: [
      //   {
      //     "http-equiv": "Content-Security-Policy",
      //     content: "upgrade-insecure-requests",
      //   },
      // ],
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
  plugins: ['~/plugins/firebase.js']
  // fcm: {
  //   firebaseConfig: {
  //     apiKey: "AIzaSyDs3KvHilOfojecJnTmJifN0KxEOxl5UNI",
  //     authDomain: "myr-group.firebaseapp.com",
  //     projectId: "myr-group",
  //     storageBucket: "myr-group.appspot.com",
  //     messagingSenderId: "1081113478426",
  //     appId: "1:1081113478426:web:f87917fffe1c918d3358a3",
  //     measurementId: "G-02319K2TSP",
  //   },
  // },

  // vuefire: {
  //   config: {
  //     apiKey: "AIzaSyDs3KvHilOfojecJnTmJifN0KxEOxl5UNI",
  //     authDomain: "myr-group.firebaseapp.com",
  //     projectId: "myr-group",
  //     storageBucket: "myr-group.appspot.com",
  //     messagingSenderId: "1081113478426",
  //     appId: "1:1081113478426:web:f87917fffe1c918d3358a3",
  //   },
  // },
});
