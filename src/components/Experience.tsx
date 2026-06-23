
const experiences = [
  {
    period: 'Jun 2025 – Present',
    company: 'Delta Air Lines',
    location: 'Atlanta, GA',
    role: 'Senior Python Full-Stack Developer',
    current: true,
    highlights: [
      'Designed and deployed scalable RESTful APIs and web applications using Python, Flask, and FastAPI with OAuth 2.0, JWT, and IAM-based authentication, serving high-throughput airline operational systems.',
      'Containerized Python microservices with Docker and deployed workloads on AWS EKS and Kubernetes with RBAC and network policy enforcement.',
      'Implemented Redis caching strategies (TTL, cache invalidation, limit management) in Python APIs, reducing database load and improving response times across high-throughput endpoints.',
      'Leveraged OpenAI and Azure OpenAI APIs for LLM tokenization, prompt engineering, and AI agent development; applied RAG architectures to improve data quality automation and analytical workflows.',
      'Built React and Redux frontend components integrated with Flask and FastAPI backends, delivering real-time operational dashboards for crew coordinators and flight operations teams.',
      'Developed event-driven architectures using AWS Step Functions, EventBridge, SQS, SNS, Kafka, and Kinesis for real-time async data processing across distributed airline operational systems.',
      'Improved incident response time by 40% through proactive CloudWatch alerting, Splunk observability, and IAM policy reviews; mentored junior developers on Python best practices and AWS security patterns.',
    ],
    tags: ['Flask', 'FastAPI', 'AWS EKS', 'OAuth 2.0', 'Redis', 'OpenAI', 'RAG', 'React Redux', 'Docker', 'Kafka'],
  },
  {
    period: 'Jan 2023 – Jun 2025',
    company: 'Norfolk Southern',
    location: 'Newark, NJ',
    role: 'Python Developer / Data Engineer',
    current: false,
    highlights: [
      'Designed and built scalable GCP data pipelines using Cloud Dataflow, Apache Beam, and BigQuery for real-time and batch analytics on high-volume datasets.',
      'Developed ETL/ELT workflows with Cloud Composer (Apache Airflow) and Dataform for orchestrating data ingestion and transformation from multiple source systems into BigQuery.',
      'Reduced analytics infrastructure cost by 35% through BigQuery partitioning, clustering, and query tuning, while improving query response times across BI workloads.',
      'Implemented real-time streaming pipelines using Pub/Sub and Cloud Dataflow for high-throughput event data, enabling near-real-time analytics for operations teams.',
      'Authored reusable Terraform modules for provisioning GCP infrastructure (Pub/Sub, BigQuery, Dataflow, IAM) following infrastructure-as-code best practices.',
      'Enforced data governance, IAM policies, and encryption standards across GCP data assets, ensuring HIPAA compliance and data access control across production datasets.',
    ],
    tags: ['GCP BigQuery', 'Cloud Dataflow', 'Apache Beam', 'Pub/Sub', 'Airflow', 'Terraform', 'Dataform', 'HIPAA'],
  },
  {
    period: 'Jan 2019 – Dec 2021',
    company: 'Tata Consultancy Services',
    location: 'Hyderabad, India',
    role: 'Python Developer',
    current: false,
    highlights: [
      'Developed PySpark and Hadoop-based ETL pipelines processing large-scale structured and semi-structured data from Oracle RDS into Redshift and Hive tables for enterprise freight and logistics reporting.',
      'Built enterprise-scale Azure data platforms leveraging Azure Data Factory, Azure Blob Storage, Azure HDInsight, Azure Event Hubs, and Azure Synapse Analytics for distributed data ingestion across locomotive management systems.',
      'Translated legacy Java batch jobs and Oracle stored procedures into modern Python and PySpark equivalents during major platform migration projects.',
      'Deployed containerized Big Data applications on Azure Kubernetes Service (AKS) with cluster autoscaler, node group configuration, and load balancing for high-availability production environments.',
      'Performed deep performance tuning of Spark jobs, Hive queries, and Hadoop MapReduce workflows, resolving data skew, memory configuration, and shuffle inefficiencies causing production slowdowns.',
      'Developed REST and GraphQL API integrations with React dashboards to surface real-time operational metrics, reducing manual reporting overhead for freight and locomotive management teams.',
    ],
    tags: ['PySpark', 'Hadoop', 'Azure Synapse', 'Azure Data Factory', 'AKS', 'Sqoop', 'Airflow', 'Redshift'],
  },
  {
    period: 'Sept 2017 – Dec 2018',
    company: 'HSBC Bank',
    location: 'Hyderabad, India',
    role: 'Python Developer',
    current: false,
    highlights: [
      'Developed Python and Django backend services with RESTful APIs integrated with MySQL and Oracle databases, supporting data ingestion, transformation, and reporting for client web portals.',
      'Wrote optimized SQL queries, stored procedures, and CRUD operations across Oracle and MySQL, building foundational expertise in relational database design and query performance tuning.',
      'Used Pandas for time-series data manipulation and NumPy for numerical computing; built Matplotlib and Pygal data visualizations for client-facing reporting dashboards.',
      'Implemented server-side authentication, cookie-based session management, and input validation to enforce data security across production web application modules.',
      'Participated in full SDLC including requirements gathering, system design, development, QA testing, and production deployment in an Agile workflow using Git and peer code reviews.',
    ],
    tags: ['Python', 'Django', 'REST API', 'MySQL', 'Oracle', 'Pandas', 'NumPy', 'Pygal'],
  },
];

