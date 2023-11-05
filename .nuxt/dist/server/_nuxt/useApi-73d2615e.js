import "vue";
import "hookable";
import { u as useFetch } from "./index-f05587d3.js";
import { b as useCookie } from "../server.mjs";
import "devalue";
import "defu";
import "destr";
import "klona";
import { toast } from "vue3-toastify";
function useApi({ url, requestOptions = {} }) {
  const isServer = true;
  async function fire(data) {
    const requestArgs = await useFetch(url, {
      // request
      onRequest({ request, options }) {
        const cookies = useCookie("token");
        options.headers = options.headers || {};
        options.headers["Authorization"] = `Bearer ${cookies.value}`;
        options.headers["Accept-Language"] = "ar";
        options.headers["Content-Language"] = "ar";
        options.headers["Accept"] = "application/json";
        options.headers["ContentType"] = "application/json";
      },
      onRequestError({ request, options, error: error2 }) {
        console.log("request error", error2);
      },
      onResponse({ request, response, options }) {
        if (response.ok) {
          const responseData = response._data;
          if (responseData && !isServer && options.method !== "GET") {
            if (responseData == null ? void 0 : responseData.message) {
              toast.success(responseData == null ? void 0 : responseData.message);
            }
          }
        }
      },
      onResponseError({ response }) {
        var _a;
        const responseData = response._data;
        if (responseData && !isServer) {
          if (responseData == null ? void 0 : responseData.message) {
            toast.error(responseData == null ? void 0 : responseData.message);
          }
          if (((_a = error.response) == null ? void 0 : _a.status) === 401)
            ;
        }
      },
      baseURL: "http://85.31.238.244:3000/v1",
      method: "get",
      body: JSON.stringify(data),
      ...requestOptions
    }, "$36vV6Sn5jU");
    return { ...requestArgs };
  }
  return { fire };
}
export {
  useApi as u
};
//# sourceMappingURL=useApi-73d2615e.js.map
