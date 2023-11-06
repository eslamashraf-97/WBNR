import { _ as __nuxt_component_1 } from './filter-97faec74.mjs';
import { _ as __nuxt_component_0 } from './Input-1e7796d8.mjs';
import __nuxt_component_0$1 from './Icon-b69f18a8.mjs';
import { _ as __nuxt_component_7 } from './Loading-b5ab98f2.mjs';
import { _ as __nuxt_component_3 } from './menu-87b0daac.mjs';
import { _ as __nuxt_component_1$1 } from './LoaderButton-81aa4875.mjs';
import { _ as __nuxt_component_3$1 } from './PrimaryButton-3e0b2318.mjs';
import { u as useCountries } from './useCountries-716a6161.mjs';
import { ref, withAsyncContext, withCtx, unref, isRef, createVNode, useSSRContext, reactive, computed, mergeProps, openBlock, createBlock, toDisplayString } from 'file://D:/WBNR/WBNR/node_modules/vue/index.mjs';
import { ssrRenderComponent, ssrRenderList, ssrRenderAttr, ssrInterpolate, ssrRenderClass, ssrIncludeBooleanAttr, ssrRenderTeleport, ssrRenderAttrs } from 'file://D:/WBNR/WBNR/node_modules/vue/server-renderer/index.mjs';
import { _ as _imports_0 } from './upload-icon-5bfc433e.mjs';
import { u as useApi } from './useApi-73d2615e.mjs';
import { k as apiGetReturnsItemsUrl } from './index-f05587d3.mjs';
import { h as handleDate } from './index-dd9c0bf2.mjs';
import { r as returnedOrderStatus } from './index-a82f0d37.mjs';
import { _ as _export_sfc } from '../server.mjs';
import './state-df47e21c.mjs';
import './config-b815dc90.mjs';
import 'file://D:/WBNR/WBNR/node_modules/klona/dist/index.mjs';
import 'file://D:/WBNR/WBNR/node_modules/@iconify/vue/dist/offline.mjs';
import 'file://D:/WBNR/WBNR/node_modules/@iconify/vue/dist/iconify.mjs';
import 'file://D:/WBNR/WBNR/node_modules/@headlessui/vue/dist/headlessui.esm.js';
import '../../renderer.mjs';
import 'file://D:/WBNR/WBNR/node_modules/vue-bundle-renderer/dist/runtime.mjs';
import 'file://D:/WBNR/WBNR/node_modules/h3/dist/index.mjs';
import 'file://D:/WBNR/WBNR/node_modules/devalue/index.js';
import 'file://D:/WBNR/WBNR/node_modules/ufo/dist/index.mjs';
import 'file://D:/WBNR/WBNR/node_modules/@unhead/ssr/dist/index.mjs';
import '../../nitro/nitro-prerenderer.mjs';
import 'file://D:/WBNR/WBNR/node_modules/ofetch/dist/node.mjs';
import 'file://D:/WBNR/WBNR/node_modules/destr/dist/index.mjs';
import 'file://D:/WBNR/WBNR/node_modules/unenv/runtime/fetch/index.mjs';
import 'file://D:/WBNR/WBNR/node_modules/hookable/dist/index.mjs';
import 'file://D:/WBNR/WBNR/node_modules/scule/dist/index.mjs';
import 'file://D:/WBNR/WBNR/node_modules/defu/dist/defu.mjs';
import 'file://D:/WBNR/WBNR/node_modules/ohash/dist/index.mjs';
import 'file://D:/WBNR/WBNR/node_modules/unstorage/dist/index.mjs';
import 'file://D:/WBNR/WBNR/node_modules/unstorage/drivers/fs.mjs';
import 'file://D:/WBNR/WBNR/node_modules/unstorage/drivers/memory.mjs';
import 'file://D:/WBNR/WBNR/node_modules/unstorage/drivers/lru-cache.mjs';
import 'file://D:/WBNR/WBNR/node_modules/unstorage/drivers/fs-lite.mjs';
import 'file://D:/WBNR/WBNR/node_modules/radix3/dist/index.mjs';
import 'node:fs';
import 'node:url';
import 'file://D:/WBNR/WBNR/node_modules/pathe/dist/index.mjs';
import 'file://D:/WBNR/WBNR/node_modules/unhead/dist/index.mjs';
import 'file://D:/WBNR/WBNR/node_modules/@unhead/shared/dist/index.mjs';
import 'file://D:/WBNR/WBNR/node_modules/vue3-toastify/dist/index.mjs';
import 'file://D:/WBNR/WBNR/node_modules/unctx/dist/index.mjs';
import 'file://D:/WBNR/WBNR/node_modules/vue-router/dist/vue-router.node.mjs';
import 'file://D:/WBNR/WBNR/node_modules/cookie-es/dist/index.mjs';

