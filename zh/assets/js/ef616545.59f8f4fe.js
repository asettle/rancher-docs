"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[65441],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>m});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},s=Object.keys(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),o=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=o(e.components);return n.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,s=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=o(r),m=a,g=u["".concat(c,".").concat(m)]||u[m]||d[m]||s;return r?n.createElement(g,i(i({ref:t},p),{},{components:r})):n.createElement(g,i({ref:t},p))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=r.length,i=new Array(s);i[0]=u;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var o=2;o<s;o++)i[o]=r[o];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},58077:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>d,frontMatter:()=>s,metadata:()=>l,toc:()=>o});var n=r(87462),a=(r(67294),r(3905));const s={title:"\u6dfb\u52a0 TLS \u5bc6\u6587"},i=void 0,l={unversionedId:"getting-started/installation-and-upgrade/resources/add-tls-secrets",id:"getting-started/installation-and-upgrade/resources/add-tls-secrets",title:"\u6dfb\u52a0 TLS \u5bc6\u6587",description:"\u6211\u4eec\u4f7f\u7528\u8bc1\u4e66\u548c\u5bc6\u94a5\u5c06 cattle-system \u547d\u540d\u7a7a\u95f4\u4e2d\u7684 tls-rancher-ingress \u5bc6\u6587\u914d\u7f6e\u597d\u540e\uff0cKubernetes \u4f1a\u4e3a Rancher \u521b\u5efa\u5bf9\u8c61\u548c\u670d\u52a1\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/getting-started/installation-and-upgrade/resources/add-tls-secrets.md",sourceDirName:"getting-started/installation-and-upgrade/resources",slug:"/getting-started/installation-and-upgrade/resources/add-tls-secrets",permalink:"/zh/getting-started/installation-and-upgrade/resources/add-tls-secrets",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/docs/getting-started/installation-and-upgrade/resources/add-tls-secrets.md",tags:[],version:"current",lastUpdatedAt:1676523322,formattedLastUpdatedAt:"2023\u5e742\u670816\u65e5",frontMatter:{title:"\u6dfb\u52a0 TLS \u5bc6\u6587"},sidebar:"tutorialSidebar",previous:{title:"Helm \u7248\u672c\u8981\u6c42",permalink:"/zh/getting-started/installation-and-upgrade/resources/helm-version-requirements"},next:{title:"\u81ea\u5b9a\u4e49 CA \u6839\u8bc1\u4e66",permalink:"/zh/getting-started/installation-and-upgrade/resources/custom-ca-root-certificates"}},c={},o=[{value:"\u4f7f\u7528\u79c1\u6709 CA \u7b7e\u540d\u8bc1\u4e66",id:"\u4f7f\u7528\u79c1\u6709-ca-\u7b7e\u540d\u8bc1\u4e66",level:2},{value:"\u66f4\u65b0\u79c1\u6709 CA \u8bc1\u4e66",id:"\u66f4\u65b0\u79c1\u6709-ca-\u8bc1\u4e66",level:2}],p={toc:o};function d(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"\u6211\u4eec\u4f7f\u7528\u8bc1\u4e66\u548c\u5bc6\u94a5\u5c06 ",(0,a.kt)("inlineCode",{parentName:"p"},"cattle-system")," \u547d\u540d\u7a7a\u95f4\u4e2d\u7684 ",(0,a.kt)("inlineCode",{parentName:"p"},"tls-rancher-ingress")," \u5bc6\u6587\u914d\u7f6e\u597d\u540e\uff0cKubernetes \u4f1a\u4e3a Rancher \u521b\u5efa\u5bf9\u8c61\u548c\u670d\u52a1\u3002"),(0,a.kt)("p",null,"\u5c06\u670d\u52a1\u5668\u8bc1\u4e66\u548c\u6240\u9700\u7684\u6240\u6709\u4e2d\u95f4\u8bc1\u4e66\u5408\u5e76\u5230\u540d\u4e3a ",(0,a.kt)("inlineCode",{parentName:"p"},"tls.crt"),"\u7684\u6587\u4ef6\u4e2d\u3002\u5c06\u8bc1\u4e66\u5bc6\u94a5\u590d\u5236\u5230\u540d\u4e3a ",(0,a.kt)("inlineCode",{parentName:"p"},"tls.key")," \u7684\u6587\u4ef6\u4e2d\u3002"),(0,a.kt)("p",null,"\u4f8b\u5982\uff0c",(0,a.kt)("a",{parentName:"p",href:"https://acme.sh"},"acme.sh")," \u5728 ",(0,a.kt)("inlineCode",{parentName:"p"},"fullchain.cer")," \u6587\u4ef6\u4e2d\u63d0\u4f9b\u670d\u52a1\u5668\u8bc1\u4e66\u548c CA \u94fe\u3002\n\u8bf7\u5c06 ",(0,a.kt)("inlineCode",{parentName:"p"},"fullchain.cer")," \u547d\u540d\u4e3a ",(0,a.kt)("inlineCode",{parentName:"p"},"tls.crt"),"\uff0c\u5c06\u8bc1\u4e66\u5bc6\u94a5\u6587\u4ef6\u547d\u540d\u4e3a ",(0,a.kt)("inlineCode",{parentName:"p"},"tls.key"),"\u3002"),(0,a.kt)("p",null,"\u4f7f\u7528 ",(0,a.kt)("inlineCode",{parentName:"p"},"kubectl")," \u521b\u5efa ",(0,a.kt)("inlineCode",{parentName:"p"},"tls")," \u7c7b\u578b\u7684\u5bc6\u6587\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"kubectl -n cattle-system create secret tls tls-rancher-ingress \\\n  --cert=tls.crt \\\n  --key=tls.key\n")),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"\u5982\u9700\u66ff\u6362\u8bc1\u4e66\uff0c\u4f60\u53ef\u4ee5\u8fd0\u884c ",(0,a.kt)("inlineCode",{parentName:"p"},"kubectl -n cattle-system delete secret tls-rancher-ingress")," \u6765\u5220\u9664 ",(0,a.kt)("inlineCode",{parentName:"p"},"tls-rancher-ingress")," \u5bc6\u6587\uff0c\u7136\u540e\u8fd0\u884c\u4e0a\u65b9\u547d\u4ee4\u6765\u6dfb\u52a0\u65b0\u7684\u5bc6\u6587\u3002\u5982\u679c\u4f60\u4f7f\u7528\u7684\u662f\u79c1\u6709 CA \u7b7e\u540d\u8bc1\u4e66\uff0c\u4ec5\u5f53\u65b0\u8bc1\u4e66\u4e0e\u5f53\u524d\u8bc1\u4e66\u662f\u7531\u540c\u4e00\u4e2a CA \u7b7e\u53d1\u7684\uff0c\u624d\u53ef\u4ee5\u66ff\u6362\u3002")),(0,a.kt)("h2",{id:"\u4f7f\u7528\u79c1\u6709-ca-\u7b7e\u540d\u8bc1\u4e66"},"\u4f7f\u7528\u79c1\u6709 CA \u7b7e\u540d\u8bc1\u4e66"),(0,a.kt)("p",null,"\u5982\u679c\u4f60\u4f7f\u7528\u7684\u662f\u79c1\u6709 CA\uff0cRancher \u9700\u8981\u79c1\u6709 CA \u7684\u6839\u8bc1\u4e66\u6216\u8bc1\u4e66\u94fe\u7684\u526f\u672c\uff0cRancher Agent \u4f7f\u7528\u5b83\u6765\u6821\u9a8c\u4e0e Server \u7684\u8fde\u63a5\u3002"),(0,a.kt)("p",null,"\u521b\u5efa\u4e00\u4e2a\u540d\u4e3a ",(0,a.kt)("inlineCode",{parentName:"p"},"cacerts.pem")," \u7684\u6587\u4ef6\uff0c\u8be5\u6587\u4ef6\u4ec5\u5305\u542b\u79c1\u6709 CA \u7684\u6839 CA \u8bc1\u4e66\u6216\u8bc1\u4e66\u94fe\uff0c\u5e76\u4f7f\u7528 ",(0,a.kt)("inlineCode",{parentName:"p"},"kubectl")," \u5728 ",(0,a.kt)("inlineCode",{parentName:"p"},"cattle-system")," \u547d\u540d\u7a7a\u95f4\u4e2d\u521b\u5efa ",(0,a.kt)("inlineCode",{parentName:"p"},"tls-ca")," Secret\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"kubectl -n cattle-system create secret generic tls-ca \\\n  --from-file=cacerts.pem=./cacerts.pem\n")),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"Rancher \u542f\u52a8\u65f6\u4f1a\u68c0\u7d22\u914d\u7f6e\u7684 ",(0,a.kt)("inlineCode",{parentName:"p"},"tls-ca")," \u5bc6\u6587\u3002\u5982\u679c Rancher \u5728\u8fd0\u884c\u4e2d\uff0c\u66f4\u65b0\u7684 CA \u4f1a\u5728\u65b0\u7684 Rancher Pod \u542f\u52a8\u540e\u751f\u6548\u3002")),(0,a.kt)("h2",{id:"\u66f4\u65b0\u79c1\u6709-ca-\u8bc1\u4e66"},"\u66f4\u65b0\u79c1\u6709 CA \u8bc1\u4e66"),(0,a.kt)("p",null,"\u6309\u7167",(0,a.kt)("a",{parentName:"p",href:"/zh/getting-started/installation-and-upgrade/resources/update-rancher-certificate"},"\u6b65\u9aa4"),"\u66f4\u65b0 ",(0,a.kt)("a",{parentName:"p",href:"/zh/pages-for-subheaders/install-upgrade-on-a-kubernetes-cluster"},"Rancher \u9ad8\u53ef\u7528 Kubernetes \u5b89\u88c5"),"\u4e2d\u7684 Ingress\uff0c\u6216\u4ece\u9ed8\u8ba4\u81ea\u7b7e\u540d\u8bc1\u4e66\u5207\u6362\u5230\u81ea\u5b9a\u4e49\u8bc1\u4e66\u3002"))}d.isMDXComponent=!0}}]);