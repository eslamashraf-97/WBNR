import { withAsyncContext, mergeProps, unref, withCtx, createVNode, openBlock, createBlock, Fragment, renderList, useSSRContext, renderSlot, defineAsyncComponent } from 'vue';
import { _ as __nuxt_component_0 } from './Title-708248cc.mjs';
import { SwiperSlide, Swiper } from 'swiper/vue';
import { ssrRenderAttrs, ssrRenderList, ssrRenderComponent, ssrRenderSlot } from 'vue/server-renderer';
import { Autoplay } from 'swiper/modules';
import { u as useRequest } from './useRequest-7578fcfd.mjs';
import { g as getCateoriesUrl, a as getProductsNewArrivalsUrl, b as getProductsMostSellUrl, c as getProductsUrl } from './index-886ddf27.mjs';
import './nuxt-link-3fa67823.mjs';
import '../../nitro/node-server.mjs';
import 'node:http';
import 'node:https';
import 'node:zlib';
import 'node:stream';
import 'node:buffer';
import 'node:util';
import 'node:url';
import 'node:net';
import 'node:fs';
import 'node:path';
import 'fs';
import 'path';
import '../server.mjs';
import 'unhead';
import '@unhead/shared';
import 'vue-router';
import 'vue3-toastify';
import './Icon-44226a77.mjs';
import './config-c055070f.mjs';
import '@iconify/vue/dist/offline';
import '@iconify/vue';
import 'axios';

const _sfc_main$1 = {
  __name: "ProductSwiper",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_swiper = Swiper;
      _push(ssrRenderComponent(_component_swiper, mergeProps({
        modules: [unref(Autoplay)],
        slidesPerView: 1.1,
        spaceBetween: 36,
        loop: false,
        autoplay: true,
        breakpoints: {
          768: {
            slidesPerView: 3
          },
          1224: {
            slidesPerView: 4
          }
        }
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            ssrRenderSlot(_ctx.$slots, "default", {}, null, _push2, _parent2, _scopeId);
          } else {
            return [
              renderSlot(_ctx.$slots, "default")
            ];
          }
        }),
        _: 3
      }, _parent));
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/shared/ProductSwiper.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_2 = _sfc_main$1;
const __nuxt_component_0_lazy = /* @__PURE__ */ defineAsyncComponent(() => import('./Category-f6134eaa.mjs').then((m) => m.default || m));
const __nuxt_component_4_lazy = /* @__PURE__ */ defineAsyncComponent(() => import('./Product-bface8fb.mjs').then((m) => m.default || m));
const _sfc_main = {
  __name: "home",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const { data: categoriesData } = ([__temp, __restore] = withAsyncContext(() => useRequest({
      url: getCateoriesUrl
    })), __temp = await __temp, __restore(), __temp);
    const { data: productsNewArrivals } = ([__temp, __restore] = withAsyncContext(() => useRequest({
      url: getProductsNewArrivalsUrl
    })), __temp = await __temp, __restore(), __temp);
    const { data: productsMostSell } = ([__temp, __restore] = withAsyncContext(() => useRequest({
      url: getProductsMostSellUrl
    })), __temp = await __temp, __restore(), __temp);
    const { data: products } = ([__temp, __restore] = withAsyncContext(() => useRequest({
      url: getProductsUrl
    })), __temp = await __temp, __restore(), __temp);
    return (_ctx, _push, _parent, _attrs) => {
      var _a;
      const _component_lazy_shared_cards_category = __nuxt_component_0_lazy;
      const _component_shared_title = __nuxt_component_0;
      const _component_shared_product_swiper = __nuxt_component_2;
      const _component_swiper_slide = SwiperSlide;
      const _component_lazy_shared_cards_product = __nuxt_component_4_lazy;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "bg-primary" }, _attrs))}>`);
      if (((_a = unref(categoriesData)) == null ? void 0 : _a.data) && unref(categoriesData).data.length) {
        _push(`<div class="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-9 mb-40"><!--[-->`);
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
      _push(`</div>`);
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
      _push(`</div>`);
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
      _push(`</div></div>`);
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
//# sourceMappingURL=home-4c6dea1c.mjs.map
