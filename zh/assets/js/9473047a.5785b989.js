"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[58860],{3905:(e,r,t)=>{t.d(r,{Zo:()=>p,kt:()=>d});var o=t(67294);function n(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){n(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function s(e,r){if(null==e)return{};var t,o,n=function(e,r){if(null==e)return{};var t,o,n={},a=Object.keys(e);for(o=0;o<a.length;o++)t=a[o],r.indexOf(t)>=0||(n[t]=e[t]);return n}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)t=a[o],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var l=o.createContext({}),u=function(e){var r=o.useContext(l),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},p=function(e){var r=u(e.components);return o.createElement(l.Provider,{value:r},e.children)},c={inlineCode:"code",wrapper:function(e){var r=e.children;return o.createElement(o.Fragment,{},r)}},m=o.forwardRef((function(e,r){var t=e.components,n=e.mdxType,a=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),m=u(t),d=n,f=m["".concat(l,".").concat(d)]||m[d]||c[d]||a;return t?o.createElement(f,i(i({ref:r},p),{},{components:t})):o.createElement(f,i({ref:r},p))}));function d(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var a=t.length,i=new Array(a);i[0]=m;var s={};for(var l in r)hasOwnProperty.call(r,l)&&(s[l]=r[l]);s.originalType=e,s.mdxType="string"==typeof e?e:n,i[1]=s;for(var u=2;u<a;u++)i[u]=t[u];return o.createElement.apply(null,i)}return o.createElement.apply(null,t)}m.displayName="MDXCreateElement"},76832:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>l,contentTitle:()=>i,default:()=>c,frontMatter:()=>a,metadata:()=>s,toc:()=>u});var o=t(87462),n=(t(67294),t(3905));const a={title:"Examples"},i=void 0,s={unversionedId:"reference-guides/monitoring-v2-configuration/examples",id:"version-2.5/reference-guides/monitoring-v2-configuration/examples",title:"Examples",description:"ServiceMonitor",source:"@site/versioned_docs/version-2.5/reference-guides/monitoring-v2-configuration/examples.md",sourceDirName:"reference-guides/monitoring-v2-configuration",slug:"/reference-guides/monitoring-v2-configuration/examples",permalink:"/zh/v2.5/reference-guides/monitoring-v2-configuration/examples",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/versioned_docs/version-2.5/reference-guides/monitoring-v2-configuration/examples.md",tags:[],version:"2.5",lastUpdatedAt:1685656966,formattedLastUpdatedAt:"2023\u5e746\u67081\u65e5",frontMatter:{title:"Examples"},sidebar:"tutorialSidebar",previous:{title:"Helm Chart Options",permalink:"/zh/v2.5/reference-guides/monitoring-v2-configuration/helm-chart-options"},next:{title:"User Settings",permalink:"/zh/v2.5/pages-for-subheaders/user-settings"}},l={},u=[{value:"ServiceMonitor",id:"servicemonitor",level:3},{value:"PodMonitor",id:"podmonitor",level:3},{value:"PrometheusRule",id:"prometheusrule",level:3},{value:"Alertmanager Config",id:"alertmanager-config",level:3}],p={toc:u};function c(e){let{components:r,...t}=e;return(0,n.kt)("wrapper",(0,o.Z)({},p,t,{components:r,mdxType:"MDXLayout"}),(0,n.kt)("h3",{id:"servicemonitor"},"ServiceMonitor"),(0,n.kt)("p",null,"An example ServiceMonitor custom resource can be found ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/prometheus-operator/prometheus-operator/blob/master/example/prometheus-operator-crd/monitoring.coreos.com_servicemonitors.yaml"},"here.")),(0,n.kt)("h3",{id:"podmonitor"},"PodMonitor"),(0,n.kt)("p",null,"An example PodMonitor can be found ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/prometheus-operator/prometheus-operator/blob/master/example/user-guides/getting-started/example-app-pod-monitor.yaml"},"here.")," An example Prometheus resource that refers to it can be found ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/prometheus-operator/prometheus-operator/blob/master/example/user-guides/getting-started/prometheus-pod-monitor.yaml"},"here.")),(0,n.kt)("h3",{id:"prometheusrule"},"PrometheusRule"),(0,n.kt)("p",null,"For users who are familiar with Prometheus, a PrometheusRule contains the alerting and recording rules that you would normally place in a ",(0,n.kt)("a",{parentName:"p",href:"https://prometheus.io/docs/prometheus/latest/configuration/recording_rules/"},"Prometheus rule file"),"."),(0,n.kt)("p",null,"For a more fine-grained application of PrometheusRules within your cluster, the ruleSelector field on a Prometheus resource allows you to select which PrometheusRules should be loaded onto Prometheus based on the labels attached to the PrometheusRules resources."),(0,n.kt)("p",null,"An example PrometheusRule is on ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/prometheus-operator/prometheus-operator/blob/master/Documentation/user-guides/alerting.md"},"this page.")),(0,n.kt)("h3",{id:"alertmanager-config"},"Alertmanager Config"),(0,n.kt)("p",null,"For an example configuration, refer to ",(0,n.kt)("a",{parentName:"p",href:"/zh/v2.5/reference-guides/monitoring-v2-configuration/receivers#example-alertmanager-configs"},"this section"),"."))}c.isMDXComponent=!0}}]);