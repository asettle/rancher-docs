"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[43270],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>c});var a=r(67294);function s(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function n(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){s(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,a,s=function(e,t){if(null==e)return{};var r,a,s={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(s[r]=e[r]);return s}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(s[r]=e[r])}return s}var l=a.createContext({}),u=function(e){var t=a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):n(n({},t),e)),r},p=function(e){var t=u(e.components);return a.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},g=a.forwardRef((function(e,t){var r=e.components,s=e.mdxType,o=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),g=u(r),c=s,d=g["".concat(l,".").concat(c)]||g[c]||m[c]||o;return r?a.createElement(d,n(n({ref:t},p),{},{components:r})):a.createElement(d,n({ref:t},p))}));function c(e,t){var r=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var o=r.length,n=new Array(o);n[0]=g;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:s,n[1]=i;for(var u=2;u<o;u++)n[u]=r[u];return a.createElement.apply(null,n)}return a.createElement.apply(null,r)}g.displayName="MDXCreateElement"},95933:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>n,default:()=>m,frontMatter:()=>o,metadata:()=>i,toc:()=>u});var a=r(87462),s=(r(67294),r(3905));const o={title:"Setting up Existing Storage"},n=void 0,i={unversionedId:"how-to-guides/new-user-guides/manage-clusters/create-kubernetes-persistent-storage/manage-persistent-storage/set-up-existing-storage",id:"version-2.6/how-to-guides/new-user-guides/manage-clusters/create-kubernetes-persistent-storage/manage-persistent-storage/set-up-existing-storage",title:"Setting up Existing Storage",description:"This section describes how to set up existing persistent storage for workloads in Rancher.",source:"@site/versioned_docs/version-2.6/how-to-guides/new-user-guides/manage-clusters/create-kubernetes-persistent-storage/manage-persistent-storage/set-up-existing-storage.md",sourceDirName:"how-to-guides/new-user-guides/manage-clusters/create-kubernetes-persistent-storage/manage-persistent-storage",slug:"/how-to-guides/new-user-guides/manage-clusters/create-kubernetes-persistent-storage/manage-persistent-storage/set-up-existing-storage",permalink:"/v2.6/how-to-guides/new-user-guides/manage-clusters/create-kubernetes-persistent-storage/manage-persistent-storage/set-up-existing-storage",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/versioned_docs/version-2.6/how-to-guides/new-user-guides/manage-clusters/create-kubernetes-persistent-storage/manage-persistent-storage/set-up-existing-storage.md",tags:[],version:"2.6",lastUpdatedAt:1685740776,formattedLastUpdatedAt:"Jun 2, 2023",frontMatter:{title:"Setting up Existing Storage"},sidebar:"tutorialSidebar",previous:{title:"How Persistent Storage Works",permalink:"/v2.6/how-to-guides/new-user-guides/manage-clusters/create-kubernetes-persistent-storage/manage-persistent-storage/about-persistent-storage"},next:{title:"Dynamically Provisioning New Storage in Rancher",permalink:"/v2.6/how-to-guides/new-user-guides/manage-clusters/create-kubernetes-persistent-storage/manage-persistent-storage/dynamically-provision-new-storage"}},l={},u=[{value:"Prerequisites",id:"prerequisites",level:3},{value:"1. Set up persistent storage",id:"1-set-up-persistent-storage",level:3},{value:"2. Add a PersistentVolume that refers to the persistent storage",id:"2-add-a-persistentvolume-that-refers-to-the-persistent-storage",level:3},{value:"3. Use the Storage Class for Pods Deployed with a StatefulSet",id:"3-use-the-storage-class-for-pods-deployed-with-a-statefulset",level:3}],p={toc:u};function m(e){let{components:t,...r}=e;return(0,s.kt)("wrapper",(0,a.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"This section describes how to set up existing persistent storage for workloads in Rancher."),(0,s.kt)("admonition",{type:"note"},(0,s.kt)("p",{parentName:"admonition"},"This section assumes that you understand the Kubernetes concepts of persistent volumes and persistent volume claims. For more information, refer to the section on ",(0,s.kt)("a",{parentName:"p",href:"/v2.6/how-to-guides/new-user-guides/manage-clusters/create-kubernetes-persistent-storage/manage-persistent-storage/about-persistent-storage"},"how storage works."))),(0,s.kt)("p",null,"To set up storage, follow these steps:"),(0,s.kt)("ol",null,(0,s.kt)("li",{parentName:"ol"},(0,s.kt)("a",{parentName:"li",href:"#1-set-up-persistent-storage"},"Set up persistent storage.")),(0,s.kt)("li",{parentName:"ol"},(0,s.kt)("a",{parentName:"li",href:"#2-add-a-persistentvolume-that-refers-to-the-persistent-storage"},"Add a PersistentVolume that refers to the persistent storage.")),(0,s.kt)("li",{parentName:"ol"},(0,s.kt)("a",{parentName:"li",href:"#3-use-the-storage-class-for-pods-deployed-with-a-statefulset"},"Use the Storage Class for Pods Deployed with a StatefulSet."))),(0,s.kt)("h3",{id:"prerequisites"},"Prerequisites"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"To create a persistent volume as a Kubernetes resource, you must have the ",(0,s.kt)("inlineCode",{parentName:"li"},"Manage Volumes")," ",(0,s.kt)("a",{parentName:"li",href:"/v2.6/how-to-guides/new-user-guides/authentication-permissions-and-global-configuration/manage-role-based-access-control-rbac/cluster-and-project-roles#project-role-reference"},"role.")),(0,s.kt)("li",{parentName:"ul"},"If you are provisioning storage for a cluster hosted in the cloud, the storage and cluster hosts must have the same cloud provider.")),(0,s.kt)("h3",{id:"1-set-up-persistent-storage"},"1. Set up persistent storage"),(0,s.kt)("p",null,"Creating a persistent volume in Rancher will not create a storage volume. It only creates a Kubernetes resource that maps to an existing volume. Therefore, before you can create a persistent volume as a Kubernetes resource, you must have storage provisioned."),(0,s.kt)("p",null,"The steps to set up a persistent storage device will differ based on your infrastructure. We provide examples of how to set up storage using ",(0,s.kt)("a",{parentName:"p",href:"/v2.6/how-to-guides/new-user-guides/manage-clusters/provisioning-storage-examples/vsphere-storage"},"vSphere,")," ",(0,s.kt)("a",{parentName:"p",href:"/v2.6/how-to-guides/new-user-guides/manage-clusters/provisioning-storage-examples/nfs-storage"},"NFS,")," or Amazon's ",(0,s.kt)("a",{parentName:"p",href:"/v2.6/how-to-guides/new-user-guides/manage-clusters/provisioning-storage-examples/persistent-storage-in-amazon-ebs"},"EBS.")),(0,s.kt)("p",null,"If you have a pool of block storage, and you don't want to use a cloud provider, Longhorn could help you provide persistent storage to your Kubernetes cluster. For more information, see ",(0,s.kt)("a",{parentName:"p",href:"/v2.6/integrations-in-rancher/longhorn"},"this page.")),(0,s.kt)("h3",{id:"2-add-a-persistentvolume-that-refers-to-the-persistent-storage"},"2. Add a PersistentVolume that refers to the persistent storage"),(0,s.kt)("p",null,"These steps describe how to set up a PersistentVolume at the cluster level in Kubernetes."),(0,s.kt)("ol",null,(0,s.kt)("li",{parentName:"ol"},"Click ",(0,s.kt)("strong",{parentName:"li"},"\u2630 > Cluster Management"),"."),(0,s.kt)("li",{parentName:"ol"},"Go to the cluster where you want to add a persistent volume and click ",(0,s.kt)("strong",{parentName:"li"},"Explore"),"."),(0,s.kt)("li",{parentName:"ol"},"In the left navigation bar, click ",(0,s.kt)("strong",{parentName:"li"},"Storage > Persistent Volumes"),"."),(0,s.kt)("li",{parentName:"ol"},"Click ",(0,s.kt)("strong",{parentName:"li"},"Create"),"."),(0,s.kt)("li",{parentName:"ol"},"Enter a ",(0,s.kt)("strong",{parentName:"li"},"Name")," for the persistent volume."),(0,s.kt)("li",{parentName:"ol"},"Select the ",(0,s.kt)("strong",{parentName:"li"},"Volume Plugin")," for the disk type or service that you're using. When adding storage to a cluster that's hosted by a cloud provider, use the cloud provider's plug-in for cloud storage. For example, if you have a Amazon EC2 cluster and you want to use cloud storage for it, you must use the ",(0,s.kt)("inlineCode",{parentName:"li"},"Amazon EBS Disk")," volume plugin."),(0,s.kt)("li",{parentName:"ol"},"Enter the ",(0,s.kt)("strong",{parentName:"li"},"Capacity")," of your volume in gigabytes."),(0,s.kt)("li",{parentName:"ol"},"Complete the ",(0,s.kt)("strong",{parentName:"li"},"Plugin Configuration")," form. Each plugin type requires information specific to the vendor of disk type. For help regarding each plugin's form and the information that's required, refer to the plug-in's vendor documentation."),(0,s.kt)("li",{parentName:"ol"},"Optional: In the ",(0,s.kt)("strong",{parentName:"li"},"Customize")," form, configure the ",(0,s.kt)("a",{parentName:"li",href:"https://kubernetes.io/docs/concepts/storage/persistent-volumes/#access-modes"},"access modes.")," This options sets how many nodes can access the volume, along with the node read/write permissions. The ",(0,s.kt)("a",{parentName:"li",href:"https://kubernetes.io/docs/concepts/storage/persistent-volumes/#access-modes"},"Kubernetes Documentation")," includes a table that lists which access modes are supported by the plugins available."),(0,s.kt)("li",{parentName:"ol"},"Optional: In the ",(0,s.kt)("strong",{parentName:"li"},"Customize")," form, configure the ",(0,s.kt)("a",{parentName:"li",href:"https://kubernetes.io/docs/concepts/storage/persistent-volumes/#mount-options"},"mount options.")," Each volume plugin allows you to specify additional command line options during the mounting process. Consult each plugin's vendor documentation for the mount options available."),(0,s.kt)("li",{parentName:"ol"},"Click ",(0,s.kt)("strong",{parentName:"li"},"Create"),".")),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Result:")," Your new persistent volume is created."),(0,s.kt)("h3",{id:"3-use-the-storage-class-for-pods-deployed-with-a-statefulset"},"3. Use the Storage Class for Pods Deployed with a StatefulSet"),(0,s.kt)("p",null,"StatefulSets manage the deployment and scaling of Pods while maintaining a sticky identity for each Pod. In this StatefulSet, we will configure a VolumeClaimTemplate. Each Pod managed by the StatefulSet will be deployed with a PersistentVolumeClaim based on this VolumeClaimTemplate. The PersistentVolumeClaim will refer to the PersistentVolume that we created. Therefore, when each Pod managed by the StatefulSet is deployed, it will be bound a PersistentVolume as defined in its PersistentVolumeClaim."),(0,s.kt)("p",null,"You can configure storage for the StatefulSet during or after workload creation."),(0,s.kt)("p",null,"The following steps describe how to assign existing storage to a new StatefulSet:"),(0,s.kt)("ol",null,(0,s.kt)("li",{parentName:"ol"},"Click ",(0,s.kt)("strong",{parentName:"li"},"\u2630 > Cluster Management"),"."),(0,s.kt)("li",{parentName:"ol"},"Go to the cluster where you want to configure storage for the StatefulSet and click ",(0,s.kt)("strong",{parentName:"li"},"Explore"),"."),(0,s.kt)("li",{parentName:"ol"},"In the left navigation bar, click ",(0,s.kt)("strong",{parentName:"li"},"Workload > StatefulSets"),"."),(0,s.kt)("li",{parentName:"ol"},"Click ",(0,s.kt)("strong",{parentName:"li"},"Create"),"."),(0,s.kt)("li",{parentName:"ol"},"Choose the namespace where the workload will be deployed."),(0,s.kt)("li",{parentName:"ol"},"Enter a name for the StatefulSet."),(0,s.kt)("li",{parentName:"ol"},"On the ",(0,s.kt)("strong",{parentName:"li"},"Volume Claim Templates")," tab, click ",(0,s.kt)("strong",{parentName:"li"},"Add Claim Template"),"."),(0,s.kt)("li",{parentName:"ol"},"Click ",(0,s.kt)("strong",{parentName:"li"},"Use an existing Persistent Volume"),"."),(0,s.kt)("li",{parentName:"ol"},"In the Persistent Volumes field, select the Persistent Volume that you created."),(0,s.kt)("li",{parentName:"ol"},"In the ",(0,s.kt)("strong",{parentName:"li"},"Mount Point")," field, enter the path that the workload will use to access the volume."),(0,s.kt)("li",{parentName:"ol"},"Click ",(0,s.kt)("strong",{parentName:"li"},"Launch"),".")),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Result:")," When the workload is deployed, it will make a request for the specified amount of disk space to the Kubernetes master. If a PV with the specified resources is available when the workload is deployed, the Kubernetes master will bind the PV to the PVC."),(0,s.kt)("p",null,"The following steps describe how to assign persistent storage to an existing workload:"),(0,s.kt)("ol",null,(0,s.kt)("li",{parentName:"ol"},"Click ",(0,s.kt)("strong",{parentName:"li"},"\u2630 > Cluster Management"),"."),(0,s.kt)("li",{parentName:"ol"},"Go to the cluster where you want to configure storage for the StatefulSet and click ",(0,s.kt)("strong",{parentName:"li"},"Explore"),"."),(0,s.kt)("li",{parentName:"ol"},"In the left navigation bar, click ",(0,s.kt)("strong",{parentName:"li"},"Workload > StatefulSets"),"."),(0,s.kt)("li",{parentName:"ol"},"Go to the workload that you want to add the persistent storage to. Click ",(0,s.kt)("strong",{parentName:"li"},"\u22ee > Edit"),"."),(0,s.kt)("li",{parentName:"ol"},"On the ",(0,s.kt)("strong",{parentName:"li"},"Volume Claim Templates")," tab, click ",(0,s.kt)("strong",{parentName:"li"},"Add Claim Template"),"."),(0,s.kt)("li",{parentName:"ol"},"Click ",(0,s.kt)("strong",{parentName:"li"},"Use an existing Persistent Volume"),"."),(0,s.kt)("li",{parentName:"ol"},"In the Persistent Volumes field, select the Persistent Volume that you created."),(0,s.kt)("li",{parentName:"ol"},"In the ",(0,s.kt)("strong",{parentName:"li"},"Mount Point")," field, enter the path that the workload will use to access the volume."),(0,s.kt)("li",{parentName:"ol"},"Click ",(0,s.kt)("strong",{parentName:"li"},"Launch"),".")),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Result:")," The workload will make a request for the specified amount of disk space to the Kubernetes master. If a PV with the specified resources is available when the workload is deployed, the Kubernetes master will bind the PV to the PVC."))}m.isMDXComponent=!0}}]);