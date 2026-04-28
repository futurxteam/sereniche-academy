import React, { useState } from 'react';
import { motion } from 'motion/react';
import { useNavigate } from 'react-router-dom';
import { Clock, Users, Star, ArrowRight, Activity } from 'lucide-react';
import { courses } from '../data/courses';

type FilterType = "all" | "online" | "offline" | "internship";

const FILTERS: { id: FilterType; label: string }[] = [
  { id: "all", label: "All" },
  { id: "online", label: "Online" },
  { id: "offline", label: "Offline" },
  { id: "internship", label: "Internship" },
];

export default function CoursesPage() {
  const [activeFilter, setActiveFilter] = useState<FilterType>("all");
  const navigate = useNavigate();

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
          Explore Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600">Courses</span>
        </h1>
        <p className="text-gray-500 text-lg max-w-2xl mx-auto">
          Hospital-integrated, clinically focused training programs designed to build real-world therapeutic competence.
        </p>
      </div>

      {/* Filter Pills */}
      <div className="flex flex-wrap justify-center gap-3 mb-12">
        {FILTERS.map((f) => (
          <button
            key={f.id}
            onClick={() => setActiveFilter(f.id)}
            className={`px-6 py-2.5 rounded-full text-sm font-bold border transition-all duration-300 ${
              activeFilter === f.id
                ? "bg-[#7C3AED] text-white border-purple-600 shadow-[0_10px_20px_rgba(124,58,237,0.2)] scale-105"
                : "bg-white text-gray-600 border-gray-200 hover:border-purple-400 hover:text-purple-600 hover:scale-105"
            }`}
          >
            {f.label}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {courses.filter(c => activeFilter === "all" || c.type === activeFilter).map((course, idx) => (
          <motion.div
            key={course.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            onClick={() => navigate(`/courses/${course.slug}`)}
            className="bg-white border border-gray-100 rounded-[32px] overflow-hidden flex flex-col cursor-pointer hover:-translate-y-2 hover:border-purple-200 hover:shadow-[0_20px_40px_rgba(0,0,0,0.05)] transition-all duration-500 group"
          >
            <div className="h-56 overflow-hidden relative">
              <img
                src={course.image}
                alt={course.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full text-sm font-bold text-gray-900 flex items-center gap-1 border border-white/20 shadow-lg">
                <Star className="w-3.5 h-3.5 text-yellow-500 fill-yellow-500" />
                {course.rating}
              </div>
            </div>

            <div className="p-8 flex flex-col flex-grow">
              <div className="flex items-center gap-4 text-[10px] font-bold text-purple-500 uppercase tracking-widest mb-4">
                <span className="flex items-center gap-1.5 bg-purple-50 px-2.5 py-1 rounded-md">
                  <Clock className="w-3.5 h-3.5" /> {course.duration}
                </span>
                <span className="flex items-center gap-1.5 bg-purple-50 px-2.5 py-1 rounded-md">
                  <Activity className="w-3.5 h-3.5" /> {course.level}
                </span>
              </div>

              <h3 className="text-xl font-bold text-gray-900 mb-3 leading-tight group-hover:text-purple-600 transition-colors">
                {course.title}
              </h3>
              <p className="text-gray-500 text-sm mb-6 flex-grow leading-relaxed">
                {course.description}
              </p>

              <div className="flex items-center justify-between pt-6 border-t border-gray-50 mt-auto">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-purple-100 to-purple-50 flex items-center justify-center text-xs font-bold text-purple-600 border border-purple-100">
                    {course.instructor.charAt(0)}
                  </div>
                  <span className="text-xs font-semibold text-gray-600">{course.instructor}</span>
                </div>
                <div className="text-sm font-bold text-purple-600 flex items-center gap-1 group-hover:gap-2 transition-all">
                  Details <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
