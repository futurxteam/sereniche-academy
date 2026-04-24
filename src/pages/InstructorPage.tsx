import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { User, X, ArrowRight, BookOpen, Star, Award, Briefcase } from 'lucide-react';

const instructors = [
  {
    id: 1,
    name: "Dr. Sarah Jenkins",
    title: "Senior Clinical Psychologist",
    image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80&w=300",
    bio: "Dr. Jenkins has over 15 years of experience in clinical psychology, specializing in cognitive behavioral therapy and trauma-informed care. She has worked in various hospital settings and private practice.",
    expertise: ["CBT", "Trauma-Informed Care", "Anxiety Disorders"],
    experience: "15+ Years",
    courses: ["Cognitive Therapy (CBT, REBT)", "Therapist Foundation"]
  },
  {
    id: 2,
    name: "Prof. David Chen",
    title: "Consultant Psychiatrist",
    image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&q=80&w=300",
    bio: "Prof. Chen is a leading voice in the intersection of psychiatry and psychotherapy. He brings a wealth of medical knowledge to help therapists understand the biological aspects of mental health.",
    expertise: ["Psychopharmacology", "Severe Mental Illness", "Neurobiology"],
    experience: "20+ Years",
    courses: ["Managing Client Dynamics", "Psychiatry Interface"]
  },
  {
    id: 3,
    name: "Dr. Maya Patel",
    title: "Family & Couples Therapist",
    image: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?auto=format&fit=crop&q=80&w=300",
    bio: "Dr. Patel specializes in systemic and relational therapy. She trains therapists to look beyond the individual and understand the complex dynamics of family systems and relationships.",
    expertise: ["Family Therapy", "Couples Counseling", "Systemic Work"],
    experience: "12+ Years",
    courses: ["Relational & Systemic Work", "Emotional Regulation"]
  }
];

export default function InstructorPage() {
  const [selectedInstructor, setSelectedInstructor] = useState<typeof instructors[0] | null>(null);

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
          Meet Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600">Expert Faculty</span>
        </h1>
        <p className="text-gray-500 text-lg max-w-2xl mx-auto">
          Learn directly from senior clinical psychologists, psychiatrists, and specialized therapists who bring decades of real-world hospital experience.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {instructors.map((instructor, idx) => (
          <motion.div
            key={instructor.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            onClick={() => setSelectedInstructor(instructor)}
            className="bg-white backdrop-blur-xl border border-gray-200 rounded-[24px] overflow-hidden cursor-pointer hover:-translate-y-2 hover:border-yellow-400 shadow-[0_4px_20px_rgba(0,0,0,0.05)] hover:shadow-[0_8px_30px_rgba(124,58,237,0.15)] transition-all duration-500 group"
          >
            <div className="h-64 overflow-hidden relative">
              <div className="absolute inset-0 bg-gradient-to-t from-white to-transparent z-10" />
              <img 
                src={instructor.image} 
                alt={instructor.name} 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
            </div>
            <div className="p-6 relative z-20 -mt-12">
              <h3 className="text-2xl font-bold text-gray-900 mb-1">{instructor.name}</h3>
              <p className="text-yellow-600 font-medium text-sm mb-4">{instructor.title}</p>
              <div className="flex items-center gap-2 text-gray-500 text-sm mb-4">
                <Briefcase className="w-4 h-4" />
                <span>{instructor.experience}</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {instructor.expertise.slice(0, 2).map((exp, i) => (
                  <span key={i} className="text-xs bg-gray-50 border border-gray-200 px-2 py-1 rounded-full text-gray-600">
                    {exp}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <AnimatePresence>
        {selectedInstructor && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
            onClick={() => setSelectedInstructor(null)}
          >
            <motion.div 
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="bg-gradient-to-br from-white to-[#2A1035] border border-gray-200 rounded-[32px] p-8 max-w-3xl w-full relative overflow-hidden"
              onClick={e => e.stopPropagation()}
            >
              <button 
                onClick={() => setSelectedInstructor(null)}
                className="absolute top-6 right-6 text-gray-500 hover:text-gray-900 transition-colors bg-gray-50 hover:bg-gray-100 p-2 rounded-full"
              >
                <X className="w-6 h-6" />
              </button>
              
              <div className="flex flex-col md:flex-row gap-8">
                <div className="w-full md:w-1/3 flex-shrink-0">
                  <img 
                    src={selectedInstructor.image} 
                    alt={selectedInstructor.name} 
                    className="w-full aspect-square object-cover rounded-2xl border border-gray-200 shadow-lg"
                  />
                </div>
                <div className="w-full md:w-2/3">
                  <h2 className="text-3xl font-bold text-gray-900 mb-2">{selectedInstructor.name}</h2>
                  <p className="text-yellow-600 font-medium text-lg mb-6">{selectedInstructor.title}</p>
                  
                  <div className="space-y-6">
                    <div>
                      <h4 className="text-gray-900 font-semibold mb-2 flex items-center gap-2">
                        <User className="w-4 h-4 text-purple-600" /> About
                      </h4>
                      <p className="text-gray-600 leading-relaxed text-sm">
                        {selectedInstructor.bio}
                      </p>
                    </div>
                    
                    <div>
                      <h4 className="text-gray-900 font-semibold mb-2 flex items-center gap-2">
                        <Award className="w-4 h-4 text-purple-600" /> Expertise
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {selectedInstructor.expertise.map((exp, i) => (
                          <span key={i} className="text-xs bg-purple-500/20 border border-purple-500/30 text-purple-200 px-3 py-1.5 rounded-full">
                            {exp}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h4 className="text-gray-900 font-semibold mb-2 flex items-center gap-2">
                        <BookOpen className="w-4 h-4 text-purple-600" /> Courses Taught
                      </h4>
                      <ul className="space-y-2">
                        {selectedInstructor.courses.map((course, i) => (
                          <li key={i} className="text-sm text-gray-600 flex items-center gap-2">
                            <div className="w-1.5 h-1.5 rounded-full bg-pink-400" />
                            {course}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
