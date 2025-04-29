
import React, { useEffect, useRef } from 'react';

interface PhoneModelProps {
  color: string;
}

const PhoneModel: React.FC<PhoneModelProps> = ({ color }) => {
  const phoneRef = useRef<HTMLDivElement>(null);
  
  // Different gradient backgrounds based on color
  const getPhoneGradient = () => {
    switch(color) {
      case 'natural':
        return 'bg-gradient-to-br from-apple-natural to-apple-natural/70';
      case 'gold':
        return 'bg-gradient-to-br from-apple-gold to-apple-gold/70';
      case 'blue':
        return 'bg-gradient-to-br from-blue-800 to-blue-900';
      case 'titanium':
      default:
        return 'bg-gradient-to-br from-apple-titanium to-apple-darkgray';
    }
  };

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!phoneRef.current) return;
      
      const { left, top, width, height } = phoneRef.current.getBoundingClientRect();
      const x = (e.clientX - left) / width - 0.5;
      const y = (e.clientY - top) / height - 0.5;
      
      // Apply subtle 3D transform based on mouse position
      phoneRef.current.style.transform = `
        perspective(1000px)
        rotateY(${x * 5}deg)
        rotateX(${-y * 5}deg)
      `;
    };
    
    const resetTransform = () => {
      if (!phoneRef.current) return;
      phoneRef.current.style.transform = `
        perspective(1000px)
        rotateY(0deg)
        rotateX(0deg)
      `;
    };
    
    const phoneElement = phoneRef.current;
    if (phoneElement) {
      phoneElement.addEventListener('mousemove', handleMouseMove);
      phoneElement.addEventListener('mouseleave', resetTransform);
    }
    
    return () => {
      if (phoneElement) {
        phoneElement.removeEventListener('mousemove', handleMouseMove);
        phoneElement.removeEventListener('mouseleave', resetTransform);
      }
    };
  }, []);
  
  return (
    <div 
      ref={phoneRef}
      className={`relative w-[250px] h-[500px] rounded-[45px] ${getPhoneGradient()} shadow-xl transition-all duration-300 ease-out`}
    >
      {/* Camera Island */}
      <div className="absolute top-5 left-1/2 transform -translate-x-1/2 w-[90px] h-[30px] bg-black rounded-full flex justify-center items-center gap-2">
        <div className="w-[12px] h-[12px] rounded-full bg-black border-[2px] border-gray-800"></div>
        <div className="w-[10px] h-[10px] rounded-full bg-black border-[2px] border-gray-800"></div>
      </div>
      
      {/* Dynamic Island */}
      <div className="absolute top-[15px] left-1/2 transform -translate-x-1/2 w-[90px] h-[22px] bg-black rounded-full"></div>
      
      {/* Screen Reflection */}
      <div className="absolute inset-[6px] rounded-[40px] bg-gradient-to-tr from-black/40 via-transparent to-white/20 pointer-events-none"></div>
      
      {/* Side Button */}
      <div className="absolute -right-[2px] top-[120px] h-[60px] w-[4px] rounded-l-lg bg-gray-700"></div>
      
      {/* Volume Buttons */}
      <div className="absolute -left-[2px] top-[100px] h-[30px] w-[4px] rounded-r-lg bg-gray-700"></div>
      <div className="absolute -left-[2px] top-[140px] h-[30px] w-[4px] rounded-r-lg bg-gray-700"></div>
      
      {/* Action Button */}
      <div className="absolute -left-[2px] top-[200px] h-[30px] w-[4px] rounded-r-lg bg-gray-700"></div>
    </div>
  );
};

export default PhoneModel;
