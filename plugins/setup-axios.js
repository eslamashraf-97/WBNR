import axios from "axios";

import { toast } from "vue3-toastify";

const baseURL = "https://backend.bazaarmyr.com/v1";

const isServer = typeof window === "undefined";

export default defineNuxtPlugin(() => {
  const appClient = axios.create({
    baseURL,
    headers: {
      Accept: "application/json",
      ContentType: "application/json",
      "Accept-Language": "ar",
      "Content-Language": "ar",
    },
  });

  appClient.interceptors.request.use((con) => {
    const token = useCookie("token").value;
    con.headers["Authorization"] = `Bearer ${token}`;
    return con;
  });

  appClient.interceptors.response.use(
    (response) => {
      if (response?.data?.message) {
        if (!isServer) {
          toast.success(response.data.message);
        }
      }
      return response;
    },
    (error) => {
      if (error.response && !isServer) {
        if (error.response?.data?.message) {
          toast.error(error.response?.data?.message);
        }
        if (
          error.response?.status === 401 &&
          window.location.pathname !== "/auth/register"
        ) {
          localStorage.removeItem("token");
          window.location.pathname = "/auth/login";
        }
      }

      if (isServer && error.response) {
        if (error.response?.status === 401) {
          cookies.value = null;
        }
      }

      return Promise.reject(error.response);
    },
  );
  return {
    provide: {
      api: appClient,
    },
  };
});
