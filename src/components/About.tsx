
import React from 'react';
import { Cpu, Code, Shield, Zap } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const About = () => {
  const skills = [
    { 
      icon: <Code className="h-8 w-8 text-tech-blue" />, 
      title: "Frontend Development", 
      description: "HTML, CSS, JavaScript, React.js" 
    },
    { 
      icon: <Shield className="h-8 w-8 text-tech-purple" />, 
      title: "Cybersecurity", 
      description: "Security fundamentals, awareness, and practices" 
    },
    { 
      icon: <Cpu className="h-8 w-8 text-pink-400" />, 
      title: "AI & Research", 
      description: "MIMO systems, ML, DL for climate prediction" 
    },
    { 
      icon: <Zap className="h-8 w-8 text-yellow-400" />, 
      title: "Cultural Leadership", 
      description: "Event organization, teamwork, and management" 
    }
  ];

  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">
            <span className="text-gradient-blue">About Me</span>
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-tech-blue to-tech-purple mx-auto mb-8"></div>
          
          <p className="text-gray-300 max-w-3xl mx-auto mb-8 text-lg">
            Motivated and detail-oriented B.Tech student in Computer and Communication Engineering at Amrita
            Vishwa Vidyapeetam. Passionate about web development, UI/UX design, and AI-driven solutions
            with expertise in HTML, CSS, JavaScript, React.js, and cybersecurity fundamentals.
          </p>
          
          <p className="text-gray-400 max-w-3xl mx-auto text-lg">
            Experienced in optimizing MIMO systems, technical research, and real-world AI applications. Proven leadership as
            a Cultural Coordinator with strong teamwork abilities and achievements in sports and cultural
            activities.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <Card key={index} className="bg-tech-darker border-tech-purple/20 hover:border-tech-purple/40 transition-all">
              <CardContent className="p-6 text-center">
                <div className="mx-auto mb-4 w-16 h-16 flex items-center justify-center bg-tech-darker rounded-full border border-tech-purple/20 animate-pulse-glow">
                  {skill.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2 text-white">{skill.title}</h3>
                <p className="text-gray-400">{skill.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
