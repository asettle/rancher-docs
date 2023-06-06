"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[63329],{3905:(e,r,t)=>{t.d(r,{Zo:()=>c,kt:()=>h});var n=t(67294);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function s(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?s(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function l(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},s=Object.keys(e);for(n=0;n<s.length;n++)t=s[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)t=s[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var o=n.createContext({}),p=function(e){var r=n.useContext(o),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},c=function(e){var r=p(e.components);return n.createElement(o.Provider,{value:r},e.children)},u={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},v=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,s=e.originalType,o=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),v=p(t),h=a,m=v["".concat(o,".").concat(h)]||v[h]||u[h]||s;return t?n.createElement(m,i(i({ref:r},c),{},{components:t})):n.createElement(m,i({ref:r},c))}));function h(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var s=t.length,i=new Array(s);i[0]=v;var l={};for(var o in r)hasOwnProperty.call(r,o)&&(l[o]=r[o]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var p=2;p<s;p++)i[p]=t[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}v.displayName="MDXCreateElement"},15183:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>o,contentTitle:()=>i,default:()=>u,frontMatter:()=>s,metadata:()=>l,toc:()=>p});var n=t(87462),a=(t(67294),t(3905));const s={title:"Harvester \u96c6\u6210"},i=void 0,l={unversionedId:"integrations-in-rancher/harvester",id:"integrations-in-rancher/harvester",title:"Harvester \u96c6\u6210",description:"Harvester \u662f Rancher 2.6.1 \u65b0\u589e\u7684\u529f\u80fd\uff0cHarvester \u662f\u57fa\u4e8e Kubernetes \u6784\u5efa\u7684\u5f00\u6e90\u8d85\u878d\u5408\u57fa\u7840\u67b6\u6784 (HCI) \u8f6f\u4ef6\u3002Harvester \u5b89\u88c5\u5728\u88f8\u91d1\u5c5e\u670d\u52a1\u5668\u4e0a\uff0c\u63d0\u4f9b\u96c6\u6210\u7684\u865a\u62df\u5316\u548c\u5206\u5e03\u5f0f\u5b58\u50a8\u529f\u80fd\u3002\u867d\u7136 Harvester \u4f7f\u7528 Kubernetes \u8fd0\u884c\uff0c\u4f46\u5b83\u4e0d\u9700\u8981\u7528\u6237\u4e86\u89e3 Kubernetes \u6982\u5ff5\uff0c\u56e0\u6b64\u662f\u4e00\u4e2a\u66f4\u52a0\u7528\u6237\u53cb\u597d\u7684\u5e94\u7528\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/integrations-in-rancher/harvester.md",sourceDirName:"integrations-in-rancher",slug:"/integrations-in-rancher/harvester",permalink:"/zh/integrations-in-rancher/harvester",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/docs/integrations-in-rancher/harvester.md",tags:[],version:"current",lastUpdatedAt:1685740776,formattedLastUpdatedAt:"2023\u5e746\u67082\u65e5",frontMatter:{title:"Harvester \u96c6\u6210"},sidebar:"tutorialSidebar",previous:{title:"\u5728\u4ee3\u7406\u540e\u4f7f\u7528 Fleet",permalink:"/zh/integrations-in-rancher/fleet-gitops-at-scale/use-fleet-behind-a-proxy"},next:{title:"Istio",permalink:"/zh/pages-for-subheaders/istio"}},o={},p=[{value:"\u529f\u80fd\u5f00\u5173",id:"\u529f\u80fd\u5f00\u5173",level:3},{value:"Harvester \u4e3b\u673a\u9a71\u52a8",id:"harvester-\u4e3b\u673a\u9a71\u52a8",level:3},{value:"\u7aef\u53e3\u8981\u6c42",id:"\u7aef\u53e3\u8981\u6c42",level:3},{value:"\u9650\u5236",id:"\u9650\u5236",level:3}],c={toc:p};function u(e){let{components:r,...t}=e;return(0,a.kt)("wrapper",(0,n.Z)({},c,t,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Harvester \u662f Rancher 2.6.1 \u65b0\u589e\u7684\u529f\u80fd\uff0c",(0,a.kt)("a",{parentName:"p",href:"https://docs.harvesterhci.io/"},"Harvester")," \u662f\u57fa\u4e8e Kubernetes \u6784\u5efa\u7684\u5f00\u6e90\u8d85\u878d\u5408\u57fa\u7840\u67b6\u6784 (HCI) \u8f6f\u4ef6\u3002Harvester \u5b89\u88c5\u5728\u88f8\u91d1\u5c5e\u670d\u52a1\u5668\u4e0a\uff0c\u63d0\u4f9b\u96c6\u6210\u7684\u865a\u62df\u5316\u548c\u5206\u5e03\u5f0f\u5b58\u50a8\u529f\u80fd\u3002\u867d\u7136 Harvester \u4f7f\u7528 Kubernetes \u8fd0\u884c\uff0c\u4f46\u5b83\u4e0d\u9700\u8981\u7528\u6237\u4e86\u89e3 Kubernetes \u6982\u5ff5\uff0c\u56e0\u6b64\u662f\u4e00\u4e2a\u66f4\u52a0\u7528\u6237\u53cb\u597d\u7684\u5e94\u7528\u3002"),(0,a.kt)("hr",null),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("em",{parentName:"strong"},"v2.6.3 \u7684\u65b0\u529f\u80fd"))),(0,a.kt)("p",null,"Harvester \u5df2 GA\u3002\u6709\u5173\u6240\u6709\u66f4\u65b0\uff0c\u8bf7\u53c2\u9605 ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/harvester/harvester/releases"},"Harvester \u53d1\u884c\u8bf4\u660e"),"\u3002"),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"\u529f\u80fd\u5f00\u5173"},"\u529f\u80fd\u5f00\u5173"),(0,a.kt)("p",null,"\u4f60\u53ef\u4ee5\u4f7f\u7528 Harvester \u7684\u529f\u80fd\u5f00\u5173\u6765\u7ba1\u7406 Harvester \u5728 Rancher \u865a\u62df\u5316\u7ba1\u7406\u9875\u9762\u7684\u8bbf\u95ee\uff0c\u7528\u6237\u53ef\u4ee5\u5728\u8be5\u9875\u9762\u76f4\u63a5\u5bfc\u822a\u5230 Harvester \u96c6\u7fa4\u5e76\u8bbf\u95ee Harvester UI\u3002Harvester \u7684\u529f\u80fd\u5f00\u5173\u662f\u9ed8\u8ba4\u542f\u7528\u7684\u3002\u5982\u9700\u4e86\u89e3 Rancher \u4e2d\u529f\u80fd\u5f00\u5173\u7684\u66f4\u591a\u8be6\u7ec6\u4fe1\u606f\uff0c\u8bf7\u5355\u51fb",(0,a.kt)("a",{parentName:"p",href:"/zh/pages-for-subheaders/enable-experimental-features"},"\u6b64\u5904"),"\u3002"),(0,a.kt)("p",null,"\u8981\u5bfc\u822a\u5230 Harvester \u96c6\u7fa4\uff0c\u8bf7\u5355\u51fb ",(0,a.kt)("strong",{parentName:"p"},"\u2630 > \u865a\u62df\u5316\u7ba1\u7406"),"\u3002\u5728 ",(0,a.kt)("strong",{parentName:"p"},"Harvester \u96c6\u7fa4"),"\u9875\u9762\u4e2d\uff0c\u5355\u51fb\u96c6\u7fa4\u4ee5\u8f6c\u5230\u8be5 Harvester \u96c6\u7fa4\u7684\u89c6\u56fe\u3002"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\u5982\u679c\u542f\u7528\u4e86 Harvester \u529f\u80fd\u5f00\u5173\uff0c\u5219\u4f1a\u4ece\u5217\u51fa Kubernetes \u96c6\u7fa4\u7684\u4efb\u4f55\u9875\u9762\u6216\u5e94\u7528\uff08\u4f8b\u5982 Fleet \u548c\u591a\u96c6\u7fa4\u5e94\u7528\uff09\u4e2d\u8fc7\u6ee4\u6389 Harvester \u96c6\u7fa4\u3002")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\u5982\u679c\u7981\u7528\u4e86 Harvester \u529f\u80fd\u5f00\u5173\uff0c\u5e76\u4e14\u5bfc\u5165\u4e86 Harvester \u96c6\u7fa4\uff0cHarvester \u96c6\u7fa4\u5c06\u663e\u793a\u5728",(0,a.kt)("strong",{parentName:"p"},"\u96c6\u7fa4\u7ba1\u7406"),"\u9875\u9762\u7684 Rancher \u96c6\u7fa4\u5217\u8868\u4e2d\u3002\u4ec5\u5f53\u529f\u80fd\u5f00\u5173\u4e3a\u5173\u95ed\u65f6\uff0cHarvester \u96c6\u7fa4\u624d\u4f1a\u663e\u793a\u5728\u96c6\u7fa4\u5217\u8868\u4e2d\u3002")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\u96c6\u6210 Harvester \u540e\uff0c\u4f60\u53ef\u4ee5\u5c06 Harvester \u96c6\u7fa4\u5bfc\u5165 Rancher\uff0c\u5bf9\u5e94\u7684\u96c6\u7fa4\u7c7b\u578b\u662f ",(0,a.kt)("inlineCode",{parentName:"p"},"Harvester"),"\u3002")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\u7528\u6237\u53ea\u80fd\u5728",(0,a.kt)("strong",{parentName:"p"},"\u865a\u62df\u5316\u7ba1\u7406"),"\u9875\u9762\u4e0a\u5bfc\u5165 Harvester \u96c6\u7fa4\u3002\u5728",(0,a.kt)("strong",{parentName:"p"},"\u96c6\u7fa4\u7ba1\u7406"),"\u9875\u9762\u4e0a\u5bfc\u5165\u96c6\u7fa4\u662f\u4e0d\u652f\u6301\u7684\uff0c\u800c\u4e14\u4f1a\u51fa\u73b0\u8b66\u544a\u3002\u5efa\u8bae\u4f60\u8fd4\u56de",(0,a.kt)("strong",{parentName:"p"},"\u865a\u62df\u5316\u7ba1\u7406"),"\u9875\u9762\u6267\u884c\u6b64\u64cd\u4f5c\u3002"))),(0,a.kt)("h3",{id:"harvester-\u4e3b\u673a\u9a71\u52a8"},"Harvester \u4e3b\u673a\u9a71\u52a8"),(0,a.kt)("p",null,"\u4ece Rancher v2.6.3 \u5f00\u59cb\uff0c",(0,a.kt)("a",{parentName:"p",href:"https://docs.harvesterhci.io/v1.1/rancher/node/node-driver/"},"Harvester \u4e3b\u673a\u9a71\u52a8")," \u5df2\u5728 Rancher \u7684 RKE \u548c RKE2 \u9009\u9879\u4e2d GA\u3002\u65e0\u8bba Harvester \u529f\u80fd\u5f00\u5173\u662f\u5426\u542f\u7528\uff0c\u4e3b\u673a\u9a71\u52a8\u90fd\u662f\u53ef\u7528\u7684\u3002\u8bf7\u6ce8\u610f\uff0c\u9ed8\u8ba4\u60c5\u51b5\u4e0b\u4e3b\u673a\u9a71\u52a8\u662f\u5173\u95ed\u7684\u3002\u7528\u6237\u53ea\u80fd\u901a\u8fc7",(0,a.kt)("strong",{parentName:"p"},"\u96c6\u7fa4\u7ba1\u7406"),"\u9875\u9762\u5728 Harvester \u4e0a\u521b\u5efa RKE \u6216 RKE2 \u96c6\u7fa4\u3002"),(0,a.kt)("p",null,"Harvester \u5141\u8bb8\u901a\u8fc7 Harvester UI \u4e0a\u4f20\u548c\u663e\u793a ",(0,a.kt)("inlineCode",{parentName:"p"},".ISO")," \u955c\u50cf\uff0c\u4f46 Rancher UI \u4e0d\u652f\u6301\u3002\u8fd9\u662f\u56e0\u4e3a ",(0,a.kt)("inlineCode",{parentName:"p"},".ISO")," \u955c\u50cf\u901a\u5e38\u9700\u8981\u989d\u5916\u7684\u8bbe\u7f6e\uff0c\u8fd9\u4f1a\u5e72\u6270\u5e72\u51c0\u7684\u90e8\u7f72\uff08\u5373\u65e0\u9700\u7528\u6237\u5e72\u9884\uff09\uff0c\u5e76\u4e14\u5b83\u4eec\u901a\u5e38\u4e0d\u7528\u4e8e\u4e91\u73af\u5883\u3002"),(0,a.kt)("p",null,"\u5982\u9700\u4e86\u89e3 Rancher \u4e2d\u4e3b\u673a\u9a71\u52a8\u7684\u66f4\u591a\u8be6\u7ec6\u4fe1\u606f\uff0c\u8bf7\u5355\u51fb",(0,a.kt)("a",{parentName:"p",href:"/zh/pages-for-subheaders/about-provisioning-drivers#%E4%B8%BB%E6%9C%BA%E9%A9%B1%E5%8A%A8"},"\u6b64\u5904"),"\u3002"),(0,a.kt)("h3",{id:"\u7aef\u53e3\u8981\u6c42"},"\u7aef\u53e3\u8981\u6c42"),(0,a.kt)("p",null,"\u53ef\u4ee5\u5728",(0,a.kt)("a",{parentName:"p",href:"https://docs.harvesterhci.io/v1.1/install/requirements#networking"},"\u6b64\u5904"),"\u627e\u5230 Harvester \u96c6\u7fa4\u7684\u7aef\u53e3\u8981\u6c42\u3002"),(0,a.kt)("p",null,"\u6b64\u5916\uff0c\u5176\u4ed6\u7f51\u7edc\u6ce8\u610f\u4e8b\u9879\u5982\u4e0b\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u8bf7\u52a1\u5fc5\u4e3a VM VLAN \u7f51\u7edc\u542f\u7528\u7269\u7406\u4ea4\u6362\u673a\u7684 VLAN \u4e2d\u7ee7\u7aef\u53e3\u3002"),(0,a.kt)("li",{parentName:"ul"},"\u6309\u7167",(0,a.kt)("a",{parentName:"li",href:"https://docs.harvesterhci.io/v1.1/networking/clusternetwork"},"\u6b64\u5904"),"\u7684\u7f51\u7edc\u8bbe\u7f6e\u6307\u5357\u8fdb\u884c\u64cd\u4f5c\u3002")),(0,a.kt)("p",null,"\u5bf9\u4e8e\u5176\u4ed6\u96c6\u7fa4\uff08\u4f8b\u5982 K3s \u548c RKE1\uff09\u7684\u5176\u4ed6\u7aef\u53e3\u8981\u6c42\uff0c\u8bf7\u53c2\u9605",(0,a.kt)("a",{parentName:"p",href:"https://docs.harvesterhci.io/v1.1/install/requirements/#guest-clusters"},"\u8fd9\u4e9b\u6587\u6863"),"\u3002"),(0,a.kt)("h3",{id:"\u9650\u5236"},"\u9650\u5236"),(0,a.kt)("hr",null),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u4ec5\u9002\u7528\u4e8e Rancher v2.6.1 \u548c v2.6.2"),"\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Harvester 0.3.0 \u4e0d\u652f\u6301\u79bb\u7ebf\u73af\u5883\u5b89\u88c5\u3002"),(0,a.kt)("li",{parentName:"ul"},"\u4e0d\u652f\u6301\u5c06 Harvester 0.2.0 \u5347\u7ea7\u5230 0.3.0\uff0c\u4e5f\u4e0d\u652f\u6301\u5347\u7ea7\u5230\u65b0\u7684 1.0.0 \u7248\u672c\u3002")),(0,a.kt)("hr",null))}u.isMDXComponent=!0}}]);