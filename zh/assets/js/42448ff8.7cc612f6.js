"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[5324],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>f});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),h=s(n),f=a,m=h["".concat(c,".").concat(f)]||h[f]||p[f]||i;return n?r.createElement(m,o(o({ref:t},d),{},{components:n})):r.createElement(m,o({ref:t},d))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=h;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var s=2;s<i;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}h.displayName="MDXCreateElement"},27571:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>p,frontMatter:()=>i,metadata:()=>l,toc:()=>s});var r=n(87462),a=(n(67294),n(3905));const i={title:"Certificate Troubleshooting"},o=void 0,l={unversionedId:"getting-started/installation-and-upgrade/other-installation-methods/rancher-on-a-single-node-with-docker/certificate-troubleshooting",id:"version-2.5/getting-started/installation-and-upgrade/other-installation-methods/rancher-on-a-single-node-with-docker/certificate-troubleshooting",title:"Certificate Troubleshooting",description:"How Do I Know if My Certificates are in PEM Format?",source:"@site/versioned_docs/version-2.5/getting-started/installation-and-upgrade/other-installation-methods/rancher-on-a-single-node-with-docker/certificate-troubleshooting.md",sourceDirName:"getting-started/installation-and-upgrade/other-installation-methods/rancher-on-a-single-node-with-docker",slug:"/getting-started/installation-and-upgrade/other-installation-methods/rancher-on-a-single-node-with-docker/certificate-troubleshooting",permalink:"/zh/v2.5/getting-started/installation-and-upgrade/other-installation-methods/rancher-on-a-single-node-with-docker/certificate-troubleshooting",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/versioned_docs/version-2.5/getting-started/installation-and-upgrade/other-installation-methods/rancher-on-a-single-node-with-docker/certificate-troubleshooting.md",tags:[],version:"2.5",lastUpdatedAt:1685049955,formattedLastUpdatedAt:"2023\u5e745\u670825\u65e5",frontMatter:{title:"Certificate Troubleshooting"},sidebar:"tutorialSidebar",previous:{title:"Rolling Back Rancher Installed with Docker",permalink:"/zh/v2.5/getting-started/installation-and-upgrade/other-installation-methods/rancher-on-a-single-node-with-docker/roll-back-docker-installed-rancher"},next:{title:"Installing Rancher behind an HTTP Proxy",permalink:"/zh/v2.5/pages-for-subheaders/rancher-behind-an-http-proxy"}},c={},s=[{value:"How Do I Know if My Certificates are in PEM Format?",id:"how-do-i-know-if-my-certificates-are-in-pem-format",level:3},{value:"Converting a Certificate Key From PKCS8 to PKCS1",id:"converting-a-certificate-key-from-pkcs8-to-pkcs1",level:3},{value:"What is the Order of Certificates if I Want to Add My Intermediate(s)?",id:"what-is-the-order-of-certificates-if-i-want-to-add-my-intermediates",level:3},{value:"How Do I Validate My Certificate Chain?",id:"how-do-i-validate-my-certificate-chain",level:3}],d={toc:s};function p(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("head",null,(0,a.kt)("link",{rel:"canonical",href:"https://ranchermanager.docs.rancher.com/getting-started/installation-and-upgrade/other-installation-methods/rancher-on-a-single-node-with-docker/certificate-troubleshooting"})),(0,a.kt)("h3",{id:"how-do-i-know-if-my-certificates-are-in-pem-format"},"How Do I Know if My Certificates are in PEM Format?"),(0,a.kt)("p",null,"You can recognize the PEM format by the following traits:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"The file begins with the following header:",(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre"},"-----BEGIN CERTIFICATE-----\n"))),(0,a.kt)("li",{parentName:"ul"},"The header is followed by a long string of characters."),(0,a.kt)("li",{parentName:"ul"},"The file ends with a footer:\n-----END CERTIFICATE-----")),(0,a.kt)("p",null,"PEM Certificate Example:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"----BEGIN CERTIFICATE-----\nMIIGVDCCBDygAwIBAgIJAMiIrEm29kRLMA0GCSqGSIb3DQEBCwUAMHkxCzAJBgNV\n... more lines\nVWQqljhfacYPgp8KJUJENQ9h5hZ2nSCrI+W00Jcw4QcEdCI8HL5wmg==\n-----END CERTIFICATE-----\n")),(0,a.kt)("p",null,"PEM Certificate Key Example:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"-----BEGIN RSA PRIVATE KEY-----\nMIIGVDCCBDygAwIBAgIJAMiIrEm29kRLMA0GCSqGSIb3DQEBCwUAMHkxCzAJBgNV\n... more lines\nVWQqljhfacYPgp8KJUJENQ9h5hZ2nSCrI+W00Jcw4QcEdCI8HL5wmg==\n-----END RSA PRIVATE KEY-----\n")),(0,a.kt)("p",null,"If your key looks like the example below, see ",(0,a.kt)("a",{parentName:"p",href:"#converting-a-certificate-key-from-pkcs8-to-pkcs1"},"Converting a Certificate Key From PKCS8 to PKCS1.")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"-----BEGIN PRIVATE KEY-----\nMIIGVDCCBDygAwIBAgIJAMiIrEm29kRLMA0GCSqGSIb3DQEBCwUAMHkxCzAJBgNV\n... more lines\nVWQqljhfacYPgp8KJUJENQ9h5hZ2nSCrI+W00Jcw4QcEdCI8HL5wmg==\n-----END PRIVATE KEY-----\n")),(0,a.kt)("h3",{id:"converting-a-certificate-key-from-pkcs8-to-pkcs1"},"Converting a Certificate Key From PKCS8 to PKCS1"),(0,a.kt)("p",null,"If you are using a PKCS8 certificate key file, Rancher will log the following line:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"ListenConfigController cli-config [listener] failed with : failed to read private key: asn1: structure error: tags don't match (2 vs {class:0 tag:16 length:13 isCompound:true})\n")),(0,a.kt)("p",null,"To make this work, you will need to convert the key from PKCS8 to PKCS1 using the command below:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"openssl rsa -in key.pem -out convertedkey.pem\n")),(0,a.kt)("p",null,"You can now use ",(0,a.kt)("inlineCode",{parentName:"p"},"convertedkey.pem")," as certificate key file for Rancher."),(0,a.kt)("h3",{id:"what-is-the-order-of-certificates-if-i-want-to-add-my-intermediates"},"What is the Order of Certificates if I Want to Add My Intermediate(s)?"),(0,a.kt)("p",null,"The order of adding certificates is as follows:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"-----BEGIN CERTIFICATE-----\n%YOUR_CERTIFICATE%\n-----END CERTIFICATE-----\n-----BEGIN CERTIFICATE-----\n%YOUR_INTERMEDIATE_CERTIFICATE%\n-----END CERTIFICATE-----\n")),(0,a.kt)("h3",{id:"how-do-i-validate-my-certificate-chain"},"How Do I Validate My Certificate Chain?"),(0,a.kt)("p",null,"You can validate the certificate chain by using the ",(0,a.kt)("inlineCode",{parentName:"p"},"openssl")," binary. If the output of the command (see the command example below) ends with ",(0,a.kt)("inlineCode",{parentName:"p"},"Verify return code: 0 (ok)"),", your certificate chain is valid. The ",(0,a.kt)("inlineCode",{parentName:"p"},"ca.pem")," file must be the same as you added to the ",(0,a.kt)("inlineCode",{parentName:"p"},"rancher/rancher")," container."),(0,a.kt)("p",null,"When using a certificate signed by a recognized Certificate Authority, you can omit the ",(0,a.kt)("inlineCode",{parentName:"p"},"-CAfile")," parameter."),(0,a.kt)("p",null,"Command:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"openssl s_client -CAfile ca.pem -connect rancher.yourdomain.com:443\n...\n    Verify return code: 0 (ok)\n")))}p.isMDXComponent=!0}}]);