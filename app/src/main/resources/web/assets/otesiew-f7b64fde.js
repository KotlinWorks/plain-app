import{u as nt,_ as at,a as lt}from"./list-99d8747a.js";import{_ as ct}from"./ieldd-09573248.js";import{_ as ut}from"./ultiselect-7ef9501b.js";import{_ as it,a as rt}from"./label-outline-rounded-beb2cd66.js";import{_ as dt}from"./readcrumb-ccb81e51.js";import{d as _t,q as pt,r as m,u as mt,C as ht,p as bt,D as ft,E as vt,G as gt,H as kt,I as yt,t as L,aK as $t,K as Ct,Z as Vt,aL as wt,L as Tt,M as St,o as c,c as u,e as t,f as _,j as a,F as g,w as i,g as n,l as C,y as qt,N as V,O as At,P as Dt,Q as F,R as Nt,A as I,z as Ut,T as R,U as Bt,B as z,V as E,W as Mt,n as G}from"./inde-e40fd5ce.js";import{n as Qt}from"./list-6498ebd9.js";import{u as Kt,a as Lt,b as Ft}from"./tags-7b5aa66e.js";import"./odal.vuevuetypescriptsetuptruelang-c1337498.js";import"./vee-validate.esm-30412532.js";const It={class:"v-toolbar"},Rt={class:"right-actions"},zt=["title"],Et=["title"],Gt=["onClick"],Ot=["onClick"],Pt={class:"row mb-3"},jt={class:"col-md-3 col-form-label"},Ht={class:"col-md-9"},Wt=["onKeyup"],Zt={class:"row mb-3"},Jt={class:"col-md-3 col-form-label"},Xt={class:"col-md-9"},Yt={class:"actions"},xt=["onClick"],te={class:"table"},ee=t("th",null,"ID",-1),oe=["onClick"],se=["onUpdate:modelValue"],ne=["onClick"],ae={class:"badge"},le={class:"nowrap"},ce={class:"nowrap"},ue={key:0},ie={colspan:"6"},re={class:"no-data-placeholder"},Ce=_t({__name:"NotesView",setup(de){var Q,K;const w=pt(),l=m([]),{t:T}=mt(),r=ht({text:"",tags:[]}),h="NOTE",S=bt().query,b=m(parseInt(((Q=S.page)==null?void 0:Q.toString())??"1")),f=50,v=m(0),d=m(ft(((K=S.q)==null?void 0:K.toString())??"")),q=m(""),{tags:k}=Kt(h,d,r,async e=>{e.push({name:"trash",op:"",value:"false"}),q.value=vt(e),await gt(),j()}),{addToTags:A}=Lt(h,l,k),{removeFromTags:D}=Ft(h,l,k),O=kt(()=>l.value.some(e=>e.checked)),{selectAll:y,toggleSelect:N}=nt(l),{loading:P,load:j,refetch:U}=yt({handle:(e,s)=>{s?L(T(s),"error"):e&&(l.value=e.notes.map($=>({...$,checked:!1})),v.value=e.noteCount)},document:$t,variables:()=>({offset:(b.value-1)*f,limit:f,query:q.value}),appApi:!0});Ct(b,e=>{z(w,`/notes?page=${e}&q=${E(d.value)}`)});const{mutate:H,onDone:W}=Vt({document:wt,appApi:!0});function Z(){const e=l.value.filter(s=>s.checked);if(e.length===0){L(T("select_first"),"error");return}H({ids:e.map(s=>s.id)})}W(()=>{U()});function B(){d.value=Mt(r),M()}function M(){z(w,`/notes?q=${E(d.value)}`)}Tt(()=>{St.on("refetch_by_tag_type",e=>{e===h&&U()})});function J(e){G.push(`/notes/${e.id}`)}function X(){G.push("/notes/create")}return(e,s)=>{const $=dt,Y=it,x=rt,tt=ut,et=at,ot=ct,st=lt;return c(),u(g,null,[t("div",It,[_($,{current:()=>`${e.$t("page_title.notes")} (${v.value})`},null,8,["current"]),t("div",Rt,[a(O)?(c(),u(g,{key:0},[t("button",{type:"button",class:"btn btn-action",onClick:s[0]||(s[0]=i((...o)=>a(A)&&a(A)(...o),["stop"])),title:e.$t("add_to_tags")},[_(Y,{class:"bi"})],8,zt),t("button",{type:"button",class:"btn btn-action",onClick:s[1]||(s[1]=i((...o)=>a(D)&&a(D)(...o),["stop"])),title:e.$t("remove_from_tags")},[_(x,{class:"bi"})],8,Et),t("button",{type:"button",class:"btn btn-action",onClick:i(Z,["stop"])},n(e.$t("move_to_trash")),9,Gt)],64)):C("",!0),t("button",{class:"btn btn-action",type:"button",onClick:i(X,["prevent"])},n(e.$t("create")),9,Ot),_(et,{modelValue:d.value,"onUpdate:modelValue":s[4]||(s[4]=o=>d.value=o),search:M},{filters:qt(()=>[t("div",Pt,[t("label",jt,n(e.$t("keywords")),1),t("div",Ht,[V(t("input",{type:"text","onUpdate:modelValue":s[2]||(s[2]=o=>r.text=o),class:"form-control",onKeyup:Dt(B,["enter"])},null,40,Wt),[[At,r.text]])])]),t("div",Zt,[t("label",Jt,n(e.$t("tags")),1),t("div",Xt,[_(tt,{modelValue:r.tags,"onUpdate:modelValue":s[3]||(s[3]=o=>r.tags=o),label:"name","track-by":"id",options:a(k)},null,8,["modelValue","options"])])]),t("div",Yt,[t("button",{type:"button",class:"btn",onClick:i(B,["stop"])},n(e.$t("search")),9,xt)])]),_:1},8,["modelValue"])])]),t("table",te,[t("thead",null,[t("tr",null,[t("th",null,[V(t("input",{class:"form-check-input",type:"checkbox",onChange:s[5]||(s[5]=(...o)=>a(N)&&a(N)(...o)),"onUpdate:modelValue":s[6]||(s[6]=o=>Nt(y)?y.value=o:null)},null,544),[[F,a(y)]])]),ee,t("th",null,n(e.$t("title")),1),t("th",null,n(e.$t("tags")),1),t("th",null,n(e.$t("updated_at")),1),t("th",null,n(e.$t("created_at")),1)])]),t("tbody",null,[(c(!0),u(g,null,I(l.value,o=>(c(),u("tr",{key:o.id,class:Ut({checked:o.checked}),onClick:i(p=>o.checked=!o.checked,["stop"])},[t("td",null,[V(t("input",{class:"form-check-input",type:"checkbox","onUpdate:modelValue":p=>o.checked=p},null,8,se),[[F,o.checked]])]),t("td",null,[_(ot,{id:o.id,raw:o},null,8,["id","raw"])]),t("td",null,[t("a",{href:"#",onClick:i(p=>J(o),["stop"])},n(o.title||e.$t("no_content")),9,ne)]),t("td",null,[(c(!0),u(g,null,I(o.tags,p=>(c(),u("span",ae,n(p.name),1))),256))]),t("td",le,n(a(R)(o.updatedAt)),1),t("td",ce,n(a(R)(o.createdAt)),1)],10,oe))),128))]),l.value.length?C("",!0):(c(),u("tfoot",ue,[t("tr",null,[t("td",ie,[t("div",re,n(e.$t(a(Qt)(a(P)))),1)])])]))]),v.value>f?(c(),Bt(st,{key:0,modelValue:b.value,"onUpdate:modelValue":s[7]||(s[7]=o=>b.value=o),total:v.value,limit:f},null,8,["modelValue","total"])):C("",!0)],64)}}});export{Ce as default};
