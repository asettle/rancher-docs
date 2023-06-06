"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[23402],{3905:(e,t,a)=>{a.d(t,{Zo:()=>m,kt:()=>u});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var o=r.createContext({}),p=function(e){var t=r.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},m=function(e){var t=p(e.components);return r.createElement(o.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,o=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),d=p(a),u=n,c=d["".concat(o,".").concat(u)]||d[u]||h[u]||i;return a?r.createElement(c,s(s({ref:t},m),{},{components:a})):r.createElement(c,s({ref:t},m))}));function u(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,s=new Array(i);s[0]=d;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l.mdxType="string"==typeof e?e:n,s[1]=l;for(var p=2;p<i;p++)s[p]=a[p];return r.createElement.apply(null,s)}return r.createElement.apply(null,a)}d.displayName="MDXCreateElement"},7297:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>o,contentTitle:()=>s,default:()=>c,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var r=a(87462),n=(a(67294),a(3905));const i={title:"2. Collect and Publish Images to your Private Registry"},s=void 0,l={unversionedId:"getting-started/installation-and-upgrade/other-installation-methods/air-gapped-helm-cli-install/publish-images",id:"version-2.0-2.4/getting-started/installation-and-upgrade/other-installation-methods/air-gapped-helm-cli-install/publish-images",title:"2. Collect and Publish Images to your Private Registry",description:"This section describes how to set up your private registry so that when you install Rancher, Rancher will pull all the required images from this registry.",source:"@site/versioned_docs/version-2.0-2.4/getting-started/installation-and-upgrade/other-installation-methods/air-gapped-helm-cli-install/publish-images.md",sourceDirName:"getting-started/installation-and-upgrade/other-installation-methods/air-gapped-helm-cli-install",slug:"/getting-started/installation-and-upgrade/other-installation-methods/air-gapped-helm-cli-install/publish-images",permalink:"/zh/v2.0-v2.4/getting-started/installation-and-upgrade/other-installation-methods/air-gapped-helm-cli-install/publish-images",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/versioned_docs/version-2.0-2.4/getting-started/installation-and-upgrade/other-installation-methods/air-gapped-helm-cli-install/publish-images.md",tags:[],version:"2.0-2.4",lastUpdatedAt:1684958862,formattedLastUpdatedAt:"2023\u5e745\u670824\u65e5",frontMatter:{title:"2. Collect and Publish Images to your Private Registry"},sidebar:"tutorialSidebar",previous:{title:"1. Set up Infrastructure and Private Registry",permalink:"/zh/v2.0-v2.4/getting-started/installation-and-upgrade/other-installation-methods/air-gapped-helm-cli-install/infrastructure-private-registry"},next:{title:"3. Install Kubernetes (Skip for Docker Installs)",permalink:"/zh/v2.0-v2.4/getting-started/installation-and-upgrade/other-installation-methods/air-gapped-helm-cli-install/install-kubernetes"}},o={},p=[{value:"Prerequisites",id:"prerequisites",level:3},{value:"1. Find the required assets for your Rancher version",id:"1-find-the-required-assets-for-your-rancher-version",level:3},{value:"2. Collect the cert-manager image",id:"2-collect-the-cert-manager-image",level:3},{value:"3. Save the images to your workstation",id:"3-save-the-images-to-your-workstation",level:3},{value:"4. Populate the private registry",id:"4-populate-the-private-registry",level:3},{value:"Windows Steps",id:"windows-steps",level:2},{value:"Prerequisites",id:"prerequisites-1",level:3},{value:"1. Find the required assets for your Rancher version",id:"1-find-the-required-assets-for-your-rancher-version-1",level:3},{value:"2. Save the images to your Windows Server workstation",id:"2-save-the-images-to-your-windows-server-workstation",level:3},{value:"3. Prepare the Docker daemon",id:"3-prepare-the-docker-daemon",level:3},{value:"4. Populate the private registry",id:"4-populate-the-private-registry-1",level:3},{value:"Linux Steps",id:"linux-steps",level:2},{value:"Prerequisites",id:"prerequisites-2",level:3},{value:"1. Find the required assets for your Rancher version",id:"1-find-the-required-assets-for-your-rancher-version-2",level:3},{value:"2. Collect all the required images",id:"2-collect-all-the-required-images",level:3},{value:"3. Save the images to your workstation",id:"3-save-the-images-to-your-workstation-1",level:3},{value:"4. Populate the private registry",id:"4-populate-the-private-registry-2",level:3},{value:"Next step for Kubernetes Installs - Launch a Kubernetes Cluster",id:"next-step-for-kubernetes-installs---launch-a-kubernetes-cluster",level:3},{value:"Next step for Docker Installs - Install Rancher",id:"next-step-for-docker-installs---install-rancher",level:3}],m=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,n.kt)("div",t)},h=m("Tabs"),d=m("TabItem"),u={toc:p};function c(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,r.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("head",null,(0,n.kt)("link",{rel:"canonical",href:"https://ranchermanager.docs.rancher.com/getting-started/installation-and-upgrade/other-installation-methods/air-gapped-helm-cli-install/publish-images"})),(0,n.kt)("p",null,"This section describes how to set up your private registry so that when you install Rancher, Rancher will pull all the required images from this registry."),(0,n.kt)("p",null,"By default, all images used to ",(0,n.kt)("a",{parentName:"p",href:"/zh/v2.0-v2.4/pages-for-subheaders/kubernetes-clusters-in-rancher-setup"},"provision Kubernetes clusters")," or launch any ",(0,n.kt)("a",{parentName:"p",href:"/zh/v2.0-v2.4/reference-guides/rancher-cluster-tools"},"tools")," in Rancher, e.g. monitoring, pipelines, alerts, are pulled from Docker Hub. In an air gapped installation of Rancher, you will need a private registry that is located somewhere accessible by your Rancher server. Then, you will load the registry with all the images."),(0,n.kt)("p",null,"Populating the private registry with images is the same process for installing Rancher with Docker and for installing Rancher on a Kubernetes cluster."),(0,n.kt)("p",null,"The steps in this section differ depending on whether or not you are planning to use Rancher to provision a downstream cluster with Windows nodes or not. By default, we provide the steps of how to populate your private registry assuming that Rancher will provision downstream Kubernetes clusters with only Linux nodes. But if you plan on provisioning any ",(0,n.kt)("a",{parentName:"p",href:"/zh/v2.0-v2.4/pages-for-subheaders/use-windows-clusters"},"downstream Kubernetes clusters using Windows nodes"),", there are separate instructions to support the images needed."),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},(0,n.kt)("strong",{parentName:"p"},"Prerequisites:")),(0,n.kt)("p",{parentName:"blockquote"},"You must have a ",(0,n.kt)("a",{parentName:"p",href:"https://docs.docker.com/registry/deploying/#run-an-externally-accessible-registry"},"private registry")," available to use."),(0,n.kt)("p",{parentName:"blockquote"},"If the registry has certs, follow ",(0,n.kt)("a",{parentName:"p",href:"https://rancher.com/docs/k3s/latest/en/installation/private-registry/"},"this K3s documentation")," about adding a private registry. The certs and registry configuration files need to be mounted into the Rancher container.")),(0,n.kt)(h,{mdxType:"Tabs"},(0,n.kt)(d,{value:"Linux Only Clusters",mdxType:"TabItem"},(0,n.kt)("p",null,"For Rancher servers that will only provision Linux clusters, these are the steps to populate your private registry."),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("a",{parentName:"li",href:"#1-find-the-required-assets-for-your-rancher-version"},"Find the required assets for your Rancher version")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("a",{parentName:"li",href:"#2-collect-the-cert-manager-image"},"Collect the cert-manager image")," (unless you are bringing your own certificates or terminating TLS on a load balancer)"),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("a",{parentName:"li",href:"#3-save-the-images-to-your-workstation"},"Save the images to your workstation")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("a",{parentName:"li",href:"#4-populate-the-private-registry"},"Populate the private registry"))),(0,n.kt)("h3",{id:"prerequisites"},"Prerequisites"),(0,n.kt)("p",null,"These steps expect you to use a Linux workstation that has internet access, access to your private registry, and at least 20 GB of disk space."),(0,n.kt)("p",null,"If you will use ARM64 hosts, the registry must support manifests. As of April 2020, Amazon Elastic Container Registry does not support manifests."),(0,n.kt)("h3",{id:"1-find-the-required-assets-for-your-rancher-version"},"1. Find the required assets for your Rancher version"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Go to our ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/rancher/rancher/releases"},"releases page,")," find the Rancher v2.x.x release that you want to install, and click ",(0,n.kt)("strong",{parentName:"p"},"Assets.")," Note: Don't use releases marked ",(0,n.kt)("inlineCode",{parentName:"p"},"rc")," or ",(0,n.kt)("inlineCode",{parentName:"p"},"Pre-release"),", as they are not stable for production environments.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"From the release's ",(0,n.kt)("strong",{parentName:"p"},"Assets")," section, download the following files, which are required to install Rancher in an air gap environment:"))),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Release File"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"rancher-images.txt")),(0,n.kt)("td",{parentName:"tr",align:null},"This file contains a list of images needed to install Rancher, provision clusters and user Rancher tools.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"rancher-save-images.sh")),(0,n.kt)("td",{parentName:"tr",align:null},"This script pulls all the images in the ",(0,n.kt)("inlineCode",{parentName:"td"},"rancher-images.txt")," from Docker Hub and saves all of the images as ",(0,n.kt)("inlineCode",{parentName:"td"},"rancher-images.tar.gz"),".")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"rancher-load-images.sh")),(0,n.kt)("td",{parentName:"tr",align:null},"This script loads images from the ",(0,n.kt)("inlineCode",{parentName:"td"},"rancher-images.tar.gz")," file and pushes them to your private registry.")))),(0,n.kt)("h3",{id:"2-collect-the-cert-manager-image"},"2. Collect the cert-manager image"),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"Skip this step if you are using your own certificates, or if you are terminating TLS on an external load balancer.")),(0,n.kt)("p",null,"In a Kubernetes Install, if you elect to use the Rancher default self-signed TLS certificates, you must add the ",(0,n.kt)("a",{parentName:"p",href:"https://hub.helm.sh/charts/jetstack/cert-manager"},(0,n.kt)("inlineCode",{parentName:"a"},"cert-manager"))," image to ",(0,n.kt)("inlineCode",{parentName:"p"},"rancher-images.txt")," as well."),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Fetch the latest ",(0,n.kt)("inlineCode",{parentName:"p"},"cert-manager")," Helm chart and parse the template for image details:"),(0,n.kt)("blockquote",{parentName:"li"},(0,n.kt)("p",{parentName:"blockquote"},(0,n.kt)("strong",{parentName:"p"},"Note:")," Recent changes to cert-manager require an upgrade. If you are upgrading Rancher and using a version of cert-manager older than v0.12.0, please see our ",(0,n.kt)("a",{parentName:"p",href:"/zh/v2.0-v2.4/getting-started/installation-and-upgrade/resources/upgrade-cert-manager"},"upgrade documentation"),".")),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-plain"},"helm repo add jetstack https://charts.jetstack.io\nhelm repo update\nhelm fetch jetstack/cert-manager --version v1.0.4\nhelm template ./cert-manager-<version>.tgz | grep -oP '(?<=image: \").*(?=\")' >> ./rancher-images.txt\n"))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Sort and unique the images list to remove any overlap between the sources:"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-plain"},"sort -u rancher-images.txt -o rancher-images.txt\n")))),(0,n.kt)("h3",{id:"3-save-the-images-to-your-workstation"},"3. Save the images to your workstation"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Make ",(0,n.kt)("inlineCode",{parentName:"p"},"rancher-save-images.sh")," an executable:"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre"},"chmod +x rancher-save-images.sh\n"))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Run ",(0,n.kt)("inlineCode",{parentName:"p"},"rancher-save-images.sh")," with the ",(0,n.kt)("inlineCode",{parentName:"p"},"rancher-images.txt")," image list to create a tarball of all the required images:"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-plain"},"./rancher-save-images.sh --image-list ./rancher-images.txt\n")),(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Result:")," Docker begins pulling the images used for an air gap install. Be patient. This process takes a few minutes. When the process completes, your current directory will output a tarball named ",(0,n.kt)("inlineCode",{parentName:"p"},"rancher-images.tar.gz"),". Check that the output is in the directory."))),(0,n.kt)("h3",{id:"4-populate-the-private-registry"},"4. Populate the private registry"),(0,n.kt)("p",null,"Next, you will move the images in the ",(0,n.kt)("inlineCode",{parentName:"p"},"rancher-images.tar.gz")," to your private registry using the scripts to load the images."),(0,n.kt)("p",null,"Move the images in the ",(0,n.kt)("inlineCode",{parentName:"p"},"rancher-images.tar.gz")," to your private registry using the scripts to load the images."),(0,n.kt)("p",null,"The ",(0,n.kt)("inlineCode",{parentName:"p"},"rancher-images.txt")," is expected to be on the workstation in the same directory that you are running the ",(0,n.kt)("inlineCode",{parentName:"p"},"rancher-load-images.sh")," script. The ",(0,n.kt)("inlineCode",{parentName:"p"},"rancher-images.tar.gz")," should also be in the same directory."),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Log into your private registry if required:"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-plain"},"docker login <REGISTRY.YOURDOMAIN.COM:PORT>\n"))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Make ",(0,n.kt)("inlineCode",{parentName:"p"},"rancher-load-images.sh")," an executable:"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre"},"chmod +x rancher-load-images.sh\n"))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Use ",(0,n.kt)("inlineCode",{parentName:"p"},"rancher-load-images.sh")," to extract, tag and push ",(0,n.kt)("inlineCode",{parentName:"p"},"rancher-images.txt")," and ",(0,n.kt)("inlineCode",{parentName:"p"},"rancher-images.tar.gz")," to your private registry:"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-plain"},"./rancher-load-images.sh --image-list ./rancher-images.txt --registry <REGISTRY.YOURDOMAIN.COM:PORT>\n"))))),(0,n.kt)(d,{value:"Linux and Windows Clusters",mdxType:"TabItem"},(0,n.kt)("p",null,(0,n.kt)("em",{parentName:"p"},"Available as of v2.3.0")),(0,n.kt)("p",null,"For Rancher servers that will provision Linux and Windows clusters, there are distinctive steps to populate your private registry for the Windows images and the Linux images. Since a Windows cluster is a mix of Linux and Windows nodes, the Linux images pushed into the private registry are manifests."),(0,n.kt)("h2",{id:"windows-steps"},"Windows Steps"),(0,n.kt)("p",null,"The Windows images need to be collected and pushed from a Windows server workstation."),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("a",{href:"#windows-1"},"Find the required assets for your Rancher version")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("a",{href:"#windows-2"},"Save the images to your Windows Server workstation")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("a",{href:"#windows-3"},"Prepare the Docker daemon")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("a",{href:"#windows-4"},"Populate the private registry"))),(0,n.kt)("h3",{id:"prerequisites-1"},"Prerequisites"),(0,n.kt)("p",null,"These steps expect you to use a Windows Server 1809 workstation that has internet access, access to your private registry, and at least 50 GB of disk space."),(0,n.kt)("p",null,"The workstation must have Docker 18.02+ in order to support manifests, which are required when provisioning Windows clusters."),(0,n.kt)("p",null,"Your registry must support manifests. As of April 2020, Amazon Elastic Container Registry does not support manifests."),(0,n.kt)("a",{name:"windows-1"}),(0,n.kt)("h3",{id:"1-find-the-required-assets-for-your-rancher-version-1"},"1. Find the required assets for your Rancher version"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Browse to our ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/rancher/rancher/releases"},"releases page")," and find the Rancher v2.x.x release that you want to install. Don't download releases marked ",(0,n.kt)("inlineCode",{parentName:"p"},"rc")," or ",(0,n.kt)("inlineCode",{parentName:"p"},"Pre-release"),", as they are not stable for production environments.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},'From the release\'s "Assets" section, download the following files:'))),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Release File"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"rancher-windows-images.txt")),(0,n.kt)("td",{parentName:"tr",align:null},"This file contains a list of Windows images needed to provision Windows clusters.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"rancher-save-images.ps1")),(0,n.kt)("td",{parentName:"tr",align:null},"This script pulls all the images in the ",(0,n.kt)("inlineCode",{parentName:"td"},"rancher-windows-images.txt")," from Docker Hub and saves all of the images as ",(0,n.kt)("inlineCode",{parentName:"td"},"rancher-windows-images.tar.gz"),".")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"rancher-load-images.ps1")),(0,n.kt)("td",{parentName:"tr",align:null},"This script loads the images from the ",(0,n.kt)("inlineCode",{parentName:"td"},"rancher-windows-images.tar.gz")," file and pushes them to your private registry.")))),(0,n.kt)("a",{name:"windows-2"}),(0,n.kt)("h3",{id:"2-save-the-images-to-your-windows-server-workstation"},"2. Save the images to your Windows Server workstation"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Using ",(0,n.kt)("inlineCode",{parentName:"p"},"powershell"),", go to the directory that has the files that were downloaded in the previous step.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Run ",(0,n.kt)("inlineCode",{parentName:"p"},"rancher-save-images.ps1")," to create a tarball of all the required images:"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-plain"},"./rancher-save-images.ps1\n")),(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Result:")," Docker begins pulling the images used for an air gap install. Be patient. This process takes a few minutes. When the process completes, your current directory will output a tarball named ",(0,n.kt)("inlineCode",{parentName:"p"},"rancher-windows-images.tar.gz"),". Check that the output is in the directory."))),(0,n.kt)("a",{name:"windows-3"}),(0,n.kt)("h3",{id:"3-prepare-the-docker-daemon"},"3. Prepare the Docker daemon"),(0,n.kt)("p",null,"Append your private registry address to the ",(0,n.kt)("inlineCode",{parentName:"p"},"allow-nondistributable-artifacts")," config field in the Docker daemon (",(0,n.kt)("inlineCode",{parentName:"p"},"C:\\ProgramData\\Docker\\config\\daemon.json"),"). Since the base image of Windows images are maintained by the ",(0,n.kt)("inlineCode",{parentName:"p"},"mcr.microsoft.com")," registry, this step is required as the layers in the Microsoft registry are missing from Docker Hub and need to be pulled into the private registry."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},'{\n  ...\n  "allow-nondistributable-artifacts": [\n    ...\n    "<REGISTRY.YOURDOMAIN.COM:PORT>"\n  ]\n  ...\n}\n')),(0,n.kt)("a",{name:"windows-4"}),(0,n.kt)("h3",{id:"4-populate-the-private-registry-1"},"4. Populate the private registry"),(0,n.kt)("p",null,"Move the images in the ",(0,n.kt)("inlineCode",{parentName:"p"},"rancher-windows-images.tar.gz")," to your private registry using the scripts to load the images."),(0,n.kt)("p",null,"The ",(0,n.kt)("inlineCode",{parentName:"p"},"rancher-windows-images.txt")," is expected to be on the workstation in the same directory that you are running the ",(0,n.kt)("inlineCode",{parentName:"p"},"rancher-load-images.ps1")," script. The ",(0,n.kt)("inlineCode",{parentName:"p"},"rancher-windows-images.tar.gz")," should also be in the same directory."),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Using ",(0,n.kt)("inlineCode",{parentName:"p"},"powershell"),", log into your private registry if required:"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-plain"},"docker login <REGISTRY.YOURDOMAIN.COM:PORT>\n"))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Using ",(0,n.kt)("inlineCode",{parentName:"p"},"powershell"),", use ",(0,n.kt)("inlineCode",{parentName:"p"},"rancher-load-images.ps1")," to extract, tag and push the images from ",(0,n.kt)("inlineCode",{parentName:"p"},"rancher-images.tar.gz")," to your private registry:"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-plain"},"./rancher-load-images.ps1 --registry <REGISTRY.YOURDOMAIN.COM:PORT>\n")))),(0,n.kt)("h2",{id:"linux-steps"},"Linux Steps"),(0,n.kt)("p",null,"The Linux images needs to be collected and pushed from a Linux host, but ",(0,n.kt)("em",{parentName:"p"},"must be done after")," populating the Windows images into the private registry. These step are different from the Linux only steps as the Linux images that are pushed will actually manifests that support Windows and Linux images."),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("a",{href:"#linux-1"},"Find the required assets for your Rancher version")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("a",{href:"#linux-2"},"Collect all the required images")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("a",{href:"#linux-3"},"Save the images to your Linux workstation")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("a",{href:"#linux-4"},"Populate the private registry"))),(0,n.kt)("h3",{id:"prerequisites-2"},"Prerequisites"),(0,n.kt)("p",null,"You must populate the private registry with the Windows images before populating the private registry with Linux images. If you have already populated the registry with Linux images, you will need to follow these instructions again as they will publish manifests that support Windows and Linux images."),(0,n.kt)("p",null,"These steps expect you to use a Linux workstation that has internet access, access to your private registry, and at least 20 GB of disk space."),(0,n.kt)("p",null,"The workstation must have Docker 18.02+ in order to support manifests, which are required when provisioning Windows clusters."),(0,n.kt)("a",{name:"linux-1"}),(0,n.kt)("h3",{id:"1-find-the-required-assets-for-your-rancher-version-2"},"1. Find the required assets for your Rancher version"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Browse to our ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/rancher/rancher/releases"},"releases page")," and find the Rancher v2.x.x release that you want to install. Don't download releases marked ",(0,n.kt)("inlineCode",{parentName:"p"},"rc")," or ",(0,n.kt)("inlineCode",{parentName:"p"},"Pre-release"),", as they are not stable for production environments. Click ",(0,n.kt)("strong",{parentName:"p"},"Assets."))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"From the release's ",(0,n.kt)("strong",{parentName:"p"},"Assets")," section, download the following files:"))),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Release File"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"rancher-images.txt")),(0,n.kt)("td",{parentName:"tr",align:null},"This file contains a list of images needed to install Rancher, provision clusters and user Rancher tools.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"rancher-windows-images.txt")),(0,n.kt)("td",{parentName:"tr",align:null},"This file contains a list of images needed to provision Windows clusters.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"rancher-save-images.sh")),(0,n.kt)("td",{parentName:"tr",align:null},"This script pulls all the images in the ",(0,n.kt)("inlineCode",{parentName:"td"},"rancher-images.txt")," from Docker Hub and saves all of the images as ",(0,n.kt)("inlineCode",{parentName:"td"},"rancher-images.tar.gz"),".")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"rancher-load-images.sh")),(0,n.kt)("td",{parentName:"tr",align:null},"This script loads images from the ",(0,n.kt)("inlineCode",{parentName:"td"},"rancher-images.tar.gz")," file and pushes them to your private registry.")))),(0,n.kt)("a",{name:"linux-2"}),(0,n.kt)("h3",{id:"2-collect-all-the-required-images"},"2. Collect all the required images"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"For Kubernetes Installs using Rancher Generated Self-Signed Certificate:")," In a Kubernetes Install, if you elect to use the Rancher default self-signed TLS certificates, you must add the ",(0,n.kt)("a",{parentName:"p",href:"https://hub.helm.sh/charts/jetstack/cert-manager"},(0,n.kt)("inlineCode",{parentName:"a"},"cert-manager"))," image to ",(0,n.kt)("inlineCode",{parentName:"p"},"rancher-images.txt")," as well. You skip this step if you are using you using your own certificates."),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Fetch the latest ",(0,n.kt)("inlineCode",{parentName:"p"},"cert-manager")," Helm chart and parse the template for image details:"),(0,n.kt)("blockquote",{parentName:"li"},(0,n.kt)("p",{parentName:"blockquote"},(0,n.kt)("strong",{parentName:"p"},"Note:")," Recent changes to cert-manager require an upgrade. If you are upgrading Rancher and using a version of cert-manager older than v0.12.0, please see our ",(0,n.kt)("a",{parentName:"p",href:"/zh/v2.0-v2.4/getting-started/installation-and-upgrade/resources/upgrade-cert-manager"},"upgrade documentation"),"."),(0,n.kt)("pre",{parentName:"blockquote"},(0,n.kt)("code",{parentName:"pre",className:"language-plain"},"helm repo add jetstack https://charts.jetstack.io\nhelm repo update\nhelm fetch jetstack/cert-manager --version v0.12.0\nhelm template ./cert-manager-<version>.tgz | grep -oP '(?<=image: \").*(?=\")' >> ./rancher-images.txt\n")))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Sort and unique the images list to remove any overlap between the sources:"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-plain"},"sort -u rancher-images.txt -o rancher-images.txt\n")))),(0,n.kt)("a",{name:"linux-3"}),(0,n.kt)("h3",{id:"3-save-the-images-to-your-workstation-1"},"3. Save the images to your workstation"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Make ",(0,n.kt)("inlineCode",{parentName:"p"},"rancher-save-images.sh")," an executable:"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre"},"chmod +x rancher-save-images.sh\n"))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Run ",(0,n.kt)("inlineCode",{parentName:"p"},"rancher-save-images.sh")," with the ",(0,n.kt)("inlineCode",{parentName:"p"},"rancher-images.txt")," image list to create a tarball of all the required images:"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-plain"},"./rancher-save-images.sh --image-list ./rancher-images.txt\n")))),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Result:")," Docker begins pulling the images used for an air gap install. Be patient. This process takes a few minutes. When the process completes, your current directory will output a tarball named ",(0,n.kt)("inlineCode",{parentName:"p"},"rancher-images.tar.gz"),". Check that the output is in the directory."),(0,n.kt)("a",{name:"linux-4"}),(0,n.kt)("h3",{id:"4-populate-the-private-registry-2"},"4. Populate the private registry"),(0,n.kt)("p",null,"Move the images in the ",(0,n.kt)("inlineCode",{parentName:"p"},"rancher-images.tar.gz")," to your private registry using the ",(0,n.kt)("inlineCode",{parentName:"p"},"rancher-load-images.sh script")," to load the images."),(0,n.kt)("p",null,"The image list, ",(0,n.kt)("inlineCode",{parentName:"p"},"rancher-images.txt")," or ",(0,n.kt)("inlineCode",{parentName:"p"},"rancher-windows-images.txt"),", is expected to be on the workstation in the same directory that you are running the ",(0,n.kt)("inlineCode",{parentName:"p"},"rancher-load-images.sh")," script. The ",(0,n.kt)("inlineCode",{parentName:"p"},"rancher-images.tar.gz")," should also be in the same directory."),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Log into your private registry if required:")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-plain"},"docker login <REGISTRY.YOURDOMAIN.COM:PORT>\n")),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Make ",(0,n.kt)("inlineCode",{parentName:"li"},"rancher-load-images.sh")," an executable:")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"chmod +x rancher-load-images.sh\n")),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Use ",(0,n.kt)("inlineCode",{parentName:"li"},"rancher-load-images.sh")," to extract, tag and push the images from ",(0,n.kt)("inlineCode",{parentName:"li"},"rancher-images.tar.gz")," to your private registry:")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-plain"},"./rancher-load-images.sh --image-list ./rancher-images.txt \\\n   --windows-image-list ./rancher-windows-images.txt \\\n   --registry <REGISTRY.YOURDOMAIN.COM:PORT>\n")))),(0,n.kt)("h3",{id:"next-step-for-kubernetes-installs---launch-a-kubernetes-cluster"},(0,n.kt)("a",{parentName:"h3",href:"/zh/v2.0-v2.4/getting-started/installation-and-upgrade/other-installation-methods/air-gapped-helm-cli-install/install-kubernetes"},"Next step for Kubernetes Installs - Launch a Kubernetes Cluster")),(0,n.kt)("h3",{id:"next-step-for-docker-installs---install-rancher"},(0,n.kt)("a",{parentName:"h3",href:"/zh/v2.0-v2.4/getting-started/installation-and-upgrade/other-installation-methods/air-gapped-helm-cli-install/install-rancher-ha"},"Next step for Docker Installs - Install Rancher")))}c.isMDXComponent=!0}}]);