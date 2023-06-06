"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[72155],{3905:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>m});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),u=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},l=function(e){var t=u(e.components);return n.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),d=u(r),m=a,f=d["".concat(c,".").concat(m)]||d[m]||p[m]||o;return r?n.createElement(f,i(i({ref:t},l),{},{components:r})):n.createElement(f,i({ref:t},l))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var u=2;u<o;u++)i[u]=r[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},38966:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>s,toc:()=>u});var n=r(87462),a=(r(67294),r(3905));const o={title:"EC2 \u8282\u70b9\u6a21\u677f\u914d\u7f6e"},i=void 0,s={unversionedId:"reference-guides/cluster-configuration/downstream-cluster-configuration/node-template-configuration/amazon-ec2",id:"reference-guides/cluster-configuration/downstream-cluster-configuration/node-template-configuration/amazon-ec2",title:"EC2 \u8282\u70b9\u6a21\u677f\u914d\u7f6e",description:"\u6709\u5173 EC2 \u548c\u8282\u70b9\u7684\u66f4\u591a\u8be6\u7ec6\u4fe1\u606f\uff0c\u8bf7\u53c2\u9605 EC2 \u7ba1\u7406\u63a7\u5236\u53f0\u7684\u5b98\u65b9\u6587\u6863\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/reference-guides/cluster-configuration/downstream-cluster-configuration/node-template-configuration/amazon-ec2.md",sourceDirName:"reference-guides/cluster-configuration/downstream-cluster-configuration/node-template-configuration",slug:"/reference-guides/cluster-configuration/downstream-cluster-configuration/node-template-configuration/amazon-ec2",permalink:"/zh/reference-guides/cluster-configuration/downstream-cluster-configuration/node-template-configuration/amazon-ec2",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/docs/reference-guides/cluster-configuration/downstream-cluster-configuration/node-template-configuration/amazon-ec2.md",tags:[],version:"current",lastUpdatedAt:1685574148,formattedLastUpdatedAt:"2023\u5e745\u670831\u65e5",frontMatter:{title:"EC2 \u8282\u70b9\u6a21\u677f\u914d\u7f6e"},sidebar:"tutorialSidebar",previous:{title:"\u8282\u70b9\u6a21\u677f\u914d\u7f6e",permalink:"/zh/pages-for-subheaders/node-template-configuration"},next:{title:"DigitalOcean \u8282\u70b9\u6a21\u677f\u914d\u7f6e",permalink:"/zh/reference-guides/cluster-configuration/downstream-cluster-configuration/node-template-configuration/digitalocean"}},c={},u=[{value:"\u533a\u57df",id:"\u533a\u57df",level:3},{value:"\u4e91\u51ed\u8bc1",id:"\u4e91\u51ed\u8bc1",level:3},{value:"\u9a8c\u8bc1\u548c\u914d\u7f6e\u8282\u70b9",id:"\u9a8c\u8bc1\u548c\u914d\u7f6e\u8282\u70b9",level:3},{value:"\u5b89\u5168\u7ec4",id:"\u5b89\u5168\u7ec4",level:3},{value:"\u5b9e\u4f8b\u9009\u9879",id:"\u5b9e\u4f8b\u9009\u9879",level:3},{value:"\u5f15\u64ce\u9009\u9879",id:"\u5f15\u64ce\u9009\u9879",level:3}],l={toc:u};function p(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"\u6709\u5173 EC2 \u548c\u8282\u70b9\u7684\u66f4\u591a\u8be6\u7ec6\u4fe1\u606f\uff0c\u8bf7\u53c2\u9605 ",(0,a.kt)("a",{parentName:"p",href:"https://aws.amazon.com/ec2"},"EC2 \u7ba1\u7406\u63a7\u5236\u53f0"),"\u7684\u5b98\u65b9\u6587\u6863\u3002"),(0,a.kt)("h3",{id:"\u533a\u57df"},"\u533a\u57df"),(0,a.kt)("p",null,"\u5728",(0,a.kt)("strong",{parentName:"p"},"\u533a\u57df"),"\u5b57\u6bb5\u4e2d\uff0c\u9009\u62e9\u521b\u5efa\u4e91\u51ed\u8bc1\u65f6\u4f7f\u7528\u7684\u540c\u4e00\u533a\u57df\u3002"),(0,a.kt)("h3",{id:"\u4e91\u51ed\u8bc1"},"\u4e91\u51ed\u8bc1"),(0,a.kt)("p",null,"\u4f60\u7684 AWS \u8d26\u6237\u8bbf\u95ee\u4fe1\u606f\uff0c\u5b58\u50a8\u5728",(0,a.kt)("a",{parentName:"p",href:"/zh/reference-guides/user-settings/manage-cloud-credentials"},"\u4e91\u51ed\u8bc1"),"\u4e2d\u3002"),(0,a.kt)("p",null,"\u8bf7\u53c2\u9605 ",(0,a.kt)("a",{parentName:"p",href:"https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_access-keys.html#Using_CreateAccessKey"},"Amazon \u6587\u6863\uff1a\u521b\u5efa\u8bbf\u95ee\u5bc6\u94a5"),"\u6765\u521b\u5efa\u8bbf\u95ee\u5bc6\u94a5\u548c\u5bc6\u6587\u5bc6\u94a5\u3002"),(0,a.kt)("p",null,"\u8bf7\u53c2\u9605 ",(0,a.kt)("a",{parentName:"p",href:"https://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies_create.html#access_policies_create-start"},"Amazon \u6587\u6863\uff1a\u521b\u5efa IAM \u7b56\u7565\uff08\u63a7\u5236\u53f0\uff09"),"\u6765\u521b\u5efa IAM \u7b56\u7565\u3002"),(0,a.kt)("p",null,"\u8bf7\u53c2\u9605 ",(0,a.kt)("a",{parentName:"p",href:"https://docs.aws.amazon.com/IAM/latest/UserGuide/id_users_change-permissions.html#users_change_permissions-add-console"},"Amazon \u6587\u6863\uff1a\u4e3a\u7528\u6237\u6dfb\u52a0\u6743\u9650\uff08\u63a7\u5236\u53f0\uff09"),"\u4e86\u89e3\u5982\u4f55\u7ed1\u5b9a IAM\u3002"),(0,a.kt)("p",null,"\u53c2\u9605\u4e0b\u9762\u7684\u4e09\u4e2a\u793a\u4f8b JSON \u7b56\u7565\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/zh/how-to-guides/new-user-guides/launch-kubernetes-with-rancher/use-new-nodes-in-an-infra-provider/create-an-amazon-ec2-cluster#iam-%E7%AD%96%E7%95%A5%E7%A4%BA%E4%BE%8B"},"IAM \u7b56\u7565\u793a\u4f8b")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/zh/how-to-guides/new-user-guides/launch-kubernetes-with-rancher/use-new-nodes-in-an-infra-provider/create-an-amazon-ec2-cluster#%E5%B8%A6%E6%9C%89-passrole-%E7%9A%84-iam-%E7%AD%96%E7%95%A5%E7%A4%BA%E4%BE%8B"},"\u5e26\u6709 PassRole \u7684 IAM \u7b56\u7565\u793a\u4f8b"),"\uff08\u5982\u679c\u8981\u4f7f\u7528 ",(0,a.kt)("a",{parentName:"li",href:"/zh/pages-for-subheaders/set-up-cloud-providers"},"Kubernetes \u4e91\u63d0\u4f9b\u5546"),"\uff0c\u6216\u5c06 IAM \u914d\u7f6e\u6587\u4ef6\u4f20\u9012\u7ed9\u5b9e\u4f8b\uff0c\u5219\u9700\u8981\uff09"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/zh/how-to-guides/new-user-guides/launch-kubernetes-with-rancher/use-new-nodes-in-an-infra-provider/create-an-amazon-ec2-cluster#%E5%85%81%E8%AE%B8%E5%8A%A0%E5%AF%86-ebs-%E5%8D%B7%E7%9A%84-iam-%E7%AD%96%E7%95%A5%E7%A4%BA%E4%BE%8B"},"\u5141\u8bb8\u7528\u6237\u52a0\u5bc6 EBS \u5377\u7684 IAM \u7b56\u7565\u793a\u4f8b"))),(0,a.kt)("h3",{id:"\u9a8c\u8bc1\u548c\u914d\u7f6e\u8282\u70b9"},"\u9a8c\u8bc1\u548c\u914d\u7f6e\u8282\u70b9"),(0,a.kt)("p",null,"\u4e3a\u96c6\u7fa4\u9009\u62e9\u53ef\u7528\u533a\u548c\u7f51\u7edc\u8bbe\u7f6e\u3002"),(0,a.kt)("h3",{id:"\u5b89\u5168\u7ec4"},"\u5b89\u5168\u7ec4"),(0,a.kt)("p",null,"\u9009\u62e9\u9ed8\u8ba4\u5b89\u5168\u7ec4\u6216\u914d\u7f6e\u5b89\u5168\u7ec4\u3002"),(0,a.kt)("p",null,"\u8bf7\u53c2\u8003",(0,a.kt)("a",{parentName:"p",href:"/zh/getting-started/installation-and-upgrade/installation-requirements/port-requirements#rancher-aws-ec2-%E5%AE%89%E5%85%A8%E7%BB%84"},"\u4f7f\u7528\u4e3b\u673a\u9a71\u52a8\u65f6\u7684 Amazon EC2 \u5b89\u5168\u7ec4"),"\uff0c\u4e86\u89e3 ",(0,a.kt)("inlineCode",{parentName:"p"},"rancher-nodes")," \u5b89\u5168\u7ec4\u4e2d\u521b\u5efa\u7684\u89c4\u5219\u3002"),(0,a.kt)("hr",null),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("em",{parentName:"strong"},"v2.6.4 \u7684\u65b0\u529f\u80fd"))),(0,a.kt)("p",null,"\u5982\u679c\u4f60\u81ea\u884c\u4e3a EC2 \u5b9e\u4f8b\u63d0\u4f9b\u5b89\u5168\u7ec4\uff0cRancher \u4e0d\u4f1a\u5bf9\u5176\u8fdb\u884c\u4fee\u6539\u3002\u56e0\u6b64\uff0c\u4f60\u9700\u8981\u8ba9\u4f60\u7684\u5b89\u5168\u7ec4\u5141\u8bb8 ",(0,a.kt)("a",{parentName:"p",href:"/zh/getting-started/installation-and-upgrade/installation-requirements/port-requirements#rke-%E4%B8%8A-rancher-server-%E8%8A%82%E7%82%B9%E7%9A%84%E7%AB%AF%E5%8F%A3"},"Rancher \u914d\u7f6e\u5b9e\u4f8b\u6240\u9700\u7684\u7aef\u53e3"),"\u3002\u6709\u5173\u4f7f\u7528\u5b89\u5168\u7ec4\u63a7\u5236 EC2 \u5b9e\u4f8b\u7684\u5165\u7ad9\u548c\u51fa\u7ad9\u6d41\u91cf\u7684\u66f4\u591a\u4fe1\u606f\uff0c\u8bf7\u53c2\u9605",(0,a.kt)("a",{parentName:"p",href:"https://docs.aws.amazon.com/vpc/latest/userguide/VPC_SecurityGroups.html#WorkingWithSecurityGroups"},"\u8fd9\u91cc"),"\u3002"),(0,a.kt)("h3",{id:"\u5b9e\u4f8b\u9009\u9879"},"\u5b9e\u4f8b\u9009\u9879"),(0,a.kt)("p",null,"\u914d\u7f6e\u8981\u521b\u5efa\u7684\u5b9e\u4f8b\u3002\u786e\u4fdd\u4e3a AMI \u914d\u7f6e\u6b63\u786e\u7684 ",(0,a.kt)("strong",{parentName:"p"},"SSH \u7528\u6237"),"\u3002\u6240\u9009\u7684\u533a\u57df\u53ef\u80fd\u4e0d\u652f\u6301\u9ed8\u8ba4\u5b9e\u4f8b\u7c7b\u578b\u3002\u5728\u8fd9\u79cd\u60c5\u51b5\u4e0b\uff0c\u4f60\u5fc5\u987b\u9009\u62e9\u4e00\u4e2a\u786e\u5b9e\u5b58\u5728\u7684\u5b9e\u4f8b\u7c7b\u578b\u3002\u5426\u5219\u5c06\u51fa\u73b0\u9519\u8bef\uff0c\u8868\u793a\u8bf7\u6c42\u7684\u914d\u7f6e\u4e0d\u53d7\u652f\u6301\u3002"),(0,a.kt)("p",null,"\u5982\u679c\u9700\u8981\u4f20\u9012 ",(0,a.kt)("strong",{parentName:"p"},"IAM \u793a\u4f8b\u914d\u7f6e\u540d\u79f0"),"\uff08\u4e0d\u662f ARN\uff09\uff0c\u4f8b\u5982\u8981\u4f7f\u7528 ",(0,a.kt)("a",{parentName:"p",href:"/zh/pages-for-subheaders/set-up-cloud-providers"},"Kubernetes \u4e91\u63d0\u4f9b\u5546"),"\u65f6\uff0c\u7b56\u7565\u5219\u9700\u8981\u5176\u4ed6\u6743\u9650\u3002\u6709\u5173\u793a\u4f8b\u7b56\u7565\uff0c\u8bf7\u53c2\u9605",(0,a.kt)("a",{parentName:"p",href:"/zh/how-to-guides/new-user-guides/launch-kubernetes-with-rancher/use-new-nodes-in-an-infra-provider/create-an-amazon-ec2-cluster#%E5%B8%A6%E6%9C%89-passrole-%E7%9A%84-iam-%E7%AD%96%E7%95%A5%E7%A4%BA%E4%BE%8B"},"\u5e26\u6709 PassRole \u7684 IAM \u7b56\u7565\u793a\u4f8b"),"\u3002"),(0,a.kt)("h3",{id:"\u5f15\u64ce\u9009\u9879"},"\u5f15\u64ce\u9009\u9879"),(0,a.kt)("p",null,"\u5728\u8282\u70b9\u6a21\u677f\u7684",(0,a.kt)("strong",{parentName:"p"},"\u5f15\u64ce\u9009\u9879"),"\u4e2d\uff0c\u4f60\u53ef\u4ee5\u914d\u7f6e\u5bb9\u5668 daemon\u3002\u4f60\u53ef\u80fd\u9700\u8981\u6307\u5b9a\u5bb9\u5668\u7248\u672c\u6216\u5bb9\u5668\u955c\u50cf\u4ed3\u5e93 Mirror\u3002"))}p.isMDXComponent=!0}}]);