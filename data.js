const cvData = {
    "profile": {
        "name": "Hà Đức Quảng",
        "title": "Senior Ruby on Rails & Cloud Systems Architect",
        "email": "",
        "phone": "",
        "location": "Hanoi, Vietnam",
        "linkedin": "linkedin.com/in/haducquang",
        "linkedin_url": "https://www.linkedin.com/in/haducquang/",
        "dob": "Aug 1995",
        "status": "Open to Work"
    },
    "summary": "<strong>Senior Ruby on Rails & Cloud Systems Architect</strong> with <strong>6+ years of Full-stack experience</strong> specializing in enterprise Ruby on Rails (Rails 7.1), Cloud Native (AWS/OCI, Kubernetes GitOps), AI Agent Integration, and Industrial IoT systems. <strong>AWS Certified Solutions Architect – Professional</strong>. Expert in high-concurrency architecture, eBPF network observability, automated GitOps deployment, and AI-driven R&D orchestration.",
    "skills": [
        {
            "category": "Backend & Architecture",
            "items": "<strong>Ruby on Rails 7.1</strong>, Microservices, Domain-Driven Design (DDD), Event-Driven Architecture, Sidekiq, Dual Redis Isolation, RESTful APIs."
        },
        {
            "category": "Cloud & Infrastructure",
            "items": "<strong>OCI (Oracle Cloud)</strong>, <strong>AWS</strong>, Kubernetes (OKE/EKS), <strong>FluxCD (GitOps)</strong>, <strong>Cilium eBPF CNI</strong>, Terraform (3-layer IaC), Helm, Docker."
        },
        {
            "category": "AI & R&D Automation",
            "items": "<strong>AI Agentic Orchestration</strong> (Multi-agent workflows, 10x R&D velocity), LLM Integration, Technical Documentation (48 ADRs, 262 Docs)."
        },
        {
            "category": "Mobile & Industrial IoT",
            "items": "<strong>Flutter (Cross-Platform)</strong>, Clean Architecture, BLoC, BLE/SoftAP, Mosquitto MQTT (TLS/SSL), Industrial IoT Systems."
        },
        {
            "category": "Observability & Databases",
            "items": "<strong>VictoriaMetrics</strong>, <strong>Grafana</strong>, <strong>Loki</strong>, Prometheus, InfluxDB, PostgreSQL (PostGIS / HA), Redis State/Cache Isolation."
        },
        {
            "category": "Testing & DevOps QA",
            "items": "RSpec (≥90% test coverage), CI/CD Pipelines (GitHub Actions), Zero-Downtime Deployment."
        }
    ],
    "experience": [
        {
            "title": "Founder & Principal Architect",
            "company": "IoT-SuperBox.com",
            "date": "Mar 2024 – Present",
            "details": [
                "Architected a high-scale <strong>Ruby on Rails 7.1</strong> SaaS backend (63K+ LOC, 59 Models, 96 Services, 58 DB Tables) with 218 RSpec test suites achieving ≥90% coverage.",
                "Engineered cross-platform <strong>Flutter Mobile App</strong> (29K+ LOC) using Clean Architecture and BLoC state management for BLE/SoftAP hardware provisioning.",
                "Designed production <strong>Kubernetes cluster on OCI</strong> powered by <strong>FluxCD GitOps</strong>, <strong>Cilium eBPF CNI</strong>, 3-layer Terraform IaC, high-availability <strong>VictoriaMetrics, Grafana & Loki Observability Stack</strong>, and Dual Redis State/Cache isolation.",
                "Applied <strong>AI Agentic Orchestration</strong> to accelerate R&D velocity by 10x while maintaining 48 ADRs and 262 bilingual technical documents."
            ]
        },
        {
            "title": "Senior Ruby on Rails & Cloud Engineer",
            "company": "VTI Group",
            "date": "Apr 2020 – Mar 2024",
            "details": [
                "Led migration of mission-critical Rails applications from VMware on-premise to <strong>AWS Cloud</strong>, maintaining 99.95% availability.",
                "Designed secure AWS multi-account architecture, Transit Gateway, VPN, and Direct Connect connectivity.",
                "Migrated legacy databases to <strong>Amazon RDS / Aurora PostgreSQL</strong> with zero cutover downtime or data loss.",
                "Automated multi-environment infrastructure provisioning (Dev/Staging/Prod) using 3-layer <strong>Terraform & CloudFormation</strong>.",
                "Optimized EC2 auto-scaling and instance rightsizing, saving 25% on monthly cloud computing expenditure."
            ]
        },
        {
            "title": "Ruby on Rails Developer",
            "company": "Sun* Inc.",
            "date": "Aug 2018 – Apr 2020",
            "details": [
                "Developed scalable web applications and microservices using <strong>Ruby on Rails</strong> for Japanese enterprise clients.",
                "Containerized applications using <strong>Docker</strong> and managed deployments on AWS ECS.",
                "Optimized complex PostgreSQL database queries and indexes, improving overall API responsiveness by 40%.",
                "Practiced Agile/Scrum with rigorous code review processes and automated RSpec unit testing."
            ]
        }
    ],
    "projects": [
        {
            "title": "Cloud-Native Industrial IoT Observability & Telemetry Stack",
            "tech": "Mosquitto MQTT, VictoriaMetrics, Grafana, Loki, Cilium eBPF, OCI OKE",
            "details": [
                "Engineered end-to-end IoT data ingestion, monitoring, and telemetry visualization using TLS-secured Mosquitto MQTT broker integrated with high-availability <strong>VictoriaMetrics, Grafana & Loki Observability Stack</strong>.",
                "Secured inter-service pod communication using Cilium eBPF network policies and automated log collection via Loki."
            ]
        },
        {
            "title": "Real-Time User Geolocation & Spatial Analytics Platform (AWS)",
            "tech": "Ruby on Rails, PostgreSQL (PostGIS), Amazon Athena, Sidekiq, AWS S3, AWS ECS, Terraform",
            "details": [
                "Architected a spatial analytics engine on <strong>Ruby on Rails</strong> and <strong>PostgreSQL (PostGIS)</strong> to process and query high-frequency user location data streams.",
                "Integrated <strong>Amazon Athena</strong> and <strong>AWS S3</strong> to execute serverless SQL queries over historical location data archives, significantly reducing database storage costs.",
                "Utilized <strong>Sidekiq</strong> for asynchronous background location processing, geofencing calculations, and automated spatial event triggers.",
                "Designed interactive spatial analytics dashboards displaying user density heatmaps, movement pattern trajectories, and automated zone alerts."
            ]
        },
        {
            "title": "Event-Driven Background Processing Migration",
            "tech": "AWS Lambda, Amazon SQS, Amazon SNS, EventBridge, Terraform",
            "details": [
                "Re-architected legacy polling background jobs into high-throughput <strong>Event-Driven Architecture</strong> via AWS Lambda, SQS, and EventBridge.",
                "Decoupled microservices communication via SNS pub/sub channels, significantly improving system scalability and fault tolerance."
            ]
        },
        {
            "title": "Enterprise Datacenter to AWS Cloud Migration",
            "tech": "AWS (MGN, DMS), Terraform, EC2 Spot Instances, ElastiCache Redis",
            "details": [
                "Architected stateless application tier by offloading session data to ElastiCache Redis, enabling dynamic auto-scaling.",
                "Implemented EC2 Spot Instance fleets for batch workloads, reducing server costs by 70% while maintaining high availability."
            ]
        },
        {
            "title": "High-Throughput Serverless Data Pipeline",
            "tech": "AWS Glue, AWS Batch, Amazon EventBridge, PySpark, Amazon S3",
            "details": [
                "Constructed serverless ETL pipeline using AWS Glue PySpark and AWS Batch to process Terabytes of telemetry data daily.",
                "Automated data enrichment workflows triggered via S3 EventBridge hooks, reducing data processing runtime by 35%."
            ]
        }
    ],
    "certifications": [
        "AWS Certified Solutions Architect – Professional",
        "AWS Certified Solutions Architect – Associate"
    ],
    "education": {
        "degree": "Bachelor of Science",
        "school": "Hanoi University of Science and Technology (HUST)",
        "year": "2013 – 2018"
    }
};
