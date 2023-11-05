import { _ as __nuxt_component_1 } from './filter-97faec74.mjs';
import { _ as __nuxt_component_2 } from './CountryMenu-8a4e8873.mjs';
import { _ as __nuxt_component_7 } from './Loading-b5ab98f2.mjs';
import { ref, withAsyncContext, withCtx, createVNode, unref, useSSRContext, mergeProps } from 'file://D:/WBNR/WBNR/node_modules/vue/index.mjs';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate } from 'file://D:/WBNR/WBNR/node_modules/vue/server-renderer/index.mjs';
import { _ as _export_sfc } from '../server.mjs';
import { u as useCountries } from './useCountries-716a6161.mjs';
import { u as useApi } from './useApi-73d2615e.mjs';
import { j as apiGetCustomerStatsUrl } from './index-f05587d3.mjs';
import './menu-87b0daac.mjs';
import './Icon-b69f18a8.mjs';
import './state-df47e21c.mjs';
import './config-b815dc90.mjs';
import 'file://D:/WBNR/WBNR/node_modules/klona/dist/index.mjs';
import 'file://D:/WBNR/WBNR/node_modules/@iconify/vue/dist/offline.mjs';
import 'file://D:/WBNR/WBNR/node_modules/@iconify/vue/dist/iconify.mjs';
import 'file://D:/WBNR/WBNR/node_modules/@headlessui/vue/dist/headlessui.esm.js';
import 'file://D:/WBNR/WBNR/node_modules/ofetch/dist/node.mjs';
import 'file://D:/WBNR/WBNR/node_modules/hookable/dist/index.mjs';
import 'file://D:/WBNR/WBNR/node_modules/unctx/dist/index.mjs';
import 'file://D:/WBNR/WBNR/node_modules/destr/dist/index.mjs';
import 'file://D:/WBNR/WBNR/node_modules/defu/dist/defu.mjs';
import 'file://D:/WBNR/WBNR/node_modules/unhead/dist/index.mjs';
import 'file://D:/WBNR/WBNR/node_modules/@unhead/shared/dist/index.mjs';
import 'file://D:/WBNR/WBNR/node_modules/vue-router/dist/vue-router.node.mjs';
import 'file://D:/WBNR/WBNR/node_modules/h3/dist/index.mjs';
import 'file://D:/WBNR/WBNR/node_modules/ufo/dist/index.mjs';
import 'file://D:/WBNR/WBNR/node_modules/cookie-es/dist/index.mjs';
import 'file://D:/WBNR/WBNR/node_modules/ohash/dist/index.mjs';
import 'file://D:/WBNR/WBNR/node_modules/vue3-toastify/dist/index.mjs';
import '../../nitro/nitro-prerenderer.mjs';
import 'file://D:/WBNR/WBNR/node_modules/unenv/runtime/fetch/index.mjs';
import 'file://D:/WBNR/WBNR/node_modules/scule/dist/index.mjs';
import 'file://D:/WBNR/WBNR/node_modules/unstorage/dist/index.mjs';
import 'file://D:/WBNR/WBNR/node_modules/unstorage/drivers/fs.mjs';
import 'file://D:/WBNR/WBNR/node_modules/unstorage/drivers/memory.mjs';
import 'file://D:/WBNR/WBNR/node_modules/unstorage/drivers/lru-cache.mjs';
import 'file://D:/WBNR/WBNR/node_modules/unstorage/drivers/fs-lite.mjs';
import 'file://D:/WBNR/WBNR/node_modules/radix3/dist/index.mjs';
import 'node:fs';
import 'node:url';
import 'file://D:/WBNR/WBNR/node_modules/pathe/dist/index.mjs';

