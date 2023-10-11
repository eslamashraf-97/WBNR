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
      console.log("response success", response);
    },

    onResponseError({ request, response, options }) {
      console.log("response error", response);
    },
    baseURL: "http://85.31.238.244:3000/v1",
    method: "get",
    ...requetOptions,
  });
  return { ...requestArgs };
}
