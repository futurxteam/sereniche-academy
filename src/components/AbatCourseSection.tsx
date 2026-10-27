import React from 'react';
import { motion } from 'motion/react';
import { Clock, Laptop, BookOpen, GraduationCap, Phone, ArrowRight, ShieldCheck, Award, CheckCircle2 } from 'lucide-react';

interface AbatCourseSectionProps {
  onNavigate?: (page: string) => void;
}

export default function AbatCourseSection({ onNavigate }: AbatCourseSectionProps) {
  const infoTiles = [
    {
      label: 'DURATION',
      value: '2–3 Months',
      subtext: 'Comprehensive timeline',
      icon: <Clock className="w-5 h-5 text-purple-600" />
    },
    {
      label: 'MODE',
      value: 'Online (Live & Self-paced)',
      subtext: 'Flexible digital learning',
      icon: <Laptop className="w-5 h-5 text-indigo-600" />
    },
    {
      label: 'COURSEWORK',
      value: '40 Hours',
      subtext: 'QABA-aligned syllabus',
      icon: <BookOpen className="w-5 h-5 text-amber-600" />
    },
    {
      label: 'ELIGIBILITY',
      value: 'Any Graduate',
      subtext: "Bachelor's in any discipline",
      icon: <GraduationCap className="w-5 h-5 text-purple-600" />
    }
  ];

  const handleEnquireClick = () => {
    window.location.hash = 'course-enquiry';
    if (onNavigate) {
      onNavigate('contact');
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <section className="relative z-20 pt-20 pb-16 bg-gradient-to-b from-purple-50/40 via-white to-white overflow-hidden border-b border-gray-100">
      {/* Decorative ambient background glows */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 bg-gradient-to-r from-purple-200/20 via-amber-100/20 to-indigo-200/20 blur-3xl -z-10 pointer-events-none" />

      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header / Intro */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          {/* Badge: QABA Approved Coursework Provider · QCB-476 */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-20px" }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-50 border border-amber-200/80 text-amber-900 text-xs sm:text-sm font-semibold tracking-wide uppercase mb-6 shadow-sm hover:shadow transition-shadow"
          >
            <ShieldCheck className="w-4 h-4 text-amber-600 flex-shrink-0" />
            <span>QABA Approved Coursework Provider · QCB-476</span>
          </motion.div>

          {/* Heading */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-20px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#0B0B1A] tracking-tight leading-tight mb-6"
          >
            Applied Behaviour Analysis Technician{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-indigo-600 to-purple-700">
              (ABAT)
            </span>
          </motion.h2>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-20px" }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-gray-600 text-base sm:text-lg md:text-xl leading-relaxed"
          >
            An internationally recognised certification in Applied Behaviour Analysis, awarded by the QABA Board, USA.
          </motion.p>
        </div>

        {/* 4 Information Tiles */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-30px" }}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6 mb-12"
        >
          {infoTiles.map((tile, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl border border-gray-150 p-6 shadow-[0_4px_20px_rgba(15,23,42,0.04)] hover:shadow-[0_12px_30px_rgba(124,58,237,0.12)] hover:border-purple-200 hover:-translate-y-1.5 transition-all duration-300 group flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-bold uppercase tracking-wider text-purple-700/80 bg-purple-50 px-2.5 py-1 rounded-md">
                    {tile.label}
                  </span>
                  <div className="w-10 h-10 rounded-xl bg-purple-50/80 border border-purple-100 flex items-center justify-center group-hover:scale-110 group-hover:bg-purple-600 group-hover:text-white transition-all duration-300">
                    {tile.icon}
                  </div>
                </div>
                <div className="text-xl sm:text-2xl font-bold text-gray-900 group-hover:text-purple-700 transition-colors leading-snug">
                  {tile.value}
                </div>
              </div>
              <div className="text-xs text-gray-400 font-medium mt-3 pt-3 border-t border-gray-100">
                {tile.subtext}
              </div>
            </div>
          ))}
        </motion.div>

        {/* QABA Badges & Visual Showcase Card */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-30px" }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="bg-white rounded-3xl border border-purple-100 shadow-[0_15px_40px_rgba(124,58,237,0.06)] p-6 sm:p-8 lg:p-10 mb-12 overflow-hidden relative"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left: Program Image & Floating Badges */}
            <div className="lg:col-span-5 relative">
              <div className="relative rounded-2xl overflow-hidden aspect-[4/3] shadow-md border border-gray-100">
                <img
                  src="/course-abat.jpg"
                  alt="Applied Behaviour Analysis Technician (ABAT) Training"
                  className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 text-white text-xs sm:text-sm font-semibold flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-amber-400 flex-shrink-0" />
                  <span>Clinical & Behavioural Intervention Training</span>
                </div>
              </div>
            </div>

            {/* Right: Badges showcase & accreditation credentials */}
            <div className="lg:col-span-7 flex flex-col justify-center">
              <div className="text-xs font-bold tracking-wider uppercase text-amber-700 mb-2 flex items-center gap-1.5">
                <Award className="w-4 h-4 text-amber-600" />
                Official Accreditation & Endorsement
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
                Dual QABA Recognized Credential
              </h3>
              <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-6">
                Sereniche Academy delivers certified coursework adhering strictly to the International Standards of the QABA (Qualified Applied Behavior Analysis Credentialing Board, USA).
              </p>

              {/* Two QABA Badges */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Badge 1: Approved Coursework Provider */}
                <div className="rounded-2xl border-2 border-amber-200/80 bg-gradient-to-br from-amber-50/70 via-white to-amber-50/30 p-4 flex items-center gap-4 hover:border-amber-400 hover:shadow-md transition-all">
                  <div className="w-14 h-14 rounded-full bg-gradient-to-br from-amber-500 to-amber-700 text-white flex items-center justify-center flex-shrink-0 shadow-md ring-4 ring-amber-100">
                    <ShieldCheck className="w-7 h-7" />
                  </div>
                  <div>
                    <div className="text-[11px] font-bold uppercase tracking-wider text-amber-800">
                      Approved Provider
                    </div>
                    <div className="text-sm font-extrabold text-gray-900 leading-tight">
                      QABA Approved Coursework Provider
                    </div>
                    <div className="text-xs font-semibold text-amber-700 mt-0.5">
                      Provider No. QCB-476
                    </div>
                  </div>
                </div>

                {/* Badge 2: Approved Training Program */}
                <div className="rounded-2xl border-2 border-purple-200/80 bg-gradient-to-br from-purple-50/70 via-white to-indigo-50/30 p-4 flex items-center gap-4 hover:border-purple-400 hover:shadow-md transition-all">
                  <div className="w-14 h-14 rounded-full bg-gradient-to-br from-purple-600 to-indigo-700 text-white flex items-center justify-center flex-shrink-0 shadow-md ring-4 ring-purple-100">
                    <Award className="w-7 h-7" />
                  </div>
                  <div>
                    <div className="text-[11px] font-bold uppercase tracking-wider text-purple-800">
                      Approved Program
                    </div>
                    <div className="text-sm font-extrabold text-gray-900 leading-tight">
                      Approved Training Program
                    </div>
                    <div className="text-xs font-semibold text-purple-700 mt-0.5">
                      QABA Board, USA
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-20px" }}
          transition={{ duration: 0.5, delay: 0.35 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6"
        >
          {/* Enquire Now Button */}
          <button
            onClick={handleEnquireClick}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full font-bold text-base text-white bg-gradient-to-r from-purple-600 via-indigo-600 to-purple-700 hover:from-purple-700 hover:to-indigo-700 shadow-[0_10px_25px_rgba(124,58,237,0.3)] hover:shadow-[0_15px_35px_rgba(124,58,237,0.45)] hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300 group cursor-pointer"
          >
            <span>Enquire Now</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>

          {/* Call Us Button */}
          <a
            href="tel:+917025740495"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full font-bold text-base text-gray-800 bg-white border border-gray-200 hover:border-purple-300 hover:bg-purple-50/50 hover:text-purple-700 shadow-sm hover:shadow-md hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300 group"
          >
            <Phone className="w-4 h-4 text-purple-600 group-hover:rotate-12 transition-transform" />
            <span>Call Us: +91 70257 40495</span>
          </a>
        </motion.div>

      </div>
    </section>
  );
}
