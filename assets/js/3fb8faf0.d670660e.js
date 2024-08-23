"use strict";(self.webpackChunkmy_blog=self.webpackChunkmy_blog||[]).push([[471],{180:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>r,contentTitle:()=>l,default:()=>d,frontMatter:()=>o,metadata:()=>a,toc:()=>c});var n=s(4848),i=s(8453);const o={title:"Hosting a Static Webpage on AWS S3",author:"Sarang Padalkar",author_url:"https://github.com/sarangspadalkar",author_image_url:"https://github.com/sarangspadalkar.png",tags:["aws","s3","static website","hosting"]},l=void 0,a={permalink:"/my-blog/blog/2024/08/14/host-static-website-on-aws-s3",editUrl:"https://github.com/sarangspadalkar/my-blog/edit/main/blog/blog/2024-08-14-host-static-website-on-aws-s3.md",source:"@site/blog/2024-08-14-host-static-website-on-aws-s3.md",title:"Hosting a Static Webpage on AWS S3",description:"In this tutorial, we'll walk through the steps to host a static website on AWS S3. AWS S3 (Simple Storage Service) is an object storage service that offers scalability, data availability, security, and performance. It's a great option for hosting static websites.",date:"2024-08-14T00:00:00.000Z",tags:[{inline:!0,label:"aws",permalink:"/my-blog/blog/tags/aws"},{inline:!0,label:"s3",permalink:"/my-blog/blog/tags/s-3"},{inline:!0,label:"static website",permalink:"/my-blog/blog/tags/static-website"},{inline:!0,label:"hosting",permalink:"/my-blog/blog/tags/hosting"}],readingTime:1.79,hasTruncateMarker:!1,authors:[{name:"Sarang Padalkar",url:"https://github.com/sarangspadalkar",imageURL:"https://github.com/sarangspadalkar.png",key:null,page:null}],frontMatter:{title:"Hosting a Static Webpage on AWS S3",author:"Sarang Padalkar",author_url:"https://github.com/sarangspadalkar",author_image_url:"https://github.com/sarangspadalkar.png",tags:["aws","s3","static website","hosting"]},unlisted:!1},r={authorsImageUrls:[void 0]},c=[{value:"Step 1: Create an S3 Bucket",id:"step-1-create-an-s3-bucket",level:2},{value:"Step 2: Upload Your Website Files",id:"step-2-upload-your-website-files",level:2},{value:"Step 3: Configure the Bucket for Static Website Hosting",id:"step-3-configure-the-bucket-for-static-website-hosting",level:2},{value:"Step 4: Set Bucket Policy to Make the Website Public",id:"step-4-set-bucket-policy-to-make-the-website-public",level:2}];function h(e){const t={a:"a",code:"code",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",...(0,i.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.p,{children:"In this tutorial, we'll walk through the steps to host a static website on AWS S3. AWS S3 (Simple Storage Service) is an object storage service that offers scalability, data availability, security, and performance. It's a great option for hosting static websites."}),"\n",(0,n.jsx)(t.h2,{id:"step-1-create-an-s3-bucket",children:"Step 1: Create an S3 Bucket"}),"\n",(0,n.jsx)(t.p,{children:"First, you need to create an S3 bucket where your website files will be stored."}),"\n",(0,n.jsxs)(t.ol,{children:["\n",(0,n.jsxs)(t.li,{children:["Log in to the ",(0,n.jsx)(t.a,{href:"https://aws.amazon.com/",children:"AWS Management Console"}),"."]}),"\n",(0,n.jsxs)(t.li,{children:["Navigate to the ",(0,n.jsx)(t.strong,{children:"S3"})," service."]}),"\n",(0,n.jsxs)(t.li,{children:["Click on ",(0,n.jsx)(t.strong,{children:"Create bucket"}),"."]}),"\n",(0,n.jsxs)(t.li,{children:["Provide a unique name for your bucket (e.g., ",(0,n.jsx)(t.code,{children:"my-static-website"}),")."]}),"\n",(0,n.jsx)(t.li,{children:"Select a region close to your target audience."}),"\n",(0,n.jsxs)(t.li,{children:["Uncheck the ",(0,n.jsx)(t.strong,{children:"Block all public access"})," option to allow public access to your website. You will need to acknowledge this change."]}),"\n",(0,n.jsxs)(t.li,{children:["Click on ",(0,n.jsx)(t.strong,{children:"Create bucket"}),"."]}),"\n"]}),"\n",(0,n.jsx)(t.h2,{id:"step-2-upload-your-website-files",children:"Step 2: Upload Your Website Files"}),"\n",(0,n.jsx)(t.p,{children:"Now that you have an S3 bucket, you can upload your static website files (HTML, CSS, JS, etc.)."}),"\n",(0,n.jsxs)(t.ol,{children:["\n",(0,n.jsx)(t.li,{children:"Click on your newly created bucket to open it."}),"\n",(0,n.jsxs)(t.li,{children:["Click on the ",(0,n.jsx)(t.strong,{children:"Upload"})," button."]}),"\n",(0,n.jsxs)(t.li,{children:["Drag and drop your website files into the upload area or click ",(0,n.jsx)(t.strong,{children:"Add files"}),"."]}),"\n",(0,n.jsxs)(t.li,{children:["Click ",(0,n.jsx)(t.strong,{children:"Upload"})," to transfer the files to your S3 bucket."]}),"\n"]}),"\n",(0,n.jsx)(t.h2,{id:"step-3-configure-the-bucket-for-static-website-hosting",children:"Step 3: Configure the Bucket for Static Website Hosting"}),"\n",(0,n.jsx)(t.p,{children:"Next, you'll configure the bucket to serve the files as a static website."}),"\n",(0,n.jsxs)(t.ol,{children:["\n",(0,n.jsxs)(t.li,{children:["In your bucket, go to the ",(0,n.jsx)(t.strong,{children:"Properties"})," tab."]}),"\n",(0,n.jsxs)(t.li,{children:["Scroll down to the ",(0,n.jsx)(t.strong,{children:"Static website hosting"})," section and click ",(0,n.jsx)(t.strong,{children:"Edit"}),"."]}),"\n",(0,n.jsxs)(t.li,{children:["Select ",(0,n.jsx)(t.strong,{children:"Enable"})," for static website hosting."]}),"\n",(0,n.jsxs)(t.li,{children:["In the ",(0,n.jsx)(t.strong,{children:"Index document"})," field, enter the name of your homepage file, usually ",(0,n.jsx)(t.code,{children:"index.html"}),"."]}),"\n",(0,n.jsxs)(t.li,{children:["(Optional) In the ",(0,n.jsx)(t.strong,{children:"Error document"})," field, enter the name of your error page (e.g., ",(0,n.jsx)(t.code,{children:"404.html"}),")."]}),"\n",(0,n.jsxs)(t.li,{children:["Click ",(0,n.jsx)(t.strong,{children:"Save changes"}),"."]}),"\n"]}),"\n",(0,n.jsx)(t.h2,{id:"step-4-set-bucket-policy-to-make-the-website-public",children:"Step 4: Set Bucket Policy to Make the Website Public"}),"\n",(0,n.jsx)(t.p,{children:"To allow public access to your website, you need to set a bucket policy."}),"\n",(0,n.jsxs)(t.ol,{children:["\n",(0,n.jsxs)(t.li,{children:["Go to the ",(0,n.jsx)(t.strong,{children:"Permissions"})," tab of your S3 bucket."]}),"\n",(0,n.jsxs)(t.li,{children:["Scroll down to ",(0,n.jsx)(t.strong,{children:"Bucket Policy"})," and click ",(0,n.jsx)(t.strong,{children:"Edit"}),"."]}),"\n",(0,n.jsx)(t.li,{children:"Add the following policy to make the content publicly readable:"}),"\n"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-json",children:'{\n  "Version": "2012-10-17",\n  "Statement": [\n    {\n      "Sid": "PublicReadGetObject",\n      "Effect": "Allow",\n      "Principal": "*",\n      "Action": "s3:GetObject",\n      "Resource": "arn:aws:s3:::your-bucket-name/*"\n    }\n  ]\n}\n'})})]})}function d(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(h,{...e})}):h(e)}},8453:(e,t,s)=>{s.d(t,{R:()=>l,x:()=>a});var n=s(6540);const i={},o=n.createContext(i);function l(e){const t=n.useContext(o);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:l(e.components),n.createElement(o.Provider,{value:t},e.children)}}}]);