import { useSSRContext, mergeProps } from 'file://D:/WBNR/WBNR/node_modules/vue/index.mjs';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderSlot, ssrInterpolate } from 'file://D:/WBNR/WBNR/node_modules/vue/server-renderer/index.mjs';
import { _ as __nuxt_component_1 } from './LoaderButton-81aa4875.mjs';

const _sfc_main = {
  __name: "PrimaryButton",
  __ssrInlineRender: true,
  props: {
    loading: {
      type: Boolean,
      default: false
    },
    disabledClass: {
      type: String,
      default: "!bg-mutedColor"
    },
    type: {
      type: String,
      default: "button"
    },
    submitTitle: {
      type: String,
      default: ""
    },
    classContent: {
      type: String,
      default: "px-4"
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<button${ssrRenderAttrs(mergeProps({
        class: [
          "bg-primary-300 text-white rounded-sm min-w-[12.5625rem] min-h-[4.1875rem] font-semibold text-3xl",
          __props.disabled ? `${__props.disabledClass} cursor-not-allowed` : ""
        ],
        type: __props.type,
        disabled: __props.disabled
      }, _ctx.$attrs, _attrs))}>`);
      if (__props.loading) {
        _push(ssrRenderComponent(__nuxt_component_1, null, null, _parent));
      } else {
        ssrRenderSlot(_ctx.$slots, "default", {}, () => {
          _push(`<span>${ssrInterpolate(__props.submitTitle)}</span>`);
        }, _push, _parent);
      }
      _push(`</button>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/shared/buttons/PrimaryButton.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_3 = _sfc_main;

export { __nuxt_component_3 as _ };
//# sourceMappingURL=PrimaryButton-3e0b2318.mjs.map
