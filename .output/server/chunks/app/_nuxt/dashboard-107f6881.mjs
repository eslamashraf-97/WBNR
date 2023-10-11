import { b as buildAssetsURL } from '../../handlers/renderer.mjs';
import { _ as __nuxt_component_0 } from './Title-708248cc.mjs';
import { _ as __nuxt_component_1$1 } from './nuxt-link-3fa67823.mjs';
import { useSSRContext, mergeProps, withCtx, createVNode, toDisplayString } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrRenderAttr, ssrInterpolate } from 'vue/server-renderer';
import { _ as _export_sfc, d as __nuxt_component_2 } from '../server.mjs';
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

const _imports_0 = "" + buildAssetsURL("sound.c5e675e5.svg");
const _sfc_main$1 = {
  __name: "Aside",
  __ssrInlineRender: true,
  setup(__props) {
    const links = [
      {
        link: "/dashboard",
        title: "\u0625\u062D\u0635\u0627\u0626\u064A\u0627\u062A \u062A\u062C\u0627\u0631\u062A\u0643"
      },
      {
        link: "/dashboard/wallet",
        title: "\u0627\u0644\u0645\u062D\u0641\u0638\u0629"
      },
      {
        link: "/dashboard/requests",
        title: "\u0627\u0644\u0637\u0644\u0628\u0627\u062A"
      },
      {
        link: "/dashboard/link-store",
        title: "\u0631\u0628\u0637 \u0645\u062A\u062C\u0631\u0643"
      }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_nuxt_link = __nuxt_component_1$1;
      _push(`<aside${ssrRenderAttrs(mergeProps({ class: "flex flex-col gap-5 w-[448px] py-9 px-16 bg-gray-100 border border-gray-200 rounded-sm dashboard-aside h-fit" }, _attrs))} data-v-a29ce1c2><!--[-->`);
      ssrRenderList(links, (link, index) => {
        _push(ssrRenderComponent(_component_nuxt_link, {
          key: index,
          to: link.link,
          class: "flex items-center gap-6 text-2xl font-bold text-gray-700 py-3 aside-link"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<img${ssrRenderAttr("src", _imports_0)} alt="" class="" data-v-a29ce1c2${_scopeId}><span data-v-a29ce1c2${_scopeId}>${ssrInterpolate(link.title)}</span>`);
            } else {
              return [
                createVNode("img", {
                  src: _imports_0,
                  alt: "",
                  class: ""
                }),
                createVNode("span", null, toDisplayString(link.title), 1)
              ];
            }
          }),
          _: 2
        }, _parent));
      });
      _push(`<!--]--></aside>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/dashboard/Aside.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-a29ce1c2"]]);
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_shared_title = __nuxt_component_0;
  const _component_dashboard_aside = __nuxt_component_1;
  const _component_NuxtPage = __nuxt_component_2;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "bg-primary" }, _attrs))}>`);
  _push(ssrRenderComponent(_component_shared_title, { title: "\u0644\u0648\u062D\u0629 \u0627\u0644\u062A\u062D\u0643\u0645" }, null, _parent));
  _push(`<div class="flex justify-start gap-24">`);
  _push(ssrRenderComponent(_component_dashboard_aside, null, null, _parent));
  _push(`<div class="flex-1">`);
  _push(ssrRenderComponent(_component_NuxtPage, null, null, _parent));
  _push(`</div></div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/dashboard.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const dashboard = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { dashboard as default };
//# sourceMappingURL=dashboard-107f6881.mjs.map
