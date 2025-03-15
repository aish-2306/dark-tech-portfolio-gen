
import React from 'react';
import { Mail, MapPin, Phone, ExternalLink, Linkedin, Github } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useTheme } from '@/contexts/ThemeContext';

const Contact = () => {
  const { theme } = useTheme();
  
  return (
    <section id="contact" className={`py-20 ${theme === 'light' ? 'bg-gray-50' : 'bg-tech-darker/50'}`}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">
            <span className="text-gradient-blue">Get In Touch</span>
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-tech-blue to-tech-purple mx-auto mb-8"></div>
          <p className={`${theme === 'light' ? 'text-gray-700' : 'text-gray-300'} max-w-3xl mx-auto`}>
            Feel free to reach out for collaborations, opportunities, or just to say hello!
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className={`${theme === 'light' ? 'bg-white border border-gray-200 hover:border-tech-purple/30 rounded-lg p-6' : 'tech-card'}`}>
            <h3 className={`text-xl font-semibold ${theme === 'light' ? 'text-gray-800' : 'text-white'} mb-6`}>Contact Information</h3>
            
            <div className="space-y-4">
              <div className="flex items-start">
                <div className={`${theme === 'light' ? 'bg-gray-100' : 'bg-tech-purple/10'} rounded-full p-2 mr-4`}>
                  <Mail className="h-5 w-5 text-tech-purple" />
                </div>
                <div>
                  <p className={`text-sm ${theme === 'light' ? 'text-gray-600' : 'text-gray-400'} mb-1`}>Email</p>
                  <a href="mailto:vaishnavisomarouthu@gmail.com" className={`${theme === 'light' ? 'text-gray-800' : 'text-gray-200'} hover:text-tech-blue transition-colors`}>
                    vaishnavisomarouthu@gmail.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className={`${theme === 'light' ? 'bg-gray-100' : 'bg-tech-purple/10'} rounded-full p-2 mr-4`}>
                  <Phone className="h-5 w-5 text-tech-purple" />
                </div>
                <div>
                  <p className={`text-sm ${theme === 'light' ? 'text-gray-600' : 'text-gray-400'} mb-1`}>Phone</p>
                  <a href="tel:+919553240235" className={`${theme === 'light' ? 'text-gray-800' : 'text-gray-200'} hover:text-tech-blue transition-colors`}>
                    +91 9553240235
                  </a>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className={`${theme === 'light' ? 'bg-gray-100' : 'bg-tech-purple/10'} rounded-full p-2 mr-4`}>
                  <MapPin className="h-5 w-5 text-tech-purple" />
                </div>
                <div>
                  <p className={`text-sm ${theme === 'light' ? 'text-gray-600' : 'text-gray-400'} mb-1`}>Location</p>
                  <p className={`${theme === 'light' ? 'text-gray-800' : 'text-gray-200'}`}>
                    Amaravati, Andhra Pradesh, India
                  </p>
                </div>
              </div>
            </div>
            
            <div className="mt-8">
              <h4 className={`text-lg font-medium ${theme === 'light' ? 'text-gray-800' : 'text-white'} mb-4`}>Connect with me</h4>
              <div className="flex space-x-3">
                <a 
                  href="https://www.linkedin.com/in/vaishnavi-somarouthu-2b99522b4/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className={`${theme === 'light' ? 'bg-gray-100' : 'bg-tech-darker'} p-3 rounded-full border border-tech-blue/30 hover:border-tech-blue/60 text-tech-blue hover:text-white hover:bg-tech-blue/20 transition-colors`}
                >
                  <Linkedin className="h-5 w-5" />
                </a>
                <a 
                  href="https://github.com/aish-2306" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className={`${theme === 'light' ? 'bg-gray-100' : 'bg-tech-darker'} p-3 rounded-full border border-tech-purple/30 hover:border-tech-purple/60 text-tech-purple hover:text-white hover:bg-tech-purple/20 transition-colors`}
                >
                  <Github className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>
          
          <div className={`${theme === 'light' ? 'bg-white border border-gray-200 hover:border-tech-purple/30 rounded-lg p-6' : 'tech-card'}`}>
            <h3 className={`text-xl font-semibold ${theme === 'light' ? 'text-gray-800' : 'text-white'} mb-6`}>Portfolio Links</h3>
            
            <div className="space-y-4">
              <a 
                href="https://www.linkedin.com/in/vaishnavi-somarouthu-2b99522b4/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className={`flex items-center p-4 ${theme === 'light' ? 'bg-gray-50' : 'bg-tech-darker/70'} rounded-lg border ${theme === 'light' ? 'border-gray-200' : 'border-tech-blue/20'} hover:border-tech-blue/40 group transition-all`}
              >
                <Linkedin className="h-6 w-6 text-tech-blue mr-3" />
                <div className="flex-1">
                  <p className={`${theme === 'light' ? 'text-gray-800' : 'text-white'} font-medium`}>LinkedIn</p>
                  <p className={`${theme === 'light' ? 'text-gray-600' : 'text-gray-400'} text-sm`}>Connect with me professionally</p>
                </div>
                <ExternalLink className="h-4 w-4 text-gray-400 group-hover:text-tech-blue transition-colors" />
              </a>
              
              <a 
                href="https://github.com/aish-2306" 
                target="_blank" 
                rel="noopener noreferrer" 
                className={`flex items-center p-4 ${theme === 'light' ? 'bg-gray-50' : 'bg-tech-darker/70'} rounded-lg border ${theme === 'light' ? 'border-gray-200' : 'border-tech-purple/20'} hover:border-tech-purple/40 group transition-all`}
              >
                <Github className="h-6 w-6 text-tech-purple mr-3" />
                <div className="flex-1">
                  <p className={`${theme === 'light' ? 'text-gray-800' : 'text-white'} font-medium`}>GitHub</p>
                  <p className={`${theme === 'light' ? 'text-gray-600' : 'text-gray-400'} text-sm`}>Check out my code and projects</p>
                </div>
                <ExternalLink className="h-4 w-4 text-gray-400 group-hover:text-tech-purple transition-colors" />
              </a>
            </div>
            
            <div className="mt-8">
              <a 
                href="file:///C:/Users/vaish/OneDrive/Documents/RESUME_VAISHNAVI_SOMAROUTHU.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button className="w-full bg-gradient-to-r from-tech-blue to-tech-purple hover:from-tech-blue/90 hover:to-tech-purple/90 text-white border-none">
                  Download Resume
                </Button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
