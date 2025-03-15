
import React from 'react';
import { Briefcase, Calendar, FlaskConical } from 'lucide-react';

const Experience = () => {
  return (
    <section id="experience" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">
            <span className="text-gradient-purple">Research & Experience</span>
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-tech-purple to-pink-400 mx-auto mb-8"></div>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="mb-12">
            <div className="flex items-center mb-6">
              <FlaskConical className="h-8 w-8 text-tech-purple mr-3" />
              <h3 className="text-2xl font-semibold text-white">Research Work</h3>
            </div>
            
            {/* Research Assistant */}
            <div className="relative pl-8 border-l border-tech-purple/30 pb-10">
              <div className="absolute left-0 top-0 w-4 h-4 rounded-full bg-tech-purple -translate-x-2"></div>
              <div className="tech-card">
                <h3 className="text-xl font-semibold text-white mb-2">Research Assistant (Undergraduate)</h3>
                <p className="mb-2 text-gray-300">Amrita Vishwa Vidyapeetam</p>
                <div className="flex items-center text-gray-400 text-sm mb-4">
                  <Calendar className="mr-1 h-4 w-4" />
                  <span>May 2024 - Present | Amaravati</span>
                </div>
                
                <ul className="space-y-3 list-disc pl-5 text-gray-300">
                  <li>Currently conducting research under the guidance of Dr. Rajak Shaikh on the topic: <span className="italic text-tech-blue">"Weighted Sum Rate Optimization using MIMO."</span></li>
                  <li>Focused on optimizing the rate in Multi-Input Multi-Output (MIMO) systems, leveraging advanced techniques in signal processing and communication theory.</li>
                  <li>Working on practical implementations, data simulations, and simulation analysis to improve the efficiency and performance of wireless communication systems.</li>
                </ul>
              </div>
            </div>
            
            {/* AI Research */}
            <div className="relative pl-8 border-l border-tech-purple/30 pb-10">
              <div className="absolute left-0 top-0 w-4 h-4 rounded-full bg-tech-purple -translate-x-2"></div>
              <div className="tech-card">
                <div className="flex items-center text-gray-400 text-sm mb-4">
                  <Calendar className="mr-1 h-4 w-4" />
                  <span>NOV 2024 | Amaravati</span>
                </div>
                
                <ul className="space-y-3 list-disc pl-5 text-gray-300">
                  <li>Researched the integration of AI techniques, including ML and DL, for climate prediction, weather forecasting, and extreme event detection.</li>
                  <li>Analyzed AI tools like reinforcement learning and hybrid models to enhance computational efficiency and scalability.</li>
                  <li>Co-authored a report addressing AI's role in improving forecast accuracy, challenges in data quality, and sustainable solutions for climate change mitigation.</li>
                </ul>
              </div>
            </div>
            
            {/* Internship */}
            <div className="flex items-center mb-6 mt-12">
              <Briefcase className="h-8 w-8 text-tech-blue mr-3" />
              <h3 className="text-2xl font-semibold text-white">Internship</h3>
            </div>
            
            <div className="relative pl-8 border-l border-tech-blue/30">
              <div className="absolute left-0 top-0 w-4 h-4 rounded-full bg-tech-blue -translate-x-2"></div>
              <div className="tech-card border-tech-blue/20 hover:border-tech-blue/40">
                <h3 className="text-xl font-semibold text-white mb-2">Full Stack Development Intern</h3>
                <p className="mb-2 text-gray-300">Innomatics Research Labs</p>
                <div className="flex items-center text-gray-400 text-sm mb-4">
                  <Calendar className="mr-1 h-4 w-4" />
                  <span>Jan 2025 - Present</span>
                </div>
                
                <p className="text-gray-300">
                  Working as a Full Stack Development Intern, gaining hands-on experience with modern web development technologies and contributing to real-world projects.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
