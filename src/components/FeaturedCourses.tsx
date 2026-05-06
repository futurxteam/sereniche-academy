import { useState } from 'react';
import { Star, Users, BookOpen, GraduationCap } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { courses } from '../data/courses';
export default function FeaturedCourses() {
  const [filter, setFilter] = useState('All');
  const levels = ['All', ...Array.from(new Set(courses.map(c => c.level)))];

  const filteredCourses = filter === 'All' ? courses : courses.filter(c => c.level === filter);

  return (
    <section className="py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-panel border border-white/10 mb-6">
            <GraduationCap className="w-4 h-4 text-lavender" />
            <span className="text-sm font-medium text-gray-300">Our Courses</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Featured Courses</h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            From critical skills to technical topics, we support your professional development with courses that help you grow and succeed.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {levels.map(level => (
            <button
              key={level}
              onClick={() => setFilter(level)}
              className={`px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 ${
                filter === level 
                  ? 'bg-[#6D28D9] text-white shadow-[0_0_15px_rgba(109,40,217,0.4)]' 
                  : 'glass-panel text-gray-400 hover:text-white hover:bg-white/10'
              }`}
            >
              {level}
            </button>
          ))}
        </div>

        <motion.div layout className="space-y-8">
          <AnimatePresence mode="popLayout">
            {filteredCourses.map((course, index) => (
              <motion.div 
                layout
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 20 }}
                transition={{ duration: 0.4 }}
                key={course.id} 
                className="glass-panel rounded-3xl p-6 md:p-8 flex flex-col lg:flex-row gap-8 items-center group hover:-translate-y-2 transition-transform duration-300"
              >
              {/* Image Side */}
              <div className={`w-full lg:w-1/2 overflow-hidden rounded-2xl ${index % 2 !== 0 ? 'lg:order-2' : ''}`}>
                <div className="relative aspect-[4/3] transform group-hover:scale-105 transition-transform duration-500">
                  <img src={course.image} alt={course.title} className="w-full h-full object-cover rounded-2xl" referrerPolicy="no-referrer" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                </div>
              </div>

              {/* Content Side */}
              <div className={`w-full lg:w-1/2 flex flex-col ${index % 2 !== 0 ? 'lg:order-1' : ''}`}>
                <div className="flex justify-between items-start mb-6">
                  <div className="flex items-center gap-2">
                    <div className="flex text-pink-500">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className={`w-4 h-4 ${i < Math.floor(course.rating) ? 'fill-current' : ''}`} />
                      ))}
                    </div>
                    <span className="text-sm text-gray-400">Rated {course.rating} Star</span>
                  </div>
                  <span className="bg-pink-500 text-white px-4 py-1 rounded-full text-sm font-bold shadow-[0_0_10px_rgba(236,72,153,0.5)]">
                    {course.price}
                  </span>
                </div>

                <div className="flex items-center gap-3 mb-4">
                  <div className="w-8 h-8 rounded-full bg-purple-500 text-white flex items-center justify-center font-bold text-xs uppercase">{course.instructor.charAt(0)}</div>
                  <span className="text-sm font-medium text-gray-300">{course.instructor}</span>
                </div>

                <h3 className="text-2xl md:text-3xl font-bold mb-4">{course.title}</h3>
                <p className="text-gray-400 mb-8 leading-relaxed">
                  {course.description}
                </p>

                <div className="flex items-center gap-6 mb-8 text-sm text-gray-400 border-t border-white/10 pt-6">
                  <div className="flex items-center gap-2">
                    <Users className="w-4 h-4" />
                    <span>{course.reviews}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <BookOpen className="w-4 h-4" />
                    <span>{course.level}</span>
                  </div>
                </div>

                <button className="w-full bg-purple-600 hover:bg-purple-500 transition-colors py-4 rounded-xl font-semibold text-white">
                  View Course
                </button>
              </div>
            </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
        
        <div className="mt-16 text-center">
          <button className="glass-panel hover:bg-white/10 transition-colors px-8 py-4 rounded-full font-semibold inline-flex items-center gap-2">
            View All Courses
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
          </button>
        </div>
      </div>
    </section>
  );
}
