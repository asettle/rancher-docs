"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[86717],{3905:(e,t,r)=>{r.d(t,{Zo:()=>h,kt:()=>d});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),u=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},h=function(e){var t=u(e.components);return n.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,h=s(e,["components","mdxType","originalType","parentName"]),c=u(r),d=a,m=c["".concat(l,".").concat(d)]||c[d]||p[d]||o;return r?n.createElement(m,i(i({ref:t},h),{},{components:r})):n.createElement(m,i({ref:t},h))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=c;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var u=2;u<o;u++)i[u]=r[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}c.displayName="MDXCreateElement"},45348:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>s,toc:()=>u});var n=r(87462),a=(r(67294),r(3905));const o={title:"Configuring Shibboleth (SAML)"},i=void 0,s={unversionedId:"pages-for-subheaders/configure-shibboleth-saml",id:"pages-for-subheaders/configure-shibboleth-saml",title:"Configuring Shibboleth (SAML)",description:"If your organization uses Shibboleth Identity Provider (IdP) for user authentication, you can configure Rancher to allow your users to log in to Rancher using their Shibboleth credentials.",source:"@site/docs/pages-for-subheaders/configure-shibboleth-saml.md",sourceDirName:"pages-for-subheaders",slug:"/pages-for-subheaders/configure-shibboleth-saml",permalink:"/pages-for-subheaders/configure-shibboleth-saml",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/docs/pages-for-subheaders/configure-shibboleth-saml.md",tags:[],version:"current",lastUpdatedAt:1667002146,formattedLastUpdatedAt:"Oct 29, 2022",frontMatter:{title:"Configuring Shibboleth (SAML)"},sidebar:"tutorialSidebar",previous:{title:"2. Configuring Rancher for Microsoft AD FS",permalink:"/how-to-guides/new-user-guides/authentication-permissions-and-global-configuration/configure-microsoft-ad-federation-service-saml/configure-rancher-for-ms-adfs"},next:{title:"Group Permissions with Shibboleth and OpenLDAP",permalink:"/how-to-guides/new-user-guides/authentication-permissions-and-global-configuration/configure-shibboleth-saml/about-group-permissions"}},l={},u=[{value:"Setting up Shibboleth in Rancher",id:"setting-up-shibboleth-in-rancher",level:2},{value:"Shibboleth Prerequisites",id:"shibboleth-prerequisites",level:3},{value:"Configure Shibboleth in Rancher",id:"configure-shibboleth-in-rancher",level:3},{value:"SAML Provider Caveats",id:"saml-provider-caveats",level:3},{value:"Setting up OpenLDAP in Rancher",id:"setting-up-openldap-in-rancher",level:2},{value:"OpenLDAP Prerequisites",id:"openldap-prerequisites",level:3},{value:"Configure OpenLDAP in Rancher",id:"configure-openldap-in-rancher",level:3},{value:"Troubleshooting",id:"troubleshooting",level:2}],h={toc:u};function p(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},h,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"If your organization uses Shibboleth Identity Provider (IdP) for user authentication, you can configure Rancher to allow your users to log in to Rancher using their Shibboleth credentials."),(0,a.kt)("p",null,"In this configuration, when Rancher users log in, they will be redirected to the Shibboleth IdP to enter their credentials. After authentication, they will be redirected back to the Rancher UI."),(0,a.kt)("p",null,"If you also configure OpenLDAP as the back end to Shibboleth, it will return a SAML assertion to Rancher with user attributes that include groups. Then the authenticated user will be able to access resources in Rancher that their groups have permissions for."),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"The instructions in this section assume that you understand how Rancher, Shibboleth, and OpenLDAP work together. For a more detailed explanation of how it works, refer to ",(0,a.kt)("a",{parentName:"p",href:"/how-to-guides/new-user-guides/authentication-permissions-and-global-configuration/configure-shibboleth-saml/about-group-permissions"},"this page."))),(0,a.kt)("h2",{id:"setting-up-shibboleth-in-rancher"},"Setting up Shibboleth in Rancher"),(0,a.kt)("h3",{id:"shibboleth-prerequisites"},"Shibboleth Prerequisites"),(0,a.kt)("blockquote",null,(0,a.kt)("ul",{parentName:"blockquote"},(0,a.kt)("li",{parentName:"ul"},"You must have a Shibboleth IdP Server configured."),(0,a.kt)("li",{parentName:"ul"},"Following are the Rancher Service Provider URLs needed for configuration:\nMetadata URL: ",(0,a.kt)("inlineCode",{parentName:"li"},"https://<rancher-server>/v1-saml/shibboleth/saml/metadata"),"\nAssertion Consumer Service (ACS) URL: ",(0,a.kt)("inlineCode",{parentName:"li"},"https://<rancher-server>/v1-saml/shibboleth/saml/acs")),(0,a.kt)("li",{parentName:"ul"},"Export a ",(0,a.kt)("inlineCode",{parentName:"li"},"metadata.xml")," file from your IdP Server. For more information, see the ",(0,a.kt)("a",{parentName:"li",href:"https://wiki.shibboleth.net/confluence/display/SP3/Home"},"Shibboleth documentation.")))),(0,a.kt)("h3",{id:"configure-shibboleth-in-rancher"},"Configure Shibboleth in Rancher"),(0,a.kt)("p",null,"If your organization uses Shibboleth for user authentication, you can configure Rancher to allow your users to log in using their IdP credentials."),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"In the top left corner, click ",(0,a.kt)("strong",{parentName:"p"},"\u2630 > Users & Authentication"),".")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"In the left navigation menu, click ",(0,a.kt)("strong",{parentName:"p"},"Auth Provider"),".")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Click ",(0,a.kt)("strong",{parentName:"p"},"Shibboleth"),".")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Complete the ",(0,a.kt)("strong",{parentName:"p"},"Configure Shibboleth Account")," form. Shibboleth IdP lets you specify what data store you want to use. You can either add a database or use an existing ldap server. For example, if you select your Active Directory (AD) server, the examples below describe how you can map AD attributes to fields within Rancher."),(0,a.kt)("ol",{parentName:"li"},(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Display Name Field"),": Enter the AD attribute that contains the display name of users (example: ",(0,a.kt)("inlineCode",{parentName:"p"},"displayName"),").")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"User Name Field"),": Enter the AD attribute that contains the user name/given name (example: ",(0,a.kt)("inlineCode",{parentName:"p"},"givenName"),").")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"UID Field"),": Enter an AD attribute that is unique to every user (example: ",(0,a.kt)("inlineCode",{parentName:"p"},"sAMAccountName"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"distinguishedName"),").")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Groups Field"),": Make entries for managing group memberships (example: ",(0,a.kt)("inlineCode",{parentName:"p"},"memberOf"),").")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Rancher API Host"),": Enter the URL for your Rancher Server.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Private Key")," and ",(0,a.kt)("strong",{parentName:"p"},"Certificate"),": This is a key-certificate pair to create a secure shell between Rancher and your IdP."),(0,a.kt)("p",{parentName:"li"},"You can generate one using an openssl command. For example:"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre"},'openssl req -x509 -newkey rsa:2048 -keyout myservice.key -out myservice.cert -days 365 -nodes -subj "/CN=myservice.example.com"\n'))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"IDP-metadata"),": The ",(0,a.kt)("inlineCode",{parentName:"p"},"metadata.xml")," file that you exported from your IdP server."))))),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"After you complete the ",(0,a.kt)("strong",{parentName:"p"},"Configure Shibboleth Account")," form, click ",(0,a.kt)("strong",{parentName:"p"},"Enable"),"."),(0,a.kt)("p",{parentName:"li"},"Rancher redirects you to the IdP login page. Enter credentials that authenticate with Shibboleth IdP to validate your Rancher Shibboleth configuration."),(0,a.kt)("admonition",{parentName:"li",type:"note"},(0,a.kt)("p",{parentName:"admonition"},"You may have to disable your popup blocker to see the IdP login page.")))),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Result:")," Rancher is configured to work with Shibboleth. Your users can now sign into Rancher using their Shibboleth logins."),(0,a.kt)("h3",{id:"saml-provider-caveats"},"SAML Provider Caveats"),(0,a.kt)("p",null,"If you configure Shibboleth without OpenLDAP, the following caveats apply due to the fact that SAML Protocol does not support search or lookup for users or groups."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"There is no validation on users or groups when assigning permissions to them in Rancher."),(0,a.kt)("li",{parentName:"ul"},"When adding users, the exact user IDs (i.e. UID Field) must be entered correctly. As you type the user ID, there will be no search for other user IDs that may match."),(0,a.kt)("li",{parentName:"ul"},"When adding groups, you must select the group from the drop-down that is next to the text box. Rancher assumes that any input from the text box is a user."),(0,a.kt)("li",{parentName:"ul"},"The group drop-down shows only the groups that you are a member of. You will not be able to add groups that you are not a member of.")),(0,a.kt)("p",null,"To enable searching for groups when assigning permissions in Rancher, you will need to configure a back end for the SAML provider that supports groups, such as OpenLDAP."),(0,a.kt)("h2",{id:"setting-up-openldap-in-rancher"},"Setting up OpenLDAP in Rancher"),(0,a.kt)("p",null,"If you also configure OpenLDAP as the back end to Shibboleth, it will return a SAML assertion to Rancher with user attributes that include groups. Then authenticated users will be able to access resources in Rancher that their groups have permissions for."),(0,a.kt)("h3",{id:"openldap-prerequisites"},"OpenLDAP Prerequisites"),(0,a.kt)("p",null,"Rancher must be configured with a LDAP bind account (aka service account) to search and retrieve LDAP entries pertaining to users and groups that should have access. It is recommended to not use an administrator account or personal account for this purpose and instead create a dedicated account in OpenLDAP with read-only access to users and groups under the configured search base (see below)."),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("strong",{parentName:"p"},"Using TLS?")),(0,a.kt)("p",{parentName:"blockquote"},"If the certificate used by the OpenLDAP server is self-signed or not from a recognized certificate authority, make sure have at hand the CA certificate (concatenated with any intermediate certificates) in PEM format. You will have to paste in this certificate during the configuration so that Rancher is able to validate the certificate chain.")),(0,a.kt)("h3",{id:"configure-openldap-in-rancher"},"Configure OpenLDAP in Rancher"),(0,a.kt)("p",null,"Configure the settings for the OpenLDAP server, groups and users. For help filling out each field, refer to the ",(0,a.kt)("a",{parentName:"p",href:"/how-to-guides/new-user-guides/authentication-permissions-and-global-configuration/configure-openldap/openldap-config-reference"},"configuration reference.")," Note that nested group membership is not available for Shibboleth."),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Before you proceed with the configuration, please familiarise yourself with the concepts of ",(0,a.kt)("a",{parentName:"p",href:"/pages-for-subheaders/authentication-config#external-authentication-configuration-and-principal-users"},"External Authentication Configuration and Principal Users"),".")),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Log into the Rancher UI using the initial local ",(0,a.kt)("inlineCode",{parentName:"li"},"admin")," account."),(0,a.kt)("li",{parentName:"ol"},"In the top left corner, click ",(0,a.kt)("strong",{parentName:"li"},"\u2630 > Users & Authentication"),"."),(0,a.kt)("li",{parentName:"ol"},"In the left navigation menu, click ",(0,a.kt)("strong",{parentName:"li"},"Auth Provider"),"."),(0,a.kt)("li",{parentName:"ol"},"Click ",(0,a.kt)("strong",{parentName:"li"},"OpenLDAP"),". The ",(0,a.kt)("strong",{parentName:"li"},"Configure an OpenLDAP server")," form will be displayed.")),(0,a.kt)("h2",{id:"troubleshooting"},"Troubleshooting"),(0,a.kt)("p",null,"If you are experiencing issues while testing the connection to the OpenLDAP server, first double-check the credentials entered for the service account as well as the search base configuration. You may also inspect the Rancher logs to help pinpointing the problem cause. Debug logs may contain more detailed information about the error. Please refer to ",(0,a.kt)("a",{parentName:"p",href:"/faq/technical-items#how-can-i-enable-debug-logging"},"How can I enable debug logging")," in this documentation."))}p.isMDXComponent=!0}}]);