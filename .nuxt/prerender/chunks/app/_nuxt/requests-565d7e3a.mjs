import { _ as __nuxt_component_1 } from './filter-97faec74.mjs';
import { _ as __nuxt_component_0 } from './Input-1e7796d8.mjs';
import { _ as __nuxt_component_2 } from './CountryMenu-8a4e8873.mjs';
import { _ as __nuxt_component_1$1 } from './SecondaryButton-979fef3b.mjs';
import { _ as __nuxt_component_3 } from './Status-d6b24557.mjs';
import { u as useCountries } from './useCountries-716a6161.mjs';
import { reactive, withAsyncContext, mergeProps, withCtx, unref, createVNode, useSSRContext } from 'file://D:/WBNR/WBNR/node_modules/vue/index.mjs';
import { u as useApi } from './useApi-73d2615e.mjs';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrInterpolate, ssrRenderAttr } from 'file://D:/WBNR/WBNR/node_modules/vue/server-renderer/index.mjs';
import { l as apiGetOrdersUrl } from './index-f05587d3.mjs';
import { h as handleDate } from './index-dd9c0bf2.mjs';
import '../server.mjs';
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
import 'file://D:/WBNR/WBNR/node_modules/klona/dist/index.mjs';
import 'file://D:/WBNR/WBNR/node_modules/unstorage/dist/index.mjs';
import 'file://D:/WBNR/WBNR/node_modules/unstorage/drivers/fs.mjs';
import 'file://D:/WBNR/WBNR/node_modules/unstorage/drivers/memory.mjs';
import 'file://D:/WBNR/WBNR/node_modules/unstorage/drivers/lru-cache.mjs';
import 'file://D:/WBNR/WBNR/node_modules/unstorage/drivers/fs-lite.mjs';
import 'file://D:/WBNR/WBNR/node_modules/radix3/dist/index.mjs';
import 'node:fs';
import 'node:url';
import 'file://D:/WBNR/WBNR/node_modules/pathe/dist/index.mjs';
import './menu-87b0daac.mjs';
import './Icon-b69f18a8.mjs';
import './state-df47e21c.mjs';
import './config-b815dc90.mjs';
import 'file://D:/WBNR/WBNR/node_modules/@iconify/vue/dist/offline.mjs';
import 'file://D:/WBNR/WBNR/node_modules/@iconify/vue/dist/iconify.mjs';
import 'file://D:/WBNR/WBNR/node_modules/@headlessui/vue/dist/headlessui.esm.js';
import './LoaderButton-81aa4875.mjs';
import './index-a82f0d37.mjs';

const _sfc_main = {
  __name: "requests",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const { selectedCountry } = useCountries();
    const query = reactive({
      country_id: selectedCountry.value.id,
      name: "",
      from: "",
      to: ""
    });
    const { fire } = useApi({
      url: apiGetOrdersUrl,
      requestOptions: {
        query
      }
    });
    const { data, pending, refresh } = ([__temp, __restore] = withAsyncContext(() => fire()), __temp = await __temp, __restore(), __temp);
    function changeCountry(country) {
      query.country_id = country;
    }
    function filterOrders() {
      refresh();
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_shared_cards_filter = __nuxt_component_1;
      const _component_shared_form_input = __nuxt_component_0;
      const _component_dashboard_country_menu = __nuxt_component_2;
      const _component_shared_buttons_secondary_button = __nuxt_component_1$1;
      const _component_shared_status = __nuxt_component_3;
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "min-h-screen" }, _attrs))}><div class="mb-16">`);
      _push(ssrRenderComponent(_component_shared_cards_filter, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="flex-1"${_scopeId}><div class="flex-1 w-full mb-9"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_shared_form_input, {
              type: "search",
              placeholder: "\u0627\u0633\u0645 \u0627\u0644\u0639\u0645\u064A\u0644 \u0627\u0648 \u0631\u0642\u0645 \u0627\u0644\u0647\u0627\u062A\u0641",
              id: "requeste-search-input",
              class: "w-full",
              modelValue: unref(query).name,
              "onUpdate:modelValue": ($event) => unref(query).name = $event
            }, null, _parent2, _scopeId));
            _push2(`</div><div class="flex justify-between items-center"${_scopeId}><div class=""${_scopeId}></div><div class="flex gap-9 align-items-center"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_dashboard_country_menu, { onChangeCountry: changeCountry }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_shared_buttons_secondary_button, {
              "submit-title": "\u0627\u0644\u0628\u062D\u062B",
              class: "!h-[3.5625rem] w-[105px]",
              onClick: filterOrders,
              disabled: unref(pending),
              loading: unref(pending)
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
                    class: "w-full",
                    modelValue: unref(query).name,
                    "onUpdate:modelValue": ($event) => unref(query).name = $event
                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                ]),
                createVNode("div", { class: "flex justify-between items-center" }, [
                  createVNode("div", { class: "" }),
                  createVNode("div", { class: "flex gap-9 align-items-center" }, [
                    createVNode(_component_dashboard_country_menu, { onChangeCountry: changeCountry }),
                    createVNode(_component_shared_buttons_secondary_button, {
                      "submit-title": "\u0627\u0644\u0628\u062D\u062B",
                      class: "!h-[3.5625rem] w-[105px]",
                      onClick: filterOrders,
                      disabled: unref(pending),
                      loading: unref(pending)
                    }, null, 8, ["disabled", "loading"])
                  ])
                ])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
      if (!unref(pending) && unref(data).data) {
        _push(`<div class="table overflow-auto"><table class="w-full"><thead><tr><th class="text-2xl text-gray-800 font-normal leading-normal block xl:hidden 2xl:block"> \u0643\u0648\u062F \u0627\u0644\u0637\u0644\u0628 </th><th class="text-2xl text-gray-800 font-normal leading-normal whitespace-nowrap"> \u0627\u0633\u0645 \u0627\u0644\u0639\u0645\u064A\u0644 </th><th class="text-2xl text-gray-800 font-normal leading-normal"> \u0627\u0644\u0645\u0628\u0644\u063A </th><th class="text-2xl text-gray-800 font-normal leading-normal"> \u0627\u0644\u062D\u0627\u0644\u0629 </th><th class="text-2xl text-gray-800 font-normal leading-normal"> \u062A\u0627\u0631\u064A\u062E \u0627\u0644\u0637\u0644\u0628 </th><th class="text-2xl text-gray-800 font-normal leading-normal"> \u0627\u0644\u062F\u0648\u0644\u0629 </th></tr></thead><tbody><!--[-->`);
        ssrRenderList(unref(data).data, (order) => {
          _push(`<tr><td class="text-2xl text-gray-500 font-normal leading-normal block xl:hidden 2xl:block">${ssrInterpolate(order.order_number)}</td><td class="text-2xl text-gray-700 font-normal leading-normal">${ssrInterpolate(order.client.name)}</td><td class="text-2xl text-gray-700 font-normal leading-normal">${ssrInterpolate(order.price)}</td><td class="text-2xl text-gray-700 font-normal leading-normal">`);
          _push(ssrRenderComponent(_component_shared_status, {
            status: order.status
          }, null, _parent));
          _push(`</td><td class="text-2xl text-gray-700 font-normal leading-normal">${ssrInterpolate(unref(handleDate)(order.created_at))}</td><td><img${ssrRenderAttr("src", order.country.image)}${ssrRenderAttr("alt", order.country.name + "flag")} class="m-auto"></td></tr>`);
        });
        _push(`<!--]--></tbody></table></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</section>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/dashboard/requests.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=requests-565d7e3a.mjs.map
