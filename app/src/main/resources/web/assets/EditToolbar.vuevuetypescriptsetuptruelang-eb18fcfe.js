import{d as v,r as b,o,c as l,a as r,F as m,v as p,s as y,e as c}from"./index-89decb33.js";const f={class:"v-toolbar"},g={class:"v-tabs"},h=["onClick"],k=["disabled"],F=v({__name:"EditToolbar",props:{modelValue:{type:Number,default:0},save:{type:Function},loading:{type:Boolean},tabs:{type:Array,default:()=>[]}},emits:["update:modelValue"],setup(e,{emit:d}){const n=b(e.modelValue);function u(t){n.value=t,d("update:modelValue",t)}return(t,i)=>(o(),l("div",f,[r("ul",g,[(o(!0),l(m,null,p(e.tabs,(a,s)=>(o(),l("li",{key:s,onClick:V=>u(s),class:y({active:n.value===s})},c(a.startsWith("t:")?t.$t(a.slice(2)):a),11,h))),128))]),r("button",{type:"button",disabled:e.loading,class:"btn right-actions",onClick:i[0]||(i[0]=(...a)=>e.save&&e.save(...a))},c(t.$t(e.loading?"saving":"save")),9,k)]))}});export{F as _};
