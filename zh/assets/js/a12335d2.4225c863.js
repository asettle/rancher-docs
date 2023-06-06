"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[63788],{3905:(t,e,n)=>{n.d(e,{Zo:()=>u,kt:()=>c});var a=n(67294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function p(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},l=Object.keys(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var o=a.createContext({}),d=function(t){var e=a.useContext(o),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},u=function(t){var e=d(t.components);return a.createElement(o.Provider,{value:e},t.children)},m={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},k=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,l=t.originalType,o=t.parentName,u=p(t,["components","mdxType","originalType","parentName"]),k=d(n),c=r,N=k["".concat(o,".").concat(c)]||k[c]||m[c]||l;return n?a.createElement(N,i(i({ref:e},u),{},{components:n})):a.createElement(N,i({ref:e},u))}));function c(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=n.length,i=new Array(l);i[0]=k;var p={};for(var o in e)hasOwnProperty.call(e,o)&&(p[o]=e[o]);p.originalType=t,p.mdxType="string"==typeof t?t:r,i[1]=p;for(var d=2;d<l;d++)i[d]=n[d];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}k.displayName="MDXCreateElement"},36536:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>o,contentTitle:()=>i,default:()=>m,frontMatter:()=>l,metadata:()=>p,toc:()=>d});var a=n(87462),r=(n(67294),n(3905));const l={title:"\u8df3\u8fc7\u548c\u4e0d\u9002\u7528\u7684\u6d4b\u8bd5"},i=void 0,p={unversionedId:"integrations-in-rancher/cis-scans/skipped-and-not-applicable-tests",id:"integrations-in-rancher/cis-scans/skipped-and-not-applicable-tests",title:"\u8df3\u8fc7\u548c\u4e0d\u9002\u7528\u7684\u6d4b\u8bd5",description:"\u672c\u6587\u5217\u51fa\u4e86\u5728 RKE \u7684 permissive \u6d4b\u8bd5\u914d\u7f6e\u6587\u4ef6\u4e2d\u8df3\u8fc7\u7684\u6d4b\u8bd5\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/integrations-in-rancher/cis-scans/skipped-and-not-applicable-tests.md",sourceDirName:"integrations-in-rancher/cis-scans",slug:"/integrations-in-rancher/cis-scans/skipped-and-not-applicable-tests",permalink:"/zh/integrations-in-rancher/cis-scans/skipped-and-not-applicable-tests",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/docs/integrations-in-rancher/cis-scans/skipped-and-not-applicable-tests.md",tags:[],version:"current",lastUpdatedAt:1666730466,formattedLastUpdatedAt:"2022\u5e7410\u670825\u65e5",frontMatter:{title:"\u8df3\u8fc7\u548c\u4e0d\u9002\u7528\u7684\u6d4b\u8bd5"},sidebar:"tutorialSidebar",previous:{title:"RBAC",permalink:"/zh/integrations-in-rancher/cis-scans/rbac-for-cis-scans"},next:{title:"\u4e3a\u96c6\u7fa4\u626b\u63cf\u521b\u5efa\u81ea\u5b9a\u4e49 Benchmark \u7248\u672c",permalink:"/zh/integrations-in-rancher/cis-scans/custom-benchmark"}},o={},d=[{value:"CIS Benchmark v1.5",id:"cis-benchmark-v15",level:2},{value:"CIS Benchmark v1.5 \u8df3\u8fc7\u7684\u6d4b\u8bd5",id:"cis-benchmark-v15-\u8df3\u8fc7\u7684\u6d4b\u8bd5",level:3},{value:"CIS Benchmark v1.5 \u4e0d\u9002\u7528\u7684\u6d4b\u8bd5",id:"cis-benchmark-v15-\u4e0d\u9002\u7528\u7684\u6d4b\u8bd5",level:3}],u={toc:d};function m(t){let{components:e,...n}=t;return(0,r.kt)("wrapper",(0,a.Z)({},u,n,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"\u672c\u6587\u5217\u51fa\u4e86\u5728 RKE \u7684 permissive \u6d4b\u8bd5\u914d\u7f6e\u6587\u4ef6\u4e2d\u8df3\u8fc7\u7684\u6d4b\u8bd5\u3002"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\u5728 v2.5 \u751f\u6210\u7684\u62a5\u544a\u4e2d\uff0c\u6b64\u9875\u9762\u4e0a\u88ab\u8df3\u8fc7\u4e14\u4e0d\u9002\u7528\u7684\u6d4b\u8bd5\u5c06\u4f1a\u8ba1\u4e3a\u4e0d\u9002\u7528\u3002\u8df3\u8fc7\u7684\u6d4b\u8bd5\u8ba1\u6570\u53ea\u4f1a\u6d89\u53ca\u7528\u6237\u5b9a\u4e49\u7684\u8df3\u8fc7\u6d4b\u8bd5\u3002\u8fd9\u6837\uff0c\u4f60\u53ef\u4ee5\u533a\u5206\u7528\u6237\u8981\u8df3\u8fc7\u7684\u6d4b\u8bd5\u4e0e RKE permissive \u6d4b\u8bd5\u914d\u7f6e\u6587\u4ef6\u4e2d\u9ed8\u8ba4\u8df3\u8fc7\u7684\u6d4b\u8bd5\u3002")),(0,r.kt)("h2",{id:"cis-benchmark-v15"},"CIS Benchmark v1.5"),(0,r.kt)("h3",{id:"cis-benchmark-v15-\u8df3\u8fc7\u7684\u6d4b\u8bd5"},"CIS Benchmark v1.5 \u8df3\u8fc7\u7684\u6d4b\u8bd5"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"\u6570\u5b57"),(0,r.kt)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"),(0,r.kt)("th",{parentName:"tr",align:null},"\u8df3\u8fc7\u7684\u539f\u56e0"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"1.1.12"),(0,r.kt)("td",{parentName:"tr",align:null},"\u786e\u4fdd etcd \u6570\u636e\u76ee\u5f55\u6240\u6709\u6743\u8bbe\u7f6e\u4e3a etcd:etcd\uff08\u81ea\u52a8\uff09"),(0,r.kt)("td",{parentName:"tr",align:null},"etcd \u6570\u636e\u76ee\u5f55\u6240\u6709\u6743\u9700\u8981\u7cfb\u7edf ServiceAccount\u3002\u6709\u5173\u5982\u4f55\u914d\u7f6e\u6240\u6709\u6743\u7684\u66f4\u591a\u4fe1\u606f\uff0c\u8bf7\u53c2\u9605 Rancher \u7684\u5f3a\u5316\u6307\u5357\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"1.2.6"),(0,r.kt)("td",{parentName:"tr",align:null},"\u786e\u4fdd\u6839\u636e\u9700\u8981\u8bbe\u7f6e --kubelet-certificate-authority \u53c2\u6570\uff08\u81ea\u52a8\uff09"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5728\u751f\u6210\u670d\u52a1\u8bc1\u4e66\u65f6\uff0c\u529f\u80fd\u53ef\u80fd\u4f1a\u4e0e\u67d0\u4e9b\u4e91\u63d0\u4f9b\u5546\u6240\u9700\u7684\u4e3b\u673a\u540d\u8986\u76d6\u4e00\u8d77\u4e2d\u65ad\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"1.2.16"),(0,r.kt)("td",{parentName:"tr",align:null},"\u786e\u4fdd\u8bbe\u7f6e\u4e86\u51c6\u5165\u63a7\u5236\u63d2\u4ef6 PodSecurityPolicy\uff08\u81ea\u52a8\uff09"),(0,r.kt)("td",{parentName:"tr",align:null},"\u542f\u7528 Pod \u5b89\u5168\u7b56\u7565\u53ef\u80fd\u4f1a\u5bfc\u81f4\u5e94\u7528\u610f\u5916\u5931\u8d25\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"1.2.33"),(0,r.kt)("td",{parentName:"tr",align:null},"\u786e\u4fdd\u80fd\u6839\u636e\u9700\u8981\u8bbe\u7f6e --encryption-provider-config \u53c2\u6570\uff08\u624b\u52a8\uff09"),(0,r.kt)("td",{parentName:"tr",align:null},"\u542f\u7528\u52a0\u5bc6\u4f1a\u6539\u53d8\u6062\u590d\u52a0\u5bc6\u6570\u636e\u7684\u65b9\u5f0f\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"1.2.34"),(0,r.kt)("td",{parentName:"tr",align:null},"\u786e\u4fdd\u6b63\u786e\u914d\u7f6e\u4e86\u52a0\u5bc6\u63d0\u4f9b\u7a0b\u5e8f\uff08\u624b\u52a8\uff09"),(0,r.kt)("td",{parentName:"tr",align:null},"\u542f\u7528\u52a0\u5bc6\u4f1a\u6539\u53d8\u6062\u590d\u52a0\u5bc6\u6570\u636e\u7684\u65b9\u5f0f\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"4.2.6"),(0,r.kt)("td",{parentName:"tr",align:null},"\u786e\u4fdd --protect-kernel-defaults \u53c2\u6570\u8bbe\u7f6e\u4e3a true\uff08\u81ea\u52a8\uff09"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5728\u914d\u7f6e\u96c6\u7fa4\u4e4b\u524d\u9700\u8981\u7cfb\u7edf\u7ea7\u522b\u7684\u914d\u7f6e\uff0c\u624d\u80fd\u5c06\u6b64\u53c2\u6570\u8bbe\u7f6e\u4e3a true\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"4.2.10"),(0,r.kt)("td",{parentName:"tr",align:null},"\u786e\u4fdd\u6839\u636e\u9700\u8981\u8bbe\u7f6e --tls-cert-file \u548c --tls-private-key-file \u53c2\u6570\uff08\u81ea\u52a8\uff09"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5728\u751f\u6210\u670d\u52a1\u8bc1\u4e66\u65f6\uff0c\u529f\u80fd\u53ef\u80fd\u4f1a\u4e0e\u67d0\u4e9b\u4e91\u63d0\u4f9b\u5546\u6240\u9700\u7684\u4e3b\u673a\u540d\u8986\u76d6\u4e00\u8d77\u4e2d\u65ad\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"5.1.5"),(0,r.kt)("td",{parentName:"tr",align:null},"\u786e\u4fdd\u672a\u4e3b\u52a8\u4f7f\u7528\u9ed8\u8ba4 ServiceAccount\u3002\uff08\u81ea\u52a8\uff09"),(0,r.kt)("td",{parentName:"tr",align:null},"Kubernetes \u63d0\u4f9b\u4e86\u8981\u4f7f\u7528\u7684\u9ed8\u8ba4 ServiceAccount\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"5.2.2"),(0,r.kt)("td",{parentName:"tr",align:null},"\u6700\u5c0f\u5316\u9700\u8981\u5171\u4eab\u4e3b\u673a\u8fdb\u7a0b ID \u547d\u540d\u7a7a\u95f4\u7684\u5bb9\u5668\u51c6\u5165\uff08\u81ea\u52a8\uff09"),(0,r.kt)("td",{parentName:"tr",align:null},"\u542f\u7528 Pod \u5b89\u5168\u7b56\u7565\u53ef\u80fd\u4f1a\u5bfc\u81f4\u5e94\u7528\u610f\u5916\u5931\u8d25\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"5.2.3"),(0,r.kt)("td",{parentName:"tr",align:null},"\u6700\u5c0f\u5316\u9700\u8981\u5171\u4eab\u4e3b\u673a IPC \u547d\u540d\u7a7a\u95f4\u7684\u5bb9\u5668\u51c6\u5165\uff08\u81ea\u52a8\uff09"),(0,r.kt)("td",{parentName:"tr",align:null},"\u542f\u7528 Pod \u5b89\u5168\u7b56\u7565\u53ef\u80fd\u4f1a\u5bfc\u81f4\u5e94\u7528\u610f\u5916\u5931\u8d25\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"5.2.4"),(0,r.kt)("td",{parentName:"tr",align:null},"\u6700\u5c0f\u5316\u9700\u8981\u5171\u4eab\u4e3b\u673a\u7f51\u7edc\u547d\u540d\u7a7a\u95f4\u7684\u5bb9\u5668\u51c6\u5165\uff08\u81ea\u52a8\uff09"),(0,r.kt)("td",{parentName:"tr",align:null},"\u542f\u7528 Pod \u5b89\u5168\u7b56\u7565\u53ef\u80fd\u4f1a\u5bfc\u81f4\u5e94\u7528\u610f\u5916\u5931\u8d25\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"5.2.5"),(0,r.kt)("td",{parentName:"tr",align:null},"\u4f7f\u7528 allowPrivilegeEscalation\uff08\u81ea\u52a8\uff09\u6700\u5c0f\u5316\u5bb9\u5668\u7684\u51c6\u5165"),(0,r.kt)("td",{parentName:"tr",align:null},"\u542f\u7528 Pod \u5b89\u5168\u7b56\u7565\u53ef\u80fd\u4f1a\u5bfc\u81f4\u5e94\u7528\u610f\u5916\u5931\u8d25\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"5.3.2"),(0,r.kt)("td",{parentName:"tr",align:null},"\u786e\u4fdd\u6240\u6709\u547d\u540d\u7a7a\u95f4\u90fd\u5b9a\u4e49\u4e86\u7f51\u7edc\u7b56\u7565\uff08\u81ea\u52a8\uff09"),(0,r.kt)("td",{parentName:"tr",align:null},"\u542f\u7528\u7f51\u7edc\u7b56\u7565\u53ef\u4ee5\u9632\u6b62\u67d0\u4e9b\u5e94\u7528\u8fdb\u884c\u76f8\u4e92\u901a\u4fe1\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"5.6.4"),(0,r.kt)("td",{parentName:"tr",align:null},"\u786e\u4fdd\u4e0d\u4f7f\u7528 Default \u547d\u540d\u7a7a\u95f4\uff08\u81ea\u52a8\uff09"),(0,r.kt)("td",{parentName:"tr",align:null},"Kubernetes \u63d0\u4f9b\u4e86\u4e00\u4e2a Default \u547d\u540d\u7a7a\u95f4\u3002")))),(0,r.kt)("h3",{id:"cis-benchmark-v15-\u4e0d\u9002\u7528\u7684\u6d4b\u8bd5"},"CIS Benchmark v1.5 \u4e0d\u9002\u7528\u7684\u6d4b\u8bd5"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"\u6570\u5b57"),(0,r.kt)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"),(0,r.kt)("th",{parentName:"tr",align:null},"\u4e0d\u9002\u7528\u7684\u539f\u56e0"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"1.1.1"),(0,r.kt)("td",{parentName:"tr",align:null},"\u786e\u4fdd API Server pod \u89c4\u8303\u6587\u4ef6\u6743\u9650\u5177\u6709 644 \u6216\u66f4\u4e25\u683c\u7684\u8bbe\u7f6e\uff08\u81ea\u52a8\uff09"),(0,r.kt)("td",{parentName:"tr",align:null},"RKE \u914d\u7f6e\u7684\u96c6\u7fa4\u4e0d\u9700\u8981\u6216\u7ef4\u62a4 kube-apiserver \u7684\u914d\u7f6e\u6587\u4ef6\u3002\u6240\u6709\u914d\u7f6e\u5728\u5bb9\u5668\u8fd0\u884c\u65f6\u4f5c\u4e3a\u53c2\u6570\u4f20\u5165\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"1.1.2"),(0,r.kt)("td",{parentName:"tr",align:null},"\u786e\u4fdd API Server pod \u89c4\u8303\u6587\u4ef6\u6240\u6709\u6743\u8bbe\u7f6e\u4e3a root:root\uff08\u81ea\u52a8\uff09"),(0,r.kt)("td",{parentName:"tr",align:null},"RKE \u914d\u7f6e\u7684\u96c6\u7fa4\u4e0d\u9700\u8981\u6216\u7ef4\u62a4 kube-apiserver \u7684\u914d\u7f6e\u6587\u4ef6\u3002\u6240\u6709\u914d\u7f6e\u5728\u5bb9\u5668\u8fd0\u884c\u65f6\u4f5c\u4e3a\u53c2\u6570\u4f20\u5165\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"1.1.3"),(0,r.kt)("td",{parentName:"tr",align:null},"\u786e\u4fdd Controller Manager pod \u89c4\u8303\u6587\u4ef6\u6743\u9650\u5177\u6709 644 \u6216\u66f4\u4e25\u683c\u7684\u8bbe\u7f6e\uff08\u81ea\u52a8\uff09"),(0,r.kt)("td",{parentName:"tr",align:null},"RKE \u914d\u7f6e\u7684\u96c6\u7fa4\u4e0d\u9700\u8981\u6216\u7ef4\u62a4 controller-manager \u7684\u914d\u7f6e\u6587\u4ef6\u3002\u6240\u6709\u914d\u7f6e\u5728\u5bb9\u5668\u8fd0\u884c\u65f6\u4f5c\u4e3a\u53c2\u6570\u4f20\u5165\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"1.1.4"),(0,r.kt)("td",{parentName:"tr",align:null},"\u786e\u4fdd Controller Manager pod \u89c4\u8303\u6587\u4ef6\u6240\u6709\u6743\u8bbe\u7f6e\u4e3a root:root\uff08\u81ea\u52a8\uff09"),(0,r.kt)("td",{parentName:"tr",align:null},"RKE \u914d\u7f6e\u7684\u96c6\u7fa4\u4e0d\u9700\u8981\u6216\u7ef4\u62a4 controller-manager \u7684\u914d\u7f6e\u6587\u4ef6\u3002\u6240\u6709\u914d\u7f6e\u5728\u5bb9\u5668\u8fd0\u884c\u65f6\u4f5c\u4e3a\u53c2\u6570\u4f20\u5165\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"1.1.5"),(0,r.kt)("td",{parentName:"tr",align:null},"\u786e\u4fdd Scheduler pod \u89c4\u8303\u6587\u4ef6\u6743\u9650\u5177\u6709 644 \u6216\u66f4\u4e25\u683c\u7684\u8bbe\u7f6e\uff08\u81ea\u52a8\uff09"),(0,r.kt)("td",{parentName:"tr",align:null},"RKE \u914d\u7f6e\u7684\u96c6\u7fa4\u4e0d\u9700\u8981\u6216\u7ef4\u62a4 Scheduler \u7684\u914d\u7f6e\u6587\u4ef6\u3002\u6240\u6709\u914d\u7f6e\u5728\u5bb9\u5668\u8fd0\u884c\u65f6\u4f5c\u4e3a\u53c2\u6570\u4f20\u5165\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"1.1.6"),(0,r.kt)("td",{parentName:"tr",align:null},"\u786e\u4fdd Scheduler pod \u89c4\u8303\u6587\u4ef6\u6240\u6709\u6743\u8bbe\u7f6e\u4e3a root:root\uff08\u81ea\u52a8\uff09"),(0,r.kt)("td",{parentName:"tr",align:null},"RKE \u914d\u7f6e\u7684\u96c6\u7fa4\u4e0d\u9700\u8981\u6216\u7ef4\u62a4 Scheduler \u7684\u914d\u7f6e\u6587\u4ef6\u3002\u6240\u6709\u914d\u7f6e\u5728\u5bb9\u5668\u8fd0\u884c\u65f6\u4f5c\u4e3a\u53c2\u6570\u4f20\u5165\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"1.1.7"),(0,r.kt)("td",{parentName:"tr",align:null},"\u786e\u4fdd etcd pod \u89c4\u8303\u6587\u4ef6\u6743\u9650\u5177\u6709 644 \u6216\u66f4\u4e25\u683c\u7684\u8bbe\u7f6e\uff08\u81ea\u52a8\uff09"),(0,r.kt)("td",{parentName:"tr",align:null},"RKE \u914d\u7f6e\u7684\u96c6\u7fa4\u4e0d\u9700\u8981\u6216\u7ef4\u62a4 etcd \u7684\u914d\u7f6e\u6587\u4ef6\u3002\u6240\u6709\u914d\u7f6e\u5728\u5bb9\u5668\u8fd0\u884c\u65f6\u4f5c\u4e3a\u53c2\u6570\u4f20\u5165\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"1.1.8"),(0,r.kt)("td",{parentName:"tr",align:null},"\u786e\u4fdd etcd pod \u89c4\u8303\u6587\u4ef6\u6240\u6709\u6743\u8bbe\u7f6e\u4e3a root:root\uff08\u81ea\u52a8\uff09"),(0,r.kt)("td",{parentName:"tr",align:null},"RKE \u914d\u7f6e\u7684\u96c6\u7fa4\u4e0d\u9700\u8981\u6216\u7ef4\u62a4 etcd \u7684\u914d\u7f6e\u6587\u4ef6\u3002\u6240\u6709\u914d\u7f6e\u5728\u5bb9\u5668\u8fd0\u884c\u65f6\u4f5c\u4e3a\u53c2\u6570\u4f20\u5165\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"1.1.13"),(0,r.kt)("td",{parentName:"tr",align:null},"\u786e\u4fdd admin.conf \u6587\u4ef6\u6743\u9650\u5177\u6709 644 \u6216\u66f4\u4e25\u683c\u7684\u8bbe\u7f6e\uff08\u81ea\u52a8\uff09"),(0,r.kt)("td",{parentName:"tr",align:null},"RKE \u914d\u7f6e\u7684\u96c6\u7fa4\u4e0d\u4f1a\u5728\u8282\u70b9\u4e0a\u5b58\u50a8 kubernetes \u7684\u9ed8\u8ba4 kubeconfig \u51ed\u8bc1\u6587\u4ef6\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"1.1.14"),(0,r.kt)("td",{parentName:"tr",align:null},"\u786e\u4fdd admin.conf \u6587\u4ef6\u6240\u6709\u6743\u8bbe\u7f6e\u4e3a root:root\uff08\u81ea\u52a8\uff09"),(0,r.kt)("td",{parentName:"tr",align:null},"RKE \u914d\u7f6e\u7684\u96c6\u7fa4\u4e0d\u4f1a\u5728\u8282\u70b9\u4e0a\u5b58\u50a8 kubernetes \u7684\u9ed8\u8ba4 kubeconfig \u51ed\u8bc1\u6587\u4ef6\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"1.1.15"),(0,r.kt)("td",{parentName:"tr",align:null},"\u786e\u4fdd scheduler.conf \u6587\u4ef6\u6743\u9650\u5177\u6709 644 \u6216\u66f4\u4e25\u683c\u7684\u8bbe\u7f6e\uff08\u81ea\u52a8\uff09"),(0,r.kt)("td",{parentName:"tr",align:null},"RKE \u914d\u7f6e\u7684\u96c6\u7fa4\u4e0d\u9700\u8981\u6216\u7ef4\u62a4 Scheduler \u7684\u914d\u7f6e\u6587\u4ef6\u3002\u6240\u6709\u914d\u7f6e\u5728\u5bb9\u5668\u8fd0\u884c\u65f6\u4f5c\u4e3a\u53c2\u6570\u4f20\u5165\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"1.1.16"),(0,r.kt)("td",{parentName:"tr",align:null},"\u786e\u4fdd scheduler.conf \u6587\u4ef6\u6240\u6709\u6743\u8bbe\u7f6e\u4e3a root:root\uff08\u81ea\u52a8\uff09"),(0,r.kt)("td",{parentName:"tr",align:null},"RKE \u914d\u7f6e\u7684\u96c6\u7fa4\u4e0d\u9700\u8981\u6216\u7ef4\u62a4 Scheduler \u7684\u914d\u7f6e\u6587\u4ef6\u3002\u6240\u6709\u914d\u7f6e\u5728\u5bb9\u5668\u8fd0\u884c\u65f6\u4f5c\u4e3a\u53c2\u6570\u4f20\u5165\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"1.1.17"),(0,r.kt)("td",{parentName:"tr",align:null},"\u786e\u4fdd controller-manager.conf \u6587\u4ef6\u6743\u9650\u5177\u6709 644 \u6216\u66f4\u4e25\u683c\u7684\u8bbe\u7f6e\uff08\u81ea\u52a8\uff09"),(0,r.kt)("td",{parentName:"tr",align:null},"RKE \u914d\u7f6e\u7684\u96c6\u7fa4\u4e0d\u9700\u8981\u6216\u7ef4\u62a4 controller-manager \u7684\u914d\u7f6e\u6587\u4ef6\u3002\u6240\u6709\u914d\u7f6e\u5728\u5bb9\u5668\u8fd0\u884c\u65f6\u4f5c\u4e3a\u53c2\u6570\u4f20\u5165\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"1.1.18"),(0,r.kt)("td",{parentName:"tr",align:null},"\u786e\u4fdd\u5c06 controller-manager.conf \u6587\u4ef6\u6240\u6709\u6743\u8bbe\u7f6e\u4e3a root:root\uff08\u81ea\u52a8\uff09"),(0,r.kt)("td",{parentName:"tr",align:null},"RKE \u914d\u7f6e\u7684\u96c6\u7fa4\u4e0d\u9700\u8981\u6216\u7ef4\u62a4 controller-manager \u7684\u914d\u7f6e\u6587\u4ef6\u3002\u6240\u6709\u914d\u7f6e\u5728\u5bb9\u5668\u8fd0\u884c\u65f6\u4f5c\u4e3a\u53c2\u6570\u4f20\u5165\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"1.3.6"),(0,r.kt)("td",{parentName:"tr",align:null},"\u786e\u4fdd RotateKubeletServerCertificate \u53c2\u6570\u8bbe\u7f6e\u4e3a true\uff08\u81ea\u52a8\uff09"),(0,r.kt)("td",{parentName:"tr",align:null},"RKE \u914d\u7f6e\u7684\u96c6\u7fa4\u76f4\u63a5\u4f7f\u7528 RKE \u5904\u7406\u8bc1\u4e66\u8f6e\u6362\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"4.1.1"),(0,r.kt)("td",{parentName:"tr",align:null},"\u786e\u4fdd kubelet \u670d\u52a1\u6587\u4ef6\u6743\u9650\u5177\u6709 644 \u6216\u66f4\u4e25\u683c\u7684\u8bbe\u7f6e\uff08\u81ea\u52a8\uff09"),(0,r.kt)("td",{parentName:"tr",align:null},"RKE \u914d\u7f6e\u7684\u96c6\u7fa4\u4e0d\u9700\u8981\u6216\u7ef4\u62a4 kubelet \u670d\u52a1\u7684\u914d\u7f6e\u6587\u4ef6\u3002\u6240\u6709\u914d\u7f6e\u5728\u5bb9\u5668\u8fd0\u884c\u65f6\u4f5c\u4e3a\u53c2\u6570\u4f20\u5165\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"4.1.2"),(0,r.kt)("td",{parentName:"tr",align:null},"\u786e\u4fdd kubelet \u670d\u52a1\u6587\u4ef6\u6240\u6709\u6743\u8bbe\u7f6e\u4e3a root:root\uff08\u81ea\u52a8\uff09"),(0,r.kt)("td",{parentName:"tr",align:null},"RKE \u914d\u7f6e\u7684\u96c6\u7fa4\u4e0d\u9700\u8981\u6216\u7ef4\u62a4 kubelet \u670d\u52a1\u7684\u914d\u7f6e\u6587\u4ef6\u3002\u6240\u6709\u914d\u7f6e\u5728\u5bb9\u5668\u8fd0\u884c\u65f6\u4f5c\u4e3a\u53c2\u6570\u4f20\u5165\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"4.1.9"),(0,r.kt)("td",{parentName:"tr",align:null},"\u786e\u4fdd kubelet \u914d\u7f6e\u6587\u4ef6\u6743\u9650\u5177\u6709 644 \u6216\u66f4\u4e25\u683c\u7684\u8bbe\u7f6e\uff08\u81ea\u52a8\uff09"),(0,r.kt)("td",{parentName:"tr",align:null},"RKE \u914d\u7f6e\u7684\u96c6\u7fa4\u4e0d\u9700\u8981\u6216\u7ef4\u62a4 kubelet \u7684\u914d\u7f6e\u6587\u4ef6\u3002\u6240\u6709\u914d\u7f6e\u5728\u5bb9\u5668\u8fd0\u884c\u65f6\u4f5c\u4e3a\u53c2\u6570\u4f20\u5165\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"4.1.10"),(0,r.kt)("td",{parentName:"tr",align:null},"\u786e\u4fdd kubelet \u914d\u7f6e\u6587\u4ef6\u6240\u6709\u6743\u8bbe\u7f6e\u4e3a root:root\uff08\u81ea\u52a8\uff09"),(0,r.kt)("td",{parentName:"tr",align:null},"RKE \u914d\u7f6e\u7684\u96c6\u7fa4\u4e0d\u9700\u8981\u6216\u7ef4\u62a4 kubelet \u7684\u914d\u7f6e\u6587\u4ef6\u3002\u6240\u6709\u914d\u7f6e\u5728\u5bb9\u5668\u8fd0\u884c\u65f6\u4f5c\u4e3a\u53c2\u6570\u4f20\u5165\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"4.2.12"),(0,r.kt)("td",{parentName:"tr",align:null},"\u786e\u4fdd RotateKubeletServerCertificate \u53c2\u6570\u8bbe\u7f6e\u4e3a true\uff08\u81ea\u52a8\uff09"),(0,r.kt)("td",{parentName:"tr",align:null},"RKE \u914d\u7f6e\u7684\u96c6\u7fa4\u76f4\u63a5\u4f7f\u7528 RKE \u5904\u7406\u8bc1\u4e66\u8f6e\u6362\u3002")))))}m.isMDXComponent=!0}}]);