import { b as buildAssetsURL } from '../../renderer.mjs';
import { _ as __nuxt_component_0$2 } from './Input-1e7796d8.mjs';
import __nuxt_component_0$1 from './Icon-b69f18a8.mjs';
import { _ as __nuxt_component_1$1 } from './nuxt-link-7fd3a776.mjs';
import { _ as __nuxt_component_3 } from './menu-87b0daac.mjs';
import { u as useCountries } from './useCountries-716a6161.mjs';
import { withAsyncContext, useSSRContext, ref, unref, mergeProps, withCtx, createVNode, withModifiers, toDisplayString, createTextVNode, openBlock, createBlock, Fragment, renderList, createCommentVNode, Transition } from 'file://D:/WBNR/WBNR/node_modules/vue/index.mjs';
import { ssrRenderComponent, ssrRenderSlot, ssrRenderList, ssrRenderClass, ssrInterpolate, ssrRenderAttr } from 'file://D:/WBNR/WBNR/node_modules/vue/server-renderer/index.mjs';
import { u as useApi } from './useApi-73d2615e.mjs';
import { Menu, MenuButton, MenuItems, MenuItem } from 'file://D:/WBNR/WBNR/node_modules/@headlessui/vue/dist/headlessui.esm.js';
import { w as apiGetCountriesUrl, b as apiGetCartLengthUrl, u as apiGetSavedProductsUrl, q as apiGetProductsUrl, r as apiGetCateoriesUrl, x as apiGetSubCateoriesUrl } from './index-f05587d3.mjs';
import { _ as _export_sfc } from '../server.mjs';
import { u as useCartLength } from './useCartLength-2a51b0ba.mjs';
import { u as useSavedProducts } from './useSavedProducts-e3314d55.mjs';
import { u as useAuth } from './useAuth-e93f3d3d.mjs';
import { _ as __nuxt_component_1, a as _imports_0$1 } from './MainFooter-6adb6433.mjs';
import { u as useRequest } from './useRequest-d66ec7ae.mjs';
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
import 'file://D:/WBNR/WBNR/node_modules/vue3-toastify/dist/index.mjs';
import 'file://D:/WBNR/WBNR/node_modules/unctx/dist/index.mjs';
import 'file://D:/WBNR/WBNR/node_modules/vue-router/dist/vue-router.node.mjs';
import 'file://D:/WBNR/WBNR/node_modules/cookie-es/dist/index.mjs';

