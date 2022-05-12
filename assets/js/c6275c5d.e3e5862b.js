"use strict";(self.webpackChunkobol_docs=self.webpackChunkobol_docs||[]).push([[3034],{3905:function(e,t,i){i.d(t,{Zo:function(){return u},kt:function(){return h}});var r=i(7294);function n(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function a(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,r)}return i}function o(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?a(Object(i),!0).forEach((function(t){n(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):a(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function l(e,t){if(null==e)return{};var i,r,n=function(e,t){if(null==e)return{};var i,r,n={},a=Object.keys(e);for(r=0;r<a.length;r++)i=a[r],t.indexOf(i)>=0||(n[i]=e[i]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)i=a[r],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(n[i]=e[i])}return n}var s=r.createContext({}),d=function(e){var t=r.useContext(s),i=t;return e&&(i="function"==typeof e?e(t):o(o({},t),e)),i},u=function(e){var t=d(e.components);return r.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var i=e.components,n=e.mdxType,a=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=d(i),h=n,m=p["".concat(s,".").concat(h)]||p[h]||c[h]||a;return i?r.createElement(m,o(o({ref:t},u),{},{components:i})):r.createElement(m,o({ref:t},u))}));function h(e,t){var i=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=i.length,o=new Array(a);o[0]=p;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:n,o[1]=l;for(var d=2;d<a;d++)o[d]=i[d];return r.createElement.apply(null,o)}return r.createElement.apply(null,i)}p.displayName="MDXCreateElement"},3976:function(e,t,i){i.r(t),i.d(t,{assets:function(){return u},contentTitle:function(){return s},default:function(){return h},frontMatter:function(){return l},metadata:function(){return d},toc:function(){return c}});var r=i(7462),n=i(3366),a=(i(7294),i(3905)),o=["components"],l={sidebar_position:3,description:"Some of the key terms in the field of Distributed Validator Technology"},s="Key concepts",d={unversionedId:"int/key-concepts",id:"int/key-concepts",title:"Key concepts",description:"Some of the key terms in the field of Distributed Validator Technology",source:"@site/docs/int/key-concepts.md",sourceDirName:"int",slug:"/int/key-concepts",permalink:"/docs/next/int/key-concepts",draft:!1,editUrl:"https://github.com/obolnetwork/obol-docs/edit/main/website/docs/int/key-concepts.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3,description:"Some of the key terms in the field of Distributed Validator Technology"},sidebar:"tutorialSidebar",previous:{title:"Overview",permalink:"/docs/next/int/Overview"},next:{title:"Working groups",permalink:"/docs/next/int/working-groups"}},u={},c=[{value:"Distributed validator",id:"distributed-validator",level:2},{value:"Distributed Validator Node",id:"distributed-validator-node",level:2},{value:"Execution Client",id:"execution-client",level:3},{value:"Consensus Client",id:"consensus-client",level:3},{value:"Distributed Validator Client",id:"distributed-validator-client",level:3},{value:"Validator Client",id:"validator-client",level:3},{value:"Distributed Validator Cluster",id:"distributed-validator-cluster",level:2},{value:"Distributed Validator Key",id:"distributed-validator-key",level:3},{value:"Distributed Validator Key Share",id:"distributed-validator-key-share",level:3},{value:"Distributed Validator Key Generation Ceremony",id:"distributed-validator-key-generation-ceremony",level:3}],p={toc:c};function h(e){var t=e.components,l=(0,n.Z)(e,o);return(0,a.kt)("wrapper",(0,r.Z)({},p,l,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"key-concepts"},"Key concepts"),(0,a.kt)("p",null,"This page outlines a number of the key concepts behind the various technologies that Obol is developing."),(0,a.kt)("h2",{id:"distributed-validator"},"Distributed validator"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"A Distributed Validator",src:i(5629).Z,width:"960",height:"540"})),(0,a.kt)("p",null,"A distributed validator is an Ethereum proof-of-stake validator that runs on more than one node/machine. This functionality is provided by ",(0,a.kt)("strong",{parentName:"p"},"Distributed Validator Technology")," (DVT)."),(0,a.kt)("p",null,"Distributed validator technology removes the problem of single-point failure. Should <33% of the participating nodes in the DVT cluster go offline, the remaining active nodes are still able to come to consensus on what to sign and produce valid signatures for their staking duties. This is known as Active/Active redundancy, a common pattern for minimizing downtime in mission critical systems.\n\u200b"),(0,a.kt)("h2",{id:"distributed-validator-node"},"Distributed Validator Node"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"A Distributed Validator Node",src:i(9600).Z,width:"2600",height:"1460"})),(0,a.kt)("p",null,"A distributed validator node is the set of clients an operator needs to configure and run to fulfil the duties of a Distributed Validator Operator. An operator may also run redundant execution and consensus clients, an execution payload relayer like ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/flashbots/mev-boost"},"mev-boost"),", or other monitoring or telemetry services on the same hardware to ensure optimal performance."),(0,a.kt)("p",null,"In the above example, the stack includes geth, lighthouse, charon and lodestar."),(0,a.kt)("h3",{id:"execution-client"},"Execution Client"),(0,a.kt)("p",null,"An execution client (formerly known as an Eth1 client) specialises in running the EVM and managing the transaction pool for the Ethereum network. These clients provide execution payloads to consensus clients for inclusion into blocks. "),(0,a.kt)("p",null,"Examples of execution clients include:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://geth.ethereum.org/"},"Go-Ethereum")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://docs.nethermind.io/nethermind/"},"Nethermind")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/ledgerwatch/erigon"},"Erigon"))),(0,a.kt)("h3",{id:"consensus-client"},"Consensus Client"),(0,a.kt)("p",null,"A consensus client's duty is to run the proof of stake consensus layer of Ethereum, often referred to as the beacon chain."),(0,a.kt)("p",null,"Examples of Consensus clients include:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://docs.prylabs.network/docs/how-prysm-works/beacon-node"},"Prysm")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://docs.teku.consensys.net/en/stable/"},"Teku")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://lighthouse-book.sigmaprime.io/api-bn.html"},"Lighthouse")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://nimbus.guide/"},"Nimbus")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/ChainSafe/lodestar"},"Lodestar"))),(0,a.kt)("h3",{id:"distributed-validator-client"},"Distributed Validator Client"),(0,a.kt)("p",null,"A distributed validator client intercepts the validator client \u2194 consensus client communication flow over the ",(0,a.kt)("a",{parentName:"p",href:"https://ethereum.github.io/beacon-APIs/#/ValidatorRequiredApi"},"standardised REST API"),", and focuses on two core duties."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Coming to consensus on a candidate duty for all validators to sign"),(0,a.kt)("li",{parentName:"ul"},"Combining signatures from all validators into a distributed validator signature")),(0,a.kt)("p",null,"The only example of a distributed validator client built with a non-custodial middleware architecture to date is ",(0,a.kt)("a",{parentName:"p",href:"/docs/next/dv/introducing-charon"},"charon"),"."),(0,a.kt)("h3",{id:"validator-client"},"Validator Client"),(0,a.kt)("p",null,"A validator client is a piece of code that operates one or more Ethereum validators."),(0,a.kt)("p",null,"Examples of validator clients include:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://www.attestant.io/posts/introducing-vouch/"},"Vouch")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://docs.prylabs.network/docs/how-prysm-works/prysm-validator-client/"},"Prysm")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://docs.teku.consensys.net/en/stable/"},"Teku")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://lighthouse-book.sigmaprime.io/api-bn.html"},"Lighthouse"))),(0,a.kt)("h2",{id:"distributed-validator-cluster"},"Distributed Validator Cluster"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"A Distributed Validator Cluster",src:i(1267).Z,width:"2598",height:"1458"})),(0,a.kt)("p",null,"A distributed validator cluster is a collection of distributed validator nodes connected together to service a set of distributed validators generated during a DVK ceremony."),(0,a.kt)("h3",{id:"distributed-validator-key"},"Distributed Validator Key"),(0,a.kt)("p",null,"A distributed validator key is a group of BLS private keys, that together operate as a threshold key for participating in proof of stake consensus with."),(0,a.kt)("h3",{id:"distributed-validator-key-share"},"Distributed Validator Key Share"),(0,a.kt)("p",null,"One piece of the distributed validator private key."),(0,a.kt)("h3",{id:"distributed-validator-key-generation-ceremony"},"Distributed Validator Key Generation Ceremony"),(0,a.kt)("p",null,"To achieve fault tolerance in a distributed validator, the individual private key shares need to be generated together. Rather than have a trusted dealer produce a private key, split it and distribute it, the preferred approach is to never construct the full private key at any point, by having each operator in the distributed validator cluster participate in what is known as a Distributed Key Generation ceremony. "),(0,a.kt)("p",null,"A distributed validator key generation ceremony is a type of DKG ceremony. A DVK ceremony produces signed validator deposit and exit data, along with all of the validator key shares and their associated metadata."))}h.isMDXComponent=!0},5629:function(e,t,i){t.Z=i.p+"assets/images/WhatIsADistributedValidator-1d68c966ef7f4693794521a99de78040.png"},1267:function(e,t,i){t.Z=i.p+"assets/images/WhatIsADistributedValidatorCluster-08b5c5e2ec95891fbde83f064babb5e0.png"},9600:function(e,t,i){t.Z=i.p+"assets/images/WhatIsADistributedValidatorNode-44bd20b3e4c9af9907dd4f841f6d0c1a.png"}}]);