import{_ as M}from"./onacoditor.vuevuetypescriptsetuptruelang-56f9c3d2.js";import{_ as P}from"./ditoolbar.vuevuetypescriptsetuptruelang-9461e700.js";import{_ as S}from"./readcrumb-ccb81e51.js";import{d as j,u as D,r as _,p as T,i as N,t as G,a2 as x,bs as U,Z as O,o as R,c as q,e as Q,f as h,j as B}from"./inde-e40fd5ce.js";import{p as A,g as F}from"./parser-fdd85e1d.js";function l(a){const t=new Float64Array(16);if(a)for(let r=0;r<a.length;++r)t[r]=a[r];return t}function Z(a,t){let r,e=l(),o=l();for(var n=0;n<16;++n)o[n]=t[n];y(o),y(o),y(o);for(let i=0;i<2;++i){e[0]=o[0]-65517;for(var n=1;n<15;++n)e[n]=o[n]-65535-(e[n-1]>>16&1),e[n-1]&=65535;e[15]=o[15]-32767-(e[14]>>16&1),r=e[15]>>16&1,e[14]&=65535,v(o,e,1-r)}for(var n=0;n<16;++n)a[2*n]=o[n]&255,a[2*n+1]=o[n]>>8}function y(a){for(let t=0;t<16;++t)a[(t+1)%16]+=(t<15?1:38)*Math.floor(a[t]/65536),a[t]&=65535}function v(a,t,r){let e,o=~(r-1);for(let n=0;n<16;++n)e=o&(a[n]^t[n]),a[n]^=e,t[n]^=e}function w(a,t,r){for(let e=0;e<16;++e)a[e]=t[e]+r[e]|0}function K(a,t,r){for(let e=0;e<16;++e)a[e]=t[e]-r[e]|0}function s(a,t,r){const e=new Float64Array(31);for(var o=0;o<16;++o)for(let n=0;n<16;++n)e[o+n]+=t[o]*r[n];for(var o=0;o<15;++o)e[o]+=38*e[o+16];for(var o=0;o<16;++o)a[o]=e[o];y(a),y(a)}function z(a,t){const r=l();for(var e=0;e<16;++e)r[e]=t[e];for(var e=253;e>=0;--e)s(r,r,r),e!==2&&e!==4&&s(r,r,t);for(var e=0;e<16;++e)a[e]=r[e]}function C(a){a[31]=a[31]&127|64,a[0]&=248}function H(a){let t,r=new Uint8Array(32);const e=l([1]),o=l([9]),n=l(),i=l([1]),f=l(),g=l(),$=l([56129,1]),V=l([9]);for(var u=0;u<32;++u)r[u]=a[u];C(r);for(var u=254;u>=0;--u)t=r[u>>>3]>>>(u&7)&1,v(e,o,t),v(n,i,t),w(f,e,n),K(e,e,n),w(n,o,i),K(o,o,i),s(i,f,f),s(g,e,e),s(e,n,e),s(n,o,f),w(f,e,n),K(e,e,n),s(o,e,e),K(n,i,g),s(e,n,$),w(e,e,i),s(n,n,e),s(e,i,g),s(i,o,V),s(o,f,f),v(e,o,t),v(n,i,t);return z(n,n),s(e,e,n),Z(r,e),r}function J(){const a=new Uint8Array(32);return crypto.getRandomValues(a),a}function L(){const a=J();return C(a),a}function W(a,t){const r=Uint8Array.from([t[0]>>2&63,(t[0]<<4|t[1]>>4)&63,(t[1]<<2|t[2]>>6)&63,t[2]&63]);for(let e=0;e<4;++e)a[e]=r[e]+65+(25-r[e]>>8&6)-(51-r[e]>>8&75)-(61-r[e]>>8&15)+(62-r[e]>>8&3)}function k(a){let t,r=new Uint8Array(44);for(t=0;t<32/3;++t)W(r.subarray(t*4),a.subarray(t*3));return W(r.subarray(t*4),Uint8Array.from([a[t*3+0],a[t*3+1],0])),r[43]=61,new TextDecoder().decode(r)}const X=()=>{const a=L(),t=H(a);return{publicKey:k(t),privateKey:k(a)}},Y={class:"page-container container"},ee={class:"main"},ie=j({__name:"WireGuardEditView",setup(a){const{t}=D(),r=_(0),o=T().params.id,n=_(""),i=_(""),f=_(!1),g=[{id:"add-peer",label:"Add peer",precondition:null,keybindingContext:null,contextMenuGroupId:"navigation",contextMenuOrder:0,run:function(){var b;const c=A(n.value);c.wgInterface.table="off";const d=((b=c.wgInterface.address)==null?void 0:b[0])??"",m=X(),p=c.peers.length;c.peers.push({name:`Peer ${p+1}`,allowedIps:[d.substring(0,d.lastIndexOf("."))+`.${p+2}/32`],privateKey:m.privateKey,publicKey:m.publicKey}),n.value=F(c)}}];N({handle:(c,d)=>{if(d)G(t(d),"error");else{const m=c.wireGuards.find(p=>p.id===o);if(m){n.value=m.config;const p=A(m.config);i.value=(p==null?void 0:p.wgInterface.name)??"",f.value=m.isEnabled}}},document:x`
    query {
      wireGuards {
        ...WireGuardFragment
      }
    }
    ${U}
  `});const{mutate:$,loading:V,onDone:u}=O({document:x`
    mutation applyWireGuard($id: ID!, $config: String!, $enable: Boolean!) {
      applyWireGuard(id: $id, config: $config, enable: $enable) {
        ...WireGuardFragment
      }
    }
    ${U}
  `});u(()=>{G(t("saved"))});const E=async()=>{if(!n.value)return;const c=A(n.value);c.wgInterface.table="off",n.value=F(c),$({id:o,config:n.value,enable:f.value})};return(c,d)=>{const m=S,p=P,b=M;return R(),q("div",Y,[Q("div",ee,[h(m,{paths:["/wireguard"],current:i.value},null,8,["current"]),h(p,{modelValue:r.value,"onUpdate:modelValue":d[0]||(d[0]=I=>r.value=I),save:E,loading:B(V),tabs:[`/etc/wireguard/${B(o)}.conf`]},null,8,["modelValue","loading","tabs"]),h(b,{language:"ini",height:"700",modelValue:n.value,"onUpdate:modelValue":d[1]||(d[1]=I=>n.value=I),actions:g},null,8,["modelValue"])])])}}});export{ie as default};
