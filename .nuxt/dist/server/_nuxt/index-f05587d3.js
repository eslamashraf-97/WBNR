import { ref, shallowRef, toRef, getCurrentInstance, onServerPrefetch, unref, computed, reactive } from "vue";
import { hash } from "ohash";
import { e as asyncDataDefaults, d as useNuxtApp, c as createError, f as fetchDefaults, g as useRequestFetch } from "../server.mjs";
import "hookable";
import "destr";
import "devalue";
import "defu";
import "klona";
import "vue3-toastify";
function useAsyncData(...args) {
  var _a;
  const autoKey = typeof args[args.length - 1] === "string" ? args.pop() : void 0;
  if (typeof args[0] !== "string") {
    args.unshift(autoKey);
  }
  let [key, handler, options = {}] = args;
  if (typeof key !== "string") {
    throw new TypeError("[nuxt] [asyncData] key must be a string.");
  }
  if (typeof handler !== "function") {
    throw new TypeError("[nuxt] [asyncData] handler must be a function.");
  }
  const nuxt = useNuxtApp();
  const getDefault = () => null;
  const getDefaultCachedData = () => nuxt.isHydrating ? nuxt.payload.data[key] : nuxt.static.data[key];
  options.server = options.server ?? true;
  options.default = options.default ?? getDefault;
  options.getCachedData = options.getCachedData ?? getDefaultCachedData;
  options.lazy = options.lazy ?? false;
  options.immediate = options.immediate ?? true;
  options.deep = options.deep ?? asyncDataDefaults.deep;
  const hasCachedData = () => ![null, void 0].includes(options.getCachedData(key));
  if (!nuxt._asyncData[key] || !options.immediate) {
    (_a = nuxt.payload._errors)[key] ?? (_a[key] = null);
    const _ref = options.deep ? ref : shallowRef;
    nuxt._asyncData[key] = {
      data: _ref(options.getCachedData(key) ?? options.default()),
      pending: ref(!hasCachedData()),
      error: toRef(nuxt.payload._errors, key),
      status: ref("idle")
    };
  }
  const asyncData = { ...nuxt._asyncData[key] };
  asyncData.refresh = asyncData.execute = (opts = {}) => {
    if (nuxt._asyncDataPromises[key]) {
      if (opts.dedupe === false) {
        return nuxt._asyncDataPromises[key];
      }
      nuxt._asyncDataPromises[key].cancelled = true;
    }
    if ((opts._initial || nuxt.isHydrating && opts._initial !== false) && hasCachedData()) {
      return Promise.resolve(options.getCachedData(key));
    }
    asyncData.pending.value = true;
    asyncData.status.value = "pending";
    const promise = new Promise(
      (resolve, reject) => {
        try {
          resolve(handler(nuxt));
        } catch (err) {
          reject(err);
        }
      }
    ).then((_result) => {
      if (promise.cancelled) {
        return nuxt._asyncDataPromises[key];
      }
      let result = _result;
      if (options.transform) {
        result = options.transform(_result);
      }
      if (options.pick) {
        result = pick(result, options.pick);
      }
      asyncData.data.value = result;
      asyncData.error.value = null;
      asyncData.status.value = "success";
    }).catch((error) => {
      if (promise.cancelled) {
        return nuxt._asyncDataPromises[key];
      }
      asyncData.error.value = error;
      asyncData.data.value = unref(options.default());
      asyncData.status.value = "error";
    }).finally(() => {
      if (promise.cancelled) {
        return;
      }
      asyncData.pending.value = false;
      nuxt.payload.data[key] = asyncData.data.value;
      if (asyncData.error.value) {
        nuxt.payload._errors[key] = createError(asyncData.error.value);
      }
      delete nuxt._asyncDataPromises[key];
    });
    nuxt._asyncDataPromises[key] = promise;
    return nuxt._asyncDataPromises[key];
  };
  const initialFetch = () => asyncData.refresh({ _initial: true });
  const fetchOnServer = options.server !== false && nuxt.payload.serverRendered;
  if (fetchOnServer && options.immediate) {
    const promise = initialFetch();
    if (getCurrentInstance()) {
      onServerPrefetch(() => promise);
    } else {
      nuxt.hook("app:created", async () => {
        await promise;
      });
    }
  }
  const asyncDataPromise = Promise.resolve(nuxt._asyncDataPromises[key]).then(() => asyncData);
  Object.assign(asyncDataPromise, asyncData);
  return asyncDataPromise;
}
function pick(obj, keys) {
  const newObj = {};
  for (const key of keys) {
    newObj[key] = obj[key];
  }
  return newObj;
}
function useFetch(request, arg1, arg2) {
  var _a;
  const [opts = {}, autoKey] = typeof arg1 === "string" ? [{}, arg1] : [arg1, arg2];
  const _request = computed(() => {
    let r = request;
    if (typeof r === "function") {
      r = r();
    }
    return unref(r);
  });
  const _key = opts.key || hash([autoKey, ((_a = unref(opts.method)) == null ? void 0 : _a.toUpperCase()) || "GET", unref(opts.baseURL), typeof _request.value === "string" ? _request.value : "", unref(opts.params || opts.query), unref(opts.headers)]);
  if (!_key || typeof _key !== "string") {
    throw new TypeError("[nuxt] [useFetch] key must be a string: " + _key);
  }
  if (!request) {
    throw new Error("[nuxt] [useFetch] request is missing.");
  }
  const key = _key === autoKey ? "$f" + _key : _key;
  if (!opts.baseURL && typeof _request.value === "string" && _request.value.startsWith("//")) {
    throw new Error('[nuxt] [useFetch] the request URL must not start with "//".');
  }
  const {
    server,
    lazy,
    default: defaultFn,
    transform,
    pick: pick2,
    watch,
    immediate,
    getCachedData,
    deep,
    ...fetchOptions
  } = opts;
  const _fetchOptions = reactive({
    ...fetchDefaults,
    ...fetchOptions,
    cache: typeof opts.cache === "boolean" ? void 0 : opts.cache
  });
  const _asyncDataOptions = {
    server,
    lazy,
    default: defaultFn,
    transform,
    pick: pick2,
    immediate,
    getCachedData,
    deep,
    watch: watch === false ? [] : [_fetchOptions, _request, ...watch || []]
  };
  let controller;
  const asyncData = useAsyncData(key, () => {
    var _a2;
    (_a2 = controller == null ? void 0 : controller.abort) == null ? void 0 : _a2.call(controller);
    controller = typeof AbortController !== "undefined" ? new AbortController() : {};
    const isLocalFetch = typeof _request.value === "string" && _request.value.startsWith("/");
    let _$fetch = opts.$fetch || globalThis.$fetch;
    if (!opts.$fetch && isLocalFetch) {
      _$fetch = useRequestFetch();
    }
    return _$fetch(_request.value, { signal: controller.signal, ..._fetchOptions });
  }, _asyncDataOptions);
  return asyncData;
}
const apiGetSuggestedProductsUrl = "customer/products";
const apiGetCateoriesUrl = "customer/product-category";
const apiGetSubCateoriesUrl = "customer/product-category";
const apiGetProductsMostSellUrl = "customer/products/most-ordered";
const apiGetProductsUrl = "customer/products";
const apiGetProductsNewArrivalsUrl = "customer/products/featured-products";
const apiGetSingleProductUrl = "customer/products";
const apiAddToCartUrl = "customer/cart";
const apiGetCartUrl = "customer/cart";
const apiGetCartLengthUrl = "customer/cart/length";
const apiGetCountriesUrl = "customer/countries";
const apiDeleteCartItem = "customer/cart/cart-item";
const apiGetGov = "customer/governorates";
const apiPlaceOrderUrl = "customer/orders/place";
const apiAddDestinationUrl = "customer/cart/apply-destination";
const apiGetSavedProductsUrl = "customer/favorite-products";
const apiSaveProductUrl = "customer/favorite-products";
const apiRemoveProductUrl = "customer/favorite-products";
const apiGetOrdersUrl = "customer/orders";
const apiGetCustomerStatsUrl = "customer/customer-statistic/my";
const apiGetMyWalletsUrl = "customer/wallet/my-wallets";
const apiGetWithdrawUrl = "customer/wallet/request/withdraw";
const apiPlaceQuickOrderUrl = "customer/orders/quick-order";
const apiDeleteCartUrl = "customer/cart";
const apiGetProfileUrl = "customer/profile";
const apiGetReturnsItemsUrl = "customer/orders/orders-items";
export {
  apiRemoveProductUrl as A,
  apiGetCartUrl as a,
  apiGetCartLengthUrl as b,
  apiDeleteCartUrl as c,
  apiDeleteCartItem as d,
  apiAddToCartUrl as e,
  apiGetGov as f,
  apiPlaceQuickOrderUrl as g,
  apiPlaceOrderUrl as h,
  apiAddDestinationUrl as i,
  apiGetCustomerStatsUrl as j,
  apiGetReturnsItemsUrl as k,
  apiGetOrdersUrl as l,
  apiGetMyWalletsUrl as m,
  apiGetWithdrawUrl as n,
  apiGetCateoriesUrl as o,
  apiGetProductsNewArrivalsUrl as p,
  apiGetProductsMostSellUrl as q,
  apiGetProductsUrl as r,
  apiGetSingleProductUrl as s,
  apiGetProfileUrl as t,
  useFetch as u,
  apiGetSavedProductsUrl as v,
  apiGetSuggestedProductsUrl as w,
  apiGetSubCateoriesUrl as x,
  apiGetCountriesUrl as y,
  apiSaveProductUrl as z
};
//# sourceMappingURL=index-f05587d3.js.map
