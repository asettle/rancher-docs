"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[78232],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>g});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),d=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},u=function(e){var t=d(e.components);return n.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),m=d(a),g=r,f=m["".concat(s,".").concat(g)]||m[g]||p[g]||l;return a?n.createElement(f,i(i({ref:t},u),{},{components:a})):n.createElement(f,i({ref:t},u))}));function g(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,i=new Array(l);i[0]=m;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var d=2;d<l;d++)i[d]=a[d];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},86942:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>p,frontMatter:()=>l,metadata:()=>o,toc:()=>d});var n=a(87462),r=(a(67294),a(3905));const l={title:"Feature Flags"},i=void 0,o={unversionedId:"getting-started/installation-and-upgrade/installation-references/feature-flags",id:"version-2.6/getting-started/installation-and-upgrade/installation-references/feature-flags",title:"Feature Flags",description:"With feature flags, you can try out optional or experimental features, and enable legacy features that are being phased out.",source:"@site/versioned_docs/version-2.6/getting-started/installation-and-upgrade/installation-references/feature-flags.md",sourceDirName:"getting-started/installation-and-upgrade/installation-references",slug:"/getting-started/installation-and-upgrade/installation-references/feature-flags",permalink:"/v2.6/getting-started/installation-and-upgrade/installation-references/feature-flags",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/versioned_docs/version-2.6/getting-started/installation-and-upgrade/installation-references/feature-flags.md",tags:[],version:"2.6",lastUpdatedAt:1685125139,formattedLastUpdatedAt:"May 26, 2023",frontMatter:{title:"Feature Flags"},sidebar:"tutorialSidebar",previous:{title:"TLS Settings",permalink:"/v2.6/getting-started/installation-and-upgrade/installation-references/tls-settings"},next:{title:"Install/Upgrade Rancher on a Kubernetes Cluster",permalink:"/v2.6/pages-for-subheaders/install-upgrade-on-a-kubernetes-cluster"}},s={},d=[],u={toc:d};function p(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("head",null,(0,r.kt)("link",{rel:"canonical",href:"https://ranchermanager.docs.rancher.com/getting-started/installation-and-upgrade/installation-references/feature-flags"})),(0,r.kt)("p",null,"With feature flags, you can try out optional or experimental features, and enable legacy features that are being phased out."),(0,r.kt)("p",null,"To learn more about feature values and how to enable them, see ",(0,r.kt)("a",{parentName:"p",href:"/v2.6/pages-for-subheaders/enable-experimental-features"},"Enabling Experimental Features"),"."),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"Some feature flags require a restart of the Rancher container. Features that require a restart are marked in the Rancher UI.")),(0,r.kt)("p",null,"The following is a list of feature flags available in Rancher. If you've upgraded from a previous Rancher version, you may see additional flags in the Rancher UI, such as ",(0,r.kt)("inlineCode",{parentName:"p"},"proxy")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"dashboard")," (both ",(0,r.kt)("a",{parentName:"p",href:"/v2.5/reference-guides/installation-references/feature-flags"},"discontinued"),"):"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"continuous-delivery"),": Allows Fleet GitOps to be disabled separately from Fleet. See ",(0,r.kt)("a",{parentName:"li",href:"/v2.6/how-to-guides/advanced-user-guides/enable-experimental-features/continuous-delivery"},"Continuous Delivery.")," for more information."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"fleet"),": The Rancher provisioning framework in v2.6 and later requires Fleet. The flag will be automatically enabled when you upgrade, even if you disabled this flag in an earlier version of Rancher. See ",(0,r.kt)("a",{parentName:"li",href:"/v2.6/how-to-guides/new-user-guides/deploy-apps-across-clusters/fleet"},"Fleet - GitOps at Scale")," for more information."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"harvester"),": This feature flag is available starting in v2.6.1. Manages access to the Virtualization Management page, where users can navigate directly to Harvester clusters and access the Harvester UI. See ",(0,r.kt)("a",{parentName:"li",href:"/v2.6/integrations-in-rancher/harvester"},"Harvester Integration")," for more information."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"istio-virtual-service-ui"),": Enables a ",(0,r.kt)("a",{parentName:"li",href:"/v2.6/how-to-guides/advanced-user-guides/enable-experimental-features/istio-traffic-management-features"},"visual interface")," to create, read, update, and delete Istio virtual services and destination rules, which are Istio traffic management features."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"legacy"),": Enables a set of features from 2.5.x and earlier, that are slowly being phased out in favor of newer implementations. These are a mix of deprecated features as well as features that will eventually be available to newer versions. This flag is disabled by default on new Rancher installations. If you're upgrading from a previous version of Rancher, this flag is enabled."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"multi-cluster-management"),": Allows multi-cluster provisioning and management of Kubernetes clusters. This flag can only be set at install time. It can't be enabled or disabled later."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"rke2"),": Enables provisioning RKE2 clusters. This flag is enabled by default."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"token-hashing"),": Enables token hashing. Once enabled, existing tokens will be hashed and all new tokens will be hashed automatically with the SHA256 algorithm. Once a token is hashed it can't be undone. This flag can't be disabled after its enabled. See ",(0,r.kt)("a",{parentName:"li",href:"/v2.6/reference-guides/about-the-api/api-tokens#token-hashing"},"API Tokens")," for more information."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"unsupported-storage-drivers"),": This feature ",(0,r.kt)("a",{parentName:"li",href:"/v2.6/how-to-guides/advanced-user-guides/enable-experimental-features/unsupported-storage-drivers"},"allows unsupported storage drivers."),". In other words, it enables types for storage providers and provisioners that are not enabled by default.")),(0,r.kt)("p",null,'The following table shows the availability and default values for some feature flags in Rancher. Features marked "GA" are generally available:'),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Feature Flag Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Default Value"),(0,r.kt)("th",{parentName:"tr",align:null},"Status"),(0,r.kt)("th",{parentName:"tr",align:null},"Available As Of"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"continuous-delivery")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"true")),(0,r.kt)("td",{parentName:"tr",align:null},"GA"),(0,r.kt)("td",{parentName:"tr",align:null},"v2.6.0")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"fleet")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"true")),(0,r.kt)("td",{parentName:"tr",align:null},"Can no longer be disabled"),(0,r.kt)("td",{parentName:"tr",align:null},"v2.6.0")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"fleet")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"true")),(0,r.kt)("td",{parentName:"tr",align:null},"GA"),(0,r.kt)("td",{parentName:"tr",align:null},"v2.5.0")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"harvester")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"true")),(0,r.kt)("td",{parentName:"tr",align:null},"Experimental"),(0,r.kt)("td",{parentName:"tr",align:null},"v2.6.1")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"legacy")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"false")," for new installs, ",(0,r.kt)("inlineCode",{parentName:"td"},"true")," for upgrades"),(0,r.kt)("td",{parentName:"tr",align:null},"GA"),(0,r.kt)("td",{parentName:"tr",align:null},"v2.6.0")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"multi-cluster-management")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"false")),(0,r.kt)("td",{parentName:"tr",align:null},"GA"),(0,r.kt)("td",{parentName:"tr",align:null},"v2.5.0")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"rke2")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"true")),(0,r.kt)("td",{parentName:"tr",align:null},"Experimental"),(0,r.kt)("td",{parentName:"tr",align:null},"v2.6.0")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"token-hashing")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"false")," for new installs, ",(0,r.kt)("inlineCode",{parentName:"td"},"true")," for upgrades"),(0,r.kt)("td",{parentName:"tr",align:null},"GA"),(0,r.kt)("td",{parentName:"tr",align:null},"v2.6.0")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"unsupported-storage-drivers")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"false")),(0,r.kt)("td",{parentName:"tr",align:null},"Experimental"),(0,r.kt)("td",{parentName:"tr",align:null},"v2.3.0")))))}p.isMDXComponent=!0}}]);