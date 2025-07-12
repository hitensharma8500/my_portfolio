import React from 'react';
import { Code, Database, Globe, Cpu } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: <Code className="w-8 h-8" />,
      skills: ["Python"],
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Libraries & Frameworks",
      icon: <Database className="w-8 h-8" />,
      skills: ["Streamlit", "PyWhatKit", "Pandas", "NumPy", "OpenAI", "Keras"],
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "Tools & Technologies",
      icon: <Globe className="w-8 h-8" />,
      skills: ["Docker", "Linux", "Git", "API Integration"],
      color: "from-green-500 to-teal-500"
    },
    {
      title: "Specializations",
      icon: <Cpu className="w-8 h-8" />,
      skills: ["Machine Learning", "Automation", "Data Analysis", "System Programming"],
      color: "from-orange-500 to-red-500"
    }
  ];

  return (
    <section id="skills" className="py-20 px-8 lg:px-20 bg-gray-900">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl lg:text-5xl font-bold text-center mb-16 neon-text">
          Technical Skills
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <div 
              key={categoryIndex}
              className="glassmorphism p-8 rounded-xl hover-glow transition-all duration-300 fade-in-up"
              style={{ animationDelay: `${categoryIndex * 0.2}s` }}
            >
              <div className="flex items-center gap-4 mb-6">
                <div className={`p-3 bg-gradient-to-r ${category.color} rounded-lg`}>
                  {category.icon}
                </div>
                <h3 className="text-2xl font-bold">{category.title}</h3>
              </div>
              
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill, skillIndex) => (
                  <span 
                    key={skillIndex}
                    className={`px-4 py-2 bg-gradient-to-r ${category.color} bg-opacity-20 rounded-full text-sm font-medium border border-opacity-30 hover:scale-105 transition-transform duration-300`}
                    style={{ 
                      borderColor: category.color.includes('blue') ? '#3B82F6' : 
                                   category.color.includes('purple') ? '#8B5CF6' :
                                   category.color.includes('green') ? '#10B981' : '#F97316'
                    }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;