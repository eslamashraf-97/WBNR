import{u as l}from"./state.b5e2d2f6.js";import{u as t}from"./entry.6d26f239.js";function c(){const e=t("user"),o=t("token"),u=l("userAuth",()=>e.value);function n(s,a){u.value=s,e.value=s,o.value=a}function r(){u.value=null,e.value=null,o.value=null}return{user:u,setUserData:n,removeUserData:r}}export{c as u};
