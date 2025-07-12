import React from 'react';
import { Heart, Rocket } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 px-8 lg:px-20 bg-gray-800 border-t border-gray-700">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8">
          <h3 className="text-2xl font-bold mb-2 neon-text">Hiten Sharma</h3>
          <p className="text-gray-400">ML Engineer | Python Enthusiast</p>
        </div>
        
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-2 text-gray-400">
            <Rocket className="w-5 h-5 text-blue-400" />
            <span>Made with</span>
            <Heart className="w-5 h-5 text-red-400 animate-pulse" />
            <span>by Hiten</span>
          </div>
          
          <div className="text-gray-400">
            © {currentYear} Hiten Sharma. All rights reserved.
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-gray-700 text-center">
          <p className="text-sm text-gray-500">
            Built with React, TypeScript, and Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;