import { _ as __nuxt_component_0 } from './Title-708248cc.mjs';
import { _ as __nuxt_component_1 } from './filter-61cfcef4.mjs';
import { mergeProps, withCtx, createTextVNode, useSSRContext, defineAsyncComponent } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList } from 'vue/server-renderer';
import { _ as _export_sfc } from '../server.mjs';
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
import './Icon-44226a77.mjs';
import './config-c055070f.mjs';
import '@iconify/vue/dist/offline';
import '@iconify/vue';
import 'unhead';
import '@unhead/shared';
import 'vue-router';
import 'vue3-toastify';

const __nuxt_component_2_lazy = /* @__PURE__ */ defineAsyncComponent(() => import('./Product-bface8fb.mjs').then((m) => m.default || m));
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_shared_title = __nuxt_component_0;
  const _component_shared_cards_filter = __nuxt_component_1;
  const _component_lazy_shared_cards_product = __nuxt_component_2_lazy;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "bg-primary" }, _attrs))}>`);
  _push(ssrRenderComponent(_component_shared_title, { title: "\u0645\u0646\u062A\u062C\u0627\u062A \u0645\u062D\u0641\u0648\u0638\u0629" }, null, _parent));
  _push(ssrRenderComponent(_component_shared_cards_filter, null, {
    right: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`\u062A\u062D\u062F\u064A\u062F \u0627\u0644\u0641\u0644\u062A\u0631`);
      } else {
        return [
          createTextVNode("\u062A\u062D\u062F\u064A\u062F \u0627\u0644\u0641\u0644\u062A\u0631")
        ];
      }
    }),
    left: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`\u062A\u062D\u062F\u064A\u062F`);
      } else {
        return [
          createTextVNode("\u062A\u062D\u062F\u064A\u062F")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<div class="mt-24 grid lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-9 shadow-main mb-40 grid-flow-row-dense"><!--[-->`);
  ssrRenderList(16, (i, key) => {
    _push(ssrRenderComponent(_component_lazy_shared_cards_product, { key }, null, _parent));
  });
  _push(`<!--]--></div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/saved-products.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const savedProducts = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { savedProducts as default };
//# sourceMappingURL=saved-products-b03af9f3.mjs.map
