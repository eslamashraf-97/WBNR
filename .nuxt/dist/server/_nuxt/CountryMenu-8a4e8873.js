import { _ as __nuxt_component_3 } from "./menu-87b0daac.js";
import __nuxt_component_0 from "./Icon-b69f18a8.js";
import { u as useCountries } from "./useCountries-716a6161.js";
import { ref, mergeProps, unref, withCtx, createVNode, toDisplayString, useSSRContext } from "vue";
import { ssrRenderComponent, ssrRenderAttr, ssrInterpolate } from "vue/server-renderer";
const _sfc_main = {
  __name: "CountryMenu",
  __ssrInlineRender: true,
  emits: ["changeCountry"],
  setup(__props, { emit: emits }) {
    const { countries, selectedCountry: initialSelectedCountry } = useCountries();
    const selectedCountry = ref(initialSelectedCountry);
    function setSelectedCountry(data) {
      selectedCountry.value = data;
      emits("changeCountry", data.id);
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_shared_menu = __nuxt_component_3;
      const _component_Icon = __nuxt_component_0;
      _push(ssrRenderComponent(_component_shared_menu, mergeProps({
        items: unref(countries),
        "button-props": {
          class: `h-[3.5625rem]  px-8 py-[.38rem]`
        },
        "menu-props": {
          class: `max-w-[13.5rem]`
        }
      }, _attrs), {
        label: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="flex items-center gap-[19px]"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_Icon, { name: "iconamoon:arrow-down-2-duotone" }, null, _parent2, _scopeId));
            _push2(`<img${ssrRenderAttr("src", unref(selectedCountry).image)} class="max-w-[2rem]" alt=""${_scopeId}></div>`);
          } else {
            return [
              createVNode("div", { class: "flex items-center gap-[19px]" }, [
                createVNode(_component_Icon, { name: "iconamoon:arrow-down-2-duotone" }),
                createVNode("img", {
                  src: unref(selectedCountry).image,
                  class: "max-w-[2rem]",
                  alt: ""
                }, null, 8, ["src"])
              ])
            ];
          }
        }),
        item: withCtx(({ data }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<button type="button" class="flex gap-[24px] items-center mb-[19px] last:mb-0 h-[45px]"${_scopeId}><img${ssrRenderAttr("src", data.image)} class="max-w-[2rem]" alt=""${_scopeId}><span${_scopeId}>${ssrInterpolate(data.name)}</span></button>`);
          } else {
            return [
              createVNode("button", {
                type: "button",
                class: "flex gap-[24px] items-center mb-[19px] last:mb-0 h-[45px]",
                onClick: ($event) => setSelectedCountry(data)
              }, [
                createVNode("img", {
                  src: data.image,
                  class: "max-w-[2rem]",
                  alt: ""
                }, null, 8, ["src"]),
                createVNode("span", null, toDisplayString(data.name), 1)
              ], 8, ["onClick"])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/dashboard/CountryMenu.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_2 = _sfc_main;
export {
  __nuxt_component_2 as _
};
//# sourceMappingURL=CountryMenu-8a4e8873.js.map
