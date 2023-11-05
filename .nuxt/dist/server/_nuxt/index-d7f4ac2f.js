import { _ as __nuxt_component_3$1 } from "./PrimaryButton-3e0b2318.js";
import { mergeProps, unref, useSSRContext, ref, withCtx, createVNode, defineAsyncComponent, defineComponent } from "vue";
import "hookable";
import { _ as _export_sfc, a as navigateTo } from "../server.mjs";
import "destr";
import "devalue";
import "defu";
import "klona";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr, ssrRenderList, ssrInterpolate } from "vue/server-renderer";
import { _ as _imports_0$2, c as _imports_1$1, b as _imports_2$1, a as _imports_3 } from "./flag-em-5e451014.js";
import { Swiper, SwiperSlide } from "swiper/vue";
import { Autoplay, FreeMode } from "swiper/modules";
import "./LoaderButton-81aa4875.js";
import "ofetch";
import "#internal/nitro";
import "unctx";
import "unhead";
import "@unhead/shared";
import "vue-router";
import "h3";
import "ufo";
import "cookie-es";
import "ohash";
import "vue3-toastify";
const _imports_4 = "" + __buildAssetsURL("hero.d954705c.svg");
const _sfc_main$6 = {};
function _sfc_ssrRender$2(_ctx, _push, _parent, _attrs) {
  const _component_shared_buttons_primary_button = __nuxt_component_3$1;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "grid grid-cols-1 lg:grid-cols-2 gap-8 items-center pb-40" }, _attrs))}><div class="w-full lg:max-w-[42.8rem] text-center lg:text-start"><h2 class="text-gray-800 text-6xl leading-[6.4rem] xl:text-8xl xl:leading-[8.4rem] mb-5"> هنساعدك تبدأ <br> تجارتك الإلكترونية </h2><p class="mb-16 text-gray-400 text-2xl leading-normal"> هنساعدك تبدأ بكل سهولة وبدون خبرة . لأننا هنوفر لك منتجات متنوعة بأفضل سعر يضمن لك أكبر ربح </p>`);
  _push(ssrRenderComponent(_component_shared_buttons_primary_button, {
    submitTitle: "سجل الأن",
    class: "mb-16 w-[14.4rem] h-[4.18rem] min-w-0",
    onClick: ($event) => ("navigateTo" in _ctx ? _ctx.navigateTo : unref(navigateTo))("/auth/register")
  }, null, _parent));
  _push(`<div class="flex justify-center lg:justify-start items-center gap-5"><span class="text-2xl text-gray-400">متاح في:</span><div class="flex items-center gap-3"><img${ssrRenderAttr("src", _imports_0$2)} alt="" class=""><img${ssrRenderAttr("src", _imports_1$1)} alt="" class=""><img${ssrRenderAttr("src", _imports_2$1)} alt="" class=""><img${ssrRenderAttr("src", _imports_3)} alt="" class=""></div></div></div><div class="flex justify-center lg:justify-end order-first lg:order-last"><div class="max-w-[46.8rem]"><img${ssrRenderAttr("src", _imports_4)} alt="" class="max-w-full"></div></div></div>`);
}
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/landing/Hero.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$6, [["ssrRender", _sfc_ssrRender$2]]);
const Step1 = "" + __buildAssetsURL("step-one.fb372b62.svg");
const Step2 = "" + __buildAssetsURL("step-two.3b2b4bea.svg");
const Step3 = "" + __buildAssetsURL("step-three.fdfaf7d8.svg");
const Step4 = "" + __buildAssetsURL("step-four.ddb2f310.svg");
const Steps_vue_vue_type_style_index_0_scoped_2d515e0a_lang = "";
const _sfc_main$5 = {
  __name: "Steps",
  __ssrInlineRender: true,
  setup(__props) {
    const steps = [
      {
        title: "اختار المنتج",
        desc: "من غير ما تشيل هم التخزين و رأس المال",
        image: Step1
      },
      {
        title: "تسويق المنتج",
        desc: "من غير ما تشيل هم التخزين و رأس المال",
        image: Step2
      },
      {
        title: "الشحن والتوصيل",
        desc: "من غير ما تشيل هم التخزين و رأس المال",
        image: Step3
      },
      {
        title: "تحصيل الأرباح",
        desc: "من غير ما تشيل هم التخزين و رأس المال",
        image: Step4
      }
    ];
    const activeIndex = ref(0);
    return (_ctx, _push, _parent, _attrs) => {
      const _cssVars = { style: {
        "--6c6df072": unref(activeIndex)
      } };
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "pb-40 xl:pt-32" }, _attrs, _cssVars))} data-v-2d515e0a><div class="hidden xl:block relative h-[0.0625rem] bg-primary-200 mb-[3.125rem]" id="steps-line-wrapper" data-v-2d515e0a><div class="h-full bg-primary-300 w-0" id="steps-line-inner" data-v-2d515e0a></div></div><div class="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-12" data-v-2d515e0a><!--[-->`);
      ssrRenderList(steps, (step, index) => {
        _push(`<div data-v-2d515e0a><div class="shadow-main bg-white rounded-2xl xl:max-w-xs p-10 step-box relative border border-transparent" data-v-2d515e0a><div class="step-box-tooltip hidden xl:block" data-v-2d515e0a>كل اللى عليك</div><h4 class="text-[1.875rem] text-gray-700 leading-[3rem] mb-2" data-v-2d515e0a>${ssrInterpolate(step.title)}</h4><p class="leading-normal text-gray-400 text-xl mb-2" data-v-2d515e0a>${ssrInterpolate(step.desc)}</p><div class="flex justify-end" data-v-2d515e0a><img${ssrRenderAttr("src", step.image)} alt="" class="w-[6.10794rem] h-[6.25rem]" data-v-2d515e0a></div></div></div>`);
      });
      _push(`<!--]--></div></section>`);
    };
  }
};
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/landing/Steps.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["__scopeId", "data-v-2d515e0a"]]);
const Categories_vue_vue_type_style_index_0_lang = "";
const __nuxt_component_2_lazy = /* @__PURE__ */ defineAsyncComponent(() => import("./Category-4866381d.js").then((m) => m.default || m));
const _sfc_main$4 = {
  __name: "Categories",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_swiper = Swiper;
      const _component_swiper_slide = SwiperSlide;
      const _component_lazy_shared_cards_category = __nuxt_component_2_lazy;
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "pb-40" }, _attrs))}><h2 class="mb-24 text-center text-6xl text-gray-700 leading-[6rem]"> اقسام ومنتجات متنوعة </h2><div class="mb-9">`);
      _push(ssrRenderComponent(_component_swiper, {
        modules: [unref(Autoplay), unref(FreeMode)],
        slidesPerView: 1.2,
        spaceBetween: 32,
        loop: true,
        autoplay: {
          delay: 1,
          disableOnInteraction: false
        },
        disableOnInteraction: true,
        centeredSlides: true,
        speed: 6e3,
        loopedSlides: 4,
        allowTouchMove: false,
        freeMode: true,
        class: "category-swiper",
        breakpoints: {
          767: {
            slidesPerView: 2.2
          },
          991: {
            slidesPerView: 3
          },
          1500: {
            slidesPerView: 4
          }
        }
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_swiper_slide, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_lazy_shared_cards_category, null, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_lazy_shared_cards_category)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_swiper_slide, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_lazy_shared_cards_category, null, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_lazy_shared_cards_category)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_swiper_slide, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_lazy_shared_cards_category, null, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_lazy_shared_cards_category)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_swiper_slide, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_lazy_shared_cards_category, null, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_lazy_shared_cards_category)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_swiper_slide, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_lazy_shared_cards_category, null, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_lazy_shared_cards_category)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_swiper_slide, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_lazy_shared_cards_category, null, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_lazy_shared_cards_category)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_swiper_slide, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_lazy_shared_cards_category, null, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_lazy_shared_cards_category)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_swiper_slide, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_lazy_shared_cards_category, null, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_lazy_shared_cards_category)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_swiper_slide, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_lazy_shared_cards_category, null, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_lazy_shared_cards_category)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_swiper_slide, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_lazy_shared_cards_category, null, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_lazy_shared_cards_category)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_swiper_slide, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_lazy_shared_cards_category, null, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_lazy_shared_cards_category)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_swiper_slide, null, {
                default: withCtx(() => [
                  createVNode(_component_lazy_shared_cards_category)
                ]),
                _: 1
              }),
              createVNode(_component_swiper_slide, null, {
                default: withCtx(() => [
                  createVNode(_component_lazy_shared_cards_category)
                ]),
                _: 1
              }),
              createVNode(_component_swiper_slide, null, {
                default: withCtx(() => [
                  createVNode(_component_lazy_shared_cards_category)
                ]),
                _: 1
              }),
              createVNode(_component_swiper_slide, null, {
                default: withCtx(() => [
                  createVNode(_component_lazy_shared_cards_category)
                ]),
                _: 1
              }),
              createVNode(_component_swiper_slide, null, {
                default: withCtx(() => [
                  createVNode(_component_lazy_shared_cards_category)
                ]),
                _: 1
              }),
              createVNode(_component_swiper_slide, null, {
                default: withCtx(() => [
                  createVNode(_component_lazy_shared_cards_category)
                ]),
                _: 1
              }),
              createVNode(_component_swiper_slide, null, {
                default: withCtx(() => [
                  createVNode(_component_lazy_shared_cards_category)
                ]),
                _: 1
              }),
              createVNode(_component_swiper_slide, null, {
                default: withCtx(() => [
                  createVNode(_component_lazy_shared_cards_category)
                ]),
                _: 1
              }),
              createVNode(_component_swiper_slide, null, {
                default: withCtx(() => [
                  createVNode(_component_lazy_shared_cards_category)
                ]),
                _: 1
              }),
              createVNode(_component_swiper_slide, null, {
                default: withCtx(() => [
                  createVNode(_component_lazy_shared_cards_category)
                ]),
                _: 1
              }),
              createVNode(_component_swiper_slide, null, {
                default: withCtx(() => [
                  createVNode(_component_lazy_shared_cards_category)
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
      _push(ssrRenderComponent(_component_swiper, {
        modules: [unref(Autoplay), unref(FreeMode)],
        slidesPerView: 1.2,
        spaceBetween: 32,
        loop: true,
        autoplay: {
          delay: 1,
          reverseDirection: true
        },
        disableOnInteraction: true,
        centeredSlides: true,
        speed: 6e3,
        loopedSlides: 4,
        allowTouchMove: false,
        freeMode: true,
        class: "category-swiper",
        breakpoints: {
          767: {
            slidesPerView: 2.2
          },
          991: {
            slidesPerView: 3
          },
          1500: {
            slidesPerView: 4
          }
        }
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_swiper_slide, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_lazy_shared_cards_category, null, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_lazy_shared_cards_category)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_swiper_slide, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_lazy_shared_cards_category, null, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_lazy_shared_cards_category)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_swiper_slide, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_lazy_shared_cards_category, null, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_lazy_shared_cards_category)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_swiper_slide, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_lazy_shared_cards_category, null, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_lazy_shared_cards_category)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_swiper_slide, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_lazy_shared_cards_category, null, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_lazy_shared_cards_category)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_swiper_slide, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_lazy_shared_cards_category, null, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_lazy_shared_cards_category)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_swiper_slide, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_lazy_shared_cards_category, null, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_lazy_shared_cards_category)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_swiper_slide, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_lazy_shared_cards_category, null, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_lazy_shared_cards_category)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_swiper_slide, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_lazy_shared_cards_category, null, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_lazy_shared_cards_category)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_swiper_slide, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_lazy_shared_cards_category, null, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_lazy_shared_cards_category)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_swiper_slide, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_lazy_shared_cards_category, null, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_lazy_shared_cards_category)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_swiper_slide, null, {
                default: withCtx(() => [
                  createVNode(_component_lazy_shared_cards_category)
                ]),
                _: 1
              }),
              createVNode(_component_swiper_slide, null, {
                default: withCtx(() => [
                  createVNode(_component_lazy_shared_cards_category)
                ]),
                _: 1
              }),
              createVNode(_component_swiper_slide, null, {
                default: withCtx(() => [
                  createVNode(_component_lazy_shared_cards_category)
                ]),
                _: 1
              }),
              createVNode(_component_swiper_slide, null, {
                default: withCtx(() => [
                  createVNode(_component_lazy_shared_cards_category)
                ]),
                _: 1
              }),
              createVNode(_component_swiper_slide, null, {
                default: withCtx(() => [
                  createVNode(_component_lazy_shared_cards_category)
                ]),
                _: 1
              }),
              createVNode(_component_swiper_slide, null, {
                default: withCtx(() => [
                  createVNode(_component_lazy_shared_cards_category)
                ]),
                _: 1
              }),
              createVNode(_component_swiper_slide, null, {
                default: withCtx(() => [
                  createVNode(_component_lazy_shared_cards_category)
                ]),
                _: 1
              }),
              createVNode(_component_swiper_slide, null, {
                default: withCtx(() => [
                  createVNode(_component_lazy_shared_cards_category)
                ]),
                _: 1
              }),
              createVNode(_component_swiper_slide, null, {
                default: withCtx(() => [
                  createVNode(_component_lazy_shared_cards_category)
                ]),
                _: 1
              }),
              createVNode(_component_swiper_slide, null, {
                default: withCtx(() => [
                  createVNode(_component_lazy_shared_cards_category)
                ]),
                _: 1
              }),
              createVNode(_component_swiper_slide, null, {
                default: withCtx(() => [
                  createVNode(_component_lazy_shared_cards_category)
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</section>`);
    };
  }
};
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/landing/Categories.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const __nuxt_component_2 = _sfc_main$4;
const Features_vue_vue_type_style_index_0_scoped_e987181d_lang = "";
const _sfc_main$3 = {
  __name: "Features",
  __ssrInlineRender: true,
  setup(__props) {
    const feaures = [
      {
        title: "سهولة عملية سحب الأرباح",
        desc: "خيارات مختلفة للسحب من حساب بنكي او محفظة الكترونية",
        image: null
      },
      {
        title: "ربط حسابك بمتجرك",
        desc: "اختار المنتج وبضغطة زر  يكون في متجرك",
        image: null
      },
      {
        title: "سهولة عملية سحب الأرباح",
        desc: "خيارات مختلفة للسحب من حساب بنكي او محفظة الكترونية",
        image: null
      },
      {
        title: "ربط حسابك بمتجرك",
        desc: "اختار المنتج وبضغطة زر  يكون في متجرك",
        image: null
      }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "grid justify-center gap-16" }, _attrs))} data-v-e987181d><!--[-->`);
      ssrRenderList(feaures, (feat, index) => {
        _push(`<div class="flex justify-center" data-v-e987181d><div class="p-16 max-w-[61.5rem] flex-1 shadow-main rounded-2xl bg-white border border-primary-300 flex flex-wrap-reverse md:flex-nowrap items-center justify-between gap-5" data-v-e987181d><div data-v-e987181d><h5 class="mb-[0.56rem] text-gray-700 text-5xl leading-[4.8rem]" data-v-e987181d>${ssrInterpolate(feat.title)}</h5><p class="text-gray-400 text-2xl leading-[2.8rem] feature-desc flex items-center gap-4" data-v-e987181d>${ssrInterpolate(feat.desc)}</p></div><img${ssrRenderAttr("src", feat.image)} alt="" class="w-[18.75rem] h-[11.375rem]" data-v-e987181d></div></div>`);
      });
      _push(`<!--]--></div>`);
    };
  }
};
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/landing/Features.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const __nuxt_component_3 = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["__scopeId", "data-v-e987181d"]]);
const _imports_0$1 = "" + __buildAssetsURL("google-play.216a9197.png");
const _imports_1 = "" + __buildAssetsURL("app-app-store.ba7c1b88.png");
const _imports_2 = "" + __buildAssetsURL("app-screen.3427a43c.png");
const _sfc_main$2 = {};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs) {
  _push(`<section${ssrRenderAttrs(mergeProps({ class: "py-24" }, _attrs))}><h2 class="mb-24 text-center text-6xl text-gray-700 leading-[6rem]"> تقدر تحمل التطبيق الخاص بينا </h2><div class="flex items-center gap-6 justify-center mb-16"><a href="#" target="_blank"><img${ssrRenderAttr("src", _imports_0$1)} alt="" class="img-fluid"></a><a href="#" target="_blank"><img${ssrRenderAttr("src", _imports_1)} alt="" class="img-fluid"></a></div><div class="flex justify-center"><img${ssrRenderAttr("src", _imports_2)} alt="" class="max-w-full"></div></section>`);
}
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/landing/App.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_4 = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["ssrRender", _sfc_ssrRender$1]]);
const _imports_0 = "" + __buildAssetsURL("subscribe.ac912b6a.svg");
const _sfc_main$1 = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_shared_buttons_primary_button = __nuxt_component_3$1;
  _push(`<section${ssrRenderAttrs(mergeProps({ class: "py-40" }, _attrs))}><div class="flex flex-wrap-reverse lg:flex-nowrap items-center justify-between gap-4 p-16 bg-primary-300 rounded-2xl shadow-main"><div><h5 class="mb-[3.12rem] text-gray-100 text-5xl leading-[4.8rem]"> سجل دلوقتي علشان تشوف كل المنتجات </h5>`);
  _push(ssrRenderComponent(_component_shared_buttons_primary_button, {
    "submit-title": "سجل الأن",
    onClick: ($event) => ("navigateTo" in _ctx ? _ctx.navigateTo : unref(navigateTo))("/auth/register"),
    class: "!bg-gray-100 !text-primary-300"
  }, null, _parent));
  _push(`</div><div class=""><img${ssrRenderAttr("src", _imports_0)} alt="" class=""></div></div></section>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/landing/Subscribe.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_5 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender]]);
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_landing_hero = __nuxt_component_0;
      const _component_landing_steps = __nuxt_component_1;
      const _component_landing_categories = __nuxt_component_2;
      const _component_landing_features = __nuxt_component_3;
      const _component_landing_app = __nuxt_component_4;
      const _component_landing_subscribe = __nuxt_component_5;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "bg-primary" }, _attrs))}>`);
      _push(ssrRenderComponent(_component_landing_hero, null, null, _parent));
      _push(ssrRenderComponent(_component_landing_steps, null, null, _parent));
      _push(ssrRenderComponent(_component_landing_categories, null, null, _parent));
      _push(ssrRenderComponent(_component_landing_features, null, null, _parent));
      _push(ssrRenderComponent(_component_landing_app, null, null, _parent));
      _push(ssrRenderComponent(_component_landing_subscribe, null, null, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=index-d7f4ac2f.js.map
