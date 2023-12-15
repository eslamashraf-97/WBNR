function $api() {
  const { $api } = useNuxtApp();
  return $api;
}

export function api_login(data) {
  return $api().post("customer/login", data);
}

export function api_register(data) {
  return $api().post("customer/signup", data);
}

export function api_submit_verificationCode(data) {
  return $api().post("customer/verify-account", data);
}

export function api_resend_verificationCode(data) {
  return $api().post("customer/resend-verification-otp", data);
}

export function api_get_single_product(id) {
  return $api().get(`customer/products/${id}`);
}

export function api_get_products(params) {
  return $api().get(`customer/products`, {
    params,
  });
}

export function api_add_to_cart(data) {
  return $api().post(`customer/cart`, data);
}

// export const apiAddToCartUrl = "customer/cart";

export const apiLoginUrl = "customer/login";

export const apiRegisterUrl = "customer/signup";

export const apiLoginWithGoogleUrl = "customer/auth/google";

export const apiLoginWithFacebookUrl = "customer/auth/facebook";

export const apiGetSuggestedProductsUrl = "customer/products/featured-products";

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

export function api_place_quick_order(data) {
  return $api().post("customer/orders/quick-order", data);
}

export const apiDeleteCartUrl = "customer/cart"; // cart id

export const apiGetProfileUrl = "customer/profile";

export const apiUpdateProfileUrl = "customer/profile"; // patch

export const apiUploadFilesUrl = "customer/upload/customer-images";

export const apiChangePasswordUrl = "customer/profile/change-password";

export const apiGetReturnsItemsUrl = "customer/orders/orders-items"; // country_id and title

export const apiCreateReturnOrderUrl = "customer/return-orders";

export const submitFcm = "customer/profile/post-token";

export function apiSubmitFcm(data) {
  return $api().post(`customer/profile/post-token`, data);
}

export const apiGetNotificationListUrl = "customer/notifications";

export function apiGetNotificationList() {
  return $api().get(`customer/notifications`);
}

export const apiGetFaqUrl = "faq";
