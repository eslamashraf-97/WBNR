import { _ as __nuxt_component_1 } from './nuxt-link-3fa67823.mjs';
import { _ as __nuxt_component_1$1 } from './SecondaryButton-739b14f4.mjs';
import { useSSRContext, defineComponent, mergeProps, withCtx, createTextVNode, unref } from 'vue';
import { _ as _export_sfc, n as navigateTo } from '../server.mjs';
import { ssrRenderAttrs, ssrRenderAttr, ssrRenderComponent, ssrRenderSlot } from 'vue/server-renderer';
import { a as _imports_0$1, _ as __nuxt_component_1$2 } from './MainFooter-28b08124.mjs';
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
import './LoaderButton-2476704e.mjs';
import 'unhead';
import '@unhead/shared';
import 'vue-router';
import 'vue3-toastify';
import '../../handlers/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'devalue';
import '@unhead/ssr';
import './Icon-44226a77.mjs';
import './config-c055070f.mjs';
import '@iconify/vue/dist/offline';
import '@iconify/vue';

const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "Navbar",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_nuxt_link = __nuxt_component_1;
      const _component_shared_buttons_secondary_button = __nuxt_component_1$1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "bg-white py-8" }, _attrs))}><div class="container flex justify-between items-center"><img${ssrRenderAttr("src", _imports_0$1)}><div class="flex gap-8 items-center">`);
      _push(ssrRenderComponent(_component_nuxt_link, {
        class: "text-primary-300 text-lg",
        to: "/auth/register"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`\u0625\u0646\u0634\u0627\u0621 \u062D\u0633\u0627\u0628 \u062C\u062F\u064A\u062F `);
          } else {
            return [
              createTextVNode("\u0625\u0646\u0634\u0627\u0621 \u062D\u0633\u0627\u0628 \u062C\u062F\u064A\u062F ")
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
            _push2(` \u0625\u0646\u0634\u0627\u0621 \u062D\u0633\u0627\u0628 `);
          } else {
            return [
              createTextVNode(" \u0625\u0646\u0634\u0627\u0621 \u062D\u0633\u0627\u0628 ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></div>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/layouts/landing/Navbar.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_layouts_landing_navbar = _sfc_main$1;
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

export { landing as default };
//# sourceMappingURL=landing-fb98da3e.mjs.map
