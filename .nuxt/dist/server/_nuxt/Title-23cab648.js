import { _ as __nuxt_component_1 } from "./nuxt-link-7fd3a776.js";
import __nuxt_component_0$1 from "./Icon-b69f18a8.js";
import { mergeProps, withCtx, createTextVNode, createVNode, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrInterpolate, ssrRenderComponent } from "vue/server-renderer";
const _sfc_main = {
  __name: "Title",
  __ssrInlineRender: true,
  props: ["title", "url", "link"],
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_1;
      const _component_Icon = __nuxt_component_0$1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex items-center justify-between mb-24" }, _attrs))}><h6 class="text-[1.875rem] font-semibold text-gray-700">${ssrInterpolate(__props.title)}</h6>`);
      if (__props.url) {
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: __props.url,
          class: "text-primary-300 text-[1.125rem] font-semibold flex items-center gap-[16px]"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(` عرض الكل <span${_scopeId}>`);
              _push2(ssrRenderComponent(_component_Icon, { name: "pepicons-pop:angle-left" }, null, _parent2, _scopeId));
              _push2(`</span>`);
            } else {
              return [
                createTextVNode(" عرض الكل "),
                createVNode("span", null, [
                  createVNode(_component_Icon, { name: "pepicons-pop:angle-left" })
                ])
              ];
            }
          }),
          _: 1
        }, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/shared/Title.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_0 = _sfc_main;
export {
  __nuxt_component_0 as _
};
//# sourceMappingURL=Title-23cab648.js.map
