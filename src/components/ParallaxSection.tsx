
import React, { useEffect, useRef, ReactNode } from 'react';

interface ParallaxSectionProps {
  children: ReactNode;
  speed?: number;
  className?: string;
  id?: string;
}

const ParallaxSection: React.FC<ParallaxSectionProps> = ({ 
  children, 
  speed = 0.3,
  className = "",
  id
}) => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current || !contentRef.current) return;
      
      const rect = sectionRef.current.getBoundingClientRect();
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      
      // Check if section is in view
      if (rect.top < windowHeight && rect.bottom > 0) {
        const offset = (scrollPosition - (rect.top + scrollPosition - windowHeight / 2)) * speed;
        contentRef.current.style.transform = `translateY(${offset}px)`;
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initialize position
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [speed]);
  
  return (
    <div ref={sectionRef} className={`relative overflow-hidden snap-center ${className}`} id={id}>
      <div ref={contentRef} className="transition-transform duration-300 ease-out">
        {children}
      </div>
    </div>
  );
};

export default ParallaxSection;
