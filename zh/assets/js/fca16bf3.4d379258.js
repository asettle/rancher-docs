"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[90775],{3905:function(e,r,t){t.d(r,{Zo:function(){return h},kt:function(){return o}});var n=t(67294);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function i(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function l(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?i(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function c(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=n.createContext({}),u=function(e){var r=n.useContext(s),t=r;return e&&(t="function"==typeof e?e(r):l(l({},r),e)),t},h=function(e){var r=u(e.components);return n.createElement(s.Provider,{value:r},e.children)},d={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},p=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,h=c(e,["components","mdxType","originalType","parentName"]),p=u(t),o=a,m=p["".concat(s,".").concat(o)]||p[o]||d[o]||i;return t?n.createElement(m,l(l({ref:r},h),{},{components:t})):n.createElement(m,l({ref:r},h))}));function o(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var i=t.length,l=new Array(i);l[0]=p;var c={};for(var s in r)hasOwnProperty.call(r,s)&&(c[s]=r[s]);c.originalType=e,c.mdxType="string"==typeof e?e:a,l[1]=c;for(var u=2;u<i;u++)l[u]=t[u];return n.createElement.apply(null,l)}return n.createElement.apply(null,t)}p.displayName="MDXCreateElement"},45847:function(e,r,t){t.r(r),t.d(r,{assets:function(){return h},contentTitle:function(){return s},default:function(){return o},frontMatter:function(){return c},metadata:function(){return u},toc:function(){return d}});var n=t(87462),a=t(63366),i=(t(67294),t(3905)),l=["components"],c={title:"Rancher 2.6 \u7684\u81ea\u6211\u8bc4\u4f30\u548c\u5f3a\u5316\u6307\u5357",shortTitle:"Rancher 2.6 \u5f3a\u5316\u6307\u5357",weight:1,aliases:["/rancher/v2.6/en/security/rancher-2.5/","/rancher/v2.6/en/security/rancher-2.5/1.5-hardening-2.5/","/rancher/v2.6/en/security/rancher-2.5/1.5-benchmark-2.5/","/rancher/v2.6/en/security/rancher-2.5/1.6-hardening-2.5/","/rancher/v2.6/en/security/rancher-2.5/1.6-benchmark-2.5/"]},s=void 0,u={unversionedId:"pages-for-subheaders/rancher-v2.6-hardening-guides",id:"pages-for-subheaders/rancher-v2.6-hardening-guides",title:"Rancher 2.6 \u7684\u81ea\u6211\u8bc4\u4f30\u548c\u5f3a\u5316\u6307\u5357",description:"Rancher \u4e3a\u6bcf\u4e2a\u53d7\u652f\u6301\u7684 Rancher Kubernetes \u53d1\u884c\u7248\u63d0\u4f9b\u4e86\u5bf9\u5e94\u7684\u5b89\u5168\u5f3a\u5316\u6307\u5357\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/pages-for-subheaders/rancher-v2.6-hardening-guides.md",sourceDirName:"pages-for-subheaders",slug:"/pages-for-subheaders/rancher-v2.6-hardening-guides",permalink:"/zh/pages-for-subheaders/rancher-v2.6-hardening-guides",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/docs/pages-for-subheaders/rancher-v2.6-hardening-guides.md",tags:[],version:"current",lastUpdatedAt:1663080703,formattedLastUpdatedAt:"2022/9/13",frontMatter:{title:"Rancher 2.6 \u7684\u81ea\u6211\u8bc4\u4f30\u548c\u5f3a\u5316\u6307\u5357",shortTitle:"Rancher 2.6 \u5f3a\u5316\u6307\u5357",weight:1,aliases:["/rancher/v2.6/en/security/rancher-2.5/","/rancher/v2.6/en/security/rancher-2.5/1.5-hardening-2.5/","/rancher/v2.6/en/security/rancher-2.5/1.5-benchmark-2.5/","/rancher/v2.6/en/security/rancher-2.5/1.6-hardening-2.5/","/rancher/v2.6/en/security/rancher-2.5/1.6-benchmark-2.5/"]},sidebar:"tutorialSidebar",previous:{title:"\u5b89\u5168",permalink:"/zh/pages-for-subheaders/rancher-security"},next:{title:"\u4f7f\u7528 CIS 1.6 Benchmark \u7684 RKE \u5f3a\u5316\u6307\u5357",permalink:"/zh/reference-guides/rancher-security/rancher-v2.6-hardening-guides/rke1-hardening-guide-with-cis-v1.6-benchmark"}},h={},d=[{value:"Rancher Kubernetes \u53d1\u884c\u7248",id:"rancher-kubernetes-\u53d1\u884c\u7248",level:2},{value:"\u5f3a\u5316\u6307\u5357\u548c Benchmark \u7248\u672c",id:"\u5f3a\u5316\u6307\u5357\u548c-benchmark-\u7248\u672c",level:2},{value:"RKE \u6307\u5357",id:"rke-\u6307\u5357",level:3},{value:"RKE2 \u6307\u5357",id:"rke2-\u6307\u5357",level:3},{value:"K3s \u6307\u5357",id:"k3s-\u6307\u5357",level:3},{value:"\u4f7f\u7528 SELinux \u7684 Rancher",id:"\u4f7f\u7528-selinux-\u7684-rancher",level:2}],p={toc:d};function o(e){var r=e.components,t=(0,a.Z)(e,l);return(0,i.kt)("wrapper",(0,n.Z)({},p,t,{components:r,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Rancher \u4e3a\u6bcf\u4e2a\u53d7\u652f\u6301\u7684 Rancher Kubernetes \u53d1\u884c\u7248\u63d0\u4f9b\u4e86\u5bf9\u5e94\u7684\u5b89\u5168\u5f3a\u5316\u6307\u5357\u3002"),(0,i.kt)("h2",{id:"rancher-kubernetes-\u53d1\u884c\u7248"},"Rancher Kubernetes \u53d1\u884c\u7248"),(0,i.kt)("p",null,"Rancher \u4f7f\u7528\u4ee5\u4e0b Kubernetes \u53d1\u884c\u7248\uff1a"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://rancher.com/docs/rke/latest/en/"},(0,i.kt)("strong",{parentName:"a"},"RKE")),"\uff1a\u5168\u79f0\u662f Rancher Kubernetes Engine\uff0c\u4e00\u4e2a CNCF \u8ba4\u8bc1\u7684 Kubernetes \u53d1\u884c\u7248\uff0c\u80fd\u5b8c\u5168\u5728 Docker \u5bb9\u5668\u4e2d\u8fd0\u884c\u3002"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://docs.rke2.io/"},(0,i.kt)("strong",{parentName:"a"},"RKE2")),"\uff1a\u4e00\u4e2a\u5b8c\u5168\u5408\u89c4\u7684 Kubernetes \u53d1\u884c\u7248\uff0c\u4e13\u6ce8\u4e8e\u5b89\u5168\u548c\u5408\u89c4\u6027\u3002"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://rancher.com/docs/k3s/latest/en/"},(0,i.kt)("strong",{parentName:"a"},"K3s")),"\uff1a\u4e00\u4e2a\u5b8c\u5168\u7b26\u5408\u8981\u6c42\u7684\u8f7b\u91cf\u7ea7 Kubernetes \u53d1\u884c\u7248\u3002\u5b83\u6613\u4e8e\u5b89\u88c5\uff0c\u4ec5\u9700\u8981\u4e0a\u6e38 Kubernetes \u5185\u5b58\u7684\u4e00\u534a\uff0c\u6240\u6709\u7ec4\u4ef6\u90fd\u5728\u4e00\u4e2a\u5c0f\u4e8e 100 MB \u7684\u4e8c\u8fdb\u5236\u6587\u4ef6\u4e2d\u3002")),(0,i.kt)("p",null,"\u8981\u5728 Rancher \u53d1\u884c\u7248\u4e4b\u5916\u5f3a\u5316 Kubernetes \u96c6\u7fa4\uff0c\u8bf7\u53c2\u9605\u4f60\u7684 Kubernetes \u63d0\u4f9b\u5546\u6587\u6863\u3002"),(0,i.kt)("h2",{id:"\u5f3a\u5316\u6307\u5357\u548c-benchmark-\u7248\u672c"},"\u5f3a\u5316\u6307\u5357\u548c Benchmark \u7248\u672c"),(0,i.kt)("p",null,"\u8fd9\u4e9b\u6307\u5357\u5df2\u4e0e Rancher 2.6 \u7248\u672c\u4e00\u8d77\u6d4b\u8bd5\u3002\u6bcf\u4e2a\u81ea\u6211\u8bc4\u4f30\u6307\u5357\u90fd\u9644\u6709\u5f3a\u5316\u6307\u5357\uff0c\u5e76\u5728\u7279\u5b9a\u7684 Kubernetes \u7248\u672c\u548c CIS Benchmark \u7248\u672c\u4e0a\u8fdb\u884c\u4e86\u6d4b\u8bd5\u3002\u5982\u679c CIS Benchmark \u6d4b\u8bd5\u5c1a\u672a\u9488\u5bf9\u4f60\u7684 Kubernetes \u7248\u672c\u8fdb\u884c\u9a8c\u8bc1\uff0c\u4f60\u53ef\u4ee5\u5148\u4f7f\u7528\u73b0\u6709\u6307\u5357\u3002"),(0,i.kt)("h3",{id:"rke-\u6307\u5357"},"RKE \u6307\u5357"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Kubernetes \u7248\u672c"),(0,i.kt)("th",{parentName:"tr",align:null},"CIS Benchmark \u7248\u672c"),(0,i.kt)("th",{parentName:"tr",align:null},"\u81ea\u6211\u8bc4\u4f30\u6307\u5357"),(0,i.kt)("th",{parentName:"tr",align:null},"\u5f3a\u5316\u6307\u5357"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Kubernetes v1.18 \u5230 v1.23"),(0,i.kt)("td",{parentName:"tr",align:null},"CIS v1.6"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"/zh/reference-guides/rancher-security/rancher-v2.6-hardening-guides/rke1-self-assessment-guide-with-cis-v1.6-benchmark"},"\u94fe\u63a5")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"/zh/reference-guides/rancher-security/rancher-v2.6-hardening-guides/rke1-hardening-guide-with-cis-v1.6-benchmark"},"\u94fe\u63a5"))))),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("ul",{parentName:"div"},(0,i.kt)("li",{parentName:"ul"},"Kubernetes v1.19 \u548c v1.20 \u7684 CIS v1.20 Benchmark \u7248\u672c\u5c1a\u672a\u4f5c\u4e3a\u914d\u7f6e\u6587\u4ef6\u53d1\u5e03\u5728 Rancher \u7684 CIS Benchmark Chart \u4e2d\u3002")))),(0,i.kt)("h3",{id:"rke2-\u6307\u5357"},"RKE2 \u6307\u5357"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,i.kt)("th",{parentName:"tr",align:null},"Kubernetes \u7248\u672c"),(0,i.kt)("th",{parentName:"tr",align:null},"CIS Benchmark \u7248\u672c"),(0,i.kt)("th",{parentName:"tr",align:null},"\u81ea\u6211\u8bc4\u4f30\u6307\u5357"),(0,i.kt)("th",{parentName:"tr",align:null},"\u5f3a\u5316\u6307\u5357"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Rancher \u914d\u7f6e\u7684 RKE2 \u96c6\u7fa4"),(0,i.kt)("td",{parentName:"tr",align:null},"Kubernetes v1.21 \u5230 v1.23"),(0,i.kt)("td",{parentName:"tr",align:null},"CIS v1.6"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"/zh/reference-guides/rancher-security/rancher-v2.6-hardening-guides/rke2-self-assessment-guide-with-cis-v1.6-benchmark"},"\u94fe\u63a5")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"/zh/reference-guides/rancher-security/rancher-v2.6-hardening-guides/rke2-hardening-guide-with-cis-v1.6-benchmark"},"\u94fe\u63a5"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"\u72ec\u7acb RKE2"),(0,i.kt)("td",{parentName:"tr",align:null},"Kubernetes v1.21 \u5230 v1.23"),(0,i.kt)("td",{parentName:"tr",align:null},"CIS v1.6"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://docs.rke2.io/security/cis_self_assessment16/"},"\u94fe\u63a5")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://docs.rke2.io/security/hardening_guide/"},"\u94fe\u63a5"))))),(0,i.kt)("h3",{id:"k3s-\u6307\u5357"},"K3s \u6307\u5357"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Kubernetes \u7248\u672c"),(0,i.kt)("th",{parentName:"tr",align:null},"CIS Benchmark \u7248\u672c"),(0,i.kt)("th",{parentName:"tr",align:null},"\u81ea\u6211\u8bc4\u4f30\u6307\u5357"),(0,i.kt)("th",{parentName:"tr",align:null},"\u5f3a\u5316\u6307\u5357"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Kubernetes v1.21 \u548c v1.22"),(0,i.kt)("td",{parentName:"tr",align:null},"CIS v1.6"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://rancher.com/docs/k3s/latest/en/security/self_assessment/"},"\u94fe\u63a5")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://rancher.com/docs/k3s/latest/en/security/hardening_guide/"},"\u94fe\u63a5"))))),(0,i.kt)("h2",{id:"\u4f7f\u7528-selinux-\u7684-rancher"},"\u4f7f\u7528 SELinux \u7684 Rancher"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Security-Enhanced_Linux"},"\u5b89\u5168\u589e\u5f3a\u578b Linux (SELinux)")," \u662f\u5bf9 Linux \u7684\u5b89\u5168\u589e\u5f3a\u3002\u88ab\u653f\u5e9c\u673a\u6784\u4f7f\u7528\u4e4b\u540e\uff0cSELinux \u5df2\u6210\u4e3a\u884c\u4e1a\u6807\u51c6\uff0c\u5e76\u5728 RHEL \u548c CentOS \u4e0a\u9ed8\u8ba4\u542f\u7528\u3002"),(0,i.kt)("p",null,"\u8981\u914d\u5408\u4f7f\u7528 Rancher \u4e0e SELinux\uff0c\u6211\u4eec\u5efa\u8bae\u4f60\u6839\u636e",(0,i.kt)("a",{parentName:"p",href:"/zh/pages-for-subheaders/selinux-rpm#%E5%AE%89%E8%A3%85-rancher-selinux-rpm"},"\u6b64\u9875\u9762"),"\u7684\u5b89\u88c5\u8bf4\u660e\u5b89\u88c5 ",(0,i.kt)("inlineCode",{parentName:"p"},"rancher-selinux")," RPM\u3002"))}o.isMDXComponent=!0}}]);