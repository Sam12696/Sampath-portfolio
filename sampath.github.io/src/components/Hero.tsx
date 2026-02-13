
import { ArrowDown } from 'lucide-react';
import ParallaxElement from './ParallaxEffect';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center relative overflow-hidden pt-16">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10 opacity-30 bg-noise"></div>
      <div className="absolute top-20 -right-40 w-96 h-96 bg-accent/10 rounded-full filter blur-3xl"></div>
      <div className="absolute -bottom-20 -left-40 w-96 h-96 bg-primary/5 rounded-full filter blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-8">
            <div className="space-y-4">
              <span className="inline-block glass px-4 py-1.5 rounded-full text-sm font-medium animate-fade-in">
                Software Engineer & Developer
              </span>
              
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-balance animate-fade-up">
                Creating digital experiences with precision & elegance
              </h1>
              
              <p className="text-xl text-muted-foreground max-w-2xl animate-fade-up" style={{ animationDelay: '200ms' }}>
                I design and build applications with a focus on user experience, performance, and attention to detail.
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
            
            <div className="pt-8 flex items-center gap-4 animate-fade-up" style={{ animationDelay: '600ms' }}>
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
                  <div className="relative w-full h-full glass-card rounded-3xl overflow-hidden p-6 flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-32 h-32 mx-auto rounded-full bg-accent/10 mb-6 flex items-center justify-center">
                        <span className="text-5xl font-bold text-accent">S</span>
                      </div>
                      <h3 className="text-xl font-semibold">Sampath</h3>
                      <p className="text-muted-foreground">Full Stack Developer</p>
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
