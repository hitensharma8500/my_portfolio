import React, { useState } from 'react';
import { Quote, Star } from 'lucide-react';

const Testimonials = () => {
  const [imageErrors, setImageErrors] = useState<{ [key: number]: boolean }>({});

  const testimonials = [
    {
      name: "Dr. Rajesh Kumar",
      position: "Professor, BK Birla Institute",
      image: "https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=300",
      content: "Hiten demonstrates exceptional problem-solving skills and a deep understanding of machine learning concepts. His projects showcase innovative thinking and technical excellence.",
      rating: 5
    },
    {
      name: "Priya Sharma",
      position: "Senior ML Engineer, TechCorp",
      image: "https://images.pexels.com/photos/3756679/pexels-photo-3756679.jpeg?auto=compress&cs=tinysrgb&w=300",
      content: "Working with Hiten on automation projects has been impressive. His Python skills and attention to detail make him a valuable team member for any technical project.",
      rating: 5
    },
    {
      name: "Amit Patel",
      position: "DevOps Engineer, CloudTech",
      image: "https://images.pexels.com/photos/3778603/pexels-photo-3778603.jpeg?auto=compress&cs=tinysrgb&w=300",
      content: "Hiten's expertise in Docker and Linux systems is remarkable for someone at his level. His documentation and technical blogs are incredibly detailed and helpful.",
      rating: 5
    }
  ];

  const handleImageError = (index: number) => {
    setImageErrors(prev => ({ ...prev, [index]: true }));
  };

  return (
    <section id="testimonials" className="py-20 px-8 lg:px-20 bg-gray-800">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl lg:text-5xl font-bold text-center mb-16 neon-text">
          What People Say
        </h2>
        
        <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="glassmorphism p-8 rounded-xl hover-glow transition-all duration-300 fade-in-up"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="flex items-center gap-1 mb-4" role="img" aria-label={`${testimonial.rating} out of 5 stars`}>
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" aria-hidden="true" />
                ))}
              </div>
              
              <div className="relative mb-6">
                <Quote className="w-8 h-8 text-blue-400 mb-4 opacity-50" aria-hidden="true" />
                <blockquote className="text-gray-300 leading-relaxed italic">
                  "{testimonial.content}"
                </blockquote>
              </div>
              
              <div className="flex items-center gap-4">
                {imageErrors[index] ? (
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center border-2 border-blue-500">
                    <span className="text-white text-sm font-semibold">
                      {testimonial.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                ) : (
                  <img 
                    src={testimonial.image} 
                    alt={`${testimonial.name}, ${testimonial.position}`}
                    className="w-12 h-12 rounded-full object-cover border-2 border-blue-500"
                    onError={() => handleImageError(index)}
                    loading="lazy"
                  />
                )}
                <div>
                  <h4 className="font-semibold">{testimonial.name}</h4>
                  <p className="text-sm text-gray-400">{testimonial.position}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;