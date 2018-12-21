{
    "quiz": {
        "name": "Security",
        "logo" : "assets/img/IAM.png",
        "time":"20 minutes"
    },
    "questions": [ {
        "Id": 1,
        "Name": "With regard to IAM, which of the following best describes a Group?", 
        "manyoptions":false,
        "Tag":"Security",
        "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "A collection of AWS accounts", "IsAnswer": false },
            { "Id": 1056, "QuestionId": 1010, "Name": "It's the group of EC2 machines that gain the permissions specified in the Group.", "IsAnswer": false },
            { "Id": 1057, "QuestionId": 1010, "Name": "There's no Group in IAM, but only Users and Resources.", "IsAnswer": false },
            { "Id": 1058, "QuestionId": 1010, "Name": "A collection of users.", "IsAnswer": true }],
            "Explanation":"Use groups to assign permissions to IAM users Instead of defining permissions for individual IAM users, it’s usually more convenient to create groups that relate to job functions (administrators, developers, accounting, etc.), define the relevant permissions for each group, and then assign IAM users to those groups. All the users in an IAM group inherit the permissions assigned to the group. That way, you can make changes for everyone in a group in just one place. As people move around in your company, you can simply change what IAM group their IAM user belongs to.",
            "Ref":"http://docs.aws.amazon.com/IAM/latest/UserGuide/best-practices.html#use-groups-for- permissions"
    },
      {
        "Id": 2,
        "Name": "A web company is looking to implement an intrusion detection and prevention system into their deployed VPC. This platform should have the ability to scale to thousands of instances running inside of the VPC. How should they architect their solution to achieve these goals?", 
        "manyoptions":false,
        "Tag":"Security",
        "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "Configure each host with an agent that collects all network traffic and sends that traffic to the IDS/IPS platform for inspection.", "IsAnswer": false },
            { "Id": 1056, "QuestionId": 1010, "Name": "Configure an instance with monitoring software and the elastic network interface (ENI) set to promiscuous mode packet sniffing to see all traffic across the VPC.", "IsAnswer": false },
            { "Id": 1057, "QuestionId": 1010, "Name": "Create a second VPC and route all traffic from the primary application VPC through the second VPC where the scalable virtualized IDS/IPS platform resides.", "IsAnswer": true },
            { "Id": 1058, "QuestionId": 1010, "Name": "Configure servers running in the VPC using the host-based 'route' commands to send all traffic through the platform to a scalable virtualized IDS/IPS.", "IsAnswer": false }]

    } ,
    {
        "Id": 3,
        "Name": "Which of the following AWS technologies can be used to mitigate against DDoS (Choose 2)",
        "manyoptions":true,
        
        
        "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "CloudFront", "IsAnswer": true },
            { "Id": 1056, "QuestionId": 1010, "Name": "EC2", "IsAnswer": false },
            { "Id": 1057, "QuestionId": 1010, "Name": "CloudTrail", "IsAnswer": false},
            { "Id": 1058, "QuestionId": 1010, "Name": "Route53", "IsAnswer": true }]
    },
    {
        "Id": 4,
        "Name": "What is NTP Amplification?", 
        "manyoptions":false,
        
        "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "When the attacker sends a flood of requests to a target server from multiple machines.", "IsAnswer": false },
            { "Id": 1056, "QuestionId": 1010, "Name": "When the attacker sends a spoofed target return address to an NTP server which responds with large amounts of information.", "IsAnswer": true },
            { "Id": 1057, "QuestionId": 1010, "Name": "When the attacker spoofs the address of an NTP server causing the target to reach a malicious NTP server.", "IsAnswer": false }]
        
    },
     {
        "Id": 5,
        "Name": "Which of the following is not true about CloudHSM (Choose 1):", 
        "manyoptions":false,
        
        "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "It is Single-Tenanted", "IsAnswer": false },
            { "Id": 1056, "QuestionId": 1010, "Name": "Must be used within a VPC", "IsAnswer": false},
            { "Id": 1057, "QuestionId": 1010, "Name": "Is compatible with RDS", "IsAnswer": false },
            { "Id": 1058, "QuestionId": 1010, "Name": "Not compatible with VPC peering", "IsAnswer": true }]
    },
      {
        "Id": 6,
        "Name": "Which of the following measure should you take to mitigate against web application DDoS attacks?",
        "manyoptions":false,
        "Options": [
           { "Id": 1055, "QuestionId": 1010, "Name": "Switch to a backup web server when the attack occurs.", "IsAnswer": false},
            { "Id": 1056, "QuestionId": 1010, "Name": "Include a WAF as part of your network infrastructure.", "IsAnswer": true },
            { "Id": 1057, "QuestionId": 1010, "Name": "Run multiple instances under different domain names and redirect traffic to the second instance when traffic exeeds capacity on the first instance.", "IsAnswer": false }],
            "Explanation":"A WAF should be used",
            "Ref":"https://d0.awsstatic.com/whitepapers/DDoS_White_Paper_June2015.pdf"
    },

    {
        "Id": 7,
        "Name": "Which of the following describes a Layer 7 attack?",
        "manyoptions":false,
        "Options": [
           { "Id": 1055, "QuestionId": 1010, "Name": "When the attacker sends a flood of requests to a target server from multiple machines.", "IsAnswer": true},
            { "Id": 1056, "QuestionId": 1010, "Name": "When the attacker sends a spoofed target return address to an NTP server which responds with large amounts of information.", "IsAnswer": false },
            { "Id": 1057, "QuestionId": 1010, "Name": "When the attacker spoofs the address of an NTP server causing the target to reach a malicious NTP server.", "IsAnswer": false }],
            "Explanation":"Its a flood of requests sent to a target server from multiple machines.",
            "Ref":"https://d0.awsstatic.com/whitepapers/DDoS_White_Paper_June2015.pdf"
    },
    {
        "Id": 8,
        "Name": "Which of the following are returned by the AWS Security Token Service upon request for a federated token? (Choose 4)",
        "manyoptions":true,
        
        "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "Access Key ID.", "IsAnswer": true },
            { "Id": 1056, "QuestionId": 1010, "Name": "Secret Access Key.", "IsAnswer": true },
            { "Id": 1057, "QuestionId": 1010, "Name": "A Token", "IsAnswer": true},
            { "Id": 1058, "QuestionId": 1010, "Name": "A duration.", "IsAnswer": true },
            { "Id": 1059, "QuestionId": 1010, "Name": "An IAM Role.", "IsAnswer": false }]
    },
     {
        "Id": 9,
        "Name": "You are designing an intrusion detection/prevention (IDS/IPS) solution for a customer web application in a single VPC. You are considering the options for Implementing IDS/IPS protection for traffic coming from the Internet. Which of the following options would you consider? Choose 2 answers", 
        "manyoptions":true,
        "Tag":"Security",
        "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "Implement IDS/IPS agents on each instance running in VPC.", "IsAnswer": true },
            { "Id": 1056, "QuestionId": 1010, "Name": "Implement Elastic Load Balancing with SSL listeners in front of the web applications.", "IsAnswer": false },
            { "Id": 1057, "QuestionId": 1010, "Name": "Implement a reverse proxy layer in front of web servers, and configure IDS/IPS agents on each reverse proxy server.", "IsAnswer": true },
            { "Id": 1058, "QuestionId": 1010, "Name": "Configure an instance in each subnet to switch its network interface card to promiscuous mode and analyze network traffic.", "IsAnswer": false }],
            "Explanation":"EC2 does not allow promiscuous mode, and you cannot put something in between the ELB and the web server (like a listener or IDP)"
    }  ,
     {
        "Id": 10,
        "Name": "An enterprise wants to use a third-party SaaS application. The SaaS application needs to have access to issue several API commands to discover Amazon EC2 resources running within the enterprise's account. The enterprise has internal security policies that require any outside access to their environment must conform to the principles of least privilege, and there must be controls in place to ensure that the credentials used by the SaaS vendor cannot be used by any other third party. Which of the following would meet all of these conditions:", 
        "manyoptions":false,
        "Tag":"Security",
        "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "Create an IAM role for cross-account access, allow the SaaS provider's account to assume the role, and assign it a policy that allows only the actions required by the SaaS application.", "IsAnswer": true },
            { "Id": 1056, "QuestionId": 1010, "Name": "From the AWS Management Console navigate to the Security Credentials page and retrieve the access and secret key for your account.", "IsAnswer": false },
            { "Id": 1057, "QuestionId": 1010, "Name": "Create an IAM role for EC2 instances, assign it a policy that allows only the actions required for the SaaS application to work, provide the role ARN to the SaaS provider to use when launching their application instances.", "IsAnswer": false },
            { "Id": 1058, "QuestionId": 1010, "Name": "Create an IAM user within the enterprise account, assign a user policy to the IAM user that allows only the actions required by the SaaS application, create a new access and secret key for the user and provide these credentials to the SaaS provider.", "IsAnswer": false }],
            "Explanation":"See link for more information",
            "Ref":"https://docs.aws.amazon.com/IAM/latest/UserGuide/tutorial_cross-account-with-roles.html"
    } 
     ]
}