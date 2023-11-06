import { useSSRContext, mergeProps } from 'file://D:/WBNR/WBNR/node_modules/vue/index.mjs';
import { ssrRenderAttrs } from 'file://D:/WBNR/WBNR/node_modules/vue/server-renderer/index.mjs';

const _sfc_main = {
  __name: "Input",
  __ssrInlineRender: true,
  props: ["modelValue"],
  emits: ["update:modelValue"],
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<input${ssrRenderAttrs(mergeProps({ class: "h-[57px] w-[560px] border border-gray-200 rounded-[11px] px-[16px] focus:border-primary-300 focus-within:!outline-0" }, _ctx.$attrs, { value: __props.modelValue }, _attrs))}>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/shared/form/Input.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_0 = _sfc_main;

export { __nuxt_component_0 as _ };
//# sourceMappingURL=Input-1e7796d8.mjs.map
