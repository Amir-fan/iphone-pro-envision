
import React, { useEffect, useRef, ReactNode } from 'react';

interface ScrollRevealProps {
  children: ReactNode;
  delay?: number;
  className?: string;
}

const ScrollReveal: React.FC<ScrollRevealProps> = ({ 
  children, 
  delay = 0,
  className = ""
}) => {
  const elementRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            entry.target.classList.add('revealed');
          }, delay);
        }
      });
    }, { 
      threshold: 0.2,
      rootMargin: '0px 0px -10% 0px' // Trigger slightly before element is fully visible
    });
    
    if (elementRef.current) {
      observer.observe(elementRef.current);
    }
    
    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current);
      }
    };
  }, [delay]);
  
  return (
    <div 
      ref={elementRef} 
      className={`reveal-animation ${className}`}
      style={{ 
        transitionDelay: `${delay}ms`,
        transitionTimingFunction: 'cubic-bezier(0.215, 0.61, 0.355, 1)' // Apple-like easing
      }}
    >
      {children}
    </div>
  );
};

export default ScrollReveal;
