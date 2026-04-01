
import { Code2, Cloud, Database, Settings2 } from 'lucide-react';

const categories = [
  {
    icon: Code2,
    title: 'Languages',
    skills: [
      { name: 'Python 3.12', highlight: true },
      { name: 'Java Basics', highlight: false },
      { name: 'Bash', highlight: false },
      { name: 'SQL', highlight: false },
    ],
    span: 'col-span-1',
  },
  {
    icon: Cloud,
    title: 'Cloud Infrastructure',
    skills: [
      { name: 'AWS (Glue, Lambda, S3)', highlight: true },
      { name: 'Google Cloud Platform (GCP)', highlight: false },
      { name: 'Azure Fundamentals', highlight: false },
    ],
    span: 'col-span-1 md:col-span-2',
  },
  {
    icon: Database,
    title: 'Data Engineering',
    skills: [
      { name: 'PySpark', highlight: true },
      { name: 'Snowflake', highlight: true },
      { name: 'Databricks', highlight: true },
      { name: 'Redshift', highlight: false },
      { name: 'NoSQL', highlight: false },
      { name: 'SQL (Postgres)', highlight: false },
    ],
    span: 'col-span-1 md:col-span-2',
  },
  {
    icon: Settings2,
    title: 'DevOps',
    skills: [
      { name: 'Terraform', highlight: false },
      { name: 'Docker', highlight: false },
      { name: 'Kubernetes', highlight: false },
      { name: 'CI/CD', highlight: false },
    ],
    span: 'col-span-1',
  },
];

const Skills = () => {
  return (
    <section id="skills" className="py-24 relative overflow-hidden">
      <div
        className="absolute right-0 top-1/2 w-96 h-96 rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(0,229,255,0.05) 0%, transparent 70%)', filter: 'blur(60px)' }}
      />

      <div className="section-container">
        <div className="text-center mb-16 animate-on-scroll opacity-0">
          <h2 className="text-4xl md:text-5xl font-bold">
            Technical <span className="cyan-text">Matrix</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 animate-on-scroll opacity-0">
          {categories.map((cat) => {
            const Icon = cat.icon;
            return (
              <div
                key={cat.title}
                className={`p-6 rounded-xl ${cat.span}`}
                style={{
                  background: 'hsl(224 39% 10%)',
                  border: '1px solid rgba(0,229,255,0.08)',
                }}
              >
                <Icon size={22} className="mb-4" style={{ color: 'hsl(191 100% 50%)' }} />
                <h3 className="text-lg font-semibold text-foreground mb-4">{cat.title}</h3>
                <div className="flex flex-wrap gap-2">
                  {cat.skills.map((skill) => (
                    <span
                      key={skill.name}
                      className={skill.highlight ? 'tech-pill' : 'tech-pill-muted'}
                    >
                      {skill.name}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
