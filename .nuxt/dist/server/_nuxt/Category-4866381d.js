import { mergeProps, unref, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderAttr } from "vue/server-renderer";
const ComputerImage = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEcAAAA/CAYAAACywdWzAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAALYSURBVHgB7ZzBbhJRFIb/c2eqS9kZTBOnb1AXtjYupE9g99pG3sA3sD6B+gRDy8KlvoFsTIWYSJ9AmjRiV+KmLmQ43jswIxA5UspAyJxvde8wDPBlLveem3OGMEb49UsBa5cBPFPAjHjwAiwZBgfTnkvEnYi5WS7u1EaOJ42wfRL45IW2WUJOsUJbEfd2raSW68dynBiPvA+2E2DZMJ9h0Ri6Zc3EI2VYkO8OpGIIHfT4TRe9SmIvL1QvPu8BvZCYkhG0S9X2SQlWjjuBOSofFHcqyCnVi/oemN65dpejDcNEm4PXOnkW49i/vf0+adtJpWSYqT/WGKdQRjBQJvJXDuEulBH0zhFQOQIqR0DljOMWwgNUzjg9/pk0VY6AyhFQOQIqR0DlCKgcAZUjoHIEjNt5h/JPDNionAnosBJQOQIqR0DlCKgcAZUjoHIEVI6AypmAy+9ROQIqR0DlCKgcAZUjoHIE/KRBQOGoXT/EnCBDS09pIZ4pATT93v7QwYLdFnyBecFYefyRHvMZg1pYJnbblhlL2500hh4nabcjcvaL2wFyTrVdb4H6eZL6hyygcgRUzjiGfqRNKKOwZnZNhcoZh5DWmZkoQjPphOcfN5FjXGmVHVaxA2PQNOX1rWaSQen7a2FcqZdD3O/2yYsrZgjc6l7eqMXFaMffPj0nY165tivGsivUIyyZRcZmxFywC79SWpA2KK1KyxirLuicZ2y1itgRRFHv5dM7D173u0O8tWOuC3PoarBim1fEvq+DCXERER7F5wCnmDF2+u81rhGXEXEz+nWzUt64l76fsCCq3xtxnN5l2i0X79cwA/O4xlXQqVxA5QioHAGVI+BjwRjmveN2I8AKkOlsZWeX9CkHPM+nHbj1iJ2y7TU7pvu7/GT9YRMZkNmdE543XIxSymSf3a5k7XXjdVjkGfc5mcjJ9M6xw+fZtE8jifOhZ0j7PShuVZARfwC9uPEUp5pp5AAAAABJRU5ErkJggg==";
const _sfc_main = {
  __name: "Category",
  __ssrInlineRender: true,
  props: ["details"],
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      var _a, _b;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "p-6 bg-white flex gap-8 items-center rounded-md" }, _attrs))}><img${ssrRenderAttr("src", ((_a = __props.details) == null ? void 0 : _a.image) || unref(ComputerImage))}><p class="text-gray-500 text-xl">${(_b = __props.details) == null ? void 0 : _b.name}</p></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/shared/cards/Category.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=Category-4866381d.js.map
