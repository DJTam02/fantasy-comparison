import{G as i,b as u}from"./authentication.e40a717e.js";import{a as c,d,g as p}from"./authentication.4de03b19.js";import{d as m,r as _,h as w,c as h,b as y,a as f,F as g,j as C,g as R,e as b,o as x}from"./index.c1c5baeb.js";const T=m({__name:"Authenticate",setup(q){const n=C(),r=R(),o=_({password:"",show:!1}),l=()=>{var t,a;console.log(i),console.log(o.password),console.log("grant_type=authorization_code&redirect_uri=oob&code="+n.query.code+"&client_id="+c()+"&client_secret="+d(p(),o.password));const s={grant_type:"authorization_code",redirect_uri:u,code:(a=(t=n.query.code)==null?void 0:t.toString())!=null?a:"",client_id:c(),client_secret:d(p(),o.password)};console.log(Object.keys(s).map(e=>encodeURIComponent(e)+"="+encodeURIComponent(s[e])).join("&")),fetch("https://q3qcnfhw9c.execute-api.us-east-2.amazonaws.com/Test/proxy",{method:"POST",headers:{"Content-Type":"application/x-www-form-urlencoded"},body:Object.keys(s).map(e=>encodeURIComponent(e)+"="+encodeURIComponent(s[e])).join("&")}).then(e=>console.log("resp: ",e)).catch(e=>{console.log(e),r.push("/")})};return w(()=>{console.log(n.query.code),n.query.code||r.push("/")}),(s,t)=>{const a=b("v-text-field");return x(),h(g,null,[y(a,{modelValue:o.password,"onUpdate:modelValue":t[0]||(t[0]=e=>o.password=e),"append-icon":o.show?"mdi-eye":"mdi-eye-off",type:o.show?"text":"password",name:"password",label:"Password","onClick:append":t[1]||(t[1]=e=>o.show=!o.show),placeholder:"Password",variant:"outlined"},null,8,["modelValue","append-icon","type"]),f("button",{onClick:l},"Submit")],64)}}});export{T as default};
