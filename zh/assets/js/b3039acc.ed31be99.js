"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[36083],{3905:(e,r,t)=>{t.d(r,{Zo:()=>i,kt:()=>f});var n=t(67294);function s(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function o(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){s(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function p(e,r){if(null==e)return{};var t,n,s=function(e,r){if(null==e)return{};var t,n,s={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(s[t]=e[t]);return s}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(s[t]=e[t])}return s}var l=n.createContext({}),c=function(e){var r=n.useContext(l),t=r;return e&&(t="function"==typeof e?e(r):o(o({},r),e)),t},i=function(e){var r=c(e.components);return n.createElement(l.Provider,{value:r},e.children)},u={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},d=n.forwardRef((function(e,r){var t=e.components,s=e.mdxType,a=e.originalType,l=e.parentName,i=p(e,["components","mdxType","originalType","parentName"]),d=c(t),f=s,h=d["".concat(l,".").concat(f)]||d[f]||u[f]||a;return t?n.createElement(h,o(o({ref:r},i),{},{components:t})):n.createElement(h,o({ref:r},i))}));function f(e,r){var t=arguments,s=r&&r.mdxType;if("string"==typeof e||s){var a=t.length,o=new Array(a);o[0]=d;var p={};for(var l in r)hasOwnProperty.call(r,l)&&(p[l]=r[l]);p.originalType=e,p.mdxType="string"==typeof e?e:s,o[1]=p;for(var c=2;c<a;c++)o[c]=t[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,t)}d.displayName="MDXCreateElement"},37707:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>a,metadata:()=>p,toc:()=>c});var n=t(87462),s=(t(67294),t(3905));const a={title:"\u8de8\u96c6\u7fa4\u90e8\u7f72\u5e94\u7528"},o=void 0,p={unversionedId:"pages-for-subheaders/deploy-apps-across-clusters",id:"version-2.6/pages-for-subheaders/deploy-apps-across-clusters",title:"\u8de8\u96c6\u7fa4\u90e8\u7f72\u5e94\u7528",description:"Fleet",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-2.6/pages-for-subheaders/deploy-apps-across-clusters.md",sourceDirName:"pages-for-subheaders",slug:"/pages-for-subheaders/deploy-apps-across-clusters",permalink:"/zh/v2.6/pages-for-subheaders/deploy-apps-across-clusters",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/versioned_docs/version-2.6/pages-for-subheaders/deploy-apps-across-clusters.md",tags:[],version:"2.6",lastUpdatedAt:1683884717,formattedLastUpdatedAt:"2023\u5e745\u670812\u65e5",frontMatter:{title:"\u8de8\u96c6\u7fa4\u90e8\u7f72\u5e94\u7528"},sidebar:"tutorialSidebar",previous:{title:"\u521b\u5efa\u5e94\u7528",permalink:"/zh/v2.6/how-to-guides/new-user-guides/helm-charts-in-rancher/create-apps"},next:{title:"\u4f7f\u7528 Feet \u8fdb\u884c\u6301\u7eed\u4ea4\u4ed8",permalink:"/zh/v2.6/how-to-guides/new-user-guides/deploy-apps-across-clusters/fleet"}},l={},c=[{value:"Fleet",id:"fleet",level:3},{value:"\u591a\u96c6\u7fa4\u5e94\u7528",id:"\u591a\u96c6\u7fa4\u5e94\u7528",level:3}],i={toc:c};function u(e){let{components:r,...t}=e;return(0,s.kt)("wrapper",(0,n.Z)({},i,t,{components:r,mdxType:"MDXLayout"}),(0,s.kt)("h3",{id:"fleet"},"Fleet"),(0,s.kt)("p",null,"Rancher 2.5 \u5f15\u5165\u4e86 Fleet\uff0c\u8fd9\u662f\u4e00\u79cd\u8de8\u96c6\u7fa4\u90e8\u7f72\u5e94\u7528\u7684\u65b0\u65b9\u5f0f\u3002"),(0,s.kt)("p",null,"\u4f7f\u7528 Fleet \u7684\u6301\u7eed\u4ea4\u4ed8\u662f\u5927\u89c4\u6a21\u7684 GitOps\u3002\u5982\u9700\u66f4\u591a\u4fe1\u606f\uff0c\u8bf7\u53c2\u9605 ",(0,s.kt)("a",{parentName:"p",href:"/zh/v2.6/how-to-guides/new-user-guides/deploy-apps-across-clusters/fleet"},"Fleet"),"\u3002"),(0,s.kt)("h3",{id:"\u591a\u96c6\u7fa4\u5e94\u7528"},"\u591a\u96c6\u7fa4\u5e94\u7528"),(0,s.kt)("p",null,"\u5728 2.5 \u4e4b\u524d\u7684 Rancher \u7248\u672c\u4e2d\uff0c\u591a\u96c6\u7fa4\u5e94\u7528\u529f\u80fd\u7528\u4e8e\u8de8\u96c6\u7fa4\u90e8\u7f72\u5e94\u7528\u3002\u6211\u4eec\u5df2\u5f03\u7528\u591a\u96c6\u7fa4\u5e94\u7528\u529f\u80fd\uff0c\u4f46\u4f60\u4ecd\u7136\u53ef\u4ee5\u5728 Rancher 2.5 \u4e2d\u4f7f\u7528\u8be5\u529f\u80fd\u3002"),(0,s.kt)("p",null,"\u8be6\u60c5\u8bf7\u53c2\u9605",(0,s.kt)("a",{parentName:"p",href:"/zh/v2.6/how-to-guides/new-user-guides/deploy-apps-across-clusters/multi-cluster-apps"},"\u6b64\u6587\u6863"),"\u3002"))}u.isMDXComponent=!0}}]);