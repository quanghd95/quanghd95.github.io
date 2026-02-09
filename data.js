const cvData = {
    "profile": {
        "name": "Hà Đức Quảng",
        "title": "Senior AWS Cloud & DevOps Engineer",
        "email": "",
        "phone": "",
        "location": "Hanoi, Vietnam",
        "linkedin": "linkedin.com/in/haducquang",
        "linkedin_url": "https://www.linkedin.com/in/haducquang/",
        "status": "Open to Work"
    },
    "summary": "Senior DevOps & Cloud Engineer specializing in AWS architecture and automation. <strong>AWS Certified Solutions Architect – Professional</strong> with deep expertise in designing secure, scalable, and high-availability cloud systems. Proven track record of leading large-scale migrations from <strong>On-premise (VMware) to AWS</strong>. Active knowledge sharer on Design Patterns and Load Balancing Algorithms.",
    "skills": [
        {
            "category": "Cloud Platforms (AWS)",
            "items": "VPC, Subnet, Security Groups, IAM, KMS, ALB/NLB, CloudWatch, S3, EC2, RDS, EKS, ECS, Route53, Lambda, CloudFormation, Direct Connect, VPN."
        },
        {
            "category": "DevOps & Automation",
            "items": "Terraform (IaC), CloudFormation, Jenkins, GitLab CI, Ansible, Docker, Kubernetes, CI/CD Pipelines."
        },
        {
            "category": "Database",
            "items": "PostgreSQL, MySQL, Amazon RDS, DynamoDB, Database HA Configuration."
        },
        {
            "category": "Systems & Architecture",
            "items": "Linux (RHEL, CentOS, Ubuntu), HA/DR Design, Design Patterns, Load Balancing Algorithms."
        },
        {
            "category": "Monitoring & Logging",
            "items": "Prometheus, Grafana, Loki, ELK Stack (Elasticsearch, Logstash, Kibana), Fluentd/Tdagent."
        },
        {
            "category": "Programming & Development",
            "items": "<strong>Ruby (Ruby on Rails)</strong>, Python, Shell Scripting, JavaScript."
        }
    ],
    "experience": [
        {
            "title": "Software Engineer (Self-employed)",
            "company": "My Startup",
            "date": "Mar 2024 – Present",
            "details": [
                "Developed an intelligent IoT monitoring system utilizing <strong>ESP32</strong> microcontrollers, leveraging <strong>Generative AI (GenAI)</strong> to accelerate development and debugging by 40%.",
                "Architected a self-hosted backend using <strong>Mosquitto (MQTT), Telegraf, and Grafana</strong>, containerized with <strong>Docker Compose</strong> and orchestrated on <strong>Kubernetes (K8s)</strong>.",
                "Utilized AI-driven code generation tools to rapidly prototype firmware and optimize infrastructure configurations.",
                "Managed the full product lifecycle from hardware prototyping to production deployment as a <strong>One-Man Army</strong>."
            ]
        },
        {
            "title": "Ruby on Rails Developer - Cloud & DevOps Engineer",
            "company": "VTI Group",
            "date": "Apr 2020 – Mar 2024",
            "details": [
                "Led the migration of mission-critical applications (Java/Spring Boot) from <strong>On-premise VMware infrastructure to AWS</strong>, achieving 99.99% availability.",
                "Designed and implemented a secure AWS Landing Zone with multi-account strategy, Transit Gateway, and VPN/Direct Connect.",
                "Managed the migration of legacy <strong>On Premise Database to Amazon RDS</strong> (and Aurora PostgreSQL), ensuring zero data loss during cutover.",
                "Implemented Infrastructure as Code (IaC) using <strong>Terraform, CloudFormation</strong> to provision and manage AWS resources across Dev, Staging, and Production environments.",
                "Optimized cloud costs by implementing auto-scaling policies and rightsizing EC2 instances, saving 25% on monthly AWS bills."
            ]
        },
        {
            "title": "Ruby on Rails Developer",
            "company": "Sun* Inc.",
            "date": "Aug 2018 – Apr 2020",
            "details": [
                "Developed and maintained scalable web applications using <strong>Ruby on Rails</strong> for international clients.",
                "Deployed and managed containerized applications using <strong>Docker</strong> and AWS ECS.",
                "Collaborated with cross-functional agile teams to deliver high-quality software solutions.",
                "Optimized database queries (MySQL/PostgreSQL) to improve application performance."
            ]
        }
    ],
    "projects": [
        {
            "title": "Event-Driven Background Job Migration",
            "tech": "AWS Lambda, Amazon SQS, Amazon SNS, EventBridge, Terraform",
            "details": [
                "Re-architected legacy background job processing from a polling-based system to an <strong>Event-Driven Architecture</strong> using AWS Lambda and SQS.",
                "Decoupled microservices communication using <strong>Amazon SNS and EventBridge</strong>, improving system scalability and fault tolerance.",
                "Secured the event bus and message queues using <strong>IAM least-privilege policies</strong> and server-side encryption (KMS)."
            ]
        },
        {
            "title": "SuperBox - AIoT Monitoring Platform",
            "tech": "Ruby on Rails 7, Mosquitto (MQTT), InfluxDB, Telegraf, Grafana, Docker, Nginx, PostgreSQL",
            "details": [
                "Built a comprehensive IoT platform for real-time monitoring using the <strong>TIG Stack (Telegraf, InfluxDB, Grafana)</strong>.",
                "Secured device communication with <strong>Mosquitto MQTT over TLS/SSL</strong> and Nginx reverse proxy.",
                "Developed a centralized management dashboard using <strong>Ruby on Rails</strong> and PostgreSQL with role-based access control.",
                "Automated multi-environment deployments (Dev/Prod) using <strong>Docker Compose profiles</strong> and container orchestration."
            ]
        },
        {
            "title": "Scalable SaaS Application Modernization (Ruby on Rails)",
            "tech": "Ruby on Rails, Docker, AWS ECS, Jenkins, RSpec, Redis, Sidekiq, Prometheus, Grafana, Loki",
            "details": [
                "Refactored a monolithic Rails application into microservices using Docker and deployed on Amazon ECS.",
                "Built automated CI/CD pipelines using <strong>Jenkins</strong> to run <strong>RSpec</strong> test suites and deploy to production.",
                "Implemented background job processing with Sidekiq/Redis and centralized logging/monitoring using <strong>Prometheus, Grafana, and Loki</strong>.",
                "Optimized database performance and reduced query time by 50% through indexing and caching strategies.",
                "Adopted <strong>Agile (Scrum)</strong> methodologies, participating in daily stand-ups and sprint retrospectives to ensure continuous delivery and team alignment."
            ]
        },
        {
            "title": "Enterprise Datacenter Migration to AWS (Design & Architecture)",
            "tech": "AWS (MGN, DMS), Terraform, Auto Scaling, Spot Instances, ElastiCache",
            "details": [
                "Architected the comprehensive migration strategy for monolithic applications from a physical datacenter to AWS.",
                "Designed a <strong>Stateless Architecture</strong> by decoupling session state to ElastiCache, enabling seamless <strong>Auto Scaling</strong>.",
                "Implemented <strong>EC2 Spot Instances</strong> strategy for stateless workloads, reducing compute costs by 70% while maintaining high availability."
            ]
        },
        {
            "title": "Scalable ETL Data Pipeline Construction",
            "tech": "AWS Batch, AWS Glue, Amazon EventBridge, S3, Python (PySpark)",
            "details": [
                "Architected a serverless ETL pipeline using <strong>AWS Glue and AWS Batch</strong> to process Terabytes of data daily.",
                "Utilized <strong>Amazon EventBridge</strong> to trigger data processing workflows based on S3 events and scheduled rules.",
                "Optimized Glue PySpark jobs and Batch compute environments, reducing data processing costs by 35%."
            ]
        }
    ],
    "certifications": [
        "• <strong>AWS Certified Solutions Architect – Professional</strong>",
        "• AWS Certified Solutions Architect – Associate"
    ],
    "education": {
        "degree": "Bachelor of Science",
        "school": "Hanoi University of Science and Technology (HUST)",
        "year": "2013-2018"
    }
};
