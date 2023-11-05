import { _ as __nuxt_component_7 } from "./Loading-b5ab98f2.js";
import { mergeProps, useSSRContext, reactive, ref, unref, withAsyncContext } from "vue";
import { ssrRenderAttrs, ssrInterpolate, ssrRenderAttr, ssrRenderComponent, ssrRenderList, ssrRenderClass, ssrRenderTeleport } from "vue/server-renderer";
import { _ as _export_sfc } from "../server.mjs";
import { _ as __nuxt_component_1$2 } from "./SecondaryButton-979fef3b.js";
import { _ as __nuxt_component_3$2 } from "./Status-d6b24557.js";
import __nuxt_component_0$1 from "./Icon-b69f18a8.js";
import { _ as __nuxt_component_0 } from "./Input-1e7796d8.js";
import { _ as __nuxt_component_3$1 } from "./PrimaryButton-3e0b2318.js";
import "hookable";
import "destr";
import "devalue";
import "defu";
import "klona";
import "vue3-toastify";
import { b as banks, w as walletStatus } from "./index-a82f0d37.js";
import { u as useApi } from "./useApi-73d2615e.js";
import { h as handleDate } from "./index-dd9c0bf2.js";
import { m as apiGetMyWalletsUrl, n as apiGetWithdrawUrl } from "./index-f05587d3.js";
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
import "./LoaderButton-81aa4875.js";
import "./state-df47e21c.js";
import "./config-b815dc90.js";
import "@iconify/vue/dist/offline";
import "@iconify/vue";
const Wallet_vue_vue_type_style_index_0_scoped_5ac8cfea_lang = "";
const _sfc_main$7 = {
  __name: "Wallet",
  __ssrInlineRender: true,
  props: ["title", "value", "flag", "expected", "currency"],
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "border border-gray-200 rounded-[16px] bg-white p-[24px] wallet-card min-w-[16rem] flex flex-col h-[16rem]" }, _attrs))} data-v-5ac8cfea><div class="flex justify-between items-center" data-v-5ac8cfea><h6 class="text-[28px] text-gray-400 font-semibold" data-v-5ac8cfea>${ssrInterpolate(__props.title)}</h6><img${ssrRenderAttr("src", __props.flag)} alt="" data-v-5ac8cfea></div><div class="flex justify-between mt-auto" data-v-5ac8cfea><div data-v-5ac8cfea><h6 class="text-gray-400 text-[16px]" data-v-5ac8cfea>جاهز للسحب</h6><h4 class="text-[24px] text-primary-300 font-semibold" data-v-5ac8cfea>${ssrInterpolate(__props.value)} ${ssrInterpolate(__props.currency)}</h4></div><div data-v-5ac8cfea><h6 class="text-gray-400 text-[16px]" data-v-5ac8cfea>متوقع</h6><h4 class="text-[24px] text-secondary-300 font-semibold" data-v-5ac8cfea>${ssrInterpolate(__props.expected)} ${ssrInterpolate(__props.currency)}</h4></div></div></div>`);
    };
  }
};
const _sfc_setup$7 = _sfc_main$7.setup;
_sfc_main$7.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/shared/cards/Wallet.vue");
  return _sfc_setup$7 ? _sfc_setup$7(props, ctx) : void 0;
};
const __nuxt_component_1$1 = /* @__PURE__ */ _export_sfc(_sfc_main$7, [["__scopeId", "data-v-5ac8cfea"]]);
const _sfc_main$6 = {
  __name: "WithdrawBank",
  __ssrInlineRender: true,
  props: ["selectedPayment", "data"],
  emits: ["next"],
  setup(__props, { emit: emits }) {
    const form = reactive({
      bank_name: "",
      bank_address: "",
      swift_number: "",
      owner_name: "",
      owner_address: "",
      owner_phone: "",
      iban: ""
    });
    const pending = ref(false);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_shared_form_input = __nuxt_component_0;
      const _component_shared_buttons_primary_button = __nuxt_component_3$1;
      _push(`<form${ssrRenderAttrs(_attrs)}><h6 class="text-2xl text-gray-700 leading-normal font-normal mb-[2.25rem]"> تحويل بنكي </h6><div class="mb-6">`);
      _push(ssrRenderComponent(_component_shared_form_input, {
        class: "w-full bg-transparent",
        placeholder: "اسم البنك",
        modelValue: unref(form).bank_name,
        "onUpdate:modelValue": ($event) => unref(form).bank_name = $event,
        type: "text"
      }, null, _parent));
      _push(`</div><div class="mb-6">`);
      _push(ssrRenderComponent(_component_shared_form_input, {
        class: "w-full bg-transparent",
        placeholder: "عنوان البنك",
        modelValue: unref(form).bank_address,
        "onUpdate:modelValue": ($event) => unref(form).bank_address = $event,
        type: "text"
      }, null, _parent));
      _push(`</div><div class="mb-6">`);
      _push(ssrRenderComponent(_component_shared_form_input, {
        class: "w-full bg-transparent",
        placeholder: "#ٍٍSwift NO",
        modelValue: unref(form).swift_number,
        "onUpdate:modelValue": ($event) => unref(form).swift_number = $event,
        type: "text"
      }, null, _parent));
      _push(`</div><div class="mb-6">`);
      _push(ssrRenderComponent(_component_shared_form_input, {
        class: "w-full bg-transparent",
        placeholder: "اسم المستفيد",
        modelValue: unref(form).owner_name,
        "onUpdate:modelValue": ($event) => unref(form).owner_name = $event,
        type: "text"
      }, null, _parent));
      _push(`</div><div class="mb-6">`);
      _push(ssrRenderComponent(_component_shared_form_input, {
        class: "w-full bg-transparent",
        placeholder: "عنوان المستفيد",
        modelValue: unref(form).owner_address,
        "onUpdate:modelValue": ($event) => unref(form).owner_address = $event,
        type: "text"
      }, null, _parent));
      _push(`</div><div class="mb-6">`);
      _push(ssrRenderComponent(_component_shared_form_input, {
        class: "w-full bg-transparent",
        placeholder: "رقم موبايل المستفيد",
        modelValue: unref(form).owner_phone,
        "onUpdate:modelValue": ($event) => unref(form).owner_phone = $event,
        type: "text"
      }, null, _parent));
      _push(`</div><div>`);
      _push(ssrRenderComponent(_component_shared_form_input, {
        class: "w-full bg-transparent",
        placeholder: "IBAN",
        modelValue: unref(form).iban,
        "onUpdate:modelValue": ($event) => unref(form).iban = $event,
        type: "text"
      }, null, _parent));
      _push(`</div>`);
      _push(ssrRenderComponent(_component_shared_buttons_primary_button, {
        "submit-title": "ارسال طلب",
        type: "submit",
        class: "!min-w-0 !min-h-0 !w-[15.375rem] !h-[4.1875rem] mt-[2.25rem]",
        loading: unref(pending)
      }, null, _parent));
      _push(`</form>`);
    };
  }
};
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/dashboard/WithdrawBank.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const __nuxt_component_1 = _sfc_main$6;
const _sfc_main$5 = {
  __name: "WithdrawInsta",
  __ssrInlineRender: true,
  props: ["selectedPayment", "data"],
  emits: ["next"],
  setup(__props, { emit: emits }) {
    const form = reactive({
      instapay_number: ""
    });
    const pending = ref(false);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_shared_form_input = __nuxt_component_0;
      const _component_shared_buttons_primary_button = __nuxt_component_3$1;
      _push(`<form${ssrRenderAttrs(_attrs)}><h6 class="text-2xl text-gray-700 leading-normal font-normal mb-[2.25rem]"> انستا باي </h6><div class="mb-6">`);
      _push(ssrRenderComponent(_component_shared_form_input, {
        class: "w-full bg-transparent",
        placeholder: "رقم موبايل المستفيد",
        modelValue: unref(form).instapay_number,
        "onUpdate:modelValue": ($event) => unref(form).instapay_number = $event,
        type: "text"
      }, null, _parent));
      _push(`</div>`);
      _push(ssrRenderComponent(_component_shared_buttons_primary_button, {
        "submit-title": "ارسال طلب",
        type: "submit",
        class: "!min-w-0 !min-h-0 !w-[15.375rem] !h-[4.1875rem] mt-[2.25rem]",
        loading: unref(pending)
      }, null, _parent));
      _push(`</form>`);
    };
  }
};
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/dashboard/WithdrawInsta.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const __nuxt_component_2 = _sfc_main$5;
const _sfc_main$4 = {
  __name: "WithdrawVodafone",
  __ssrInlineRender: true,
  props: ["selectedPayment", "data"],
  emits: ["next"],
  setup(__props, { emit: emits }) {
    const form = reactive({
      vodafone_cash_number: ""
    });
    const pending = ref(false);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_shared_form_input = __nuxt_component_0;
      const _component_shared_buttons_primary_button = __nuxt_component_3$1;
      _push(`<form${ssrRenderAttrs(_attrs)}><h6 class="text-2xl text-gray-700 leading-normal font-normal mb-[2.25rem]"> فودافون كاش </h6><div class="mb-6">`);
      _push(ssrRenderComponent(_component_shared_form_input, {
        class: "w-full bg-transparent",
        placeholder: "رقم موبايل محفظة فودافون كاش",
        modelValue: unref(form).vodafone_cash_number,
        "onUpdate:modelValue": ($event) => unref(form).vodafone_cash_number = $event,
        type: "text"
      }, null, _parent));
      _push(`</div>`);
      _push(ssrRenderComponent(_component_shared_buttons_primary_button, {
        "submit-title": "ارسال طلب",
        type: "submit",
        class: "!min-w-0 !min-h-0 !w-[15.375rem] !h-[4.1875rem] mt-[2.25rem]",
        loading: unref(pending)
      }, null, _parent));
      _push(`</form>`);
    };
  }
};
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/dashboard/WithdrawVodafone.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const __nuxt_component_3 = _sfc_main$4;
const _sfc_main$3 = {
  __name: "WithdrawPaypal",
  __ssrInlineRender: true,
  props: ["selectedPayment", "data"],
  emits: ["next"],
  setup(__props, { emit: emits }) {
    const form = reactive({
      paypal_email: ""
    });
    const pending = ref(false);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_shared_form_input = __nuxt_component_0;
      const _component_shared_buttons_primary_button = __nuxt_component_3$1;
      _push(`<form${ssrRenderAttrs(_attrs)}><h6 class="text-2xl text-gray-700 leading-normal font-normal mb-[2.25rem]"> باي بال </h6><div class="mb-6">`);
      _push(ssrRenderComponent(_component_shared_form_input, {
        class: "w-full bg-transparent",
        placeholder: "البريد الإلكتروني لحساب باي بال",
        modelValue: unref(form).paypal_email,
        "onUpdate:modelValue": ($event) => unref(form).paypal_email = $event,
        type: "email"
      }, null, _parent));
      _push(`</div>`);
      _push(ssrRenderComponent(_component_shared_buttons_primary_button, {
        "submit-title": "ارسال طلب",
        type: "submit",
        class: "!min-w-0 !min-h-0 !w-[15.375rem] !h-[4.1875rem] mt-[2.25rem]",
        loading: unref(pending)
      }, null, _parent));
      _push(`</form>`);
    };
  }
};
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/dashboard/WithdrawPaypal.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const __nuxt_component_4$1 = _sfc_main$3;
const _imports_0 = "" + __buildAssetsURL("final.ba05bc51.svg");
const _sfc_main$2 = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "text-center flex flex-col items-center justify-center" }, _attrs))}><img${ssrRenderAttr("src", _imports_0)} alt="success" class="max-w-full"><h5 class="text-[2rem] mt-9">تم ارسال طلبك وفي انتظار المراجعة</h5></div>`);
}
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/dashboard/WithdrawFinal.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_5 = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["ssrRender", _sfc_ssrRender]]);
const BankIcon = "" + __buildAssetsURL("bank-icon.823313c7.svg");
const InstaIcon = "" + __buildAssetsURL("insta-icon.4428a61c.svg");
const VodafoneIcon = "" + __buildAssetsURL("vodafone-icon.7d61d299.svg");
const PaypalIcon = "" + __buildAssetsURL("paypal-icon.619293d5.svg");
const _sfc_main$1 = {
  __name: "WalletWithdrawRequest",
  __ssrInlineRender: true,
  props: ["data"],
  emits: ["hide", "refresh"],
  setup(__props, { emit: emits }) {
    const isFinal = ref(false);
    const selectedPayment = ref("banktransfer");
    const payments = [
      {
        image: BankIcon,
        value: banks.banktransfer
      },
      {
        image: InstaIcon,
        value: banks.instapay
      },
      {
        image: VodafoneIcon,
        value: banks.vodafone
      },
      {
        image: PaypalIcon,
        value: banks.paypal
      }
    ];
    function next() {
      isFinal.value = true;
      emits("refresh");
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Icon = __nuxt_component_0$1;
      const _component_dashboard_withdraw_bank = __nuxt_component_1;
      const _component_dashboard_withdraw_insta = __nuxt_component_2;
      const _component_dashboard_withdraw_vodafone = __nuxt_component_3;
      const _component_dashboard_withdraw_paypal = __nuxt_component_4$1;
      const _component_dashboard_withdraw_final = __nuxt_component_5;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "fixed inset-0 z-50" }, _attrs))}><div class="fixed inset-0 bg-black/20"></div><div class="w-full h-full px-4 overflow-auto">`);
      if (__props.data) {
        _push(`<div class="relative z-10 bg-white rounded-lg shadow-main p-8 xl:p-16 w-full max-w-[45rem] my-12 mx-auto">`);
        if (!unref(isFinal)) {
          _push(`<div class="relative mb-16"><div class="flex items-center gap-5"><img${ssrRenderAttr("src", __props.data.country.image)}${ssrRenderAttr("alt", __props.data.country.name)}><h6 class="text-2xl text-gray-300 leading-normal font-normal"> جاهز للسحب </h6></div><h4 class="leading-[6rem] text-[3.75rem] text-primary-300 font-normal flex items-center gap-[.62rem]">${ssrInterpolate(__props.data.available_balance)} <span class="leading-none text-2xl">${ssrInterpolate(__props.data.country.currency)}</span></h4><button type="button" class="absolute top-0 end-0 text-[1.6rem] text-gray-500">`);
          _push(ssrRenderComponent(_component_Icon, { name: "clarity:times-line" }, null, _parent));
          _push(`</button></div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`<div class="flex items-center justify-between gap-4 mb-16"><!--[-->`);
        ssrRenderList(payments, (payment, index) => {
          _push(`<button type="button" class="${ssrRenderClass([{ "border-primary-300": payment.value === unref(selectedPayment) }, "p-4 border border-gray-200 rounded-xl flex items-center justify-center w-[7.5rem] h-[7.5rem]"])}"><img${ssrRenderAttr("src", payment.image)} class="max-w-full"${ssrRenderAttr("alt", payment.value)}></button>`);
        });
        _push(`<!--]--></div><div>`);
        if (unref(selectedPayment) === unref(banks).banktransfer) {
          _push(ssrRenderComponent(_component_dashboard_withdraw_bank, {
            selectedPayment: unref(selectedPayment),
            data: __props.data,
            onNext: next
          }, null, _parent));
        } else {
          _push(`<!---->`);
        }
        if (unref(selectedPayment) === unref(banks).instapay) {
          _push(ssrRenderComponent(_component_dashboard_withdraw_insta, {
            selectedPayment: unref(selectedPayment),
            data: __props.data,
            onNext: next
          }, null, _parent));
        } else {
          _push(`<!---->`);
        }
        if (unref(selectedPayment) === unref(banks).vodafone) {
          _push(ssrRenderComponent(_component_dashboard_withdraw_vodafone, {
            selectedPayment: unref(selectedPayment),
            data: __props.data,
            onNext: next
          }, null, _parent));
        } else {
          _push(`<!---->`);
        }
        if (unref(selectedPayment) === unref(banks).paypal) {
          _push(ssrRenderComponent(_component_dashboard_withdraw_paypal, {
            selectedPayment: unref(selectedPayment),
            data: __props.data,
            onNext: next
          }, null, _parent));
        } else {
          _push(`<!---->`);
        }
        if (unref(isFinal)) {
          _push(ssrRenderComponent(_component_dashboard_withdraw_final, {
            selectedPayment: unref(selectedPayment),
            data: __props.data
          }, null, _parent));
        } else {
          _push(`<!---->`);
        }
        _push(`</div></div>`);
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/dashboard/WalletWithdrawRequest.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_4 = _sfc_main$1;
const _sfc_main = {
  __name: "wallet",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const { fire } = useApi({
      url: apiGetMyWalletsUrl
    });
    const { data, pending, refresh } = ([__temp, __restore] = withAsyncContext(() => fire()), __temp = await __temp, __restore(), __temp);
    const { fire: withDrawFire } = useApi({
      url: apiGetWithdrawUrl
    });
    const {
      data: withdrawData,
      pending: withDrawPending,
      refresh: withDrawRefresh
    } = ([__temp, __restore] = withAsyncContext(() => withDrawFire()), __temp = await __temp, __restore(), __temp);
    const requestWithdraw = ref(false);
    const requestWithdrawData = ref(null);
    function makeWithDrawRequest(wallet) {
      requestWithdraw.value = true;
      requestWithdrawData.value = wallet;
    }
    function hideWithDrawRequest() {
      requestWithdraw.value = false;
      requestWithdrawData.value = null;
    }
    function refreshData() {
      refresh();
      withDrawRefresh();
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_shared_loders_loading = __nuxt_component_7;
      const _component_shared_cards_wallet = __nuxt_component_1$1;
      const _component_shared_buttons_secondary_button = __nuxt_component_1$2;
      const _component_shared_status = __nuxt_component_3$2;
      const _component_dashboard_wallet_withdraw_request = __nuxt_component_4;
      _push(`<!--[--><section>`);
      if (unref(pending)) {
        _push(`<div class="flex items-center justify-center">`);
        _push(ssrRenderComponent(_component_shared_loders_loading, null, null, _parent));
        _push(`</div>`);
      } else {
        _push(`<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-2 2xl:grid-cols-4 gap-7"><!--[-->`);
        ssrRenderList(unref(data).data, (wallet) => {
          _push(`<div class="">`);
          _push(ssrRenderComponent(_component_shared_cards_wallet, {
            title: "ارباحك",
            value: wallet.available_balance,
            flag: wallet.country.image,
            expected: wallet.pending_balance,
            currency: wallet.country.currency
          }, null, _parent));
          _push(`<div class="flex justify-center">`);
          _push(ssrRenderComponent(_component_shared_buttons_secondary_button, {
            submitTitle: "سحب الارباح",
            class: "w-full min-w-[256px] mt-4",
            onClick: ($event) => makeWithDrawRequest(wallet)
          }, null, _parent));
          _push(`</div></div>`);
        });
        _push(`<!--]--></div>`);
      }
      _push(`<h4 class="my-16 text-gray-700 font-normal">طلبات السحب السابقة</h4><div class="w-full overflow-auto">`);
      if (!unref(withDrawPending) && unref(withdrawData).data) {
        _push(`<div class="table w-full"><table class="w-full"><thead><tr><th class="text-2xl text-gray-800 font-normal leading-normal"> تاريخ الطلب </th><th class="text-2xl text-gray-800 font-normal leading-normal"> المبلغ </th><th class="text-2xl text-gray-800 font-normal leading-normal"> العملة </th><th class="text-2xl text-gray-800 font-normal leading-normal"> الحالة </th></tr></thead><tbody><!--[-->`);
        ssrRenderList(unref(withdrawData).data, (withdraw) => {
          _push(`<tr><td class="text-2xl text-gray-700 font-normal leading-normal w-full">${ssrInterpolate(unref(handleDate)(withdraw.created_at))}</td><td class="text-2xl text-gray-700 font-normal leading-normal">${ssrInterpolate(withdraw.amount)}</td><td>`);
          if (withdraw.country) {
            _push(`<img${ssrRenderAttr("src", withdraw.country.image)}${ssrRenderAttr("alt", withdraw.country.name + "flag")} class="m-auto">`);
          } else {
            _push(`<!---->`);
          }
          _push(`</td><td class="text-2xl font-normal leading-normal">`);
          _push(ssrRenderComponent(_component_shared_status, {
            status: withdraw.status,
            statuses: unref(walletStatus)
          }, null, _parent));
          _push(`</td></tr>`);
        });
        _push(`<!--]--></tbody></table></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></section>`);
      ssrRenderTeleport(_push, (_push2) => {
        if (unref(requestWithdraw)) {
          _push2(ssrRenderComponent(_component_dashboard_wallet_withdraw_request, {
            data: unref(requestWithdrawData),
            onHide: hideWithDrawRequest,
            onRefresh: refreshData
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/dashboard/wallet.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=wallet-8805b79e.js.map
