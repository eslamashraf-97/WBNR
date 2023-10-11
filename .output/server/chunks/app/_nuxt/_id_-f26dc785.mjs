import { b as buildAssetsURL } from '../../handlers/renderer.mjs';
import __nuxt_component_0 from './Icon-44226a77.mjs';
import { _ as __nuxt_component_0$1 } from './Input-03e500d0.mjs';
import { _ as __nuxt_component_2 } from './PrimaryButton-f179ff1a.mjs';
import { _ as __nuxt_component_1 } from './SecondaryButton-739b14f4.mjs';
import { ref, reactive, watch, unref, withCtx, createVNode, useSSRContext } from 'vue';
import { f as useRoute } from '../server.mjs';
import { ssrRenderAttrs, ssrRenderAttr, ssrRenderList, ssrRenderComponent, ssrInterpolate } from 'vue/server-renderer';
import { d as api_single_product } from './index-886ddf27.mjs';
import 'vue-bundle-renderer/runtime';
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
import 'devalue';
import '@unhead/ssr';
import 'unhead';
import '@unhead/shared';
import './config-c055070f.mjs';
import '@iconify/vue/dist/offline';
import '@iconify/vue';
import './LoaderButton-2476704e.mjs';
import 'vue-router';
import 'vue3-toastify';
import 'axios';

