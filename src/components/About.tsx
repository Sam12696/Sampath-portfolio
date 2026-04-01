
const stats = [
  { value: '7+', label: 'Years Experience' },
  { value: '50%', label: 'Runtime Optimization', cyan: true },
  { value: '15+', label: 'AWS Services' },
  { value: 'Cloud', label: 'Architect Native', cyan: true },
];

const About = () => {
  return (
    <section id="about" className="py-24 relative overflow-hidden">
      {/* Subtle glow */}
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
              With over 7 years of specialized IT experience, I build the neural pathways of modern enterprises. My expertise lies at the intersection of robust Python development and scalable AWS cloud infrastructure.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              I specialize in architecting high-throughput ETL pipelines using AWS Glue and Lambda, optimizing large-scale datasets with Databricks and Spark, and maintaining the integrity of complex data ecosystems.
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
                  className="text-4xl font-bold mb-2"
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
