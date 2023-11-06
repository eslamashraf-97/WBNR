import { b as buildAssetsURL } from '../../renderer.mjs';
import { _ as __nuxt_component_0 } from './Title-23cab648.mjs';
import __nuxt_component_0$1 from './Icon-b69f18a8.mjs';
import { _ as __nuxt_component_1$1 } from './nuxt-link-7fd3a776.mjs';
import { ref, mergeProps, unref, useSSRContext, withCtx, createVNode, toDisplayString } from 'file://D:/WBNR/WBNR/node_modules/vue/index.mjs';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderClass, ssrRenderList, ssrRenderAttr, ssrInterpolate } from 'file://D:/WBNR/WBNR/node_modules/vue/server-renderer/index.mjs';
import { j as __nuxt_component_3, _ as _export_sfc } from '../server.mjs';
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
import './state-df47e21c.mjs';
import './config-b815dc90.mjs';
import 'file://D:/WBNR/WBNR/node_modules/@iconify/vue/dist/offline.mjs';
import 'file://D:/WBNR/WBNR/node_modules/@iconify/vue/dist/iconify.mjs';
import 'file://D:/WBNR/WBNR/node_modules/unctx/dist/index.mjs';
import 'file://D:/WBNR/WBNR/node_modules/vue-router/dist/vue-router.node.mjs';
import 'file://D:/WBNR/WBNR/node_modules/cookie-es/dist/index.mjs';
import 'file://D:/WBNR/WBNR/node_modules/vue3-toastify/dist/index.mjs';

const _imports_0 = "" + buildAssetsURL("sound.5e1b584a.svg");
const _sfc_main$1 = {
  __name: "Aside",
  __ssrInlineRender: true,
  emits: ["toggleMenu"],
  setup(__props) {
    const links = [
      {
        link: "/dashboard",
        title: "\u0625\u062D\u0635\u0627\u0626\u064A\u0627\u062A \u062A\u062C\u0627\u0631\u062A\u0643"
      },
      {
        link: "/dashboard/wallet",
        title: "\u0627\u0644\u0645\u062D\u0641\u0638\u0629"
      },
      {
        link: "/dashboard/requests",
        title: "\u0627\u0644\u0637\u0644\u0628\u0627\u062A"
      },
      {
        link: "/dashboard/replace-returns",
        title: "\u0627\u0633\u062A\u0628\u062F\u0627\u0644 \u0648\u0627\u0633\u062A\u0631\u062C\u0627\u0639"
      },
      {
        link: "/dashboard/link-store",
        title: "\u0631\u0628\u0637 \u0645\u062A\u062C\u0631\u0643"
      }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Icon = __nuxt_component_0$1;
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
      const _component_shared_title = __nuxt_component_0;
      const _component_dashboard_aside = __nuxt_component_1;
      const _component_Icon = __nuxt_component_0$1;
      const _component_NuxtPage = __nuxt_component_3;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "bg-primary" }, _attrs))}>`);
      _push(ssrRenderComponent(_component_shared_title, { title: "\u0644\u0648\u062D\u0629 \u0627\u0644\u062A\u062D\u0643\u0645" }, null, _parent));
      _push(`<div class="flex justify-start gap-0 xl:gap-20 relative overflow-x-hidden"><div class="${ssrRenderClass([{ "!start-0": unref(menuIsOpen) }, "absolute xl:relative -start-full xl:start-0 transition-all top-16 xl:top-0"])}">`);
      _push(ssrRenderComponent(_component_dashboard_aside, { onToggleMenu: toggleMenu }, null, _parent));
      _push(`</div><div class="${ssrRenderClass([{ "-translate-x-[30rem]": unref(menuIsOpen) }, "w-full transition-all"])}"><button type="button" class="xl:hidden text-2xl flex items-center gap-4 mb-8 text-gray-700">`);
      _push(ssrRenderComponent(_component_Icon, {
        name: "uil:bars",
        class: "text-3xl"
      }, null, _parent));
      _push(`<span>\u0627\u0644\u0642\u0627\u0626\u0645\u0629</span></button>`);
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

export { _sfc_main as default };
//# sourceMappingURL=dashboard-ff06e075.mjs.map
