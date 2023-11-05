import { _ as __nuxt_component_0 } from './Input-1e7796d8.mjs';
import { _ as __nuxt_component_3 } from './PrimaryButton-3e0b2318.mjs';
import { _ as __nuxt_component_1 } from './nuxt-link-7fd3a776.mjs';
import { u as useAuth } from './useAuth-e93f3d3d.mjs';
import { reactive, ref, unref, withCtx, createVNode, useSSRContext } from 'file://D:/WBNR/WBNR/node_modules/vue/index.mjs';
import { b as useCookie } from '../server.mjs';
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
        placeholder: "\u0627\u0644\u0627\u0633\u0645",
        type: "text",
        modelValue: unref(form).name,
        "onUpdate:modelValue": ($event) => unref(form).name = $event
      }, null, _parent));
      _push(`</div><div class="flex mb-7 gap-4">`);
      _push(ssrRenderComponent(_component_shared_form_input, {
        class: "w-full bg-transparent max-w-[150px]",
        placeholder: "\u0643\u0648\u062F \u0627\u0644\u062F\u0648\u0644\u0629",
        type: "text",
        modelValue: unref(form).country_code,
        "onUpdate:modelValue": ($event) => unref(form).country_code = $event
      }, null, _parent));
      _push(ssrRenderComponent(_component_shared_form_input, {
        class: "w-full bg-transparent",
        placeholder: "\u0631\u0642\u0645 \u0627\u0644\u062A\u0644\u064A\u0641\u0648\u0646",
        type: "text",
        modelValue: unref(form).phone,
        "onUpdate:modelValue": ($event) => unref(form).phone = $event
      }, null, _parent));
      _push(`</div><div class="mb-7">`);
      _push(ssrRenderComponent(_component_shared_form_input, {
        class: "w-full bg-transparent",
        placeholder: "\u0627\u0644\u0639\u0646\u0648\u0627\u0646",
        type: "text",
        modelValue: unref(form).address,
        "onUpdate:modelValue": ($event) => unref(form).address = $event
      }, null, _parent));
      _push(`</div><div class="mb-7">`);
      _push(ssrRenderComponent(_component_shared_form_input, {
        class: "w-full bg-transparent",
        placeholder: "\u0627\u0644\u0628\u0631\u064A\u062F \u0627\u0644\u0627\u0644\u0643\u062A\u0631\u0648\u0646\u0649",
        type: "email",
        modelValue: unref(form).email,
        "onUpdate:modelValue": ($event) => unref(form).email = $event
      }, null, _parent));
      _push(`</div><div class="mb-7">`);
      _push(ssrRenderComponent(_component_shared_form_input, {
        class: "w-full bg-transparent",
        placeholder: "\u0643\u0644\u0645\u0629 \u0627\u0644\u0645\u0631\u0648\u0631",
        type: "password",
        modelValue: unref(form).password,
        "onUpdate:modelValue": ($event) => unref(form).password = $event
      }, null, _parent));
      _push(`</div><div class="mb-7">`);
      _push(ssrRenderComponent(_component_shared_form_input, {
        class: "w-full bg-transparent",
        placeholder: "\u062A\u0623\u0643\u064A\u062F \u0643\u0644\u0645\u0629 \u0627\u0644\u0645\u0631\u0648\u0631",
        type: "password",
        modelValue: unref(form).confirm_password,
        "onUpdate:modelValue": ($event) => unref(form).confirm_password = $event
      }, null, _parent));
      _push(`</div></div><div class="flex gap-4 items-center">`);
      _push(ssrRenderComponent(_component_shared_buttons_primary_button, {
        "submit-title": "\u0627\u0633\u062A\u0645\u0631\u0627\u0631",
        class: "!bg-primary-200 text-white",
        type: "submit",
        loading: unref(isLoading)
      }, null, _parent));
      _push(ssrRenderComponent(_component_nuxt_link, { to: "/auth/login" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<p class="text-primary-300 cursor-pointer text-2xl"${_scopeId}> \u0644\u062F\u064A \u062D\u0633\u0627\u0628 \u0628\u0627\u0644\u0641\u0639\u0644 </p>`);
          } else {
            return [
              createVNode("p", { class: "text-primary-300 cursor-pointer text-2xl" }, " \u0644\u062F\u064A \u062D\u0633\u0627\u0628 \u0628\u0627\u0644\u0641\u0639\u0644 ")
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

export { _sfc_main as default };
//# sourceMappingURL=register-2a2f7e6f.mjs.map
