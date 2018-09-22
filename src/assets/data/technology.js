{
    "quiz": {
        "name": "Technology",
        "logo" : "assets/img/VPC.png",
        "time":"20 minutes"
    },
    "questions": [
         {
        "Id": 1,
        "Name": "You have deployed a web application, targeting a global audience across multiple AWS Regions under the domain name cloudpros.com. You decide to use Route53 Latency-Based Routing to serve web requests to users from the region closest to the user. To provide business continuity in the event of server downtime you configure weighted record sets associated with two web servers in separate Availability Zones per region. During a DR test you notice that when you disable all web servers in one of the regions Route53 does not automatically direct all users to the other region. What could be happening? Choose 2 answers", 
        "Tag":"ha",
        "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "You did not set 'Evaluate Target Health' to 'Yes' on the latency alias resource record set associated with example.com in the region where you disabled the servers", "IsAnswer": true },
            { "Id": 1056, "QuestionId": 1010, "Name": "The value of the weight associated with the latency alias resource record set in the region with the disabled servers is higher than the weight for the other region", "IsAnswer": false },
            { "Id": 1057, "QuestionId": 1010, "Name": "One of the two working web servers in the other region did not pass its HTTP health check", "IsAnswer": false },
            { "Id": 1058, "QuestionId": 1010, "Name": "Latency resource record sets cannot be used in combination with weighted resource record sets", "IsAnswer": false },
            { "Id": 1059, "QuestionId": 1010, "Name": "You did not setup an HTTP health check for one or more of the weighted resource record sets associated with the disabled web servers", "IsAnswer": true }],
            "Explanation":"For both latency alias resource record sets, you set the value of “Evaluate Target Health” to Yes. You use the Evaluate Target Health setting for each latency alias resource record set to make Amazon Route 53 evaluate the health of the alias targets—the weighted resource record sets— and respond accordingly.",
            "Ref":"http://docs.aws.amazon.com/Route53/latest/DeveloperGuide/dns-failover-complex-configs.html"

    },

      {
        "Id": 2,
        "Name": "An international company has deployed a multi-tier web application that relies on DynamoDB in a single region. For regulatory reasons they need disaster recovery capability in a separate region with a Recovery Time Objective of 2 hours and a Recovery Point Objective of 24 hours. They should synchronize their data on a regular basis and be able to provision the web application rapidly using CloudFormation. The objective is to minimize changes to the existing web application, control the throughput of DynamoDB used for the synchronization of data, and synchronize only the modified elements. Which design would you choose to meet these requirements?", 
        "Tag":"ha",
        "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "Use AWS Data Pipeline to schedule a DynamoDB cross region copy once a day, create a 'LastUpdated' attribute in your DynamoDB table that would represent the timestamp of the last update and use it as a filter", "IsAnswer": false },
            { "Id": 1056, "QuestionId": 1010, "Name": "Use AWS Data Pipeline to schedule an export of the DynamoDB table to S3 in the current region once a day, then schedule another task immediately after it that will import data from S3 to DynamoDB in the other region", "IsAnswer": true },
            { "Id": 1057, "QuestionId": 1010, "Name": "Use EMR and write a custom script to retrieve data from DynamoDB in the current region using a SCAN operation and push it to DynamoDB in the second region", "IsAnswer": false },
            { "Id": 1058, "QuestionId": 1010, "Name": "Send also each write into an SQS queue in the second region, use an auto-scaling group behind the SQS queue to replay the write in the second region", "IsAnswer": false }],
            "Explanation":"Export of dynamo DB is incremental and it will amend the backup with latest changes."

    },
      {
        "Id": 3,
        "Name": "Your company currently has a 2-tier web application running in an on-premises data center. You have experienced several infrastructure failures in the past few months resulting in significant financial losses. Your CIO is strongly considering moving the application to AWS. While working on achieving buy-In from the other company executives, he asks you to develop a disaster recovery plan to help improve business continuity in the short term. He specifies a target Recovery Time Objective (RTO) of 4 hours and a Recovery Point Objective (RPO) of 1 hour or less. He also asks you to implement the solution within 2 weeks. Your database is 200GB in size and you have a 20Mbps Internet connection. How would you do this while minimizing costs?", 
        "Tag":"ha",
        "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "Create an EBS backed private AMI which includes a fresh install of your application. Develop a CloudFormation template which includes your AMI and the required EC2, AutoScaling, and ELB resources to support deploying the application across Multiple-Availability-Zones. Asynchronously replicate transactions from your on-premises database to a database instance in AWS across a secure VPN connection.", "IsAnswer": true},
            { "Id": 1056, "QuestionId": 1010, "Name": "Deploy your application on EC2 instances within an Auto Scaling group across multiple availability zones. Asynchronously replicate transactions from your on-premises database to a database instance in AWS across a secure VPN connection.", "IsAnswer": false },
            { "Id": 1057, "QuestionId": 1010, "Name": "Create an EBS backed private AMI which includes a fresh install of your application. Setup a script in your data center to backup the local database every 1 hour and to encrypt and copy the resulting file to an S3 bucket using multi-part upload.", "IsAnswer": false },
            { "Id": 1058, "QuestionId": 1010, "Name": "Install your application on a compute-optimized EC2 instance capable of supporting the application's average load. Synchronously replicate transactions from your on-premises database to a database instance in AWS across a secure Direct Connect connection.", "IsAnswer": false }]

    },
      {
        "Id": 4,
        "Name": "You would like to create a mirror image of your production environment in another region for disaster recovery purposes. Which of the following AWS resources do not need to be recreated in the second region? Choose 2 answers.", 
        "Tag":"ha",
        "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "Route53 Record Sets", "IsAnswer": true },
            { "Id": 1056, "QuestionId": 1010, "Name": "Launch Configurations", "IsAnswer": false },
            { "Id": 1057, "QuestionId": 1010, "Name": "EC2 Key Pairs", "IsAnswer": false },
            { "Id": 1058, "QuestionId": 1010, "Name": "Security Groups", "IsAnswer": false },
            { "Id": 1059, "QuestionId": 1010, "Name": "IAM Roles", "IsAnswer": true },
            { "Id": 1060, "QuestionId": 1010, "Name": "Elastic IP Addresses (EIP)", "IsAnswer": false }]

    },
     
      {
        "Id": 5,
        "Name": "Your company runs a customer facing event registration site. This site is built with a 3-tier architecture with web and application tier servers and a MySQL database. The application requires 6 web tier servers and 6 application tier servers for normal operation, but can run on a minimum of 65% server capacity and a single MySQL database. When deploying this application in a region with three availability zones (AZs), which architecture provides high availability?", 
        "Tag":"ha",
        "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "A web tier deployed across 2 AZs with 3 EC2 (Elastic Compute Cloud) instances in each A2 inside an Auto Scaling Group behind an ELB (elastic load balancer), and an application tier deployed across 2 AZs with 3 EC2 instances In each AZ inside an Auto Scaling Group behind an ELB, and one RDS (Relational Database Service) instance deployed with read replicas in the other AZ.", "IsAnswer": false },
            { "Id": 1056, "QuestionId": 1010, "Name": "A web tier deployed across 3 AZs with 2 EC2 (Elastic Compute Cloud) instances in each AZ inside an Auto Scaling Group behind an ELB (elastic load balancer), and an application tier deployed across 3 AZs with 2 EC2 instances In each AZ inside an Auto Scaling Group behind an ELB, and a Multi-AZ RDS (Relational Database Service) deployment.", "IsAnswer": true },
            { "Id": 1057, "QuestionId": 1010, "Name": "A web tier deployed across 2 AZs with 3 EC2 (Elastic Compute Cloud) instances in each AZ inside an Auto Scaling Group behind an ELB (elastic load balancer), and an application tier deployed across 2 AZs with 3 EC2 instances in each AZ inside an Auto Scaling Group behind an ELB, and a Multi-AZ RDS (Relational Database Service) deployment", "IsAnswer": false },
            { "Id": 1058, "QuestionId": 1010, "Name": "A web tier deployed across 3 AZs with 2 EC2 (Elastic Compute Cloud) instances in each AZ inside an Auto Scaling Group behind an ELB (elastic load balancer), and an application tier deployed across 3 AZs with 2 EC2 instances in each AZ inside an Auto Scaling Group behind an ELB, and one RDS (Relational Database Service) instance deployed with read replicas in the two other AZs.", "IsAnswer": false }],
        "Explanation":"You need 3 AZs with 2 EC2 instances in each AZ, so that if one AZ goes down you have 6 out of 9 (66.66%) availability all the time. And for high-availability you need multi-AZ RDS. See link for more information",
        "Ref":"http://highscalability.com/blog/2016/1/11/a-beginners-guide-to-scaling-to-11-million-users-on-amazons.html"

    },
      {
        "Id": 6,
        "Name": "An ERP application is deployed across multiple AZs in a single region. In the event of failure, the Recovery Time Objective (RTO) must be less than 3 hours, and the Recovery Point Objective (RPO) must be 15 minutes. The customer realizes that data corruption occurred roughly 1.5 hours ago. What DR strategy could be used to achieve this RTO and RPO in the event of this kind of failure?", 
        "Tag":"ha",
        "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "Take 15 minute DB backups stored in Glacier with transaction logs stored in S3 every 5 minutes.", "IsAnswer": false },
            { "Id": 1056, "QuestionId": 1010, "Name": "Use synchronous database master-slave replication between two availability zones.", "IsAnswer": false },
            { "Id": 1057, "QuestionId": 1010, "Name": "Take hourly DB backups to EC2 instance store volumes with transaction logs stored In S3 every 5 minutes.", "IsAnswer": false },
            { "Id": 1058, "QuestionId": 1010, "Name": "Take hourly DB backups to S3, with transaction logs stored in S3 every 5 minutes.", "IsAnswer": true}]

    },
    
    {
        "Id": 7,
        "Name": "In the Pilot Light recovery strategy, the system could be failed-over by using: (select all that apply) (Choose 3)", 
        
        "Options": [
                { "Id": 1055, "QuestionId": 1010, "Name": "An external monitoring tool and script to modify the DNS records", "IsAnswer": true },
                { "Id": 1056, "QuestionId": 1010, "Name": "Amazon Route53", "IsAnswer": true },
                { "Id": 1056, "QuestionId": 1010, "Name": "Manual failover", "IsAnswer": true },
                { "Id": 1056, "QuestionId": 1010, "Name": "S3", "IsAnswer": false }],
        "Explanation":"The mechanism for failover is completely up to your business and will need to adhere to your RTO and RPO requirements."
    },
     {
        "Id": 8,
        "Name": "You are migrating a legacy client-server application to AWS. The application responds to a specific DNS domain (e.g. www.example.com) and has a 2-tier architecture, with multiple application servers and a database server. Remote clients use TCP to connect to the application servers. The application servers need to know the IP address of the clients in order to function properly and are currently taking that information from the TCP socket. A Multi-AZ RDS MySQL instance will be used for the database. During the migration you can change the application code, but you have to file a change request. How would you implement the architecture on AWS in order to maximize scalability and high availability?", 
        "Tag":"HA, Scalability, Cloud Mugration",
        "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "File a change request to implement Alias Resource support in the application. Use Route 53 Alias Resource Record to distribute load on two application servers in different AZs.", "IsAnswer": false },
            { "Id": 1056, "QuestionId": 1010, "Name": "File a change request to implement Latency Based Routing support in the application. Use Route 53 with Latency Based Routing enabled to distribute load on two application servers in different AZs.", "IsAnswer": false },
            { "Id": 1057, "QuestionId": 1010, "Name": "File a change request to implement Cross-Zone support in the application. Use an ELB with a TCP Listener and Cross-Zone Load Balancing enabled, two application servers in different AZs.", "IsAnswer": false },
            { "Id": 1058, "QuestionId": 1010, "Name": "File a change request to implement Proxy Protocol support in the application. Use an ELB with a TCP Listener and Proxy Protocol enabled to distribute load on two application servers in different AZs.", "IsAnswer": true}],
            "Explanation":"See link for more info",
            "Ref":"https://aws.amazon.com/blogs/aws/elastic-load-balancing-adds-support-for-proxy-protocol/"
    } 
     ,
     {
        "Id": 9,
        "Name": "You are designing Internet connectivity for your VPC. The Web servers must be available on the Internet. The application must have a highly available architecture. Which alternatives should you consider? Choose 2 answers", 
        "Tag":"HA",
        "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "Assign EIPs to all Web servers. Configure a Route53 record set with all EIPs, with health checks and DNS failover.", "IsAnswer": true },
            { "Id": 1056, "QuestionId": 1010, "Name": "Configure a NAT instance in your VPC. Create a default route via the NAT Instance and associate it with all subnets. Configure a DNS A record that points to the NAT Instance public IP address.", "IsAnswer": false },
            { "Id": 1057, "QuestionId": 1010, "Name": "Configure a CloudFront distribution and configure the origin to point to the private IP addresses of your Web servers. Configure a Route53 CNAME record to your CloudFront distribution.", "IsAnswer": false },
            { "Id": 1058, "QuestionId": 1010, "Name": "Place all your Web servers behind ELB. Configure a Route53 CNAME to point to the ELB DNS name.", "IsAnswer": true },
            { "Id": 1058, "QuestionId": 1010, "Name": "Configure ELB with an EIP. Place all your Web servers behind ELB. Configure a Route53 A record that points to the EIP.", "IsAnswer": false }]
    } 
     ,
     {
        "Id": 10,
        "Name": "A newspaper organization has a on-premises application which allows the public to search Its back catalogue and retrieve individual newspaper pages via a website written in Java. They have scanned the old newspapers into JPEGs (approx. 17TB) and used Optical Character Recognition (OCR) to populate a commercial search product. The hosting platform and software are now end of life and the organization wants to migrate its archive to AWS and produce a cost efficient architecture and still be designed for availability and durability. Which is the most appropriate?", 
        "Tag":"Cloud Migration, HA",
        "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "Model the environment using CloudFormation, use an EC2 instance running Apache webserver and an open source search application, stripe multiple standard EBS volumes together to store the JPEGs and search index", "IsAnswer": false },
            { "Id": 1056, "QuestionId": 1010, "Name": "Use a single-AZ RDS MySQL instance to store the search index and the JPEG Images, use an EC2 Instance to serve the website and translate user queries into SQL", "IsAnswer": false },
            { "Id": 1057, "QuestionId": 1010, "Name": "Use a CloudFront download distribution to serve the JPEGs to the end users and install the current commercial search product, along with a Java Container for the website on EC2 instances and use Route53 with DNS round-robin", "IsAnswer": false },
            { "Id": 1058, "QuestionId": 1010, "Name": "Use S3 with standard redundancy to store and serve the scanned files, use CloudSearch for query processing, and use Elastic Beanstalk to host the website across multiple availability zones", "IsAnswer": true },
            { "Id": 1058, "QuestionId": 1010, "Name": "Use S3 with reduced redundancy to store and serve the scanned files, install the commercial search application on EC2 instances and configure with auto-scaling and an Elastic Load Balancer", "IsAnswer": false }],
            "Explanation":"Cloud search is the perfect option for the search related content."
    } 
   
     ]
}