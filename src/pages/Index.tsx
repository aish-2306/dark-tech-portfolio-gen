
import React from 'react';
import { Element } from 'react-scroll';
import { useTheme } from '@/contexts/ThemeContext';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Education from '@/components/Education';
import Experience from '@/components/Experience';
import Projects from '@/components/Projects';
import Achievements from '@/components/Achievements';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

const Index = () => {
  const { theme } = useTheme();
  
  return (
    <div className={`min-h-screen ${theme === 'light' ? 'bg-gray-100' : 'bg-tech-dark'} overflow-x-hidden`}>
      <Navbar />
      
      <Element name="hero">
        <Hero />
      </Element>
      
      <Element name="about">
        <About />
      </Element>
      
      <Element name="education">
        <Education />
      </Element>
      
      <Element name="experience">
        <Experience />
      </Element>
      
      <Element name="projects">
        <Projects />
      </Element>
      
      <Element name="achievements">
        <Achievements />
      </Element>
      
      <Element name="contact">
        <Contact />
      </Element>
      
      <Footer />
    </div>
  );
};

export default Index;
