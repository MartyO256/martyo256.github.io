import{d as A,e as E,a as f,t as p}from"./disclose-version.QN4v9ZJS.js";import{d as H,h as M,i as N,w as I,q as T,O as V,W as Y,V as z,e as B,j as F,M as G,p as J,a as K,f as W,s as a,t as _,$ as L}from"./runtime.DTVI1pbe.js";import{h as P}from"./svelte-head.CJVK6eTh.js";import{i as q}from"./if.DTcOB8ta.js";import{s as r}from"./attributes.Cc0WuGpn.js";import{s as Q,a as U}from"./store.rKWODdb6.js";import{p as X}from"./stores.BT5LNk38.js";function Z(h,t,v,d,u){var i=h,o="",n;H(()=>{if(o===(o=t())){M&&N();return}n!==void 0&&(G(n),n=void 0),o!==""&&(n=I(()=>{if(M){T.data;for(var e=N(),s=e;e!==null&&(e.nodeType!==8||e.data!=="");)s=e,e=V(e);if(e===null)throw Y(),z;A(T,s),i=B(e);return}var l=o+"",m=E(l);A(F(m),m.lastChild),i.before(m)}))})}var x=p('<meta property="og:image">'),$=p('<meta name="twitter:card" content="summary_large_image"> <meta name="twitter:image"> <!>',1),tt=p('<meta name="description"> <meta property="og:site_name"> <meta property="og:url"> <meta property="og:type" content="website"> <meta property="og:title"> <meta property="og:description"> <!> <meta property="twitter:domain"> <meta property="twitter:url"> <meta name="twitter:title"> <meta name="twitter:description"> <!>',1);function st(h,t){J(t,!0);const v=Q(),d=()=>U(X,"$page",v),u="martyo256.github.io",i="https://www.martyo256.github.io",o="Marc-Antoine Ouimet";P(n=>{var e=tt(),s=W(e),l=a(s,2);r(l,"content",o);var m=a(l,2);_(()=>r(m,"content",`${i??""}${d().url.pathname.toString()??""}`));var y=a(m,4),w=a(y,2),b=a(w,2);q(b,()=>t.image,g=>{var c=x();_(()=>r(c,"content",t.image)),f(g,c)});var O=a(b,2);r(O,"content",u);var R=a(O,2);_(()=>r(R,"content",`${i??""}${d().url.pathname.toString()??""}`));var S=a(R,2),k=a(S,2),C=a(k,2);q(C,()=>t.image,g=>{var c=$(),j=a(W(c),2),D=a(j,2);Z(D,()=>`  <script type="application/ld+json">{
   "@context": "https://schema.org",
   "@type": "Website",
   "name": "${t.title}",
   "url": "${i}${d().url.pathname}",
   "logo": ${t.image}  }<\/script>`,!1,!1),_(()=>r(j,"content",t.image)),f(g,c)}),_(()=>{L.title=t.title,r(s,"content",t.description),r(y,"content",t.title),r(w,"content",t.description),r(S,"content",t.title),r(k,"content",t.description)}),f(n,e)}),K()}export{st as S,Z as h};