import { mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrInterpolate } from "vue/server-renderer";
import { o as orderStatus } from "./index-a82f0d37.js";
import { _ as _export_sfc } from "../server.mjs";
const Status_vue_vue_type_style_index_0_scoped_8513ffff_lang = "";
const _sfc_main = {
  __name: "Status",
  __ssrInlineRender: true,
  props: {
    status: String,
    statuses: {
      default: orderStatus,
      type: Object
    }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<span${ssrRenderAttrs(mergeProps({
        class: [__props.status, "text-2xl font-normal leading-normal"]
      }, _attrs))} data-v-8513ffff>${ssrInterpolate(__props.statuses[__props.status])}</span>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/shared/Status.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_3 = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-8513ffff"]]);
export {
  __nuxt_component_3 as _
};
//# sourceMappingURL=Status-d6b24557.js.map
