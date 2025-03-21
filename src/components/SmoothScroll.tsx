
import { useEffect, useState } from 'react';

interface SmoothScrollProps {
  children: React.ReactNode;
}

const SmoothScroll = ({ children }: SmoothScrollProps) => {
  const [isReady, setIsReady] = useState(false);
  
  useEffect(() => {
    // Add smooth scrolling polyfill
    const smoothScrollPolyfill = async () => {
      if (!('scrollBehavior' in document.documentElement.style)) {
        const smoothscroll = await import('smoothscroll-polyfill');
        smoothscroll.polyfill();
      }
      setIsReady(true);
    };

    smoothScrollPolyfill();
    
    // Setup intersection observer for animations
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-up');
            observer.unobserve(entry.target);
          }
        });
      },
      { 
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
      }
    );
    
    // Target elements to animate
    const elements = document.querySelectorAll('.animate-on-scroll');
    elements.forEach(el => observer.observe(el));
    
    return () => {
      elements.forEach(el => observer.unobserve(el));
    };
  }, []);
  
  if (!isReady) {
    return <div className="h-screen w-full flex items-center justify-center">
      <div className="animate-pulse bg-accent/20 h-6 w-24 rounded-full"></div>
    </div>;
  }

  return <>{children}</>;
};

export default SmoothScroll;
