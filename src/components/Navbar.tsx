
import React, { useState, useEffect } from 'react';
import { Apple } from 'lucide-react';

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-apple-black/80 backdrop-blur-xl' 
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <a href="#" className="flex-shrink-0">
              <Apple className="h-6 w-6 text-apple-white" />
            </a>
          </div>
          <div className="hidden md:block">
            <div className="flex items-center space-x-8">
              <a href="#hero" className="text-sm text-apple-white hover:text-apple-gray transition-colors">
                iPhone 16 Pro
              </a>
              <a href="#features" className="text-sm text-apple-white hover:text-apple-gray transition-colors">
                Features
              </a>
              <a href="#specs" className="text-sm text-apple-white hover:text-apple-gray transition-colors">
                Tech Specs
              </a>
              <a href="#buy" className="apple-btn text-sm">
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
