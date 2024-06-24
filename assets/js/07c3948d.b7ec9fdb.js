"use strict";(self.webpackChunkobol_docs=self.webpackChunkobol_docs||[]).push([[38101],{15680:(e,t,n)=>{n.d(t,{xA:()=>d,yg:()=>m});var r=n(96540);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},p="mdxType",y={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),p=l(n),u=a,m=p["".concat(c,".").concat(u)]||p[u]||y[u]||o;return n?r.createElement(m,i(i({ref:t},d),{},{components:n})):r.createElement(m,i({ref:t},d))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=u;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[p]="string"==typeof e?e:a,i[1]=s;for(var l=2;l<o;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},7723:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>y,frontMatter:()=>o,metadata:()=>s,toc:()=>l});var r=n(58168),a=(n(96540),n(15680));const o={sidebar_position:8,description:"Combine distributed validator private key shares to recover the validator private key."},i="Combine DV private key shares",s={unversionedId:"advanced/quickstart-combine",id:"advanced/quickstart-combine",title:"Combine DV private key shares",description:"Combine distributed validator private key shares to recover the validator private key.",source:"@site/docs/advanced/quickstart-combine.md",sourceDirName:"advanced",slug:"/advanced/quickstart-combine",permalink:"/docs/next/advanced/quickstart-combine",draft:!1,editUrl:"https://github.com/ObolNetwork/obol-docs/edit/main/docs/advanced/quickstart-combine.md",tags:[],version:"current",sidebarPosition:8,frontMatter:{sidebar_position:8,description:"Combine distributed validator private key shares to recover the validator private key."},sidebar:"tutorialSidebar",previous:{title:"Split validator private keys",permalink:"/docs/next/advanced/quickstart-split"},next:{title:"Self-Host a Relay",permalink:"/docs/next/advanced/self-relay"}},c={},l=[{value:"Pre-requisites",id:"pre-requisites",level:2},{value:"Step 1. Set up the key combination directory tree",id:"step-1-set-up-the-key-combination-directory-tree",level:2},{value:"Step 2. Combine the key shares",id:"step-2-combine-the-key-shares",level:2}],d={toc:l},p="wrapper";function y(e){let{components:t,...n}=e;return(0,a.yg)(p,(0,r.A)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("h1",{id:"combine-dv-private-key-shares"},"Combine DV private key shares"),(0,a.yg)("admonition",{type:"warning"},(0,a.yg)("p",{parentName:"admonition"},"Reconstituting Distributed Validator private key shares into a standard validator private key is a security risk, and can potentially cause your validator to be slashed."),(0,a.yg)("p",{parentName:"admonition"},"Only combine private keys as a last resort and do so with extreme caution.")),(0,a.yg)("p",null,"Combine distributed validator private key shares into an Ethereum validator private key."),(0,a.yg)("h2",{id:"pre-requisites"},"Pre-requisites"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"Ensure you have the ",(0,a.yg)("inlineCode",{parentName:"li"},".charon")," directories of at least a threshold of the cluster's node operators."),(0,a.yg)("li",{parentName:"ul"},"Ensure you have ",(0,a.yg)("a",{parentName:"li",href:"https://docs.docker.com/engine/install/"},"docker")," installed."),(0,a.yg)("li",{parentName:"ul"},"Make sure ",(0,a.yg)("inlineCode",{parentName:"li"},"docker")," is running before executing the commands below.")),(0,a.yg)("h2",{id:"step-1-set-up-the-key-combination-directory-tree"},"Step 1. Set up the key combination directory tree"),(0,a.yg)("p",null,"Rename each cluster node operator ",(0,a.yg)("inlineCode",{parentName:"p"},".charon")," directory in a different way to avoid folder name conflicts."),(0,a.yg)("p",null,"We suggest naming them clearly and distinctly, to avoid confusion."),(0,a.yg)("p",null,"At the end of this process, you should have a tree like this:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-shell"},"$ tree ./cluster\n\ncluster/\n\u251c\u2500\u2500 node0\n\u2502\xa0\xa0 \u251c\u2500\u2500 charon-enr-private-key\n\u2502\xa0\xa0 \u251c\u2500\u2500 cluster-lock.json\n\u2502\xa0\xa0 \u251c\u2500\u2500 deposit-data.json\n\u2502\xa0\xa0 \u2514\u2500\u2500 validator_keys\n\u2502\xa0\xa0     \u251c\u2500\u2500 keystore-0.json\n\u2502\xa0\xa0     \u251c\u2500\u2500 keystore-0.txt\n\u2502\xa0\xa0     \u251c\u2500\u2500 keystore-1.json\n\u2502\xa0\xa0     \u2514\u2500\u2500 keystore-1.txt\n\u251c\u2500\u2500 node1\n\u2502\xa0\xa0 \u251c\u2500\u2500 charon-enr-private-key\n\u2502\xa0\xa0 \u251c\u2500\u2500 cluster-lock.json\n\u2502\xa0\xa0 \u251c\u2500\u2500 deposit-data.json\n\u2502\xa0\xa0 \u2514\u2500\u2500 validator_keys\n\u2502\xa0\xa0     \u251c\u2500\u2500 keystore-0.json\n\u2502\xa0\xa0     \u251c\u2500\u2500 keystore-0.txt\n\u2502\xa0\xa0     \u251c\u2500\u2500 keystore-1.json\n\u2502\xa0\xa0     \u2514\u2500\u2500 keystore-1.txt\n\u251c\u2500\u2500 node2\n\u2502\xa0\xa0 \u251c\u2500\u2500 charon-enr-private-key\n\u2502\xa0\xa0 \u251c\u2500\u2500 cluster-lock.json\n\u2502\xa0\xa0 \u251c\u2500\u2500 deposit-data.json\n\u2502\xa0\xa0 \u2514\u2500\u2500 validator_keys\n\u2502\xa0\xa0     \u251c\u2500\u2500 keystore-0.json\n\u2502\xa0\xa0     \u251c\u2500\u2500 keystore-0.txt\n\u2502\xa0\xa0     \u251c\u2500\u2500 keystore-1.json\n\u2502\xa0\xa0     \u2514\u2500\u2500 keystore-1.txt\n...\n\u2514\u2500\u2500 nodeN\n    \u251c\u2500\u2500 charon-enr-private-key\n    \u251c\u2500\u2500 cluster-lock.json\n    \u251c\u2500\u2500 deposit-data.json\n    \u2514\u2500\u2500 validator_keys\n        \u251c\u2500\u2500 keystore-0.json\n        \u251c\u2500\u2500 keystore-0.txt\n        \u251c\u2500\u2500 keystore-1.json\n        \u2514\u2500\u2500 keystore-1.txt\n")),(0,a.yg)("admonition",{type:"caution"},(0,a.yg)("p",{parentName:"admonition"},"Make sure to never mix the various ",(0,a.yg)("inlineCode",{parentName:"p"},".charon")," directories with one another."),(0,a.yg)("p",{parentName:"admonition"},"Doing so can potentially cause the combination process to fail.")),(0,a.yg)("h2",{id:"step-2-combine-the-key-shares"},"Step 2. Combine the key shares"),(0,a.yg)("p",null,"Run the following command:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-shell"},'# Combine a clusters private keys\ndocker run --rm -v "$(pwd):/opt/charon" obolnetwork/charon:v1.0.0 combine --cluster-dir /opt/charon/cluster --output-dir /opt/charon/combined\n')),(0,a.yg)("p",null,"This command will store the combined keys in the ",(0,a.yg)("inlineCode",{parentName:"p"},"output-dir"),", in this case a folder named ",(0,a.yg)("inlineCode",{parentName:"p"},"combined"),"."),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-shell"},"$ tree combined\ncombined\n\u251c\u2500\u2500 keystore-0.json\n\u251c\u2500\u2500 keystore-0.txt\n\u251c\u2500\u2500 keystore-1.json\n\u2514\u2500\u2500 keystore-1.txt\n")),(0,a.yg)("p",null,"We can verify that the directory names are correct by looking at the lock file:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-shell"},'$ jq .distributed_validators[].distributed_public_key  cluster/node0/cluster-lock.json\n"0x822c5310674f4fc4ec595642d0eab73d01c62b588f467da6f98564f292a975a0ac4c3a10f1b3a00ccc166a28093c2dcd"\n"0x8929b4c8af2d2eb222d377cac2aa7be950e71d2b247507d19b5fdec838f0fb045ea8910075f191fd468da4be29690106"\n')),(0,a.yg)("admonition",{type:"info"},(0,a.yg)("p",{parentName:"admonition"},"The generated private keys are in the standard ",(0,a.yg)("a",{parentName:"p",href:"https://github.com/ethereum/ercs/blob/master/ERCS/erc-2335.md"},"EIP-2335")," format, and can be imported in any Ethereum validator client that supports it."),(0,a.yg)("p",{parentName:"admonition"},"Ensure your distributed validator cluster is completely shut down before starting a replacement validator or you are likely to be slashed.")))}y.isMDXComponent=!0}}]);