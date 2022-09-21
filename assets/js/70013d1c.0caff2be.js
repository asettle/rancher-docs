"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[33306],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),p=u(n),m=a,g=p["".concat(l,".").concat(m)]||p[m]||d[m]||i;return n?r.createElement(g,s(s({ref:t},c),{},{components:n})):r.createElement(g,s({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,s=new Array(i);s[0]=p;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:a,s[1]=o;for(var u=2;u<i;u++)s[u]=n[u];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},38472:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return l},default:function(){return m},frontMatter:function(){return o},metadata:function(){return u},toc:function(){return d}});var r=n(87462),a=n(63366),i=(n(67294),n(3905)),s=["components"],o={title:"Overriding Template Settings",weight:33,aliases:["/rancher/v2.x/en/admin-settings/rke-templates/overrides/"]},l=void 0,u={unversionedId:"how-to-guides/advanced-user-guides/authentication-permissions-and-global-configuration/about-rke1-templates/override-template-settings",id:"version-2.5/how-to-guides/advanced-user-guides/authentication-permissions-and-global-configuration/about-rke1-templates/override-template-settings",title:"Overriding Template Settings",description:"When a user creates an RKE template, each setting in the template has a switch in the Rancher UI that indicates if users can override the setting. This switch marks those settings as Allow User Override.",source:"@site/versioned_docs/version-2.5/how-to-guides/advanced-user-guides/authentication-permissions-and-global-configuration/about-rke1-templates/override-template-settings.md",sourceDirName:"how-to-guides/advanced-user-guides/authentication-permissions-and-global-configuration/about-rke1-templates",slug:"/how-to-guides/advanced-user-guides/authentication-permissions-and-global-configuration/about-rke1-templates/override-template-settings",permalink:"/v2.5/how-to-guides/advanced-user-guides/authentication-permissions-and-global-configuration/about-rke1-templates/override-template-settings",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/versioned_docs/version-2.5/how-to-guides/advanced-user-guides/authentication-permissions-and-global-configuration/about-rke1-templates/override-template-settings.md",tags:[],version:"2.5",lastUpdatedAt:1660949308,formattedLastUpdatedAt:"8/19/2022",frontMatter:{title:"Overriding Template Settings",weight:33,aliases:["/rancher/v2.x/en/admin-settings/rke-templates/overrides/"]},sidebar:"tutorialSidebar",previous:{title:"Template Enforcement",permalink:"/v2.5/how-to-guides/advanced-user-guides/authentication-permissions-and-global-configuration/about-rke1-templates/enforce-templates"},next:{title:"Applying Templates",permalink:"/v2.5/how-to-guides/advanced-user-guides/authentication-permissions-and-global-configuration/about-rke1-templates/apply-templates"}},c={},d=[],p={toc:d};function m(e){var t=e.components,n=(0,a.Z)(e,s);return(0,i.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"When a user creates an RKE template, each setting in the template has a switch in the Rancher UI that indicates if users can override the setting. This switch marks those settings as ",(0,i.kt)("strong",{parentName:"p"},"Allow User Override.")),(0,i.kt)("p",null,"After a cluster is created with a template, end users can't update any of the settings defined in the template unless the template owner marked them as ",(0,i.kt)("strong",{parentName:"p"},"Allow User Override.")," However, if the template is ",(0,i.kt)("a",{parentName:"p",href:"/v2.5/how-to-guides/advanced-user-guides/authentication-permissions-and-global-configuration/about-rke1-templates/manage-rke1-templates"},"updated to a new revision")," that changes the settings or allows end users to change them, the cluster can be upgraded to a new revision of the template and the changes in the new revision will be applied to the cluster."),(0,i.kt)("p",null,"When any parameter is set as ",(0,i.kt)("strong",{parentName:"p"},"Allow User Override")," on the RKE template, it means that end users have to fill out those fields during cluster creation and they can edit those settings afterward at any time."),(0,i.kt)("p",null,"The ",(0,i.kt)("strong",{parentName:"p"},"Allow User Override")," model of the RKE template is useful for situations such as:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Administrators know that some settings will need the flexibility to be frequently updated over time"),(0,i.kt)("li",{parentName:"ul"},"End users will need to enter their own access keys or secret keys, for example, cloud credentials or credentials for backup snapshots")))}m.isMDXComponent=!0}}]);