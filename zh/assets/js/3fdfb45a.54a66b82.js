"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[8871],{3905:function(e,t,r){r.d(t,{Zo:function(){return i},kt:function(){return d}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},c=Object.keys(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),o=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},i=function(e){var t=o(e.components);return n.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,c=e.originalType,l=e.parentName,i=u(e,["components","mdxType","originalType","parentName"]),h=o(r),d=a,f=h["".concat(l,".").concat(d)]||h[d]||p[d]||c;return r?n.createElement(f,s(s({ref:t},i),{},{components:r})):n.createElement(f,s({ref:t},i))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var c=r.length,s=new Array(c);s[0]=h;var u={};for(var l in t)hasOwnProperty.call(t,l)&&(u[l]=t[l]);u.originalType=e,u.mdxType="string"==typeof e?e:a,s[1]=u;for(var o=2;o<c;o++)s[o]=r[o];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}h.displayName="MDXCreateElement"},18275:function(e,t,r){r.r(t),r.d(t,{assets:function(){return i},contentTitle:function(){return l},default:function(){return d},frontMatter:function(){return u},metadata:function(){return o},toc:function(){return p}});var n=r(87462),a=r(63366),c=(r(67294),r(3905)),s=["components"],u={title:"\u96c6\u7fa4\u8bbf\u95ee",weight:1},l=void 0,o={unversionedId:"pages-for-subheaders/access-clusters",id:"pages-for-subheaders/access-clusters",title:"\u96c6\u7fa4\u8bbf\u95ee",description:"\u672c\u8282\u4ecb\u7ecd\u53ef\u4ee5\u7528\u6765\u8bbf\u95ee Rancher \u7ba1\u7406\u7684\u96c6\u7fa4\u7684\u5de5\u5177\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/pages-for-subheaders/access-clusters.md",sourceDirName:"pages-for-subheaders",slug:"/pages-for-subheaders/access-clusters",permalink:"/zh/pages-for-subheaders/access-clusters",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/docs/pages-for-subheaders/access-clusters.md",tags:[],version:"current",lastUpdatedAt:1663080703,formattedLastUpdatedAt:"2022/9/13",frontMatter:{title:"\u96c6\u7fa4\u8bbf\u95ee",weight:1},sidebar:"tutorialSidebar",previous:{title:"\u96c6\u7fa4\u7ba1\u7406",permalink:"/zh/pages-for-subheaders/manage-clusters"},next:{title:"\u4f7f\u7528 Kubectl \u548c kubeconfig \u8bbf\u95ee\u96c6\u7fa4",permalink:"/zh/how-to-guides/advanced-user-guides/manage-clusters/access-clusters/use-kubectl-and-kubeconfig"}},i={},p=[{value:"Rancher UI",id:"rancher-ui",level:3},{value:"kubectl",id:"kubectl",level:3},{value:"Rancher CLI",id:"rancher-cli",level:3},{value:"Rancher API",id:"rancher-api",level:3}],h={toc:p};function d(e){var t=e.components,r=(0,a.Z)(e,s);return(0,c.kt)("wrapper",(0,n.Z)({},h,r,{components:t,mdxType:"MDXLayout"}),(0,c.kt)("p",null,"\u672c\u8282\u4ecb\u7ecd\u53ef\u4ee5\u7528\u6765\u8bbf\u95ee Rancher \u7ba1\u7406\u7684\u96c6\u7fa4\u7684\u5de5\u5177\u3002"),(0,c.kt)("p",null,"\u6709\u5173\u5982\u4f55\u6388\u4e88\u7528\u6237\u8bbf\u95ee\u96c6\u7fa4\u7684\u6743\u9650\u7684\u4fe1\u606f\uff0c\u8bf7\u53c2\u9605",(0,c.kt)("a",{parentName:"p",href:"/zh/how-to-guides/advanced-user-guides/manage-clusters/access-clusters/add-users-to-clusters"},"\u5c06\u7528\u6237\u6dfb\u52a0\u5230\u96c6\u7fa4"),"\u3002"),(0,c.kt)("p",null,"\u6709\u5173 RBAC \u7684\u66f4\u591a\u4fe1\u606f\uff0c\u8bf7\u53c2\u9605",(0,c.kt)("a",{parentName:"p",href:"/zh/pages-for-subheaders/manage-role-based-access-control-rbac"},"\u672c\u8282"),"\u3002"),(0,c.kt)("p",null,"\u6709\u5173\u5982\u4f55\u8bbe\u7f6e\u8eab\u4efd\u9a8c\u8bc1\u7cfb\u7edf\u7684\u4fe1\u606f\uff0c\u8bf7\u53c2\u9605",(0,c.kt)("a",{parentName:"p",href:"/zh/pages-for-subheaders/about-authentication"},"\u672c\u8282"),"\u3002"),(0,c.kt)("h3",{id:"rancher-ui"},"Rancher UI"),(0,c.kt)("p",null,"Rancher \u63d0\u4f9b\u4e86\u4e00\u4e2a\u76f4\u89c2\u7684\u7528\u6237\u754c\u9762\u6765\u8ba9\u4f60\u4e0e\u96c6\u7fa4\u8fdb\u884c\u4ea4\u4e92\u3002UI \u4e2d\u6240\u6709\u53ef\u7528\u7684\u9009\u9879\u90fd\u4f7f\u7528 Rancher API\u3002\u56e0\u6b64\uff0cUI \u4e2d\u7684\u4efb\u4f55\u64cd\u4f5c\u90fd\u53ef\u4ee5\u5728 Rancher CLI \u6216 Rancher API \u4e2d\u8fdb\u884c\u3002"),(0,c.kt)("h3",{id:"kubectl"},"kubectl"),(0,c.kt)("p",null,"\u4f60\u53ef\u4ee5\u4f7f\u7528 Kubernetes \u547d\u4ee4\u884c\u5de5\u5177 ",(0,c.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/reference/kubectl/overview/"},"kubectl")," \u6765\u7ba1\u7406\u4f60\u7684\u96c6\u7fa4\u3002\u4f7f\u7528 kubectl \u6709\u4e24\u79cd\u9009\u62e9\uff1a"),(0,c.kt)("ul",null,(0,c.kt)("li",{parentName:"ul"},(0,c.kt)("strong",{parentName:"li"},"Rancher kubectl shell"),"\uff1a\u901a\u8fc7\u542f\u52a8 Rancher UI \u4e2d\u53ef\u7528\u7684 kubectl shell \u4e0e\u96c6\u7fa4\u4ea4\u4e92\u3002\u6b64\u9009\u9879\u4e0d\u9700\u8981\u4f60\u8fdb\u884c\u4efb\u4f55\u914d\u7f6e\u64cd\u4f5c\u3002\u6709\u5173\u8be6\u7ec6\u4fe1\u606f\uff0c\u8bf7\u53c2\u9605",(0,c.kt)("a",{parentName:"li",href:"/zh/how-to-guides/advanced-user-guides/manage-clusters/access-clusters/use-kubectl-and-kubeconfig"},"\u4f7f\u7528 kubectl Shell \u8bbf\u95ee\u96c6\u7fa4"),"\u3002"),(0,c.kt)("li",{parentName:"ul"},(0,c.kt)("strong",{parentName:"li"},"\u7ec8\u7aef\u8fdc\u7a0b\u8fde\u63a5"),"\uff1a\u4f60\u4e5f\u53ef\u4ee5\u901a\u8fc7\u5728\u672c\u5730\u684c\u9762\u4e0a\u5b89\u88c5 ",(0,c.kt)("a",{parentName:"li",href:"https://kubernetes.io/docs/tasks/tools/install-kubectl/"},"kubectl"),"\uff0c\u7136\u540e\u5c06\u96c6\u7fa4\u7684 kubeconfig \u6587\u4ef6\u590d\u5236\u5230\u672c\u5730 ",(0,c.kt)("inlineCode",{parentName:"li"},"~/.kube/config")," \u76ee\u5f55\u6765\u4e0e\u96c6\u7fa4\u4ea4\u4e92\u3002\u6709\u5173\u66f4\u591a\u4fe1\u606f\uff0c\u8bf7\u53c2\u9605",(0,c.kt)("a",{parentName:"li",href:"/zh/how-to-guides/advanced-user-guides/manage-clusters/access-clusters/use-kubectl-and-kubeconfig"},"\u4f7f\u7528 kubectl \u548c kubeconfig \u6587\u4ef6\u8bbf\u95ee\u96c6\u7fa4"),"\u3002")),(0,c.kt)("h3",{id:"rancher-cli"},"Rancher CLI"),(0,c.kt)("p",null,"\u4f60\u53ef\u4ee5\u4e0b\u8f7d Rancher \u81ea\u5df1\u7684\u547d\u4ee4\u884c\u5de5\u5177 ",(0,c.kt)("a",{parentName:"p",href:"/zh/pages-for-subheaders/cli-with-rancher"},"Rancher CLI")," \u6765\u63a7\u5236\u4f60\u7684\u96c6\u7fa4\u3002\u8fd9\u4e2a CLI \u5de5\u5177\u53ef\u4ee5\u76f4\u63a5\u4e0e\u4e0d\u540c\u7684\u96c6\u7fa4\u548c\u9879\u76ee\u8fdb\u884c\u4ea4\u4e92\uff0c\u6216\u8005\u5411\u5b83\u4eec\u4f20\u9012 ",(0,c.kt)("inlineCode",{parentName:"p"},"kubectl")," \u547d\u4ee4\u3002"),(0,c.kt)("h3",{id:"rancher-api"},"Rancher API"),(0,c.kt)("p",null,"\u6700\u540e\uff0c\u4f60\u53ef\u4ee5\u901a\u8fc7 Rancher API \u4e0e\u96c6\u7fa4\u8fdb\u884c\u4ea4\u4e92\u3002\u5728\u4f7f\u7528 API \u4e4b\u524d\uff0c\u4f60\u5fc5\u987b\u5148\u83b7\u53d6 ",(0,c.kt)("a",{parentName:"p",href:"/zh/reference-guides/user-settings/api-keys"},"API \u5bc6\u94a5"),"\u3002\u8981\u67e5\u770b API \u5bf9\u8c61\u7684\u4e0d\u540c\u8d44\u6e90\u5b57\u6bb5\u548c\u64cd\u4f5c\uff0c\u8bf7\u6253\u5f00 API UI\uff08API UI \u53ef\u4ee5\u901a\u8fc7\u5355\u51fb Rancher UI \u5bf9\u8c61\u7684",(0,c.kt)("strong",{parentName:"p"},"\u5728 API \u4e2d\u67e5\u770b"),"\u8bbf\u95ee\uff09\u3002"))}d.isMDXComponent=!0}}]);