"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[8092],{3905:function(e,n,t){t.d(n,{Zo:function(){return l},kt:function(){return h}});var r=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var c=r.createContext({}),u=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},l=function(e){var n=u(e.components);return r.createElement(c.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),d=u(t),h=o,b=d["".concat(c,".").concat(h)]||d[h]||p[h]||i;return t?r.createElement(b,a(a({ref:n},l),{},{components:t})):r.createElement(b,a({ref:n},l))}));function h(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=t.length,a=new Array(i);a[0]=d;var s={};for(var c in n)hasOwnProperty.call(n,c)&&(s[c]=n[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,a[1]=s;for(var u=2;u<i;u++)a[u]=t[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},60267:function(e,n,t){t.r(n),t.d(n,{assets:function(){return l},contentTitle:function(){return c},default:function(){return h},frontMatter:function(){return s},metadata:function(){return u},toc:function(){return p}});var r=t(87462),o=t(63366),i=(t(67294),t(3905)),a=["components"],s={title:"Troubleshooting Worker Nodes and Generic Components",weight:4},c=void 0,u={unversionedId:"troubleshooting/kubernetes-components/troubleshooting-worker-nodes-and-generic-components",id:"troubleshooting/kubernetes-components/troubleshooting-worker-nodes-and-generic-components",title:"Troubleshooting Worker Nodes and Generic Components",description:"This section applies to every node as it includes components that run on nodes with any role.",source:"@site/docs/troubleshooting/kubernetes-components/troubleshooting-worker-nodes-and-generic-components.md",sourceDirName:"troubleshooting/kubernetes-components",slug:"/troubleshooting/kubernetes-components/troubleshooting-worker-nodes-and-generic-components",permalink:"/troubleshooting/kubernetes-components/troubleshooting-worker-nodes-and-generic-components",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/docs/troubleshooting/kubernetes-components/troubleshooting-worker-nodes-and-generic-components.md",tags:[],version:"current",lastUpdatedAt:1660752881,formattedLastUpdatedAt:"8/17/2022",frontMatter:{title:"Troubleshooting Worker Nodes and Generic Components",weight:4},sidebar:"tutorialSidebar",previous:{title:"Troubleshooting nginx-proxy",permalink:"/troubleshooting/kubernetes-components/troubleshooting-nginx-proxy"},next:{title:"Other Troubleshooting Tips",permalink:"/pages-for-subheaders/other-troubleshooting-tips"}},l={},p=[],d={toc:p};function h(e){var n=e.components,t=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,r.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"This section applies to every node as it includes components that run on nodes with any role."),(0,i.kt)("h1",{id:"check-if-the-containers-are-running"},"Check if the Containers are Running"),(0,i.kt)("p",null,"There are two specific containers launched on nodes with the ",(0,i.kt)("inlineCode",{parentName:"p"},"worker")," role:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"kubelet"),(0,i.kt)("li",{parentName:"ul"},"kube-proxy")),(0,i.kt)("p",null,"The containers should have status ",(0,i.kt)("inlineCode",{parentName:"p"},"Up"),". The duration shown after ",(0,i.kt)("inlineCode",{parentName:"p"},"Up")," is the time the container has been running."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"docker ps -a -f=name='kubelet|kube-proxy'\n")),(0,i.kt)("p",null,"Example output:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'CONTAINER ID        IMAGE                                COMMAND                  CREATED             STATUS              PORTS               NAMES\n158d0dcc33a5        rancher/hyperkube:v1.11.5-rancher1   "/opt/rke-tools/en..."   3 hours ago         Up 3 hours                              kube-proxy\na30717ecfb55        rancher/hyperkube:v1.11.5-rancher1   "/opt/rke-tools/en..."   3 hours ago         Up 3 hours                              kubelet\n')),(0,i.kt)("h1",{id:"container-logging"},"Container Logging"),(0,i.kt)("p",null,"The logging of the containers can contain information on what the problem could be."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"docker logs kubelet\ndocker logs kube-proxy\n")))}h.isMDXComponent=!0}}]);