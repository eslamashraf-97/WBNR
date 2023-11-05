import { _ as __nuxt_component_0 } from "./Title-23cab648.js";
import { _ as __nuxt_component_1 } from "./LoaderButton-81aa4875.js";
import __nuxt_component_0$1 from "./Icon-b69f18a8.js";
import { _ as __nuxt_component_0$2 } from "./Input-1e7796d8.js";
import { _ as __nuxt_component_1$1 } from "./SecondaryButton-979fef3b.js";
import { u as useApi } from "./useApi-73d2615e.js";
import { u as useAuth } from "./useAuth-e93f3d3d.js";
import { withAsyncContext, ref, reactive, mergeProps, unref, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr, ssrInterpolate } from "vue/server-renderer";
import { _ as _imports_0 } from "./upload-icon-5bfc433e.js";
import { t as apiGetProfileUrl } from "./index-f05587d3.js";
import "./nuxt-link-7fd3a776.js";
import "ufo";
import "hookable";
import "../server.mjs";
import "ofetch";
import "#internal/nitro";
import "unctx";
import "destr";
import "devalue";
import "defu";
import "klona";
import "unhead";
import "@unhead/shared";
import "vue-router";
import "h3";
import "cookie-es";
import "ohash";
import "vue3-toastify";
import "./state-df47e21c.js";
import "./config-b815dc90.js";
import "@iconify/vue/dist/offline";
import "@iconify/vue";
const _imports_1 = "" + __buildAssetsURL("clipboard.e656b8c5.svg");
const UserImage = "" + __buildAssetsURL("user-image.0b3a482c.svg");
const profile_vue_vue_type_style_index_0_lang = "";
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
      _push(ssrRenderComponent(_component_shared_title, { title: "اعدادات الحساب" }, null, _parent));
      _push(`<div class="flex gap-24"><div class="w-[22.5rem] flex flex-col gap-9"><div class="w-full h-[22.5rem] border border-gray-200 bg-gray-100 rounded-3xl flex justify-center items-end"><img${ssrRenderAttr("src", unref(newAvatar) || unref(profileData).data.avatar || unref(UserImage))}${ssrRenderAttr("alt", unref(profileData).data.name)} class=""></div><input type="file" id="upload-avatar" class="hidden"><label class="cursor-pointer flex items-center justify-center gap-[1.19rem] leading-normal text-gray-700 text-2xl w-full h-[3.5625rem] border border-gray-200 bg-white rounded-[.75rem]" for="upload-avatar">`);
      if (unref(isUploading)) {
        _push(`<div class="loading-container">`);
        _push(ssrRenderComponent(_component_shared_loders_loader_button, null, null, _parent));
        _push(`</div>`);
      } else {
        _push(`<img${ssrRenderAttr("src", _imports_0)} alt="upload avatar" class="">`);
      }
      _push(`<span>تحميل صورة جديدة</span></label><div class="flex items-center gap-4 text-2xl text-gray-500 leading-normal"><span>كود التاجر:</span><span>${ssrInterpolate(unref(profileData).data.id)}</span>`);
      if (!unref(copied)) {
        _push(`<img${ssrRenderAttr("src", _imports_1)} alt="clipboard" class="cursor-pointer">`);
      } else {
        _push(ssrRenderComponent(_component_Icon, {
          name: "la:check-circle",
          class: "text-primary-300"
        }, null, _parent));
      }
      _push(`</div></div><div class="flex-1 max-w-[38rem]"><form class="mb-24"><h5 class="text-2xl text-gray-700 mb-16">المعلومات الشخصية</h5><div class="mb-6"><label for="firstName" class="text-2xl text-gray-500 mb-6 block">الاسم:</label>`);
      _push(ssrRenderComponent(_component_shared_form_input, {
        placeholder: "الاسم الأول",
        class: "bg-transparent !w-full",
        id: "firstName",
        type: "text",
        modelValue: unref(form).name,
        "onUpdate:modelValue": ($event) => unref(form).name = $event
      }, null, _parent));
      _push(`</div><div class="flex-1 mb-6"><label for="phoneNumber" class="text-2xl text-gray-500 mb-6 block">رقم الهاتف:</label>`);
      _push(ssrRenderComponent(_component_shared_form_input, {
        placeholder: "رقم الهاتف",
        class: "bg-transparent !w-full",
        id: "phoneNumber",
        type: "text",
        modelValue: unref(form).phone,
        "onUpdate:modelValue": ($event) => unref(form).phone = $event
      }, null, _parent));
      _push(`</div><div class="flex-1 mb-24"><label for="email" class="text-2xl text-gray-500 mb-6 block">البريد الإلكتروني:</label>`);
      _push(ssrRenderComponent(_component_shared_form_input, {
        placeholder: "البريد الإلكتروني",
        class: "bg-transparent !w-full",
        id: "email",
        type: "email",
        modelValue: unref(form).email,
        "onUpdate:modelValue": ($event) => unref(form).email = $event
      }, null, _parent));
      _push(`</div>`);
      _push(ssrRenderComponent(_component_shared_buttons_secondary_button, {
        "submit-title": "حفظ التغييرات",
        type: "submit",
        class: "!text-[1.875rem] !px-[3.5rem] w-auto h-auto py-[1.25rem]",
        loading: unref(isUpdateInfo)
      }, null, _parent));
      _push(`</form><form><h5 class="text-2xl text-gray-700 mb-16">تغيير كلمة المرور</h5><div class="flex-1 mb-16">`);
      _push(ssrRenderComponent(_component_shared_form_input, {
        placeholder: "كلمة المرور الحالية",
        class: "bg-transparent !w-full",
        id: "currentPassword",
        type: "password",
        modelValue: unref(passwordForm).old_password,
        "onUpdate:modelValue": ($event) => unref(passwordForm).old_password = $event
      }, null, _parent));
      _push(`</div><div class="flex-1 mb-6">`);
      _push(ssrRenderComponent(_component_shared_form_input, {
        placeholder: "كلمة المرور الجديدة",
        class: "bg-transparent !w-full",
        id: "newPassword",
        type: "password",
        modelValue: unref(passwordForm).new_password,
        "onUpdate:modelValue": ($event) => unref(passwordForm).new_password = $event
      }, null, _parent));
      _push(`</div><div class="flex-1 mb-24">`);
      _push(ssrRenderComponent(_component_shared_form_input, {
        placeholder: "تأكيد كلمة المرور الجديدة",
        class: "bg-transparent !w-full",
        id: "confirmNewPassword",
        type: "password",
        modelValue: unref(passwordForm).confirm_new_password,
        "onUpdate:modelValue": ($event) => unref(passwordForm).confirm_new_password = $event
      }, null, _parent));
      _push(`</div>`);
      _push(ssrRenderComponent(_component_shared_buttons_secondary_button, {
        "submit-title": "حفظ التغييرات",
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
export {
  _sfc_main as default
};
//# sourceMappingURL=profile-76529290.js.map