const _sfc_main$3 = {
  __name: "CountriesMenu",
  __ssrInlineRender: true,
  setup(__props) {
    const { countries, selectedCountry, setSelectedCountry } = useCountries();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_shared_menu = __nuxt_component_3;
      const _component_Icon = __nuxt_component_0$1;
      _push(ssrRenderComponent(_component_shared_menu, mergeProps({
        items: unref(countries),
        "button-props": {
          class: `h-[3.6rem]  px-8 py-[.38rem]`
        },
        "menu-props": {
          class: `max-w-[13.5rem]`
        }
      }, _attrs), {
        label: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="flex items-center gap-[19px]"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_Icon, { name: "iconamoon:arrow-down-2-duotone" }, null, _parent2, _scopeId));
            _push2(`<img${ssrRenderAttr("src", unref(selectedCountry).image)} class="max-w-[2rem]" alt=""${_scopeId}></div>`);
          } else {
            return [
              createVNode("div", { class: "flex items-center gap-[19px]" }, [
                createVNode(_component_Icon, { name: "iconamoon:arrow-down-2-duotone" }),
                createVNode("img", {
                  src: unref(selectedCountry).image,
                  class: "max-w-[2rem]",
                  alt: ""
                }, null, 8, ["src"])
              ])
            ];
          }
        }),
        item: withCtx(({ data }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<button type="button" class="flex gap-[1.19rem] items-center mb-[1.19rem] last:mb-0 py-2"${_scopeId}><img${ssrRenderAttr("src", data.image)} class="max-w-[2rem]" alt=""${_scopeId}><span${_scopeId}>${ssrInterpolate(data.name)}</span></button>`);
          } else {
            return [
              createVNode("button", {
                type: "button",
                class: "flex gap-[1.19rem] items-center mb-[1.19rem] last:mb-0 py-2",
                onClick: ($event) => unref(setSelectedCountry)(data)
              }, [
                createVNode("img", {
                  src: data.image,
                  class: "max-w-[2rem]",
                  alt: ""
                }, null, 8, ["src"]),
                createVNode("span", null, toDisplayString(data.name), 1)
              ], 8, ["onClick"])
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
};
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/shared/CountriesMenu.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const __nuxt_component_4 = _sfc_main$3;
const _sfc_main$2 = {
  __name: "CategoryMenu",
  __ssrInlineRender: true,
  async setup(__props) {
    var _a, _b, _c, _d;
    let __temp, __restore;
    const { selectedCountry } = useCountries();
    const { fire: fireGetCategories } = useApi({
      url: () => apiGetCateoriesUrl
    });
    const { data: categoriesData, pending: categoriesPending } = ([__temp, __restore] = withAsyncContext(() => fireGetCategories()), __temp = await __temp, __restore(), __temp);
    const selectedCategory = ref((_a = categoriesData.value) == null ? void 0 : _a.data[0].id);
    const selectedCategoryData = ref((_b = categoriesData.value) == null ? void 0 : _b.data[0]);
    function changeCategory(cat) {
      selectedCategory.value = cat.id;
      selectedCategoryData.value = cat;
      productsData.value.data = [];
    }
    const { fire: fireGetSubCategories } = useApi({
      url: () => apiGetSubCateoriesUrl + "/" + selectedCategory.value,
      requestOptions: {
        watch: [selectedCategory]
      }
    });
    const { data: subCategoriesData, pending: subCategoriesPending } = ([__temp, __restore] = withAsyncContext(() => fireGetSubCategories()), __temp = await __temp, __restore(), __temp);
    const selectedSubCategory = ref(
      (_c = subCategoriesData.value) == null ? void 0 : _c.data.sub_categories[0].id
    );
    const selectedSubCategoryData = ref(
      (_d = subCategoriesData.value) == null ? void 0 : _d.data.sub_categories[0]
    );
    function changeSubCategory(subCat) {
      selectedSubCategory.value = subCat.id;
      selectedSubCategoryData.value = subCat;
    }
    const { fire: fireGetProducts } = useApi({
      url: () => apiGetProductsUrl,
      requestOptions: {
        query: {
          country_id: selectedCountry.value.id,
          category_id: selectedSubCategory
        },
        watch: [selectedSubCategory]
      }
    });
    const { data: productsData, pending: productsPending } = ([__temp, __restore] = withAsyncContext(() => fireGetProducts()), __temp = await __temp, __restore(), __temp);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Icon = __nuxt_component_0$1;
      const _component_nuxt_link = __nuxt_component_1$1;
      _push(ssrRenderComponent(unref(Menu), mergeProps({
        as: "div",
        class: "relative inline-block text-left"
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div data-v-5d093d57${_scopeId}>`);
            _push2(ssrRenderComponent(unref(MenuButton), { class: "rounded-sm border border-gray-300 hover:bg-gray-200 flex items-center text-2xl font-normal h-[3.6rem] px-8 py-[.38rem] bg-primary-100 text-primary-300" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="flex items-center gap-[19px]" data-v-5d093d57${_scopeId2}><span data-v-5d093d57${_scopeId2}>\u062C\u0645\u064A\u0639 \u0627\u0644\u0641\u0626\u0627\u062A</span>`);
                  _push3(ssrRenderComponent(_component_Icon, { name: "iconamoon:arrow-down-2-duotone" }, null, _parent3, _scopeId2));
                  _push3(`</div>`);
                } else {
                  return [
                    createVNode("div", { class: "flex items-center gap-[19px]" }, [
                      createVNode("span", null, "\u062C\u0645\u064A\u0639 \u0627\u0644\u0641\u0626\u0627\u062A"),
                      createVNode(_component_Icon, { name: "iconamoon:arrow-down-2-duotone" })
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div>`);
            _push2(ssrRenderComponent(unref(MenuItems), { class: "absolute left-0 z-10 mt-2 border border-gray-200 rounded-[12px] px-8 py-9 bg-gray-100 text-start" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="py-1 flex" data-v-5d093d57${_scopeId2}><div class="overflow-auto max-h-[300px] w-[20rem] items-scroller" data-v-5d093d57${_scopeId2}><!--[-->`);
                  ssrRenderList(unref(categoriesData).data, (cat, index) => {
                    _push3(ssrRenderComponent(unref(MenuItem), {
                      key: cat.id
                    }, {
                      default: withCtx(({ active }, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`<div class="${ssrRenderClass([{
                            "text-primary-300": unref(selectedCategoryData).id === cat.id
                          }, "whitespace-nowrap text-xl text-gray-700 font-bold mb-[1rem] py-[.75rem] flex justify-between items-center cursor-pointer"])}" data-v-5d093d57${_scopeId3}><span data-v-5d093d57${_scopeId3}>${ssrInterpolate(cat.name)}</span>`);
                          _push4(ssrRenderComponent(_component_Icon, { name: "carbon:chevron-left" }, null, _parent4, _scopeId3));
                          _push4(`</div>`);
                        } else {
                          return [
                            createVNode("div", {
                              onClick: withModifiers(($event) => changeCategory(cat), ["stop", "prevent"]),
                              class: ["whitespace-nowrap text-xl text-gray-700 font-bold mb-[1rem] py-[.75rem] flex justify-between items-center cursor-pointer", {
                                "text-primary-300": unref(selectedCategoryData).id === cat.id
                              }]
                            }, [
                              createVNode("span", null, toDisplayString(cat.name), 1),
                              createVNode(_component_Icon, { name: "carbon:chevron-left" })
                            ], 10, ["onClick"])
                          ];
                        }
                      }),
                      _: 2
                    }, _parent3, _scopeId2));
                  });
                  _push3(`<!--]--></div>`);
                  if (unref(subCategoriesData).data.sub_categories.length) {
                    _push3(`<div class="overflow-auto max-h-[300px] w-[20rem] items-scroller" data-v-5d093d57${_scopeId2}>`);
                    if (unref(subCategoriesPending)) {
                      _push3(`<!--[--><div class="h-[30px] bg-primary-100 animate-pulse mb-[1rem]" data-v-5d093d57${_scopeId2}></div><div class="h-[30px] bg-primary-100 animate-pulse mb-[1rem]" data-v-5d093d57${_scopeId2}></div><div class="h-[30px] bg-primary-100 animate-pulse mb-[1rem]" data-v-5d093d57${_scopeId2}></div><div class="h-[30px] bg-primary-100 animate-pulse mb-[1rem]" data-v-5d093d57${_scopeId2}></div><!--]-->`);
                    } else {
                      _push3(`<!--[-->`);
                      ssrRenderList(unref(subCategoriesData).data.sub_categories, (subCat, index) => {
                        _push3(ssrRenderComponent(unref(MenuItem), {
                          key: subCat.id
                        }, {
                          default: withCtx(({ active }, _push4, _parent4, _scopeId3) => {
                            if (_push4) {
                              _push4(`<div class="${ssrRenderClass([{
                                "text-primary-300": unref(selectedSubCategoryData).id === subCat.id
                              }, "whitespace-nowrap text-xl text-gray-700 font-normal mb-[1rem] py-[.75rem] flex justify-between items-center cursor-pointer"])}" data-v-5d093d57${_scopeId3}><span data-v-5d093d57${_scopeId3}>${ssrInterpolate(subCat.name)}</span>`);
                              _push4(ssrRenderComponent(_component_Icon, { name: "carbon:chevron-left" }, null, _parent4, _scopeId3));
                              _push4(`</div>`);
                            } else {
                              return [
                                createVNode("div", {
                                  onClick: withModifiers(($event) => changeSubCategory(subCat), ["stop", "prevent"]),
                                  class: ["whitespace-nowrap text-xl text-gray-700 font-normal mb-[1rem] py-[.75rem] flex justify-between items-center cursor-pointer", {
                                    "text-primary-300": unref(selectedSubCategoryData).id === subCat.id
                                  }]
                                }, [
                                  createVNode("span", null, toDisplayString(subCat.name), 1),
                                  createVNode(_component_Icon, { name: "carbon:chevron-left" })
                                ], 10, ["onClick"])
                              ];
                            }
                          }),
                          _: 2
                        }, _parent3, _scopeId2));
                      });
                      _push3(`<!--]-->`);
                    }
                    _push3(`</div>`);
                  } else {
                    _push3(`<!---->`);
                  }
                  if (unref(productsData).data.length) {
                    _push3(`<div class="overflow-auto max-h-[300px] w-[20rem] items-scroller" data-v-5d093d57${_scopeId2}>`);
                    if (unref(productsPending)) {
                      _push3(`<!--[--><div class="h-[30px] bg-primary-100 animate-pulse mb-[1rem]" data-v-5d093d57${_scopeId2}></div><div class="h-[30px] bg-primary-100 animate-pulse mb-[1rem]" data-v-5d093d57${_scopeId2}></div><div class="h-[30px] bg-primary-100 animate-pulse mb-[1rem]" data-v-5d093d57${_scopeId2}></div><div class="h-[30px] bg-primary-100 animate-pulse mb-[1rem]" data-v-5d093d57${_scopeId2}></div><!--]-->`);
                    } else {
                      _push3(`<!--[-->`);
                      ssrRenderList(unref(productsData).data, (product, index) => {
                        _push3(ssrRenderComponent(unref(MenuItem), {
                          key: product.id
                        }, {
                          default: withCtx(({ active }, _push4, _parent4, _scopeId3) => {
                            if (_push4) {
                              _push4(ssrRenderComponent(_component_nuxt_link, {
                                to: `/product/${product.id}`,
                                class: "whitespace-nowrap text-xl text-gray-700 font-normal mb-[1rem] py-[.75rem] flex justify-between items-center cursor-pointer"
                              }, {
                                default: withCtx((_3, _push5, _parent5, _scopeId4) => {
                                  if (_push5) {
                                    _push5(`${ssrInterpolate(product.title)}`);
                                  } else {
                                    return [
                                      createTextVNode(toDisplayString(product.title), 1)
                                    ];
                                  }
                                }),
                                _: 2
                              }, _parent4, _scopeId3));
                            } else {
                              return [
                                createVNode(_component_nuxt_link, {
                                  to: `/product/${product.id}`,
                                  class: "whitespace-nowrap text-xl text-gray-700 font-normal mb-[1rem] py-[.75rem] flex justify-between items-center cursor-pointer"
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode(toDisplayString(product.title), 1)
                                  ]),
                                  _: 2
                                }, 1032, ["to"])
                              ];
                            }
                          }),
                          _: 2
                        }, _parent3, _scopeId2));
                      });
                      _push3(`<!--]-->`);
                    }
                    _push3(`</div>`);
                  } else {
                    _push3(`<!---->`);
                  }
                  _push3(`</div>`);
                } else {
                  return [
                    createVNode("div", { class: "py-1 flex" }, [
                      createVNode("div", { class: "overflow-auto max-h-[300px] w-[20rem] items-scroller" }, [
                        (openBlock(true), createBlock(Fragment, null, renderList(unref(categoriesData).data, (cat, index) => {
                          return openBlock(), createBlock(unref(MenuItem), {
                            key: cat.id
                          }, {
                            default: withCtx(({ active }) => [
                              createVNode("div", {
                                onClick: withModifiers(($event) => changeCategory(cat), ["stop", "prevent"]),
                                class: ["whitespace-nowrap text-xl text-gray-700 font-bold mb-[1rem] py-[.75rem] flex justify-between items-center cursor-pointer", {
                                  "text-primary-300": unref(selectedCategoryData).id === cat.id
                                }]
                              }, [
                                createVNode("span", null, toDisplayString(cat.name), 1),
                                createVNode(_component_Icon, { name: "carbon:chevron-left" })
                              ], 10, ["onClick"])
                            ]),
                            _: 2
                          }, 1024);
                        }), 128))
                      ]),
                      unref(subCategoriesData).data.sub_categories.length ? (openBlock(), createBlock("div", {
                        key: 0,
                        class: "overflow-auto max-h-[300px] w-[20rem] items-scroller"
                      }, [
                        unref(subCategoriesPending) ? (openBlock(), createBlock(Fragment, { key: 0 }, [
                          createVNode("div", {
                            onClick: withModifiers(() => {
                            }, ["stop", "prevent"]),
                            class: "h-[30px] bg-primary-100 animate-pulse mb-[1rem]"
                          }, null, 8, ["onClick"]),
                          createVNode("div", {
                            onClick: withModifiers(() => {
                            }, ["stop", "prevent"]),
                            class: "h-[30px] bg-primary-100 animate-pulse mb-[1rem]"
                          }, null, 8, ["onClick"]),
                          createVNode("div", {
                            onClick: withModifiers(() => {
                            }, ["stop", "prevent"]),
                            class: "h-[30px] bg-primary-100 animate-pulse mb-[1rem]"
                          }, null, 8, ["onClick"]),
                          createVNode("div", {
                            onClick: withModifiers(() => {
                            }, ["stop", "prevent"]),
                            class: "h-[30px] bg-primary-100 animate-pulse mb-[1rem]"
                          }, null, 8, ["onClick"])
                        ], 64)) : (openBlock(true), createBlock(Fragment, { key: 1 }, renderList(unref(subCategoriesData).data.sub_categories, (subCat, index) => {
                          return openBlock(), createBlock(unref(MenuItem), {
                            key: subCat.id
                          }, {
                            default: withCtx(({ active }) => [
                              createVNode("div", {
                                onClick: withModifiers(($event) => changeSubCategory(subCat), ["stop", "prevent"]),
                                class: ["whitespace-nowrap text-xl text-gray-700 font-normal mb-[1rem] py-[.75rem] flex justify-between items-center cursor-pointer", {
                                  "text-primary-300": unref(selectedSubCategoryData).id === subCat.id
                                }]
                              }, [
                                createVNode("span", null, toDisplayString(subCat.name), 1),
                                createVNode(_component_Icon, { name: "carbon:chevron-left" })
                              ], 10, ["onClick"])
                            ]),
                            _: 2
                          }, 1024);
                        }), 128))
                      ])) : createCommentVNode("", true),
                      unref(productsData).data.length ? (openBlock(), createBlock("div", {
                        key: 1,
                        class: "overflow-auto max-h-[300px] w-[20rem] items-scroller"
                      }, [
                        unref(productsPending) ? (openBlock(), createBlock(Fragment, { key: 0 }, [
                          createVNode("div", {
                            onClick: withModifiers(() => {
                            }, ["stop", "prevent"]),
                            class: "h-[30px] bg-primary-100 animate-pulse mb-[1rem]"
                          }, null, 8, ["onClick"]),
                          createVNode("div", {
                            onClick: withModifiers(() => {
                            }, ["stop", "prevent"]),
                            class: "h-[30px] bg-primary-100 animate-pulse mb-[1rem]"
                          }, null, 8, ["onClick"]),
                          createVNode("div", {
                            onClick: withModifiers(() => {
                            }, ["stop", "prevent"]),
                            class: "h-[30px] bg-primary-100 animate-pulse mb-[1rem]"
                          }, null, 8, ["onClick"]),
                          createVNode("div", {
                            onClick: withModifiers(() => {
                            }, ["stop", "prevent"]),
                            class: "h-[30px] bg-primary-100 animate-pulse mb-[1rem]"
                          }, null, 8, ["onClick"])
                        ], 64)) : (openBlock(true), createBlock(Fragment, { key: 1 }, renderList(unref(productsData).data, (product, index) => {
                          return openBlock(), createBlock(unref(MenuItem), {
                            key: product.id
                          }, {
                            default: withCtx(({ active }) => [
                              createVNode(_component_nuxt_link, {
                                to: `/product/${product.id}`,
                                class: "whitespace-nowrap text-xl text-gray-700 font-normal mb-[1rem] py-[.75rem] flex justify-between items-center cursor-pointer"
                              }, {
                                default: withCtx(() => [
                                  createTextVNode(toDisplayString(product.title), 1)
                                ]),
                                _: 2
                              }, 1032, ["to"])
                            ]),
                            _: 2
                          }, 1024);
                        }), 128))
                      ])) : createCommentVNode("", true)
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode("div", null, [
                createVNode(unref(MenuButton), { class: "rounded-sm border border-gray-300 hover:bg-gray-200 flex items-center text-2xl font-normal h-[3.6rem] px-8 py-[.38rem] bg-primary-100 text-primary-300" }, {
                  default: withCtx(() => [
                    createVNode("div", { class: "flex items-center gap-[19px]" }, [
                      createVNode("span", null, "\u062C\u0645\u064A\u0639 \u0627\u0644\u0641\u0626\u0627\u062A"),
                      createVNode(_component_Icon, { name: "iconamoon:arrow-down-2-duotone" })
                    ])
                  ]),
                  _: 1
                })
              ]),
              createVNode(Transition, {
                "enter-active-class": "transition ease-out duration-100",
                "enter-from-class": "transform opacity-0 scale-95",
                "enter-to-class": "transform opacity-100 scale-100",
                "leave-active-class": "transition ease-in duration-75",
                "leave-from-class": "transform opacity-100 scale-100",
                "leave-to-class": "transform opacity-0 scale-95"
              }, {
                default: withCtx(() => [
                  createVNode(unref(MenuItems), { class: "absolute left-0 z-10 mt-2 border border-gray-200 rounded-[12px] px-8 py-9 bg-gray-100 text-start" }, {
                    default: withCtx(() => [
                      createVNode("div", { class: "py-1 flex" }, [
                        createVNode("div", { class: "overflow-auto max-h-[300px] w-[20rem] items-scroller" }, [
                          (openBlock(true), createBlock(Fragment, null, renderList(unref(categoriesData).data, (cat, index) => {
                            return openBlock(), createBlock(unref(MenuItem), {
                              key: cat.id
                            }, {
                              default: withCtx(({ active }) => [
                                createVNode("div", {
                                  onClick: withModifiers(($event) => changeCategory(cat), ["stop", "prevent"]),
                                  class: ["whitespace-nowrap text-xl text-gray-700 font-bold mb-[1rem] py-[.75rem] flex justify-between items-center cursor-pointer", {
                                    "text-primary-300": unref(selectedCategoryData).id === cat.id
                                  }]
                                }, [
                                  createVNode("span", null, toDisplayString(cat.name), 1),
                                  createVNode(_component_Icon, { name: "carbon:chevron-left" })
                                ], 10, ["onClick"])
                              ]),
                              _: 2
                            }, 1024);
                          }), 128))
                        ]),
                        unref(subCategoriesData).data.sub_categories.length ? (openBlock(), createBlock("div", {
                          key: 0,
                          class: "overflow-auto max-h-[300px] w-[20rem] items-scroller"
                        }, [
                          unref(subCategoriesPending) ? (openBlock(), createBlock(Fragment, { key: 0 }, [
                            createVNode("div", {
                              onClick: withModifiers(() => {
                              }, ["stop", "prevent"]),
                              class: "h-[30px] bg-primary-100 animate-pulse mb-[1rem]"
                            }, null, 8, ["onClick"]),
                            createVNode("div", {
                              onClick: withModifiers(() => {
                              }, ["stop", "prevent"]),
                              class: "h-[30px] bg-primary-100 animate-pulse mb-[1rem]"
                            }, null, 8, ["onClick"]),
                            createVNode("div", {
                              onClick: withModifiers(() => {
                              }, ["stop", "prevent"]),
                              class: "h-[30px] bg-primary-100 animate-pulse mb-[1rem]"
                            }, null, 8, ["onClick"]),
                            createVNode("div", {
                              onClick: withModifiers(() => {
                              }, ["stop", "prevent"]),
                              class: "h-[30px] bg-primary-100 animate-pulse mb-[1rem]"
                            }, null, 8, ["onClick"])
                          ], 64)) : (openBlock(true), createBlock(Fragment, { key: 1 }, renderList(unref(subCategoriesData).data.sub_categories, (subCat, index) => {
                            return openBlock(), createBlock(unref(MenuItem), {
                              key: subCat.id
                            }, {
                              default: withCtx(({ active }) => [
                                createVNode("div", {
                                  onClick: withModifiers(($event) => changeSubCategory(subCat), ["stop", "prevent"]),
                                  class: ["whitespace-nowrap text-xl text-gray-700 font-normal mb-[1rem] py-[.75rem] flex justify-between items-center cursor-pointer", {
                                    "text-primary-300": unref(selectedSubCategoryData).id === subCat.id
                                  }]
                                }, [
                                  createVNode("span", null, toDisplayString(subCat.name), 1),
                                  createVNode(_component_Icon, { name: "carbon:chevron-left" })
                                ], 10, ["onClick"])
                              ]),
                              _: 2
                            }, 1024);
                          }), 128))
                        ])) : createCommentVNode("", true),
                        unref(productsData).data.length ? (openBlock(), createBlock("div", {
                          key: 1,
                          class: "overflow-auto max-h-[300px] w-[20rem] items-scroller"
                        }, [
                          unref(productsPending) ? (openBlock(), createBlock(Fragment, { key: 0 }, [
                            createVNode("div", {
                              onClick: withModifiers(() => {
                              }, ["stop", "prevent"]),
                              class: "h-[30px] bg-primary-100 animate-pulse mb-[1rem]"
                            }, null, 8, ["onClick"]),
                            createVNode("div", {
                              onClick: withModifiers(() => {
                              }, ["stop", "prevent"]),
                              class: "h-[30px] bg-primary-100 animate-pulse mb-[1rem]"
                            }, null, 8, ["onClick"]),
                            createVNode("div", {
                              onClick: withModifiers(() => {
                              }, ["stop", "prevent"]),
                              class: "h-[30px] bg-primary-100 animate-pulse mb-[1rem]"
                            }, null, 8, ["onClick"]),
                            createVNode("div", {
                              onClick: withModifiers(() => {
                              }, ["stop", "prevent"]),
                              class: "h-[30px] bg-primary-100 animate-pulse mb-[1rem]"
                            }, null, 8, ["onClick"])
                          ], 64)) : (openBlock(true), createBlock(Fragment, { key: 1 }, renderList(unref(productsData).data, (product, index) => {
                            return openBlock(), createBlock(unref(MenuItem), {
                              key: product.id
                            }, {
                              default: withCtx(({ active }) => [
                                createVNode(_component_nuxt_link, {
                                  to: `/product/${product.id}`,
                                  class: "whitespace-nowrap text-xl text-gray-700 font-normal mb-[1rem] py-[.75rem] flex justify-between items-center cursor-pointer"
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode(toDisplayString(product.title), 1)
                                  ]),
                                  _: 2
                                }, 1032, ["to"])
                              ]),
                              _: 2
                            }, 1024);
                          }), 128))
                        ])) : createCommentVNode("", true)
                      ])
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
};
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/shared/CategoryMenu.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_5 = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__scopeId", "data-v-5d093d57"]]);
const AvatarImage = "" + buildAssetsURL("avatar.a9b68373.svg");
const LogoutImage = "" + buildAssetsURL("logout.e574a3de.svg");
const _sfc_main$1 = {
  __name: "Navbar",
  __ssrInlineRender: true,
  setup(__props) {
    const { cartLength } = useCartLength();
    const { savedProductsCount } = useSavedProducts();
    const { removeUserData, user } = useAuth();
    const userMenu = [
      {
        image: AvatarImage,
        link: "/profile",
        title: "\u0627\u0639\u062F\u0627\u062F\u0627\u062A \u0627\u0644\u062D\u0633\u0627\u0628"
      },
      {
        image: LogoutImage,
        function: () => {
          removeUserData();
          window.location.reload();
        },
        title: "\u062A\u0633\u062C\u064A\u0644 \u0627\u0644\u062E\u0631\u0648\u062C"
      }
    ];
    const menuIsOpen = ref(false);
    function toggleMenu() {
      menuIsOpen.value = !menuIsOpen.value;
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_shared_form_input = __nuxt_component_0$2;
      const _component_icon = __nuxt_component_0$1;
      const _component_Icon = __nuxt_component_0$1;
      const _component_nuxt_link = __nuxt_component_1$1;
      const _component_shared_menu = __nuxt_component_3;
      const _component_NuxtLink = __nuxt_component_1$1;
      const _component_shared_countries_menu = __nuxt_component_4;
      const _component_shared_category_menu = __nuxt_component_5;
      _push(`<!--[--><div class="bg-white py-8" data-v-f4211fac><div class="container flex justify-between items-center border-b border-b-primary-100 pb-[24px] mb-[24px]" data-v-f4211fac><div class="flex items-center gap-[64px]" data-v-f4211fac><img${ssrRenderAttr("src", _imports_0$1)} data-v-f4211fac><div class="relative layout-navbar-search hidden xl:block" data-v-f4211fac>`);
      _push(ssrRenderComponent(_component_shared_form_input, {
        placeholder: "\u0645\u0627 \u0627\u0644\u0630\u064A \u062A\u0628\u062D\u062B \u0639\u0646\u0647\u061F",
        type: "text",
        class: "pe-[80px] !w-[35rem]"
      }, null, _parent));
      _push(`<span class="absolute top-0 left-0 bottom-0 rounded-tl-[11px] rounded-bl-[11px] bg-primary-100 text-primary-300 w-[75px] flex items-center justify-center border border-gray-200 border-s-0" data-v-f4211fac>`);
      _push(ssrRenderComponent(_component_icon, {
        name: "system-uicons:search",
        class: "text-4xl"
      }, null, _parent));
      _push(`</span></div></div><div class="flex flex-col-reverse sm:flex-row items-end sm:items-center gap-4 sm:gap-8" data-v-f4211fac><div class="flex items-center gap-9" data-v-f4211fac>`);
      _push(ssrRenderComponent(_component_Icon, {
        name: "pepicons-pencil:bell",
        class: "text-gray-600 text-2xl"
      }, null, _parent));
      _push(ssrRenderComponent(_component_nuxt_link, {
        to: "/saved-products",
        class: "flex items-center gap-2 text-2xl"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span data-v-f4211fac${_scopeId}>${ssrInterpolate(unref(savedProductsCount))}</span>`);
            _push2(ssrRenderComponent(_component_Icon, {
              name: "fluent:bookmark-20-regular",
              class: "text-gray-600"
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode("span", null, toDisplayString(unref(savedProductsCount)), 1),
              createVNode(_component_Icon, {
                name: "fluent:bookmark-20-regular",
                class: "text-gray-600"
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_nuxt_link, {
        to: "/cart",
        class: "flex items-center gap-2 text-2xl"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span data-v-f4211fac${_scopeId}>${ssrInterpolate(unref(cartLength))}</span>`);
            _push2(ssrRenderComponent(_component_Icon, {
              name: "solar:cart-large-minimalistic-linear",
              class: "text-gray-600"
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode("span", null, toDisplayString(unref(cartLength)), 1),
              createVNode(_component_Icon, {
                name: "solar:cart-large-minimalistic-linear",
                class: "text-gray-600"
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
      _push(ssrRenderComponent(_component_shared_menu, {
        items: userMenu,
        "menu-props": {
          class: "!min-w-0 text-start"
        },
        "button-props": {
          class: "!px-8"
        }
      }, {
        label: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="flex items-center gap-[19px]" data-v-f4211fac${_scopeId}>`);
            _push2(ssrRenderComponent(_component_Icon, { name: "iconamoon:arrow-down-2-duotone" }, null, _parent2, _scopeId));
            _push2(`<span class="leading-normal text-2xl text-gray-700" data-v-f4211fac${_scopeId}>${ssrInterpolate(unref(user).name.substring(0, 5))}</span></div>`);
          } else {
            return [
              createVNode("div", { class: "flex items-center gap-[19px]" }, [
                createVNode(_component_Icon, { name: "iconamoon:arrow-down-2-duotone" }),
                createVNode("span", { class: "leading-normal text-2xl text-gray-700" }, toDisplayString(unref(user).name.substring(0, 5)), 1)
              ])
            ];
          }
        }),
        item: withCtx(({ data }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            if (data.link) {
              _push2(ssrRenderComponent(_component_nuxt_link, {
                to: data.link,
                class: "flex items-center gap-6 leading-normal text-2xl text-gray-700 mb-[1.19rem]"
              }, {
                default: withCtx((_, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<img${ssrRenderAttr("src", data.image)}${ssrRenderAttr("alt", data.title)} class="" data-v-f4211fac${_scopeId2}><span class="flex-1 whitespace-nowrap" data-v-f4211fac${_scopeId2}>${ssrInterpolate(data.title)}</span>`);
                  } else {
                    return [
                      createVNode("img", {
                        src: data.image,
                        alt: data.title,
                        class: ""
                      }, null, 8, ["src", "alt"]),
                      createVNode("span", { class: "flex-1 whitespace-nowrap" }, toDisplayString(data.title), 1)
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
            } else {
              _push2(`<button type="button" class="flex items-center gap-6 leading-normal text-2xl text-gray-700" data-v-f4211fac${_scopeId}><img${ssrRenderAttr("src", data.image)}${ssrRenderAttr("alt", data.title)} class="" data-v-f4211fac${_scopeId}><span class="flex-1 whitespace-nowrap" data-v-f4211fac${_scopeId}>${ssrInterpolate(data.title)}</span></button>`);
            }
          } else {
            return [
              data.link ? (openBlock(), createBlock(_component_nuxt_link, {
                key: 0,
                to: data.link,
                class: "flex items-center gap-6 leading-normal text-2xl text-gray-700 mb-[1.19rem]"
              }, {
                default: withCtx(() => [
                  createVNode("img", {
                    src: data.image,
                    alt: data.title,
                    class: ""
                  }, null, 8, ["src", "alt"]),
                  createVNode("span", { class: "flex-1 whitespace-nowrap" }, toDisplayString(data.title), 1)
                ]),
                _: 2
              }, 1032, ["to"])) : (openBlock(), createBlock("button", {
                key: 1,
                type: "button",
                onClick: ($event) => data.function(),
                class: "flex items-center gap-6 leading-normal text-2xl text-gray-700"
              }, [
                createVNode("img", {
                  src: data.image,
                  alt: data.title,
                  class: ""
                }, null, 8, ["src", "alt"]),
                createVNode("span", { class: "flex-1 whitespace-nowrap" }, toDisplayString(data.title), 1)
              ], 8, ["onClick"]))
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div><div class="container flex justify-between items-center" data-v-f4211fac><nav class="hidden xl:flex items-center gap-[24px]" data-v-f4211fac>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/home",
        class: "px-[36px] py-[6px] h-[57px] text-[24px] text-gray-500 font-semibold border-b border-b-transparent"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`\u0627\u0644\u0631\u0626\u064A\u0633\u064A\u0629`);
          } else {
            return [
              createTextVNode("\u0627\u0644\u0631\u0626\u064A\u0633\u064A\u0629")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/suggested-products",
        class: "px-[36px] py-[6px] h-[57px] text-[24px] text-gray-500 font-semibold border-b border-b-transparent"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`\u0645\u0646\u062A\u062C\u0627\u062A \u0645\u0631\u0634\u062D\u0629 \u0644\u0643`);
          } else {
            return [
              createTextVNode("\u0645\u0646\u062A\u062C\u0627\u062A \u0645\u0631\u0634\u062D\u0629 \u0644\u0643")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<span class="h-[36px] w-[1px] bg-gray-200" data-v-f4211fac></span>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/dashboard",
        class: "px-[36px] py-[6px] h-[57px] text-[24px] text-gray-500 font-semibold border-b border-b-transparent"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`\u0644\u0648\u062D\u0629 \u0627\u0644\u062A\u062D\u0643\u0645`);
          } else {
            return [
              createTextVNode("\u0644\u0648\u062D\u0629 \u0627\u0644\u062A\u062D\u0643\u0645")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</nav><button type="button" class="block xl:hidden text-gray-500" data-v-f4211fac>`);
      _push(ssrRenderComponent(_component_Icon, {
        name: "uil:bars",
        class: "text-5xl"
      }, null, _parent));
      _push(`</button><div class="flex items-center gap-[36px]" data-v-f4211fac>`);
      _push(ssrRenderComponent(_component_shared_countries_menu, null, null, _parent));
      _push(`<div class="hidden xl:block" data-v-f4211fac>`);
      _push(ssrRenderComponent(_component_shared_category_menu, null, null, _parent));
      _push(`</div></div></div></div><div class="${ssrRenderClass([{ "!left-0": unref(menuIsOpen) }, "fixed top-0 bottom-0 left-full w-full z-50 transition-all"])}" data-v-f4211fac><div class="absolute inset-0 bg-black/10" data-v-f4211fac></div><nav class="flex flex-col gap-[24px] relative z-10 bg-white w-[300px] h-full p-8" data-v-f4211fac>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/home",
        class: "h-[57px] text-2xl text-gray-500 font-semibold border-b border-b-transparent",
        onClick: toggleMenu
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`\u0627\u0644\u0631\u0626\u064A\u0633\u064A\u0629`);
          } else {
            return [
              createTextVNode("\u0627\u0644\u0631\u0626\u064A\u0633\u064A\u0629")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/suggested-products",
        class: "h-[57px] text-2xl text-gray-500 font-semibold border-b border-b-transparent",
        onClick: toggleMenu
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`\u0645\u0646\u062A\u062C\u0627\u062A \u0645\u0631\u0634\u062D\u0629 \u0644\u0643`);
          } else {
            return [
              createTextVNode("\u0645\u0646\u062A\u062C\u0627\u062A \u0645\u0631\u0634\u062D\u0629 \u0644\u0643")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/dashboard",
        class: "h-[57px] text-2xl text-gray-500 font-semibold border-b border-b-transparent",
        onClick: toggleMenu
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`\u0644\u0648\u062D\u0629 \u0627\u0644\u062A\u062D\u0643\u0645`);
          } else {
            return [
              createTextVNode("\u0644\u0648\u062D\u0629 \u0627\u0644\u062A\u062D\u0643\u0645")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</nav></div><!--]-->`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/layouts/default/Navbar.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-f4211fac"]]);
const _sfc_main = {
  __name: "default",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const { setCountries, selectedCountry } = useCountries();
    const { setCartLength } = useCartLength();
    const { setSavedProductsCount } = useSavedProducts();
    [__temp, __restore] = withAsyncContext(() => useRequest({
      url: apiGetCountriesUrl,
      requetOptions: {
        onResponse: (response) => {
          setCountries(response.response._data);
        }
      }
    })), await __temp, __restore();
    [__temp, __restore] = withAsyncContext(() => {
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
    }), await __temp, __restore();
    [__temp, __restore] = withAsyncContext(() => {
      var _a;
      return useRequest({
        url: () => apiGetSavedProductsUrl,
        requetOptions: {
          query: { country_id: (_a = selectedCountry.value) == null ? void 0 : _a.id },
          onResponse: (response) => {
            var _a2, _b, _c;
            console.log((_a2 = response.response) == null ? void 0 : _a2._data);
            setSavedProductsCount((_c = (_b = response.response) == null ? void 0 : _b._data) == null ? void 0 : _c.data.length);
          }
        }
      });
    }), await __temp, __restore();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_layouts_default_navbar = __nuxt_component_0;
      const _component_layouts_main_footer = __nuxt_component_1;
      _push(`<!--[-->`);
      _push(ssrRenderComponent(_component_layouts_default_navbar, null, null, _parent));
      _push(`<div class="min-h-screen pt-[128px] pb-[160px] container">`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</div>`);
      _push(ssrRenderComponent(_component_layouts_main_footer, null, null, _parent));
      _push(`<!--]-->`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/default.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=default-7328e932.mjs.map
