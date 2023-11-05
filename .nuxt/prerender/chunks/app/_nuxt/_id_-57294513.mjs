import { b as buildAssetsURL } from '../../renderer.mjs';
import { _ as __nuxt_component_1 } from './nuxt-link-7fd3a776.mjs';
import __nuxt_component_0 from './Icon-b69f18a8.mjs';
import { _ as __nuxt_component_0$1 } from './Input-1e7796d8.mjs';
import { _ as __nuxt_component_3 } from './PrimaryButton-3e0b2318.mjs';
import { _ as __nuxt_component_1$1 } from './SecondaryButton-979fef3b.mjs';
import { _ as __nuxt_component_0$2 } from './Title-23cab648.mjs';
import { _ as __nuxt_component_6 } from './ProductSwiper-8890e541.mjs';
import { SwiperSlide } from 'file://D:/WBNR/WBNR/node_modules/swiper/swiper-vue.mjs';
import { withAsyncContext, reactive, ref, computed, withCtx, createTextVNode, unref, createVNode, openBlock, createBlock, Fragment, renderList, useSSRContext, defineAsyncComponent } from 'file://D:/WBNR/WBNR/node_modules/vue/index.mjs';
import { u as useCartLength } from './useCartLength-2a51b0ba.mjs';
import { h as useRoute, a as navigateTo } from '../server.mjs';
import { u as useApi } from './useApi-73d2615e.mjs';
import { u as useRequest } from './useRequest-d66ec7ae.mjs';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderAttr, ssrRenderList } from 'file://D:/WBNR/WBNR/node_modules/vue/server-renderer/index.mjs';
import { s as apiGetSingleProductUrl, q as apiGetProductsUrl, e as apiAddToCartUrl } from './index-f05587d3.mjs';
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
import './state-df47e21c.mjs';
import './config-b815dc90.mjs';
import 'file://D:/WBNR/WBNR/node_modules/@iconify/vue/dist/offline.mjs';
import 'file://D:/WBNR/WBNR/node_modules/@iconify/vue/dist/iconify.mjs';
import './LoaderButton-81aa4875.mjs';
import 'file://D:/WBNR/WBNR/node_modules/swiper/modules/index.mjs';
import 'file://D:/WBNR/WBNR/node_modules/unctx/dist/index.mjs';
import 'file://D:/WBNR/WBNR/node_modules/vue-router/dist/vue-router.node.mjs';
import 'file://D:/WBNR/WBNR/node_modules/cookie-es/dist/index.mjs';
import 'file://D:/WBNR/WBNR/node_modules/vue3-toastify/dist/index.mjs';

