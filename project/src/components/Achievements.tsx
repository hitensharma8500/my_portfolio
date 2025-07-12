import React from 'react';
import { Award, ExternalLink } from 'lucide-react';

const Achievements = () => {
  const certificates = [
    {
      title: "C++ Programming Certificate",
      institution: "Spoken Tutorial Project at IIT Bombay",
      description: "Comprehensive C++ programming course covering object-oriented programming concepts and practical applications",
      date: "2024",
      link: "https://www.linkedin.com/posts/hiten-sharma-436394290_cpp-iitbombay-spokentutorial-activity-7349774122500943873-W-gM",
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Python Programming Certificate",
      institution: "Spoken Tutorial Project at IIT Bombay",
      description: "Advanced Python programming certification covering data structures, algorithms, and modern Python practices",
      date: "2024",
      link: "https://www.linkedin.com/posts/hiten-sharma-436394290_iitbombay-spokentutorial-certificateofcompletion-activity-7349773999381344256-Zfzq",
      color: "from-green-500 to-teal-500"
    },
    {
      title: "C Programming Certificate",
      institution: "Spoken Tutorial Project at IIT Bombay",
      description: "Fundamental C programming certification covering system programming and low-level programming concepts",
      date: "2024",
      link: "https://www.linkedin.com/posts/hiten-sharma-436394290_c-iitbombay-spokentutorial-activity-7343698509713305600-YWQK",
      color: "from-purple-500 to-pink-500"
    }
  ];

  return (
    <section id="achievements" className="py-20 px-8 lg:px-20 bg-gray-900">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl lg:text-5xl font-bold text-center mb-16 neon-text">
          Achievements & Certifications
        </h2>
        
        <div className="text-center mb-12">
          <h3 className="text-2xl font-bold text-blue-400 mb-4">Spoken Tutorial Project at IIT Bombay</h3>
          <p className="text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Completed comprehensive programming certifications from IIT Bombay's prestigious Spoken Tutorial Project, 
            demonstrating proficiency in multiple programming languages and software development practices.
          </p>
        </div>
        
        <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-8">
          {certificates.map((cert, index) => (
            <div 
              key={index}
              className="glassmorphism p-8 rounded-xl hover-glow transition-all duration-300 fade-in-up"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="flex items-center gap-4 mb-6">
                <div className={`p-3 bg-gradient-to-r ${cert.color} rounded-lg pulse-glow`}>
                  <Award className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold">{cert.title}</h3>
                  <p className="text-sm text-gray-400">{cert.date}</p>
                </div>
              </div>
              
              <div className="mb-4">
                <h4 className="text-lg font-semibold text-blue-400 mb-2">{cert.institution}</h4>
                <p className="text-gray-300 leading-relaxed">{cert.description}</p>
              </div>
              
              <a 
                href={cert.link}
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r ${cert.color} rounded-lg hover:shadow-lg transition-all duration-300`}
              >
                <ExternalLink className="w-4 h-4" />
                View Certificate
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;