import React, { useEffect } from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ShieldCheck } from 'lucide-react';

export default function RefundPolicyPage({ onNavigate }: { onNavigate?: (page: string) => void }) {
  useEffect(() => {
    window.scrollTo(0, 0);
    if (onNavigate) {
      onNavigate('courses');
    }
  }, [onNavigate]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-32 pb-24"
    >
      <div className="max-w-[860px] mx-auto px-4 sm:px-6 lg:px-8">
        <Link
          to="/courses/applied-behaviour-analysis-technician"
          className="inline-flex items-center gap-2 text-gray-500 hover:text-purple-600 transition-colors mb-8 group"
        >
          <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
          Back to Course
        </Link>

        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-50 border border-purple-100 mb-5">
          <ShieldCheck className="w-4 h-4 text-purple-600" />
          <span className="text-sm font-semibold text-purple-700">Sereniche Academy</span>
        </div>

        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900">Refund Policy</h1>
      </div>
    </motion.div>
  );
}
