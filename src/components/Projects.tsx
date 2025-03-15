
import React from 'react';
import { Code, ExternalLink, ShoppingCart, Monitor, Coffee, PiggyBank, Gift } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const Projects = () => {
  const projects = [
    {
      title: "Vite + React To-Do App",
      description: "A sleek, responsive to-do application built with Vite and React.",
      icon: <Code className="h-6 w-6" />,
      badges: ["React", "Vite", "JavaScript"],
      color: "text-blue-400"
    },
    {
      title: "E-commerce Shopping Cart - ShopEase",
      description: "A feature-rich e-commerce shopping cart with product filtering and checkout.",
      icon: <ShoppingCart className="h-6 w-6" />,
      badges: ["HTML", "CSS", "JavaScript"],
      color: "text-green-400"
    },
    {
      title: "All-in-One Web Application",
      description: "A multi-purpose web application with various utility tools and features.",
      icon: <Monitor className="h-6 w-6" />,
      badges: ["HTML", "CSS", "JavaScript"],
      color: "text-purple-400"
    },
    {
      title: "Cloned Innomatics Website",
      description: "A pixel-perfect clone of the Innomatics website, demonstrating attention to detail.",
      icon: <ExternalLink className="h-6 w-6" />,
      badges: ["HTML", "CSS"],
      color: "text-yellow-400"
    },
    {
      title: "Brewed Awakening Coffee Shop Website",
      description: "A responsive, visually appealing website for a fictional coffee shop.",
      icon: <Coffee className="h-6 w-6" />,
      badges: ["HTML", "CSS"],
      color: "text-amber-400"
    },
    {
      title: "Personal Budget Tracker",
      description: "A simple tool to track personal expenses and savings.",
      icon: <PiggyBank className="h-6 w-6" />,
      badges: ["HTML"],
      color: "text-cyan-400"
    },
    {
      title: "Birthday Greetings Generator",
      description: "An interactive app to create and share personalized birthday greetings.",
      icon: <Gift className="h-6 w-6" />,
      badges: ["HTML"],
      color: "text-pink-400"
    },
    {
      title: "Match-Making Game",
      description: "An interactive memory matching game with scoring and timing features.",
      icon: <Code className="h-6 w-6" />,
      badges: ["HTML", "CSS", "JavaScript"],
      color: "text-red-400"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-tech-darker/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">
            <span className="text-gradient-blue">Projects</span>
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-tech-blue to-tech-purple mx-auto mb-8"></div>
          <p className="text-gray-300 max-w-3xl mx-auto">
            Here are some of the projects I've built, showcasing my skills in web development and design.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <Card key={index} className="bg-tech-darker border-tech-purple/20 hover:border-tech-purple/40 transition-all hover:translate-y-[-5px] duration-300">
              <CardContent className="p-6">
                <div className={`w-12 h-12 rounded-lg mb-4 flex items-center justify-center bg-tech-darker border border-tech-purple/20 ${project.color}`}>
                  {project.icon}
                </div>
                
                <h3 className="text-xl font-semibold mb-2 text-white">{project.title}</h3>
                <p className="text-gray-400 mb-4">{project.description}</p>
                
                <div className="flex flex-wrap gap-2">
                  {project.badges.map((badge, badgeIndex) => (
                    <Badge key={badgeIndex} variant="outline" className="border-tech-purple/30 text-gray-300">
                      {badge}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
