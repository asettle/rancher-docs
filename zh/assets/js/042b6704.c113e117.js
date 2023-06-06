"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[6259],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),s=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},k={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,p=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),c=s(n),m=a,d=c["".concat(p,".").concat(m)]||c[m]||k[m]||l;return n?r.createElement(d,i(i({ref:t},u),{},{components:n})):r.createElement(d,i({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,i=new Array(l);i[0]=c;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var s=2;s<l;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},10582:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>k,frontMatter:()=>l,metadata:()=>o,toc:()=>s});var r=n(87462),a=(n(67294),n(3905));const l={title:"\u6ce8\u518c\u73b0\u6709\u96c6\u7fa4"},i=void 0,o={unversionedId:"how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/register-existing-clusters",id:"how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/register-existing-clusters",title:"\u6ce8\u518c\u73b0\u6709\u96c6\u7fa4",description:"\u96c6\u7fa4\u6ce8\u518c\u529f\u80fd\u53d6\u4ee3\u4e86\u5bfc\u5165\u96c6\u7fa4\u7684\u529f\u80fd\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/register-existing-clusters.md",sourceDirName:"how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup",slug:"/how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/register-existing-clusters",permalink:"/zh/how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/register-existing-clusters",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/docs/how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/register-existing-clusters.md",tags:[],version:"current",lastUpdatedAt:1683884717,formattedLastUpdatedAt:"2023\u5e745\u670812\u65e5",frontMatter:{title:"\u6ce8\u518c\u73b0\u6709\u96c6\u7fa4"},sidebar:"tutorialSidebar",previous:{title:"\u5c06 vSphere \u6811\u5185\u5377\u8fc1\u79fb\u5230 CSI",permalink:"/zh/how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/set-up-cloud-providers/migrate-from-in-tree-to-out-of-tree"},next:{title:"\u4f7f\u7528 Rancher \u542f\u52a8 Kubernetes",permalink:"/zh/pages-for-subheaders/launch-kubernetes-with-rancher"}},p={},s=[{value:"\u5148\u51b3\u6761\u4ef6",id:"\u5148\u51b3\u6761\u4ef6",level:2},{value:"Kubernetes \u8282\u70b9\u89d2\u8272",id:"kubernetes-\u8282\u70b9\u89d2\u8272",level:3},{value:"\u6743\u9650",id:"\u6743\u9650",level:3},{value:"EKS\u3001AKS \u548c GKE \u96c6\u7fa4",id:"eksaks-\u548c-gke-\u96c6\u7fa4",level:3},{value:"\u6ce8\u518c\u96c6\u7fa4",id:"\u6ce8\u518c\u96c6\u7fa4",level:2},{value:"\u4f7f\u7528 Terraform \u914d\u7f6e\u5bfc\u5165\u7684 EKS\u3001AKS \u6216 GKE \u96c6\u7fa4",id:"\u4f7f\u7528-terraform-\u914d\u7f6e\u5bfc\u5165\u7684-eksaks-\u6216-gke-\u96c6\u7fa4",level:3},{value:"\u5bf9\u6ce8\u518c\u96c6\u7fa4\u7684\u7ba1\u7406\u80fd\u529b",id:"\u5bf9\u6ce8\u518c\u96c6\u7fa4\u7684\u7ba1\u7406\u80fd\u529b",level:2},{value:"\u6240\u6709\u5df2\u6ce8\u518c\u96c6\u7fa4\u7684\u529f\u80fd",id:"\u6240\u6709\u5df2\u6ce8\u518c\u96c6\u7fa4\u7684\u529f\u80fd",level:3},{value:"\u5df2\u6ce8\u518c RKE2 \u548c K3s \u96c6\u7fa4\u7684\u9644\u52a0\u529f\u80fd",id:"\u5df2\u6ce8\u518c-rke2-\u548c-k3s-\u96c6\u7fa4\u7684\u9644\u52a0\u529f\u80fd",level:3},{value:"\u5df2\u6ce8\u518c EKS, AKS \u548c GKE \u96c6\u7fa4\u7684\u9644\u52a0\u529f\u80fd",id:"\u5df2\u6ce8\u518c-eks-aks-\u548c-gke-\u96c6\u7fa4\u7684\u9644\u52a0\u529f\u80fd",level:3},{value:"\u914d\u7f6e RKE2 \u548c K3s \u96c6\u7fa4\u5347\u7ea7",id:"\u914d\u7f6e-rke2-\u548c-k3s-\u96c6\u7fa4\u5347\u7ea7",level:2},{value:"\u5df2\u6ce8\u518c RKE2 \u548c K3s \u96c6\u7fa4\u7684 Logging \u8c03\u8bd5\u548c\u6545\u969c\u6392\u9664",id:"\u5df2\u6ce8\u518c-rke2-\u548c-k3s-\u96c6\u7fa4\u7684-logging-\u8c03\u8bd5\u548c\u6545\u969c\u6392\u9664",level:2},{value:"\u5bf9 RKE2 \u548c K3s \u96c6\u7fa4\u7684\u6388\u6743\u96c6\u7fa4\u7aef\u70b9\u652f\u6301",id:"\u5bf9-rke2-\u548c-k3s-\u96c6\u7fa4\u7684\u6388\u6743\u96c6\u7fa4\u7aef\u70b9\u652f\u6301",level:2},{value:"<strong>\u5728\u6bcf\u4e2a\u4e0b\u6e38\u96c6\u7fa4\u7684 controlplane \u4e0a\u542f\u7528 ACE \u7684\u624b\u52a8\u6267\u884c\u6b65\u9aa4</strong>\uff1a",id:"\u5728\u6bcf\u4e2a\u4e0b\u6e38\u96c6\u7fa4\u7684-controlplane-\u4e0a\u542f\u7528-ace-\u7684\u624b\u52a8\u6267\u884c\u6b65\u9aa4",level:6},{value:"\u6ce8\u91ca\u5df2\u6ce8\u518c\u7684\u96c6\u7fa4",id:"\u6ce8\u91ca\u5df2\u6ce8\u518c\u7684\u96c6\u7fa4",level:2}],u={toc:s};function k(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"\u96c6\u7fa4\u6ce8\u518c\u529f\u80fd\u53d6\u4ee3\u4e86\u5bfc\u5165\u96c6\u7fa4\u7684\u529f\u80fd\u3002"),(0,a.kt)("p",null,"Rancher \u7ba1\u7406\u6ce8\u518c\u96c6\u7fa4\u7684\u8303\u56f4\u53d6\u51b3\u4e8e\u96c6\u7fa4\u7684\u7c7b\u578b\u3002\u8be6\u60c5\u8bf7\u53c2\u89c1",(0,a.kt)("a",{parentName:"p",href:"#%E5%AF%B9%E6%B3%A8%E5%86%8C%E9%9B%86%E7%BE%A4%E7%9A%84%E7%AE%A1%E7%90%86%E8%83%BD%E5%8A%9B"},"\u5bf9\u6ce8\u518c\u96c6\u7fa4\u7684\u7ba1\u7406\u80fd\u529b"),"\u3002"),(0,a.kt)("h2",{id:"\u5148\u51b3\u6761\u4ef6"},"\u5148\u51b3\u6761\u4ef6"),(0,a.kt)("h3",{id:"kubernetes-\u8282\u70b9\u89d2\u8272"},"Kubernetes \u8282\u70b9\u89d2\u8272"),(0,a.kt)("p",null,"\u5df2\u6ce8\u518c\u7684 RKE Kubernetes \u96c6\u7fa4\u5fc5\u987b\u5177\u6709\u6240\u6709\u4e09\u4e2a\u8282\u70b9\u89d2\u8272\uff0c\u5206\u522b\u662f etcd\u3001controlplane \u548c worker\u3002\u53ea\u6709 controlplane \u7ec4\u4ef6\u7684\u96c6\u7fa4\u65e0\u6cd5\u5728 Rancher \u4e2d\u6ce8\u518c\u3002"),(0,a.kt)("p",null,"\u6709\u5173 RKE \u8282\u70b9\u89d2\u8272\u7684\u66f4\u591a\u4fe1\u606f\uff0c\u8bf7\u53c2\u9605",(0,a.kt)("a",{parentName:"p",href:"/zh/pages-for-subheaders/checklist-for-production-ready-clusters#%E9%9B%86%E7%BE%A4%E6%9E%B6%E6%9E%84"},"\u6700\u4f73\u5b9e\u8df5"),"\u3002"),(0,a.kt)("h3",{id:"\u6743\u9650"},"\u6743\u9650"),(0,a.kt)("p",null,"\u8981\u5728 Rancher \u4e2d\u6ce8\u518c\u96c6\u7fa4\uff0c\u4f60\u5fc5\u987b\u5728\u8be5\u96c6\u7fa4\u4e2d\u62e5\u6709 ",(0,a.kt)("inlineCode",{parentName:"p"},"cluster-admin")," \u6743\u9650\u3002\u5982\u679c\u6ca1\u6709\uff0c\u8bf7\u8fd0\u884c\u4ee5\u4e0b\u547d\u4ee4\u5c06\u6743\u9650\u6388\u4e88\u7528\u6237\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-plain"},"kubectl create clusterrolebinding cluster-admin-binding \\\n  --clusterrole cluster-admin \\\n  --user [USER_ACCOUNT]\n")),(0,a.kt)("p",null,"\u7531\u4e8e\u9ed8\u8ba4\u60c5\u51b5\u4e0b Google Kubernetes Engine (GKE) \u4e0d\u6388\u4e88 ",(0,a.kt)("inlineCode",{parentName:"p"},"cluster-admin")," \u89d2\u8272\uff0c\u56e0\u6b64\u4f60\u5fc5\u987b\u5148\u5728 GKE \u96c6\u7fa4\u4e0a\u8fd0\u884c\u547d\u4ee4\uff0c\u7136\u540e\u624d\u80fd\u6ce8\u518c\u3002\u8981\u8be6\u7ec6\u4e86\u89e3 GKE RBAC\uff0c\u8bf7\u53c2\u9605 ",(0,a.kt)("a",{parentName:"p",href:"https://cloud.google.com/kubernetes-engine/docs/how-to/role-based-access-control"},"Google \u5b98\u65b9\u6587\u6863"),"\u3002"),(0,a.kt)("h3",{id:"eksaks-\u548c-gke-\u96c6\u7fa4"},"EKS\u3001AKS \u548c GKE \u96c6\u7fa4"),(0,a.kt)("p",null,"\u8981\u6210\u529f\u5c06\u8fd9\u4e9b\u96c6\u7fa4\u5bfc\u5165 Rancher \u6216\u4ece Rancher \u4e2d\u914d\u7f6e\u5b83\u4eec\uff0cElastic Kubernetes Service (EKS)\u3001Azure Kubernetes Service (AKS) \u548c Google Kubernetes Engine (GKE) \u96c6\u7fa4\u5fc5\u987b\u81f3\u5c11\u6709\u4e00\u4e2a\u6258\u7ba1\u8282\u70b9\u7ec4\u3002"),(0,a.kt)("h2",{id:"\u6ce8\u518c\u96c6\u7fa4"},"\u6ce8\u518c\u96c6\u7fa4"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"\u70b9\u51fb ",(0,a.kt)("strong",{parentName:"li"},"\u2630 > \u96c6\u7fa4\u7ba1\u7406"),"\u3002"),(0,a.kt)("li",{parentName:"ol"},"\u5728",(0,a.kt)("strong",{parentName:"li"},"\u96c6\u7fa4"),"\u9875\u9762\u4e0a\uff0c\u5355\u51fb",(0,a.kt)("strong",{parentName:"li"},"\u5bfc\u5165\u96c6\u7fa4"),"\u3002"),(0,a.kt)("li",{parentName:"ol"},"\u9009\u62e9\u96c6\u7fa4\u7c7b\u578b\u3002"),(0,a.kt)("li",{parentName:"ol"},"\u4f7f\u7528",(0,a.kt)("strong",{parentName:"li"},"\u6210\u5458\u89d2\u8272"),"\u4e3a\u96c6\u7fa4\u914d\u7f6e\u7528\u6237\u6388\u6743\u3002\u70b9\u51fb",(0,a.kt)("strong",{parentName:"li"},"\u6dfb\u52a0\u6210\u5458"),"\u6dfb\u52a0\u53ef\u4ee5\u8bbf\u95ee\u96c6\u7fa4\u7684\u7528\u6237\u3002\u4f7f\u7528",(0,a.kt)("strong",{parentName:"li"},"\u89d2\u8272"),"\u4e0b\u62c9\u83dc\u5355\u4e3a\u6bcf\u4e2a\u7528\u6237\u8bbe\u7f6e\u6743\u9650\u3002"),(0,a.kt)("li",{parentName:"ol"},"\u5982\u679c\u4f60\u5728 Rancher \u4e2d\u5bfc\u5165\u4e00\u4e2a\u901a\u7528 Kubernetes \u96c6\u7fa4\uff0c\u8bf7\u6267\u884c\u4ee5\u4e0b\u6b65\u9aa4\uff1a",(0,a.kt)("br",null),"\na. \u70b9\u51fb",(0,a.kt)("strong",{parentName:"li"},"\u96c6\u7fa4\u9009\u9879"),"\u4e0b\u7684 ",(0,a.kt)("strong",{parentName:"li"},"Agent \u73af\u5883\u53d8\u91cf"),"\uff0c\u4e3a ",(0,a.kt)("a",{parentName:"li",href:"/zh/how-to-guides/new-user-guides/launch-kubernetes-with-rancher/about-rancher-agents"},"rancher cluster agent")," \u8bbe\u7f6e\u73af\u5883\u53d8\u91cf\u3002\u4f60\u53ef\u4ee5\u4f7f\u7528\u952e\u503c\u5bf9\u8bbe\u7f6e\u73af\u5883\u53d8\u91cf\u3002\u5982\u679c Rancher Agent \u9700\u8981\u4f7f\u7528\u4ee3\u7406\u4e0e Rancher Server \u901a\u4fe1\uff0c\u5219\u53ef\u4ee5\u4f7f\u7528 Agent \u73af\u5883\u53d8\u91cf\u8bbe\u7f6e ",(0,a.kt)("inlineCode",{parentName:"li"},"HTTP_PROXY"),"\uff0c",(0,a.kt)("inlineCode",{parentName:"li"},"HTTPS_PROXY")," \u548c ",(0,a.kt)("inlineCode",{parentName:"li"},"NO_PROXY")," \u73af\u5883\u53d8\u91cf\u3002",(0,a.kt)("br",null),"\nb. \u542f\u7528\u9879\u76ee\u7f51\u7edc\u9694\u79bb\uff0c\u786e\u4fdd\u96c6\u7fa4\u652f\u6301 Kubernetes ",(0,a.kt)("inlineCode",{parentName:"li"},"NetworkPolicy")," \u8d44\u6e90\u3002\u7528\u6237\u53ef\u4ee5\u901a\u8fc7",(0,a.kt)("strong",{parentName:"li"},"\u9879\u76ee\u7f51\u7edc\u9694\u79bb"),"\u9009\u9879\u4e0b\u7684",(0,a.kt)("strong",{parentName:"li"},"\u9ad8\u7ea7\u9009\u9879"),"\u4e0b\u62c9\u83dc\u5355\u8fdb\u884c\u64cd\u4f5c\u3002"),(0,a.kt)("li",{parentName:"ol"},"\u5355\u51fb",(0,a.kt)("strong",{parentName:"li"},"\u521b\u5efa"),"\u3002"),(0,a.kt)("li",{parentName:"ol"},"\u6b64\u5904\u4f1a\u663e\u793a ",(0,a.kt)("inlineCode",{parentName:"li"},"cluster-admin")," \u6743\u9650\u7684\u5148\u51b3\u6761\u4ef6\uff08\u53c2\u89c1\u4e0a\u6587\u7684",(0,a.kt)("strong",{parentName:"li"},"\u5148\u51b3\u6761\u4ef6"),"\uff09\uff0c\u5176\u4e2d\u5305\u62ec\u6ee1\u8db3\u5148\u51b3\u6761\u4ef6\u7684\u793a\u4f8b\u547d\u4ee4\u3002"),(0,a.kt)("li",{parentName:"ol"},"\u5c06 ",(0,a.kt)("inlineCode",{parentName:"li"},"kubectl")," \u547d\u4ee4\u590d\u5236\u5230\u526a\u8d34\u677f\uff0c\u5e76\u5728\u914d\u7f6e\u4e86 kubeconfig \u7684\u8282\u70b9\u4e0a\u8fd0\u884c\u8be5\u547d\u4ee4\uff0c\u4ece\u800c\u6307\u5411\u8981\u5bfc\u5165\u7684\u96c6\u7fa4\u3002\u5982\u679c\u4f60\u4e0d\u786e\u5b9a\u914d\u7f6e\u662f\u5426\u6b63\u786e\uff0c\u8bf7\u5728\u8fd0\u884c Rancher \u663e\u793a\u7684\u547d\u4ee4\u4e4b\u524d\u8fd0\u884c ",(0,a.kt)("inlineCode",{parentName:"li"},"kubectl get nodes")," \u8fdb\u884c\u9a8c\u8bc1\u3002"),(0,a.kt)("li",{parentName:"ol"},"\u5982\u679c\u4f60\u4f7f\u7528\u81ea\u7b7e\u540d\u8bc1\u4e66\uff0c\u4f60\u5c06\u6536\u5230 ",(0,a.kt)("inlineCode",{parentName:"li"},"certificate signed by unknown authority")," \u7684\u6d88\u606f\u3002\u8981\u89e3\u51b3\u6b64\u9a8c\u8bc1\u95ee\u9898\uff0c\u8bf7\u5c06 Rancher \u4e2d\u663e\u793a\u7684\u4ee5 ",(0,a.kt)("inlineCode",{parentName:"li"},"curl")," \u5f00\u5934\u7684\u547d\u4ee4\u590d\u5236\u5230\u526a\u8d34\u677f\u3002\u7136\u540e\u5728\u914d\u7f6e\u4e86 kubeconfig \u7684\u8282\u70b9\u4e0a\u8fd0\u884c\u8be5\u547d\u4ee4\uff0c\u4ece\u800c\u6307\u5411\u8981\u5bfc\u5165\u7684\u96c6\u7fa4\u3002"),(0,a.kt)("li",{parentName:"ol"},"\u5728\u8282\u70b9\u4e0a\u8fd0\u884c\u5b8c\u547d\u4ee4\u540e\uff0c\u5355\u51fb",(0,a.kt)("strong",{parentName:"li"},"\u5b8c\u6210"),"\u3002")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u7ed3\u679c"),"\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u96c6\u7fa4\u5df2\u6ce8\u518c\u5e76\u5206\u914d\u4e86 ",(0,a.kt)("strong",{parentName:"li"},"Pending")," \u72b6\u6001\u3002Rancher \u6b63\u5728\u90e8\u7f72\u8d44\u6e90\u6765\u7ba1\u7406\u4f60\u7684\u96c6\u7fa4\u3002"),(0,a.kt)("li",{parentName:"ul"},"\u5f53\u96c6\u7fa4\u72b6\u6001\u53d8\u4e3a ",(0,a.kt)("strong",{parentName:"li"},"Active")," \u540e\uff0c\u4f60\u53ef\u8bbf\u95ee\u96c6\u7fa4\u3002"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Active")," \u96c6\u7fa4\u5206\u914d\u4e86\u4e24\u4e2a\u9879\u76ee\uff0c\u5206\u522b\u662f ",(0,a.kt)("inlineCode",{parentName:"li"},"Default"),"\uff08\u5305\u542b\u547d\u540d\u7a7a\u95f4 ",(0,a.kt)("inlineCode",{parentName:"li"},"default"),"\uff09\u548c ",(0,a.kt)("inlineCode",{parentName:"li"},"System"),"\uff08\u5305\u542b\u547d\u540d\u7a7a\u95f4 ",(0,a.kt)("inlineCode",{parentName:"li"},"cattle-system"),"\u3001",(0,a.kt)("inlineCode",{parentName:"li"},"ingress-nginx"),"\u3001",(0,a.kt)("inlineCode",{parentName:"li"},"kube-public")," \u548c ",(0,a.kt)("inlineCode",{parentName:"li"},"kube-system"),"\uff09\u3002")),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"\u65e0\u6cd5\u91cd\u65b0\u6ce8\u518c\u5f53\u524d\u5728 Rancher \u4e2d\u5904\u4e8e Active \u72b6\u6001\u7684\u96c6\u7fa4\u3002")),(0,a.kt)("h3",{id:"\u4f7f\u7528-terraform-\u914d\u7f6e\u5bfc\u5165\u7684-eksaks-\u6216-gke-\u96c6\u7fa4"},"\u4f7f\u7528 Terraform \u914d\u7f6e\u5bfc\u5165\u7684 EKS\u3001AKS \u6216 GKE \u96c6\u7fa4"),(0,a.kt)("p",null,"\u4f60",(0,a.kt)("strong",{parentName:"p"},"\u4ec5"),"\u9700\u8981\u5b9a\u4e49 Rancher \u4f7f\u7528 Terraform \u5bfc\u5165 EKS\u3001AKS \u6216 GKE \u96c6\u7fa4\u6240\u9700\u7684\u6700\u5c11\u5b57\u6bb5\u3002\u8bf7\u8c28\u8bb0\u8fd9\u70b9\uff0c\u56e0\u4e3a Rancher \u4f1a\u4f7f\u7528\u7528\u6237\u63d0\u4f9b\u7684\u4efb\u4f55\u914d\u7f6e\u8986\u76d6\u96c6\u7fa4\u7684\u914d\u7f6e\u3002"),(0,a.kt)("admonition",{type:"caution"},(0,a.kt)("p",{parentName:"admonition"},"\u5373\u4f7f\u5f53\u524d\u96c6\u7fa4\u7684\u914d\u7f6e\u4e0e\u7528\u6237\u63d0\u4f9b\u7684\u914d\u7f6e\u4e4b\u95f4\u53ea\u5b58\u5728\u5fae\u5c0f\u5dee\u5f02\uff0c\u4f46\u662f\u5fae\u5c0f\u7684\u5dee\u5f02\u4e5f\u6709\u53ef\u80fd\u4ea7\u751f\u5f88\u5927\u7684\u5f71\u54cd\u3002")),(0,a.kt)("p",null,"Rancher \u901a\u8fc7 ",(0,a.kt)("inlineCode",{parentName:"p"},"eks_config_v2")," \u4f7f\u7528 Terraform \u5bfc\u5165 EKS \u96c6\u7fa4\u6240\u9700\u7684\u6700\u5c11\u914d\u7f6e\u5b57\u6bb5\u5982\u4e0b\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"cloud_credential_id"),(0,a.kt)("li",{parentName:"ul"},"name"),(0,a.kt)("li",{parentName:"ul"},"region"),(0,a.kt)("li",{parentName:"ul"},"imported \uff08\u5bf9\u4e8e\u5bfc\u5165\u7684\u96c6\u7fa4\uff0c\u6b64\u5b57\u6bb5\u5e94\u59cb\u7ec8\u8bbe\u7f6e\u4e3a ",(0,a.kt)("inlineCode",{parentName:"li"},"true"),"\uff09")),(0,a.kt)("p",null,"\u5bfc\u5165\u7684 EKS \u96c6\u7fa4\u7684\u793a\u4f8b YAML \u914d\u7f6e\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'resource "rancher2_cluster" "my-eks-to-import" {\n  name        = "my-eks-to-import"\n  description = "Terraform EKS Cluster"\n  eks_config_v2 {\n    cloud_credential_id = rancher2_cloud_credential.aws.id\n    name                = var.aws_eks_name\n    region              = var.aws_region\n    imported            = true\n  }\n}\n')),(0,a.kt)("p",null,"\u4f60\u53ef\u4ee5\u5728 ",(0,a.kt)("a",{parentName:"p",href:"https://registry.terraform.io/providers/rancher/rancher2/latest/docs/resources/cluster"},"Rancher2 Terraform Provider \u6587\u6863"),"\u4e2d\u627e\u5230\u5176\u4ed6\u4e91\u63d0\u4f9b\u5546\u7684\u66f4\u591a\u793a\u4f8b\u3002"),(0,a.kt)("h2",{id:"\u5bf9\u6ce8\u518c\u96c6\u7fa4\u7684\u7ba1\u7406\u80fd\u529b"},"\u5bf9\u6ce8\u518c\u96c6\u7fa4\u7684\u7ba1\u7406\u80fd\u529b"),(0,a.kt)("p",null,"Rancher \u7ba1\u7406\u6ce8\u518c\u96c6\u7fa4\u7684\u8303\u56f4\u53d6\u51b3\u4e8e\u96c6\u7fa4\u7684\u7c7b\u578b\u3002"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#%E6%89%80%E6%9C%89%E5%B7%B2%E6%B3%A8%E5%86%8C%E9%9B%86%E7%BE%A4%E7%9A%84%E5%8A%9F%E8%83%BD"},"\u6240\u6709\u5df2\u6ce8\u518c\u96c6\u7fa4\u7684\u529f\u80fd")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#%E5%B7%B2%E6%B3%A8%E5%86%8C-rke2-%E5%92%8C-k3s-%E9%9B%86%E7%BE%A4%E7%9A%84%E9%99%84%E5%8A%A0%E5%8A%9F%E8%83%BD"},"\u5df2\u6ce8\u518c RKE2 \u548c K3s \u96c6\u7fa4\u7684\u9644\u52a0\u529f\u80fd")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#%E5%B7%B2%E6%B3%A8%E5%86%8C-eks-aks-%E5%92%8C-gke-%E9%9B%86%E7%BE%A4%E7%9A%84%E9%99%84%E5%8A%A0%E5%8A%9F%E8%83%BD"},"\u5df2\u6ce8\u518c EKS, AKS \u548c GKE \u96c6\u7fa4\u7684\u9644\u52a0\u529f\u80fd"))),(0,a.kt)("h3",{id:"\u6240\u6709\u5df2\u6ce8\u518c\u96c6\u7fa4\u7684\u529f\u80fd"},"\u6240\u6709\u5df2\u6ce8\u518c\u96c6\u7fa4\u7684\u529f\u80fd"),(0,a.kt)("p",null,"\u6ce8\u518c\u96c6\u7fa4\u540e\uff0c\u96c6\u7fa4\u6240\u6709\u8005\u53ef\u4ee5\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u901a\u8fc7 RBAC ",(0,a.kt)("a",{parentName:"li",href:"/zh/how-to-guides/new-user-guides/authentication-permissions-and-global-configuration/manage-role-based-access-control-rbac/cluster-and-project-roles"},"\u7ba1\u7406\u96c6\u7fa4\u8bbf\u95ee")),(0,a.kt)("li",{parentName:"ul"},"\u542f\u7528",(0,a.kt)("a",{parentName:"li",href:"/zh/pages-for-subheaders/monitoring-and-alerting"},"Monitoring\u3001\u544a\u8b66\u548c Notifiers")),(0,a.kt)("li",{parentName:"ul"},"\u542f\u7528 ",(0,a.kt)("a",{parentName:"li",href:"/zh/pages-for-subheaders/logging"},"Logging")),(0,a.kt)("li",{parentName:"ul"},"\u542f\u7528 ",(0,a.kt)("a",{parentName:"li",href:"/zh/pages-for-subheaders/istio"},"Istio")),(0,a.kt)("li",{parentName:"ul"},"\u7ba1\u7406\u9879\u76ee\u548c\u5de5\u4f5c\u8d1f\u8f7d")),(0,a.kt)("h3",{id:"\u5df2\u6ce8\u518c-rke2-\u548c-k3s-\u96c6\u7fa4\u7684\u9644\u52a0\u529f\u80fd"},"\u5df2\u6ce8\u518c RKE2 \u548c K3s \u96c6\u7fa4\u7684\u9644\u52a0\u529f\u80fd"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://rancher.com/docs/k3s/latest/en/"},"K3s")," \u662f\u7528\u4e8e\u8fb9\u7f18\u5b89\u88c5\u7684\u8f7b\u91cf\u7ea7\u3001\u5b8c\u5168\u517c\u5bb9\u7684 Kubernetes \u53d1\u884c\u7248\u3002\n",(0,a.kt)("a",{parentName:"p",href:"https://docs.rke2.io"},"RKE2")," \u662f Rancher \u7528\u4e8e\u6570\u636e\u4e2d\u5fc3\u548c\u4e91\u5b89\u88c5\u7684\u4e0b\u4e00\u4ee3 Kubernetes \u53d1\u884c\u7248\u3002"),(0,a.kt)("p",null,"RKE2 \u6216 K3s \u96c6\u7fa4\u6ce8\u518c\u5230 Rancher \u540e\uff0cRancher \u4f1a\u8bc6\u522b\u5b83\u3002Rancher UI \u5c06\u5f00\u653e",(0,a.kt)("a",{parentName:"p",href:"#%E6%89%80%E6%9C%89%E5%B7%B2%E6%B3%A8%E5%86%8C%E9%9B%86%E7%BE%A4%E7%9A%84%E5%8A%9F%E8%83%BD"},"\u6240\u6709\u5df2\u6ce8\u518c\u96c6\u7fa4"),"\u7684\u529f\u80fd\uff0c\u4ee5\u53ca\u4ee5\u4e0b\u7528\u4e8e\u7f16\u8f91\u548c\u5347\u7ea7\u96c6\u7fa4\u7684\u529f\u80fd\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("a",{parentName:"p",href:"/zh/getting-started/installation-and-upgrade/upgrade-and-roll-back-kubernetes"},"\u5347\u7ea7 Kubernetes \u7248\u672c"),"\u7684\u80fd\u529b"),(0,a.kt)("admonition",{parentName:"li",type:"danger"},(0,a.kt)("p",{parentName:"admonition"},"\u5c06\u96c6\u7fa4\u5bfc\u5165 Rancher \u540e\uff0c\u4f60\u9700\u8981\u4f7f\u7528 Rancher \u6267\u884c\u5347\u7ea7\u3002",(0,a.kt)("strong",{parentName:"p"},"\u4e0d"),"\u652f\u6301\u5728 Rancher \u4e4b\u5916\u5347\u7ea7\u5bfc\u5165\u7684\u96c6\u7fa4\u3002"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\u914d\u7f6e\u80fd\u540c\u65f6\u5347\u7ea7\u7684\u6700\u5927\u8282\u70b9\u6570")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\u67e5\u770b\u96c6\u7fa4\u7684\u914d\u7f6e\u53c2\u6570\u548c\u7528\u4e8e\u542f\u52a8\u96c6\u7fa4\u4e2d\u6bcf\u4e2a\u8282\u70b9\u7684\u73af\u5883\u53d8\u91cf\u7684\u53ea\u8bfb\u7248\u672c"))),(0,a.kt)("h3",{id:"\u5df2\u6ce8\u518c-eks-aks-\u548c-gke-\u96c6\u7fa4\u7684\u9644\u52a0\u529f\u80fd"},"\u5df2\u6ce8\u518c EKS, AKS \u548c GKE \u96c6\u7fa4\u7684\u9644\u52a0\u529f\u80fd"),(0,a.kt)("p",null,"Rancher \u5904\u7406\u6ce8\u518c\u7684 EKS\u3001AKS \u6216 GKE \u96c6\u7fa4\u7684\u65b9\u5f0f\u4e0e\u5904\u7406\u5728 Rancher \u4e2d\u521b\u5efa\u7684\u96c6\u7fa4\u7684\u65b9\u5f0f\u7c7b\u4f3c\u3002\u4f46\u662f\uff0c\u5982\u679c\u4f60\u901a\u8fc7 Rancher UI \u5220\u9664\u5df2\u6ce8\u518c\u7684\u96c6\u7fa4\uff0cRancher \u4e0d\u4f1a\u9500\u6bc1\u8fd9\u4e9b\u96c6\u7fa4\u3002"),(0,a.kt)("p",null,"\u5982\u679c\u4f60\u5728 Rancher \u4e2d\u521b\u5efa EKS\u3001AKS \u6216 GKE \u96c6\u7fa4\uff0c\u7136\u540e\u5c06\u5176\u5220\u9664\uff0cRancher \u4f1a\u9500\u6bc1\u8be5\u96c6\u7fa4\u3002\u901a\u8fc7 Rancher \u5220\u9664\u5df2\u6ce8\u518c\u7684\u96c6\u7fa4\u65f6\uff0cRancher Server \u4f1a",(0,a.kt)("em",{parentName:"p"},"\u65ad\u5f00"),"\u4e0e\u96c6\u7fa4\u7684\u8fde\u63a5\u3002\u8be5\u96c6\u7fa4\u4ecd\u7136\u5b58\u5728\uff0c\u53ea\u662f\u5b83\u4e0d\u518d\u5728 Rancher \u4e2d\u3002\u4f60\u4ecd\u7136\u53ef\u4ee5\u50cf\u6ce8\u518c\u524d\u4e00\u6837\u8bbf\u95ee\u5df2\u6ce8\u9500\u7684\u96c6\u7fa4\u3002"),(0,a.kt)("p",null,"\u6709\u5173\u53ef\u7528\u4e8e\u7ba1\u7406\u5df2\u6ce8\u518c\u96c6\u7fa4\u7684\u529f\u80fd\uff0c\u8bf7\u53c2\u9605",(0,a.kt)("a",{parentName:"p",href:"/zh/pages-for-subheaders/kubernetes-clusters-in-rancher-setup"},"\u6309\u96c6\u7fa4\u7c7b\u578b\u5212\u5206\u7684\u96c6\u7fa4\u7ba1\u7406\u529f\u80fd"),"\u3002"),(0,a.kt)("h2",{id:"\u914d\u7f6e-rke2-\u548c-k3s-\u96c6\u7fa4\u5347\u7ea7"},"\u914d\u7f6e RKE2 \u548c K3s \u96c6\u7fa4\u5347\u7ea7"),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"Kubernetes \u7684\u6700\u4f73\u5b9e\u8df5\u662f\u5728\u5347\u7ea7\u4e4b\u524d\u5907\u4efd\u96c6\u7fa4\u3002\u4f7f\u7528\u5916\u90e8\u6570\u636e\u5e93\u5347\u7ea7\u9ad8\u53ef\u7528 K3s \u96c6\u7fa4\u65f6\uff0c\u8bf7\u4f7f\u7528\u5173\u7cfb\u6570\u636e\u5e93\u63d0\u4f9b\u5546\u63a8\u8350\u7684\u65b9\u5f0f\u5907\u4efd\u6570\u636e\u5e93\u3002")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u5e76\u53d1"),"\u662f\u5347\u7ea7\u671f\u95f4\u5141\u8bb8\u4e0d\u53ef\u7528\u7684\u6700\u5927\u8282\u70b9\u6570\u3002\u5982\u679c\u4e0d\u53ef\u7528\u8282\u70b9\u7684\u6570\u91cf\u5927\u4e8e",(0,a.kt)("strong",{parentName:"p"},"\u5e76\u53d1"),"\uff0c\u5347\u7ea7\u5c06\u5931\u8d25\u3002\u5982\u679c\u5347\u7ea7\u5931\u8d25\uff0c\u4f60\u53ef\u80fd\u9700\u8981\u4fee\u590d\u6216\u79fb\u9664\u5931\u8d25\u7684\u8282\u70b9\uff0c\u7136\u540e\u5347\u7ea7\u624d\u80fd\u6210\u529f\u3002"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"controlplane \u5e76\u53d1"),"\uff1a\u53ef\u4ee5\u540c\u65f6\u5347\u7ea7\u7684\u6700\u5927\u670d\u52a1\u5668\u8282\u70b9\u6570\uff1b\u4e5f\u662f\u6700\u5927\u4e0d\u53ef\u7528\u670d\u52a1\u5668\u8282\u70b9\u6570"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Worker \u5e76\u53d1"),"\uff1a\u53ef\u4ee5\u540c\u65f6\u5347\u7ea7\u7684\u6700\u5927 worker \u8282\u70b9\u6570\uff1b\u4e5f\u662f\u6700\u5927\u4e0d\u53ef\u7528 worker \u8282\u70b9\u6570")),(0,a.kt)("p",null,"\u5728 RKE2 \u548c K3s \u6587\u6863\u4e2d\uff0ccontrol plane \u8282\u70b9\u4e5f\u79f0\u4e3a Server \u8282\u70b9\u3002Kubernetes master \u8282\u70b9\u8fd0\u884c\u5728\u8fd9\u4e9b\u8282\u70b9\u4e0a\uff0c\u7528\u4e8e\u7ef4\u62a4\u96c6\u7fa4\u7684\u72b6\u6001\u3002\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0ccontrol plane \u8282\u70b9\u9ed8\u8ba4\u80fd\u591f\u8ba9\u5de5\u4f5c\u8d1f\u8f7d\u8c03\u5ea6\u5230\u8282\u70b9\u4e0a\u3002"),(0,a.kt)("p",null,"\u7c7b\u4f3c\u7684\uff0c\u5728 RKE2 \u548c K3s \u6587\u6863\u4e2d\uff0c\u5177\u6709 worker \u89d2\u8272\u7684\u8282\u70b9\u79f0\u4e3a Agent \u8282\u70b9\u3002\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0c\u90e8\u7f72\u5728\u96c6\u7fa4\u4e2d\u7684\u4efb\u4f55\u5de5\u4f5c\u8d1f\u8f7d\u6216 Pod \u90fd\u80fd\u8c03\u5ea6\u5230\u8fd9\u4e9b\u8282\u70b9\u4e0a\u3002"),(0,a.kt)("h2",{id:"\u5df2\u6ce8\u518c-rke2-\u548c-k3s-\u96c6\u7fa4\u7684-logging-\u8c03\u8bd5\u548c\u6545\u969c\u6392\u9664"},"\u5df2\u6ce8\u518c RKE2 \u548c K3s \u96c6\u7fa4\u7684 Logging \u8c03\u8bd5\u548c\u6545\u969c\u6392\u9664"),(0,a.kt)("p",null,"\u8282\u70b9\u7531\u8fd0\u884c\u5728\u4e0b\u6e38\u96c6\u7fa4\u4e2d\u7684 ",(0,a.kt)("inlineCode",{parentName:"p"},"system-upgrade-controller")," \u5347\u7ea7\u3002\u57fa\u4e8e\u96c6\u7fa4\u914d\u7f6e\uff0cRancher \u90e8\u7f72\u4e86\u4e24\u4e2a",(0,a.kt)("a",{parentName:"p",href:"https://github.com/rancher/system-upgrade-controller#example-upgrade-plan"},"\u8ba1\u5212"),"\u6765\u5347\u7ea7\u8282\u70b9\uff0c\u5206\u522b\u7528\u4e8e\u5347\u7ea7 control plane \u8282\u70b9\u548c worker \u8282\u70b9\u3002",(0,a.kt)("inlineCode",{parentName:"p"},"system-upgrade-controller")," \u4f1a\u6309\u7167\u8ba1\u5212\u5bf9\u8282\u70b9\u8fdb\u884c\u5347\u7ea7\u3002"),(0,a.kt)("p",null,"\u8981\u5728 ",(0,a.kt)("inlineCode",{parentName:"p"},"system-upgrade-controller")," deployment \u4e0a\u542f\u7528\u8c03\u8bd5\u65e5\u5fd7\u8bb0\u5f55\uff0c\u8bf7\u7f16\u8f91 ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/rancher/system-upgrade-controller/blob/50a4c8975543d75f1d76a8290001d87dc298bdb4/manifests/system-upgrade-controller.yaml#L32"},"configmap")," \u4ee5\u5c06\u8c03\u8bd5\u73af\u5883\u53d8\u91cf\u8bbe\u7f6e\u4e3a true\u3002\u7136\u540e\u91cd\u542f ",(0,a.kt)("inlineCode",{parentName:"p"},"system-upgrade-controller")," pod\u3002"),(0,a.kt)("p",null,"\u4f60\u53ef\u4ee5\u8fd0\u884c\u4ee5\u4e0b\u547d\u4ee4\u67e5\u770b ",(0,a.kt)("inlineCode",{parentName:"p"},"system-upgrade-controller")," \u521b\u5efa\u7684\u65e5\u5fd7\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"kubectl logs -n cattle-system system-upgrade-controller\n")),(0,a.kt)("p",null,"\u8fd0\u884c\u4ee5\u4e0b\u547d\u4ee4\u67e5\u770b\u8ba1\u5212\u7684\u5f53\u524d\u72b6\u6001\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"kubectl get plans -A -o yaml\n")),(0,a.kt)("p",null,"\u5982\u679c\u96c6\u7fa4\u5361\u5728\u5347\u7ea7\u4e2d\uff0c\u8bf7\u91cd\u542f ",(0,a.kt)("inlineCode",{parentName:"p"},"system-upgrade-controller"),"\u3002"),(0,a.kt)("p",null,"\u4e3a\u9632\u6b62\u5347\u7ea7\u65f6\u51fa\u73b0\u95ee\u9898\uff0c\u5e94\u9075\u5faa ",(0,a.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/tasks/administer-cluster/kubeadm/kubeadm-upgrade/"},"Kubernetes \u5347\u7ea7\u6700\u4f73\u5b9e\u8df5"),"\u8fdb\u884c\u64cd\u4f5c\u3002"),(0,a.kt)("h2",{id:"\u5bf9-rke2-\u548c-k3s-\u96c6\u7fa4\u7684\u6388\u6743\u96c6\u7fa4\u7aef\u70b9\u652f\u6301"},"\u5bf9 RKE2 \u548c K3s \u96c6\u7fa4\u7684\u6388\u6743\u96c6\u7fa4\u7aef\u70b9\u652f\u6301"),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"\u4ece v2.6.3 \u8d77\u53ef\u7528")),(0,a.kt)("p",null,"\u6388\u6743\u96c6\u7fa4\u7aef\u70b9 (ACE) \u5df2\u652f\u6301\u6ce8\u518c\u7684 RKE2 \u548c K3s \u96c6\u7fa4\u3002\u6b64\u652f\u6301\u8fd8\u5305\u62ec\u4f60\u5728\u4e0b\u6e38\u96c6\u7fa4\u4e0a\u542f\u7528 ACE \u7684\u624b\u52a8\u6b65\u9aa4\u3002\u6709\u5173\u6388\u6743\u96c6\u7fa4\u7aef\u70b9\u7684\u66f4\u591a\u4fe1\u606f\uff0c\u8bf7\u5355\u51fb",(0,a.kt)("a",{parentName:"p",href:"/zh/how-to-guides/new-user-guides/manage-clusters/access-clusters/authorized-cluster-endpoint"},"\u8fd9\u91cc"),"\u3002"),(0,a.kt)("admonition",{title:"\u6ce8\u610f\u4e8b\u9879\uff1a",type:"note"},(0,a.kt)("ul",{parentName:"admonition"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\u53ea\u9700\u8981\u5728\u4e0b\u6e38\u96c6\u7fa4\u7684 controlplane \u8282\u70b9\u4e0a\u6267\u884c\u8fd9\u4e9b\u6b65\u9aa4\u3002\u4f60\u5fc5\u987b\u5355\u72ec\u914d\u7f6e\u6bcf\u4e2a controlplane \u8282\u70b9\u3002")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\u4ee5\u4e0b\u6b65\u9aa4\u9002\u7528\u4e8e\u5728 v2.6.x \u4e2d\u6ce8\u518c\u7684 RKE2 \u548c K3s \u96c6\u7fa4\uff0c\u4ee5\u53ca\u4ece\u5148\u524d\u7684 Rancher \u7248\u672c\u6ce8\u518c\uff08\u6216\u5bfc\u5165\uff09\u5e76\u5347\u7ea7\u5230 v2.6.x \u7684\u96c6\u7fa4\u3002")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\u8fd9\u4e9b\u6b65\u9aa4\u5c06\u6539\u53d8\u4e0b\u6e38 RKE2 \u548c K3s \u96c6\u7fa4\u7684\u914d\u7f6e\u5e76\u90e8\u7f72 ",(0,a.kt)("inlineCode",{parentName:"p"},"kube-api-authn-webhook"),"\u3002\u5982\u679c ACE \u7684\u672a\u6765\u5b9e\u73b0\u9700\u8981\u66f4\u65b0 ",(0,a.kt)("inlineCode",{parentName:"p"},"kube-api-authn-webhook"),"\uff0c\u90a3\u4e48\u8fd9\u4e5f\u5fc5\u987b\u624b\u52a8\u5b8c\u6210\u3002\u6709\u5173\u6b64 webhook \u7684\u66f4\u591a\u4fe1\u606f\uff0c\u8bf7\u5355\u51fb",(0,a.kt)("a",{parentName:"p",href:"/zh/how-to-guides/new-user-guides/manage-clusters/access-clusters/authorized-cluster-endpoint#%E5%85%B3%E4%BA%8E-kube-api-auth-%E8%BA%AB%E4%BB%BD%E9%AA%8C%E8%AF%81-webhook"},"\u6b64\u5904"),"\u3002")))),(0,a.kt)("h6",{id:"\u5728\u6bcf\u4e2a\u4e0b\u6e38\u96c6\u7fa4\u7684-controlplane-\u4e0a\u542f\u7528-ace-\u7684\u624b\u52a8\u6267\u884c\u6b65\u9aa4"},(0,a.kt)("strong",{parentName:"h6"},"\u5728\u6bcf\u4e2a\u4e0b\u6e38\u96c6\u7fa4\u7684 controlplane \u4e0a\u542f\u7528 ACE \u7684\u624b\u52a8\u6267\u884c\u6b65\u9aa4"),"\uff1a"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"\u5728 ",(0,a.kt)("inlineCode",{parentName:"p"},"/var/lib/rancher/{rke2,k3s}/kube-api-authn-webhook.yaml")," \u521b\u5efa\u4e00\u4e2a\u6587\u4ef6\uff0c\u5185\u5bb9\u5982\u4e0b\uff1a"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: v1\nkind: Config\nclusters:\n- name: Default\n  cluster:\n    insecure-skip-tls-verify: true\n    server: http://127.0.0.1:6440/v1/authenticate\nusers:\n- name: Default\n  user:\n    insecure-skip-tls-verify: true\ncurrent-context: webhook\ncontexts:\n- name: webhook\n  context:\n    user: Default\n    cluster: Default\n"))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"\u5c06\u4ee5\u4e0b\u5185\u5bb9\u6dfb\u52a0\u5230\u914d\u7f6e\u6587\u4ef6\u4e2d\uff08\u5982\u679c\u6587\u4ef6\u4e0d\u5b58\u5728\uff0c\u5219\u521b\u5efa\u4e00\u4e2a\uff09\u3002\u8bf7\u6ce8\u610f\uff0c\u9ed8\u8ba4\u4f4d\u7f6e\u662f ",(0,a.kt)("inlineCode",{parentName:"p"},"/etc/rancher/{rke2,k3s}/config.yaml"),"\uff1a"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"kube-apiserver-arg:\n    - authentication-token-webhook-config-file=/var/lib/rancher/{rke2,k3s}/kube-api-authn-webhook.yaml\n"))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"\u8fd0\u884c\u4ee5\u4e0b\u547d\u4ee4\uff1a"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre"},"sudo systemctl stop {rke2,k3s}-server\nsudo systemctl start {rke2,k3s}-server\n"))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"\u6700\u540e\uff0c\u4f60",(0,a.kt)("strong",{parentName:"p"},"\u5fc5\u987b"),"\u8fd4\u56de Rancher UI \u5e76\u5728\u90a3\u91cc\u7f16\u8f91\u5bfc\u5165\u7684\u96c6\u7fa4\uff0c\u4ece\u800c\u5b8c\u6210 ACE \u542f\u7528\u3002\u5355\u51fb ",(0,a.kt)("strong",{parentName:"p"},"\u22ee > \u7f16\u8f91\u914d\u7f6e"),"\uff0c\u7136\u540e\u5355\u51fb",(0,a.kt)("strong",{parentName:"p"},"\u96c6\u7fa4\u914d\u7f6e"),"\u4e0b\u7684",(0,a.kt)("strong",{parentName:"p"},"\u7f51\u7edc"),"\u9009\u9879\u5361\u3002\u6700\u540e\uff0c\u5355\u51fb",(0,a.kt)("strong",{parentName:"p"},"\u6388\u6743\u7aef\u70b9"),"\u7684",(0,a.kt)("strong",{parentName:"p"},"\u542f\u7528"),"\u6309\u94ae\u3002\u542f\u7528 ACE \u540e\uff0c\u4f60\u53ef\u4ee5\u8f93\u5165\u5b8c\u5168\u9650\u5b9a\u7684\u57df\u540d (FQDN) \u548c\u8bc1\u4e66\u4fe1\u606f\u3002"))),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("b",null,"FQDN")," \u5b57\u6bb5\u662f\u53ef\u9009\u7684\u3002\u5982\u679c\u6307\u5b9a\u4e86\u8be5\u5b57\u6bb5\uff0c\u5b83\u5e94\u8be5\u6307\u5411\u4e0b\u6e38\u96c6\u7fa4\u3002\u4ec5\u5f53\u4e0b\u6e38\u96c6\u7fa4\u524d\u9762\u6709\u4f7f\u7528\u4e86\u4e0d\u53d7\u4fe1\u4efb\u8bc1\u4e66\u7684\u8d1f\u8f7d\u5747\u8861\u5668\u65f6\u624d\u9700\u8981\u8bc1\u4e66\u4fe1\u606f\u3002\u5982\u679c\u4f60\u4f7f\u7528\u7684\u662f\u6709\u6548\u8bc1\u4e66\uff0c\u5219\u4e0d\u9700\u8981\u586b\u5199 ",(0,a.kt)("b",null,"CA \u8bc1\u4e66"),"\u5b57\u6bb5\u3002"),(0,a.kt)("h2",{id:"\u6ce8\u91ca\u5df2\u6ce8\u518c\u7684\u96c6\u7fa4"},"\u6ce8\u91ca\u5df2\u6ce8\u518c\u7684\u96c6\u7fa4"),(0,a.kt)("p",null,"Rancher \u6ca1\u6709\u6ce8\u518c\u7684 Kubernetes \u96c6\u7fa4\uff08\u9664\u4e86 RKE2 \u548c K3s Kubernetes \u96c6\u7fa4\u4e4b\u5916\uff09\u5982\u4f55\u9884\u7f6e\u6216\u914d\u7f6e\u96c6\u7fa4\u7684\u4efb\u4f55\u4fe1\u606f\u3002"),(0,a.kt)("p",null,"\u56e0\u6b64\uff0c\u5f53 Rancher \u6ce8\u518c\u96c6\u7fa4\u65f6\uff0c\u5b83\u5047\u8bbe\u67d0\u4e9b\u529f\u80fd\u662f\u9ed8\u8ba4\u7981\u7528\u7684\u3002Rancher \u8fd9\u6837\u505a\u662f\u4e3a\u4e86\u907f\u514d\u5411\u7528\u6237\u66b4\u9732 UI \u9009\u9879\uff08\u5373\u4f7f\u6ce8\u518c\u7684\u96c6\u7fa4\u6ca1\u6709\u542f\u7528\u8fd9\u4e9b\u529f\u80fd\uff09\u3002"),(0,a.kt)("p",null,"\u4f46\u662f\uff0c\u5982\u679c\u96c6\u7fa4\u5177\u6709\u67d0\u79cd\u529f\u80fd\uff08\u4f8b\u5982\u4f7f\u7528 pod \u5b89\u5168\u7b56\u7565\uff09\uff0c\u90a3\u4e48\u8be5\u96c6\u7fa4\u7684\u7528\u6237\u53ef\u80fd\u4ecd\u5e0c\u671b\u5728 Rancher UI \u4e2d\u4e3a\u96c6\u7fa4\u9009\u62e9 pod \u5b89\u5168\u7b56\u7565\u3002\u4e3a\u6b64\uff0c\u7528\u6237\u9700\u8981\u624b\u52a8\u8ba9 Rancher \u77e5\u9053\u96c6\u7fa4\u5df2\u542f\u7528 pod \u5b89\u5168\u7b56\u7565\u3002"),(0,a.kt)("p",null,"\u901a\u8fc7\u5bf9\u5df2\u6ce8\u518c\u7684\u96c6\u7fa4\u8fdb\u884c\u6ce8\u91ca\uff0c\u4f60\u53ef\u4ee5\u5411 Rancher \u8868\u660e\u96c6\u7fa4\u5728 Rancher \u4e4b\u5916\u88ab\u8d4b\u4e88\u4e86 Pod \u5b89\u5168\u7b56\u7565\u6216\u5176\u4ed6\u529f\u80fd\u3002"),(0,a.kt)("p",null,"\u6b64\u793a\u4f8b\u6ce8\u91ca\u8868\u793a\u542f\u7528\u4e86 pod \u5b89\u5168\u7b56\u7565\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'"capabilities.cattle.io/pspEnabled": "true"\n')),(0,a.kt)("p",null,"\u4ee5\u4e0b\u6ce8\u91ca\u8868\u793a Ingress \u529f\u80fd\u3002\u8bf7\u6ce8\u610f\uff0c\u975e\u539f\u59cb\u5bf9\u8c61\u7684\u503c\u9700\u8981\u8fdb\u884c JSON \u7f16\u7801\uff0c\u5e76\u8f6c\u4e49\u5f15\u53f7\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'"capabilities.cattle.io/ingressCapabilities": "[\n  {\n    "customDefaultBackend":true,\n    "ingressProvider":"asdf"\n  }\n]"\n')),(0,a.kt)("p",null,"\u4f60\u53ef\u4ee5\u4e3a\u96c6\u7fa4\u6ce8\u91ca\u4ee5\u4e0b\u529f\u80fd\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"ingressCapabilities")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"loadBalancerCapabilities")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"nodePoolScalingSupported")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"nodePortRange")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"pspEnabled")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"taintSupport"))),(0,a.kt)("p",null,"\u6240\u6709\u529f\u80fd\u53ca\u5176\u7c7b\u578b\u5b9a\u4e49\u90fd\u53ef\u4ee5\u5728 Rancher API \u89c6\u56fe\u4e2d\u67e5\u770b\uff0c\u5730\u5740\u662f ",(0,a.kt)("inlineCode",{parentName:"p"},"[Rancher Server URL]/v3/schemas/capabilities"),"\u3002"),(0,a.kt)("p",null,"\u8981\u6ce8\u91ca\u5df2\u6ce8\u518c\u7684\u96c6\u7fa4\uff1a"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"\u70b9\u51fb ",(0,a.kt)("strong",{parentName:"li"},"\u2630 > \u96c6\u7fa4\u7ba1\u7406"),"\u3002"),(0,a.kt)("li",{parentName:"ol"},"\u5728",(0,a.kt)("strong",{parentName:"li"},"\u96c6\u7fa4"),"\u9875\u9762\u4e0a\uff0c\u8f6c\u5230\u8981\u6ce8\u91ca\u7684\u81ea\u5b9a\u4e49\u96c6\u7fa4\uff0c\u7136\u540e\u5355\u51fb ",(0,a.kt)("strong",{parentName:"li"},"\u22ee > \u7f16\u8f91\u914d\u7f6e"),"\u3002"),(0,a.kt)("li",{parentName:"ol"},"\u5c55\u5f00",(0,a.kt)("strong",{parentName:"li"},"\u6807\u7b7e & \u6ce8\u91ca"),"\u3002"),(0,a.kt)("li",{parentName:"ol"},"\u5355\u51fb",(0,a.kt)("strong",{parentName:"li"},"\u6dfb\u52a0\u6ce8\u91ca"),"\u3002"),(0,a.kt)("li",{parentName:"ol"},"\u4f7f\u7528 ",(0,a.kt)("inlineCode",{parentName:"li"},"capabilities/<capability>: <value>")," \u683c\u5f0f\u5411\u96c6\u7fa4\u6dfb\u52a0\u6ce8\u91ca\uff0c\u5176\u4e2d ",(0,a.kt)("inlineCode",{parentName:"li"},"value")," \u662f\u8981\u4f7f\u7528\u6ce8\u91ca\u8986\u76d6\u7684\u96c6\u7fa4\u529f\u80fd\u3002\u5728\u8fd9\u79cd\u60c5\u51b5\u4e0b\uff0cRancher \u5728\u4f60\u6dfb\u52a0\u6ce8\u91ca\u4e4b\u524d\u90fd\u4e0d\u77e5\u9053\u96c6\u7fa4\u7684\u4efb\u4f55\u529f\u80fd\u3002"),(0,a.kt)("li",{parentName:"ol"},"\u5355\u51fb",(0,a.kt)("strong",{parentName:"li"},"\u4fdd\u5b58"),"\u3002")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u7ed3\u679c"),"\uff1a\u6ce8\u91ca\u5e76\u4e0d\u662f\u7ed9\u96c6\u7fa4\u63d0\u4f9b\u529f\u80fd\uff0c\u800c\u662f\u544a\u77e5 Rancher \u96c6\u7fa4\u5177\u6709\u8fd9\u4e9b\u529f\u80fd\u3002"))}k.isMDXComponent=!0}}]);