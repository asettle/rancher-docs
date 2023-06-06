"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[52640],{3905:(e,t,a)=>{a.d(t,{Zo:()=>m,kt:()=>N});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var o=n.createContext({}),k=function(e){var t=n.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},m=function(e){var t=k(e.components);return n.createElement(o.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,o=e.parentName,m=p(e,["components","mdxType","originalType","parentName"]),u=k(a),N=r,c=u["".concat(o,".").concat(N)]||u[N]||s[N]||l;return a?n.createElement(c,i(i({ref:t},m),{},{components:a})):n.createElement(c,i({ref:t},m))}));function N(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,i=new Array(l);i[0]=u;var p={};for(var o in t)hasOwnProperty.call(t,o)&&(p[o]=t[o]);p.originalType=e,p.mdxType="string"==typeof e?e:r,i[1]=p;for(var k=2;k<l;k++)i[k]=a[k];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},44716:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>o,contentTitle:()=>i,default:()=>c,frontMatter:()=>l,metadata:()=>p,toc:()=>k});var n=a(87462),r=(a(67294),a(3905));const l={title:"\u6d41\u6c34\u7ebf"},i=void 0,p={unversionedId:"pages-for-subheaders/pipelines",id:"version-2.6/pages-for-subheaders/pipelines",title:"\u6d41\u6c34\u7ebf",description:"- Rancher 2.5 \u5f00\u59cb\u5df2\u5f03\u7528\u57fa\u4e8e Git \u7684\u90e8\u7f72\u6d41\u6c34\u7ebf\u3002\u6211\u4eec\u5efa\u8bae\u4f7f\u7528\u7531 Fleet \u63d0\u4f9b\u652f\u6301\u7684 Rancher Continuous Delivery (CD) \u6765\u5904\u7406\u6d41\u6c34\u7ebf\u3002\u5982\u9700\u5728 Rancher \u4e2d\u8bbf\u95ee Fleet\uff0c\u8bf7\u5355\u51fb \u2630 > \u6301\u7eed\u4ea4\u4ed8\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-2.6/pages-for-subheaders/pipelines.md",sourceDirName:"pages-for-subheaders",slug:"/pages-for-subheaders/pipelines",permalink:"/zh/v2.6/pages-for-subheaders/pipelines",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/versioned_docs/version-2.6/pages-for-subheaders/pipelines.md",tags:[],version:"2.6",lastUpdatedAt:1672712056,formattedLastUpdatedAt:"2023\u5e741\u67083\u65e5",frontMatter:{title:"\u6d41\u6c34\u7ebf"},sidebar:"tutorialSidebar",previous:{title:"RKE1 \u793a\u4f8b YAML",permalink:"/zh/v2.6/reference-guides/rke1-template-example-yaml"},next:{title:"\u6982\u5ff5",permalink:"/zh/v2.6/reference-guides/pipelines/concepts"}},o={},k=[{value:"\u6982\u5ff5",id:"\u6982\u5ff5",level:2},{value:"\u6d41\u6c34\u7ebf\u7684\u5de5\u4f5c\u539f\u7406",id:"\u6d41\u6c34\u7ebf\u7684\u5de5\u4f5c\u539f\u7406",level:2},{value:"\u6d41\u6c34\u7ebf\u7684 RBAC",id:"\u6d41\u6c34\u7ebf\u7684-rbac",level:2},{value:"\u8bbe\u7f6e\u6d41\u6c34\u7ebf",id:"\u8bbe\u7f6e\u6d41\u6c34\u7ebf",level:2},{value:"\u5148\u51b3\u6761\u4ef6",id:"\u5148\u51b3\u6761\u4ef6",level:3},{value:"1. \u914d\u7f6e\u7248\u672c\u63a7\u5236\u63d0\u4f9b\u5546",id:"1-\u914d\u7f6e\u7248\u672c\u63a7\u5236\u63d0\u4f9b\u5546",level:3},{value:"2. \u914d\u7f6e\u4ed3\u5e93",id:"2-\u914d\u7f6e\u4ed3\u5e93",level:3},{value:"3. \u914d\u7f6e\u6d41\u6c34\u7ebf",id:"3-\u914d\u7f6e\u6d41\u6c34\u7ebf",level:3},{value:"\u6d41\u6c34\u7ebf\u914d\u7f6e\u53c2\u8003",id:"\u6d41\u6c34\u7ebf\u914d\u7f6e\u53c2\u8003",level:2},{value:"\u8fd0\u884c\u6d41\u6c34\u7ebf",id:"\u8fd0\u884c\u6d41\u6c34\u7ebf",level:2},{value:"\u89e6\u53d1\u6d41\u6c34\u7ebf",id:"\u89e6\u53d1\u6d41\u6c34\u7ebf",level:2},{value:"\u4fee\u6539\u4ed3\u5e93\u7684\u4e8b\u4ef6\u89e6\u53d1\u5668",id:"\u4fee\u6539\u4ed3\u5e93\u7684\u4e8b\u4ef6\u89e6\u53d1\u5668",level:3}],m=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,r.kt)("div",t)},s=m("Tabs"),u=m("TabItem"),N={toc:k};function c(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},N,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("admonition",{title:"\u6ce8\u610f\u4e8b\u9879",type:"note"},(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Rancher 2.5 \u5f00\u59cb\u5df2\u5f03\u7528\u57fa\u4e8e Git \u7684\u90e8\u7f72\u6d41\u6c34\u7ebf\u3002\u6211\u4eec\u5efa\u8bae\u4f7f\u7528\u7531 ",(0,r.kt)("a",{parentName:"p",href:"/zh/v2.6/how-to-guides/new-user-guides/deploy-apps-across-clusters/fleet"},"Fleet")," \u63d0\u4f9b\u652f\u6301\u7684 Rancher Continuous Delivery (CD) \u6765\u5904\u7406\u6d41\u6c34\u7ebf\u3002\u5982\u9700\u5728 Rancher \u4e2d\u8bbf\u95ee Fleet\uff0c\u8bf7\u5355\u51fb ",(0,r.kt)("b",null,"\u2630 > \u6301\u7eed\u4ea4\u4ed8"),"\u3002")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u4e0d\u518d\u652f\u6301 Kubernetes 1.21+ \u4e2d\u7684\u6d41\u6c34\u7ebf\u3002")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Fleet \u4e0d\u4f1a\u53d6\u4ee3 Rancher \u6d41\u6c34\u7ebf\uff0c\u53ea\u662f Rancher \u6d41\u6c34\u7ebf\u73b0\u5728\u7531 Fleet \u63d0\u4f9b\u652f\u6301\u3002")))),(0,r.kt)("p",null,"Rancher \u7684\u6d41\u6c34\u7ebf\u63d0\u4f9b\u4e86\u7b80\u5355\u7684 CI/CD \u4f53\u9a8c\u3002\u4f60\u53ef\u4ee5\u4f7f\u7528\u6d41\u6c34\u7ebf\u6765\u81ea\u52a8\u7b7e\u51fa\u4ee3\u7801\u3001\u8fd0\u884c\u6784\u5efa\u6216\u811a\u672c\u3001\u53d1\u5e03 Docker \u955c\u50cf\u6216\u5546\u5e97\u5e94\u7528\uff0c\u4ee5\u53ca\u5c06\u66f4\u65b0\u7684\u8f6f\u4ef6\u90e8\u7f72\u7ed9\u7528\u6237\u3002"),(0,r.kt)("p",null,"\u8bbe\u7f6e\u6d41\u6c34\u7ebf\u53ef\u4ee5\u5e2e\u52a9\u5f00\u53d1\u8005\u5feb\u901f\u9ad8\u6548\u5730\u4e0a\u7ebf\u65b0\u8f6f\u4ef6\u3002\u4f60\u53ef\u4ee5\u4f7f\u7528 Rancher \u4e0e GitHub \u4ed3\u5e93\u96c6\u6210\uff0c\u4ece\u800c\u8bbe\u7f6e\u6301\u7eed\u96c6\u6210\uff08CI\uff09\u6d41\u6c34\u7ebf\u3002"),(0,r.kt)("p",null,"\u914d\u7f6e Rancher \u548c GitHub \u540e\uff0c\u4f60\u53ef\u4ee5\u90e8\u7f72\u8fd0\u884c Jenkins \u7684\u5bb9\u5668\u6765\u81ea\u52a8\u5316\u6267\u884c\u6d41\u6c34\u7ebf\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u5c06\u5e94\u7528\u4ee3\u7801\u6784\u5efa\u4e3a\u955c\u50cf\u3002"),(0,r.kt)("li",{parentName:"ul"},"\u9a8c\u8bc1\u6784\u5efa\u3002"),(0,r.kt)("li",{parentName:"ul"},"\u5c06\u6784\u5efa\u7684\u955c\u50cf\u90e8\u7f72\u5230\u96c6\u7fa4\u3002"),(0,r.kt)("li",{parentName:"ul"},"\u8fd0\u884c\u5355\u5143\u6d4b\u8bd5\u3002"),(0,r.kt)("li",{parentName:"ul"},"\u8fd0\u884c\u56de\u5f52\u6d4b\u8bd5\u3002")),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"Rancher \u7684\u6d41\u6c34\u7ebf\u63d0\u4f9b\u7b80\u5355\u7684 CI/CD \u4f53\u9a8c\uff0c\u4f46\u4e0d\u63d0\u4f9b\u5b8c\u6574\u7684\u529f\u80fd\u548c\u7075\u6d3b\u6027\uff0c\u4e5f\u4e0d\u80fd\u66ff\u4ee3\u4f60\u56e2\u961f\u6b63\u5728\u4f7f\u7528\u7684\u4f01\u4e1a\u7ea7 Jenkins \u6216\u5176\u4ed6 CI \u5de5\u5177\u3002")),(0,r.kt)("h2",{id:"\u6982\u5ff5"},"\u6982\u5ff5"),(0,r.kt)("p",null,"\u6709\u5173\u672c\u8282\u4e2d\u4f7f\u7528\u7684\u6982\u5ff5\u548c\u672f\u8bed\u8bf4\u660e\uff0c\u8bf7\u53c2\u9605",(0,r.kt)("a",{parentName:"p",href:"/zh/v2.6/reference-guides/pipelines/concepts"},"\u6b64\u9875\u9762"),"\u3002"),(0,r.kt)("h2",{id:"\u6d41\u6c34\u7ebf\u7684\u5de5\u4f5c\u539f\u7406"},"\u6d41\u6c34\u7ebf\u7684\u5de5\u4f5c\u539f\u7406"),(0,r.kt)("p",null,"\u4e3a\u9879\u76ee\u4e2d\u542f\u7528\u6d41\u6c34\u7ebf\u529f\u80fd\u540e\uff0c\u4f60\u53ef\u4ee5\u5728\u6bcf\u4e2a\u9879\u76ee\u4e2d\u914d\u7f6e\u591a\u4e2a\u6d41\u6c34\u7ebf\u3002\u6bcf\u4e2a\u6d41\u6c34\u7ebf\u90fd\u662f\u72ec\u4e00\u65e0\u4e8c\u7684\uff0c\u53ef\u4ee5\u72ec\u7acb\u914d\u7f6e\u3002"),(0,r.kt)("p",null,"\u6d41\u6c34\u7ebf\u662f\u7531\u4e00\u7ec4\u7b7e\u5165\u6e90\u4ee3\u7801\u4ed3\u5e93\u7684\u6587\u4ef6\u914d\u7f6e\u7684\u3002\u7528\u6237\u53ef\u4ee5\u901a\u8fc7 Rancher UI \u6216\u901a\u8fc7\u5c06 ",(0,r.kt)("inlineCode",{parentName:"p"},".rancher-pipeline.yml")," \u6dfb\u52a0\u5230\u4ed3\u5e93\u6765\u914d\u7f6e\u6d41\u6c34\u7ebf\u3002"),(0,r.kt)("p",null,"\u5728\u914d\u7f6e\u6d41\u6c34\u7ebf\u4e4b\u524d\uff0c\u4f60\u9700\u8981\u4e3a\u7248\u672c\u63a7\u5236\u63d0\u4f9b\u5546\uff08\u4f8b\u5982 GitHub\u3001GitLab \u6216 Bitbucket\uff09\u914d\u7f6e\u8eab\u4efd\u9a8c\u8bc1\u3002\u5982\u679c\u4f60\u8fd8\u6ca1\u6709\u914d\u7f6e\u7248\u672c\u63a7\u5236\u63d0\u4f9b\u5546\uff0c\u4f60\u53ef\u4ee5\u968f\u65f6\u4f7f\u7528 ",(0,r.kt)("a",{parentName:"p",href:"/zh/v2.6/reference-guides/pipelines/example-repositories"},"Rancher \u7684\u793a\u4f8b\u4ed3\u5e93"),"\u6765\u67e5\u770b\u200b\u200b\u5e38\u89c1\u7684\u6d41\u6c34\u7ebf\u90e8\u7f72\u3002"),(0,r.kt)("p",null,"\u5728\u9879\u76ee\u4e2d\u914d\u7f6e\u6d41\u6c34\u7ebf\u65f6\uff0c\u4f1a\u81ea\u52a8\u521b\u5efa\u4e00\u4e2a\u4e13\u95e8\u7528\u4e8e\u8be5\u6d41\u6c34\u7ebf\u7684\u547d\u540d\u7a7a\u95f4\u3002\u4ee5\u4e0b\u7ec4\u4ef6\u90e8\u7f72\u5230\u5b83\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Jenkins"),"\uff1a"),(0,r.kt)("p",{parentName:"li"},"\u6d41\u6c34\u7ebf\u7684\u6784\u5efa\u5f15\u64ce\u3002\u7531\u4e8e\u9879\u76ee\u7528\u6237\u4e0d\u76f4\u63a5\u4e0e Jenkins \u4ea4\u4e92\uff0c\u56e0\u6b64 Jenkins \u662f\u88ab\u6258\u7ba1\u548c\u9501\u5b9a\u7684\u3002"),(0,r.kt)("admonition",{parentName:"li",type:"note"},(0,r.kt)("p",{parentName:"admonition"},"\u6ca1\u6709\u4f7f\u7528\u73b0\u6709 Jenkins deployment \u4f5c\u4e3a\u6d41\u6c34\u7ebf\u5f15\u64ce\u7684\u9009\u9879\u3002"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Docker \u955c\u50cf\u4ed3\u5e93"),"\uff1a"),(0,r.kt)("p",{parentName:"li"}," \u5185\u90e8 Docker \u955c\u50cf\u4ed3\u5e93\u662f\u5f00\u7bb1\u5373\u7528\uff0c\u7528\u4e8e\u6784\u5efa\u5230\u53d1\u5e03\u6b65\u9aa4\u7684\u9ed8\u8ba4\u76ee\u6807\u3002\u4f60\u4e5f\u53ef\u4ee5\u8fdb\u884c\u914d\u7f6e\u4ee5\u63a8\u9001\u5230\u8fdc\u7a0b\u955c\u50cf\u4ed3\u5e93\u3002\u5185\u90e8 Docker \u955c\u50cf\u4ed3\u5e93\u53ea\u80fd\u4ece\u96c6\u7fa4\u8282\u70b9\u8bbf\u95ee\uff0c\u7528\u6237\u4e0d\u80fd\u76f4\u63a5\u8bbf\u95ee\u5b83\u3002\u955c\u50cf\u4e0d\u4f1a\u5728\u6d41\u6c34\u7ebf\u7684\u751f\u547d\u5468\u671f\u4e4b\u5916\u88ab\u6301\u4e45\u5316\uff0c\u5e76\u4e14\u53ea\u80fd\u5728\u6d41\u6c34\u7ebf\u8fd0\u884c\u4f7f\u7528\u3002\u5982\u679c\u4f60\u9700\u8981\u5728\u6d41\u6c34\u7ebf\u8fd0\u884c\u4e4b\u5916\u8bbf\u95ee\u955c\u50cf\uff0c\u8bf7\u5c06\u955c\u50cf\u63a8\u9001\u5230\u5916\u90e8\u955c\u50cf\u4ed3\u5e93\u3002")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Minio"),"\uff1a"),(0,r.kt)("p",{parentName:"li"},"Minio \u5b58\u50a8\u7528\u4e8e\u5b58\u50a8\u6d41\u6c34\u7ebf\u6267\u884c\u7684\u65e5\u5fd7\u3002"),(0,r.kt)("admonition",{parentName:"li",type:"note"},(0,r.kt)("p",{parentName:"admonition"},"\u6258\u7ba1\u7684 Jenkins \u5b9e\u4f8b\u662f\u65e0\u72b6\u6001\u5de5\u4f5c\u7684\uff0c\u56e0\u6b64\u4f60\u4e0d\u7528\u62c5\u5fc3\u5b83\u7684\u6570\u636e\u6301\u4e45\u6027\u3002Docker \u955c\u50cf\u4ed3\u5e93\u548c Minio \u5b9e\u4f8b\u9ed8\u8ba4\u4f7f\u7528\u4e34\u65f6\u5377\uff0c\u8fd9\u79cd\u505a\u6cd5\u9002\u7528\u4e8e\u5927\u591a\u6570\u7528\u4f8b\u3002\u5982\u679c\u4f60\u60f3\u786e\u4fdd\u6d41\u6c34\u7ebf\u65e5\u5fd7\u80fd\u591f\u5728\u8282\u70b9\u6545\u969c\u7684\u60c5\u51b5\u4e0b\u4e5f\u80fd\u4fdd\u5b58\uff0c\u4f60\u53ef\u4ee5\u4e3a\u5b83\u4eec\u914d\u7f6e\u6301\u4e45\u5377\uff08\u53c2\u89c1",(0,r.kt)("a",{parentName:"p",href:"/zh/v2.6/reference-guides/pipelines/configure-persistent-data"},"\u6d41\u6c34\u7ebf\u7ec4\u4ef6\u7684\u6570\u636e\u6301\u4e45\u6027"),"\uff09\u3002")))),(0,r.kt)("h2",{id:"\u6d41\u6c34\u7ebf\u7684-rbac"},"\u6d41\u6c34\u7ebf\u7684 RBAC"),(0,r.kt)("p",null,"\u5982\u679c\u4f60\u53ef\u4ee5\u8bbf\u95ee\u9879\u76ee\uff0c\u5219\u53ef\u4ee5\u542f\u7528\u4ed3\u5e93\u6765\u5f00\u59cb\u6784\u5efa\u6d41\u6c34\u7ebf\u3002"),(0,r.kt)("p",null,"\u53ea\u6709",(0,r.kt)("a",{parentName:"p",href:"/zh/v2.6/how-to-guides/new-user-guides/authentication-permissions-and-global-configuration/manage-role-based-access-control-rbac/global-permissions"},"\u7ba1\u7406\u5458"),"\u3001",(0,r.kt)("a",{parentName:"p",href:"/zh/v2.6/how-to-guides/new-user-guides/authentication-permissions-and-global-configuration/manage-role-based-access-control-rbac/cluster-and-project-roles#%E9%9B%86%E7%BE%A4%E8%A7%92%E8%89%B2"},"\u96c6\u7fa4\u6240\u6709\u8005\u6216\u6210\u5458"),"\u6216",(0,r.kt)("a",{parentName:"p",href:"/zh/v2.6/how-to-guides/new-user-guides/authentication-permissions-and-global-configuration/manage-role-based-access-control-rbac/cluster-and-project-roles#%E9%A1%B9%E7%9B%AE%E8%A7%92%E8%89%B2"},"\u9879\u76ee\u6240\u6709\u8005"),"\u53ef\u4ee5\u914d\u7f6e\u7248\u672c\u63a7\u5236\u63d0\u4f9b\u5546\u548c\u7ba1\u7406\u5168\u5c40\u6d41\u6c34\u7ebf\u7684\u6267\u884c\u8bbe\u7f6e\u3002"),(0,r.kt)("p",null,"\u9879\u76ee\u6210\u5458\u53ea\u80fd\u914d\u7f6e\u4ed3\u5e93\u548c\u6d41\u6c34\u7ebf\u3002"),(0,r.kt)("h2",{id:"\u8bbe\u7f6e\u6d41\u6c34\u7ebf"},"\u8bbe\u7f6e\u6d41\u6c34\u7ebf"),(0,r.kt)("h3",{id:"\u5148\u51b3\u6761\u4ef6"},"\u5148\u51b3\u6761\u4ef6"),(0,r.kt)("admonition",{title:"\u65e7\u7248\u529f\u80fd\u5f00\u5173\uff1a",type:"note"},(0,r.kt)("p",{parentName:"admonition"},"\u7531\u4e8e\u6d41\u6c34\u7ebf\u5e94\u7528\u5df2\u88ab\u5f03\u7528\u5e76\u66ff\u6362\u4e3a Fleet\uff0c\u56e0\u6b64\u5728\u4f7f\u7528\u6d41\u6c34\u7ebf\u4e4b\u524d\uff0c\u4f60\u9700\u8981\u6253\u5f00\u65e7\u7248\u529f\u80fd\u7684\u529f\u80fd\u5f00\u5173\u3002\u8bf7\u6ce8\u610f\uff0c\u6211\u4eec\u4e0d\u518d\u652f\u6301 Kubernetes 1.21+ \u4e2d\u7684\u6d41\u6c34\u7ebf\u3002"),(0,r.kt)("ol",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ol"},"\u5728\u5de6\u4e0a\u89d2\uff0c\u5355\u51fb ",(0,r.kt)("strong",{parentName:"li"},"\u2630 > \u5168\u5c40\u8bbe\u7f6e"),"\u3002"),(0,r.kt)("li",{parentName:"ol"},"\u5355\u51fb",(0,r.kt)("strong",{parentName:"li"},"\u529f\u80fd\u5f00\u5173"),"\u3002"),(0,r.kt)("li",{parentName:"ol"},"\u8f6c\u5230",(0,r.kt)("inlineCode",{parentName:"li"},"\u65e7\u7248\u5e94\u7528 "),"\u529f\u80fd\u5f00\u5173\u5e76\u5355\u51fb ",(0,r.kt)("strong",{parentName:"li"},"\u22ee > \u6fc0\u6d3b"),"\u3002"))),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"#1-%E9%85%8D%E7%BD%AE%E7%89%88%E6%9C%AC%E6%8E%A7%E5%88%B6%E6%8F%90%E4%BE%9B%E5%95%86"},"\u914d\u7f6e\u7248\u672c\u63a7\u5236\u63d0\u4f9b\u5546")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"#2-%E9%85%8D%E7%BD%AE%E4%BB%93%E5%BA%93"},"\u914d\u7f6e\u4ed3\u5e93")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"#3-%E9%85%8D%E7%BD%AE%E6%B5%81%E6%B0%B4%E7%BA%BF"},"\u914d\u7f6e\u6d41\u6c34\u7ebf"))),(0,r.kt)("h3",{id:"1-\u914d\u7f6e\u7248\u672c\u63a7\u5236\u63d0\u4f9b\u5546"},"1. \u914d\u7f6e\u7248\u672c\u63a7\u5236\u63d0\u4f9b\u5546"),(0,r.kt)("p",null,"\u5728\u4e3a\u4ed3\u5e93\u914d\u7f6e\u6d41\u6c34\u7ebf\u4e4b\u524d\uff0c\u4f60\u5fc5\u987b\u914d\u7f6e\u548c\u6388\u6743\u7248\u672c\u63a7\u5236\u63d0\u4f9b\u5546\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"GitHub"),(0,r.kt)("li",{parentName:"ul"},"GitLab"),(0,r.kt)("li",{parentName:"ul"},"Bitbucket")),(0,r.kt)("p",null,"\u5728\u4e0b\u65b9\u9009\u62e9\u4f60\u7684\u63d0\u4f9b\u5546\u5bf9\u5e94\u7684\u9009\u9879\u5361\uff0c\u7136\u540e\u6309\u7167\u8bf4\u660e\u8fdb\u884c\u64cd\u4f5c\u3002"),(0,r.kt)(s,{mdxType:"Tabs"},(0,r.kt)(u,{value:"GitHub",mdxType:"TabItem"},(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"\u5728\u5de6\u4e0a\u89d2\uff0c\u5355\u51fb ",(0,r.kt)("strong",{parentName:"li"},"\u2630 > \u96c6\u7fa4\u7ba1\u7406"),"\u3002"),(0,r.kt)("li",{parentName:"ol"},"\u8f6c\u5230\u8981\u914d\u7f6e\u6d41\u6c34\u7ebf\u7684\u96c6\u7fa4\uff0c\u7136\u540e\u5355\u51fb ",(0,r.kt)("strong",{parentName:"li"},"Explore"),"\u3002"),(0,r.kt)("li",{parentName:"ol"},"\u5728\u9876\u90e8\u5bfc\u822a\u680f\u7684\u4e0b\u62c9\u83dc\u5355\u4e2d\uff0c\u9009\u62e9\u8981\u914d\u7f6e\u6d41\u6c34\u7ebf\u7684\u9879\u76ee\u3002"),(0,r.kt)("li",{parentName:"ol"},"\u5728\u5de6\u4fa7\u5bfc\u822a\u680f\u4e2d\uff0c\u5355\u51fb ",(0,r.kt)("strong",{parentName:"li"},"Legacy > \u9879\u76ee > \u6d41\u6c34\u7ebf"),"\u3002"),(0,r.kt)("li",{parentName:"ol"},"\u5355\u51fb",(0,r.kt)("strong",{parentName:"li"},"\u914d\u7f6e"),"\u9009\u9879\u5361\u3002"),(0,r.kt)("li",{parentName:"ol"},"\u6309\u7167\u8bf4\u660e",(0,r.kt)("strong",{parentName:"li"},"\u8bbe\u7f6e Github \u5e94\u7528"),"\u3002Rancher \u4f1a\u5c06\u4f60\u91cd\u5b9a\u5411\u5230 GitHub \u4ee5\u5728 GitHub \u4e2d\u8bbe\u7f6e OAuth \u5e94\u7528\u3002"),(0,r.kt)("li",{parentName:"ol"},"\u4ece GitHub \u590d\u5236 ",(0,r.kt)("strong",{parentName:"li"},"Client ID")," \u548c ",(0,r.kt)("strong",{parentName:"li"},"Client Secret"),"\u3002\u5c06\u5b83\u4eec\u7c98\u8d34\u5230 Rancher \u4e2d\u3002"),(0,r.kt)("li",{parentName:"ol"},"\u5982\u679c\u4f60\u4f7f\u7528\u7684\u662f\u4f01\u4e1a\u7248 GitHub\uff0c\u8bf7\u9009\u62e9",(0,r.kt)("strong",{parentName:"li"},"\u4f7f\u7528\u79c1\u6709 GitHub \u4f01\u4e1a\u7248\u5b89\u88c5"),"\u3002\u8f93\u5165 GitHub \u5b89\u88c5\u7684\u4e3b\u673a\u5730\u5740\u3002"),(0,r.kt)("li",{parentName:"ol"},"\u5355\u51fb",(0,r.kt)("strong",{parentName:"li"},"\u9a8c\u8bc1"),"\u3002"))),(0,r.kt)(u,{value:"GitLab",mdxType:"TabItem"},(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"\u5728\u5de6\u4e0a\u89d2\uff0c\u5355\u51fb ",(0,r.kt)("strong",{parentName:"li"},"\u2630 > \u96c6\u7fa4\u7ba1\u7406"),"\u3002"),(0,r.kt)("li",{parentName:"ol"},"\u8f6c\u5230\u8981\u914d\u7f6e\u6d41\u6c34\u7ebf\u7684\u96c6\u7fa4\uff0c\u7136\u540e\u5355\u51fb ",(0,r.kt)("strong",{parentName:"li"},"Explore"),"\u3002"),(0,r.kt)("li",{parentName:"ol"},"\u5728\u9876\u90e8\u5bfc\u822a\u680f\u7684\u4e0b\u62c9\u83dc\u5355\u4e2d\uff0c\u9009\u62e9\u8981\u914d\u7f6e\u6d41\u6c34\u7ebf\u7684\u9879\u76ee\u3002"),(0,r.kt)("li",{parentName:"ol"},"\u5728\u5de6\u4fa7\u5bfc\u822a\u680f\u4e2d\uff0c\u5355\u51fb ",(0,r.kt)("strong",{parentName:"li"},"Legacy > \u9879\u76ee > \u6d41\u6c34\u7ebf"),"\u3002"),(0,r.kt)("li",{parentName:"ol"},"\u5355\u51fb",(0,r.kt)("strong",{parentName:"li"},"\u914d\u7f6e"),"\u9009\u9879\u5361\u3002"),(0,r.kt)("li",{parentName:"ol"},"\u5355\u51fb ",(0,r.kt)("strong",{parentName:"li"},"GitLab"),"\u3002"),(0,r.kt)("li",{parentName:"ol"},"\u6309\u7167\u8bf4\u660e",(0,r.kt)("strong",{parentName:"li"},"\u8bbe\u7f6e GitLab \u5e94\u7528"),"\u3002Rancher \u4f1a\u5c06\u4f60\u91cd\u5b9a\u5411\u5230 GitLab\u3002"),(0,r.kt)("li",{parentName:"ol"},"\u4ece GitLab \u590d\u5236 ",(0,r.kt)("strong",{parentName:"li"},"Application ID")," \u548c ",(0,r.kt)("strong",{parentName:"li"},"Secret"),"\u3002\u5c06\u5b83\u4eec\u7c98\u8d34\u5230 Rancher \u4e2d\u3002"),(0,r.kt)("li",{parentName:"ol"},"\u5982\u679c\u4f60\u4f7f\u7528\u7684\u662f\u4f01\u4e1a\u7248 GitLab\uff0c\u8bf7\u9009\u62e9",(0,r.kt)("strong",{parentName:"li"},"\u4f7f\u7528\u79c1\u6709 GitLab \u4f01\u4e1a\u7248\u5b89\u88c5"),"\u3002\u8f93\u5165 GitLab \u5b89\u88c5\u7684\u4e3b\u673a\u5730\u5740\u3002"),(0,r.kt)("li",{parentName:"ol"},"\u5355\u51fb",(0,r.kt)("strong",{parentName:"li"},"\u9a8c\u8bc1"),"\u3002")),(0,r.kt)("admonition",{title:"\u6ce8\u610f\u4e8b\u9879\uff1a",type:"note"},(0,r.kt)("ol",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ol"},"\u6d41\u6c34\u7ebf\u4f7f\u7528 GitLab ",(0,r.kt)("a",{parentName:"li",href:"https://docs.gitlab.com/ee/api/v3_to_v4.html"},"v4 API"),"\uff0c\u652f\u6301\u7684 GitLab \u7248\u672c\u4e3a 9.0+\u3002"),(0,r.kt)("li",{parentName:"ol"},"\u5982\u679c\u4f60\u4f7f\u7528 GitLab 10.7+ \u5e76\u4e14\u4f60\u7684 Rancher \u8bbe\u7f6e\u4f4d\u4e8e\u672c\u5730\u7f51\u7edc\u4e2d\uff0c\u8bf7\u5728 GitLab \u7ba1\u7406\u8bbe\u7f6e\u4e2d\u542f\u7528 ",(0,r.kt)("strong",{parentName:"li"},"Allow requests to the local network from hooks and services")," \u9009\u9879\u3002")))),(0,r.kt)(u,{value:"Bitbucket Cloud",mdxType:"TabItem"},(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"\u5728\u5de6\u4e0a\u89d2\uff0c\u5355\u51fb ",(0,r.kt)("strong",{parentName:"li"},"\u2630 > \u96c6\u7fa4\u7ba1\u7406"),"\u3002"),(0,r.kt)("li",{parentName:"ol"},"\u8f6c\u5230\u8981\u914d\u7f6e\u6d41\u6c34\u7ebf\u7684\u96c6\u7fa4\uff0c\u7136\u540e\u5355\u51fb ",(0,r.kt)("strong",{parentName:"li"},"Explore"),"\u3002"),(0,r.kt)("li",{parentName:"ol"},"\u5728\u9876\u90e8\u5bfc\u822a\u680f\u7684\u4e0b\u62c9\u83dc\u5355\u4e2d\uff0c\u9009\u62e9\u8981\u914d\u7f6e\u6d41\u6c34\u7ebf\u7684\u9879\u76ee\u3002"),(0,r.kt)("li",{parentName:"ol"},"\u5728\u5de6\u4fa7\u5bfc\u822a\u680f\u4e2d\uff0c\u5355\u51fb ",(0,r.kt)("strong",{parentName:"li"},"Legacy > \u9879\u76ee > \u6d41\u6c34\u7ebf"),"\u3002"),(0,r.kt)("li",{parentName:"ol"},"\u5355\u51fb",(0,r.kt)("strong",{parentName:"li"},"\u914d\u7f6e"),"\u9009\u9879\u5361\u3002"),(0,r.kt)("li",{parentName:"ol"},"\u5355\u51fb ",(0,r.kt)("strong",{parentName:"li"},"Bitbucket")," \u5e76\u4fdd\u7559\u9ed8\u8ba4\u9009\u4e2d\u7684",(0,r.kt)("strong",{parentName:"li"},"\u4f7f\u7528 Bitbucket Cloud"),"\u3002"),(0,r.kt)("li",{parentName:"ol"},"\u6309\u7167\u8bf4\u660e",(0,r.kt)("strong",{parentName:"li"},"\u8bbe\u7f6e Bitbucket Cloud \u5e94\u7528"),"\u3002Rancher \u4f1a\u5c06\u4f60\u91cd\u5b9a\u5411\u5230 Bitbucket \u4ee5\u5728 Bitbucket \u4e2d\u8bbe\u7f6e OAuth \u4f7f\u7528\u8005\u3002"),(0,r.kt)("li",{parentName:"ol"},"\u4ece Bitbucket \u590d\u5236\u4f7f\u7528\u8005 ",(0,r.kt)("strong",{parentName:"li"},"Key")," \u548c ",(0,r.kt)("strong",{parentName:"li"},"Secret"),"\u3002\u5c06\u5b83\u4eec\u7c98\u8d34\u5230 Rancher \u4e2d\u3002"),(0,r.kt)("li",{parentName:"ol"},"\u5355\u51fb",(0,r.kt)("strong",{parentName:"li"},"\u9a8c\u8bc1"),"\u3002"))),(0,r.kt)(u,{value:"Bitbucket Server",mdxType:"TabItem"},(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"\u5728\u5de6\u4e0a\u89d2\uff0c\u5355\u51fb ",(0,r.kt)("strong",{parentName:"li"},"\u2630 > \u96c6\u7fa4\u7ba1\u7406"),"\u3002"),(0,r.kt)("li",{parentName:"ol"},"\u8f6c\u5230\u8981\u914d\u7f6e\u6d41\u6c34\u7ebf\u7684\u96c6\u7fa4\uff0c\u7136\u540e\u5355\u51fb ",(0,r.kt)("strong",{parentName:"li"},"Explore"),"\u3002"),(0,r.kt)("li",{parentName:"ol"},"\u5728\u9876\u90e8\u5bfc\u822a\u680f\u7684\u4e0b\u62c9\u83dc\u5355\u4e2d\uff0c\u9009\u62e9\u8981\u914d\u7f6e\u6d41\u6c34\u7ebf\u7684\u9879\u76ee\u3002"),(0,r.kt)("li",{parentName:"ol"},"\u5728\u5de6\u4fa7\u5bfc\u822a\u680f\u4e2d\uff0c\u5355\u51fb ",(0,r.kt)("strong",{parentName:"li"},"Legacy > \u9879\u76ee > \u6d41\u6c34\u7ebf"),"\u3002"),(0,r.kt)("li",{parentName:"ol"},"\u5355\u51fb",(0,r.kt)("strong",{parentName:"li"},"\u914d\u7f6e"),"\u9009\u9879\u5361\u3002"),(0,r.kt)("li",{parentName:"ol"},"\u70b9\u51fb ",(0,r.kt)("strong",{parentName:"li"},"Bitbucket")," \u5e76\u9009\u62e9",(0,r.kt)("strong",{parentName:"li"},"\u4f7f\u7528\u79c1\u6709 Bitbucket Server \u8bbe\u7f6e"),"\u9009\u9879\u3002"),(0,r.kt)("li",{parentName:"ol"},"\u6309\u7167\u8bf4\u660e",(0,r.kt)("strong",{parentName:"li"},"\u8bbe\u7f6e Bitbucket Server \u5e94\u7528"),"\u3002"),(0,r.kt)("li",{parentName:"ol"},"\u8f93\u5165 Bitbucket Server \u5b89\u88c5\u7684\u4e3b\u673a\u5730\u5740\u3002"),(0,r.kt)("li",{parentName:"ol"},"\u5355\u51fb",(0,r.kt)("strong",{parentName:"li"},"\u9a8c\u8bc1"),"\u3002")),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"Bitbucket server \u5728\u5411 Rancher \u53d1\u9001 webhook \u65f6\u9700\u8981\u8fdb\u884c SSL \u9a8c\u8bc1\u3002\u8bf7\u786e\u4fdd Rancher server \u7684\u8bc1\u4e66\u88ab Bitbucket server \u4fe1\u4efb\u3002\u6709\u4e24\u79cd\u9009\u62e9\uff1a"),(0,r.kt)("ol",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ol"},"\u4f7f\u7528\u53d7\u4fe1\u4efb\u7684 CA \u7b7e\u53d1\u7684\u8bc1\u4e66\u6765\u8bbe\u7f6e Rancher server\u3002"),(0,r.kt)("li",{parentName:"ol"},"\u5982\u679c\u4f60\u4f7f\u7528\u7684\u662f\u81ea\u7b7e\u540d\u8bc1\u4e66\uff0c\u8bf7\u5c06 Rancher server \u7684\u8bc1\u4e66\u5bfc\u5165 Bitbucket server\u3002\u6709\u5173\u8bf4\u660e\uff0c\u8bf7\u53c2\u9605 Bitbucket sever \u6587\u6863\u4ee5\u4e86\u89e3\u5982\u4f55",(0,r.kt)("a",{parentName:"li",href:"https://confluence.atlassian.com/bitbucketserver/if-you-use-self-signed-certificates-938028692.html"},"\u914d\u7f6e\u81ea\u7b7e\u540d\u8bc1\u4e66"),"\u3002"))))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u7ed3\u679c"),"\uff1a\u7248\u672c\u63a7\u5236\u63d0\u4f9b\u5546\u901a\u8fc7\u8eab\u4efd\u9a8c\u8bc1\u540e\uff0c\u4f60\u5c06\u88ab\u81ea\u52a8\u91cd\u5b9a\u5411\u4ee5\u914d\u7f6e\u4f60\u5e0c\u671b\u4f7f\u7528\u6d41\u6c34\u7ebf\u7684\u4ed3\u5e93\u3002"),(0,r.kt)("h3",{id:"2-\u914d\u7f6e\u4ed3\u5e93"},"2. \u914d\u7f6e\u4ed3\u5e93"),(0,r.kt)("p",null,"\u6388\u6743\u7248\u672c\u63a7\u5236\u63d0\u4f9b\u5546\u540e\uff0c\u4f60\u5c06\u88ab\u81ea\u52a8\u91cd\u5b9a\u5411\u4ee5\u914d\u7f6e\u4f60\u5e0c\u671b\u4f7f\u7528\u6d41\u6c34\u7ebf\u7684\u4ed3\u5e93\u3002\u5373\u4f7f\u5176\u4ed6\u4eba\u8bbe\u7f6e\u4e86\u7248\u672c\u63a7\u5236\u63d0\u4f9b\u5546\uff0c\u4f60\u4e5f\u80fd\u770b\u5230\u4ed6\u4eec\u7684\u4ed3\u5e93\u5e76\u6784\u5efa\u6d41\u6c34\u7ebf\uff1a"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u5728\u5de6\u4e0a\u89d2\uff0c\u5355\u51fb ",(0,r.kt)("strong",{parentName:"p"},"\u2630 > \u96c6\u7fa4\u7ba1\u7406"),"\u3002")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u8f6c\u5230\u8981\u914d\u7f6e\u6d41\u6c34\u7ebf\u7684\u96c6\u7fa4\uff0c\u7136\u540e\u5355\u51fb ",(0,r.kt)("strong",{parentName:"p"},"Explore"),"\u3002")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u5728\u9876\u90e8\u5bfc\u822a\u680f\u7684\u4e0b\u62c9\u83dc\u5355\u4e2d\uff0c\u9009\u62e9\u8981\u914d\u7f6e\u6d41\u6c34\u7ebf\u7684\u9879\u76ee\u3002")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u5728\u5de6\u4fa7\u5bfc\u822a\u680f\u4e2d\uff0c\u5355\u51fb ",(0,r.kt)("strong",{parentName:"p"},"Legacy > \u9879\u76ee > \u6d41\u6c34\u7ebf"),"\u3002")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u5355\u51fb",(0,r.kt)("strong",{parentName:"p"},"\u914d\u7f6e\u4ed3\u5e93"),"\u3002")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u6b64\u5904\u4f1a\u663e\u793a\u4ed3\u5e93\u5217\u8868\u3002\u5982\u679c\u4f60\u662f\u7b2c\u4e00\u6b21\u914d\u7f6e\u4ed3\u5e93\uff0c\u8bf7\u5355\u51fb ",(0,r.kt)("strong",{parentName:"p"},"Authorize & Fetch Your Own Repositories")," \u6765\u83b7\u53d6\u4f60\u7684\u4ed3\u5e93\u5217\u8868\u3002")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u5728\u8981\u8bbe\u7f6e\u6d41\u6c34\u7ebf\u7684\u4ed3\u5e93\u5904\u5355\u51fb",(0,r.kt)("strong",{parentName:"p"},"\u542f\u7528"),"\u3002")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u542f\u7528\u6240\u6709\u4ed3\u5e93\u540e\uff0c\u5355\u51fb",(0,r.kt)("strong",{parentName:"p"},"\u5b8c\u6210"),"\u3002"))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u7ed3\u679c"),"\uff1a\u4f60\u6709\u4e86\u4e00\u4e2a\u53ef\u4ee5\u914d\u7f6e\u6d41\u6c34\u7ebf\u7684\u4ed3\u5e93\u5217\u8868\u3002"),(0,r.kt)("h3",{id:"3-\u914d\u7f6e\u6d41\u6c34\u7ebf"},"3. \u914d\u7f6e\u6d41\u6c34\u7ebf"),(0,r.kt)("p",null,"\u73b0\u5728\u4ed3\u5e93\u5df2\u6dfb\u52a0\u5230\u4f60\u7684\u9879\u76ee\u4e2d\u3002\u4f60\u53ef\u4ee5\u901a\u8fc7\u6dfb\u52a0\u81ea\u52a8\u5316\u9636\u6bb5\u548c\u6b65\u9aa4\u6765\u914d\u7f6e\u6d41\u6c34\u7ebf\u3002\u4e3a\u65b9\u4fbf\u8d77\u89c1\uff0c\u6211\u4eec\u63d0\u4f9b\u4e86\u591a\u79cd\u7528\u4e8e\u7279\u6709\u4efb\u52a1\u7684\u5185\u7f6e\u6b65\u9aa4\u7c7b\u578b\u3002"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u5728\u5de6\u4e0a\u89d2\uff0c\u5355\u51fb ",(0,r.kt)("strong",{parentName:"p"},"\u2630 > \u96c6\u7fa4\u7ba1\u7406"),"\u3002")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u8f6c\u5230\u8981\u914d\u7f6e\u6d41\u6c34\u7ebf\u7684\u96c6\u7fa4\uff0c\u7136\u540e\u5355\u51fb ",(0,r.kt)("strong",{parentName:"p"},"Explore"),"\u3002")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u5728\u9876\u90e8\u5bfc\u822a\u680f\u7684\u4e0b\u62c9\u83dc\u5355\u4e2d\uff0c\u9009\u62e9\u8981\u914d\u7f6e\u6d41\u6c34\u7ebf\u7684\u9879\u76ee\u3002")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u5728\u5de6\u4fa7\u5bfc\u822a\u680f\u4e2d\uff0c\u5355\u51fb ",(0,r.kt)("strong",{parentName:"p"},"Legacy > \u9879\u76ee > \u6d41\u6c34\u7ebf"),"\u3002")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u627e\u5230\u8981\u8bbe\u7f6e\u6d41\u6c34\u7ebf\u7684\u4ed3\u5e93\u3002")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u901a\u8fc7 UI \u6216\u4f7f\u7528\u4ed3\u5e93\u4e2d\u7684 YAML \u6587\u4ef6\uff08\u5373 ",(0,r.kt)("inlineCode",{parentName:"p"},".rancher-pipeline.yml")," \u6216 ",(0,r.kt)("inlineCode",{parentName:"p"},".rancher-pipeline.yaml"),"\uff09\u914d\u7f6e\u6d41\u6c34\u7ebf\u3002\u6d41\u6c34\u7ebf\u914d\u7f6e\u5206\u4e3a\u9636\u6bb5\u548c\u6b65\u9aa4\u3002\u5fc5\u987b\u5b8c\u5168\u5b8c\u6210\u9636\u6bb5\u540e\u624d\u80fd\u8fdb\u5165\u4e0b\u4e00\u4e2a\u9636\u6bb5\uff0c\u4f46\u4e00\u4e2a\u9636\u6bb5\u4e2d\u7684\u6b65\u9aa4\u53ef\u4ee5\u540c\u65f6\u8fd0\u884c\u3002\u4f60\u53ef\u4ee5\u5728\u6bcf\u4e2a\u9636\u6bb5\u4e2d\u6dfb\u52a0\u4e0d\u540c\u7684\u6b65\u9aa4\u7c7b\u578b\u3002\u8bf7\u6ce8\u610f\uff0c\u5728\u6784\u5efa\u6b65\u9aa4\u65f6\uff0c\u4f1a\u6839\u636e\u6b65\u9aa4\u7c7b\u578b\u63d0\u4f9b\u4e0d\u540c\u7684\u9ad8\u7ea7\u9009\u9879\u3002\u9ad8\u7ea7\u9009\u9879\u5305\u62ec\u89e6\u53d1\u89c4\u5219\u3001\u73af\u5883\u53d8\u91cf\u548c\u5bc6\u6587\u3002\u6709\u5173\u901a\u8fc7 UI \u6216 YAML \u6587\u4ef6\u914d\u7f6e\u6d41\u6c34\u7ebf\u7684\u66f4\u591a\u4fe1\u606f\uff0c\u8bf7\u53c2\u9605",(0,r.kt)("a",{parentName:"p",href:"/zh/v2.6/reference-guides/pipelines/pipeline-configuration"},"\u6d41\u6c34\u7ebf\u914d\u7f6e\u53c2\u8003"),"\u3002"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u5982\u679c\u8981\u4f7f\u7528 UI\uff0c\u8bf7\u9009\u62e9 ",(0,r.kt)("strong",{parentName:"li"},"\u22ee > \u7f16\u8f91\u914d\u7f6e"),"\u4ee5\u4f7f\u7528 UI \u914d\u7f6e\u6d41\u6c34\u7ebf\u3002\u914d\u7f6e\u6d41\u6c34\u7ebf\u540e\uff0c\u4f60\u5fc5\u987b\u67e5\u770b YAML \u6587\u4ef6\u5e76\u5c06\u5176\u63a8\u9001\u5230\u4ed3\u5e93\u3002"),(0,r.kt)("li",{parentName:"ul"},"\u5982\u679c\u4f60\u8981\u4f7f\u7528 YAML \u6587\u4ef6\uff0c\u8bf7\u9009\u62e9 ",(0,r.kt)("strong",{parentName:"li"},"\u22ee > \u67e5\u770b/\u7f16\u8f91 YAML")," \u6765\u914d\u7f6e\u6d41\u6c34\u7ebf\u3002\u5982\u679c\u4f60\u4f7f\u7528 YAML \u6587\u4ef6\uff0c\u4f60\u9700\u8981\u5728\u66f4\u6539\u6587\u4ef6\u540e\u5c06\u66f4\u65b0\u7684\u6587\u4ef6\u63a8\u9001\u5230\u4ed3\u5e93\uff0c\u4ee5\u4fbf\u66f4\u65b0\u4ed3\u5e93\u4e2d\u7684\u5185\u5bb9\u3002\u5728\u7f16\u8f91\u6d41\u6c34\u7ebf\u914d\u7f6e\u65f6\uff0cRancher \u9700\u8981\u82b1\u4e00\u4e9b\u65f6\u95f4\u68c0\u67e5\u73b0\u6709\u7684\u6d41\u6c34\u7ebf\u914d\u7f6e\u3002"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u4ece\u5206\u652f\u5217\u8868\u4e2d\u9009\u62e9\u8981\u4f7f\u7528\u7684",(0,r.kt)("inlineCode",{parentName:"p"},"\u5206\u652f"),"\u3002")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u53ef\u9009\uff1a\u8bbe\u7f6e\u901a\u77e5\u3002")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u8bbe\u7f6e\u6d41\u6c34\u7ebf\u7684\u89e6\u53d1\u89c4\u5219\u3002")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u4e3a\u6d41\u6c34\u7ebf\u8f93\u5165",(0,r.kt)("strong",{parentName:"p"},"\u8d85\u65f6"),"\u3002")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u914d\u7f6e\u5b8c\u6240\u6709\u9636\u6bb5\u548c\u6b65\u9aa4\u540e\uff0c\u5355\u51fb",(0,r.kt)("strong",{parentName:"p"},"\u5b8c\u6210"),"\u3002"))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u7ed3\u679c")," \uff1a\u4f60\u7684\u6d41\u6c34\u7ebf\u5df2\u914d\u7f6e\u597d\u5e76\u53ef\u4ee5\u8fd0\u884c\u4e86\u3002"),(0,r.kt)("h2",{id:"\u6d41\u6c34\u7ebf\u914d\u7f6e\u53c2\u8003"},"\u6d41\u6c34\u7ebf\u914d\u7f6e\u53c2\u8003"),(0,r.kt)("p",null,"\u53c2\u89c1",(0,r.kt)("a",{parentName:"p",href:"/zh/v2.6/reference-guides/pipelines/pipeline-configuration"},"\u6b64\u9875\u9762"),"\u4ee5\u4e86\u89e3\u5982\u4f55\u901a\u8fc7\u914d\u7f6e\u6d41\u6c34\u7ebf\u5b9e\u73b0\u4ee5\u4e0b\u76ee\u7684\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u8fd0\u884c\u811a\u672c"),(0,r.kt)("li",{parentName:"ul"},"\u6784\u5efa\u548c\u53d1\u5e03\u955c\u50cf"),(0,r.kt)("li",{parentName:"ul"},"\u53d1\u5e03\u5e94\u7528\u5546\u5e97\u6a21\u677f"),(0,r.kt)("li",{parentName:"ul"},"\u90e8\u7f72 YAML"),(0,r.kt)("li",{parentName:"ul"},"\u90e8\u7f72\u5546\u5e97\u5e94\u7528")),(0,r.kt)("p",null,"\u914d\u7f6e\u53c2\u8003\u8fd8\u5305\u62ec\u5982\u4f55\u914d\u7f6e\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u901a\u77e5"),(0,r.kt)("li",{parentName:"ul"},"\u8d85\u65f6"),(0,r.kt)("li",{parentName:"ul"},"\u89e6\u53d1\u6d41\u6c34\u7ebf\u7684\u89c4\u5219"),(0,r.kt)("li",{parentName:"ul"},"\u73af\u5883\u53d8\u91cf"),(0,r.kt)("li",{parentName:"ul"},"\u5bc6\u6587")),(0,r.kt)("h2",{id:"\u8fd0\u884c\u6d41\u6c34\u7ebf"},"\u8fd0\u884c\u6d41\u6c34\u7ebf"),(0,r.kt)("p",null,"\u9996\u6b21\u8fd0\u884c\u4f60\u7684\u6d41\u6c34\u7ebf\u3002\u627e\u5230\u4f60\u7684\u6d41\u6c34\u7ebf\u5e76\u9009\u62e9 ",(0,r.kt)("strong",{parentName:"p"},"\u22ee > \u8fd0\u884c"),"\u3002"),(0,r.kt)("p",null,"\u5728\u6b64\u521d\u59cb\u8fd0\u884c\u671f\u95f4\u5c06\u6d4b\u8bd5\u4f60\u7684\u6d41\u6c34\u7ebf\u3002\u4ee5\u4e0b\u6d41\u6c34\u7ebf\u7ec4\u4ef6\u5c06\u4f5c\u4e3a\u5de5\u4f5c\u8d1f\u8f7d\u90e8\u7f72\u5230\u4f60\u7684\u9879\u76ee\u4e13\u7528\u4e8e\u8be5\u6d41\u6c34\u7ebf\u7684\u547d\u540d\u7a7a\u95f4\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"docker-registry")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"jenkins")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"minio"))),(0,r.kt)("p",null,"\u8fd9\u4e2a\u8fc7\u7a0b\u9700\u8981\u51e0\u5206\u949f\u3002\u5b8c\u6210\u540e\uff0c\u4f60\u53ef\u4ee5\u4ece\u9879\u76ee\u7684",(0,r.kt)("strong",{parentName:"p"},"\u5de5\u4f5c\u8d1f\u8f7d"),"\u9009\u9879\u5361\u4e2d\u67e5\u770b\u6bcf\u4e2a\u6d41\u6c34\u7ebf\u7ec4\u4ef6\u3002"),(0,r.kt)("h2",{id:"\u89e6\u53d1\u6d41\u6c34\u7ebf"},"\u89e6\u53d1\u6d41\u6c34\u7ebf"),(0,r.kt)("p",null,"\u542f\u7528\u4ed3\u5e93\u540e\uff0c\u4f1a\u5728\u7248\u672c\u63a7\u5236\u63d0\u4f9b\u5546\u4e2d\u81ea\u52a8\u8bbe\u7f6e webhook\u3002\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0c\u6d41\u6c34\u7ebf\u4f1a\u7531 ",(0,r.kt)("strong",{parentName:"p"},"push")," \u4e8b\u4ef6\u89e6\u53d1\u5230\u4ed3\u5e93\uff0c\u4f46\u4f60\u4e5f\u53ef\u4ee5\u4fee\u6539\u89e6\u53d1\u8fd0\u884c\u6d41\u6c34\u7ebf\u7684\u4e8b\u4ef6\u3002"),(0,r.kt)("p",null,"\u53ef\u7528\u4e8b\u4ef6\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Push"),"\uff1a\u5f53\u63d0\u4ea4\u88ab\u63a8\u9001\u5230\u4ed3\u5e93\u4e2d\u7684\u5206\u652f\u65f6\uff0c\u89e6\u53d1\u6d41\u6c34\u7ebf\u3002"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Pull Request"),"\uff1a\u5bf9\u4ed3\u5e93\u53d1\u8d77 PR \u65f6\uff0c\u89e6\u53d1\u6d41\u6c34\u7ebf\u3002"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Tag"),"\uff1a\u5728\u4ed3\u5e93\u4e2d\u521b\u5efa\u6807\u7b7e\u65f6\uff0c\u89e6\u53d1\u6d41\u6c34\u7ebf\u3002")),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"Rancher \u7684",(0,r.kt)("a",{parentName:"p",href:"/zh/v2.6/reference-guides/pipelines/example-repositories"},"\u793a\u4f8b\u4ed3\u5e93"),"\u4e0d\u5b58\u5728\u6b64\u9009\u9879\u3002")),(0,r.kt)("h3",{id:"\u4fee\u6539\u4ed3\u5e93\u7684\u4e8b\u4ef6\u89e6\u53d1\u5668"},"\u4fee\u6539\u4ed3\u5e93\u7684\u4e8b\u4ef6\u89e6\u53d1\u5668"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"\u5728\u5de6\u4e0a\u89d2\uff0c\u5355\u51fb ",(0,r.kt)("strong",{parentName:"li"},"\u2630 > \u96c6\u7fa4\u7ba1\u7406"),"\u3002"),(0,r.kt)("li",{parentName:"ol"},"\u8f6c\u5230\u8981\u914d\u7f6e\u6d41\u6c34\u7ebf\u7684\u96c6\u7fa4\uff0c\u7136\u540e\u5355\u51fb ",(0,r.kt)("strong",{parentName:"li"},"Explore"),"\u3002"),(0,r.kt)("li",{parentName:"ol"},"\u5728\u9876\u90e8\u5bfc\u822a\u680f\u7684\u4e0b\u62c9\u83dc\u5355\u4e2d\uff0c\u9009\u62e9\u8981\u914d\u7f6e\u6d41\u6c34\u7ebf\u7684\u9879\u76ee\u3002"),(0,r.kt)("li",{parentName:"ol"},"\u5728\u5de6\u4fa7\u5bfc\u822a\u680f\u4e2d\uff0c\u5355\u51fb ",(0,r.kt)("strong",{parentName:"li"},"Legacy > \u9879\u76ee > \u6d41\u6c34\u7ebf"),"\u3002"),(0,r.kt)("li",{parentName:"ol"},"\u627e\u5230\u8981\u4fee\u6539\u4e8b\u4ef6\u89e6\u53d1\u5668\u7684\u4ed3\u5e93\u3002\u9009\u62e9 ",(0,r.kt)("strong",{parentName:"li"},"\u22ee > \u8bbe\u7f6e"),"\u3002"),(0,r.kt)("li",{parentName:"ol"},"\u4e3a\u4ed3\u5e93\u9009\u62e9\u6240\u9700\u7684\u4e8b\u4ef6\u89e6\u53d1\u5668\uff08",(0,r.kt)("strong",{parentName:"li"},"Push"),"\u3001",(0,r.kt)("strong",{parentName:"li"},"Pull Request")," \u6216 ",(0,r.kt)("strong",{parentName:"li"},"Tag"),"\uff09\u3002"),(0,r.kt)("li",{parentName:"ol"},"\u5355\u51fb",(0,r.kt)("strong",{parentName:"li"},"\u4fdd\u5b58"),"\u3002")))}c.isMDXComponent=!0}}]);