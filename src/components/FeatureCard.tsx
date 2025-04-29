
import React, { useEffect, useRef } from 'react';
import { cn } from '@/lib/utils';

interface FeatureCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  className?: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ 
  title, 
  description, 
  icon,
  className 
}) => {
  const cardRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
        }
      });
    }, { threshold: 0.15 });
    
    if (cardRef.current) {
      observer.observe(cardRef.current);
    }
    
    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current);
      }
    };
  }, []);
  
  return (
    <div 
      ref={cardRef}
      className={cn(
        'opacity-0 translate-y-[30px] transition-all duration-1000 bg-apple-darkgray/80 backdrop-blur-md rounded-3xl p-8 flex flex-col items-center text-center hover:scale-[1.03] hover:shadow-lg hover:shadow-apple-blue/10 cursor-default border border-white/5',
        className
      )}
    >
      <div className="mb-6 text-apple-blue bg-apple-blue/10 p-4 rounded-full">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-3">{title}</h3>
      <p className="text-apple-gray text-base leading-relaxed">{description}</p>
    </div>
  );
};

export default FeatureCard;
