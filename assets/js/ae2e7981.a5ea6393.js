"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[33188],{3905:function(e,n,t){t.d(n,{Zo:function(){return p},kt:function(){return m}});var a=t(67294);function l(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function r(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){l(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,a,l=function(e,n){if(null==e)return{};var t,a,l={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(l[t]=e[t]);return l}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(l[t]=e[t])}return l}var s=a.createContext({}),d=function(e){var n=a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):r(r({},n),e)),t},p=function(e){var n=d(e.components);return a.createElement(s.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},c=a.forwardRef((function(e,n){var t=e.components,l=e.mdxType,o=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),c=d(t),m=l,g=c["".concat(s,".").concat(m)]||c[m]||u[m]||o;return t?a.createElement(g,r(r({ref:n},p),{},{components:t})):a.createElement(g,r({ref:n},p))}));function m(e,n){var t=arguments,l=n&&n.mdxType;if("string"==typeof e||l){var o=t.length,r=new Array(o);r[0]=c;var i={};for(var s in n)hasOwnProperty.call(n,s)&&(i[s]=n[s]);i.originalType=e,i.mdxType="string"==typeof e?e:l,r[1]=i;for(var d=2;d<o;d++)r[d]=t[d];return a.createElement.apply(null,r)}return a.createElement.apply(null,t)}c.displayName="MDXCreateElement"},70042:function(e,n,t){t.r(n),t.d(n,{assets:function(){return p},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return i},metadata:function(){return d},toc:function(){return u}});var a=t(87462),l=t(63366),o=(t(67294),t(3905)),r=["components"],i={title:"Enabling the API Audit Log to Record System Events",weight:4,aliases:["/rancher/v2.0-v2.4/en/installation/options/api-audit-log/","/rancher/v2.0-v2.4/en/installation/api-auditing"]},s=void 0,d={unversionedId:"getting-started/installation-and-upgrade/advanced-options/advanced-use-cases/enable-api-audit-log",id:"version-2.0-2.4/getting-started/installation-and-upgrade/advanced-options/advanced-use-cases/enable-api-audit-log",title:"Enabling the API Audit Log to Record System Events",description:"You can enable the API audit log to record the sequence of system events initiated by individual users. You can know what happened, when it happened, who initiated it, and what cluster it affected. When you enable this feature, all requests to the Rancher API and all responses from it are written to a log.",source:"@site/versioned_docs/version-2.0-2.4/getting-started/installation-and-upgrade/advanced-options/advanced-use-cases/enable-api-audit-log.md",sourceDirName:"getting-started/installation-and-upgrade/advanced-options/advanced-use-cases",slug:"/getting-started/installation-and-upgrade/advanced-options/advanced-use-cases/enable-api-audit-log",permalink:"/v2.0-v2.4/getting-started/installation-and-upgrade/advanced-options/advanced-use-cases/enable-api-audit-log",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/versioned_docs/version-2.0-2.4/getting-started/installation-and-upgrade/advanced-options/advanced-use-cases/enable-api-audit-log.md",tags:[],version:"2.0-2.4",lastUpdatedAt:1662069450,formattedLastUpdatedAt:"9/1/2022",frontMatter:{title:"Enabling the API Audit Log to Record System Events",weight:4,aliases:["/rancher/v2.0-v2.4/en/installation/options/api-audit-log/","/rancher/v2.0-v2.4/en/installation/api-auditing"]},sidebar:"tutorialSidebar",previous:{title:"Tuning etcd for Large Installations",permalink:"/v2.0-v2.4/getting-started/installation-and-upgrade/advanced-options/advanced-use-cases/tune-etcd-for-large-installs"},next:{title:"cluster.yml Templates for RKE add-on installs",permalink:"/v2.0-v2.4/pages-for-subheaders/cluster-yml"}},p={},u=[{value:"Enabling API Audit Log",id:"enabling-api-audit-log",level:2},{value:"API Audit Log Options",id:"api-audit-log-options",level:2},{value:"Audit Log Levels",id:"audit-log-levels",level:3},{value:"Viewing API Audit Logs",id:"viewing-api-audit-logs",level:2},{value:"Docker Install",id:"docker-install",level:3},{value:"Kubernetes Install",id:"kubernetes-install",level:3},{value:"CLI",id:"cli",level:4},{value:"Rancher Web GUI",id:"rancher-web-gui",level:4},{value:"Shipping the Audit Log",id:"shipping-the-audit-log",level:4},{value:"Audit Log Samples",id:"audit-log-samples",level:2},{value:"Metadata Level",id:"metadata-level",level:3},{value:"Metadata and Request Body Level",id:"metadata-and-request-body-level",level:3},{value:"Metadata, Request Body, and Response Body Level",id:"metadata-request-body-and-response-body-level",level:3},{value:"Request",id:"request",level:4},{value:"Response",id:"response",level:4}],c={toc:u};function m(e){var n=e.components,t=(0,l.Z)(e,r);return(0,o.kt)("wrapper",(0,a.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"You can enable the API audit log to record the sequence of system events initiated by individual users. You can know what happened, when it happened, who initiated it, and what cluster it affected. When you enable this feature, all requests to the Rancher API and all responses from it are written to a log."),(0,o.kt)("p",null,"You can enable API Auditing during Rancher installation or upgrade."),(0,o.kt)("h2",{id:"enabling-api-audit-log"},"Enabling API Audit Log"),(0,o.kt)("p",null,"The Audit Log is enabled and configured by passing environment variables to the Rancher server container. See the following to enable on your installation."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("a",{parentName:"p",href:"/v2.0-v2.4/reference-guides/single-node-rancher-in-docker/advanced-options#api-audit-log"},"Docker Install"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("a",{parentName:"p",href:"/v2.0-v2.4/reference-guides/installation-references/helm-chart-options#api-audit-log"},"Kubernetes Install")))),(0,o.kt)("h2",{id:"api-audit-log-options"},"API Audit Log Options"),(0,o.kt)("p",null,"The usage below defines rules about what the audit log should record and what data it should include:"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{id:"audit-level"}),(0,o.kt)("inlineCode",{parentName:"td"},"AUDIT_LEVEL")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"0")," - Disable audit log (default setting).",(0,o.kt)("br",null),(0,o.kt)("inlineCode",{parentName:"td"},"1")," - Log event metadata.",(0,o.kt)("br",null),(0,o.kt)("inlineCode",{parentName:"td"},"2")," - Log event metadata and request body.",(0,o.kt)("br",null),(0,o.kt)("inlineCode",{parentName:"td"},"3")," - Log event metadata, request body, and response body. Each log transaction for a request/response pair uses the same ",(0,o.kt)("inlineCode",{parentName:"td"},"auditID")," value.",(0,o.kt)("br",null),(0,o.kt)("br",null),"See ",(0,o.kt)("a",{parentName:"td",href:"#audit-log-levels"},"Audit Level Logging")," for a table that displays what each setting logs.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"AUDIT_LOG_PATH")),(0,o.kt)("td",{parentName:"tr",align:null},"Log path for Rancher Server API. Default path is ",(0,o.kt)("inlineCode",{parentName:"td"},"/var/log/auditlog/rancher-api-audit.log"),". You can mount the log directory to host. ",(0,o.kt)("br",null),(0,o.kt)("br",null),"Usage Example: ",(0,o.kt)("inlineCode",{parentName:"td"},"AUDIT_LOG_PATH=/my/custom/path/"),(0,o.kt)("br",null))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"AUDIT_LOG_MAXAGE")),(0,o.kt)("td",{parentName:"tr",align:null},"Defined the maximum number of days to retain old audit log files. Default is 10 days.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"AUDIT_LOG_MAXBACKUP")),(0,o.kt)("td",{parentName:"tr",align:null},"Defines the maximum number of audit log files to retain. Default is 10.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"AUDIT_LOG_MAXSIZE")),(0,o.kt)("td",{parentName:"tr",align:null},"Defines the maximum size in megabytes of the audit log file before it gets rotated. Default size is 100M.")))),(0,o.kt)("br",null),(0,o.kt)("h3",{id:"audit-log-levels"},"Audit Log Levels"),(0,o.kt)("p",null,"The following table displays what parts of API transactions are logged for each ",(0,o.kt)("a",{parentName:"p",href:"#audit-level"},(0,o.kt)("inlineCode",{parentName:"a"},"AUDIT_LEVEL"))," setting."),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"th"},"AUDIT_LEVEL")," Setting"),(0,o.kt)("th",{parentName:"tr",align:null},"Request Metadata"),(0,o.kt)("th",{parentName:"tr",align:null},"Request Body"),(0,o.kt)("th",{parentName:"tr",align:null},"Response Metadata"),(0,o.kt)("th",{parentName:"tr",align:null},"Response Body"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"0")),(0,o.kt)("td",{parentName:"tr",align:null}),(0,o.kt)("td",{parentName:"tr",align:null}),(0,o.kt)("td",{parentName:"tr",align:null}),(0,o.kt)("td",{parentName:"tr",align:null})),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"1")),(0,o.kt)("td",{parentName:"tr",align:null},"\u2713"),(0,o.kt)("td",{parentName:"tr",align:null}),(0,o.kt)("td",{parentName:"tr",align:null}),(0,o.kt)("td",{parentName:"tr",align:null})),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"2")),(0,o.kt)("td",{parentName:"tr",align:null},"\u2713"),(0,o.kt)("td",{parentName:"tr",align:null},"\u2713"),(0,o.kt)("td",{parentName:"tr",align:null}),(0,o.kt)("td",{parentName:"tr",align:null})),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"3")),(0,o.kt)("td",{parentName:"tr",align:null},"\u2713"),(0,o.kt)("td",{parentName:"tr",align:null},"\u2713"),(0,o.kt)("td",{parentName:"tr",align:null},"\u2713"),(0,o.kt)("td",{parentName:"tr",align:null},"\u2713")))),(0,o.kt)("h2",{id:"viewing-api-audit-logs"},"Viewing API Audit Logs"),(0,o.kt)("h3",{id:"docker-install"},"Docker Install"),(0,o.kt)("p",null,"Share the ",(0,o.kt)("inlineCode",{parentName:"p"},"AUDIT_LOG_PATH")," directory (Default: ",(0,o.kt)("inlineCode",{parentName:"p"},"/var/log/auditlog"),") with the host system. The log can be parsed by standard CLI tools or forwarded on to a log collection tool like Fluentd, Filebeat, Logstash, etc."),(0,o.kt)("h3",{id:"kubernetes-install"},"Kubernetes Install"),(0,o.kt)("p",null,"Enabling the API Audit Log with the Helm chart install will create a ",(0,o.kt)("inlineCode",{parentName:"p"},"rancher-audit-log")," sidecar container in the Rancher pod. This container will stream the log to standard output (stdout). You can view the log as you would any container log."),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"rancher-audit-log")," container is part of the ",(0,o.kt)("inlineCode",{parentName:"p"},"rancher")," pod in the ",(0,o.kt)("inlineCode",{parentName:"p"},"cattle-system")," namespace."),(0,o.kt)("h4",{id:"cli"},"CLI"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl -n cattle-system logs -f rancher-84d886bdbb-s4s69 rancher-audit-log\n")),(0,o.kt)("h4",{id:"rancher-web-gui"},"Rancher Web GUI"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"From the context menu, select ",(0,o.kt)("strong",{parentName:"li"},"Cluster: local > System"),"."),(0,o.kt)("li",{parentName:"ol"},"From the main navigation bar, choose ",(0,o.kt)("strong",{parentName:"li"},"Resources > Workloads.")," (In versions before v2.3.0, choose ",(0,o.kt)("strong",{parentName:"li"},"Workloads")," on the main navigation bar.) Find the ",(0,o.kt)("inlineCode",{parentName:"li"},"cattle-system")," namespace. Open the ",(0,o.kt)("inlineCode",{parentName:"li"},"rancher")," workload by clicking its link."),(0,o.kt)("li",{parentName:"ol"},"Pick one of the ",(0,o.kt)("inlineCode",{parentName:"li"},"rancher")," pods and select ",(0,o.kt)("strong",{parentName:"li"},"\u22ee"," > View Logs"),"."),(0,o.kt)("li",{parentName:"ol"},"From the ",(0,o.kt)("strong",{parentName:"li"},"Logs")," drop-down, select ",(0,o.kt)("inlineCode",{parentName:"li"},"rancher-audit-log"),".")),(0,o.kt)("h4",{id:"shipping-the-audit-log"},"Shipping the Audit Log"),(0,o.kt)("p",null,"You can enable Rancher's built in log collection and shipping for the cluster to ship the audit and other services logs to a supported collection endpoint. See ",(0,o.kt)("a",{parentName:"p",href:"/v2.0-v2.4/pages-for-subheaders/cluster-logging"},"Rancher Tools - Logging")," for details."),(0,o.kt)("h2",{id:"audit-log-samples"},"Audit Log Samples"),(0,o.kt)("p",null,"After you enable auditing, each API request or response is logged by Rancher in the form of JSON. Each of the following code samples provide examples of how to identify each API transaction."),(0,o.kt)("h3",{id:"metadata-level"},"Metadata Level"),(0,o.kt)("p",null,"If you set your ",(0,o.kt)("inlineCode",{parentName:"p"},"AUDIT_LEVEL")," to ",(0,o.kt)("inlineCode",{parentName:"p"},"1"),", Rancher logs the metadata header for every API request, but not the body. The header provides basic information about the API transaction, such as the transaction's ID, who initiated the transaction, the time it occurred, etc."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "auditID": "30022177-9e2e-43d1-b0d0-06ef9d3db183",\n  "requestURI": "/v3/schemas",\n  "sourceIPs": ["::1"],\n  "user": {\n    "name": "user-f4tt2",\n    "group": ["system:authenticated"]\n  },\n  "verb": "GET",\n  "stage": "RequestReceived",\n  "stageTimestamp": "2018-07-20 10:22:43 +0800"\n}\n')),(0,o.kt)("h3",{id:"metadata-and-request-body-level"},"Metadata and Request Body Level"),(0,o.kt)("p",null,"If you set your ",(0,o.kt)("inlineCode",{parentName:"p"},"AUDIT_LEVEL")," to ",(0,o.kt)("inlineCode",{parentName:"p"},"2"),", Rancher logs the metadata header and body for every API request."),(0,o.kt)("p",null,"The code sample below depicts an API request, with both its metadata header and body."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "auditID": "ef1d249e-bfac-4fd0-a61f-cbdcad53b9bb",\n  "requestURI": "/v3/project/c-bcz5t:p-fdr4s/workloads/deployment:default:nginx",\n  "sourceIPs": ["::1"],\n  "user": {\n    "name": "user-f4tt2",\n    "group": ["system:authenticated"]\n  },\n  "verb": "PUT",\n  "stage": "RequestReceived",\n  "stageTimestamp": "2018-07-20 10:28:08 +0800",\n  "requestBody": {\n    "hostIPC": false,\n    "hostNetwork": false,\n    "hostPID": false,\n    "paused": false,\n    "annotations": {},\n    "baseType": "workload",\n    "containers": [\n      {\n        "allowPrivilegeEscalation": false,\n        "image": "nginx",\n        "imagePullPolicy": "Always",\n        "initContainer": false,\n        "name": "nginx",\n        "ports": [\n          {\n            "containerPort": 80,\n            "dnsName": "nginx-nodeport",\n            "kind": "NodePort",\n            "name": "80tcp01",\n            "protocol": "TCP",\n            "sourcePort": 0,\n            "type": "/v3/project/schemas/containerPort"\n          }\n        ],\n        "privileged": false,\n        "readOnly": false,\n        "resources": {\n          "type": "/v3/project/schemas/resourceRequirements",\n          "requests": {},\n          "limits": {}\n        },\n        "restartCount": 0,\n        "runAsNonRoot": false,\n        "stdin": true,\n        "stdinOnce": false,\n        "terminationMessagePath": "/dev/termination-log",\n        "terminationMessagePolicy": "File",\n        "tty": true,\n        "type": "/v3/project/schemas/container",\n        "environmentFrom": [],\n        "capAdd": [],\n        "capDrop": [],\n        "livenessProbe": null,\n        "volumeMounts": []\n      }\n    ],\n    "created": "2018-07-18T07:34:16Z",\n    "createdTS": 1531899256000,\n    "creatorId": null,\n    "deploymentConfig": {\n      "maxSurge": 1,\n      "maxUnavailable": 0,\n      "minReadySeconds": 0,\n      "progressDeadlineSeconds": 600,\n      "revisionHistoryLimit": 10,\n      "strategy": "RollingUpdate"\n    },\n    "deploymentStatus": {\n      "availableReplicas": 1,\n      "conditions": [\n        {\n          "lastTransitionTime": "2018-07-18T07:34:38Z",\n          "lastTransitionTimeTS": 1531899278000,\n          "lastUpdateTime": "2018-07-18T07:34:38Z",\n          "lastUpdateTimeTS": 1531899278000,\n          "message": "Deployment has minimum availability.",\n          "reason": "MinimumReplicasAvailable",\n          "status": "True",\n          "type": "Available"\n        },\n        {\n          "lastTransitionTime": "2018-07-18T07:34:16Z",\n          "lastTransitionTimeTS": 1531899256000,\n          "lastUpdateTime": "2018-07-18T07:34:38Z",\n          "lastUpdateTimeTS": 1531899278000,\n          "message": "ReplicaSet \\"nginx-64d85666f9\\" has successfully progressed.",\n          "reason": "NewReplicaSetAvailable",\n          "status": "True",\n          "type": "Progressing"\n        }\n      ],\n      "observedGeneration": 2,\n      "readyReplicas": 1,\n      "replicas": 1,\n      "type": "/v3/project/schemas/deploymentStatus",\n      "unavailableReplicas": 0,\n      "updatedReplicas": 1\n    },\n    "dnsPolicy": "ClusterFirst",\n    "id": "deployment:default:nginx",\n    "labels": {\n      "workload.user.cattle.io/workloadselector": "deployment-default-nginx"\n    },\n    "name": "nginx",\n    "namespaceId": "default",\n    "projectId": "c-bcz5t:p-fdr4s",\n    "publicEndpoints": [\n      {\n        "addresses": ["10.64.3.58"],\n        "allNodes": true,\n        "ingressId": null,\n        "nodeId": null,\n        "podId": null,\n        "port": 30917,\n        "protocol": "TCP",\n        "serviceId": "default:nginx-nodeport",\n        "type": "publicEndpoint"\n      }\n    ],\n    "restartPolicy": "Always",\n    "scale": 1,\n    "schedulerName": "default-scheduler",\n    "selector": {\n      "matchLabels": {\n        "workload.user.cattle.io/workloadselector": "deployment-default-nginx"\n      },\n      "type": "/v3/project/schemas/labelSelector"\n    },\n    "state": "active",\n    "terminationGracePeriodSeconds": 30,\n    "transitioning": "no",\n    "transitioningMessage": "",\n    "type": "deployment",\n    "uuid": "f998037d-8a5c-11e8-a4cf-0245a7ebb0fd",\n    "workloadAnnotations": {\n      "deployment.kubernetes.io/revision": "1",\n      "field.cattle.io/creatorId": "user-f4tt2"\n    },\n    "workloadLabels": {\n      "workload.user.cattle.io/workloadselector": "deployment-default-nginx"\n    },\n    "scheduling": {\n      "node": {}\n    },\n    "description": "my description",\n    "volumes": []\n  }\n}\n')),(0,o.kt)("h3",{id:"metadata-request-body-and-response-body-level"},"Metadata, Request Body, and Response Body Level"),(0,o.kt)("p",null,"If you set your ",(0,o.kt)("inlineCode",{parentName:"p"},"AUDIT_LEVEL")," to ",(0,o.kt)("inlineCode",{parentName:"p"},"3"),", Rancher logs:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"The metadata header and body for every API request."),(0,o.kt)("li",{parentName:"ul"},"The metadata header and body for every API response.")),(0,o.kt)("h4",{id:"request"},"Request"),(0,o.kt)("p",null,"The code sample below depicts an API request, with both its metadata header and body."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "auditID": "a886fd9f-5d6b-4ae3-9a10-5bff8f3d68af",\n  "requestURI": "/v3/project/c-bcz5t:p-fdr4s/workloads/deployment:default:nginx",\n  "sourceIPs": ["::1"],\n  "user": {\n    "name": "user-f4tt2",\n    "group": ["system:authenticated"]\n  },\n  "verb": "PUT",\n  "stage": "RequestReceived",\n  "stageTimestamp": "2018-07-20 10:33:06 +0800",\n  "requestBody": {\n    "hostIPC": false,\n    "hostNetwork": false,\n    "hostPID": false,\n    "paused": false,\n    "annotations": {},\n    "baseType": "workload",\n    "containers": [\n      {\n        "allowPrivilegeEscalation": false,\n        "image": "nginx",\n        "imagePullPolicy": "Always",\n        "initContainer": false,\n        "name": "nginx",\n        "ports": [\n          {\n            "containerPort": 80,\n            "dnsName": "nginx-nodeport",\n            "kind": "NodePort",\n            "name": "80tcp01",\n            "protocol": "TCP",\n            "sourcePort": 0,\n            "type": "/v3/project/schemas/containerPort"\n          }\n        ],\n        "privileged": false,\n        "readOnly": false,\n        "resources": {\n          "type": "/v3/project/schemas/resourceRequirements",\n          "requests": {},\n          "limits": {}\n        },\n        "restartCount": 0,\n        "runAsNonRoot": false,\n        "stdin": true,\n        "stdinOnce": false,\n        "terminationMessagePath": "/dev/termination-log",\n        "terminationMessagePolicy": "File",\n        "tty": true,\n        "type": "/v3/project/schemas/container",\n        "environmentFrom": [],\n        "capAdd": [],\n        "capDrop": [],\n        "livenessProbe": null,\n        "volumeMounts": []\n      }\n    ],\n    "created": "2018-07-18T07:34:16Z",\n    "createdTS": 1531899256000,\n    "creatorId": null,\n    "deploymentConfig": {\n      "maxSurge": 1,\n      "maxUnavailable": 0,\n      "minReadySeconds": 0,\n      "progressDeadlineSeconds": 600,\n      "revisionHistoryLimit": 10,\n      "strategy": "RollingUpdate"\n    },\n    "deploymentStatus": {\n      "availableReplicas": 1,\n      "conditions": [\n        {\n          "lastTransitionTime": "2018-07-18T07:34:38Z",\n          "lastTransitionTimeTS": 1531899278000,\n          "lastUpdateTime": "2018-07-18T07:34:38Z",\n          "lastUpdateTimeTS": 1531899278000,\n          "message": "Deployment has minimum availability.",\n          "reason": "MinimumReplicasAvailable",\n          "status": "True",\n          "type": "Available"\n        },\n        {\n          "lastTransitionTime": "2018-07-18T07:34:16Z",\n          "lastTransitionTimeTS": 1531899256000,\n          "lastUpdateTime": "2018-07-18T07:34:38Z",\n          "lastUpdateTimeTS": 1531899278000,\n          "message": "ReplicaSet \\"nginx-64d85666f9\\" has successfully progressed.",\n          "reason": "NewReplicaSetAvailable",\n          "status": "True",\n          "type": "Progressing"\n        }\n      ],\n      "observedGeneration": 2,\n      "readyReplicas": 1,\n      "replicas": 1,\n      "type": "/v3/project/schemas/deploymentStatus",\n      "unavailableReplicas": 0,\n      "updatedReplicas": 1\n    },\n    "dnsPolicy": "ClusterFirst",\n    "id": "deployment:default:nginx",\n    "labels": {\n      "workload.user.cattle.io/workloadselector": "deployment-default-nginx"\n    },\n    "name": "nginx",\n    "namespaceId": "default",\n    "projectId": "c-bcz5t:p-fdr4s",\n    "publicEndpoints": [\n      {\n        "addresses": ["10.64.3.58"],\n        "allNodes": true,\n        "ingressId": null,\n        "nodeId": null,\n        "podId": null,\n        "port": 30917,\n        "protocol": "TCP",\n        "serviceId": "default:nginx-nodeport",\n        "type": "publicEndpoint"\n      }\n    ],\n    "restartPolicy": "Always",\n    "scale": 1,\n    "schedulerName": "default-scheduler",\n    "selector": {\n      "matchLabels": {\n        "workload.user.cattle.io/workloadselector": "deployment-default-nginx"\n      },\n      "type": "/v3/project/schemas/labelSelector"\n    },\n    "state": "active",\n    "terminationGracePeriodSeconds": 30,\n    "transitioning": "no",\n    "transitioningMessage": "",\n    "type": "deployment",\n    "uuid": "f998037d-8a5c-11e8-a4cf-0245a7ebb0fd",\n    "workloadAnnotations": {\n      "deployment.kubernetes.io/revision": "1",\n      "field.cattle.io/creatorId": "user-f4tt2"\n    },\n    "workloadLabels": {\n      "workload.user.cattle.io/workloadselector": "deployment-default-nginx"\n    },\n    "scheduling": {\n      "node": {}\n    },\n    "description": "my decript",\n    "volumes": []\n  }\n}\n')),(0,o.kt)("h4",{id:"response"},"Response"),(0,o.kt)("p",null,"The code sample below depicts an API response, with both its metadata header and body."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "auditID": "a886fd9f-5d6b-4ae3-9a10-5bff8f3d68af",\n  "responseStatus": "200",\n  "stage": "ResponseComplete",\n  "stageTimestamp": "2018-07-20 10:33:06 +0800",\n  "responseBody": {\n    "actionLinks": {\n      "pause": "https://localhost:8443/v3/project/c-bcz5t:p-fdr4s/workloads/deployment:default:nginx?action=pause",\n      "resume": "https://localhost:8443/v3/project/c-bcz5t:p-fdr4s/workloads/deployment:default:nginx?action=resume",\n      "rollback": "https://localhost:8443/v3/project/c-bcz5t:p-fdr4s/workloads/deployment:default:nginx?action=rollback"\n    },\n    "annotations": {},\n    "baseType": "workload",\n    "containers": [\n      {\n        "allowPrivilegeEscalation": false,\n        "image": "nginx",\n        "imagePullPolicy": "Always",\n        "initContainer": false,\n        "name": "nginx",\n        "ports": [\n          {\n            "containerPort": 80,\n            "dnsName": "nginx-nodeport",\n            "kind": "NodePort",\n            "name": "80tcp01",\n            "protocol": "TCP",\n            "sourcePort": 0,\n            "type": "/v3/project/schemas/containerPort"\n          }\n        ],\n        "privileged": false,\n        "readOnly": false,\n        "resources": {\n          "type": "/v3/project/schemas/resourceRequirements"\n        },\n        "restartCount": 0,\n        "runAsNonRoot": false,\n        "stdin": true,\n        "stdinOnce": false,\n        "terminationMessagePath": "/dev/termination-log",\n        "terminationMessagePolicy": "File",\n        "tty": true,\n        "type": "/v3/project/schemas/container"\n      }\n    ],\n    "created": "2018-07-18T07:34:16Z",\n    "createdTS": 1531899256000,\n    "creatorId": null,\n    "deploymentConfig": {\n      "maxSurge": 1,\n      "maxUnavailable": 0,\n      "minReadySeconds": 0,\n      "progressDeadlineSeconds": 600,\n      "revisionHistoryLimit": 10,\n      "strategy": "RollingUpdate"\n    },\n    "deploymentStatus": {\n      "availableReplicas": 1,\n      "conditions": [\n        {\n          "lastTransitionTime": "2018-07-18T07:34:38Z",\n          "lastTransitionTimeTS": 1531899278000,\n          "lastUpdateTime": "2018-07-18T07:34:38Z",\n          "lastUpdateTimeTS": 1531899278000,\n          "message": "Deployment has minimum availability.",\n          "reason": "MinimumReplicasAvailable",\n          "status": "True",\n          "type": "Available"\n        },\n        {\n          "lastTransitionTime": "2018-07-18T07:34:16Z",\n          "lastTransitionTimeTS": 1531899256000,\n          "lastUpdateTime": "2018-07-18T07:34:38Z",\n          "lastUpdateTimeTS": 1531899278000,\n          "message": "ReplicaSet \\"nginx-64d85666f9\\" has successfully progressed.",\n          "reason": "NewReplicaSetAvailable",\n          "status": "True",\n          "type": "Progressing"\n        }\n      ],\n      "observedGeneration": 2,\n      "readyReplicas": 1,\n      "replicas": 1,\n      "type": "/v3/project/schemas/deploymentStatus",\n      "unavailableReplicas": 0,\n      "updatedReplicas": 1\n    },\n    "dnsPolicy": "ClusterFirst",\n    "hostIPC": false,\n    "hostNetwork": false,\n    "hostPID": false,\n    "id": "deployment:default:nginx",\n    "labels": {\n      "workload.user.cattle.io/workloadselector": "deployment-default-nginx"\n    },\n    "links": {\n      "remove": "https://localhost:8443/v3/project/c-bcz5t:p-fdr4s/workloads/deployment:default:nginx",\n      "revisions": "https://localhost:8443/v3/project/c-bcz5t:p-fdr4s/workloads/deployment:default:nginx/revisions",\n      "self": "https://localhost:8443/v3/project/c-bcz5t:p-fdr4s/workloads/deployment:default:nginx",\n      "update": "https://localhost:8443/v3/project/c-bcz5t:p-fdr4s/workloads/deployment:default:nginx",\n      "yaml": "https://localhost:8443/v3/project/c-bcz5t:p-fdr4s/workloads/deployment:default:nginx/yaml"\n    },\n    "name": "nginx",\n    "namespaceId": "default",\n    "paused": false,\n    "projectId": "c-bcz5t:p-fdr4s",\n    "publicEndpoints": [\n      {\n        "addresses": ["10.64.3.58"],\n        "allNodes": true,\n        "ingressId": null,\n        "nodeId": null,\n        "podId": null,\n        "port": 30917,\n        "protocol": "TCP",\n        "serviceId": "default:nginx-nodeport"\n      }\n    ],\n    "restartPolicy": "Always",\n    "scale": 1,\n    "schedulerName": "default-scheduler",\n    "selector": {\n      "matchLabels": {\n        "workload.user.cattle.io/workloadselector": "deployment-default-nginx"\n      },\n      "type": "/v3/project/schemas/labelSelector"\n    },\n    "state": "active",\n    "terminationGracePeriodSeconds": 30,\n    "transitioning": "no",\n    "transitioningMessage": "",\n    "type": "deployment",\n    "uuid": "f998037d-8a5c-11e8-a4cf-0245a7ebb0fd",\n    "workloadAnnotations": {\n      "deployment.kubernetes.io/revision": "1",\n      "field.cattle.io/creatorId": "user-f4tt2"\n    },\n    "workloadLabels": {\n      "workload.user.cattle.io/workloadselector": "deployment-default-nginx"\n    }\n  }\n}\n')))}m.isMDXComponent=!0}}]);