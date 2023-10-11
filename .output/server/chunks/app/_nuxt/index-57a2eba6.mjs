import { _ as __nuxt_component_1 } from './filter-61cfcef4.mjs';
import { _ as __nuxt_component_2 } from './FromTo-357c3d81.mjs';
import { _ as __nuxt_component_3$1 } from './LanguagesMenu-8e223abf.mjs';
import { useSSRContext, withCtx, createVNode, mergeProps } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate } from 'vue/server-renderer';
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
import 'unhead';
import '@unhead/shared';
import 'vue-router';
import 'vue3-toastify';

const _sfc_main$1 = {
  __name: "Stats",
  __ssrInlineRender: true,
  props: ["title", "value"],
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "border border-primary-300 rounded-[16px] bg-white p-[24px] wallet-card max-w-[350px] flex flex-col h-[350px]" }, _attrs))} data-v-8584a1cd><div class="flex justify-between items-center" data-v-8584a1cd><h6 class="text-[28px] text-gray-400 font-semibold" data-v-8584a1cd>${ssrInterpolate(__props.title)}</h6></div><div class="flex justify-end mt-auto" data-v-8584a1cd><div data-v-8584a1cd><h6 class="text-gray-700 text-[60px] leading-[96px] font-semibold" data-v-8584a1cd>${ssrInterpolate(__props.value)}</h6></div></div></div>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/shared/cards/Stats.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_3 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-8584a1cd"]]);
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_shared_cards_filter = __nuxt_component_1;
  const _component_shared_from_to = __nuxt_component_2;
  const _component_shared_languages_menu = __nuxt_component_3$1;
  const _component_shared_cards_stats = __nuxt_component_3;
  _push(`<section${ssrRenderAttrs(_attrs)}><div class="mb-16">`);
  _push(ssrRenderComponent(_component_shared_cards_filter, null, {
    right: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_shared_from_to, null, null, _parent2, _scopeId));
      } else {
        return [
          createVNode(_component_shared_from_to)
        ];
      }
    }),
    left: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_shared_languages_menu, null, null, _parent2, _scopeId));
      } else {
        return [
          createVNode(_component_shared_languages_menu)
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div><div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-7">`);
  _push(ssrRenderComponent(_component_shared_cards_stats, {
    title: "\u0627\u062C\u0645\u0627\u0644\u064A \u0627\u0644\u0645\u0646\u062A\u062C\u0627\u062A",
    value: "546"
  }, null, _parent));
  _push(ssrRenderComponent(_component_shared_cards_stats, {
    title: "\u0627\u062C\u0645\u0627\u0644\u064A \u0627\u0644\u0623\u0631\u0628\u0627\u062D",
    value: "4,545"
  }, null, _parent));
  _push(ssrRenderComponent(_component_shared_cards_stats, {
    title: "\u0637\u0644\u0628\u0627\u062A \u0645\u0644\u063A\u064A\u0629",
    value: "43"
  }, null, _parent));
  _push(ssrRenderComponent(_component_shared_cards_stats, {
    title: "\u0637\u0644\u0628\u0627\u062A \u062A\u062D\u062A \u0627\u0644\u062A\u0633\u0644\u064A\u0645",
    value: "3645"
  }, null, _parent));
  _push(ssrRenderComponent(_component_shared_cards_stats, {
    title: "\u0637\u0644\u0628\u0627\u062A \u0645\u0639\u0644\u0642\u0629",
    value: "6536"
  }, null, _parent));
  _push(ssrRenderComponent(_component_shared_cards_stats, {
    title: "\u0645\u0646\u062A\u062C\u0627\u062A \u0645\u0633\u0644\u0645\u0629",
    value: "4523"
  }, null, _parent));
  _push(`</div></section>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/dashboard/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { index as default };
//# sourceMappingURL=index-57a2eba6.mjs.map
