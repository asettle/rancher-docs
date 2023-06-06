"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[25863],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>g});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=a.createContext({}),c=function(e){var t=a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},p=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=c(r),g=n,m=d["".concat(l,".").concat(g)]||d[g]||u[g]||o;return r?a.createElement(m,s(s({ref:t},p),{},{components:r})):a.createElement(m,s({ref:t},p))}));function g(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,s=new Array(o);s[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:n,s[1]=i;for(var c=2;c<o;c++)s[c]=r[c];return a.createElement.apply(null,s)}return a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},99897:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>u,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var a=r(87462),n=(r(67294),r(3905));const o={title:"Setting up Local System Charts for Air Gapped Installations"},s=void 0,i={unversionedId:"getting-started/installation-and-upgrade/resources/local-system-charts",id:"getting-started/installation-and-upgrade/resources/local-system-charts",title:"Setting up Local System Charts for Air Gapped Installations",description:"The Charts repository contains all the Helm catalog items required for features such as monitoring, logging, alerting and Istio.",source:"@site/docs/getting-started/installation-and-upgrade/resources/local-system-charts.md",sourceDirName:"getting-started/installation-and-upgrade/resources",slug:"/getting-started/installation-and-upgrade/resources/local-system-charts",permalink:"/getting-started/installation-and-upgrade/resources/local-system-charts",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/docs/getting-started/installation-and-upgrade/resources/local-system-charts.md",tags:[],version:"current",lastUpdatedAt:1685049914,formattedLastUpdatedAt:"May 25, 2023",frontMatter:{title:"Setting up Local System Charts for Air Gapped Installations"},sidebar:"tutorialSidebar",previous:{title:"Bootstrap Password",permalink:"/getting-started/installation-and-upgrade/resources/bootstrap-password"},next:{title:"Upgrading and Rolling Back Kubernetes",permalink:"/getting-started/installation-and-upgrade/upgrade-and-roll-back-kubernetes"}},l={},c=[{value:"Using Local System Charts",id:"using-local-system-charts",level:2}],p={toc:c};function u(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("head",null,(0,n.kt)("link",{rel:"canonical",href:"https://ranchermanager.docs.rancher.com/getting-started/installation-and-upgrade/resources/local-system-charts"})),(0,n.kt)("p",null,"The ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/rancher/charts"},"Charts")," repository contains all the Helm catalog items required for features such as monitoring, logging, alerting and Istio."),(0,n.kt)("p",null,"In an air gapped installation of Rancher, you will need to configure Rancher to use a local copy of the system charts. This section describes how to use local system charts using a CLI flag."),(0,n.kt)("h2",{id:"using-local-system-charts"},"Using Local System Charts"),(0,n.kt)("p",null,"A local copy of ",(0,n.kt)("inlineCode",{parentName:"p"},"system-charts")," has been packaged into the ",(0,n.kt)("inlineCode",{parentName:"p"},"rancher/rancher")," container. To be able to use these features in an air gap install, you will need to run the Rancher install command with an extra environment variable, ",(0,n.kt)("inlineCode",{parentName:"p"},"CATTLE_SYSTEM_CATALOG=bundled"),", which tells Rancher to use the local copy of the charts instead of attempting to fetch them from GitHub."),(0,n.kt)("p",null,"Example commands for a Rancher installation with a bundled ",(0,n.kt)("inlineCode",{parentName:"p"},"system-charts")," are included in the ",(0,n.kt)("a",{parentName:"p",href:"/pages-for-subheaders/air-gapped-helm-cli-install"},"air gap installation")," instructions for Docker and Helm installs."))}u.isMDXComponent=!0}}]);