"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[37844],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>m});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),p=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},l=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},y=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),y=p(n),m=o,d=y["".concat(c,".").concat(m)]||y[m]||u[m]||a;return n?r.createElement(d,i(i({ref:t},l),{},{components:n})):r.createElement(d,i({ref:t},l))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=y;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var p=2;p<a;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}y.displayName="MDXCreateElement"},13517:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>s,toc:()=>p});var r=n(87462),o=(n(67294),n(3905));const a={title:"Encryption Key Rotation"},i=void 0,s={unversionedId:"how-to-guides/new-user-guides/manage-clusters/rotate-encryption-key",id:"version-2.6/how-to-guides/new-user-guides/manage-clusters/rotate-encryption-key",title:"Encryption Key Rotation",description:"RKE1 Encryption Key Rotation",source:"@site/versioned_docs/version-2.6/how-to-guides/new-user-guides/manage-clusters/rotate-encryption-key.md",sourceDirName:"how-to-guides/new-user-guides/manage-clusters",slug:"/how-to-guides/new-user-guides/manage-clusters/rotate-encryption-key",permalink:"/v2.6/how-to-guides/new-user-guides/manage-clusters/rotate-encryption-key",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/versioned_docs/version-2.6/how-to-guides/new-user-guides/manage-clusters/rotate-encryption-key.md",tags:[],version:"2.6",lastUpdatedAt:1685572449,formattedLastUpdatedAt:"May 31, 2023",frontMatter:{title:"Encryption Key Rotation"},sidebar:"tutorialSidebar",previous:{title:"Certificate Rotation",permalink:"/v2.6/how-to-guides/new-user-guides/manage-clusters/rotate-certificates"},next:{title:"Cluster Templates",permalink:"/v2.6/how-to-guides/new-user-guides/manage-clusters/manage-cluster-templates"}},c={},p=[{value:"RKE1 Encryption Key Rotation",id:"rke1-encryption-key-rotation",level:3},{value:"RKE2 Encryption Key Rotation",id:"rke2-encryption-key-rotation",level:3}],l={toc:p};function u(e){let{components:t,...a}=e;return(0,o.kt)("wrapper",(0,r.Z)({},l,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h3",{id:"rke1-encryption-key-rotation"},"RKE1 Encryption Key Rotation"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Enable encryption key rotation with either of the following two options:"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Select the ",(0,o.kt)("inlineCode",{parentName:"li"},"Enabled")," radio button in the Rancher UI under ",(0,o.kt)("strong",{parentName:"li"},"Cluster Options > Advanced Options > Secrets Encryption"),":")),(0,o.kt)("p",{parentName:"li"},(0,o.kt)("img",{alt:"Enable Encryption Key Rotation",src:n(1055).Z,width:"676",height:"457"})),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"OR, apply the following YAML:")),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"rancher_kubernetes_engine_config:\n  services:\n    kube_api:\n      secrets_encryption_config:\n        enabled: true\n"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Rotate keys in the Rancher UI:"),(0,o.kt)("p",{parentName:"li"},"2.1. Click ",(0,o.kt)("strong",{parentName:"p"},"\u2630 > Cluster Management"),"."),(0,o.kt)("p",{parentName:"li"},"2.2. Select ",(0,o.kt)("strong",{parentName:"p"},"\u22ee > Rotate Encryption Keys")," on the far right of the screen next to your chosen cluster:"),(0,o.kt)("p",{parentName:"li"},(0,o.kt)("img",{alt:"Encryption Key Rotation",src:n(4200).Z,width:"779",height:"486"})))),(0,o.kt)("h3",{id:"rke2-encryption-key-rotation"},"RKE2 Encryption Key Rotation"),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},(0,o.kt)("strong",{parentName:"em"},"New in v2.6.7"))),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("strong",{parentName:"p"},"Important:")," Encryption key rotation is enabled by default and cannot be disabled.")),(0,o.kt)("p",null,"To rotate keys in the Rancher UI:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Click ",(0,o.kt)("strong",{parentName:"p"},"\u2630 > Cluster Management"),".")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Select ",(0,o.kt)("strong",{parentName:"p"},"\u22ee > Rotate Encryption Keys")," on the far right of the screen next to your chosen cluster:"),(0,o.kt)("p",{parentName:"li"},(0,o.kt)("img",{alt:"Encryption Key Rotation",src:n(8810).Z,width:"802",height:"512"})))),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("strong",{parentName:"p"},"Note:")," For more information on RKE2 secrets encryption config, please see the ",(0,o.kt)("a",{parentName:"p",href:"https://docs.rke2.io/security/secrets_encryption"},"RKE2 docs"),".")))}u.isMDXComponent=!0},1055:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/rke1-enable-secrets-encryption-d29a4755d08b4488657d8cd841f3f04d.png"},4200:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/rke1-encryption-key-f596440d48043810288cc49779a2bbf0.png"},8810:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/rke2-encryption-key-a48b0c7cec7f98605d7ea0923008d67b.png"}}]);