"use strict";(self.webpackChunkmy_blog=self.webpackChunkmy_blog||[]).push([[806],{4661:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>l,contentTitle:()=>o,default:()=>h,frontMatter:()=>i,metadata:()=>r,toc:()=>c});var n=t(4848),s=t(8453);const i={title:"Introduction to AWS API Gateway",description:"Learn about AWS API Gateway and how to use it with a hands-on example deploying an Express.js application.",author:"Sarang Padalkar",author_url:"https://github.com/sarangspadalkar",author_image_url:"https://github.com/sarangspadalkar.png",tags:["aws","api-gateway"]},o="Introduction to AWS API Gateway",r={permalink:"/my-blog/blog/2024/08/28/introduction-to-api-gateway",editUrl:"https://github.com/sarangspadalkar/my-blog/edit/main/blog/blog/2024-08-28-introduction-to-api-gateway.md",source:"@site/blog/2024-08-28-introduction-to-api-gateway.md",title:"Introduction to AWS API Gateway",description:"Learn about AWS API Gateway and how to use it with a hands-on example deploying an Express.js application.",date:"2024-08-28T00:00:00.000Z",tags:[{inline:!0,label:"aws",permalink:"/my-blog/blog/tags/aws"},{inline:!0,label:"api-gateway",permalink:"/my-blog/blog/tags/api-gateway"}],readingTime:2.955,hasTruncateMarker:!1,authors:[{name:"Sarang Padalkar",url:"https://github.com/sarangspadalkar",imageURL:"https://github.com/sarangspadalkar.png",key:null,page:null}],frontMatter:{title:"Introduction to AWS API Gateway",description:"Learn about AWS API Gateway and how to use it with a hands-on example deploying an Express.js application.",author:"Sarang Padalkar",author_url:"https://github.com/sarangspadalkar",author_image_url:"https://github.com/sarangspadalkar.png",tags:["aws","api-gateway"]},unlisted:!1,nextItem:{title:"Hosting a Static Webpage on AWS S3",permalink:"/my-blog/blog/2024/08/14/host-static-website-on-aws-s3"}},l={authorsImageUrls:[void 0]},c=[{value:"Key Features of AWS API Gateway",id:"key-features-of-aws-api-gateway",level:2},{value:"API Gateway types",id:"api-gateway-types",level:2},{value:"API Endpoint Types",id:"api-endpoint-types",level:2},{value:"API Gateway Deploy &quot;Stages&quot;",id:"api-gateway-deploy-stages",level:2}];function d(e){const a={a:"a",h2:"h2",img:"img",li:"li",p:"p",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(a.p,{children:"AWS API Gateway is a fully managed service that makes it easy for developers to create, publish and manage APIs at any scale."}),"\n",(0,n.jsx)(a.p,{children:'It acts as a "front door" for applications to access data, business logic, or functionality from backend services, such as workloads running on Amazon EC2, AWS Lambda, or any web application. By using API Gateway, we can expose RESTful APIs, WebSocket APIs, and HTTP APIs to their clients.'}),"\n",(0,n.jsx)(a.p,{children:(0,n.jsx)(a.img,{alt:"API Gateway Diagram",src:t(5472).A+"",width:"736",height:"439"})}),"\n",(0,n.jsx)(a.h2,{id:"key-features-of-aws-api-gateway",children:"Key Features of AWS API Gateway"}),"\n",(0,n.jsxs)(a.ul,{children:["\n",(0,n.jsxs)(a.li,{children:["\n",(0,n.jsxs)(a.p,{children:[(0,n.jsx)(a.strong,{children:"Scalability"}),": AWS API Gateway automatically scales to handle traffic levels."]}),"\n"]}),"\n",(0,n.jsxs)(a.li,{children:["\n",(0,n.jsxs)(a.p,{children:[(0,n.jsx)(a.strong,{children:"Security"}),": API Gateway provides built-in support for authorization and access control using AWS IAM, Amazon Cognito, and Lambda authorizers (custom authorization middleware logic). It also supports SSL termination and API key management."]}),"\n"]}),"\n",(0,n.jsxs)(a.li,{children:["\n",(0,n.jsxs)(a.p,{children:[(0,n.jsx)(a.strong,{children:"Monitoring and Analytics"}),": With Amazon CloudWatch integration, you can monitor your API's metrics: latency, error rates, and request counts, and set up alarms to notify you of potential issues."]}),"\n"]}),"\n",(0,n.jsxs)(a.li,{children:["\n",(0,n.jsxs)(a.p,{children:[(0,n.jsx)(a.strong,{children:"Throttling and Caching"}),": API Gateway allows you to configure request throttling and caching to improve the performance and reliability of your APIs."]}),"\n"]}),"\n",(0,n.jsxs)(a.li,{children:["\n",(0,n.jsxs)(a.p,{children:[(0,n.jsx)(a.strong,{children:"Versioning and Staging"}),": You can manage different versions of your APIs and deploy them to different stages (e.g., development, staging, production) with ease."]}),"\n"]}),"\n",(0,n.jsxs)(a.li,{children:["\n",(0,n.jsxs)(a.p,{children:[(0,n.jsx)(a.strong,{children:"Integration with AWS Services"}),": API Gateway seamlessly integrates with other AWS services like Lambda, DynamoDB, S3, and more, making it a powerful tool for building serverless architectures."]}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(a.h2,{id:"api-gateway-types",children:"API Gateway types"}),"\n",(0,n.jsxs)(a.ul,{children:["\n",(0,n.jsxs)(a.li,{children:["\n",(0,n.jsxs)(a.p,{children:[(0,n.jsx)(a.strong,{children:"HTTP API"}),": HTTP API is a lightweight, low-latency option for creating HTTP-based APIs. It's designed to offer a simpler, faster, and more cost-effective solution compared to REST API. HTTP API can only integrate with AWS Lambda."]}),"\n"]}),"\n",(0,n.jsxs)(a.li,{children:["\n",(0,n.jsxs)(a.p,{children:[(0,n.jsx)(a.strong,{children:"REST API"}),": REST API offers extensive capabilities, including request/response transformation, caching, API keys, and integration with all AWS services. Difference between HTTP vs Rest is given ",(0,n.jsx)(a.a,{href:"https://docs.aws.amazon.com/apigateway/latest/developerguide/http-api-vs-rest.html",children:"here"})]}),"\n"]}),"\n",(0,n.jsxs)(a.li,{children:["\n",(0,n.jsxs)(a.p,{children:[(0,n.jsx)(a.strong,{children:"REST API Private"}),": REST API Private is a variant of the REST API that runs within a Virtual Private Cloud (VPC). It allows you to expose APIs that are only accessible within your VPC, providing an extra layer of security."]}),"\n"]}),"\n",(0,n.jsxs)(a.li,{children:["\n",(0,n.jsxs)(a.p,{children:[(0,n.jsx)(a.strong,{children:"WebSocket API"}),": WebSocket API allows you to build real-time, full-duplex communication applications where the client and server can send messages to each other at any time."]}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(a.h2,{id:"api-endpoint-types",children:"API Endpoint Types"}),"\n",(0,n.jsxs)(a.ul,{children:["\n",(0,n.jsxs)(a.li,{children:["\n",(0,n.jsxs)(a.p,{children:[(0,n.jsx)(a.strong,{children:"Regional Endpoints"}),": These are deployed within a specific AWS region. When you create a regional API endpoint, the API is accessible only within that region, making it ideal for use cases where the API traffic is localized to a specific geographic area. Useful for applications that primarily serve users within a specific geographic region."]}),"\n"]}),"\n",(0,n.jsxs)(a.li,{children:["\n",(0,n.jsxs)(a.p,{children:[(0,n.jsx)(a.strong,{children:"Edge-Optimized Endpoints"}),": These are designed for globally distributed clients. When you create an edge-optimized API, requests are routed through the AWS global network, using Amazon CloudFront to cache and deliver content to users with lower latency. This endpoint type is ideal for APIs that need to serve a global audience with minimal latency, regardless of the user's location."]}),"\n"]}),"\n",(0,n.jsxs)(a.li,{children:["\n",(0,n.jsxs)(a.p,{children:[(0,n.jsx)(a.strong,{children:"Private Endpoints"}),": These are used to create APIs that are accessible only within an Amazon Virtual Private Cloud (VPC). This endpoint type is ideal for internal APIs that should not be exposed to the public internet. Private APIs can be securely accessed from your VPC, on-premises data centers, or through AWS Direct Connect and VPN connections."]}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(a.h2,{id:"api-gateway-deploy-stages",children:'API Gateway Deploy "Stages"'}),"\n",(0,n.jsx)(a.p,{children:"A stage is a named reference to a deployment of your API that allows you to manage and run different versions of your API in parallel. Stages provide a way to organize and isolate your API's environments, such as development, testing, staging, and production."})]})}function h(e={}){const{wrapper:a}={...(0,s.R)(),...e.components};return a?(0,n.jsx)(a,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}},5472:(e,a,t)=>{t.d(a,{A:()=>n});const n=t.p+"assets/images/aws-api-gateway-69b095646140bd7655452f46172f17a6.png"},8453:(e,a,t)=>{t.d(a,{R:()=>o,x:()=>r});var n=t(6540);const s={},i=n.createContext(s);function o(e){const a=n.useContext(i);return n.useMemo((function(){return"function"==typeof e?e(a):{...a,...e}}),[a,e])}function r(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),n.createElement(i.Provider,{value:a},e.children)}}}]);