import Vue3Toasity, { toast } from "vue3-toastify";

import "vue3-toastify/dist/index.css";

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(Vue3Toasity);

  return {
    provide: {
      toast: toast,
    },
  };
});
