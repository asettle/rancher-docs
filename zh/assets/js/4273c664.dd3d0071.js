"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[89925],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>m});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function p(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var o=r.createContext({}),s=function(e){var t=r.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):p(p({},t),e)),a},d=function(e){var t=s(e.components);return r.createElement(o.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},i=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,o=e.parentName,d=c(e,["components","mdxType","originalType","parentName"]),i=s(a),m=n,k=i["".concat(o,".").concat(m)]||i[m]||u[m]||l;return a?r.createElement(k,p(p({ref:t},d),{},{components:a})):r.createElement(k,p({ref:t},d))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,p=new Array(l);p[0]=i;var c={};for(var o in t)hasOwnProperty.call(t,o)&&(c[o]=t[o]);c.originalType=e,c.mdxType="string"==typeof e?e:n,p[1]=c;for(var s=2;s<l;s++)p[s]=a[s];return r.createElement.apply(null,p)}return r.createElement.apply(null,a)}i.displayName="MDXCreateElement"},31731:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>o,contentTitle:()=>p,default:()=>k,frontMatter:()=>l,metadata:()=>c,toc:()=>s});var r=a(87462),n=(a(67294),a(3905));const l={title:"\u5b89\u88c5 Adapter"},p=void 0,c={unversionedId:"integrations-in-rancher/cloud-marketplace/aws-cloud-marketplace/install-adapter",id:"integrations-in-rancher/cloud-marketplace/aws-cloud-marketplace/install-adapter",title:"\u5b89\u88c5 Adapter",description:"\u91cd\u8981\u63d0\u793a\uff1a\u5982\u679c\u4f60\u5c1d\u8bd5\u91cd\u65b0\u5b89\u88c5 Adapter\uff0c\u4f60\u53ef\u80fd\u4f1a\u5728\u957f\u8fbe\u4e00\u5c0f\u65f6\u7684\u65f6\u95f4\u5185\u6536\u5230\u4e0d\u5408\u89c4\u7684\u9519\u8bef\u6d88\u606f\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/integrations-in-rancher/cloud-marketplace/aws-cloud-marketplace/install-adapter.md",sourceDirName:"integrations-in-rancher/cloud-marketplace/aws-cloud-marketplace",slug:"/integrations-in-rancher/cloud-marketplace/aws-cloud-marketplace/install-adapter",permalink:"/zh/integrations-in-rancher/cloud-marketplace/aws-cloud-marketplace/install-adapter",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/docs/integrations-in-rancher/cloud-marketplace/aws-cloud-marketplace/install-adapter.md",tags:[],version:"current",lastUpdatedAt:1670452794,formattedLastUpdatedAt:"2022\u5e7412\u67087\u65e5",frontMatter:{title:"\u5b89\u88c5 Adapter"},sidebar:"tutorialSidebar",previous:{title:"\u5148\u51b3\u6761\u4ef6",permalink:"/zh/integrations-in-rancher/cloud-marketplace/aws-cloud-marketplace/adapter-requirements"},next:{title:"\u5378\u8f7d Adapter",permalink:"/zh/integrations-in-rancher/cloud-marketplace/aws-cloud-marketplace/uninstall-adapter"}},o={},s=[{value:"Rancher \u4e0e Adapter \u7684\u517c\u5bb9\u6027\u77e9\u9635",id:"rancher-\u4e0e-adapter-\u7684\u517c\u5bb9\u6027\u77e9\u9635",level:3},{value:"1. \u83b7\u53d6\u5bf9 Local \u96c6\u7fa4\u7684\u8bbf\u95ee\u6743\u9650",id:"1-\u83b7\u53d6\u5bf9-local-\u96c6\u7fa4\u7684\u8bbf\u95ee\u6743\u9650",level:3},{value:"2. \u521b\u5efa Adapter \u547d\u540d\u7a7a\u95f4",id:"2-\u521b\u5efa-adapter-\u547d\u540d\u7a7a\u95f4",level:3},{value:"3. \u521b\u5efa\u8bc1\u4e66\u5bc6\u6587",id:"3-\u521b\u5efa\u8bc1\u4e66\u5bc6\u6587",level:3},{value:"4. \u5b89\u88c5 Chart",id:"4-\u5b89\u88c5-chart",level:3},{value:"5. \u7ba1\u7406\u8bc1\u4e66\u66f4\u65b0",id:"5-\u7ba1\u7406\u8bc1\u4e66\u66f4\u65b0",level:3}],d=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,n.kt)("div",t)},u=d("Tabs"),i=d("TabItem"),m={toc:s};function k(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,r.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},(0,n.kt)("strong",{parentName:"p"},"\u91cd\u8981\u63d0\u793a"),"\uff1a\u5982\u679c\u4f60\u5c1d\u8bd5\u91cd\u65b0\u5b89\u88c5 Adapter\uff0c\u4f60\u53ef\u80fd\u4f1a\u5728\u957f\u8fbe\u4e00\u5c0f\u65f6\u7684\u65f6\u95f4\u5185\u6536\u5230\u4e0d\u5408\u89c4\u7684\u9519\u8bef\u6d88\u606f\u3002")),(0,n.kt)("h3",{id:"rancher-\u4e0e-adapter-\u7684\u517c\u5bb9\u6027\u77e9\u9635"},"Rancher \u4e0e Adapter \u7684\u517c\u5bb9\u6027\u77e9\u9635"),(0,n.kt)("admonition",{title:"\u91cd\u8981\u63d0\u793a\uff1a",type:"note"},(0,n.kt)("p",{parentName:"admonition"},"\u4e0d\u540c\u7248\u672c\u7684 CSP Adapter \u4f9d\u8d56\u4e8e\u7279\u5b9a Rancher \u7248\u672c\u7684\u529f\u80fd\u3002\n\u4e3a\u4e86\u6210\u529f\u90e8\u7f72\u548c\u8fd0\u884c Adapter\uff0c\u4f60\u9700\u8981\u786e\u4fdd Adapter \u7248\u672c\u4e0e\u5fc5\u8981\u7684 Rancher \u7248\u672c\u5bf9\u5e94\u3002")),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Rancher \u7248\u672c"),(0,n.kt)("th",{parentName:"tr",align:"center"},"Adapter \u7248\u672c"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"v2.7.0"),(0,n.kt)("td",{parentName:"tr",align:"center"},"v2.0.0")))),(0,n.kt)("h3",{id:"1-\u83b7\u53d6\u5bf9-local-\u96c6\u7fa4\u7684\u8bbf\u95ee\u6743\u9650"},"1. \u83b7\u53d6\u5bf9 Local \u96c6\u7fa4\u7684\u8bbf\u95ee\u6743\u9650"),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},(0,n.kt)("strong",{parentName:"p"},"\u6ce8\u610f"),"\uff1a\u53ea\u6709\u7ba1\u7406\u5458\u7528\u6237\u624d\u80fd\u8bbf\u95ee Local \u96c6\u7fa4\u3002\u56e0\u4e3a CSP Adapter \u5fc5\u987b\u5b89\u88c5\u5728 Local \u96c6\u7fa4\u4e2d\uff0c\u6240\u4ee5\u6b64\u5b89\u88c5\u5fc5\u987b\u7531\u7ba1\u7406\u5458\u7528\u6237\u6267\u884c\u3002")),(0,n.kt)("p",null,"\u9996\u5148\uff0c\u5355\u51fb Local \u96c6\u7fa4\u5e76\u4e0b\u8f7d kubeconfig \u4ee4\u724c\u3002\u7136\u540e\uff0c\u4f7f\u7528\u4e0b\u65b9\u7684\u547d\u4ee4\u914d\u7f6e CLI \u4ee5\u4f7f\u7528\u6b64\u65b0\u4ee4\u724c\uff0c\u4f60\u9700\u8981\u5c06 ",(0,n.kt)("inlineCode",{parentName:"p"},"$TOKEN_PATH")," \u66ff\u6362\u4e3a\u6587\u4ef6\u7cfb\u7edf\u4e0a\u4ee4\u724c\u7684\u4e0b\u8f7d\u8def\u5f84\uff1a"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"export KUBECONFIG=$TOKEN_PATH\n")),(0,n.kt)("h3",{id:"2-\u521b\u5efa-adapter-\u547d\u540d\u7a7a\u95f4"},"2. \u521b\u5efa Adapter \u547d\u540d\u7a7a\u95f4"),(0,n.kt)("p",null,"\u521b\u5efa\u8981\u5b89\u88c5 Adapter \u7684\u547d\u540d\u7a7a\u95f4\uff1a"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl create ns cattle-csp-adapter-system\n")),(0,n.kt)("h3",{id:"3-\u521b\u5efa\u8bc1\u4e66\u5bc6\u6587"},"3. \u521b\u5efa\u8bc1\u4e66\u5bc6\u6587"),(0,n.kt)("p",null,"Adapter \u9700\u8981\u8bbf\u95ee Rancher \u7528\u6765\u4e0e Rancher Server \u901a\u4fe1\u7684\u6839 CA\u3002\u6709\u5173 Rancher \u652f\u6301\u7684\u8bc1\u4e66\u9009\u9879\u7684\u66f4\u591a\u4fe1\u606f\uff0c\u8bf7\u53c2\u9605 ",(0,n.kt)("a",{parentName:"p",href:"/zh/getting-started/installation-and-upgrade/installation-references/helm-chart-options"},"Chart \u9009\u9879\u9875\u9762"),"\u3002"),(0,n.kt)("p",null,"\u5982\u679c\u4f60\u7684 Rancher \u4f7f\u7528\u7531\u516c\u8ba4\u7684\u8bc1\u4e66\u9881\u53d1\u673a\u6784\uff08\u4f8b\u5982 Let's Encrypt\uff09\u7b7e\u53d1\u7684\u8bc1\u4e66\uff0c\u4f60\u53ef\u4ee5\u8df3\u5230",(0,n.kt)("a",{parentName:"p",href:"#4-%E5%AE%89%E8%A3%85-chart"},"\u6b65\u9aa4 4"),"\u3002"),(0,n.kt)("p",null,"\u4f46\u662f\uff0c\u5982\u679c\u4f60\u7684 Rancher \u4f7f\u7528\u4e86\u81ea\u5b9a\u4e49\u8bc1\u4e66\uff08\u4f8b\u5982 Rancher \u751f\u6210\u7684\u8bc1\u4e66\u6216\u7531\u79c1\u6709\u8bc1\u4e66\u9881\u53d1\u673a\u6784\u7b7e\u53d1\u7684\u8bc1\u4e66\uff09\uff0c\u4f60\u9700\u8981\u4e3a\u8be5 CA \u63d0\u4f9b PEM \u7f16\u7801\u683c\u5f0f\u7684\u8bc1\u4e66\u4ee5\u4fbf Adapter \u53ef\u4ee5\u4e0e Rancher \u901a\u4fe1\u3002"),(0,n.kt)("p",null,"\u9996\u5148\uff0c\u68c0\u7d22 Rancher \u6b63\u5728\u4f7f\u7528\u7684\u8bc1\u4e66\u5e76\u5c06\u5176\u653e\u5165\u540d\u4e3a ",(0,n.kt)("inlineCode",{parentName:"p"},"ca-additional.pem")," \u7684\u6587\u4ef6\u4e2d\u3002\u5982\u679c\u4f60\u4f7f\u7528 Rancher \u751f\u6210\u7684\u8bc1\u4e66\uff0c\u4f60\u53ef\u4ee5\u4f7f\u7528\u4ee5\u4e0b\u547d\u4ee4\u5b8c\u6210\u6b64\u64cd\u4f5c\uff1a"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},'kubectl get secret tls-rancher -n cattle-system -o jsonpath="{.data.tls\\.crt}" | base64 -d  >> ca-additional.pem\n')),(0,n.kt)("p",null,"\u7136\u540e\uff0c\u521b\u5efa\u4e00\u4e2a\u4f7f\u7528\u6b64\u8bc1\u4e66\u7684\u5bc6\u6587\uff1a"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl -n cattle-csp-adapter-system create secret generic tls-ca-additional --from-file=ca-additional.pem\n")),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},(0,n.kt)("strong",{parentName:"p"},"\u91cd\u8981\u63d0\u793a"),"\uff1a\u4e0d\u8981\u66f4\u6539\u6587\u4ef6\u540d\u6216\u521b\u5efa\u7684\u5bc6\u6587\u7684\u540d\u79f0\uff0c\u5426\u5219\u53ef\u80fd\u4f1a\u5bfc\u81f4 Adapter \u8fd0\u884c\u51fa\u9519\u3002")),(0,n.kt)("h3",{id:"4-\u5b89\u88c5-chart"},"4. \u5b89\u88c5 Chart"),(0,n.kt)("p",null,"\u9996\u5148\uff0c\u4f7f\u7528\u4ee5\u4e0b\u547d\u4ee4\u6dfb\u52a0 ",(0,n.kt)("inlineCode",{parentName:"p"},"rancher/charts")," \u4ed3\u5e93\uff1a"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"helm repo add rancher-charts https://charts.rancher.io\n")),(0,n.kt)("p",null,"\u63a5\u4e0b\u6765\uff0c\u5b89\u88c5 CSP Adapter\u3002\u4f60\u5fc5\u987b\u6307\u5b9a\u591a\u4e2a\u503c\uff0c\u5176\u4e2d\u5305\u62ec\u8d26\u53f7\u53f7\u7801\u4ee5\u53ca\u5728\u5148\u51b3\u6761\u4ef6\u4e2d\u521b\u5efa\u7684\u89d2\u8272\u7684\u540d\u79f0\u3002"),(0,n.kt)("p",null,"\u786e\u4fdd\u4f60\u7684 CSP Adapter \u7248\u672c\u4e0e\u4f60\u6b63\u5728\u8fd0\u884c\u7684 Rancher \u7248\u672c\u5339\u914d\uff0c\u5982",(0,n.kt)("a",{parentName:"p",href:"#rancher-%E4%B8%8E-adapter-%E7%9A%84%E5%85%BC%E5%AE%B9%E6%80%A7%E7%9F%A9%E9%98%B5"},"\u4e0a\u6587"),"\u6240\u8ff0\u3002"),(0,n.kt)("p",null,"\u5728\u4e0b\u65b9\u7684\u64cd\u4f5c\u4e2d\uff0c\u5c06 ",(0,n.kt)("inlineCode",{parentName:"p"},"$MY_ACC_NUM")," \u66ff\u6362\u4e3a\u4f60\u7684 AWS \u8d26\u53f7\uff0c\u5c06 ",(0,n.kt)("inlineCode",{parentName:"p"},"$MY_ROLE_NAME")," \u66ff\u6362\u4e3a\u5148\u51b3\u6761\u4ef6\u4e2d\u521b\u5efa\u7684\u89d2\u8272\u7684\u540d\u79f0\u3002\u6b64\u5916\uff0c\u5c06 ",(0,n.kt)("inlineCode",{parentName:"p"},"$CSP_ADAPTER_VERSION")," \u66ff\u6362\u4e3a\u4e0e",(0,n.kt)("a",{parentName:"p",href:"#rancher-%E4%B8%8E-adapter-%E7%9A%84%E5%85%BC%E5%AE%B9%E6%80%A7%E7%9F%A9%E9%98%B5"},"\u7248\u672c\u77e9\u9635"),"\u4e2d\u7684 Rancher \u7248\u672c\u5339\u914d\u7684\u7248\u672c\u3002"),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},(0,n.kt)("strong",{parentName:"p"},"\u6ce8\u610f"),'\uff1a\u5982\u679c\u4f60\u4f7f\u7528 shell \u53d8\u91cf\uff0c\u8bf7\u4e0d\u8981\u4f7f\u7528\u5f15\u53f7\u3002\u4f8b\u5982\uff0cMY_ACC_NUM=123456789012 \u53ef\u7528\uff0c\u4f46 MY_ACC_NUM="123456789012" \u5c06\u5931\u8d25\u3002')),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},(0,n.kt)("strong",{parentName:"p"},"\u6ce8\u610f"),"\uff1a\u4f7f\u7528\u6b27\u76df\u548c\u82f1\u56fd\u7684 AWS Marketplace \u5217\u8868\u7684\u8d26\u53f7\u9700\u8981\u989d\u5916\u6307\u5b9a ",(0,n.kt)("inlineCode",{parentName:"p"},"--set image.repository=rancher/rancher-csp-adapter-eu")," \u9009\u9879\u3002\u8981\u67e5\u770b\u4f60\u7684\u8d26\u53f7\u5728\u5b89\u88c5 Adapter \u65f6\u662f\u5426\u9700\u8981\u6b64\u9009\u9879\uff0c\u8bf7\u53c2\u9605 Marketplace \u5217\u8868\u7684\u4f7f\u7528\u8bf4\u660e\u3002")),(0,n.kt)(u,{mdxType:"Tabs"},(0,n.kt)(i,{value:"Let's Encrypt/\u53ef\u4fe1\u7684 CA",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"helm install rancher-csp-adapter rancher-charts/rancher-csp-adapter --namespace cattle-csp-adapter-system --set aws.enabled=true --set aws.roleName=$MY_ROLE_NAME --set-string aws.accountNumber=$MY_ACC_NUM --version $CSP_ADAPTER_VERSION\n")),(0,n.kt)("p",null,"\u4f60\u4e5f\u53ef\u4ee5\u4f7f\u7528 ",(0,n.kt)("inlineCode",{parentName:"p"},"values.yaml")," \u5e76\u6307\u5b9a\u4ee5\u4e0b\u9009\u9879\uff1a"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-yaml"},'aws:\n  enabled: true\n  accountNumber: "$MY_ACC_NUM"\n  roleName: $MY_ROLE_NAME\n')),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},(0,n.kt)("strong",{parentName:"p"},"\u6ce8\u610f"),"\uff1a\u8d26\u53f7\u9700\u8981\u50cf\u4e0a\u9762\u90a3\u6837\u4ee5\u5b57\u7b26\u4e32\u683c\u5f0f\u6307\u5b9a\uff0c\u5426\u5219\u5b89\u88c5\u4f1a\u5931\u8d25\u3002")),(0,n.kt)("p",null,"\u7136\u540e\uff0c\u4f7f\u7528\u4ee5\u4e0b\u547d\u4ee4\u5b89\u88c5 Adapter\uff1a"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"helm install rancher-csp-adapter rancher-charts/rancher-csp-adapter -f values.yaml --version $CSP_ADAPTER_VERSION\n"))),(0,n.kt)(i,{value:"\u79c1\u6709 CA/Rancher \u751f\u6210\u7684\u8bc1\u4e66",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"helm install rancher-csp-adapter rancher-charts/rancher-csp-adapter --namespace cattle-csp-adapter-system --set aws.enabled=true --set aws.roleName=$MY_ROLE_NAME --set-string aws.accountNumber=$MY_ACC_NUM --set additionalTrustedCAs=true --version $CSP_ADAPTER_VERSION\n")),(0,n.kt)("p",null,"\u4f60\u4e5f\u53ef\u4ee5\u4f7f\u7528 ",(0,n.kt)("inlineCode",{parentName:"p"},"values.yaml")," \u5e76\u6307\u5b9a\u4ee5\u4e0b\u9009\u9879\uff1a"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-yaml"},'aws:\n  enabled: true\n  accountNumber: "$MY_ACC_NUM"\n  roleName: $MY_ROLE_NAME\nadditionalTrustedCAs: true\n')),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},(0,n.kt)("strong",{parentName:"p"},"\u6ce8\u610f"),"\uff1a\u8d26\u53f7\u9700\u8981\u50cf\u4e0a\u9762\u90a3\u6837\u4ee5\u5b57\u7b26\u4e32\u683c\u5f0f\u6307\u5b9a\uff0c\u5426\u5219\u5b89\u88c5\u4f1a\u5931\u8d25\u3002")),(0,n.kt)("p",null,"\u7136\u540e\uff0c\u4f7f\u7528\u4ee5\u4e0b\u547d\u4ee4\u5b89\u88c5 Adapter\uff1a"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"helm install rancher-csp-adapter rancher-charts/rancher-csp-adapter -f values.yaml --version $CSP_ADAPTER_VERSION\n")))),(0,n.kt)("h3",{id:"5-\u7ba1\u7406\u8bc1\u4e66\u66f4\u65b0"},"5. \u7ba1\u7406\u8bc1\u4e66\u66f4\u65b0"),(0,n.kt)("p",null,"\u5982\u679c\u4f60\u5728",(0,n.kt)("a",{parentName:"p",href:"#3-%E5%88%9B%E5%BB%BA%E8%AF%81%E4%B9%A6%E5%AF%86%E6%96%87"},"\u6b65\u9aa4 3")," \u4e2d\u521b\u5efa\u4e86\u4e00\u4e2a\u7528\u4e8e\u5b58\u50a8\u81ea\u5b9a\u4e49\u8bc1\u4e66\u7684\u5bc6\u6587\uff0c\u5219\u968f\u7740\u8bc1\u4e66\u7684\u8f6e\u6362\uff0c\u4f60\u5c06\u9700\u8981\u66f4\u65b0\u6b64\u5bc6\u6587\u3002"),(0,n.kt)("p",null,"\u9996\u5148\uff0c\u4f7f\u7528\u4ee5\u4e0b\u547d\u4ee4\u5220\u9664 cattle-csp-adapter-system \u547d\u540d\u7a7a\u95f4\u4e2d\u7684\u539f\u59cb\u5bc6\u6587\uff1a"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl delete secret tls-ca-additional -n cattle-csp-adapter-system\n")),(0,n.kt)("p",null,"\u7136\u540e\uff0c\u6309\u7167",(0,n.kt)("a",{parentName:"p",href:"#3-%E5%88%9B%E5%BB%BA%E8%AF%81%E4%B9%A6%E5%AF%86%E6%96%87"},"\u6b65\u9aa4 3")," \u4e2d\u7684\u5b89\u88c5\u6b65\u9aa4\uff0c\u5c06\u5bc6\u6587\u7684\u5185\u5bb9\u66ff\u6362\u4e3a\u66f4\u65b0\u540e\u7684\u503c\u3002"),(0,n.kt)("p",null,"\u6700\u540e\uff0c\u91cd\u65b0\u542f\u52a8 rancher-csp-adapter deployment \u6765\u786e\u4fdd\u66f4\u65b0\u540e\u7684\u503c\u53ef\u4f9b Adapter \u4f7f\u7528\uff1a"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl rollout restart deploy rancher-csp-adapter -n cattle-csp-adapter-system\n")),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},(0,n.kt)("strong",{parentName:"p"},"\u6ce8\u610f"),"\uff1a\u6709\u4e00\u4e9b\u65b9\u6cd5\uff08\u4f8b\u5982 cert-manager \u7684 ",(0,n.kt)("a",{parentName:"p",href:"https://cert-manager.io/docs/projects/trust/"},"trust operator"),"\uff09\u53ef\u4ee5\u5e2e\u52a9\u4f60\u51cf\u5c11\u624b\u52a8\u8f6e\u6362\u4efb\u52a1\u7684\u6570\u91cf\u3002\u8fd9\u4e9b\u9009\u9879\u4e0d\u53d7\u5b98\u65b9\u652f\u6301\uff0c\u4f46\u53ef\u80fd\u5bf9\u60f3\u8981\u81ea\u52a8\u5316\u67d0\u4e9b\u4efb\u52a1\u7684\u7528\u6237\u6709\u7528\u3002")))}k.isMDXComponent=!0}}]);