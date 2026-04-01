
const stats = [
  { value: '7+', label: 'Years Experience', cyan: false },
  { value: '50%', label: 'Pipeline Runtime Reduction', cyan: true },
  { value: 'AWS · Azure · GCP', label: 'Cloud Platforms', cyan: true },
  { value: '35%', label: 'Infrastructure Cost Cut', cyan: false },
];

const About = () => {
  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div
        className="absolute top-0 left-0 w-80 h-80 rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(0,229,255,0.04) 0%, transparent 70%)', filter: 'blur(60px)' }}
      />

      <div className="section-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Left — text */}
          <div className="animate-on-scroll opacity-0">
            <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-8">
              Precision in<br />
              <span className="cyan-text">Data Wrangling</span>
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-5">
              With over 7 years of specialized IT experience building high-throughput, fault-tolerant data systems trusted by enterprise teams at <span className="text-foreground font-medium">Delta Airlines</span>, healthcare platforms, and global logistics companies, I architect the neural pathways of modern data-driven enterprises.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-5">
              My expertise sits at the intersection of <span className="text-foreground font-medium">Python</span>, <span className="cyan-text font-medium">AWS</span>, and <span className="cyan-text font-medium">GCP</span> — designing end-to-end ETL and ELT pipelines that process petabyte-scale structured and unstructured datasets using <span className="text-foreground font-medium">PySpark</span>, <span className="text-foreground font-medium">Databricks</span>, AWS Glue, BigQuery, and Apache Airflow.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-5">
              I have a proven record of reducing infrastructure costs by up to <span className="cyan-text font-semibold">35%</span>, cutting pipeline runtimes by <span className="cyan-text font-semibold">50%</span>, and improving system observability by <span className="cyan-text font-semibold">40%</span> through architectural optimization and intelligent automation.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Beyond data pipelines, I integrate data workflows with <span className="text-foreground font-medium">LLM and NLP model pipelines</span>, deploy containerized microservices on <span className="text-foreground font-medium">Kubernetes (EKS)</span>, and build production-grade APIs using Django and Flask — covering the full stack from raw ingestion to business-facing insight.
            </p>
          </div>

          {/* Right — 2×2 stat grid */}
          <div className="grid grid-cols-2 gap-4 animate-on-scroll opacity-0">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="p-8 rounded-xl flex flex-col justify-between"
                style={{
                  background: 'hsl(224 39% 10%)',
                  border: '1px solid rgba(0,229,255,0.08)',
                }}
              >
                <span
                  className="text-3xl font-bold mb-2 leading-tight"
                  style={{ color: stat.cyan ? 'hsl(191 100% 50%)' : 'hsl(210 40% 98%)' }}
                >
                  {stat.value}
                </span>
                <span className="text-sm text-muted-foreground">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
