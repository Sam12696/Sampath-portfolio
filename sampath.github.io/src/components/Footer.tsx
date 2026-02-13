
import { Github, Linkedin, Mail, Twitter } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-12 relative overflow-hidden bg-gray-50">
      <div className="absolute inset-0 -z-10 opacity-30 bg-noise"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center pb-8 border-b border-border">
          <div>
            <a href="#home" className="text-2xl font-semibold">
              <span className="text-accent">S</span>ampath
            </a>
            <p className="text-muted-foreground mt-2 max-w-md">
              Crafting exceptional digital experiences with a focus on detail, performance, and user experience.
            </p>
          </div>
          
          <div className="flex justify-start md:justify-end gap-6">
            <a 
              href="mailto:contact@sampath.dev" 
              className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center transition-all hover:bg-accent hover:text-white"
              aria-label="Email"
            >
              <Mail size={18} />
            </a>
            <a 
              href="https://github.com/sampath" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center transition-all hover:bg-accent hover:text-white"
              aria-label="GitHub"
            >
              <Github size={18} />
            </a>
            <a 
              href="https://linkedin.com/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center transition-all hover:bg-accent hover:text-white"
              aria-label="LinkedIn"
            >
              <Linkedin size={18} />
            </a>
            <a 
              href="https://twitter.com/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center transition-all hover:bg-accent hover:text-white"
              aria-label="Twitter"
            >
              <Twitter size={18} />
            </a>
          </div>
        </div>
        
        <div className="pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground">
            &copy; {currentYear} Sampath. All rights reserved.
          </p>
          
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
