import React from 'react';
import { Calendar, Clock, ExternalLink } from 'lucide-react';

const Blog = () => {
  const blogPosts = [
    {
      title: "The Future of Machine Learning in Automation",
      excerpt: "Exploring how ML algorithms are revolutionizing automation across industries and creating new possibilities for intelligent systems.",
      date: "2024-01-15",
      readTime: "5 min read",
      image: "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=800",
      category: "Machine Learning"
    },
    {
      title: "Docker Best Practices for Python Applications",
      excerpt: "Learn essential Docker practices for containerizing Python applications, optimizing builds, and ensuring production readiness.",
      date: "2024-01-10",
      readTime: "7 min read",
      image: "https://images.pexels.com/photos/1181298/pexels-photo-1181298.jpeg?auto=compress&cs=tinysrgb&w=800",
      category: "DevOps"
    },
    {
      title: "Linux System Programming Fundamentals",
      excerpt: "Deep dive into Linux system programming concepts, exploring process management, signals, and system calls.",
      date: "2024-01-05",
      readTime: "10 min read",
      image: "https://images.pexels.com/photos/4974912/pexels-photo-4974912.jpeg?auto=compress&cs=tinysrgb&w=800",
      category: "Linux"
    }
  ];

  return (
    <section id="blog" className="py-20 px-8 lg:px-20 bg-gray-800">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl lg:text-5xl font-bold text-center mb-16 neon-text">
          Latest Blog Posts
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <article 
              key={index}
              className="glassmorphism rounded-xl overflow-hidden hover-glow transition-all duration-300 fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative overflow-hidden">
                <img 
                  src={post.image} 
                  alt={post.title}
                  className="w-full h-48 object-cover transition-transform duration-300 hover:scale-110"
                />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full text-xs font-medium">
                    {post.category}
                  </span>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3 hover:text-blue-400 transition-colors duration-300">
                  {post.title}
                </h3>
                
                <p className="text-gray-300 mb-4 leading-relaxed">
                  {post.excerpt}
                </p>
                
                <div className="flex items-center justify-between text-sm text-gray-400 mb-4">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    {new Date(post.date).toLocaleDateString()}
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4" />
                    {post.readTime}
                  </div>
                </div>
                
                <button className="flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors duration-300">
                  Read More
                  <ExternalLink className="w-4 h-4" />
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;