"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[19996],{3905:(t,e,n)=>{n.d(e,{Zo:()=>m,kt:()=>N});var a=n(67294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function d(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},l=Object.keys(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var p=a.createContext({}),o=function(t){var e=a.useContext(p),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},m=function(t){var e=o(t.components);return a.createElement(p.Provider,{value:e},t.children)},k={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},u=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,l=t.originalType,p=t.parentName,m=d(t,["components","mdxType","originalType","parentName"]),u=o(n),N=r,s=u["".concat(p,".").concat(N)]||u[N]||k[N]||l;return n?a.createElement(s,i(i({ref:e},m),{},{components:n})):a.createElement(s,i({ref:e},m))}));function N(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=n.length,i=new Array(l);i[0]=u;var d={};for(var p in e)hasOwnProperty.call(e,p)&&(d[p]=e[p]);d.originalType=t,d.mdxType="string"==typeof t?t:r,i[1]=d;for(var o=2;o<l;o++)i[o]=n[o];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},77323:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>p,contentTitle:()=>i,default:()=>k,frontMatter:()=>l,metadata:()=>d,toc:()=>o});var a=n(87462),r=(n(67294),n(3905));const l={title:"Rancher Agent \u9009\u9879"},i=void 0,d={unversionedId:"reference-guides/cluster-configuration/rancher-server-configuration/use-existing-nodes/rancher-agent-options",id:"version-2.6/reference-guides/cluster-configuration/rancher-server-configuration/use-existing-nodes/rancher-agent-options",title:"Rancher Agent \u9009\u9879",description:"Rancher \u5728\u6bcf\u4e2a\u8282\u70b9\u4e0a\u90e8\u7f72\u4e00\u4e2a Agent \u6765\u4e0e\u8282\u70b9\u901a\u4fe1\u3002\u672c\u6587\u63cf\u8ff0\u4e86\u53ef\u4ee5\u4f20\u9012\u7ed9 Agent \u7684\u9009\u9879\u3002\u8981\u4f7f\u7528\u8fd9\u4e9b\u9009\u9879\uff0c\u4f60\u9700\u8981\u4f7f\u7528\u81ea\u5b9a\u4e49\u8282\u70b9\u521b\u5efa\u96c6\u7fa4\uff0c\u5e76\u5728\u6dfb\u52a0\u8282\u70b9\u65f6\u5c06\u9009\u9879\u6dfb\u52a0\u5230\u751f\u6210\u7684 docker run \u547d\u4ee4\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-2.6/reference-guides/cluster-configuration/rancher-server-configuration/use-existing-nodes/rancher-agent-options.md",sourceDirName:"reference-guides/cluster-configuration/rancher-server-configuration/use-existing-nodes",slug:"/reference-guides/cluster-configuration/rancher-server-configuration/use-existing-nodes/rancher-agent-options",permalink:"/zh/v2.6/reference-guides/cluster-configuration/rancher-server-configuration/use-existing-nodes/rancher-agent-options",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/versioned_docs/version-2.6/reference-guides/cluster-configuration/rancher-server-configuration/use-existing-nodes/rancher-agent-options.md",tags:[],version:"2.6",lastUpdatedAt:1685656966,formattedLastUpdatedAt:"2023\u5e746\u67081\u65e5",frontMatter:{title:"Rancher Agent \u9009\u9879"},sidebar:"tutorialSidebar",previous:{title:"\u5728\u73b0\u6709\u81ea\u5b9a\u4e49\u8282\u70b9\u4e0a\u542f\u52a8 Kubernetes",permalink:"/zh/v2.6/pages-for-subheaders/use-existing-nodes"},next:{title:"\u540c\u6b65",permalink:"/zh/v2.6/reference-guides/cluster-configuration/rancher-server-configuration/sync-clusters"}},p={},o=[{value:"\u901a\u7528\u9009\u9879",id:"\u901a\u7528\u9009\u9879",level:2},{value:"\u89d2\u8272\u9009\u9879",id:"\u89d2\u8272\u9009\u9879",level:2},{value:"IP \u5730\u5740\u9009\u9879",id:"ip-\u5730\u5740\u9009\u9879",level:2},{value:"\u52a8\u6001 IP \u5730\u5740\u9009\u9879",id:"\u52a8\u6001-ip-\u5730\u5740\u9009\u9879",level:3}],m={toc:o};function k(t){let{components:e,...n}=t;return(0,r.kt)("wrapper",(0,a.Z)({},m,n,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Rancher \u5728\u6bcf\u4e2a\u8282\u70b9\u4e0a\u90e8\u7f72\u4e00\u4e2a Agent \u6765\u4e0e\u8282\u70b9\u901a\u4fe1\u3002\u672c\u6587\u63cf\u8ff0\u4e86\u53ef\u4ee5\u4f20\u9012\u7ed9 Agent \u7684\u9009\u9879\u3002\u8981\u4f7f\u7528\u8fd9\u4e9b\u9009\u9879\uff0c\u4f60\u9700\u8981",(0,r.kt)("a",{parentName:"p",href:"/zh/v2.6/pages-for-subheaders/use-existing-nodes"},"\u4f7f\u7528\u81ea\u5b9a\u4e49\u8282\u70b9\u521b\u5efa\u96c6\u7fa4"),"\uff0c\u5e76\u5728\u6dfb\u52a0\u8282\u70b9\u65f6\u5c06\u9009\u9879\u6dfb\u52a0\u5230\u751f\u6210\u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"docker run")," \u547d\u4ee4\u3002"),(0,r.kt)("p",null,"\u6709\u5173 Rancher \u5982\u4f55\u4f7f\u7528 Node Agent \u4e0e\u4e0b\u6e38\u96c6\u7fa4\u901a\u4fe1\u7684\u6982\u8ff0\uff0c\u8bf7\u53c2\u9605",(0,r.kt)("a",{parentName:"p",href:"/zh/v2.6/reference-guides/rancher-manager-architecture/communicating-with-downstream-user-clusters#3-node-agents"},"\u4ea7\u54c1\u67b6\u6784"),"\u3002"),(0,r.kt)("h2",{id:"\u901a\u7528\u9009\u9879"},"\u901a\u7528\u9009\u9879"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"\u53c2\u6570"),(0,r.kt)("th",{parentName:"tr",align:null},"\u73af\u5883\u53d8\u91cf"),(0,r.kt)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"--server")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"CATTLE_SERVER")),(0,r.kt)("td",{parentName:"tr",align:null},"\u5df2\u914d\u7f6e\u7684 Rancher ",(0,r.kt)("inlineCode",{parentName:"td"},"server-url"),"\uff0cAgent \u5c06\u901a\u8fc7\u8fd9\u4e2a\u5730\u5740\u8fde\u63a5 Server\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"--token")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"CATTLE_TOKEN")),(0,r.kt)("td",{parentName:"tr",align:null},"\u5728 Rancher \u4e2d\u6ce8\u518c\u8282\u70b9\u6240\u9700\u7684 Token\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"--ca-checksum")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"CATTLE_CA_CHECKSUM")),(0,r.kt)("td",{parentName:"tr",align:null},"\u4f7f\u7528\u5df2\u914d\u7f6e\u7684 Rancher ",(0,r.kt)("inlineCode",{parentName:"td"},"cacerts")," \u8fdb\u884c SHA256 \u6821\u9a8c\u548c\u9a8c\u8bc1\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"--node-name")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"CATTLE_NODE_NAME")),(0,r.kt)("td",{parentName:"tr",align:null},"\u8986\u76d6\u7528\u4e8e\u6ce8\u518c\u8282\u70b9\u7684\u4e3b\u673a\u540d\uff08\u9ed8\u8ba4\u4e3a ",(0,r.kt)("inlineCode",{parentName:"td"},"hostname -s"),"\uff09\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"--label")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"CATTLE_NODE_LABEL")),(0,r.kt)("td",{parentName:"tr",align:null},"\u5411\u8282\u70b9\u6dfb\u52a0\u8282\u70b9\u6807\u7b7e\u3002\u5bf9\u4e8e\u591a\u4e2a\u6807\u7b7e\uff0c\u8bf7\u4f20\u9012\u989d\u5916\u7684 ",(0,r.kt)("inlineCode",{parentName:"td"},"--label")," \u9009\u9879\u3002(",(0,r.kt)("inlineCode",{parentName:"td"},"--label key=value"),")")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"--taints")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"CATTLE_NODE_TAINTS")),(0,r.kt)("td",{parentName:"tr",align:null},"\u5c06\u8282\u70b9\u6c61\u70b9\u6dfb\u52a0\u5230\u8282\u70b9\u3002\u5bf9\u4e8e\u591a\u4e2a\u6c61\u70b9\uff0c\u8bf7\u4f20\u9012\u989d\u5916\u7684 ",(0,r.kt)("inlineCode",{parentName:"td"},"--taints")," \u9009\u9879\u3002(",(0,r.kt)("inlineCode",{parentName:"td"},"--taints key=value:effect"),")")))),(0,r.kt)("h2",{id:"\u89d2\u8272\u9009\u9879"},"\u89d2\u8272\u9009\u9879"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"\u53c2\u6570"),(0,r.kt)("th",{parentName:"tr",align:null},"\u73af\u5883\u53d8\u91cf"),(0,r.kt)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"--all-roles")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"ALL=true")),(0,r.kt)("td",{parentName:"tr",align:null},"\u5c06\u6240\u6709\u89d2\u8272\uff08",(0,r.kt)("inlineCode",{parentName:"td"},"etcd"),"\u3001",(0,r.kt)("inlineCode",{parentName:"td"},"controlplane"),"\u3001",(0,r.kt)("inlineCode",{parentName:"td"},"worker"),"\uff09\u5e94\u7528\u5230\u8282\u70b9\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"--etcd")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"ETCD=true")),(0,r.kt)("td",{parentName:"tr",align:null},"\u5c06\u89d2\u8272 ",(0,r.kt)("inlineCode",{parentName:"td"},"etcd")," \u5e94\u7528\u5230\u8282\u70b9\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"--controlplane")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"CONTROL=true")),(0,r.kt)("td",{parentName:"tr",align:null},"\u5c06\u89d2\u8272 ",(0,r.kt)("inlineCode",{parentName:"td"},"controlplane")," \u5e94\u7528\u5230\u8282\u70b9\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"--worker")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"WORKER=true")),(0,r.kt)("td",{parentName:"tr",align:null},"\u5c06\u89d2\u8272 ",(0,r.kt)("inlineCode",{parentName:"td"},"worker")," \u5e94\u7528\u5230\u8282\u70b9\u3002")))),(0,r.kt)("h2",{id:"ip-\u5730\u5740\u9009\u9879"},"IP \u5730\u5740\u9009\u9879"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"\u53c2\u6570"),(0,r.kt)("th",{parentName:"tr",align:null},"\u73af\u5883\u53d8\u91cf"),(0,r.kt)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"--address")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"CATTLE_ADDRESS")),(0,r.kt)("td",{parentName:"tr",align:null},"\u8282\u70b9\u5c06\u6ce8\u518c\u7684 IP \u5730\u5740\uff08\u9ed8\u8ba4\u4e3a\u7528\u4e8e\u8fde\u63a5 ",(0,r.kt)("inlineCode",{parentName:"td"},"8.8.8.8"),"\u7684 IP\uff09\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"--internal-address")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"CATTLE_INTERNAL_ADDRESS")),(0,r.kt)("td",{parentName:"tr",align:null},"\u79c1\u6709\u7f51\u7edc\u4e0a\u7528\u4e8e\u4e3b\u673a\u95f4\u901a\u4fe1\u7684 IP \u5730\u5740\u3002")))),(0,r.kt)("h3",{id:"\u52a8\u6001-ip-\u5730\u5740\u9009\u9879"},"\u52a8\u6001 IP \u5730\u5740\u9009\u9879"),(0,r.kt)("p",null,"\u51fa\u4e8e\u81ea\u52a8\u5316\u76ee\u7684\uff0c\u4f60\u4e0d\u80fd\u5728\u547d\u4ee4\u4e2d\u4f7f\u7528\u7279\u5b9a\u7684 IP \u5730\u5740\uff0c\u56e0\u4e3a\u5b83\u5fc5\u987b\u662f\u901a\u7528\u7684\u624d\u80fd\u7528\u4e8e\u6bcf\u4e2a\u8282\u70b9\u3002\u4e3a\u6b64\uff0c\u6211\u4eec\u63d0\u4f9b\u4e86\u52a8\u6001 IP \u5730\u5740\u7684\u9009\u9879\u3002\u5b83\u4eec\u7528\u4f5c\u73b0\u6709 IP \u5730\u5740\u9009\u9879\u7684\u503c\u3002\u652f\u6301 ",(0,r.kt)("inlineCode",{parentName:"p"},"--address")," \u548c ",(0,r.kt)("inlineCode",{parentName:"p"},"--internal-address"),"\u3002"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"\u503c"),(0,r.kt)("th",{parentName:"tr",align:null},"\u793a\u4f8b"),(0,r.kt)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"\u63a5\u53e3\u540d\u79f0"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"--address eth0")),(0,r.kt)("td",{parentName:"tr",align:null},"\u5c06\u4ece\u7ed9\u5b9a\u7684\u63a5\u53e3\u4e2d\u68c0\u7d22\u7b2c\u4e00\u4e2a\u914d\u7f6e\u7684 IP \u5730\u5740\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"ipify")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"--address ipify")),(0,r.kt)("td",{parentName:"tr",align:null},"\u5c06\u4f7f\u7528\u4ece ",(0,r.kt)("inlineCode",{parentName:"td"},"https://api.ipify.org")," \u68c0\u7d22\u5230\u7684\u503c\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"awslocal")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"--address awslocal")),(0,r.kt)("td",{parentName:"tr",align:null},"\u5c06\u4f7f\u7528\u4ece ",(0,r.kt)("inlineCode",{parentName:"td"},"http://169.254.169.254/latest/meta-data/local-ipv4")," \u68c0\u7d22\u5230\u7684\u503c\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"awspublic")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"--address awspublic")),(0,r.kt)("td",{parentName:"tr",align:null},"\u5c06\u4f7f\u7528\u4ece ",(0,r.kt)("inlineCode",{parentName:"td"},"http://169.254.169.254/latest/meta-data/public-ipv4")," \u68c0\u7d22\u5230\u7684\u503c\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"doprivate")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"--address doprivate")),(0,r.kt)("td",{parentName:"tr",align:null},"\u5c06\u4f7f\u7528\u4ece ",(0,r.kt)("inlineCode",{parentName:"td"},"http://169.254.169.254/metadata/v1/interfaces/private/0/ipv4/address")," \u68c0\u7d22\u5230\u7684\u503c\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"dopublic")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"--address dopublic")),(0,r.kt)("td",{parentName:"tr",align:null},"\u5c06\u4f7f\u7528\u4ece ",(0,r.kt)("inlineCode",{parentName:"td"},"http://169.254.169.254/metadata/v1/interfaces/public/0/ipv4/address")," \u68c0\u7d22\u5230\u7684\u503c\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"azprivate")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"--address azprivate")),(0,r.kt)("td",{parentName:"tr",align:null},"\u5c06\u4f7f\u7528\u4ece ",(0,r.kt)("inlineCode",{parentName:"td"},"http://169.254.169.254/metadata/instance/network/interface/0/ipv4/ipAddress/0/privateIpAddress?api-version=2017-08-01&format=text")," \u68c0\u7d22\u5230\u7684\u503c\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"azpublic")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"--address azpublic")),(0,r.kt)("td",{parentName:"tr",align:null},"\u5c06\u4f7f\u7528\u4ece ",(0,r.kt)("inlineCode",{parentName:"td"},"http://169.254.169.254/metadata/instance/network/interface/0/ipv4/ipAddress/0/publicIpAddress?api-version=2017-08-01&format=text")," \u68c0\u7d22\u5230\u7684\u503c\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"gceinternal")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"--address gceinternal")),(0,r.kt)("td",{parentName:"tr",align:null},"\u5c06\u4f7f\u7528\u4ece ",(0,r.kt)("inlineCode",{parentName:"td"},"http://metadata.google.internal/computeMetadata/v1/instance/network-interfaces/0/ip")," \u68c0\u7d22\u5230\u7684\u503c\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"gceexternal")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"--address gceexternal")),(0,r.kt)("td",{parentName:"tr",align:null},"\u5c06\u4f7f\u7528\u4ece ",(0,r.kt)("inlineCode",{parentName:"td"},"http://metadata.google.internal/computeMetadata/v1/instance/network-interfaces/0/access-configs/0/external-ip")," \u68c0\u7d22\u5230\u7684\u503c\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"packetlocal")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"--address packetlocal")),(0,r.kt)("td",{parentName:"tr",align:null},"\u5c06\u4f7f\u7528\u4ece ",(0,r.kt)("inlineCode",{parentName:"td"},"https://metadata.packet.net/2009-04-04/meta-data/local-ipv4")," \u68c0\u7d22\u5230\u7684\u503c\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"packetpublic")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"--address packetlocal")),(0,r.kt)("td",{parentName:"tr",align:null},"\u5c06\u4f7f\u7528\u4ece ",(0,r.kt)("inlineCode",{parentName:"td"},"https://metadata.packet.net/2009-04-04/meta-data/public-ipv4")," \u68c0\u7d22\u5230\u7684\u503c\u3002")))))}k.isMDXComponent=!0}}]);