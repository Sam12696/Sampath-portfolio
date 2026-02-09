
import { ExternalLink, Github } from 'lucide-react';
import ParallaxElement from './ParallaxEffect';

const Projects = () => {
  const projects = [
    {
      title: "CI/CD Pipeline & Data Analytics",
      description: "Architected and implemented enterprise-grade Continuous Integration/Continuous Deployment (CI/CD) pipeline leveraging Docker, Jenkins, and GitHub. Automated the entire build, test, and deployment lifecycle with containerization, enabling consistent application environments across development, staging, and production. Configured Jenkins pipeline as code for reproducible builds with automated unit and integration testing. Conducted comprehensive data analysis and transformation for complex financial reports using advanced Python libraries: Pandas for data manipulation, NumPy for numerical computations, and Matplotlib for visualization. Optimized ETL workflows to process millions of records efficiently, implementing caching strategies and parallel processing for improved performance metrics.",
      tags: ["Docker", "Jenkins", "CI/CD", "Python", "Pandas", "NumPy", "Automation"],
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=400&fit=crop",
      link: "#",
      github: "#"
    },
    {
      title: "RESTful Microservices & PySpark ETL Pipelines",
      description: "Designed and deployed scalable RESTful Microservices architecture using Flask and Django frameworks, with emphasis on API performance optimization, load balancing, and service discovery. Implemented large-scale distributed data pipelines leveraging PySpark for processing terabytes of data across Hadoop clusters. Orchestrated complex ETL workflows using Azure Data Factory (ADF), implementing scheduling, monitoring, and error handling for production-grade data integration. Utilized specialized Python libraries including Beautiful Soup for web scraping, NumPy for numerical analysis, and SQLAlchemy as ORM for complex database operations. Designed data validation and transformation logic with Pandas DataFrames, handling complex data quality checks and anomaly detection to ensure data integrity throughout the pipeline.",
      tags: ["Flask", "Django", "PySpark", "Azure Data Factory", "ETL", "Python", "Microservices"],
      image: "https://images.unsplash.com/photo-1516321318423-f06f70d504f0?w=800&h=400&fit=crop",
      link: "#",
      github: "#"
    },
    {
      title: "Azure Cloud Infrastructure & Data Warehousing",
      description: "Deployed highly scalable RESTful Microservices on Azure cloud infrastructure with global distribution and auto-scaling capabilities. Implemented GraphQL API layer providing flexible query capabilities, reducing data over-fetching and improving client performance. Engineered sophisticated ETL packages using SQL Server Integration Services (SSIS) with complex data validation logic, implementing slowly changing dimensions and fact table loading strategies for dimensional data warehouses. Established event-driven architecture using Apache Kafka for asynchronous message processing, supporting high-throughput real-time data ingestion. Implemented comprehensive monitoring and observability using Azure Monitor, Application Insights, and Log Analytics, enabling proactive alerting, performance analysis, and root cause diagnosis of infrastructure issues.",
      tags: ["Azure", "SSIS", "GraphQL", "Kafka", "Azure Monitor", "Data Warehouse"],
      image: "https://images.unsplash.com/photo-1559056199-641a0ac8b3f7?w=800&h=400&fit=crop",
      link: "#",
      github: "#"
    },
    {
      title: "Automated Testing & CI/CD Best Practices",
      description: "Developed comprehensive test automation strategies using white-box testing methodologies with Python-based testing frameworks (Pytest, unittest). Mastered Robot Framework for behavior-driven development (BDD) and keyword-driven testing, extending its capabilities through custom-developed helper classes and methods for domain-specific testing scenarios. Established CI/CD best practices and coding standards, conducting thorough code reviews to maintain high code quality and security compliance. Integrated automated testing into Jenkins and Azure DevOps pipelines, ensuring tests execute on every commit. Implemented data validation frameworks for PySpark-based ETL pipelines, creating comprehensive test data scenarios and assertions for complex analytical workflows. Built reusable test libraries and fixtures, enabling rapid test development and maintenance across multiple projects.",
      tags: ["Python", "Pytest", "Robot Framework", "Jenkins", "Azure DevOps", "BDD", "Testing"],
      image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&h=400&fit=crop",
      link: "#",
      github: "#"
    },
    {
      title: "AWS Serverless Database Systems & API Gateway",
      description: "Architected and deployed enterprise-scale database systems supporting both structured and unstructured data workloads. Implemented hybrid database strategies combining relational databases (Oracle, SQL Server) for transactional consistency with NoSQL solutions (MongoDB, Cassandra) for horizontal scalability. Designed serverless API architecture using AWS API Gateway for request routing, throttling, and authentication, integrated with AWS Lambda for compute and DynamoDB for NoSQL storage. Optimized database models and query patterns for performance, implementing indexing strategies, caching layers (ElastiCache), and read replicas. Built interactive web applications with real-time data synchronization, implementing WebSocket connections for live updates and efficient client-server communication.",
      tags: ["AWS", "DynamoDB", "Lambda", "API Gateway", "MongoDB", "Cassandra", "Serverless"],
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=400&fit=crop",
      link: "#",
      github: "#"
    },
    {
      title: "PySpark ETL & Big Data Processing",
      description: "Engineered sophisticated big data processing solutions leveraging Apache Spark and PySpark for distributed computing across massive datasets. Designed and implemented large-scale data migration projects, transferring multi-terabyte datasets from legacy mainframe systems (DB2) to cloud storage (Amazon S3) with zero downtime. Refactored monolithic PL/SQL ETL procedures into distributed PySpark applications, achieving 10x performance improvements through parallel processing and optimized transformations. Developed Spark applications for complex data processing in Hadoop and Hive environments, implementing custom partitioning strategies and shuffle optimization. Orchestrated end-to-end AWS-based data pipelines integrating S3 for storage, Lambda for serverless computing, AWS Glue for data cataloging and ETL, and Redshift for analytical queries. Implemented fault tolerance, retry mechanisms, and monitoring to ensure reliable processing of critical business data.",
      tags: ["PySpark", "AWS Glue", "Redshift", "Hadoop", "Hive", "ETL", "Big Data"],
      image: "https://images.unsplash.com/photo-1518551853039-b7b38e01b4f1?w=800&h=400&fit=crop",
      link: "#",
      github: "#"
    },
    {
      title: "Full-Stack React + Django Applications",
      description: "Developed complete full-stack web applications with Python/Django backend architecture serving RESTful APIs, and modern frontend frameworks (React, Angular, Bootstrap) for responsive user interfaces. Architected Django backend with sophisticated business logic, authentication/authorization, and database query optimization. Built React frontends with component-based architecture, implementing hooks, context API, and state management for complex data flows. Engineered reusable component libraries with comprehensive documentation and Storybook integration for design consistency. Implemented advanced frontend optimization techniques including code-splitting, lazy loading, server-side rendering (SSR), and static site generation (SSG) for improved performance and SEO. Utilized MongoDB for flexible schema design, implementing efficient indexing and aggregation pipelines for complex queries. Established GraphQL integration layers for more efficient data fetching, reducing bandwidth and improving application responsiveness.",
      tags: ["React", "Django", "MongoDB", "Bootstrap", "Angular", "REST APIs", "GraphQL"],
      image: "https://images.unsplash.com/photo-1633356122544-f134324ef6db?w=800&h=400&fit=crop",
      link: "#",
      github: "#"
    },
    {
      title: "AI-Driven Recommendation Systems & Data Science",
      description: "Developed advanced machine learning solutions focused on building intelligent recommendation engines using collaborative filtering, content-based filtering, and matrix factorization algorithms. Implemented sophisticated recommendation systems with A/B testing frameworks to measure impact on user engagement and conversion rates. Conducted comprehensive data preprocessing pipelines including handling missing values, outlier detection, and data normalization using Pandas and NumPy. Performed feature engineering for machine learning models, creating domain-specific features from raw data and implementing feature selection techniques to improve model performance. Trained and evaluated multiple ML models (LightGBM, XGBoost, Neural Networks) using Scikit-learn and TensorFlow, implementing cross-validation and hyperparameter tuning. Built scalable data pipelines with PySpark for processing terabyte-scale datasets in distributed environments, enabling real-time inference and batch predictions for production recommendation systems.",
      tags: ["Python", "Scikit-learn", "Pandas", "NumPy", "Machine Learning", "TensorFlow", "Data Science"],
      image: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?w=800&h=400&fit=crop",
      link: "#",
      github: "#"
    },
    {
      title: "DevOps & Microservices Infrastructure",
      description: "Architected and implemented comprehensive DevOps solutions enabling rapid, reliable software delivery across distributed microservices environments. Containerized applications using Docker with optimized images, implementing multi-stage builds and security scanning. Orchestrated containerized workloads with Kubernetes, implementing service meshes for inter-service communication and observability. Designed CI/CD pipelines using Jenkins with declarative Groovy scripting, implementing automated builds, tests, and deployments with deployment strategies (blue-green, canary, rolling updates). Implemented infrastructure-as-code (IaC) using Puppet and Ansible for consistent environment provisioning and configuration management. Established comprehensive monitoring and logging with ELK stack (Elasticsearch, Logstash, Kibana) and Prometheus for metrics collection. Led technical code reviews emphasizing security, performance, and maintainability. Collaborated with QA teams to automate testing, achieving continuous quality assurance and reducing time-to-market.",
      tags: ["Docker", "Jenkins", "Puppet", "Kubernetes", "Git", "Microservices", "DevOps", "IaC"],
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
                    <div className="h-20 mb-4 overflow-hidden">
                      <p className="text-muted-foreground text-sm line-clamp-3">{project.description}</p>
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
