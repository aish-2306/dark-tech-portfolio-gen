
import React from 'react';
import { Terminal, ArrowDown, Github, Linkedin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-scroll';

const Hero = () => {
  return (
    <section id="hero" className="min-h-screen pt-20 flex flex-col justify-center relative">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center text-center mb-8">
          <div className="w-16 h-16 bg-tech-purple/10 rounded-full flex items-center justify-center mb-6 animate-float">
            <Terminal className="h-6 w-6 text-tech-purple" />
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Hi, I'm <span className="text-gradient-purple">Vaishnavi Somarouthu</span>
          </h1>
          
          <div className="relative overflow-hidden h-12 mb-6">
            <p className="text-xl md:text-2xl text-gray-300 font-mono">
              B.Tech Student in Computer & Communication Engineering
            </p>
          </div>
          
          <p className="text-lg md:text-xl text-gray-400 max-w-2xl mb-8">
            Passionate about <span className="text-tech-blue">web development</span>, 
            <span className="text-pink-400"> UI/UX design</span>, and 
            <span className="text-tech-purple"> AI-driven solutions</span>.
          </p>
          
          <div className="flex space-x-4">
            <a 
              href="https://www.linkedin.com/in/vaishnavi-somarouthu-2b99522b4/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-tech-darker border border-tech-purple/30 hover:border-tech-purple/60 px-4 py-2 rounded-md flex items-center space-x-2 text-gray-300 hover:text-white transition-all"
            >
              <Linkedin className="h-5 w-5" />
              <span>LinkedIn</span>
            </a>
            <a 
              href="https://github.com/aish-2306" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-tech-darker border border-tech-purple/30 hover:border-tech-purple/60 px-4 py-2 rounded-md flex items-center space-x-2 text-gray-300 hover:text-white transition-all"
            >
              <Github className="h-5 w-5" />
              <span>GitHub</span>
            </a>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <Link to="about" spy={true} smooth={true} offset={-70} duration={500}>
          <Button variant="ghost" size="icon" className="rounded-full border border-tech-purple/20">
            <ArrowDown className="h-5 w-5 text-tech-purple" />
          </Button>
        </Link>
      </div>
    </section>
  );
};

export default Hero;