const _imports_0 = "" + buildAssetsURL("cart-icon.a5682f49.svg");
const __nuxt_component_8_lazy = /* @__PURE__ */ defineAsyncComponent(() => import('./Product-fd724f0b.mjs').then((m) => m.default || m));
const _sfc_main = {
  __name: "[id]",
  __ssrInlineRender: true,
  async setup(__props) {
    var _a, _b;
    let __temp, __restore;
    const { setCartLength, cartLength } = useCartLength();
    const route = useRoute();
    const { fire } = useApi({
      url: apiGetSingleProductUrl + "/" + route.params.id
    });
    const { data: productData } = ([__temp, __restore] = withAsyncContext(() => fire()), __temp = await __temp, __restore(), __temp);
    const { fire: fireGetByCategory } = useApi({
      url: apiGetProductsUrl,
      requestOptions: {
        query: { category_id: (_a = productData.value) == null ? void 0 : _a.data.category_id }
      }
    });
    const { data: productDataByCategory } = ([__temp, __restore] = withAsyncContext(() => fireGetByCategory()), __temp = await __temp, __restore(), __temp);
    const productForm = reactive({
      quantity: 1,
      price: (_b = productData.value) == null ? void 0 : _b.data.price
    });
    const isLoading = ref(false);
    const addedToCartStatus = ref(false);
    async function addToCart() {
      var _a2, _b2;
      isLoading.value = true;
      const payload = {
        product_id: (_a2 = productData.value) == null ? void 0 : _a2.data.id,
        quantity: productForm.quantity,
        // must be 1 or more no 0,
        final_price: (_b2 = productData.value) == null ? void 0 : _b2.data.price
      };
      await useRequest({
        url: apiAddToCartUrl,
        requetOptions: {
          body: JSON.stringify(payload),
          method: "post",
          onResponse: (response) => {
            addedToCartStatus.value = true;
            setCartLength(cartLength.value + productForm.quantity);
          }
        }
      });
      isLoading.value = false;
    }
    const commission = computed(
      () => (productForm.price - productData.value.data.price + productData.value.data.minCommission) * productForm.quantity
    );
    return (_ctx, _push, _parent, _attrs) => {
      var _a2, _b2, _c, _d, _e, _f, _g;
      const _component_nuxt_link = __nuxt_component_1;
      const _component_Icon = __nuxt_component_0;
      const _component_shared_form_input = __nuxt_component_0$1;
      const _component_shared_buttons_primary_button = __nuxt_component_3;
      const _component_shared_buttons_secondary_button = __nuxt_component_1$1;
      const _component_shared_title = __nuxt_component_0$2;
      const _component_shared_product_swiper = __nuxt_component_6;
      const _component_swiper_slide = SwiperSlide;
      const _component_lazy_shared_cards_product = __nuxt_component_8_lazy;
      _push(`<div${ssrRenderAttrs(_attrs)}><div class="flex items-center text-gray-400 text-2xl mb-9">`);
      _push(ssrRenderComponent(_component_nuxt_link, { to: "/suggested-products" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`\u0627\u0644\u0645\u0646\u062A\u062C\u0627\u062A`);
          } else {
            return [
              createTextVNode("\u0627\u0644\u0645\u0646\u062A\u062C\u0627\u062A")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<span>\xA0/\xA0</span><span>${ssrInterpolate((_c = (_b2 = (_a2 = unref(productData)) == null ? void 0 : _a2.data) == null ? void 0 : _b2.category) == null ? void 0 : _c.name)}</span><span>\xA0/\xA0</span><span>${ssrInterpolate((_e = (_d = unref(productData)) == null ? void 0 : _d.data) == null ? void 0 : _e.title)}</span></div>`);
      if ((_f = unref(productData)) == null ? void 0 : _f.data) {
        _push(`<!--[--><div class="flex gap-16 mb-24"><div class="bg-white p-9 rounded-lg"><div class="gallery flex gap-2"><img${ssrRenderAttr("src", unref(productData).data.featured_image)} class="w-[36rem] h-[36rem] object-cover"><div class="flex flex-col justify-between rounded-lg overflow-hidden"><!--[-->`);
        ssrRenderList(unref(productData).data.images, (productImage, index) => {
          _push(`<img${ssrRenderAttr("alt", productImage.alt_image)}${ssrRenderAttr("src", productImage.url)} class="w-32 h-32 object-cover cursor-pointer">`);
        });
        _push(`<!--]--></div></div><p class="text-primary-300 text-xl font-semibold mt-7"> \u062A\u062D\u0645\u064A\u0644 \u0643\u0644 \u0635\u0648\u0631 \u0627\u0644\u0645\u0646\u062A\u062C <span>`);
        _push(ssrRenderComponent(_component_Icon, { name: "pepicons-pop:angle-left" }, null, _parent));
        _push(`</span></p></div><div class="details flex-1"><div class="main-info"><p class="text-gray-700 text-2xl font-normal">\u0627\u062F\u0627\u0621 \u0627\u0644\u0645\u0646\u062A\u062C:</p><h1 class="text-gray-800 text-5xl my-4">${ssrInterpolate(unref(productData).data.title)}</h1><p class="text-gray-400 text-2xl flex gap-3 items-center"><span>\u0643\u0648\u062F \u0627\u0644\u0645\u0646\u062A\u062C:</span><span>${ssrInterpolate(unref(productData).data.code)}</span></p></div><div class="flex items-center gap-16 mt-10"><div><span class="text-base text-gray-400 font-light">\u0633\u0639\u0631 \u0627\u0644\u0645\u0646\u062A\u062C</span><h6 class="mb-0 text-3xl text-gray-800 flex gap-[10px] items-center leading-[48px]">${ssrInterpolate(unref(productData).data.price)} <span>\u062C.\u0645</span></h6></div><div class="h-[36px] bg-gray-200 w-[1px]"></div><div><span class="text-base text-gray-400 font-light">\u0627\u0644\u0631\u0628\u062D \u0645\u0646 \u0627\u062C\u0645\u0627\u0644\u064A \u0627\u0644\u0633\u0639\u0631</span><h6 class="mb-0 text-3xl text-gray-800 flex gap-[10px] items-center leading-[48px]">${ssrInterpolate(unref(productData).data.minCommission)} <span>\u062C.\u0645</span></h6></div></div><div class="mt-10 mb-10"><span class="text-base text-gray-400 font-light">\u0627\u0644\u0643\u0645\u064A\u0629 \u0627\u0644\u0645\u062A\u0648\u0641\u0631\u0629</span><h6 class="mb-0 text-3xl text-gray-800 flex gap-[10px] items-center leading-[48px]">${ssrInterpolate(unref(productData).data.stock)} <span>\u0642\u0637\u0639\u0629</span></h6></div><div class="px-9 py-5 shadow-main rounded-sm border border-gray-200 max-w-[650px]"><div class="flex items-center gap-6"><div><span class="text-base text-gray-400 font-light mb-5 block">\u0627\u0644\u0643\u0645\u064A\u0629</span><div class="relative w-[96px]">`);
        _push(ssrRenderComponent(_component_shared_form_input, {
          type: "text",
          class: "w-[96px] h-[53px] bg-transparent text-xl",
          modelValue: unref(productForm).quantity,
          "onUpdate:modelValue": ($event) => unref(productForm).quantity = $event,
          modelModifiers: { number: true }
        }, null, _parent));
        _push(`<div class="absolute top-[1px] left-[1px] bottom-[1px] flex flex-col items-center bg-white rounded-[11px]"><button type="button" class="w-[24px] flex-1 border-b border-b-gray-200 border-s border-s-gray-200"> + </button><button type="button" class="w-[24px] flex-1 border-s border-s-gray-200"> - </button></div></div></div><div><span class="text-base text-gray-400 font-light mb-5 block">\u0633\u0639\u0631 \u0627\u0644\u0628\u064A\u0639 \u0644\u0644\u0642\u0637\u0639\u0629</span><div class="relative w-[172px]">`);
        _push(ssrRenderComponent(_component_shared_form_input, {
          type: "text",
          class: "!w-[172px] h-[53px] bg-transparent text-xl",
          modelValue: unref(productForm).price,
          "onUpdate:modelValue": ($event) => unref(productForm).price = $event
        }, null, _parent));
        _push(`<div class="absolute top-[1px] left-[1px] bottom-[1px] flex flex-col bg-white rounded-[11px]"><div class="w-[57px] flex-1 border-s border-s-gray-200 flex items-center justify-center text-xl text-gray-300 font-bold"> \u062C.\u0645 </div></div></div></div><span class="text-base text-gray-400 flex gap-[12px] mt-auto mb-3"><span>\u0627\u0644\u0631\u0628\u062D \u0645\u0646 \u0627\u062C\u0645\u0627\u0644\u064A \u0627\u0644\u0633\u0639\u0631</span><span class="flex items-center gap-[10px] text-primary-300 text-xl">${ssrInterpolate(unref(commission))} <span>\u062C.\u0645</span></span></span></div><div class="mt-12 flex items-center gap-7">`);
        _push(ssrRenderComponent(_component_shared_buttons_primary_button, {
          "submit-title": "\u0627\u0637\u0644\u0628 \u0627\u0644\u0627\u0646",
          class: "w-[232px] h-[67px]",
          onClick: ($event) => ("navigateTo" in _ctx ? _ctx.navigateTo : unref(navigateTo))(
            `/checkout-quick-order?product=${unref(productData).data.id}&title=${unref(productData).data.title}&price=${unref(productData).data.price}&minCommission=${unref(productData).data.minCommission}&commission=${unref(commission)}&qty=${unref(productForm).quantity}&image=${unref(productData).data.featured_image}`
          )
        }, null, _parent));
        if (!unref(addedToCartStatus)) {
          _push(ssrRenderComponent(_component_shared_buttons_secondary_button, {
            class: "w-[93px] h-[67px] flex items-center justify-center",
            onClick: addToCart,
            loading: unref(isLoading)
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`<img${ssrRenderAttr("src", _imports_0)}${_scopeId}>`);
              } else {
                return [
                  createVNode("img", { src: _imports_0 })
                ];
              }
            }),
            _: 1
          }, _parent));
        } else {
          _push(ssrRenderComponent(_component_shared_buttons_secondary_button, {
            class: "w-[232px h-[67px] flex items-center justify-center",
            onClick: ($event) => ("navigateTo" in _ctx ? _ctx.navigateTo : unref(navigateTo))("/cart")
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(` \u0627\u0630\u0647\u0628 \u0627\u0644\u0649 \u0627\u0644\u0639\u0631\u0628\u0629 `);
                _push2(ssrRenderComponent(_component_Icon, {
                  name: "iconamoon:arrow-left-2-duotone",
                  class: "text-2xl"
                }, null, _parent2, _scopeId));
              } else {
                return [
                  createTextVNode(" \u0627\u0630\u0647\u0628 \u0627\u0644\u0649 \u0627\u0644\u0639\u0631\u0628\u0629 "),
                  createVNode(_component_Icon, {
                    name: "iconamoon:arrow-left-2-duotone",
                    class: "text-2xl"
                  })
                ];
              }
            }),
            _: 1
          }, _parent));
        }
        _push(`</div></div></div></div><div class="mb-24"><p class="text-gray-700 text-3xl font-normal mb-8">\u0648\u0635\u0641 \u0627\u0644\u0645\u0646\u062A\u062C</p><div class="bg-white rounded-lg border p-9">${unref(productData).data.description}</div></div>`);
        _push(ssrRenderComponent(_component_shared_title, {
          title: (_g = unref(productData).data.category) == null ? void 0 : _g.name,
          url: "/suggested-products"
        }, null, _parent));
        _push(ssrRenderComponent(_component_shared_product_swiper, null, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<!--[-->`);
              ssrRenderList(unref(productDataByCategory).data, (product, key) => {
                _push2(ssrRenderComponent(_component_swiper_slide, { key }, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(ssrRenderComponent(_component_lazy_shared_cards_product, { details: product }, null, _parent3, _scopeId2));
                    } else {
                      return [
                        createVNode(_component_lazy_shared_cards_product, { details: product }, null, 8, ["details"])
                      ];
                    }
                  }),
                  _: 2
                }, _parent2, _scopeId));
              });
              _push2(`<!--]-->`);
            } else {
              return [
                (openBlock(true), createBlock(Fragment, null, renderList(unref(productDataByCategory).data, (product, key) => {
                  return openBlock(), createBlock(_component_swiper_slide, { key }, {
                    default: withCtx(() => [
                      createVNode(_component_lazy_shared_cards_product, { details: product }, null, 8, ["details"])
                    ]),
                    _: 2
                  }, 1024);
                }), 128))
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`<!--]-->`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/product/[id].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=_id_-57294513.mjs.map
