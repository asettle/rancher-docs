"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[74291],{3905:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return f}});var n=r(67294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var u=n.createContext({}),c=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(u.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,a=e.originalType,u=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=c(r),f=i,h=d["".concat(u,".").concat(f)]||d[f]||l[f]||a;return r?n.createElement(h,o(o({ref:t},p),{},{components:r})):n.createElement(h,o({ref:t},p))}));function f(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=r.length,o=new Array(a);o[0]=d;var s={};for(var u in t)hasOwnProperty.call(t,u)&&(s[u]=t[u]);s.originalType=e,s.mdxType="string"==typeof e?e:i,o[1]=s;for(var c=2;c<a;c++)o[c]=r[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},28189:function(e,t,r){r.r(t),r.d(t,{assets:function(){return p},contentTitle:function(){return u},default:function(){return f},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return l}});var n=r(87462),i=r(63366),a=(r(67294),r(3905)),o=["components"],s={title:"Setup Guide",weight:2,aliases:["/rancher/v2.0-v2.4/en/cluster-admin/tools/istio/setup","/rancher/v2.0-v2.4/en/istio/legacy/setup","/rancher/v2.0-v2.4/en/istio/v2.3.x-v2.4.x/setup","/rancher/v2.x/en/istio/v2.3.x-v2.4.x/setup/"]},u=void 0,c={unversionedId:"pages-for-subheaders/istio-setup-guide",id:"version-2.0-2.4/pages-for-subheaders/istio-setup-guide",title:"Setup Guide",description:"This section describes how to enable Istio and start using it in your projects.",source:"@site/versioned_docs/version-2.0-2.4/pages-for-subheaders/istio-setup-guide.md",sourceDirName:"pages-for-subheaders",slug:"/pages-for-subheaders/istio-setup-guide",permalink:"/zh/v2.0-v2.4/pages-for-subheaders/istio-setup-guide",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/versioned_docs/version-2.0-2.4/pages-for-subheaders/istio-setup-guide.md",tags:[],version:"2.0-2.4",lastUpdatedAt:1661494099,formattedLastUpdatedAt:"2022/8/26",frontMatter:{title:"Setup Guide",weight:2,aliases:["/rancher/v2.0-v2.4/en/cluster-admin/tools/istio/setup","/rancher/v2.0-v2.4/en/istio/legacy/setup","/rancher/v2.0-v2.4/en/istio/v2.3.x-v2.4.x/setup","/rancher/v2.x/en/istio/v2.3.x-v2.4.x/setup/"]},sidebar:"tutorialSidebar",previous:{title:"Resource Quota Type Reference",permalink:"/zh/v2.0-v2.4/how-to-guides/advanced-user-guides/manage-projects/manage-project-resource-quotas/resource-quota-types"},next:{title:"1. Enable Istio in the Cluster",permalink:"/zh/v2.0-v2.4/how-to-guides/advanced-user-guides/istio-setup-guide/enable-istio-in-cluster"}},p={},l=[],d={toc:l};function f(e){var t=e.components,r=(0,i.Z)(e,o);return(0,a.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"This section describes how to enable Istio and start using it in your projects."),(0,a.kt)("p",null,"This section assumes that you have Rancher installed, and you have a Rancher-provisioned Kubernetes cluster where you would like to set up Istio."),(0,a.kt)("p",null,"If you use Istio for traffic management, you will need to allow external traffic to the cluster. In that case, you will need to follow all of the steps below."),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("strong",{parentName:"p"},"Quick Setup")," If you don't need external traffic to reach Istio, and you just want to set up Istio for monitoring and tracing traffic within the cluster, skip the steps for ",(0,a.kt)("a",{parentName:"p",href:"/zh/v2.0-v2.4/how-to-guides/advanced-user-guides/istio-setup-guide/set-up-istio-gateway"},"setting up the Istio gateway")," and ",(0,a.kt)("a",{parentName:"p",href:"/zh/v2.0-v2.4/how-to-guides/advanced-user-guides/istio-setup-guide/set-up-traffic-management"},"setting up Istio's components for traffic management."))),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("a",{parentName:"li",href:"/zh/v2.0-v2.4/how-to-guides/advanced-user-guides/istio-setup-guide/enable-istio-in-cluster"},"Enable Istio in the cluster.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("a",{parentName:"li",href:"/zh/v2.0-v2.4/how-to-guides/advanced-user-guides/istio-setup-guide/enable-istio-in-namespace"},"Enable Istio in all the namespaces where you want to use it.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("a",{parentName:"li",href:"/zh/v2.0-v2.4/how-to-guides/advanced-user-guides/istio-setup-guide/node-selectors"},"Select the nodes where the main Istio components will be deployed.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("a",{parentName:"li",href:"/zh/v2.0-v2.4/how-to-guides/advanced-user-guides/istio-setup-guide/use-istio-sidecar"},"Add deployments and services that have the Istio sidecar injected.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("a",{parentName:"li",href:"/zh/v2.0-v2.4/how-to-guides/advanced-user-guides/istio-setup-guide/set-up-istio-gateway"},"Set up the Istio gateway. ")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("a",{parentName:"li",href:"/zh/v2.0-v2.4/how-to-guides/advanced-user-guides/istio-setup-guide/set-up-traffic-management"},"Set up Istio's components for traffic management.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("a",{parentName:"li",href:"/zh/v2.0-v2.4/pages-for-subheaders/istio-setup-guide#view-traffic"},"Generate traffic and see Istio in action."))))}f.isMDXComponent=!0}}]);