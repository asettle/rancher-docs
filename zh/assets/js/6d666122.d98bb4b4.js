"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[83713],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>f});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),u=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},s=function(e){var t=u(e.components);return n.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),d=u(r),f=o,g=d["".concat(l,".").concat(f)]||d[f]||p[f]||i;return r?n.createElement(g,a(a({ref:t},s),{},{components:r})):n.createElement(g,a({ref:t},s))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:o,a[1]=c;for(var u=2;u<i;u++)a[u]=r[u];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},58140:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>p,frontMatter:()=>i,metadata:()=>c,toc:()=>u});var n=r(87462),o=(r(67294),r(3905));const i={title:"DigitalOcean \u4e3b\u673a\u914d\u7f6e"},a=void 0,c={unversionedId:"reference-guides/cluster-configuration/downstream-cluster-configuration/machine-configuration/digitalocean",id:"version-2.6/reference-guides/cluster-configuration/downstream-cluster-configuration/machine-configuration/digitalocean",title:"DigitalOcean \u4e3b\u673a\u914d\u7f6e",description:"\u6709\u5173 DigitalOcean\u3001Droplet \u7684\u66f4\u591a\u8be6\u7ec6\u4fe1\u606f\uff0c\u8bf7\u53c2\u9605\u5b98\u65b9\u6587\u6863\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-2.6/reference-guides/cluster-configuration/downstream-cluster-configuration/machine-configuration/digitalocean.md",sourceDirName:"reference-guides/cluster-configuration/downstream-cluster-configuration/machine-configuration",slug:"/reference-guides/cluster-configuration/downstream-cluster-configuration/machine-configuration/digitalocean",permalink:"/zh/v2.6/reference-guides/cluster-configuration/downstream-cluster-configuration/machine-configuration/digitalocean",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/versioned_docs/version-2.6/reference-guides/cluster-configuration/downstream-cluster-configuration/machine-configuration/digitalocean.md",tags:[],version:"2.6",lastUpdatedAt:1685574148,formattedLastUpdatedAt:"2023\u5e745\u670831\u65e5",frontMatter:{title:"DigitalOcean \u4e3b\u673a\u914d\u7f6e"},sidebar:"tutorialSidebar",previous:{title:"EC2 \u4e3b\u673a\u914d\u7f6e\u53c2\u8003",permalink:"/zh/v2.6/reference-guides/cluster-configuration/downstream-cluster-configuration/machine-configuration/amazon-ec2"},next:{title:"Azure \u4e3b\u673a\u914d\u7f6e",permalink:"/zh/v2.6/reference-guides/cluster-configuration/downstream-cluster-configuration/machine-configuration/azure"}},l={},u=[{value:"\u533a\u57df",id:"\u533a\u57df",level:3},{value:"\u5927\u5c0f",id:"\u5927\u5c0f",level:3},{value:"\u64cd\u4f5c\u7cfb\u7edf\u955c\u50cf",id:"\u64cd\u4f5c\u7cfb\u7edf\u955c\u50cf",level:3},{value:"Monitoring",id:"monitoring",level:3},{value:"IPv6",id:"ipv6",level:3},{value:"\u79c1\u6709\u7f51\u7edc",id:"\u79c1\u6709\u7f51\u7edc",level:3},{value:"Droplet \u6807\u7b7e",id:"droplet-\u6807\u7b7e",level:3}],s={toc:u};function p(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"\u6709\u5173 DigitalOcean\u3001Droplet \u7684\u66f4\u591a\u8be6\u7ec6\u4fe1\u606f\uff0c\u8bf7\u53c2\u9605",(0,o.kt)("a",{parentName:"p",href:"https://docs.digitalocean.com/products/compute/"},"\u5b98\u65b9\u6587\u6863"),"\u3002"),(0,o.kt)("h3",{id:"\u533a\u57df"},"\u533a\u57df"),(0,o.kt)("p",null,"\u914d\u7f6e\u521b\u5efa Droplet \u7684",(0,o.kt)("a",{parentName:"p",href:"https://docs.digitalocean.com/glossary/region/"},"\u533a\u57df"),"\u3002"),(0,o.kt)("h3",{id:"\u5927\u5c0f"},"\u5927\u5c0f"),(0,o.kt)("p",null,"\u914d\u7f6e Droplet \u7684",(0,o.kt)("a",{parentName:"p",href:"https://docs.digitalocean.com/products/droplets/resources/choose-plan/"},"\u5927\u5c0f"),"\u3002"),(0,o.kt)("h3",{id:"\u64cd\u4f5c\u7cfb\u7edf\u955c\u50cf"},"\u64cd\u4f5c\u7cfb\u7edf\u955c\u50cf"),(0,o.kt)("p",null,"\u914d\u7f6e\u7528\u4e8e\u521b\u5efa Droplet \u7684\u64cd\u4f5c\u7cfb\u7edf",(0,o.kt)("a",{parentName:"p",href:"https://docs.digitalocean.com/products/images/"},"\u955c\u50cf"),"\u3002"),(0,o.kt)("h3",{id:"monitoring"},"Monitoring"),(0,o.kt)("p",null,"\u542f\u7528 DigitalOcean \u4ee3\u7406\u4ee5\u8fdb\u884c\u989d\u5916\u7684",(0,o.kt)("a",{parentName:"p",href:"https://docs.digitalocean.com/products/monitoring/"},"\u76d1\u63a7"),"\u3002"),(0,o.kt)("h3",{id:"ipv6"},"IPv6"),(0,o.kt)("p",null,"\u4e3a Droplet \u542f\u7528 IPv6\u3002"),(0,o.kt)("h3",{id:"\u79c1\u6709\u7f51\u7edc"},"\u79c1\u6709\u7f51\u7edc"),(0,o.kt)("p",null,"\u4e3a Droplet \u542f\u7528\u79c1\u6709\u7f51\u7edc\u3002"),(0,o.kt)("h3",{id:"droplet-\u6807\u7b7e"},"Droplet \u6807\u7b7e"),(0,o.kt)("p",null,"\u5c06\u6807\u7b7e\uff08tag, label\uff09\u5e94\u7528\u4e8e Droplet\u3002\u6807\u7b7e\u53ea\u80fd\u5305\u542b\u5b57\u6bcd\u3001\u6570\u5b57\u3001\u5192\u53f7\u3001\u7834\u6298\u53f7\u548c\u4e0b\u5212\u7ebf\u3002\u4f8b\u5982\uff0c",(0,o.kt)("inlineCode",{parentName:"p"},"my_server"),"\u3002"))}p.isMDXComponent=!0}}]);