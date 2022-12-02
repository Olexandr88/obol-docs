"use strict";(self.webpackChunkobol_docs=self.webpackChunkobol_docs||[]).push([[5275],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return h}});var a=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,o=function(e,t){if(null==e)return{};var r,a,o={},n=Object.keys(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=a.createContext({}),p=function(e){var t=a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var r=e.components,o=e.mdxType,n=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=p(r),h=o,m=d["".concat(s,".").concat(h)]||d[h]||c[h]||n;return r?a.createElement(m,i(i({ref:t},u),{},{components:r})):a.createElement(m,i({ref:t},u))}));function h(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var n=r.length,i=new Array(n);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var p=2;p<n;p++)i[p]=r[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},5839:function(e,t,r){r.r(t),r.d(t,{assets:function(){return u},contentTitle:function(){return s},default:function(){return h},frontMatter:function(){return l},metadata:function(){return p},toc:function(){return c}});var a=r(83117),o=r(80102),n=(r(67294),r(3905)),i=["components"],l={sidebar_position:1,description:"A leader/creator creates a cluster configuration to be shared with operators"},s="Creator & Leader Journey",p={unversionedId:"int/quickstart/group/quickstart-group-leader-creator",id:"int/quickstart/group/quickstart-group-leader-creator",title:"Creator & Leader Journey",description:"A leader/creator creates a cluster configuration to be shared with operators",source:"@site/docs/int/quickstart/group/quickstart-group-leader-creator.md",sourceDirName:"int/quickstart/group",slug:"/int/quickstart/group/quickstart-group-leader-creator",permalink:"/docs/next/int/quickstart/group/quickstart-group-leader-creator",draft:!1,editUrl:"https://github.com/ObolNetwork/obol-docs/edit/main/docs/int/quickstart/group/quickstart-group-leader-creator.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,description:"A leader/creator creates a cluster configuration to be shared with operators"},sidebar:"tutorialSidebar",previous:{title:"Run a cluster with others",permalink:"/docs/next/int/quickstart/group/"},next:{title:"Operator Journey",permalink:"/docs/next/int/quickstart/group/quickstart-group-operator"}},u={},c=[{value:"Overview Video",id:"overview-video",level:2},{value:"Pre-requisites",id:"pre-requisites",level:2},{value:"Step 1. Collect Ethereum addresses of the cluster operators",id:"step-1-collect-ethereum-addresses-of-the-cluster-operators",level:2},{value:"Step 2. Create and back up a private key for charon",id:"step-2-create-and-back-up-a-private-key-for-charon",level:2},{value:"Step 3. Create the DKG configuration file and distribute it to cluster operators",id:"step-3-create-the-dkg-configuration-file-and-distribute-it-to-cluster-operators",level:2}],d={toc:c};function h(e){var t=e.components,l=(0,o.Z)(e,i);return(0,n.kt)("wrapper",(0,a.Z)({},d,l,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"creator--leader-journey"},"Creator & Leader Journey"),(0,n.kt)("admonition",{type:"caution"},(0,n.kt)("p",{parentName:"admonition"},"Charon is in an early alpha state and is not ready to be run on mainnet")),(0,n.kt)("p",null,"The following instructions aim to assist the leader or creator of a group of users coordinating together to create a distributed validator cluster. There can only be 1 leader or creator per cluster."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"In the ",(0,n.kt)("strong",{parentName:"li"},"Leader")," case, the person creating the cluster ",(0,n.kt)("em",{parentName:"li"},"will")," be a node operator in the cluster. "),(0,n.kt)("li",{parentName:"ul"},"In the ",(0,n.kt)("strong",{parentName:"li"},"Creator")," case, the person creating the cluster ",(0,n.kt)("em",{parentName:"li"},"will not")," be a node operator in the cluster.")),(0,n.kt)("h2",{id:"overview-video"},"Overview Video"),(0,n.kt)("p",{align:"center"},(0,n.kt)("iframe",{width:"560",height:"315",src:"https://www.youtube.com/embed/OK6WE8te33Q",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0})),(0,n.kt)("h2",{id:"pre-requisites"},"Pre-requisites"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Ensure you have ",(0,n.kt)("a",{parentName:"li",href:"https://docs.docker.com/engine/install/"},"docker")," installed."),(0,n.kt)("li",{parentName:"ul"},"Ensure you have ",(0,n.kt)("a",{parentName:"li",href:"https://git-scm.com/downloads"},"git")," installed. "),(0,n.kt)("li",{parentName:"ul"},"Make sure ",(0,n.kt)("inlineCode",{parentName:"li"},"docker")," is running before executing the commands below.")),(0,n.kt)("h2",{id:"step-1-collect-ethereum-addresses-of-the-cluster-operators"},"Step 1. Collect Ethereum addresses of the cluster operators"),(0,n.kt)("p",null,"Before starting the cluster creation, you will need to collect one Ethereum address per operator in the cluster. They will need to be able to sign messages through metamask with this address. Broader wallet support will be added in future. "),(0,n.kt)("h2",{id:"step-2-create-and-back-up-a-private-key-for-charon"},"Step 2. Create and back up a private key for charon"),(0,n.kt)("admonition",{type:"info"},(0,n.kt)("p",{parentName:"admonition"},"This next step is only needed if you will be the ",(0,n.kt)("strong",{parentName:"p"},"Leader")," of your cluster. If you intend to only be a ",(0,n.kt)("strong",{parentName:"p"},"Creator")," you can move on to ",(0,n.kt)("a",{parentName:"p",href:"#step-3-create-the-dkg-configuration-file-and-distributes-it-to-cluster-operators"},"Step 3"),".")),(0,n.kt)("p",null,"In order to prepare for a distributed key generation ceremony, you need to create an ",(0,n.kt)("a",{parentName:"p",href:"/docs/next/int/faq/errors#enrs-keys"},"ENR")," for your charon client. Operators in your cluster will also need to do this step, as per their ",(0,n.kt)("a",{parentName:"p",href:"./quickstart-group-operator#step-2-create-and-back-up-a-private-key-for-charon"},"quickstart"),". This ENR is a public/private key pair, and allows the other charon clients in the DKG to identify and connect to your node."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sh"},'# Clone this repo\ngit clone https://github.com/ObolNetwork/charon-distributed-validator-node.git\n\n# Change directory\ncd charon-distributed-validator-node\n\n# Create your charon ENR private key, this will create a charon-enr-private-key file in the .charon directory\ndocker run --rm -v "$(pwd):/opt/charon" obolnetwork/charon:v0.12.0 create enr\n')),(0,n.kt)("p",null,"You should expect to see a console output like"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"Created ENR private key: .charon/charon-enr-private-key\nenr:-JG4QGQpV4qYe32QFUAbY1UyGNtNcrVMip83cvJRhw1brMslPeyELIz3q6dsZ7GblVaCjL_8FKQhF6Syg-O_kIWztimGAYHY5EvPgmlkgnY0gmlwhH8AAAGJc2VjcDI1NmsxoQKzMe_GFPpSqtnYl-mJr8uZAUtmkqccsAx7ojGmFy-FY4N0Y3CCDhqDdWRwgg4u\n")),(0,n.kt)("admonition",{type:"caution"},(0,n.kt)("p",{parentName:"admonition"},"Please make sure to create a backup of the private key at ",(0,n.kt)("inlineCode",{parentName:"p"},".charon/charon-enr-private-key"),". Be careful not to commit it to git! ",(0,n.kt)("strong",{parentName:"p"},"If you lose this file you won't be able to take part in the DKG ceremony and start the DV cluster successfully."))),(0,n.kt)("h2",{id:"step-3-create-the-dkg-configuration-file-and-distribute-it-to-cluster-operators"},"Step 3. Create the DKG configuration file and distribute it to cluster operators"),(0,n.kt)("p",null,"You will prepare the configuration file for the distributed key generation ceremony using the launchpad."),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Go to the ",(0,n.kt)("a",{parentName:"p",href:"https://goerli.launchpad.obol.tech"},"DV Launchpad")," ")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Connect your wallet"),(0,n.kt)("p",{parentName:"li"},(0,n.kt)("img",{alt:"Connect your Wallet",src:r(26874).Z,width:"2842",height:"1800"}))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Select ",(0,n.kt)("inlineCode",{parentName:"p"},"Create a Cluster with a group")," then ",(0,n.kt)("inlineCode",{parentName:"p"},"Get Started"),"."),(0,n.kt)("p",{parentName:"li"},(0,n.kt)("img",{alt:"Get Started",src:r(23411).Z,width:"2880",height:"1298"}))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Follow the flow and accept the advisories.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Configure the Cluster "),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Input the ",(0,n.kt)("inlineCode",{parentName:"li"},"Cluster Name")," & ",(0,n.kt)("inlineCode",{parentName:"li"},"Cluster Size")," (i.e. number of operators in the cluster). The threshold for the cluster to operate sucessfully will update automatically."),(0,n.kt)("li",{parentName:"ul"},"\u26a0\ufe0f Leave the ",(0,n.kt)("inlineCode",{parentName:"li"},"Non-Operator")," toggle off if you are a ",(0,n.kt)("strong",{parentName:"li"},"Leader")," and will participate in the cluster. Turn the toggle on if you are a ",(0,n.kt)("strong",{parentName:"li"},"Creator")," and won't participate."),(0,n.kt)("li",{parentName:"ul"},"Input the Ethereum addresses for each operator collected during ",(0,n.kt)("a",{parentName:"li",href:"#step-1-collect-ethereum-addresses-of-the-cluster-operators"},"step 1"),"."),(0,n.kt)("li",{parentName:"ul"},"Select the desired amount of validators (32 ETH each) the cluster will run."),(0,n.kt)("li",{parentName:"ul"},"Paste your ",(0,n.kt)("inlineCode",{parentName:"li"},"ENR")," generated at ",(0,n.kt)("a",{parentName:"li",href:"#step-2-create-and-back-up-a-private-key-for-charon"},"Step 2"),"."),(0,n.kt)("li",{parentName:"ul"},"Input the ",(0,n.kt)("inlineCode",{parentName:"li"},"Withdrawal Address")," to receive validator principal and consensus rewards at exit."),(0,n.kt)("li",{parentName:"ul"},"Input the ",(0,n.kt)("inlineCode",{parentName:"li"},"Fee Recipient Address")," to receive transation fees from block proposals. "),(0,n.kt)("li",{parentName:"ul"},"Create Cluster Configuration")),(0,n.kt)("p",{parentName:"li"},(0,n.kt)("img",{alt:"Create Group",src:r(77475).Z,width:"2616",height:"6184"}))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Review, Confirm and Sign the following with your wallet"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"The config hash. This is a hashed representation of all of the details for this cluster. "),(0,n.kt)("li",{parentName:"ul"},"If you are a ",(0,n.kt)("strong",{parentName:"li"},"Leader"),", you will also have to sign your ",(0,n.kt)("inlineCode",{parentName:"li"},"ENR"),". This signature authorises the key represented by this ENR to act on your behalf in the cluster. "))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Share your cluster invite link with the operators. Following the link will show you a screen waiting for other operators to accept the configuration you created."),(0,n.kt)("p",{parentName:"li"},(0,n.kt)("img",{alt:"Invite Operators",src:r(3075).Z,width:"1604",height:"1478"})))),(0,n.kt)("p",null,"\ud83d\udc49 If you are a ",(0,n.kt)("strong",{parentName:"p"},"Leader"),", you now have to follow the the ",(0,n.kt)("a",{parentName:"p",href:"./quickstart-group-operator"},(0,n.kt)("strong",{parentName:"a"},"Operator")," Journey"),". If you are a ",(0,n.kt)("strong",{parentName:"p"},"Creator"),", your journey ends here and you can monitor with the link whether the operators are confirming their agreement to the cluster by signing their approval."))}h.isMDXComponent=!0},26874:function(e,t,r){t.Z=r.p+"assets/images/Guide01-d53467f3ff24bc1fe1e6b90c8f181df2.png"},23411:function(e,t,r){t.Z=r.p+"assets/images/Guide02-07714c655844eeb2b6805bd87a387233.png"},77475:function(e,t,r){t.Z=r.p+"assets/images/Guide03-42559630a410769d2b8c6d9635ede640.png"},3075:function(e,t,r){t.Z=r.p+"assets/images/Guide04-f9db7d75efeda34396609e991e2840b6.png"}}]);