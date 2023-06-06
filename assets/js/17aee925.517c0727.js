"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[97310],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>m});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),p=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},l=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,s=e.originalType,c=e.parentName,l=o(e,["components","mdxType","originalType","parentName"]),d=p(n),m=a,f=d["".concat(c,".").concat(m)]||d[m]||u[m]||s;return n?r.createElement(f,i(i({ref:t},l),{},{components:n})):r.createElement(f,i({ref:t},l))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=n.length,i=new Array(s);i[0]=d;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var p=2;p<s;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},45796:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>u,frontMatter:()=>s,metadata:()=>o,toc:()=>p});var r=n(87462),a=(n(67294),n(3905));const s={title:"Skip Tests"},i=void 0,o={unversionedId:"how-to-guides/advanced-user-guides/cis-scan-guides/skip-tests",id:"version-2.5/how-to-guides/advanced-user-guides/cis-scan-guides/skip-tests",title:"Skip Tests",description:"CIS scans can be run using test profiles with user-defined skips.",source:"@site/versioned_docs/version-2.5/how-to-guides/advanced-user-guides/cis-scan-guides/skip-tests.md",sourceDirName:"how-to-guides/advanced-user-guides/cis-scan-guides",slug:"/how-to-guides/advanced-user-guides/cis-scan-guides/skip-tests",permalink:"/v2.5/how-to-guides/advanced-user-guides/cis-scan-guides/skip-tests",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/versioned_docs/version-2.5/how-to-guides/advanced-user-guides/cis-scan-guides/skip-tests.md",tags:[],version:"2.5",lastUpdatedAt:1685574646,formattedLastUpdatedAt:"May 31, 2023",frontMatter:{title:"Skip Tests"},sidebar:"tutorialSidebar",previous:{title:"Run a Scan Periodically on a Schedule",permalink:"/v2.5/how-to-guides/advanced-user-guides/cis-scan-guides/run-a-scan-periodically-on-a-schedule"},next:{title:"View Reports",permalink:"/v2.5/how-to-guides/advanced-user-guides/cis-scan-guides/view-reports"}},c={},p=[],l={toc:p};function u(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"CIS scans can be run using test profiles with user-defined skips."),(0,a.kt)("p",null,"To skip tests, you will create a custom CIS scan profile. A profile contains the configuration for the CIS scan, which includes the benchmark versions to use and any specific tests to skip in that benchmark."),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"In the upper left corner, click ",(0,a.kt)("strong",{parentName:"p"},"\u2630 > Cluster Management"),".")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"On the ",(0,a.kt)("strong",{parentName:"p"},"Clusters")," page, go to the cluster where you want to run a CIS scan and click ",(0,a.kt)("strong",{parentName:"p"},"Explore"),".")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Click ",(0,a.kt)("strong",{parentName:"p"},"CIS Benchmark > Profile"),".")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"From here, you can create a profile in multiple ways. To make a new profile, click ",(0,a.kt)("strong",{parentName:"p"},"Create")," and fill out the form in the UI. To make a new profile based on an existing profile, go to the existing profile and click ",(0,a.kt)("strong",{parentName:"p"},"\u22ee Clone"),".  If you are filling out the form, add the tests to skip using the test IDs, using the relevant CIS Benchmark as a reference. If you are creating the new test profile as YAML, you will add the IDs of the tests to skip in the ",(0,a.kt)("inlineCode",{parentName:"p"},"skipTests")," directive. You will also give the profile a name:"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: cis.cattle.io/v1\nkind: ClusterScanProfile\nmetadata:\n  annotations:\n    meta.helm.sh/release-name: clusterscan-operator\n    meta.helm.sh/release-namespace: cis-operator-system\n  labels:\n    app.kubernetes.io/managed-by: Helm\n  name: "<example-profile>"\nspec:\n  benchmarkVersion: cis-1.5\n  skipTests:\n    - "1.1.20"\n    - "1.1.21"\n'))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Click ",(0,a.kt)("strong",{parentName:"p"},"Create"),"."))),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Result:")," A new CIS scan profile is created."),(0,a.kt)("p",null,"When you ",(0,a.kt)("a",{parentName:"p",href:"/v2.5/how-to-guides/advanced-user-guides/cis-scan-guides/run-a-scan"},"run a scan")," that uses this profile, the defined tests will be skipped during the scan. The skipped tests will be marked in the generated report as ",(0,a.kt)("inlineCode",{parentName:"p"},"Skip"),"."))}u.isMDXComponent=!0}}]);