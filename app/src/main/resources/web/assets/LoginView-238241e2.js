import{d as K,r as E,u as q,a4 as z,c9 as J,ca as G,cb as Q,cc as X,cd as Y,ce as Z,cf as ee,m as x,o as L,c as j,b as l,e as se,f as p,K as h,a6 as y,w as ne,g as w,O as te,L as oe,j as ie,k as re,F as ae,b7 as ce,cg as de,ch as le,_ as ue}from"./index-474238de.js";import{u as me,a as fe}from"./vee-validate.esm-8e10bc2f.js";function C(s){let n=s;if(typeof n>"u"){if(typeof navigator>"u"||!navigator)return"";n=navigator.userAgent||""}return n.toLowerCase()}function $(s,n){try{return new RegExp(s,"g").exec(n)}catch{return null}}function N(){if(typeof navigator>"u"||!navigator||!navigator.userAgentData)return!1;const n=navigator.userAgentData.brands;return!!(n&&n.length)}function we(s,n){const t=$(`(${s})((?:\\/|\\s|:)([0-9|\\.|_]+))`,n);return t?t[3]:""}function T(s){return s.replace(/_/g,".")}function V(s,n){let t=null,e="-1";return s.some(i=>{const c=$(`(${i.test})((?:\\/|\\s|:)([0-9|\\.|_]+))?`,n);return!c||i.brand?!1:(t=i,e=c[3]||"-1",i.versionAlias?e=i.versionAlias:i.versionTest&&(e=we(i.versionTest.toLowerCase(),n)||e),e=T(e),!0)}),{preset:t,version:e}}function _(s,n){const t={brand:"",version:"-1"};return s.some(e=>{const i=M(n,e);return i?(t.brand=e.id,t.version=e.versionAlias||i.version,t.version!=="-1"):!1}),t}function M(s,n){return s.find(t=>$(`${n.test}`,t.brand.toLowerCase()))}const B=[{test:"phantomjs",id:"phantomjs"},{test:"whale",id:"whale"},{test:"edgios|edge|edg",id:"edge"},{test:"msie|trident|windows phone",id:"ie",versionTest:"iemobile|msie|rv"},{test:"miuibrowser",id:"miui browser"},{test:"samsungbrowser",id:"samsung internet"},{test:"samsung",id:"samsung internet",versionTest:"version"},{test:"chrome|crios",id:"chrome"},{test:"firefox|fxios",id:"firefox"},{test:"android",id:"android browser",versionTest:"version"},{test:"safari|iphone|ipad|ipod",id:"safari",versionTest:"version"}],O=[{test:"(?=.*applewebkit/(53[0-7]|5[0-2]|[0-4]))(?=.*\\schrome)",id:"chrome",versionTest:"chrome"},{test:"chromium",id:"chrome"},{test:"whale",id:"chrome",versionAlias:"-1",brand:!0}],R=[{test:"applewebkit",id:"webkit",versionTest:"applewebkit|safari"}],W=[{test:"(?=(iphone|ipad))(?!(.*version))",id:"webview"},{test:"(?=(android|iphone|ipad))(?=.*(naver|daum|; wv))",id:"webview"},{test:"webview",id:"webview"}],F=[{test:"windows phone",id:"windows phone"},{test:"windows 2000",id:"window",versionAlias:"5.0"},{test:"windows nt",id:"window"},{test:"win32|windows",id:"window"},{test:"iphone|ipad|ipod",id:"ios",versionTest:"iphone os|cpu os"},{test:"macos|macintel|mac os x",id:"mac"},{test:"android|linux armv81",id:"android"},{test:"tizen",id:"tizen"},{test:"webos|web0s",id:"webos"}];function U(s){return!!V(W,s).preset}function ve(s){const n=C(s),t=!!/mobi/g.exec(n),e={name:"unknown",version:"-1",majorVersion:-1,webview:U(n),chromium:!1,chromiumVersion:"-1",webkit:!1,webkitVersion:"-1"},i={name:"unknown",version:"-1",majorVersion:-1},{preset:c,version:d}=V(B,n),{preset:o,version:a}=V(F,n),m=V(O,n);if(e.chromium=!!m.preset,e.chromiumVersion=m.version,!e.chromium){const v=V(R,n);e.webkit=!!v.preset,e.webkitVersion=v.version}return o&&(i.name=o.id,i.version=a,i.majorVersion=parseInt(a,10)),c&&(e.name=c.id,e.version=d,e.webview&&i.name==="ios"&&e.name!=="safari"&&(e.webview=!1)),e.majorVersion=parseInt(e.version,10),{browser:e,os:i,isMobile:t,isHints:!1}}function D(s){const n=navigator.userAgentData,t=[...n.brands],e=s&&s.fullVersionList,i=n.mobile||!1,c=t[0],d=(s&&s.platform||n.platform||navigator.platform).toLowerCase(),o={name:c.brand,version:c.version,majorVersion:-1,webkit:!1,webkitVersion:"-1",chromium:!1,chromiumVersion:"-1",webview:!!_(W,t).brand||U(C())},a={name:"unknown",version:"-1",majorVersion:-1};o.webkit=!o.chromium&&R.some(r=>M(t,r));const m=_(O,t);if(o.chromium=!!m.brand,o.chromiumVersion=m.version,!o.chromium){const r=_(R,t);o.webkit=!!r.brand,o.webkitVersion=r.version}const v=F.find(r=>new RegExp(`${r.test}`,"g").exec(d));if(a.name=v?v.id:"",s&&(a.version=s.platformVersion),e&&e.length){const r=_(B,e);o.name=r.brand||o.name,o.version=r.version||o.version}else{const r=_(B,t);o.name=r.brand||o.name,o.version=r.brand&&s?s.uaFullVersion:r.version}return o.webkit&&(a.name=i?"ios":"mac"),a.name==="ios"&&o.webview&&(o.version="-1"),a.version=T(a.version),o.version=T(o.version),a.majorVersion=parseInt(a.version,10),o.majorVersion=parseInt(o.version,10),{browser:o,os:a,isMobile:i,isHints:!0}}async function be(){if(N()){const s=await navigator.userAgentData.getHighEntropyValues(["architecture","model","platform","platformVersion","uaFullVersion","fullVersionList"]);return D(s)}return pe()}function pe(s){return typeof s>"u"&&N()?D():ve(s)}const ge={class:"header"},he={class:"logo"},_e={class:"login-block"},Ve=["placeholder"],ke={class:"d-grid mt-4"},ye=["disabled"],Se={class:"d-grid mt-4"},Ae={key:0,class:"tips"},Ee=K({__name:"LoginView",setup(s){const{handleSubmit:n,isSubmitting:t}=me(),e=E(!1),i=E(!1),c=E("");let d;const o=window.location.protocol==="http:"?!1:!window.navigator.userAgentData,{t:a}=q(),{value:m,errorMessage:v}=fe("password",z().required().min(6));async function r(){const b=await(await fetch(`${ce()}/init`,{method:"POST",headers:de()})).text();b&&(m.value=b,S())}r();const S=n(async()=>{const f=localStorage.getItem("client_id");d=new WebSocket(`${J()}?cid=${f}&auth=1`);const b=m.value??"",k=G(b),g=Q(k);c.value="",e.value=!1,d.onopen=async()=>{t.value=!0;const u=await be(),A=X(g,JSON.stringify({password:k,browserName:u.browser.name,browserVersion:u.browser.version,osName:u.os.name,osVersion:u.os.version,isMobile:u.isMobile}));d.send(Y(A))},d.onmessage=async u=>{var P;const A=Z(g,ee(await u.data.arrayBuffer())),I=JSON.parse(A);I.status==="PENDING"?i.value=!0:(localStorage.setItem("auth_token",I.token),d.close(),x.push({path:((P=x.currentRoute.value.query.redirect)==null?void 0:P.toString())??"/",replace:!0}))},d.onclose=u=>{u.reason==="abort"||u.reason==="OK"||(t.value=!1,e.value=!0,i.value=!1,c.value=`login.${u.reason?u.reason:"failed"}`)},window.setTimeout(function(){d.readyState!==1&&d.close(3001,"timeout")},2e3)});function H(){i.value=!1,e.value=!1,t.value=!1,d.close(3001,"abort")}return(f,b)=>{const k=le;return L(),j(ae,null,[l("div",ge,[se(k,{"logged-in":!1})]),l("div",he,[l("div",null,p(f.$t("app_name")),1)]),l("div",_e,[h(l("form",{onSubmit:b[1]||(b[1]=ne((...g)=>w(S)&&w(S)(...g),["prevent"]))},[h(l("div",{class:"alert alert-danger",role:"alert"},p(c.value?f.$t(c.value):""),513),[[y,e.value]]),h(l("input",{type:"password",class:"form-control","onUpdate:modelValue":b[0]||(b[0]=g=>te(m)?m.value=g:null),placeholder:w(a)("password")},null,8,Ve),[[oe,w(m)]]),h(l("div",{class:"invalid-feedback"},p(w(v)?f.$t(w(v),{min:6}):""),513),[[y,w(v)]]),l("div",ke,[l("button",{class:"btn",type:"submit",disabled:w(t)},p(f.$t(w(t)?"logging_in":"log_in")),9,ye)])],544),[[y,!i.value]]),h(l("div",null,[ie(p(f.$t("login.to_continue"))+" ",1),l("div",Se,[l("button",{onClick:H,class:"btn",type:"button"},p(f.$t("cancel")),1)])],512),[[y,i.value]])]),w(o)?(L(),j("div",Ae,p(f.$t("browser_warning")),1)):re("",!0)],64)}}});const Re=ue(Ee,[["__scopeId","data-v-5b95aa6c"]]);export{Re as default};