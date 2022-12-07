"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[55399],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>k});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var i=a.createContext({}),c=function(e){var t=a.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},p=function(e){var t=c(e.components);return a.createElement(i.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),h=c(r),k=n,d=h["".concat(i,".").concat(k)]||h[k]||u[k]||o;return r?a.createElement(d,l(l({ref:t},p),{},{components:r})):a.createElement(d,l({ref:t},p))}));function k(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,l=new Array(o);l[0]=h;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:n,l[1]=s;for(var c=2;c<o;c++)l[c]=r[c];return a.createElement.apply(null,l)}return a.createElement.apply(null,r)}h.displayName="MDXCreateElement"},83272:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>l,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var a=r(87462),n=(r(67294),r(3905));const o={title:"Rollbacks"},l=void 0,s={unversionedId:"getting-started/installation-and-upgrade/install-upgrade-on-a-kubernetes-cluster/rollbacks",id:"version-2.6/getting-started/installation-and-upgrade/install-upgrade-on-a-kubernetes-cluster/rollbacks",title:"Rollbacks",description:"Rolling Back to Rancher v2.5.0+",source:"@site/versioned_docs/version-2.6/getting-started/installation-and-upgrade/install-upgrade-on-a-kubernetes-cluster/rollbacks.md",sourceDirName:"getting-started/installation-and-upgrade/install-upgrade-on-a-kubernetes-cluster",slug:"/getting-started/installation-and-upgrade/install-upgrade-on-a-kubernetes-cluster/rollbacks",permalink:"/v2.6/getting-started/installation-and-upgrade/install-upgrade-on-a-kubernetes-cluster/rollbacks",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/versioned_docs/version-2.6/getting-started/installation-and-upgrade/install-upgrade-on-a-kubernetes-cluster/rollbacks.md",tags:[],version:"2.6",lastUpdatedAt:1670452794,formattedLastUpdatedAt:"Dec 7, 2022",frontMatter:{title:"Rollbacks"},sidebar:"tutorialSidebar",previous:{title:"Install/Upgrade Rancher on a Kubernetes Cluster",permalink:"/v2.6/pages-for-subheaders/install-upgrade-on-a-kubernetes-cluster"},next:{title:"Upgrades",permalink:"/v2.6/getting-started/installation-and-upgrade/install-upgrade-on-a-kubernetes-cluster/upgrades"}},i={},c=[{value:"Rolling Back to Rancher v2.5.0+",id:"rolling-back-to-rancher-v250",level:2},{value:"Scale the Rancher Deployment to 0",id:"scale-the-rancher-deployment-to-0",level:3},{value:"Create the Restore Custom Resource",id:"create-the-restore-custom-resource",level:3},{value:"Roll back to a previous Rancher version",id:"roll-back-to-a-previous-rancher-version",level:3},{value:"Rolling Back to Rancher v2.2-v2.4+",id:"rolling-back-to-rancher-v22-v24",level:2},{value:"Rolling Back to Rancher v2.0-v2.1",id:"rolling-back-to-rancher-v20-v21",level:2}],p={toc:c};function u(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"rolling-back-to-rancher-v250"},"Rolling Back to Rancher v2.5.0+"),(0,n.kt)("p",null,"To roll back to Rancher v2.5.0+, use the ",(0,n.kt)("strong",{parentName:"p"},"Rancher Backups")," application and restore Rancher from backup."),(0,n.kt)("p",null,"Rancher has to be started with the lower/previous version after a rollback."),(0,n.kt)("p",null,"A restore is performed by creating a Restore custom resource."),(0,n.kt)("admonition",{title:"Important:",type:"note"},(0,n.kt)("ul",{parentName:"admonition"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Follow the instructions from this page for restoring Rancher on the same cluster where it was backed up from. In order to migrate Rancher to a new cluster, follow the steps to ",(0,n.kt)("a",{parentName:"p",href:"/v2.6/how-to-guides/new-user-guides/backup-restore-and-disaster-recovery/migrate-rancher-to-new-cluster"},"migrate Rancher."))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"While restoring Rancher on the same setup, the Rancher deployment is manually scaled down before the restore starts, then the operator will scale it back up once the restore completes. As a result, Rancher and its UI will be unavailable until the restore is complete. While the UI is unavailable, use the original cluster kubeconfig with the restore YAML file: ",(0,n.kt)("inlineCode",{parentName:"p"},"kubectl create -f restore.yaml"),".")))),(0,n.kt)("h3",{id:"scale-the-rancher-deployment-to-0"},"Scale the Rancher Deployment to 0"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"In the upper left corner, click ",(0,n.kt)("strong",{parentName:"li"},"\u2630 > local"),"."),(0,n.kt)("li",{parentName:"ol"},"From the menu on the left, click ",(0,n.kt)("strong",{parentName:"li"},"Workload"),"."),(0,n.kt)("li",{parentName:"ol"},"Under ",(0,n.kt)("strong",{parentName:"li"},"Workload"),", click on ",(0,n.kt)("strong",{parentName:"li"},"Deployments"),"."),(0,n.kt)("li",{parentName:"ol"},"At the top, click on the dropdown to adjust the filter. Select ",(0,n.kt)("strong",{parentName:"li"},"cattle-system")," as the filter."),(0,n.kt)("li",{parentName:"ol"},"Find the row for the ",(0,n.kt)("inlineCode",{parentName:"li"},"rancher")," deployment and click ",(0,n.kt)("strong",{parentName:"li"},"\u22ee > Edit Config"),"."),(0,n.kt)("li",{parentName:"ol"},"Change ",(0,n.kt)("strong",{parentName:"li"},"Replicas")," to 0."),(0,n.kt)("li",{parentName:"ol"},"Scroll to the bottom and click ",(0,n.kt)("strong",{parentName:"li"},"Save"),".")),(0,n.kt)("h3",{id:"create-the-restore-custom-resource"},"Create the Restore Custom Resource"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Click ",(0,n.kt)("strong",{parentName:"p"},"\u2630 > Cluster Management"),".")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Go to the local cluster and click ",(0,n.kt)("strong",{parentName:"p"},"Explore"),".")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"In the left navigation bar, click ",(0,n.kt)("strong",{parentName:"p"},"Rancher Backups > Restore"),"."),(0,n.kt)("admonition",{parentName:"li",type:"note"},(0,n.kt)("p",{parentName:"admonition"},"If the Rancher Backups app is not visible, you will need to install it from the Charts page in ",(0,n.kt)("strong",{parentName:"p"},"Apps & Marketplace"),". Refer ",(0,n.kt)("a",{parentName:"p",href:"/v2.6/pages-for-subheaders/helm-charts-in-rancher#charts"},"here")," for more information."))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Click ",(0,n.kt)("strong",{parentName:"p"},"Create"),".")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Create the Restore with the form or with YAML. For help creating the Restore resource using the online form, refer to the ",(0,n.kt)("a",{parentName:"p",href:"/v2.6/reference-guides/backup-restore-configuration/restore-configuration"},"configuration reference")," and to the ",(0,n.kt)("a",{parentName:"p",href:"/v2.6/reference-guides/backup-restore-configuration/examples"},"examples."))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"To use the YAML editor, you can click ",(0,n.kt)("strong",{parentName:"p"},"Create > Create from YAML.")," Enter the Restore YAML. The following is an example Restore custom resource:"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: resources.cattle.io/v1\nkind: Restore\nmetadata:\n  name: restore-migration\nspec:\n  backupFilename: backup-b0450532-cee1-4aa1-a881-f5f48a007b1c-2020-09-15T07-27-09Z.tar.gz\n  encryptionConfigSecretName: encryptionconfig\n  storageLocation:\n    s3:\n      credentialSecretName: s3-creds\n      credentialSecretNamespace: default\n      bucketName: rancher-backups\n      folder: rancher\n      region: us-west-2\n      endpoint: s3.us-west-2.amazonaws.com\n")),(0,n.kt)("p",{parentName:"li"},"For help configuring the Restore, refer to the ",(0,n.kt)("a",{parentName:"p",href:"/v2.6/reference-guides/backup-restore-configuration/restore-configuration"},"configuration reference")," and to the ",(0,n.kt)("a",{parentName:"p",href:"/v2.6/reference-guides/backup-restore-configuration/examples"},"examples."))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Click ",(0,n.kt)("strong",{parentName:"p"},"Create"),"."))),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Result:")," The backup file is created and updated to the target storage location. The resources are restored in this order:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Custom Resource Definitions (CRDs)"),(0,n.kt)("li",{parentName:"ol"},"Cluster-scoped resources"),(0,n.kt)("li",{parentName:"ol"},"Namespaced resources")),(0,n.kt)("p",null,"To check how the restore is progressing, you can check the logs of the operator. Follow these steps to get the logs:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-yaml"},"kubectl get pods -n cattle-resources-system\nkubectl logs -n cattle-resources-system -f\n")),(0,n.kt)("h3",{id:"roll-back-to-a-previous-rancher-version"},"Roll back to a previous Rancher version"),(0,n.kt)("p",null,"Rancher can be rolled back using the Helm CLI. To roll back to the previous version:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-yaml"},"helm rollback rancher -n cattle-system\n")),(0,n.kt)("p",null,"If the previous revision is not the intended target, you can specify a revision to roll back to. To see the deployment history:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-yaml"},"helm history rancher -n cattle-system\n")),(0,n.kt)("p",null,"When the target revision is determined, perform the rollback. This example will roll back to revision ",(0,n.kt)("inlineCode",{parentName:"p"},"3"),":"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-yaml"},"helm rollback rancher 3 -n cattle-system\n")),(0,n.kt)("h2",{id:"rolling-back-to-rancher-v22-v24"},"Rolling Back to Rancher v2.2-v2.4+"),(0,n.kt)("p",null,"To roll back to Rancher before v2.5, follow the procedure detailed here: ",(0,n.kt)("a",{parentName:"p",href:"/v2.0-v2.4/how-to-guides/new-user-guides/backup-restore-and-disaster-recovery/restore-rancher-launched-kubernetes-clusters-from-backup"},"Restoring Backups \u2014 Kubernetes installs")," Restoring a snapshot of the Rancher server cluster will revert Rancher to the version and state at the time of the snapshot."),(0,n.kt)("p",null,"For information on how to roll back Rancher installed with Docker, refer to ",(0,n.kt)("a",{parentName:"p",href:"/v2.6/getting-started/installation-and-upgrade/other-installation-methods/rancher-on-a-single-node-with-docker/roll-back-docker-installed-rancher"},"this page.")),(0,n.kt)("admonition",{type:"note"},(0,n.kt)("p",{parentName:"admonition"},"Managed clusters are authoritative for their state. This means restoring the Rancher server will not revert workload deployments or changes made on managed clusters after the snapshot was taken.")),(0,n.kt)("h2",{id:"rolling-back-to-rancher-v20-v21"},"Rolling Back to Rancher v2.0-v2.1"),(0,n.kt)("p",null,"Rolling back to Rancher v2.0-v2.1 is no longer supported. The instructions for rolling back to these versions are preserved ",(0,n.kt)("a",{parentName:"p",href:"/v2.0-v2.4/how-to-guides/new-user-guides/backup-restore-and-disaster-recovery/restore-rancher-launched-kubernetes-clusters-from-backup/roll-back-to-v2.0-v2.1"},"here")," and are intended to be used only in cases where upgrading to Rancher v2.2+ is not feasible."))}u.isMDXComponent=!0}}]);