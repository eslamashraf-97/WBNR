import __nuxt_component_0 from './Icon-44226a77.mjs';
import { _ as __nuxt_component_1 } from './nuxt-link-3fa67823.mjs';
import { mergeProps, withCtx, createVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderAttr, ssrRenderComponent, ssrInterpolate } from 'vue/server-renderer';
import '../server.mjs';
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
import 'unhead';
import '@unhead/shared';
import 'vue-router';
import 'vue3-toastify';
import './config-c055070f.mjs';
import '@iconify/vue/dist/offline';
import '@iconify/vue';

const _sfc_main = {
  __name: "Product",
  __ssrInlineRender: true,
  props: {
    details: {
      type: Object
    }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Icon = __nuxt_component_0;
      const _component_nuxt_link = __nuxt_component_1;
      if (__props.details) {
        _push(`<div${ssrRenderAttrs(mergeProps({ class: "w-96 border border-gray-200 shadow-product rounded-md overflow-hidden" }, _attrs))}><img${ssrRenderAttr("src", __props.details.featured_image)} class="object-cover w-full h-80"><div class="py-9 px-7 relative"><div class="w-36 bg-white py-3 flex justify-center text-primary-300 text-2xl rounded-xs absolute gap-2 top-[-25px] left-5">`);
        _push(ssrRenderComponent(_component_Icon, { name: "fluent:bookmark-20-regular" }, null, _parent));
        _push(ssrRenderComponent(_component_Icon, {
          name: "ci:line-l",
          class: "text-gray-200"
        }, null, _parent));
        _push(ssrRenderComponent(_component_Icon, { name: "la:cart-arrow-down" }, null, _parent));
        _push(`</div><h1 class="text-[28px] leading-10">${ssrInterpolate(__props.details.title)}</h1><div class="flex justify-between my-9"><div><h5 class="text-gray-400 text-base font-normal mb-1"> \u0627\u0642\u0644 \u0633\u0639\u0631 \u0644\u0644\u0628\u064A\u0639 </h5><h3 class="text-2xl">${ssrInterpolate(__props.details.price)}</h3></div><div><h5 class="text-gray-400 text-base font-normal mb-1"> \u0627\u0642\u0644 \u0633\u0639\u0631 \u0644\u0644\u0631\u0628\u062D </h5><h3 class="text-2xl">${ssrInterpolate(__props.details.minCommission)}</h3></div></div>`);
        _push(ssrRenderComponent(_component_nuxt_link, {
          to: `/product/${__props.details.id}`,
          class: "text-primary-300 flex gap-1 font-semibold items-center text-lg"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<span${_scopeId}>\u062A\u0641\u0627\u0635\u064A\u0644 \u0627\u0644\u0645\u0646\u062A\u062C</span>`);
              _push2(ssrRenderComponent(_component_Icon, {
                name: "iconamoon:arrow-left-2-duotone",
                class: "text-2xl"
              }, null, _parent2, _scopeId));
            } else {
              return [
                createVNode("span", null, "\u062A\u0641\u0627\u0635\u064A\u0644 \u0627\u0644\u0645\u0646\u062A\u062C"),
                createVNode(_component_Icon, {
                  name: "iconamoon:arrow-left-2-duotone",
                  class: "text-2xl"
                })
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div></div>`);
      } else {
        _push(`<!---->`);
      }
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/shared/cards/Product.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=Product-bface8fb.mjs.map
