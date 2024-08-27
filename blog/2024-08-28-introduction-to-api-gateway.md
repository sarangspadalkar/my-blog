---
title: Introduction to AWS API Gateway
description: Learn about AWS API Gateway and how to use it with a hands-on example deploying an Express.js application.
author: Sarang Padalkar
author_url: https://github.com/sarangspadalkar
author_image_url: https://github.com/sarangspadalkar.png
tags: [aws, api-gateway]
---

# Introduction to AWS API Gateway

AWS API Gateway is a fully managed service that makes it easy for developers to create, publish and manage APIs at any scale.

It acts as a "front door" for applications to access data, business logic, or functionality from backend services, such as workloads running on Amazon EC2, AWS Lambda, or any web application. By using API Gateway, we can expose RESTful APIs, WebSocket APIs, and HTTP APIs to their clients.

![API Gateway Diagram](/img/aws-api-gateway.png)

## Key Features of AWS API Gateway

- **Scalability**: AWS API Gateway automatically scales to handle traffic levels.

- **Security**: API Gateway provides built-in support for authorization and access control using AWS IAM, Amazon Cognito, and Lambda authorizers (custom authorization middleware logic). It also supports SSL termination and API key management.

- **Monitoring and Analytics**: With Amazon CloudWatch integration, you can monitor your API's metrics: latency, error rates, and request counts, and set up alarms to notify you of potential issues.

- **Throttling and Caching**: API Gateway allows you to configure request throttling and caching to improve the performance and reliability of your APIs.

- **Versioning and Staging**: You can manage different versions of your APIs and deploy them to different stages (e.g., development, staging, production) with ease.

- **Integration with AWS Services**: API Gateway seamlessly integrates with other AWS services like Lambda, DynamoDB, S3, and more, making it a powerful tool for building serverless architectures.

## API Gateway types

- **HTTP API**: HTTP API is a lightweight, low-latency option for creating HTTP-based APIs. It's designed to offer a simpler, faster, and more cost-effective solution compared to REST API. HTTP API can only integrate with AWS Lambda.

- **REST API**: REST API offers extensive capabilities, including request/response transformation, caching, API keys, and integration with all AWS services. Difference between HTTP vs Rest is given [here](https://docs.aws.amazon.com/apigateway/latest/developerguide/http-api-vs-rest.html)

- **REST API Private**: REST API Private is a variant of the REST API that runs within a Virtual Private Cloud (VPC). It allows you to expose APIs that are only accessible within your VPC, providing an extra layer of security.

- **WebSocket API**: WebSocket API allows you to build real-time, full-duplex communication applications where the client and server can send messages to each other at any time.

## API Endpoint Types

- **Regional Endpoints**: These are deployed within a specific AWS region. When you create a regional API endpoint, the API is accessible only within that region, making it ideal for use cases where the API traffic is localized to a specific geographic area. Useful for applications that primarily serve users within a specific geographic region.

- **Edge-Optimized Endpoints**: These are designed for globally distributed clients. When you create an edge-optimized API, requests are routed through the AWS global network, using Amazon CloudFront to cache and deliver content to users with lower latency. This endpoint type is ideal for APIs that need to serve a global audience with minimal latency, regardless of the user's location.

- **Private Endpoints**: These are used to create APIs that are accessible only within an Amazon Virtual Private Cloud (VPC). This endpoint type is ideal for internal APIs that should not be exposed to the public internet. Private APIs can be securely accessed from your VPC, on-premises data centers, or through AWS Direct Connect and VPN connections.

## API Gateway Deploy "Stages"

A stage is a named reference to a deployment of your API that allows you to manage and run different versions of your API in parallel. Stages provide a way to organize and isolate your API's environments, such as development, testing, staging, and production.
