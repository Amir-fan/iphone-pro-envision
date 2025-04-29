
import React, { useState, useEffect } from 'react';
import { Apple } from 'lucide-react';

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      // Update background based on scroll position
      setScrolled(window.scrollY > 10);
      
      // Update active section based on scroll position
      const sections = ['hero', 'features', 'specs', 'buy'];
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled 
          ? 'bg-apple-black/80 backdrop-blur-xl border-b border-white/10' 
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <a href="#hero" className="flex-shrink-0" onClick={(e) => { e.preventDefault(); scrollToSection('hero'); }}>
              <Apple className="h-7 w-7 text-apple-white" />
            </a>
          </div>
          <div className="hidden md:block">
            <div className="flex items-center space-x-10">
              <a 
                href="#hero" 
                className={`text-sm transition-all ${activeSection === 'hero' ? 'text-apple-white' : 'text-apple-gray'} hover:text-apple-white`}
                onClick={(e) => { e.preventDefault(); scrollToSection('hero'); }}
              >
                iPhone 16 Pro
              </a>
              <a 
                href="#features" 
                className={`text-sm transition-all ${activeSection === 'features' ? 'text-apple-white' : 'text-apple-gray'} hover:text-apple-white`}
                onClick={(e) => { e.preventDefault(); scrollToSection('features'); }}
              >
                Features
              </a>
              <a 
                href="#specs" 
                className={`text-sm transition-all ${activeSection === 'specs' ? 'text-apple-white' : 'text-apple-gray'} hover:text-apple-white`}
                onClick={(e) => { e.preventDefault(); scrollToSection('specs'); }}
              >
                Tech Specs
              </a>
              <a 
                href="#buy" 
                className="apple-btn text-sm px-5 py-2"
                onClick={(e) => { e.preventDefault(); scrollToSection('buy'); }}
              >
                Buy
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
