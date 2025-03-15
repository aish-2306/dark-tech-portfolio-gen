
import React from 'react';
import { Laptop } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="py-8 border-t border-tech-purple/10">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center space-x-2 mb-4 md:mb-0">
            <Laptop className="h-5 w-5 text-tech-purple" />
            <span className="text-lg font-mono font-semibold text-white">
              Vaishnavi<span className="text-tech-blue">.dev</span>
            </span>
          </div>
          
          <div className="text-center md:text-right">
            <p className="text-gray-400 text-sm">
              &copy; {new Date().getFullYear()} Vaishnavi Somarouthu. All rights reserved.
            </p>
            <p className="text-gray-500 text-xs mt-1">
              Computer & Communication Engineering | Amrita Vishwa Vidyapeetam
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
