import React from 'react';
import { Brain, Code, Cloud } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 px-8 lg:px-20 bg-gray-900">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl lg:text-5xl font-bold text-center mb-16 neon-text">
          About Me
        </h2>
        
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-lg text-gray-300 leading-relaxed">
              I'm a passionate ML Engineer currently pursuing my BTech from BK Birla Institute of Engineering and Technology, Pilani. 
              My journey in technology is driven by a deep fascination with machine learning, automation, and the endless possibilities 
              they offer to solve real-world problems.
            </p>
            
            <p className="text-lg text-gray-300 leading-relaxed">
              My mission is to bridge the gap between complex algorithms and practical applications, creating solutions that make 
              technology more accessible and impactful. I believe in continuous learning, innovation, and the power of code to 
              transform ideas into reality.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
              <div className="text-center glassmorphism p-6 rounded-xl hover-glow">
                <Brain className="w-12 h-12 text-blue-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Machine Learning</h3>
                <p className="text-gray-400">Building intelligent systems and predictive models</p>
              </div>
              
              <div className="text-center glassmorphism p-6 rounded-xl hover-glow">
                <Code className="w-12 h-12 text-purple-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Automation</h3>
                <p className="text-gray-400">Streamlining processes with Python solutions</p>
              </div>
              
              <div className="text-center glassmorphism p-6 rounded-xl hover-glow">
                <Cloud className="w-12 h-12 text-pink-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Cloud Computing</h3>
                <p className="text-gray-400">Deploying scalable applications and services</p>
              </div>
            </div>
          </div>
          
          <div className="flex justify-center">
            <div className="w-80 h-80 rounded-full bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 p-1">
              <div className="w-full h-full rounded-full bg-gray-900 flex items-center justify-center">
                <div className="w-64 h-64 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 opacity-20 pulse-glow"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;