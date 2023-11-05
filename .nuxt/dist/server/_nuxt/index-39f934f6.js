import { _ as __nuxt_component_1 } from "./filter-97faec74.js";
import { _ as __nuxt_component_2 } from "./CountryMenu-8a4e8873.js";
import { _ as __nuxt_component_7 } from "./Loading-b5ab98f2.js";
import { mergeProps, useSSRContext, ref, withAsyncContext, withCtx, createVNode, unref } from "vue";
import { ssrRenderAttrs, ssrInterpolate, ssrRenderComponent } from "vue/server-renderer";
import { _ as _export_sfc } from "../server.mjs";
import { u as useCountries } from "./useCountries-716a6161.js";
import { u as useApi } from "./useApi-73d2615e.js";
import { j as apiGetCustomerStatsUrl } from "./index-f05587d3.js";
import "./menu-87b0daac.js";
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
import "@headlessui/vue";
const Stats_vue_vue_type_style_index_0_scoped_a6ad9bff_lang = "";
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
          title: "اجمالي الطلبات",
          value: unref(data).total_orders
        }, null, _parent));
        _push(ssrRenderComponent(_component_shared_cards_stats, {
          title: "اجمالي الأرباح",
          value: unref(data).total_confirmed_revenue
        }, null, _parent));
        _push(ssrRenderComponent(_component_shared_cards_stats, {
          title: "طلبات ملغية",
          value: unref(data).cancelled_order_count
        }, null, _parent));
        _push(ssrRenderComponent(_component_shared_cards_stats, {
          title: "طلبات تحت التجهيز",
          value: unref(data).processing_order_count
        }, null, _parent));
        _push(ssrRenderComponent(_component_shared_cards_stats, {
          title: "طلبات معلقة",
          value: unref(data).pending_order_count
        }, null, _parent));
        _push(ssrRenderComponent(_component_shared_cards_stats, {
          title: "منتجات مسلمة",
          value: unref(data).delivered_order_count
        }, null, _parent));
        _push(ssrRenderComponent(_component_shared_cards_stats, {
          title: "طلبات مؤكدة",
          value: unref(data).confirmed_order_count
        }, null, _parent));
        _push(ssrRenderComponent(_component_shared_cards_stats, {
          title: "طلبات مرفوضة",
          value: unref(data).rejected_order_count
        }, null, _parent));
        _push(ssrRenderComponent(_component_shared_cards_stats, {
          title: "طلبات جارى توصيلها",
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
export {
  _sfc_main as default
};
//# sourceMappingURL=index-39f934f6.js.map
