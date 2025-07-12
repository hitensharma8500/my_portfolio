import React, { useState } from 'react';
import { Mail, Linkedin, Github, Instagram, Send, MapPin } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
  };

  return (
    <section id="contact" className="py-20 px-8 lg:px-20 bg-gray-900">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl lg:text-5xl font-bold text-center mb-16 neon-text">
          Let's Connect
        </h2>
        
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold mb-6 text-blue-400">Get In Touch</h3>
              <p className="text-gray-300 leading-relaxed mb-8">
                I'm always interested in discussing new opportunities, innovative projects, 
                and collaborations in machine learning and automation. Feel free to reach out!
              </p>
            </div>
            
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-semibold">Email</h4>
                  <a href="mailto:honeyyyhere@gmail.com" className="text-gray-300 hover:text-blue-400 transition-colors">
                    honeyyyhere@gmail.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="p-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-semibold">Location</h4>
                  <p className="text-gray-300">Pilani, Rajasthan, India</p>
                </div>
              </div>
            </div>
            
            {/* Social Links */}
            <div>
              <h4 className="text-xl font-semibold mb-4">Follow Me</h4>
              <div className="flex gap-4">
                <a 
                  href="https://www.linkedin.com/in/hiten-sharma-436394290/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 glassmorphism rounded-lg hover-glow transition-all duration-300"
                >
                  <Linkedin className="w-6 h-6 text-blue-400" />
                </a>
                <a 
                  href="https://github.com/hitensharma8500"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 glassmorphism rounded-lg hover-glow transition-all duration-300"
                >
                  <Github className="w-6 h-6 text-gray-300" />
                </a>
                <a 
                  href="https://www.instagram.com/_honeyyy.08"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 glassmorphism rounded-lg hover-glow transition-all duration-300"
                >
                  <Instagram className="w-6 h-6 text-pink-400" />
                </a>
              </div>
            </div>
          </div>
          
          {/* Contact Form */}
          <div className="glassmorphism p-8 rounded-xl">
            <h3 className="text-2xl font-bold mb-6">Send Me a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg focus:border-blue-500 focus:outline-none transition-colors duration-300"
                  required
                />
              </div>
              
              <div>
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg focus:border-blue-500 focus:outline-none transition-colors duration-300"
                  required
                />
              </div>
              
              <div>
                <textarea
                  name="message"
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={5}
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg focus:border-blue-500 focus:outline-none transition-colors duration-300 resize-none"
                  required
                />
              </div>
              
              <button
                type="submit"
                className="w-full px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg font-semibold hover-glow transition-all duration-300 flex items-center justify-center gap-2"
              >
                <Send className="w-5 h-5" />
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;