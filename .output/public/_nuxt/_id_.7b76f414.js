import y from"./Icon.d2058f2b.js";import{_ as v}from"./Input.5ed3ebb5.js";import{_ as w}from"./PrimaryButton.ceb506ec.js";import{_ as V}from"./SecondaryButton.f0e7e36a.js";import{c as j}from"./entry.d8d6d3c4.js";import{f as q}from"./index.2a127664.js";import{a as d,r as k,w as C,D as p,N as _,u as e,F as u,O as t,Y as L,Q as r,q as l,P as i,G as N,a1 as D}from"./swiper-vue.21b02496.js";import"./config.db324676.js";import"./LoaderButton.8449ef7d.js";const B=""+new URL("cart-icon.60f0ac65.svg",import.meta.url).href,F=t("p",{class:"text-gray-400 text-2xl mb-9"}," المنتجات / إلكترونيات/ اكسسوارات/ حوامل ",-1),M={class:"flex gap-16 mb-24"},T={class:"bg-white p-9 rounded-lg"},U={class:"gallery flex gap-2"},$=["src"],H={class:"flex flex-col justify-between rounded-lg overflow-hidden"},P=["alt","src"],R={class:"text-primary-300 text-xl font-semibold mt-7"},E={class:"details flex-1"},G={class:"main-info"},O=t("p",{class:"text-gray-700 text-2xl font-normal"},"اداء المنتج:",-1),Q={class:"text-gray-800 text-5xl my-4"},S={class:"text-gray-400 text-2xl flex gap-3 items-center"},Y=t("span",null,"كود المنتج:",-1),z={class:"flex items-center gap-16 mt-10"},A=t("span",{class:"text-base text-gray-400 font-light"},"سعر المنتج",-1),I={class:"mb-0 text-3xl text-gray-800 flex gap-[10px] items-center leading-[48px]"},J=t("span",null,"ج.م",-1),K=t("div",{class:"h-[36px] bg-gray-200 w-[1px]"},null,-1),W=t("span",{class:"text-base text-gray-400 font-light"},"الربح من اجمالي السعر",-1),X={class:"mb-0 text-3xl text-gray-800 flex gap-[10px] items-center leading-[48px]"},Z=t("span",null,"ج.م",-1),tt={class:"mt-10 mb-10"},et=t("span",{class:"text-base text-gray-400 font-light"},"الكمية المتوفرة",-1),st={class:"mb-0 text-3xl text-gray-800 flex gap-[10px] items-center leading-[48px]"},ot=t("span",null,"قطعة",-1),at={class:"px-9 py-5 shadow-main rounded-sm border border-gray-200 max-w-[650px]"},nt={class:"flex items-center gap-6"},lt=t("span",{class:"text-base text-gray-400 font-light mb-5 block"},"الكمية",-1),it={class:"relative w-[96px]"},rt={class:"absolute top-[1px] left-[1px] h-full flex flex-col items-center bg-white rounded-[11px]"},ct=t("span",{class:"text-base text-gray-400 font-light mb-5 block"},"سعر البيع للقطعة",-1),dt={class:"relative w-[172px]"},pt=t("div",{class:"absolute top-[1px] left-[1px] h-full flex flex-col bg-white rounded-[11px]"},[t("div",{class:"w-[57px] flex-1 border-s border-s-gray-200 flex items-center justify-center text-xl text-gray-300 font-bold"}," ج.م ")],-1),_t=t("span",{class:"text-base text-gray-400 flex gap-[12px] mt-auto mb-3"},[t("span",null,"الربح من اجمالي السعر"),t("span",{class:"flex items-center gap-[10px] text-primary-300 text-xl"},[r("455 "),t("span",null,"ج.م")])],-1),xt={class:"mt-12 flex items-center gap-7"},mt=t("img",{src:B},null,-1),ut={class:"mb-24"},gt=t("p",{class:"text-gray-700 text-3xl font-normal mb-8"},"وصف المنتج",-1),ft=["innerHTML"],Nt={__name:"[id]",setup(ht){const x=j(),g=d(!0),s=d(null);d([{title:"asasas",header:"assssssss",description:"asasdasda",image:"https://swiperjs.com/demos/images/nature-2.jpg"},{title:"sdddddd",header:"fffffffff",description:"gggggg",image:"https://swiperjs.com/demos/images/nature-3.jpg"}]),function(){console.log(x),q(x.params.id).then(a=>{s.value=a.data.data}).finally(()=>{g.value=!1})}();const o=k({quantity:1,price:""});return C([o,s],()=>{var c;o.price=o.quantity*+((c=s.value)==null?void 0:c.price)}),d(null),(c,a)=>{const f=y,m=v,h=w,b=V;return p(),_("div",null,[F,e(s)?(p(),_(u,{key:0},[t("div",M,[t("div",T,[t("div",U,[t("img",{src:e(s).featured_image,class:"w-[36rem] h-[36rem] object-cover"},null,8,$),t("div",H,[(p(!0),_(u,null,L(e(s).images,(n,bt)=>(p(),_("img",{alt:n.alt_image,src:n.url,class:"w-32 h-32 object-cover"},null,8,P))),256))])]),t("p",R,[r(" تحميل كل صور المنتج "),t("span",null,[l(f,{name:"pepicons-pop:angle-left"})])])]),t("div",E,[t("div",G,[O,t("h1",Q,i(e(s).title),1),t("p",S,[Y,t("span",null,i(e(s).code),1)])]),t("div",z,[t("div",null,[A,t("h6",I,[r(i(e(s).price)+" ",1),J])]),K,t("div",null,[W,t("h6",X,[r(i(e(s).maxCommission)+" ",1),Z])])]),t("div",tt,[et,t("h6",st,[r(i(e(s).orderCount)+" ",1),ot])]),t("div",at,[t("div",nt,[t("div",null,[lt,t("div",it,[l(m,{type:"text",class:"w-[96px] h-[53px] bg-transparent text-xl",modelValue:e(o).quantity,"onUpdate:modelValue":a[0]||(a[0]=n=>e(o).quantity=n),modelModifiers:{number:!0}},null,8,["modelValue"]),t("div",rt,[t("button",{type:"button",class:"w-[24px] flex-1 border-b border-b-gray-200 border-s border-s-gray-200",onClick:a[1]||(a[1]=n=>e(o).quantity++)}," + "),t("button",{type:"button",class:"w-[24px] flex-1 border-s border-s-gray-200",onClick:a[2]||(a[2]=n=>e(o).quantity>1?e(o).quantity--:null)}," - ")])])]),t("div",null,[ct,t("div",dt,[l(m,{type:"text",class:"!w-[172px] h-[53px] bg-transparent text-xl",modelValue:e(o).price,"onUpdate:modelValue":a[3]||(a[3]=n=>e(o).price=n),disabled:!0},null,8,["modelValue"]),pt])]),_t]),t("div",xt,[l(h,{"submit-title":"اطلب الان",class:"w-[232px] h-[67px]"}),l(b,{class:"w-[93px] h-[67px] flex items-center justify-center"},{default:N(()=>[mt]),_:1})])])])]),t("div",ut,[gt,t("div",{class:"bg-white rounded-lg border p-9",innerHTML:e(s).description},null,8,ft)])],64)):D("",!0)])}}};export{Nt as default};
