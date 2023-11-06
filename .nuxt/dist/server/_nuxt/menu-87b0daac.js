import __nuxt_component_0 from "./Icon-b69f18a8.js";
import { unref, mergeProps, withCtx, renderSlot, createVNode, openBlock, createBlock, Fragment, renderList, Transition, useSSRContext } from "vue";
import { ssrRenderComponent, ssrRenderSlot, ssrRenderList, ssrRenderClass } from "vue/server-renderer";
import { Menu, MenuButton, MenuItems, MenuItem } from "@headlessui/vue";
const _sfc_main = {
  __name: "menu",
  __ssrInlineRender: true,
  props: ["items", "buttonProps", "menuProps"],
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Icon = __nuxt_component_0;
      _push(ssrRenderComponent(unref(Menu), mergeProps({
        as: "div",
        class: "relative inline-block text-left"
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div${_scopeId}>`);
            _push2(ssrRenderComponent(unref(MenuButton), mergeProps({ class: "py-1.5 rounded-sm text-gray-700 border border-gray-300 px-9 hover:bg-gray-200 bg-gray-100 flex items-center text-2xl font-normal" }, __props.buttonProps), {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  ssrRenderSlot(_ctx.$slots, "label", {}, () => {
                    _push3(ssrRenderComponent(_component_Icon, { name: "iconamoon:arrow-down-2-duotone" }, null, _parent3, _scopeId2));
                    _push3(`<p class="leading-[1.8]"${_scopeId2}>ahmed1@</p>`);
                  }, _push3, _parent3, _scopeId2);
                } else {
                  return [
                    renderSlot(_ctx.$slots, "label", {}, () => [
                      createVNode(_component_Icon, { name: "iconamoon:arrow-down-2-duotone" }),
                      createVNode("p", { class: "leading-[1.8]" }, "ahmed1@")
                    ])
                  ];
                }
              }),
              _: 3
            }, _parent2, _scopeId));
            _push2(`</div>`);
            _push2(ssrRenderComponent(unref(MenuItems), mergeProps({ class: "absolute left-0 z-10 mt-2 w-[257px] border border-gray-200 rounded-[12px] px-[32px] py-[28px] bg-gray-100 max-h-[303px] overflow-y-auto" }, __props.menuProps), {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="py-1"${_scopeId2}><!--[-->`);
                  ssrRenderList(__props.items, (item, index) => {
                    _push3(ssrRenderComponent(unref(MenuItem), { key: index }, {
                      default: withCtx(({ active }, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          ssrRenderSlot(_ctx.$slots, "item", { data: item }, () => {
                            _push4(`<a href="#" class="${ssrRenderClass([
                              active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                              "block px-4 py-2 text-sm"
                            ])}"${_scopeId3}>Edit</a>`);
                          }, _push4, _parent4, _scopeId3);
                        } else {
                          return [
                            renderSlot(_ctx.$slots, "item", { data: item }, () => [
                              createVNode("a", {
                                href: "#",
                                class: [
                                  active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                                  "block px-4 py-2 text-sm"
                                ]
                              }, "Edit", 2)
                            ])
                          ];
                        }
                      }),
                      _: 2
                    }, _parent3, _scopeId2));
                  });
                  _push3(`<!--]--></div>`);
                } else {
                  return [
                    createVNode("div", { class: "py-1" }, [
                      (openBlock(true), createBlock(Fragment, null, renderList(__props.items, (item, index) => {
                        return openBlock(), createBlock(unref(MenuItem), { key: index }, {
                          default: withCtx(({ active }) => [
                            renderSlot(_ctx.$slots, "item", { data: item }, () => [
                              createVNode("a", {
                                href: "#",
                                class: [
                                  active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                                  "block px-4 py-2 text-sm"
                                ]
                              }, "Edit", 2)
                            ])
                          ]),
                          _: 2
                        }, 1024);
                      }), 128))
                    ])
                  ];
                }
              }),
              _: 3
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode("div", null, [
                createVNode(unref(MenuButton), mergeProps({ class: "py-1.5 rounded-sm text-gray-700 border border-gray-300 px-9 hover:bg-gray-200 bg-gray-100 flex items-center text-2xl font-normal" }, __props.buttonProps), {
                  default: withCtx(() => [
                    renderSlot(_ctx.$slots, "label", {}, () => [
                      createVNode(_component_Icon, { name: "iconamoon:arrow-down-2-duotone" }),
                      createVNode("p", { class: "leading-[1.8]" }, "ahmed1@")
                    ])
                  ]),
                  _: 3
                }, 16)
              ]),
              createVNode(Transition, {
                "enter-active-class": "transition ease-out duration-100",
                "enter-from-class": "transform opacity-0 scale-95",
                "enter-to-class": "transform opacity-100 scale-100",
                "leave-active-class": "transition ease-in duration-75",
                "leave-from-class": "transform opacity-100 scale-100",
                "leave-to-class": "transform opacity-0 scale-95"
              }, {
                default: withCtx(() => [
                  createVNode(unref(MenuItems), mergeProps({ class: "absolute left-0 z-10 mt-2 w-[257px] border border-gray-200 rounded-[12px] px-[32px] py-[28px] bg-gray-100 max-h-[303px] overflow-y-auto" }, __props.menuProps), {
                    default: withCtx(() => [
                      createVNode("div", { class: "py-1" }, [
                        (openBlock(true), createBlock(Fragment, null, renderList(__props.items, (item, index) => {
                          return openBlock(), createBlock(unref(MenuItem), { key: index }, {
                            default: withCtx(({ active }) => [
                              renderSlot(_ctx.$slots, "item", { data: item }, () => [
                                createVNode("a", {
                                  href: "#",
                                  class: [
                                    active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                                    "block px-4 py-2 text-sm"
                                  ]
                                }, "Edit", 2)
                              ])
                            ]),
                            _: 2
                          }, 1024);
                        }), 128))
                      ])
                    ]),
                    _: 3
                  }, 16)
                ]),
                _: 3
              })
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/shared/menu.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_3 = _sfc_main;
export {
  __nuxt_component_3 as _
};
//# sourceMappingURL=menu-87b0daac.js.map
