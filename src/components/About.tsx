
import { Database, Cloud, Brain, Code } from 'lucide-react';
import ParallaxElement from './ParallaxEffect';

const About = () => {
  const skillGroups = [
    {
      label: "Python & Data",
      skills: ["Python", "PySpark", "Pandas", "NumPy", "SQLAlchemy", "Pytest", "FastAPI", "Django", "Flask"]
    },
    {
      label: "Cloud & Big Data",
      skills: ["AWS", "Azure", "GCP", "Hadoop", "Kafka", "Hive", "Redshift", "Snowflake", "Databricks"]
    },
    {
      label: "Data Engineering",
      skills: ["ETL/ELT", "Azure Data Factory", "AWS Glue", "Airflow", "SSIS", "dbt", "Spark SQL"]
    },
    {
      label: "DevOps & ML",
      skills: ["Docker", "Kubernetes", "Jenkins", "CI/CD", "Scikit-learn", "TensorFlow", "PyTorch", "Git"]
    }
  ];

  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 -z-10 opacity-30 bg-noise"></div>
      <div className="section-container">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          <ParallaxElement speed={0.08} className="lg:col-span-5 relative animate-on-scroll opacity-0">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-accent/10 to-primary/5 rounded-3xl transform rotate-3"></div>
              <div className="glass-card p-8 relative">
                <h2 className="section-heading mb-6">About Me</h2>
                <p className="text-muted-foreground mb-4">
                  I'm a Senior Python Developer & Data Engineer with 7+ years of experience designing and delivering large-scale data solutions across AWS, Azure, and GCP.
                </p>
                <p className="text-muted-foreground mb-4">
                  My core strength is building robust, production-grade ETL/ELT pipelines using <span className="font-semibold text-foreground">PySpark, Apache Kafka, and Azure Data Factory</span> — processing terabytes of data reliably and efficiently. I've led migrations from legacy mainframe systems to cloud-native data warehouses with zero downtime.
                </p>
                <p className="text-muted-foreground">
                  I bring a strong engineering mindset to every project: clean, testable Python code, solid CI/CD practices, and a deep understanding of distributed systems. Whether it's a real-time streaming pipeline or an ML-powered recommendation engine, I focus on correctness, performance, and maintainability.
                </p>
              </div>
            </div>
          </ParallaxElement>

          <div className="lg:col-span-7 space-y-12">
            <div className="animate-on-scroll opacity-0">
              <h3 className="text-2xl font-bold mb-8">Core Expertise</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="glass-card p-6">
                  <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center mb-4">
                    <Database size={24} className="text-accent" />
                  </div>
                  <h4 className="text-lg font-semibold mb-2">Data Engineering & ETL</h4>
                  <p className="text-muted-foreground text-sm">
                    Designing and operating large-scale data pipelines with PySpark, Azure Data Factory, AWS Glue, and Apache Kafka. Expertise in dimensional modeling, slowly changing dimensions, and warehouse loading strategies for Redshift and Snowflake.
                  </p>
                </div>

                <div className="glass-card p-6">
                  <div className="w-12 h-12 rounded-full bg-primary/5 flex items-center justify-center mb-4">
                    <Code size={24} className="text-primary" />
                  </div>
                  <h4 className="text-lg font-semibold mb-2">Python Backend Development</h4>
                  <p className="text-muted-foreground text-sm">
                    Building scalable RESTful and GraphQL APIs with Django, Flask, and FastAPI. Strong focus on clean architecture, test-driven development with Pytest, and microservices patterns for high-availability systems.
                  </p>
                </div>

                <div className="glass-card p-6">
                  <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center mb-4">
                    <Cloud size={24} className="text-accent" />
                  </div>
                  <h4 className="text-lg font-semibold mb-2">Cloud & Big Data Infrastructure</h4>
                  <p className="text-muted-foreground text-sm">
                    Deploying and optimising data workloads on <span className="font-semibold text-accent">AWS</span> and <span className="font-semibold text-accent">Azure</span>. Containerising applications with Docker and Kubernetes, implementing CI/CD pipelines, and using IaC for reproducible cloud environments.
                  </p>
                </div>

                <div className="glass-card p-6">
                  <div className="w-12 h-12 rounded-full bg-primary/5 flex items-center justify-center mb-4">
                    <Brain size={24} className="text-primary" />
                  </div>
                  <h4 className="text-lg font-semibold mb-2">ML & AI Systems</h4>
                  <p className="text-muted-foreground text-sm">
                    Developing end-to-end ML pipelines with Scikit-learn, TensorFlow, and PyTorch — from feature engineering and model training to production serving. Building recommendation engines and predictive systems on PySpark for terabyte-scale datasets.
                  </p>
                </div>
              </div>
            </div>

            <div className="animate-on-scroll opacity-0">
              <h3 className="text-2xl font-bold mb-6">Skills & Technologies</h3>
              <div className="space-y-5">
                {skillGroups.map((group) => (
                  <div key={group.label}>
                    <p className="text-xs font-semibold uppercase tracking-widest text-accent mb-2">{group.label}</p>
                    <div className="flex flex-wrap gap-2">
                      {group.skills.map((skill) => (
                        <span
                          key={skill}
                          className="glass px-3 py-1.5 rounded-md text-sm font-mono font-medium"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
