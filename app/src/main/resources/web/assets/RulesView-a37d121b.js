import{_ as ce}from"./FieldId-da304ce7.js";import{_ as re}from"./Breadcrumb-23f5606f.js";import{d as ae,A as ue,r as N,u as le,U as j,a1 as O,be as C,bf as pe,Z as me,G as _e,$ as H,o as c,Q as fe,q as F,a as e,e as n,J as f,bg as A,c as r,F as y,v as w,j as d,a3 as R,N as W,K as x,b as T,g as J,a5 as ve,i as ge,t as he,Y as L,bh as be,bi as $e,M as ke,O as ee,P as te,w as oe,X as B}from"./index-89decb33.js";import{T as b,a as $,_ as ye,A as we}from"./question-mark-rounded-54bfafc8.js";import{_ as Ce}from"./DeleteConfirm.vuevuetypescriptsetuptruelang-5ca1a67e.js";import{_ as Ve}from"./VModal.vuevuetypescriptsetuptruelang-6d140002.js";import{u as Fe,a as Ae}from"./vee-validate.esm-09f61400.js";import"./stringToArray-ce29ac4f.js";import"./baseIndexOf-70b929c6.js";const Ne={class:"row"},Te={class:"col-md-3 col-form-label"},De={class:"col-md-9 form-checks"},Ie={class:"form-check form-check-inline"},Me={class:"form-check-label",for:"action-allow"},Ue={class:"form-check form-check-inline"},qe={class:"form-check-label",for:"action-block"},Ee={class:"row mb-2"},Se={for:"action",class:"col-md-3 col-form-label"},Oe={class:"col-md-9 form-checks"},Re={class:"form-check form-check-inline"},Je={class:"form-check-label",for:"direction-inbound"},Le={class:"form-check form-check-inline"},Be={class:"form-check-label",for:"direction-outbound"},je={class:"row mb-3"},Qe={class:"col-md-3 col-form-label"},Ge={class:"col-md-9"},Ke=["value"],Pe={key:0,class:"input-group mt-2"},Xe=["placeholder"],Ye={class:"inner"},Ze={class:"help-block"},ze={value:""},He=["value"],We={key:2,class:"invalid-feedback"},xe={class:"row mb-3"},et={class:"col-md-3 col-form-label"},tt={class:"col-md-9"},ot={value:"all"},nt=["value"],at=["value"],lt={class:"row mb-3"},st={class:"col-md-3 col-form-label"},it={class:"col-md-9"},dt=["disabled"],ne=ae({__name:"EditRuleModal",props:{data:{type:Object},devices:{type:Array},networks:{type:Array}},setup(k){var Q,G,K,P,X,Y,Z;const v=k,{handleSubmit:h}=Fe(),s=ue({action:"block",direction:"inbound",protocol:"all",apply_to:"all",notes:"",target:"",is_enabled:!0}),u=N(b.DNS),D=Object.values(b),{t:I}=le(),{mutate:M,loading:U,onDone:q}=j({document:O`
    mutation createConfig($input: ConfigInput!) {
      createConfig(input: $input) {
        ...ConfigFragment
      }
    }
    ${C}
  `,options:{update:(a,i)=>{pe(a,i.data.createConfig,O`
          query {
            configs {
              ...ConfigFragment
            }
          }
          ${C}
        `)}}}),{mutate:E,loading:S,onDone:l}=j({document:O`
    mutation updateConfig($id: ID!, $input: ConfigInput!) {
      updateConfig(id: $id, input: $input) {
        ...ConfigFragment
      }
    }
    ${C}
  `}),{value:p,resetField:m,errorMessage:g}=Ae("inputValue",me().test("required",a=>"valid.required",a=>!$.hasInput(u.value)||!!a).test("target-value",a=>"invalid_value",a=>$.isValid(u.value,a??""))),t=(Q=v.data)==null?void 0:Q.data;s.action=(t==null?void 0:t.action)??"block",s.direction=(t==null?void 0:t.direction)??"inbound",s.protocol=(t==null?void 0:t.protocol)??"all",u.value=((K=(G=v.data)==null?void 0:G.target)==null?void 0:K.type)??b.DNS,p.value=((X=(P=v.data)==null?void 0:P.target)==null?void 0:X.value)??"",s.apply_to=((Z=(Y=v.data)==null?void 0:Y.applyTo)==null?void 0:Z.toValue())??"all",s.notes=(t==null?void 0:t.notes)??"",s.is_enabled=(t==null?void 0:t.is_enabled)??!0,t||m(),_e(u,(a,i)=>{(a===b.INTERFACE||i===b.INTERFACE)&&(p.value="")});const _=h(()=>{const a=new $;a.type=u.value,a.value=p.value??"",s.target=a.toValue(),v.data?E({id:v.data.id,input:{group:"rule",value:JSON.stringify(s)}}):M({input:{group:"rule",value:JSON.stringify(s)}})});return q(()=>{H()}),l(()=>{H()}),(a,i)=>{const se=ye,ie=ve,de=Ve;return c(),fe(de,{title:d(t)?a.$t("edit"):a.$t("create")},{body:F(()=>{var V,z;return[e("div",Ne,[e("label",Te,n(a.$t("actions")),1),e("div",De,[e("div",Ie,[f(e("input",{class:"form-check-input",type:"radio",name:"action",id:"action-allow",value:"allow","onUpdate:modelValue":i[0]||(i[0]=o=>s.action=o)},null,512),[[A,s.action]]),e("label",Me,n(a.$t("allow")),1)]),e("div",Ue,[f(e("input",{class:"form-check-input",type:"radio",name:"action",id:"action-block",value:"block","onUpdate:modelValue":i[1]||(i[1]=o=>s.action=o)},null,512),[[A,s.action]]),e("label",qe,n(a.$t("block")),1)])])]),e("div",Ee,[e("label",Se,n(a.$t("direction")),1),e("div",Oe,[e("div",Re,[f(e("input",{class:"form-check-input",type:"radio",name:"direction",id:"direction-inbound",value:"inbound","onUpdate:modelValue":i[2]||(i[2]=o=>s.direction=o)},null,512),[[A,s.direction]]),e("label",Je,n(a.$t("inbound")),1)]),e("div",Le,[f(e("input",{class:"form-check-input",type:"radio",name:"direction",id:"direction-outbound",value:"outbound","onUpdate:modelValue":i[3]||(i[3]=o=>s.direction=o)},null,512),[[A,s.direction]]),e("label",Be,n(a.$t("outbound")),1)])])]),e("div",je,[e("label",Qe,n(a.$t("match")),1),e("div",Ge,[f(e("select",{class:"form-select","onUpdate:modelValue":i[4]||(i[4]=o=>u.value=o)},[(c(!0),r(y,null,w(d(D),o=>(c(),r("option",{value:o},n(a.$t(`target_type.${o}`)),9,Ke))),256))],512),[[R,u.value]]),d($).hasInput(u.value)?(c(),r("div",Pe,[f(e("input",{type:"text",class:"form-control","onUpdate:modelValue":i[5]||(i[5]=o=>W(p)?p.value=o:null),placeholder:a.$t("for_example")+" "+d($).hint(u.value)},null,8,Xe),[[x,d(p)]]),T(ie,{class:"input-group-text"},{content:F(()=>[e("pre",Ze,n(a.$t(`examples_${u.value}`)),1)]),default:F(()=>[e("span",Ye,[T(se,{class:"bi"})])]),_:1})])):J("",!0),u.value===d(b).INTERFACE?f((c(),r("select",{key:1,class:"form-select mt-2","onUpdate:modelValue":i[6]||(i[6]=o=>W(p)?p.value=o:null)},[e("option",ze,n(a.$t("all_local_networks")),1),(c(!0),r(y,null,w((V=k.networks)==null?void 0:V.filter(o=>o.type!=="wan"),o=>(c(),r("option",{value:o.ifName},n(o.name),9,He))),256))],512)),[[R,d(p)]]):J("",!0),d(g)?(c(),r("div",We,n(d(g)?a.$t(d(g)):""),1)):J("",!0)])]),e("div",xe,[e("label",et,n(d(I)("apply_to")),1),e("div",tt,[f(e("select",{class:"form-select","onUpdate:modelValue":i[7]||(i[7]=o=>s.apply_to=o)},[e("option",ot,n(a.$t("all_devices")),1),(c(!0),r(y,null,w((z=k.networks)==null?void 0:z.filter(o=>o.type!=="wan"),o=>(c(),r("option",{key:o.ifName,value:"iface:"+o.ifName},n(o.name),9,nt))),128)),(c(!0),r(y,null,w(k.devices,o=>(c(),r("option",{value:"mac:"+o.mac},n(o.name),9,at))),256))],512),[[R,s.apply_to]])])]),e("div",lt,[e("label",st,n(a.$t("notes")),1),e("div",it,[f(e("textarea",{class:"form-control","onUpdate:modelValue":i[8]||(i[8]=o=>s.notes=o),rows:"3"},null,512),[[x,s.notes]])])])]}),action:F(()=>[e("button",{type:"button",disabled:d(U)||d(S),class:"btn",onClick:i[9]||(i[9]=(...V)=>d(_)&&d(_)(...V))},n(a.$t("save")),9,dt)]),_:1},8,["title"])}}}),ct={class:"page-container container"},rt={class:"main"},ut={class:"v-toolbar"},pt={class:"table"},mt=e("th",null,"ID",-1),_t={class:"actions two"},ft={class:"form-check"},vt=["disabled","onChange","onUpdate:modelValue"],gt=["title"],ht=["title"],bt={class:"actions two"},$t=["onClick"],kt=["onClick"],It=ae({__name:"RulesView",setup(k){const v=N([]),h=N([]),s=N([]),{t:u}=le();ge({handle:(l,p)=>{p?he(u(p),"error"):(v.value=l.configs.filter(m=>m.group==="rule").map(m=>{const g=JSON.parse(m.value),t=new we;t.parse(g.apply_to);const _=new $;return _.parse(g.target),{id:m.id,createdAt:m.createdAt,updatedAt:m.updatedAt,data:g,applyTo:t,target:_}}),h.value=[...l.devices],s.value=[...l.networks])},document:L`
    query {
      configs {
        ...ConfigFragment
      }
      devices {
        ...DeviceFragment
      }
      networks {
        ...NetworkFragment
      }
    }
    ${be}
    ${C}
    ${$e}
  `});const D=L`
  mutation DeleteConfig($id: ID!) {
    deleteConfig(id: $id)
  }
`;function I(l){B(Ce,{id:l.id,name:l.id,gql:D,appApi:!1,typeName:"Config"})}function M(l){B(ne,{data:l,devices:h,networks:s})}function U(){B(ne,{data:null,devices:h,networks:s})}const{mutate:q,loading:E}=j({document:L`
    mutation updateConfig($id: ID!, $input: ConfigInput!) {
      updateConfig(id: $id, input: $input) {
        ...ConfigFragment
      }
    }
    ${C}
  `});function S(l){q({id:l.id,input:{group:"rule",value:JSON.stringify(l.data)}})}return(l,p)=>{const m=re,g=ce;return c(),r("div",ct,[e("div",rt,[e("div",ut,[T(m,{current:()=>l.$t("page_title.rules")},null,8,["current"]),e("button",{type:"button",class:"btn right-actions",onClick:U},n(l.$t("create")),1)]),e("table",pt,[e("thead",null,[e("tr",null,[mt,e("th",null,n(l.$t("apply_to")),1),e("th",null,n(l.$t("description")),1),e("th",null,n(l.$t("notes")),1),e("th",null,n(l.$t("enabled")),1),e("th",null,n(l.$t("created_at")),1),e("th",null,n(l.$t("updated_at")),1),e("th",_t,n(l.$t("actions")),1)])]),e("tbody",null,[(c(!0),r(y,null,w(v.value,t=>(c(),r("tr",{key:t.id},[e("td",null,[T(g,{id:t.id,raw:t.data},null,8,["id","raw"])]),e("td",null,n(t.applyTo.getText(l.$t,h.value,s.value)),1),e("td",null,n(l.$t(`rule_${t.data.direction}`,{action:l.$t(t.data.action),target:t.target.getText(l.$t,s.value)})),1),e("td",null,n(t.data.notes),1),e("td",null,[e("div",ft,[f(e("input",{class:"form-check-input",disabled:d(E),onChange:_=>S(t),"onUpdate:modelValue":_=>t.data.is_enabled=_,type:"checkbox"},null,40,vt),[[ke,t.data.is_enabled]])])]),e("td",{class:"nowrap",title:d(ee)(t.createdAt)},n(d(te)(t.createdAt)),9,gt),e("td",{class:"nowrap",title:d(ee)(t.updatedAt)},n(d(te)(t.updatedAt)),9,ht),e("td",bt,[e("a",{href:"#",class:"v-link",onClick:oe(_=>M(t),["prevent"])},n(l.$t("edit")),9,$t),e("a",{href:"#",class:"v-link",onClick:oe(_=>I(t),["prevent"])},n(l.$t("delete")),9,kt)])]))),128))])])])])}}});export{It as default};
