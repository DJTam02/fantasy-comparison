import{R as a,A as r,a as t,b as o}from"./authentication.e40a717e.js";import{d as i,r as _,h as u,c as d,i as p,o as m,g as E}from"./index.4bc4e1fb.js";import{a as n}from"./authentication.eda73ae4.js";const I=i({__name:"Home",setup(R){const e=p("$cookies");E();const s=_({isAuthenticated:(e==null?void 0:e.get(a))&&e.get(r)}),c=()=>{console.log(t+"?response_type=code&redirect_uri="+encodeURIComponent(o)+"&client_id="+n()),window.location.href=t+"?response_type=code&redirect_uri="+encodeURIComponent(o)+"&client_id="+n()};return u(()=>{s.isAuthenticated}),(l,C)=>(m(),d("button",{onClick:c},"Authenticate"))}});export{I as default};