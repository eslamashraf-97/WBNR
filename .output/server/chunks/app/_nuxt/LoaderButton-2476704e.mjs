import { mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs } from 'vue/server-renderer';
import { _ as _export_sfc } from '../server.mjs';

const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "lds-ellipsis" }, _attrs))} data-v-091dfb3b><div data-v-091dfb3b></div><div data-v-091dfb3b></div><div data-v-091dfb3b></div><div data-v-091dfb3b></div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/shared/loders/LoaderButton.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const LoaderButton = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-091dfb3b"]]);

export { LoaderButton as L };
//# sourceMappingURL=LoaderButton-2476704e.mjs.map
