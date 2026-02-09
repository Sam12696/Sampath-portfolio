
import { useEffect } from 'react';
import smoothscroll from 'smoothscroll-polyfill';

interface SmoothScrollProps {
  children: React.ReactNode;
}

const SmoothScroll = ({ children }: SmoothScrollProps) => {
  useEffect(() => {
    // Add smooth scrolling polyfill
    if (!('scrollBehavior' in document.documentElement.style)) {
      smoothscroll.polyfill();
    }
    
    // Setup intersection observer for animations
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.remove('opacity-0');
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
    elements.forEach(el => {
      el.classList.add('opacity-0');
      observer.observe(el);
    });
    
    return () => {
      elements.forEach(el => observer.unobserve(el));
    };
  }, []);

  return <>{children}</>;
};

export default SmoothScroll;
