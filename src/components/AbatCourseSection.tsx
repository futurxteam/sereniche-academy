import React from 'react';
import { motion } from 'motion/react';
import {
  Clock, Laptop, BookOpen, GraduationCap, Phone, ArrowRight,
  ShieldCheck, Award, Users, Sparkles, FileText, TrendingUp
} from 'lucide-react';

interface AbatCourseSectionProps {
  onNavigate?: (page: string) => void;
}

export default function AbatCourseSection({ onNavigate }: AbatCourseSectionProps) {
  const infoTiles = [
    {
      label: 'DURATION',
      value: '2–3 Months',
      subtext: 'Comprehensive timeline',
      icon: <Clock className="w-4 h-4 text-amber-600" />,
      iconBg: 'bg-amber-100/70 border border-amber-200/60',
    },
    {
      label: 'MODE',
      value: 'Online (Live & Self-paced)',
      subtext: 'Flexible digital learning',
      icon: <Laptop className="w-4 h-4 text-purple-600" />,
      iconBg: 'bg-purple-100/70 border border-purple-200/60',
    },
    {
      label: 'COURSEWORK',
      value: '40 Hours',
      subtext: 'QABA-aligned syllabus',
      icon: <BookOpen className="w-4 h-4 text-amber-600" />,
      iconBg: 'bg-amber-100/70 border border-amber-200/60',
    },
    {
      label: 'ELIGIBILITY',
      value: 'Any Graduate',
      subtext: 'Bachelor\'s in any discipline',
      icon: <GraduationCap className="w-4 h-4 text-purple-600" />,
      iconBg: 'bg-purple-100/70 border border-purple-200/60',
    },
  ];

  const bottomFeatures = [
    {
      title: 'Practical, Real-world Skills',
      desc: 'Apply what you learn in real settings',
      icon: <Users className="w-5 h-5 text-purple-600" />,
    },
    {
      title: 'Learn from Experts',
      desc: 'Guided by experienced professionals',
      icon: <Sparkles className="w-5 h-5 text-amber-500" />,
    },
    {
      title: 'Globally Recognised',
      desc: 'Internationally aligned curriculum',
      icon: <FileText className="w-5 h-5 text-purple-600" />,
    },
    {
      title: 'Build a Meaningful Career',
      desc: 'Make a real impact in people\'s lives',
      icon: <TrendingUp className="w-5 h-5 text-amber-500" />,
    },
  ];

  const handleEnquireClick = () => {
    window.location.hash = 'course-enquiry';
    if (onNavigate) {
      onNavigate('contact');
    } else {
      window.location.href = '/#contact';
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <section className="relative z-20 pt-16 sm:pt-20 pb-16 sm:pb-20 bg-gradient-to-b from-[#FBF9FE] via-white to-white overflow-hidden border-b border-purple-50">
      
      {/* Decorative Pastel Ambient Shapes in Background */}
      <div className="absolute top-0 right-0 w-[550px] h-[550px] bg-gradient-to-bl from-purple-200/40 via-amber-100/30 to-transparent rounded-full blur-3xl pointer-events-none -z-10 translate-x-1/4 -translate-y-1/4" />
      <div className="absolute top-1/3 left-0 w-[450px] h-[450px] bg-gradient-to-tr from-purple-100/40 via-purple-50/20 to-transparent rounded-full blur-3xl pointer-events-none -z-10 -translate-x-1/3" />
      <div className="absolute bottom-10 right-1/3 w-[350px] h-[350px] bg-gradient-to-br from-amber-100/30 via-purple-100/20 to-transparent rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* =========================================================================
            TOP SPLIT HERO: Left Headline/Badges/Tiles/CTAs + Right Visual Photo
           ========================================================================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center mb-10 lg:mb-12">

          {/* LEFT COLUMN */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-30px" }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-7 flex flex-col items-start"
          >
            {/* Pill Tag */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FFFDF5] border border-amber-300/80 text-amber-900 text-xs sm:text-[13px] font-semibold tracking-wide shadow-sm mb-5">
              <div className="w-5 h-5 rounded-full bg-amber-500/15 flex items-center justify-center flex-shrink-0">
                <ShieldCheck className="w-3.5 h-3.5 text-amber-600" />
              </div>
              <span>Pursuing QABA Approved Coursework Provider Status · QCB-476</span>
            </div>

            {/* Main Headline */}
            <h2 className="text-3xl sm:text-5xl lg:text-[50px] font-extrabold text-slate-900 leading-[1.12] tracking-tight mb-4">
              Applied Behaviour<br className="hidden sm:inline" /> Analysis Technician{' '}
              <span className="relative inline-block text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-indigo-600 to-purple-700 font-black">
                (ABAT)
                {/* Decorative golden sparkle rays matching mock */}
                <svg
                  className="absolute -top-3 -right-6 sm:-right-8 w-6 sm:w-8 h-6 sm:h-8 text-amber-400 stroke-current pointer-events-none"
                  viewBox="0 0 24 24"
                  fill="none"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                >
                  <line x1="12" y1="2" x2="12" y2="6" />
                  <line x1="19" y1="5" x2="16" y2="8" />
                  <line x1="22" y1="12" x2="18" y2="12" />
                </svg>
              </span>
            </h2>

            {/* Subtitle */}
            <p className="text-slate-600 text-base sm:text-lg leading-relaxed mb-8 max-w-2xl font-normal">
              An internationally recognised certification in Applied Behaviour Analysis, awarded by the QABA Board, USA.
            </p>

            {/* 4 Compact Information Cards */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-3.5 w-full mb-8">
              {infoTiles.map((tile, idx) => (
                <div
                  key={idx}
                  className="bg-white/95 rounded-2xl border border-slate-150 p-3.5 sm:p-4 shadow-[0_4px_16px_rgba(15,23,42,0.03)] hover:shadow-[0_8px_24px_rgba(124,58,237,0.08)] hover:border-purple-200 hover:-translate-y-0.5 transition-all duration-300 flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <div className={`w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0 ${tile.iconBg}`}>
                        {tile.icon}
                      </div>
                      <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                        {tile.label}
                      </span>
                    </div>
                    <div className="text-xs sm:text-sm font-bold text-slate-900 leading-snug">
                      {tile.value}
                    </div>
                  </div>
                  <div className="text-[10px] text-slate-400 font-medium mt-2 pt-2 border-t border-slate-100">
                    {tile.subtext}
                  </div>
                </div>
              ))}
            </div>

            {/* CTA Buttons Row */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 sm:gap-4 w-full sm:w-auto">
              <button
                onClick={handleEnquireClick}
                className="inline-flex items-center justify-center gap-2.5 px-8 py-3.5 sm:py-4 rounded-full font-bold text-sm sm:text-base text-white bg-gradient-to-r from-purple-600 via-indigo-600 to-purple-700 hover:from-purple-700 hover:to-indigo-700 shadow-[0_10px_25px_rgba(124,58,237,0.3)] hover:shadow-[0_15px_35px_rgba(124,58,237,0.45)] hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300 group cursor-pointer"
              >
                <span>Enquire Now</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <a
                href="tel:+917025740495"
                className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 sm:py-4 rounded-full font-bold text-sm sm:text-base text-slate-800 bg-white border border-amber-300/80 hover:border-amber-400 hover:bg-amber-50/40 hover:text-amber-900 shadow-sm hover:shadow-md hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300 group"
              >
                <Phone className="w-4 h-4 text-amber-700 group-hover:rotate-12 transition-transform" />
                <span>Call Us: +91 70257 40495</span>
              </a>
            </div>

          </motion.div>

          {/* RIGHT COLUMN: Large Rounded Photo with Script & Floating Badge */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-30px" }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="lg:col-span-5 relative flex justify-center lg:justify-end"
          >
            {/* Pastel decorative backdrop shapes */}
            <div className="absolute -top-3 -right-3 w-72 h-72 bg-gradient-to-bl from-amber-200/50 via-purple-200/30 to-transparent rounded-[44px] -z-10 blur-xl" />

            {/* Main Rounded Image Container */}
            <div className="relative w-full max-w-[480px] aspect-[4/3] sm:aspect-[1.12/1] rounded-[38px] sm:rounded-[44px] overflow-hidden shadow-[0_20px_50px_rgba(15,23,42,0.12)] border-4 border-white ring-1 ring-amber-300/40 group">
              <img
                src="/course-abat.jpg"
                alt="Therapist working with a child using behavioral learning tools"
                className="w-full h-full object-cover object-[center_35%] transform group-hover:scale-105 transition-transform duration-700"
              />

              {/* Gradient for script contrast */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/35 pointer-events-none" />

              {/* Top-Right "Building Brighter Futures" Script */}
              <div className="absolute top-5 sm:top-6 right-5 sm:right-6 text-right pointer-events-none">
                <span className="font-serif italic font-semibold text-amber-100/95 text-lg sm:text-xl drop-shadow-[0_2px_6px_rgba(0,0,0,0.6)] leading-tight block">
                  Building<br />Brighter<br />Futures
                </span>
                <div className="w-10 h-0.5 bg-amber-300/80 rounded-full mt-1.5 ml-auto" />
              </div>
            </div>

            {/* Floating Card: "Clinical & Behavioural Intervention Training" */}
            <div className="absolute -bottom-5 sm:-bottom-6 right-2 sm:right-5 bg-white/95 backdrop-blur-md rounded-full px-4 sm:px-5 py-2.5 sm:py-3 shadow-[0_12px_32px_rgba(15,23,42,0.14)] border border-purple-100/90 flex items-center gap-3 z-20 hover:-translate-y-0.5 transition-transform">
              <div className="w-9 sm:w-10 h-9 sm:h-10 rounded-full bg-amber-100 text-amber-800 flex items-center justify-center flex-shrink-0 shadow-inner">
                <Users className="w-4 sm:w-5 h-4 sm:h-5 text-amber-700" />
              </div>
              <div className="text-xs sm:text-sm font-bold text-purple-900 whitespace-nowrap">
                Clinical & Behavioural Intervention Training
              </div>
            </div>

            {/* Playful curved indicator arrow pointing to floating card */}
            <div className="absolute -bottom-8 left-10 hidden sm:block pointer-events-none text-purple-400">
              <svg width="42" height="28" viewBox="0 0 42 28" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                <path d="M4 6 C 14 24, 26 24, 38 18" />
                <path d="M33 22 L 38 18 L 36 13" />
              </svg>
            </div>
          </motion.div>

        </div>

        {/* =========================================================================
            TRAIN-STYLE SCROLLING ANNOUNCEMENT STRIP
           ========================================================================= */}
        <div className="bg-gradient-to-r from-amber-50/90 via-amber-50/60 to-purple-50/50 py-3 rounded-2xl border border-amber-200/80 overflow-hidden relative mb-8 shadow-sm">
          <div className="flex w-max qaba-marquee-track">
            {[0, 1].map((groupIndex) => (
              <div key={groupIndex} className="flex items-center shrink-0">
                {[0, 1].map((itemIndex) => (
                  <div
                    key={itemIndex}
                    className="inline-flex items-center gap-3 px-8 text-xs sm:text-sm leading-relaxed text-slate-700 whitespace-nowrap shrink-0"
                  >
                    <span className="w-2.5 h-2.5 rounded-full bg-amber-500 shrink-0 ring-4 ring-amber-500/20" />
                    <span>
                      <span className="font-semibold text-slate-900">Sereniche Academy</span> is a{' '}
                      <span className="font-bold text-[#b45309]">QABA Approved Coursework Provider</span>. Our programme is designed in alignment with QABA standards and competency requirements. Students who enrol in our programme will receive a{' '}
                      <span className="font-semibold text-[#b45309]">Certificate of Completion upon successful completion of the course</span>.
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
              animation: qaba-marquee-anim 28s linear infinite;
              will-change: transform;
            }
            @keyframes qaba-marquee-anim {
              0% { transform: translate3d(0, 0, 0); }
              100% { transform: translate3d(-50%, 0, 0); }
            }
          `}</style>
        </div>

        {/* =========================================================================
            MIDDLE ACCREDITATION CARD BLOCK (Matching user mockup)
           ========================================================================= */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-20px" }}
          transition={{ duration: 0.5 }}
          className="bg-white rounded-3xl border border-purple-100/80 shadow-[0_12px_36px_rgba(124,58,237,0.06)] p-6 sm:p-8 mb-8"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Info with Award Icon & Official Statement */}
            <div className="lg:col-span-6 flex items-start gap-4">
              <div className="w-12 h-12 rounded-2xl bg-purple-100 text-purple-700 flex items-center justify-center flex-shrink-0 shadow-sm mt-1">
                <Award className="w-6 h-6" />
              </div>
              <div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-purple-700 block mb-1">
                  OFFICIAL ACCREDITATION & ENDORSEMENT
                </span>
                <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-2">
                  Dual QABA Recognized Credential Pathway
                </h3>
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                  Sereniche Academy delivers certified coursework adhering strictly to the International Standards of the QABA (Qualified Applied Behavior Analysis Credentialing Board, USA).
                </p>
              </div>
            </div>

            {/* Right Two Cards: Provider & Program */}
            <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              
              {/* Card 1: QABA Coursework Provider */}
              <div className="rounded-2xl border border-amber-200/90 bg-[#FFFDF7] p-4 flex items-center gap-3.5 shadow-sm hover:border-amber-300 transition-all">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-amber-500 to-amber-600 text-white flex items-center justify-center flex-shrink-0 shadow-md ring-4 ring-amber-100">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-[10px] font-extrabold uppercase tracking-wider text-amber-800 block">
                    APPROVED PROVIDER
                  </span>
                  <div className="text-xs sm:text-sm font-extrabold text-slate-900 leading-snug">
                    QABA Approved Coursework Provider
                  </div>
                  <div className="text-[11px] font-semibold text-amber-700 mt-0.5">
                    Provider No. QCB-476
                  </div>
                </div>
              </div>

              {/* Card 2: Approved Training Program */}
              <div className="rounded-2xl border border-purple-200/90 bg-[#FAF7FD] p-4 flex items-center gap-3.5 shadow-sm hover:border-purple-300 transition-all">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-600 to-indigo-700 text-white flex items-center justify-center flex-shrink-0 shadow-md ring-4 ring-purple-100">
                  <Award className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-[10px] font-extrabold uppercase tracking-wider text-purple-800 block">
                    APPROVED PROGRAM
                  </span>
                  <div className="text-xs sm:text-sm font-extrabold text-slate-900 leading-snug">
                    Approved Training Program
                  </div>
                  <div className="text-[11px] font-semibold text-purple-700 mt-0.5">
                    QABA Board, USA
                  </div>
                </div>
              </div>

            </div>

          </div>
        </motion.div>

        {/* =========================================================================
            BOTTOM 4-ITEM FEATURE HIGHLIGHTS STRIP (Matching user mockup)
           ========================================================================= */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-20px" }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="bg-white/80 backdrop-blur-sm rounded-2xl border border-slate-150 p-4 sm:p-5 shadow-sm"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 divide-y sm:divide-y-0 sm:divide-x divide-slate-100">
            {bottomFeatures.map((item, idx) => (
              <div key={idx} className={`flex items-center gap-3.5 ${idx !== 0 ? 'pt-3 sm:pt-0 sm:pl-4 lg:pl-6' : ''}`}>
                <div className="w-10 h-10 rounded-xl bg-purple-50/80 border border-purple-100/60 flex items-center justify-center flex-shrink-0">
                  {item.icon}
                </div>
                <div>
                  <h4 className="text-xs sm:text-sm font-bold text-slate-900 leading-snug">
                    {item.title}
                  </h4>
                  <p className="text-[11px] text-slate-500 leading-tight mt-0.5">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
}
