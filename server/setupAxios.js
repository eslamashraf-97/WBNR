import axios from "axios";

import { toast } from "vue3-toastify";

const baseURL = "http://85.31.238.244:3000/v1";

const isServer = typeof window === "undefined";

export default function Api() {
  const cookies = useCookie("token");

  const appClient = axios.create({
    baseURL,
    headers: {
      Authorization: `Bearer ${cookies.value}`,
      Accept: "application/json",
      ContentType: "application/json",
      "Accept-Language": "ar",
      "Content-Language": "ar",
    },
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
        if (error.response?.status === 401) {
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

  return appClient;
}
