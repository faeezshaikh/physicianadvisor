{
    "quiz": {
        "name": "Exam 1",
        "logo" : "assets/img/EC2.png",
        "time":"120 minutes"
    },
    "questions": [
    {
        "Id": 1,
        "Name": "Why is AWS more economical than traditional data centers for applications with varying compute workloads?", 
        
        "Options": [
            { "Id": 1, "QuestionId": 1010, "Name": "Amazon Elastic Compute Cloud (Amazon EC2) costs are billed on a monthly basis.", "IsAnswer": false },
            { "Id": 2, "QuestionId": 1010, "Name": "Customers retain full administrative access to their Amazon EC2 instances.", "IsAnswer": false },
            { "Id": 3, "QuestionId": 1010, "Name": "Amazon EC2 instances can be launched on-demand when needed.", "IsAnswer": true },
            { "Id": 4, "QuestionId": 1010, "Name": "Customers can permanently run enough instances to handle peak workloads", "IsAnswer": false }],
            "Explanation":"The ability to launch instances on-demand when needed allows customers launch and terminate instances in response to a varying workload. This is a more economical practice than purchasing enough on-premises servers to handle the peak load."
        
    },
    {
        "Id": 2,
        "Name": "Which AWS service would simplify migration of a database to AWS?", 
        
        "Options": [
            { "Id": 1, "QuestionId": 1010, "Name": "AWS Storage Gateway", "IsAnswer": false },
            { "Id": 2, "QuestionId": 1010, "Name": "AWS Database Migration Service (AWS DMS)", "IsAnswer": true },
            { "Id": 3, "QuestionId": 1010, "Name": "Amazon Elastic Compute Cloud (Amazon EC2)", "IsAnswer": false },
            { "Id": 4, "QuestionId": 1010, "Name": "Amazon AppStream 2.0", "IsAnswer": false }],
            "Explanation":"AWS Database Migration Service helps you migrate databases to AWS quickly and securely. See link for more details.",
            "Ref":"https://aws.amazon.com/dms/"
        
    },
    
    {
        "Id": 3,
        "Name": "Which AWS offering enables customers to find, buy, and immediately start using software solutions in their AWS environment?", 
        
        "Options": [
            { "Id": 1, "QuestionId": 1010, "Name": "AWS Config", "IsAnswer": false },
            { "Id": 2, "QuestionId": 1010, "Name": "AWS OpsWorks", "IsAnswer": false },
            { "Id": 3, "QuestionId": 1010, "Name": "AWS SDK", "IsAnswer": false },
            { "Id": 4, "QuestionId": 1010, "Name": "AWS Marketplace", "IsAnswer": true }],
            "Explanation":"AWS Marketplace is an online store that helps customers discover, purchase, migrate and immediately start using the software and services they need to build products and run their businesses.",
            "Ref":"https://aws.amazon.com/mp/"
    },
    {
        "Id": 4,
        "Name": "Which AWS networking service enables a company to create a virtual network within AWS?", 
        
        "Options": [
            { "Id": 1, "QuestionId": 1010, "Name": "AWS Config", "IsAnswer": false },
            { "Id": 2, "QuestionId": 1010, "Name": "Amazon Route 53", "IsAnswer": false },
            { "Id": 3, "QuestionId": 1010, "Name": "AWS Direct Connect", "IsAnswer": false },
            { "Id": 4, "QuestionId": 1010, "Name": "Amazon Virtual Private Cloud (Amazon VPC)", "IsAnswer": true }],
            "Explanation":"Amazon Virtual Private Cloud (Amazon VPC) lets you provision a logically isolated section of the AWS Cloud where you can launch AWS resources in a virtual network that you define.",
            "Ref":"https://aws.amazon.com/vpc/"
        
    },
    {
        "Id": 5,
        "Name": "Which of the following is AWS's responsibility under the AWS shared responsibility model?", 
        
        "Options": [
            { "Id": 1, "QuestionId": 1010, "Name": "Configuring third-party applications", "IsAnswer": false },
            { "Id": 2, "QuestionId": 1010, "Name": "Maintaining physical hardware ", "IsAnswer": true },
            { "Id": 3, "QuestionId": 1010, "Name": "Securing application access and data", "IsAnswer": false },
            { "Id": 4, "QuestionId": 1010, "Name": "Managing custom Amazon Machine Images (AMIs)", "IsAnswer": false }],
            "Explanation":"Security and Compliance is a shared responsibility between AWS and the customer. See link for more details.",
            "Ref":"https://aws.amazon.com/compliance/shared-responsibility-model/"
        
    },
   
     {
        "Id": 6,
        "Name": "Which component of AWS global infrastructure does Amazon CloudFront use to ensure low-latency delivery?", 
        "Tag":"Security",
        "Options": [
            { "Id": 1, "QuestionId": 1010, "Name": "AWS Regions", "IsAnswer": false },
            { "Id": 2, "QuestionId": 1010, "Name": "AWS edge locations", "IsAnswer": true },
            { "Id": 3, "QuestionId": 1010, "Name": "AWS Availability Zones", "IsAnswer": false },
            { "Id": 4, "QuestionId": 1010, "Name": "Amazon Virtual Private Cloud (Amazon VPC)", "IsAnswer": false }],
            "Explanation":"Amazon CloudFront is a global content delivery network (CDN) service that securely delivers data, videos, applications, and APIs to your viewers with low latency and high transfer speeds. See link for more details.",
            "Ref":"https://aws.amazon.com/cloudfront/"
    } 
    ,
     {
        "Id": 7,
        "Name": "How would a system administrator add an additional layer of login security to a user's AWS Management Console?", 
        "Tag":"Security",
        "Options": [
            { "Id": 1, "QuestionId": 1010, "Name": "Use AWS Cloud Directory", "IsAnswer": false },
            { "Id": 2, "QuestionId": 1010, "Name": "Audit AWS Identity and Access Management (IAM) roles", "IsAnswer": false },
            { "Id": 3, "QuestionId": 1010, "Name": "Enable Multi-Factor Authentication", "IsAnswer": true },
            { "Id": 4, "QuestionId": 1010, "Name": "Enable AWS CloudTrail", "IsAnswer": false }],
            "Explanation":"AWS Multi-Factor Authentication (MFA) is a simple best practice that adds an extra layer of protection on top of your user name and password. See link for more details.",
            "Ref":"https://aws.amazon.com/iam/details/mfa/"
    } 
    ,
     {
        "Id": 8,
        "Name": "Which service can identify the user that made the API call when an Amazon Elastic Compute Cloud (Amazon EC2) instance is terminated?", 
        "Tag":"Security",
        "Options": [
            { "Id": 1, "QuestionId": 1010, "Name": "Amazon CloudWatch", "IsAnswer": false },
            { "Id": 2, "QuestionId": 1010, "Name": "AWS CloudTrail", "IsAnswer": true },
            { "Id": 3, "QuestionId": 1010, "Name": "AWS X-Ray", "IsAnswer": false },
            { "Id": 4, "QuestionId": 1010, "Name": "AWS Identity and Access Management (AWS IAM)", "IsAnswer": false }],
            "Explanation":"AWS CloudTrail is an AWS service that helps you enable governance, compliance, and operational and risk auditing of your AWS account. See link for more details.",
            "Ref":"https://docs.aws.amazon.com/awscloudtrail/latest/userguide/cloudtrail-user-guide.html"
    } ,
     {
        "Id": 9,
        "Name": "Which service would you use to send alerts based on Amazon CloudWatch alarms?", 
        "Tag":"Costing",
        "Options": [
            { "Id": 1, "QuestionId": 1010, "Name": "Amazon Simple Notification Service (Amazon SNS)", "IsAnswer": true },
            { "Id": 2, "QuestionId": 1010, "Name": "AWS CloudTrail", "IsAnswer": false },
            { "Id": 3, "QuestionId": 1010, "Name": "AWS Trusted Advisor", "IsAnswer": false },
            { "Id": 4, "QuestionId": 1010, "Name": "Amazon Route 53", "IsAnswer": false }],
            "Explanation":"You can create a CloudWatch alarm that watches a single metric. The alarm performs one or more actions based on the value of the metric relative to a threshold over a number of time periods. The action can be an Amazon EC2 action, an Amazon EC2 Auto Scaling action, or a notification sent to an Amazon SNS topic.",
            "Ref":"https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/AlarmThatSendsEmail.html"
    } 
   
   
    ,
     {
        "Id": 10,
        "Name": "Where can a customer find information about prohibited actions on AWS infrastructure?", 
        "Tag":"Network",
        "Options": [
            { "Id": 1, "QuestionId": 1010, "Name": "AWS Trusted Advisor", "IsAnswer": false },
            { "Id": 2, "QuestionId": 1010, "Name": "AWS Identity and Access Management (IAM)", "IsAnswer": false },
            { "Id": 3, "QuestionId": 1010, "Name": "AWS Billing Console", "IsAnswer": false },
            { "Id": 4, "QuestionId": 1010, "Name": "AWS Acceptable Use Policy", "IsAnswer": true }],
            "Explanation":"See AWS Acceptable Use Policy at the link below:",
            "Ref":"https://aws.amazon.com/aup/"
    } ,
     {
        "Id": 11,
        "Name": "Which of the following is a factor when considering Total Cost of Ownership (TCO) for the AWS Cloud?", 
        "Tag":"Data",
        "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "The number of servers migrated to AWS.", "IsAnswer": true },
            { "Id": 1056, "QuestionId": 1010, "Name": "The number of users migrated to AWS.", "IsAnswer": false },
            { "Id": 1057, "QuestionId": 1010, "Name": "The number of passwords migrated to AWS.", "IsAnswer": false },
            { "Id": 1058, "QuestionId": 1010, "Name": "The number of keys migrated to AWS.", "IsAnswer": false }],
            "Explanation":"See link for details on TCO for AWS.",
            "Ref":"https://aws.amazon.com/blogs/aws/the-new-aws-tco-calculator/"
    } 
    ,
     {
        "Id": 12,
        "Name": "Which AWS service can be used as a Global content delivery network (CDN) service?", 
        "Tag":"",
        "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "Amazon SES", "IsAnswer": true },
            { "Id": 1056, "QuestionId": 1010, "Name": "Cloudtrail", "IsAnswer": false },
            { "Id": 1057, "QuestionId": 1010, "Name": "Cloudfront", "IsAnswer": false },
            { "Id": 1058, "QuestionId": 1010, "Name": "S3", "IsAnswer": false }],
            "Explanation":"Amazon CloudFront is a global content delivery network (CDN) service that securely delivers data, videos, applications, and APIs to your viewers with low latency and high transfer speeds.",
            "Ref":"https://aws.amazon.com/cloudfront/"
    }
    ,
    {
        "Id": 13,
        "Name": "The firm you work for is considering migrating to AWS. They are concerned about cost and the initial investment needed. Which of the following features of AWS pricing helps lower the initial investment amount needed? Choose 2 answers from the options given below:", 
        "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "The ability to choose the lowest cost vendor", "IsAnswer": true },
            { "Id": 1056, "QuestionId": 1010, "Name": "The ability to pay as you go ", "IsAnswer": false },
            { "Id": 1056, "QuestionId": 1010, "Name": "No upfront costs", "IsAnswer": false },
            { "Id": 1056, "QuestionId": 1010, "Name": "Discounts for upfront payments", "IsAnswer": false }],
            "Explanation":"The ability to choose the lowest cost vendor is not exclusive to AWS over on-premise solutions. While AWS does have services that provide discounts for upfront payment, this is not exclusive to AWS over on premise solutions. The correct answers are: The ability to pay as you go & No upfront costs.",
            "Ref":"https://aws.amazon.com/pricing/"
            

        
    },
    {
        "Id": 14,
        "Name": "",
        "Explanation": "There are two issues with this question. One, traffic never flows through a Bastion host. A Bastion host is like a secure control room from which you monitor and command the factory floor. Two, the word ALL should have been a good hint that this is false.",
        "Ref": "https://aws.amazon.com/blogs/security/controlling-network-access-to-ec2-instances-using-a-bastion-server/",
        "Options": [
           { "Id": 1055, "QuestionId": 1010, "Name": "True", "IsAnswer": false },
            { "Id": 1056, "QuestionId": 1010, "Name": "False", "IsAnswer": true }]
    },
    {
        "Id": 15,
        "Name": "Which of the following best describes Identity Federation?",
        "Options": [
           { "Id": 1055, "QuestionId": 1010, "Name": "Combining or joining a list of users in one domain to users in another domain", "IsAnswer": true },
            { "Id": 1056, "QuestionId": 1010, "Name": "A service which takes a user from point A and joins it to a user at point B", "IsAnswer": false },
            { "Id": 1057, "QuestionId": 1010, "Name": "A service like Active Directory, Amazon, Google etc.", "IsAnswer": false },
            { "Id": 1058, "QuestionId": 1010, "Name": "A user of a service such as Google", "IsAnswer": false }]
    },
    {
        "Id": 16,
        "Name": "Which of the following best describes an Identity Broker?",
        "Options": [
           { "Id": 1055, "QuestionId": 1010, "Name": "Combining or joining a list of users in one domain to users in another domain", "IsAnswer": false},
            { "Id": 1056, "QuestionId": 1010, "Name": "A service which takes a user from point A and joins it to a user at point B", "IsAnswer": true },
            { "Id": 1057, "QuestionId": 1010, "Name": "A service like Active Directory, Amazon, Google etc.", "IsAnswer": false },
            { "Id": 1058, "QuestionId": 1010, "Name": "A user of a service such as Google", "IsAnswer": false }]
    },
    {
        "Id": 17,
        "Name": "For which of the following is CloudWatch a good fit? (Choose 3)",
        "Options": [
           { "Id": 1055, "QuestionId": 1010, "Name": "Audit AWS API Calls", "IsAnswer": false},
            { "Id": 1056, "QuestionId": 1010, "Name": "Collect logs from AWS resources", "IsAnswer": true },
            { "Id": 1057, "QuestionId": 1010, "Name": "Monitor AWS resources across multiple AWS accounts", "IsAnswer": true },
            { "Id": 1058, "QuestionId": 1010, "Name": "Monitor CloudTrail", "IsAnswer": true }]
    },
    {
        "Id": 18,
        "Name": "For intrusion detection and prevention, you should use:",
        "Options": [
           { "Id": 1055, "QuestionId": 1010, "Name": "An IDS", "IsAnswer": false},
            { "Id": 1056, "QuestionId": 1010, "Name": "An IPS", "IsAnswer": true }],
            "Explanation":"An Intrusion Prevention System will detect AND prevent attacks, where as an Intrusion Detection System will only detect intrusions and alert about them."
    },
  
    {
        "Id": 19,
        "Name": "Which of the following best describes an Identity Store?",
        "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "Combining or joining a list of users in one domain to users in another domain", "IsAnswer": false},
            { "Id": 1056, "QuestionId": 1010, "Name": "A service which takes a user from point A and joins it to a user at point B", "IsAnswer": false },
            { "Id": 1057, "QuestionId": 1010, "Name": "A service like Active Directory, Amazon, Google etc.", "IsAnswer": false },
            { "Id": 1058, "QuestionId": 1010, "Name": "A user of a service such as Google", "IsAnswer": true }]
    },
    {
        "Id": 20,
        "Name": "To integrate an existing Microsoft Active Directory environment with AWS you can use:", 
        
        "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "AD Connector", "IsAnswer": true },
            { "Id": 1056, "QuestionId": 1010, "Name": "Simple AD", "IsAnswer": false },
            { "Id": 1057, "QuestionId": 1010, "Name": "Amazon Cognito", "IsAnswer": false }]
        
    },
    {
        "Id": 21,
        "Name": "Which of the following is the best candidate for a data store that will be queried using joins?", 
        
        "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "RDS", "IsAnswer": true },
            { "Id": 1056, "QuestionId": 1010, "Name": "DynamoDB", "IsAnswer": false },
            { "Id": 1057, "QuestionId": 1010, "Name": "S3", "IsAnswer": false }]
        
    },
    {
        "Id": 22,
        "Name": "Which of the following is the best option to store blob data?", 
        
        "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "RDS", "IsAnswer": false },
            { "Id": 1056, "QuestionId": 1010, "Name": "DynamoDB", "IsAnswer": false },
            { "Id": 1057, "QuestionId": 1010, "Name": "S3", "IsAnswer": true }],
            "Explanation":"DynamoDB and some RDS types can store BLOB data, however it is not normally an optimal use from a performance or cost perspective."
        
    },
    {
        "Id": 23,
        "Name": "A great way to preserve the contents of an S3 bucket is to back up the bucket to a bucket owned by another AWS account.", 
        
        "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "True", "IsAnswer": true },
            { "Id": 1056, "QuestionId": 1010, "Name": "False", "IsAnswer": false }]
        
    },
    {
        "Id": 24,
        "Name": "Enabling multi-AZ will help improve performance on your RDS database,.", 
        
        "Options": [
             { "Id": 1055, "QuestionId": 1010, "Name": "True", "IsAnswer": false },
            { "Id": 1056, "QuestionId": 1010, "Name": "False", "IsAnswer": true }],
            "Explanation":"Mutli-AZ RDS deployments use synchronous replication and are designed to be used to introduce data redundancy not to improve performance. To improve performance, setup RDS to use read-replicas.",
            "Ref" :"https://aws.amazon.com/rds/details/read-replicas/"
        
    },
    {
        "Id": 25,
        "Name": "The best option to store index and query focused data is:", 
        
        "Options": [
         { "Id": 1055, "QuestionId": 1010, "Name": "RDS", "IsAnswer": false },
            { "Id": 1056, "QuestionId": 1010, "Name": "DynamoDB", "IsAnswer": true },
            { "Id": 1057, "QuestionId": 1010, "Name": "S3", "IsAnswer": false }]
        
    },
    {
        "Id": 26,
        "Name": "You are working for a scientific research company just outside of Seattle. They decide to make use of AWS spot instances in Paris to process the data collected. The data is collected and reduced at the end of the month. After some discussion and calculation you have determined that you need to move 30 - 35TB per week to AWS. Which strategy would you propose to you CTO", 
        
        "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "Set up a 1GB MPLS to Frankfurt and stream the data continually from the science centre to S3", "IsAnswer": false },
            { "Id": 1056, "QuestionId": 1010, "Name": "Set up Storage Gateway in Cached mode and use Storage Gateway to replicate the data to S3", "IsAnswer": false },
            { "Id": 1057, "QuestionId": 1010, "Name": "Set up Storage Gateway in Stored mode and use Storage Gateway to replicate the data to S3", "IsAnswer": false },
            { "Id": 1058, "QuestionId": 1010, "Name": "Schedule a Snowball every 2 weeks to move that data to Ireland", "IsAnswer": true },
            { "Id": 1059, "QuestionId": 1010, "Name": "Establish a 1GB Direct Connect connection to AWS and stream the data continually from the science centre to S3", "IsAnswer": false }],
            "Explanation":"Moving Data is expensive. Snowballl makes the most sense in this case.",
            "Ref" :"https://aws.amazon.com/about-aws/whats-new/2016/04/announcing-the-new-larger-capacity-80tb-snowball-device/"
        
    },
    {
        "Id": 27,
        "Name": "To stop objects from being deleted from a bucket by the wrong people, you can: (Choose 2)", 
        
        "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "Disable object deletion", "IsAnswer": false },
            { "Id": 1056, "QuestionId": 1010, "Name": "Use bucket policies to restrict deletes", "IsAnswer": true },
            { "Id": 1057, "QuestionId": 1010, "Name": "Enable MFA deletes", "IsAnswer": true }]
        
    },
    {
        "Id": 28,
        "Name": "Once S3 bucket versioning is enabled, you may turn it off again once you have deleted old versions.", 
        
        "Options": [
             { "Id": 1055, "QuestionId": 1010, "Name": "True", "IsAnswer": false },
            { "Id": 1056, "QuestionId": 1010, "Name": "False", "IsAnswer": true }],
            "Explanation" :"Once versioning has been enabled on a bucket, it cannot be turned off, only suspended."
        
    },
    {
        "Id": 29,
        "Name": "You have been engaged by a company to design and lead the migration to an AWS environment. One of their current problems is that the on-premises high performance SAN is requiring frequent and expensive upgrades to keep up with the variety of workloads. Working with the Capacity Manager you identify the following Storage types and volumes required: 10 TiB of logs archives retained for legal reason. 300 GiB of VM boot/Data volumes and templates currently requiring 400 IOPS. 900 GiB of modelling data requiring 100,000 Read IOPS, and 90,000 Write IOPS. 500 GiB of image thumbnail that are regenerated on the fly if unavailable. 200 GiB of customer Session State data. 100 GiB of premium customer Session State data that allows customers to restart sessions even if off-line for several days. Which of the following best reflect your recommendation for a cost effective storage allocation. (Choose 2)", 
        
        "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "DynamoDB (300 GiB) for the customer Session State data. I2.4xLarge with backup to S3 for the modelling data. Assorted EBS(gp2/io1/std) backed instance (200 to 400 GiB) as required.", "IsAnswer": false },
            { "Id": 1056, "QuestionId": 1010, "Name": "S3/Glacier (10 TiB) Life cycle managed for Log archives. S3(RRS) (500 GiB) for the thumbnails. EBS(gp2) (300 GiB) presented as NAS storage for the VM Boot/Data volumes.", "IsAnswer": false },
            { "Id": 1057, "QuestionId": 1010, "Name": "DynamoDB (100 GiB) for the premium customer Session State data. ElastiCache cluster (200 GiB) for the standard customer Session state data. Assorted EBS(gp2/io1/std) backed instance (200 to 400 GiB) as required. I2.4xLarge with backup to S3 for the modelling data.", "IsAnswer": true },
            { "Id": 1058, "QuestionId": 1010, "Name": "S3(RRS)/Glacier (10 TiB) Life cycle managed for Log archives. S3(RRS) (500 GiB) for the thumbnails. S3/Glacier (300 GiB) Life cycle managed to self-expire for the VM Boot/Data volumes.", "IsAnswer": false },
            { "Id": 1059, "QuestionId": 1010, "Name": "DynamoDB (100 GiB) for the premium customer Session State data. ElastiCache cluster (200 GiB) for the standard customer Session state data. Assorted EBS(gp2/io1/std) backed instance (200 to 400 GiB) as required. EBS(io1) (900 GiB) in RAID10 across a cluster of c3.8xLarge with EBS Optimized storage.", "IsAnswer": false },
            { "Id": 1060, "QuestionId": 1010, "Name": "S3/Glacier (10 TiB) Life cycle managed for Log archives. S3(RRS) (500 GiB) for the thumbnails. S3/Glacier (300 GiB) Life cycle managed to self-expire for the VM Boot/Data volumes.", "IsAnswer": true }],
            "Explanation":"Legal implies durable & secure retention. Modeling data implies high IOPS. Session state implies low latency access and options about persistence. There is a gotcha about how to handle VM Boot volumes (Hint: What do you plan to do with them during & after you have moved to AWS?).You need to practice comparing answers to identify the different elements and eliminate the incorrect ones. This question is long, but the principles of selecting the correct storage are straightforward."
        
    },
    {
        "Id": 30,
        "Name": "What technique can be used to optimize S3 for PUTs?", 
        
        "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "Upload one large file rather than multiple files.", "IsAnswer": false },
            { "Id": 1056, "QuestionId": 1010, "Name": "Split a file up into chunks and upload them separately.", "IsAnswer": true },
            { "Id": 1057, "QuestionId": 1010, "Name": "Leverage the BitTorrent capabilities of S3.", "IsAnswer": false }],
            "Explanation":"Multiple smaller sized files uploaded in parallel will utilise more of the available internet connection bandwidth and therefore upload quicker than if the large file was uploaded without being split."
        
    },
    {
        "Id": 31,
        "Name": "To optimize S3 for PUTs we need to try and maximise the connection bandwidth.", 
        
        "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "True", "IsAnswer": true },
            { "Id": 1056, "QuestionId": 1010, "Name": "False", "IsAnswer": false }],
            "Explanation" : "We try to max out the internet connection so that we aren't limited by the S3 single file upload speed and are fully utilising the bandwidth available on our internet connection."
        
    },
    {
        "Id": 32,
        "Name": "S3 is structured lexicographically therefore you should:", 
        
        "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "Give objects in your bucket similar names.", "IsAnswer": false },
            { "Id": 1056, "QuestionId": 1010, "Name": "Give objects in your bucket somewhat different names.", "IsAnswer": true }],
            "Explanation": "To fully leverage S3 performance, you should introduce some randomness into the object names so that they are more likely to be stored on completely different disks and servers in the datacentre.",
            "Ref":"http://docs.aws.amazon.com/AmazonS3/latest/dev/request-rate-perf-considerations.html#workloads-with-mix-request-types"
        
    },
    {
        "Id": 33,
        "Name": "What techniques can be used to optimize S3 for GETs? (Choose 2)", 
        
        "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "Amazon CloudFront CDN", "IsAnswer": true },
            { "Id": 1056, "QuestionId": 1010, "Name": "Range-based GETs", "IsAnswer": true },
            { "Id": 1057, "QuestionId": 1010, "Name": "Caching via Elasticache", "IsAnswer": false },
            { "Id": 1058, "QuestionId": 1010, "Name": "S3 versioning", "IsAnswer":false }],
            "Explanation": "Refer the link for furher info",
            "Ref":"http://docs.aws.amazon.com/AmazonS3/latest/API/RESTObjectGET.html"
        
    },
    {
        "Id": 34,
        "Name": "To successfully setup a VPC peering connection you must also:", 
        
        "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "Setup routes and security groups in both VPCs", "IsAnswer": true },
            { "Id": 1056, "QuestionId": 1010, "Name": "Setup a NAT instance to route traffic between the VPCs", "IsAnswer": false },
            { "Id": 1057, "QuestionId": 1010, "Name": "Setup a peered subnet in the peer VPC", "IsAnswer": false }]
        
    },
    {
        "Id": 35,
        "Name": "In order to connect to Amazon S3 via a Direct Connect connection, the connection must be a:", 
        
        "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "public VIF connection", "IsAnswer": true },
            { "Id": 1056, "QuestionId": 1010, "Name": "private VIF connection", "IsAnswer": false }]
        
    },
    {
        "Id": 36,
        "Name": "Which of the follwing are the correct options for scaling your NAT instance configuration. (Choose 3)", 
        
        "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "Increasing the EC2 instance size", "IsAnswer": true },
            { "Id": 1056, "QuestionId": 1010, "Name": "Changing the instance family type to one with 'Enhanced Networking'", "IsAnswer": true },
            { "Id": 1057, "QuestionId": 1010, "Name": "Adding another NAT instance and splitting the NAT'd instances across two subnets to allow for the two NAT instances.", "IsAnswer": true },
            { "Id": 1058, "QuestionId": 1010, "Name": "Adding another NAT instance and grouping the two NAT instances behind an ELB", "IsAnswer": false }]
        
    },
    {
        "Id": 37,
        "Name": "AWS Import/Export Disk data encryption is optional for", 
        
        "Options": [
                { "Id": 1055, "QuestionId": 1010, "Name": "Imports and exports", "IsAnswer": false },
                { "Id": 1056, "QuestionId": 1010, "Name": "Imports only", "IsAnswer": true },
                { "Id": 1056, "QuestionId": 1010, "Name": "Exports only", "IsAnswer": false }],
        "Explanation":"Import/Export Snowball has different requirements"
    },
    {
        "Id": 38,
        "Name": "An instance will have internet access if it is provisioned in a subnet who's VPC has an internet gateway attached so long as the instance has been assigned a public IP address.", 
        
        "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "True", "IsAnswer": false },
            { "Id": 1056, "QuestionId": 1010, "Name": "False", "IsAnswer": true }],
        "Explanation":"The subnet needs to have an association with the route table containing the route to the gateway before it will obtain internet access."
    },
    {
        "Id": 39,
        "Name": "If you have 3 SSL certificates which you intend to use with Amazon Elastic Load Balancer, how many ELB will you need?", 
        
        "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "1", "IsAnswer": false },
            { "Id": 1056, "QuestionId": 1010, "Name": "3", "IsAnswer": true },
            { "Id": 1057, "QuestionId": 1010, "Name": "2", "IsAnswer": false },
            { "Id": 1058, "QuestionId": 1010, "Name": "0", "IsAnswer": false }],
        "Explanation":"Unless you have a wildcard certificate, you will need to install the different SSL certificates on different load balancers. See also using SSL certificates with CloudFront"
    },
    {
        "Id": 40,
        "Name": "Which of the following is correct for CGW and VPG?", 
        
        "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "Client Gateway and Virtual Private Gateway", "IsAnswer": false },
            { "Id": 1056, "QuestionId": 1010, "Name": "Customer Gateway and Virtual Private Gateway", "IsAnswer": true },
            { "Id": 1057, "QuestionId": 1010, "Name": "Customer Gateway and Virtual Public Gateway", "IsAnswer": false },
            { "Id": 1058, "QuestionId": 1010, "Name": "Client Gateway and Virtual Publick Gateway", "IsAnswer": false }]
    },
    {
        "Id": 41,
        "Name": "Which of the following is the best way to handle a private subnet that is accessing the internet through a NAT instance and experiencing bandwidth bottlenecks? (Choose 2)", 
        
        "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "Add another NAT instance", "IsAnswer": false },
            { "Id": 1056, "QuestionId": 1010, "Name": "Increase the instance size of the NAT instance", "IsAnswer": true },
            { "Id": 1057, "QuestionId": 1010, "Name": "Add another internet gateway to the NAT instance subnet", "IsAnswer": false },
            { "Id": 1058, "QuestionId": 1010, "Name": "Convert the NAT instance to a NAT gateway", "IsAnswer": true }],
        "Explanation":"See link for further information",
        "Ref":"http://docs.aws.amazon.com/AmazonVPC/latest/UserGuide/vpc-nat-comparison.html"
    },
    {
        "Id": 42,
        "Name": " An instance was working fine with it's DHCP address, however with a manually set IP address of 10.2.5.191 it cannot connect to the network. The subnet is defined as 10.2.5.128/26 (10.2.5.128 - 10.2.5.191). What is most likely the cause of the problem?", 
        
        "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "/26 is not a permitted CIDR block size.", "IsAnswer": false },
            { "Id": 1056, "QuestionId": 1010, "Name": "You need to add a specific route to the subnet route table for manually created IP addresses", "IsAnswer": false },
            { "Id": 1057, "QuestionId": 1010, "Name": "You have forgotten to disable the 'source/destination checks' on the instance.", "IsAnswer": false },
            { "Id": 1058, "QuestionId": 1010, "Name": "The address 10.2.5.191 is one of the AWS reserved IP addresses.", "IsAnswer": true },
            { "Id": 1058, "QuestionId": 1010, "Name": "You have forgotten to set the Security Group on this instance", "IsAnswer": false }],
        "Explanation":"AWS reserves the FIRST four addresses and LAST one address of the CIDR block. A CIDR block does not always start at 0 or end at 255.",
        "Ref":"http://docs.aws.amazon.com/AmazonVPC/latest/UserGuide/VPC_Subnets.html"
    },
    {
        "Id": 43,
        "Name": "Amazon Direct Connect is available in the following speeds; (Choose 3)", 
        
        "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "Sub 1 Gbps", "IsAnswer": true },
            { "Id": 1056, "QuestionId": 1010, "Name": "1 Gbps", "IsAnswer": true },
            { "Id": 1057, "QuestionId": 1010, "Name": "10 Gbps", "IsAnswer": true },
            { "Id": 1058, "QuestionId": 1010, "Name": "100 Gbps", "IsAnswer": false },
            { "Id": 1058, "QuestionId": 1010, "Name": "1000 Gbps", "IsAnswer": false }],
        "Explanation":"",
        "Ref":""
    },
    {
        "Id": 44,
        "Name": "Which of the following support high performance networking (Choose 6)", 
        
        "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "T2", "IsAnswer": false },
            { "Id": 1056, "QuestionId": 1010, "Name": "C3", "IsAnswer": true },
            { "Id": 1057, "QuestionId": 1010, "Name": "C4", "IsAnswer": true },
            { "Id": 1058, "QuestionId": 1010, "Name": "D2", "IsAnswer": true },
            { "Id": 1058, "QuestionId": 1010, "Name": "I2", "IsAnswer": true },
            { "Id": 1058, "QuestionId": 1010, "Name": "M2", "IsAnswer": false },
            { "Id": 1058, "QuestionId": 1010, "Name": "M4", "IsAnswer": true },
            { "Id": 1058, "QuestionId": 1010, "Name": "R3", "IsAnswer": true }],
        "Explanation":"",
        "Ref":""
    },
    {
        "Id": 45,
        "Name": "A placement group cannot span subnets", 
        
        "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "True", "IsAnswer": false },
            { "Id": 1056, "QuestionId": 1010, "Name": "False", "IsAnswer": true }],
        "Explanation":"A placement group can span over multiple subnets so long as they are in the same availability zone and VPC. There are special constraints when used with VPC peering."
    },
    {
        "Id": 46,
        "Name": "Direct Connect is not redundant. (T/F)", 
        
        "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "True", "IsAnswer": true },
            { "Id": 1056, "QuestionId": 1010, "Name": "False", "IsAnswer": false }],
        "Explanation":"Direct Connect has internal fault tolerant links to multiple AZ's for maintenance, but is not inherently redundant. To add redundancy you can setup a second Direct Connect or setup a site to site VPN connection.",
        "Ref":"https://aws.amazon.com/directconnect/faqs/"
    },
    {
        "Id": 47,
        "Name": "What is the maximum number of internet gateways that can be attached to a VPC", 
        
        "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "1", "IsAnswer": true },
            { "Id": 1056, "QuestionId": 1010, "Name": "2", "IsAnswer": false },
            { "Id": 1057, "QuestionId": 1010, "Name": "3", "IsAnswer": false },
            { "Id": 1058, "QuestionId": 1010, "Name": "4", "IsAnswer": false }]
    },
    {
        "Id": 48,
        "Name": "Which of these are true? (Choose 2)", 
        
        "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "Subnets can span across availability zones", "IsAnswer": false },
            { "Id": 1056, "QuestionId": 1010, "Name": "Security groups can span across availability zones", "IsAnswer": true },
            { "Id": 1057, "QuestionId": 1010, "Name": "Subnets cannot span across availability zones", "IsAnswer": true },
            { "Id": 1058, "QuestionId": 1010, "Name": "Security groups cannot span across availability zones", "IsAnswer": false }]
    },
    {
        "Id": 49,
        "Name": "In EC2-Classic, Elastic Load Balancer supports using ports:", 
        
        "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "1-65535", "IsAnswer": false },
            { "Id": 1056, "QuestionId": 1010, "Name": "1024-65535", "IsAnswer": false },
            { "Id": 1057, "QuestionId": 1010, "Name": "80, 443, 1024-65535", "IsAnswer": false },
            { "Id": 1058, "QuestionId": 1010, "Name": "25, 80, 443, 465, 587, 1024-65535", "IsAnswer": true }],
        "Explanation":"ELB Listener ports are different between EC2-Classic and EC2-VPC. Correct answer is: 25, 80, 443, 465, 587, 1024-65535",
        "Ref":"http://docs.aws.amazon.com/elasticloadbalancing/latest/classic/elb-listener-config.html"
    },
    {
        "Id": 50,
        "Name": "You have 3 VPCs with CIDR blocks, A: 10.0.0.0/16, B: 10.0.0.0/16, C: 192.168.0.0/16. Which VPC's can be peered? (Choose 2)", 
        
        "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "A and B", "IsAnswer": false },
            { "Id": 1056, "QuestionId": 1010, "Name": "A and C", "IsAnswer": true },
            { "Id": 1057, "QuestionId": 1010, "Name": "B and C", "IsAnswer": true },
            { "Id": 1058, "QuestionId": 1010, "Name": "None of the above", "IsAnswer": false }],
        "Explanation":"Peered VPCs must have different CIDR blocks so that they do not overlap. Obviously the answer 'None of the above' doesn't even make sense as an option in this case."
    },
    {
        "Id": 51,
        "Name": "VPC peering can be established between any VPC in any other AWS region", 
        
        "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "True", "IsAnswer": false },
            { "Id": 1056, "QuestionId": 1010, "Name": "False", "IsAnswer": true }],
        "Explanation":"VPC peering is currently only allowed between VPCs in the same region."
    },
    {
        "Id": 52,
        "Name": "Source/Destination Check should be enabled on the NAT instance.", 
        
        "Options": [
                { "Id": 1055, "QuestionId": 1010, "Name": "True", "IsAnswer": false },
            { "Id": 1056, "QuestionId": 1010, "Name": "False", "IsAnswer": true }],
        "Explanation":"The NAT instance must be able to send/receive traffic that does not have a source/destination of itself."
    },
    {
        "Id": 53,
        "Name": "In a VPC configured to use dedicated tenancy, all instances created, even those selected for shared tenancy will be created on dedicated hardware.", 
        
        "Options": [
                { "Id": 1055, "QuestionId": 1010, "Name": "True", "IsAnswer": true },
            { "Id": 1056, "QuestionId": 1010, "Name": "False", "IsAnswer": false }],
        "Explanation":"See link for information.",
        "Ref" :"http://docs.aws.amazon.com/AWSEC2/latest/UserGuide/dedicated-instance.html#creatingdedicatedvpc"
    },
    {
        "Id": 54,
        "Name": "Opsworks allows you to run Code deployments, Software Configurations, Database Setups, Infrastructure Provisioning and Server Scaling using Chef", 
        
        "Options": [
                { "Id": 1055, "QuestionId": 1010, "Name": "True", "IsAnswer": true },
                { "Id": 1056, "QuestionId": 1010, "Name": "False", "IsAnswer": false }]
    },
    {
        "Id": 55,
        "Name": "CloudFormation uses a structured text format files to pass instructions to the AWS build services. Which of the following are true statements ? (Choose 3)", 
        
        "Options": [
                { "Id": 1055, "QuestionId": 1010, "Name": "When re-using a template in a different Region local values are passed via the CloudFormation Designer console.", "IsAnswer": false },
                { "Id": 1056, "QuestionId": 1010, "Name": "Elastic Beanstalk configuration inclusion is a 'Mapping' in CloudFormation.", "IsAnswer": false },
                { "Id": 1056, "QuestionId": 1010, "Name": "Resources: is a mandatory section of the Template", "IsAnswer": true },
                { "Id": 1057, "QuestionId": 1010, "Name": "BASH, CMD and PowerShell scripts can be passed as UserData to EC2 instances in the CloudFormation template.", "IsAnswer": true },
                { "Id": 1058, "QuestionId": 1010, "Name": "The 1st and last character of a Template must be a square bracket indicating a list of related data", "IsAnswer": false },
                { "Id": 1059, "QuestionId": 1010, "Name": "The 1st and last character of a Template must be a curly bracket indicating a group of related data", "IsAnswer": true },
                { "Id": 1060, "QuestionId": 1010, "Name": "CloudFormation allows for 75 Output values", "IsAnswer": false }],
        "Explanation":"CloudFormation is a feature filled services that allow configuration to be passed by various means. Elastic Beanstalk configurations can be passed, but as a resource type. The format is very specific as are the required sections of the template.",
        "Ref" :"http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-waitcondition.html"
    },
    {
        "Id": 56,
        "Name": "Using Elastic Beanstalk you can (select all that apply): (Choose 2)", 
        
        "Options": [
                { "Id": 1055, "QuestionId": 1010, "Name": "Deploy an opsworks stack.", "IsAnswer": false },
                { "Id": 1056, "QuestionId": 1010, "Name": "Deploy an auto-scaling application.", "IsAnswer": true },
                { "Id": 1057, "QuestionId": 1010, "Name": "Deploy an RDS instance.", "IsAnswer": true },
                { "Id": 1058, "QuestionId": 1010, "Name": "Deploy a Cognito user pool", "IsAnswer": false }]
    },
    {
        "Id": 57,
        "Name": "Your company has a large distributed, and manually managed, test environment. For historic reasons the environment is spread over a mixture of hosting providers, and there is now a desire to combine this all in one AWS Region. The main hosting is provided by; AWS, on-premises physical servers, and hosted VMware & Hyper-V. You have been given an opportunity to pitch for your approach during the brief 2 minute elevator ride between meetings. Which of these describes how you would propose to integrate these all into a single automated AWS solutions.", 
        
        "Options": [
                { "Id": 1055, "QuestionId": 1010, "Name": "Make use of CloudFormer to construct a CloudFormation template of each of the environments and then merge the templates into a single hierarchy to pass parameters between the templates and allow automated creation of all or portions of the final environment. Advise that the process is fast and will require little customization before it can be utilized.", "IsAnswer": false },
                { "Id": 1056, "QuestionId": 1010, "Name": "Working with the DevOps team, make use a Physical-to-Virtual conversion tool to convert the simple physical servers into VMs. Then use the VM Import/Export Tool to import these VMs along with the existing VMware and Hyper-V VMs into AWS. The large, or highly customized, or out-of date servers would need to be manually recreated based on standard AMIs with the application deployment captured in Chef or other automation scripts. Make use of CloudFormer to construct one or more CloudFormation template(s) of the instances and services. Within the templates some rework would be needed to script dependencies and parameters to support full automation.", "IsAnswer": true },
                { "Id": 1056, "QuestionId": 1010, "Name": "Work with the operations team to catalogue all the existing servers and applications and map them to standard instance types. Recreate each server as an EC2 instance and image to create an AMI for each. Create a CloudFormation template of the instances and relationships so that the new environment can be deployed in any region.", "IsAnswer": false },
                { "Id": 1056, "QuestionId": 1010, "Name": "Working with the Dev team make use of OpsWorks and clone each of the servers in all the environments. Convert the clones to OpsWorks/Chef definitions and combine into one or more CloudFormation template(s) with required parameters and dependency definitions. Advise that the process is fast and will require little customization before it can be utilized.", "IsAnswer": false }],
        "Explanation":"Migrations is often a complex process and there is rarely one tool fits all the problems. Care needs to be taken to pick the right approach for each problem while still trying to end up with a consistent and improved situation. Making an single hierarchy would not be effective long term for a test environment. making an AMI of each server would create a larger maintenance overhead as each server would be bespoke, rather than standard with a small amount of app customization. No migration like this is ever fast and easy.",
        "Ref" :"http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/cfn-using-cloudformer.html"
    },
    {
        "Id": 58,
        "Name": "To make sure that certain items are not deleted upon a cloudformation stack being deleted, you can:", 
        
        "Options": [
                { "Id": 1055, "QuestionId": 1010, "Name": "Manage those resources separately to cloudformation.", "IsAnswer": false },
                { "Id": 1056, "QuestionId": 1010, "Name": "Create a deletion policy on those resources.", "IsAnswer": true },
                { "Id": 1056, "QuestionId": 1010, "Name": "Disable the 'Delete on Termination' flag", "IsAnswer": false }],
        "Explanation":"See link for information.",
        "Ref" :"http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-attribute-deletionpolicy.html"
    },
    {
        "Id": 59,
        "Name": "The mandatory items in a CloudFormation Template are:", 
        
        "Options": [
                { "Id": 1055, "QuestionId": 1010, "Name": "List of AWS resources and their configurations, input values.", "IsAnswer": false },
                { "Id": 1056, "QuestionId": 1010, "Name": "Template's file format and version number, input values.", "IsAnswer": false },
                { "Id": 1056, "QuestionId": 1010, "Name": "List of AWS resources and their configurations.", "IsAnswer": true }],
        "Explanation":"See link for information.",
        "Ref" :"http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/template-anatomy.html"
    },
    {
        "Id": 60,
        "Name": "An AWS stack can be updated and version controlled just as you would other code.", 
        
        "Options": [
                { "Id": 1055, "QuestionId": 1010, "Name": "True", "IsAnswer": true },
                { "Id": 1056, "QuestionId": 1010, "Name": "False", "IsAnswer": false }]
    },
    {
        "Id": 61,
        "Name": "Your customer is willing to consolidate their log streams (access logs, application logs, security logs, etc.) in one single system. Once consolidated, the customer wants to analyze these logs in real time based on heuristics. From time to time, the customer needs to validate heuristics, which requires going back to data samples extracted from the last 12 hours. What is the best approach to meet your customer's requirements?", 
        
        "Options": [
                { "Id": 1055, "QuestionId": 1010, "Name": "Configure Amazon CloudTrail to receive custom logs, use EMR to apply heuristics the logs", "IsAnswer": false },
                { "Id": 1056, "QuestionId": 1010, "Name": "Send all the log events to Amazon SQS, setup an Auto Scaling group of EC2 servers to consume the logs and apply the heuristics", "IsAnswer": false },
                { "Id": 1057, "QuestionId": 1010, "Name": "Setup an Auto Scaling group of EC2 syslogd servers, store the logs on S3, use EMR to apply heuristics on the logs", "IsAnswer": false },
                { "Id": 1058, "QuestionId": 1010, "Name": "Send all the log events to Amazon Kinesis, develop a client process to apply heuristics on the logs", "IsAnswer": true }],
        "Explanation":"Amazon Kinesis Streams allows for real-time data processing. With Amazon Kinesis Streams, you can continuously collect data as it is generated and promptly react to critical information about your business and operations.",
        "Ref" :"https://aws.amazon.com/kinesis/streams/"
    },
    {
        "Id": 62,
        "Name": "A web-startup runs its very successful social news application on Amazon EC2 with an Elastic Load Balancer, an Auto-Scaling group of Java/Tomcat application-servers, and DynamoDB as data store. The main web-application best runs on m2.xlarge instances since it is highly memory- bound. Each new deployment requires semi-automated creation and testing of a new AMI for the application servers, which takes quite a while and is therefore only done once per week. Recently, a new chat feature has been implemented in node.js and waits to be integrated in the architecture. First tests show that the new component is CPU bound. Because the company has some experience with using Chef, they decided to streamline the deployment process and use AWS OpsWorks as an application life cycle tool to simplify management of the application and reduce the deployment cycles. What configuration in AWS OpsWorks is necessary to integrate the new chat module in the most cost-efficient and flexible way?", 
        
        "Options": [
                { "Id": 1055, "QuestionId": 1010, "Name": "Create one AWS OpsWorks stack, create one AWS OpsWorks layer, create one custom recipe", "IsAnswer": false },
                { "Id": 1056, "QuestionId": 1010, "Name": "Create two AWS OpsWorks stacks, create two AWS OpsWorks layers, create one custom recipe", "IsAnswer": false },
                { "Id": 1057, "QuestionId": 1010, "Name": "Create one AWS OpsWorks stack, create two AWS OpsWorks layers, create one custom recipe", "IsAnswer": true },
                { "Id": 1058, "QuestionId": 1010, "Name": "Create two AWS OpsWorks stacks, create two AWS OpsWorks layers, create two custom recipes", "IsAnswer": false }]
    },
    {
        "Id": 63,
        "Name": "Your team has a tomcat-based java application you need to deploy into development, test and production environments. After some research, you opt to use Elastic Beanstalk due to its tight integration with your developer tools and RDS due to its ease of management. Your QA team lead points out that you need to roll a sanitized set of production data into your environment on a nightly basis. Similarly, other software teams in your org want access to that same restored data via their EC2 instances in your VPC. The optimal setup for persistence and security that meets the above requirements would be the following:", 
        
        "Options": [
                { "Id": 1055, "QuestionId": 1010, "Name": "Create your RDS instance separately and add its IP address to your application's DB connection strings in your code. Alter its security group to allow access to it from hosts within your VPC's IP address block.", "IsAnswer": false },
                { "Id": 1056, "QuestionId": 1010, "Name": "Create your RDS instance separately and pass its DNS name to your's DB connection string as an environment variable. Alter its security group to allow access to it from hosts in your application subnets.", "IsAnswer": false },
                { "Id": 1057, "QuestionId": 1010, "Name": "Create your RDS instance as part of your Elastic Beanstalk definition and alter its security group to allow access to it from hosts in your application subnets.", "IsAnswer": true },
                { "Id": 1058, "QuestionId": 1010, "Name": "Create your RDS instance separately and pass its DNS name to your app's DB connection string as an environment variable. Create a security group for client machines and add it as a valid source for DB traffic to the security group of the RDS instance itself.", "IsAnswer": false }],
        "Explanation":"Elastic Beanstalk provides support for running Amazon RDS instances in your Elastic Beanstalk environment. This works great for development and testing environments, but is not ideal for a production environment because it ties the lifecycle of the database instance to the lifecycle of your application’s environment.",
        "Ref" :"http://docs.aws.amazon.com/elasticbeanstalk/latest/dg/AWSHowTo.RDS.html"
    },
    {
        "Id": 64,
        "Name": "A read only news reporting site with a combined web and application tier and a database tier that receives large and unpredictable traffic demands must be able to respond to these traffic fluctuations automatically. What AWS services should be used meet these requirements?", 
        
        "Options": [
                { "Id": 1055, "QuestionId": 1010, "Name": "Stateless instances for the web and application tier synchronized using ElastiCache Memcached in an autoscaling group monitored with CloudWatch, and RDS with read replicas.", "IsAnswer": true},
                { "Id": 1056, "QuestionId": 1010, "Name": "Stateful instances for the web and application tier in an autoscaling group monitored with CloudWatch, and multi-AZ RDS", "IsAnswer": false },
                { "Id": 1057, "QuestionId": 1010, "Name": "Stateful instances for the web and application tier in an autoscaling group monitored with CloudWatch, and RDS with read replicas", "IsAnswer": false},
                { "Id": 1058, "QuestionId": 1010, "Name": "Stateless instances for the web and application tier synchronized using ElastiCache Memcached in an autoscaling group monitored with CloudWatch, and multi-AZ RDS.", "IsAnswer": false }],
        "Explanation":"'A readonly reporting site' - so stateless and read-replicas can be used to scale. Multi-AZ will not provide the scaling requirements."
    },
    {
        "Id": 65,
        "Name": "Your company is getting ready to do a major public announcement of a social media site on AWS. The website is running on EC2 instances deployed across multiple Availability Zones with an Multi-AZ RDS MySQL Extra Large DB Instance backend. The site performs a high number of small reads and writes per second and relies on an eventual consistency model. After comprehensive tests you discover that there is read contention on RDS MySQL. Which are the best approaches to meet these requirements? Choose 2 answers", 
        
        "Options": [
                { "Id": 1055, "QuestionId": 1010, "Name": "Add an RDS MySQL read replica in each availability zone.", "IsAnswer": true},
                { "Id": 1056, "QuestionId": 1010, "Name": "Deploy ElastiCache in-memory cache running in each availability zone.", "IsAnswer": true },
                { "Id": 1057, "QuestionId": 1010, "Name": "Increase the RDS MySQL instance size and implement provisioned IOPS.", "IsAnswer": false},
                { "Id": 1058, "QuestionId": 1010, "Name": "Implement sharding to distribute load to multiple RDS MySQL Instances.", "IsAnswer": false }],
        "Explanation":"Scale horizontally by adding a read-replica and use caching to improve performance."
    },
    {
        "Id": 66,
        "Name": "You require the ability to analyze a customer's clickstream data on a website, so they can do behavioral analysis. Your customer needs to know what sequence of pages and ads their customer clicked on. This data will be used in real time to modify the page layouts as customers click through the site, to increase stickiness and advertising click-through. Which option meets the requirements for capturing and analyzing this data?", 
        
        "Options": [
                { "Id": 1055, "QuestionId": 1010, "Name": "Log clicks in weblogs by URL, store to Amazon S3, and then analyze with Elastic MapReduce.", "IsAnswer": false},
                { "Id": 1056, "QuestionId": 1010, "Name": "Publish web clicks by session to an Amazon SQS queue; then periodically drain these events to Amazon RDS and analyze with SQL.", "IsAnswer": false },
                { "Id": 1057, "QuestionId": 1010, "Name": "Push web clicks by session to Amazon Kinesis, then analyze behavior using Kinesis workers.", "IsAnswer": true},
                { "Id": 1058, "QuestionId": 1010, "Name": "Write click events directly to Amazon Redshift, and then analyze with SQL.", "IsAnswer": false }],
        "Explanation":"Since the requirement is to analyze data in real time best option is to push the clicks to Kinesis and do anyalysis using the Kinesis workers.",
        "Ref": "http://www.slideshare.net/AmazonWebServices/aws-webcast-introduction-to-amazon-kinesis"
    },
    {
        "Id": 67,
        "Name": "You have a periodic image analysis application that gets some files in input, analyzes them and for each file writes some data in output to a text file. The number of files in input per day is high and concentrated in a few hours of the day. Currently you have a server on EC2 with a large EBS volume that hosts the input data and the results. It takes almost 20 hours per day to complete the process. What services could be used to reduce the elaboration time and improve the availability of the solution?", 
        
        "Options": [
                { "Id": 1055, "QuestionId": 1010, "Name": "S3 to store I/O files, SQS to distribute elaboration commands to a group of hosts working in parallel, Auto Scaling to dynamically size the group of hosts depending on the length of the SQS queue.", "IsAnswer": false},
                { "Id": 1056, "QuestionId": 1010, "Name": "S3 to store I/O files, SNS to distribute elaboration commands to a group of hosts working in parallel, Auto Scaling to dynamically size the group of hosts depending on the number of SNS notifications.", "IsAnswer": false },
                { "Id": 1057, "QuestionId": 1010, "Name": "EBS with Provisioned IOPS (PIOPS) to store I/O files, SNS to distribute elaboration commands to a group of hosts working in parallel, Auto Scaling to dynamically size the group of hosts depending on the number of SNS notifications.", "IsAnswer": false},
                { "Id": 1058, "QuestionId": 1010, "Name": "EBS with Provisioned IOPS (PIOPS) to store I/O files, SQS to distribute elaboration commands to a group of hosts working in parallel. Auto Scaling to dynamically size the group of hosts depending on the length of the SQS queue.", "IsAnswer": true}],
        "Explanation":"Autoscaling should typically be dependent on the size of the SQS queue depth. And since S3 is mainly for object storage, the option to use EBS for I/O files makes more sense."
    }
    ,
    {
        "Id": 68,
        "Name": "You are implementing a URL whitelisting system for a company that wants to restrict outbound HTTP/S connections to specific domains from their EC2-hosted applications. You deploy a single EC2 instance running proxy software and configure it to accept traffic from all subnets and EC2 instances in the VPC. You configure the proxy to only pass through traffic to domains that you define in its whitelist configuration. You have a nightly maintenance window of 10 minutes where all instances fetch new software updates. Each update is about 200MB in size and there are 500 instances in the VPC that routinely fetch updates. After a few days you notice that some machines are falling to successfully download some, but not all, of their updates within the maintenance window. The download URLs used for these updates are correctly listed in the proxy's whitelist configuration and you are able to access them manually using a web browser on the instances. What might be happening? Choose 2 answers", 
        
        "Options": [
                { "Id": 1055, "QuestionId": 1010, "Name": "You are running the proxy on an undersized EC2 instance type so network throughput is not sufficient for all instances to download their updates in time", "IsAnswer": true},
                { "Id": 1056, "QuestionId": 1010, "Name": "You are running the proxy on a sufficiently-sized EC2 instance in a private subnet and its network throughput is being throttled by a NAT running on an undersized EC2 instance", "IsAnswer": false },
                { "Id": 1057, "QuestionId": 1010, "Name": "The route table for the subnets containing the affected EC2 instances is not configured to direct network traffic for the software update locations to the proxy", "IsAnswer": false},
                { "Id": 1058, "QuestionId": 1010, "Name": "You have not allocated enough storage to the EC2 instance running the proxy so the network buffer is filling up, causing some requests to fail", "IsAnswer": true},
                { "Id": 1059, "QuestionId": 1010, "Name": "You are running the proxy in a public subnet but have not allocated enough EIPs to support the needed network throughput through the Internet Gateway (IGW)", "IsAnswer": false}],
        "Explanation":"Its either an undersized EC2 instance in which case you want to use a bigger instance size. Or there is not enough storage allocated on the instance. Hint: Scale vertically (increase instance size) and scale horizontally (add more storage)"
    }
    ,
    {
        "Id": 69,
        "Name": "A company is running a batch analysis every hour on their main transactional DB running on an RDS MySQL instance to populate their central Data Warehouse running on Redshift. During the execution of the batch their transactional applications are very slow. When the batch completes they need to update the top management dashboard with the new data. The dashboard is produced by another system running on-premises that is currently started when a manually-sent email notifies that an update is required. The on-premises system cannot be modified because is managed by another team. How would you optimize this scenario to solve performance issues and automate the process as much as possible?", 
        
        "Options": [
                { "Id": 1055, "QuestionId": 1010, "Name": "Replace RDS with Redshift for the batch analysis and SNS to notify the on-premises system to update the dashboard", "IsAnswer": false},
                { "Id": 1056, "QuestionId": 1010, "Name": "Replace RDS with Redshift for the batch analysis and SQS to send a message to the on-premises system to update the dashboard", "IsAnswer": false },
                { "Id": 1057, "QuestionId": 1010, "Name": "Create an RDS Read Replica for the batch analysis and SNS to notify me on-premises system to update the dashboard", "IsAnswer": true},
                { "Id": 1058, "QuestionId": 1010, "Name": "Create an RDS Read Replica for the batch analysis and SQS to send a message to the on-premises system to update the dashboard.", "IsAnswer": false}],
        "Explanation":"Use SNS to notify. So right away the options with SQS are invalid. Redshift is mainly used for Data Warehousing. This question asks about separating reporting and analytics from transactional (OLTP) traffic. RDS Read replica is a good option for that."
    }
    ,
    {
        "Id": 70,
        "Name": "To serve Web traffic for a popular product, your chief financial officer and IT director have purchased 10 m1.large heavy utilization Reserved Instances (RIs), evenly spread across two availability zones; Route 53 is used to deliver the traffic to an Elastic Load Balancer (ELB). After several months, the product grows even more popular and you need additional capacity. As a result, your company purchases two c3.2xlarge medium utilization RIs. You register the two c3.2xlarge instances with your ELB and quickly find that the m1.large instances are at 100% of capacity and the c3.2xlarge instances have significant capacity that's unused. Which option is the most cost effective and uses EC2 capacity most effectively?", 
        "Options": [
                { "Id": 1055, "QuestionId": 1010, "Name": "Configure Autoscaling group and Launch Configuration with ELB to add up to 10 more on- demand m1.large instances when triggered by Cloudwatch. Shut off c3.2xlarge instances.", "IsAnswer": false},
                { "Id": 1056, "QuestionId": 1010, "Name": "Configure ELB with two c3.2xlarge instances and use on-demand Autoscaling group for up to two additional c3.2xlarge instances. Shut off m1.large instances.", "IsAnswer": false },
                { "Id": 1057, "QuestionId": 1010, "Name": "Route traffic to EC2 m1.large and c3.2xlarge instances directly using Route 53 latency based routing and health checks. Shut off ELB.", "IsAnswer": false},
                { "Id": 1058, "QuestionId": 1010, "Name": "Use a separate ELB for each instance type and distribute load to ELBs with Route 53 weighted round robin.", "IsAnswer": true}],
        "Explanation":"Use Route 53 weighted round robin to distibute the load appropriately by putting the two instance types behind two separate ELBs.",
        "Ref":"https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/routing-policy.html"
    }
  
     ]
}