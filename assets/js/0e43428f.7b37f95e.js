"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[65608],{3905:function(e,n,t){t.d(n,{Zo:function(){return d},kt:function(){return m}});var a=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function s(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?s(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},s=Object.keys(e);for(a=0;a<s.length;a++)t=s[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)t=s[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var c=a.createContext({}),l=function(e){var n=a.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},d=function(e){var n=l(e.components);return a.createElement(c.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},u=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,s=e.originalType,c=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),u=l(t),m=r,f=u["".concat(c,".").concat(m)]||u[m]||p[m]||s;return t?a.createElement(f,o(o({ref:n},d),{},{components:t})):a.createElement(f,o({ref:n},d))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var s=t.length,o=new Array(s);o[0]=u;var i={};for(var c in n)hasOwnProperty.call(n,c)&&(i[c]=n[c]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var l=2;l<s;l++)o[l]=t[l];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}u.displayName="MDXCreateElement"},41241:function(e,n,t){t.r(n),t.d(n,{assets:function(){return d},contentTitle:function(){return c},default:function(){return m},frontMatter:function(){return i},metadata:function(){return l},toc:function(){return p}});var a=t(87462),r=t(63366),s=(t(67294),t(3905)),o=["components"],i={title:"Template for an RKE Cluster with a Self-signed Certificate and Layer 4 Load Balancer",weight:2,aliases:["/rancher/v2.0-v2.4/en/installation/options/cluster-yml-templates/3-node-certificate","/rancher/v2.x/en/installation/resources/advanced/cluster-yml-templates/3-node-certificate/"]},c=void 0,l={unversionedId:"getting-started/installation-and-upgrade/advanced-options/advanced-use-cases/cluster-yml-templates/node-certificate",id:"version-2.0-2.4/getting-started/installation-and-upgrade/advanced-options/advanced-use-cases/cluster-yml-templates/node-certificate",title:"Template for an RKE Cluster with a Self-signed Certificate and Layer 4 Load Balancer",description:"RKE uses a cluster.yml file to install and configure your Kubernetes cluster.",source:"@site/versioned_docs/version-2.0-2.4/getting-started/installation-and-upgrade/advanced-options/advanced-use-cases/cluster-yml-templates/node-certificate.md",sourceDirName:"getting-started/installation-and-upgrade/advanced-options/advanced-use-cases/cluster-yml-templates",slug:"/getting-started/installation-and-upgrade/advanced-options/advanced-use-cases/cluster-yml-templates/node-certificate",permalink:"/v2.0-v2.4/getting-started/installation-and-upgrade/advanced-options/advanced-use-cases/cluster-yml-templates/node-certificate",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/versioned_docs/version-2.0-2.4/getting-started/installation-and-upgrade/advanced-options/advanced-use-cases/cluster-yml-templates/node-certificate.md",tags:[],version:"2.0-2.4",lastUpdatedAt:1661494099,formattedLastUpdatedAt:"8/26/2022",frontMatter:{title:"Template for an RKE Cluster with a Self-signed Certificate and Layer 4 Load Balancer",weight:2,aliases:["/rancher/v2.0-v2.4/en/installation/options/cluster-yml-templates/3-node-certificate","/rancher/v2.x/en/installation/resources/advanced/cluster-yml-templates/3-node-certificate/"]},sidebar:"tutorialSidebar",previous:{title:"cluster.yml Templates for RKE add-on installs",permalink:"/v2.0-v2.4/pages-for-subheaders/cluster-yml"},next:{title:"Template for an RKE Cluster with a Certificate Signed by Recognized CA and a Layer 4 Load Balancer",permalink:"/v2.0-v2.4/getting-started/installation-and-upgrade/advanced-options/advanced-use-cases/cluster-yml-templates/node-certificate-recognizedca"}},d={},p=[],u={toc:p};function m(e){var n=e.components,t=(0,r.Z)(e,o);return(0,s.kt)("wrapper",(0,a.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"RKE uses a cluster.yml file to install and configure your Kubernetes cluster."),(0,s.kt)("p",null,"This template is intended to be used for RKE add-on installs, which are only supported up to Rancher v2.0.8. Please use the Rancher Helm chart if you are installing a newer Rancher version."),(0,s.kt)("p",null,"The following template can be used for the cluster.yml if you have a setup with:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"Self-signed SSL"),(0,s.kt)("li",{parentName:"ul"},"Layer 4 load balancer"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://kubernetes.github.io/ingress-nginx/"},"NGINX Ingress controller"))),(0,s.kt)("blockquote",null,(0,s.kt)("p",{parentName:"blockquote"},"For more options, refer to ",(0,s.kt)("a",{parentName:"p",href:"https://rancher.com/docs/rke/latest/en/config-options/"},"RKE Documentation: Config Options"),".")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-yaml"},'nodes:\n  - address: <IP> # hostname or IP to access nodes\n    user: <USER> # root user (usually \'root\')\n    role: [controlplane,etcd,worker] # K8s roles for node\n    ssh_key_path: <PEM_FILE> # path to PEM file\n  - address: <IP>\n    user: <USER>\n    role: [controlplane,etcd,worker]\n    ssh_key_path: <PEM_FILE>\n  - address: <IP>\n    user: <USER>\n    role: [controlplane,etcd,worker]\n    ssh_key_path: <PEM_FILE>\n\nservices:\n  etcd:\n    snapshot: true\n    creation: 6h\n    retention: 24h\n\naddons: |-\n  ---\n  kind: Namespace\n  apiVersion: v1\n  metadata:\n    name: cattle-system\n  ---\n  kind: ServiceAccount\n  apiVersion: v1\n  metadata:\n    name: cattle-admin\n    namespace: cattle-system\n  ---\n  kind: ClusterRoleBinding\n  apiVersion: rbac.authorization.k8s.io/v1\n  metadata:\n    name: cattle-crb\n    namespace: cattle-system\n  subjects:\n  - kind: ServiceAccount\n    name: cattle-admin\n    namespace: cattle-system\n  roleRef:\n    kind: ClusterRole\n    name: cluster-admin\n    apiGroup: rbac.authorization.k8s.io\n  ---\n  apiVersion: v1\n  kind: Secret\n  metadata:\n    name: cattle-keys-ingress\n    namespace: cattle-system\n  type: Opaque\n  data:\n    tls.crt: <BASE64_CRT>  # ssl cert for ingress. If selfsigned, must be signed by same CA as cattle server\n    tls.key: <BASE64_KEY>  # ssl key for ingress. If selfsigned, must be signed by same CA as cattle server\n  ---\n  apiVersion: v1\n  kind: Secret\n  metadata:\n    name: cattle-keys-server\n    namespace: cattle-system\n  type: Opaque\n  data:\n    cacerts.pem: <BASE64_CA>  # CA cert used to sign cattle server cert and key\n  ---\n  apiVersion: v1\n  kind: Service\n  metadata:\n    namespace: cattle-system\n    name: cattle-service\n    labels:\n      app: cattle\n  spec:\n    ports:\n    - port: 80\n      targetPort: 80\n      protocol: TCP\n      name: http\n    - port: 443\n      targetPort: 443\n      protocol: TCP\n      name: https\n    selector:\n      app: cattle\n  ---\n  apiVersion: extensions/v1beta1\n  kind: Ingress\n  metadata:\n    namespace: cattle-system\n    name: cattle-ingress-http\n    annotations:\n      nginx.ingress.kubernetes.io/proxy-connect-timeout: "30"\n      nginx.ingress.kubernetes.io/proxy-read-timeout: "1800"   # Max time in seconds for ws to remain shell window open\n      nginx.ingress.kubernetes.io/proxy-send-timeout: "1800"   # Max time in seconds for ws to remain shell window open\n  spec:\n    rules:\n    - host: <FQDN>  # FQDN to access cattle server\n      http:\n        paths:\n        - backend:\n            serviceName: cattle-service\n            servicePort: 80\n    tls:\n    - secretName: cattle-keys-ingress\n      hosts:\n      - <FQDN>      # FQDN to access cattle server\n  ---\n  kind: Deployment\n  apiVersion: extensions/v1beta1\n  metadata:\n    namespace: cattle-system\n    name: cattle\n  spec:\n    replicas: 1\n    template:\n      metadata:\n        labels:\n          app: cattle\n      spec:\n        serviceAccountName: cattle-admin\n        containers:\n        # Rancher install via RKE addons is only supported up to v2.0.8\n        - image: rancher/rancher:v2.0.8\n          imagePullPolicy: Always\n          name: cattle-server\n  #       env:\n  #       - name: HTTP_PROXY\n  #         value: "http://your_proxy_address:port"\n  #       - name: HTTPS_PROXY\n  #         value: "http://your_proxy_address:port"\n  #       - name: NO_PROXY\n  #         value: "localhost,127.0.0.1,0.0.0.0,10.43.0.0/16,your_network_ranges_that_dont_need_proxy_to_access"\n          livenessProbe:\n            httpGet:\n              path: /ping\n              port: 80\n            initialDelaySeconds: 60\n            periodSeconds: 60\n          readinessProbe:\n            httpGet:\n              path: /ping\n              port: 80\n            initialDelaySeconds: 20\n            periodSeconds: 10\n          ports:\n          - containerPort: 80\n            protocol: TCP\n          - containerPort: 443\n            protocol: TCP\n          volumeMounts:\n          - mountPath: /etc/rancher/ssl\n            name: cattle-keys-volume\n            readOnly: true\n        volumes:\n        - name: cattle-keys-volume\n          secret:\n            defaultMode: 420\n            secretName: cattle-keys-server\n')))}m.isMDXComponent=!0}}]);