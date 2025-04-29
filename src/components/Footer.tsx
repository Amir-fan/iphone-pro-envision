
import React from 'react';
import { Apple } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-apple-darkgray/80 border-t border-apple-gray/20 py-10">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center md:items-start justify-between">
          <div className="mb-6 md:mb-0">
            <div className="flex items-center justify-center md:justify-start">
              <Apple className="h-6 w-6 text-apple-white mr-2" />
              <span className="text-apple-white text-lg font-medium">iPhone 16 Pro</span>
            </div>
            <p className="text-apple-gray mt-2 text-sm text-center md:text-left">
              The ultimate iPhone experience.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
            <div className="text-center md:text-left">
              <h3 className="font-semibold text-apple-white mb-3">Shop and Learn</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-apple-gray hover:text-apple-white text-sm">Store</a></li>
                <li><a href="#" className="text-apple-gray hover:text-apple-white text-sm">Mac</a></li>
                <li><a href="#" className="text-apple-gray hover:text-apple-white text-sm">iPad</a></li>
                <li><a href="#" className="text-apple-gray hover:text-apple-white text-sm">iPhone</a></li>
              </ul>
            </div>
            
            <div className="text-center md:text-left">
              <h3 className="font-semibold text-apple-white mb-3">Services</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-apple-gray hover:text-apple-white text-sm">Apple Music</a></li>
                <li><a href="#" className="text-apple-gray hover:text-apple-white text-sm">Apple TV+</a></li>
                <li><a href="#" className="text-apple-gray hover:text-apple-white text-sm">Apple Arcade</a></li>
                <li><a href="#" className="text-apple-gray hover:text-apple-white text-sm">iCloud</a></li>
              </ul>
            </div>
            
            <div className="text-center md:text-left col-span-2 md:col-span-1">
              <h3 className="font-semibold text-apple-white mb-3">Apple Store</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-apple-gray hover:text-apple-white text-sm">Find a Store</a></li>
                <li><a href="#" className="text-apple-gray hover:text-apple-white text-sm">Genius Bar</a></li>
                <li><a href="#" className="text-apple-gray hover:text-apple-white text-sm">Today at Apple</a></li>
                <li><a href="#" className="text-apple-gray hover:text-apple-white text-sm">Apple Camp</a></li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="mt-10 border-t border-apple-gray/20 pt-6 text-apple-gray text-sm">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p>&copy; 2025 Apple Inc. All rights reserved.</p>
            <div className="mt-4 md:mt-0 flex space-x-6">
              <a href="#" className="hover:text-apple-white">Privacy Policy</a>
              <a href="#" className="hover:text-apple-white">Terms of Use</a>
              <a href="#" className="hover:text-apple-white">Sales Policy</a>
              <a href="#" className="hover:text-apple-white">Legal</a>
              <a href="#" className="hover:text-apple-white">Site Map</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
