import React from 'react';
import { motion } from 'motion/react';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: "Anjali Menon",
    course: "Clinical Psychology Finishing School",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150",
    rating: 5,
    text: "The 50-day program completely changed my perspective. I went from knowing theory to actually feeling confident sitting across from a client. The supervision was incredible."
  },
  {
    id: 2,
    name: "Rahul Sharma",
    course: "Advanced CBT Masterclass",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=150",
    rating: 5,
    text: "Dr. Jenkins breaks down complex CBT formulations so clearly. The role-plays were challenging but exactly what I needed to handle treatment-resistant cases."
  },
  {
    id: 3,
    name: "Priya Thomas",
    course: "Foundations of Family Therapy",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=150",
    rating: 5,
    text: "Understanding systemic dynamics has transformed my individual therapy work as well. The practical tools for managing conflict in-session were invaluable."
  },
  {
    id: 4,
    name: "Karthik Nair",
    course: "Clinical Psychology Finishing School",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=150",
    rating: 4,
    text: "The hospital exposure is something no other program offers. Seeing how psychiatry and psychology interface in a real clinical setting was eye-opening."
  },
  {
    id: 5,
    name: "Sneha Reddy",
    course: "Clinical Psychology Finishing School",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=150",
    rating: 5,
    text: "I finally have a professional portfolio I can show to employers. The case formulation skills I learned here got me my first clinical job within a month of graduating."
  },
  {
    id: 6,
    name: "Arjun Desai",
    course: "Advanced CBT Masterclass",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=150",
    rating: 5,
    text: "Intensive, practical, and deeply insightful. The focus on real-world application rather than just textbook theory makes Sereniche stand out."
  }
];

export default function TestimonialsPage() {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
      className="pt-32 pb-24 px-4 sm:px-6 lg:px-8 max-w-[1200px] mx-auto relative z-10"
    >
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 tracking-tight">
          Student <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600">Success Stories</span>
        </h1>
        <p className="text-gray-500 text-lg max-w-2xl mx-auto">
          Hear from our alumni who have transformed their clinical practice and built confident careers through our programs.
        </p>
      </div>

      <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
        {testimonials.map((testimonial, idx) => (
          <motion.div
            key={testimonial.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            className="break-inside-avoid bg-white backdrop-blur-xl border border-gray-200 rounded-[24px] p-8 hover:-translate-y-1 hover:border-yellow-400 hover:shadow-[0_0_30px_rgba(124,58,237,0.15)] transition-all duration-500 relative group"
          >
            <Quote className="absolute top-6 right-6 w-8 h-8 text-gray-900/5 group-hover:text-yellow-400/20 transition-colors duration-500" />
            
            <div className="flex items-center gap-4 mb-6">
              <img 
                src={testimonial.image} 
                alt={testimonial.name} 
                className="w-14 h-14 rounded-full object-cover border-2 border-purple-500/30"
              />
              <div>
                <h4 className="text-gray-900 font-bold">{testimonial.name}</h4>
                <p className="text-xs text-purple-600 font-medium">{testimonial.course}</p>
              </div>
            </div>
            
            <div className="flex gap-1 mb-4">
              {[...Array(5)].map((_, i) => (
                <Star 
                  key={i} 
                  className={`w-4 h-4 ${i < testimonial.rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-600'}`} 
                />
              ))}
            </div>
            
            <p className="text-gray-600 text-sm leading-relaxed italic">
              "{testimonial.text}"
            </p>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
