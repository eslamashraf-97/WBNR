import { _ as __nuxt_component_1 } from "./nuxt-link-7fd3a776.js";
import { _ as __nuxt_component_1$1 } from "./SecondaryButton-979fef3b.js";
import { mergeProps, withCtx, createTextVNode, unref, useSSRContext } from "vue";
import "hookable";
import { _ as _export_sfc, a as navigateTo } from "../server.mjs";
import "destr";
import "devalue";
import "defu";
import "klona";
import { ssrRenderAttrs, ssrRenderAttr, ssrRenderComponent, ssrRenderSlot } from "vue/server-renderer";
import { _ as _imports_0, a as __nuxt_component_1$2 } from "./MainFooter-6adb6433.js";
import "ufo";
import "./LoaderButton-81aa4875.js";
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
import "./Icon-b69f18a8.js";
import "./state-df47e21c.js";
import "./config-b815dc90.js";
import "@iconify/vue/dist/offline";
import "@iconify/vue";
const _sfc_main$1 = {};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs) {
  const _component_nuxt_link = __nuxt_component_1;
  const _component_shared_buttons_secondary_button = __nuxt_component_1$1;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "bg-white py-8" }, _attrs))}><div class="container flex justify-between items-center"><img${ssrRenderAttr("src", _imports_0)}><div class="flex gap-8 items-center">`);
  _push(ssrRenderComponent(_component_nuxt_link, {
    class: "text-primary-300 text-lg hidden md:block",
    to: "/auth/register"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`إنشاء حساب جديد `);
      } else {
        return [
          createTextVNode("إنشاء حساب جديد ")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_shared_buttons_secondary_button, {
    onClick: ($event) => ("navigateTo" in _ctx ? _ctx.navigateTo : unref(navigateTo))("/auth/login")
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(` تسحيل دخول `);
      } else {
        return [
          createTextVNode(" تسحيل دخول ")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div></div></div>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/layouts/landing/Navbar.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender$1]]);
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_layouts_landing_navbar = __nuxt_component_0;
  const _component_layouts_main_footer = __nuxt_component_1$2;
  _push(`<!--[-->`);
  _push(ssrRenderComponent(_component_layouts_landing_navbar, null, null, _parent));
  _push(`<div class="min-h-screen pt-[128px] container">`);
  ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
  _push(`</div>`);
  _push(ssrRenderComponent(_component_layouts_main_footer, null, null, _parent));
  _push(`<!--]-->`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/landing.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const landing = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  landing as default
};
//# sourceMappingURL=landing-0db4c445.js.map
