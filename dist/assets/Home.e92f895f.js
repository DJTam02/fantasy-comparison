import{R as s,A as a,V as c,a as r,b as i,c as _,f as E,H as d,h as l}from"./authentication.59782fc9.js";import{d as u,r as m,h,c as C,i as R,o as g,g as p}from"./index.49e799be.js";const O=u({__name:"Home",setup(f){const e=R("$cookies");p();const o=m({isAuthenticated:(e==null?void 0:e.get(s))&&e.get(a)}),n=()=>{const t=l();console.log(t),sessionStorage.setItem(c,t),window.location.href=r+"?response_type=code&redirect_uri="+encodeURIComponent(i)+"&client_id="+_()+"&code_challenge="+E(t)+"&code_challenge_method="+d};return h(()=>{o.isAuthenticated}),(t,A)=>(g(),C("button",{onClick:n},"Authenticate"))}});export{O as default};
