import { withAsyncContext, mergeProps, unref, withCtx, createVNode, openBlock, createBlock, Fragment, renderList, useSSRContext, defineAsyncComponent } from 'file://D:/WBNR/WBNR/node_modules/vue/index.mjs';
import { _ as __nuxt_component_0 } from './Title-23cab648.mjs';
import { _ as __nuxt_component_6 } from './ProductSwiper-8890e541.mjs';
import { SwiperSlide } from 'file://D:/WBNR/WBNR/node_modules/swiper/swiper-vue.mjs';
import { u as useCountries } from './useCountries-716a6161.mjs';
import { u as useRequest } from './useRequest-d66ec7ae.mjs';
import { ssrRenderAttrs, ssrRenderList, ssrRenderComponent } from 'file://D:/WBNR/WBNR/node_modules/vue/server-renderer/index.mjs';
import { o as apiGetProductsNewArrivalsUrl, p as apiGetProductsMostSellUrl, q as apiGetProductsUrl, r as apiGetCateoriesUrl } from './index-f05587d3.mjs';
import './nuxt-link-7fd3a776.mjs';
import 'file://D:/WBNR/WBNR/node_modules/ufo/dist/index.mjs';
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
import './Icon-b69f18a8.mjs';
import './state-df47e21c.mjs';
import './config-b815dc90.mjs';
import 'file://D:/WBNR/WBNR/node_modules/@iconify/vue/dist/offline.mjs';
import 'file://D:/WBNR/WBNR/node_modules/@iconify/vue/dist/iconify.mjs';
import 'file://D:/WBNR/WBNR/node_modules/swiper/modules/index.mjs';

const __nuxt_component_0_lazy = /* @__PURE__ */ defineAsyncComponent(() => import('./Category-4866381d.mjs').then((m) => m.default || m));
const __nuxt_component_4_lazy = /* @__PURE__ */ defineAsyncComponent(() => import('./Product-fd724f0b.mjs').then((m) => m.default || m));
const _sfc_main = {
  __name: "home",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const { selectedCountry } = useCountries();
    const { data: categoriesData } = ([__temp, __restore] = withAsyncContext(() => useRequest({
      url: apiGetCateoriesUrl
    })), __temp = await __temp, __restore(), __temp);
    const { data: productsNewArrivals } = ([__temp, __restore] = withAsyncContext(() => useRequest({
      url: () => apiGetProductsNewArrivalsUrl,
      requetOptions: {
        query: {
          country_id: selectedCountry.value.id
        },
        watch: [selectedCountry]
      }
    })), __temp = await __temp, __restore(), __temp);
    const { data: productsMostSell } = ([__temp, __restore] = withAsyncContext(() => useRequest({
      url: () => apiGetProductsMostSellUrl,
      requetOptions: {
        query: {
          country_id: selectedCountry.value.id
        },
        watch: [selectedCountry]
      }
    })), __temp = await __temp, __restore(), __temp);
    const { data: products } = ([__temp, __restore] = withAsyncContext(() => useRequest({
      url: () => apiGetProductsUrl,
      requetOptions: {
        query: {
          country_id: selectedCountry.value.id
        },
        watch: [selectedCountry]
      }
    })), __temp = await __temp, __restore(), __temp);
    return (_ctx, _push, _parent, _attrs) => {
      var _a;
      const _component_lazy_shared_cards_category = __nuxt_component_0_lazy;
      const _component_shared_title = __nuxt_component_0;
      const _component_shared_product_swiper = __nuxt_component_6;
      const _component_swiper_slide = SwiperSlide;
      const _component_lazy_shared_cards_product = __nuxt_component_4_lazy;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "bg-primary" }, _attrs))}>`);
      if (((_a = unref(categoriesData)) == null ? void 0 : _a.data) && unref(categoriesData).data.length) {
        _push(`<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-9 mb-40"><!--[-->`);
        ssrRenderList(unref(categoriesData).data, (category) => {
          _push(ssrRenderComponent(_component_lazy_shared_cards_category, {
            key: category.id,
            details: category
          }, null, _parent));
        });
        _push(`<!--]--></div>`);
      } else {
        _push(`<!---->`);
      }
      if (unref(productsNewArrivals).data.length) {
        _push(`<!--[-->`);
        _push(ssrRenderComponent(_component_shared_title, {
          title: "\u0648\u0635\u0644 \u062D\u062F\u064A\u062B\u0627",
          url: "/suggested-products"
        }, null, _parent));
        _push(`<div class="mb-40">`);
        _push(ssrRenderComponent(_component_shared_product_swiper, null, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<!--[-->`);
              ssrRenderList(unref(productsNewArrivals).data, (product, key) => {
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
                (openBlock(true), createBlock(Fragment, null, renderList(unref(productsNewArrivals).data, (product, key) => {
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
        _push(`</div><!--]-->`);
      } else {
        _push(`<!---->`);
      }
      if (unref(productsMostSell).data.length) {
        _push(`<!--[-->`);
        _push(ssrRenderComponent(_component_shared_title, {
          title: "\u0627\u0644\u0623\u0643\u062B\u0631 \u0645\u0628\u064A\u0639\u0627",
          url: "/suggested-products"
        }, null, _parent));
        _push(`<div class="mb-40">`);
        _push(ssrRenderComponent(_component_shared_product_swiper, null, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<!--[-->`);
              ssrRenderList(unref(productsMostSell).data, (product, key) => {
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
                (openBlock(true), createBlock(Fragment, null, renderList(unref(productsMostSell).data, (product, key) => {
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
        _push(`</div><!--]-->`);
      } else {
        _push(`<!---->`);
      }
      if (unref(products).data.length) {
        _push(`<!--[-->`);
        _push(ssrRenderComponent(_component_shared_title, {
          title: "\u0643\u0644 \u0627\u0644\u0645\u0646\u062A\u062C\u0627\u062A",
          url: "/suggested-products"
        }, null, _parent));
        _push(`<div class="">`);
        _push(ssrRenderComponent(_component_shared_product_swiper, null, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<!--[-->`);
              ssrRenderList(unref(products).data, (product, key) => {
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
                (openBlock(true), createBlock(Fragment, null, renderList(unref(products).data, (product, key) => {
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
        _push(`</div><!--]-->`);
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/home.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=home-027dccf8.mjs.map
