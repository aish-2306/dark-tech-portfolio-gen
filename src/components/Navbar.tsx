
import React from 'react';
import { Laptop, Home, User, Briefcase, Code, Award, Mail } from 'lucide-react';
import { Link } from 'react-scroll';
import ThemeToggle from './ThemeToggle';
import { useTheme } from '@/contexts/ThemeContext';

const Navbar = () => {
  const { theme } = useTheme();
  
  return (
    <nav className={`fixed top-0 left-0 w-full py-4 ${theme === 'light' ? 'bg-white/80' : 'bg-tech-dark/80'} backdrop-blur-md z-50 ${theme === 'light' ? 'border-gray-200' : 'border-tech-purple/10'} border-b`}>
      <div className="container mx-auto flex justify-between items-center px-4">
        <div className="flex items-center space-x-2">
          <Laptop className="h-6 w-6 text-tech-purple" />
          <span className={`text-xl font-mono font-semibold ${theme === 'light' ? 'text-gray-800' : 'text-white'}`}>
            Vaishnavi<span className="text-tech-blue">.dev</span>
          </span>
        </div>
        
        <div className="hidden md:flex space-x-6">
          {[
            { name: "Home", icon: <Home className="h-4 w-4 mr-1" />, to: "hero" },
            { name: "About", icon: <User className="h-4 w-4 mr-1" />, to: "about" },
            { name: "Experience", icon: <Briefcase className="h-4 w-4 mr-1" />, to: "experience" },
            { name: "Projects", icon: <Code className="h-4 w-4 mr-1" />, to: "projects" },
            { name: "Achievements", icon: <Award className="h-4 w-4 mr-1" />, to: "achievements" },
            { name: "Contact", icon: <Mail className="h-4 w-4 mr-1" />, to: "contact" }
          ].map(item => (
            <Link
              key={item.name}
              to={item.to}
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className={`flex items-center text-sm ${theme === 'light' ? 'text-gray-600' : 'text-gray-300'} hover:text-tech-blue cursor-pointer transition-colors`}
            >
              {item.icon}
              {item.name}
            </Link>
          ))}
        </div>
        
        <div className="flex items-center">
          <ThemeToggle />
          <div className="md:hidden ml-4">
            {/* Mobile menu button would go here */}
            <button className={`${theme === 'light' ? 'text-gray-600' : 'text-gray-300'} hover:text-tech-blue`}>
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
