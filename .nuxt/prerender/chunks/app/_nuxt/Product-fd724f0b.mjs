import __nuxt_component_0 from './Icon-b69f18a8.mjs';
import { _ as __nuxt_component_1 } from './nuxt-link-7fd3a776.mjs';
import { u as useSavedProducts } from './useSavedProducts-e3314d55.mjs';
import { u as useCartLength } from './useCartLength-2a51b0ba.mjs';
import { ref, computed, mergeProps, unref, withCtx, createVNode, useSSRContext } from 'file://D:/WBNR/WBNR/node_modules/vue/index.mjs';
import { u as useApi } from './useApi-73d2615e.mjs';
import { ssrRenderAttrs, ssrRenderAttr, ssrRenderComponent, ssrRenderStyle, ssrInterpolate } from 'file://D:/WBNR/WBNR/node_modules/vue/server-renderer/index.mjs';
import { z as apiSaveProductUrl, A as apiRemoveProductUrl, e as apiAddToCartUrl } from './index-f05587d3.mjs';
import { c as productStatus } from './index-a82f0d37.mjs';
import '../server.mjs';
import 'file://D:/WBNR/WBNR/node_modules/ofetch/dist/node.mjs';
import 'file://D:/WBNR/WBNR/node_modules/hookable/dist/index.mjs';
import 'file://D:/WBNR/WBNR/node_modules/unctx/dist/index.mjs';
import 'file://D:/WBNR/WBNR/node_modules/destr/dist/index.mjs';
import 'file://D:/WBNR/WBNR/node_modules/defu/dist/defu.mjs';
import 'file://D:/WBNR/WBNR/node_modules/unhead/dist/index.mjs';
import 'file://D:/WBNR/WBNR/node_modules/@unhead/shared/dist/index.mjs';
import 'file://D:/WBNR/WBNR/node_modules/vue-router/dist/vue-router.node.mjs';
import 'file://D:/WBNR/WBNR/node_modules/h3/dist/index.mjs';
import 'file://D:/WBNR/WBNR/node_modules/ufo/dist/index.mjs';
import 'file://D:/WBNR/WBNR/node_modules/cookie-es/dist/index.mjs';
import 'file://D:/WBNR/WBNR/node_modules/ohash/dist/index.mjs';
import 'file://D:/WBNR/WBNR/node_modules/vue3-toastify/dist/index.mjs';
import '../../nitro/nitro-prerenderer.mjs';
import 'file://D:/WBNR/WBNR/node_modules/unenv/runtime/fetch/index.mjs';
import 'file://D:/WBNR/WBNR/node_modules/scule/dist/index.mjs';
import 'file://D:/WBNR/WBNR/node_modules/klona/dist/index.mjs';
import 'file://D:/WBNR/WBNR/node_modules/unstorage/dist/index.mjs';
import 'file://D:/WBNR/WBNR/node_modules/unstorage/drivers/fs.mjs';
import 'file://D:/WBNR/WBNR/node_modules/unstorage/drivers/memory.mjs';
import 'file://D:/WBNR/WBNR/node_modules/unstorage/drivers/lru-cache.mjs';
import 'file://D:/WBNR/WBNR/node_modules/unstorage/drivers/fs-lite.mjs';
import 'file://D:/WBNR/WBNR/node_modules/radix3/dist/index.mjs';
import 'node:fs';
import 'node:url';
import 'file://D:/WBNR/WBNR/node_modules/pathe/dist/index.mjs';
import './state-df47e21c.mjs';
import './config-b815dc90.mjs';
import 'file://D:/WBNR/WBNR/node_modules/@iconify/vue/dist/offline.mjs';
import 'file://D:/WBNR/WBNR/node_modules/@iconify/vue/dist/iconify.mjs';

