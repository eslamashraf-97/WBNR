import { _ as __nuxt_component_0 } from './Title-708248cc.mjs';
import { _ as __nuxt_component_1 } from './filter-61cfcef4.mjs';
import { withAsyncContext, mergeProps, withCtx, createTextVNode, unref, useSSRContext, defineAsyncComponent } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrInterpolate } from 'vue/server-renderer';
import { f as useRoute } from '../server.mjs';
import { u as useRequest } from './useRequest-7578fcfd.mjs';
import { onBeforeRouteUpdate } from 'vue-router';
import { e as getSuggestedProductsUrl } from './index-886ddf27.mjs';
import './nuxt-link-3fa67823.mjs';
import '../../nitro/node-server.mjs';
import 'node:http';
import 'node:https';
import 'node:zlib';
import 'node:stream';
import 'node:buffer';
import 'node:util';
import 'node:url';
import 'node:net';
import 'node:fs';
import 'node:path';
import 'fs';
import 'path';
import './Icon-44226a77.mjs';
import './config-c055070f.mjs';
import '@iconify/vue/dist/offline';
import '@iconify/vue';
import 'unhead';
import '@unhead/shared';
import 'vue3-toastify';
import 'axios';

const _sfc_main$1 = {
  __name: "Pagination",
  __ssrInlineRender: true,
  props: ["meta"],
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      var _a;
      if ((_a = __props.meta) == null ? void 0 : _a.pageCount) {
        _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex flex-row-reverse items-center justify-center gap-9" }, _attrs))}><!--[-->`);
        ssrRenderList(__props.meta.pageCount, (page, index) => {
          _push(`<button type="button">${ssrInterpolate(page)}</button>`);
        });
        _push(`<!--]--></div>`);
      } else {
        _push(`<!---->`);
      }
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/shared/Pagination.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_3 = _sfc_main$1;
const __nuxt_component_2_lazy = /* @__PURE__ */ defineAsyncComponent(() => import('./Product-bface8fb.mjs').then((m) => m.default || m));
const _sfc_main = {
  __name: "suggested-products",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const route = useRoute();
    const { data: productData, refresh } = ([__temp, __restore] = withAsyncContext(() => useRequest({
      url: () => getSuggestedProductsUrl,
      requetOptions: {
        query: { page: route.query.page },
        watch: [route.query]
      }
    })), __temp = await __temp, __restore(), __temp);
    onBeforeRouteUpdate(() => {
      console.log("hi");
      refresh();
    });
    return (_ctx, _push, _parent, _attrs) => {
      var _a, _b;
      const _component_shared_title = __nuxt_component_0;
      const _component_shared_cards_filter = __nuxt_component_1;
      const _component_lazy_shared_cards_product = __nuxt_component_2_lazy;
      const _component_shared_pagination = __nuxt_component_3;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "bg-primary" }, _attrs))}><p class="text-gray-400 text-2xl mb-9">\u0627\u0644\u0645\u0646\u062A\u062C\u0627\u062A / \u0645\u0646\u062A\u062C\u0627\u062A \u0645\u0631\u0634\u062D\u0629 \u0644\u0643</p>`);
      _push(ssrRenderComponent(_component_shared_title, { title: "\u0645\u0646\u062A\u062C\u0627\u062A \u0645\u0631\u0634\u062D\u0629 \u0644\u0643" }, null, _parent));
      _push(ssrRenderComponent(_component_shared_cards_filter, null, {
        right: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`\u062A\u062D\u062F\u064A\u062F \u0627\u0644\u0641\u0644\u062A\u0631`);
          } else {
            return [
              createTextVNode("\u062A\u062D\u062F\u064A\u062F \u0627\u0644\u0641\u0644\u062A\u0631")
            ];
          }
        }),
        left: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`\u062A\u062D\u062F\u064A\u062F`);
          } else {
            return [
              createTextVNode("\u062A\u062D\u062F\u064A\u062F")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="mt-24 grid lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-9 mb-40 grid-flow-row-dense"><!--[-->`);
      ssrRenderList((_a = unref(productData)) == null ? void 0 : _a.data, (product, key) => {
        _push(ssrRenderComponent(_component_lazy_shared_cards_product, {
          key,
          details: product
        }, null, _parent));
      });
      _push(`<!--]--></div>`);
      _push(ssrRenderComponent(_component_shared_pagination, {
        meta: (_b = unref(productData)) == null ? void 0 : _b.meta
      }, null, _parent));
      _push(`</div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/suggested-products.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=suggested-products-6cc4dcb2.mjs.map
