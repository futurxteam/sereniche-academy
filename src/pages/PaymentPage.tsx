import React, { useEffect } from 'react';
import { motion } from 'motion/react';
import { Link, useNavigate } from 'react-router-dom';
import { ArrowLeft, ArrowRight, ShieldCheck, Clock, CreditCard } from 'lucide-react';
import { courses } from '../data/courses';

export default function PaymentPage({ onNavigate }: { onNavigate?: (page: string) => void }) {
  const navigate = useNavigate();
  const course = courses.find(c => c.slug === 'applied-behaviour-analysis-technician');

  useEffect(() => {
    window.scrollTo(0, 0);
    if (onNavigate) {
      onNavigate('courses');
    }
  }, [onNavigate]);

  if (!course) return null;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-32 pb-24"
    >
      <div className="max-w-[580px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Link */}
        <Link
          to="/courses/applied-behaviour-analysis-technician"
          className="inline-flex items-center gap-2 text-gray-500 hover:text-purple-600 transition-colors mb-8 group"
        >
          <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
          Back to Course
        </Link>

        {/* Checkout Card */}
        <div
          className="bg-white rounded-[28px] p-8 sm:p-10 shadow-sm"
          style={{ border: '1.5px solid #d4a843', boxShadow: '0 0 14px rgba(212,168,67,0.18)' }}
        >
          {/* Header */}
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-8">Checkout</h1>

          {/* Course Info */}
          <div className="flex items-start gap-4 mb-8 pb-8 border-b border-gray-100">
            <div className="w-16 h-16 rounded-xl overflow-hidden shrink-0 border border-gray-100">
              <img src={course.image} alt={course.title} className="w-full h-full object-cover" />
            </div>
            <div>
              <h2 className="font-bold text-gray-900 text-lg leading-snug">{course.title}</h2>
              <div className="flex items-center gap-2 mt-1.5 text-sm text-purple-600 font-semibold">
                <Clock className="w-3.5 h-3.5" />
                {course.duration}
              </div>
            </div>
          </div>

          {/* Fee Summary */}
          <div className="mb-8">
            <div className="flex justify-between items-center mb-3">
              <span className="text-gray-600 font-medium">Course Fee</span>
              <span className="font-bold text-gray-900 text-lg">{course.price}</span>
            </div>
            <div className="border-t border-gray-100 pt-4 flex justify-between items-center">
              <span className="font-bold text-gray-900 text-lg">Total</span>
              <span className="font-bold text-2xl text-purple-700">{course.price}</span>
            </div>
          </div>

          {/* Proceed Button */}
          <button
            className="w-full bg-[#7C3AED] hover:bg-purple-700 text-white py-4 rounded-2xl font-bold text-lg transition-all duration-300 shadow-[0_10px_20px_rgba(124,58,237,0.2)] hover:-translate-y-1 hover:shadow-[0_15px_30px_rgba(124,58,237,0.4)] flex items-center justify-center gap-2 group"
          >
            <CreditCard className="w-5 h-5" />
            Proceed to Payment
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>

          {/* Footer */}
          <div className="mt-5 flex items-center justify-center gap-2 text-xs text-gray-400">
            <ShieldCheck className="w-3.5 h-3.5" />
            Secure checkout &amp; flexible payment options
          </div>
        </div>
      </div>
    </motion.div>
  );
}
