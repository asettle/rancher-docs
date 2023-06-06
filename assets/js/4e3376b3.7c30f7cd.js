"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[67740],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>f});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),l=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},u=function(e){var t=l(e.components);return n.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),p=l(r),f=a,m=p["".concat(s,".").concat(f)]||p[f]||d[f]||i;return r?n.createElement(m,o(o({ref:t},u),{},{components:r})):n.createElement(m,o({ref:t},u))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=p;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var l=2;l<i;l++)o[l]=r[l];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},83104:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>c,toc:()=>l});var n=r(87462),a=(r(67294),r(3905));const i={title:"About Custom CA Root Certificates"},o=void 0,c={unversionedId:"getting-started/installation-and-upgrade/resources/custom-ca-root-certificates",id:"version-2.6/getting-started/installation-and-upgrade/resources/custom-ca-root-certificates",title:"About Custom CA Root Certificates",description:"If you're using Rancher in an internal production environment where you aren't exposing apps publicly, use a certificate from a private certificate authority (CA).",source:"@site/versioned_docs/version-2.6/getting-started/installation-and-upgrade/resources/custom-ca-root-certificates.md",sourceDirName:"getting-started/installation-and-upgrade/resources",slug:"/getting-started/installation-and-upgrade/resources/custom-ca-root-certificates",permalink:"/v2.6/getting-started/installation-and-upgrade/resources/custom-ca-root-certificates",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/versioned_docs/version-2.6/getting-started/installation-and-upgrade/resources/custom-ca-root-certificates.md",tags:[],version:"2.6",lastUpdatedAt:1685049914,formattedLastUpdatedAt:"May 25, 2023",frontMatter:{title:"About Custom CA Root Certificates"},sidebar:"tutorialSidebar",previous:{title:"Adding TLS Secrets",permalink:"/v2.6/getting-started/installation-and-upgrade/resources/add-tls-secrets"},next:{title:"Upgrading Cert-Manager",permalink:"/v2.6/getting-started/installation-and-upgrade/resources/upgrade-cert-manager"}},s={},l=[{value:"Installing with the custom CA Certificate",id:"installing-with-the-custom-ca-certificate",level:2}],u={toc:l};function d(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("head",null,(0,a.kt)("link",{rel:"canonical",href:"https://ranchermanager.docs.rancher.com/getting-started/installation-and-upgrade/resources/custom-ca-root-certificates"})),(0,a.kt)("p",null,"If you're using Rancher in an internal production environment where you aren't exposing apps publicly, use a certificate from a private certificate authority (CA)."),(0,a.kt)("p",null,"Services that Rancher needs to access are sometimes configured with a certificate from a custom/internal CA root, also known as self signed certificate. If the presented certificate from the service cannot be validated by Rancher, the following error displays: ",(0,a.kt)("inlineCode",{parentName:"p"},"x509: certificate signed by unknown authority"),"."),(0,a.kt)("p",null,"To validate the certificate, the CA root certificates need to be added to Rancher. As Rancher is written in Go, we can use the environment variable ",(0,a.kt)("inlineCode",{parentName:"p"},"SSL_CERT_DIR")," to point to the directory where the CA root certificates are located in the container. The CA root certificates directory can be mounted using the Docker volume option (",(0,a.kt)("inlineCode",{parentName:"p"},"-v host-source-directory:container-destination-directory"),") when starting the Rancher container."),(0,a.kt)("p",null,"Examples of services that Rancher can access:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Catalogs"),(0,a.kt)("li",{parentName:"ul"},"Authentication providers"),(0,a.kt)("li",{parentName:"ul"},"Accessing hosting/cloud API when using Node Drivers")),(0,a.kt)("h2",{id:"installing-with-the-custom-ca-certificate"},"Installing with the custom CA Certificate"),(0,a.kt)("p",null,"For details on starting a Rancher container with your private CA certificates mounted, refer to the installation docs:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("a",{parentName:"p",href:"/v2.6/reference-guides/single-node-rancher-in-docker/advanced-options#custom-ca-certificate"},"Docker install Custom CA certificate options"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("a",{parentName:"p",href:"/v2.6/getting-started/installation-and-upgrade/installation-references/helm-chart-options#additional-trusted-cas"},"Kubernetes install options for Additional Trusted CAs")))))}d.isMDXComponent=!0}}]);