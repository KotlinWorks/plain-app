import{d as Ie,aq as Ve,q as Te,r as b,u as Se,s as Re,a as Ee,C as ze,p as Ae,D as Ue,E as qe,G as Fe,ar as Me,a4 as De,H as J,an as Y,as as Z,I as Be,t as Ne,at as Le,au as Qe,K as ee,L as xe,M as Ge,o as a,c as u,e,f as d,j as s,F as f,w as _,l as r,U as A,g as l,y as Ke,N as U,O as He,P as Oe,A as q,m as te,Q as se,R as We,z as Pe,W as Xe,B as oe,V as ne,ai as je,av as Je,aa as Ye,ab as Ze,_ as et}from"./inde-e40fd5ce.js";import{u as tt,_ as st,a as ot}from"./list-99d8747a.js";import{_ as nt}from"./ieldd-09573248.js";import{_ as at}from"./ultiselect-7ef9501b.js";import{_ as lt,a as it}from"./grid-view-outline-rounded-df3b0c5f.js";import{_ as ut,a as ct}from"./label-outline-rounded-beb2cd66.js";import{_ as dt}from"./download-rounded-cf14c305.js";import{_ as _t}from"./delete-outline-rounded-5f6a14f2.js";import{_ as rt}from"./readcrumb-ccb81e51.js";import{n as ae}from"./list-6498ebd9.js";import{u as pt,a as mt,b as gt}from"./tags-7b5aa66e.js";import{u as bt,_ as vt}from"./onfirmodal.vuevuetypescriptsetuptruelang-6bf6f55d.js";import"./odal.vuevuetypescriptsetuptruelang-c1337498.js";import"./vee-validate.esm-30412532.js";const le=y=>(Ye("data-v-feafc294"),y=y(),Ze(),y),ht={class:"v-toolbar"},ft={class:"right-actions"},yt=["title"],kt=["title"],wt=["title"],$t=["title"],Ct=["onClick"],It=["onClick"],Vt={class:"row mb-3"},Tt={class:"col-md-3 col-form-label"},St={class:"col-md-9"},Rt=["onKeyup"],Et={class:"row mb-3"},zt={class:"col-md-3 col-form-label"},At={class:"col-md-9"},Ut={class:"actions"},qt=["onClick"],Ft={key:0,class:"row row-cols-6 g-1",style:{"margin-bottom":"24px"}},Mt=["onClick"],Dt=["src"],Bt={class:"duration"},Nt={key:1,class:"table"},Lt=le(()=>e("th",null,"ID",-1)),Qt=le(()=>e("th",null,null,-1)),xt=["onClick"],Gt=["onUpdate:modelValue"],Kt=["src","onClick"],Ht={class:"badge"},Ot={key:0},Wt={colspan:"6"},Pt={class:"no-data-placeholder"},Xt={key:2,class:"no-data-placeholder"},jt=Ie({__name:"ImagesView",setup(y){var P,X,j;const ie=Ve(),F=Te(),c=b([]),{t:M}=Se(),{app:I}=Re(Ee()),p=ze({text:"",tags:[]}),v="IMAGE",V=Ae().query,h=b(parseInt(((P=V.page)==null?void 0:P.toString())??"1")),k=54,w=b(0),m=b(Ue(((X=V.q)==null?void 0:X.toString())??"")),D=b(""),{tags:T}=pt(v,m,p,async o=>{D.value=qe(o),await Fe(),re()}),i=b(((j=V.view)==null?void 0:j.toString())??"grid"),{visible:ue,index:ce,view:B,hide:de}=Me(),{addToTags:N}=mt(v,c,T),{removeFromTags:L}=gt(v,c,T),{deleteItems:Q}=bt(v,c),{downloadItems:x}=De(c,"images.zip"),S=J(()=>c.value.map(o=>({src:Y(o.fileId),name:Z(o.path),duration:0,size:o.size}))),_e=J(()=>c.value.some(o=>o.checked)),{selectAll:R,toggleSelect:G}=tt(c),{loading:K,load:re,refetch:pe}=Be({handle:async(o,n)=>{if(n)Ne(M(n),"error");else if(o){const{fileIdToken:E}=I.value,$=[];for(const C of o.images)$.push({...C,checked:!1,fileId:await Le(E,C.path)});c.value=$,w.value=o.imageCount}},document:Qe,variables:()=>({offset:(h.value-1)*k,limit:k,query:D.value}),appApi:!0});function H(){oe(F,`/images?page=${h.value}&q=${ne(m.value)}&view=${i.value}`)}ee(h,()=>{H()}),ee(i,()=>{H()});function O(){m.value=Xe(p),W()}function W(){oe(F,`/images?q=${ne(m.value)}&view=${i.value}`)}function me(){i.value==="grid"?i.value="list":i.value="grid"}function ge(){ie.push("/files"),je(vt,{message:M("upload_images")})}return xe(()=>{Ge.on("refetch_by_tag_type",o=>{o===v&&pe()})}),(o,n)=>{const E=rt,$=_t,C=dt,be=ut,ve=ct,he=lt,fe=it,ye=at,ke=st,we=nt,$e=ot,Ce=Je;return a(),u(f,null,[e("div",ht,[d(E,{current:()=>`${o.$t("page_title.images")} (${w.value})`},null,8,["current"]),e("div",ft,[s(_e)&&i.value==="list"?(a(),u(f,{key:0},[e("button",{type:"button",class:"btn btn-action",onClick:n[0]||(n[0]=_((...t)=>s(Q)&&s(Q)(...t),["stop"])),title:o.$t("delete")},[d($,{class:"bi"})],8,yt),e("button",{type:"button",class:"btn btn-action",onClick:n[1]||(n[1]=_((...t)=>s(x)&&s(x)(...t),["stop"])),title:o.$t("download")},[d(C,{class:"bi"})],8,kt),e("button",{type:"button",class:"btn btn-action",onClick:n[2]||(n[2]=_((...t)=>s(N)&&s(N)(...t),["stop"])),title:o.$t("add_to_tags")},[d(be,{class:"bi"})],8,wt),e("button",{type:"button",class:"btn btn-action",onClick:n[3]||(n[3]=_((...t)=>s(L)&&s(L)(...t),["stop"])),title:o.$t("remove_from_tags")},[d(ve,{class:"bi"})],8,$t)],64)):r("",!0),e("button",{type:"button",class:"btn btn-action",onClick:_(me,["stop"])},[i.value==="list"?(a(),A(he,{key:0,class:"bi"})):r("",!0),i.value==="grid"?(a(),A(fe,{key:1,class:"bi"})):r("",!0)],8,Ct),e("button",{type:"button",class:"btn btn-action",onClick:_(ge,["stop"])},l(o.$t("upload")),9,It),d(ke,{modelValue:m.value,"onUpdate:modelValue":n[6]||(n[6]=t=>m.value=t),search:W},{filters:Ke(()=>[e("div",Vt,[e("label",Tt,l(o.$t("keywords")),1),e("div",St,[U(e("input",{type:"text","onUpdate:modelValue":n[4]||(n[4]=t=>p.text=t),class:"form-control",onKeyup:Oe(O,["enter"])},null,40,Rt),[[He,p.text]])])]),e("div",Et,[e("label",zt,l(o.$t("tags")),1),e("div",At,[d(ye,{modelValue:p.tags,"onUpdate:modelValue":n[5]||(n[5]=t=>p.tags=t),label:"name","track-by":"id",options:s(T)},null,8,["modelValue","options"])])]),e("div",Ut,[e("button",{type:"button",class:"btn",onClick:_(O,["stop"])},l(o.$t("search")),9,qt)])]),_:1},8,["modelValue"])])]),i.value==="grid"?(a(),u("div",Ft,[(a(!0),u(f,null,q(s(S),(t,z)=>(a(),u("div",{class:"col",onClick:g=>s(B)(z)},[e("img",{class:"image",src:t.src+"&w=200&h=200"},null,8,Dt),e("span",Bt,l(s(te)(t.size)),1)],8,Mt))),256))])):r("",!0),i.value==="list"?(a(),u("table",Nt,[e("thead",null,[e("tr",null,[e("th",null,[U(e("input",{class:"form-check-input",type:"checkbox",onChange:n[7]||(n[7]=(...t)=>s(G)&&s(G)(...t)),"onUpdate:modelValue":n[8]||(n[8]=t=>We(R)?R.value=t:null)},null,544),[[se,s(R)]])]),Lt,Qt,e("th",null,l(o.$t("name")),1),e("th",null,l(o.$t("tags")),1),e("th",null,l(o.$t("file_size")),1)])]),e("tbody",null,[(a(!0),u(f,null,q(c.value,(t,z)=>(a(),u("tr",{key:t.id,class:Pe({checked:t.checked}),onClick:_(g=>t.checked=!t.checked,["stop"])},[e("td",null,[U(e("input",{class:"form-check-input",type:"checkbox","onUpdate:modelValue":g=>t.checked=g},null,8,Gt),[[se,t.checked]])]),e("td",null,[d(we,{id:t.id,raw:t},null,8,["id","raw"])]),e("td",null,[e("img",{src:s(Y)(t.fileId)+"&w=200&h=200",width:"50",height:"50",onClick:_(g=>s(B)(z),["stop"])},null,8,Kt)]),e("td",null,l(s(Z)(t.path)),1),e("td",null,[(a(!0),u(f,null,q(t.tags,g=>(a(),u("span",Ht,l(g.name),1))),256))]),e("td",null,l(s(te)(t.size)),1)],10,xt))),128))]),c.value.length?r("",!0):(a(),u("tfoot",Ot,[e("tr",null,[e("td",Wt,[e("div",Pt,l(o.$t(s(ae)(s(K),s(I).permissions,"WRITE_EXTERNAL_STORAGE"))),1)])])]))])):r("",!0),i.value==="grid"&&s(S).length===0?(a(),u("div",Xt,l(o.$t(s(ae)(s(K),s(I).permissions,"WRITE_EXTERNAL_STORAGE"))),1)):r("",!0),w.value>k?(a(),A($e,{key:3,modelValue:h.value,"onUpdate:modelValue":n[9]||(n[9]=t=>h.value=t),total:w.value,limit:k},null,8,["modelValue","total"])):r("",!0),d(Ce,{visible:s(ue),index:s(ce),sources:s(S),onHide:s(de)},null,8,["visible","index","sources","onHide"])],64)}}});const rs=et(jt,[["__scopeId","data-v-feafc294"]]);export{rs as default};
