import { _ as __nuxt_component_0 } from "./Title-23cab648.js";
import { _ as __nuxt_component_1 } from "./Aside-c9453fc3.js";
import { _ as __nuxt_component_0$1 } from "./Input-1e7796d8.js";
import { _ as __nuxt_component_3 } from "./menu-87b0daac.js";
import __nuxt_component_0$2 from "./Icon-b69f18a8.js";
import { withAsyncContext, reactive, ref, computed, mergeProps, unref, withCtx, createVNode, createTextVNode, toDisplayString, useSSRContext } from "vue";
import "hookable";
import { h as useRoute } from "../server.mjs";
import "destr";
import "devalue";
import "defu";
import "klona";
import { u as useCountries } from "./useCountries-716a6161.js";
import { u as useApi } from "./useApi-73d2615e.js";
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate } from "vue/server-renderer";
import { f as apiGetGov, g as apiPlaceQuickOrderUrl } from "./index-f05587d3.js";
import "./nuxt-link-7fd3a776.js";
import "ufo";
import "./PrimaryButton-3e0b2318.js";
import "./LoaderButton-81aa4875.js";
import "vue3-toastify";
import "@headlessui/vue";
import "./state-df47e21c.js";
import "./config-b815dc90.js";
import "@iconify/vue/dist/offline";
import "@iconify/vue";
import "ofetch";
import "#internal/nitro";
import "unctx";
import "unhead";
import "@unhead/shared";
import "vue-router";
import "h3";
import "cookie-es";
import "ohash";
const _sfc_main = {
  __name: "checkout-quick-order",
  __ssrInlineRender: true,
  async setup(__props) {
    var _a;
    let __temp, __restore;
    const route = useRoute();
    const { selectedCountry } = useCountries();
    const { fire: fireGov } = useApi({
      url: apiGetGov,
      requestOptions: {
        query: {
          country_id: (_a = selectedCountry.value) == null ? void 0 : _a.id,
          take: 100
        }
      }
    });
    const { data: govData } = ([__temp, __restore] = withAsyncContext(() => fireGov()), __temp = await __temp, __restore(), __temp);
    const form = reactive({
      name: "",
      phone: "",
      secondary_phone: "",
      address_details: "",
      store_name: "",
      store_url: "",
      governorate_id: "",
      product_id: route.query.product,
      product_quantity: route.query.qty,
      final_price: route.query.price
    });
    function chooseGov(data) {
      form.governorate_id = data.id;
    }
    const { fire: firePlaceOrder } = useApi({
      url: apiPlaceQuickOrderUrl,
      requestOptions: {
        method: "post"
      }
    });
    const isLoadingPlaceOrder = ref(false);
    async function placeOrder() {
      isLoadingPlaceOrder.value = true;
      await firePlaceOrder(form);
      isLoadingPlaceOrder.value = false;
    }
    const getSelectedGov = computed(
      () => {
        var _a2;
        return (_a2 = govData.value) == null ? void 0 : _a2.data.find((item) => item.id === form.governorate_id);
      }
    );
    return (_ctx, _push, _parent, _attrs) => {
      const _component_shared_title = __nuxt_component_0;
      const _component_checkout_aside = __nuxt_component_1;
      const _component_shared_form_input = __nuxt_component_0$1;
      const _component_shared_menu = __nuxt_component_3;
      const _component_Icon = __nuxt_component_0$2;
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "bg-primary" }, _attrs))}>`);
      _push(ssrRenderComponent(_component_shared_title, { title: "مراجعة الطلب" }, null, _parent));
      _push(`<div class="flex flex-col-reverse xl:flex-row justify-start gap-24">`);
      _push(ssrRenderComponent(_component_checkout_aside, {
        details: {
          cartItems: [
            {
              product: {
                featured_image: unref(route).query.image,
                title: unref(route).query.title
              },
              quantity: unref(route).query.qty
            }
          ],
          price: unref(route).query.price,
          final_price: unref(route).query.price,
          tax_percentage: unref(route).query.minCommission,
          delivery_cost: ""
        },
        onPlaceOrder: placeOrder,
        isLoadingPlaceOrder: unref(isLoadingPlaceOrder)
      }, null, _parent));
      _push(`<div class="flex-1"><h5 class="text-2xl text-gray-700 mb-16">بيانات شخصية</h5><form class="w-full xl:w-[38rem]"><div class="mb-7">`);
      _push(ssrRenderComponent(_component_shared_form_input, {
        placeholder: "الأسم بالكامل",
        class: "bg-transparent !w-full",
        type: "text",
        modelValue: unref(form).name,
        "onUpdate:modelValue": ($event) => unref(form).name = $event
      }, null, _parent));
      _push(`</div><div class="mb-7">`);
      _push(ssrRenderComponent(_component_shared_form_input, {
        placeholder: "رقم الهاتف",
        class: "bg-transparent !w-full",
        type: "text",
        modelValue: unref(form).phone,
        "onUpdate:modelValue": ($event) => unref(form).phone = $event
      }, null, _parent));
      _push(`</div><div class="mb-24">`);
      _push(ssrRenderComponent(_component_shared_form_input, {
        placeholder: "رقم الهاتف البديل (إختياري)",
        class: "bg-transparent !w-full",
        type: "text",
        modelValue: unref(form).secondary_phone,
        "onUpdate:modelValue": ($event) => unref(form).secondary_phone = $event
      }, null, _parent));
      _push(`</div><h5 class="text-2xl text-gray-700 mb-16">بيانات الشحن</h5><div class="mb-16"><label for="address" class="text-2xl text-gray-500 mb-6 block">العنوان بالتفصيل</label><div class="relative">`);
      _push(ssrRenderComponent(_component_shared_form_input, {
        placeholder: " المنطقة, الشارع, العقار, الشقة",
        class: "ps-[11.8rem] bg-transparent !w-full",
        id: "address",
        type: "text",
        modelValue: unref(form).address_details,
        "onUpdate:modelValue": ($event) => unref(form).address_details = $event
      }, null, _parent));
      _push(`<div class="absolute top-1/2 -translate-y-1/2 start-[5px]">`);
      _push(ssrRenderComponent(_component_shared_menu, {
        items: unref(govData).data,
        buttonProps: {
          class: "w-[11.1375rem] h-[3.06rem] !p-0 flex items-center justify-center rounded-[0.75rem] !border-gray-200 !bg-gray-100"
        },
        menuProps: {
          class: "w-[11.1375rem]"
        }
      }, {
        label: withCtx((_, _push2, _parent2, _scopeId) => {
          var _a2, _b;
          if (_push2) {
            _push2(`<div class="flex items-center gap-[19px]"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_Icon, { name: "iconamoon:arrow-down-2-duotone" }, null, _parent2, _scopeId));
            _push2(` ${ssrInterpolate(((_a2 = unref(getSelectedGov)) == null ? void 0 : _a2.name) || "المحافظة")}</div>`);
          } else {
            return [
              createVNode("div", { class: "flex items-center gap-[19px]" }, [
                createVNode(_component_Icon, { name: "iconamoon:arrow-down-2-duotone" }),
                createTextVNode(" " + toDisplayString(((_b = unref(getSelectedGov)) == null ? void 0 : _b.name) || "المحافظة"), 1)
              ])
            ];
          }
        }),
        item: withCtx(({ data }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<button type="button" class="flex w-full gap-[24px] items-center mb-[19px] last:mb-0 h-[35px]"${_scopeId}><span${_scopeId}>${ssrInterpolate(data.name)}</span></button>`);
          } else {
            return [
              createVNode("button", {
                type: "button",
                class: "flex w-full gap-[24px] items-center mb-[19px] last:mb-0 h-[35px]",
                onClick: ($event) => chooseGov(data)
              }, [
                createVNode("span", null, toDisplayString(data.name), 1)
              ], 8, ["onClick"])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></div><div class="flex items-center gap-6"><div class="w-[10.75rem]"><label for="address" class="text-2xl text-gray-500 mb-6 block">اسم متجرك</label>`);
      _push(ssrRenderComponent(_component_shared_form_input, {
        type: "text",
        placeholder: "myrgroup",
        class: "bg-transparent w-full",
        modelValue: unref(form).store_name,
        "onUpdate:modelValue": ($event) => unref(form).store_name = $event
      }, null, _parent));
      _push(`</div><div class="flex-1"><label for="address" class="text-2xl text-gray-500 mb-6 block">لينك المتجر ( صفحة الفيسبوك )</label>`);
      _push(ssrRenderComponent(_component_shared_form_input, {
        type: "url",
        placeholder: "myrgroup.co",
        class: "bg-transparent !w-full",
        modelValue: unref(form).store_url,
        "onUpdate:modelValue": ($event) => unref(form).store_url = $event
      }, null, _parent));
      _push(`</div></div></form></div></div></section>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/checkout-quick-order.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=checkout-quick-order-e9e4c481.js.map
