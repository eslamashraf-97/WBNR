import { _ as __nuxt_component_2$1 } from './menu-32072702.mjs';
import __nuxt_component_0 from './Icon-44226a77.mjs';
import { useSSRContext, mergeProps, withCtx, createVNode, toDisplayString } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate } from 'vue/server-renderer';

const _sfc_main = {
  __name: "FromTo",
  __ssrInlineRender: true,
  setup(__props) {
    const items = [1, 2, 3, 4];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_shared_menu = __nuxt_component_2$1;
      const _component_Icon = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex gap-9 items-center" }, _attrs))}>`);
      _push(ssrRenderComponent(_component_shared_menu, {
        items,
        "button-props": {
          class: "h-[57px] px-[32px] py-[6px] text-[20px]"
        },
        "menu-props": {
          class: "max-w-[132px]"
        }
      }, {
        label: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="flex items-center gap-[10px]"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_Icon, { name: "iconamoon:arrow-down-2-duotone" }, null, _parent2, _scopeId));
            _push2(`<span${_scopeId}>\u0645\u0646</span></div>`);
          } else {
            return [
              createVNode("div", { class: "flex items-center gap-[10px]" }, [
                createVNode(_component_Icon, { name: "iconamoon:arrow-down-2-duotone" }),
                createVNode("span", null, "\u0645\u0646")
              ])
            ];
          }
        }),
        item: withCtx(({ data }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<button type="button" class="flex gap-[24px] items-center mb-[19px] last:mb-0 h-[45px]"${_scopeId}><span${_scopeId}>${ssrInterpolate(data)}</span></button>`);
          } else {
            return [
              createVNode("button", {
                type: "button",
                class: "flex gap-[24px] items-center mb-[19px] last:mb-0 h-[45px]"
              }, [
                createVNode("span", null, toDisplayString(data), 1)
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="h-[36px] bg-gray-200 w-[1px]"></div>`);
      _push(ssrRenderComponent(_component_shared_menu, {
        items,
        "button-props": {
          class: "h-[57px] px-[32px] py-[6px] text-[20px]"
        },
        "menu-props": {
          class: "max-w-[132px]"
        }
      }, {
        label: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="flex items-center gap-[10px]"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_Icon, { name: "iconamoon:arrow-down-2-duotone" }, null, _parent2, _scopeId));
            _push2(`<span${_scopeId}>\u0627\u0644\u0649</span></div>`);
          } else {
            return [
              createVNode("div", { class: "flex items-center gap-[10px]" }, [
                createVNode(_component_Icon, { name: "iconamoon:arrow-down-2-duotone" }),
                createVNode("span", null, "\u0627\u0644\u0649")
              ])
            ];
          }
        }),
        item: withCtx(({ data }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<button type="button" class="flex gap-[24px] items-center mb-[19px] last:mb-0 h-[45px]"${_scopeId}><span${_scopeId}>${ssrInterpolate(data)}</span></button>`);
          } else {
            return [
              createVNode("button", {
                type: "button",
                class: "flex gap-[24px] items-center mb-[19px] last:mb-0 h-[45px]"
              }, [
                createVNode("span", null, toDisplayString(data), 1)
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/shared/FromTo.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_2 = _sfc_main;

export { __nuxt_component_2 as _ };
//# sourceMappingURL=FromTo-357c3d81.mjs.map
