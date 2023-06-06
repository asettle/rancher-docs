"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[83353],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>h});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},c=Object.keys(e);for(a=0;a<c.length;a++)r=c[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(a=0;a<c.length;a++)r=c[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var o=a.createContext({}),p=function(e){var t=a.useContext(o),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},d=function(e){var t=p(e.components);return a.createElement(o.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,c=e.originalType,o=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),u=p(r),h=n,f=u["".concat(o,".").concat(h)]||u[h]||s[h]||c;return r?a.createElement(f,i(i({ref:t},d),{},{components:r})):a.createElement(f,i({ref:t},d))}));function h(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var c=r.length,i=new Array(c);i[0]=u;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l.mdxType="string"==typeof e?e:n,i[1]=l;for(var p=2;p<c;p++)i[p]=r[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}u.displayName="MDXCreateElement"},96592:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>o,contentTitle:()=>i,default:()=>s,frontMatter:()=>c,metadata:()=>l,toc:()=>p});var a=r(87462),n=(r(67294),r(3905));const c={title:"Deprecated Features in Rancher"},i=void 0,l={unversionedId:"faq/deprecated-features-in-v2.5",id:"faq/deprecated-features-in-v2.5",title:"Deprecated Features in Rancher",description:"What is Rancher's Deprecation policy?",source:"@site/docs/faq/deprecated-features-in-v2.5.md",sourceDirName:"faq",slug:"/faq/deprecated-features-in-v2.5",permalink:"/faq/deprecated-features-in-v2.5",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/docs/faq/deprecated-features-in-v2.5.md",tags:[],version:"current",lastUpdatedAt:1663953084,formattedLastUpdatedAt:"Sep 23, 2022",frontMatter:{title:"Deprecated Features in Rancher"},sidebar:"tutorialSidebar",previous:{title:"General FAQ",permalink:"/faq/general-faq"},next:{title:"Installing and Configuring kubectl",permalink:"/faq/install-and-configure-kubectl"}},o={},p=[{value:"What is Rancher&#39;s Deprecation policy?",id:"what-is-ranchers-deprecation-policy",level:3},{value:"Where can I find out which features have been deprecated in Rancher?",id:"where-can-i-find-out-which-features-have-been-deprecated-in-rancher",level:3},{value:"What can I expect when a feature is marked for deprecation?",id:"what-can-i-expect-when-a-feature-is-marked-for-deprecation",level:3}],d={toc:p};function s(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h3",{id:"what-is-ranchers-deprecation-policy"},"What is Rancher's Deprecation policy?"),(0,n.kt)("p",null,"We have published our official deprecation policy in the support ",(0,n.kt)("a",{parentName:"p",href:"https://rancher.com/support-maintenance-terms"},"terms of service"),"."),(0,n.kt)("h3",{id:"where-can-i-find-out-which-features-have-been-deprecated-in-rancher"},"Where can I find out which features have been deprecated in Rancher?"),(0,n.kt)("p",null,"Rancher will publish deprecated features as part of the ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/rancher/rancher/releases"},"release notes")," for Rancher found on GitHub. Please consult the following patch releases for deprecated features:"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Patch Version"),(0,n.kt)("th",{parentName:"tr",align:null},"Release Date"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://github.com/rancher/rancher/releases/tag/v2.6.0"},"2.6.0")),(0,n.kt)("td",{parentName:"tr",align:null},"Aug 31, 2021")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://github.com/rancher/rancher/releases/tag/v2.6.1"},"2.6.1")),(0,n.kt)("td",{parentName:"tr",align:null},"Oct 11, 2021")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://github.com/rancher/rancher/releases/tag/v2.6.2"},"2.6.2")),(0,n.kt)("td",{parentName:"tr",align:null},"Oct 19, 2021")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://github.com/rancher/rancher/releases/tag/v2.6.3"},"2.6.3")),(0,n.kt)("td",{parentName:"tr",align:null},"Dec 21, 2021")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://github.com/rancher/rancher/releases/tag/v2.6.4"},"2.6.4")),(0,n.kt)("td",{parentName:"tr",align:null},"Mar 31, 2022")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://github.com/rancher/rancher/releases/tag/v2.6.5"},"2.6.5")),(0,n.kt)("td",{parentName:"tr",align:null},"May 12, 2022")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://github.com/rancher/rancher/releases/tag/v2.6.6"},"2.6.6")),(0,n.kt)("td",{parentName:"tr",align:null},"Jun 30, 2022")))),(0,n.kt)("h3",{id:"what-can-i-expect-when-a-feature-is-marked-for-deprecation"},"What can I expect when a feature is marked for deprecation?"),(0,n.kt)("p",null,'In the release where functionality is marked as "Deprecated", it will still be available and supported allowing upgrades to follow the usual procedure. Once upgraded, users/admins should start planning to move away from the deprecated functionality before upgrading to the release it marked as removed. The recommendation for new deployments is to not use the deprecated feature.'))}s.isMDXComponent=!0}}]);