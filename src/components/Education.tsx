
import React from 'react';
import { GraduationCap, Calendar } from 'lucide-react';
import { useTheme } from '@/contexts/ThemeContext';

const Education = () => {
  const { theme } = useTheme();
  
  return (
    <section id="education" className={`py-20 ${theme === 'light' ? 'bg-gray-50' : 'bg-tech-darker/50'}`}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">
            <span className="text-gradient-blue">Education</span>
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-tech-blue to-tech-purple mx-auto mb-8"></div>
        </div>
        
        <div className="max-w-3xl mx-auto">
          <div className={`relative pl-8 border-l ${theme === 'light' ? 'border-tech-purple/20' : 'border-tech-purple/30'} mb-12`}>
            <div className="absolute left-0 top-0 w-4 h-4 rounded-full bg-tech-purple -translate-x-2"></div>
            <div className={`${theme === 'light' ? 'bg-white border border-gray-200 hover:border-tech-purple/30 rounded-lg p-6' : 'tech-card'}`}>
              <div className="flex items-center mb-3">
                <GraduationCap className="mr-2 h-5 w-5 text-tech-blue" />
                <h3 className={`text-xl font-semibold ${theme === 'light' ? 'text-gray-800' : 'text-white'}`}>B.Tech in Computer and Communication Engineering</h3>
              </div>
              <p className={`mb-2 ${theme === 'light' ? 'text-gray-700' : 'text-gray-300'}`}>Amrita Vishwa Vidyapeetam</p>
              <div className={`flex items-center ${theme === 'light' ? 'text-gray-600' : 'text-gray-400'} text-sm`}>
                <Calendar className="mr-1 h-4 w-4" />
                <span>Sep 2023 - Sep 2027 | Amaravati, AP, India</span>
              </div>
              <div className={`mt-3 ${theme === 'light' ? 'bg-gray-50' : 'bg-tech-dark/40'} p-3 rounded-md`}>
                <p className={`${theme === 'light' ? 'text-gray-600' : 'text-gray-400'}`}>Current CGPA: <span className="text-tech-blue font-semibold">8.54</span></p>
              </div>
            </div>
          </div>
          
          <div className={`relative pl-8 border-l ${theme === 'light' ? 'border-tech-purple/20' : 'border-tech-purple/30'}`}>
            <div className="absolute left-0 top-0 w-4 h-4 rounded-full bg-tech-purple -translate-x-2"></div>
            <div className={`${theme === 'light' ? 'bg-white border border-gray-200 hover:border-tech-purple/30 rounded-lg p-6' : 'tech-card'}`}>
              <h3 className={`text-lg font-semibold ${theme === 'light' ? 'text-gray-800' : 'text-white'} mb-3`}>Languages</h3>
              <div className="flex flex-wrap gap-2">
                {["Telugu", "Hindi", "English"].map((language, index) => (
                  <span 
                    key={index} 
                    className={`px-3 py-1 rounded-full ${theme === 'light' ? 'bg-gray-100 border-gray-200 text-gray-700' : 'bg-tech-purple/10 border-tech-purple/20 text-gray-300'} border text-sm`}
                  >
                    {language}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
