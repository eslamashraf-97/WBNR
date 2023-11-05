import { _ as __nuxt_component_0$1 } from "./Title-23cab648.js";
import __nuxt_component_0 from "./Icon-b69f18a8.js";
import { _ as __nuxt_component_1$1 } from "./nuxt-link-7fd3a776.js";
import { withCtx, createVNode, toDisplayString, useSSRContext, ref, mergeProps, unref } from "vue";
import { ssrRenderComponent, ssrRenderList, ssrRenderAttr, ssrInterpolate, ssrRenderAttrs, ssrRenderClass } from "vue/server-renderer";
import { _ as _export_sfc, j as __nuxt_component_3 } from "../server.mjs";
import "./state-df47e21c.js";
import "destr";
import "devalue";
import "defu";
import "./config-b815dc90.js";
import "klona";
import "hookable";
import "@iconify/vue/dist/offline";
import "@iconify/vue";
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
import "vue3-toastify";
const _imports_0 = "" + __buildAssetsURL("sound.5e1b584a.svg");
const Aside_vue_vue_type_style_index_0_scoped_b482c594_lang = "";
const _sfc_main$1 = {
  __name: "Aside",
  __ssrInlineRender: true,
  emits: ["toggleMenu"],
  setup(__props) {
    const links = [
      {
        link: "/dashboard",
        title: "إحصائيات تجارتك"
      },
      {
        link: "/dashboard/wallet",
        title: "المحفظة"
      },
      {
        link: "/dashboard/requests",
        title: "الطلبات"
      },
      {
        link: "/dashboard/replace-returns",
        title: "استبدال واسترجاع"
      },
      {
        link: "/dashboard/link-store",
        title: "ربط متجرك"
      }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Icon = __nuxt_component_0;
      const _component_nuxt_link = __nuxt_component_1$1;
      _push(`<!--[--><button class="ms-auto block xl:hidden" type="button" data-v-b482c594>`);
      _push(ssrRenderComponent(_component_Icon, {
        name: "material-symbols:close",
        class: "text-3xl mb-4"
      }, null, _parent));
      _push(`</button><aside class="flex flex-col gap-5 w-[26rem] lg:w-[28rem] py-9 px-16 bg-gray-100 border border-gray-200 rounded-sm dashboard-aside h-fit shadow-main" data-v-b482c594><!--[-->`);
      ssrRenderList(links, (link, index) => {
        _push(ssrRenderComponent(_component_nuxt_link, {
          key: index,
          to: link.link,
          class: "flex items-center gap-6 text-2xl font-bold text-gray-700 py-3 aside-link",
          onClick: ($event) => _ctx.$emit("toggleMenu", true)
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<img${ssrRenderAttr("src", _imports_0)} alt="" class="" data-v-b482c594${_scopeId}><span data-v-b482c594${_scopeId}>${ssrInterpolate(link.title)}</span>`);
            } else {
              return [
                createVNode("img", {
                  src: _imports_0,
                  alt: "",
                  class: ""
                }),
                createVNode("span", null, toDisplayString(link.title), 1)
              ];
            }
          }),
          _: 2
        }, _parent));
      });
      _push(`<!--]--></aside><!--]-->`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/dashboard/Aside.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-b482c594"]]);
const _sfc_main = {
  __name: "dashboard",
  __ssrInlineRender: true,
  setup(__props) {
    const menuIsOpen = ref(false);
    function toggleMenu(link) {
      if (link) {
        menuIsOpen.value = false;
      } else {
        menuIsOpen.value = !menuIsOpen.value;
      }
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_shared_title = __nuxt_component_0$1;
      const _component_dashboard_aside = __nuxt_component_1;
      const _component_Icon = __nuxt_component_0;
      const _component_NuxtPage = __nuxt_component_3;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "bg-primary" }, _attrs))}>`);
      _push(ssrRenderComponent(_component_shared_title, { title: "لوحة التحكم" }, null, _parent));
      _push(`<div class="flex justify-start gap-0 xl:gap-20 relative overflow-x-hidden"><div class="${ssrRenderClass([{ "!start-0": unref(menuIsOpen) }, "absolute xl:relative -start-full xl:start-0 transition-all top-16 xl:top-0"])}">`);
      _push(ssrRenderComponent(_component_dashboard_aside, { onToggleMenu: toggleMenu }, null, _parent));
      _push(`</div><div class="${ssrRenderClass([{ "-translate-x-[30rem]": unref(menuIsOpen) }, "w-full transition-all"])}"><button type="button" class="xl:hidden text-2xl flex items-center gap-4 mb-8 text-gray-700">`);
      _push(ssrRenderComponent(_component_Icon, {
        name: "uil:bars",
        class: "text-3xl"
      }, null, _parent));
      _push(`<span>القائمة</span></button>`);
      _push(ssrRenderComponent(_component_NuxtPage, null, null, _parent));
      _push(`</div></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/dashboard.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=dashboard-ff06e075.js.map
