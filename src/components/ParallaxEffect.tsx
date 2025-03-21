
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
    
    let startY = 0;
    let frameId: number;
    
    // Store initial position
    const rect = element.getBoundingClientRect();
    startY = rect.top + window.scrollY;
    
    const handleScroll = () => {
      if (!element) return;
      
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      const elementTop = startY;
      
      // Only apply parallax when element is in view
      if (scrollY + windowHeight > elementTop && scrollY < elementTop + element.offsetHeight) {
        let transformValue = '';
        const yOffset = (scrollY - elementTop) * speed;
        
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
      
      frameId = requestAnimationFrame(handleScroll);
    };
    
    handleScroll();
    
    return () => {
      if (frameId) {
        cancelAnimationFrame(frameId);
      }
    };
  }, [speed, direction]);
  
  return (
    <div ref={elementRef} className={`will-change-transform ${className}`} style={style}>
      {children}
    </div>
  );
};

export default ParallaxElement;
