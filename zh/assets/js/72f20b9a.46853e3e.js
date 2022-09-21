"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[84892],{3905:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return d}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),u=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=u(e.components);return n.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),m=u(r),d=a,k=m["".concat(l,".").concat(d)]||m[d]||p[d]||o;return r?n.createElement(k,i(i({ref:t},c),{},{components:r})):n.createElement(k,i({ref:t},c))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var u=2;u<o;u++)i[u]=r[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},40330:function(e,t,r){r.r(t),r.d(t,{assets:function(){return c},contentTitle:function(){return l},default:function(){return d},frontMatter:function(){return s},metadata:function(){return u},toc:function(){return p}});var n=r(87462),a=r(63366),o=(r(67294),r(3905)),i=["components"],s={title:"Manual HPA Installation for Clusters Created Before Rancher v2.0.7",weight:3050,aliases:["/rancher/v2.0-v2.4/en/k8s-in-rancher/horizontal-pod-autoscaler/hpa-for-rancher-before-2_0_7","/rancher/v2.x/en/k8s-in-rancher/horitzontal-pod-autoscaler/hpa-for-rancher-before-2_0_7/"]},l=void 0,u={unversionedId:"how-to-guides/new-user-guides/kubernetes-resources-setup/horizontal-pod-autoscaler/hpa-for-rancher-before-2.0.7",id:"version-2.0-2.4/how-to-guides/new-user-guides/kubernetes-resources-setup/horizontal-pod-autoscaler/hpa-for-rancher-before-2.0.7",title:"Manual HPA Installation for Clusters Created Before Rancher v2.0.7",description:"This section describes how to manually install HPAs for clusters created with Rancher before v2.0.7. This section also describes how to configure your HPA to scale up or down, and how to assign roles to your HPA.",source:"@site/versioned_docs/version-2.0-2.4/how-to-guides/new-user-guides/kubernetes-resources-setup/horizontal-pod-autoscaler/hpa-for-rancher-before-2.0.7.md",sourceDirName:"how-to-guides/new-user-guides/kubernetes-resources-setup/horizontal-pod-autoscaler",slug:"/how-to-guides/new-user-guides/kubernetes-resources-setup/horizontal-pod-autoscaler/hpa-for-rancher-before-2.0.7",permalink:"/zh/v2.0-v2.4/how-to-guides/new-user-guides/kubernetes-resources-setup/horizontal-pod-autoscaler/hpa-for-rancher-before-2.0.7",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/versioned_docs/version-2.0-2.4/how-to-guides/new-user-guides/kubernetes-resources-setup/horizontal-pod-autoscaler/hpa-for-rancher-before-2.0.7.md",tags:[],version:"2.0-2.4",lastUpdatedAt:1661496092,formattedLastUpdatedAt:"2022/8/26",frontMatter:{title:"Manual HPA Installation for Clusters Created Before Rancher v2.0.7",weight:3050,aliases:["/rancher/v2.0-v2.4/en/k8s-in-rancher/horizontal-pod-autoscaler/hpa-for-rancher-before-2_0_7","/rancher/v2.x/en/k8s-in-rancher/horitzontal-pod-autoscaler/hpa-for-rancher-before-2_0_7/"]},sidebar:"tutorialSidebar",previous:{title:"The Horizontal Pod Autoscaler",permalink:"/zh/v2.0-v2.4/pages-for-subheaders/horizontal-pod-autoscaler"},next:{title:"Background Information on HPAs",permalink:"/zh/v2.0-v2.4/how-to-guides/new-user-guides/kubernetes-resources-setup/horizontal-pod-autoscaler/about-hpas"}},c={},p=[{value:"Requirements",id:"requirements",level:3},{value:"Configuring HPA to Scale Using Resource Metrics",id:"configuring-hpa-to-scale-using-resource-metrics",level:3},{value:"Assigning Additional Required Roles to Your HPA",id:"assigning-additional-required-roles-to-your-hpa",level:3}],m={toc:p};function d(e){var t=e.components,r=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"This section describes how to manually install HPAs for clusters created with Rancher before v2.0.7. This section also describes how to configure your HPA to scale up or down, and how to assign roles to your HPA."),(0,o.kt)("p",null,"Before you can use HPA in your Kubernetes cluster, you must fulfill some requirements."),(0,o.kt)("h3",{id:"requirements"},"Requirements"),(0,o.kt)("p",null,"Be sure that your Kubernetes cluster services are running with these flags at minimum:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"kube-api: ",(0,o.kt)("inlineCode",{parentName:"p"},"requestheader-client-ca-file"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"kubelet: ",(0,o.kt)("inlineCode",{parentName:"p"},"read-only-port")," at 10255")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"kube-controller: Optional, just needed if distinct values than default are required."),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},'horizontal-pod-autoscaler-downscale-delay: "5m0s"')),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},'horizontal-pod-autoscaler-upscale-delay: "3m0s"')),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},'horizontal-pod-autoscaler-sync-period: "30s"'))))),(0,o.kt)("p",null,"For an RKE Kubernetes cluster definition, add this snippet in the ",(0,o.kt)("inlineCode",{parentName:"p"},"services")," section. To add this snippet using the Rancher v2.0 UI, open the ",(0,o.kt)("strong",{parentName:"p"},"Clusters")," view and select ",(0,o.kt)("strong",{parentName:"p"},"\u22ee"," > Edit")," for the cluster in which you want to use HPA. Then, from ",(0,o.kt)("strong",{parentName:"p"},"Cluster Options"),", click ",(0,o.kt)("strong",{parentName:"p"},"Edit as YAML"),". Add the following snippet to the ",(0,o.kt)("inlineCode",{parentName:"p"},"services")," section:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'services:\n...\n  kube-api:\n    extra_args:\n      requestheader-client-ca-file: "/etc/kubernetes/ssl/kube-ca.pem"\n  kube-controller:\n    extra_args:\n      horizontal-pod-autoscaler-downscale-delay: "5m0s"\n      horizontal-pod-autoscaler-upscale-delay: "1m0s"\n      horizontal-pod-autoscaler-sync-period: "30s"\n  kubelet:\n    extra_args:\n      read-only-port: 10255\n')),(0,o.kt)("p",null,"Once the Kubernetes cluster is configured and deployed, you can deploy metrics services."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("strong",{parentName:"p"},"Note:")," ",(0,o.kt)("inlineCode",{parentName:"p"},"kubectl")," command samples in the sections that follow were tested in a cluster running Rancher v2.0.6 and Kubernetes v1.10.1.")),(0,o.kt)("h3",{id:"configuring-hpa-to-scale-using-resource-metrics"},"Configuring HPA to Scale Using Resource Metrics"),(0,o.kt)("p",null,"To create HPA resources based on resource metrics such as CPU and memory use, you need to deploy the ",(0,o.kt)("inlineCode",{parentName:"p"},"metrics-server")," package in the ",(0,o.kt)("inlineCode",{parentName:"p"},"kube-system")," namespace of your Kubernetes cluster. This deployment allows HPA to consume the ",(0,o.kt)("inlineCode",{parentName:"p"},"metrics.k8s.io")," API."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("strong",{parentName:"p"},"Prerequisite:")," You must be running ",(0,o.kt)("inlineCode",{parentName:"p"},"kubectl")," 1.8 or later.")),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Connect to your Kubernetes cluster using ",(0,o.kt)("inlineCode",{parentName:"p"},"kubectl"),".")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Clone the GitHub ",(0,o.kt)("inlineCode",{parentName:"p"},"metrics-server")," repo:"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre"},"# git clone https://github.com/kubernetes-incubator/metrics-server\n"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Install the ",(0,o.kt)("inlineCode",{parentName:"p"},"metrics-server")," package."),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre"},"# kubectl create -f metrics-server/deploy/1.8+/\n"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Check that ",(0,o.kt)("inlineCode",{parentName:"p"},"metrics-server")," is running properly. Check the service pod and logs in the ",(0,o.kt)("inlineCode",{parentName:"p"},"kube-system")," namespace.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Check the service pod for a status of ",(0,o.kt)("inlineCode",{parentName:"p"},"running"),". Enter the following command:"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre"},"# kubectl get pods -n kube-system\n")),(0,o.kt)("p",{parentName:"li"},"Then check for the status of ",(0,o.kt)("inlineCode",{parentName:"p"},"running"),"."),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre"},"NAME                                  READY     STATUS    RESTARTS   AGE\n...\nmetrics-server-6fbfb84cdd-t2fk9       1/1       Running   0          8h\n...\n"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Check the service logs for service availability. Enter the following command:"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre"},"# kubectl -n kube-system logs metrics-server-6fbfb84cdd-t2fk9\n")),(0,o.kt)("p",{parentName:"li"},"Then review the log to confirm that the ",(0,o.kt)("inlineCode",{parentName:"p"},"metrics-server")," package is running."),(0,o.kt)("details",{id:"metrics-server-run-check"},(0,o.kt)("summary",null,"Metrics Server Log Output"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre"},"I0723 08:09:56.193136       1 heapster.go:71] /metrics-server --source=kubernetes.summary_api:''\nI0723 08:09:56.193574       1 heapster.go:72] Metrics Server version v0.2.1\nI0723 08:09:56.194480       1 configs.go:61] Using Kubernetes client with master \"https://10.43.0.1:443\" and version\nI0723 08:09:56.194501       1 configs.go:62] Using kubelet port 10255\nI0723 08:09:56.198612       1 heapster.go:128] Starting with Metric Sink\nI0723 08:09:56.780114       1 serving.go:308] Generated self-signed cert (apiserver.local.config/certificates/apiserver.crt, apiserver.local.config/certificates/apiserver.key)\nI0723 08:09:57.391518       1 heapster.go:101] Starting Heapster API server...\n[restful] 2018/07/23 08:09:57 log.go:33: [restful/swagger] listing is available at https:///swaggerapi\n[restful] 2018/07/23 08:09:57 log.go:33: [restful/swagger] https:///swaggerui/ is mapped to folder /swagger-ui/\nI0723 08:09:57.394080       1 serve.go:85] Serving securely on 0.0.0.0:443\n"))))),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Check that the metrics api is accessible from ",(0,o.kt)("inlineCode",{parentName:"li"},"kubectl"),".")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"If you are accessing the cluster through Rancher, enter your Server URL in the ",(0,o.kt)("inlineCode",{parentName:"p"},"kubectl")," config in the following format: ",(0,o.kt)("inlineCode",{parentName:"p"},"https://<RANCHER_URL>/k8s/clusters/<CLUSTER_ID>"),". Add the suffix ",(0,o.kt)("inlineCode",{parentName:"p"},"/k8s/clusters/<CLUSTER_ID>")," to API path."),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre"},"# kubectl get --raw /k8s/clusters/<CLUSTER_ID>/apis/metrics.k8s.io/v1beta1\n")),(0,o.kt)("p",{parentName:"li"},"If the API is working correctly, you should receive output similar to the output below."),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre"},'{"kind":"APIResourceList","apiVersion":"v1","groupVersion":"metrics.k8s.io/v1beta1","resources":[{"name":"nodes","singularName":"","namespaced":false,"kind":"NodeMetrics","verbs":["get","list"]},{"name":"pods","singularName":"","namespaced":true,"kind":"PodMetrics","verbs":["get","list"]}]}\n'))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"If you are accessing the cluster directly, enter your Server URL in the kubectl config in the following format: ",(0,o.kt)("inlineCode",{parentName:"p"},"https://<K8s_URL>:6443"),"."),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre"},"# kubectl get --raw /apis/metrics.k8s.io/v1beta1\n")),(0,o.kt)("p",{parentName:"li"},"If the API is working correctly, you should receive output similar to the output below."),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre"},'{"kind":"APIResourceList","apiVersion":"v1","groupVersion":"metrics.k8s.io/v1beta1","resources":[{"name":"nodes","singularName":"","namespaced":false,"kind":"NodeMetrics","verbs":["get","list"]},{"name":"pods","singularName":"","namespaced":true,"kind":"PodMetrics","verbs":["get","list"]}]}\n')))),(0,o.kt)("h3",{id:"assigning-additional-required-roles-to-your-hpa"},"Assigning Additional Required Roles to Your HPA"),(0,o.kt)("p",null,"By default, HPA reads resource and custom metrics with the user ",(0,o.kt)("inlineCode",{parentName:"p"},"system:anonymous"),". Assign ",(0,o.kt)("inlineCode",{parentName:"p"},"system:anonymous")," to ",(0,o.kt)("inlineCode",{parentName:"p"},"view-resource-metrics")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"view-custom-metrics")," in the ClusterRole and ClusterRoleBindings manifests. These roles are used to access metrics."),(0,o.kt)("p",null,"To do it, follow these steps:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Configure ",(0,o.kt)("inlineCode",{parentName:"p"},"kubectl")," to connect to your cluster.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Copy the ClusterRole and ClusterRoleBinding manifest for the type of metrics you're using for your HPA."),(0,o.kt)("details",{id:"cluster-role-resource-metrics"},(0,o.kt)("summary",null,"Resource Metrics: ApiGroups resource.metrics.k8s.io"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre"},"apiVersion: rbac.authorization.k8s.io/v1\nkind: ClusterRole\nmetadata:\n  name: view-resource-metrics\nrules:\n- apiGroups:\n    - metrics.k8s.io\n  resources:\n    - pods\n    - nodes\n  verbs:\n    - get\n    - list\n    - watch\n---\napiVersion: rbac.authorization.k8s.io/v1\nkind: ClusterRoleBinding\nmetadata:\n  name: view-resource-metrics\nroleRef:\n  apiGroup: rbac.authorization.k8s.io\n  kind: ClusterRole\n  name: view-resource-metrics\nsubjects:\n  - apiGroup: rbac.authorization.k8s.io\n    kind: User\n    name: system:anonymous\n"))),(0,o.kt)("details",{id:"cluster-role-custom-resources"},(0,o.kt)("summary",null,"Custom Metrics: ApiGroups custom.metrics.k8s.io"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre"},'apiVersion: rbac.authorization.k8s.io/v1\nkind: ClusterRole\nmetadata:\n  name: view-custom-metrics\nrules:\n- apiGroups:\n    - custom.metrics.k8s.io\n  resources:\n    - "*"\n  verbs:\n    - get\n    - list\n    - watch\n---\napiVersion: rbac.authorization.k8s.io/v1\nkind: ClusterRoleBinding\nmetadata:\n  name: view-custom-metrics\nroleRef:\n  apiGroup: rbac.authorization.k8s.io\n  kind: ClusterRole\n  name: view-custom-metrics\nsubjects:\n  - apiGroup: rbac.authorization.k8s.io\n    kind: User\n    name: system:anonymous\n')))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Create them in your cluster using one of the follow commands, depending on the metrics you're using."),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre"}," # kubectl create -f <RESOURCE_METRICS_MANIFEST>\n # kubectl create -f <CUSTOM_METRICS_MANIFEST>\n")))))}d.isMDXComponent=!0}}]);