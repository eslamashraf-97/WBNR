import { _ as __nuxt_component_0 } from './Input-1e7796d8.mjs';
import { _ as __nuxt_component_3 } from './PrimaryButton-3e0b2318.mjs';
import { _ as __nuxt_component_1 } from './nuxt-link-7fd3a776.mjs';
import { u as useAuth } from './useAuth-e93f3d3d.mjs';
import { ref, reactive, withCtx, createVNode, useSSRContext } from 'file://D:/WBNR/WBNR/node_modules/vue/index.mjs';
import { b as useCookie, a as navigateTo } from '../server.mjs';
import { ssrRenderAttrs, ssrRenderComponent } from 'file://D:/WBNR/WBNR/node_modules/vue/server-renderer/index.mjs';
import { S as SocialMediaLogin } from './SocialMediaLogin-bee59b08.mjs';
import './LoaderButton-81aa4875.mjs';
import 'file://D:/WBNR/WBNR/node_modules/ufo/dist/index.mjs';
import './state-df47e21c.mjs';
import 'file://D:/WBNR/WBNR/node_modules/ofetch/dist/node.mjs';
import 'file://D:/WBNR/WBNR/node_modules/hookable/dist/index.mjs';
import 'file://D:/WBNR/WBNR/node_modules/unctx/dist/index.mjs';
import 'file://D:/WBNR/WBNR/node_modules/destr/dist/index.mjs';
import 'file://D:/WBNR/WBNR/node_modules/defu/dist/defu.mjs';
import 'file://D:/WBNR/WBNR/node_modules/unhead/dist/index.mjs';
import 'file://D:/WBNR/WBNR/node_modules/@unhead/shared/dist/index.mjs';
import 'file://D:/WBNR/WBNR/node_modules/vue-router/dist/vue-router.node.mjs';
import 'file://D:/WBNR/WBNR/node_modules/h3/dist/index.mjs';
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
        placeholder: "\u0627\u0644\u0628\u0631\u064A\u062F \u0627\u0644\u0627\u0644\u0643\u062A\u0631\u0648\u0646\u0649",
        type: "email",
        modelValue: form.user,
        "onUpdate:modelValue": ($event) => form.user = $event
      }, null, _parent));
      _push(`</div><div>`);
      _push(ssrRenderComponent(_component_shared_form_input, {
        class: "w-full bg-transparent",
        placeholder: "\u0643\u0644\u0645\u0629 \u0627\u0644\u0645\u0631\u0648\u0631",
        modelValue: form.password,
        "onUpdate:modelValue": ($event) => form.password = $event,
        type: "password"
      }, null, _parent));
      _push(`</div></div><div class="flex gap-4 items-center">`);
      _push(ssrRenderComponent(_component_shared_buttons_primary_button, {
        "submit-title": "\u0627\u0633\u062A\u0645\u0631\u0627\u0631",
        class: "!bg-primary-200 text-white",
        type: "submit",
        loading: isLoading.value
      }, null, _parent));
      _push(ssrRenderComponent(_component_nuxt_link, { to: "/auth/register" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<p class="text-primary-300 text-2xl"${_scopeId}>\u0644\u064A\u0633 \u0644\u062F\u064A \u062D\u0633\u0627\u0628</p>`);
          } else {
            return [
              createVNode("p", { class: "text-primary-300 text-2xl" }, "\u0644\u064A\u0633 \u0644\u062F\u064A \u062D\u0633\u0627\u0628")
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

export { _sfc_main as default };
//# sourceMappingURL=login-24d2673b.mjs.map
