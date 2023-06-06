"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[41067],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>d});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),i=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},p=function(e){var t=i(e.components);return n.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=i(r),d=o,f=m["".concat(c,".").concat(d)]||m[d]||u[d]||a;return r?n.createElement(f,s(s({ref:t},p),{},{components:r})):n.createElement(f,s({ref:t},p))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,s=new Array(a);s[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:o,s[1]=l;for(var i=2;i<a;i++)s[i]=r[i];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},91647:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>u,frontMatter:()=>a,metadata:()=>l,toc:()=>i});var n=r(87462),o=(r(67294),r(3905));const a={title:"System Tools"},s=void 0,l={unversionedId:"reference-guides/system-tools",id:"reference-guides/system-tools",title:"System Tools",description:"System Tools has been deprecated since June 2022.",source:"@site/docs/reference-guides/system-tools.md",sourceDirName:"reference-guides",slug:"/reference-guides/system-tools",permalink:"/reference-guides/system-tools",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/docs/reference-guides/system-tools.md",tags:[],version:"current",lastUpdatedAt:1667002146,formattedLastUpdatedAt:"Oct 29, 2022",frontMatter:{title:"System Tools"},sidebar:"tutorialSidebar",previous:{title:"Project Tools for Logging, Monitoring, and Visibility",permalink:"/reference-guides/rancher-project-tools"},next:{title:"RKE1 Example YAML",permalink:"/reference-guides/rke1-template-example-yaml"}},c={},i=[{value:"Logs",id:"logs",level:2},{value:"Stats",id:"stats",level:2},{value:"Remove",id:"remove",level:2}],p={toc:i};function u(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"System Tools has been deprecated since June 2022.")),(0,o.kt)("h2",{id:"logs"},"Logs"),(0,o.kt)("p",null,"Please use ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/rancherlabs/support-tools/tree/master/collection/rancher/v2.x/logs-collector"},"logs-collector")," to collect logs from your cluster."),(0,o.kt)("h2",{id:"stats"},"Stats"),(0,o.kt)("p",null,"If you want to replicate the stats command, you can run the following command on your cluster nodes:"),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"This command below requires the package ",(0,o.kt)("inlineCode",{parentName:"p"},"sysstat")," on the cluster node.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"/usr/bin/sar -u -r -F 1 1\n")),(0,o.kt)("h2",{id:"remove"},"Remove"),(0,o.kt)("p",null,"Please use the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/rancher/rancher-cleanup"},"Rancher Cleanup")," tool."))}u.isMDXComponent=!0}}]);