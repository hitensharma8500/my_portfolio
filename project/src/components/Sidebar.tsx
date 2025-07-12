import React, { useState, useEffect } from 'react';
import { Menu, X, Home, User, Briefcase, Code, BookOpen, Award, MessageSquare, Mail } from 'lucide-react';

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  const menuItems = [
    { id: 'hero', label: 'Home', icon: <Home className="w-5 h-5" /> },
    { id: 'about', label: 'About', icon: <User className="w-5 h-5" /> },
    { id: 'projects', label: 'Projects', icon: <Briefcase className="w-5 h-5" /> },
    { id: 'skills', label: 'Skills', icon: <Code className="w-5 h-5" /> },
    { id: 'blog', label: 'Blog', icon: <BookOpen className="w-5 h-5" /> },
    { id: 'achievements', label: 'Achievements', icon: <Award className="w-5 h-5" /> },
    { id: 'testimonials', label: 'Testimonials', icon: <MessageSquare className="w-5 h-5" /> },
    { id: 'contact', label: 'Contact', icon: <Mail className="w-5 h-5" /> },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const sections = menuItems.map(item => item.id);
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  return (
    <>
      {/* Mobile Menu Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed top-6 right-6 z-50 lg:hidden p-3 glassmorphism rounded-lg hover-glow"
      >
        {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
      </button>

      {/* Sidebar */}
      <nav className={`fixed top-0 right-0 h-full w-80 glassmorphism backdrop-blur-xl z-40 transform transition-transform duration-300 ${
        isOpen ? 'translate-x-0' : 'translate-x-full lg:translate-x-0'
      } lg:w-20 lg:hover:w-80 lg:transition-all lg:duration-300`}>
        <div className="p-6 h-full flex flex-col">
          <div className="mb-8 lg:mb-12">
            <h2 className="text-xl font-bold lg:opacity-0 lg:group-hover:opacity-100 transition-opacity duration-300">
              Navigation
            </h2>
          </div>
          
          <ul className="space-y-4 flex-1">
            {menuItems.map((item) => (
              <li key={item.id}>
                <button
                  onClick={() => scrollToSection(item.id)}
                  className={`w-full flex items-center gap-4 p-3 rounded-lg transition-all duration-300 ${
                    activeSection === item.id
                      ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white'
                      : 'hover:bg-gray-700 text-gray-300 hover:text-white'
                  }`}
                >
                  {item.icon}
                  <span className="lg:opacity-0 lg:group-hover:opacity-100 transition-opacity duration-300">
                    {item.label}
                  </span>
                </button>
              </li>
            ))}
          </ul>
          
          <div className="mt-8 text-center lg:opacity-0 lg:group-hover:opacity-100 transition-opacity duration-300">
            <p className="text-sm text-gray-400">Hiten Sharma</p>
            <p className="text-xs text-gray-500">ML Engineer</p>
          </div>
        </div>
      </nav>

      {/* Overlay for mobile */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-30 lg:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  );
};

export default Sidebar;