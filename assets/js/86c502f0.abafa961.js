"use strict";(self.webpackChunkobol_docs=self.webpackChunkobol_docs||[]).push([[79208],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>b});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=c(n),m=o,b=d["".concat(s,".").concat(m)]||d[m]||u[m]||i;return n?r.createElement(b,a(a({ref:t},p),{},{components:n})):r.createElement(b,a({ref:t},p))}));function b(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[d]="string"==typeof e?e:o,a[1]=l;for(var c=2;c<i;c++)a[c]=n[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},19823:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var r=n(87462),o=(n(67294),n(3905));const i={sidebar_position:5,description:"Add monitoring credentials to help the Obol Team monitor the health of your cluster"},a="Push Metrics to Obol Monitoring",l={unversionedId:"int/quickstart/advanced/obol-monitoring",id:"int/quickstart/advanced/obol-monitoring",title:"Push Metrics to Obol Monitoring",description:"Add monitoring credentials to help the Obol Team monitor the health of your cluster",source:"@site/docs/int/quickstart/advanced/obol-monitoring.md",sourceDirName:"int/quickstart/advanced",slug:"/int/quickstart/advanced/obol-monitoring",permalink:"/docs/next/int/quickstart/advanced/obol-monitoring",draft:!1,editUrl:"https://github.com/ObolNetwork/obol-docs/edit/main/docs/int/quickstart/advanced/obol-monitoring.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5,description:"Add monitoring credentials to help the Obol Team monitor the health of your cluster"},sidebar:"tutorialSidebar",previous:{title:"Getting Started Monitoring your Node",permalink:"/docs/next/int/quickstart/advanced/monitoring"},next:{title:"Run Prysm validators as part of a DV Cluster",permalink:"/docs/next/int/quickstart/advanced/prysm-vc"}},s={},c=[],p={toc:c};function d(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"push-metrics-to-obol-monitoring"},"Push Metrics to Obol Monitoring"),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"This is ",(0,o.kt)("strong",{parentName:"p"},"optional")," and does not confer any special privileges within the Obol Network.")),(0,o.kt)("p",null,"You may have been provided with ",(0,o.kt)("strong",{parentName:"p"},"Monitoring Credentials")," used to push distributed validator metrics to Obol's central prometheus cluster to monitor, analyze, and improve your Distributed Validator Cluster's performance."),(0,o.kt)("p",null,"The provided credentials needs to be added in ",(0,o.kt)("inlineCode",{parentName:"p"},"prometheus/prometheus.yml")," replacing ",(0,o.kt)("inlineCode",{parentName:"p"},"$PROM_REMOTE_WRITE_TOKEN")," and will look like:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"obol20!tnt8U!C...\n")),(0,o.kt)("p",null,"The updated ",(0,o.kt)("inlineCode",{parentName:"p"},"prometheus/prometheus.yml")," file should look like:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"global:\n  scrape_interval:     30s # Set the scrape interval to every 30 seconds.\n  evaluation_interval: 30s # Evaluate rules every 30 seconds.\n\nremote_write:\n  - url: https://vm.monitoring.gcp.obol.tech/write\n    authorization:\n      credentials: obol20!tnt8U!C...\n\nscrape_configs:\n  - job_name: 'charon'\n    static_configs:\n      - targets: ['charon:3620']\n  - job_name: \"lodestar\"\n    static_configs:\n      - targets: [ \"lodestar:5064\" ]\n  - job_name: 'node-exporter'\n    static_configs:\n      - targets: ['node-exporter:9100']\n")))}d.isMDXComponent=!0}}]);