const _imports_0 = "" + buildAssetsURL("cart-icon.60f0ac65.svg");
const _sfc_main = {
  __name: "[id]",
  __ssrInlineRender: true,
  setup(__props) {
    const route = useRoute();
    const isLoading = ref(true);
    const productData = ref(null);
    ref([
      {
        title: "asasas",
        header: "assssssss",
        description: "asasdasda",
        image: "https://swiperjs.com/demos/images/nature-2.jpg"
      },
      {
        title: "sdddddd",
        header: "fffffffff",
        description: "gggggg",
        image: "https://swiperjs.com/demos/images/nature-3.jpg"
      }
    ]);
    (function getProductData() {
      console.log(route);
      api_single_product(route.params.id).then((res) => {
        productData.value = res.data.data;
      }).finally(() => {
        isLoading.value = false;
      });
    })();
    const productForm = reactive({
      quantity: 1,
      price: ""
    });
    watch([productForm, productData], () => {
      var _a;
      productForm.price = productForm.quantity * +((_a = productData.value) == null ? void 0 : _a.price);
    });
    ref(null);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Icon = __nuxt_component_0;
      const _component_shared_form_input = __nuxt_component_0$1;
      const _component_shared_buttons_primary_button = __nuxt_component_2;
      const _component_shared_buttons_secondary_button = __nuxt_component_1;
      _push(`<div${ssrRenderAttrs(_attrs)}><p class="text-gray-400 text-2xl mb-9"> \u0627\u0644\u0645\u0646\u062A\u062C\u0627\u062A / \u0625\u0644\u0643\u062A\u0631\u0648\u0646\u064A\u0627\u062A/ \u0627\u0643\u0633\u0633\u0648\u0627\u0631\u0627\u062A/ \u062D\u0648\u0627\u0645\u0644 </p>`);
      if (unref(productData)) {
        _push(`<!--[--><div class="flex gap-16 mb-24"><div class="bg-white p-9 rounded-lg"><div class="gallery flex gap-2"><img${ssrRenderAttr("src", unref(productData).featured_image)} class="w-[36rem] h-[36rem] object-cover"><div class="flex flex-col justify-between rounded-lg overflow-hidden"><!--[-->`);
        ssrRenderList(unref(productData).images, (productImage, index) => {
          _push(`<img${ssrRenderAttr("alt", productImage.alt_image)}${ssrRenderAttr("src", productImage.url)} class="w-32 h-32 object-cover">`);
        });
        _push(`<!--]--></div></div><p class="text-primary-300 text-xl font-semibold mt-7"> \u062A\u062D\u0645\u064A\u0644 \u0643\u0644 \u0635\u0648\u0631 \u0627\u0644\u0645\u0646\u062A\u062C <span>`);
        _push(ssrRenderComponent(_component_Icon, { name: "pepicons-pop:angle-left" }, null, _parent));
        _push(`</span></p></div><div class="details flex-1"><div class="main-info"><p class="text-gray-700 text-2xl font-normal">\u0627\u062F\u0627\u0621 \u0627\u0644\u0645\u0646\u062A\u062C:</p><h1 class="text-gray-800 text-5xl my-4">${ssrInterpolate(unref(productData).title)}</h1><p class="text-gray-400 text-2xl flex gap-3 items-center"><span>\u0643\u0648\u062F \u0627\u0644\u0645\u0646\u062A\u062C:</span><span>${ssrInterpolate(unref(productData).code)}</span></p></div><div class="flex items-center gap-16 mt-10"><div><span class="text-base text-gray-400 font-light">\u0633\u0639\u0631 \u0627\u0644\u0645\u0646\u062A\u062C</span><h6 class="mb-0 text-3xl text-gray-800 flex gap-[10px] items-center leading-[48px]">${ssrInterpolate(unref(productData).price)} <span>\u062C.\u0645</span></h6></div><div class="h-[36px] bg-gray-200 w-[1px]"></div><div><span class="text-base text-gray-400 font-light">\u0627\u0644\u0631\u0628\u062D \u0645\u0646 \u0627\u062C\u0645\u0627\u0644\u064A \u0627\u0644\u0633\u0639\u0631</span><h6 class="mb-0 text-3xl text-gray-800 flex gap-[10px] items-center leading-[48px]">${ssrInterpolate(unref(productData).maxCommission)} <span>\u062C.\u0645</span></h6></div></div><div class="mt-10 mb-10"><span class="text-base text-gray-400 font-light">\u0627\u0644\u0643\u0645\u064A\u0629 \u0627\u0644\u0645\u062A\u0648\u0641\u0631\u0629</span><h6 class="mb-0 text-3xl text-gray-800 flex gap-[10px] items-center leading-[48px]">${ssrInterpolate(unref(productData).orderCount)} <span>\u0642\u0637\u0639\u0629</span></h6></div><div class="px-9 py-5 shadow-main rounded-sm border border-gray-200 max-w-[650px]"><div class="flex items-center gap-6"><div><span class="text-base text-gray-400 font-light mb-5 block">\u0627\u0644\u0643\u0645\u064A\u0629</span><div class="relative w-[96px]">`);
        _push(ssrRenderComponent(_component_shared_form_input, {
          type: "text",
          class: "w-[96px] h-[53px] bg-transparent text-xl",
          modelValue: unref(productForm).quantity,
          "onUpdate:modelValue": ($event) => unref(productForm).quantity = $event,
          modelModifiers: { number: true }
        }, null, _parent));
        _push(`<div class="absolute top-[1px] left-[1px] h-full flex flex-col items-center bg-white rounded-[11px]"><button type="button" class="w-[24px] flex-1 border-b border-b-gray-200 border-s border-s-gray-200"> + </button><button type="button" class="w-[24px] flex-1 border-s border-s-gray-200"> - </button></div></div></div><div><span class="text-base text-gray-400 font-light mb-5 block">\u0633\u0639\u0631 \u0627\u0644\u0628\u064A\u0639 \u0644\u0644\u0642\u0637\u0639\u0629</span><div class="relative w-[172px]">`);
        _push(ssrRenderComponent(_component_shared_form_input, {
          type: "text",
          class: "!w-[172px] h-[53px] bg-transparent text-xl",
          modelValue: unref(productForm).price,
          "onUpdate:modelValue": ($event) => unref(productForm).price = $event,
          disabled: true
        }, null, _parent));
        _push(`<div class="absolute top-[1px] left-[1px] h-full flex flex-col bg-white rounded-[11px]"><div class="w-[57px] flex-1 border-s border-s-gray-200 flex items-center justify-center text-xl text-gray-300 font-bold"> \u062C.\u0645 </div></div></div></div><span class="text-base text-gray-400 flex gap-[12px] mt-auto mb-3"><span>\u0627\u0644\u0631\u0628\u062D \u0645\u0646 \u0627\u062C\u0645\u0627\u0644\u064A \u0627\u0644\u0633\u0639\u0631</span><span class="flex items-center gap-[10px] text-primary-300 text-xl">455 <span>\u062C.\u0645</span></span></span></div><div class="mt-12 flex items-center gap-7">`);
        _push(ssrRenderComponent(_component_shared_buttons_primary_button, {
          "submit-title": "\u0627\u0637\u0644\u0628 \u0627\u0644\u0627\u0646",
          class: "w-[232px] h-[67px]"
        }, null, _parent));
        _push(ssrRenderComponent(_component_shared_buttons_secondary_button, { class: "w-[93px] h-[67px] flex items-center justify-center" }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<img${ssrRenderAttr("src", _imports_0)}${_scopeId}>`);
            } else {
              return [
                createVNode("img", { src: _imports_0 })
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div></div></div></div><div class="mb-24"><p class="text-gray-700 text-3xl font-normal mb-8">\u0648\u0635\u0641 \u0627\u0644\u0645\u0646\u062A\u062C</p><div class="bg-white rounded-lg border p-9">${unref(productData).description}</div></div><!--]-->`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/product/[id].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=_id_-f26dc785.mjs.map
