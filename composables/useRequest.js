import { toast } from "vue3-toastify";

export default async function ({ url, requetOptions = {} }) {
  const isServer = typeof window === "undefined";

  const requestArgs = await useFetch(url, {
    // request
    onRequest({ request, options }) {
      // get cookies
      const cookies = useCookie("token");

      // headers
      options.headers = options.headers || {};
      options.headers["Authorization"] = `Bearer ${cookies.value}`;
      options.headers["Accept-Language"] = "ar";
      options.headers["Content-Language"] = "ar";
      options.headers["Accept"] = "application/json";
      options.headers["ContentType"] = "application/json";
    },

    onRequestError({ request, options, error }) {
      console.log("request error", error);
    },

    onResponse({ request, response, options }) {
      const responseData = response._data;

      if (responseData && !isServer && options.method !== "GET") {
        if (responseData?.message) {
          toast.success(responseData?.message);
        }
      }
    },

    onResponseError({ response }) {
      const responseData = response._data;

      if (responseData && !isServer) {
        if (responseData?.message) {
          toast.error(responseData?.message);
        }
        if (error.response?.status === 401) {
          // localStorage.removeItem("token");
          // window.location.pathname = "/auth/login";
        }
      }

      // if (isServer && error.response) {
      //   if (error.response?.status === 401) {
      //     cookies.value = null;
      //   }
      // }
    },

    baseURL: "http://85.31.238.244:3000/v1",
    method: "get",
    ...requetOptions,
  });
  return { ...requestArgs };
}
