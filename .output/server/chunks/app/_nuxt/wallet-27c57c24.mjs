import { defineComponent, unref, useSSRContext, mergeProps } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderAttr } from 'vue/server-renderer';
import { _ as _export_sfc } from '../server.mjs';
import { _ as __nuxt_component_1 } from './SecondaryButton-739b14f4.mjs';
import { f as flagEg, c as flagEm, b as flagKu, a as flagSa } from './flag-em-1991f2f5.mjs';
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
import 'unhead';
import '@unhead/shared';
import 'vue-router';
import 'vue3-toastify';
import './LoaderButton-2476704e.mjs';

const _sfc_main$1 = {
  __name: "Wallet",
  __ssrInlineRender: true,
  props: ["title", "value", "flag", "expected"],
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "border border-gray-200 rounded-[16px] bg-white p-[24px] wallet-card max-w-[256px] flex flex-col h-[256px]" }, _attrs))} data-v-6b118c13><div class="flex justify-between items-center" data-v-6b118c13><h6 class="text-[28px] text-gray-400 font-semibold" data-v-6b118c13>${ssrInterpolate(__props.title)}</h6><img${ssrRenderAttr("src", __props.flag)} alt="" data-v-6b118c13></div><div class="flex justify-between mt-auto" data-v-6b118c13><div data-v-6b118c13><h6 class="text-gray-400 text-[16px]" data-v-6b118c13>\u062C\u0627\u0647\u0632 \u0644\u0644\u0633\u062D\u0628</h6><h4 class="text-[24px] text-primary-300 font-semibold" data-v-6b118c13>${ssrInterpolate(__props.value)} \u062F.\u0625 </h4></div><div data-v-6b118c13><h6 class="text-gray-400 text-[16px]" data-v-6b118c13>\u0645\u062A\u0648\u0642\u0639</h6><h4 class="text-[24px] text-secondary-300 font-semibold" data-v-6b118c13>${ssrInterpolate(__props.expected)} \u062F.\u0625 </h4></div></div></div>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/shared/cards/Wallet.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-6b118c13"]]);
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "wallet",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_shared_cards_wallet = __nuxt_component_0;
      const _component_shared_buttons_secondary_button = __nuxt_component_1;
      _push(`<section${ssrRenderAttrs(_attrs)}><div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-y-7"><div>`);
      _push(ssrRenderComponent(_component_shared_cards_wallet, {
        title: "\u0627\u0631\u0628\u0627\u062D\u0643",
        value: "930",
        flag: unref(flagEg),
        expected: "30"
      }, null, _parent));
      _push(ssrRenderComponent(_component_shared_buttons_secondary_button, {
        submitTitle: "\u0633\u062D\u0628 \u0627\u0644\u0627\u0631\u0628\u0627\u062D",
        class: "w-[256px] mt-4"
      }, null, _parent));
      _push(`</div><div>`);
      _push(ssrRenderComponent(_component_shared_cards_wallet, {
        title: "\u0627\u0631\u0628\u0627\u062D\u0643",
        value: "930",
        flag: unref(flagEm),
        expected: "30"
      }, null, _parent));
      _push(ssrRenderComponent(_component_shared_buttons_secondary_button, {
        submitTitle: "\u0633\u062D\u0628 \u0627\u0644\u0627\u0631\u0628\u0627\u062D",
        class: "w-[256px] mt-4"
      }, null, _parent));
      _push(`</div><div>`);
      _push(ssrRenderComponent(_component_shared_cards_wallet, {
        title: "\u0627\u0631\u0628\u0627\u062D\u0643",
        value: "930",
        flag: unref(flagKu),
        expected: "30"
      }, null, _parent));
      _push(ssrRenderComponent(_component_shared_buttons_secondary_button, {
        submitTitle: "\u0633\u062D\u0628 \u0627\u0644\u0627\u0631\u0628\u0627\u062D",
        class: "w-[256px] mt-4"
      }, null, _parent));
      _push(`</div><div>`);
      _push(ssrRenderComponent(_component_shared_cards_wallet, {
        title: "\u0627\u0631\u0628\u0627\u062D\u0643",
        value: "930",
        flag: unref(flagSa),
        expected: "30"
      }, null, _parent));
      _push(ssrRenderComponent(_component_shared_buttons_secondary_button, {
        submitTitle: "\u0633\u062D\u0628 \u0627\u0644\u0627\u0631\u0628\u0627\u062D",
        class: "w-[256px] mt-4"
      }, null, _parent));
      _push(`</div></div><h4 class="my-16 text-gray-700 font-normal">\u0637\u0644\u0628\u0627\u062A \u0627\u0644\u0633\u062D\u0628 \u0627\u0644\u0633\u0627\u0628\u0642\u0629</h4></section>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/dashboard/wallet.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=wallet-27c57c24.mjs.map
