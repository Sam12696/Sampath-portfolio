
import { ExternalLink, Github } from 'lucide-react';
import ParallaxElement from './ParallaxEffect';

const Projects = () => {
  const projects = [
    {
      title: "E-Commerce Platform",
      description: "A full-featured e-commerce platform with product catalog, shopping cart, and payment integration.",
      tags: ["React", "Node.js", "MongoDB", "Stripe"],
      image: "bg-gradient-to-br from-blue-50 to-indigo-100",
      link: "#",
      github: "#"
    },
    {
      title: "Task Management System",
      description: "A collaborative task management application with real-time updates and team collaboration features.",
      tags: ["Next.js", "Firebase", "Tailwind CSS", "React Query"],
      image: "bg-gradient-to-br from-emerald-50 to-teal-100",
      link: "#",
      github: "#"
    },
    {
      title: "Content Management System",
      description: "A flexible CMS with customizable content types, role-based access control, and API integrations.",
      tags: ["TypeScript", "Express", "PostgreSQL", "GraphQL"],
      image: "bg-gradient-to-br from-amber-50 to-yellow-100",
      link: "#",
      github: "#"
    }
  ];
  
  return (
    <section id="projects" className="py-24 relative overflow-hidden bg-gray-50">
      <div className="absolute inset-0 -z-10 opacity-30 bg-noise"></div>
      <div className="absolute top-40 -left-40 w-96 h-96 bg-accent/10 rounded-full filter blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="section-heading">Featured Projects</h2>
          <p className="section-subheading">
            Here are some of my recent projects that showcase my skills and experience.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <ParallaxElement 
              key={project.title} 
              speed={0.05} 
              direction={index % 2 === 0 ? 'up' : 'down'}
              className=""
            >
              <div className="glass-card overflow-hidden group">
                <div className={`${project.image} aspect-video w-full`}></div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-3">{project.title}</h3>
                  <p className="text-muted-foreground mb-4">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag) => (
                      <span key={tag} className="text-xs bg-secondary px-2.5 py-1 rounded-full">
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex items-center gap-4">
                    <a 
                      href={project.github}
                      className="flex items-center gap-2 text-sm font-medium transition-colors hover:text-accent"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github size={16} />
                      Code
                    </a>
                    <a 
                      href={project.link}
                      className="flex items-center gap-2 text-sm font-medium transition-colors hover:text-accent"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLink size={16} />
                      Live Demo
                    </a>
                  </div>
                </div>
              </div>
            </ParallaxElement>
          ))}
          
          <ParallaxElement speed={0.05} className="lg:col-span-2">
            <div className="glass-card p-8 text-center">
              <h3 className="text-xl font-semibold mb-4">Want to see more?</h3>
              <p className="text-muted-foreground mb-6">
                Check out my GitHub repository for more projects and code samples.
              </p>
              <div className="flex justify-center">
                <a 
                  href="https://github.com/sampath" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="primary-button"
                >
                  View GitHub Profile
                </a>
              </div>
            </div>
          </ParallaxElement>
        </div>
      </div>
    </section>
  );
};

export default Projects;
