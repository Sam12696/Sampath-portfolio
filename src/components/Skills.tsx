
import { Code2, Cloud, Globe, Database, Cpu, BarChart2, Settings2, Shield, Zap } from 'lucide-react';

const categories = [
  {
    icon: Code2,
    title: 'Languages & Frameworks',
    skills: [
      { name: 'Python 3.x', highlight: true },
      { name: 'Django', highlight: true },
      { name: 'Flask', highlight: true },
      { name: 'FastAPI', highlight: true },
      { name: 'React / Redux', highlight: false },
      { name: 'JavaScript', highlight: false },
      { name: 'Scala', highlight: false },
      { name: 'SQL', highlight: false },
      { name: 'Bash/Shell', highlight: false },
    ],
  },
  {
    icon: Cloud,
    title: 'Cloud – AWS',
    skills: [
      { name: 'EC2 / S3 / IAM', highlight: true },
      { name: 'Lambda', highlight: true },
      { name: 'EKS', highlight: true },
      { name: 'Glue / Athena', highlight: false },
      { name: 'Redshift', highlight: false },
      { name: 'SageMaker', highlight: false },
      { name: 'Step Functions', highlight: false },
      { name: 'SQS / SNS / Kinesis', highlight: false },
      { name: 'KMS / CloudWatch', highlight: false },
      { name: 'CloudFormation', highlight: false },
    ],
  },
  {
    icon: Globe,
    title: 'Cloud – Azure / GCP',
    skills: [
      { name: 'Azure AD', highlight: true },
      { name: 'GCP BigQuery', highlight: true },
      { name: 'Azure Data Factory', highlight: false },
      { name: 'Azure Synapse', highlight: false },
      { name: 'AKS', highlight: false },
      { name: 'Cloud Dataflow', highlight: false },
      { name: 'Pub/Sub', highlight: false },
      { name: 'Cloud Composer', highlight: false },
    ],
  },
  {
    icon: Database,
    title: 'Databases (OLTP / OLAP)',
    skills: [
      { name: 'Snowflake', highlight: true },
      { name: 'Redshift', highlight: true },
      { name: 'BigQuery', highlight: true },
      { name: 'Oracle', highlight: false },
      { name: 'PostgreSQL', highlight: false },
      { name: 'MySQL', highlight: false },
      { name: 'DynamoDB', highlight: false },
      { name: 'MongoDB', highlight: false },
      { name: 'Cassandra', highlight: false },
      { name: 'DuckDB', highlight: false },
    ],
  },
  {
    icon: Cpu,
    title: 'AI & LLM Engineering',
    skills: [
      { name: 'OpenAI', highlight: true },
      { name: 'LangChain', highlight: true },
      { name: 'LangGraph', highlight: true },
      { name: 'AI Agents', highlight: true },
      { name: 'RAG Workflows', highlight: false },
      { name: 'NLP Pipelines', highlight: false },
      { name: 'LLM Tokenization', highlight: false },
      { name: 'Scikit-learn', highlight: false },
    ],
  },
  {
    icon: BarChart2,
    title: 'Data Engineering',
    skills: [
      { name: 'Apache Spark', highlight: true },
      { name: 'PySpark', highlight: true },
      { name: 'Apache Airflow', highlight: true },
      { name: 'Databricks', highlight: true },
      { name: 'Hadoop / Hive', highlight: false },
      { name: 'Kafka', highlight: false },
      { name: 'Kinesis', highlight: false },
      { name: 'Talend / Informatica', highlight: false },
      { name: 'Sqoop', highlight: false },
    ],
  },
  {
    icon: Settings2,
    title: 'DevOps & Containerization',
    skills: [
      { name: 'Docker', highlight: true },
      { name: 'Kubernetes', highlight: true },
      { name: 'Terraform', highlight: true },
      { name: 'Jenkins', highlight: false },
      { name: 'GitHub Actions', highlight: false },
      { name: 'Azure Pipelines', highlight: false },
      { name: 'Pytest', highlight: false },
      { name: 'Git', highlight: false },
    ],
  },
  {
    icon: Shield,
    title: 'Security & Auth',
    skills: [
      { name: 'OAuth 2.0', highlight: true },
      { name: 'JWT', highlight: true },
      { name: 'IAM Policies', highlight: false },
      { name: 'RBAC', highlight: false },
      { name: 'AWS KMS', highlight: false },
      { name: 'Secrets Management', highlight: false },
      { name: 'Network Policies', highlight: false },
      { name: 'HIPAA', highlight: false },
    ],
  },
  {
    icon: Zap,
    title: 'Caching & Performance',
    skills: [
      { name: 'Redis', highlight: true },
      { name: 'TTL & Cache Invalidation', highlight: false },
      { name: 'Query Tuning', highlight: false },
      { name: 'Partitioning / Clustering', highlight: false },
      { name: 'API Optimization', highlight: false },
    ],
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

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 animate-on-scroll opacity-0">
          {categories.map((cat) => {
            const Icon = cat.icon;
            return (
              <div
                key={cat.title}
                className="p-6 rounded-xl"
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
