"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[74866],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>u});var a=t(67294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,i=function(e,n){if(null==e)return{};var t,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var s=a.createContext({}),p=function(e){var n=a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},c=function(e){var n=p(e.components);return a.createElement(s.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},d=a.forwardRef((function(e,n){var t=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=p(t),u=i,v=d["".concat(s,".").concat(u)]||d[u]||m[u]||r;return t?a.createElement(v,o(o({ref:n},c),{},{components:t})):a.createElement(v,o({ref:n},c))}));function u(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var r=t.length,o=new Array(r);o[0]=d;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var p=2;p<r;p++)o[p]=t[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},23772:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>o,default:()=>m,frontMatter:()=>r,metadata:()=>l,toc:()=>p});var a=t(87462),i=(t(67294),t(3905));const r={title:"3. \u4f7f\u7528 Istio Sidecar \u6dfb\u52a0\u90e8\u7f72\u548c\u670d\u52a1"},o=void 0,l={unversionedId:"how-to-guides/advanced-user-guides/istio-setup-guide/use-istio-sidecar",id:"how-to-guides/advanced-user-guides/istio-setup-guide/use-istio-sidecar",title:"3. \u4f7f\u7528 Istio Sidecar \u6dfb\u52a0\u90e8\u7f72\u548c\u670d\u52a1",description:"\u8981\u4e3a\u5de5\u4f5c\u8d1f\u8f7d\u542f\u7528 Istio\uff0c\u4f60\u5fc5\u987b\u5148\u5728\u96c6\u7fa4\u548c\u547d\u540d\u7a7a\u95f4\u4e2d\u5b89\u88c5 Istio \u5e94\u7528\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/how-to-guides/advanced-user-guides/istio-setup-guide/use-istio-sidecar.md",sourceDirName:"how-to-guides/advanced-user-guides/istio-setup-guide",slug:"/how-to-guides/advanced-user-guides/istio-setup-guide/use-istio-sidecar",permalink:"/zh/how-to-guides/advanced-user-guides/istio-setup-guide/use-istio-sidecar",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/docs/how-to-guides/advanced-user-guides/istio-setup-guide/use-istio-sidecar.md",tags:[],version:"current",lastUpdatedAt:1663953084,formattedLastUpdatedAt:"2022\u5e749\u670823\u65e5",frontMatter:{title:"3. \u4f7f\u7528 Istio Sidecar \u6dfb\u52a0\u90e8\u7f72\u548c\u670d\u52a1"},sidebar:"tutorialSidebar",previous:{title:"2. \u5728\u547d\u540d\u7a7a\u95f4\u4e2d\u542f\u7528 Istio",permalink:"/zh/how-to-guides/advanced-user-guides/istio-setup-guide/enable-istio-in-namespace"},next:{title:"4. \u8bbe\u7f6e Istio Gateway",permalink:"/zh/how-to-guides/advanced-user-guides/istio-setup-guide/set-up-istio-gateway"}},s={},p=[{value:"\u6dfb\u52a0\u90e8\u7f72\u548c\u670d\u52a1",id:"\u6dfb\u52a0\u90e8\u7f72\u548c\u670d\u52a1",level:3},{value:"\u90e8\u7f72\u548c\u670d\u52a1\u793a\u4f8b",id:"\u90e8\u7f72\u548c\u670d\u52a1\u793a\u4f8b",level:3},{value:"\u8d44\u6e90 YAML",id:"\u8d44\u6e90-yaml",level:3},{value:"\u540e\u7eed\u6b65\u9aa4",id:"\u540e\u7eed\u6b65\u9aa4",level:3}],c={toc:p};function m(e){let{components:n,...t}=e;return(0,i.kt)("wrapper",(0,a.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("admonition",{title:"\u5148\u51b3\u6761\u4ef6\uff1a",type:"note"},(0,i.kt)("p",{parentName:"admonition"},"\u8981\u4e3a\u5de5\u4f5c\u8d1f\u8f7d\u542f\u7528 Istio\uff0c\u4f60\u5fc5\u987b\u5148\u5728\u96c6\u7fa4\u548c\u547d\u540d\u7a7a\u95f4\u4e2d\u5b89\u88c5 Istio \u5e94\u7528\u3002")),(0,i.kt)("p",null,"\u5728\u547d\u540d\u7a7a\u95f4\u4e2d\u542f\u7528 Istio \u53ea\u4f1a\u4e3a\u65b0\u5de5\u4f5c\u8d1f\u8f7d\u542f\u7528\u81ea\u52a8 sidecar \u6ce8\u5165\u3002\u8981\u4e3a\u73b0\u6709\u5de5\u4f5c\u8d1f\u8f7d\u542f\u7528 Envoy sidecar\uff0c\u4f60\u9700\u8981\u624b\u52a8\u4e3a\u6bcf\u4e2a\u5de5\u4f5c\u8d1f\u8f7d\u542f\u7528\u5b83\u3002"),(0,i.kt)("p",null,"\u8981\u5728\u547d\u540d\u7a7a\u95f4\u4e2d\u7684\u73b0\u6709\u5de5\u4f5c\u8d1f\u8f7d\u4e0a\u6ce8\u5165 Istio sidecar\uff1a"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"\u5728\u5de6\u4e0a\u89d2\uff0c\u5355\u51fb ",(0,i.kt)("strong",{parentName:"li"},"\u2630 > \u96c6\u7fa4\u7ba1\u7406"),"\u3002"),(0,i.kt)("li",{parentName:"ol"},"\u5728",(0,i.kt)("strong",{parentName:"li"},"\u96c6\u7fa4"),"\u9875\u9762\u4e0a\uff0c\u8f6c\u5230\u8981\u53ef\u89c6\u5316\u7684\u96c6\u7fa4\uff0c\u7136\u540e\u5355\u51fb ",(0,i.kt)("strong",{parentName:"li"},"Explore"),"\u3002"),(0,i.kt)("li",{parentName:"ol"},"\u70b9\u51fb",(0,i.kt)("strong",{parentName:"li"},"\u5de5\u4f5c\u8d1f\u8f7d"),"\u3002"),(0,i.kt)("li",{parentName:"ol"},"\u8f6c\u5230\u8981\u6ce8\u5165 Istio sidecar \u7684\u5de5\u4f5c\u8d1f\u8f7d\uff0c\u7136\u540e\u5355\u51fb ",(0,i.kt)("strong",{parentName:"li"},"\u22ee > \u91cd\u65b0\u90e8\u7f72"),"\u3002\u91cd\u65b0\u90e8\u7f72\u5de5\u4f5c\u8d1f\u8f7d\u540e\uff0c\u8be5\u5de5\u4f5c\u8d1f\u8f7d\u4f1a\u81ea\u52a8\u6ce8\u5165 Envoy sidecar\u3002")),(0,i.kt)("p",null,"\u7b49\u5f85\u51e0\u5206\u949f\uff0c\u7136\u540e\u5de5\u4f5c\u8d1f\u8f7d\u5c06\u5347\u7ea7\u5e76\u5177\u6709 Istio sidecar\u3002\u5355\u51fb\u5b83\u5e76\u8f6c\u5230",(0,i.kt)("strong",{parentName:"p"},"\u5bb9\u5668"),"\u3002\u4f60\u5e94\u8be5\u80fd\u770b\u5230\u8be5\u5de5\u4f5c\u8d1f\u8f7d\u65c1\u8fb9\u7684 ",(0,i.kt)("inlineCode",{parentName:"p"},"istio-proxy"),"\u3002\u8fd9\u610f\u5473\u7740\u4e3a\u5de5\u4f5c\u8d1f\u8f7d\u542f\u7528\u4e86 Istio sidecar\u3002Istio \u6b63\u5728\u4e3a Sidecar Envoy \u505a\u6240\u6709\u7684\u63a5\u7ebf\u5de5\u4f5c\u3002\u5982\u679c\u4f60\u73b0\u5728\u5728 yaml \u4e2d\u542f\u7528\u5b83\u4eec\uff0cIstio \u53ef\u4ee5\u81ea\u52a8\u6267\u884c\u6240\u6709\u529f\u80fd\u3002"),(0,i.kt)("h3",{id:"\u6dfb\u52a0\u90e8\u7f72\u548c\u670d\u52a1"},"\u6dfb\u52a0\u90e8\u7f72\u548c\u670d\u52a1"),(0,i.kt)("p",null,"\u4ee5\u4e0b\u662f\u5728\u547d\u540d\u7a7a\u95f4\u4e2d\u6dfb\u52a0\u65b0 ",(0,i.kt)("strong",{parentName:"p"},"Deployment")," \u7684\u51e0\u79cd\u65b9\u6cd5\uff1a"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"\u70b9\u51fb ",(0,i.kt)("strong",{parentName:"li"},"\u2630 > \u96c6\u7fa4\u7ba1\u7406"),"\u3002"),(0,i.kt)("li",{parentName:"ol"},"\u9009\u62e9\u4f60\u521b\u5efa\u7684\u96c6\u7fa4\uff0c\u5e76\u70b9\u51fb ",(0,i.kt)("strong",{parentName:"li"},"Explore"),"\u3002"),(0,i.kt)("li",{parentName:"ol"},"\u70b9\u51fb",(0,i.kt)("strong",{parentName:"li"},"\u5de5\u4f5c\u8d1f\u8f7d"),"\u3002"),(0,i.kt)("li",{parentName:"ol"},"\u5355\u51fb",(0,i.kt)("strong",{parentName:"li"},"\u521b\u5efa"),"\u3002"),(0,i.kt)("li",{parentName:"ol"},"\u70b9\u51fb ",(0,i.kt)("strong",{parentName:"li"},"Deployment"),"\u3002"),(0,i.kt)("li",{parentName:"ol"},"\u586b\u5199\u8868\u5355\uff0c\u6216",(0,i.kt)("strong",{parentName:"li"},"\u4ee5 YAML \u6587\u4ef6\u7f16\u8f91"),"\u3002"),(0,i.kt)("li",{parentName:"ol"},"\u5355\u51fb",(0,i.kt)("strong",{parentName:"li"},"\u521b\u5efa"),"\u3002")),(0,i.kt)("p",null,"\u8981\u5c06 ",(0,i.kt)("strong",{parentName:"p"},"Service")," \u6dfb\u52a0\u5230\u4f60\u7684\u547d\u540d\u7a7a\u95f4\uff1a"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"\u70b9\u51fb ",(0,i.kt)("strong",{parentName:"li"},"\u2630 > \u96c6\u7fa4\u7ba1\u7406"),"\u3002"),(0,i.kt)("li",{parentName:"ol"},"\u9009\u62e9\u4f60\u521b\u5efa\u7684\u96c6\u7fa4\uff0c\u5e76\u70b9\u51fb ",(0,i.kt)("strong",{parentName:"li"},"Explore"),"\u3002"),(0,i.kt)("li",{parentName:"ol"},"\u70b9\u51fb",(0,i.kt)("strong",{parentName:"li"},"\u670d\u52a1\u53d1\u73b0 > \u670d\u52a1"),"\u3002"),(0,i.kt)("li",{parentName:"ol"},"\u5355\u51fb",(0,i.kt)("strong",{parentName:"li"},"\u521b\u5efa"),"\u3002"),(0,i.kt)("li",{parentName:"ol"},"\u9009\u62e9\u6240\u9700\u7684\u670d\u52a1\u7c7b\u578b\u3002"),(0,i.kt)("li",{parentName:"ol"},"\u586b\u5199\u8868\u5355\uff0c\u6216",(0,i.kt)("strong",{parentName:"li"},"\u4ee5 YAML \u6587\u4ef6\u7f16\u8f91"),"\u3002"),(0,i.kt)("li",{parentName:"ol"},"\u70b9\u51fb",(0,i.kt)("strong",{parentName:"li"},"\u521b\u5efa"),"\u3002")),(0,i.kt)("p",null,"\u4f60\u8fd8\u53ef\u4ee5\u4f7f\u7528 kubectl ",(0,i.kt)("strong",{parentName:"p"},"shell")," \u6765\u521b\u5efa deployment \u548c service\uff1a"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"\u5982\u679c\u4f60\u7684\u6587\u4ef6\u5b58\u50a8\u5728\u672c\u5730\u96c6\u7fa4\u4e2d\uff0c\u8fd0\u884c ",(0,i.kt)("inlineCode",{parentName:"li"},"kubectl create -f <name of service/deployment file>.yaml"),"\u3002"),(0,i.kt)("li",{parentName:"ol"},"\u6216\u8fd0\u884c ",(0,i.kt)("inlineCode",{parentName:"li"},"cat<< EOF | kubectl apply -f -"),"\uff0c\u5c06\u6587\u4ef6\u5185\u5bb9\u7c98\u8d34\u5230\u7ec8\u7aef\uff0c\u7136\u540e\u8fd0\u884c ",(0,i.kt)("inlineCode",{parentName:"li"},"EOF")," \u6765\u5b8c\u6210\u547d\u4ee4\u3002")),(0,i.kt)("h3",{id:"\u90e8\u7f72\u548c\u670d\u52a1\u793a\u4f8b"},"\u90e8\u7f72\u548c\u670d\u52a1\u793a\u4f8b"),(0,i.kt)("p",null,"\u63a5\u4e0b\u6765\uff0c\u6211\u4eec\u4e3a Istio \u6587\u6863\u4e2d\u7684 BookInfo \u5e94\u7528\u7684\u793a\u4f8b\u90e8\u7f72\u548c\u670d\u52a1\u6dfb\u52a0 Kubernetes \u8d44\u6e90\uff1a"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"\u70b9\u51fb ",(0,i.kt)("strong",{parentName:"li"},"\u2630 > \u96c6\u7fa4\u7ba1\u7406"),"\u3002"),(0,i.kt)("li",{parentName:"ol"},"\u9009\u62e9\u4f60\u521b\u5efa\u7684\u96c6\u7fa4\uff0c\u5e76\u70b9\u51fb ",(0,i.kt)("strong",{parentName:"li"},"Explore"),"\u3002"),(0,i.kt)("li",{parentName:"ol"},"\u5728\u9876\u90e8\u5bfc\u822a\u680f\u4e2d\uff0c\u6253\u5f00 kubectl shell\u3002"),(0,i.kt)("li",{parentName:"ol"},"\u8fd0\u884c ",(0,i.kt)("inlineCode",{parentName:"li"},"cat<< EOF | kubectl apply -f -"),"\u3002"),(0,i.kt)("li",{parentName:"ol"},"\u5c06\u4ee5\u4e0b\u8d44\u6e90\u590d\u5236\u5230 shell \u4e2d\u3002"),(0,i.kt)("li",{parentName:"ol"},"\u8fd0\u884c ",(0,i.kt)("inlineCode",{parentName:"li"},"EOF"),"\u3002")),(0,i.kt)("p",null,"\u8fd9\u5c06\u5728 Istio \u7684\u793a\u4f8b BookInfo \u5e94\u7528\u4e2d\u8bbe\u7f6e\u4ee5\u4e0b\u793a\u4f8b\u8d44\u6e90\uff1a"),(0,i.kt)("p",null,"Details \u670d\u52a1\u548c\u90e8\u7f72\uff1a"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u4e00\u4e2a ",(0,i.kt)("inlineCode",{parentName:"li"},"details")," Service\u3002"),(0,i.kt)("li",{parentName:"ul"},"\u4e00\u4e2a ",(0,i.kt)("inlineCode",{parentName:"li"},"bookinfo-details")," \u7684 ServiceAccount\u3002"),(0,i.kt)("li",{parentName:"ul"},"\u4e00\u4e2a ",(0,i.kt)("inlineCode",{parentName:"li"},"details-v1")," Deployment\u3002")),(0,i.kt)("p",null,"Ratings \u670d\u52a1\u548c\u90e8\u7f72\uff1a"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u4e00\u4e2a ",(0,i.kt)("inlineCode",{parentName:"li"},"ratings")," Service\u3002"),(0,i.kt)("li",{parentName:"ul"},"\u4e00\u4e2a ",(0,i.kt)("inlineCode",{parentName:"li"},"bookinfo-ratings")," \u7684 ServiceAccount\u3002"),(0,i.kt)("li",{parentName:"ul"},"\u4e00\u4e2a ",(0,i.kt)("inlineCode",{parentName:"li"},"ratings-v1")," Deployment\u3002")),(0,i.kt)("p",null,"Reviews \u670d\u52a1\u548c\u90e8\u7f72\uff08\u4e09\u4e2a\u7248\u672c\uff09\uff1a"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u4e00\u4e2a ",(0,i.kt)("inlineCode",{parentName:"li"},"reviews")," Service\u3002"),(0,i.kt)("li",{parentName:"ul"},"\u4e00\u4e2a ",(0,i.kt)("inlineCode",{parentName:"li"},"bookinfo-reviews")," \u7684 ServiceAccount\u3002"),(0,i.kt)("li",{parentName:"ul"},"\u4e00\u4e2a ",(0,i.kt)("inlineCode",{parentName:"li"},"reviews-v1")," Deployment\u3002"),(0,i.kt)("li",{parentName:"ul"},"\u4e00\u4e2a ",(0,i.kt)("inlineCode",{parentName:"li"},"reviews-v2")," Deployment\u3002"),(0,i.kt)("li",{parentName:"ul"},"\u4e00\u4e2a ",(0,i.kt)("inlineCode",{parentName:"li"},"reviews-v3")," Deployment\u3002")),(0,i.kt)("p",null,"Productpage \u670d\u52a1\u548c\u90e8\u7f72\uff1a"),(0,i.kt)("p",null,"\u8fd9\u662f\u5e94\u7528\u7684\u4e3b\u9875\uff0c\u53ef\u4ee5\u901a\u8fc7\u7f51\u7edc\u6d4f\u89c8\u5668\u4e2d\u67e5\u770b\u3002\u5c06\u4ece\u8be5\u9875\u9762\u8c03\u7528\u5176\u4ed6\u670d\u52a1\u3002"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u4e00\u4e2a ",(0,i.kt)("inlineCode",{parentName:"li"},"productpage")," service\u3002"),(0,i.kt)("li",{parentName:"ul"},"\u4e00\u4e2a ",(0,i.kt)("inlineCode",{parentName:"li"},"bookinfo-productpage")," \u7684 ServiceAccount\u3002"),(0,i.kt)("li",{parentName:"ul"},"\u4e00\u4e2a ",(0,i.kt)("inlineCode",{parentName:"li"},"productpage-v1")," Deployment\u3002")),(0,i.kt)("h3",{id:"\u8d44\u6e90-yaml"},"\u8d44\u6e90 YAML"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},'# Copyright 2017 Istio Authors\n#\n#   Licensed under the Apache License, Version 2.0 (the "License");\n#   you may not use this file except in compliance with the License.\n#   You may obtain a copy of the License at\n#\n#       http://www.apache.org/licenses/LICENSE-2.0\n#\n#   Unless required by applicable law or agreed to in writing, software\n#   distributed under the License is distributed on an "AS IS" BASIS,\n#   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n#   See the License for the specific language governing permissions and\n#   limitations under the License.\n\n##################################################################################################\n# Details service\n##################################################################################################\napiVersion: v1\nkind: Service\nmetadata:\n  name: details\n  labels:\n    app: details\n    service: details\nspec:\n  ports:\n  - port: 9080\n    name: http\n  selector:\n    app: details\n---\napiVersion: v1\nkind: ServiceAccount\nmetadata:\n  name: bookinfo-details\n---\napiVersion: apps/v1\nkind: Deployment\nmetadata:\n  name: details-v1\n  labels:\n    app: details\n    version: v1\nspec:\n  replicas: 1\n  selector:\n    matchLabels:\n      app: details\n      version: v1\n  template:\n    metadata:\n      labels:\n        app: details\n        version: v1\n    spec:\n      serviceAccountName: bookinfo-details\n      containers:\n      - name: details\n        image: docker.io/istio/examples-bookinfo-details-v1:1.15.0\n        imagePullPolicy: IfNotPresent\n        ports:\n        - containerPort: 9080\n---\n##################################################################################################\n# Ratings service\n##################################################################################################\napiVersion: v1\nkind: Service\nmetadata:\n  name: ratings\n  labels:\n    app: ratings\n    service: ratings\nspec:\n  ports:\n  - port: 9080\n    name: http\n  selector:\n    app: ratings\n---\napiVersion: v1\nkind: ServiceAccount\nmetadata:\n  name: bookinfo-ratings\n---\napiVersion: apps/v1\nkind: Deployment\nmetadata:\n  name: ratings-v1\n  labels:\n    app: ratings\n    version: v1\nspec:\n  replicas: 1\n  selector:\n    matchLabels:\n      app: ratings\n      version: v1\n  template:\n    metadata:\n      labels:\n        app: ratings\n        version: v1\n    spec:\n      serviceAccountName: bookinfo-ratings\n      containers:\n      - name: ratings\n        image: docker.io/istio/examples-bookinfo-ratings-v1:1.15.0\n        imagePullPolicy: IfNotPresent\n        ports:\n        - containerPort: 9080\n---\n##################################################################################################\n# Reviews service\n##################################################################################################\napiVersion: v1\nkind: Service\nmetadata:\n  name: reviews\n  labels:\n    app: reviews\n    service: reviews\nspec:\n  ports:\n  - port: 9080\n    name: http\n  selector:\n    app: reviews\n---\napiVersion: v1\nkind: ServiceAccount\nmetadata:\n  name: bookinfo-reviews\n---\napiVersion: apps/v1\nkind: Deployment\nmetadata:\n  name: reviews-v1\n  labels:\n    app: reviews\n    version: v1\nspec:\n  replicas: 1\n  selector:\n    matchLabels:\n      app: reviews\n      version: v1\n  template:\n    metadata:\n      labels:\n        app: reviews\n        version: v1\n    spec:\n      serviceAccountName: bookinfo-reviews\n      containers:\n      - name: reviews\n        image: docker.io/istio/examples-bookinfo-reviews-v1:1.15.0\n        imagePullPolicy: IfNotPresent\n        ports:\n        - containerPort: 9080\n---\napiVersion: apps/v1\nkind: Deployment\nmetadata:\n  name: reviews-v2\n  labels:\n    app: reviews\n    version: v2\nspec:\n  replicas: 1\n  selector:\n    matchLabels:\n      app: reviews\n      version: v2\n  template:\n    metadata:\n      labels:\n        app: reviews\n        version: v2\n    spec:\n      serviceAccountName: bookinfo-reviews\n      containers:\n      - name: reviews\n        image: docker.io/istio/examples-bookinfo-reviews-v2:1.15.0\n        imagePullPolicy: IfNotPresent\n        ports:\n        - containerPort: 9080\n---\napiVersion: apps/v1\nkind: Deployment\nmetadata:\n  name: reviews-v3\n  labels:\n    app: reviews\n    version: v3\nspec:\n  replicas: 1\n  selector:\n    matchLabels:\n      app: reviews\n      version: v3\n  template:\n    metadata:\n      labels:\n        app: reviews\n        version: v3\n    spec:\n      serviceAccountName: bookinfo-reviews\n      containers:\n      - name: reviews\n        image: docker.io/istio/examples-bookinfo-reviews-v3:1.15.0\n        imagePullPolicy: IfNotPresent\n        ports:\n        - containerPort: 9080\n---\n##################################################################################################\n# Productpage services\n##################################################################################################\napiVersion: v1\nkind: Service\nmetadata:\n  name: productpage\n  labels:\n    app: productpage\n    service: productpage\nspec:\n  ports:\n  - port: 9080\n    name: http\n  selector:\n    app: productpage\n---\napiVersion: v1\nkind: ServiceAccount\nmetadata:\n  name: bookinfo-productpage\n---\napiVersion: apps/v1\nkind: Deployment\nmetadata:\n  name: productpage-v1\n  labels:\n    app: productpage\n    version: v1\nspec:\n  replicas: 1\n  selector:\n    matchLabels:\n      app: productpage\n      version: v1\n  template:\n    metadata:\n      labels:\n        app: productpage\n        version: v1\n    spec:\n      serviceAccountName: bookinfo-productpage\n      containers:\n      - name: productpage\n        image: docker.io/istio/examples-bookinfo-productpage-v1:1.15.0\n        imagePullPolicy: IfNotPresent\n        ports:\n        - containerPort: 9080\n---\n')),(0,i.kt)("h3",{id:"\u540e\u7eed\u6b65\u9aa4"},"\u540e\u7eed\u6b65\u9aa4"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/zh/how-to-guides/advanced-user-guides/istio-setup-guide/set-up-istio-gateway"},"\u8bbe\u7f6e Istio Gateway")))}m.isMDXComponent=!0}}]);