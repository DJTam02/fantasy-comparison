import{R as a,A as s,a as c,b as r}from"./authentication.e40a717e.js";import{d as i,r as m,h as u,c as _,i as p,o as d,g as l}from"./index.8a01ad82.js";import{a as h}from"./authentication.eda73ae4.js";const g=i({__name:"Home",setup(E){const e=p("$cookies");l();const o=m({isAuthenticated:(e==null?void 0:e.get(a))&&e.get(s)}),n=()=>{console.log(c+"?response_type=code&redirect_uri="+encodeURIComponent(r)+"&client_id="+h()),fetch("https://9blo7mhtqd.execute-api.us-east-2.amazonaws.com/Test",{method:"POST",headers:{"Content-Type":"application/x-www-form-urlencoded"}}).then(t=>console.log(t)).catch(t=>console.log(t))};return u(()=>{o.isAuthenticated}),(t,C)=>(d(),_("button",{onClick:n},"Authenticate"))}});export{g as default};