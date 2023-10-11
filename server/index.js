import Api from "./setupAxios";

export function api_login(data) {
  return Api().post("customer/login", data);
}

export function api_register(data) {
  return Api().post("customer/signup", data);
}

export function api_suggested_products(data) {
  return Api().get("customer/products");
}

export function api_single_product(id) {
  return Api().get(`customer/products/${id}`);
}

export function api_products(params) {
  return Api().get(`customer/products`, {
    params,
  });
}

export const getSuggestedProductsUrl = "customer/products";

export const getCateoriesUrl = "customer/product-category";

export const getProductsMostSellUrl = "customer/products/most-ordered";

export const getProductsUrl = "customer/products";

export const getProductsNewArrivalsUrl = "customer/products/featured-products";
