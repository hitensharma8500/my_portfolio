import React from 'react';
import { Github, ExternalLink, Mail, MessageSquare, Phone, Terminal, Container } from 'lucide-react';

const Projects = () => {
  const pythonProjects = [
    {
      title: "Send Email Using Python",
      description: "Automated email sending system with Streamlit interface for seamless communication",
      tech: ["Python", "Streamlit", "Gmail API"],
      link: "https://www.linkedin.com/posts/hiten-sharma-436394290_python-streamlit-gmailautomation-activity-7348249717392179201-44FL",
      icon: <Mail className="w-6 h-6" />
    },
    {
      title: "Send SMS Using Python",
      description: "SMS automation tool for bulk messaging and notifications",
      tech: ["Python", "SMS API", "Automation"],
      icon: <MessageSquare className="w-6 h-6" />
    },
    {
      title: "Send WhatsApp Message Using Python",
      description: "WhatsApp automation for message scheduling and bulk messaging",
      tech: ["Python", "PyWhatKit", "Automation"],
      link: "https://www.linkedin.com/posts/hiten-sharma-436394290_python-linuxworld-automation-activity-7347156465062719488-DvZn",
      icon: <Phone className="w-6 h-6" />
    },
    {
      title: "Menu-Driven Python Automation Tool",
      description: "Comprehensive automation suite with interactive menu system",
      tech: ["Python", "CLI", "Automation"],
      icon: <Terminal className="w-6 h-6" />
    }
  ];

  const linuxProjects = [
    {
      title: "Companies Using Linux & Their Benefits",
      description: "Comprehensive blog analyzing real-world Linux implementations in enterprise environments",
      tech: ["Linux", "Research", "Technical Writing"],
      link: "https://www.linkedin.com/posts/hiten-sharma-436394290_opensource-linux-opensource-activity-7348259253117157377-9no2",
      icon: <Terminal className="w-6 h-6" />
    },
    {
      title: "Explore Linux GUI Programs and Commands",
      description: "Deep dive into Linux GUI applications and their underlying command-line interfaces",
      tech: ["Linux", "GUI", "System Programming"],
      link: "https://www.linkedin.com/posts/hiten-sharma-436394290_linux-systemprogramming-opensource-activity-7348270031924834304-1HG3",
      icon: <Terminal className="w-6 h-6" />
    },
    {
      title: "Customize Program Icons in Linux",
      description: "Guide for personalizing Linux desktop environments with custom icons",
      tech: ["Linux", "Customization", "Desktop Environment"],
      link: "https://www.linkedin.com/posts/hiten-sharma-436394290_linux-customization-opensource-activity-7348271024611758080-0ZaB",
      icon: <Terminal className="w-6 h-6" />
    },
    {
      title: "Enhance Linux with Additional Terminals",
      description: "Exploring various terminal emulators and GUI enhancements for Linux",
      tech: ["Linux", "Terminal", "GUI"],
      link: "https://www.linkedin.com/posts/hiten-sharma-436394290_linux-terminal-linuxgui-activity-7348271922964541440-2IdS",
      icon: <Terminal className="w-6 h-6" />
    },
    {
      title: "Ctrl+C and Ctrl+Z Signal Commands",
      description: "Understanding process control and signal handling in Linux systems",
      tech: ["Linux", "Process Control", "Signals"],
      link: "https://www.linkedin.com/posts/hiten-sharma-436394290_linux-processcontrol-ctrlc-activity-7348272482815991809-XvG-",
      icon: <Terminal className="w-6 h-6" />
    }
  ];

  const dockerProjects = [
    {
      title: "Real-World Docker Case Study",
      description: "Analyzing how companies leverage Docker for containerization and DevOps practices",
      tech: ["Docker", "DevOps", "Cloud Computing"],
      link: "https://www.linkedin.com/posts/hiten-sharma-436394290_docker-devops-cloudcomputing-activity-7348275079924846593-OEs5",
      icon: <Container className="w-6 h-6" />
    }
  ];

  const ProjectCard = ({ project, index }: { project: any; index: number }) => (
    <div 
      className="glassmorphism p-6 rounded-xl hover-glow transition-all duration-300 fade-in-up"
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      <div className="flex items-center gap-3 mb-4">
        <div className="p-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg">
          {project.icon}
        </div>
        <h3 className="text-xl font-semibold">{project.title}</h3>
      </div>
      
      <p className="text-gray-300 mb-4 leading-relaxed">{project.description}</p>
      
      <div className="flex flex-wrap gap-2 mb-4">
        {project.tech.map((tech: string, techIndex: number) => (
          <span 
            key={techIndex}
            className="px-3 py-1 bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-full text-sm border border-blue-500/30"
          >
            {tech}
          </span>
        ))}
      </div>
      
      <div className="flex gap-3">
        {project.link && (
          <a 
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg hover:shadow-lg transition-all duration-300"
          >
            <ExternalLink className="w-4 h-4" />
            View Project
          </a>
        )}
        <button className="flex items-center gap-2 px-4 py-2 border border-gray-600 rounded-lg hover:border-blue-500 transition-all duration-300">
          <Github className="w-4 h-4" />
          Code
        </button>
      </div>
    </div>
  );

  return (
    <section id="projects" className="py-20 px-8 lg:px-20 bg-gray-800">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl lg:text-5xl font-bold text-center mb-16 neon-text">
          Featured Projects
        </h2>
        
        {/* Python Projects */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold mb-8 text-blue-400">Python Projects</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-6">
            {pythonProjects.map((project, index) => (
              <ProjectCard key={index} project={project} index={index} />
            ))}
          </div>
        </div>
        
        {/* Linux Projects */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold mb-8 text-purple-400">Linux Projects</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {linuxProjects.map((project, index) => (
              <ProjectCard key={index} project={project} index={index} />
            ))}
          </div>
        </div>
        
        {/* Docker Projects */}
        <div>
          <h3 className="text-3xl font-bold mb-8 text-pink-400">Docker Projects</h3>
          <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-6">
            {dockerProjects.map((project, index) => (
              <ProjectCard key={index} project={project} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;