const _sfc_main = {
  __name: "Product",
  __ssrInlineRender: true,
  props: {
    details: {
      type: Object
    }
  },
  setup(__props) {
    const props = __props;
    const { setSavedProductsCount, savedProductsCount } = useSavedProducts();
    const { cartLength, setCartLength } = useCartLength();
    const saveProductIsLoading = ref(false);
    const savedProduct = ref(props.details.is_favorite);
    const { fire: saveProductFire } = useApi({
      url: () => apiSaveProductUrl + "/" + props.details.id,
      requestOptions: {
        method: "POST"
      }
    });
    async function saveProduct() {
      saveProductIsLoading.value = true;
      const { status } = await saveProductFire();
      console.log(status);
      if (status.value === "success") {
        savedProduct.value = true;
        setSavedProductsCount(savedProductsCount.value + 1);
      }
      saveProductIsLoading.value = false;
    }
    const { fire: removeProductFire } = useApi({
      url: () => apiRemoveProductUrl + "/" + props.details.id,
      requestOptions: {
        method: "DELETE"
      }
    });
    async function removeProduct() {
      saveProductIsLoading.value = true;
      const { status } = await removeProductFire();
      console.log(status.value);
      if (status.value === "success") {
        savedProduct.value = false;
        setSavedProductsCount(savedProductsCount.value - 1);
      }
      saveProductIsLoading.value = false;
    }
    const addProductToCartIsLoading = ref(false);
    const { fire: addProductToCartFire } = useApi({
      url: () => apiAddToCartUrl,
      requestOptions: {
        method: "POST"
      }
    });
    async function addProductToCart() {
      addProductToCartIsLoading.value = true;
      const { status } = await addProductToCartFire({
        product_id: props.details.id,
        quantity: 1,
        final_price: props.details.price
      });
      if (status.value === "success") {
        setCartLength(cartLength + 1);
      }
      addProductToCartIsLoading.value = false;
    }
    const productStatuses = computed(() => {
      const percentage = (props.details.orderConfirmedPercentage + props.details.orderCompletedPercentage) / 2;
      return productStatus.find((item) => {
        return item.from <= percentage && (item.to >= percentage || item.to == void 0);
      }).color;
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Icon = __nuxt_component_0;
      const _component_nuxt_link = __nuxt_component_1;
      if (__props.details) {
        _push(`<div${ssrRenderAttrs(mergeProps({ class: "min-w-96 border border-gray-200 shadow-product rounded-md overflow-hidden" }, _attrs))}><img${ssrRenderAttr("src", __props.details.featured_image)} class="object-cover w-full h-80"><div class="py-9 px-7 relative"><div class="w-36 bg-white py-3 flex justify-center text-primary-300 text-2xl rounded-xs absolute gap-2 top-[-25px] left-5">`);
        if (!unref(savedProduct) && !unref(saveProductIsLoading)) {
          _push(ssrRenderComponent(_component_Icon, {
            name: "fluent:bookmark-20-regular",
            class: "cursor-pointer",
            onClick: saveProduct
          }, null, _parent));
        } else if (unref(savedProduct) && !unref(saveProductIsLoading)) {
          _push(ssrRenderComponent(_component_Icon, {
            name: "fluent:bookmark-20-filled",
            class: "cursor-pointer",
            onClick: removeProduct
          }, null, _parent));
        } else {
          _push(ssrRenderComponent(_component_Icon, {
            name: "icomoon-free:spinner2",
            class: "loading-spinner"
          }, null, _parent));
        }
        _push(ssrRenderComponent(_component_Icon, {
          name: "ci:line-l",
          class: "text-gray-200"
        }, null, _parent));
        if (!unref(addProductToCartIsLoading)) {
          _push(ssrRenderComponent(_component_Icon, {
            name: "la:cart-arrow-down",
            class: "cursor-pointer",
            onClick: addProductToCart
          }, null, _parent));
        } else {
          _push(ssrRenderComponent(_component_Icon, {
            name: "icomoon-free:spinner2",
            class: "loading-spinner"
          }, null, _parent));
        }
        _push(`</div><span class="w-[1.5rem] h-[.25rem] rounded-[3rem] block mb-2" style="${ssrRenderStyle({ background: unref(productStatuses) })}"></span><h1 class="text-[28px] leading-10">${ssrInterpolate(__props.details.title)}</h1><div class="flex justify-between my-9"><div><h5 class="text-gray-400 text-base font-normal mb-1"> \u0627\u0642\u0644 \u0633\u0639\u0631 \u0644\u0644\u0628\u064A\u0639 </h5><h3 class="text-2xl">${ssrInterpolate(__props.details.price)}</h3></div><div><h5 class="text-gray-400 text-base font-normal mb-1"> \u0627\u0642\u0644 \u0633\u0639\u0631 \u0644\u0644\u0631\u0628\u062D </h5><h3 class="text-2xl">${ssrInterpolate(__props.details.minCommission)}</h3></div></div>`);
        _push(ssrRenderComponent(_component_nuxt_link, {
          to: `/product/${__props.details.id}`,
          class: "text-primary-300 flex gap-1 font-semibold items-center text-lg"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<span${_scopeId}>\u062A\u0641\u0627\u0635\u064A\u0644 \u0627\u0644\u0645\u0646\u062A\u062C</span>`);
              _push2(ssrRenderComponent(_component_Icon, {
                name: "iconamoon:arrow-left-2-duotone",
                class: "text-2xl"
              }, null, _parent2, _scopeId));
            } else {
              return [
                createVNode("span", null, "\u062A\u0641\u0627\u0635\u064A\u0644 \u0627\u0644\u0645\u0646\u062A\u062C"),
                createVNode(_component_Icon, {
                  name: "iconamoon:arrow-left-2-duotone",
                  class: "text-2xl"
                })
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div></div>`);
      } else {
        _push(`<!---->`);
      }
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/shared/cards/Product.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=Product-fd724f0b.mjs.map
