
import React, { useEffect, useRef, ReactNode } from 'react';

interface ParallaxSectionProps {
  children: ReactNode;
  speed?: number;
  className?: string;
  id?: string;
  bgColor?: string;
}

const ParallaxSection: React.FC<ParallaxSectionProps> = ({ 
  children, 
  speed = 0.2,
  className = "",
  id,
  bgColor
}) => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current || !contentRef.current) return;
      
      const rect = sectionRef.current.getBoundingClientRect();
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      
      // Only apply parallax when section is in viewport
      if (rect.top < windowHeight && rect.bottom > 0) {
        const offset = (scrollPosition - (rect.top + scrollPosition - windowHeight / 2)) * speed;
        contentRef.current.style.transform = `translateY(${offset}px)`;
      }
    };
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initialize position
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [speed]);
  
  const bgStyle = bgColor ? { backgroundColor: bgColor } : {};
  
  return (
    <div 
      ref={sectionRef} 
      className={`relative overflow-hidden snap-center min-h-screen ${className}`} 
      id={id}
      style={bgStyle}
    >
      <div ref={contentRef} className="transition-transform duration-500 ease-out w-full h-full">
        {children}
      </div>
    </div>
  );
};

export default ParallaxSection;
