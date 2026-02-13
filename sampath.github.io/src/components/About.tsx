
import { Code, Figma, Server, Star } from 'lucide-react';
import ParallaxElement from './ParallaxEffect';

const About = () => {
  const skills = [
    "JavaScript", "TypeScript", "React", "Next.js", 
    "Node.js", "Express", "CSS/SCSS", "Tailwind CSS", 
    "Git", "REST APIs", "SQL", "MongoDB"
  ];
  
  return (
    <section id="about" className="py-24 relative overflow-hidden bg-white">
      <div className="absolute inset-0 -z-10 opacity-30 bg-noise"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          <ParallaxElement speed={0.08} className="lg:col-span-5 relative animate-on-scroll opacity-0">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-accent/10 to-primary/5 rounded-3xl transform rotate-3"></div>
              <div className="glass-card p-8 relative">
                <h2 className="section-heading mb-6">About Me</h2>
                <p className="text-muted-foreground mb-4">
                  I'm a passionate software engineer with a keen eye for detail and a love for crafting clean, efficient, and user-friendly applications.
                </p>
                <p className="text-muted-foreground mb-4">
                  With expertise in both frontend and backend technologies, I enjoy solving complex problems and creating seamless user experiences.
                </p>
                <p className="text-muted-foreground">
                  My approach to development is rooted in understanding user needs and business objectives, ensuring that every line of code serves a purpose.
                </p>
              </div>
            </div>
          </ParallaxElement>
          
          <div className="lg:col-span-7 space-y-12">
            <div className="animate-on-scroll opacity-0">
              <h3 className="text-2xl font-bold mb-8">My Expertise</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="glass-card p-6">
                  <div className="w-12 h-12 rounded-full bg-primary/5 flex items-center justify-center mb-4">
                    <Code size={24} className="text-primary"/>
                  </div>
                  <h4 className="text-lg font-semibold mb-2">Frontend Development</h4>
                  <p className="text-muted-foreground">
                    Creating responsive, accessible, and performant user interfaces with modern frameworks and libraries.
                  </p>
                </div>
                
                <div className="glass-card p-6">
                  <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center mb-4">
                    <Server size={24} className="text-accent"/>
                  </div>
                  <h4 className="text-lg font-semibold mb-2">Backend Development</h4>
                  <p className="text-muted-foreground">
                    Building robust, scalable, and secure server-side applications and RESTful APIs.
                  </p>
                </div>
                
                <div className="glass-card p-6">
                  <div className="w-12 h-12 rounded-full bg-primary/5 flex items-center justify-center mb-4">
                    <Figma size={24} className="text-primary"/>
                  </div>
                  <h4 className="text-lg font-semibold mb-2">UI/UX Design</h4>
                  <p className="text-muted-foreground">
                    Designing intuitive and aesthetically pleasing user interfaces with a focus on user experience.
                  </p>
                </div>
                
                <div className="glass-card p-6">
                  <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center mb-4">
                    <Star size={24} className="text-accent"/>
                  </div>
                  <h4 className="text-lg font-semibold mb-2">Performance Optimization</h4>
                  <p className="text-muted-foreground">
                    Enhancing application performance through code optimization and best practices.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="animate-on-scroll opacity-0">
              <h3 className="text-2xl font-bold mb-6">Skills & Technologies</h3>
              <div className="flex flex-wrap gap-3">
                {skills.map((skill, index) => (
                  <span 
                    key={index} 
                    className="glass px-4 py-2 rounded-full text-sm font-medium"
                    style={{ animationDelay: `${index * 50}ms` }}
                  >
                    {skill}
                  </span>
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
