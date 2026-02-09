import { Award, ExternalLink } from 'lucide-react';
import ParallaxElement from './ParallaxEffect';

const Certifications = () => {
  const certifications = [
    {
      title: "AWS Certified Solutions Architect - Professional",
      issuer: "Amazon Web Services (AWS)",
      date: "2024",
      description: "Expert-level certification demonstrating advanced skills in designing distributed systems, security, scalability, and cost optimization on AWS.",
      link: "#",
      color: "from-orange-50 to-yellow-100"
    },
    {
      title: "Certified Kubernetes Application Developer (CKAD)",
      issuer: "Cloud Native Computing Foundation (CNCF)",
      date: "2024",
      description: "Validation of expertise in building, configuring, and exposing cloud-native applications on Kubernetes.",
      link: "#",
      color: "from-blue-50 to-cyan-100"
    },
    {
      title: "Azure Data Engineer Associate",
      issuer: "Microsoft",
      date: "2023",
      description: "Certification demonstrating proficiency in designing and implementing data engineering solutions using Azure services.",
      link: "#",
      color: "from-blue-50 to-indigo-100"
    },
    {
      title: "Google Cloud Professional Data Engineer",
      issuer: "Google Cloud",
      date: "2023",
      description: "Expert-level certification for designing, building, and troubleshooting data processing systems on Google Cloud Platform.",
      link: "#",
      color: "from-red-50 to-orange-100"
    },
    {
      title: "Apache Spark and Python for Big Data with PySpark",
      issuer: "Udemy",
      date: "2023",
      description: "Advanced training in PySpark, big data processing, distributed computing, and real-world big data applications.",
      link: "#",
      color: "from-purple-50 to-pink-100"
    },
    {
      title: "Machine Learning Specialization",
      issuer: "Coursera (Andrew Ng)",
      date: "2023",
      description: "Comprehensive specialization in supervised learning, neural networks, and practical machine learning applications.",
      link: "#",
      color: "from-green-50 to-emerald-100"
    }
  ];

  return (
    <section id="certifications" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 -z-10 opacity-30 bg-noise"></div>
      <div className="absolute -top-40 right-0 w-96 h-96 bg-primary/5 rounded-full filter blur-3xl"></div>

      <div className="section-container">
        <div className="text-center max-w-3xl mx-auto mb-16 animate-on-scroll opacity-0">
          <h2 className="section-heading">Certifications & Credentials</h2>
          <p className="section-subheading">
            Professional certifications and continuous learning in cloud, data engineering, and software development.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, index) => (
            <ParallaxElement
              key={cert.title}
              speed={0.05}
              className="animate-on-scroll opacity-0"
            >
              <div className="glass-card overflow-hidden group h-full hover:shadow-lg transition-shadow duration-300">
                <div className={`bg-gradient-to-br ${cert.color} h-24 flex items-center justify-center`}>
                  <Award size={40} className="text-muted-foreground/60 group-hover:text-primary transition-colors" />
                </div>
                <div className="p-6 flex flex-col h-full">
                  <h3 className="text-lg font-semibold mb-2 line-clamp-2">{cert.title}</h3>
                  <p className="text-sm text-accent font-medium mb-1">{cert.issuer}</p>
                  <p className="text-xs text-muted-foreground mb-3">{cert.date}</p>
                  <p className="text-sm text-muted-foreground mb-6 flex-grow">
                    {cert.description}
                  </p>
                  <a
                    href={cert.link}
                    className="flex items-center gap-2 text-sm font-medium text-accent hover:text-primary transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ExternalLink size={14} />
                    View Credential
                  </a>
                </div>
              </div>
            </ParallaxElement>
          ))}
        </div>

        <div className="mt-16 pt-12 border-t border-border">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="animate-on-scroll opacity-0">
              <div className="text-3xl font-bold text-accent mb-2">6+</div>
              <p className="text-muted-foreground">Professional Certifications</p>
            </div>
            <div className="animate-on-scroll opacity-0" style={{ animationDelay: '100ms' }}>
              <div className="text-3xl font-bold text-accent mb-2">6+</div>
              <p className="text-muted-foreground">Years of Experience</p>
            </div>
            <div className="animate-on-scroll opacity-0" style={{ animationDelay: '200ms' }}>
              <div className="text-3xl font-bold text-accent mb-2">10+</div>
              <p className="text-muted-foreground">Projects Completed</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certifications;
