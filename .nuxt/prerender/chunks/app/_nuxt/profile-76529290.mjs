import { b as buildAssetsURL } from '../../renderer.mjs';
import { _ as __nuxt_component_0 } from './Title-23cab648.mjs';
import { _ as __nuxt_component_1 } from './LoaderButton-81aa4875.mjs';
import __nuxt_component_0$1 from './Icon-b69f18a8.mjs';
import { _ as __nuxt_component_0$2 } from './Input-1e7796d8.mjs';
import { _ as __nuxt_component_1$1 } from './SecondaryButton-979fef3b.mjs';
import { u as useApi } from './useApi-73d2615e.mjs';
import { u as useAuth } from './useAuth-e93f3d3d.mjs';
import { withAsyncContext, ref, reactive, mergeProps, unref, useSSRContext } from 'file://D:/WBNR/WBNR/node_modules/vue/index.mjs';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr, ssrInterpolate } from 'file://D:/WBNR/WBNR/node_modules/vue/server-renderer/index.mjs';
import { _ as _imports_0 } from './upload-icon-5bfc433e.mjs';
import { t as apiGetProfileUrl } from './index-f05587d3.mjs';
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
import 'file://D:/WBNR/WBNR/node_modules/klona/dist/index.mjs';
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
import './nuxt-link-7fd3a776.mjs';
import '../server.mjs';
import 'file://D:/WBNR/WBNR/node_modules/unctx/dist/index.mjs';
import 'file://D:/WBNR/WBNR/node_modules/vue-router/dist/vue-router.node.mjs';
import 'file://D:/WBNR/WBNR/node_modules/cookie-es/dist/index.mjs';
import 'file://D:/WBNR/WBNR/node_modules/vue3-toastify/dist/index.mjs';
import './state-df47e21c.mjs';
import './config-b815dc90.mjs';
import 'file://D:/WBNR/WBNR/node_modules/@iconify/vue/dist/offline.mjs';
import 'file://D:/WBNR/WBNR/node_modules/@iconify/vue/dist/iconify.mjs';

