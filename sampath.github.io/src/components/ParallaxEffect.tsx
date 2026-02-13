import { useEffect, useRef } from 'react';

interface ParallaxElementProps {
  children: React.ReactNode;
  speed?: number;
  direction?: 'up' | 'down' | 'left' | 'right';
  className?: string;
  style?: React.CSSProperties;
}

const ParallaxElement = ({ 
  children, 
  speed = 0.1, 
  direction = 'up',
  className = '',
  style = {}
}: ParallaxElementProps) => {
  const elementRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;
    
    const handleScroll = () => {
      if (!element) return;
      
      const rect = element.getBoundingClientRect();
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      
      // Only apply parallax when element is in viewport
      if (rect.top < windowHeight && rect.bottom > 0) {
        let transformValue = '';
        const yOffset = scrollY * speed;
        
        switch (direction) {
          case 'up':
            transformValue = `translateY(-${yOffset}px)`;
            break;
          case 'down':
            transformValue = `translateY(${yOffset}px)`;
            break;
          case 'left':
            transformValue = `translateX(-${yOffset}px)`;
            break;
          case 'right':
            transformValue = `translateX(${yOffset}px)`;
            break;
        }
        
        element.style.transform = transformValue;
      }
    };
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [speed, direction]);
  
  return (
    <div ref={elementRef} className={`will-change-transform ${className}`} style={style}>
      {children}
    </div>
  );
};

export default ParallaxElement;
