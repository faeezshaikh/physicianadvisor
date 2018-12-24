{
    "quiz": {
        "name": "Exam 3",
        "logo" : "assets/img/VPC.png",
        "time":"120 minutes"
    },
    "questions": [
      {
        "Id": 1,
        "Name": "What are the benefits of having infrastructure hosted in the AWS Cloud? (Choose three)", 
        "Tag":"",
        "manyoptions":true,
        "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "All of the physical security and most of the data/network security are taken care of for you", "IsAnswer": true},
            { "Id": 1056, "QuestionId": 1010, "Name": "Having complete control over the physical infrastructure", "IsAnswer": false },
            { "Id": 1057, "QuestionId": 1010, "Name": "Increase speed and agility.", "IsAnswer": true },
            { "Id": 1058, "QuestionId": 1010, "Name": "No Upfront costs", "IsAnswer": true },
            { "Id": 1058, "QuestionId": 1010, "Name": "here is no need to worry about security.", "IsAnswer": false }],
        "Explanation": "Option A : “All of the physical security and most of the data/network security are taken care of for you” that’s right but you also have to worry about a lot of things to be secure like setting up the IAMs and creating the MFA and so on. (please read about the shared responsibility model). Option E is not correct as we mentioned. Option B is not correct as the Physical infrastructure is a responsibility of AWS and not the customer. Hence it is not an advantage of moving to the AWS Cloud. Option C is correct: “In a cloud computing environment, new IT resources are only a click away, which means that you reduce the time to make those resources available to your developers from weeks to just minutes. This results in a dramatic increase in agility for the organization, since the cost and time it takes to experiment and develop is significantly lower”. Option D is correct in AWS there is no upfront costs as it follows the “ pay as you go “ model.",
        "Ref":"https://docs.aws.amazon.com/aws-technical-content/latest/aws-overview/six-advantages-of-cloud-computing.html"  
    } 
 
    ,
    {
        "Id": 2,
        "Name": "You want to monitor the CPU utilization of an EC2 resource in AWS. Which of the below services can help in this regard?", 
        "Tag":"",
        "manyoptions":false,
        "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "AWS config", "IsAnswer": false },
            { "Id": 1056, "QuestionId": 1010, "Name": "AWS Inspector", "IsAnswer": false },
            { "Id": 1057, "QuestionId": 1010, "Name": "AWS Cloudwatch", "IsAnswer": true },
            { "Id": 1058, "QuestionId": 1010, "Name": "AWS Trusted Advisor", "IsAnswer": false }],
            "Explanation": "Amazon CloudWatch is a monitoring service for AWS cloud resources and the applications you run on AWS. You can use Amazon CloudWatch to collect and track metrics, collect and monitor log files, set alarms, and automatically react to changes in your AWS resources. Amazon CloudWatch can monitor AWS resources such as Amazon EC2 instances, Amazon DynamoDB tables, and Amazon RDS DB instances, as well as custom metrics generated by your applications and services, and any log files your applications generate. ",
            "Ref":"https://aws.amazon.com/cloudwatch/"  
    } 

    ,
    {
        "Id": 3,
        "Name": "Which of the following is not a part of the Cloud Computing models?", 
        "Tag":"",
        "manyoptions":false,
        "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "Infrastructure as a Service (IaaS)", "IsAnswer": false },
            { "Id": 1056, "QuestionId": 1010, "Name": "Hardware as a Service (HaaS)", "IsAnswer": true },
            { "Id": 1057, "QuestionId": 1010, "Name": "Platform as a Service (PaaS)", "IsAnswer": false },
            { "Id": 1058, "QuestionId": 1010, "Name": "Software as a Service (SaaS)", "IsAnswer": false }],
            "Explanation": "There are 3 Cloud Computing Models: 1) Infrastructure as a Service (IaaS) - Infrastructure as a Service (IaaS) contains the basic building blocks for cloud IT and typically provide access to networking features, computers (virtual or on dedicated hardware), and data storage space. IaaS provides you with the highest level of flexibility and management control over your IT resources and is most similar to existing IT resources that many IT departments and developers are familiar with today. 2) Platform as a Service (PaaS) - Platform as a Service (PaaS) removes the need for your organization to manage the underlying infrastructure (usually hardware and operating systems) and allows you to focus on the deployment and management of your applications. This helps you be more efficient as you don’t need to worry about resource procurement, capacity planning, software maintenance, patching, or any of the other undifferentiated heavy lifting involved in running your application. 3) Software as a Service (SaaS) - Software as a Service (SaaS) provides you with a completed product that is run and managed by the service provider. In most cases, people referring to Software as a Service are referring to end-user applications. With a SaaS offering you do not have to think about how the service is maintained or how the underlying infrastructure is managed; you only need to think about how you will use that particular piece of software. A common example of a SaaS application is web-based email which you can use to send and receive email without having to manage feature additions to the email product or maintain the servers and operating systems that the email program is running on. ",
            "Ref":" https://docs.aws.amazon.com/aws-technical-content/latest/aws-overview/types-of-cloud-computing.html"  
    } 
   

    ,
    {
        "Id": 4,
        "Name": "Which of the following strategies can be used to control access to your Amazon EC2 instances?", 
        "Tag":"",
        "manyoptions":false,
        "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "DB security groups", "IsAnswer": false },
            { "Id": 1056, "QuestionId": 1010, "Name": "IAM policies", "IsAnswer": false },
            { "Id": 1057, "QuestionId": 1010, "Name": "EC2 security groups", "IsAnswer": true },
            { "Id": 1058, "QuestionId": 1010, "Name": "None of these", "IsAnswer": false }],
            "Explanation": "IAM policies allow you to specify what actions your IAM users are allowed to perform against your EC2 Instances. However, when it comes to access control, security groups are what you need in order to define and control the way you want your instances to be accessed, and whether or not certain kind of communications are allowed or not."
    } 
   
    ,
    {
        "Id": 5,
        "Name": "You want to run a survey application for only one day (without interruptions), which AWS EC2 purchase option would you choose?", 
        "Tag":"",
        "manyoptions":false,
        "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "Reserved instances", "IsAnswer": false },
            { "Id": 1056, "QuestionId": 1010, "Name": "Spot instances", "IsAnswer": false },
            { "Id": 1057, "QuestionId": 1010, "Name": "Dedicated instances", "IsAnswer": false },
            { "Id": 1058, "QuestionId": 1010, "Name": "On-demand instances", "IsAnswer": true }],
            "Explanation": "On-Demand Instances—With On-Demand instances, you pay for compute capacity by the hour with no long-term commitments. You can increase or decrease your compute capacity depending on the demands of your application and only pay the specified hourly rate for the instances you use. The use of On-Demand instances frees you from the costs and complexities of planning, purchasing, and maintaining hardware and transforms what are commonly large fixed costs into much smaller variable costs. On-Demand instances also remove the need to buy “safety net” capacity to handle periodic traffic spikes. ",
            "Ref":"https://d1.awsstatic.com/whitepapers/aws-overview.pdf"  
    } 
   
    ,
    {
        "Id": 6,
        "Name": "A company decided to migrate its Oracle database to AWS. Which AWS service can help achieve this without affecting the functionality of the source database?", 
        "Tag":"",
        "manyoptions":false,
        "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "RDS Multi-AZ", "IsAnswer": false },
            { "Id": 1056, "QuestionId": 1010, "Name": "AWS Server Migration Service", "IsAnswer": false },
            { "Id": 1057, "QuestionId": 1010, "Name": "AWS Application Discovery Service", "IsAnswer": false },
            { "Id": 1058, "QuestionId": 1010, "Name": "AWS Database Migration Service", "IsAnswer": true }],
            "Explanation": "AWS Database Migration Service helps you migrate databases to AWS easily and securely. The source database remains fully operational during the migration, minimizing downtime to applications that rely on the database. The AWS Database Migration Service can migrate your data to and from most widely used commercial and open-source databases. The service supports homogenous migrations such as Oracle to Oracle, as well as heterogeneous migrations between different database platforms, such as Oracle to Amazon Aurora or Microsoft SQL Server to MySQL. It also allows you to stream data to Amazon Redshift from any of the supported sources including Amazon Aurora, PostgreSQL, MySQL, MariaDB, Oracle, SAP ASE,and SQL Server, enabling consolidation and easy analysis of data in the petabyte-scale data warehouse. AWS Database Migration Service can also be used for continuous data replication with high availability.",
            "Ref":"https://d1.awsstatic.com/whitepapers/aws-overview.pdf"  
    } 
   
    ,
    {
        "Id": 7,
        "Name": "A company has developed an eCommerce web application and the application needs an uptime of at least 99.5%, which of the following deployment strategies should they use?", 
        "Tag":"",
        "manyoptions":false,
        "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "Deploying the application across multiple VPCs", "IsAnswer": false },
            { "Id": 1056, "QuestionId": 1010, "Name": "Deploying the application across multiple Regions", "IsAnswer": true },
            { "Id": 1057, "QuestionId": 1010, "Name": "Deploying the application across Edge locations", "IsAnswer": false },
            { "Id": 1058, "QuestionId": 1010, "Name": "Deploying the application across multiple subnets", "IsAnswer": false }],
            "Explanation": "The AWS Cloud infrastructure is built around Regions and Availability Zones (AZs). AWS Regions provide multiple, physically separated and isolated Availability Zones which are connected with low latency, high throughput, and highly redundant networking. These Availability Zones offer AWS customers an easier and more effective way to design and operate applications and databases, making them more highly available, fault tolerant, and scalable than traditional single datacenter infrastructures or multi-datacenter infrastructures. For customers who specifically need to replicate their data or applications over greater geographic distances, there are AWS Local Regions. An AWS Local Region is a single datacenter designed to complement an existing AWS Region. Like all AWS Regions, AWS Local Regions are completely isolated from other AWS Regions. The AWS Cloud spans 55 Availability Zones within 18 geographic Regions and one Local Region around the world.",
            "Ref":"https://aws.amazon.com/about-aws/global-infrastructure/"  
    } 
   
    ,
    {
        "Id": 8,
        "Name": "Which of the following services allows for object level storage in AWS?", 
        "Tag":"",
        "manyoptions":false,
        "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "Amazon EBS", "IsAnswer": false },
            { "Id": 1056, "QuestionId": 1010, "Name": "Amazon S3", "IsAnswer": true },
            { "Id": 1057, "QuestionId": 1010, "Name": "Amazon Storage gateway", "IsAnswer": false },
            { "Id": 1058, "QuestionId": 1010, "Name": "Amazon SQS", "IsAnswer": false }],
            "Explanation": "Amazon S3 is object storage built to store and retrieve any amount of data from anywhere – web sites and mobile apps, corporate applications, and data from IoT sensors or devices. It is designed to deliver 99.999999999% durability, and stores data for millions of applications used by market leaders in every industry.",
            "Ref":"https://aws.amazon.com/s3/"  
    } 
   
    ,
    {
        "Id": 9,
        "Name": "One of the benefits of the AWS cloud is that there are many services, where you don’t need to manage their underlying Infrastructure. Which of the following is an example of these services? (Choose two)", 
        "Tag":"",
        "manyoptions":true,
        "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "DynamoDB", "IsAnswer": true },
            { "Id": 1056, "QuestionId": 1010, "Name": "EC2", "IsAnswer": false },
            { "Id": 1057, "QuestionId": 1010, "Name": "Simple Storage Service", "IsAnswer": true },
            { "Id": 1058, "QuestionId": 1010, "Name": "AWS Autoscaling", "IsAnswer": false }],
            "Explanation": "The Simple Storage service and DynamoDB are managed services (i.e. you don’t need to manage the underlying infrastructure)",
            "Ref":" https://aws.amazon.com/dynamodb/ https://aws.amazon.com/s3/"  
    } 
   
    ,
    {
        "Id": 10,
        "Name": "What AWS service allows you to have your own private network in the AWS cloud?", 
        "Tag":"",
        "manyoptions":false,
        "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "AWS Elastic Beanstalk", "IsAnswer": false },
            { "Id": 1056, "QuestionId": 1010, "Name": "AWS Elastic Compute Cloud (Amazon EC2)", "IsAnswer": false },
            { "Id": 1057, "QuestionId": 1010, "Name": "AWS VPC", "IsAnswer": true },
            { "Id": 1058, "QuestionId": 1010, "Name": "AWS SQS", "IsAnswer": false }],
            "Explanation": "A Virtual Private Cloud (VPC) is a private sub-section of AWS that is your own private network. You control what resources you place inside the VPC and the security features around it."
    } 
   
    ,
    {
        "Id": 11,
        "Name": "A company has a DevOps team in its organizational structure. They are looking forward to moving to the AWS cloud. They are wondering if there is an AWS service that can help them manage the infrastructure as code. Which of the following would you suggest for them?", 
        "Tag":"",
        "manyoptions":false,
        "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "AWS Inspector", "IsAnswer": false },
            { "Id": 1056, "QuestionId": 1010, "Name": "AWS Config", "IsAnswer": false },
            { "Id": 1057, "QuestionId": 1010, "Name": "AWS Cloudformation", "IsAnswer": true },
            { "Id": 1058, "QuestionId": 1010, "Name": " Amazon EMR", "IsAnswer": false }],
            "Explanation": "AWS CloudFormation is a service that helps you model and set up your Amazon Web Services resources so that you can spend less time managing those resources and more time focusing on your applications that run in AWS. You create a template that describes all the AWS resources that you want (like Amazon EC2 instances or Amazon RDS DB instances), and AWS CloudFormation takes care of provisioning and configuring those resources for you. You don't need to individually create and configure AWS resources and figure out what's dependent on what; AWS CloudFormation handles all of that. ",
            "Ref":"https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/Welcome.html"  
    } 
   
    ,
    {
        "Id": 12,
        "Name": "When using On-Demand instances in AWS, which of the following is a false statement about its cost?", 
        "Tag":"",
        "manyoptions":false,
        "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "There is no upfront costs for the instance", "IsAnswer": false },
            { "Id": 1056, "QuestionId": 1010, "Name": "You have to pay the termination fees if you terminate the instance", "IsAnswer": true},
            { "Id": 1057, "QuestionId": 1010, "Name": "You are charged per second based on the hourly rate", "IsAnswer": false },
            { "Id": 1058, "QuestionId": 1010, "Name": "You pay for much you use.", "IsAnswer": false }],
            "Explanation": "You don’t need to pay any termination fees when it comes to Ec2 Instances",
            "Ref":"https://aws.amazon.com/ec2/pricing/"  
    } 
   
    ,
    {
        "Id": 13,
        "Name": "A company is planning to develop microservices application consisting of hundreds of services. They decided to host the application on the AWS cloud. Since there are a large number of services produced by the application, it needs a powerful tool for analyzing and debugging. Which of the following services can meet this requirement?", 
        "Tag":"",
        "manyoptions":false,
        "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "AWS OpsWorks", "IsAnswer": false },
            { "Id": 1056, "QuestionId": 1010, "Name": "AWS Config", "IsAnswer": false },
            { "Id": 1057, "QuestionId": 1010, "Name": "Amazon Aurora", "IsAnswer": false },
            { "Id": 1058, "QuestionId": 1010, "Name": "AWS X-Ray", "IsAnswer": true }],
            "Explanation": "AWS X-Ray helps developers analyze and debug production, distributed applications, such as those built using a microservices architecture. With X-Ray, you can understand how your application and its underlying services are performing to identify and troubleshoot the root cause of performance issues and errors. X-Ray provides an end-to-end view of requests as they travel through your application, and shows a map of your application’s underlying components. You can use X-Ray to analyze both applications in development and in production, from simple three-tier applications to complex microservices applications consisting of thousands of services.",
            "Ref":"https://aws.amazon.com/xray/"  
    } 
    ,
    {
        "Id": 14,
        "Name": "Upgrading a server with a larger hard drive is an example of __________ . While adding more hard drives to a storage array is an example of __________ .", 
        "Tag":"",
        "manyoptions":false,
        "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "Vertical Scaling, Horizontal Scaling.", "IsAnswer": true},
            { "Id": 1056, "QuestionId": 1010, "Name": "Vertical Scaling, Vertical Scaling.", "IsAnswer": false },
            { "Id": 1057, "QuestionId": 1010, "Name": "Horizontal Scaling, Vertical Scaling.", "IsAnswer": false },
            { "Id": 1058, "QuestionId": 1010, "Name": "Horizontal Scaling, Horizontal Scaling.", "IsAnswer": false }],
            "Explanation": "Scaling Vertically: Scaling vertically takes place through an increase in the specifications of an individual resource (e.g., upgrading a server with a larger hard drive or a faster CPU). On Amazon EC2,this can easily be achieved by stopping an instance and resizing it to an instance type that has more RAM, CPU, IO,or networking capabilities. This way of scaling can eventually hit a limit and it is not always a cost efficient or highly available approach. However, it is very easy to implement and can be sufficient for many use cases especially in the short term.// Scaling Horizontally: Scaling horizontally takes place through an increase in the number of resources (e.g., adding more hard drives to a storage array or adding more servers to support an application). This is a great way to build Internet-scale applications that leverage the elasticity of cloud computing",
            "Ref":"https://d0.awsstatic.com/whitepapers/AWS_Cloud_Best_Practices.pdf"  
    } 
    ,
    {
        "Id": 15,
        "Name": "A user is planning to host a scalable, dynamic web application on AWS. Which of the services may not be required by the user to achieve automated scalability?", 
        "Tag":"",
        "manyoptions":false,
        "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "CloudWatch", "IsAnswer": false },
            { "Id": 1056, "QuestionId": 1010, "Name": "S3", "IsAnswer": true },
            { "Id": 1057, "QuestionId": 1010, "Name": "AutoScaling", "IsAnswer": false },
            { "Id": 1058, "QuestionId": 1010, "Name": "AWS EC2 instances", "IsAnswer": false }],
            "Explanation": "The user can achieve automated scaling by launching different EC2 instances and making them a part of an ELB. Cloudwatch will be used to monitor the resources and based on the scaling need it will trigger policies. AutoScaling is then used to scale up or down the instances."
    } 
    ,
    {
        "Id": 16,
        "Name": "An organization has 500 employees. The organization wants to set up AWS access for each department. Which of the below-mentioned options is a possible solution?", 
        "Tag":"",
        "manyoptions":false,
        "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "Create IAM roles based on the permission and assign users to each role", "IsAnswer": false },
            { "Id": 1056, "QuestionId": 1010, "Name": "Create IAM users and provide individual permission to each", "IsAnswer": false },
            { "Id": 1057, "QuestionId": 1010, "Name": "Create IAM groups based on the permission and assign IAM users to the groups", "IsAnswer": true },
            { "Id": 1058, "QuestionId": 1010, "Name": "t is not possible to manage more than 100 IAM users with AWS", "IsAnswer": false }],
            "Explanation": "An IAM group is a collection of IAM users. Groups let the user specify permissions for a collection of users, which can make it easier to manage the permissions for those users."
    } 
    ,
    {
        "Id": 17,
        "Name": "How can you display the distribution of AWS spending?", 
        "Tag":"",
        "manyoptions":false,
        "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "By contacting AWS finance team", "IsAnswer": false },
            { "Id": 1056, "QuestionId": 1010, "Name": "By contacting the AWS support team", "IsAnswer": false },
            { "Id": 1057, "QuestionId": 1010, "Name": "Using AWS Cost Explorer", "IsAnswer": true },
            { "Id": 1058, "QuestionId": 1010, "Name": "Using Amazon Dev Pay", "IsAnswer": false }],
            "Explanation": "Cost Explorer is a free tool that you can use to view your costs. You can view data up to the last 13 months, forecast how much you are likely to spend for the next three months, and get recommendations for what Reserved Instances to purchase. You can use Cost Explorer to see patterns in how much you spend on AWS resources over time, identify areas that need further inquiry, and see trends that you can use to understand your costs. You also can specify time ranges for the data, and view time data by day or by month. ",
            "Ref":"https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/cost-explorer-what-is.html"  
    } 
    ,
    {
        "Id": 18,
        "Name": "Which of the following can be used as an additional layer of security, using a username and password when logging into the AWS Console?", 
        "Tag":"",
        "manyoptions":false,
        "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "Secondary user name", "IsAnswer": false },
            { "Id": 1056, "QuestionId": 1010, "Name": "Secondary password", "IsAnswer": false },
            { "Id": 1057, "QuestionId": 1010, "Name": "Root access privileges", "IsAnswer": false },
            { "Id": 1058, "QuestionId": 1010, "Name": "Multi-Factor Authentication (MFA)", "IsAnswer": true }],
            "Explanation": "AWS Multi-Factor Authentication (MFA) is a simple best practice that adds an extra layer of protection on top of your user name and password.",
            "Ref":"https://aws.amazon.com/iam/details/mfa/"  
    } 
    ,
    {
        "Id": 19,
        "Name": "Your company is developing a critical application andthe security of the application is one of their first priorities. Which of the following AWS services provides infrastructure security optimization recommendations?", 
        "Tag":"",
        "manyoptions":false,
        "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "AWS Application Programming Interface (API)", "IsAnswer": false },
            { "Id": 1056, "QuestionId": 1010, "Name": "AWS Management Console", "IsAnswer": false },
            { "Id": 1057, "QuestionId": 1010, "Name": "Amazon Aurora", "IsAnswer": false },
            { "Id": 1058, "QuestionId": 1010, "Name": "AWS Trusted Advisor", "IsAnswer": true }],
            "Explanation": "AWS Trusted Advisor is an online resource to help you reduce cost, increase performance, and improve security by optimizing your AWS environment, Trusted Advisor provides real time guidance to help you provision your resources following AWS best practices.",
            "Ref":"https://aws.amazon.com/premiumsupport/trustedadvisor/"  
    } 
    ,
    {
        "Id": 20,
        "Name": "You are planning to host a large eCommerce application on the AWS Cloud. One of your major concerns is Internet attacks, such as DDoS attacks. Which of the following services can help mitigate this concern? Choose 2 answers.", 
        "Tag":"",
        "manyoptions":true,
        "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "CloudFront", "IsAnswer": true },
            { "Id": 1056, "QuestionId": 1010, "Name": "AWS Shield", "IsAnswer": true },
            { "Id": 1057, "QuestionId": 1010, "Name": "AWS EC2", "IsAnswer": true },
            { "Id": 1058, "QuestionId": 1010, "Name": "AWS Config", "IsAnswer": false }],
            "Explanation": "AWS provides flexible infrastructure and services that help customers implement strong DDoS mitigations and create highly available application architectures that follow AWS Best Practices for DDoS Resiliency. These include services such as Amazon Route 53, Amazon CloudFront, Elastic Load Balancing, and AWS WAF to control and absorb traffic, and deflect unwanted requests. These services integrate with AWS Shield, a managed DDoS protection service that provides always-on detection and automatic inline mitigations to safeguard web applications running on AWS.",
            "Ref":"https://aws.amazon.com/answers/networking/aws-ddos-attack-mitigation/"
    } 
    ,
    {
        "Id": 21,
        "Name": "", 
        "Tag":"",
        "manyoptions":false,
        "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "", "IsAnswer": false },
            { "Id": 1056, "QuestionId": 1010, "Name": "", "IsAnswer": false },
            { "Id": 1057, "QuestionId": 1010, "Name": "", "IsAnswer": false },
            { "Id": 1058, "QuestionId": 1010, "Name": "", "IsAnswer": false }],
            "Explanation": "",
            "Ref":""  
    } 
    ,
    {
        "Id": 22,
        "Name": "", 
        "Tag":"",
        "manyoptions":false,
        "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "", "IsAnswer": false },
            { "Id": 1056, "QuestionId": 1010, "Name": "", "IsAnswer": false },
            { "Id": 1057, "QuestionId": 1010, "Name": "", "IsAnswer": false },
            { "Id": 1058, "QuestionId": 1010, "Name": "", "IsAnswer": false }],
            "Explanation": "",
            "Ref":""  
    } 
    ,
    {
        "Id": 23,
        "Name": "", 
        "Tag":"",
        "manyoptions":false,
        "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "", "IsAnswer": false },
            { "Id": 1056, "QuestionId": 1010, "Name": "", "IsAnswer": false },
            { "Id": 1057, "QuestionId": 1010, "Name": "", "IsAnswer": false },
            { "Id": 1058, "QuestionId": 1010, "Name": "", "IsAnswer": false }],
            "Explanation": "",
            "Ref":""  
    } 
    ,
    {
        "Id": 24,
        "Name": "", 
        "Tag":"",
        "manyoptions":false,
        "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "", "IsAnswer": false },
            { "Id": 1056, "QuestionId": 1010, "Name": "", "IsAnswer": false },
            { "Id": 1057, "QuestionId": 1010, "Name": "", "IsAnswer": false },
            { "Id": 1058, "QuestionId": 1010, "Name": "", "IsAnswer": false }],
            "Explanation": "",
            "Ref":""  
    } 
    ,
    {
        "Id": 25,
        "Name": "", 
        "Tag":"",
        "manyoptions":false,
        "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "", "IsAnswer": false },
            { "Id": 1056, "QuestionId": 1010, "Name": "", "IsAnswer": false },
            { "Id": 1057, "QuestionId": 1010, "Name": "", "IsAnswer": false },
            { "Id": 1058, "QuestionId": 1010, "Name": "", "IsAnswer": false }],
            "Explanation": "",
            "Ref":""  
    } 
    ,
    {
        "Id": 26,
        "Name": "", 
        "Tag":"",
        "manyoptions":false,
        "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "", "IsAnswer": false },
            { "Id": 1056, "QuestionId": 1010, "Name": "", "IsAnswer": false },
            { "Id": 1057, "QuestionId": 1010, "Name": "", "IsAnswer": false },
            { "Id": 1058, "QuestionId": 1010, "Name": "", "IsAnswer": false }],
            "Explanation": "",
            "Ref":""  
    } 
    ,
    {
        "Id": 27,
        "Name": "", 
        "Tag":"",
        "manyoptions":false,
        "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "", "IsAnswer": false },
            { "Id": 1056, "QuestionId": 1010, "Name": "", "IsAnswer": false },
            { "Id": 1057, "QuestionId": 1010, "Name": "", "IsAnswer": false },
            { "Id": 1058, "QuestionId": 1010, "Name": "", "IsAnswer": false }],
            "Explanation": "",
            "Ref":""  
    } 
    ,
    {
        "Id": 28,
        "Name": "", 
        "Tag":"",
        "manyoptions":false,
        "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "", "IsAnswer": false },
            { "Id": 1056, "QuestionId": 1010, "Name": "", "IsAnswer": false },
            { "Id": 1057, "QuestionId": 1010, "Name": "", "IsAnswer": false },
            { "Id": 1058, "QuestionId": 1010, "Name": "", "IsAnswer": false }],
            "Explanation": "",
            "Ref":""  
    } 
    ,
    {
        "Id": 29,
        "Name": "", 
        "Tag":"",
        "manyoptions":false,
        "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "", "IsAnswer": false },
            { "Id": 1056, "QuestionId": 1010, "Name": "", "IsAnswer": false },
            { "Id": 1057, "QuestionId": 1010, "Name": "", "IsAnswer": false },
            { "Id": 1058, "QuestionId": 1010, "Name": "", "IsAnswer": false }],
            "Explanation": "",
            "Ref":""  
    } 
    ,
    {
        "Id": 30,
        "Name": "", 
        "Tag":"",
        "manyoptions":false,
        "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "", "IsAnswer": false },
            { "Id": 1056, "QuestionId": 1010, "Name": "", "IsAnswer": false },
            { "Id": 1057, "QuestionId": 1010, "Name": "", "IsAnswer": false },
            { "Id": 1058, "QuestionId": 1010, "Name": "", "IsAnswer": false }],
            "Explanation": "",
            "Ref":""  
    } 
   
    
    ]
}
