import { Award, ExternalLink } from 'lucide-react';
import ParallaxElement from './ParallaxEffect';

const Certifications = () => {
  const certifications = [
    {
      title: "AWS Certified Solutions Architect – Professional",
      issuer: "Amazon Web Services (AWS)",
      date: "2024",
      description: "Advanced certification validating expertise in designing distributed, highly available, and cost-optimised systems on AWS — covering architecture best practices, security, and multi-region deployments.",
      link: "#",
      color: "from-orange-50 to-yellow-100"
    },
    {
      title: "Python for Everybody Specialization",
      issuer: "Coursera",
      date: "2023",
      description: "Comprehensive Python developer certification covering data structures, networked application APIs, and database-driven applications using Python.",
      link: "https://www.coursera.org/user/ebac95c1eac5057f713fd38cf16d16c3",
      color: "from-blue-50 to-cyan-100"
    },
    {
      title: "SQL (Intermediate) Certificate",
      issuer: "HackerRank",
      date: "2023",
      description: "Verified proficiency in intermediate SQL — complex joins, subqueries, aggregations, and window functions for analytical data retrieval.",
      link: "https://www.hackerrank.com/profile/sampathprofile",
      color: "from-green-50 to-emerald-100"
    },
    {
      title: "REST API Certificate",
      issuer: "HackerRank",
      date: "2023",
      description: "Demonstrated ability to consume, test, and work with RESTful APIs — including filtering, sorting, and chaining API responses for real-world integrations.",
      link: "https://www.hackerrank.com/profile/sampathprofile",
      color: "from-purple-50 to-pink-100"
    },
    {
      title: "Git and GitHub Certificate",
      issuer: "Coursera",
      date: "2023",
      description: "Certified in version control fundamentals, branching strategies, pull request workflows, and collaborative development using Git and GitHub.",
      link: "https://www.coursera.org/user/ebac95c1eac5057f713fd38cf16d16c3",
      color: "from-slate-50 to-gray-100"
    }
  ];

  return (
    <section id="certifications" className="py-24 relative overflow-hidden">



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
              <div className="glass-card overflow-hidden group h-full transition-shadow duration-300">
                <div className="h-24 flex items-center justify-center" style={{ background: 'rgba(0,229,255,0.05)', borderBottom: '1px solid rgba(0,229,255,0.1)' }}>
                  <Award size={36} style={{ color: 'hsl(191 100% 50%)' }} />
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
              <div className="text-3xl font-bold text-accent mb-2">5</div>
              <p className="text-muted-foreground">Professional Certifications</p>
            </div>
            <div className="animate-on-scroll opacity-0" style={{ animationDelay: '100ms' }}>
              <div className="text-3xl font-bold text-accent mb-2">7+</div>
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
