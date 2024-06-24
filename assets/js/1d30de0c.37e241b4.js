"use strict";(self.webpackChunkobol_docs=self.webpackChunkobol_docs||[]).push([[96187],{15680:(e,t,n)=>{n.d(t,{xA:()=>d,yg:()=>m});var a=n(96540);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),p=c(n),h=o,m=p["".concat(l,".").concat(h)]||p[h]||u[h]||r;return n?a.createElement(m,i(i({ref:t},d),{},{components:n})):a.createElement(m,i({ref:t},d))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[p]="string"==typeof e?e:o,i[1]=s;for(var c=2;c<r;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},76803:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>r,metadata:()=>s,toc:()=>c});var a=n(58168),o=(n(96540),n(15680));const r={sidebar_position:11,description:"DV Deployment best practices, for running an optimal Distributed Validator setup at scale."},i="Deployment Best Practices",s={unversionedId:"advanced/deployment-best-practices",id:"advanced/deployment-best-practices",title:"Deployment Best Practices",description:"DV Deployment best practices, for running an optimal Distributed Validator setup at scale.",source:"@site/docs/advanced/deployment-best-practices.md",sourceDirName:"advanced",slug:"/advanced/deployment-best-practices",permalink:"/docs/next/advanced/deployment-best-practices",draft:!1,editUrl:"https://github.com/ObolNetwork/obol-docs/edit/main/docs/advanced/deployment-best-practices.md",tags:[],version:"current",sidebarPosition:11,frontMatter:{sidebar_position:11,description:"DV Deployment best practices, for running an optimal Distributed Validator setup at scale."},sidebar:"tutorialSidebar",previous:{title:"Self-Host a Relay",permalink:"/docs/next/advanced/self-relay"},next:{title:"Advanced Docker Configs",permalink:"/docs/next/advanced/adv-docker-configs"}},l={},c=[{value:"Hardware Specifications",id:"hardware-specifications",level:2},{value:"Minimum Specs",id:"minimum-specs",level:3},{value:"Recommended Specs for extremely large clusters",id:"recommended-specs-for-extremely-large-clusters",level:3},{value:"Intra-cluster Latency",id:"intra-cluster-latency",level:2},{value:"Node Locations",id:"node-locations",level:2},{value:"Peer Connections",id:"peer-connections",level:2},{value:"Instance Independence",id:"instance-independence",level:2},{value:"Placement of Charon clients",id:"placement-of-charon-clients",level:2},{value:"Node Configuration",id:"node-configuration",level:2},{value:"MEV-Boost Relays",id:"mev-boost-relays",level:2},{value:"Client Diversity",id:"client-diversity",level:2},{value:"Metrics Monitoring",id:"metrics-monitoring",level:2},{value:"Obol Splits",id:"obol-splits",level:2},{value:"Deposit Process",id:"deposit-process",level:2}],d={toc:c},p="wrapper";function u(e){let{components:t,...n}=e;return(0,o.yg)(p,(0,a.A)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.yg)("h1",{id:"deployment-best-practices"},"Deployment Best Practices"),(0,o.yg)("p",null,"The following are a selection of best practices for deploying Distributed Validator Clusters at scale on mainnet."),(0,o.yg)("h2",{id:"hardware-specifications"},"Hardware Specifications"),(0,o.yg)("p",null,"The following specifications are recommended for bare metal machines for clusters intending to run a significant number of mainnet validators:"),(0,o.yg)("h3",{id:"minimum-specs"},"Minimum Specs"),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},"A CPU with 4+ cores, favouring high clock speed over more cores. ( >3.0GHz and higher or a cpubenchmark ",(0,o.yg)("a",{parentName:"li",href:"https://www.cpubenchmark.net/singleThread.html"},"single thread")," score of >2,500)"),(0,o.yg)("li",{parentName:"ul"},"16GB of RAM"),(0,o.yg)("li",{parentName:"ul"},"2TB+ free SSD disk space (for mainnet)"),(0,o.yg)("li",{parentName:"ul"},"10mb/s internet bandwidth")),(0,o.yg)("h3",{id:"recommended-specs-for-extremely-large-clusters"},"Recommended Specs for extremely large clusters"),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},"A CPU with 8+ physical cores, with clock speeds >3.5Ghz"),(0,o.yg)("li",{parentName:"ul"},"32GB+ RAM (depending on the EL+CL clients)"),(0,o.yg)("li",{parentName:"ul"},"4TB+ NVMe storage"),(0,o.yg)("li",{parentName:"ul"},"25mb/s internet bandwidth")),(0,o.yg)("p",null,"An NVMe storage device is ",(0,o.yg)("strong",{parentName:"p"},"highly recommended for optimal performance"),", offering nearly 10x more random read/writes per second than a standard SSD."),(0,o.yg)("p",null,"Inadequate hardware (low-performance virtualized servers and/or slow HDD storage) has been observed to hinder performance, indicating the necessity of provisioning adequate resources. ",(0,o.yg)("strong",{parentName:"p"},"CPU clock speed and Disk throughput+latency are the most important factors for running a performant validator.")),(0,o.yg)("p",null,"Note that the Charon client itself takes less than 1GB of RAM and minimal CPU load. In order to optimize both performance and cost-effectiveness, it is recommended to prioritize physical over virtualized setups. Such configurations typically offer greater performance and minimize overhead associated with virtualization, contributing to improved efficiency and reliability."),(0,o.yg)("p",null,"When constructing a DV cluster, it is important to be conscious of whether a cluster runs across cloud providers or stays within a single provider's private networking. This likely can impact the bandwidth and latency of the connections between nodes, as well as the egress costs of the cluster (Charon has a relatively low communication with its peers, averaging 10s of kb/s in large mainnet clusters). Ideally, bare metal machines in different locations within the same continent and with at least two providers, balances redundancy and performance."),(0,o.yg)("h2",{id:"intra-cluster-latency"},"Intra-cluster Latency"),(0,o.yg)("p",null,"It is recommended to ",(0,o.yg)("strong",{parentName:"p"},"keep peer ping latency below 235 milliseconds for all peers in a cluster"),". Charon should report a consensus duration averaging under 1 second through its prometheus metric ",(0,o.yg)("inlineCode",{parentName:"p"},"core_consensus_duration_seconds_bucket"),' and associated grafana panel titled "Consensus Duration".'),(0,o.yg)("p",null,"In cases where latencies exceed these thresholds, efforts should be made to reduce the physical distance between nodes or optimize Internet Service Provider (ISP) settings accordingly. Ensure all nodes are connecting to one another directly rather than through a relay."),(0,o.yg)("p",null,"For high-scale, performance deployments; inter-peer latency of <25ms is optimal, along with an average consensus duration under 100ms."),(0,o.yg)("h2",{id:"node-locations"},"Node Locations"),(0,o.yg)("p",null,"For optimal performance and high availability, it is recommended to provision machines or virtual machines (VMs) within the same continent. This practice helps minimize potential latency issues ensuring efficient communication and responsiveness. Consider maps of ",(0,o.yg)("a",{parentName:"p",href:"https://www.submarinecablemap.com/"},"undersea internet cables")," when selecting locations across oceans with low latency."),(0,o.yg)("h2",{id:"peer-connections"},"Peer Connections"),(0,o.yg)("p",null,"Charon clients can establish connections with one another in two ways: either through a third publicly accessible server known as ",(0,o.yg)("a",{parentName:"p",href:"/docs/next/charon/charon-cli-reference#host-a-relay"},"a relay")," or directly with one another if they can establish a connection. The former is known as a relay connection and the latter is known as a direct connection."),(0,o.yg)("p",null,"It is important that all nodes in a cluster be directly connected to one another - this can halve the latency between them and reduces bandwidth constraints significantly. Opening Charon\u2019s p2p port (the default is ",(0,o.yg)("inlineCode",{parentName:"p"},"3610"),") to the Internet, or configuring your routers NAT gateway to permit connections to your Charon client, are what are required to facilitate a direct connection between clients."),(0,o.yg)("h2",{id:"instance-independence"},"Instance Independence"),(0,o.yg)("p",null,"Each node in the cluster should have its own independent beacon node (EL+CL) and validator client as well as Charon client. Sharing beacon nodes between the different nodes would potentially impact the fault tolerance of the cluster and as a result should be avoided."),(0,o.yg)("h2",{id:"placement-of-charon-clients"},"Placement of Charon clients"),(0,o.yg)("p",null,"If you wish to divide a Distributed Validator node across multiple physical or virtual machines; locaate the Charon client on the EL/CL machine instead of the VC machine. This setup reduces latency from Charon to the consensus layer, as well as keeping the public-internet connected clients separate from the clients that hold the validator private keys. Be sure to use encrypted communication between your VC and the Charon client, potentially through a cloud-provided network, a self-managed network tunnel, a VPN, a Kubernetes ",(0,o.yg)("a",{parentName:"p",href:"https://kubernetes.io/docs/concepts/extend-kubernetes/compute-storage-net/network-plugins/"},"CNI"),", or other manner. "),(0,o.yg)("h2",{id:"node-configuration"},"Node Configuration"),(0,o.yg)("p",null,"Cluster sizes that allow for Byzantine Fault Tolerance are recommended as they are safer than clusters with simply Crash Fault Tolerance (See this guide for reference - ",(0,o.yg)("a",{parentName:"p",href:"../charon/cluster-configuration#cluster-size-and-resilience"},"Cluster Size and Resilience"),")."),(0,o.yg)("h2",{id:"mev-boost-relays"},"MEV-Boost Relays"),(0,o.yg)("p",null,"MEV relays are configured at the Consensus Layer or MEV-boost client level. Refer to our ",(0,o.yg)("a",{parentName:"p",href:"/docs/next/advanced/quickstart-builder-api"},"guide")," to ensure all necessary configuration has been applied to your clients. As with all validators, low latency during proposal opportunities is extremely important. By default, MEV-Boost waits for all configured relays to return a bid, or will timeout if any have not returned a bid within 950ms. This default timeout is generally too slow for a distributed cluster (think of this time as additive to the time it takes the cluster to come to consensus, both of which need to happen within a 2 second window for optimal proposal broadcasting). It is likely better to only list relays that are located geographically near your node, so that once all relays respond (e.g. in < 50ms) your cluster will move forward with the proposal."),(0,o.yg)("h2",{id:"client-diversity"},"Client Diversity"),(0,o.yg)("p",null,"The clusters should consist of a combination of your preferred consensus, execution, and validator clients. It is recommended to include a combination of multiple clients in order to have a healthy client diversity within the cluster, ideally, if any single client type fails, it should be less than the fault tolerance of the cluster, and the validators should stay online/not do anything slashable."),(0,o.yg)("p",null,"Remote signers can be included as well, such as Web3signer or Dirk. A diversity of private key infrastructure setups further reduces the risk of total key compromise."),(0,o.yg)("p",null,"Tested client combinations can be found in the ",(0,o.yg)("a",{parentName:"p",href:"https://github.com/ObolNetwork/charon/releases"},"release notes")," for each Charon version."),(0,o.yg)("h2",{id:"metrics-monitoring"},"Metrics Monitoring"),(0,o.yg)("p",null,"As requested by Obol Labs, node operators can push ",(0,o.yg)("a",{parentName:"p",href:"/docs/next/advanced/obol-monitoring"},"standard monitoring")," (Prometheus) and logging (Loki) data to Obol Labs' core team's cloud infrastructure for in-depth analysis of performance data and to assist during potential issues that may arise. Our recommendation for operators is to independently store information on their node health over the course of the validator lifecycle as well as any information on validator performance that they collect during the normal life cycle of a validator."),(0,o.yg)("h2",{id:"obol-splits"},"Obol Splits"),(0,o.yg)("p",null,"Leveraging ",(0,o.yg)("a",{parentName:"p",href:"/docs/next/sc/introducing-obol-splits"},"Obol Splits")," smart contracts allows for non-custodial fund handling and allows for net customer payouts in an ongoing manner. Obol Splits ensure no commingling of funds across customers, and maintain full non-custodial integrity. Read more about Obol Splits ",(0,o.yg)("a",{parentName:"p",href:"/docs/next/faq/general#obol-splits"},"here"),"."),(0,o.yg)("h2",{id:"deposit-process"},"Deposit Process"),(0,o.yg)("p",null,"Deposit processes can be done via an automated script. This can be used for DV clusters until they reach the desired number of validators."),(0,o.yg)("p",null,"It is important to allow time for the validators to be activated (usually <24 hours)."),(0,o.yg)("p",null,"Consider using batching smart contracts to reduce the gas cost of a script, but take caution in their integration not to make an invalid deposit."))}u.isMDXComponent=!0}}]);