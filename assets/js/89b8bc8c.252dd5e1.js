"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[10557],{3905:function(e,r,n){n.d(r,{Zo:function(){return p},kt:function(){return v}});var t=n(67294);function a(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function c(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function u(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?c(Object(n),!0).forEach((function(r){a(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function o(e,r){if(null==e)return{};var n,t,a=function(e,r){if(null==e)return{};var n,t,a={},c=Object.keys(e);for(t=0;t<c.length;t++)n=c[t],r.indexOf(n)>=0||(a[n]=e[n]);return a}(e,r);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(t=0;t<c.length;t++)n=c[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=t.createContext({}),i=function(e){var r=t.useContext(s),n=r;return e&&(n="function"==typeof e?e(r):u(u({},r),e)),n},p=function(e){var r=i(e.components);return t.createElement(s.Provider,{value:r},e.children)},l={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},b=t.forwardRef((function(e,r){var n=e.components,a=e.mdxType,c=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),b=i(n),v=a,k=b["".concat(s,".").concat(v)]||b[v]||l[v]||c;return n?t.createElement(k,u(u({ref:r},p),{},{components:n})):t.createElement(k,u({ref:r},p))}));function v(e,r){var n=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var c=n.length,u=new Array(c);u[0]=b;var o={};for(var s in r)hasOwnProperty.call(r,s)&&(o[s]=r[s]);o.originalType=e,o.mdxType="string"==typeof e?e:a,u[1]=o;for(var i=2;i<c;i++)u[i]=n[i];return t.createElement.apply(null,u)}return t.createElement.apply(null,n)}b.displayName="MDXCreateElement"},21344:function(e,r,n){n.r(r),n.d(r,{assets:function(){return p},contentTitle:function(){return s},default:function(){return v},frontMatter:function(){return o},metadata:function(){return i},toc:function(){return l}});var t=n(87462),a=n(63366),c=(n(67294),n(3905)),u=["components"],o={title:"Backup",weight:50,aliases:["/rancher/v2.0-v2.4/en/installation/after-installation/","/rancher/v2.0-v2.4/en/backups/","/rancher/v2.0-v2.4/en/backups/backups","/rancher/v2.0-v2.4/en/backups/legacy/backup","/rancher/v2.0-v2.4/en/backups/v2.0.x-v2.4.x/backup/","/rancher/v2.x/en/backups/v2.0.x-v2.4.x/","/rancher/v2.x/en/backups/v2.0.x-v2.4.x/backup/"]},s=void 0,i={unversionedId:"backups/backup/backup",id:"version-2.0-2.4/backups/backup/backup",title:"Backup",description:"This section contains information about how to create backups of your Rancher data and how to restore them in a disaster scenario.",source:"@site/versioned_docs/version-2.0-2.4/backups/backup/backup.md",sourceDirName:"backups/backup",slug:"/backups/backup/",permalink:"/v2.0-v2.4/backups/backup/",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/versioned_docs/version-2.0-2.4/backups/backup/backup.md",tags:[],version:"2.0-2.4",lastUpdatedAt:1661494099,formattedLastUpdatedAt:"8/26/2022",frontMatter:{title:"Backup",weight:50,aliases:["/rancher/v2.0-v2.4/en/installation/after-installation/","/rancher/v2.0-v2.4/en/backups/","/rancher/v2.0-v2.4/en/backups/backups","/rancher/v2.0-v2.4/en/backups/legacy/backup","/rancher/v2.0-v2.4/en/backups/v2.0.x-v2.4.x/backup/","/rancher/v2.x/en/backups/v2.0.x-v2.4.x/","/rancher/v2.x/en/backups/v2.0.x-v2.4.x/backup/"]}},p={},l=[],b={toc:l};function v(e){var r=e.components,n=(0,a.Z)(e,u);return(0,c.kt)("wrapper",(0,t.Z)({},b,n,{components:r,mdxType:"MDXLayout"}),(0,c.kt)("p",null,"This section contains information about how to create backups of your Rancher data and how to restore them in a disaster scenario."),(0,c.kt)("ul",null,(0,c.kt)("li",{parentName:"ul"},"Rancher server backups:",(0,c.kt)("ul",{parentName:"li"},(0,c.kt)("li",{parentName:"ul"},(0,c.kt)("a",{parentName:"li",href:"/v2.0-v2.4/how-to-guides/new-user-guides/backup-restore-and-disaster-recovery/back-up-k3s-installed-rancher"},"Rancher installed on a K3s Kubernetes cluster")),(0,c.kt)("li",{parentName:"ul"},(0,c.kt)("a",{parentName:"li",href:"/v2.0-v2.4/how-to-guides/new-user-guides/backup-restore-and-disaster-recovery/back-up-rancher-launched-kubernetes-clusters"},"Rancher installed on an RKE Kubernetes cluster")),(0,c.kt)("li",{parentName:"ul"},(0,c.kt)("a",{parentName:"li",href:"/v2.0-v2.4/how-to-guides/new-user-guides/backup-restore-and-disaster-recovery/back-up-docker-installed-rancher"},"Rancher installed with Docker"))))),(0,c.kt)("p",null,"For information on backing up Rancher launched Kubernetes clusters, refer to ",(0,c.kt)("a",{parentName:"p",href:"/v2.0-v2.4/how-to-guides/advanced-user-guides/manage-clusters/backing-up-etcd"},"this section.")),(0,c.kt)("p",null,"If you are looking to back up your ",(0,c.kt)("a",{parentName:"p",href:"/v2.0-v2.4/pages-for-subheaders/launch-kubernetes-with-rancher"},"Rancher launched Kubernetes cluster"),", please refer ",(0,c.kt)("a",{parentName:"p",href:"/v2.0-v2.4/how-to-guides/advanced-user-guides/manage-clusters/backing-up-etcd"},"here"),"."))}v.isMDXComponent=!0}}]);