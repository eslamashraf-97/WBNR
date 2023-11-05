import { b as buildAssetsURL } from '../../renderer.mjs';
import { _ as __nuxt_component_0 } from './Title-23cab648.mjs';
import { _ as __nuxt_component_7 } from './Loading-b5ab98f2.mjs';
import { _ as __nuxt_component_3$1 } from './PrimaryButton-3e0b2318.mjs';
import { withAsyncContext, ref, mergeProps, unref, useSSRContext } from 'file://D:/WBNR/WBNR/node_modules/vue/index.mjs';
import { a as navigateTo } from '../server.mjs';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrInterpolate, ssrRenderAttr } from 'file://D:/WBNR/WBNR/node_modules/vue/server-renderer/index.mjs';
import { _ as __nuxt_component_1 } from './LoaderButton-81aa4875.mjs';
import { _ as __nuxt_component_0$1 } from './Input-1e7796d8.mjs';
import { u as useCountries } from './useCountries-716a6161.mjs';
import { u as useCartLength } from './useCartLength-2a51b0ba.mjs';
import { u as useRequest } from './useRequest-d66ec7ae.mjs';
import { u as useApi } from './useApi-73d2615e.mjs';
import { a as apiGetCartUrl, b as apiGetCartLengthUrl, c as apiDeleteCartUrl, d as apiDeleteCartItem, e as apiAddToCartUrl } from './index-f05587d3.mjs';
import 'file://D:/WBNR/WBNR/node_modules/vue-bundle-renderer/dist/runtime.mjs';
import 'file://D:/WBNR/WBNR/node_modules/h3/dist/index.mjs';
import 'file://D:/WBNR/WBNR/node_modules/devalue/index.js';
import 'file://D:/WBNR/WBNR/node_modules/ufo/dist/index.mjs';
import 'file://D:/WBNR/WBNR/node_modules/@unhead/ssr/dist/index.mjs';
import '../../nitro/nitro-prerenderer.mjs';
import 'file://D:/WBNR/WBNR/node_modules/ofetch/dist/node.mjs';
import 'file://D:/WBNR/WBNR/node_modules/destr/dist/index.mjs';
import 'file://D:/WBNR/WBNR/node_modules/unenv/runtime/fetch/index.mjs';
import 'file://D:/WBNR/WBNR/node_modules/hookable/dist/index.mjs';
import 'file://D:/WBNR/WBNR/node_modules/scule/dist/index.mjs';
import 'file://D:/WBNR/WBNR/node_modules/klona/dist/index.mjs';
import 'file://D:/WBNR/WBNR/node_modules/defu/dist/defu.mjs';
import 'file://D:/WBNR/WBNR/node_modules/ohash/dist/index.mjs';
import 'file://D:/WBNR/WBNR/node_modules/unstorage/dist/index.mjs';
import 'file://D:/WBNR/WBNR/node_modules/unstorage/drivers/fs.mjs';
import 'file://D:/WBNR/WBNR/node_modules/unstorage/drivers/memory.mjs';
import 'file://D:/WBNR/WBNR/node_modules/unstorage/drivers/lru-cache.mjs';
import 'file://D:/WBNR/WBNR/node_modules/unstorage/drivers/fs-lite.mjs';
import 'file://D:/WBNR/WBNR/node_modules/radix3/dist/index.mjs';
import 'node:fs';
import 'node:url';
import 'file://D:/WBNR/WBNR/node_modules/pathe/dist/index.mjs';
import 'file://D:/WBNR/WBNR/node_modules/unhead/dist/index.mjs';
import 'file://D:/WBNR/WBNR/node_modules/@unhead/shared/dist/index.mjs';
import './nuxt-link-7fd3a776.mjs';
import './Icon-b69f18a8.mjs';
import './state-df47e21c.mjs';
import './config-b815dc90.mjs';
import 'file://D:/WBNR/WBNR/node_modules/@iconify/vue/dist/offline.mjs';
import 'file://D:/WBNR/WBNR/node_modules/@iconify/vue/dist/iconify.mjs';
import 'file://D:/WBNR/WBNR/node_modules/unctx/dist/index.mjs';
import 'file://D:/WBNR/WBNR/node_modules/vue-router/dist/vue-router.node.mjs';
import 'file://D:/WBNR/WBNR/node_modules/cookie-es/dist/index.mjs';
import 'file://D:/WBNR/WBNR/node_modules/vue3-toastify/dist/index.mjs';

