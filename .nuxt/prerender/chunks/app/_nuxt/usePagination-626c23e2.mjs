import { useSSRContext, ref, mergeProps, unref } from 'file://D:/WBNR/WBNR/node_modules/vue/index.mjs';
import { ssrRenderAttrs, ssrRenderList, ssrRenderClass, ssrInterpolate } from 'file://D:/WBNR/WBNR/node_modules/vue/server-renderer/index.mjs';
import { h as useRoute, _ as _export_sfc, a as navigateTo } from '../server.mjs';

const _sfc_main$1 = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<h4${ssrRenderAttrs(mergeProps({ class: "mt-8 border border-primary-300 bg-primary-100 p-4 rounded-xs" }, _attrs))}> \u0644\u0627 \u062A\u0648\u062C\u062F \u0645\u0646\u062A\u062C\u0627\u062A </h4>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/shared/NoResults.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_6 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender]]);
const _sfc_main = {
  __name: "Pagination",
  __ssrInlineRender: true,
  props: ["meta", "page"],
  emits: ["changePage"],
  setup(__props, { emit: emits }) {
    const router = useRoute();
    const thePage = ref(+router.query.page || 1);
    return (_ctx, _push, _parent, _attrs) => {
      var _a;
      if ((_a = __props.meta) == null ? void 0 : _a.pageCount) {
        _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex flex-row-reverse items-center justify-center gap-9" }, _attrs))}><!--[-->`);
        ssrRenderList(__props.meta.pageCount, (page, index) => {
          _push(`<button type="button" class="${ssrRenderClass([{
            "!border-primary-300 !text-gray-800": unref(thePage) === page
          }, "border border-gray-200 rounded-[0.6875rem] text-gray-500 text-2xl w-[4.6875rem] h-[4.6875rem]"])}">${ssrInterpolate(page)}</button>`);
        });
        _push(`<!--]--></div>`);
      } else {
        _push(`<!---->`);
      }
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/shared/Pagination.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_8 = _sfc_main;
function usePagination() {
  const route = useRoute();
  const page = ref(route.query.page || 1);
  function changePage(n) {
    page.value = n;
    navigateTo({ query: { ...route.query, page: n } });
  }
  return { changePage, page };
}

export { __nuxt_component_6 as _, __nuxt_component_8 as a, usePagination as u };
//# sourceMappingURL=usePagination-626c23e2.mjs.map
