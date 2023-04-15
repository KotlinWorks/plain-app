import{u as mt,a as ht,b as ft,c as yt,_ as gt,d as vt}from"./list-e7ef4cf1.js";import{U as O,al as bt,u as W,I as V,t as R,r as m,am as kt,d as $t,n as Tt,y as Vt,z as Ct,A as wt,ad as F,m as At,B as St,C as Dt,ab as It,D as Rt,an as Ut,G as qt,H as Lt,o as d,c as r,a as t,b as v,w as T,e as a,q as Mt,J as S,K as Qt,L as Bt,j as n,M as N,N as xt,F as D,v as P,s as zt,f as Ft,Q as E,g as I,W as Nt,k as Pt,x as G,R as K,a4 as Et,ao as Gt}from"./index-89decb33.js";import{_ as Kt}from"./FieldId-da304ce7.js";import{_ as Ot}from"./Multiselect-90c04a89.js";import{_ as Wt}from"./Dropdown.vuevuetypescriptsetuptruelang-172ac0f4.js";import{_ as jt}from"./Breadcrumb-23f5606f.js";import{b as Ht,a as Jt}from"./search-0684184d.js";import{n as Xt}from"./list-6498ebd9.js";import{u as Yt,_ as Zt}from"./ConfirmModal.vuevuetypescriptsetuptruelang-57180c2e.js";import"./VModal.vuevuetypescriptsetuptruelang-6d140002.js";import"./vee-validate.esm-09f61400.js";import"./baseIndexOf-70b929c6.js";const te=h=>{const{mutate:p,loading:l,onDone:u}=O({document:bt,appApi:!0}),{t:i}=W();return u(()=>{V.emit("refetch_app"),R(i("added_to_playlist"))}),{loading:l,addToPlaylist:()=>{const c=h.value.filter(f=>f.checked);if(c.length===0){R(i("select_first"),"error");return}p({paths:c.map(f=>f.path)})}}},ee=()=>{const h=m(""),{mutate:p,loading:l,onDone:u}=O({document:kt,appApi:!0});return u(()=>{V.emit("refetch_app"),V.emit("play_audio")}),{loading:l,playing:h,play:i=>{h.value=i.path,p({path:i.path})}}},oe={class:"v-toolbar"},se={class:"right-actions"},ae=["onClick"],ne={class:"row mb-3"},le={class:"col-md-3 col-form-label"},ue={class:"col-md-9"},ie=["onKeyup"],ce={class:"row mb-3"},de={class:"col-md-3 col-form-label"},re={class:"col-md-9"},pe={class:"actions"},_e=["onClick"],me={class:"table"},he=t("th",null,"ID",-1),fe=["onClick"],ye=["onUpdate:modelValue"],ge={key:0,class:"spinner spinner-sm"},ve={class:"badge"},be={key:0},ke={colspan:"7"},$e={class:"no-data-placeholder"},Qe=$t({__name:"AudiosView",setup(h){var B,x;const p=Tt(),l=m([]),{t:u}=W(),{app:i}=Vt(Ct()),c=wt({text:"",tags:[]}),f=F(()=>i.value.audios??[]),j=F(()=>{const o=i.value.audioCurrent;return f.value.find(s=>s.path==o)}),y="AUDIO",U=At().query,b=m(parseInt(((B=U.page)==null?void 0:B.toString())??"1")),k=50,$=m(0),_=m(St(((x=U.q)==null?void 0:x.toString())??"")),q=m(""),{tags:C}=mt(y,_,c,async o=>{q.value=Ht(o),await Dt(),nt()}),{addToPlaylist:H}=te(l),{addToTags:J}=ht(y,l,C),{removeFromTags:X}=ft(y,l,C),{deleteItems:Y}=Yt(y,l),Z=It(),{play:tt,playing:et,loading:ot}=ee(),st=[{text:u("add_to_playlist"),click:H},{text:u("add_to_tags"),click:J},{text:u("remove_from_tags"),click:X},{text:u("delete"),click:Y}],{selectAll:w,toggleSelect:L}=yt(l),{loading:at,load:nt,refetch:lt}=Rt({handle:(o,s)=>{s?R(u(s),"error"):o&&(l.value=o.audios.map(A=>({...A,checked:!1})),$.value=o.audioCount)},document:Ut,variables:()=>({offset:(b.value-1)*k,limit:k,query:q.value}),appApi:!0});qt(b,o=>{G(p,`/audios?page=${o}&q=${K(_.value)}`)});function ut(){Z.push("/files"),Et(Zt,{message:u("upload_audios")})}function M(){_.value=Jt(c),Q()}function Q(){G(p,`/audios?q=${K(_.value)}`)}return Lt(()=>{V.on("refetch_by_tag_type",o=>{o===y&&lt()})}),(o,s)=>{const A=jt,it=Wt,ct=Ot,dt=gt,rt=Kt,pt=Gt,_t=vt;return d(),r(D,null,[t("div",oe,[v(A,{current:()=>`${o.$t("page_title.audios")} (${$.value})`},null,8,["current"]),t("div",se,[t("button",{type:"button",class:"btn btn-action",onClick:T(ut,["stop"])},a(o.$t("upload")),9,ae),v(it,{title:o.$t("actions"),items:st},null,8,["title"]),v(dt,{modelValue:_.value,"onUpdate:modelValue":s[2]||(s[2]=e=>_.value=e),search:Q},{filters:Mt(()=>[t("div",ne,[t("label",le,a(o.$t("keywords")),1),t("div",ue,[S(t("input",{type:"text","onUpdate:modelValue":s[0]||(s[0]=e=>c.text=e),class:"form-control",onKeyup:Bt(M,["enter"])},null,40,ie),[[Qt,c.text]])])]),t("div",ce,[t("label",de,a(o.$t("tags")),1),t("div",re,[v(ct,{modelValue:c.tags,"onUpdate:modelValue":s[1]||(s[1]=e=>c.tags=e),label:"name","track-by":"id",options:n(C)},null,8,["modelValue","options"])])]),t("div",pe,[t("button",{type:"button",class:"btn",onClick:T(M,["stop"])},a(o.$t("search")),9,_e)])]),_:1},8,["modelValue"])])]),t("table",me,[t("thead",null,[t("tr",null,[t("th",null,[S(t("input",{class:"form-check-input",type:"checkbox",onChange:s[3]||(s[3]=(...e)=>n(L)&&n(L)(...e)),"onUpdate:modelValue":s[4]||(s[4]=e=>xt(w)?w.value=e:null)},null,544),[[N,n(w)]])]),he,t("th",null,a(o.$t("name")),1),t("th",null,a(o.$t("artist")),1),t("th",null,a(o.$t("tags")),1),t("th",null,a(o.$t("duration")),1),t("th",null,a(o.$t("file_size")),1)])]),t("tbody",null,[(d(!0),r(D,null,P(l.value,e=>{var z;return d(),r("tr",{key:e.id,class:zt({checked:e.checked}),onClick:T(g=>e.checked=!e.checked,["stop"])},[t("td",null,[S(t("input",{class:"form-check-input",type:"checkbox","onUpdate:modelValue":g=>e.checked=g},null,8,ye),[[N,e.checked]])]),t("td",null,[v(rt,{id:e.id,raw:e},null,8,["id","raw"])]),t("td",null,[Ft(a(e.title)+" ",1),n(ot)&&e.path===n(et)?(d(),r("i",ge)):e.path!==((z=n(j))==null?void 0:z.path)?(d(),E(pt,{key:1,class:"bi bi-btn",onClick:T(g=>n(tt)(e),["stop"])},null,8,["onClick"])):I("",!0)]),t("td",null,a(e.artist),1),t("td",null,[(d(!0),r(D,null,P(e.tags,g=>(d(),r("span",ve,a(g.name),1))),256))]),t("td",null,a(n(Nt)(e.duration)),1),t("td",null,a(n(Pt)(e.size)),1)],10,fe)}),128))]),l.value.length?I("",!0):(d(),r("tfoot",be,[t("tr",null,[t("td",ke,[t("div",$e,a(o.$t(n(Xt)(n(at),n(i).permissions,"WRITE_EXTERNAL_STORAGE"))),1)])])]))]),$.value>k?(d(),E(_t,{key:0,modelValue:b.value,"onUpdate:modelValue":s[5]||(s[5]=e=>b.value=e),total:$.value,limit:k},null,8,["modelValue","total"])):I("",!0)],64)}}});export{Qe as default};
