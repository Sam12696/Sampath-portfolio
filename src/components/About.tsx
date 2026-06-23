
const stats = [
  { value: '7+', label: 'Years Experience', cyan: false },
  { value: '40%', label: 'Faster Incident Response', cyan: true },
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
              Full-Stack Python &<br />
              <span className="cyan-text">AI Engineering</span>
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-5">
              Senior Python Full-Stack Developer and Data Engineer with 7 years of experience building scalable web applications, RESTful APIs, and cloud-native microservices. Currently at <span className="text-foreground font-medium">Delta Air Lines</span>, previously at <span className="text-foreground font-medium">Norfolk Southern</span>, <span className="text-foreground font-medium">TCS</span>, and <span className="text-foreground font-medium">HSBC Bank</span>.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-5">
              Deep expertise in <span className="text-foreground font-medium">Django, Flask, and FastAPI</span> with <span className="cyan-text font-medium">OAuth 2.0, JWT, and Azure AD</span> authentication. Proven track record deploying containerized microservices on <span className="text-foreground font-medium">AWS EKS</span> and <span className="text-foreground font-medium">Kubernetes</span>, implementing LLM/AI pipelines with <span className="cyan-text font-medium">LangGraph</span> and OpenAI, and building data engineering workflows with <span className="text-foreground font-medium">Apache Spark, Airflow, and Kafka</span>.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-5">
              Experienced across <span className="text-foreground font-medium">OLTP</span> databases (Oracle, MySQL, PostgreSQL) and <span className="cyan-text font-medium">OLAP</span> platforms (Snowflake, Redshift, BigQuery). Reduced infrastructure costs by <span className="cyan-text font-semibold">35%</span> and improved incident response time by <span className="cyan-text font-semibold">40%</span> through architectural optimization and intelligent automation.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Strong record of delivering high-impact solutions in Agile, cross-functional teams at Fortune 500 companies across <span className="cyan-text font-medium">AWS · Azure · GCP</span> — covering the full stack from raw ingestion to business-facing insight.
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
