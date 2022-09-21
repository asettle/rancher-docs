"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[88823],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=u(n),m=a,h=d["".concat(l,".").concat(m)]||d[m]||p[m]||i;return n?r.createElement(h,o(o({ref:t},c),{},{components:n})):r.createElement(h,o({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var u=2;u<i;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},37054:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return l},default:function(){return m},frontMatter:function(){return s},metadata:function(){return u},toc:function(){return p}});var r=n(87462),a=n(63366),i=(n(67294),n(3905)),o=["components"],s={title:"Importing Existing Clusters",description:"Learn how you can create a cluster in Rancher by importing an existing Kubernetes cluster. Then, you can manage it using Rancher",metaTitle:"Kubernetes Cluster Management",metaDescription:"Learn how you can import an existing Kubernetes cluster and then manage it using Rancher",weight:5,aliases:["/rancher/v2.0-v2.4/en/tasks/clusters/import-cluster/"]},l=void 0,u={unversionedId:"how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/import-existing-clusters",id:"version-2.0-2.4/how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/import-existing-clusters",title:"Importing Existing Clusters",description:"Learn how you can create a cluster in Rancher by importing an existing Kubernetes cluster. Then, you can manage it using Rancher",source:"@site/versioned_docs/version-2.0-2.4/how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/import-existing-clusters.md",sourceDirName:"how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup",slug:"/how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/import-existing-clusters",permalink:"/zh/v2.0-v2.4/how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/import-existing-clusters",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/versioned_docs/version-2.0-2.4/how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/import-existing-clusters.md",tags:[],version:"2.0-2.4",lastUpdatedAt:1662413536,formattedLastUpdatedAt:"2022/9/5",frontMatter:{title:"Importing Existing Clusters",description:"Learn how you can create a cluster in Rancher by importing an existing Kubernetes cluster. Then, you can manage it using Rancher",metaTitle:"Kubernetes Cluster Management",metaDescription:"Learn how you can import an existing Kubernetes cluster and then manage it using Rancher",weight:5,aliases:["/rancher/v2.0-v2.4/en/tasks/clusters/import-cluster/"]},sidebar:"tutorialSidebar",previous:{title:"Rancher Agents",permalink:"/zh/v2.0-v2.4/how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/launch-kubernetes-with-rancher/about-rancher-agents"},next:{title:"Kubernetes Resources",permalink:"/zh/v2.0-v2.4/pages-for-subheaders/kubernetes-resources-setup"}},c={},p=[{value:"Additional Features for Imported K3s Clusters",id:"additional-features-for-imported-k3s-clusters",level:3},{value:"Configuring K3s Cluster Upgrades",id:"configuring-k3s-cluster-upgrades",level:3},{value:"Configuring a K3s Cluster to Enable Importation to Rancher",id:"configuring-a-k3s-cluster-to-enable-importation-to-rancher",level:3},{value:"Debug Logging and Troubleshooting for Imported K3s Clusters",id:"debug-logging-and-troubleshooting-for-imported-k3s-clusters",level:3}],d={toc:p};function m(e){var t=e.components,n=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"Available as of v2.0.x-v2.4.x")),(0,i.kt)("p",null,"When managing an imported cluster, Rancher connects to a Kubernetes cluster that has already been set up. Therefore, Rancher does not provision Kubernetes, but only sets up the Rancher agents to communicate with the cluster."),(0,i.kt)("p",null,"Rancher features, including management of cluster, role-based access control, policy, and workloads, are available for imported clusters. Note that Rancher does not automate the provisioning or scaling of imported clusters."),(0,i.kt)("p",null,"For all imported Kubernetes clusters except for K3s clusters, the configuration of an imported cluster still has to be edited outside of Rancher. Some examples of editing the cluster include adding and removing nodes, upgrading the Kubernetes version, and changing Kubernetes component parameters."),(0,i.kt)("p",null,"Rancher v2.4 added the capability to import a K3s cluster into Rancher, as well as the ability to upgrade Kubernetes by editing the cluster in the Rancher UI."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#features"},"Features")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#prerequisites"},"Prerequisites")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#importing-a-cluster"},"Importing a cluster")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#imported-k3s-clusters"},"Imported K3s clusters"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#additional-features-for-imported-k3s-clusters"},"Additional features for imported K3s clusters")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#configuring-a-k3s-cluster-to-enable-importation-to-rancher"},"Configuring a K3s Cluster to Enable Importation to Rancher")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#debug-logging-and-troubleshooting-for-imported-k3s-clusters"},"Debug Logging and Troubleshooting for Imported K3s clusters")))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#annotating-imported-clusters"},"Annotating imported clusters"))),(0,i.kt)("h1",{id:"features"},"Features"),(0,i.kt)("p",null,"After importing a cluster, the cluster owner can:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/zh/v2.0-v2.4/how-to-guides/advanced-user-guides/authentication-permissions-and-global-configuration/manage-role-based-access-control-rbac/cluster-and-project-roles"},"Manage cluster access")," through role-based access control"),(0,i.kt)("li",{parentName:"ul"},"Enable ",(0,i.kt)("a",{parentName:"li",href:"/zh/v2.0-v2.4/pages-for-subheaders/cluster-monitoring"},"monitoring")," and ",(0,i.kt)("a",{parentName:"li",href:"/zh/v2.0-v2.4/pages-for-subheaders/cluster-logging"},"logging")),(0,i.kt)("li",{parentName:"ul"},"Enable ",(0,i.kt)("a",{parentName:"li",href:"/zh/v2.0-v2.4/pages-for-subheaders/istio"},"Istio")),(0,i.kt)("li",{parentName:"ul"},"Use ",(0,i.kt)("a",{parentName:"li",href:"/zh/v2.0-v2.4/how-to-guides/advanced-user-guides/manage-projects/ci-cd-pipelines"},"pipelines")),(0,i.kt)("li",{parentName:"ul"},"Configure ",(0,i.kt)("a",{parentName:"li",href:"/zh/v2.0-v2.4/pages-for-subheaders/cluster-alerts"},"alerts")," and ",(0,i.kt)("a",{parentName:"li",href:"/zh/v2.0-v2.4/explanations/integrations-in-rancher/notifiers"},"notifiers")),(0,i.kt)("li",{parentName:"ul"},"Manage ",(0,i.kt)("a",{parentName:"li",href:"/zh/v2.0-v2.4/pages-for-subheaders/manage-projects"},"projects")," and ",(0,i.kt)("a",{parentName:"li",href:"/zh/v2.0-v2.4/pages-for-subheaders/workloads-and-pods"},"workloads"))),(0,i.kt)("p",null,"After importing a K3s cluster, the cluster owner can also ",(0,i.kt)("a",{parentName:"p",href:"/zh/v2.0-v2.4/getting-started/installation-and-upgrade/upgrade-and-roll-back-kubernetes"},"upgrade Kubernetes from the Rancher UI.")),(0,i.kt)("h1",{id:"prerequisites"},"Prerequisites"),(0,i.kt)("p",null,"If your existing Kubernetes cluster already has a ",(0,i.kt)("inlineCode",{parentName:"p"},"cluster-admin")," role defined, you must have this ",(0,i.kt)("inlineCode",{parentName:"p"},"cluster-admin")," privilege to import the cluster into Rancher."),(0,i.kt)("p",null,"In order to apply the privilege, you need to run:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-plain"},"kubectl create clusterrolebinding cluster-admin-binding \\\n  --clusterrole cluster-admin \\\n  --user [USER_ACCOUNT]\n")),(0,i.kt)("p",null,"before running the ",(0,i.kt)("inlineCode",{parentName:"p"},"kubectl")," command to import the cluster."),(0,i.kt)("p",null,"By default, GKE users are not given this privilege, so you will need to run the command before importing GKE clusters. To learn more about role-based access control for GKE, please click ",(0,i.kt)("a",{parentName:"p",href:"https://cloud.google.com/kubernetes-engine/docs/how-to/role-based-access-control"},"here"),"."),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"If you are importing a K3s cluster, make sure the ",(0,i.kt)("inlineCode",{parentName:"p"},"cluster.yml")," is readable. It is protected by default. For details, refer to ",(0,i.kt)("a",{parentName:"p",href:"#configuring-a-k3s-cluster-to-enable-importation-to-rancher"},"Configuring a K3s cluster to enable importation to Rancher."))),(0,i.kt)("h1",{id:"importing-a-cluster"},"Importing a Cluster"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"From the ",(0,i.kt)("strong",{parentName:"li"},"Clusters")," page, click ",(0,i.kt)("strong",{parentName:"li"},"Add Cluster"),"."),(0,i.kt)("li",{parentName:"ol"},"Choose ",(0,i.kt)("strong",{parentName:"li"},"Import"),"."),(0,i.kt)("li",{parentName:"ol"},"Enter a ",(0,i.kt)("strong",{parentName:"li"},"Cluster Name"),"."),(0,i.kt)("li",{parentName:"ol"},"Use ",(0,i.kt)("strong",{parentName:"li"},"Member Roles")," to configure user authorization for the cluster. Click ",(0,i.kt)("strong",{parentName:"li"},"Add Member")," to add users that can access the cluster. Use the ",(0,i.kt)("strong",{parentName:"li"},"Role")," drop-down to set permissions for each user.}"),(0,i.kt)("li",{parentName:"ol"},"Click ",(0,i.kt)("strong",{parentName:"li"},"Create"),"."),(0,i.kt)("li",{parentName:"ol"},"The prerequisite for ",(0,i.kt)("inlineCode",{parentName:"li"},"cluster-admin")," privileges is shown (see ",(0,i.kt)("strong",{parentName:"li"},"Prerequisites")," above), including an example command to fulfil the prerequisite."),(0,i.kt)("li",{parentName:"ol"},"Copy the ",(0,i.kt)("inlineCode",{parentName:"li"},"kubectl")," command to your clipboard and run it on a node where kubeconfig is configured to point to the cluster you want to import. If you are unsure it is configured correctly, run ",(0,i.kt)("inlineCode",{parentName:"li"},"kubectl get nodes")," to verify before running the command shown in Rancher."),(0,i.kt)("li",{parentName:"ol"},"If you are using self signed certificates, you will receive the message ",(0,i.kt)("inlineCode",{parentName:"li"},"certificate signed by unknown authority"),". To work around this validation, copy the command starting with ",(0,i.kt)("inlineCode",{parentName:"li"},"curl")," displayed in Rancher to your clipboard. Then run the command on a node where kubeconfig is configured to point to the cluster you want to import."),(0,i.kt)("li",{parentName:"ol"},"When you finish running the command(s) on your node, click ",(0,i.kt)("strong",{parentName:"li"},"Done"),".")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Result:")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Your cluster is imported and assigned a state of ",(0,i.kt)("strong",{parentName:"li"},"Pending.")," Rancher is deploying resources to manage your cluster."),(0,i.kt)("li",{parentName:"ul"},"You can access your cluster after its state is updated to ",(0,i.kt)("strong",{parentName:"li"},"Active.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Active")," clusters are assigned two Projects: ",(0,i.kt)("inlineCode",{parentName:"li"},"Default")," (containing the namespace ",(0,i.kt)("inlineCode",{parentName:"li"},"default"),") and ",(0,i.kt)("inlineCode",{parentName:"li"},"System")," (containing the namespaces ",(0,i.kt)("inlineCode",{parentName:"li"},"cattle-system"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"ingress-nginx"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"kube-public")," and ",(0,i.kt)("inlineCode",{parentName:"li"},"kube-system"),", if present).")),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},(0,i.kt)("strong",{parentName:"p"},"Note:"),"\nYou can not re-import a cluster that is currently active in a Rancher setup.")),(0,i.kt)("h1",{id:"imported-k3s-clusters"},"Imported K3s Clusters"),(0,i.kt)("p",null,"You can now import a K3s Kubernetes cluster into Rancher. ",(0,i.kt)("a",{parentName:"p",href:"https://rancher.com/docs/k3s/latest/en/"},"K3s")," is a lightweight, fully compliant Kubernetes distribution. You can also upgrade Kubernetes by editing the K3s cluster in the Rancher UI."),(0,i.kt)("h3",{id:"additional-features-for-imported-k3s-clusters"},"Additional Features for Imported K3s Clusters"),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"Available as of v2.4.0")),(0,i.kt)("p",null,"When a K3s cluster is imported, Rancher will recognize it as K3s, and the Rancher UI will expose the following features in addition to the functionality for other imported clusters:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"The ability to upgrade the K3s version"),(0,i.kt)("li",{parentName:"ul"},"The ability to configure the maximum number of nodes that will be upgraded concurrently"),(0,i.kt)("li",{parentName:"ul"},"The ability to see a read-only version of the K3s cluster's configuration arguments and environment variables used to launch each node in the cluster.")),(0,i.kt)("h3",{id:"configuring-k3s-cluster-upgrades"},"Configuring K3s Cluster Upgrades"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"It is a Kubernetes best practice to back up the cluster before upgrading. When upgrading a high-availability K3s cluster with an external database, back up the database in whichever way is recommended by the relational database provider.")),(0,i.kt)("p",null,"The ",(0,i.kt)("strong",{parentName:"p"},"concurrency")," is the maximum number of nodes that are permitted to be unavailable during an upgrade. If number of unavailable nodes is larger than the ",(0,i.kt)("strong",{parentName:"p"},"concurrency,")," the upgrade will fail. If an upgrade fails, you may need to repair or remove failed nodes before the upgrade can succeed."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Controlplane concurrency:")," The maximum number of server nodes to upgrade at a single time; also the maximum unavailable server nodes"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Worker concurrency:")," The maximum number worker nodes to upgrade at the same time; also the maximum unavailable worker nodes")),(0,i.kt)("p",null,"In the K3s documentation, controlplane nodes are called server nodes. These nodes run the Kubernetes master, which maintains the desired state of the cluster. In K3s, these controlplane nodes have the capability to have workloads scheduled to them by default."),(0,i.kt)("p",null,"Also in the K3s documentation, nodes with the worker role are called agent nodes. Any workloads or pods that are deployed in the cluster can be scheduled to these nodes by default."),(0,i.kt)("h3",{id:"configuring-a-k3s-cluster-to-enable-importation-to-rancher"},"Configuring a K3s Cluster to Enable Importation to Rancher"),(0,i.kt)("p",null,"The K3s server needs to be configured to allow writing to the kubeconfig file."),(0,i.kt)("p",null,"This can be accomplished by passing ",(0,i.kt)("inlineCode",{parentName:"p"},"--write-kubeconfig-mode 644")," as a flag during installation:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"$ curl -sfL https://get.k3s.io | sh -s - --write-kubeconfig-mode 644\n")),(0,i.kt)("p",null,"The option can also be specified using the environment variable ",(0,i.kt)("inlineCode",{parentName:"p"},"K3S_KUBECONFIG_MODE"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'$ curl -sfL https://get.k3s.io | K3S_KUBECONFIG_MODE="644" sh -s -\n')),(0,i.kt)("h3",{id:"debug-logging-and-troubleshooting-for-imported-k3s-clusters"},"Debug Logging and Troubleshooting for Imported K3s Clusters"),(0,i.kt)("p",null,"Nodes are upgraded by the system upgrade controller running in the downstream cluster. Based on the cluster configuration, Rancher deploys two ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/rancher/system-upgrade-controller#example-upgrade-plan"},"plans")," to upgrade K3s nodes: one for controlplane nodes and one for workers. The system upgrade controller follows the plans and upgrades the nodes."),(0,i.kt)("p",null,"To enable debug logging on the system upgrade controller deployment, edit the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/rancher/system-upgrade-controller/blob/50a4c8975543d75f1d76a8290001d87dc298bdb4/manifests/system-upgrade-controller.yaml#L32"},"configmap")," to set the debug environment variable to true. Then restart the ",(0,i.kt)("inlineCode",{parentName:"p"},"system-upgrade-controller")," pod."),(0,i.kt)("p",null,"Logs created by the ",(0,i.kt)("inlineCode",{parentName:"p"},"system-upgrade-controller")," can be viewed by running this command:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"kubectl logs -n cattle-system system-upgrade-controller\n")),(0,i.kt)("p",null,"The current status of the plans can be viewed with this command:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"kubectl get plans -A -o yaml\n")),(0,i.kt)("p",null,"If the cluster becomes stuck in upgrading, restart the ",(0,i.kt)("inlineCode",{parentName:"p"},"system-upgrade-controller"),"."),(0,i.kt)("p",null,"To prevent issues when upgrading, the ",(0,i.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/tasks/administer-cluster/kubeadm/kubeadm-upgrade/"},"Kubernetes upgrade best practices")," should be followed."),(0,i.kt)("h1",{id:"annotating-imported-clusters"},"Annotating Imported Clusters"),(0,i.kt)("p",null,"For all types of imported Kubernetes clusters except for K3s Kubernetes clusters, Rancher doesn't have any information about how the cluster is provisioned or configured."),(0,i.kt)("p",null,"Therefore, when Rancher imports a cluster, it assumes that several capabilities are disabled by default. Rancher assumes this in order to avoid exposing UI options to the user even when the capabilities are not enabled in the imported cluster."),(0,i.kt)("p",null,"However, if the cluster has a certain capability, such as the ability to use a pod security policy, a user of that cluster might still want to select pod security policies for the cluster in the Rancher UI. In order to do that, the user will need to manually indicate to Rancher that pod security policies are enabled for the cluster."),(0,i.kt)("p",null,"By annotating an imported cluster, it is possible to indicate to Rancher that a cluster was given a pod security policy, or another capability, outside of Rancher."),(0,i.kt)("p",null,"This example annotation indicates that a pod security policy is enabled:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'"capabilities.cattle.io/pspEnabled": "true"\n')),(0,i.kt)("p",null,"The following annotation indicates Ingress capabilities. Note that that the values of non-primitive objects need to be JSON encoded, with quotations escaped."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'"capabilities.cattle.io/ingressCapabilities": "[\n  {\n    "customDefaultBackend":true,\n    "ingressProvider":"asdf"\n  }\n]"\n')),(0,i.kt)("p",null,"These capabilities can be annotated for the cluster:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"ingressCapabilities")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"loadBalancerCapabilities")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"nodePoolScalingSupported")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"nodePortRange")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"pspEnabled")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"taintSupport"))),(0,i.kt)("p",null,"All the capabilities and their type definitions can be viewed in the Rancher API view, at ",(0,i.kt)("inlineCode",{parentName:"p"},"[Rancher Server URL]/v3/schemas/capabilities"),"."),(0,i.kt)("p",null,"To annotate an imported cluster,"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Go to the cluster view in Rancher and select ",(0,i.kt)("strong",{parentName:"li"},"\u22ee"," > Edit.")),(0,i.kt)("li",{parentName:"ol"},"Expand the ",(0,i.kt)("strong",{parentName:"li"},"Labels & Annotations")," section."),(0,i.kt)("li",{parentName:"ol"},"Click ",(0,i.kt)("strong",{parentName:"li"},"Add Annotation.")),(0,i.kt)("li",{parentName:"ol"},"Add an annotation to the cluster with the format ",(0,i.kt)("inlineCode",{parentName:"li"},"capabilities/<capability>: <value>")," where ",(0,i.kt)("inlineCode",{parentName:"li"},"value")," is the cluster capability that will be overridden by the annotation. In this scenario, Rancher is not aware of any capabilities of the cluster until you add the annotation."),(0,i.kt)("li",{parentName:"ol"},"Click ",(0,i.kt)("strong",{parentName:"li"},"Save."))),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Result:")," The annotation does not give the capabilities to the cluster, but it does indicate to Rancher that the cluster has those capabilities."))}m.isMDXComponent=!0}}]);