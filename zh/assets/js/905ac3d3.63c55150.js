"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[62276],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>h});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=p(n),h=a,m=d["".concat(s,".").concat(h)]||d[h]||u[h]||i;return n?r.createElement(m,o(o({ref:t},c),{},{components:n})):r.createElement(m,o({ref:t},c))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var p=2;p<i;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},38915:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var r=n(87462),a=(n(67294),n(3905));const i={title:"Using Fleet Behind a Proxy"},o=void 0,l={unversionedId:"explanations/integrations-in-rancher/fleet-gitops-at-scale/use-fleet-behind-a-proxy",id:"version-2.5/explanations/integrations-in-rancher/fleet-gitops-at-scale/use-fleet-behind-a-proxy",title:"Using Fleet Behind a Proxy",description:"Available as of v2.5.8",source:"@site/versioned_docs/version-2.5/explanations/integrations-in-rancher/fleet-gitops-at-scale/use-fleet-behind-a-proxy.md",sourceDirName:"explanations/integrations-in-rancher/fleet-gitops-at-scale",slug:"/explanations/integrations-in-rancher/fleet-gitops-at-scale/use-fleet-behind-a-proxy",permalink:"/zh/v2.5/explanations/integrations-in-rancher/fleet-gitops-at-scale/use-fleet-behind-a-proxy",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/versioned_docs/version-2.5/explanations/integrations-in-rancher/fleet-gitops-at-scale/use-fleet-behind-a-proxy.md",tags:[],version:"2.5",lastUpdatedAt:1663953084,formattedLastUpdatedAt:"2022\u5e749\u670823\u65e5",frontMatter:{title:"Using Fleet Behind a Proxy"},sidebar:"tutorialSidebar",previous:{title:"Windows Support",permalink:"/zh/v2.5/explanations/integrations-in-rancher/fleet-gitops-at-scale/windows-support"},next:{title:"Istio",permalink:"/zh/v2.5/pages-for-subheaders/istio"}},s={},p=[{value:"Required Environment Variables",id:"required-environment-variables",level:2},{value:"Setting Environment Variables in the Rancher UI",id:"setting-environment-variables-in-the-rancher-ui",level:2},{value:"Setting Environment Variables on Private Nodes",id:"setting-environment-variables-on-private-nodes",level:2}],c={toc:p};function u(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"Available as of v2.5.8")),(0,a.kt)("p",null,"In this section, you'll learn how to enable Fleet in a setup that has a Rancher server with a public IP a Kubernetes cluster that has no public IP, but is configured to use a proxy."),(0,a.kt)("p",null,"Rancher does not establish connections with registered downstream clusters. The Rancher agent deployed on the downstream cluster must be able to establish the connection with Rancher."),(0,a.kt)("p",null,"To set up Fleet to work behind a proxy, you will need to set the ",(0,a.kt)("strong",{parentName:"p"},"Agent Environment Variables")," for the downstream cluster. These are cluster-level configuration options."),(0,a.kt)("p",null,"Through the Rancher UI, you can configure these environment variables for any cluster type, including registered and custom clusters. The variables can be added while editing an existing cluster or while provisioning a new cluster."),(0,a.kt)("p",null,"For public downstream clusters, it is sufficient to ",(0,a.kt)("a",{parentName:"p",href:"#setting-environment-variables-in-the-rancher-ui"},"set the required environment variables in the Rancher UI.")),(0,a.kt)("p",null,"For private nodes or private clusters, the environment variables need to be set on the nodes themselves. Then the environment variables are configured from the Rancher UI, typically when provisioning a custom cluster or when registering the private cluster. For an example of how to set the environment variables on Ubuntu node in a K3s Kubernetes cluster, see ",(0,a.kt)("a",{parentName:"p",href:"#setting-environment-variables-on-private-nodes"},"this section.")),(0,a.kt)("h2",{id:"required-environment-variables"},"Required Environment Variables"),(0,a.kt)("p",null,"When adding Fleet agent environment variables for the proxy, replace <PROXY_IP> with your private proxy IP."),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Variable Name"),(0,a.kt)("th",{parentName:"tr",align:null},"Value"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"HTTP_PROXY")),(0,a.kt)("td",{parentName:"tr",align:null},"http://<PROXY_IP>:8888")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"HTTPS_PROXY")),(0,a.kt)("td",{parentName:"tr",align:null},"http://<PROXY_IP>:8888")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"NO_PROXY")),(0,a.kt)("td",{parentName:"tr",align:null},"127.0.0.0/8,10.0.0.0/8,172.16.0.0/12,192.168.0.0/16,.svc,.cluster.local")))),(0,a.kt)("h2",{id:"setting-environment-variables-in-the-rancher-ui"},"Setting Environment Variables in the Rancher UI"),(0,a.kt)("p",null,"To add the environment variable to an existing cluster,"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"In the Rancher UI, go to the cluster view for Kubernetes cluster that needs to use a proxy."),(0,a.kt)("li",{parentName:"ol"},"Click ",(0,a.kt)("strong",{parentName:"li"},"\u22ee"," > Edit"),"."),(0,a.kt)("li",{parentName:"ol"},"Click ",(0,a.kt)("strong",{parentName:"li"},"Advanced Options.")),(0,a.kt)("li",{parentName:"ol"},"Click ",(0,a.kt)("strong",{parentName:"li"},"Add Environment Variable.")),(0,a.kt)("li",{parentName:"ol"},"Enter the ",(0,a.kt)("a",{parentName:"li",href:"#required-environment-variables"},"required environment variables")),(0,a.kt)("li",{parentName:"ol"},"Click ",(0,a.kt)("strong",{parentName:"li"},"Save."))),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Result:")," The Fleet agent works behind a proxy."),(0,a.kt)("h2",{id:"setting-environment-variables-on-private-nodes"},"Setting Environment Variables on Private Nodes"),(0,a.kt)("p",null,"For private nodes and private clusters, the proxy environment variables need to be set on the nodes themselves, as well as configured from the Rancher UI."),(0,a.kt)("p",null,"This example shows how the environment variables would be set up on an Ubuntu node in a K3s Kubernetes cluster:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"ssh -o ForwardAgent=yes ubuntu@<public_proxy_ip>\nssh <k3s_ip>\nexport proxy_private_ip=<private_proxy_ip>\nexport HTTP_PROXY=http://${proxy_private_ip}:8888\nexport HTTPS_PROXY=http://${proxy_private_ip}:8888\nexport NO_PROXY=127.0.0.0/8,10.0.0.0/8,172.16.0.0/12,192.168.0.0/16,.svc,.cluster.local\nexport KUBECONFIG=/etc/rancher/k3s/k3s.yaml\n")))}u.isMDXComponent=!0}}]);