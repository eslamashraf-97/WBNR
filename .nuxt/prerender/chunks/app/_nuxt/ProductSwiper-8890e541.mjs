import { Swiper } from 'file://D:/WBNR/WBNR/node_modules/swiper/swiper-vue.mjs';
import { useSSRContext, mergeProps, unref, withCtx, renderSlot } from 'file://D:/WBNR/WBNR/node_modules/vue/index.mjs';
import { ssrRenderComponent, ssrRenderSlot } from 'file://D:/WBNR/WBNR/node_modules/vue/server-renderer/index.mjs';
import { Autoplay } from 'file://D:/WBNR/WBNR/node_modules/swiper/modules/index.mjs';

const _sfc_main = {
  __name: "ProductSwiper",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_swiper = Swiper;
      _push(ssrRenderComponent(_component_swiper, mergeProps({
        modules: [unref(Autoplay)],
        slidesPerView: 1.2,
        spaceBetween: 36,
        loop: false,
        autoplay: false,
        breakpoints: {
          400: {
            slidesPerView: 1.2
          },
          500: {
            slidesPerView: 1.6
          },
          600: {
            slidesPerView: 1.9
          },
          700: {
            slidesPerView: 2.2
          },
          800: {
            slidesPerView: 2.4
          },
          900: {
            slidesPerView: 2.6
          },
          1e3: {
            slidesPerView: 2.8
          },
          1100: {
            slidesPerView: 3
          },
          1200: {
            slidesPerView: 3.2
          },
          1300: {
            slidesPerView: 3.6
          },
          1500: {
            slidesPerView: 4
          }
        }
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            ssrRenderSlot(_ctx.$slots, "default", {}, null, _push2, _parent2, _scopeId);
          } else {
            return [
              renderSlot(_ctx.$slots, "default")
            ];
          }
        }),
        _: 3
      }, _parent));
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/shared/ProductSwiper.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_6 = _sfc_main;

export { __nuxt_component_6 as _ };
//# sourceMappingURL=ProductSwiper-8890e541.mjs.map
