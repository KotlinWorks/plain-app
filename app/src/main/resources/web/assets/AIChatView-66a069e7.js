import{d as U,n as j,u as J,m as O,r as c,y as P,z as W,i as X,t as Y,C as $,az as Z,U as D,aA as ee,au as te,aB as ae,H as se,I as ne,o as r,c as p,a as n,b as y,q as v,j as i,F as oe,v as ie,e as d,aC as A,g as V,Q as le,O as z,aD as B,J as ce,K as re,L as H,w as k,a5 as de,aE as ue,_ as _e}from"./index-89decb33.js";import{g as Q,M as pe}from"./splitpanes.es-efb2aff2.js";import{u as ve}from"./markdown-db3c066a.js";const me={class:"page-container container"},he={class:"main"},fe={key:0,class:"date"},ye={class:"chat-title"},Ce={class:"name"},ge=["title"],we={class:"menu-items"},Ae=["onClick","disabled"],ke={key:2,class:"chat-title"},Me={class:"name"},Ie=["title"],be=["innerHTML"],Te={key:0,class:"chat-item replying"},Le={class:"chat-title"},$e={class:"name"},De=["innerHTML"],Ve=["placeholder","onKeydown"],ze=["onClick"],Be=U({__name:"AIChatView",setup(He){const S=j(),{t:x}=J(),K=O(),l=c(K.params.id),u=c(""),_=c([]),m=c(!1),h=c(""),C=c(""),{app:N}=P(W()),M=c(),{render:f}=ve(N);function g(){return l.value==="create"}function R(e,a){let s=!1;if(a==0)s=!0;else{const o=a>0?_.value[a-1]:null;o!=null&&A(o.createdAt)!==A(e.createdAt)&&(s=!0)}return s}g()||X({handle:async(e,a)=>{if(a)Y(x(a),"error");else{const s=[];s.push({...e.aiChat,md:await f(e.aiChat.content)});for(const o of e.aiChats)s.push({...o,md:await f(o.content)});_.value=s,await $(),T()}},document:Z,variables:()=>({id:l.value,query:`parent_id:${l.value} sort:created_at-asc`}),appApi:!0});const{mutate:I,onDone:F}=D({document:ee,appApi:!0});function b(){!u.value||m.value||I({id:g()?"":l.value,message:u.value,isMe:!0})}F(async e=>{var s;const a=e.data.createAIChat;if(a){for(let t of a)(s=_.value)==null||s.push({...t,md:await f(t.content)});g()&&(l.value=a[0].id,te(S,`/aichats/${l.value}`)),u.value="",m.value=!m.value,h.value="",C.value='<span class="blinking-cursor"></span>',await $(),T()}});function T(){const e=M.value;e&&(e.scrollTop=e.scrollHeight)}const w=c(""),{mutate:G,loading:q}=D({document:ae,options:{update:e=>{var s,o;e.evict({id:e.identify({__typename:"AIChat",id:w.value})});const a=(s=_.value)==null?void 0:s.findIndex(t=>t.id===w.value);a!==null&&((o=_.value)==null||o.splice(a,1))}},appApi:!0});function E(e){w.value=e,G({ids:[e]})}return se(()=>{ne.on("ai_chat_replied",async e=>{e.parentId===l.value&&(h.value+=e.content,C.value=await f(h.value+'<span class="blinking-cursor"></span>'),e.finishReason==="stop"&&I({id:l.value,message:h.value,isMe:!1}))})}),(e,a)=>{const s=de,o=ue;return r(),p("div",me,[n("div",he,[y(i(pe),{class:"chat-container",horizontal:""},{default:v(()=>[y(i(Q),{size:"80"},{default:v(()=>[n("div",{class:"chat-items",ref_key:"scrollContainer",ref:M},[(r(!0),p(oe,null,ie(_.value,(t,L)=>(r(),p("div",{key:t.id,class:"chat-item"},[R(t,L)?(r(),p("div",fe,d(i(A)(t.createdAt)),1)):V("",!0),L>0?(r(),le(s,{key:1},{content:v(()=>[n("ul",we,[n("li",{class:"dropdown-item",onClick:Qe=>E(t.id),disabled:i(q)},d(e.$t("delete_message")),9,Ae)])]),default:v(()=>[n("div",ye,[n("span",Ce,d(e.$t(t.isMe?"me":"ai")),1),n("span",{class:"time",title:i(z)(t.createdAt)},d(i(B)(t.createdAt)),9,ge)])]),_:2},1024)):(r(),p("div",ke,[n("span",Me,d(e.$t(t.isMe?"me":"ai")),1),n("span",{class:"time",title:i(z)(t.createdAt)},d(i(B)(t.createdAt)),9,Ie)])),n("div",{class:"chat-content md-container",innerHTML:t.md},null,8,be)]))),128)),m.value?(r(),p("div",Te,[n("div",Le,[n("span",$e,d(e.$t("ai")),1)]),n("div",{class:"chat-content md-container",innerHTML:C.value},null,8,De)])):V("",!0)],512)]),_:1}),y(i(Q),{class:"chat-input",size:"10","min-size":"5"},{default:v(()=>[ce(n("textarea",{"onUpdate:modelValue":a[0]||(a[0]=t=>u.value=t),class:"form-control",autocomplete:"off",placeholder:e.$t("chat_input_hint"),onKeydown:[H(k(b,["exact","prevent"]),["enter"]),a[1]||(a[1]=H(k(t=>u.value+=`
`,["shift","exact","prevent"]),["enter"]))]},null,40,Ve),[[re,u.value]]),n("i",{class:"bi bi-btn",onClick:k(b,["stop"])},[y(o)],8,ze)]),_:1})]),_:1})])])}}});const Ne=_e(Be,[["__scopeId","data-v-70e7ade5"]]);export{Ne as default};
