import{G as c}from"./index.91beaf37.js";import{u as i,l as a}from"./entry.6d26f239.js";async function m({url:u,requetOptions:n={}}){const o=typeof window>"u";return{...await c(u,{onRequest({request:t,options:e}){const r=i("token");e.headers=e.headers||{},e.headers.Authorization=`Bearer ${r.value}`,e.headers["Accept-Language"]="ar",e.headers["Content-Language"]="ar",e.headers.Accept="application/json",e.headers.ContentType="application/json"},onRequestError({request:t,options:e,error:r}){console.log("request error",r)},onResponse({request:t,response:e,options:r}){const s=e._data;s&&!o&&r.method!=="GET"&&s!=null&&s.message&&a.success(s==null?void 0:s.message)},onResponseError({response:t}){var r;const e=t._data;e&&!o&&(e!=null&&e.message&&a.error(e==null?void 0:e.message),(r=error.response)==null||r.status)},baseURL:"http://85.31.238.244:3000/v1",method:"get",...n},"$tBViHKxmJe")}}export{m as u};
