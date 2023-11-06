import { _ as __nuxt_component_3 } from './PrimaryButton-3e0b2318.mjs';
import { useSSRContext, mergeProps } from 'file://D:/WBNR/WBNR/node_modules/vue/index.mjs';
import { ssrRenderAttrs, ssrRenderList, ssrRenderAttr, ssrInterpolate, ssrRenderComponent } from 'file://D:/WBNR/WBNR/node_modules/vue/server-renderer/index.mjs';

const _sfc_main = {
  __name: "Aside",
  __ssrInlineRender: true,
  props: ["details", "isLoadingPlaceOrder"],
  emits: ["placeOrder"],
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_shared_buttons_primary_button = __nuxt_component_3;
      _push(`<aside${ssrRenderAttrs(mergeProps({ class: "flex flex-col gap-9 w-full xl:w-[37.625rem] p-9 bg-white border border-gray-200 rounded-3xl dashboard-aside h-fit shadow-main" }, _attrs))}>`);
      if (__props.details) {
        _push(`<!--[--><!--[-->`);
        ssrRenderList(__props.details.cartItems, (product) => {
          _push(`<div class="flex items-center gap-8"><img${ssrRenderAttr("src", product.product.featured_image)}${ssrRenderAttr("alt", product.product.title)} class="w-[4.6875rem] h-[4.6875rem] rounded-[.5rem]"><div class=""><h6 class="text-2xl font-normal leading-normal text-gray-700">${ssrInterpolate(product.product.title)}</h6><span>\u0627\u0644\u0643\u0645\u064A\u0629: (${ssrInterpolate(product.quantity)})</span></div></div>`);
        });
        _push(`<!--]--><div class="flex items-center justify-between"><h5 class="text-2xl text-gray-700 font-normal">\u0633\u0639\u0631 \u0627\u0644\u0645\u0646\u062A\u062C\u0627\u062A::</h5><h5 class="text-2xl text-gray-500 font-normal"><span>${ssrInterpolate(__props.details.price)} \u062C.\u0645</span></h5></div><div class="flex items-center justify-between"><h5 class="text-2xl text-gray-700 font-normal">\u0627\u0644\u0631\u0628\u062D:</h5><h5 class="text-2xl text-gray-500 font-normal"><span>${ssrInterpolate(__props.details.final_price)} \u062C.\u0645</span></h5></div><div class="flex items-center justify-between"><h5 class="text-2xl text-gray-700 font-normal">\u0627\u0644\u0636\u0631\u064A\u0628\u0629:</h5><h5 class="text-2xl text-gray-500 font-normal"><span>${ssrInterpolate(__props.details.tax_percentage)}</span></h5></div><div class="flex items-center justify-between"><h5 class="text-2xl text-gray-700 font-normal">\u0627\u062C\u0645\u0627\u0644\u064A \u0627\u0644\u0631\u0628\u062D:</h5><h5 class="text-2xl text-gray-500 font-normal"><span>${ssrInterpolate(__props.details.final_price)} \u062C.\u0645</span></h5></div><div class="flex items-center justify-between"><h5 class="text-2xl text-gray-700 font-normal">\u0633\u0639\u0631 \u0627\u0644\u0634\u062D\u0646:</h5><h5 class="text-2xl text-gray-500 font-normal"><span>${ssrInterpolate(__props.details.delivery_cost)} \u062C.\u0645</span></h5></div><div class="mt-9">`);
        _push(ssrRenderComponent(_component_shared_buttons_primary_button, {
          "submit-title": "\u062A\u0623\u0643\u064A\u062F \u0627\u0644\u0637\u0644\u0628",
          class: "w-[14.5rem] h-[4.1875rem]",
          onClick: ($event) => _ctx.$emit("placeOrder"),
          loading: __props.isLoadingPlaceOrder
        }, null, _parent));
        _push(`</div><!--]-->`);
      } else {
        _push(`<!---->`);
      }
      _push(`</aside>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/checkout/Aside.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_1 = _sfc_main;

export { __nuxt_component_1 as _ };
//# sourceMappingURL=Aside-c9453fc3.mjs.map
