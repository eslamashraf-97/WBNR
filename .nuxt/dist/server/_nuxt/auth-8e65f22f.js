import { mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderAttr, ssrRenderComponent, ssrRenderSlot } from "vue/server-renderer";
import { _ as _imports_0, a as __nuxt_component_1 } from "./MainFooter-6adb6433.js";
import { _ as _export_sfc } from "../server.mjs";
import "./Icon-b69f18a8.js";
import "./state-df47e21c.js";
import "destr";
import "devalue";
import "defu";
import "./config-b815dc90.js";
import "klona";
import "hookable";
import "@iconify/vue/dist/offline";
import "@iconify/vue";
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
const _sfc_main$1 = {};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "bg-white py-8" }, _attrs))}><div class="container flex justify-start"><img${ssrRenderAttr("src", _imports_0)}></div></div>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/layouts/auth/Navbar.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender$1]]);
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_layouts_auth_navbar = __nuxt_component_0;
  const _component_layouts_main_footer = __nuxt_component_1;
  _push(`<!--[-->`);
  _push(ssrRenderComponent(_component_layouts_auth_navbar, null, null, _parent));
  _push(`<div class="pt-[128px] pb-[160px] container"><div class="max-w-[32rem] m-auto">`);
  ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
  _push(`</div></div>`);
  _push(ssrRenderComponent(_component_layouts_main_footer, null, null, _parent));
  _push(`<!--]-->`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/auth.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const auth = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  auth as default
};
//# sourceMappingURL=auth-8e65f22f.js.map
