"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[98915],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>h});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=a.createContext({}),p=function(e){var t=a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},d=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,s=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),c=p(r),h=n,g=c["".concat(s,".").concat(h)]||c[h]||u[h]||i;return r?a.createElement(g,l(l({ref:t},d),{},{components:r})):a.createElement(g,l({ref:t},d))}));function h(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,l=new Array(i);l[0]=c;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:n,l[1]=o;for(var p=2;p<i;p++)l[p]=r[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,r)}c.displayName="MDXCreateElement"},32127:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>u,frontMatter:()=>i,metadata:()=>o,toc:()=>p});var a=r(87462),n=(r(67294),r(3905));const i={title:"Air Gapped Helm CLI Install"},l=void 0,o={unversionedId:"pages-for-subheaders/air-gapped-helm-cli-install",id:"version-2.5/pages-for-subheaders/air-gapped-helm-cli-install",title:"Air Gapped Helm CLI Install",description:"This section is about using the Helm CLI to install the Rancher server in an air gapped environment. An air gapped environment could be where Rancher server will be installed offline, behind a firewall, or behind a proxy.",source:"@site/versioned_docs/version-2.5/pages-for-subheaders/air-gapped-helm-cli-install.md",sourceDirName:"pages-for-subheaders",slug:"/pages-for-subheaders/air-gapped-helm-cli-install",permalink:"/v2.5/pages-for-subheaders/air-gapped-helm-cli-install",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/versioned_docs/version-2.5/pages-for-subheaders/air-gapped-helm-cli-install.md",tags:[],version:"2.5",lastUpdatedAt:1667002159,formattedLastUpdatedAt:"Oct 29, 2022",frontMatter:{title:"Air Gapped Helm CLI Install"},sidebar:"tutorialSidebar",previous:{title:"Other Installation Methods",permalink:"/v2.5/pages-for-subheaders/other-installation-methods"},next:{title:"1. Set up Infrastructure and Private Registry",permalink:"/v2.5/getting-started/installation-and-upgrade/other-installation-methods/air-gapped-helm-cli-install/infrastructure-private-registry"}},s={},p=[{value:"Installation Outline",id:"installation-outline",level:2},{value:"Upgrades",id:"upgrades",level:2},{value:"Next: Prepare your Node(s)",id:"next-prepare-your-nodes",level:3}],d={toc:p};function u(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"This section is about using the Helm CLI to install the Rancher server in an air gapped environment. An air gapped environment could be where Rancher server will be installed offline, behind a firewall, or behind a proxy."),(0,n.kt)("p",null,"The installation steps differ depending on whether Rancher is installed on an RKE Kubernetes cluster, a K3s Kubernetes cluster, or a single Docker container."),(0,n.kt)("p",null,"For more information on each installation option, refer to ",(0,n.kt)("a",{parentName:"p",href:"/v2.5/pages-for-subheaders/installation-and-upgrade"},"this page.")),(0,n.kt)("p",null,"Throughout the installation instructions, there will be ",(0,n.kt)("em",{parentName:"p"},"tabs")," for each installation option."),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},(0,n.kt)("strong",{parentName:"p"},"Important:")," If you install Rancher following the Docker installation guide, there is no upgrade path to transition your Docker Installation to a Kubernetes Installation.")),(0,n.kt)("h2",{id:"installation-outline"},"Installation Outline"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("a",{parentName:"li",href:"/v2.5/getting-started/installation-and-upgrade/other-installation-methods/air-gapped-helm-cli-install/infrastructure-private-registry"},"Set up infrastructure and private registry")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("a",{parentName:"li",href:"/v2.5/getting-started/installation-and-upgrade/other-installation-methods/air-gapped-helm-cli-install/publish-images"},"Collect and publish images to your private registry")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("a",{parentName:"li",href:"/v2.5/getting-started/installation-and-upgrade/other-installation-methods/air-gapped-helm-cli-install/install-kubernetes"},"Set up a Kubernetes cluster (Skip this step for Docker installations)")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("a",{parentName:"li",href:"/v2.5/getting-started/installation-and-upgrade/other-installation-methods/air-gapped-helm-cli-install/install-rancher-ha"},"Install Rancher"))),(0,n.kt)("h2",{id:"upgrades"},"Upgrades"),(0,n.kt)("p",null,"To upgrade Rancher with Helm CLI in an air gap environment, follow ",(0,n.kt)("a",{parentName:"p",href:"/v2.5/getting-started/installation-and-upgrade/install-upgrade-on-a-kubernetes-cluster/upgrades"},"this procedure.")),(0,n.kt)("h3",{id:"next-prepare-your-nodes"},(0,n.kt)("a",{parentName:"h3",href:"/v2.5/getting-started/installation-and-upgrade/other-installation-methods/air-gapped-helm-cli-install/infrastructure-private-registry"},"Next: Prepare your Node(s)")))}u.isMDXComponent=!0}}]);