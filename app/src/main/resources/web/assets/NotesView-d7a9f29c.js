import{u as st,a as nt,b as at,c as lt,_ as ct,d as it}from"./list-e7ef4cf1.js";import{_ as ut}from"./FieldId-da304ce7.js";import{_ as rt}from"./Multiselect-90c04a89.js";import{_ as dt}from"./Dropdown.vuevuetypescriptsetuptruelang-172ac0f4.js";import{_ as pt}from"./Breadcrumb-23f5606f.js";import{d as _t,n as mt,r as _,u as ht,A as ft,m as vt,B as gt,C as bt,D as kt,t as M,av as yt,G as $t,U as wt,aw as Vt,H as Ct,I as Tt,o as c,c as r,a as t,b as m,w as b,e as n,q as St,J as w,K as qt,L as At,j as a,M as Q,N as Dt,F as V,v as I,s as Nt,P as F,g as K,Q as Ut,x as L,R as x,l as R}from"./index-89decb33.js";import{b as Bt,a as Mt}from"./search-0684184d.js";import{n as Qt}from"./list-6498ebd9.js";import"./VModal.vuevuetypescriptsetuptruelang-6d140002.js";import"./vee-validate.esm-09f61400.js";import"./baseIndexOf-70b929c6.js";const It={class:"v-toolbar"},Ft={class:"right-actions"},Kt=["onClick"],Lt={class:"row mb-3"},xt={class:"col-md-3 col-form-label"},Rt={class:"col-md-9"},Gt=["onKeyup"],zt={class:"row mb-3"},Et={class:"col-md-3 col-form-label"},Pt={class:"col-md-9"},jt={class:"actions"},Ht=["onClick"],Jt={class:"table"},Ot=t("th",null,"ID",-1),Wt=["onClick"],Xt=["onUpdate:modelValue"],Yt=["onClick"],Zt={class:"badge"},te={class:"nowrap"},ee={class:"nowrap"},oe={key:0},se={colspan:"6"},ne={class:"no-data-placeholder"},ge=_t({__name:"NotesView",setup(ae){var U,B;const C=mt(),l=_([]),{t:d}=ht(),i=ft({text:"",tags:[]}),h="NOTE",T=vt().query,f=_(parseInt(((U=T.page)==null?void 0:U.toString())??"1")),v=50,g=_(0),u=_(gt(((B=T.q)==null?void 0:B.toString())??"")),S=_(""),{tags:k}=st(h,u,i,async e=>{e.push({name:"trash",op:"",value:"false"}),S.value=Bt(e),await bt(),j()}),{addToTags:G}=nt(h,l,k),{removeFromTags:z}=at(h,l,k),E=[{text:d("add_to_tags"),click:G},{text:d("remove_from_tags"),click:z},{text:d("move_to_trash"),click:O}],{selectAll:y,toggleSelect:q}=lt(l),{loading:P,load:j,refetch:A}=kt({handle:(e,s)=>{s?M(d(s),"error"):e&&(l.value=e.notes.map($=>({...$,checked:!1})),g.value=e.noteCount)},document:yt,variables:()=>({offset:(f.value-1)*v,limit:v,query:S.value}),appApi:!0});$t(f,e=>{L(C,`/notes?page=${e}&q=${x(u.value)}`)});const{mutate:H,onDone:J}=wt({document:Vt,appApi:!0});function O(){const e=l.value.filter(s=>s.checked);if(e.length===0){M(d("select_first"),"error");return}H({ids:e.map(s=>s.id)})}J(()=>{A()});function D(){u.value=Mt(i),N()}function N(){L(C,`/notes?q=${x(u.value)}`)}Ct(()=>{Tt.on("refetch_by_tag_type",e=>{e===h&&A()})});function W(e){R.push(`/notes/${e.id}`)}function X(){R.push("/notes/create")}return(e,s)=>{const $=pt,Y=dt,Z=rt,tt=ct,et=ut,ot=it;return c(),r(V,null,[t("div",It,[m($,{current:()=>`${e.$t("page_title.notes")} (${g.value})`},null,8,["current"]),t("div",Ft,[t("button",{class:"btn btn-action",type:"button",onClick:b(X,["prevent"])},n(e.$t("create")),9,Kt),m(Y,{title:e.$t("actions"),items:E},null,8,["title"]),m(tt,{modelValue:u.value,"onUpdate:modelValue":s[2]||(s[2]=o=>u.value=o),search:N},{filters:St(()=>[t("div",Lt,[t("label",xt,n(e.$t("keywords")),1),t("div",Rt,[w(t("input",{type:"text","onUpdate:modelValue":s[0]||(s[0]=o=>i.text=o),class:"form-control",onKeyup:At(D,["enter"])},null,40,Gt),[[qt,i.text]])])]),t("div",zt,[t("label",Et,n(e.$t("tags")),1),t("div",Pt,[m(Z,{modelValue:i.tags,"onUpdate:modelValue":s[1]||(s[1]=o=>i.tags=o),label:"name","track-by":"id",options:a(k)},null,8,["modelValue","options"])])]),t("div",jt,[t("button",{type:"button",class:"btn",onClick:b(D,["stop"])},n(e.$t("search")),9,Ht)])]),_:1},8,["modelValue"])])]),t("table",Jt,[t("thead",null,[t("tr",null,[t("th",null,[w(t("input",{class:"form-check-input",type:"checkbox",onChange:s[3]||(s[3]=(...o)=>a(q)&&a(q)(...o)),"onUpdate:modelValue":s[4]||(s[4]=o=>Dt(y)?y.value=o:null)},null,544),[[Q,a(y)]])]),Ot,t("th",null,n(e.$t("title")),1),t("th",null,n(e.$t("tags")),1),t("th",null,n(e.$t("updated_at")),1),t("th",null,n(e.$t("created_at")),1)])]),t("tbody",null,[(c(!0),r(V,null,I(l.value,o=>(c(),r("tr",{key:o.id,class:Nt({checked:o.checked}),onClick:b(p=>o.checked=!o.checked,["stop"])},[t("td",null,[w(t("input",{class:"form-check-input",type:"checkbox","onUpdate:modelValue":p=>o.checked=p},null,8,Xt),[[Q,o.checked]])]),t("td",null,[m(et,{id:o.id,raw:o},null,8,["id","raw"])]),t("td",null,[t("a",{href:"#",onClick:b(p=>W(o),["stop"])},n(o.title||e.$t("no_content")),9,Yt)]),t("td",null,[(c(!0),r(V,null,I(o.tags,p=>(c(),r("span",Zt,n(p.name),1))),256))]),t("td",te,n(a(F)(o.updatedAt)),1),t("td",ee,n(a(F)(o.createdAt)),1)],10,Wt))),128))]),l.value.length?K("",!0):(c(),r("tfoot",oe,[t("tr",null,[t("td",se,[t("div",ne,n(e.$t(a(Qt)(a(P)))),1)])])]))]),g.value>v?(c(),Ut(ot,{key:0,modelValue:f.value,"onUpdate:modelValue":s[5]||(s[5]=o=>f.value=o),total:g.value,limit:v},null,8,["modelValue","total"])):K("",!0)],64)}}});export{ge as default};