const _sfc_main$1 = {
  __name: "Stats",
  __ssrInlineRender: true,
  props: ["title", "value"],
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "border border-primary-300 rounded-[16px] bg-white p-[24px] wallet-card min-w-[21.8rem] flex flex-col h-[350px]" }, _attrs))} data-v-a6ad9bff><div class="flex justify-between items-center" data-v-a6ad9bff><h6 class="text-[28px] text-gray-400 font-semibold" data-v-a6ad9bff>${ssrInterpolate(__props.title)}</h6></div><div class="flex justify-end mt-auto" data-v-a6ad9bff><div data-v-a6ad9bff><h6 class="text-gray-700 text-[60px] leading-[96px] font-semibold" data-v-a6ad9bff>${ssrInterpolate(__props.value)}</h6></div></div></div>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/shared/cards/Stats.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_3 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-a6ad9bff"]]);
const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const { selectedCountry } = useCountries();
    const country_id = ref(selectedCountry.value.id);
    function changeCountry(country) {
      country_id.value = country;
    }
    const { fire } = useApi({
      url: () => apiGetCustomerStatsUrl + "/" + country_id.value,
      requestOptions: {
        watch: [country_id]
      }
    });
    const { data, pending } = ([__temp, __restore] = withAsyncContext(() => fire()), __temp = await __temp, __restore(), __temp);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_shared_cards_filter = __nuxt_component_1;
      const _component_dashboard_country_menu = __nuxt_component_2;
      const _component_shared_loders_loading = __nuxt_component_7;
      const _component_shared_cards_stats = __nuxt_component_3;
      _push(`<section${ssrRenderAttrs(_attrs)}><div class="mb-16">`);
      _push(ssrRenderComponent(_component_shared_cards_filter, null, {
        right: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div${_scopeId}></div>`);
          } else {
            return [
              createVNode("div")
            ];
          }
        }),
        left: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_dashboard_country_menu, { onChangeCountry: changeCountry }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_dashboard_country_menu, { onChangeCountry: changeCountry })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
      if (unref(pending)) {
        _push(`<div class="flex items-center justify-center">`);
        _push(ssrRenderComponent(_component_shared_loders_loading, null, null, _parent));
        _push(`</div>`);
      } else {
        _push(`<div class="grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 gap-7">`);
        _push(ssrRenderComponent(_component_shared_cards_stats, {
          title: "\u0627\u062C\u0645\u0627\u0644\u064A \u0627\u0644\u0637\u0644\u0628\u0627\u062A",
          value: unref(data).total_orders
        }, null, _parent));
        _push(ssrRenderComponent(_component_shared_cards_stats, {
          title: "\u0627\u062C\u0645\u0627\u0644\u064A \u0627\u0644\u0623\u0631\u0628\u0627\u062D",
          value: unref(data).total_confirmed_revenue
        }, null, _parent));
        _push(ssrRenderComponent(_component_shared_cards_stats, {
          title: "\u0637\u0644\u0628\u0627\u062A \u0645\u0644\u063A\u064A\u0629",
          value: unref(data).cancelled_order_count
        }, null, _parent));
        _push(ssrRenderComponent(_component_shared_cards_stats, {
          title: "\u0637\u0644\u0628\u0627\u062A \u062A\u062D\u062A \u0627\u0644\u062A\u062C\u0647\u064A\u0632",
          value: unref(data).processing_order_count
        }, null, _parent));
        _push(ssrRenderComponent(_component_shared_cards_stats, {
          title: "\u0637\u0644\u0628\u0627\u062A \u0645\u0639\u0644\u0642\u0629",
          value: unref(data).pending_order_count
        }, null, _parent));
        _push(ssrRenderComponent(_component_shared_cards_stats, {
          title: "\u0645\u0646\u062A\u062C\u0627\u062A \u0645\u0633\u0644\u0645\u0629",
          value: unref(data).delivered_order_count
        }, null, _parent));
        _push(ssrRenderComponent(_component_shared_cards_stats, {
          title: "\u0637\u0644\u0628\u0627\u062A \u0645\u0624\u0643\u062F\u0629",
          value: unref(data).confirmed_order_count
        }, null, _parent));
        _push(ssrRenderComponent(_component_shared_cards_stats, {
          title: "\u0637\u0644\u0628\u0627\u062A \u0645\u0631\u0641\u0648\u0636\u0629",
          value: unref(data).rejected_order_count
        }, null, _parent));
        _push(ssrRenderComponent(_component_shared_cards_stats, {
          title: "\u0637\u0644\u0628\u0627\u062A \u062C\u0627\u0631\u0649 \u062A\u0648\u0635\u064A\u0644\u0647\u0627",
          value: unref(data).shipping_order_count
        }, null, _parent));
        _push(`</div>`);
      }
      _push(`</section>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/dashboard/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-39f934f6.mjs.map
