import { mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs } from "vue/server-renderer";
import { _ as _export_sfc } from "../server.mjs";
const LoaderButton_vue_vue_type_style_index_0_scoped_c54238de_lang = "";
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "lds-ellipsis" }, _attrs))} data-v-c54238de><div data-v-c54238de></div><div data-v-c54238de></div><div data-v-c54238de></div><div data-v-c54238de></div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/shared/loders/LoaderButton.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-c54238de"]]);
export {
  __nuxt_component_1 as _
};
//# sourceMappingURL=LoaderButton-81aa4875.js.map
