import { _ as __nuxt_component_0$1 } from './Input-03e500d0.mjs';
import __nuxt_component_0$2 from './Icon-44226a77.mjs';
import { _ as __nuxt_component_2 } from './menu-32072702.mjs';
import { _ as __nuxt_component_1$1 } from './nuxt-link-3fa67823.mjs';
import { useSSRContext, mergeProps, withCtx, createTextVNode, createVNode, toDisplayString } from 'vue';
import { ssrRenderComponent, ssrRenderSlot, ssrRenderAttrs, ssrRenderAttr, ssrInterpolate } from 'vue/server-renderer';
import { a as _imports_0$1, _ as __nuxt_component_1 } from './MainFooter-28b08124.mjs';
import { f as flagEg, a as flagSa, b as flagKu, c as flagEm } from './flag-em-1991f2f5.mjs';
import { _ as _export_sfc } from '../server.mjs';
import './config-c055070f.mjs';
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
import '@iconify/vue/dist/offline';
import '@iconify/vue';
import '@headlessui/vue';
import '../../handlers/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'devalue';
import '@unhead/ssr';
import 'unhead';
import '@unhead/shared';
import 'vue-router';
import 'vue3-toastify';

const _sfc_main$1 = {
  __name: "Navbar",
  __ssrInlineRender: true,
  setup(__props) {
    const flagsItems = [
      {
        image: flagEg,
        title: "\u0645\u0635\u0631",
        id: "eg"
      },
      {
        image: flagSa,
        title: "\u0627\u0644\u0633\u0639\u0648\u062F\u064A\u0629",
        id: "sa"
      },
      {
        image: flagKu,
        title: "\u0627\u0644\u0643\u0648\u064A\u062A",
        id: "ku"
      },
      {
        image: flagEm,
        title: "\u0627\u0644\u0627\u0645\u0627\u0631\u0627\u062A",
        id: "em"
      }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_shared_form_input = __nuxt_component_0$1;
      const _component_icon = __nuxt_component_0$2;
      const _component_Icon = __nuxt_component_0$2;
      const _component_shared_menu = __nuxt_component_2;
      const _component_NuxtLink = __nuxt_component_1$1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "bg-white py-8" }, _attrs))} data-v-3ff01bbc><div class="container flex justify-between items-center border-b border-b-primary-100 pb-[24px] mb-[24px]" data-v-3ff01bbc><div class="flex items-center gap-[64px]" data-v-3ff01bbc><img${ssrRenderAttr("src", _imports_0$1)} data-v-3ff01bbc><div class="relative layout-navbar-search" data-v-3ff01bbc>`);
      _push(ssrRenderComponent(_component_shared_form_input, { "input-props": {
        placeholder: "\u0645\u0627 \u0627\u0644\u0630\u064A \u062A\u0628\u062D\u062B \u0639\u0646\u0647\u061F",
        type: "text",
        class: "pe-[80px]"
      } }, null, _parent));
      _push(`<span class="absolute top-0 left-0 bottom-0 rounded-tl-[11px] rounded-bl-[11px] bg-primary-100 text-primary-300 w-[75px] flex items-center justify-center border border-gray-200 border-s-0" data-v-3ff01bbc>`);
      _push(ssrRenderComponent(_component_icon, {
        name: "system-uicons:search",
        class: "text-4xl"
      }, null, _parent));
      _push(`</span></div></div><div class="flex gap-8" data-v-3ff01bbc><div class="flex items-center gap-9" data-v-3ff01bbc>`);
      _push(ssrRenderComponent(_component_Icon, {
        name: "pepicons-pencil:bell",
        class: "text-gray-600 text-2xl"
      }, null, _parent));
      _push(`<span class="flex items-center gap-2 text-2xl" data-v-3ff01bbc><span data-v-3ff01bbc>0</span>`);
      _push(ssrRenderComponent(_component_Icon, {
        name: "fluent:bookmark-20-regular",
        class: "text-gray-600"
      }, null, _parent));
      _push(`</span><span class="flex items-center gap-2 text-2xl" data-v-3ff01bbc><span data-v-3ff01bbc>0</span>`);
      _push(ssrRenderComponent(_component_Icon, {
        name: "solar:cart-large-minimalistic-linear",
        class: "text-gray-600"
      }, null, _parent));
      _push(`</span></div>`);
      _push(ssrRenderComponent(_component_shared_menu, null, null, _parent));
      _push(`</div></div><div class="container flex justify-between items-center" data-v-3ff01bbc><nav class="flex items-center gap-[24px]" data-v-3ff01bbc>`);
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
      _push(`<span class="h-[36px] w-[1px] bg-gray-200" data-v-3ff01bbc></span>`);
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
      _push(`</nav><div class="flex items-center gap-[36px]" data-v-3ff01bbc>`);
      _push(ssrRenderComponent(_component_shared_menu, {
        items: flagsItems,
        "button-props": {
          class: "h-[57px] px-[32px] py-[6px]"
        },
        "menu-props": {
          class: "max-w-[216px]"
        }
      }, {
        label: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="flex items-center gap-[19px]" data-v-3ff01bbc${_scopeId}>`);
            _push2(ssrRenderComponent(_component_Icon, { name: "iconamoon:arrow-down-2-duotone" }, null, _parent2, _scopeId));
            _push2(`<img${ssrRenderAttr("src", flagsItems[0].image)} class="" alt="" data-v-3ff01bbc${_scopeId}></div>`);
          } else {
            return [
              createVNode("div", { class: "flex items-center gap-[19px]" }, [
                createVNode(_component_Icon, { name: "iconamoon:arrow-down-2-duotone" }),
                createVNode("img", {
                  src: flagsItems[0].image,
                  class: "",
                  alt: ""
                }, null, 8, ["src"])
              ])
            ];
          }
        }),
        item: withCtx(({ data }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<button type="button" class="flex gap-[24px] items-center mb-[19px] last:mb-0 h-[45px]" data-v-3ff01bbc${_scopeId}><img${ssrRenderAttr("src", data.image)} class="" alt="" data-v-3ff01bbc${_scopeId}><span data-v-3ff01bbc${_scopeId}>${ssrInterpolate(data.title)}</span></button>`);
          } else {
            return [
              createVNode("button", {
                type: "button",
                class: "flex gap-[24px] items-center mb-[19px] last:mb-0 h-[45px]"
              }, [
                createVNode("img", {
                  src: data.image,
                  class: "",
                  alt: ""
                }, null, 8, ["src"]),
                createVNode("span", null, toDisplayString(data.title), 1)
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_shared_menu, {
        items: [],
        "button-props": {
          class: "h-[57px] px-[32px] py-[6px] bg-primary-100 text-primary-300"
        }
      }, {
        label: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="flex items-center gap-[19px]" data-v-3ff01bbc${_scopeId}><span data-v-3ff01bbc${_scopeId}>\u062C\u0645\u064A\u0639 \u0627\u0644\u0641\u0626\u0627\u062A</span>`);
            _push2(ssrRenderComponent(_component_Icon, { name: "iconamoon:arrow-down-2-duotone" }, null, _parent2, _scopeId));
            _push2(`</div>`);
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
      }, _parent));
      _push(`</div></div></div>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/layouts/default/Navbar.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-3ff01bbc"]]);
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_layouts_default_navbar = __nuxt_component_0;
  const _component_layouts_main_footer = __nuxt_component_1;
  _push(`<!--[-->`);
  _push(ssrRenderComponent(_component_layouts_default_navbar, null, null, _parent));
  _push(`<div class="min-h-screen pt-[128px] pb-[160px] container">`);
  ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
  _push(`</div>`);
  _push(ssrRenderComponent(_component_layouts_main_footer, null, null, _parent));
  _push(`<!--]-->`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/default.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _default = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { _default as default };
//# sourceMappingURL=default-4d38e6a7.mjs.map
