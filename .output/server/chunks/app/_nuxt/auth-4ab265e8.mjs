import { useSSRContext, mergeProps } from 'vue';
import { ssrRenderComponent, ssrRenderSlot, ssrRenderAttrs, ssrRenderAttr } from 'vue/server-renderer';
import { _ as __nuxt_component_1, a as _imports_0$1 } from './MainFooter-28b08124.mjs';
import { _ as _export_sfc } from '../server.mjs';
import '../../handlers/renderer.mjs';
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
import './Icon-44226a77.mjs';
import './config-c055070f.mjs';
import '@iconify/vue/dist/offline';
import '@iconify/vue';
import 'vue-router';
import 'vue3-toastify';

const _sfc_main$1 = {};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "bg-white py-8" }, _attrs))}><div class="container flex justify-start"><img${ssrRenderAttr("src", _imports_0$1)}></div></div>`);
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
  _push(`<div class="pt-[128px] pb-[160px] container"><div class="max-w-[29rem] m-auto">`);
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

export { auth as default };
//# sourceMappingURL=auth-4ab265e8.mjs.map
