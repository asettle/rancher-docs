"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[80298],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return h}});var o=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var d=o.createContext({}),l=function(e){var t=o.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},c=function(e){var t=l(e.components);return o.createElement(d.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},x=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,d=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),x=l(n),h=r,p=x["".concat(d,".").concat(h)]||x[h]||u[h]||a;return n?o.createElement(p,s(s({ref:t},c),{},{components:n})):o.createElement(p,s({ref:t},c))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,s=new Array(a);s[0]=x;var i={};for(var d in t)hasOwnProperty.call(t,d)&&(i[d]=t[d]);i.originalType=e,i.mdxType="string"==typeof e?e:r,s[1]=i;for(var l=2;l<a;l++)s[l]=n[l];return o.createElement.apply(null,s)}return o.createElement.apply(null,n)}x.displayName="MDXCreateElement"},48527:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return d},default:function(){return h},frontMatter:function(){return i},metadata:function(){return l},toc:function(){return u}});var o=n(87462),r=n(63366),a=(n(67294),n(3905)),s=["components"],i={title:"Troubleshooting",weight:276,aliases:["/rancher/v2.0-v2.4/en/installation/options/helm2/kubernetes-rke/troubleshooting","/rancher/v2.x/en/installation/resources/advanced/helm2/kubernetes-rke/troubleshooting/"]},d=void 0,l={unversionedId:"getting-started/installation-and-upgrade/advanced-options/advanced-use-cases/helm2/kubernetes-rke/troubleshooting",id:"version-2.0-2.4/getting-started/installation-and-upgrade/advanced-options/advanced-use-cases/helm2/kubernetes-rke/troubleshooting",title:"Troubleshooting",description:"canal Pods show READY 2/3",source:"@site/versioned_docs/version-2.0-2.4/getting-started/installation-and-upgrade/advanced-options/advanced-use-cases/helm2/kubernetes-rke/troubleshooting.md",sourceDirName:"getting-started/installation-and-upgrade/advanced-options/advanced-use-cases/helm2/kubernetes-rke",slug:"/getting-started/installation-and-upgrade/advanced-options/advanced-use-cases/helm2/kubernetes-rke/troubleshooting",permalink:"/zh/v2.0-v2.4/getting-started/installation-and-upgrade/advanced-options/advanced-use-cases/helm2/kubernetes-rke/troubleshooting",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/versioned_docs/version-2.0-2.4/getting-started/installation-and-upgrade/advanced-options/advanced-use-cases/helm2/kubernetes-rke/troubleshooting.md",tags:[],version:"2.0-2.4",lastUpdatedAt:1661494099,formattedLastUpdatedAt:"2022/8/26",frontMatter:{title:"Troubleshooting",weight:276,aliases:["/rancher/v2.0-v2.4/en/installation/options/helm2/kubernetes-rke/troubleshooting","/rancher/v2.x/en/installation/resources/advanced/helm2/kubernetes-rke/troubleshooting/"]},sidebar:"tutorialSidebar",previous:{title:"2. Install Kubernetes with RKE",permalink:"/zh/v2.0-v2.4/pages-for-subheaders/helm2-kubernetes-rke"},next:{title:"Initialize Helm: Install the Tiller Service",permalink:"/zh/v2.0-v2.4/pages-for-subheaders/helm2-helm-init"}},c={},u=[{value:"canal Pods show READY 2/3",id:"canal-pods-show-ready-23",level:3},{value:"nginx-ingress-controller Pods show RESTARTS",id:"nginx-ingress-controller-pods-show-restarts",level:3},{value:"Failed to set up SSH tunneling for host xxx.xxx.xxx.xxx: Can&#39;t retrieve Docker Info",id:"failed-to-set-up-ssh-tunneling-for-host-xxxxxxxxxxxx-cant-retrieve-docker-info",level:3},{value:"Failed to dial to /var/run/docker.sock: ssh: rejected: administratively prohibited (open failed)",id:"failed-to-dial-to-varrundockersock-ssh-rejected-administratively-prohibited-open-failed",level:4},{value:"Failed to dial ssh using address xxx.xxx.xxx.xxx:xx: Error configuring SSH: ssh: no key found",id:"failed-to-dial-ssh-using-address-xxxxxxxxxxxxxx-error-configuring-ssh-ssh-no-key-found",level:4},{value:"Failed to dial ssh using address xxx.xxx.xxx.xxx:xx: ssh: handshake failed: ssh: unable to authenticate, attempted methods none publickey, no supported methods remain",id:"failed-to-dial-ssh-using-address-xxxxxxxxxxxxxx-ssh-handshake-failed-ssh-unable-to-authenticate-attempted-methods-none-publickey-no-supported-methods-remain",level:4},{value:"Failed to dial ssh using address xxx.xxx.xxx.xxx:xx: Error configuring SSH: ssh: cannot decode encrypted private keys",id:"failed-to-dial-ssh-using-address-xxxxxxxxxxxxxx-error-configuring-ssh-ssh-cannot-decode-encrypted-private-keys",level:4},{value:"Cannot connect to the Docker daemon at unix:///var/run/docker.sock. Is the docker daemon running?",id:"cannot-connect-to-the-docker-daemon-at-unixvarrundockersock-is-the-docker-daemon-running",level:4}],x={toc:u};function h(e){var t=e.components,n=(0,r.Z)(e,s);return(0,a.kt)("wrapper",(0,o.Z)({},x,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h3",{id:"canal-pods-show-ready-23"},"canal Pods show READY 2/3"),(0,a.kt)("p",null,"The most common cause of this issue is port 8472/UDP is not open between the nodes. Check your local firewall, network routing or security groups."),(0,a.kt)("p",null,"Once the network issue is resolved, the ",(0,a.kt)("inlineCode",{parentName:"p"},"canal")," pods should timeout and restart to establish their connections."),(0,a.kt)("h3",{id:"nginx-ingress-controller-pods-show-restarts"},"nginx-ingress-controller Pods show RESTARTS"),(0,a.kt)("p",null,"The most common cause of this issue is the ",(0,a.kt)("inlineCode",{parentName:"p"},"canal")," pods have failed to establish the overlay network. See ",(0,a.kt)("a",{parentName:"p",href:"#canal-pods-show-ready-2-3"},"canal Pods show READY ",(0,a.kt)("inlineCode",{parentName:"a"},"2/3"))," for troubleshooting."),(0,a.kt)("h3",{id:"failed-to-set-up-ssh-tunneling-for-host-xxxxxxxxxxxx-cant-retrieve-docker-info"},"Failed to set up SSH tunneling for host ","[xxx.xxx.xxx.xxx]",": Can't retrieve Docker Info"),(0,a.kt)("h4",{id:"failed-to-dial-to-varrundockersock-ssh-rejected-administratively-prohibited-open-failed"},"Failed to dial to /var/run/docker.sock: ssh: rejected: administratively prohibited (open failed)"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"User specified to connect with does not have permission to access the Docker socket. This can be checked by logging into the host and running the command ",(0,a.kt)("inlineCode",{parentName:"li"},"docker ps"),":")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"$ ssh user@server\nuser@server$ docker ps\nCONTAINER ID        IMAGE               COMMAND                  CREATED             STATUS              PORTS                    NAMES\n")),(0,a.kt)("p",null,"See ",(0,a.kt)("a",{parentName:"p",href:"https://docs.docker.com/install/linux/linux-postinstall/#manage-docker-as-a-non-root-user"},"Manage Docker as a non-root user")," how to set this up properly."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"When using RedHat/CentOS as operating system, you cannot use the user ",(0,a.kt)("inlineCode",{parentName:"p"},"root")," to connect to the nodes because of ",(0,a.kt)("a",{parentName:"p",href:"https://bugzilla.redhat.com/show_bug.cgi?id=1527565"},"Bugzilla #1527565"),". You will need to add a separate user and configure it to access the Docker socket. See ",(0,a.kt)("a",{parentName:"p",href:"https://docs.docker.com/install/linux/linux-postinstall/#manage-docker-as-a-non-root-user"},"Manage Docker as a non-root user")," how to set this up properly.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"SSH server version is not version 6.7 or higher. This is needed for socket forwarding to work, which is used to connect to the Docker socket over SSH. This can be checked using ",(0,a.kt)("inlineCode",{parentName:"p"},"sshd -V")," on the host you are connecting to, or using netcat:"))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"$ nc xxx.xxx.xxx.xxx 22\nSSH-2.0-OpenSSH_6.6.1p1 Ubuntu-2ubuntu2.10\n")),(0,a.kt)("h4",{id:"failed-to-dial-ssh-using-address-xxxxxxxxxxxxxx-error-configuring-ssh-ssh-no-key-found"},"Failed to dial ssh using address ","[xxx.xxx.xxx.xxx:xx]",": Error configuring SSH: ssh: no key found"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"The key file specified as ",(0,a.kt)("inlineCode",{parentName:"li"},"ssh_key_path")," cannot be accessed. Make sure that you specified the private key file (not the public key, ",(0,a.kt)("inlineCode",{parentName:"li"},".pub"),"), and that the user that is running the ",(0,a.kt)("inlineCode",{parentName:"li"},"rke")," command can access the private key file.")),(0,a.kt)("h4",{id:"failed-to-dial-ssh-using-address-xxxxxxxxxxxxxx-ssh-handshake-failed-ssh-unable-to-authenticate-attempted-methods-none-publickey-no-supported-methods-remain"},"Failed to dial ssh using address ","[xxx.xxx.xxx.xxx:xx]",": ssh: handshake failed: ssh: unable to authenticate, attempted methods ","[none publickey]",", no supported methods remain"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"The key file specified as ",(0,a.kt)("inlineCode",{parentName:"li"},"ssh_key_path")," is not correct for accessing the node. Double-check if you specified the correct ",(0,a.kt)("inlineCode",{parentName:"li"},"ssh_key_path")," for the node and if you specified the correct user to connect with.")),(0,a.kt)("h4",{id:"failed-to-dial-ssh-using-address-xxxxxxxxxxxxxx-error-configuring-ssh-ssh-cannot-decode-encrypted-private-keys"},"Failed to dial ssh using address ","[xxx.xxx.xxx.xxx:xx]",": Error configuring SSH: ssh: cannot decode encrypted private keys"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"If you want to use encrypted private keys, you should use ",(0,a.kt)("inlineCode",{parentName:"li"},"ssh-agent")," to load your keys with your passphrase. If the ",(0,a.kt)("inlineCode",{parentName:"li"},"SSH_AUTH_SOCK")," environment variable is found in the environment where the ",(0,a.kt)("inlineCode",{parentName:"li"},"rke")," command is run, it will be used automatically to connect to the node.")),(0,a.kt)("h4",{id:"cannot-connect-to-the-docker-daemon-at-unixvarrundockersock-is-the-docker-daemon-running"},"Cannot connect to the Docker daemon at unix:///var/run/docker.sock. Is the docker daemon running?"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"The node is not reachable on the configured ",(0,a.kt)("inlineCode",{parentName:"li"},"address")," and ",(0,a.kt)("inlineCode",{parentName:"li"},"port"),".")))}h.isMDXComponent=!0}}]);