import React, { useEffect } from 'react';
import { ChevronDown, Download, Cpu } from 'lucide-react';

const Hero = () => {
  useEffect(() => {
    // Create stars
    const createStars = () => {
      const heroSection = document.getElementById('hero');
      if (!heroSection) return;

      for (let i = 0; i < 50; i++) {
        const star = document.createElement('div');
        star.className = 'star';
        star.style.left = Math.random() * 100 + '%';
        star.style.top = Math.random() * 100 + '%';
        star.style.width = Math.random() * 3 + 1 + 'px';
        star.style.height = star.style.width;
        star.style.animationDelay = Math.random() * 2 + 's';
        heroSection.appendChild(star);
      }
    };

    // Create shooting stars
    const createShootingStar = () => {
      const heroSection = document.getElementById('hero');
      if (!heroSection) return;

      const shootingStar = document.createElement('div');
      shootingStar.className = 'shooting-star';
      shootingStar.style.left = Math.random() * 100 + '%';
      shootingStar.style.top = Math.random() * 100 + '%';
      heroSection.appendChild(shootingStar);

      setTimeout(() => {
        if (heroSection.contains(shootingStar)) {
          heroSection.removeChild(shootingStar);
        }
      }, 3000);
    };

    createStars();
    const shootingInterval = setInterval(createShootingStar, 2000);

    return () => {
      clearInterval(shootingInterval);
    };
  }, []);

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-start pl-8 lg:pl-20 gradient-bg overflow-hidden">
      <div className="z-10 max-w-4xl">
        <div className="flex items-center gap-4 mb-6">
          <div className="w-16 h-16 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center pulse-glow">
            <Cpu className="w-8 h-8 text-white" />
          </div>
        </div>
        
        <h1 className="text-6xl lg:text-8xl font-bold mb-4 neon-text typing-animation">
          Hiten Sharma
        </h1>
        
        <h2 className="text-2xl lg:text-3xl font-light mb-8 text-gray-300">
          ML Engineer | Python Enthusiast
        </h2>
        
        <p className="text-lg lg:text-xl text-gray-400 mb-12 max-w-2xl leading-relaxed">
          Currently pursuing BTech from BK Birla Institute of Engineering and Technology, Pilani. 
          Passionate about Machine Learning, automation, and building intelligent solutions.
        </p>
        
        <button className="group relative px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full font-semibold text-lg hover-glow transition-all duration-300">
          <Download className="inline-block w-5 h-5 mr-2 group-hover:animate-bounce" />
          Download Resume
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
        </button>
      </div>
      
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown className="w-8 h-8 text-blue-400" />
      </div>
    </section>
  );
};

export default Hero;