
import { ExternalLink, Github } from 'lucide-react';
import ParallaxElement from './ParallaxEffect';

const Projects = () => {
  const projects = [
    {
      title: "Enterprise CI/CD Pipeline & Financial Data Analytics Platform",
      description: "A financial services client was generating critical business reports manually — an 8-hour overnight batch process that collapsed under month-end load and produced inconsistent results across environments. I redesigned the entire delivery and data workflow from scratch. On the infrastructure side, I wrote Jenkins pipeline-as-code using declarative Groovy, containerised every service stage with Docker multi-stage builds, and enforced parallel unit + integration test gates before any artifact could reach staging. On the data side, I built a Python-based ETL layer using Pandas for complex ledger transformations, NumPy for actuarial computations, and Matplotlib/Seaborn for automated report rendering — all triggered by the same pipeline on each merge. The result: report generation dropped from 8 hours to under 45 minutes, deployment failures caused by environment drift were eliminated, and the team shipped to production confidently multiple times per day.",
      tags: ["Docker", "Jenkins", "CI/CD", "Python", "Pandas", "NumPy", "Automation"],
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=400&fit=crop",
      link: "#",
      github: "#"
    },
    {
      title: "Distributed Microservices Platform & Multi-Terabyte PySpark ETL",
      description: "A legacy monolithic data platform was struggling to keep pace with 300% YoY data volume growth — pipelines were timing out, data quality was degrading, and the single-service architecture meant any failure brought down the entire stack. I led the decomposition into a fleet of Flask and Django microservices, each owning a bounded data domain with its own schema, retry logic, and health endpoints behind a load balancer. The ETL layer was rebuilt using PySpark on Azure HDInsight clusters, with Azure Data Factory handling orchestration, dependency chaining, and alerting. I introduced Pandas-based data quality checkpoints — null rate checks, schema drift detection, and statistical anomaly flagging — at every pipeline boundary. Web scraping ingestion jobs were built with Beautiful Soup and SQLAlchemy ORM for clean relational writes. The rebuilt platform now processes over 2 TB of data daily, sustains 99.9% data quality SLA, and pipeline failure rates fell by 80% in the first quarter post-launch.",
      tags: ["Flask", "Django", "PySpark", "Azure Data Factory", "ETL", "Python", "Microservices"],
      image: "https://images.unsplash.com/photo-1516321318423-f06f70d504f0?w=800&h=400&fit=crop",
      link: "#",
      github: "#"
    },
    {
      title: "Azure Event-Driven Data Warehouse & Real-Time Analytics Platform",
      description: "An organisation's leadership team was making strategic decisions on 24-hour-old data — nightly batch loads into a star schema warehouse that couldn't reflect intraday operational realities. The challenge was introducing real-time streaming without disrupting the existing SSIS-based batch pipeline that downstream BI tools depended on. I introduced Apache Kafka as the backbone for event ingestion, handling over 1 million business events per day from a dozen upstream producers. The SSIS packages were refactored to implement Type 2 Slowly Changing Dimensions correctly and load fact tables idempotently, preventing duplicates during replay scenarios. A GraphQL API layer was placed in front of the warehouse for flexible ad-hoc consumption — clients could request exactly the fields they needed, cutting average query payload size by 60%. Azure Monitor, Application Insights, and Log Analytics dashboards gave operations 24/7 pipeline observability with automated PagerDuty alerting on SLA breaches. Reporting latency collapsed from 24 hours to under 10 minutes.",
      tags: ["Azure", "SSIS", "GraphQL", "Kafka", "Azure Monitor", "Data Warehouse"],
      image: "https://images.unsplash.com/photo-1559056199-641a0ac8b3f7?w=800&h=400&fit=crop",
      link: "#",
      github: "#"
    },
    {
      title: "Automated Data Pipeline Testing Framework & Quality Validation Suite",
      description: "A growing data engineering team had zero automated test coverage for their PySpark pipelines — bugs were caught in production, rollbacks were manual, and the team was spending more time firefighting than building. I designed and implemented a comprehensive testing strategy from the ground up. The core was a Pytest framework with reusable fixtures for spinning up in-memory SparkSession instances, seeded test DataFrames, and schema assertion helpers, enabling engineers to write pipeline unit tests in minutes rather than hours. For behaviour-driven acceptance tests, I extended Robot Framework with custom Python keyword libraries tailored to data domain scenarios — testing full transformation chains end-to-end against controlled fixture datasets. A separate data quality validation module ran statistical assertions — distribution checks, referential integrity tests, and null rate thresholds — as pipeline post-conditions. All of this was integrated into both Jenkins and Azure DevOps as mandatory CI gates. Within one quarter, production data defects dropped by 85%, test coverage went from 0% to 78%, and new engineers could contribute tested pipeline code on their first week.",
      tags: ["Python", "Pytest", "Robot Framework", "Jenkins", "Azure DevOps", "BDD", "Testing"],
      image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&h=400&fit=crop",
      link: "#",
      github: "#"
    },
    {
      title: "AWS Serverless API Platform with Hybrid Multi-Database Architecture",
      description: "A high-traffic consumer application was hitting hard capacity limits on its traditional EC2-backed API — load spikes during business hours caused latency to spike beyond acceptable thresholds, and over-provisioning to compensate was burning through infrastructure budget. I redesigned the API layer as a fully serverless architecture on AWS: API Gateway handled edge-layer routing, JWT authentication, and per-client throttling; Lambda functions contained the stateless business logic with cold-start-optimised Python packaging; DynamoDB served as the primary session and event store with single-digit millisecond latency at any scale. For read-heavy analytical workloads, I implemented ElastiCache (Redis) as a caching layer with a TTL strategy aligned to data freshness SLAs, cutting database read load by 65%. The data layer used a deliberate hybrid approach — Oracle and SQL Server for transactional workflows requiring ACID guarantees, MongoDB for flexible-schema product catalogues, and Cassandra for append-heavy time-series data. Real-time features were built on WebSocket connections via API Gateway. The platform now handles 50,000+ requests per hour, infrastructure costs dropped by 60%, and uptime has held at 99.99% over twelve months.",
      tags: ["AWS", "DynamoDB", "Lambda", "API Gateway", "MongoDB", "Cassandra", "Serverless"],
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=400&fit=crop",
      link: "#",
      github: "#"
    },
    {
      title: "Legacy Mainframe to Cloud Migration — 3TB PySpark Big Data Platform",
      description: "An enterprise's core analytical dataset — over 3 TB of structured records accumulated across 15 years — lived on a DB2 mainframe that was reaching end-of-life. The business requirement was uncompromising: zero downtime, zero data loss, and analytical query performance that would justify the migration cost. I designed the migration in three phases. First, I built PySpark extraction jobs that read from DB2 via JDBC in partitioned parallel reads, writing Parquet files to Amazon S3 with careful partition key selection to avoid hotspots. Second, I refactored 40+ monolithic PL/SQL ETL procedures into modular PySpark transformation jobs — each with its own unit tests, configurable parallelism, and idempotent writes to allow safe reruns. Custom shuffle partitioning and broadcast join strategies were applied based on profiled data skew. Third, AWS Glue catalogued all datasets with automated schema inference, enabling Redshift Spectrum to query S3 directly without full loads. A reconciliation framework compared record counts, checksums, and statistical distributions between source and target before each cutover phase was approved. The migration completed with zero data loss, post-migration analytical query performance improved 10x, and the decommissioned mainframe saved over $200K annually in licensing and maintenance.",
      tags: ["PySpark", "AWS Glue", "Redshift", "Hadoop", "Hive", "ETL", "Big Data"],
      image: "https://images.unsplash.com/photo-1518551853039-b7b38e01b4f1?w=800&h=400&fit=crop",
      link: "#",
      github: "#"
    },
    {
      title: "Self-Service Analytics Dashboard — Django REST + React Frontend",
      description: "Business analysts were submitting data requests to the engineering team for every insight they needed, creating a backlog that delayed decisions by days and frustrated both sides. The goal was to build a self-service analytics platform that non-engineers could operate confidently. The backend was built on Django with a dual-API design — REST endpoints for CRUD operations and a GraphQL layer for flexible ad-hoc queries, eliminating the over-fetching that had made the previous REST-only API frustrating for analysts. Django ORM queries were profiled and optimised with select_related, prefetch_related, and database-level indexes; complex aggregations were offloaded to MongoDB aggregation pipelines where document flexibility was a better fit. The React frontend used component-level code-splitting and lazy loading to achieve sub-2-second initial load times. Real-time data updates were delivered via WebSocket connections, giving analysts live visibility without manual refreshes. Server-side rendering was added for public-facing pages to improve SEO. Role-based access control was implemented at both the Django and GraphQL resolver level. Within a month of launch, ad-hoc data requests to the engineering team dropped by 40%, and the dashboard was serving 500+ daily active users.",
      tags: ["React", "Django", "MongoDB", "Bootstrap", "Angular", "REST APIs", "GraphQL"],
      image: "https://images.unsplash.com/photo-1633356122544-f134324ef6db?w=800&h=400&fit=crop",
      link: "#",
      github: "#"
    },
    {
      title: "ML-Powered Recommendation Engine with Real-Time Inference Pipeline",
      description: "An e-commerce platform's generic product recommendations were underperforming — click-through rates sat at 2.1% and conversion rates were flat. The data science team had experimented with simple collaborative filtering but lacked the infrastructure to serve predictions in real time or measure impact rigorously. I built an end-to-end recommendation system covering data, modelling, and serving. Feature engineering was handled by PySpark jobs running on a daily schedule: user interaction sequences, product co-occurrence matrices, category affinity scores, and recency-weighted engagement signals were all computed at scale and written to a feature store in Parquet format. I trained a hybrid model ensemble — LightGBM for structured feature ranking, a matrix factorisation model (ALS in PySpark MLlib) for collaborative filtering, and a content-based neural embedding layer built in TensorFlow — combining their scores with a learned weighting. Hyperparameter tuning used Optuna with 5-fold cross-validation; the final AUC improved from 0.71 to 0.84 versus the baseline. An A/B testing framework with statistical significance tracking was built to gate production rollouts. The serving layer used a FastAPI microservice backed by Redis for sub-50ms cached inference. Post-launch, click-through rates rose to 2.9% (+38%) and conversion improved by 22%.",
      tags: ["Python", "Scikit-learn", "PySpark", "TensorFlow", "LightGBM", "FastAPI", "A/B Testing"],
      image: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?w=800&h=400&fit=crop",
      link: "#",
      github: "#"
    },
    {
      title: "Cloud-Native Kubernetes Platform with Full-Stack Observability",
      description: "A monolithic application that had grown over six years was becoming impossible to deploy safely — every release required a 2-hour maintenance window, a single bad module could take down unrelated features, and the operations team had no visibility into what was actually happening in production. I led the architectural migration to a cloud-native, containerised microservices model. Each service was containerised using Docker with multi-stage builds to minimise image size and attack surface; Hadolint and Trivy were integrated into CI for Dockerfile linting and vulnerability scanning. Kubernetes on AKS handled orchestration — Helm charts templated all deployments, HPA policies managed autoscaling based on CPU and custom Prometheus metrics, and a service mesh (Linkerd) provided automatic mTLS and per-route latency telemetry between services. Jenkins declarative pipelines implemented blue-green deployments with automated smoke tests before traffic cutover, eliminating manual release ceremonies entirely. Puppet and Ansible handled node provisioning and configuration drift remediation as infrastructure-as-code. The observability stack combined the ELK stack for log aggregation and Prometheus + Grafana for metrics, with Alertmanager routing incident notifications by severity and team. Deployment window shrank from 2 hours to 8 minutes, production uptime reached 99.95%, and mean time to recovery (MTTR) for incidents dropped by 60%.",
      tags: ["Docker", "Kubernetes", "Jenkins", "Prometheus", "ELK Stack", "Ansible", "DevOps"],
      image: "https://images.unsplash.com/photo-1611694957606-62ec75aac4d1?w=800&h=400&fit=crop",
      link: "#",
      github: "#"
    }
  ];
  
  return (
    <section id="projects" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 -z-10 opacity-30 bg-noise"></div>
      <div className="absolute top-40 -left-40 w-96 h-96 bg-accent/10 rounded-full filter blur-3xl"></div>
      
      <div className="section-container">
        <div className="text-center max-w-3xl mx-auto mb-16 animate-on-scroll opacity-0">
          <h2 className="section-heading">Featured Projects</h2>
          <p className="section-subheading">
            Here are some of my recent projects that showcase my skills and experience.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          {projects.map((project, index) => (
            <ParallaxElement 
              key={project.title} 
              speed={0.05} 
              direction={index % 2 === 0 ? 'up' : 'down'}
              className="animate-on-scroll opacity-0"
            >
              <div className="glass-card overflow-hidden group flex flex-col hover:shadow-lg transition-all duration-300 h-full">
                {/* Image Section - Fixed Height */}
                <div className="w-full h-40 overflow-hidden bg-gray-200 flex-shrink-0">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                
                {/* Content Section - Grows to fill space */}
                <div className="p-6 flex flex-col flex-grow justify-between">
                  {/* Top Content */}
                  <div>
                    {/* Title - Fixed Height */}
                    <div className="h-14 mb-3 overflow-hidden">
                      <h3 className="text-lg font-semibold line-clamp-2">{project.title}</h3>
                    </div>
                    
                    {/* Description - Fixed Height */}
                    <div className="h-28 mb-4 overflow-hidden">
                      <p className="text-muted-foreground text-sm line-clamp-5">{project.description}</p>
                    </div>
                    
                    {/* Tags - Fixed Height */}
                    <div className="h-8 mb-4 overflow-hidden">
                      <div className="flex flex-wrap gap-2">
                        {project.tags.slice(0, 3).map((tag) => (
                          <span key={tag} className="text-xs bg-secondary px-2 py-1 rounded-full whitespace-nowrap">
                            {tag}
                          </span>
                        ))}
                        {project.tags.length > 3 && (
                          <span className="text-xs bg-secondary px-2 py-1 rounded-full whitespace-nowrap">
                            +{project.tags.length - 3}
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                  
                  {/* Action Links - Fixed Height at Bottom */}
                  <div className="h-10 flex items-center gap-4 pt-4 border-t border-border/30 flex-shrink-0">
                    <a 
                      href={project.github}
                      className="flex items-center gap-1 text-sm font-medium transition-colors hover:text-accent"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github size={16} />
                      Code
                    </a>
                    <a 
                      href={project.link}
                      className="flex items-center gap-1 text-sm font-medium transition-colors hover:text-accent"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLink size={16} />
                      Demo
                    </a>
                  </div>
                </div>
              </div>
            </ParallaxElement>
          ))}
          
        </div>
      </div>
    </section>
  );
};

export default Projects;
