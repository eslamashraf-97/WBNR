import { _ as __nuxt_component_0 } from "./Input-1e7796d8.js";
import { _ as __nuxt_component_3 } from "./PrimaryButton-3e0b2318.js";
import { _ as __nuxt_component_1 } from "./nuxt-link-7fd3a776.js";
import { u as useAuth } from "./useAuth-e93f3d3d.js";
import { ref, reactive, withCtx, createVNode, useSSRContext } from "vue";
import "hookable";
import { b as useCookie, a as navigateTo } from "../server.mjs";
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
  __name: "login",
  __ssrInlineRender: true,
  setup(__props) {
    const { setUserData } = useAuth();
    const isLoading = ref(false);
    const form = reactive({
      user: "",
      password: ""
    });
    useCookie("token");
    function loginWith(data) {
      var _a;
      const responseData = data;
      setUserData(responseData.data.customer, (_a = responseData.meta) == null ? void 0 : _a.token);
      navigateTo("/home");
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_shared_form_input = __nuxt_component_0;
      const _component_shared_buttons_primary_button = __nuxt_component_3;
      const _component_nuxt_link = __nuxt_component_1;
      _push(`<form${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(SocialMediaLogin, { onLoginWith: loginWith }, null, _parent));
      _push(`<div class="my-16"><div class="mb-7">`);
      _push(ssrRenderComponent(_component_shared_form_input, {
        class: "w-full bg-transparent",
        placeholder: "البريد الالكترونى",
        type: "email",
        modelValue: form.user,
        "onUpdate:modelValue": ($event) => form.user = $event
      }, null, _parent));
      _push(`</div><div>`);
      _push(ssrRenderComponent(_component_shared_form_input, {
        class: "w-full bg-transparent",
        placeholder: "كلمة المرور",
        modelValue: form.password,
        "onUpdate:modelValue": ($event) => form.password = $event,
        type: "password"
      }, null, _parent));
      _push(`</div></div><div class="flex gap-4 items-center">`);
      _push(ssrRenderComponent(_component_shared_buttons_primary_button, {
        "submit-title": "استمرار",
        class: "!bg-primary-200 text-white",
        type: "submit",
        loading: isLoading.value
      }, null, _parent));
      _push(ssrRenderComponent(_component_nuxt_link, { to: "/auth/register" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<p class="text-primary-300 text-2xl"${_scopeId}>ليس لدي حساب</p>`);
          } else {
            return [
              createVNode("p", { class: "text-primary-300 text-2xl" }, "ليس لدي حساب")
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/auth/login.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=login-24d2673b.js.map
