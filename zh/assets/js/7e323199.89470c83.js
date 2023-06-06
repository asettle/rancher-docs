"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[75559],{3905:(e,r,t)=>{t.d(r,{Zo:()=>u,kt:()=>h});var n=t(67294);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function c(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function l(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?c(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function i(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},c=Object.keys(e);for(n=0;n<c.length;n++)t=c[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)t=c[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=n.createContext({}),o=function(e){var r=n.useContext(s),t=r;return e&&(t="function"==typeof e?e(r):l(l({},r),e)),t},u=function(e){var r=o(e.components);return n.createElement(s.Provider,{value:r},e.children)},p={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},d=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,c=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=o(t),h=a,f=d["".concat(s,".").concat(h)]||d[h]||p[h]||c;return t?n.createElement(f,l(l({ref:r},u),{},{components:t})):n.createElement(f,l({ref:r},u))}));function h(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var c=t.length,l=new Array(c);l[0]=d;var i={};for(var s in r)hasOwnProperty.call(r,s)&&(i[s]=r[s]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var o=2;o<c;o++)l[o]=t[o];return n.createElement.apply(null,l)}return n.createElement.apply(null,t)}d.displayName="MDXCreateElement"},38313:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>s,contentTitle:()=>l,default:()=>p,frontMatter:()=>c,metadata:()=>i,toc:()=>o});var n=t(87462),a=(t(67294),t(3905));const c={title:"Rancher \u90e8\u7f72\u7b56\u7565"},l=void 0,i={unversionedId:"reference-guides/best-practices/rancher-server/rancher-deployment-strategy",id:"reference-guides/best-practices/rancher-server/rancher-deployment-strategy",title:"Rancher \u90e8\u7f72\u7b56\u7565",description:"\u672c\u6587\u63d0\u4f9b Rancher \u5b9e\u4f8b\u7684\u4e24\u79cd\u90e8\u7f72\u7b56\u7565\uff0c\u7528\u4e8e\u7ba1\u7406\u4e0b\u6e38 Kubernetes \u96c6\u7fa4\u3002\u6bcf\u79cd\u7b56\u7565\u90fd\u6709\u4f18\u7f3a\u70b9\u3002\u8bf7\u6309\u7167\u4f60\u7684\u5b9e\u9645\u60c5\u51b5\u9009\u62e9\u6700\u9002\u5408\u7684\u90e8\u7f72\u7b56\u7565.",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/reference-guides/best-practices/rancher-server/rancher-deployment-strategy.md",sourceDirName:"reference-guides/best-practices/rancher-server",slug:"/reference-guides/best-practices/rancher-server/rancher-deployment-strategy",permalink:"/zh/reference-guides/best-practices/rancher-server/rancher-deployment-strategy",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/docs/reference-guides/best-practices/rancher-server/rancher-deployment-strategy.md",tags:[],version:"current",lastUpdatedAt:1685574148,formattedLastUpdatedAt:"2023\u5e745\u670831\u65e5",frontMatter:{title:"Rancher \u90e8\u7f72\u7b56\u7565"},sidebar:"tutorialSidebar",previous:{title:"\u5728 vSphere \u73af\u5883\u4e2d\u5b89\u88c5 Rancher",permalink:"/zh/reference-guides/best-practices/rancher-server/on-premises-rancher-in-vsphere"},next:{title:"Rancher \u8fd0\u884c\u6280\u5de7",permalink:"/zh/reference-guides/best-practices/rancher-server/tips-for-running-rancher"}},s={},o=[{value:"\u4e2d\u5fc3\u8f90\u5c04\u578b\u7b56\u7565",id:"\u4e2d\u5fc3\u8f90\u5c04\u578b\u7b56\u7565",level:2},{value:"\u4f18\u70b9",id:"\u4f18\u70b9",level:3},{value:"\u7f3a\u70b9",id:"\u7f3a\u70b9",level:3},{value:"\u533a\u57df\u578b\u7b56\u7565",id:"\u533a\u57df\u578b\u7b56\u7565",level:2},{value:"\u4f18\u70b9",id:"\u4f18\u70b9-1",level:3},{value:"\u7f3a\u70b9",id:"\u7f3a\u70b9-1",level:3}],u={toc:o};function p(e){let{components:r,...t}=e;return(0,a.kt)("wrapper",(0,n.Z)({},u,t,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"\u672c\u6587\u63d0\u4f9b Rancher \u5b9e\u4f8b\u7684\u4e24\u79cd\u90e8\u7f72\u7b56\u7565\uff0c\u7528\u4e8e\u7ba1\u7406\u4e0b\u6e38 Kubernetes \u96c6\u7fa4\u3002\u6bcf\u79cd\u7b56\u7565\u90fd\u6709\u4f18\u7f3a\u70b9\u3002\u8bf7\u6309\u7167\u4f60\u7684\u5b9e\u9645\u60c5\u51b5\u9009\u62e9\u6700\u9002\u5408\u7684\u90e8\u7f72\u7b56\u7565."),(0,a.kt)("h2",{id:"\u4e2d\u5fc3\u8f90\u5c04\u578b\u7b56\u7565"},"\u4e2d\u5fc3\u8f90\u5c04\u578b\u7b56\u7565"),(0,a.kt)("hr",null),(0,a.kt)("p",null,"\u5728\u4e2d\u5fc3\u8f90\u5c04\u578b\u90e8\u7f72\u4e2d\uff0c\u4e00\u4e2a Rancher \u5b9e\u4f8b\u5c31\u53ef\u4ee5\u7ba1\u7406\u904d\u5e03\u5168\u7403\u7684 Kubernetes \u96c6\u7fa4\u3002Rancher \u5b9e\u4f8b\u8fd0\u884c\u5728\u9ad8\u53ef\u7528 Kubernetes \u96c6\u7fa4\u4e0a\uff0c\u5e76\u4e14\u4f1a\u53d7\u5ef6\u8fdf\u5f71\u54cd\u3002"),(0,a.kt)("h3",{id:"\u4f18\u70b9"},"\u4f18\u70b9"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u53ef\u4ee5\u901a\u8fc7\u4e00\u4e2a controlplane \u754c\u9762\u67e5\u770b\u6240\u6709\u533a\u57df\u548c\u73af\u5883\u3002"),(0,a.kt)("li",{parentName:"ul"},"Kubernetes \u4e0d\u9700\u8981 Rancher \u8fdb\u884c\u64cd\u4f5c\uff0c\u5e76\u4e14\u53ef\u4ee5\u5bb9\u5fcd\u4e0e Rancher \u5b9e\u4f8b\u65ad\u5f00\u8fde\u63a5\u3002")),(0,a.kt)("h3",{id:"\u7f3a\u70b9"},"\u7f3a\u70b9"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u53d7\u9650\u4e8e\u7f51\u7edc\u5ef6\u8fdf\u3002"),(0,a.kt)("li",{parentName:"ul"},"\u5982\u679c Rancher \u51fa\u73b0\u6545\u969c\uff0c\u5728\u6062\u590d\u4e4b\u524d\u4e0d\u53ef\u4ee5\u5728\u5168\u7403\u8303\u56f4\u5185\u521b\u5efa\u65b0\u670d\u52a1\u3002\u4f46\u662f\u6bcf\u4e2a Kubernetes \u96c6\u7fa4\u90fd\u53ef\u4ee5\u7ee7\u7eed\u5355\u72ec\u7ba1\u7406\u3002")),(0,a.kt)("h2",{id:"\u533a\u57df\u578b\u7b56\u7565"},"\u533a\u57df\u578b\u7b56\u7565"),(0,a.kt)("hr",null),(0,a.kt)("p",null,"\u5728\u533a\u57df\u578b\u90e8\u7f72\u6a21\u578b\u4e2d\uff0cRancher \u5b9e\u4f8b\u90e8\u7f72\u5728\u9760\u8fd1\u4e0b\u6e38 Kubernetes \u96c6\u7fa4\u7684\u4f4d\u7f6e\u3002"),(0,a.kt)("h3",{id:"\u4f18\u70b9-1"},"\u4f18\u70b9"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u5982\u679c\u67d0\u4e2a\u533a\u57df\u7684 Rancher \u5b9e\u4f8b\u51fa\u73b0\u6545\u969c\uff0c\u5176\u4ed6\u533a\u57df\u5185\u7684 Rancher \u529f\u80fd\u4ecd\u7136\u53ef\u4ee5\u4fdd\u6301\u6b63\u5e38\u3002"),(0,a.kt)("li",{parentName:"ul"},"Rancher \u548c\u4e0b\u6e38\u96c6\u7fa4\u4e4b\u95f4\u7684\u7f51\u7edc\u5ef6\u8fdf\u5927\u5927\u964d\u4f4e\uff0c\u63d0\u9ad8\u4e86 Rancher \u7684\u6027\u80fd\u3002"),(0,a.kt)("li",{parentName:"ul"},"\u4f60\u53ef\u4ee5\u5728\u6bcf\u4e2a\u533a\u57df\u5185\u72ec\u7acb\u5347\u7ea7 Rancher\u3002")),(0,a.kt)("h3",{id:"\u7f3a\u70b9-1"},"\u7f3a\u70b9"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u7ba1\u7406\u591a\u4e2a Rancher \u5b89\u88c5\u7684\u5f00\u9500\u8f83\u5927\u3002"),(0,a.kt)("li",{parentName:"ul"},"\u9700\u8981\u5728\u591a\u4e2a\u754c\u9762\u4e2d\u67e5\u770b\u4e0d\u540c\u533a\u57df\u7684 Kubernetes \u96c6\u7fa4\u3002"),(0,a.kt)("li",{parentName:"ul"},"\u5728 Rancher \u4e2d\u90e8\u7f72\u591a\u96c6\u7fa4\u5e94\u7528\u65f6\uff0c\u9700\u8981\u5728\u6bcf\u4e2a Rancher Server \u4e2d\u91cd\u590d\u90e8\u7f72\u6b65\u9aa4\u3002")))}p.isMDXComponent=!0}}]);