const _sfc_main$1 = {
  __name: "ReturnOrder",
  __ssrInlineRender: true,
  props: ["data"],
  emits: ["hide", "refresh"],
  setup(__props, { emit: emits }) {
    useCountries();
    const orderTypes = [
      {
        title: "\u0627\u0633\u062A\u0628\u062F\u0627\u0644",
        value: "refund"
      },
      {
        title: "\u0627\u0633\u062A\u0631\u062C\u0627\u0639",
        value: "exchange"
      }
    ];
    const form = reactive({
      reason: "",
      return_type: "refund",
      image: ""
    });
    const selectedType = computed(
      () => orderTypes.find((item) => item.value === form.return_type)
    );
    const isSubmitting = ref(false);
    const isUploading = ref(false);
    const uploadedImage = ref(null);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Icon = __nuxt_component_0$1;
      const _component_shared_menu = __nuxt_component_3;
      const _component_shared_loders_loader_button = __nuxt_component_1$1;
      const _component_shared_buttons_primary_button = __nuxt_component_3$1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "fixed inset-0 z-50" }, _attrs))}><div class="fixed inset-0 bg-black/20"></div><div class="w-full h-full px-4 overflow-auto">`);
      if (__props.data) {
        _push(`<div class="relative z-10 bg-white rounded-lg shadow-main p-8 xl:p-16 w-full max-w-[45rem] my-12 mx-auto"><div class="relative mb-16"><button type="button" class="absolute top-0 end-0 text-[1.6rem] text-gray-500">`);
        _push(ssrRenderComponent(_component_Icon, { name: "clarity:times-line" }, null, _parent));
        _push(`</button></div><form><div class="mb-16"><label for="reason" class="block leading-normal text-gray-700 text-2xl mb-4">\u062A\u0641\u0627\u0635\u064A\u0644 \u0627\u0644\u0637\u0644\u0628 (\u0627\u0644\u0645\u0634\u0643\u0644\u0629)</label><textarea id="reason" placeholder="\u0627\u0643\u062A\u0628 \u0647\u0646\u0627 .." class="h-[7.125rem] w-full block border border-gray-200 rounded-[11px] px-4 py-[.75rem] focus:border-primary-300 focus-within:!outline-0">${ssrInterpolate(unref(form).reason)}</textarea></div><div class="mb-16">`);
        _push(ssrRenderComponent(_component_shared_menu, {
          items: orderTypes,
          "button-props": {
            class: `h-[3.3125rem]  px-8 py-[.38rem]`
          },
          "menu-props": {
            class: `max-w-[8rem]`
          }
        }, {
          label: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<div class="flex items-center gap-[19px]"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_Icon, { name: "iconamoon:arrow-down-2-duotone" }, null, _parent2, _scopeId));
              if (unref(form).return_type) {
                _push2(`<span${_scopeId}>${ssrInterpolate(unref(selectedType).title)}</span>`);
              } else {
                _push2(`<span${_scopeId}>\u0646\u0648\u0639 \u0627\u0644\u0637\u0644\u0628</span>`);
              }
              _push2(`</div>`);
            } else {
              return [
                createVNode("div", { class: "flex items-center gap-[19px]" }, [
                  createVNode(_component_Icon, { name: "iconamoon:arrow-down-2-duotone" }),
                  unref(form).return_type ? (openBlock(), createBlock("span", { key: 0 }, toDisplayString(unref(selectedType).title), 1)) : (openBlock(), createBlock("span", { key: 1 }, "\u0646\u0648\u0639 \u0627\u0644\u0637\u0644\u0628"))
                ])
              ];
            }
          }),
          item: withCtx(({ data }, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<button type="button" class="flex gap-[24px] items-center mb-[19px] last:mb-0 h-[45px]"${_scopeId}><span${_scopeId}>${ssrInterpolate(data.title)}</span></button>`);
            } else {
              return [
                createVNode("button", {
                  type: "button",
                  class: "flex gap-[24px] items-center mb-[19px] last:mb-0 h-[45px]",
                  onClick: ($event) => unref(form).return_type = data.value
                }, [
                  createVNode("span", null, toDisplayString(data.title), 1)
                ], 8, ["onClick"])
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div><div class="mb-16 flex items-center gap-4 flex-wrap"><input type="file" id="upload-avatar" class="hidden"><label class="cursor-pointer flex items-center justify-center gap-[1.19rem] leading-normal text-gray-700 text-xl w-fit h-[3.0625rem] border border-gray-200 bg-gray-100 rounded-[.75rem] px-8" for="upload-avatar">`);
        if (unref(isUploading)) {
          _push(`<div class="loading-container">`);
          _push(ssrRenderComponent(_component_shared_loders_loader_button, null, null, _parent));
          _push(`</div>`);
        } else {
          _push(`<img${ssrRenderAttr("src", _imports_0)} alt="upload avatar" class="">`);
        }
        _push(`<span>\u0635\u0648\u0631\u0629 \u0627\u0648 \u0641\u064A\u062F\u064A\u0648 \u0644\u0644\u0645\u0646\u062A\u062C</span></label>`);
        if (unref(uploadedImage)) {
          _push(`<div>${ssrInterpolate(unref(uploadedImage).name)}</div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div>`);
        _push(ssrRenderComponent(_component_shared_buttons_primary_button, {
          "submit-title": "\u0627\u0631\u0633\u0627\u0644 \u0637\u0644\u0628",
          type: "submit",
          loading: unref(isSubmitting)
        }, null, _parent));
        _push(`</form></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/dashboard/ReturnOrder.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_4 = _sfc_main$1;
const _sfc_main = {
  __name: "replace-returns",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const { selectedCountry } = useCountries();
    const title = ref("");
    const { fire } = useApi({
      url: () => apiGetReturnsItemsUrl,
      requestOptions: {
        query: {
          country_id: selectedCountry.value.id,
          title
        },
        watch: [title]
      }
    });
    const { data, pending, refresh } = ([__temp, __restore] = withAsyncContext(() => fire()), __temp = await __temp, __restore(), __temp);
    const selectedOrder = ref(null);
    const isShowReturnModal = ref(false);
    function hideReturnModal() {
      isShowReturnModal.value = false;
      selectedOrder.value = null;
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_shared_cards_filter = __nuxt_component_1;
      const _component_shared_form_input = __nuxt_component_0;
      const _component_icon = __nuxt_component_0$1;
      const _component_shared_loders_loading = __nuxt_component_7;
      const _component_Icon = __nuxt_component_0$1;
      const _component_dashboard_return_order = __nuxt_component_4;
      _push(`<!--[--><section data-v-318ffd1a><h4 class="mb-16 text-gray-700 font-normal text-2xl" data-v-318ffd1a> \u0637\u0644\u0628\u0627\u062A \u0627\u0644\u0633\u062D\u0628 \u0627\u0644\u0633\u0627\u0628\u0642\u0629 </h4>`);
      _push(ssrRenderComponent(_component_shared_cards_filter, null, {
        right: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="relative layout-navbar-search" data-v-318ffd1a${_scopeId}>`);
            _push2(ssrRenderComponent(_component_shared_form_input, {
              placeholder: "\u0627\u0644\u0628\u062D\u062B \u0639\u0646 \u0645\u0646\u062A\u062C",
              type: "text",
              class: "pe-[80px] !h-[3.5625rem] !w-[22rem] sm:!w-[35rem]",
              modelValue: unref(title),
              "onUpdate:modelValue": ($event) => isRef(title) ? title.value = $event : null
            }, null, _parent2, _scopeId));
            _push2(`<span class="absolute top-0 left-0 bottom-0 rounded-tl-[11px] rounded-bl-[11px] bg-primary-100 text-primary-300 w-[75px] flex items-center justify-center border border-gray-200 border-s-0" data-v-318ffd1a${_scopeId}>`);
            _push2(ssrRenderComponent(_component_icon, {
              name: "system-uicons:search",
              class: "text-4xl"
            }, null, _parent2, _scopeId));
            _push2(`</span></div>`);
          } else {
            return [
              createVNode("div", { class: "relative layout-navbar-search" }, [
                createVNode(_component_shared_form_input, {
                  placeholder: "\u0627\u0644\u0628\u062D\u062B \u0639\u0646 \u0645\u0646\u062A\u062C",
                  type: "text",
                  class: "pe-[80px] !h-[3.5625rem] !w-[22rem] sm:!w-[35rem]",
                  modelValue: unref(title),
                  "onUpdate:modelValue": ($event) => isRef(title) ? title.value = $event : null
                }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                createVNode("span", { class: "absolute top-0 left-0 bottom-0 rounded-tl-[11px] rounded-bl-[11px] bg-primary-100 text-primary-300 w-[75px] flex items-center justify-center border border-gray-200 border-s-0" }, [
                  createVNode(_component_icon, {
                    name: "system-uicons:search",
                    class: "text-4xl"
                  })
                ])
              ])
            ];
          }
        }),
        left: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="flex items-center gap-4" data-v-318ffd1a${_scopeId}></div>`);
          } else {
            return [
              createVNode("div", { class: "flex items-center gap-4" })
            ];
          }
        }),
        _: 1
      }, _parent));
      if (unref(pending)) {
        _push(`<div class="mt-16 flex items-center justify-center" data-v-318ffd1a>`);
        _push(ssrRenderComponent(_component_shared_loders_loading, null, null, _parent));
        _push(`</div>`);
      } else {
        _push(`<div class="mt-16" data-v-318ffd1a><!--[-->`);
        ssrRenderList(unref(data).data, (order) => {
          _push(`<div class="shadow-main p-9 bg-white border border-gray-200 rounded-2xl flex items-center flex-wrap gap-9 mb-9" data-v-318ffd1a><img${ssrRenderAttr("src", order.product.featured_image)}${ssrRenderAttr("alt", order.product.title)} class="w-[7.75rem] h-[7.75rem] rounded-[.5rem]" data-v-318ffd1a><div data-v-318ffd1a><h6 class="text-2xl text-gray-700 leading-normal mb-[.88rem]" data-v-318ffd1a>${ssrInterpolate(order.product.title)} `);
          if (order.status_if_returned_before) {
            _push(`<span class="${ssrRenderClass([order.status_if_returned_before, "px-8 py-[.3rem] text-base returned-order-status rounded-[5.625rem] ms-[1.5rem]"])}" data-v-318ffd1a>${ssrInterpolate(unref(returnedOrderStatus)[order.status_if_returned_before])}</span>`);
          } else {
            _push(`<!---->`);
          }
          _push(`</h6><div class="flex flex-wrap items-center gap-4 text-gray-300 text-xl leading-normal" data-v-318ffd1a><span data-v-318ffd1a>\u062A\u0627\u0631\u064A\u062E \u0627\u0644\u0634\u0631\u0627\u0621:${ssrInterpolate(unref(handleDate)(order.order.created_at))}</span><div class="h-[36px] bg-gray-200 w-[1px]" data-v-318ffd1a></div><span data-v-318ffd1a>\u0643\u0648\u062F \u0627\u0644\u0637\u0644\u0628: ${ssrInterpolate(order.order.order_number)}</span></div></div><button class="ms-auto flex items-center gap-4 text-primary-300 disabled:text-primary-200 text-lg"${ssrIncludeBooleanAttr(order.is_returned_before) ? " disabled" : ""} data-v-318ffd1a> \u0637\u0644\u0628 \u0627\u0633\u062A\u0628\u062F\u0627\u0644 \u0627\u0648 \u0627\u0633\u062A\u0631\u062C\u0627\u0639 `);
          _push(ssrRenderComponent(_component_Icon, {
            name: "material-symbols:chevron-left",
            class: "text-2xl"
          }, null, _parent));
          _push(`</button></div>`);
        });
        _push(`<!--]--></div>`);
      }
      _push(`</section>`);
      ssrRenderTeleport(_push, (_push2) => {
        if (unref(isShowReturnModal)) {
          _push2(ssrRenderComponent(_component_dashboard_return_order, {
            data: unref(selectedOrder),
            onHide: hideReturnModal,
            onRefresh: ($event) => unref(refresh)()
          }, null, _parent));
        } else {
          _push2(`<!---->`);
        }
      }, "body", false, _parent);
      _push(`<!--]-->`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/dashboard/replace-returns.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const replaceReturns = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-318ffd1a"]]);

export { replaceReturns as default };
//# sourceMappingURL=replace-returns-8272a835.mjs.map
