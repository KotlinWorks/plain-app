import{d as J,r as h,u as G,an as Y,cn as Q,co as X,cp as Z,cq as ee,cr as se,cs as ne,ct as te,aY as oe,cu as N,c as A,a as p,p as re,t as g,m as E,aV as x,l as ie,j as d,n as ae,ap as le,v as ue,k as $,h as ce,F as de,cv as me,o as T,cw as fe,_ as we}from"./index-f62f2ff2.js";import{u as ve,a as be}from"./vee-validate.esm-65abdaa1.js";function M(n){let t=n;if(typeof t>"u"){if(typeof navigator>"u"||!navigator)return"";t=navigator.userAgent||""}return t.toLowerCase()}function L(n,t){try{return new RegExp(n,"g").exec(t)}catch{return null}}function W(){if(typeof navigator>"u"||!navigator||!navigator.userAgentData)return!1;const t=navigator.userAgentData.brands;return!!(t&&t.length)}function pe(n,t){const o=L(`(${n})((?:\\/|\\s|:)([0-9|\\.|_]+))`,t);return o?o[3]:""}function I(n){return n.replace(/_/g,".")}function V(n,t){let o=null,e="-1";return n.some(r=>{const a=L(`(${r.test})((?:\\/|\\s|:)([0-9|\\.|_]+))?`,t);return!a||r.brand?!1:(o=r,e=a[3]||"-1",r.versionAlias?e=r.versionAlias:r.versionTest&&(e=pe(r.versionTest.toLowerCase(),t)||e),e=I(e),!0)}),{preset:o,version:e}}function _(n,t){const o={brand:"",version:"-1"};return n.some(e=>{const r=D(t,e);return r?(o.brand=e.id,o.version=e.versionAlias||r.version,o.version!=="-1"):!1}),o}function D(n,t){return n.find(o=>L(`${t.test}`,o.brand.toLowerCase()))}const P=[{test:"phantomjs",id:"phantomjs"},{test:"whale",id:"whale"},{test:"edgios|edge|edg",id:"edge"},{test:"msie|trident|windows phone",id:"ie",versionTest:"iemobile|msie|rv"},{test:"miuibrowser",id:"miui browser"},{test:"samsungbrowser",id:"samsung internet"},{test:"samsung",id:"samsung internet",versionTest:"version"},{test:"chrome|crios",id:"chrome"},{test:"firefox|fxios",id:"firefox"},{test:"android",id:"android browser",versionTest:"version"},{test:"safari|iphone|ipad|ipod",id:"safari",versionTest:"version"}],F=[{test:"(?=.*applewebkit/(53[0-7]|5[0-2]|[0-4]))(?=.*\\schrome)",id:"chrome",versionTest:"chrome"},{test:"chromium",id:"chrome"},{test:"whale",id:"chrome",versionAlias:"-1",brand:!0}],R=[{test:"applewebkit",id:"webkit",versionTest:"applewebkit|safari"}],O=[{test:"(?=(iphone|ipad))(?!(.*version))",id:"webview"},{test:"(?=(android|iphone|ipad))(?=.*(naver|daum|; wv))",id:"webview"},{test:"webview",id:"webview"}],U=[{test:"windows phone",id:"windows phone"},{test:"windows 2000",id:"window",versionAlias:"5.0"},{test:"windows nt",id:"window"},{test:"win32|windows",id:"window"},{test:"iphone|ipad|ipod",id:"ios",versionTest:"iphone os|cpu os"},{test:"macos|macintel|mac os x",id:"mac"},{test:"android|linux armv81",id:"android"},{test:"tizen",id:"tizen"},{test:"webos|web0s",id:"webos"}];function H(n){return!!V(O,n).preset}function ge(n){const t=M(n),o=!!/mobi/g.exec(t),e={name:"unknown",version:"-1",majorVersion:-1,webview:H(t),chromium:!1,chromiumVersion:"-1",webkit:!1,webkitVersion:"-1"},r={name:"unknown",version:"-1",majorVersion:-1},{preset:a,version:w}=V(P,t),{preset:s,version:l}=V(U,t),b=V(F,t);if(e.chromium=!!b.preset,e.chromiumVersion=b.version,!e.chromium){const m=V(R,t);e.webkit=!!m.preset,e.webkitVersion=m.version}return s&&(r.name=s.id,r.version=l,r.majorVersion=parseInt(l,10)),a&&(e.name=a.id,e.version=w,e.webview&&r.name==="ios"&&e.name!=="safari"&&(e.webview=!1)),e.majorVersion=parseInt(e.version,10),{browser:e,os:r,isMobile:o,isHints:!1}}function K(n){const t=navigator.userAgentData,o=[...t.brands],e=n&&n.fullVersionList,r=t.mobile||!1,a=o[0],w=(n&&n.platform||t.platform||navigator.platform).toLowerCase(),s={name:a.brand,version:a.version,majorVersion:-1,webkit:!1,webkitVersion:"-1",chromium:!1,chromiumVersion:"-1",webview:!!_(O,o).brand||H(M())},l={name:"unknown",version:"-1",majorVersion:-1};s.webkit=!s.chromium&&R.some(i=>D(o,i));const b=_(F,o);if(s.chromium=!!b.brand,s.chromiumVersion=b.version,!s.chromium){const i=_(R,o);s.webkit=!!i.brand,s.webkitVersion=i.version}const m=U.find(i=>new RegExp(`${i.test}`,"g").exec(w));if(l.name=m?m.id:"",n&&(l.version=n.platformVersion),e&&e.length){const i=_(P,e);s.name=i.brand||s.name,s.version=i.version||s.version}else{const i=_(P,o);s.name=i.brand||s.name,s.version=i.brand&&n?n.uaFullVersion:i.version}return s.webkit&&(l.name=r?"ios":"mac"),l.name==="ios"&&s.webview&&(s.version="-1"),l.version=I(l.version),s.version=I(s.version),l.majorVersion=parseInt(l.version,10),s.majorVersion=parseInt(s.version,10),{browser:s,os:l,isMobile:r,isHints:!0}}async function he(){if(W()){const n=await navigator.userAgentData.getHighEntropyValues(["architecture","model","platform","platformVersion","uaFullVersion","fullVersionList"]);return K(n)}return _e()}function _e(n){return typeof n>"u"&&W()?K():ge(n)}const Ve={class:"header"},ye={class:"login-block"},ke=["label","error","error-text"],Se=["disabled"],Ae={key:0,class:"tips"},Ee=J({__name:"LoginView",setup(n){const{handleSubmit:t,isSubmitting:o}=ve(),e=h(!1),r=h(!0),a=h(!1),w=h("");let s;const l=window.location.protocol==="http:"?!1:!window.navigator.userAgentData,{t:b}=G(),{value:m,errorMessage:i}=be("password",Y().required()),B=h(!1);async function q(){const c=await fetch(`${N()}/init`,{method:"POST",headers:me()});if(c.status===403){e.value=!0,r.value=!0,w.value="web_access_disabled";return}r.value=!1;const f=await c.text();f?(m.value=f,B.value=!1):B.value=!0}q();const y=t(async()=>{const c=localStorage.getItem("client_id");s=new WebSocket(`${Q()}?cid=${c}&auth=1`);const f=m.value??"",k=X(f),v=Z(k);w.value="",e.value=!1,s.onopen=async()=>{o.value=!0;const u=await he(),S=ee(v,JSON.stringify({password:k,browserName:u.browser.name,browserVersion:u.browser.version,osName:u.os.name,osVersion:u.os.version,isMobile:u.isMobile}));s.send(se(S))},s.onmessage=async u=>{var C;const S=ne(v,te(await u.data.arrayBuffer())),j=JSON.parse(S);j.status==="PENDING"?a.value=!0:(localStorage.setItem("auth_token",j.token),s.close(),window.location.href=((C=oe.currentRoute.value.query.redirect)==null?void 0:C.toString())??"/")},s.onclose=async u=>{if(!(u.reason==="abort"||u.reason==="OK")){if(o.value=!1,e.value=!0,a.value=!1,!u.reason&&(await fetch(`${N()}/health_check`)).status===200){w.value="failed_connect_ws";return}w.value=`login.${u.reason?u.reason:"failed"}`}},window.setTimeout(function(){s.readyState!==1&&s.close(3001,"timeout")},2e3)});function z(){a.value=!1,e.value=!1,o.value=!1,s.close(3001,"abort")}return(c,f)=>{const k=fe;return T(),A(de,null,[p("header",Ve,[re(k,{"logged-in":!1})]),p("h1",null,g(c.$t("app_name")),1),p("div",ye,[E(p("form",{onSubmit:f[2]||(f[2]=ie((...v)=>d(y)&&d(y)(...v),["prevent"]))},[E(p("div",{class:"alert alert-danger",role:"alert"},g(w.value?c.$t(w.value):""),513),[[x,e.value]]),B.value?E((T(),A("md-outlined-text-field",{key:0,label:d(b)("password"),"onUpdate:modelValue":f[0]||(f[0]=v=>ae(m)?m.value=v:null),onKeydown:f[1]||(f[1]=le((...v)=>d(y)&&d(y)(...v),["enter"])),type:"password",class:"form-control",error:d(i),"error-text":d(i)?c.$t(d(i)):""},null,40,ke)),[[ue,d(m)]]):$("",!0),r.value?$("",!0):(T(),A("md-filled-button",{key:1,disabled:d(o)},g(c.$t(d(o)?"logging_in":"log_in")),9,Se))],544),[[x,!a.value]]),E(p("div",null,[ce(g(c.$t("login.to_continue"))+" ",1),p("md-outlined-button",{onClick:z},g(c.$t("cancel")),1)],512),[[x,a.value]])]),d(l)?(T(),A("div",Ae,g(c.$t("browser_warning")),1)):$("",!0)],64)}}});const xe=we(Ee,[["__scopeId","data-v-da05a7d0"]]);export{xe as default};
