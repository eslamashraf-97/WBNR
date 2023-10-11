import { _ as __nuxt_component_2 } from './menu-32072702.mjs';
import __nuxt_component_0 from './Icon-44226a77.mjs';
import { useSSRContext, mergeProps, withCtx, createVNode, toDisplayString } from 'vue';
import { ssrRenderComponent, ssrRenderAttr, ssrInterpolate } from 'vue/server-renderer';
import { f as flagEg, a as flagSa, b as flagKu, c as flagEm } from './flag-em-1991f2f5.mjs';

const _sfc_main = {
  __name: "LanguagesMenu",
  __ssrInlineRender: true,
  setup(__props) {
    const flagsItems = [
      {
        image: flagEg,
        title: "\u0645\u0635\u0631",
        id: "eg"
      },
      {
        image: flagSa,
        title: "\u0627\u0644\u0633\u0639\u0648\u062F\u064A\u0629",
        id: "sa"
      },
      {
        image: flagKu,
        title: "\u0627\u0644\u0643\u0648\u064A\u062A",
        id: "ku"
      },
      {
        image: flagEm,
        title: "\u0627\u0644\u0627\u0645\u0627\u0631\u0627\u062A",
        id: "em"
      }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_shared_menu = __nuxt_component_2;
      const _component_Icon = __nuxt_component_0;
      _push(ssrRenderComponent(_component_shared_menu, mergeProps({
        items: flagsItems,
        "button-props": {
          class: "h-[57px] px-[32px] py-[6px]"
        },
        "menu-props": {
          class: "max-w-[216px]"
        }
      }, _attrs), {
        label: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="flex items-center gap-[19px]"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_Icon, { name: "iconamoon:arrow-down-2-duotone" }, null, _parent2, _scopeId));
            _push2(`<img${ssrRenderAttr("src", flagsItems[0].image)} class="" alt=""${_scopeId}></div>`);
          } else {
            return [
              createVNode("div", { class: "flex items-center gap-[19px]" }, [
                createVNode(_component_Icon, { name: "iconamoon:arrow-down-2-duotone" }),
                createVNode("img", {
                  src: flagsItems[0].image,
                  class: "",
                  alt: ""
                }, null, 8, ["src"])
              ])
            ];
          }
        }),
        item: withCtx(({ data }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<button type="button" class="flex gap-[24px] items-center mb-[19px] last:mb-0 h-[45px]"${_scopeId}><img${ssrRenderAttr("src", data.image)} class="" alt=""${_scopeId}><span${_scopeId}>${ssrInterpolate(data.title)}</span></button>`);
          } else {
            return [
              createVNode("button", {
                type: "button",
                class: "flex gap-[24px] items-center mb-[19px] last:mb-0 h-[45px]"
              }, [
                createVNode("img", {
                  src: data.image,
                  class: "",
                  alt: ""
                }, null, 8, ["src"]),
                createVNode("span", null, toDisplayString(data.title), 1)
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/shared/LanguagesMenu.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_3 = _sfc_main;

export { __nuxt_component_3 as _ };
//# sourceMappingURL=LanguagesMenu-8e223abf.mjs.map
