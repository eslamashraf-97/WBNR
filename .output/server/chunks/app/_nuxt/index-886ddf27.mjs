import { u as useCookie } from '../server.mjs';
import axios from 'axios';
import { toast } from 'vue3-toastify';

const baseURL = "http://85.31.238.244:3000/v1";
const isServer = true;
function Api() {
  const cookies = useCookie("token");
  const appClient = axios.create({
    baseURL,
    headers: {
      Authorization: `Bearer ${cookies.value}`,
      Accept: "application/json",
      ContentType: "application/json",
      "Accept-Language": "ar",
      "Content-Language": "ar"
    }
  });
  appClient.interceptors.response.use(
    (response) => {
      var _a;
      if ((_a = response == null ? void 0 : response.data) == null ? void 0 : _a.message)
        ;
      return response;
    },
    (error) => {
      var _a, _b, _c, _d, _e, _f;
      if (error.response && !isServer) {
        if ((_b = (_a = error.response) == null ? void 0 : _a.data) == null ? void 0 : _b.message) {
          toast.error((_d = (_c = error.response) == null ? void 0 : _c.data) == null ? void 0 : _d.message);
        }
        if (((_e = error.response) == null ? void 0 : _e.status) === 401) {
          localStorage.removeItem("token");
          window.location.pathname = "/auth/login";
        }
      }
      if (error.response) {
        if (((_f = error.response) == null ? void 0 : _f.status) === 401) {
          cookies.value = null;
        }
      }
      return Promise.reject(error.response);
    }
  );
  return appClient;
}
function api_single_product(id) {
  return Api().get(`customer/products/${id}`);
}
const getSuggestedProductsUrl = "customer/products";
const getCateoriesUrl = "customer/product-category";
const getProductsMostSellUrl = "customer/products/most-ordered";
const getProductsUrl = "customer/products";
const getProductsNewArrivalsUrl = "customer/products/featured-products";

export { getProductsNewArrivalsUrl as a, getProductsMostSellUrl as b, getProductsUrl as c, api_single_product as d, getSuggestedProductsUrl as e, getCateoriesUrl as g };
//# sourceMappingURL=index-886ddf27.mjs.map
