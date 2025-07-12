import React from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Blog from './components/Blog';
import Achievements from './components/Achievements';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Sidebar from './components/Sidebar';

function App() {
  return (
    <div className="bg-gray-900 text-white font-poppins overflow-x-hidden">
      <Sidebar />
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Blog />
      <Achievements />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;