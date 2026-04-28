import React, { useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { motion } from 'motion/react';
import {
  Clock, Users, Star, ArrowLeft, ArrowRight,
  CheckCircle2, MonitorPlay, Activity, BookOpen
} from 'lucide-react';
import { courses } from '../data/courses';

export default function CourseDetailPage({ onNavigate }: { onNavigate?: (page: string) => void }) {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const course = courses.find(c => c.slug === slug);

  useEffect(() => {
    window.scrollTo(0, 0);
    if (onNavigate) {
      onNavigate('courses');
    }
  }, [slug, onNavigate]);

  if (!course) {
    return (
      <div className="pt-40 pb-24 px-4 text-center">
        <h2 className="text-3xl font-bold mb-4">Course Not Found</h2>
        <Link to="/courses" className="text-purple-600 hover:underline">Back to Courses</Link>
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-32 pb-24"
    >
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Button */}
        <Link
          to="/courses"
          className="inline-flex items-center gap-2 text-gray-500 hover:text-purple-600 transition-colors mb-8 group"
        >
          <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
          Back to Courses
        </Link>

        <div className="bg-white border border-gray-100 rounded-[32px] overflow-hidden shadow-[0_4px_30px_rgba(0,0,0,0.03)]">
          {/* Hero Section */}
          <div className="h-64 sm:h-[400px] relative w-full">
            <img
              src={course.image}
              alt={course.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent opacity-60" />
            <div className="absolute bottom-0 left-0 p-8 w-full bg-gradient-to-t from-white to-transparent">
              <div className="flex flex-wrap items-center gap-4 text-sm font-bold text-purple-600 uppercase tracking-wider mb-3">
                <span className="flex items-center gap-1.5 bg-purple-50 px-3 py-1 rounded-full border border-purple-100">
                  <Clock className="w-4 h-4" /> {course.duration}
                </span>
                <span className="flex items-center gap-1.5 bg-purple-50 px-3 py-1 rounded-full border border-purple-100">
                  <Activity className="w-4 h-4" /> {course.level}
                </span>
              </div>
              <h1 className="text-3xl sm:text-5xl font-bold text-gray-900 leading-tight tracking-tight">
                {course.title}
              </h1>
            </div>
          </div>

          <div className="p-8 grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Left Content */}
            <div className="lg:col-span-2 space-y-10">
              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">About This Program</h2>
                <p className="text-gray-600 text-lg leading-relaxed">
                  {course.fullDescription}
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Curriculum Overview</h2>
                <div className="grid grid-cols-1 gap-4">
                  {course.curriculum.map((item, i) => (
                    <div key={i} className="flex items-start gap-4 bg-gray-50 border border-gray-100 p-5 rounded-2xl hover:border-purple-200 transition-colors">
                      <div className="w-10 h-10 rounded-xl bg-purple-100 flex items-center justify-center flex-shrink-0">
                        <BookOpen className="w-5 h-5 text-purple-600" />
                      </div>
                      <span className="text-gray-700 font-medium leading-relaxed">{item}</span>
                    </div>
                  ))}
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-6">What You Will Learn</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {course.outcomes.map((outcome, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-600 leading-relaxed">{outcome}</span>
                    </div>
                  ))}
                </div>
              </section>
            </div>

            {/* Right Sidebar - Pricing Card */}
            <div className="lg:col-span-1">
              <div className="bg-gray-50 border border-gray-100 rounded-[28px] p-8 lg:sticky lg:top-32 shadow-sm">
                <div className="text-gray-500 text-sm font-semibold uppercase tracking-wider mb-2">Program Fee</div>
                <div className="text-4xl font-bold text-gray-900 mb-8">{course.price}</div>

                <div className="space-y-5 mb-10">
                  <div className="flex items-center gap-3 text-gray-700 font-medium">
                    <MonitorPlay className="w-5 h-5 text-purple-600" />
                    <span>Live Online + Clinical Lab</span>
                  </div>
                  <div className="flex items-center gap-3 text-gray-700 font-medium">
                    <Users className="w-5 h-5 text-purple-600" />
                    <span>Limited Batch Size</span>
                  </div>
                  <div className="flex items-center gap-3 text-gray-700 font-medium">
                    <Star className="w-5 h-5 text-yellow-500 fill-yellow-500" />
                    <span>{course.rating} ({course.reviews} reviews)</span>
                  </div>
                </div>

                <button
                  onClick={() => navigate('/contact')}
                  className="w-full bg-[#7C3AED] hover:bg-purple-700 text-white py-4 rounded-2xl font-bold text-lg transition-all duration-300 shadow-[0_10px_20px_rgba(124,58,237,0.2)] hover:-translate-y-1 hover:shadow-[0_15px_30px_rgba(124,58,237,0.4)] flex items-center justify-center gap-2 group"
                >
                  Enroll Now
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>

                <p className="text-center text-gray-400 text-xs mt-4">
                  Secure checkout & flexible payment options available
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
