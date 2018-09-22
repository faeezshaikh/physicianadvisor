{
    "quiz": {
        "name": "Billing & Pricing",
        "logo" : "assets/img/S3.png",
        "time":"20 minutes"
    },
    "questions": [
         {
        "Id": 1,
        "Name": "You need a persistent and durable storage to trace call activity of an IVR (Interactive Voice Response) system. Call duration is mostly in the 2-3 minutes timeframe. Each traced call can be either active or terminated. An external application needs to know each minute the list of currently active calls. Usually there are a few calls/second, but once per month there is a periodic peak up to 1000 calls/second for a few hours. The system is open 24/7 and any downtime should be avoided. Historical data is periodically archived to files. Cost saving is a priority for this project. What database implementation would better fit this scenario, keeping costs as low as possible?" , 
        "Tag":"Costing",
        "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "Use DynamoDB with a 'Calls' table and a Global Secondary Index on a 'State' attribute that can equal to 'active' or 'terminated'. In this way the Global Secondary Index can be used for all items in the table.", "IsAnswer": false },
            { "Id": 1056, "QuestionId": 1010, "Name": "Use RDS Multi-AZ with a 'CALLS'' table and an indexed 'STATE' field that can be equal to 'ACTIVE' or 'TERMINATED'. In this way the SQL query is optimized by the use of the Index.", "IsAnswer": false },
            { "Id": 1057, "QuestionId": 1010, "Name": "Use RDS Multi-AZ with two tables, one for 'ACTIVE_CALLS' and one for 'TERMINATED_CALLS'. In this way the 'ACTIVE_CALLS' table is always small and effective to access.", "IsAnswer": false },
            { "Id": 1058, "QuestionId": 1010, "Name": "Use DynamoDB with a 'Calls' table and a Global Secondary Index on a 'IsActive' attribute that is present for active calls only. In this way the Global Secondary Index is sparse and more effective.", "IsAnswer": true }],
            "Explanation":"Q: Can a global secondary index key be defined on non-unique attributes? Yes. Unlike the primary key on a table, a GSI index does not require the indexed attributes to be unique. Q: Are GSI key attributes required in all items of a DynamoDB table? No. GSIs are sparse indexes. Unlike the requirement of having a primary key, an item in a DynamoDB table does not have to contain any of the GSI keys. If a GSI key has both hash and range elements, and a table item omits either of them, then that item will not be indexed by the corresponding GSI. In such cases, a GSI can be very useful in efficiently locating items that have an uncommon attribute.",
            "Ref":"https://aws.amazon.com/dynamodb/faqs/"

    } ,
     
      {
        "Id": 2,
        "Name": "Your department creates regular analytics reports from your company's log files. All log data is collected in Amazon S3 and processed by daily Amazon Elastic MapReduce (EMR) jobs that generate daily PDF reports and aggregated tables in .csv format for an Amazon Redshift data warehouse. Your CFO requests that you optimize the cost structure for this system. Which of the following alternatives will lower costs without compromising average performance of the system or data integrity for the raw data?", 
        "Tag":"Costing",
        "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "Use reduced redundancy storage (RRS) for all data In S3. Use a combination of Spot Instances and Reserved Instances for Amazon EMR jobs. Use Reserved Instances for Amazon Redshift.", "IsAnswer": false },
            { "Id": 1056, "QuestionId": 1010, "Name": "Use reduced redundancy storage (RRS) for PDF and .csv data in S3. Add Spot Instances to EMR jobs. Use Spot Instances for Amazon Redshift.", "IsAnswer": false },
            { "Id": 1057, "QuestionId": 1010, "Name": "Use reduced redundancy storage (RRS) for PDF and .csv data In Amazon S3. Add Spot Instances to Amazon EMR jobs. Use Reserved Instances for Amazon Redshift.", "IsAnswer": true},
            { "Id": 1058, "QuestionId": 1010, "Name": "Use reduced redundancy storage (RRS) for all data in Amazon S3. Add Spot Instances to Amazon EMR jobs. Use Reserved Instances for Amazon Redshift.", "IsAnswer": false }],
            "Explanation":"Reserved Instances (a.k.a. Reserved Nodes) are appropriate for steady-state production workloads, and offer significant discounts over On-Demand pricing. If you are running EMR in production you should specify an AMI version, Hive version, Pig version, etc. to make sure the version does not change unexpectedly (e.g. when EMR later adds support for a newer version). If your cluster is mission critical, only use Spot instances for task nodes because if the Spot price increases you may lose the instances. In development, use logging and enable debugging to spot and correct errors faster. If you are using GZIP, keep your file size to 1–2 GB because GZIP files cannot be split. Click here to download the white paper on Amazon EMR best practices.",
            "Ref":"https://aws.amazon.com/elasticmapreduce/faqs/"

    } ,
      {
        "Id": 3,
        "Name": "Your website is serving on-demand training videos to your workforce. Videos are uploaded monthly in high resolution MP4 format. Your workforce is distributed globally, often on the move and using company-provided tablets that require the HTTP Live Streaming (HLS) protocol to watch a video. Your company has no video transcoding expertise and if required you may need to pay for a consultant. How do you implement the most cost-efficient architecture without compromising high availability and quality of video delivery?", 
        "Tag":"Costing",
        "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "A video transcoding pipeline running on EC2 using SQS to distribute tasks and Auto Scaling to adjust the number of nodes depending on the length of the queue. EBS volumes to host videos and EBS snapshots to incrementally backup original files after a few days. CloudFront to serve HLS transcoded videos from EC2.", "IsAnswer": false },
            { "Id": 1056, "QuestionId": 1010, "Name": "Elastic Transcoder to transcode original high-resolution MP4 videos to HLS. EBS volumes to host videos and EBS snapshots to incrementally backup original files after a few days. CloudFront to serve HLS transcoded videos from EC2.", "IsAnswer": false },
            { "Id": 1057, "QuestionId": 1010, "Name": "Elastic Transcoder to transcode original high-resolution MP4 videos to HLS. S3 to host videos with Lifecycle Management to archive original files to Glacier after a few days. CloudFront to serve HLS transcoded videos from S3.", "IsAnswer": true },
            { "Id": 1058, "QuestionId": 1010, "Name": "A video transcoding pipeline running on EC2 using SQS to distribute tasks and Auto Scaling to adjust the number of nodes depending on the length of the queue. S3 to host videos with Lifecycle Management to archive all files to Glacier after a few days. CloudFront to serve HLS transcoded videos from Glacier.", "IsAnswer": false }]    
      } ,

      {
        "Id": 4,
        "Name": "Your firm has uploaded a large amount of aerial image data to S3. In the past, in your on- premises environment, you used a dedicated group of servers to batch process this data and used RabbitMQ, an open source messaging system, to get job information to the servers. Once processed the data would go to tape and be shipped offsite. Your manager told you to stay with the current design, and leverage AWS archival storage and messaging services to minimize cost. Which is correct?", 
        "Tag":"Costing",
        "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "Use SNS to pass job messages, use CloudWatch alarms to terminate spot worker instances when they become idle. Once data is processed, change the storage class of the S3 object to Glacier.", "IsAnswer": false },
            { "Id": 1056, "QuestionId": 1010, "Name": "Use SQS for passing job messages, use CloudWatch alarms to terminate EC2 worker instances when they become idle. Once data is processed, change the storage class of the S3 objects to Reduced Redundancy Storage.", "IsAnswer": false },
            { "Id": 1057, "QuestionId": 1010, "Name": "Setup Auto-Scaled workers triggered by queue depth that use spot instances to process messages in SQS. Once data is processed, change the storage class of the S3 objects to Reduced Redundancy Storage.", "IsAnswer": false },
            { "Id": 1058, "QuestionId": 1010, "Name": "Setup Auto-Scaled workers triggered by queue depth that use spot instances to process messages in SQS. Once data is processed, change the storage class of the S3 objects to Glacier.", "IsAnswer": true }],
            "Explanation":"The question key part to focus on is “and leverage AWS archival storage and messaging services to minimize cost.” For that the storage that is the lowest cost in the answers is Glacier, in addition, the messaging cost is less for SQS then for SNS if they both exceed 1 million transactions which is free. The only answer that satisfies the above two criteria is answer C. Also, there does not seem to be an urgency in speed of messaging therefore SQS satisfies that need. SNS being more real time delivery mechanism."

    }
       ,
     {
        "Id": 5,
        "Name": "You are designing a multi-platform web application for AWS. The application will run on EC2 instances and will be accessed from PCs, tablets and smart phones, supported accessing platforms are Windows, MacOS, IOS and Android. Separate sticky session and SSL certificate setups are required for different platform types. Which of the following describes the most cost effective and performance efficient architecture setup?", 
        "Tag":"Deployment, Costing",
        "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "Setup a hybrid architecture to handle session state and SSL certificates on-prem and separate EC2 Instance groups running web applications for different platform types running in a VPC.", "IsAnswer": false },
            { "Id": 1056, "QuestionId": 1010, "Name": "Set up one ELB for all platforms to distribute load among multiple instance under it. Each EC2 instance implements all functionality for a particular platform.", "IsAnswer": false },
            { "Id": 1057, "QuestionId": 1010, "Name": "Assign multiple ELBs to an EC2 Instance or group of EC2 instances running the common components of the web application. One ELB for each platform type. Session stickiness and SSL termination are done at the ELBs.", "IsAnswer": true },
            { "Id": 1058, "QuestionId": 1010, "Name": "Set up two ELBs. The first ELB handles SSL certificates for all platforms and the second ELB handles session stickiness for all platforms. For each ELB, run separate EC2 instance groups to handle the web application for each platform.", "IsAnswer": false }],
        "Explanation":"One ELB cannot handle different SSL certificates but since we are using sticky sessions it must be handled at the ELB level. SSL could be handled on the EC2 instances only with TCP configured ELB, ELB supports sticky sessions only in HTTP/HTTPS configurations. The way the Elastic Load Balancer does session stickiness is on a HTTP/HTTPS listener is by utilizing an HTTP cookie. If SSL traffic is not terminated on the Elastic Load Balancer and is terminated on the back-end instance, the Elastic Load Balancer has no visibility into the HTTP headers and therefore can not set or read any of the HTTP headers being passed back and forth.",
        "Ref":"http://docs.aws.amazon.com/ElasticLoadBalancing/latest/DeveloperGuide/elb-sticky- sessions.html"
    } ,
    {
        "Id": 6,
        "Name": "You have 20 M3.Large Reserved Instances in the us-west-1a Availability Zone and you need to introduce multi-AZ redundancy to your cloud compute infrastructure. To do this, you submit a Reserved Instances modification request to split your 20 reserved instances across the us-west-1a and us-west-1c Availability Zones. How many new Reserved Instance Requests are created?", 
        
        "Options": [
                { "Id": 1055, "QuestionId": 1010, "Name": "None, this is a reserved instance modification request.", "IsAnswer": false },
                { "Id": 1056, "QuestionId": 1010, "Name": "Two, a new Reserved instance request is created for 10 M3.Large in us-west-1a and another request is created for 10 M3.Large instances in us-west-1c.", "IsAnswer": true },
                { "Id": 1056, "QuestionId": 1010, "Name": "One, a new request is created in the us-west-1c Availability Zone for 10 M3.Large instances.", "IsAnswer": false }],
        "Explanation":"When you have an existing reserved instances allocation and you submit a modification request to split the footprint across multiple AZ, new Reserved Instance requests are created in each AZ to match the new footprint requirements.",
        "Ref":"http://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ri-modifying.html"
    }
    ,
    {
        "Id": 7,
        "Name": "You have 3 AWS accounts linked to use consolidated billing. Account 1 has 50TB of data stored using S3, Account 2 has 300TB and Account 3 has 100TB. All storage is standard storage and located in US East (N. Virginia). How much per month do you pay in storage costs only?", 
        
        "Options": [
                { "Id": 1055, "QuestionId": 1010, "Name": "$13,126.50 per month", "IsAnswer": false },
                { "Id": 1056, "QuestionId": 1010, "Name": "$13,500.00 per month", "IsAnswer": false },
                { "Id": 1056, "QuestionId": 1010, "Name": "$13,101.00 per month", "IsAnswer": false },
                { "Id": 1056, "QuestionId": 1010, "Name": "$13,075.50 per month", "IsAnswer": true },
                { "Id": 1056, "QuestionId": 1010, "Name": "$13,050.00 per month", "IsAnswer": false }],
        "Explanation":"Consolidated billing can allow you to take advantage of volume pricing discounts, in this scenario, the total sum of storage used across the 3 accounts is 450TB. The first TB is charged at $0.0300/GB, the next 49TB is $0.0295/GB, and the remaining 400TB is charged at $0.0290/GB. By consolidating the accounts, the cheaper rates are leveraged more often than if the accounts are considered separately.",
        "Ref":"https://aws.amazon.com/s3/pricing/"
    }
   ,
    {
        "Id": 8,
        "Name": "You have multiple AWS accounts linked to a paying account to make use of consolidated billing. You would like to receive an alarm when your total expenses for all accounts exceeds $1000 for a billing cycle. You will need to do which of the following?", 
        
        "Options": [
                { "Id": 1055, "QuestionId": 1010, "Name": "Configure the same billing alert in each of the accounts you would like to monitor.", "IsAnswer": false },
                { "Id": 1056, "QuestionId": 1010, "Name": "Configure a billing alert in the paying account.", "IsAnswer": true }],
        "Explanation":"Once consolidated billing is configured, you may configure billing alerts in the paying account and the alert will be applied to the total cost from all the linked accounts. Billing alerts can still be configured for a specific account if you only require that alert to be applied to that account.",
        "Ref":"https://aws.amazon.com/about-aws/whats-new/2012/10/19/announcing-aws-billing-alerts-for-linked-accounts/"
    }
    ,
    {
        "Id": 9,
        "Name": "You require additional compute resources to run over the weekend and carry the additional load that the system will be under due to an online sale your company is running. What is the most cost-effective EC2 pricing option for this job?", 
        
        "Options": [
                { "Id": 1055, "QuestionId": 1010, "Name": "On-Demand Instances", "IsAnswer": true },
                { "Id": 1056, "QuestionId": 1010, "Name": "Spot Instances + On-Demand Instances", "IsAnswer": false },
                { "Id": 1056, "QuestionId": 1010, "Name": "Reserved Instances (3 year contract)", "IsAnswer": false }],
        "Explanation":"On-Demand instances are an appropriate choice for short-lived but high-availability compute requirements."
    }
    ,
    {
        "Id": 10,
        "Name": "You have 2 AWS accounts linked to use consolidated billing. Account 1 has 4 EC2 T2.Small instances running, Account 2 has 2 EC2 T2.Small instances running and has 4 T2.Small Reserved Instances capacity. Assuming all the instances are in the same availability zone, how many on-demand instances do you have to pay for?", 
        
        "Options": [
                { "Id": 1055, "QuestionId": 1010, "Name": "2", "IsAnswer": true },
                { "Id": 1056, "QuestionId": 1010, "Name": "4", "IsAnswer": false },
                { "Id": 1056, "QuestionId": 1010, "Name": "6", "IsAnswer": false }],
        "Explanation":"Savings for unused Reserved Instances in one AWS account are applied to compatible instances running in other consolidated billing linked accounts."
    }
     ]
}