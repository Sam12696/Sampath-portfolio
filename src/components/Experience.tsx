
const experiences = [
  {
    period: 'Aug 2025 – Present',
    company: 'Delta Airlines',
    location: 'Atlanta, GA',
    role: 'Senior Python / AWS Developer',
    current: true,
    highlights: [
      'Designed scalable AWS data pipelines (Glue, Lambda, S3) to ingest and transform large volumes of structured and unstructured data for operational analytics.',
      'Built PySpark-based AWS Glue ETL jobs feeding LLM and NLP models, enabling AI-driven insights for pilot and crew operations.',
      'Developed and optimised Splunk dashboards for real-time monitoring of EC2, S3, and Kubernetes logs — improving incident response time by 40%.',
      'Orchestrated complex multi-step ETL pipelines using Apache Airflow, Step Functions, EventBridge, SQS, and SNS in event-driven serverless architectures.',
      'Designed RESTful APIs with Flask and integrated WebSocket endpoints with React for real-time crew scheduling interfaces.',
    ],
    tags: ['AWS Glue', 'Lambda', 'PySpark', 'Airflow', 'LLM/NLP', 'Splunk', 'Flask', 'React'],
  },
  {
    period: 'Jan 2023 – Jul 2025',
    company: 'StaffWorx',
    location: 'Newark, NJ',
    role: 'Python Developer',
    current: false,
    highlights: [
      'Implemented partitioned and clustered BigQuery tables on GCP, reducing analytics infrastructure cost by 35%.',
      'Optimised Apache Airflow DAG execution by refactoring task dependencies and leveraging parallelism — cutting pipeline runtimes by 50% on large batch workflows.',
      'Built Terraform IaC modules for GCP (Pub/Sub, BigQuery, service accounts) and AWS CloudFormation for automated CI/CD deployment of data engineering workflows.',
      'Developed ETL pipelines using Databricks, Apache Spark, and Python for patient-facing healthcare analytics at scale.',
      'Integrated Dataflow jobs with GCP Logging and Error Reporting, enabling proactive monitoring with Opsgenie and Slack alerting.',
    ],
    tags: ['GCP BigQuery', 'Databricks', 'Airflow', 'Terraform', 'Dataflow', 'Jenkins', 'React Redux'],
  },
  {
    period: 'Jan 2019 – Dec 2021',
    company: 'Tata Consultancy Services',
    location: 'Hyderabad, India',
    role: 'Python Developer',
    current: false,
    highlights: [
      'Developed PySpark-based AWS Glue ETL jobs processing structured and semi-structured data from S3 and RDS into Redshift for enterprise freight reporting.',
      'Migrated monolithic PL/SQL ETL procedures to PySpark using the Spark SQL interface, improving processing speed and scalability on large freight datasets.',
      'Implemented serverless architecture with API Gateway, Lambda, and DynamoDB for Home Automation REST microservices deployed from S3.',
      'Leveraged EKS with cluster autoscaler, node groups, and load balancing for high availability of containerised applications.',
      'Built CI/CD pipelines integrated with EKS for automated testing, building, and deployment of microservices.',
    ],
    tags: ['AWS Glue', 'PySpark', 'Redshift', 'DynamoDB', 'EKS', 'Kubernetes', 'GraphQL'],
  },
  {
    period: 'Oct 2017 – Dec 2018',
    company: 'Pronteff IT Solutions',
    location: 'Hyderabad, India',
    role: 'Python Developer',
    current: false,
    highlights: [
      'Developed full-stack web applications with Python/Django MVT framework and Bootstrap/HTML5 for responsive frontend interfaces.',
      'Built RESTful web services with Django and REST framework to expose and consume data across integrated enterprise systems.',
      'Implemented server-side authentication, cookie-based session management, and SQL-backed CRUD operations for core business logic.',
      'Applied NumPy, Pandas, SciPy, and Pygal for graphical data representation and time-series data manipulation.',
    ],
    tags: ['Python', 'Django', 'REST API', 'MySQL', 'Pandas', 'NumPy', 'Bootstrap'],
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
            {experiences.map((exp, i) => (
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
