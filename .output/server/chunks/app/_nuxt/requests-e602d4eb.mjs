import { _ as __nuxt_component_1 } from './filter-61cfcef4.mjs';
import { _ as __nuxt_component_0 } from './Input-03e500d0.mjs';
import { _ as __nuxt_component_2 } from './FromTo-357c3d81.mjs';
import { _ as __nuxt_component_3 } from './LanguagesMenu-8e223abf.mjs';
import { _ as __nuxt_component_1$1 } from './SecondaryButton-739b14f4.mjs';
import { withCtx, createVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent } from 'vue/server-renderer';
import { _ as _export_sfc } from '../server.mjs';
import './menu-32072702.mjs';
import './Icon-44226a77.mjs';
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
import './flag-em-1991f2f5.mjs';
import './LoaderButton-2476704e.mjs';
import 'unhead';
import '@unhead/shared';
import 'vue-router';
import 'vue3-toastify';

const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_shared_cards_filter = __nuxt_component_1;
  const _component_shared_form_input = __nuxt_component_0;
  const _component_shared_from_to = __nuxt_component_2;
  const _component_shared_languages_menu = __nuxt_component_3;
  const _component_shared_buttons_secondary_button = __nuxt_component_1$1;
  _push(`<section${ssrRenderAttrs(_attrs)}><div class="mb-16">`);
  _push(ssrRenderComponent(_component_shared_cards_filter, null, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<div class="flex-1"${_scopeId}><div class="flex-1 w-full mb-9"${_scopeId}>`);
        _push2(ssrRenderComponent(_component_shared_form_input, {
          type: "search",
          placeholder: "\u0627\u0633\u0645 \u0627\u0644\u0639\u0645\u064A\u0644 \u0627\u0648 \u0631\u0642\u0645 \u0627\u0644\u0647\u0627\u062A\u0641",
          id: "requeste-search-input",
          class: "w-full"
        }, null, _parent2, _scopeId));
        _push2(`</div><div class="flex justify-between items-center"${_scopeId}><div class=""${_scopeId}>`);
        _push2(ssrRenderComponent(_component_shared_from_to, null, null, _parent2, _scopeId));
        _push2(`</div><div class="flex gap-9 align-items-center"${_scopeId}>`);
        _push2(ssrRenderComponent(_component_shared_languages_menu, null, null, _parent2, _scopeId));
        _push2(ssrRenderComponent(_component_shared_buttons_secondary_button, {
          "submit-title": "\u0627\u0644\u0628\u062D\u062B",
          class: "h-[57px] w-[105px]"
        }, null, _parent2, _scopeId));
        _push2(`</div></div></div>`);
      } else {
        return [
          createVNode("div", { class: "flex-1" }, [
            createVNode("div", { class: "flex-1 w-full mb-9" }, [
              createVNode(_component_shared_form_input, {
                type: "search",
                placeholder: "\u0627\u0633\u0645 \u0627\u0644\u0639\u0645\u064A\u0644 \u0627\u0648 \u0631\u0642\u0645 \u0627\u0644\u0647\u0627\u062A\u0641",
                id: "requeste-search-input",
                class: "w-full"
              })
            ]),
            createVNode("div", { class: "flex justify-between items-center" }, [
              createVNode("div", { class: "" }, [
                createVNode(_component_shared_from_to)
              ]),
              createVNode("div", { class: "flex gap-9 align-items-center" }, [
                createVNode(_component_shared_languages_menu),
                createVNode(_component_shared_buttons_secondary_button, {
                  "submit-title": "\u0627\u0644\u0628\u062D\u062B",
                  class: "h-[57px] w-[105px]"
                })
              ])
            ])
          ])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div></section>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/dashboard/requests.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const requests = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { requests as default };
//# sourceMappingURL=requests-e602d4eb.mjs.map
