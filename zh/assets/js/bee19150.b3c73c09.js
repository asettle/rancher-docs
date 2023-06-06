"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[2309],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>g});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=a.createContext({}),u=function(e){var t=a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},d=function(e){var t=u(e.components);return a.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,l=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),p=u(r),g=n,h=p["".concat(l,".").concat(g)]||p[g]||c[g]||i;return r?a.createElement(h,s(s({ref:t},d),{},{components:r})):a.createElement(h,s({ref:t},d))}));function g(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,s=new Array(i);s[0]=p;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:n,s[1]=o;for(var u=2;u<i;u++)s[u]=r[u];return a.createElement.apply(null,s)}return a.createElement.apply(null,r)}p.displayName="MDXCreateElement"},44533:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>o,default:()=>p,frontMatter:()=>s,metadata:()=>l,toc:()=>d});var a=r(87462),n=(r(67294),r(3905)),i=r(13683);const s={title:"Overview"},o=void 0,l={unversionedId:"getting-started/introduction/overview",id:"version-2.0-2.4/getting-started/introduction/overview",title:"Overview",description:"Rancher is a container management platform built for organizations that deploy containers in production. Rancher makes it easy to run Kubernetes everywhere, meet IT requirements, and empower DevOps teams.",source:"@site/versioned_docs/version-2.0-2.4/getting-started/introduction/overview.md",sourceDirName:"getting-started/introduction",slug:"/getting-started/introduction/overview",permalink:"/zh/v2.0-v2.4/getting-started/introduction/overview",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/versioned_docs/version-2.0-2.4/getting-started/introduction/overview.md",tags:[],version:"2.0-2.4",lastUpdatedAt:1685050877,formattedLastUpdatedAt:"2023\u5e745\u670825\u65e5",frontMatter:{title:"Overview"},sidebar:"tutorialSidebar",previous:{title:"Introduction",permalink:"/zh/v2.0-v2.4/pages-for-subheaders/introduction"},next:{title:"What Are Divio Docs?",permalink:"/zh/v2.0-v2.4/getting-started/introduction/what-are-divio-docs"}},u={},d=[{value:"Run Kubernetes Everywhere",id:"run-kubernetes-everywhere",level:2},{value:"Meet IT requirements",id:"meet-it-requirements",level:2},{value:"Empower DevOps Teams",id:"empower-devops-teams",level:2},{value:"Features of the Rancher API Server",id:"features-of-the-rancher-api-server",level:2},{value:"Authorization and Role-Based Access Control",id:"authorization-and-role-based-access-control",level:3},{value:"Working with Kubernetes",id:"working-with-kubernetes",level:3},{value:"Working with Cloud Infrastructure",id:"working-with-cloud-infrastructure",level:3},{value:"Cluster Visibility",id:"cluster-visibility",level:3},{value:"Editing Downstream Clusters with Rancher",id:"editing-downstream-clusters-with-rancher",level:2}],c={toc:d};function p(e){let{components:t,...s}=e;return(0,n.kt)("wrapper",(0,a.Z)({},c,s,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("head",null,(0,n.kt)("link",{rel:"canonical",href:"https://ranchermanager.docs.rancher.com/getting-started/overview"})),(0,n.kt)("p",null,"Rancher is a container management platform built for organizations that deploy containers in production. Rancher makes it easy to run Kubernetes everywhere, meet IT requirements, and empower DevOps teams."),(0,n.kt)("h2",{id:"run-kubernetes-everywhere"},"Run Kubernetes Everywhere"),(0,n.kt)("p",null,"Kubernetes has become the container orchestration standard. Most cloud and virtualization vendors now offer it as standard infrastructure. Rancher users have the choice of creating Kubernetes clusters with Rancher Kubernetes Engine (RKE) or cloud Kubernetes services, such as GKE, AKS, and EKS. Rancher users can also import and manage their existing Kubernetes clusters created using any Kubernetes distribution or installer."),(0,n.kt)("h2",{id:"meet-it-requirements"},"Meet IT requirements"),(0,n.kt)("p",null,"Rancher supports centralized authentication, access control, and monitoring for all Kubernetes clusters under its control. For example, you can:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Use your Active Directory credentials to access Kubernetes clusters hosted by cloud vendors, such as GKE."),(0,n.kt)("li",{parentName:"ul"},"Setup and enforce access control and security policies across all users, groups, projects, clusters, and clouds."),(0,n.kt)("li",{parentName:"ul"},"View the health and capacity of your Kubernetes clusters from a single-pane-of-glass.")),(0,n.kt)("h2",{id:"empower-devops-teams"},"Empower DevOps Teams"),(0,n.kt)("p",null,"Rancher provides an intuitive user interface for DevOps engineers to manage their application workload. The user does not need to have in-depth knowledge of Kubernetes concepts to start using Rancher. Rancher catalog contains a set of useful DevOps tools. Rancher is certified with a wide selection of cloud native ecosystem products, including, for example, security tools, monitoring systems, container registries, and storage and networking drivers."),(0,n.kt)("p",null,"The following figure illustrates the role Rancher plays in IT and DevOps organizations. Each team deploys their applications on the public or private clouds they choose. IT administrators gain visibility and enforce policies across all users, clusters, and clouds."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Platform",src:r(83362).Z,width:"791",height:"245"})),(0,n.kt)("h2",{id:"features-of-the-rancher-api-server"},"Features of the Rancher API Server"),(0,n.kt)("p",null,"The Rancher API server is built on top of an embedded Kubernetes API server and an etcd database. It implements the following functionalities:"),(0,n.kt)("h3",{id:"authorization-and-role-based-access-control"},"Authorization and Role-Based Access Control"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"User management:")," The Rancher API server ",(0,n.kt)("a",{parentName:"li",href:"/zh/v2.0-v2.4/pages-for-subheaders/about-authentication"},"manages user identities")," that correspond to external authentication providers like Active Directory or GitHub, in addition to local users."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Authorization:")," The Rancher API server manages ",(0,n.kt)("a",{parentName:"li",href:"/zh/v2.0-v2.4/pages-for-subheaders/manage-role-based-access-control-rbac"},"access control")," and ",(0,n.kt)("a",{parentName:"li",href:"/zh/v2.0-v2.4/how-to-guides/advanced-user-guides/authentication-permissions-and-global-configuration/create-pod-security-policies"},"security")," policies.")),(0,n.kt)("h3",{id:"working-with-kubernetes"},"Working with Kubernetes"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Provisioning Kubernetes clusters:")," The Rancher API server can ",(0,n.kt)("a",{parentName:"li",href:"/zh/v2.0-v2.4/pages-for-subheaders/kubernetes-clusters-in-rancher-setup"},"provision Kubernetes")," on existing nodes, or perform ",(0,n.kt)("a",{parentName:"li",href:"/zh/v2.0-v2.4/getting-started/installation-and-upgrade/upgrade-and-roll-back-kubernetes"},"Kubernetes upgrades.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Catalog management:")," Rancher provides the ability to use a ",(0,n.kt)("a",{parentName:"li",href:"/zh/v2.0-v2.4/pages-for-subheaders/helm-charts-in-rancher"},"catalog of Helm charts")," that make it easy to repeatedly deploy applications."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Managing projects:")," A project is a group of multiple namespaces and access control policies within a cluster. A project is a Rancher concept, not a Kubernetes concept, which allows you to manage multiple namespaces as a group and perform Kubernetes operations in them. The Rancher UI provides features for ",(0,n.kt)("a",{parentName:"li",href:"/zh/v2.0-v2.4/pages-for-subheaders/manage-projects"},"project administration")," and for ",(0,n.kt)("a",{parentName:"li",href:"/zh/v2.0-v2.4/pages-for-subheaders/kubernetes-resources-setup"},"managing applications within projects.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Pipelines:")," Setting up a ",(0,n.kt)("a",{parentName:"li",href:"/zh/v2.0-v2.4/how-to-guides/advanced-user-guides/manage-projects/ci-cd-pipelines"},"pipeline")," can help developers deliver new software as quickly and efficiently as possible. Within Rancher, you can configure pipelines for each of your Rancher projects."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Istio:")," Our ",(0,n.kt)("a",{parentName:"li",href:"/zh/v2.0-v2.4/pages-for-subheaders/istio"},"integration with Istio")," is designed so that a Rancher operator, such as an administrator or cluster owner, can deliver Istio to developers. Then developers can use Istio to enforce security policies, troubleshoot problems, or manage traffic for green/blue deployments, canary deployments, or A/B testing.")),(0,n.kt)("h3",{id:"working-with-cloud-infrastructure"},"Working with Cloud Infrastructure"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Tracking nodes:")," The Rancher API server tracks identities of all the ",(0,n.kt)("a",{parentName:"li",href:"/zh/v2.0-v2.4/how-to-guides/advanced-user-guides/manage-clusters/nodes-and-node-pools"},"nodes")," in all clusters."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Setting up infrastructure:"),"  When configured to use a cloud provider, Rancher can dynamically provision ",(0,n.kt)("a",{parentName:"li",href:"/zh/v2.0-v2.4/pages-for-subheaders/use-new-nodes-in-an-infra-provider"},"new nodes")," and ",(0,n.kt)("a",{parentName:"li",href:"/zh/v2.0-v2.4/pages-for-subheaders/create-kubernetes-persistent-storage"},"persistent storage")," in the cloud.")),(0,n.kt)("h3",{id:"cluster-visibility"},"Cluster Visibility"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Logging:")," Rancher can integrate with a variety of popular logging services and tools that exist outside of your Kubernetes clusters."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Monitoring:")," Using Rancher, you can monitor the state and processes of your cluster nodes, Kubernetes components, and software deployments through integration with Prometheus, a leading open-source monitoring solution."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Alerting:")," To keep your clusters and applications healthy and driving your organizational productivity forward, you need to stay informed of events occurring in your clusters and projects, both planned and unplanned.")),(0,n.kt)("h2",{id:"editing-downstream-clusters-with-rancher"},"Editing Downstream Clusters with Rancher"),(0,n.kt)("p",null,"The options and settings available for an existing cluster change based on the method that you used to provision it. For example, only clusters ",(0,n.kt)("a",{parentName:"p",href:"/zh/v2.0-v2.4/pages-for-subheaders/launch-kubernetes-with-rancher"},"provisioned by RKE")," have ",(0,n.kt)("strong",{parentName:"p"},"Cluster Options")," available for editing."),(0,n.kt)("p",null,"After a cluster is created with Rancher, a cluster administrator can manage cluster membership, enable pod security policies, and manage node pools, among ",(0,n.kt)("a",{parentName:"p",href:"/zh/v2.0-v2.4/pages-for-subheaders/cluster-configuration"},"other options.")),(0,n.kt)("p",null,"The following table summarizes the options and settings available for each cluster type:"),(0,n.kt)(i.ZP,{mdxType:"ClusterCapabilitiesTable"}))}p.isMDXComponent=!0},13683:(e,t,r)=>{r.d(t,{ZP:()=>s});var a=r(87462),n=(r(67294),r(3905));const i={toc:[]};function s(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},i,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Action"),(0,n.kt)("th",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"th",href:"/zh/v2.0-v2.4/pages-for-subheaders/launch-kubernetes-with-rancher"},"Rancher launched Kubernetes Clusters")),(0,n.kt)("th",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"th",href:"/zh/v2.0-v2.4/pages-for-subheaders/set-up-clusters-from-hosted-kubernetes-providers"},"Hosted Kubernetes Clusters")),(0,n.kt)("th",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"th",href:"/zh/v2.0-v2.4/how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/import-existing-clusters"},"Imported Clusters")))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"/zh/v2.0-v2.4/how-to-guides/advanced-user-guides/manage-clusters/access-clusters/use-kubectl-and-kubeconfig"},"Using kubectl and a kubeconfig file to Access a Cluster")),(0,n.kt)("td",{parentName:"tr",align:null},"\u2713"),(0,n.kt)("td",{parentName:"tr",align:null},"\u2713"),(0,n.kt)("td",{parentName:"tr",align:null},"\u2713")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"/zh/v2.0-v2.4/how-to-guides/advanced-user-guides/manage-clusters/access-clusters/add-users-to-clusters"},"Managing Cluster Members")),(0,n.kt)("td",{parentName:"tr",align:null},"\u2713"),(0,n.kt)("td",{parentName:"tr",align:null},"\u2713"),(0,n.kt)("td",{parentName:"tr",align:null},"\u2713")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"/zh/v2.0-v2.4/pages-for-subheaders/cluster-configuration"},"Editing and Upgrading Clusters")),(0,n.kt)("td",{parentName:"tr",align:null},"\u2713"),(0,n.kt)("td",{parentName:"tr",align:null},"\u2713"),(0,n.kt)("td",{parentName:"tr",align:null},"*")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"/zh/v2.0-v2.4/how-to-guides/advanced-user-guides/manage-clusters/nodes-and-node-pools"},"Managing Nodes")),(0,n.kt)("td",{parentName:"tr",align:null},"\u2713"),(0,n.kt)("td",{parentName:"tr",align:null},"\u2713"),(0,n.kt)("td",{parentName:"tr",align:null},"\u2713")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"/zh/v2.0-v2.4/pages-for-subheaders/create-kubernetes-persistent-storage"},"Managing Persistent Volumes and Storage Classes")),(0,n.kt)("td",{parentName:"tr",align:null},"\u2713"),(0,n.kt)("td",{parentName:"tr",align:null},"\u2713"),(0,n.kt)("td",{parentName:"tr",align:null},"\u2713")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"/zh/v2.0-v2.4/how-to-guides/advanced-user-guides/manage-clusters/projects-and-namespaces"},"Managing Projects, Namespaces and Workloads")),(0,n.kt)("td",{parentName:"tr",align:null},"\u2713"),(0,n.kt)("td",{parentName:"tr",align:null},"\u2713"),(0,n.kt)("td",{parentName:"tr",align:null},"\u2713")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"/zh/v2.0-v2.4/pages-for-subheaders/helm-charts-in-rancher/"},"Using App Catalogs")),(0,n.kt)("td",{parentName:"tr",align:null},"\u2713"),(0,n.kt)("td",{parentName:"tr",align:null},"\u2713"),(0,n.kt)("td",{parentName:"tr",align:null},"\u2713")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"/zh/v2.0-v2.4/reference-guides/rancher-cluster-tools"},"Configuring Tools (Alerts, Notifiers, Logging, Monitoring, Istio)")),(0,n.kt)("td",{parentName:"tr",align:null},"\u2713"),(0,n.kt)("td",{parentName:"tr",align:null},"\u2713"),(0,n.kt)("td",{parentName:"tr",align:null},"\u2713")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"/zh/v2.0-v2.4/how-to-guides/advanced-user-guides/manage-clusters/clone-cluster-configuration"},"Cloning Clusters")),(0,n.kt)("td",{parentName:"tr",align:null},"\u2713"),(0,n.kt)("td",{parentName:"tr",align:null},"\u2713"),(0,n.kt)("td",{parentName:"tr",align:null})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"/zh/v2.0-v2.4/how-to-guides/advanced-user-guides/manage-clusters/rotate-certificates"},"Ability to rotate certificates")),(0,n.kt)("td",{parentName:"tr",align:null},"\u2713"),(0,n.kt)("td",{parentName:"tr",align:null}),(0,n.kt)("td",{parentName:"tr",align:null})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"/zh/v2.0-v2.4/how-to-guides/advanced-user-guides/manage-clusters/backing-up-etcd"},"Ability to back up your Kubernetes Clusters")),(0,n.kt)("td",{parentName:"tr",align:null},"\u2713"),(0,n.kt)("td",{parentName:"tr",align:null}),(0,n.kt)("td",{parentName:"tr",align:null})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"/zh/v2.0-v2.4/how-to-guides/advanced-user-guides/manage-clusters/restoring-etcd"},"Ability to recover and restore etcd")),(0,n.kt)("td",{parentName:"tr",align:null},"\u2713"),(0,n.kt)("td",{parentName:"tr",align:null}),(0,n.kt)("td",{parentName:"tr",align:null})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"/zh/v2.0-v2.4/how-to-guides/advanced-user-guides/manage-clusters/clean-cluster-nodes"},"Cleaning Kubernetes components when clusters are no longer reachable from Rancher")),(0,n.kt)("td",{parentName:"tr",align:null},"\u2713"),(0,n.kt)("td",{parentName:"tr",align:null}),(0,n.kt)("td",{parentName:"tr",align:null})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"/zh/v2.0-v2.4/how-to-guides/advanced-user-guides/manage-clusters/add-a-pod-security-policy"},"Configuring Pod Security Policies")),(0,n.kt)("td",{parentName:"tr",align:null},"\u2713"),(0,n.kt)("td",{parentName:"tr",align:null}),(0,n.kt)("td",{parentName:"tr",align:null})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"/zh/v2.0-v2.4/pages-for-subheaders/cis-scans"},"Running Security Scans")),(0,n.kt)("td",{parentName:"tr",align:null},"\u2713"),(0,n.kt)("td",{parentName:"tr",align:null}),(0,n.kt)("td",{parentName:"tr",align:null})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"/zh/v2.0-v2.4/reference-guides/cluster-configuration/rancher-server-configuration/rke1-cluster-configuration#authorized-cluster-endpoint"},"Authorized Cluster Endpoint")),(0,n.kt)("td",{parentName:"tr",align:null},"\u2713"),(0,n.kt)("td",{parentName:"tr",align:null}),(0,n.kt)("td",{parentName:"tr",align:null})))),(0,n.kt)("p",null,"*"," Cluster configuration options can't be edited for imported clusters, except for K3s clusters."))}s.isMDXComponent=!0},83362:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/platform-9c0c4130a7a0828898dbc7af56f76df7.png"}}]);