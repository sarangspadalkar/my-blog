---
title: Hosting a Static Webpage on AWS S3
author: Sarang Padalkar
author_url: https://github.com/sarangspadalkar
author_image_url: https://github.com/sarangspadalkar.png
tags: [aws, s3, static website, hosting]
---

In this tutorial, we'll walk through the steps to host a static website on AWS S3. AWS S3 (Simple Storage Service) is an object storage service that offers scalability, data availability, security, and performance. It's a great option for hosting static websites.

## Step 1: Create an S3 Bucket

First, you need to create an S3 bucket where your website files will be stored.

1. Log in to the [AWS Management Console](https://aws.amazon.com/).
2. Navigate to the **S3** service.
3. Click on **Create bucket**.
4. Provide a unique name for your bucket (e.g., `my-static-website`).
5. Select a region close to your target audience.
6. Uncheck the **Block all public access** option to allow public access to your website. You will need to acknowledge this change.
7. Click on **Create bucket**.

## Step 2: Upload Your Website Files

Now that you have an S3 bucket, you can upload your static website files (HTML, CSS, JS, etc.).

1. Click on your newly created bucket to open it.
2. Click on the **Upload** button.
3. Drag and drop your website files into the upload area or click **Add files**.
4. Click **Upload** to transfer the files to your S3 bucket.

## Step 3: Configure the Bucket for Static Website Hosting

Next, you'll configure the bucket to serve the files as a static website.

1. In your bucket, go to the **Properties** tab.
2. Scroll down to the **Static website hosting** section and click **Edit**.
3. Select **Enable** for static website hosting.
4. In the **Index document** field, enter the name of your homepage file, usually `index.html`.
5. (Optional) In the **Error document** field, enter the name of your error page (e.g., `404.html`).
6. Click **Save changes**.

## Step 4: Set Bucket Policy to Make the Website Public

To allow public access to your website, you need to set a bucket policy.

1. Go to the **Permissions** tab of your S3 bucket.
2. Scroll down to **Bucket Policy** and click **Edit**.
3. Add the following policy to make the content publicly readable:

```json
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Sid": "PublicReadGetObject",
      "Effect": "Allow",
      "Principal": "*",
      "Action": "s3:GetObject",
      "Resource": "arn:aws:s3:::your-bucket-name/*"
    }
  ]
}
```
