import{u}from"./state.b5e2d2f6.js";import{u as l}from"./entry.6d26f239.js";function d(){const o=l("country"),s=u("countries",()=>[]),c=u("countriesMeta",()=>null),t=u("selectedCountry",()=>null);function i(e){s.value=e.data,c.value=e.meta,o.value?n(o.value):n(e.data[0])}function n(e){const r=t;t.value=e,o.value=e,r&&typeof window<"u"&&window.location.reload()}return{countries:s,selectedCountry:t,setCountries:i,setSelectedCountry:n}}export{d as u};