const _imports_1 = "" + buildAssetsURL("clipboard.e656b8c5.svg");
const UserImage = "" + buildAssetsURL("user-image.0b3a482c.svg");
const _sfc_main = {
  __name: "profile",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const { fire } = useApi({
      url: apiGetProfileUrl
    });
    const { pending, data: profileData } = ([__temp, __restore] = withAsyncContext(() => fire()), __temp = await __temp, __restore(), __temp);
    console.log(profileData.value);
    useAuth();
    const copied = ref(false);
    ref();
    const isUploading = ref(false);
    const newAvatar = ref(null);
    const form = reactive({
      avatar: profileData.value.data.avatar,
      name: profileData.value.data.name,
      phone: profileData.value.data.phone,
      email: profileData.value.data.email
    });
    const passwordForm = reactive({
      old_password: "",
      new_password: "",
      confirm_new_password: ""
    });
    const isUpdateInfo = ref(false);
    const isUpdatePassword = ref(false);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_shared_title = __nuxt_component_0;
      const _component_shared_loders_loader_button = __nuxt_component_1;
      const _component_Icon = __nuxt_component_0$1;
      const _component_shared_form_input = __nuxt_component_0$2;
      const _component_shared_buttons_secondary_button = __nuxt_component_1$1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "bg-primary" }, _attrs))}>`);
      _push(ssrRenderComponent(_component_shared_title, { title: "\u0627\u0639\u062F\u0627\u062F\u0627\u062A \u0627\u0644\u062D\u0633\u0627\u0628" }, null, _parent));
      _push(`<div class="flex gap-24"><div class="w-[22.5rem] flex flex-col gap-9"><div class="w-full h-[22.5rem] border border-gray-200 bg-gray-100 rounded-3xl flex justify-center items-end"><img${ssrRenderAttr("src", unref(newAvatar) || unref(profileData).data.avatar || unref(UserImage))}${ssrRenderAttr("alt", unref(profileData).data.name)} class=""></div><input type="file" id="upload-avatar" class="hidden"><label class="cursor-pointer flex items-center justify-center gap-[1.19rem] leading-normal text-gray-700 text-2xl w-full h-[3.5625rem] border border-gray-200 bg-white rounded-[.75rem]" for="upload-avatar">`);
      if (unref(isUploading)) {
        _push(`<div class="loading-container">`);
        _push(ssrRenderComponent(_component_shared_loders_loader_button, null, null, _parent));
        _push(`</div>`);
      } else {
        _push(`<img${ssrRenderAttr("src", _imports_0)} alt="upload avatar" class="">`);
      }
      _push(`<span>\u062A\u062D\u0645\u064A\u0644 \u0635\u0648\u0631\u0629 \u062C\u062F\u064A\u062F\u0629</span></label><div class="flex items-center gap-4 text-2xl text-gray-500 leading-normal"><span>\u0643\u0648\u062F \u0627\u0644\u062A\u0627\u062C\u0631:</span><span>${ssrInterpolate(unref(profileData).data.id)}</span>`);
      if (!unref(copied)) {
        _push(`<img${ssrRenderAttr("src", _imports_1)} alt="clipboard" class="cursor-pointer">`);
      } else {
        _push(ssrRenderComponent(_component_Icon, {
          name: "la:check-circle",
          class: "text-primary-300"
        }, null, _parent));
      }
      _push(`</div></div><div class="flex-1 max-w-[38rem]"><form class="mb-24"><h5 class="text-2xl text-gray-700 mb-16">\u0627\u0644\u0645\u0639\u0644\u0648\u0645\u0627\u062A \u0627\u0644\u0634\u062E\u0635\u064A\u0629</h5><div class="mb-6"><label for="firstName" class="text-2xl text-gray-500 mb-6 block">\u0627\u0644\u0627\u0633\u0645:</label>`);
      _push(ssrRenderComponent(_component_shared_form_input, {
        placeholder: "\u0627\u0644\u0627\u0633\u0645 \u0627\u0644\u0623\u0648\u0644",
        class: "bg-transparent !w-full",
        id: "firstName",
        type: "text",
        modelValue: unref(form).name,
        "onUpdate:modelValue": ($event) => unref(form).name = $event
      }, null, _parent));
      _push(`</div><div class="flex-1 mb-6"><label for="phoneNumber" class="text-2xl text-gray-500 mb-6 block">\u0631\u0642\u0645 \u0627\u0644\u0647\u0627\u062A\u0641:</label>`);
      _push(ssrRenderComponent(_component_shared_form_input, {
        placeholder: "\u0631\u0642\u0645 \u0627\u0644\u0647\u0627\u062A\u0641",
        class: "bg-transparent !w-full",
        id: "phoneNumber",
        type: "text",
        modelValue: unref(form).phone,
        "onUpdate:modelValue": ($event) => unref(form).phone = $event
      }, null, _parent));
      _push(`</div><div class="flex-1 mb-24"><label for="email" class="text-2xl text-gray-500 mb-6 block">\u0627\u0644\u0628\u0631\u064A\u062F \u0627\u0644\u0625\u0644\u0643\u062A\u0631\u0648\u0646\u064A:</label>`);
      _push(ssrRenderComponent(_component_shared_form_input, {
        placeholder: "\u0627\u0644\u0628\u0631\u064A\u062F \u0627\u0644\u0625\u0644\u0643\u062A\u0631\u0648\u0646\u064A",
        class: "bg-transparent !w-full",
        id: "email",
        type: "email",
        modelValue: unref(form).email,
        "onUpdate:modelValue": ($event) => unref(form).email = $event
      }, null, _parent));
      _push(`</div>`);
      _push(ssrRenderComponent(_component_shared_buttons_secondary_button, {
        "submit-title": "\u062D\u0641\u0638 \u0627\u0644\u062A\u063A\u064A\u064A\u0631\u0627\u062A",
        type: "submit",
        class: "!text-[1.875rem] !px-[3.5rem] w-auto h-auto py-[1.25rem]",
        loading: unref(isUpdateInfo)
      }, null, _parent));
      _push(`</form><form><h5 class="text-2xl text-gray-700 mb-16">\u062A\u063A\u064A\u064A\u0631 \u0643\u0644\u0645\u0629 \u0627\u0644\u0645\u0631\u0648\u0631</h5><div class="flex-1 mb-16">`);
      _push(ssrRenderComponent(_component_shared_form_input, {
        placeholder: "\u0643\u0644\u0645\u0629 \u0627\u0644\u0645\u0631\u0648\u0631 \u0627\u0644\u062D\u0627\u0644\u064A\u0629",
        class: "bg-transparent !w-full",
        id: "currentPassword",
        type: "password",
        modelValue: unref(passwordForm).old_password,
        "onUpdate:modelValue": ($event) => unref(passwordForm).old_password = $event
      }, null, _parent));
      _push(`</div><div class="flex-1 mb-6">`);
      _push(ssrRenderComponent(_component_shared_form_input, {
        placeholder: "\u0643\u0644\u0645\u0629 \u0627\u0644\u0645\u0631\u0648\u0631 \u0627\u0644\u062C\u062F\u064A\u062F\u0629",
        class: "bg-transparent !w-full",
        id: "newPassword",
        type: "password",
        modelValue: unref(passwordForm).new_password,
        "onUpdate:modelValue": ($event) => unref(passwordForm).new_password = $event
      }, null, _parent));
      _push(`</div><div class="flex-1 mb-24">`);
      _push(ssrRenderComponent(_component_shared_form_input, {
        placeholder: "\u062A\u0623\u0643\u064A\u062F \u0643\u0644\u0645\u0629 \u0627\u0644\u0645\u0631\u0648\u0631 \u0627\u0644\u062C\u062F\u064A\u062F\u0629",
        class: "bg-transparent !w-full",
        id: "confirmNewPassword",
        type: "password",
        modelValue: unref(passwordForm).confirm_new_password,
        "onUpdate:modelValue": ($event) => unref(passwordForm).confirm_new_password = $event
      }, null, _parent));
      _push(`</div>`);
      _push(ssrRenderComponent(_component_shared_buttons_secondary_button, {
        "submit-title": "\u062D\u0641\u0638 \u0627\u0644\u062A\u063A\u064A\u064A\u0631\u0627\u062A",
        type: "submit",
        class: "!text-[1.875rem] !px-[3.5rem] w-auto h-auto py-[1.25rem]",
        loading: unref(isUpdatePassword)
      }, null, _parent));
      _push(`</form></div></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/profile.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=profile-76529290.mjs.map
