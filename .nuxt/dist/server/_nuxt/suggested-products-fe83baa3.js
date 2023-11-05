import { _ as __nuxt_component_0 } from "./Title-23cab648.js";
import { _ as __nuxt_component_1 } from "./filter-97faec74.js";
import { _ as __nuxt_component_3 } from "./menu-87b0daac.js";
import __nuxt_component_0$1 from "./Icon-b69f18a8.js";
import { _ as __nuxt_component_0$2 } from "./Input-1e7796d8.js";
import { ref, withAsyncContext, mergeProps, withCtx, unref, createVNode, openBlock, createBlock, createCommentVNode, createTextVNode, toDisplayString, useSSRContext, defineAsyncComponent } from "vue";
import { u as usePagination, _ as __nuxt_component_6, a as __nuxt_component_8 } from "./usePagination-626c23e2.js";
import { _ as __nuxt_component_7 } from "./Loading-b5ab98f2.js";
import { u as useCountries } from "./useCountries-716a6161.js";
import "hookable";
import { h as useRoute, a as navigateTo } from "../server.mjs";
import "destr";
import "devalue";
import "defu";
import "klona";
import { u as useRequest } from "./useRequest-d66ec7ae.js";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderStyle, ssrInterpolate, ssrRenderList } from "vue/server-renderer";
import { w as apiGetSuggestedProductsUrl } from "./index-f05587d3.js";
import { p as productsActives, a as productsStatuses } from "./index-a82f0d37.js";
import "./nuxt-link-7fd3a776.js";
import "ufo";
import "@headlessui/vue";
import "./state-df47e21c.js";
import "./config-b815dc90.js";
import "@iconify/vue/dist/offline";
import "@iconify/vue";
import "ofetch";
import "#internal/nitro";
import "unctx";
import "unhead";
import "@unhead/shared";
import "vue-router";
import "h3";
import "cookie-es";
import "ohash";
import "vue3-toastify";
const __nuxt_component_5_lazy = /* @__PURE__ */ defineAsyncComponent(() => import("./Product-fd724f0b.js").then((m) => m.default || m));
const timer = 600;
const _sfc_main = {
  __name: "suggested-products",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const { page, changePage } = usePagination();
    const { selectedCountry } = useCountries();
    const route = useRoute();
    const orderBy = ref(route.query.orderBy);
    const productPerformance = ref(route.query.performance);
    const lowestPriceForSale = ref(route.query.lowest_price_for_sale);
    const mostPriceForSale = ref(route.query.most_price_for_sale);
    const lowestCommission = ref(route.query.lowest_commission);
    const mostCommission = ref(route.query.most_commission);
    const { data: productData, pending } = ([__temp, __restore] = withAsyncContext(() => useRequest({
      url: () => apiGetSuggestedProductsUrl,
      requetOptions: {
        query: {
          page,
          country_id: selectedCountry.value.id,
          orderBy,
          performance: productPerformance,
          lowest_price_for_sale: lowestPriceForSale,
          most_price_for_sale: mostPriceForSale,
          lowest_commission: lowestCommission,
          most_commission: mostCommission
        },
        watch: [
          page,
          orderBy,
          productPerformance,
          lowestPriceForSale,
          mostPriceForSale,
          lowestCommission,
          mostCommission
        ]
      }
    })), __temp = await __temp, __restore(), __temp);
    function getOrderByValue(value) {
      if (orderBy.value) {
        return productsStatuses.find((item) => item.value === value).title;
      }
      return productsStatuses[0].title;
    }
    function setOrderBy(data) {
      orderBy.value = data.value;
      navigateTo({
        path: "/suggested-products",
        query: {
          ...route.query,
          orderBy: data.value
        }
      });
    }
    function getProductPerformanceValue(value) {
      if (productPerformance.value) {
        return productsActives.find((item) => item.value === value);
      }
      return productsActives[0];
    }
    function setProductPerformance(data) {
      productPerformance.value = data.value;
      navigateTo({
        path: "/suggested-products",
        query: {
          ...route.query,
          performance: data.value
        }
      });
    }
    let timeout;
    function handleLowestPriceForSaleInputValue(e) {
      clearTimeout(timeout);
      timeout = setTimeout(() => {
        lowestPriceForSale.value = e.target.value;
        navigateTo({
          path: "/suggested-products",
          query: {
            ...route.query,
            lowest_price_for_sale: e.target.value
          }
        });
      }, timer);
    }
    function handleMostPriceForSaleInputValue(e) {
      clearTimeout(timeout);
      timeout = setTimeout(() => {
        mostPriceForSale.value = e.target.value;
        navigateTo({
          path: "/suggested-products",
          query: {
            ...route.query,
            most_price_for_sale: e.target.value
          }
        });
      }, timer);
    }
    function handleLowestCommissionInputValue(e) {
      clearTimeout(timeout);
      timeout = setTimeout(() => {
        lowestCommission.value = e.target.value;
        navigateTo({
          path: "/suggested-products",
          query: {
            ...route.query,
            lowest_commission: e.target.value
          }
        });
      }, timer);
    }
    function handleMostCommissionInputValue(e) {
      clearTimeout(timeout);
      timeout = setTimeout(() => {
        mostCommission.value = e.target.value;
        navigateTo({
          path: "/suggested-products",
          query: {
            ...route.query,
            most_commission: e.target.value
          }
        });
      }, timer);
    }
    return (_ctx, _push, _parent, _attrs) => {
      var _a, _b, _c, _d;
      const _component_shared_title = __nuxt_component_0;
      const _component_shared_cards_filter = __nuxt_component_1;
      const _component_shared_menu = __nuxt_component_3;
      const _component_Icon = __nuxt_component_0$1;
      const _component_shared_form_input = __nuxt_component_0$2;
      const _component_lazy_shared_cards_product = __nuxt_component_5_lazy;
      const _component_shared_no_results = __nuxt_component_6;
      const _component_shared_loders_loading = __nuxt_component_7;
      const _component_shared_pagination = __nuxt_component_8;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "bg-primary" }, _attrs))}><p class="text-gray-400 text-2xl mb-9">المنتجات / منتجات مرشحة لك</p>`);
      _push(ssrRenderComponent(_component_shared_title, { title: "منتجات مرشحة لك" }, null, _parent));
      _push(ssrRenderComponent(_component_shared_cards_filter, { class: "!items-start 2xl:items-center flex-wrap gap-9" }, {
        right: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="flex flex-wrap items-center gap-9"${_scopeId}><div class="flex flex-wrap items-center gap-4"${_scopeId}><span class="text-gray-500 text-2xl"${_scopeId}>اداء المنتج:</span>`);
            _push2(ssrRenderComponent(_component_shared_menu, {
              items: unref(productsActives),
              "button-props": {
                class: "leading-normal px-8 py-[.38rem] min-w-0 text-xl border-0 bg-transparent hover:bg-transparent"
              },
              "menu-props": {
                class: "max-w-[9.25rem] px-8"
              }
            }, {
              label: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div type="button" class="flex items-center gap-[19px]"${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_Icon, { name: "iconamoon:arrow-down-2-duotone" }, null, _parent3, _scopeId2));
                  if (getProductPerformanceValue(unref(productPerformance)).color) {
                    _push3(`<span class="w-[1.5rem] h-[.25rem] rounded-[3rem] block" style="${ssrRenderStyle({
                      background: getProductPerformanceValue(unref(productPerformance)).color
                    })}"${_scopeId2}></span>`);
                  } else {
                    _push3(`<!---->`);
                  }
                  _push3(` ${ssrInterpolate(getProductPerformanceValue(unref(productPerformance)).title)}</div>`);
                } else {
                  return [
                    createVNode("div", {
                      type: "button",
                      class: "flex items-center gap-[19px]"
                    }, [
                      createVNode(_component_Icon, { name: "iconamoon:arrow-down-2-duotone" }),
                      getProductPerformanceValue(unref(productPerformance)).color ? (openBlock(), createBlock("span", {
                        key: 0,
                        class: "w-[1.5rem] h-[.25rem] rounded-[3rem] block",
                        style: {
                          background: getProductPerformanceValue(unref(productPerformance)).color
                        }
                      }, null, 4)) : createCommentVNode("", true),
                      createTextVNode(" " + toDisplayString(getProductPerformanceValue(unref(productPerformance)).title), 1)
                    ])
                  ];
                }
              }),
              item: withCtx(({ data }, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<button type="button" class="flex items-center gap-4 mb-[1.19rem] last:mb-0 text-gray-700 text-xl"${_scopeId2}>`);
                  if (data.color) {
                    _push3(`<span class="w-[1.5rem] h-[.25rem] rounded-[3rem] block" style="${ssrRenderStyle({ background: data.color })}"${_scopeId2}></span>`);
                  } else {
                    _push3(`<!---->`);
                  }
                  _push3(` ${ssrInterpolate(data.title)}</button>`);
                } else {
                  return [
                    createVNode("button", {
                      type: "button",
                      class: "flex items-center gap-4 mb-[1.19rem] last:mb-0 text-gray-700 text-xl",
                      onClick: ($event) => setProductPerformance(data)
                    }, [
                      data.color ? (openBlock(), createBlock("span", {
                        key: 0,
                        class: "w-[1.5rem] h-[.25rem] rounded-[3rem] block",
                        style: { background: data.color }
                      }, null, 4)) : createCommentVNode("", true),
                      createTextVNode(" " + toDisplayString(data.title), 1)
                    ], 8, ["onClick"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div><span class="hidden xl:block h-[36px] w-[1px] bg-gray-200"${_scopeId}></span><div class="flex flex-wrap items-center gap-9"${_scopeId}><div class="flex flex-wrap items-center gap-4"${_scopeId}><span class="text-gray-500 text-2xl"${_scopeId}>اقل سعر للبيع:</span><div class="flex items-center gap-4"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_shared_form_input, {
              class: "bg-transparent !w-[4.5625rem] !h-[3.5625rem]",
              type: "text",
              onInput: handleLowestPriceForSaleInputValue,
              "model-value": unref(lowestPriceForSale)
            }, null, _parent2, _scopeId));
            _push2(`<span class="text-gray-200 text-2xl"${_scopeId}>الى</span>`);
            _push2(ssrRenderComponent(_component_shared_form_input, {
              class: "bg-transparent !w-[4.5625rem] !h-[3.5625rem]",
              type: "text",
              onInput: handleMostPriceForSaleInputValue,
              "model-value": unref(mostPriceForSale)
            }, null, _parent2, _scopeId));
            _push2(`</div></div><span class="hidden md:block h-[36px] w-[1px] bg-gray-200"${_scopeId}></span><div class="flex flex-wrap items-center gap-4"${_scopeId}><span class="text-gray-500 text-2xl"${_scopeId}>اقل ربح:</span><div class="flex items-center gap-4"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_shared_form_input, {
              class: "bg-transparent !w-[4.5625rem] !h-[3.5625rem]",
              type: "text",
              onInput: handleLowestCommissionInputValue,
              "model-value": unref(lowestCommission)
            }, null, _parent2, _scopeId));
            _push2(`<span class="text-gray-200 text-2xl"${_scopeId}>الى</span>`);
            _push2(ssrRenderComponent(_component_shared_form_input, {
              class: "bg-transparent !w-[4.5625rem] !h-[3.5625rem]",
              type: "text",
              onInput: handleMostCommissionInputValue,
              "model-value": unref(mostCommission)
            }, null, _parent2, _scopeId));
            _push2(`</div></div></div></div>`);
          } else {
            return [
              createVNode("div", { class: "flex flex-wrap items-center gap-9" }, [
                createVNode("div", { class: "flex flex-wrap items-center gap-4" }, [
                  createVNode("span", { class: "text-gray-500 text-2xl" }, "اداء المنتج:"),
                  createVNode(_component_shared_menu, {
                    items: unref(productsActives),
                    "button-props": {
                      class: "leading-normal px-8 py-[.38rem] min-w-0 text-xl border-0 bg-transparent hover:bg-transparent"
                    },
                    "menu-props": {
                      class: "max-w-[9.25rem] px-8"
                    }
                  }, {
                    label: withCtx(() => [
                      createVNode("div", {
                        type: "button",
                        class: "flex items-center gap-[19px]"
                      }, [
                        createVNode(_component_Icon, { name: "iconamoon:arrow-down-2-duotone" }),
                        getProductPerformanceValue(unref(productPerformance)).color ? (openBlock(), createBlock("span", {
                          key: 0,
                          class: "w-[1.5rem] h-[.25rem] rounded-[3rem] block",
                          style: {
                            background: getProductPerformanceValue(unref(productPerformance)).color
                          }
                        }, null, 4)) : createCommentVNode("", true),
                        createTextVNode(" " + toDisplayString(getProductPerformanceValue(unref(productPerformance)).title), 1)
                      ])
                    ]),
                    item: withCtx(({ data }) => [
                      createVNode("button", {
                        type: "button",
                        class: "flex items-center gap-4 mb-[1.19rem] last:mb-0 text-gray-700 text-xl",
                        onClick: ($event) => setProductPerformance(data)
                      }, [
                        data.color ? (openBlock(), createBlock("span", {
                          key: 0,
                          class: "w-[1.5rem] h-[.25rem] rounded-[3rem] block",
                          style: { background: data.color }
                        }, null, 4)) : createCommentVNode("", true),
                        createTextVNode(" " + toDisplayString(data.title), 1)
                      ], 8, ["onClick"])
                    ]),
                    _: 1
                  }, 8, ["items"])
                ]),
                createVNode("span", { class: "hidden xl:block h-[36px] w-[1px] bg-gray-200" }),
                createVNode("div", { class: "flex flex-wrap items-center gap-9" }, [
                  createVNode("div", { class: "flex flex-wrap items-center gap-4" }, [
                    createVNode("span", { class: "text-gray-500 text-2xl" }, "اقل سعر للبيع:"),
                    createVNode("div", { class: "flex items-center gap-4" }, [
                      createVNode(_component_shared_form_input, {
                        class: "bg-transparent !w-[4.5625rem] !h-[3.5625rem]",
                        type: "text",
                        onInput: handleLowestPriceForSaleInputValue,
                        "model-value": unref(lowestPriceForSale)
                      }, null, 8, ["model-value"]),
                      createVNode("span", { class: "text-gray-200 text-2xl" }, "الى"),
                      createVNode(_component_shared_form_input, {
                        class: "bg-transparent !w-[4.5625rem] !h-[3.5625rem]",
                        type: "text",
                        onInput: handleMostPriceForSaleInputValue,
                        "model-value": unref(mostPriceForSale)
                      }, null, 8, ["model-value"])
                    ])
                  ]),
                  createVNode("span", { class: "hidden md:block h-[36px] w-[1px] bg-gray-200" }),
                  createVNode("div", { class: "flex flex-wrap items-center gap-4" }, [
                    createVNode("span", { class: "text-gray-500 text-2xl" }, "اقل ربح:"),
                    createVNode("div", { class: "flex items-center gap-4" }, [
                      createVNode(_component_shared_form_input, {
                        class: "bg-transparent !w-[4.5625rem] !h-[3.5625rem]",
                        type: "text",
                        onInput: handleLowestCommissionInputValue,
                        "model-value": unref(lowestCommission)
                      }, null, 8, ["model-value"]),
                      createVNode("span", { class: "text-gray-200 text-2xl" }, "الى"),
                      createVNode(_component_shared_form_input, {
                        class: "bg-transparent !w-[4.5625rem] !h-[3.5625rem]",
                        type: "text",
                        onInput: handleMostCommissionInputValue,
                        "model-value": unref(mostCommission)
                      }, null, 8, ["model-value"])
                    ])
                  ])
                ])
              ])
            ];
          }
        }),
        left: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="flex flex-wrap items-center gap-4 whitespace-nowrap"${_scopeId}><span class="text-gray-500 text-2xl"${_scopeId}>ترتيب حسب:</span>`);
            _push2(ssrRenderComponent(_component_shared_menu, {
              items: unref(productsStatuses),
              "button-props": {
                class: "leading-normal px-8 py-[.38rem] min-w-0 text-xl"
              },
              "menu-props": {
                class: "max-w-[12.52rem] px-8"
              }
            }, {
              label: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div type="button" class="flex items-center gap-[19px]"${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_Icon, { name: "iconamoon:arrow-down-2-duotone" }, null, _parent3, _scopeId2));
                  _push3(` ${ssrInterpolate(getOrderByValue(unref(orderBy)))}</div>`);
                } else {
                  return [
                    createVNode("div", {
                      type: "button",
                      class: "flex items-center gap-[19px]"
                    }, [
                      createVNode(_component_Icon, { name: "iconamoon:arrow-down-2-duotone" }),
                      createTextVNode(" " + toDisplayString(getOrderByValue(unref(orderBy))), 1)
                    ])
                  ];
                }
              }),
              item: withCtx(({ data }, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<button type="button" class="flex mb-[1.19rem] last:mb-0 text-gray-700 text-xl"${_scopeId2}>${ssrInterpolate(data.title)}</button>`);
                } else {
                  return [
                    createVNode("button", {
                      type: "button",
                      class: "flex mb-[1.19rem] last:mb-0 text-gray-700 text-xl",
                      onClick: ($event) => setOrderBy(data)
                    }, toDisplayString(data.title), 9, ["onClick"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", { class: "flex flex-wrap items-center gap-4 whitespace-nowrap" }, [
                createVNode("span", { class: "text-gray-500 text-2xl" }, "ترتيب حسب:"),
                createVNode(_component_shared_menu, {
                  items: unref(productsStatuses),
                  "button-props": {
                    class: "leading-normal px-8 py-[.38rem] min-w-0 text-xl"
                  },
                  "menu-props": {
                    class: "max-w-[12.52rem] px-8"
                  }
                }, {
                  label: withCtx(() => [
                    createVNode("div", {
                      type: "button",
                      class: "flex items-center gap-[19px]"
                    }, [
                      createVNode(_component_Icon, { name: "iconamoon:arrow-down-2-duotone" }),
                      createTextVNode(" " + toDisplayString(getOrderByValue(unref(orderBy))), 1)
                    ])
                  ]),
                  item: withCtx(({ data }) => [
                    createVNode("button", {
                      type: "button",
                      class: "flex mb-[1.19rem] last:mb-0 text-gray-700 text-xl",
                      onClick: ($event) => setOrderBy(data)
                    }, toDisplayString(data.title), 9, ["onClick"])
                  ]),
                  _: 1
                }, 8, ["items"])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      if (!unref(pending) && ((_a = unref(productData)) == null ? void 0 : _a.data.length)) {
        _push(`<div class="mt-24 grid md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-9 mb-40 grid-flow-row-dense"><!--[-->`);
        ssrRenderList((_b = unref(productData)) == null ? void 0 : _b.data, (product, key) => {
          _push(ssrRenderComponent(_component_lazy_shared_cards_product, {
            key,
            details: product
          }, null, _parent));
        });
        _push(`<!--]--></div>`);
      } else if (!unref(pending) && !((_c = unref(productData)) == null ? void 0 : _c.data.length)) {
        _push(ssrRenderComponent(_component_shared_no_results, null, null, _parent));
      } else {
        _push(`<div class="w-full flex items-center justify-center my-10">`);
        _push(ssrRenderComponent(_component_shared_loders_loading, null, null, _parent));
        _push(`</div>`);
      }
      _push(ssrRenderComponent(_component_shared_pagination, {
        meta: (_d = unref(productData)) == null ? void 0 : _d.meta,
        page: unref(page),
        onChangePage: unref(changePage)
      }, null, _parent));
      _push(`</div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/suggested-products.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=suggested-products-fe83baa3.js.map
