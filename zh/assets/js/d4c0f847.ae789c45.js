"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[70711],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>h});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),p=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},m=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},k={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},s=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),s=p(n),h=a,u=s["".concat(c,".").concat(h)]||s[h]||k[h]||i;return n?r.createElement(u,l(l({ref:t},m),{},{components:n})):r.createElement(u,l({ref:t},m))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=s;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var p=2;p<i;p++)l[p]=n[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}s.displayName="MDXCreateElement"},74179:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>k,frontMatter:()=>i,metadata:()=>o,toc:()=>p});var r=n(87462),a=(n(67294),n(3905));const i={title:"\u4e3a\u96c6\u7fa4\u626b\u63cf\u521b\u5efa\u81ea\u5b9a\u4e49 Benchmark \u7248\u672c"},l=void 0,o={unversionedId:"integrations-in-rancher/cis-scans/custom-benchmark",id:"version-2.6/integrations-in-rancher/cis-scans/custom-benchmark",title:"\u4e3a\u96c6\u7fa4\u626b\u63cf\u521b\u5efa\u81ea\u5b9a\u4e49 Benchmark \u7248\u672c",description:"\u6bcf\u4e2a Benchmark \u7248\u672c\u90fd\u5b9a\u4e49\u4e86\u4e00\u7ec4\u6d4b\u8bd5\u914d\u7f6e\u6587\u4ef6\uff0c\u8fd9\u4e9b\u6587\u4ef6\u5b9a\u4e49\u4e86\u7531 kube-bench \u5de5\u5177\u8fd0\u884c\u7684 CIS \u6d4b\u8bd5\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-2.6/integrations-in-rancher/cis-scans/custom-benchmark.md",sourceDirName:"integrations-in-rancher/cis-scans",slug:"/integrations-in-rancher/cis-scans/custom-benchmark",permalink:"/zh/v2.6/integrations-in-rancher/cis-scans/custom-benchmark",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/versioned_docs/version-2.6/integrations-in-rancher/cis-scans/custom-benchmark.md",tags:[],version:"2.6",lastUpdatedAt:1668452187,formattedLastUpdatedAt:"2022\u5e7411\u670814\u65e5",frontMatter:{title:"\u4e3a\u96c6\u7fa4\u626b\u63cf\u521b\u5efa\u81ea\u5b9a\u4e49 Benchmark \u7248\u672c"},sidebar:"tutorialSidebar",previous:{title:"\u8df3\u8fc7\u548c\u4e0d\u9002\u7528\u7684\u6d4b\u8bd5",permalink:"/zh/v2.6/integrations-in-rancher/cis-scans/skipped-and-not-applicable-tests"},next:{title:"\u4f7f\u7528 Feet \u8fdb\u884c\u6301\u7eed\u4ea4\u4ed8",permalink:"/zh/v2.6/pages-for-subheaders/fleet-gitops-at-scale"}},c={},p=[{value:"1. \u51c6\u5907\u81ea\u5b9a\u4e49 Benchmark \u7248\u672c ConfigMap",id:"1-\u51c6\u5907\u81ea\u5b9a\u4e49-benchmark-\u7248\u672c-configmap",level:3},{value:"2. \u5c06\u81ea\u5b9a\u4e49 Benchmark \u7248\u672c\u6dfb\u52a0\u5230\u96c6\u7fa4",id:"2-\u5c06\u81ea\u5b9a\u4e49-benchmark-\u7248\u672c\u6dfb\u52a0\u5230\u96c6\u7fa4",level:3},{value:"3. \u4e3a\u81ea\u5b9a\u4e49 Benchmark \u7248\u672c\u521b\u5efa\u65b0\u914d\u7f6e\u6587\u4ef6",id:"3-\u4e3a\u81ea\u5b9a\u4e49-benchmark-\u7248\u672c\u521b\u5efa\u65b0\u914d\u7f6e\u6587\u4ef6",level:3},{value:"4. \u4f7f\u7528\u81ea\u5b9a\u4e49 Benchmark \u7248\u672c\u8fd0\u884c\u626b\u63cf",id:"4-\u4f7f\u7528\u81ea\u5b9a\u4e49-benchmark-\u7248\u672c\u8fd0\u884c\u626b\u63cf",level:3}],m={toc:p};function k(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"\u6bcf\u4e2a Benchmark \u7248\u672c\u90fd\u5b9a\u4e49\u4e86\u4e00\u7ec4\u6d4b\u8bd5\u914d\u7f6e\u6587\u4ef6\uff0c\u8fd9\u4e9b\u6587\u4ef6\u5b9a\u4e49\u4e86\u7531 ",(0,a.kt)("a",{href:"https://github.com/aquasecurity/kube-bench",target:"_blank"},"kube-bench")," \u5de5\u5177\u8fd0\u884c\u7684 CIS \u6d4b\u8bd5\u3002\n",(0,a.kt)("inlineCode",{parentName:"p"},"rancher-cis-benchmark")," \u5e94\u7528\u5b89\u88c5\u4e86\u4e00\u4e9b\u9ed8\u8ba4\u7684 Benchmark \u6d4b\u8bd5\u7248\u672c\uff0c\u8fd9\u4e9b\u7248\u672c\u5217\u5728\u4e86 CIS Benchmark \u6d4b\u8bd5\u5e94\u7528\u83dc\u5355\u4e0b\u3002"),(0,a.kt)("p",null,"\u4f46\u662f\uff0c\u67d0\u4e9b Kubernetes \u96c6\u7fa4\u53ef\u80fd\u9700\u8981\u81ea\u5b9a\u4e49\u914d\u7f6e Benchmark \u6d4b\u8bd5\u3002\u4f8b\u5982\uff0cKubernetes \u914d\u7f6e\u6587\u4ef6\u6216\u8bc1\u4e66\u7684\u8def\u5f84\u53ef\u80fd\u4e0e\u4e0a\u6e38 CIS Benchmark \u7684\u6807\u51c6\u4f4d\u7f6e\u4e0d\u540c\u3002"),(0,a.kt)("p",null,"\u73b0\u5728\uff0c\u4f60\u53ef\u4ee5\u4f7f\u7528 ",(0,a.kt)("inlineCode",{parentName:"p"},"rancher-cis-benchmark")," \u5e94\u7528\u6765\u521b\u5efa\u81ea\u5b9a\u4e49 Benchmark \u7248\u672c\uff0c\u4ece\u800c\u8fd0\u884c\u96c6\u7fa4\u626b\u63cf\u3002"),(0,a.kt)("p",null,"\u8fd0\u884c\u96c6\u7fa4\u626b\u63cf\u65f6\uff0c\u4f60\u9700\u8981\u9009\u62e9\u6307\u5411\u7279\u5b9a Benchmark \u7248\u672c\u7684\u914d\u7f6e\u6587\u4ef6\u3002"),(0,a.kt)("p",null,"\u6309\u7167\u4ee5\u4e0b\u6240\u6709\u6b65\u9aa4\u6dfb\u52a0\u81ea\u5b9a\u4e49 Benchmark \u7248\u672c\u5e76\u4f7f\u7528\u5b83\u8fd0\u884c\u626b\u63cf\u3002"),(0,a.kt)("h3",{id:"1-\u51c6\u5907\u81ea\u5b9a\u4e49-benchmark-\u7248\u672c-configmap"},"1. \u51c6\u5907\u81ea\u5b9a\u4e49 Benchmark \u7248\u672c ConfigMap"),(0,a.kt)("p",null,"\u8981\u521b\u5efa\u81ea\u5b9a\u4e49 Benchmark \u7248\u672c\uff0c\u4f60\u9700\u8981\u5148\u521b\u5efa\u4e00\u4e2a\u5305\u542b Benchmark \u7248\u672c\u914d\u7f6e\u6587\u4ef6\u7684 ConfigMap\uff0c\u5e76\u5c06\u5176\u4e0a\u4f20\u5230\u8981\u8fd0\u884c\u626b\u63cf\u7684 Kubernetes \u96c6\u7fa4\u3002"),(0,a.kt)("p",null,"\u5047\u8bbe\u8981\u6dfb\u52a0\u4e00\u4e2a\u540d\u4e3a ",(0,a.kt)("inlineCode",{parentName:"p"},"foo")," \u7684\u81ea\u5b9a\u4e49 Benchmark \u7248\u672c\uff0c\u4f60\u53ef\u4ee5\u6309\u7167\u4ee5\u4e0b\u6b65\u9aa4\u51c6\u5907\u81ea\u5b9a\u4e49 Benchmark \u7248\u672c ConfigMap\uff1a"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"\u521b\u5efa\u4e00\u4e2a\u540d\u4e3a ",(0,a.kt)("inlineCode",{parentName:"p"},"foo")," \u7684\u76ee\u5f55\uff0c\u5e76\u5728\u8be5\u76ee\u5f55\u4e2d\u653e\u7f6e\u6240\u6709\u914d\u7f6e YAML \u6587\u4ef6\uff0c ",(0,a.kt)("a",{href:"https://github.com/aquasecurity/kube-bench",target:"_blank"},"kube-bench")," \u5de5\u5177\u4f1a\u641c\u7d22\u8fd9\u4e9b\u6587\u4ef6\u3002\u4f8b\u5982\uff0c\u901a\u7528 CIS 1.5 Benchmark \u7248\u672c\u7684\u914d\u7f6e YAML \u6587\u4ef6\u5728",(0,a.kt)("a",{parentName:"p",href:"https://github.com/aquasecurity/kube-bench/tree/master/cfg/cis-1.5"},"\u6b64\u5904"),"\u3002")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"\u653e\u7f6e\u5b8c\u6574\u7684 ",(0,a.kt)("inlineCode",{parentName:"p"},"config.yaml")," \u6587\u4ef6\uff0c\u5176\u4e2d\u5305\u62ec\u6240\u6709\u8981\u6d4b\u8bd5\u7684\u7ec4\u4ef6\u3002")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"\u5c06 Benchmark \u7248\u672c\u540d\u79f0\u6dfb\u52a0\u5230 ",(0,a.kt)("inlineCode",{parentName:"p"},"config.yaml")," \u7684 ",(0,a.kt)("inlineCode",{parentName:"p"},"target_mapping")," \u4e2d\uff1a"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},'target_mapping:\n  "foo":\n    - "master"\n    - "node"\n    - "controlplane"\n    - "etcd"\n    - "policies"\n'))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"\u901a\u8fc7\u521b\u5efa ConfigMap \u5c06\u6b64\u76ee\u5f55\u4e0a\u4f20\u5230 Kubernetes \u96c6\u7fa4\uff1a"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"kubectl create configmap -n <namespace> foo --from-file=<path to directory foo>\n")))),(0,a.kt)("h3",{id:"2-\u5c06\u81ea\u5b9a\u4e49-benchmark-\u7248\u672c\u6dfb\u52a0\u5230\u96c6\u7fa4"},"2. \u5c06\u81ea\u5b9a\u4e49 Benchmark \u7248\u672c\u6dfb\u52a0\u5230\u96c6\u7fa4"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"\u5728\u5de6\u4e0a\u89d2\uff0c\u5355\u51fb ",(0,a.kt)("strong",{parentName:"li"},"\u2630 > \u96c6\u7fa4\u7ba1\u7406"),"\u3002"),(0,a.kt)("li",{parentName:"ol"},"\u5728",(0,a.kt)("strong",{parentName:"li"},"\u96c6\u7fa4"),"\u9875\u9762\u4e0a\uff0c\u8f6c\u5230\u8981\u6dfb\u52a0\u81ea\u5b9a\u4e49 Benchmark \u7684\u96c6\u7fa4\uff0c\u7136\u540e\u5355\u51fb ",(0,a.kt)("strong",{parentName:"li"},"Explore"),"\u3002"),(0,a.kt)("li",{parentName:"ol"},"\u5728\u5de6\u4fa7\u5bfc\u822a\u680f\u4e2d\uff0c\u5355\u51fb ",(0,a.kt)("strong",{parentName:"li"},"CIS Benchmark > Benchmark \u7248\u672c"),"\u3002"),(0,a.kt)("li",{parentName:"ol"},"\u5355\u51fb",(0,a.kt)("strong",{parentName:"li"},"\u521b\u5efa"),"\u3002"),(0,a.kt)("li",{parentName:"ol"},"\u8f93\u5165\u81ea\u5b9a\u4e49 Benchmark \u7248\u672c\u7684",(0,a.kt)("strong",{parentName:"li"},"\u540d\u79f0"),"\u548c\u63cf\u8ff0\u3002"),(0,a.kt)("li",{parentName:"ol"},"\u9009\u62e9\u8981\u5e94\u7528 Benchmark \u7248\u672c\u7684\u96c6\u7fa4\u63d0\u4f9b\u5546\u3002"),(0,a.kt)("li",{parentName:"ol"},"\u5728\u4e0b\u62c9\u5217\u8868\u4e2d\u9009\u62e9\u4f60\u5df2\u4e0a\u4f20\u7684 ConfigMap\u3002"),(0,a.kt)("li",{parentName:"ol"},"\u6dfb\u52a0\u6700\u4f4e\u548c\u6700\u9ad8 Kubernetes \u7248\u672c\u9650\u5236\uff08\u5982\u679c\u6709\uff09\u3002"),(0,a.kt)("li",{parentName:"ol"},"\u5355\u51fb",(0,a.kt)("strong",{parentName:"li"},"\u521b\u5efa"),"\u3002")),(0,a.kt)("h3",{id:"3-\u4e3a\u81ea\u5b9a\u4e49-benchmark-\u7248\u672c\u521b\u5efa\u65b0\u914d\u7f6e\u6587\u4ef6"},"3. \u4e3a\u81ea\u5b9a\u4e49 Benchmark \u7248\u672c\u521b\u5efa\u65b0\u914d\u7f6e\u6587\u4ef6"),(0,a.kt)("p",null,"\u8981\u4f7f\u7528\u4f60\u7684\u81ea\u5b9a\u4e49 Benchmark \u7248\u672c\u8fd0\u884c\u626b\u63cf\uff0c\u4f60\u9700\u8981\u6dfb\u52a0\u4e00\u4e2a\u6307\u5411\u6b64 Benchmark \u7248\u672c\u7684\u65b0\u914d\u7f6e\u6587\u4ef6\uff1a"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"\u5728\u5de6\u4e0a\u89d2\uff0c\u5355\u51fb ",(0,a.kt)("strong",{parentName:"li"},"\u2630 > \u96c6\u7fa4\u7ba1\u7406"),"\u3002"),(0,a.kt)("li",{parentName:"ol"},"\u5728",(0,a.kt)("strong",{parentName:"li"},"\u96c6\u7fa4"),"\u9875\u9762\u4e0a\uff0c\u8f6c\u5230\u8981\u6dfb\u52a0\u81ea\u5b9a\u4e49 Benchmark \u7684\u96c6\u7fa4\uff0c\u7136\u540e\u5355\u51fb ",(0,a.kt)("strong",{parentName:"li"},"Explore"),"\u3002"),(0,a.kt)("li",{parentName:"ol"},"\u5728\u5de6\u4fa7\u5bfc\u822a\u680f\u4e2d\uff0c\u5355\u51fb ",(0,a.kt)("strong",{parentName:"li"},"CIS Benchmark > \u914d\u7f6e\u6587\u4ef6"),"\u3002"),(0,a.kt)("li",{parentName:"ol"},"\u5355\u51fb",(0,a.kt)("strong",{parentName:"li"},"\u521b\u5efa"),"\u3002"),(0,a.kt)("li",{parentName:"ol"},"\u8bbe\u7f6e",(0,a.kt)("strong",{parentName:"li"},"\u540d\u79f0"),"\u548c\u63cf\u8ff0\u3002\u5728\u672c\u4f8b\u4e2d\uff0c\u6211\u4eec\u5c06\u5176\u547d\u540d\u4e3a ",(0,a.kt)("inlineCode",{parentName:"li"},"foo-profile"),"\u3002"),(0,a.kt)("li",{parentName:"ol"},"\u5728\u4e0b\u62c9\u5217\u8868\u4e2d\u9009\u62e9 Benchmark \u7248\u672c\u3002"),(0,a.kt)("li",{parentName:"ol"},"\u5355\u51fb",(0,a.kt)("strong",{parentName:"li"},"\u521b\u5efa"),"\u3002")),(0,a.kt)("h3",{id:"4-\u4f7f\u7528\u81ea\u5b9a\u4e49-benchmark-\u7248\u672c\u8fd0\u884c\u626b\u63cf"},"4. \u4f7f\u7528\u81ea\u5b9a\u4e49 Benchmark \u7248\u672c\u8fd0\u884c\u626b\u63cf"),(0,a.kt)("p",null,"\u6307\u5411\u4f60\u7684\u81ea\u5b9a\u4e49 Benchmark \u7248\u672c\u7684 ",(0,a.kt)("inlineCode",{parentName:"p"},"foo")," \u914d\u7f6e\u6587\u4ef6\u521b\u5efa\u5b8c\u6210\u540e\uff0c\u4f60\u53ef\u4ee5\u521b\u5efa\u4e00\u4e2a\u65b0\u7684\u626b\u63cf\uff0c\u4ece\u800c\u5728 Benchmark \u7248\u672c\u4e2d\u8fd0\u884c\u81ea\u5b9a\u4e49\u6d4b\u8bd5\u3002"),(0,a.kt)("p",null,"\u8981\u8fd0\u884c\u626b\u63cf\uff1a"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"\u5728\u5de6\u4e0a\u89d2\uff0c\u5355\u51fb ",(0,a.kt)("strong",{parentName:"li"},"\u2630 > \u96c6\u7fa4\u7ba1\u7406"),"\u3002"),(0,a.kt)("li",{parentName:"ol"},"\u5728",(0,a.kt)("strong",{parentName:"li"},"\u96c6\u7fa4"),"\u9875\u9762\u4e0a\uff0c\u8f6c\u5230\u8981\u6dfb\u52a0\u81ea\u5b9a\u4e49 Benchmark \u7684\u96c6\u7fa4\uff0c\u7136\u540e\u5355\u51fb ",(0,a.kt)("strong",{parentName:"li"},"Explore"),"\u3002"),(0,a.kt)("li",{parentName:"ol"},"\u5728\u5de6\u4fa7\u5bfc\u822a\u680f\u4e2d\uff0c\u5355\u51fb ",(0,a.kt)("strong",{parentName:"li"},"CIS Benchmark > \u626b\u63cf"),"\u3002"),(0,a.kt)("li",{parentName:"ol"},"\u5355\u51fb",(0,a.kt)("strong",{parentName:"li"},"\u521b\u5efa"),"\u3002"),(0,a.kt)("li",{parentName:"ol"},"\u9009\u62e9\u65b0\u7684\u96c6\u7fa4\u626b\u63cf\u914d\u7f6e\u6587\u4ef6\u3002"),(0,a.kt)("li",{parentName:"ol"},"\u5355\u51fb",(0,a.kt)("strong",{parentName:"li"},"\u521b\u5efa"),"\u3002")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u7ed3\u679c"),"\uff1a\u5df2\u751f\u6210\u5e26\u6709\u626b\u63cf\u7ed3\u679c\u7684\u62a5\u544a\u3002\u5982\u9700\u67e5\u770b\u7ed3\u679c\uff0c\u8bf7\u5355\u51fb\u663e\u793a\u7684\u626b\u63cf\u540d\u79f0\u3002"))}k.isMDXComponent=!0}}]);