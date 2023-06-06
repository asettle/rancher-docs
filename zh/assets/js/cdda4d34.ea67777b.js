"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[97628],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>m});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=a.createContext({}),c=function(e){var t=a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=c(r),m=n,h=u["".concat(s,".").concat(m)]||u[m]||d[m]||o;return r?a.createElement(h,i(i({ref:t},p),{},{components:r})):a.createElement(h,i({ref:t},p))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:n,i[1]=l;for(var c=2;c<o;c++)i[c]=r[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}u.displayName="MDXCreateElement"},69734:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var a=r(87462),n=(r(67294),r(3905));const o={title:"vSphere Node Template Configuration in Rancher v2.3.0"},i=void 0,l={unversionedId:"reference-guides/cluster-configuration/downstream-cluster-configuration/node-template-configuration/vsphere/v2.3.0",id:"version-2.0-2.4/reference-guides/cluster-configuration/downstream-cluster-configuration/node-template-configuration/vsphere/v2.3.0",title:"vSphere Node Template Configuration in Rancher v2.3.0",description:"Account Access",source:"@site/versioned_docs/version-2.0-2.4/reference-guides/cluster-configuration/downstream-cluster-configuration/node-template-configuration/vsphere/v2.3.0.md",sourceDirName:"reference-guides/cluster-configuration/downstream-cluster-configuration/node-template-configuration/vsphere",slug:"/reference-guides/cluster-configuration/downstream-cluster-configuration/node-template-configuration/vsphere/v2.3.0",permalink:"/zh/v2.0-v2.4/reference-guides/cluster-configuration/downstream-cluster-configuration/node-template-configuration/vsphere/v2.3.0",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/versioned_docs/version-2.0-2.4/reference-guides/cluster-configuration/downstream-cluster-configuration/node-template-configuration/vsphere/v2.3.0.md",tags:[],version:"2.0-2.4",lastUpdatedAt:1683064602,formattedLastUpdatedAt:"2023\u5e745\u67082\u65e5",frontMatter:{title:"vSphere Node Template Configuration in Rancher v2.3.0"},sidebar:"tutorialSidebar",previous:{title:"vSphere Node Template Configuration in Rancher v2.3.3",permalink:"/zh/v2.0-v2.4/reference-guides/cluster-configuration/downstream-cluster-configuration/node-template-configuration/vsphere/v2.3.3"},next:{title:"vSphere Node Template Configuration in Rancher v2.2.0",permalink:"/zh/v2.0-v2.4/reference-guides/cluster-configuration/downstream-cluster-configuration/node-template-configuration/vsphere/v2.2.0"}},s={},c=[{value:"Account Access",id:"account-access",level:2},{value:"Scheduling",id:"scheduling",level:2},{value:"Instance Options",id:"instance-options",level:2},{value:"Node Tags and Custom Attributes",id:"node-tags-and-custom-attributes",level:2},{value:"Cloud Init",id:"cloud-init",level:2}],p={toc:c};function d(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"account-access"},"Account Access"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Parameter"),(0,n.kt)("th",{parentName:"tr",align:"center"},"Required"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Cloud Credentials"),(0,n.kt)("td",{parentName:"tr",align:"center"},"*"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Your vSphere account access information, stored in a ",(0,n.kt)("a",{parentName:"td",href:"/zh/v2.0-v2.4/reference-guides/user-settings/manage-cloud-credentials"},"cloud credential."))))),(0,n.kt)("p",null,"Your cloud credential has these fields:"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Credential Field"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"vCenter or ESXi Server"),(0,n.kt)("td",{parentName:"tr",align:null},"Enter the vCenter or ESXi hostname/IP. ESXi is the virtualization platform where you create and run virtual machines and virtual appliances. vCenter Server is the service through which you manage multiple hosts connected in a network and pool host resources.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Port"),(0,n.kt)("td",{parentName:"tr",align:null},"Optional: configure configure the port of the vCenter or ESXi server.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Username and password"),(0,n.kt)("td",{parentName:"tr",align:null},"Enter your vSphere login username and password.")))),(0,n.kt)("h2",{id:"scheduling"},"Scheduling"),(0,n.kt)("p",null,"Choose what hypervisor the virtual machine will be scheduled to."),(0,n.kt)("p",null,"In the ",(0,n.kt)("strong",{parentName:"p"},"Scheduling")," section, enter:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"The name/path of the ",(0,n.kt)("strong",{parentName:"li"},"Data Center")," to create the VMs in"),(0,n.kt)("li",{parentName:"ul"},"The name of the ",(0,n.kt)("strong",{parentName:"li"},"VM Network")," to attach to"),(0,n.kt)("li",{parentName:"ul"},"The name/path of the ",(0,n.kt)("strong",{parentName:"li"},"Datastore")," to store the disks in")),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Parameter"),(0,n.kt)("th",{parentName:"tr",align:"center"},"Required"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Data Center"),(0,n.kt)("td",{parentName:"tr",align:"center"},"*"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Name/path of the datacenter to create VMs in.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Pool"),(0,n.kt)("td",{parentName:"tr",align:"center"}),(0,n.kt)("td",{parentName:"tr",align:"left"},"Name/path of the resource pool to schedule the VMs in. If not specified, the default resource pool is used.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Host"),(0,n.kt)("td",{parentName:"tr",align:"center"}),(0,n.kt)("td",{parentName:"tr",align:"left"},"Name/path of the host system to schedule VMs in. If specified, the host system's pool will be used and the ",(0,n.kt)("em",{parentName:"td"},"Pool")," parameter will be ignored.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Network"),(0,n.kt)("td",{parentName:"tr",align:"center"},"*"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Name of the VM network to attach VMs to.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Data Store"),(0,n.kt)("td",{parentName:"tr",align:"center"},"*"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Datastore to store the VM disks.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Folder"),(0,n.kt)("td",{parentName:"tr",align:"center"}),(0,n.kt)("td",{parentName:"tr",align:"left"},"Name of a folder in the datacenter to create the VMs in. Must already exist. The folder name should be prefaced with ",(0,n.kt)("inlineCode",{parentName:"td"},"vm/")," in your vSphere config file.")))),(0,n.kt)("h2",{id:"instance-options"},"Instance Options"),(0,n.kt)("p",null,"In the ",(0,n.kt)("strong",{parentName:"p"},"Instance Options")," section, configure the number of vCPUs, memory, and disk size for the VMs created by this template."),(0,n.kt)("p",null,"Only VMs booting from RancherOS ISO are supported."),(0,n.kt)("p",null,"Ensure that the OS ISO URL contains the URL of the VMware ISO release for RancherOS: ",(0,n.kt)("inlineCode",{parentName:"p"},"rancheros-vmware.iso"),"."),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Parameter"),(0,n.kt)("th",{parentName:"tr",align:"center"},"Required"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"CPUs"),(0,n.kt)("td",{parentName:"tr",align:"center"},"*"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Number of vCPUS to assign to VMs.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Memory"),(0,n.kt)("td",{parentName:"tr",align:"center"},"*"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Amount of memory to assign to VMs.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Disk"),(0,n.kt)("td",{parentName:"tr",align:"center"},"*"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Size of the disk (in MB) to attach to the VMs.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Cloud Init"),(0,n.kt)("td",{parentName:"tr",align:"center"}),(0,n.kt)("td",{parentName:"tr",align:"left"},"URL of a ",(0,n.kt)("a",{parentName:"td",href:"https://rancher.com/docs/os/v1.x/en/configuration/"},"RancherOS cloud-config")," file to provision VMs with. This file allows further customization of the RancherOS operating system, such as network configuration, DNS servers, or system daemons.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"OS ISO URL"),(0,n.kt)("td",{parentName:"tr",align:"center"},"*"),(0,n.kt)("td",{parentName:"tr",align:"left"},"URL of a RancherOS vSphere ISO file to boot the VMs from. You can find URLs for specific versions in the ",(0,n.kt)("a",{parentName:"td",href:"https://github.com/rancher/os"},"Rancher OS GitHub Repo"),".")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Configuration Parameters"),(0,n.kt)("td",{parentName:"tr",align:"center"}),(0,n.kt)("td",{parentName:"tr",align:"left"},"Additional configuration parameters for the VMs. These correspond to the ",(0,n.kt)("a",{parentName:"td",href:"https://kb.vmware.com/s/article/1016098"},"Advanced Settings")," in the vSphere console. Example use cases include providing RancherOS ",(0,n.kt)("a",{parentName:"td",href:"https://rancher.com/docs/os/v1.x/en/installation/cloud/vmware-esxi/#vmware-guestinfo"},"guestinfo")," parameters or enabling disk UUIDs for the VMs (",(0,n.kt)("inlineCode",{parentName:"td"},"disk.EnableUUID=TRUE"),").")))),(0,n.kt)("h2",{id:"node-tags-and-custom-attributes"},"Node Tags and Custom Attributes"),(0,n.kt)("p",null,"These attributes allow you to attach metadata to objects in the vSphere inventory to make it easier to sort and search for these objects."),(0,n.kt)("p",null,"Optionally, you can:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Provide a set of configuration parameters (instance-options) for the VMs."),(0,n.kt)("li",{parentName:"ul"},"Assign labels to the VMs that can be used as a base for scheduling rules in the cluster."),(0,n.kt)("li",{parentName:"ul"},"Customize the configuration of the Docker daemon on the VMs that will be created.")),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},(0,n.kt)("strong",{parentName:"p"},"Note:")," Custom attributes are a legacy feature that will eventually be removed from vSphere.")),(0,n.kt)("h2",{id:"cloud-init"},"Cloud Init"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://cloudinit.readthedocs.io/en/latest/"},"Cloud-init")," allows you to initialize your nodes by applying configuration on the first boot. This may involve things such as creating users, authorizing SSH keys or setting up the network."),(0,n.kt)("p",null,"You may specify the URL of a RancherOS cloud-config.yaml file in the the ",(0,n.kt)("strong",{parentName:"p"},"Cloud Init")," field. Refer to the ",(0,n.kt)("a",{parentName:"p",href:"https://rancher.com/docs/os/v1.x/en/configuration/#cloud-config"},"RancherOS Documentation")," for details on the supported configuration directives. Note that the URL must be network accessible from the VMs created by the template."))}d.isMDXComponent=!0}}]);