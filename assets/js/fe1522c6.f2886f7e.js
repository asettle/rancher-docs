"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[90143],{3905:function(e,t,r){r.d(t,{Zo:function(){return l},kt:function(){return d}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=n.createContext({}),c=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},l=function(e){var t=c(e.components);return n.createElement(u.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,u=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),p=c(r),d=a,f=p["".concat(u,".").concat(d)]||p[d]||m[d]||o;return r?n.createElement(f,i(i({ref:t},l),{},{components:r})):n.createElement(f,i({ref:t},l))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=p;var s={};for(var u in t)hasOwnProperty.call(t,u)&&(s[u]=t[u]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var c=2;c<o;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},7481:function(e,t,r){r.r(t),r.d(t,{assets:function(){return l},contentTitle:function(){return u},default:function(){return d},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return m}});var n=r(87462),a=r(63366),o=(r(67294),r(3905)),i=["components"],s={title:"Setting Container Default Resource Limits",weight:3,aliases:["/rancher/v2.x/en/project-admin/resource-quotas/override-container-default/"]},u=void 0,c={unversionedId:"how-to-guides/advanced-user-guides/manage-projects/manage-project-resource-quotas/set-container-default-resource-limits",id:"version-2.5/how-to-guides/advanced-user-guides/manage-projects/manage-project-resource-quotas/set-container-default-resource-limits",title:"Setting Container Default Resource Limits",description:"When setting resource quotas, if you set anything related to CPU or Memory (i.e. limits or reservations) on a project / namespace, all containers will require a respective CPU or Memory field set during creation. See the Kubernetes documentation for more details on why this is required.",source:"@site/versioned_docs/version-2.5/how-to-guides/advanced-user-guides/manage-projects/manage-project-resource-quotas/set-container-default-resource-limits.md",sourceDirName:"how-to-guides/advanced-user-guides/manage-projects/manage-project-resource-quotas",slug:"/how-to-guides/advanced-user-guides/manage-projects/manage-project-resource-quotas/set-container-default-resource-limits",permalink:"/v2.5/how-to-guides/advanced-user-guides/manage-projects/manage-project-resource-quotas/set-container-default-resource-limits",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/versioned_docs/version-2.5/how-to-guides/advanced-user-guides/manage-projects/manage-project-resource-quotas/set-container-default-resource-limits.md",tags:[],version:"2.5",lastUpdatedAt:1662141087,formattedLastUpdatedAt:"9/2/2022",frontMatter:{title:"Setting Container Default Resource Limits",weight:3,aliases:["/rancher/v2.x/en/project-admin/resource-quotas/override-container-default/"]},sidebar:"tutorialSidebar",previous:{title:"Overriding the Default Limit for a Namespace",permalink:"/v2.5/how-to-guides/advanced-user-guides/manage-projects/manage-project-resource-quotas/override-default-limit-in-namespaces"},next:{title:"Resource Quota Type Reference",permalink:"/v2.5/how-to-guides/advanced-user-guides/manage-projects/manage-project-resource-quotas/resource-quota-types"}},l={},m=[{value:"Editing the Container Default Resource Limit",id:"editing-the-container-default-resource-limit",level:3},{value:"Resource Limit Propagation",id:"resource-limit-propagation",level:3},{value:"Container Resource Quota Types",id:"container-resource-quota-types",level:3}],p={toc:m};function d(e){var t=e.components,r=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"When setting resource quotas, if you set anything related to CPU or Memory (i.e. limits or reservations) on a project / namespace, all containers will require a respective CPU or Memory field set during creation. See the ",(0,o.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/concepts/policy/resource-quotas/#requests-vs-limits"},"Kubernetes documentation")," for more details on why this is required."),(0,o.kt)("p",null,"To avoid setting these limits on each and every container during workload creation, a default container resource limit can be specified on the namespace."),(0,o.kt)("h3",{id:"editing-the-container-default-resource-limit"},"Editing the Container Default Resource Limit"),(0,o.kt)("p",null,"Edit ",(0,o.kt)("a",{parentName:"p",href:"/v2.5/pages-for-subheaders/manage-project-resource-quotas"},"container default resource limit")," when:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"You have a CPU or Memory resource quota set on a project, and want to supply the corresponding default values for a container."),(0,o.kt)("li",{parentName:"ul"},"You want to edit the default container resource limit.")),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"From the ",(0,o.kt)("strong",{parentName:"li"},"Global")," view, open the cluster containing the project to which you want to edit the container default resource limit."),(0,o.kt)("li",{parentName:"ol"},"From the main menu, select ",(0,o.kt)("strong",{parentName:"li"},"Projects/Namespaces"),"."),(0,o.kt)("li",{parentName:"ol"},"Find the project that you want to edit the container default resource limit. From that project, select ",(0,o.kt)("strong",{parentName:"li"},"\u22ee"," > Edit"),"."),(0,o.kt)("li",{parentName:"ol"},"Expand ",(0,o.kt)("strong",{parentName:"li"},"Container Default Resource Limit")," and edit the values.")),(0,o.kt)("h3",{id:"resource-limit-propagation"},"Resource Limit Propagation"),(0,o.kt)("p",null,"When the default container resource limit is set at a project level, the parameter will be propagated to any namespace created in the project after the limit has been set. For any existing namespace in a project, this limit will not be automatically propagated. You will need to manually set the default container resource limit for any existing namespaces in the project in order for it to be used when creating any containers."),(0,o.kt)("p",null,"You can set a default container resource limit on a project and launch any catalog applications."),(0,o.kt)("p",null,"Once a container default resource limit is configured on a namespace, the default will be pre-populated for any containers created in that namespace. These limits/reservations can always be overridden during workload creation."),(0,o.kt)("h3",{id:"container-resource-quota-types"},"Container Resource Quota Types"),(0,o.kt)("p",null,"The following resource limits can be configured:"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Resource Type"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"CPU Limit"),(0,o.kt)("td",{parentName:"tr",align:null},"The maximum amount of CPU (in ",(0,o.kt)("a",{parentName:"td",href:"https://kubernetes.io/docs/concepts/configuration/manage-compute-resources-container/#meaning-of-cpu"},"millicores"),") allocated to the container.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"CPU Reservation"),(0,o.kt)("td",{parentName:"tr",align:null},"The minimum amount of CPU (in millicores) guaranteed to the container.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Memory Limit"),(0,o.kt)("td",{parentName:"tr",align:null},"The maximum amount of memory (in bytes) allocated to the container.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Memory Reservation"),(0,o.kt)("td",{parentName:"tr",align:null},"The minimum amount of memory (in bytes) guaranteed to the container.")))))}d.isMDXComponent=!0}}]);