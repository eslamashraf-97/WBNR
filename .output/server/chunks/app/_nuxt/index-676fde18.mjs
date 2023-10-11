import { b as buildAssetsURL } from '../../handlers/renderer.mjs';
import { _ as __nuxt_component_2$1 } from './PrimaryButton-f179ff1a.mjs';
import { defineComponent, mergeProps, useSSRContext, ref, unref, withCtx, createVNode, defineAsyncComponent } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrInterpolate, ssrRenderAttr } from 'vue/server-renderer';
import { f as flagEg, c as flagEm, b as flagKu, a as flagSa } from './flag-em-1991f2f5.mjs';
import { _ as _export_sfc, n as navigateTo } from '../server.mjs';
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Autoplay, FreeMode } from 'swiper/modules';
import 'vue-bundle-renderer/runtime';
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
import 'devalue';
import '@unhead/ssr';
import 'unhead';
import '@unhead/shared';
import './LoaderButton-2476704e.mjs';
import 'vue-router';
import 'vue3-toastify';

const _imports_4 = "" + buildAssetsURL("hero.51fe05e5.svg");
const _sfc_main$6 = {};
function _sfc_ssrRender$2(_ctx, _push, _parent, _attrs) {
  const _component_shared_buttons_primary_button = __nuxt_component_2$1;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "grid grid-cols-1 lg:grid-cols-2 gap-8 items-center pb-40" }, _attrs))}><div class="max-w-[42.8rem]"><h2 class="text-gray-800 text-8xl leading-[8.4rem] mb-5"> \u0647\u0646\u0633\u0627\u0639\u062F\u0643 \u062A\u0628\u062F\u0623 <br> \u062A\u062C\u0627\u0631\u062A\u0643 \u0627\u0644\u0625\u0644\u0643\u062A\u0631\u0648\u0646\u064A\u0629 </h2><p class="mb-16 text-gray-400 text-2xl leading-normal"> \u0647\u0646\u0633\u0627\u0639\u062F\u0643 \u062A\u0628\u062F\u0623 \u0628\u0643\u0644 \u0633\u0647\u0648\u0644\u0629 \u0648\u0628\u062F\u0648\u0646 \u062E\u0628\u0631\u0629 . \u0644\u0623\u0646\u0646\u0627 \u0647\u0646\u0648\u0641\u0631 \u0644\u0643 \u0645\u0646\u062A\u062C\u0627\u062A \u0645\u062A\u0646\u0648\u0639\u0629 \u0628\u0627\u0654\u0641\u0636\u0644 \u0633\u0639\u0631 \u064A\u0636\u0645\u0646 \u0644\u0643 \u0627\u0654\u0643\u0628\u0631 \u0631\u0628\u062D </p>`);
  _push(ssrRenderComponent(_component_shared_buttons_primary_button, {
    submitTitle: "\u0633\u062C\u0644 \u0627\u0644\u0623\u0646",
    class: "mb-16 w-[14.4rem] h-[4.18rem] min-w-0"
  }, null, _parent));
  _push(`<div class="flex items-center gap-5"><span class="text-2xl text-gray-400">\u0645\u062A\u0627\u062D \u0641\u064A:</span><div class="flex items-center gap-3"><img${ssrRenderAttr("src", flagEg)} alt="" class=""><img${ssrRenderAttr("src", flagEm)} alt="" class=""><img${ssrRenderAttr("src", flagKu)} alt="" class=""><img${ssrRenderAttr("src", flagSa)} alt="" class=""></div></div></div><div class="flex justify-end order-first lg:order-last"><div class="max-w-[46.8rem]"><img${ssrRenderAttr("src", _imports_4)} alt="" class=""></div></div></div>`);
}
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/landing/Hero.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$6, [["ssrRender", _sfc_ssrRender$2]]);
const Step1 = "" + buildAssetsURL("step-one.d8f6a941.svg");
const Step2 = "" + buildAssetsURL("step-two.840a6808.svg");
const Step3 = "" + buildAssetsURL("step-three.5fe8f80b.svg");
const Step4 = "" + buildAssetsURL("step-four.2ea261a0.svg");
const _sfc_main$5 = {
  __name: "Steps",
  __ssrInlineRender: true,
  setup(__props) {
    const steps = [
      {
        title: "\u0627\u062E\u062A\u0627\u0631 \u0627\u0644\u0645\u0646\u062A\u062C",
        desc: "\u0645\u0646 \u063A\u064A\u0631 \u0645\u0627 \u062A\u0634\u064A\u0644 \u0647\u0645 \u0627\u0644\u062A\u062E\u0632\u064A\u0646 \u0648 \u0631\u0623\u0633 \u0627\u0644\u0645\u0627\u0644",
        image: Step1
      },
      {
        title: "\u062A\u0633\u0648\u064A\u0642 \u0627\u0644\u0645\u0646\u062A\u062C",
        desc: "\u0645\u0646 \u063A\u064A\u0631 \u0645\u0627 \u062A\u0634\u064A\u0644 \u0647\u0645 \u0627\u0644\u062A\u062E\u0632\u064A\u0646 \u0648 \u0631\u0623\u0633 \u0627\u0644\u0645\u0627\u0644",
        image: Step2
      },
      {
        title: "\u0627\u0644\u0634\u062D\u0646 \u0648\u0627\u0644\u062A\u0648\u0635\u064A\u0644",
        desc: "\u0645\u0646 \u063A\u064A\u0631 \u0645\u0627 \u062A\u0634\u064A\u0644 \u0647\u0645 \u0627\u0644\u062A\u062E\u0632\u064A\u0646 \u0648 \u0631\u0623\u0633 \u0627\u0644\u0645\u0627\u0644",
        image: Step3
      },
      {
        title: "\u062A\u062D\u0635\u064A\u0644 \u0627\u0644\u0623\u0631\u0628\u0627\u062D",
        desc: "\u0645\u0646 \u063A\u064A\u0631 \u0645\u0627 \u062A\u0634\u064A\u0644 \u0647\u0645 \u0627\u0644\u062A\u062E\u0632\u064A\u0646 \u0648 \u0631\u0623\u0633 \u0627\u0644\u0645\u0627\u0644",
        image: Step4
      }
    ];
    const activeIndex = ref(0);
    return (_ctx, _push, _parent, _attrs) => {
      const _cssVars = { style: {
        "--01ec3b67": unref(activeIndex)
      } };
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "pb-40 pt-32" }, _attrs, _cssVars))} data-v-b117062f><div class="relative h-[0.0625rem] bg-primary-200 mb-[3.125rem]" id="steps-line-wrapper" data-v-b117062f><div class="h-full bg-primary-300 w-0" id="steps-line-inner" data-v-b117062f></div></div><div class="grid grid-cols-4 gap-x-12" data-v-b117062f><!--[-->`);
      ssrRenderList(steps, (step, index) => {
        _push(`<div data-v-b117062f><div class="shadow-main bg-white rounded-2xl max-w-xs p-10 step-box relative border border-transparent" data-v-b117062f><div class="step-box-tooltip" data-v-b117062f>\u0643\u0644 \u0627\u0644\u0644\u0649 \u0639\u0644\u064A\u0643</div><h4 class="text-[1.875rem] text-gray-700 leading-[3rem] mb-2" data-v-b117062f>${ssrInterpolate(step.title)}</h4><p class="leading-normal text-gray-400 text-xl mb-2" data-v-b117062f>${ssrInterpolate(step.desc)}</p><div class="flex justify-end" data-v-b117062f><img${ssrRenderAttr("src", step.image)} alt="" class="w-[6.10794rem] h-[6.25rem]" data-v-b117062f></div></div></div>`);
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
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["__scopeId", "data-v-b117062f"]]);
const __nuxt_component_2_lazy = /* @__PURE__ */ defineAsyncComponent(() => import('./Category-f6134eaa.mjs').then((m) => m.default || m));
const _sfc_main$4 = {
  __name: "Categories",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_swiper = Swiper;
      const _component_swiper_slide = SwiperSlide;
      const _component_lazy_shared_cards_category = __nuxt_component_2_lazy;
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "pb-40" }, _attrs))}><h2 class="mb-24 text-center text-6xl text-gray-700 leading-[6rem]"> \u0627\u0642\u0633\u0627\u0645 \u0648\u0645\u0646\u062A\u062C\u0627\u062A \u0645\u062A\u0646\u0648\u0639\u0629 </h2><div class="mb-9">`);
      _push(ssrRenderComponent(_component_swiper, {
        modules: [unref(Autoplay), unref(FreeMode)],
        slidesPerView: 4.4,
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
        class: "category-swiper"
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
        slidesPerView: 4.1,
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
        class: "category-swiper"
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
const _sfc_main$3 = {
  __name: "Features",
  __ssrInlineRender: true,
  setup(__props) {
    const feaures = [
      {
        title: "\u0633\u0647\u0648\u0644\u0629 \u0639\u0645\u0644\u064A\u0629 \u0633\u062D\u0628 \u0627\u0644\u0623\u0631\u0628\u0627\u062D",
        desc: "\u062E\u064A\u0627\u0631\u0627\u062A \u0645\u062E\u062A\u0644\u0641\u0629 \u0644\u0644\u0633\u062D\u0628 \u0645\u0646 \u062D\u0633\u0627\u0628 \u0628\u0646\u0643\u064A \u0627\u0648 \u0645\u062D\u0641\u0638\u0629 \u0627\u0644\u0643\u062A\u0631\u0648\u0646\u064A\u0629",
        image: null
      },
      {
        title: "\u0631\u0628\u0637 \u062D\u0633\u0627\u0628\u0643 \u0628\u0645\u062A\u062C\u0631\u0643",
        desc: "\u0627\u062E\u062A\u0627\u0631 \u0627\u0644\u0645\u0646\u062A\u062C \u0648\u0628\u0636\u063A\u0637\u0629 \u0632\u0631  \u064A\u0643\u0648\u0646 \u0641\u064A \u0645\u062A\u062C\u0631\u0643",
        image: null
      },
      {
        title: "\u0633\u0647\u0648\u0644\u0629 \u0639\u0645\u0644\u064A\u0629 \u0633\u062D\u0628 \u0627\u0644\u0623\u0631\u0628\u0627\u062D",
        desc: "\u062E\u064A\u0627\u0631\u0627\u062A \u0645\u062E\u062A\u0644\u0641\u0629 \u0644\u0644\u0633\u062D\u0628 \u0645\u0646 \u062D\u0633\u0627\u0628 \u0628\u0646\u0643\u064A \u0627\u0648 \u0645\u062D\u0641\u0638\u0629 \u0627\u0644\u0643\u062A\u0631\u0648\u0646\u064A\u0629",
        image: null
      },
      {
        title: "\u0631\u0628\u0637 \u062D\u0633\u0627\u0628\u0643 \u0628\u0645\u062A\u062C\u0631\u0643",
        desc: "\u0627\u062E\u062A\u0627\u0631 \u0627\u0644\u0645\u0646\u062A\u062C \u0648\u0628\u0636\u063A\u0637\u0629 \u0632\u0631  \u064A\u0643\u0648\u0646 \u0641\u064A \u0645\u062A\u062C\u0631\u0643",
        image: null
      }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "grid justify-center gap-16" }, _attrs))} data-v-8ab6a2c7><!--[-->`);
      ssrRenderList(feaures, (feat, index) => {
        _push(`<div class="flex justify-center" data-v-8ab6a2c7><div class="p-16 max-w-[61.5rem] flex-1 shadow-main rounded-2xl bg-white border border-primary-300 flex items-center justify-between gap-5" data-v-8ab6a2c7><div data-v-8ab6a2c7><h5 class="mb-[0.56rem] text-gray-700 text-5xl leading-[4.8rem]" data-v-8ab6a2c7>${ssrInterpolate(feat.title)}</h5><p class="text-gray-400 text-2xl leading-[2.8rem] feature-desc flex items-center gap-4" data-v-8ab6a2c7>${ssrInterpolate(feat.desc)}</p></div><img${ssrRenderAttr("src", feat.image)} alt="" class="w-[18.75rem] h-[11.375rem]" data-v-8ab6a2c7></div></div>`);
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
const __nuxt_component_3 = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["__scopeId", "data-v-8ab6a2c7"]]);
const _imports_0$1 = "" + buildAssetsURL("google-play.216a9197.png");
const _imports_1 = "" + buildAssetsURL("app-app-store.ba7c1b88.png");
const _imports_2 = "" + buildAssetsURL("app-screen.3427a43c.png");
const _sfc_main$2 = {};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs) {
  _push(`<section${ssrRenderAttrs(mergeProps({ class: "py-24" }, _attrs))}><h2 class="mb-24 text-center text-6xl text-gray-700 leading-[6rem]"> \u062A\u0642\u062F\u0631 \u062A\u062D\u0645\u0644 \u0627\u0644\u062A\u0637\u0628\u064A\u0642 \u0627\u0644\u062E\u0627\u0635 \u0628\u064A\u0646\u0627 </h2><div class="flex items-center gap-6 justify-center mb-16"><a href="#" target="_blank"><img${ssrRenderAttr("src", _imports_0$1)} alt="" class="img-fluid"></a><a href="#" target="_blank"><img${ssrRenderAttr("src", _imports_1)} alt="" class="img-fluid"></a></div><div class="flex justify-center"><img${ssrRenderAttr("src", _imports_2)} alt="" class="max-w-[56.25rem]"></div></section>`);
}
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/landing/App.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_4 = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["ssrRender", _sfc_ssrRender$1]]);
const _imports_0 = "" + buildAssetsURL("subscribe.47446678.svg");
const _sfc_main$1 = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_shared_buttons_primary_button = __nuxt_component_2$1;
  _push(`<section${ssrRenderAttrs(mergeProps({ class: "py-40" }, _attrs))}><div class="flex items-center justify-between gap-4 p-16 bg-primary-300 rounded-2xl shadow-main"><div><h5 class="mb-[3.12rem] text-gray-100 text-5xl leading-[4.8rem]"> \u0633\u062C\u0644 \u062F\u0644\u0648\u0642\u062A\u064A \u0639\u0644\u0634\u0627\u0646 \u062A\u0634\u0648\u0641 \u0643\u0644 \u0627\u0644\u0645\u0646\u062A\u062C\u0627\u062A </h5>`);
  _push(ssrRenderComponent(_component_shared_buttons_primary_button, {
    "submit-title": "\u0633\u062C\u0644 \u0627\u0644\u0623\u0646",
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

export { _sfc_main as default };
//# sourceMappingURL=index-676fde18.mjs.map
