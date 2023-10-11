import { _ as __nuxt_component_0 } from './Input-03e500d0.mjs';
import { _ as __nuxt_component_2 } from './PrimaryButton-f179ff1a.mjs';
import { _ as __nuxt_component_1 } from './nuxt-link-3fa67823.mjs';
import { ref, reactive, withCtx, createVNode, useSSRContext } from 'vue';
import { u as useCookie } from '../server.mjs';
import { ssrRenderAttrs, ssrRenderComponent } from 'vue/server-renderer';
import { S as SocialMediaLogin } from './SocialMediaLogin-87cc79fe.mjs';
import './LoaderButton-2476704e.mjs';
import '../../nitro/node-server.mjs';
import 'node:http';
import 'node:https';
import 'node:zlib';
import 'node:stream';
import 'node:buffer';
import 'node:util';
import 'node:url';
import 'node:net';
import 'node:fs';
import 'node:path';
import 'fs';
import 'path';
import 'unhead';
import '@unhead/shared';
import 'vue-router';
import 'vue3-toastify';

const _sfc_main = {
  __name: "login",
  __ssrInlineRender: true,
  setup(__props) {
    const isLoading = ref(false);
    const form = reactive({
      user: "",
      password: ""
    });
    useCookie("token");
    return (_ctx, _push, _parent, _attrs) => {
      const _component_shared_form_input = __nuxt_component_0;
      const _component_shared_buttons_primary_button = __nuxt_component_2;
      const _component_nuxt_link = __nuxt_component_1;
      _push(`<form${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(SocialMediaLogin, null, null, _parent));
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
//# sourceMappingURL=login-78b45a38.mjs.map
