import { withAsyncContext, mergeProps, unref, withCtx, createVNode, openBlock, createBlock, Fragment, renderList, useSSRContext, defineAsyncComponent } from "vue";
import { _ as __nuxt_component_0 } from "./Title-23cab648.js";
import { _ as __nuxt_component_6 } from "./ProductSwiper-8890e541.js";
import { SwiperSlide } from "swiper/vue";
import { u as useCountries } from "./useCountries-716a6161.js";
import { u as useRequest } from "./useRequest-d66ec7ae.js";
import { ssrRenderAttrs, ssrRenderList, ssrRenderComponent } from "vue/server-renderer";
import { o as apiGetCateoriesUrl, p as apiGetProductsNewArrivalsUrl, q as apiGetProductsMostSellUrl, r as apiGetProductsUrl } from "./index-f05587d3.js";
import "./nuxt-link-7fd3a776.js";
import "ufo";
import "hookable";
import "../server.mjs";
import "ofetch";
import "#internal/nitro";
import "unctx";
import "destr";
import "devalue";
import "defu";
import "klona";
import "unhead";
import "@unhead/shared";
import "vue-router";
import "h3";
import "cookie-es";
import "ohash";
import "vue3-toastify";
import "./Icon-b69f18a8.js";
import "./state-df47e21c.js";
import "./config-b815dc90.js";
import "@iconify/vue/dist/offline";
import "@iconify/vue";
import "swiper/modules";
const __nuxt_component_0_lazy = /* @__PURE__ */ defineAsyncComponent(() => import("./Category-4866381d.js").then((m) => m.default || m));
const __nuxt_component_4_lazy = /* @__PURE__ */ defineAsyncComponent(() => import("./Product-fd724f0b.js").then((m) => m.default || m));
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
          title: "وصل حديثا",
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
          title: "الأكثر مبيعا",
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
          title: "كل المنتجات",
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
export {
  _sfc_main as default
};
//# sourceMappingURL=home-027dccf8.js.map
