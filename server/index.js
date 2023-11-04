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

export const apiLoginUrl = "customer/login";

export const apiRegisterUrl = "customer/signup";

export const apiLoginWithGoogleUrl = "customer/auth/google";

export const apiLoginWithFacebookUrl = "customer/auth/facebook";

export const apiGetSuggestedProductsUrl = "customer/products";

export const apiGetCateoriesUrl = "customer/product-category";

export const apiGetSubCateoriesUrl = "customer/product-category"; // :id

export const apiGetProductsMostSellUrl = "customer/products/most-ordered";

export const apiGetProductsUrl = "customer/products";

export const apiGetProductsNewArrivalsUrl =
  "customer/products/featured-products";

export const apiGetSingleProductUrl = "customer/products";

export const apiAddToCartUrl = "customer/cart";

export const apiGetCartUrl = "customer/cart";

export const apiGetCartLengthUrl = "customer/cart/length";

export const apiGetCountriesUrl = "customer/countries";

export const apiDeleteCartItem = "customer/cart/cart-item"; // /:id

export const apiDeleteCart = "customer/cart"; // /:id

export const apiGetGov = "customer/governorates"; // /:country_id

export const apiPlaceOrderUrl = "customer/orders/place"; // :cart_id

export const apiAddDestinationUrl = "customer/cart/apply-destination";

export const apiGetSavedProductsUrl = "customer/favorite-products"; //? country id

export const apiSaveProductUrl = "customer/favorite-products"; // :product_id

export const apiRemoveProductUrl = "customer/favorite-products"; // :product_id

export const apiGetOrdersUrl = "customer/orders"; // /:country_id

export const apiGetCustomerStatsUrl = "customer/customer-statistic/my"; // :country_id

export const apiGetMyWalletsUrl = "customer/wallet/my-wallets";

export const apiGetWithdrawUrl = "customer/wallet/request/withdraw";

export const apiCreateWithdrawUrl = "customer/wallet/request/withdraw"; // id

export const apiPlaceQuickOrderUrl = "customer/orders/quick-order";

export const apiDeleteCartUrl = "customer/cart"; // cart id

export const apiGetProfileUrl = "customer/profile";

export const apiUpdateProfileUrl = "customer/profile"; // patch

export const apiUploadFilesUrl = "customer/upload/customer-images";

export const apiChangePasswordUrl = "customer/profile/change-password";

export const apiGetReturnsItemsUrl = "customer/orders/orders-items"; // country_id and title

export const apiCreateReturnOrderUrl = "customer/return-orders";