const _sfc_main$2 = {
  __name: "Aside",
  __ssrInlineRender: true,
  props: ["details"],
  setup(__props) {
    const cartDetails = [
      {
        title: "\u0639\u062F\u062F \u0627\u0644\u0645\u0646\u062A\u062C\u0627\u062A \u0641\u064A \u0627\u0644\u0639\u0631\u0628\u0629:",
        key: "itemsInCart"
      },
      {
        title: "\u0627\u062C\u0645\u0627\u0644\u064A \u0633\u0639\u0631 \u0627\u0644\u0628\u064A\u0639:",
        key: "final_price",
        coins: "\u062C.\u0645"
      },
      {
        title: "\u0627\u062C\u0645\u0627\u0644\u064A \u0627\u0644\u0631\u0628\u062D:",
        key: "price",
        coins: "\u062C.\u0645"
      },
      {
        title: "\u0627\u0644\u0636\u0631\u064A\u0628\u0629:",
        key: "tax_percentage",
        coins: "\u062C.\u0645"
      },
      {
        title: "\u0627\u0644\u0631\u0628\u062D \u0628\u0639\u062F \u0627\u0644\u0636\u0631\u064A\u0628\u0629:",
        key: "tax_amount",
        coins: "\u062C.\u0645"
      }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_shared_buttons_primary_button = __nuxt_component_3$1;
      _push(`<aside${ssrRenderAttrs(mergeProps({ class: "flex flex-col gap-7 2xl:w-[29.25rem] p-9 bg-white border border-gray-200 rounded-3xl dashboard-aside h-fit shadow-main" }, _attrs))}>`);
      if (__props.details) {
        _push(`<!--[-->`);
        ssrRenderList(cartDetails, (item, index) => {
          _push(`<div class="flex items-center justify-between"><h5 class="text-2xl text-gray-700 font-normal">${ssrInterpolate(item.title)}</h5><h5 class="text-2xl text-gray-500 font-normal"><span>${ssrInterpolate(__props.details[item.key])} ${ssrInterpolate(item.coins)}</span></h5></div>`);
        });
        _push(`<!--]-->`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="mt-9">`);
      _push(ssrRenderComponent(_component_shared_buttons_primary_button, {
        "submit-title": "\u0627\u0637\u0644\u0628 \u0627\u0644\u0627\u0646",
        class: "w-[14.5rem] h-[4.1875rem]",
        onClick: ($event) => ("navigateTo" in _ctx ? _ctx.navigateTo : unref(navigateTo))(`/checkout?cart=${__props.details.id}`)
      }, null, _parent));
      _push(`</div></aside>`);
    };
  }
};
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/cart/Aside.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_2 = _sfc_main$2;
const _imports_0 = "" + buildAssetsURL("delete-icon.41c3d8bb.svg");
const _sfc_main$1 = {
  __name: "Products",
  __ssrInlineRender: true,
  props: ["products", "clearCartIsPending"],
  emits: [
    "increaseQuantity",
    "decreaseQuantity",
    "deleteCartItem",
    "changePrice",
    "changeQuantity",
    "clearCart"
  ],
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_shared_loders_loader_button = __nuxt_component_1;
      const _component_shared_form_input = __nuxt_component_0$1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "table w-full overflow-auto" }, _attrs))}><table class="w-full"><thead><tr><th class="text-2xl text-gray-800 font-normal leading-normal"> \u0627\u0644\u0645\u0646\u062A\u062C </th><th class="text-2xl text-gray-800 font-normal leading-normal"> \u0627\u0644\u0633\u0639\u0631 </th><th class="text-2xl text-gray-800 font-normal leading-normal"> \u0633\u0639\u0631 \u0627\u0644\u0628\u064A\u0639 </th><th class="text-2xl text-gray-800 font-normal leading-normal"> \u0627\u0644\u0643\u0645\u064A\u0629 </th><th class="text-2xl text-gray-800 font-normal leading-normal"> \u0627\u0644\u0631\u0628\u062D </th><th class="text-2xl text-error-400 font-normal leading-normal cursor-pointer whitespace-nowrap"${ssrRenderAttr("aria-disabled", __props.clearCartIsPending)}>`);
      if (__props.clearCartIsPending) {
        _push(`<span>`);
        _push(ssrRenderComponent(_component_shared_loders_loader_button, null, null, _parent));
        _push(`</span>`);
      } else {
        _push(`<span> \u062D\u0630\u0641 \u0627\u0644\u0643\u0644 </span>`);
      }
      _push(`</th></tr></thead><tbody><!--[-->`);
      ssrRenderList(__props.products, (product, index) => {
        _push(`<tr><td class="whitespace-nowrap min-w-fit"><div class="flex items-center gap-[2.25rem]"><img${ssrRenderAttr("src", product.product.featured_image)}${ssrRenderAttr("alt", product.product.title_ar)} class="w-[4.6875rem] h-[4.6875rem] rounded-[0.5rem]"><h5 class="text-2xl text-gray-700 font-normal leading-normal">${ssrInterpolate(product.product.title_ar)}</h5></div></td><td class="text-2xl text-gray-700 font-normal leading-normal">${ssrInterpolate(product.product.price)}</td><td><div class="relative w-[10.75rem]">`);
        _push(ssrRenderComponent(_component_shared_form_input, {
          type: "text",
          class: "!w-[10.75rem] h-[3.3125rem] bg-transparent text-xl",
          onInput: ($event) => _ctx.$emit("changePrice", $event.target.value, product),
          value: product.final_price
        }, null, _parent));
        _push(`<div class="absolute top-[1px] left-[1px] bottom-[1px] flex flex-col bg-white rounded-[11px]"><div class="w-[3.5625rem] flex-1 border-s border-s-gray-200 flex items-center justify-center text-xl text-gray-300 font-bold"> \u062C.\u0645 </div></div></div></td><td><div class="relative w-[6rem]">`);
        _push(ssrRenderComponent(_component_shared_form_input, {
          type: "text",
          class: "w-[6rem] h-[3.3125rem] bg-transparent text-xl",
          onInput: ($event) => _ctx.$emit("changeQuantity", $event.target.value, product),
          value: product.quantity
        }, null, _parent));
        _push(`<div class="absolute top-[1px] left-[1px] bottom-[1px] flex flex-col items-center bg-white rounded-[11px]"><button type="button" class="w-[24px] flex-1 border-b border-b-gray-200 border-s border-s-gray-200"> + </button><button type="button" class="w-[24px] flex-1 border-s border-s-gray-200"> - </button></div></div></td><td class="text-2xl text-primary-300 font-normal leading-normal">${ssrInterpolate((product.final_price - product.product.price + product.product.minCommission) * product.quantity)}</td><td><button type="button"><img${ssrRenderAttr("src", _imports_0)} alt="delete" class=""></button></td></tr>`);
      });
      _push(`<!--]--></tbody></table></div>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/cart/Products.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_3 = _sfc_main$1;
const _sfc_main = {
  __name: "cart",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const { selectedCountry } = useCountries();
    const { setCartLength, cartLength } = useCartLength();
    const {
      data: cartData,
      refresh,
      pending
    } = ([__temp, __restore] = withAsyncContext(() => {
      var _a;
      return useRequest({
        url: () => apiGetCartUrl,
        requetOptions: {
          query: { country_id: (_a = selectedCountry.value) == null ? void 0 : _a.id }
        }
      });
    }), __temp = await __temp, __restore(), __temp);
    const { data: cartDataLength, refresh: cartDataLengthRefresh } = ([__temp, __restore] = withAsyncContext(() => {
      var _a;
      return useRequest({
        url: () => apiGetCartLengthUrl,
        requetOptions: {
          query: { country_id: (_a = selectedCountry.value) == null ? void 0 : _a.id },
          onResponse: (response) => {
            var _a2, _b;
            setCartLength((_b = (_a2 = response.response) == null ? void 0 : _a2._data) == null ? void 0 : _b.data.cart_length);
          }
        }
      });
    }), __temp = await __temp, __restore(), __temp);
    const { fire } = useApi({
      url: apiAddToCartUrl,
      requestOptions: {
        method: "post",
        onResponse: (response) => {
          if (response.response.ok) {
            refresh();
            cartDataLengthRefresh();
          }
        }
      }
    });
    const updateCartPending = ref(false);
    async function updateCart(data) {
      updateCartPending.value = true;
      await fire(data);
      updateCartPending.value = false;
    }
    function increaseQuantity(data) {
      const payload = {
        product_id: data.product.id,
        quantity: data.quantity + 1,
        final_price: data.price
      };
      updateCart(payload);
    }
    function decreaseQuantity(data) {
      if (data.quantity > 1) {
        const payload = {
          product_id: data.product.id,
          quantity: data.quantity - 1,
          final_price: data.price
        };
        updateCart(payload);
      }
    }
    let timer;
    function changeQuantity(qty, data) {
      clearTimeout(timer);
      timer = setTimeout(() => {
        if (qty >= 1) {
          const payload = {
            product_id: data.product.id,
            quantity: qty,
            final_price: data.price
          };
          updateCart(payload);
        }
      }, 300);
    }
    function changePrice(price, data) {
      clearTimeout(timer);
      timer = setTimeout(() => {
        if (price) {
          const payload = {
            product_id: data.product.id,
            quantity: data.quantity,
            final_price: price
          };
          updateCart(payload);
        }
      }, 300);
    }
    const isLoading = ref(false);
    async function deleteCartItem(id) {
      isLoading.value = true;
      await useRequest({
        url: apiDeleteCartItem + "/" + id,
        requetOptions: {
          method: "delete",
          onResponse: () => {
            refresh();
          }
        }
      });
      isLoading.value = false;
    }
    const clearCartIsPending = ref(false);
    const { fire: clearCartFire } = useApi({
      url: apiDeleteCartUrl + "/" + cartData.value.data.id,
      requestOptions: {
        method: "delete",
        onResponse: (response) => {
          console.log(response);
          if (response.response.ok) {
            refresh();
            cartDataLengthRefresh();
          }
        }
      }
    });
    async function clearCart() {
      clearCartIsPending.value = true;
      await clearCartFire();
      clearCartIsPending.value = false;
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_shared_title = __nuxt_component_0;
      const _component_shared_loders_loading = __nuxt_component_7;
      const _component_cart_aside = __nuxt_component_2;
      const _component_cart_products = __nuxt_component_3;
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "bg-primary" }, _attrs))}>`);
      _push(ssrRenderComponent(_component_shared_title, { title: "\u0627\u0644\u0639\u0631\u0628\u0629" }, null, _parent));
      if (unref(pending) || unref(updateCartPending)) {
        _push(`<div class="flex items-center justify-center">`);
        _push(ssrRenderComponent(_component_shared_loders_loading, null, null, _parent));
        _push(`</div>`);
      } else {
        _push(`<div class="flex flex-col 2xl:flex-row justify-start gap-24">`);
        _push(ssrRenderComponent(_component_cart_aside, {
          details: {
            ...unref(cartData).data,
            itemsInCart: unref(cartDataLength).data.cart_length || unref(cartLength)
          }
        }, null, _parent));
        _push(`<div class="w-full">`);
        _push(ssrRenderComponent(_component_cart_products, {
          products: unref(cartData).data.cartItems,
          onDecreaseQuantity: decreaseQuantity,
          onIncreaseQuantity: increaseQuantity,
          onDeleteCartItem: deleteCartItem,
          onChangeQuantity: changeQuantity,
          onChangePrice: changePrice,
          onClearCart: clearCart,
          clearCartIsPending: unref(clearCartIsPending)
        }, null, _parent));
        _push(`</div></div>`);
      }
      _push(`</section>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/cart.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=cart-4419ece4.mjs.map
