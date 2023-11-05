import { mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderSlot, ssrInterpolate } from "vue/server-renderer";
import { _ as __nuxt_component_1$1 } from "./LoaderButton-81aa4875.js";
const _sfc_main = {
  __name: "SecondaryButton",
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
          "bg-primary-100 text-primary-300 rounded-xs w-[169px] h-[50px] font-normal text-lg",
          __props.disabled ? `${__props.disabledClass} cursor-not-allowed` : ""
        ],
        type: __props.type,
        disabled: __props.disabled
      }, _ctx.$attrs, _attrs))}>`);
      if (__props.loading) {
        _push(ssrRenderComponent(__nuxt_component_1$1, null, null, _parent));
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/shared/buttons/SecondaryButton.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_1 = _sfc_main;
export {
  __nuxt_component_1 as _
};
//# sourceMappingURL=SecondaryButton-979fef3b.js.map
