"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[95669],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return d}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),m=s(n),d=a,h=m["".concat(c,".").concat(d)]||m[d]||p[d]||o;return n?r.createElement(h,i(i({ref:t},u),{},{components:n})):r.createElement(h,i({ref:t},u))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var s=2;s<o;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},86311:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return c},default:function(){return d},frontMatter:function(){return l},metadata:function(){return s},toc:function(){return p}});var r=n(87462),a=n(63366),o=(n(67294),n(3905)),i=["components"],l={title:"Common Issues",weight:4},c=void 0,s={unversionedId:"explanations/integrations-in-rancher/cloud-marketplace/aws-cloud-marketplace/common-issues",id:"explanations/integrations-in-rancher/cloud-marketplace/aws-cloud-marketplace/common-issues",title:"Common Issues",description:'After installing the adapter, a banner message appears in Rancher that says "AWS Marketplace Adapter: Unable to run the adapter, please check the adapter logs"',source:"@site/docs/explanations/integrations-in-rancher/cloud-marketplace/aws-cloud-marketplace/common-issues.md",sourceDirName:"explanations/integrations-in-rancher/cloud-marketplace/aws-cloud-marketplace",slug:"/explanations/integrations-in-rancher/cloud-marketplace/aws-cloud-marketplace/common-issues",permalink:"/explanations/integrations-in-rancher/cloud-marketplace/aws-cloud-marketplace/common-issues",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/docs/explanations/integrations-in-rancher/cloud-marketplace/aws-cloud-marketplace/common-issues.md",tags:[],version:"current",lastUpdatedAt:1662758511,formattedLastUpdatedAt:"9/9/2022",frontMatter:{title:"Common Issues",weight:4},sidebar:"tutorialSidebar",previous:{title:"Uninstalling The Adapter",permalink:"/explanations/integrations-in-rancher/cloud-marketplace/aws-cloud-marketplace/uninstall-adapter"},next:{title:"Supportconfig bundle",permalink:"/explanations/integrations-in-rancher/cloud-marketplace/supportconfig"}},u={},p=[],m={toc:p};function d(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},'After installing the adapter, a banner message appears in Rancher that says "AWS Marketplace Adapter: Unable to run the adapter, please check the adapter logs"')),(0,o.kt)("p",null,"This error indicates that while the adapter was installed into the cluster, an error has occurred which prevents it from properly checking-in/checking-out licenses."),(0,o.kt)("p",null,"This often occurs because the IAM role was not set up properly. Review the ",(0,o.kt)("a",{parentName:"p",href:"/explanations/integrations-in-rancher/cloud-marketplace/aws-cloud-marketplace/adapter-requirements"},"prerequisites")," and verify that:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"An OIDC provider has been created/associated with the cluster Rancher is running on."),(0,o.kt)("li",{parentName:"ul"},"The IAM role has been configured to trust this OIDC provider."),(0,o.kt)("li",{parentName:"ul"},"The IAM role has at least the permissions outlined in the policy.")),(0,o.kt)("p",null,"If all of the above have been configured correctly, reach out to support for assistance."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},'I see a banner message that states, "AWS Marketplace Adapter: You have exceeded your licensed node count. At least x more license(s) are required in AWS to become compliant"')),(0,o.kt)("p",null,"This message indicates that you do not have enough entitlements for the amount of nodes Rancher is currently managing."),(0,o.kt)("p",null,"Keep in mind the following limitations:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Each entitlement is valid for a certain number of nodes."),(0,o.kt)("li",{parentName:"ul"},"Every node currently managed by Rancher counts toward your usage total (with exception of nodes in the cluster rancher is installed on)."),(0,o.kt)("li",{parentName:"ul"},"Each entitlement can be used by at most one Rancher instance. For example, if you have two running Rancher instances in your account (each installed on a separate EKS cluster), then you will need at least two entitlements.")),(0,o.kt)("p",null,"You may also have recently uninstalled/re-installed the adapter. If the adapter loses track of the licenses that it is currently managing, it can take up to an hour to resolve the actual state of the licenses."))}d.isMDXComponent=!0}}]);