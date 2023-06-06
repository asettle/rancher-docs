"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[670],{3905:(e,r,t)=>{t.d(r,{Zo:()=>c,kt:()=>h});var a=t(67294);function n(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);r&&(a=a.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){n(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function s(e,r){if(null==e)return{};var t,a,n=function(e,r){if(null==e)return{};var t,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],r.indexOf(t)>=0||(n[t]=e[t]);return n}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var u=a.createContext({}),l=function(e){var r=a.useContext(u),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},c=function(e){var r=l(e.components);return a.createElement(u.Provider,{value:r},e.children)},p={inlineCode:"code",wrapper:function(e){var r=e.children;return a.createElement(a.Fragment,{},r)}},d=a.forwardRef((function(e,r){var t=e.components,n=e.mdxType,o=e.originalType,u=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=l(t),h=n,m=d["".concat(u,".").concat(h)]||d[h]||p[h]||o;return t?a.createElement(m,i(i({ref:r},c),{},{components:t})):a.createElement(m,i({ref:r},c))}));function h(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var o=t.length,i=new Array(o);i[0]=d;var s={};for(var u in r)hasOwnProperty.call(r,u)&&(s[u]=r[u]);s.originalType=e,s.mdxType="string"==typeof e?e:n,i[1]=s;for(var l=2;l<o;l++)i[l]=t[l];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},57485:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>u,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>s,toc:()=>l});var a=t(87462),n=(t(67294),t(3905));const o={title:"RKE Templates and Infrastructure"},i=void 0,s={unversionedId:"how-to-guides/new-user-guides/authentication-permissions-and-global-configuration/about-rke1-templates/infrastructure",id:"how-to-guides/new-user-guides/authentication-permissions-and-global-configuration/about-rke1-templates/infrastructure",title:"RKE Templates and Infrastructure",description:"In Rancher, RKE templates are used to provision Kubernetes and define Rancher settings, while node templates are used to provision nodes.",source:"@site/docs/how-to-guides/new-user-guides/authentication-permissions-and-global-configuration/about-rke1-templates/infrastructure.md",sourceDirName:"how-to-guides/new-user-guides/authentication-permissions-and-global-configuration/about-rke1-templates",slug:"/how-to-guides/new-user-guides/authentication-permissions-and-global-configuration/about-rke1-templates/infrastructure",permalink:"/how-to-guides/new-user-guides/authentication-permissions-and-global-configuration/about-rke1-templates/infrastructure",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/docs/how-to-guides/new-user-guides/authentication-permissions-and-global-configuration/about-rke1-templates/infrastructure.md",tags:[],version:"current",lastUpdatedAt:1685561179,formattedLastUpdatedAt:"May 31, 2023",frontMatter:{title:"RKE Templates and Infrastructure"},sidebar:"tutorialSidebar",previous:{title:"Applying Templates",permalink:"/how-to-guides/new-user-guides/authentication-permissions-and-global-configuration/about-rke1-templates/apply-templates"},next:{title:"Example Scenarios",permalink:"/how-to-guides/new-user-guides/authentication-permissions-and-global-configuration/about-rke1-templates/example-use-cases"}},u={},l=[{value:"Node Templates",id:"node-templates",level:3},{value:"Terraform",id:"terraform",level:3},{value:"How Does Terraform Work?",id:"how-does-terraform-work",level:2},{value:"Tips for Working with Terraform",id:"tips-for-working-with-terraform",level:2},{value:"Tip for Creating CIS Benchmark Compliant Clusters",id:"tip-for-creating-cis-benchmark-compliant-clusters",level:2},{value:"Resources",id:"resources",level:2}],c={toc:l};function p(e){let{components:r,...t}=e;return(0,n.kt)("wrapper",(0,a.Z)({},c,t,{components:r,mdxType:"MDXLayout"}),(0,n.kt)("head",null,(0,n.kt)("link",{rel:"canonical",href:"https://ranchermanager.docs.rancher.com/how-to-guides/new-user-guides/authentication-permissions-and-global-configuration/about-rke1-templates/infrastructure"})),(0,n.kt)("p",null,"In Rancher, RKE templates are used to provision Kubernetes and define Rancher settings, while node templates are used to provision nodes."),(0,n.kt)("p",null,"Therefore, even if RKE template enforcement is turned on, the end user still has flexibility when picking the underlying hardware when creating a Rancher cluster. The end users of an RKE template can still choose an infrastructure provider and the nodes they want to use."),(0,n.kt)("p",null,"If you want to standardize the hardware in your clusters, use RKE templates conjunction with node templates or with a server provisioning tool such as Terraform."),(0,n.kt)("h3",{id:"node-templates"},"Node Templates"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"/reference-guides/user-settings/manage-node-templates"},"Node templates")," are responsible for node configuration and node provisioning in Rancher. From your user profile, you can set up node templates to define which templates are used in each of your node pools. With node pools enabled, you can make sure you have the required number of nodes in each node pool, and ensure that all nodes in the pool are the same."),(0,n.kt)("h3",{id:"terraform"},"Terraform"),(0,n.kt)("p",null,"Terraform is a server provisioning tool. It uses infrastructure-as-code that lets you create almost every aspect of your infrastructure with Terraform configuration files. It can automate the process of server provisioning in a way that is self-documenting and easy to track in version control."),(0,n.kt)("p",null,"This section focuses on how to use Terraform with the ",(0,n.kt)("a",{parentName:"p",href:"https://www.terraform.io/docs/providers/rancher2/"},"Rancher 2 Terraform provider"),", which is a recommended option to standardize the hardware for your Kubernetes clusters. If you use the Rancher Terraform provider to provision hardware, and then use an RKE template to provision a Kubernetes cluster on that hardware, you can quickly create a comprehensive, production-ready cluster."),(0,n.kt)("p",null,"Terraform allows you to:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Define almost any kind of infrastructure-as-code, including servers, databases, load balancers, monitoring, firewall settings, and SSL certificates"),(0,n.kt)("li",{parentName:"ul"},"Leverage catalog apps and multi-cluster apps"),(0,n.kt)("li",{parentName:"ul"},"Codify infrastructure across many platforms, including Rancher and major cloud providers"),(0,n.kt)("li",{parentName:"ul"},"Commit infrastructure-as-code to version control"),(0,n.kt)("li",{parentName:"ul"},"Easily repeat configuration and setup of infrastructure"),(0,n.kt)("li",{parentName:"ul"},"Incorporate infrastructure changes into standard development practices"),(0,n.kt)("li",{parentName:"ul"},"Prevent configuration drift, in which some servers become configured differently than others")),(0,n.kt)("h2",{id:"how-does-terraform-work"},"How Does Terraform Work?"),(0,n.kt)("p",null,"Terraform is written in files with the extension ",(0,n.kt)("inlineCode",{parentName:"p"},".tf"),". It is written in HashiCorp Configuration Language, which is a declarative language that lets you define the infrastructure you want in your cluster, the cloud provider you are using, and your credentials for the provider. Then Terraform makes API calls to the provider in order to efficiently create that infrastructure."),(0,n.kt)("p",null,"To create a Rancher-provisioned cluster with Terraform, go to your Terraform configuration file and define the provider as Rancher 2. You can set up your Rancher 2 provider with a Rancher API key. Note: The API key has the same permissions and access level as the user it is associated with."),(0,n.kt)("p",null,"Then Terraform calls the Rancher API to provision your infrastructure, and Rancher calls the infrastructure provider. As an example, if you wanted to use Rancher to provision infrastructure on AWS, you would provide both your Rancher API key and your AWS credentials in the Terraform configuration file or in environment variables so that they could be used to provision the infrastructure."),(0,n.kt)("p",null,"When you need to make changes to your infrastructure, instead of manually updating the servers, you can make changes in the Terraform configuration files. Then those files can be committed to version control, validated, and reviewed as necessary. Then when you run ",(0,n.kt)("inlineCode",{parentName:"p"},"terraform apply"),", the changes would be deployed."),(0,n.kt)("h2",{id:"tips-for-working-with-terraform"},"Tips for Working with Terraform"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"There are examples of how to provide most aspects of a cluster in the ",(0,n.kt)("a",{parentName:"p",href:"https://www.terraform.io/docs/providers/rancher2/"},"documentation for the Rancher 2 provider."))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"In the Terraform settings, you can install Docker Machine by using the Docker Machine node driver.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"You can also modify auth in the Terraform provider.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"You can reverse engineer how to do define a setting in Terraform by changing the setting in Rancher, then going back and checking your Terraform state file to see how it maps to the current state of your infrastructure.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"If you want to manage Kubernetes cluster settings, Rancher settings, and hardware settings all in one place, use ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/rancher/terraform-modules"},"Terraform modules"),". You can pass a cluster configuration YAML file or an RKE template configuration file to a Terraform module so that the Terraform module will create it. In that case, you could use your infrastructure-as-code to manage the version control and revision history of both your Kubernetes cluster and its underlying hardware."))),(0,n.kt)("h2",{id:"tip-for-creating-cis-benchmark-compliant-clusters"},"Tip for Creating CIS Benchmark Compliant Clusters"),(0,n.kt)("p",null,"This section describes one way that you can make security and compliance-related config files standard in your clusters."),(0,n.kt)("p",null,"When you create a ",(0,n.kt)("a",{parentName:"p",href:"/pages-for-subheaders/rancher-security"},"CIS benchmark compliant cluster,")," you have an encryption config file and an audit log config file."),(0,n.kt)("p",null,"Your infrastructure provisioning system can write those files to disk. Then in your RKE template, you would specify where those files will be, then add your encryption config file and audit log config file as extra mounts to the ",(0,n.kt)("inlineCode",{parentName:"p"},"kube-api-server"),"."),(0,n.kt)("p",null,"Then you would make sure that the ",(0,n.kt)("inlineCode",{parentName:"p"},"kube-api-server")," flag in your RKE template uses your CIS-compliant config files."),(0,n.kt)("p",null,"In this way, you can create flags that comply with the CIS benchmark."),(0,n.kt)("h2",{id:"resources"},"Resources"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://www.terraform.io/docs/"},"Terraform documentation")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://www.terraform.io/docs/providers/rancher2/"},"Rancher2 Terraform provider documentation")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://youtu.be/YNCq-prI8-8"},"The RanchCast - Episode 1: Rancher 2 Terraform Provider"),": In this demo, Director of Community Jason van Brackel walks through using the Rancher 2 Terraform Provider to provision nodes and create a custom cluster.")))}p.isMDXComponent=!0}}]);