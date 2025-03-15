
import React from 'react';
import { Award, BookOpen, Users, Trophy, BarChart2 } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const Achievements = () => {
  return (
    <section id="achievements" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">
            <span className="text-gradient-purple">Achievements & Activities</span>
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-tech-purple to-pink-400 mx-auto mb-8"></div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Achievements */}
          <div>
            <div className="flex items-center mb-6">
              <Award className="h-7 w-7 text-yellow-400 mr-3" />
              <h3 className="text-2xl font-semibold text-white">Achievements</h3>
            </div>
            
            <Card className="tech-card mb-6 border-yellow-400/20 hover:border-yellow-400/40">
              <CardContent className="p-6">
                <h4 className="text-xl font-semibold text-white mb-3">Winner - Ideathon 'Heroic Ideas' at Trantoisav</h4>
                <p className="text-gray-300 mb-4">
                  Secured <span className="text-yellow-400 font-semibold">1st place</span> and won a ₹3000 cash prize for an innovative women's security app idea.
                </p>
                <div className="flex items-start">
                  <Trophy className="h-5 w-5 text-yellow-400 mr-2 mt-1" />
                  <p className="text-gray-400">The app concept focused on enhancing women's safety through innovative technology solutions.</p>
                </div>
              </CardContent>
            </Card>
            
            <Card className="tech-card border-yellow-400/20 hover:border-yellow-400/40">
              <CardContent className="p-6">
                <h4 className="text-xl font-semibold text-white mb-3">Sports Achievements</h4>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <div className="min-w-8 h-8 rounded-full bg-yellow-400/10 flex items-center justify-center mr-3">
                      <span className="text-yellow-400 font-semibold">1</span>
                    </div>
                    <div>
                      <p className="text-gray-300 font-medium">Kabaddi</p>
                      <p className="text-gray-400">Gold medal winner as part of the school team.</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="min-w-8 h-8 rounded-full bg-gray-400/10 flex items-center justify-center mr-3">
                      <span className="text-gray-300 font-semibold">2</span>
                    </div>
                    <div>
                      <p className="text-gray-300 font-medium">Skipping</p>
                      <p className="text-gray-400">Silver medalist, demonstrating agility and fitness.</p>
                    </div>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
          
          {/* Activities and Courses */}
          <div>
            <div className="flex items-center mb-6">
              <BookOpen className="h-7 w-7 text-tech-blue mr-3" />
              <h3 className="text-2xl font-semibold text-white">Courses & Activities</h3>
            </div>
            
            <Card className="tech-card mb-6 border-tech-blue/20 hover:border-tech-blue/40">
              <CardContent className="p-6">
                <h4 className="text-xl font-semibold text-white mb-3">Courses & Webinars</h4>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-center">
                    <BarChart2 className="h-4 w-4 text-tech-blue mr-2" />
                    <span>Master Class on Microsoft Copilot, SkillNation | May 2024</span>
                  </li>
                  <li className="flex items-center">
                    <BarChart2 className="h-4 w-4 text-tech-blue mr-2" />
                    <span>Online Cyber Security Awareness Webinar | Apr 2024</span>
                  </li>
                  <li className="flex items-center">
                    <BarChart2 className="h-4 w-4 text-tech-blue mr-2" />
                    <span>Cyber Security Job Simulation with TCS | May 2024</span>
                  </li>
                  <li className="flex items-center">
                    <BarChart2 className="h-4 w-4 text-tech-blue mr-2" />
                    <span>Democratizing Application Development in the Era of AI | Nov 2024</span>
                  </li>
                  <li className="flex items-center">
                    <BarChart2 className="h-4 w-4 text-tech-blue mr-2" />
                    <span>Legacy JavaScript Algorithms and Data Structures | Jun 2024</span>
                  </li>
                  <li className="flex items-center">
                    <BarChart2 className="h-4 w-4 text-tech-blue mr-2" />
                    <span>React.js Bootcamp, ITM, NSDC | Feb 2025</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
            
            <Card className="tech-card border-tech-blue/20 hover:border-tech-blue/40">
              <CardContent className="p-6">
                <h4 className="text-xl font-semibold text-white mb-3">Leadership & Extracurricular Activities</h4>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <Users className="h-5 w-5 text-tech-blue mr-3 mt-1" />
                    <div>
                      <p className="text-gray-300 font-medium">Cultural Leadership</p>
                      <p className="text-gray-400">Serving as the Cultural Coordinator at Amrita Vishwa Vidyapeetam, organizing and managing college events.</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Trophy className="h-5 w-5 text-tech-blue mr-3 mt-1" />
                    <div>
                      <p className="text-gray-300 font-medium">Sports Enthusiast</p>
                      <p className="text-gray-400">Actively participating in various sports activities, demonstrating teamwork and physical fitness.</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Achievements;
