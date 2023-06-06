"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[32714],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>h});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=c(n),h=r,g=p["".concat(s,".").concat(h)]||p[h]||d[h]||o;return n?a.createElement(g,i(i({ref:t},u),{},{components:n})):a.createElement(g,i({ref:t},u))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=p;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var c=2;c<o;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},29561:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var a=n(87462),r=(n(67294),n(3905));const o={title:"Setting up the Amazon Cloud Provider"},i=void 0,l={unversionedId:"how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/launch-kubernetes-with-rancher/set-up-cloud-providers/other-cloud-providers/amazon",id:"version-2.5/how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/launch-kubernetes-with-rancher/set-up-cloud-providers/other-cloud-providers/amazon",title:"Setting up the Amazon Cloud Provider",description:"When using the Amazon cloud provider, you can leverage the following capabilities:",source:"@site/versioned_docs/version-2.5/how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/launch-kubernetes-with-rancher/set-up-cloud-providers/other-cloud-providers/amazon.md",sourceDirName:"how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/launch-kubernetes-with-rancher/set-up-cloud-providers/other-cloud-providers",slug:"/how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/launch-kubernetes-with-rancher/set-up-cloud-providers/other-cloud-providers/amazon",permalink:"/zh/v2.5/how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/launch-kubernetes-with-rancher/set-up-cloud-providers/other-cloud-providers/amazon",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/versioned_docs/version-2.5/how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/launch-kubernetes-with-rancher/set-up-cloud-providers/other-cloud-providers/amazon.md",tags:[],version:"2.5",lastUpdatedAt:1663953084,formattedLastUpdatedAt:"2022\u5e749\u670823\u65e5",frontMatter:{title:"Setting up the Amazon Cloud Provider"},sidebar:"tutorialSidebar",previous:{title:"Other Cloud Providers",permalink:"/zh/v2.5/pages-for-subheaders/other-cloud-providers"},next:{title:"Setting up the Azure Cloud Provider",permalink:"/zh/v2.5/how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/launch-kubernetes-with-rancher/set-up-cloud-providers/other-cloud-providers/azure"}},s={},c=[{value:"1. Create an IAM Role and attach to the instances",id:"1-create-an-iam-role-and-attach-to-the-instances",level:3},{value:"2. Configure the ClusterID",id:"2-configure-the-clusterid",level:3},{value:"Using Amazon Elastic Container Registry (ECR)",id:"using-amazon-elastic-container-registry-ecr",level:3}],u={toc:c};function d(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"When using the ",(0,r.kt)("inlineCode",{parentName:"p"},"Amazon")," cloud provider, you can leverage the following capabilities:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Load Balancers:")," Launches an AWS Elastic Load Balancer (ELB) when choosing ",(0,r.kt)("inlineCode",{parentName:"li"},"Layer-4 Load Balancer")," in ",(0,r.kt)("strong",{parentName:"li"},"Port Mapping")," or when launching a ",(0,r.kt)("inlineCode",{parentName:"li"},"Service")," with ",(0,r.kt)("inlineCode",{parentName:"li"},"type: LoadBalancer"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Persistent Volumes"),": Allows you to use AWS Elastic Block Stores (EBS) for persistent volumes.")),(0,r.kt)("p",null,"See ",(0,r.kt)("a",{parentName:"p",href:"https://kubernetes.github.io/cloud-provider-aws/"},"cloud-provider-aws README")," for all information regarding the Amazon cloud provider."),(0,r.kt)("p",null,"To set up the Amazon cloud provider,"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"#1-create-an-iam-role-and-attach-to-the-instances"},"Create an IAM role and attach to the instances")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"#2-configure-the-clusterid"},"Configure the ClusterID"))),(0,r.kt)("h3",{id:"1-create-an-iam-role-and-attach-to-the-instances"},"1. Create an IAM Role and attach to the instances"),(0,r.kt)("p",null,"All nodes added to the cluster must be able to interact with EC2 so that they can create and remove resources. You can enable this interaction by using an IAM role attached to the instance. See ",(0,r.kt)("a",{parentName:"p",href:"https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/iam-roles-for-amazon-ec2.html#create-iam-role"},"Amazon documentation: Creating an IAM Role")," how to create an IAM role. There are two example policies:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"The first policy is for the nodes with the ",(0,r.kt)("inlineCode",{parentName:"li"},"controlplane")," role. These nodes have to be able to create/remove EC2 resources. The following IAM policy is an example, please remove any unneeded permissions for your use case."),(0,r.kt)("li",{parentName:"ul"},"The second policy is for the nodes with the ",(0,r.kt)("inlineCode",{parentName:"li"},"etcd")," or ",(0,r.kt)("inlineCode",{parentName:"li"},"worker")," role. These nodes only have to be able to retrieve information from EC2.")),(0,r.kt)("p",null,"While creating an ",(0,r.kt)("a",{parentName:"p",href:"/zh/v2.5/how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/launch-kubernetes-with-rancher/use-new-nodes-in-an-infra-provider/create-an-amazon-ec2-cluster"},"Amazon EC2 cluster"),", you must fill in the ",(0,r.kt)("strong",{parentName:"p"},"IAM Instance Profile Name")," (not ARN) of the created IAM role when creating the ",(0,r.kt)("strong",{parentName:"p"},"Node Template"),"."),(0,r.kt)("p",null,"While creating a ",(0,r.kt)("a",{parentName:"p",href:"/zh/v2.5/pages-for-subheaders/use-existing-nodes"},"Custom cluster"),", you must manually attach the IAM role to the instance(s)."),(0,r.kt)("p",null,"IAM Policy for nodes with the ",(0,r.kt)("inlineCode",{parentName:"p"},"controlplane")," role:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n"Version": "2012-10-17",\n"Statement": [\n  {\n    "Effect": "Allow",\n    "Action": [\n      "autoscaling:DescribeAutoScalingGroups",\n      "autoscaling:DescribeLaunchConfigurations",\n      "autoscaling:DescribeTags",\n      "ec2:DescribeInstances",\n      "ec2:DescribeRegions",\n      "ec2:DescribeRouteTables",\n      "ec2:DescribeSecurityGroups",\n      "ec2:DescribeSubnets",\n      "ec2:DescribeVolumes",\n      "ec2:CreateSecurityGroup",\n      "ec2:CreateTags",\n      "ec2:CreateVolume",\n      "ec2:ModifyInstanceAttribute",\n      "ec2:ModifyVolume",\n      "ec2:AttachVolume",\n      "ec2:AuthorizeSecurityGroupIngress",\n      "ec2:CreateRoute",\n      "ec2:DeleteRoute",\n      "ec2:DeleteSecurityGroup",\n      "ec2:DeleteVolume",\n      "ec2:DetachVolume",\n      "ec2:RevokeSecurityGroupIngress",\n      "ec2:DescribeVpcs",\n      "elasticloadbalancing:AddTags",\n      "elasticloadbalancing:AttachLoadBalancerToSubnets",\n      "elasticloadbalancing:ApplySecurityGroupsToLoadBalancer",\n      "elasticloadbalancing:CreateLoadBalancer",\n      "elasticloadbalancing:CreateLoadBalancerPolicy",\n      "elasticloadbalancing:CreateLoadBalancerListeners",\n      "elasticloadbalancing:ConfigureHealthCheck",\n      "elasticloadbalancing:DeleteLoadBalancer",\n      "elasticloadbalancing:DeleteLoadBalancerListeners",\n      "elasticloadbalancing:DescribeLoadBalancers",\n      "elasticloadbalancing:DescribeLoadBalancerAttributes",\n      "elasticloadbalancing:DetachLoadBalancerFromSubnets",\n      "elasticloadbalancing:DeregisterInstancesFromLoadBalancer",\n      "elasticloadbalancing:ModifyLoadBalancerAttributes",\n      "elasticloadbalancing:RegisterInstancesWithLoadBalancer",\n      "elasticloadbalancing:SetLoadBalancerPoliciesForBackendServer",\n      "elasticloadbalancing:AddTags",\n      "elasticloadbalancing:CreateListener",\n      "elasticloadbalancing:CreateTargetGroup",\n      "elasticloadbalancing:DeleteListener",\n      "elasticloadbalancing:DeleteTargetGroup",\n      "elasticloadbalancing:DescribeListeners",\n      "elasticloadbalancing:DescribeLoadBalancerPolicies",\n      "elasticloadbalancing:DescribeTargetGroups",\n      "elasticloadbalancing:DescribeTargetHealth",\n      "elasticloadbalancing:ModifyListener",\n      "elasticloadbalancing:ModifyTargetGroup",\n      "elasticloadbalancing:RegisterTargets",\n      "elasticloadbalancing:SetLoadBalancerPoliciesOfListener",\n      "iam:CreateServiceLinkedRole",\n      "kms:DescribeKey"\n    ],\n    "Resource": [\n      "*"\n    ]\n  }\n]\n}\n')),(0,r.kt)("p",null,"IAM policy for nodes with the ",(0,r.kt)("inlineCode",{parentName:"p"},"etcd")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"worker")," role:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n"Version": "2012-10-17",\n"Statement": [\n    {\n        "Effect": "Allow",\n        "Action": [\n            "ec2:DescribeInstances",\n            "ec2:DescribeRegions",\n            "ecr:GetAuthorizationToken",\n            "ecr:BatchCheckLayerAvailability",\n            "ecr:GetDownloadUrlForLayer",\n            "ecr:GetRepositoryPolicy",\n            "ecr:DescribeRepositories",\n            "ecr:ListImages",\n            "ecr:BatchGetImage"\n        ],\n        "Resource": "*"\n    }\n]\n}\n')),(0,r.kt)("h3",{id:"2-configure-the-clusterid"},"2. Configure the ClusterID"),(0,r.kt)("p",null,"The following resources need to tagged with a ",(0,r.kt)("inlineCode",{parentName:"p"},"ClusterID"),":"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Nodes"),": All hosts added in Rancher."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Subnet"),": The subnet used for your cluster."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Security Group"),": The security group used for your cluster.")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("strong",{parentName:"p"},"Note:")," Do not tag multiple security groups. Tagging multiple groups generates an error when creating an Elastic Load Balancer (ELB).")),(0,r.kt)("p",null,"When you create an ",(0,r.kt)("a",{parentName:"p",href:"/zh/v2.5/how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/launch-kubernetes-with-rancher/use-new-nodes-in-an-infra-provider/create-an-amazon-ec2-cluster"},"Amazon EC2 Cluster"),", the ",(0,r.kt)("inlineCode",{parentName:"p"},"ClusterID")," is automatically configured for the created nodes. Other resources still need to be tagged manually."),(0,r.kt)("p",null,"Use the following tag:"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Key")," = ",(0,r.kt)("inlineCode",{parentName:"p"},"kubernetes.io/cluster/CLUSTERID")," ",(0,r.kt)("strong",{parentName:"p"},"Value")," = ",(0,r.kt)("inlineCode",{parentName:"p"},"owned")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"CLUSTERID")," can be any string you like, as long as it is equal across all tags set."),(0,r.kt)("p",null,"Setting the value of the tag to ",(0,r.kt)("inlineCode",{parentName:"p"},"owned")," tells the cluster that all resources with this tag are owned and managed by this cluster. If you share resources between clusters, you can change the tag to:"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Key")," = ",(0,r.kt)("inlineCode",{parentName:"p"},"kubernetes.io/cluster/CLUSTERID")," ",(0,r.kt)("strong",{parentName:"p"},"Value")," = ",(0,r.kt)("inlineCode",{parentName:"p"},"shared"),"."),(0,r.kt)("h3",{id:"using-amazon-elastic-container-registry-ecr"},"Using Amazon Elastic Container Registry (ECR)"),(0,r.kt)("p",null,"The kubelet component has the ability to automatically obtain ECR credentials, when the IAM profile mentioned in ",(0,r.kt)("a",{parentName:"p",href:"#1-create-an-iam-role-and-attach-to-the-instances"},"Create an IAM Role and attach to the instances")," is attached to the instance(s). When using a Kubernetes version older than v1.15.0, the Amazon cloud provider needs be configured in the cluster. Starting with Kubernetes version v1.15.0, the kubelet can obtain ECR credentials without having the Amazon cloud provider configured in the cluster."))}d.isMDXComponent=!0}}]);