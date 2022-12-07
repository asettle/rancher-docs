"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[70596],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>k});var a=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var l=a.createContext({}),c=function(e){var n=a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},p=function(e){var n=c(e.components);return a.createElement(l.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},m=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),m=c(t),k=r,N=m["".concat(l,".").concat(k)]||m[k]||u[k]||i;return t?a.createElement(N,s(s({ref:n},p),{},{components:t})):a.createElement(N,s({ref:n},p))}));function k(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,s=new Array(i);s[0]=m;var o={};for(var l in n)hasOwnProperty.call(n,l)&&(o[l]=n[l]);o.originalType=e,o.mdxType="string"==typeof e?e:r,s[1]=o;for(var c=2;c<i;c++)s[c]=t[c];return a.createElement.apply(null,s)}return a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},13859:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>s,default:()=>N,frontMatter:()=>i,metadata:()=>o,toc:()=>c});var a=t(87462),r=(t(67294),t(3905));const i={title:"\u521b\u5efa Amazon EC2 \u96c6\u7fa4",description:"\u4e86\u89e3\u4f7f\u7528 Rancher \u521b\u5efa Amazon EC2 \u96c6\u7fa4\u6240\u9700\u7684\u5148\u51b3\u6761\u4ef6\u548c\u6b65\u9aa4"},s=void 0,o={unversionedId:"how-to-guides/new-user-guides/launch-kubernetes-with-rancher/use-new-nodes-in-an-infra-provider/create-an-amazon-ec2-cluster",id:"version-2.6/how-to-guides/new-user-guides/launch-kubernetes-with-rancher/use-new-nodes-in-an-infra-provider/create-an-amazon-ec2-cluster",title:"\u521b\u5efa Amazon EC2 \u96c6\u7fa4",description:"\u4e86\u89e3\u4f7f\u7528 Rancher \u521b\u5efa Amazon EC2 \u96c6\u7fa4\u6240\u9700\u7684\u5148\u51b3\u6761\u4ef6\u548c\u6b65\u9aa4",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-2.6/how-to-guides/new-user-guides/launch-kubernetes-with-rancher/use-new-nodes-in-an-infra-provider/create-an-amazon-ec2-cluster.md",sourceDirName:"how-to-guides/new-user-guides/launch-kubernetes-with-rancher/use-new-nodes-in-an-infra-provider",slug:"/how-to-guides/new-user-guides/launch-kubernetes-with-rancher/use-new-nodes-in-an-infra-provider/create-an-amazon-ec2-cluster",permalink:"/zh/v2.6/how-to-guides/new-user-guides/launch-kubernetes-with-rancher/use-new-nodes-in-an-infra-provider/create-an-amazon-ec2-cluster",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/versioned_docs/version-2.6/how-to-guides/new-user-guides/launch-kubernetes-with-rancher/use-new-nodes-in-an-infra-provider/create-an-amazon-ec2-cluster.md",tags:[],version:"2.6",lastUpdatedAt:1670452794,formattedLastUpdatedAt:"2022\u5e7412\u67087\u65e5",frontMatter:{title:"\u521b\u5efa Amazon EC2 \u96c6\u7fa4",description:"\u4e86\u89e3\u4f7f\u7528 Rancher \u521b\u5efa Amazon EC2 \u96c6\u7fa4\u6240\u9700\u7684\u5148\u51b3\u6761\u4ef6\u548c\u6b65\u9aa4"},sidebar:"tutorialSidebar",previous:{title:"\u5728\u4e91\u5382\u5546\u7684\u65b0\u8282\u70b9\u4e0a\u542f\u52a8 Kubernetes",permalink:"/zh/v2.6/pages-for-subheaders/use-new-nodes-in-an-infra-provider"},next:{title:"\u521b\u5efa DigitalOcean \u96c6\u7fa4",permalink:"/zh/v2.6/how-to-guides/new-user-guides/launch-kubernetes-with-rancher/use-new-nodes-in-an-infra-provider/create-a-digitalocean-cluster"}},l={},c=[{value:"\u5148\u51b3\u6761\u4ef6",id:"\u5148\u51b3\u6761\u4ef6",level:3},{value:"\u521b\u5efa EC2 \u96c6\u7fa4",id:"\u521b\u5efa-ec2-\u96c6\u7fa4",level:2},{value:"1. \u521b\u5efa\u4e91\u51ed\u8bc1",id:"1-\u521b\u5efa\u4e91\u51ed\u8bc1",level:3},{value:"2. \u4f7f\u7528\u4e91\u51ed\u8bc1\u548c EC2 \u7684\u4fe1\u606f\u6765\u521b\u5efa\u8282\u70b9\u6a21\u677f",id:"2-\u4f7f\u7528\u4e91\u51ed\u8bc1\u548c-ec2-\u7684\u4fe1\u606f\u6765\u521b\u5efa\u8282\u70b9\u6a21\u677f",level:3},{value:"3. \u4f7f\u7528\u8282\u70b9\u6a21\u677f\u521b\u5efa\u5177\u6709\u8282\u70b9\u6c60\u7684\u96c6\u7fa4",id:"3-\u4f7f\u7528\u8282\u70b9\u6a21\u677f\u521b\u5efa\u5177\u6709\u8282\u70b9\u6c60\u7684\u96c6\u7fa4",level:3},{value:"1. \u521b\u5efa\u4e91\u51ed\u8bc1",id:"1-\u521b\u5efa\u4e91\u51ed\u8bc1-1",level:3},{value:"2. \u521b\u5efa\u4f60\u7684\u96c6\u7fa4",id:"2-\u521b\u5efa\u4f60\u7684\u96c6\u7fa4",level:3},{value:"\u53ef\u9009\u7684\u540e\u7eed\u6b65\u9aa4",id:"\u53ef\u9009\u7684\u540e\u7eed\u6b65\u9aa4",level:3},{value:"IAM \u7b56\u7565",id:"iam-\u7b56\u7565",level:2},{value:"IAM \u7b56\u7565\u793a\u4f8b",id:"iam-\u7b56\u7565\u793a\u4f8b",level:3},{value:"\u5e26\u6709 PassRole \u7684 IAM \u7b56\u7565\u793a\u4f8b",id:"\u5e26\u6709-passrole-\u7684-iam-\u7b56\u7565\u793a\u4f8b",level:3},{value:"\u5141\u8bb8\u52a0\u5bc6 EBS \u5377\u7684 IAM \u7b56\u7565\u793a\u4f8b",id:"\u5141\u8bb8\u52a0\u5bc6-ebs-\u5377\u7684-iam-\u7b56\u7565\u793a\u4f8b",level:3}],p=e=>function(n){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,r.kt)("div",n)},u=p("Tabs"),m=p("TabItem"),k={toc:c};function N(e){let{components:n,...t}=e;return(0,r.kt)("wrapper",(0,a.Z)({},k,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"\u5728\u672c\u8282\u4e2d\uff0c\u4f60\u5c06\u5b66\u4e60\u5982\u4f55\u4f7f\u7528 Rancher \u5728 Amazon EC2 \u4e2d\u5b89\u88c5 ",(0,r.kt)("a",{parentName:"p",href:"https://rancher.com/docs/rke/latest/en/"},"RKE")," Kubernetes \u96c6\u7fa4\u3002"),(0,r.kt)("p",null,"\u9996\u5148\uff0c\u5728 Rancher \u4e2d\u8bbe\u7f6e\u4f60\u7684 EC2 \u4e91\u51ed\u8bc1\u3002\u7136\u540e\uff0c\u4f7f\u7528\u4e91\u51ed\u8bc1\u521b\u5efa\u4e00\u4e2a\u8282\u70b9\u6a21\u677f\uff0cRancher \u5c06\u4f7f\u7528\u8be5\u6a21\u677f\u5728 EC2 \u4e2d\u914d\u7f6e\u65b0\u8282\u70b9\u3002"),(0,r.kt)("p",null,"\u7136\u540e\uff0c\u5728 Rancher \u4e2d\u521b\u5efa\u4e00\u4e2a EC2 \u96c6\u7fa4\uff0c\u5e76\u5728\u914d\u7f6e\u65b0\u96c6\u7fa4\u65f6\u4e3a\u96c6\u7fa4\u5b9a\u4e49\u8282\u70b9\u6c60\u3002\u6bcf\u4e2a\u8282\u70b9\u6c60\u90fd\u6709\u4e00\u4e2a etcd\u3001controlplane \u6216 worker \u7684 Kubernetes \u89d2\u8272\u3002Rancher \u4f1a\u5728\u65b0\u8282\u70b9\u4e0a\u5b89\u88c5 RKE Kubernetes\uff0c\u5e76\u4e3a\u6bcf\u4e2a\u8282\u70b9\u8bbe\u7f6e\u8282\u70b9\u6c60\u5b9a\u4e49\u7684 Kubernetes \u89d2\u8272\u3002"),(0,r.kt)("h3",{id:"\u5148\u51b3\u6761\u4ef6"},"\u5148\u51b3\u6761\u4ef6"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"AWS EC2 \u8bbf\u95ee\u5bc6\u94a5\u548c\u5bc6\u6587\u5bc6\u94a5"),"\uff0c\u7528\u4e8e\u521b\u5efa\u5b9e\u4f8b\u3002\u8bf7\u53c2\u9605 ",(0,r.kt)("a",{parentName:"li",href:"https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_access-keys.html#Using_CreateAccessKey"},"Amazon \u6587\u6863\uff1a\u521b\u5efa\u8bbf\u95ee\u5bc6\u94a5"),"\u6765\u521b\u5efa\u8bbf\u95ee\u5bc6\u94a5\u548c\u5bc6\u6587\u5bc6\u94a5\u3002"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"\u5df2\u521b\u5efa IAM \u7b56\u7565"),"\uff0c\u7528\u4e8e\u4e3a\u7528\u6237\u6dfb\u52a0\u7684\u8bbf\u95ee\u5bc6\u94a5\u548c\u5bc6\u6587\u5bc6\u94a5\u3002\u8bf7\u53c2\u9605 ",(0,r.kt)("a",{parentName:"li",href:"https://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies_create.html#access_policies_create-start"},"Amazon \u6587\u6863\uff1a\u521b\u5efa IAM \u7b56\u7565\uff08\u63a7\u5236\u53f0\uff09"),"\u6765\u521b\u5efa IAM \u7b56\u7565\u3002\u53c2\u9605\u4e0b\u9762\u7684\u4e09\u4e2a\u793a\u4f8b JSON \u7b56\u7565\uff1a",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#iam-%E7%AD%96%E7%95%A5%E7%A4%BA%E4%BE%8B"},"IAM \u7b56\u7565\u793a\u4f8b")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#%E5%B8%A6%E6%9C%89-passrole-%E7%9A%84-iam-%E7%AD%96%E7%95%A5%E7%A4%BA%E4%BE%8B"},"\u5e26\u6709 PassRole \u7684 IAM \u7b56\u7565\u793a\u4f8b"),"\uff08\u5982\u679c\u8981\u4f7f\u7528 ",(0,r.kt)("a",{parentName:"li",href:"/zh/v2.6/pages-for-subheaders/set-up-cloud-providers"},"Kubernetes \u4e91\u63d0\u4f9b\u5546"),"\uff0c\u6216\u5c06 IAM \u914d\u7f6e\u6587\u4ef6\u4f20\u9012\u7ed9\u5b9e\u4f8b\uff0c\u5219\u9700\u8981\uff09"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#%E5%85%81%E8%AE%B8%E5%8A%A0%E5%AF%86-ebs-%E5%8D%B7%E7%9A%84-iam-%E7%AD%96%E7%95%A5%E7%A4%BA%E4%BE%8B"},"\u5141\u8bb8\u52a0\u5bc6 EBS \u5377\u7684 IAM \u7b56\u7565\u793a\u4f8b")))),(0,r.kt)("li",{parentName:"ul"},"\u4e3a\u7528\u6237\u6dfb\u52a0 ",(0,r.kt)("strong",{parentName:"li"},"IAM \u7b56\u7565\u6743\u9650"),"\u3002\u8bf7\u53c2\u9605 ",(0,r.kt)("a",{parentName:"li",href:"https://docs.aws.amazon.com/IAM/latest/UserGuide/id_users_change-permissions.html#users_change_permissions-add-console"},"Amazon \u6587\u6863\uff1a\u4e3a\u7528\u6237\u6dfb\u52a0\u6743\u9650\uff08\u63a7\u5236\u53f0\uff09"),"\uff0c\u6765\u5c06\u6743\u9650\u6dfb\u52a0\u7ed9\u7528\u6237\u3002")),(0,r.kt)("h2",{id:"\u521b\u5efa-ec2-\u96c6\u7fa4"},"\u521b\u5efa EC2 \u96c6\u7fa4"),(0,r.kt)("p",null,"\u521b\u5efa\u96c6\u7fa4\u7684\u6b65\u9aa4\u56e0 Rancher \u7248\u672c\u800c\u5f02\u3002"),(0,r.kt)(u,{mdxType:"Tabs"},(0,r.kt)(m,{value:"RKE",mdxType:"TabItem"},(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"#1-%E5%88%9B%E5%BB%BA%E4%BA%91%E5%87%AD%E8%AF%81"},"\u521b\u5efa\u4e91\u51ed\u8bc1")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"#2-%E4%BD%BF%E7%94%A8%E4%BA%91%E5%87%AD%E8%AF%81%E5%92%8C-ec2-%E7%9A%84%E4%BF%A1%E6%81%AF%E6%9D%A5%E5%88%9B%E5%BB%BA%E8%8A%82%E7%82%B9%E6%A8%A1%E6%9D%BF"},"\u4f7f\u7528\u4e91\u51ed\u8bc1\u548c EC2 \u7684\u4fe1\u606f\u6765\u521b\u5efa\u8282\u70b9\u6a21\u677f")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"#3-%E4%BD%BF%E7%94%A8%E8%8A%82%E7%82%B9%E6%A8%A1%E6%9D%BF%E5%88%9B%E5%BB%BA%E5%85%B7%E6%9C%89%E8%8A%82%E7%82%B9%E6%B1%A0%E7%9A%84%E9%9B%86%E7%BE%A4"},"\u4f7f\u7528\u8282\u70b9\u6a21\u677f\u521b\u5efa\u5177\u6709\u8282\u70b9\u6c60\u7684\u96c6\u7fa4"))),(0,r.kt)("h3",{id:"1-\u521b\u5efa\u4e91\u51ed\u8bc1"},"1. \u521b\u5efa\u4e91\u51ed\u8bc1"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"\u70b9\u51fb ",(0,r.kt)("strong",{parentName:"li"},"\u2630 > \u96c6\u7fa4\u7ba1\u7406"),"\u3002"),(0,r.kt)("li",{parentName:"ol"},"\u5355\u51fb",(0,r.kt)("strong",{parentName:"li"},"\u4e91\u51ed\u8bc1"),"\u3002"),(0,r.kt)("li",{parentName:"ol"},"\u5355\u51fb",(0,r.kt)("strong",{parentName:"li"},"\u521b\u5efa"),"\u3002"),(0,r.kt)("li",{parentName:"ol"},"\u5355\u51fb ",(0,r.kt)("strong",{parentName:"li"},"Amazon"),"\u3002"),(0,r.kt)("li",{parentName:"ol"},"\u8f93\u5165\u4e91\u51ed\u8bc1\u7684\u540d\u79f0\u3002"),(0,r.kt)("li",{parentName:"ol"},"\u5728",(0,r.kt)("strong",{parentName:"li"},"\u9ed8\u8ba4\u533a\u57df"),"\u5b57\u6bb5\u4e2d\uff0c\u9009\u62e9\u96c6\u7fa4\u8282\u70b9\u6240\u5728\u7684 AWS \u533a\u57df\u3002"),(0,r.kt)("li",{parentName:"ol"},"\u8f93\u5165 AWS EC2 ",(0,r.kt)("strong",{parentName:"li"},"Access Key")," \u548c ",(0,r.kt)("strong",{parentName:"li"},"Secret Key"),"\u3002"),(0,r.kt)("li",{parentName:"ol"},"\u5355\u51fb",(0,r.kt)("strong",{parentName:"li"},"\u521b\u5efa"),"\u3002")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u7ed3\u679c"),"\uff1a\u5df2\u521b\u5efa\u7528\u4e8e\u5728\u96c6\u7fa4\u4e2d\u914d\u7f6e\u8282\u70b9\u7684\u4e91\u51ed\u8bc1\u3002\u4f60\u53ef\u4ee5\u5728\u5176\u4ed6\u8282\u70b9\u6a21\u677f\u6216\u96c6\u7fa4\u4e2d\u590d\u7528\u8fd9\u4e9b\u51ed\u8bc1\u3002"),(0,r.kt)("h3",{id:"2-\u4f7f\u7528\u4e91\u51ed\u8bc1\u548c-ec2-\u7684\u4fe1\u606f\u6765\u521b\u5efa\u8282\u70b9\u6a21\u677f"},"2. \u4f7f\u7528\u4e91\u51ed\u8bc1\u548c EC2 \u7684\u4fe1\u606f\u6765\u521b\u5efa\u8282\u70b9\u6a21\u677f"),(0,r.kt)("p",null,"\u4e3a EC2 \u521b\u5efa",(0,r.kt)("a",{parentName:"p",href:"/zh/v2.6/pages-for-subheaders/use-new-nodes-in-an-infra-provider#%E8%8A%82%E7%82%B9%E6%A8%A1%E6%9D%BF"},"\u8282\u70b9\u6a21\u677f"),"\u4f1a\u5141\u8bb8 Rancher \u5728 EC2 \u4e2d\u914d\u7f6e\u65b0\u8282\u70b9\u3002\u5176\u4ed6\u96c6\u7fa4\u53ef\u4ee5\u590d\u7528\u8282\u70b9\u6a21\u677f\u3002"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u70b9\u51fb ",(0,r.kt)("strong",{parentName:"p"},"\u2630 > \u96c6\u7fa4\u7ba1\u7406"),"\u3002")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u5355\u51fb ",(0,r.kt)("strong",{parentName:"p"},"RKE1 \u914d\u7f6e > \u8282\u70b9\u6a21\u677f"),"\u3002")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u5355\u51fb",(0,r.kt)("strong",{parentName:"p"},"\u6dfb\u52a0\u6a21\u677f"),"\u3002")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u586b\u5199 EC2 \u7684\u8282\u70b9\u6a21\u677f\u3002\u6709\u5173\u586b\u5199\u8868\u5355\u7684\u5e2e\u52a9\uff0c\u8bf7\u53c2\u9605 ",(0,r.kt)("a",{parentName:"p",href:"/zh/v2.6/reference-guides/cluster-configuration/downstream-cluster-configuration/node-template-configuration/amazon-ec2"},"EC2 \u8282\u70b9\u6a21\u677f\u914d\u7f6e"),"\u3002")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u5355\u51fb",(0,r.kt)("strong",{parentName:"p"},"\u521b\u5efa"),"\u3002"),(0,r.kt)("admonition",{parentName:"li",type:"note"},(0,r.kt)("p",{parentName:"admonition"},"\u5982\u679c\u8981\u4f7f\u7528",(0,r.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/concepts/services-networking/dual-stack/"},"\u53cc\u6808"),"\u529f\u80fd\uff0c\u8bf7\u5173\u6ce8\u5176\u4ed6\u989d\u5916\u7684",(0,r.kt)("a",{parentName:"p",href:"https://rancher.com/docs/rke//latest/en/config-options/dual-stack#requirements"},"\u8981\u6c42"),"\u3002")))),(0,r.kt)("h3",{id:"3-\u4f7f\u7528\u8282\u70b9\u6a21\u677f\u521b\u5efa\u5177\u6709\u8282\u70b9\u6c60\u7684\u96c6\u7fa4"},"3. \u4f7f\u7528\u8282\u70b9\u6a21\u677f\u521b\u5efa\u5177\u6709\u8282\u70b9\u6c60\u7684\u96c6\u7fa4"),(0,r.kt)("p",null,"\u5c06\u4e00\u4e2a\u6216\u591a\u4e2a\u8282\u70b9\u6c60\u6dfb\u52a0\u5230\u4f60\u7684\u96c6\u7fa4\u3002\u6709\u5173\u8282\u70b9\u6c60\u7684\u66f4\u591a\u4fe1\u606f\uff0c\u8bf7\u53c2\u9605",(0,r.kt)("a",{parentName:"p",href:"/zh/v2.6/pages-for-subheaders/use-new-nodes-in-an-infra-provider"},"\u672c\u8282"),"\u3002"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u70b9\u51fb ",(0,r.kt)("strong",{parentName:"p"},"\u2630 > \u96c6\u7fa4\u7ba1\u7406"),"\u3002")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u5728",(0,r.kt)("strong",{parentName:"p"},"\u96c6\u7fa4"),"\u9875\u9762\u4e0a\uff0c\u5355\u51fb",(0,r.kt)("strong",{parentName:"p"},"\u521b\u5efa"),"\u3002")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u5355\u51fb ",(0,r.kt)("strong",{parentName:"p"},"Amazon EC2"),"\u3002")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u4e3a\u6bcf\u4e2a Kubernetes \u89d2\u8272\u521b\u5efa\u4e00\u4e2a\u8282\u70b9\u6c60\u3002\u4e3a\u6bcf\u4e2a\u8282\u70b9\u6c60\u9009\u62e9\u4f60\u5df2\u521b\u5efa\u7684\u8282\u70b9\u6a21\u677f\u3002\u6709\u5173\u8282\u70b9\u6c60\u7684\u66f4\u591a\u4fe1\u606f\uff0c\u5305\u62ec\u4e3a\u8282\u70b9\u5206\u914d Kubernetes \u89d2\u8272\u7684\u6700\u4f73\u5b9e\u8df5\uff0c\u8bf7\u53c2\u9605",(0,r.kt)("a",{parentName:"p",href:"/zh/v2.6/pages-for-subheaders/use-new-nodes-in-an-infra-provider"},"\u672c\u8282"),"\u3002")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u70b9\u51fb",(0,r.kt)("strong",{parentName:"p"},"\u6dfb\u52a0\u6210\u5458"),"\u6dfb\u52a0\u53ef\u4ee5\u8bbf\u95ee\u96c6\u7fa4\u7684\u7528\u6237\u3002\u4f7f\u7528",(0,r.kt)("strong",{parentName:"p"},"\u89d2\u8272"),"\u4e0b\u62c9\u83dc\u5355\u4e3a\u6bcf\u4e2a\u7528\u6237\u8bbe\u7f6e\u6743\u9650\u3002")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u4f7f\u7528",(0,r.kt)("strong",{parentName:"p"},"\u96c6\u7fa4\u9009\u9879"),"\u9009\u62e9\u8981\u5b89\u88c5\u7684 Kubernetes \u7248\u672c\u3001\u8981\u4f7f\u7528\u7684\u7f51\u7edc\u63d0\u4f9b\u5546\uff0c\u4ee5\u53ca\u662f\u5426\u542f\u7528\u9879\u76ee\u7f51\u7edc\u9694\u79bb\u3002\u53c2\u89c1",(0,r.kt)("a",{parentName:"p",href:"/zh/v2.6/pages-for-subheaders/set-up-cloud-providers"},"\u9009\u62e9\u4e91\u63d0\u4f9b\u5546"),"\u6765\u914d\u7f6e Kubernetes \u4e91\u63d0\u4f9b\u5546\u3002\u5982\u9700\u83b7\u53d6\u914d\u7f6e\u96c6\u7fa4\u7684\u5e2e\u52a9\uff0c\u8bf7\u53c2\u9605 ",(0,r.kt)("a",{parentName:"p",href:"/zh/v2.6/reference-guides/cluster-configuration/rancher-server-configuration/rke1-cluster-configuration"},"RKE \u96c6\u7fa4\u914d\u7f6e\u53c2\u8003"),"\u3002"),(0,r.kt)("admonition",{parentName:"li",type:"note"},(0,r.kt)("p",{parentName:"admonition"},"\u5982\u679c\u8981\u4f7f\u7528",(0,r.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/concepts/services-networking/dual-stack/"},"\u53cc\u6808"),"\u529f\u80fd\uff0c\u8bf7\u5173\u6ce8\u5176\u4ed6\u989d\u5916\u7684",(0,r.kt)("a",{parentName:"p",href:"https://rancher.com/docs/rke//latest/en/config-options/dual-stack#requirements"},"\u8981\u6c42"),"\u3002"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u5355\u51fb",(0,r.kt)("strong",{parentName:"p"},"\u521b\u5efa"),"\u3002")))),(0,r.kt)(m,{value:"RKE2",mdxType:"TabItem"},(0,r.kt)("h3",{id:"1-\u521b\u5efa\u4e91\u51ed\u8bc1-1"},"1. \u521b\u5efa\u4e91\u51ed\u8bc1"),(0,r.kt)("p",null,"\u5982\u679c\u4f60\u5df2\u7ecf\u6709\u4e00\u7ec4\u53ef\u7528\u7684\u4e91\u51ed\u8bc1\uff0c\u8bf7\u8df3\u8fc7\u6b64\u90e8\u5206\u3002"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"\u70b9\u51fb ",(0,r.kt)("strong",{parentName:"li"},"\u2630 > \u96c6\u7fa4\u7ba1\u7406"),"\u3002"),(0,r.kt)("li",{parentName:"ol"},"\u5355\u51fb",(0,r.kt)("strong",{parentName:"li"},"\u4e91\u51ed\u8bc1"),"\u3002"),(0,r.kt)("li",{parentName:"ol"},"\u5355\u51fb",(0,r.kt)("strong",{parentName:"li"},"\u521b\u5efa"),"\u3002"),(0,r.kt)("li",{parentName:"ol"},"\u5355\u51fb ",(0,r.kt)("strong",{parentName:"li"},"Amazon"),"\u3002"),(0,r.kt)("li",{parentName:"ol"},"\u8f93\u5165\u4e91\u51ed\u8bc1\u7684\u540d\u79f0\u3002"),(0,r.kt)("li",{parentName:"ol"},"\u5728",(0,r.kt)("strong",{parentName:"li"},"\u9ed8\u8ba4\u533a\u57df"),"\u5b57\u6bb5\u4e2d\uff0c\u9009\u62e9\u96c6\u7fa4\u8282\u70b9\u6240\u5728\u7684 AWS \u533a\u57df\u3002"),(0,r.kt)("li",{parentName:"ol"},"\u8f93\u5165 AWS EC2 ",(0,r.kt)("strong",{parentName:"li"},"Access Key")," \u548c ",(0,r.kt)("strong",{parentName:"li"},"Secret Key"),"\u3002"),(0,r.kt)("li",{parentName:"ol"},"\u5355\u51fb",(0,r.kt)("strong",{parentName:"li"},"\u521b\u5efa"),"\u3002")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u7ed3\u679c"),"\uff1a\u5df2\u521b\u5efa\u7528\u4e8e\u5728\u96c6\u7fa4\u4e2d\u914d\u7f6e\u8282\u70b9\u7684\u4e91\u51ed\u8bc1\u3002\u4f60\u53ef\u4ee5\u5728\u5176\u4ed6\u8282\u70b9\u6a21\u677f\u6216\u96c6\u7fa4\u4e2d\u590d\u7528\u8fd9\u4e9b\u51ed\u8bc1\u3002"),(0,r.kt)("h3",{id:"2-\u521b\u5efa\u4f60\u7684\u96c6\u7fa4"},"2. \u521b\u5efa\u4f60\u7684\u96c6\u7fa4"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"\u70b9\u51fb ",(0,r.kt)("strong",{parentName:"li"},"\u2630 > \u96c6\u7fa4\u7ba1\u7406"),"\u3002"),(0,r.kt)("li",{parentName:"ol"},"\u5728",(0,r.kt)("strong",{parentName:"li"},"\u96c6\u7fa4"),"\u9875\u9762\u4e0a\uff0c\u5355\u51fb",(0,r.kt)("strong",{parentName:"li"},"\u521b\u5efa"),"\u3002"),(0,r.kt)("li",{parentName:"ol"},"\u5c06\u5f00\u5173\u5207\u6362\u5230 ",(0,r.kt)("strong",{parentName:"li"},"RKE2/K3s"),"\u3002"),(0,r.kt)("li",{parentName:"ol"},"\u5355\u51fb ",(0,r.kt)("strong",{parentName:"li"},"Amazon EC2"),"\u3002"),(0,r.kt)("li",{parentName:"ol"},"\u9009\u62e9\u4e00\u4e2a",(0,r.kt)("strong",{parentName:"li"},"\u4e91\u51ed\u8bc1"),"\u3002\u5982\u679c\u5b58\u5728\u591a\u4e2a\u5219\u9700\u8981\u9009\u62e9\u3002\u5426\u5219\uff0c\u5b83\u662f\u9884\u9009\u7684\u3002"),(0,r.kt)("li",{parentName:"ol"},"\u8f93\u5165",(0,r.kt)("strong",{parentName:"li"},"\u96c6\u7fa4\u540d\u79f0"),"\u3002"),(0,r.kt)("li",{parentName:"ol"},"\u4e3a\u6bcf\u4e2a Kubernetes \u89d2\u8272\u521b\u5efa\u4e00\u4e2a\u4e3b\u673a\u6c60\u3002\u8bf7\u53c2\u9605",(0,r.kt)("a",{parentName:"li",href:"/zh/v2.6/pages-for-subheaders/use-new-nodes-in-an-infra-provider#rke2-%E4%B8%AD%E7%9A%84%E8%8A%82%E7%82%B9%E8%A7%92%E8%89%B2"},"\u6700\u4f73\u5b9e\u8df5"),"\u4e86\u89e3\u89d2\u8272\u5206\u914d\u548c\u8ba1\u6570\u7684\u5efa\u8bae\u3002",(0,r.kt)("ol",{parentName:"li"},(0,r.kt)("li",{parentName:"ol"},"\u4e3a\u6bcf\u4e2a\u4e3b\u673a\u6c60\u5b9a\u4e49\u4e3b\u673a\u914d\u7f6e\u3002\u6709\u5173\u914d\u7f6e\u9009\u9879\u7684\u4fe1\u606f\uff0c\u8bf7\u53c2\u9605 ",(0,r.kt)("a",{parentName:"li",href:"/zh/v2.6/reference-guides/cluster-configuration/downstream-cluster-configuration/machine-configuration/amazon-ec2"},"EC2 \u4e3b\u673a\u914d\u7f6e\u53c2\u8003"),"\u3002"))),(0,r.kt)("li",{parentName:"ol"},"\u4f7f\u7528",(0,r.kt)("strong",{parentName:"li"},"\u96c6\u7fa4\u914d\u7f6e"),"\uff0c\u9009\u62e9\u8981\u5b89\u88c5\u7684 Kubernetes \u7248\u672c\u3001\u8981\u4f7f\u7528\u7684\u7f51\u7edc\u63d0\u4f9b\u5546\uff0c\u4ee5\u53ca\u662f\u5426\u542f\u7528\u9879\u76ee\u7f51\u7edc\u9694\u79bb\u3002\u6709\u5173\u914d\u7f6e\u96c6\u7fa4\u7684\u5e2e\u52a9\uff0c\u8bf7\u53c2\u9605 ",(0,r.kt)("a",{parentName:"li",href:"/zh/v2.6/reference-guides/cluster-configuration/rancher-server-configuration/rke2-cluster-configuration"},"RKE2 \u96c6\u7fa4\u914d\u7f6e\u53c2\u8003"),"\u3002"),(0,r.kt)("li",{parentName:"ol"},"\u4f7f\u7528",(0,r.kt)("strong",{parentName:"li"},"\u6210\u5458\u89d2\u8272"),"\u4e3a\u96c6\u7fa4\u914d\u7f6e\u7528\u6237\u6388\u6743\u3002\u70b9\u51fb",(0,r.kt)("strong",{parentName:"li"},"\u6dfb\u52a0\u6210\u5458"),"\u6dfb\u52a0\u53ef\u4ee5\u8bbf\u95ee\u96c6\u7fa4\u7684\u7528\u6237\u3002\u4f7f\u7528",(0,r.kt)("strong",{parentName:"li"},"\u89d2\u8272"),"\u4e0b\u62c9\u83dc\u5355\u4e3a\u6bcf\u4e2a\u7528\u6237\u8bbe\u7f6e\u6743\u9650\u3002"),(0,r.kt)("li",{parentName:"ol"},"\u5355\u51fb",(0,r.kt)("strong",{parentName:"li"},"\u521b\u5efa"),"\u3002")))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u7ed3\u679c"),"\uff1a"),(0,r.kt)("p",null,"\u4f60\u5df2\u521b\u5efa\u96c6\u7fa4\uff0c\u96c6\u7fa4\u7684\u72b6\u6001\u662f",(0,r.kt)("strong",{parentName:"p"},"\u914d\u7f6e\u4e2d"),"\u3002Rancher \u5df2\u5728\u4f60\u7684\u96c6\u7fa4\u4e2d\u3002"),(0,r.kt)("p",null,"\u5f53\u96c6\u7fa4\u72b6\u6001\u53d8\u4e3a ",(0,r.kt)("strong",{parentName:"p"},"Active")," \u540e\uff0c\u4f60\u53ef\u8bbf\u95ee\u96c6\u7fa4\u3002"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Active")," \u72b6\u6001\u7684\u96c6\u7fa4\u4f1a\u5206\u914d\u5230\u4e24\u4e2a\u9879\u76ee\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Default"),"\uff1a\u5305\u542b ",(0,r.kt)("inlineCode",{parentName:"li"},"default")," \u547d\u540d\u7a7a\u95f4"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"System"),"\uff1a\u5305\u542b ",(0,r.kt)("inlineCode",{parentName:"li"},"cattle-system"),"\uff0c",(0,r.kt)("inlineCode",{parentName:"li"},"ingress-nginx"),"\uff0c",(0,r.kt)("inlineCode",{parentName:"li"},"kube-public")," \u548c ",(0,r.kt)("inlineCode",{parentName:"li"},"kube-system")," \u547d\u540d\u7a7a\u95f4\u3002")),(0,r.kt)("h3",{id:"\u53ef\u9009\u7684\u540e\u7eed\u6b65\u9aa4"},"\u53ef\u9009\u7684\u540e\u7eed\u6b65\u9aa4"),(0,r.kt)("p",null,"\u521b\u5efa\u96c6\u7fa4\u540e\uff0c\u4f60\u53ef\u4ee5\u901a\u8fc7 Rancher UI \u8bbf\u95ee\u96c6\u7fa4\u3002\u6700\u4f73\u5b9e\u8df5\u5efa\u8bae\u4f60\u8bbe\u7f6e\u4ee5\u4e0b\u8bbf\u95ee\u96c6\u7fa4\u7684\u5907\u7528\u65b9\u5f0f\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"\u901a\u8fc7 kubectl CLI \u8bbf\u95ee\u4f60\u7684\u96c6\u7fa4"),"\uff1a\u6309\u7167",(0,r.kt)("a",{parentName:"li",href:"/zh/v2.6/how-to-guides/new-user-guides/manage-clusters/access-clusters/use-kubectl-and-kubeconfig#%E5%9C%A8%E5%B7%A5%E4%BD%9C%E7%AB%99%E4%BD%BF%E7%94%A8-kubectl-%E8%AE%BF%E9%97%AE%E9%9B%86%E7%BE%A4"},"\u8fd9\u4e9b\u6b65\u9aa4"),"\u5728\u4f60\u7684\u5de5\u4f5c\u7ad9\u4e0a\u4f7f\u7528 kubectl \u8bbf\u95ee\u96c6\u7fa4\u3002\u5728\u8fd9\u79cd\u60c5\u51b5\u4e0b\uff0c\u4f60\u5c06\u901a\u8fc7 Rancher Server \u7684\u8eab\u4efd\u9a8c\u8bc1\u4ee3\u7406\u8fdb\u884c\u8eab\u4efd\u9a8c\u8bc1\uff0c\u7136\u540e Rancher \u4f1a\u8ba9\u4f60\u8fde\u63a5\u5230\u4e0b\u6e38\u96c6\u7fa4\u3002\u6b64\u65b9\u6cd5\u5141\u8bb8\u4f60\u5728\u6ca1\u6709 Rancher UI \u7684\u60c5\u51b5\u4e0b\u7ba1\u7406\u96c6\u7fa4\u3002"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"\u901a\u8fc7 kubectl CLI \u4f7f\u7528\u6388\u6743\u7684\u96c6\u7fa4\u7aef\u70b9\u8bbf\u95ee\u4f60\u7684\u96c6\u7fa4"),"\uff1a\u6309\u7167",(0,r.kt)("a",{parentName:"li",href:"/zh/v2.6/how-to-guides/new-user-guides/manage-clusters/access-clusters/use-kubectl-and-kubeconfig#%E7%9B%B4%E6%8E%A5%E4%BD%BF%E7%94%A8%E4%B8%8B%E6%B8%B8%E9%9B%86%E7%BE%A4%E8%BF%9B%E8%A1%8C%E8%BA%AB%E4%BB%BD%E9%AA%8C%E8%AF%81"},"\u8fd9\u4e9b\u6b65\u9aa4"),"\u76f4\u63a5\u4f7f\u7528 kubectl \u8bbf\u95ee\u96c6\u7fa4\uff0c\u800c\u65e0\u9700\u901a\u8fc7 Rancher \u8fdb\u884c\u8eab\u4efd\u9a8c\u8bc1\u3002\u6211\u4eec\u5efa\u8bae\u8bbe\u7f6e\u6b64\u66ff\u4ee3\u65b9\u6cd5\u6765\u8bbf\u95ee\u96c6\u7fa4\uff0c\u4ee5\u4fbf\u5728\u65e0\u6cd5\u8fde\u63a5\u5230 Rancher \u65f6\u8bbf\u95ee\u96c6\u7fa4\u3002")),(0,r.kt)("h2",{id:"iam-\u7b56\u7565"},"IAM \u7b56\u7565"),(0,r.kt)("h3",{id:"iam-\u7b56\u7565\u793a\u4f8b"},"IAM \u7b56\u7565\u793a\u4f8b"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "Version": "2012-10-17",\n    "Statement": [\n        {\n            "Sid": "VisualEditor0",\n            "Effect": "Allow",\n            "Action": [\n                "ec2:AuthorizeSecurityGroupIngress",\n                "ec2:Describe*",\n                "ec2:ImportKeyPair",\n                "ec2:CreateKeyPair",\n                "ec2:CreateSecurityGroup",\n                "ec2:CreateTags",\n                "ec2:DeleteKeyPair",\n                "ec2:ModifyInstanceMetadataOptions"\n            ],\n            "Resource": "*"\n        },\n        {\n            "Sid": "VisualEditor1",\n            "Effect": "Allow",\n            "Action": [\n                "ec2:RunInstances"\n            ],\n            "Resource": [\n                "arn:aws:ec2:REGION::image/ami-*",\n                "arn:aws:ec2:REGION:AWS_ACCOUNT_ID:instance/*",\n                "arn:aws:ec2:REGION:AWS_ACCOUNT_ID:placement-group/*",\n                "arn:aws:ec2:REGION:AWS_ACCOUNT_ID:volume/*",\n                "arn:aws:ec2:REGION:AWS_ACCOUNT_ID:subnet/*",\n                "arn:aws:ec2:REGION:AWS_ACCOUNT_ID:key-pair/*",\n                "arn:aws:ec2:REGION:AWS_ACCOUNT_ID:network-interface/*",\n                "arn:aws:ec2:REGION:AWS_ACCOUNT_ID:security-group/*"\n            ]\n        },\n        {\n            "Sid": "VisualEditor2",\n            "Effect": "Allow",\n            "Action": [\n                "ec2:RebootInstances",\n                "ec2:TerminateInstances",\n                "ec2:StartInstances",\n                "ec2:StopInstances"\n            ],\n            "Resource": "arn:aws:ec2:REGION:AWS_ACCOUNT_ID:instance/*"\n        }\n    ]\n}\n')),(0,r.kt)("h3",{id:"\u5e26\u6709-passrole-\u7684-iam-\u7b56\u7565\u793a\u4f8b"},"\u5e26\u6709 PassRole \u7684 IAM \u7b56\u7565\u793a\u4f8b"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "Version": "2012-10-17",\n    "Statement": [\n        {\n            "Sid": "VisualEditor0",\n            "Effect": "Allow",\n            "Action": [\n                "ec2:AuthorizeSecurityGroupIngress",\n                "ec2:Describe*",\n                "ec2:ImportKeyPair",\n                "ec2:CreateKeyPair",\n                "ec2:CreateSecurityGroup",\n                "ec2:CreateTags",\n                "ec2:DeleteKeyPair",\n                "ec2:ModifyInstanceMetadataOptions"\n            ],\n            "Resource": "*"\n        },\n        {\n            "Sid": "VisualEditor1",\n            "Effect": "Allow",\n            "Action": [\n                "iam:PassRole",\n                "ec2:RunInstances"\n            ],\n            "Resource": [\n                "arn:aws:ec2:REGION::image/ami-*",\n                "arn:aws:ec2:REGION:AWS_ACCOUNT_ID:instance/*",\n                "arn:aws:ec2:REGION:AWS_ACCOUNT_ID:placement-group/*",\n                "arn:aws:ec2:REGION:AWS_ACCOUNT_ID:volume/*",\n                "arn:aws:ec2:REGION:AWS_ACCOUNT_ID:subnet/*",\n                "arn:aws:ec2:REGION:AWS_ACCOUNT_ID:key-pair/*",\n                "arn:aws:ec2:REGION:AWS_ACCOUNT_ID:network-interface/*",\n                "arn:aws:ec2:REGION:AWS_ACCOUNT_ID:security-group/*",\n                "arn:aws:iam::AWS_ACCOUNT_ID:role/YOUR_ROLE_NAME"\n            ]\n        },\n        {\n            "Sid": "VisualEditor2",\n            "Effect": "Allow",\n            "Action": [\n                "ec2:RebootInstances",\n                "ec2:TerminateInstances",\n                "ec2:StartInstances",\n                "ec2:StopInstances"\n            ],\n            "Resource": "arn:aws:ec2:REGION:AWS_ACCOUNT_ID:instance/*"\n        }\n    ]\n}\n')),(0,r.kt)("h3",{id:"\u5141\u8bb8\u52a0\u5bc6-ebs-\u5377\u7684-iam-\u7b56\u7565\u793a\u4f8b"},"\u5141\u8bb8\u52a0\u5bc6 EBS \u5377\u7684 IAM \u7b56\u7565\u793a\u4f8b"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "Version": "2012-10-17",\n  "Statement": [\n    {\n      "Effect": "Allow",\n      "Action": [\n        "kms:Decrypt",\n        "kms:GenerateDataKeyWithoutPlaintext",\n        "kms:Encrypt",\n        "kms:DescribeKey",\n        "kms:CreateGrant",\n        "ec2:DetachVolume",\n        "ec2:AttachVolume",\n        "ec2:DeleteSnapshot",\n        "ec2:DeleteTags",\n        "ec2:CreateTags",\n        "ec2:CreateVolume",\n        "ec2:DeleteVolume",\n        "ec2:CreateSnapshot"\n      ],\n      "Resource": [\n        "arn:aws:ec2:REGION:AWS_ACCOUNT_ID:volume/*",\n        "arn:aws:ec2:REGION:AWS_ACCOUNT_ID:instance/*",\n        "arn:aws:ec2:REGION:AWS_ACCOUNT_ID:snapshot/*",\n        "arn:aws:kms:REGION:AWS_ACCOUNT_ID:key/KMS_KEY_ID"\n      ]\n    },\n    {\n      "Effect": "Allow",\n      "Action": [\n        "ec2:DescribeInstances",\n        "ec2:DescribeTags",\n        "ec2:DescribeVolumes",\n        "ec2:DescribeSnapshots"\n      ],\n      "Resource": "*"\n    }\n  ]\n}\n')))}N.isMDXComponent=!0}}]);