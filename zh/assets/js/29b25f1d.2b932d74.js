"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[70390],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return u}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function d(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),o=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):d(d({},t),e)),n},c=function(e){var t=o(e.components);return r.createElement(i.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,i=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),m=o(n),u=a,f=m["".concat(i,".").concat(u)]||m[u]||s[u]||l;return n?r.createElement(f,d(d({ref:t},c),{},{components:n})):r.createElement(f,d({ref:t},c))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,d=new Array(l);d[0]=m;var p={};for(var i in t)hasOwnProperty.call(t,i)&&(p[i]=t[i]);p.originalType=e,p.mdxType="string"==typeof e?e:a,d[1]=p;for(var o=2;o<l;o++)d[o]=n[o];return r.createElement.apply(null,d)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},96645:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return i},default:function(){return u},frontMatter:function(){return p},metadata:function(){return o},toc:function(){return s}});var r=n(87462),a=n(63366),l=(n(67294),n(3905)),d=["components"],p={title:"\u4f7f\u7528 firewalld \u6253\u5f00\u7aef\u53e3",weight:1},i=void 0,o={unversionedId:"getting-started/installation-and-upgrade/advanced-options/advanced-use-cases/open-ports-with-firewalld",id:"getting-started/installation-and-upgrade/advanced-options/advanced-use-cases/open-ports-with-firewalld",title:"\u4f7f\u7528 firewalld \u6253\u5f00\u7aef\u53e3",description:"\u6211\u4eec\u5efa\u8bae\u7981\u7528 firewalld\u3002\u5982\u679c\u4f60\u4f7f\u7528\u7684\u662f Kubernetes 1.19 \u6216\u66f4\u9ad8\u7248\u672c\uff0c\u5219\u5fc5\u987b\u5173\u95ed firewalld\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/getting-started/installation-and-upgrade/advanced-options/advanced-use-cases/open-ports-with-firewalld.md",sourceDirName:"getting-started/installation-and-upgrade/advanced-options/advanced-use-cases",slug:"/getting-started/installation-and-upgrade/advanced-options/advanced-use-cases/open-ports-with-firewalld",permalink:"/zh/getting-started/installation-and-upgrade/advanced-options/advanced-use-cases/open-ports-with-firewalld",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/docs/getting-started/installation-and-upgrade/advanced-options/advanced-use-cases/open-ports-with-firewalld.md",tags:[],version:"current",lastUpdatedAt:1663080703,formattedLastUpdatedAt:"2022/9/13",frontMatter:{title:"\u4f7f\u7528 firewalld \u6253\u5f00\u7aef\u53e3",weight:1},sidebar:"tutorialSidebar",previous:{title:"\u6301\u7eed\u4ea4\u4ed8",permalink:"/zh/getting-started/installation-and-upgrade/advanced-options/enable-experimental-features/continuous-delivery"},next:{title:"\u4e3a\u5927\u578b\u5b89\u88c5\u8fdb\u884c etcd \u8c03\u4f18",permalink:"/zh/getting-started/installation-and-upgrade/advanced-options/advanced-use-cases/tune-etcd-for-large-installs"}},c={},s=[{value:"\u5148\u51b3\u6761\u4ef6",id:"\u5148\u51b3\u6761\u4ef6",level:2},{value:"\u5e94\u7528\u9632\u706b\u5899\u7aef\u53e3\u89c4\u5219",id:"\u5e94\u7528\u9632\u706b\u5899\u7aef\u53e3\u89c4\u5219",level:2}],m={toc:s};function u(e){var t=e.components,n=(0,a.Z)(e,d);return(0,l.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"\u6211\u4eec\u5efa\u8bae\u7981\u7528 firewalld\u3002\u5982\u679c\u4f60\u4f7f\u7528\u7684\u662f Kubernetes 1.19 \u6216\u66f4\u9ad8\u7248\u672c\uff0c\u5219\u5fc5\u987b\u5173\u95ed firewalld\u3002")),(0,l.kt)("p",null,"\u67d0\u4e9b ",(0,l.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Red_Hat_Enterprise_Linux#Rebuilds"},"\u6e90\u81ea RHEL")," \u7684 Linux \u53d1\u884c\u7248\uff08\u5305\u62ec Oracle Linux\uff09\u7684\u9ed8\u8ba4\u9632\u706b\u5899\u89c4\u5219\u53ef\u80fd\u4f1a\u963b\u6b62\u4e0e Helm \u7684\u901a\u4fe1\u3002"),(0,l.kt)("p",null,"\u4f8b\u5982\uff0cAWS \u4e2d\u7684\u4e00\u4e2a Oracle Linux \u955c\u50cf\u5177\u6709 REJECT \u89c4\u5219\uff0c\u8fd9\u4e9b\u89c4\u5219\u4f1a\u963b\u6b62 Helm \u4e0e Tiller \u901a\u4fe1\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"Chain INPUT (policy ACCEPT)\ntarget     prot opt source               destination\nACCEPT     all  --  anywhere             anywhere             state RELATED,ESTABLISHED\nACCEPT     icmp --  anywhere             anywhere\nACCEPT     all  --  anywhere             anywhere\nACCEPT     tcp  --  anywhere             anywhere             state NEW tcp dpt:ssh\nREJECT     all  --  anywhere             anywhere             reject-with icmp-host-prohibited\n\nChain FORWARD (policy ACCEPT)\ntarget     prot opt source               destination\nREJECT     all  --  anywhere             anywhere             reject-with icmp-host-prohibited\n\nChain OUTPUT (policy ACCEPT)\ntarget     prot opt source               destination\n")),(0,l.kt)("p",null,"\u4f60\u53ef\u8fd0\u884c\u4ee5\u4e0b\u547d\u4ee4\u68c0\u67e5\u9ed8\u8ba4\u9632\u706b\u5899\u89c4\u5219\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"sudo iptables --list\n")),(0,l.kt)("p",null,"\u4e0b\u6587\u4ecb\u7ecd\u5982\u4f55\u4f7f\u7528 ",(0,l.kt)("inlineCode",{parentName:"p"},"firewalld"),"\uff0c\u5c06",(0,l.kt)("a",{parentName:"p",href:"/zh/getting-started/installation-and-upgrade/installation-requirements/port-requirements"},"\u9632\u706b\u5899\u7aef\u53e3\u89c4\u5219"),"\u5e94\u7528\u5230\u9ad8\u53ef\u7528 Rancher Server \u96c6\u7fa4\u4e2d\u7684\u8282\u70b9\u3002"),(0,l.kt)("h2",{id:"\u5148\u51b3\u6761\u4ef6"},"\u5148\u51b3\u6761\u4ef6"),(0,l.kt)("p",null,"\u5b89\u88c5 v7.x \u6216\u66f4\u9ad8\u7248\u672c\u7684 ",(0,l.kt)("inlineCode",{parentName:"p"},"firewalld"),"\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"yum install firewalld\nsystemctl start firewalld\nsystemctl enable firewalld\n")),(0,l.kt)("h2",{id:"\u5e94\u7528\u9632\u706b\u5899\u7aef\u53e3\u89c4\u5219"},"\u5e94\u7528\u9632\u706b\u5899\u7aef\u53e3\u89c4\u5219"),(0,l.kt)("p",null,"\u5728 Rancher \u9ad8\u53ef\u7528\u5b89\u88c5\u4e2d\uff0cRancher Server \u8bbe\u7f6e\u5728\u4e09\u4e2a\u8282\u70b9\u4e0a\uff0c\u4e09\u4e2a\u8282\u70b9\u5747\u5177\u6709 Kubernetes \u7684\u6240\u6709\u4e09\u4e2a\u89d2\u8272\uff08etcd\u3001controlplane \u548c worker\uff09\u3002\u5982\u679c\u4f60\u7684 Rancher Server \u8282\u70b9\u540c\u65f6\u5177\u6709\u8fd9\u4e09\u4e2a\u89d2\u8272\uff0c\u8bf7\u5728\u6bcf\u4e2a\u8282\u70b9\u4e0a\u8fd0\u884c\u4ee5\u4e0b\u547d\u4ee4\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"firewall-cmd --permanent --add-port=22/tcp\nfirewall-cmd --permanent --add-port=80/tcp\nfirewall-cmd --permanent --add-port=443/tcp\nfirewall-cmd --permanent --add-port=2376/tcp\nfirewall-cmd --permanent --add-port=2379/tcp\nfirewall-cmd --permanent --add-port=2380/tcp\nfirewall-cmd --permanent --add-port=6443/tcp\nfirewall-cmd --permanent --add-port=8472/udp\nfirewall-cmd --permanent --add-port=9099/tcp\nfirewall-cmd --permanent --add-port=10250/tcp\nfirewall-cmd --permanent --add-port=10254/tcp\nfirewall-cmd --permanent --add-port=30000-32767/tcp\nfirewall-cmd --permanent --add-port=30000-32767/udp\n")),(0,l.kt)("p",null,"\u5982\u679c\u4f60\u7684 Rancher Server \u8282\u70b9\u914d\u7f6e\u4e86\u5355\u72ec\u7684\u89d2\u8272\uff0c\u8bf7\u6839\u636e\u8282\u70b9\u89d2\u8272\u8fd0\u884c\u4ee5\u4e0b\u547d\u4ee4\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"# \u5728 etcd \u8282\u70b9\u4e0a\u8fd0\u884c\u4ee5\u4e0b\u547d\u4ee4\uff1a\nfirewall-cmd --permanent --add-port=2376/tcp\nfirewall-cmd --permanent --add-port=2379/tcp\nfirewall-cmd --permanent --add-port=2380/tcp\nfirewall-cmd --permanent --add-port=8472/udp\nfirewall-cmd --permanent --add-port=9099/tcp\nfirewall-cmd --permanent --add-port=10250/tcp\n\n# \u5728 controlplane \u8282\u70b9\u4e0a\u8fd0\u884c\u4ee5\u4e0b\u547d\u4ee4\uff1a\nfirewall-cmd --permanent --add-port=80/tcp\nfirewall-cmd --permanent --add-port=443/tcp\nfirewall-cmd --permanent --add-port=2376/tcp\nfirewall-cmd --permanent --add-port=6443/tcp\nfirewall-cmd --permanent --add-port=8472/udp\nfirewall-cmd --permanent --add-port=9099/tcp\nfirewall-cmd --permanent --add-port=10250/tcp\nfirewall-cmd --permanent --add-port=10254/tcp\nfirewall-cmd --permanent --add-port=30000-32767/tcp\nfirewall-cmd --permanent --add-port=30000-32767/udp\n\n# \u5728 worker \u8282\u70b9\u4e0a\u8fd0\u884c\u4ee5\u4e0b\u547d\u4ee4\uff1a\nfirewall-cmd --permanent --add-port=22/tcp\nfirewall-cmd --permanent --add-port=80/tcp\nfirewall-cmd --permanent --add-port=443/tcp\nfirewall-cmd --permanent --add-port=2376/tcp\nfirewall-cmd --permanent --add-port=8472/udp\nfirewall-cmd --permanent --add-port=9099/tcp\nfirewall-cmd --permanent --add-port=10250/tcp\nfirewall-cmd --permanent --add-port=10254/tcp\nfirewall-cmd --permanent --add-port=30000-32767/tcp\nfirewall-cmd --permanent --add-port=30000-32767/udp\n")),(0,l.kt)("p",null,"\u5728\u8282\u70b9\u4e0a\u8fd0\u884c ",(0,l.kt)("inlineCode",{parentName:"p"},"firewall-cmd")," \u547d\u4ee4\u540e\uff0c\u4f7f\u7528\u4ee5\u4e0b\u547d\u4ee4\u542f\u7528\u9632\u706b\u5899\u89c4\u5219\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"firewall-cmd --reload\n")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u7ed3\u679c"),"\uff1a\u9632\u706b\u5899\u5df2\u66f4\u65b0\uff0c\u56e0\u6b64 Helm \u53ef\u4ee5\u4e0e Rancher Server \u8282\u70b9\u901a\u4fe1\u4e86\u3002"))}u.isMDXComponent=!0}}]);