const Experience = () => {
  return (
    <section id="experience" className="py-24 relative overflow-hidden">
      <div
        className="absolute left-0 top-1/2 w-80 h-80 rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(0,229,255,0.04) 0%, transparent 70%)', filter: 'blur(60px)' }}
      />

      <div className="section-container">
        <div className="text-center mb-16 animate-on-scroll opacity-0">
          <h2 className="text-4xl md:text-5xl font-bold">
            Engineering <span className="cyan-text">Timeline</span>
          </h2>
          <p className="text-muted-foreground mt-4">Enterprise clients and roles across 7+ years</p>
        </div>

        <div className="relative">
          {/* Vertical line */}
          <div
            className="absolute left-6 top-0 bottom-0 w-px hidden md:block"
            style={{ background: 'linear-gradient(to bottom, transparent, rgba(0,229,255,0.3), transparent)' }}
          />

          <div className="space-y-10">
            {experiences.map((exp) => (
              <div key={exp.company} className="relative md:pl-20 animate-on-scroll opacity-0">
                {/* Dot on timeline */}
                <div
                  className="absolute left-4 top-6 w-4 h-4 rounded-full hidden md:flex items-center justify-center -translate-x-1/2"
                  style={{
                    background: exp.current ? 'hsl(191 100% 50%)' : 'hsl(224 39% 15%)',
                    border: exp.current ? '2px solid hsl(191 100% 50%)' : '2px solid rgba(0,229,255,0.3)',
                    boxShadow: exp.current ? '0 0 12px rgba(0,229,255,0.6)' : 'none',
                  }}
                />

                <div
                  className="p-6 rounded-xl"
                  style={{
                    background: 'hsl(224 39% 10%)',
                    border: exp.current ? '1px solid rgba(0,229,255,0.25)' : '1px solid rgba(0,229,255,0.08)',
                  }}
                >
                  {/* Header */}
                  <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
                    <div>
                      <div className="flex items-center gap-3 mb-1">
                        <h3 className="text-xl font-bold text-foreground">{exp.company}</h3>
                        {exp.current && (
                          <span className="text-xs font-semibold px-2 py-0.5 rounded-full" style={{ background: 'rgba(0,229,255,0.1)', color: 'hsl(191 100% 50%)', border: '1px solid rgba(0,229,255,0.2)' }}>
                            Current
                          </span>
                        )}
                      </div>
                      <p className="text-muted-foreground text-sm">{exp.role} — {exp.location}</p>
                    </div>
                    <span className="text-sm font-mono text-muted-foreground whitespace-nowrap">{exp.period}</span>
                  </div>

                  {/* Bullets */}
                  <ul className="space-y-2 mb-4">
                    {exp.highlights.map((h, j) => (
                      <li key={j} className="flex gap-3 text-sm text-muted-foreground">
                        <span className="flex-shrink-0 mt-1.5 w-1 h-1 rounded-full" style={{ background: 'hsl(191 100% 50%)' }} />
                        {h}
                      </li>
                    ))}
                  </ul>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {exp.tags.map((tag) => (
                      <span key={tag} className="tech-pill-muted">{tag}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
