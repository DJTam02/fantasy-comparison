import{G as c,b as u}from"./authentication.e40a717e.js";import{a as d,d as l,g as p,b as m}from"./authentication.eda73ae4.js";import{d as _,r as w,h,c as g,b as y,a as f,F as C,j as R,g as b,e as U,o as q}from"./index.baf10488.js";const j=_({__name:"Authenticate",setup(v){const n=R(),r=b(),o=w({password:"",show:!1}),i=()=>{var t,a;console.log(c),console.log(o.password),console.log("grant_type=authorization_code&redirect_uri=oob&code="+n.query.code+"&client_id="+d()+"&client_secret="+l(p(),o.password));const s={grant_type:"authorization_code",redirect_uri:u,code:(a=(t=n.query.code)==null?void 0:t.toString())!=null?a:"",client_id:d(),client_secret:l(p(),o.password)};console.log(Object.keys(s).map(e=>encodeURIComponent(e)+"="+encodeURIComponent(s[e])).join("&")),fetch("/auth"+c,{method:"POST",headers:{Authorization:"Basic "+m(o.password),"Content-Type":"application/x-www-form-urlencoded"},body:Object.keys(s).map(e=>encodeURIComponent(e)+"="+encodeURIComponent(s[e])).join("&"),redirect:"follow"}).then(e=>console.log("resp: ",e)).catch(e=>{console.log(e),r.push("/")})};return h(()=>{console.log(n.query.code),n.query.code||r.push("/")}),(s,t)=>{const a=U("v-text-field");return q(),g(C,null,[y(a,{modelValue:o.password,"onUpdate:modelValue":t[0]||(t[0]=e=>o.password=e),"append-icon":o.show?"mdi-eye":"mdi-eye-off",type:o.show?"text":"password",name:"password",label:"Password","onClick:append":t[1]||(t[1]=e=>o.show=!o.show),placeholder:"Password",variant:"outlined"},null,8,["modelValue","append-icon","type"]),f("button",{onClick:i},"Submit")],64)}}});export{j as default};
