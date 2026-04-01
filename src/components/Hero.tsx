
import { ArrowDown, Terminal, Database, Cloud } from 'lucide-react';
import ParallaxElement from './ParallaxEffect';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center relative overflow-hidden pt-16">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10 opacity-30 bg-noise"></div>
      <div className="absolute top-20 -right-40 w-96 h-96 bg-accent/10 rounded-full filter blur-3xl"></div>
      <div className="absolute -bottom-20 -left-40 w-96 h-96 bg-primary/5 rounded-full filter blur-3xl"></div>

      <div className="section-container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-8">
            <div className="space-y-4">
              <span className="inline-block glass px-4 py-1.5 rounded-full text-sm font-medium animate-fade-in">
                Senior Python Developer & Data Engineer
              </span>

              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-balance animate-fade-up">
                Building data pipelines & intelligent systems at scale
              </h1>

              <p className="text-xl text-muted-foreground max-w-2xl animate-fade-up" style={{ animationDelay: '200ms' }}>
                7+ years crafting high-performance ETL pipelines, distributed data systems, and cloud-native architectures on AWS & Azure — turning raw data into business value.
              </p>
            </div>

            <div className="flex flex-wrap gap-4 animate-fade-up" style={{ animationDelay: '400ms' }}>
              <a href="#projects" className="primary-button">
                View My Work
              </a>
              <a href="#about" className="secondary-button">
                More About Me
              </a>
            </div>

            {/* Tech stack quick-view */}
            <div className="pt-2 animate-fade-up" style={{ animationDelay: '500ms' }}>
              <p className="text-xs text-muted-foreground uppercase tracking-widest mb-3">Core Stack</p>
              <div className="flex flex-wrap gap-2">
                {["Python", "PySpark", "SQL", "AWS", "Azure", "Kafka", "Docker", "Airflow"].map((tech) => (
                  <span key={tech} className="text-xs font-mono bg-secondary/80 border border-border px-3 py-1 rounded-md">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="pt-4 flex items-center gap-4 animate-fade-up" style={{ animationDelay: '600ms' }}>
              <div className="h-px w-12 bg-border"></div>
              <p className="text-sm text-muted-foreground">Scroll to explore</p>
            </div>
          </div>

          <ParallaxElement speed={0.05} className="lg:col-span-5 relative animate-fade-in" style={{ animationDelay: '300ms' }}>
            <div className="aspect-square relative">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative w-full h-full max-w-md">
                  <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-accent/10 to-primary/5 rounded-3xl transform rotate-6 animate-float"></div>
                  <div className="absolute top-0 left-0 w-full h-full glass-card rounded-3xl transform -rotate-3 animate-float" style={{ animationDelay: '1.5s' }}></div>
                  <div className="relative w-full h-full glass-card rounded-3xl overflow-hidden p-8 flex flex-col items-center justify-center gap-6">
                    <div className="text-center">
                      <div className="w-28 h-28 mx-auto rounded-full overflow-hidden mb-4 border-2 border-accent/30 shadow-md">
                        <img
                          src="/profile_image.jpg"
                          alt="Sampath Nanamcharla"
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <h3 className="text-2xl font-semibold">Sampath Nanamcharla</h3>
                      <p className="text-accent font-medium text-sm mt-1">Senior Python Developer & Data Engineer</p>
                    </div>
                    {/* Stat pills */}
                    <div className="grid grid-cols-3 gap-3 w-full">
                      <div className="flex flex-col items-center bg-secondary/60 rounded-xl p-3">
                        <Terminal size={16} className="text-accent mb-1" />
                        <span className="text-lg font-bold">7+</span>
                        <span className="text-xs text-muted-foreground text-center leading-tight">Years Exp.</span>
                      </div>
                      <div className="flex flex-col items-center bg-secondary/60 rounded-xl p-3">
                        <Database size={16} className="text-accent mb-1" />
                        <span className="text-lg font-bold">10+</span>
                        <span className="text-xs text-muted-foreground text-center leading-tight">Projects</span>
                      </div>
                      <div className="flex flex-col items-center bg-secondary/60 rounded-xl p-3">
                        <Cloud size={16} className="text-accent mb-1" />
                        <span className="text-lg font-bold">7+</span>
                        <span className="text-xs text-muted-foreground text-center leading-tight">Certs</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </ParallaxElement>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <a
            href="#about"
            className="w-10 h-10 rounded-full flex items-center justify-center bg-white/50 backdrop-blur-sm shadow-sm"
            aria-label="Scroll to About section"
          >
            <ArrowDown size={18} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
