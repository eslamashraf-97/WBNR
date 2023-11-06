import { _ as __nuxt_component_0 } from "./Input-1e7796d8.js";
import { _ as __nuxt_component_3 } from "./PrimaryButton-3e0b2318.js";
import { _ as __nuxt_component_1 } from "./nuxt-link-7fd3a776.js";
import { u as useAuth } from "./useAuth-e93f3d3d.js";
import { reactive, ref, unref, withCtx, createVNode, useSSRContext } from "vue";
import "hookable";
import { b as useCookie } from "../server.mjs";
import "devalue";
import "defu";
import "destr";
import "klona";
import "vue3-toastify";
import { ssrRenderAttrs, ssrRenderComponent } from "vue/server-renderer";
import { S as SocialMediaLogin } from "./SocialMediaLogin-bee59b08.js";
import "./LoaderButton-81aa4875.js";
import "ufo";
import "./state-df47e21c.js";
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
  __name: "register",
  __ssrInlineRender: true,
  setup(__props) {
    useAuth();
    const form = reactive({
      name: "",
      country_code: "",
      phone: "",
      address: "",
      email: "",
      password: "",
      confirm_password: ""
    });
    const isLoading = ref(false);
    useCookie("token");
    return (_ctx, _push, _parent, _attrs) => {
      const _component_shared_form_input = __nuxt_component_0;
      const _component_shared_buttons_primary_button = __nuxt_component_3;
      const _component_nuxt_link = __nuxt_component_1;
      _push(`<form${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(SocialMediaLogin, null, null, _parent));
      _push(`<div class="my-16"><div class="mb-7">`);
      _push(ssrRenderComponent(_component_shared_form_input, {
        class: "w-full bg-transparent",
        placeholder: "الاسم",
        type: "text",
        modelValue: unref(form).name,
        "onUpdate:modelValue": ($event) => unref(form).name = $event
      }, null, _parent));
      _push(`</div><div class="flex mb-7 gap-4">`);
      _push(ssrRenderComponent(_component_shared_form_input, {
        class: "w-full bg-transparent max-w-[150px]",
        placeholder: "كود الدولة",
        type: "text",
        modelValue: unref(form).country_code,
        "onUpdate:modelValue": ($event) => unref(form).country_code = $event
      }, null, _parent));
      _push(ssrRenderComponent(_component_shared_form_input, {
        class: "w-full bg-transparent",
        placeholder: "رقم التليفون",
        type: "text",
        modelValue: unref(form).phone,
        "onUpdate:modelValue": ($event) => unref(form).phone = $event
      }, null, _parent));
      _push(`</div><div class="mb-7">`);
      _push(ssrRenderComponent(_component_shared_form_input, {
        class: "w-full bg-transparent",
        placeholder: "العنوان",
        type: "text",
        modelValue: unref(form).address,
        "onUpdate:modelValue": ($event) => unref(form).address = $event
      }, null, _parent));
      _push(`</div><div class="mb-7">`);
      _push(ssrRenderComponent(_component_shared_form_input, {
        class: "w-full bg-transparent",
        placeholder: "البريد الالكترونى",
        type: "email",
        modelValue: unref(form).email,
        "onUpdate:modelValue": ($event) => unref(form).email = $event
      }, null, _parent));
      _push(`</div><div class="mb-7">`);
      _push(ssrRenderComponent(_component_shared_form_input, {
        class: "w-full bg-transparent",
        placeholder: "كلمة المرور",
        type: "password",
        modelValue: unref(form).password,
        "onUpdate:modelValue": ($event) => unref(form).password = $event
      }, null, _parent));
      _push(`</div><div class="mb-7">`);
      _push(ssrRenderComponent(_component_shared_form_input, {
        class: "w-full bg-transparent",
        placeholder: "تأكيد كلمة المرور",
        type: "password",
        modelValue: unref(form).confirm_password,
        "onUpdate:modelValue": ($event) => unref(form).confirm_password = $event
      }, null, _parent));
      _push(`</div></div><div class="flex gap-4 items-center">`);
      _push(ssrRenderComponent(_component_shared_buttons_primary_button, {
        "submit-title": "استمرار",
        class: "!bg-primary-200 text-white",
        type: "submit",
        loading: unref(isLoading)
      }, null, _parent));
      _push(ssrRenderComponent(_component_nuxt_link, { to: "/auth/login" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<p class="text-primary-300 cursor-pointer text-2xl"${_scopeId}> لدي حساب بالفعل </p>`);
          } else {
            return [
              createVNode("p", { class: "text-primary-300 cursor-pointer text-2xl" }, " لدي حساب بالفعل ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></form>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/auth/register.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=register-2a2f7e6f.js.map
