import{_}from"./Input.ee62193e.js";import{_ as c}from"./PrimaryButton.3590a7ea.js";import{_ as f}from"./nuxt-link.9b0c7cb7.js";import{u as b}from"./useAuth.b517ff58.js";import{r as V,a as w,E as g,O as x,m as l,P as n,u as t,H as y,Z as h}from"./swiper-vue.cec2437d.js";import{u as v,n as U}from"./entry.6d26f239.js";import{u as k}from"./useRequest.c26dc291.js";import{S}from"./SocialMediaLogin.a95a92b7.js";import{b as B}from"./index.91beaf37.js";import"./LoaderButton.181013ce.js";import"./state.b5e2d2f6.js";import"./useApi.a33fd01d.js";const N=["onSubmit"],O={class:"my-16"},R={class:"mb-7"},q={class:"flex mb-7 gap-4"},C={class:"mb-7"},D={class:"mb-7"},E={class:"mb-7"},L={class:"mb-7"},M={class:"flex gap-4 items-center"},A=n("p",{class:"text-primary-300 cursor-pointer text-2xl"}," لدي حساب بالفعل ",-1),X={__name:"register",setup(H){const{setUserData:m}=b(),o=V({name:"",country_code:"",phone:"",address:"",email:"",password:"",confirm_password:""}),r=w(!1);v("token");async function p(){r.value=!0,await k({url:B,requetOptions:{body:JSON.stringify(o),method:"post",onResponse:({response:d})=>{var a;const e=d._data;m(e.data.user,(a=e.meta)==null?void 0:a.token),U("/home")}}}),r.value=!1}return(d,e)=>{const a=_,i=c,u=f;return g(),x("form",{onSubmit:h(p,["prevent"])},[l(S),n("div",O,[n("div",R,[l(a,{class:"w-full bg-transparent",placeholder:"الاسم",type:"text",modelValue:t(o).name,"onUpdate:modelValue":e[0]||(e[0]=s=>t(o).name=s)},null,8,["modelValue"])]),n("div",q,[l(a,{class:"w-full bg-transparent max-w-[150px]",placeholder:"كود الدولة",type:"text",modelValue:t(o).country_code,"onUpdate:modelValue":e[1]||(e[1]=s=>t(o).country_code=s)},null,8,["modelValue"]),l(a,{class:"w-full bg-transparent",placeholder:"رقم التليفون",type:"text",modelValue:t(o).phone,"onUpdate:modelValue":e[2]||(e[2]=s=>t(o).phone=s)},null,8,["modelValue"])]),n("div",C,[l(a,{class:"w-full bg-transparent",placeholder:"العنوان",type:"text",modelValue:t(o).address,"onUpdate:modelValue":e[3]||(e[3]=s=>t(o).address=s)},null,8,["modelValue"])]),n("div",D,[l(a,{class:"w-full bg-transparent",placeholder:"البريد الالكترونى",type:"email",modelValue:t(o).email,"onUpdate:modelValue":e[4]||(e[4]=s=>t(o).email=s)},null,8,["modelValue"])]),n("div",E,[l(a,{class:"w-full bg-transparent",placeholder:"كلمة المرور",type:"password",modelValue:t(o).password,"onUpdate:modelValue":e[5]||(e[5]=s=>t(o).password=s)},null,8,["modelValue"])]),n("div",L,[l(a,{class:"w-full bg-transparent",placeholder:"تأكيد كلمة المرور",type:"password",modelValue:t(o).confirm_password,"onUpdate:modelValue":e[6]||(e[6]=s=>t(o).confirm_password=s)},null,8,["modelValue"])])]),n("div",M,[l(i,{"submit-title":"استمرار",class:"!bg-primary-200 text-white",type:"submit",loading:t(r)},null,8,["loading"]),l(u,{to:"/auth/login"},{default:y(()=>[A]),_:1})])],40,N)}}};export{X as default};