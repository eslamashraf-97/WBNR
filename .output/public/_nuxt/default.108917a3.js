import{_ as h}from"./Input.5ed3ebb5.js";import x from"./Icon.d2058f2b.js";import{_ as y}from"./menu.4dace72b.js";import{_ as v}from"./nuxt-link.21d4d0ee.js";import{_ as w,a as N}from"./MainFooter.31bdccf1.js";import{f as k,a as I,b as S,c as $}from"./flag-em.7c12cb79.js";import{_ as d}from"./entry.d8d6d3c4.js";import{D as u,N as b,O as t,q as e,G as o,Q as _,P as j,R as B,U as E,Z as V,F as D}from"./swiper-vue.21b02496.js";import"./config.db324676.js";const n=s=>(B("data-v-3ff01bbc"),s=s(),E(),s),F={class:"bg-white py-8"},q={class:"container flex justify-between items-center border-b border-b-primary-100 pb-[24px] mb-[24px]"},C={class:"flex items-center gap-[64px]"},G=n(()=>t("img",{src:w},null,-1)),K={class:"relative layout-navbar-search"},L={class:"absolute top-0 left-0 bottom-0 rounded-tl-[11px] rounded-bl-[11px] bg-primary-100 text-primary-300 w-[75px] flex items-center justify-center border border-gray-200 border-s-0"},O={class:"flex gap-8"},P={class:"flex items-center gap-9"},Q={class:"flex items-center gap-2 text-2xl"},R=n(()=>t("span",null,"0",-1)),T={class:"flex items-center gap-2 text-2xl"},U=n(()=>t("span",null,"0",-1)),Z={class:"container flex justify-between items-center"},z={class:"flex items-center gap-[24px]"},A=n(()=>t("span",{class:"h-[36px] w-[1px] bg-gray-200"},null,-1)),H={class:"flex items-center gap-[36px]"},J={class:"flex items-center gap-[19px]"},M=["src"],W={type:"button",class:"flex gap-[24px] items-center mb-[19px] last:mb-0 h-[45px]"},X=["src"],Y={class:"flex items-center gap-[19px]"},tt=n(()=>t("span",null,"جميع الفئات",-1)),et={__name:"Navbar",setup(s){const c=[{image:k,title:"مصر",id:"eg"},{image:I,title:"السعودية",id:"sa"},{image:S,title:"الكويت",id:"ku"},{image:$,title:"الامارات",id:"em"}];return(l,i)=>{const f=h,g=x,a=x,r=y,p=v;return u(),b("div",F,[t("div",q,[t("div",C,[G,t("div",K,[e(f,{"input-props":{placeholder:"ما الذي تبحث عنه؟",type:"text",class:"pe-[80px]"}}),t("span",L,[e(g,{name:"system-uicons:search",class:"text-4xl"})])])]),t("div",O,[t("div",P,[e(a,{name:"pepicons-pencil:bell",class:"text-gray-600 text-2xl"}),t("span",Q,[R,e(a,{name:"fluent:bookmark-20-regular",class:"text-gray-600"})]),t("span",T,[U,e(a,{name:"solar:cart-large-minimalistic-linear",class:"text-gray-600"})])]),e(r)])]),t("div",Z,[t("nav",z,[e(p,{to:"/home",class:"px-[36px] py-[6px] h-[57px] text-[24px] text-gray-500 font-semibold border-b border-b-transparent"},{default:o(()=>[_("الرئيسية")]),_:1}),e(p,{to:"/suggested-products",class:"px-[36px] py-[6px] h-[57px] text-[24px] text-gray-500 font-semibold border-b border-b-transparent"},{default:o(()=>[_("منتجات مرشحة لك")]),_:1}),A,e(p,{to:"/dashboard",class:"px-[36px] py-[6px] h-[57px] text-[24px] text-gray-500 font-semibold border-b border-b-transparent"},{default:o(()=>[_("لوحة التحكم")]),_:1})]),t("div",H,[e(r,{items:c,"button-props":{class:"h-[57px] px-[32px] py-[6px]"},"menu-props":{class:"max-w-[216px]"}},{label:o(()=>[t("div",J,[e(a,{name:"iconamoon:arrow-down-2-duotone"}),t("img",{src:c[0].image,class:"",alt:""},null,8,M)])]),item:o(({data:m})=>[t("button",W,[t("img",{src:m.image,class:"",alt:""},null,8,X),t("span",null,j(m.title),1)])]),_:1}),e(r,{items:[],"button-props":{class:"h-[57px] px-[32px] py-[6px] bg-primary-100 text-primary-300"}},{label:o(()=>[t("div",Y,[tt,e(a,{name:"iconamoon:arrow-down-2-duotone"})])]),_:1})])])])}}},st=d(et,[["__scopeId","data-v-3ff01bbc"]]),ot={},at={class:"min-h-screen pt-[128px] pb-[160px] container"};function nt(s,c){const l=st,i=N;return u(),b(D,null,[e(l),t("div",at,[V(s.$slots,"default")]),e(i)],64)}const ut=d(ot,[["render",nt]]);export{ut as default};