
import React, { useEffect, useRef, ReactNode } from 'react';

interface ScrollRevealProps {
  children: ReactNode;
  delay?: number;
  className?: string;
  direction?: 'up' | 'down' | 'left' | 'right';
}

const ScrollReveal: React.FC<ScrollRevealProps> = ({ 
  children, 
  delay = 0,
  className = "",
  direction = 'up'
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
      threshold: 0.15,
      rootMargin: '0px 0px -5% 0px' // Trigger slightly earlier for smoother appearance
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
  
  const getTransformClass = () => {
    switch(direction) {
      case 'down': return 'translate-y-[-30px]';
      case 'left': return 'translate-x-[30px]';
      case 'right': return 'translate-x-[-30px]';
      case 'up': 
      default: return 'translate-y-[30px]';
    }
  };
  
  return (
    <div 
      ref={elementRef} 
      className={`opacity-0 ${getTransformClass()} transition-all duration-[1200ms] ${className}`}
      style={{ 
        transitionDelay: `${delay}ms`,
        transitionTimingFunction: 'cubic-bezier(0.165, 0.84, 0.44, 1)' // Premium Apple-like easing
      }}
    >
      {children}
    </div>
  );
};

export default ScrollReveal;
