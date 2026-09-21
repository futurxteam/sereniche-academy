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



        <div className="bg-white border border-slate-100/80 rounded-[32px] overflow-hidden shadow-[0_16px_48px_rgba(15,23,42,0.05),0_2px_8px_rgba(15,23,42,0.03)]">
          {/* Hero Section */}
          <div className="relative w-full h-[320px] sm:h-[420px] lg:h-[480px] overflow-hidden bg-slate-900">
            <img
              src={course.image}
              alt={course.title}
              className="w-full h-full object-cover object-[center_30%] filter brightness-[0.96] transition-transform duration-700 hover:scale-[1.01]"
            />
            {/* Subtle dark-to-transparent gradient over top/middle for calm depth */}
            <div className="absolute inset-0 bg-gradient-to-b from-slate-900/30 via-transparent to-transparent pointer-events-none" />
            
            {/* Subtle white gradient behind heading and badges for pristine readability */}
            <div className="absolute inset-x-0 bottom-0 h-44 sm:h-56 bg-gradient-to-t from-white via-white/85 to-transparent pointer-events-none" />

            {/* Content overlay on the lower portion of the hero */}
            <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8 lg:p-10 flex flex-col justify-end">
              {/* Badges positioned near lower-left as elegant compact glass/white pills */}
              <div className="flex flex-wrap items-center gap-2.5 mb-3 sm:mb-4">
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/95 backdrop-blur-md text-xs font-semibold tracking-wider text-purple-900 shadow-sm border border-purple-100/80 ring-1 ring-amber-400/20">
                  <Clock className="w-3.5 h-3.5 text-purple-600 stroke-[2]" />
                  <span className="uppercase">{course.duration}</span>
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/95 backdrop-blur-md text-xs font-semibold tracking-wider text-purple-900 shadow-sm border border-purple-100/80 ring-1 ring-amber-400/20">
                  <Activity className="w-3.5 h-3.5 text-purple-600 stroke-[2]" />
                  <span className="uppercase">{course.level}</span>
                </span>
              </div>

              {/* Large, bold, highly readable deep navy typography */}
              <h1 className="text-2xl sm:text-4xl lg:text-[42px] font-bold text-[#0f172a] leading-[1.2] tracking-tight max-w-4xl">
                {course.title}
              </h1>
            </div>
          </div>

          {/* QABA Information Strip directly below hero image */}
          {course.slug === 'applied-behaviour-analysis-technician' && (
            <div className="bg-gradient-to-r from-amber-50/70 via-amber-50/40 to-purple-50/30 py-3.5 sm:py-4 overflow-hidden relative">
              <div className="flex w-max qaba-marquee-track">
                {[0, 1].map((groupIndex) => (
                  <div key={groupIndex} className="flex items-center shrink-0">
                    {[0, 1].map((itemIndex) => (
                      <div
                        key={itemIndex}
                        className="inline-flex items-center gap-3 px-8 text-xs sm:text-sm leading-relaxed text-slate-700 whitespace-nowrap shrink-0"
                      >
                        <span className="w-2 h-2 rounded-full bg-amber-500 shrink-0 ring-4 ring-amber-500/20" />
                        <span>
                          <span className="font-semibold text-slate-900">Sereniche Academy</span> is currently in the process of obtaining{' '}
                          <span className="font-bold text-[#b45309]">QABA Approved Coursework Provider status</span>. Our programme is designed in full alignment with QABA standards and competency requirements. Students who enrol now will receive their{' '}
                          <span className="font-semibold text-[#b45309]">Certificate of Completion upon QABA approval being granted</span>.
                        </span>
                      </div>
                    ))}
                  </div>
                ))}
              </div>
              <style>{`
                .qaba-marquee-track {
                  display: flex;
                  width: max-content;
                  animation: qaba-marquee-anim 24s linear infinite;
                  will-change: transform;
                }
                @media (max-width: 768px) {
                  .qaba-marquee-track {
                    animation-duration: 32s;
                  }
                }
                @keyframes qaba-marquee-anim {
                  0% {
                    transform: translate3d(0, 0, 0);
                  }
                  100% {
                    transform: translate3d(-50%, 0, 0);
                  }
                }
              `}</style>
            </div>
          )}

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
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Programme Highlights</h2>
                <div className="grid grid-cols-1 gap-4">
                  {course.highlights.map((highlight, i) => (
                    <div key={i} className="flex items-start gap-4 bg-gray-50 border border-gray-100 p-5 rounded-2xl hover:border-purple-200 transition-colors">
                      <div className="w-10 h-10 rounded-xl bg-purple-100 flex items-center justify-center flex-shrink-0">
                        <CheckCircle2 className="w-5 h-5 text-purple-600" />
                      </div>
                      <span className="text-gray-700 font-medium leading-relaxed">{highlight}</span>
                    </div>
                  ))}
                </div>

                {course.slug === 'applied-behaviour-analysis-technician' && (
                  <div className="mt-6 flex flex-wrap items-center gap-4">
                    <button
                      onClick={() => navigate('/payment')}
                      className="bg-[#7C3AED] hover:bg-purple-700 text-white py-4 px-8 rounded-2xl font-bold text-lg transition-all duration-300 shadow-[0_10px_20px_rgba(124,58,237,0.2)] hover:-translate-y-1 hover:shadow-[0_15px_30px_rgba(124,58,237,0.4)] flex items-center justify-center gap-2 group"
                    >
                      Payment
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </button>
                    <button
                      onClick={() => navigate('/refund-policy')}
                      className="text-sm font-semibold text-purple-600 hover:text-purple-800 hover:underline transition-colors py-4 px-2"
                    >
                      Refund Policy
                    </button>
                  </div>
                )}
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Who Should Enrol</h2>
                {Array.isArray(course.whoThisIsFor) ? (
                  <ul className="list-disc pl-5 text-gray-600 text-lg leading-relaxed space-y-2">
                    {course.whoThisIsFor.map((item, idx) => (
                      <li key={idx}>{item}</li>
                    ))}
                  </ul>
                ) : (
                  <p className="text-gray-600 text-lg leading-relaxed">
                    {course.whoThisIsFor}
                  </p>
                )}
              </section>

              {course.trackOptions && (
                <section>
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">Track Options</h2>
                  <div className="grid grid-cols-1 gap-6">
                    {course.trackOptions.map((track, i) => (
                      <div key={i} className="bg-gray-50 border border-purple-100 p-6 rounded-2xl">
                        <h3 className="font-bold text-xl text-gray-900 mb-2">{track.title}</h3>
                        <p className="text-gray-600">{track.description}</p>
                      </div>
                    ))}
                  </div>
                </section>
              )}

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Format Details</h2>
                <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  <div className="bg-purple-50 p-5 rounded-xl border border-purple-100">
                    <span className="block text-xs font-bold text-purple-500 uppercase mb-1">Mode</span>
                    <span className="font-medium text-gray-900">{course.formatDetails.mode}</span>
                  </div>
                  <div className="bg-purple-50 p-5 rounded-xl border border-purple-100">
                    <span className="block text-xs font-bold text-purple-500 uppercase mb-1">Duration</span>
                    <span className="font-medium text-gray-900">{course.formatDetails.duration}</span>
                  </div>
                  {course.formatDetails.schedule && (
                     <div className="bg-purple-50 p-5 rounded-xl border border-purple-100">
                      <span className="block text-xs font-bold text-purple-500 uppercase mb-1">Schedule</span>
                      <span className="font-medium text-gray-900">{course.formatDetails.schedule}</span>
                    </div>
                  )}
                  {course.formatDetails.location && (
                    <div className="bg-purple-50 p-5 rounded-xl border border-purple-100">
                      <span className="block text-xs font-bold text-purple-500 uppercase mb-1">Location</span>
                      <span className="font-medium text-gray-900">{course.formatDetails.location}</span>
                    </div>
                  )}
                  <div className="bg-purple-50 p-5 rounded-xl border border-purple-100">
                    <span className="block text-xs font-bold text-purple-500 uppercase mb-1">Language</span>
                    <span className="font-medium text-gray-900">{course.formatDetails.language}</span>
                  </div>
                  {course.formatDetails.certification && (
                    <div className="bg-purple-50 p-5 rounded-xl border border-purple-100 col-span-2 lg:col-span-3">
                      <span className="block text-xs font-bold text-purple-500 uppercase mb-1">Certification</span>
                      <span className="font-medium text-gray-900">{course.formatDetails.certification}</span>
                    </div>
                  )}
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
                    <span>
                      {course.type === 'online' && 'Live Online + Clinical Lab'}
                      {course.type === 'offline' && 'In-Person + Clinical Immersion'}
                      {course.type === 'internship' && 'Clinical Setting Experience'}
                    </span>
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
