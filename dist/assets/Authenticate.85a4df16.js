import{G as i,b as u}from"./authentication.e40a717e.js";import{a as c,d,g as p,b as m}from"./authentication.eda73ae4.js";import{d as _,r as w,h,c as y,b as g,a as f,F as b,j as C,g as R,e as x,o as q}from"./index.e62716bf.js";const j=_({__name:"Authenticate",setup(T){const n=C(),r=R(),o=w({password:"",show:!1}),l=()=>{var t,a;console.log(i),console.log(o.password),console.log("grant_type=authorization_code&redirect_uri=oob&code="+n.query.code+"&client_id="+c()+"&client_secret="+d(p(),o.password));const s={grant_type:"authorization_code",redirect_uri:u,code:(a=(t=n.query.code)==null?void 0:t.toString())!=null?a:"",client_id:c(),client_secret:d(p(),o.password)};console.log(Object.keys(s).map(e=>encodeURIComponent(e)+"="+encodeURIComponent(s[e])).join("&")),fetch("https://9blo7mhtqd.execute-api.us-east-2.amazonaws.com/Test/proxy",{method:"POST",headers:{Authorization:"Basic "+m(o.password),"Content-Type":"application/x-www-form-urlencoded"},body:Object.keys(s).map(e=>encodeURIComponent(e)+"="+encodeURIComponent(s[e])).join("&")}).then(e=>console.log("resp: ",e)).catch(e=>{console.log(e),r.push("/")})};return h(()=>{console.log(n.query.code),n.query.code||r.push("/")}),(s,t)=>{const a=x("v-text-field");return q(),y(b,null,[g(a,{modelValue:o.password,"onUpdate:modelValue":t[0]||(t[0]=e=>o.password=e),"append-icon":o.show?"mdi-eye":"mdi-eye-off",type:o.show?"text":"password",name:"password",label:"Password","onClick:append":t[1]||(t[1]=e=>o.show=!o.show),placeholder:"Password",variant:"outlined"},null,8,["modelValue","append-icon","type"]),f("button",{onClick:l},"Submit")],64)}}});export{j as default};
