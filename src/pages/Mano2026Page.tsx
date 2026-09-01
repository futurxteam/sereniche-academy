import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { FaFilePdf, FaArrowRight, FaBookOpen, FaUserMd, FaUsers, FaStethoscope, FaBrain } from 'react-icons/fa';
import { MdOutlineTopic } from 'react-icons/md';

const pdfResources = [
  {
    title: 'Workshop Report',
    filename: 'Workshop_Report_SLD.pdf',
    category: 'Workshop',
    icon: FaBookOpen
  },
  {
    title: 'Dr. Benzir Hussain',
    filename: 'Dr_Benzir_Hussain.pdf',
    category: 'Speaker Profile',
    icon: FaUserMd
  },
  {
    title: 'Miqdad Sulaiman',
    filename: 'Miqdad_Sulaiman.pdf',
    category: 'Speaker Profile',
    icon: FaUserMd
  },
  {
    title: 'M. Saifuneesa',
    filename: 'M_Saifuneesa.pdf',
    category: 'Speaker Profile',
    icon: FaUserMd
  },
  {
    title: 'Dr. Mohammed Sadik',
    filename: 'Dr_Mohammed_Sadik.pdf',
    category: 'Speaker Profile',
    icon: FaUserMd
  },
  {
    title: 'Panel Report — Business Psychology',
    filename: 'Panel_Report_Business_Psychology.pdf',
    category: 'Panel Discussion',
    icon: FaUsers
  },
  {
    title: 'How Psychotherapy Is Evolving — Panel',
    filename: 'How Psychotherapy Is Evolving - Panel Discussion.pdf',
    category: 'Panel Discussion',
    icon: FaUsers
  },
  {
    title: 'Mental Healthcare Model Summary',
    filename: 'Mental_Healthcare_Kerala_Model_Summary.pdf',
    category: 'Healthcare Model',
    icon: FaStethoscope
  },
  {
    title: 'Research in Psychology Lecture Summary',
    filename: 'Research_in_Psychology_Lecture_Summary.pdf',
    category: 'Lecture Summary',
    icon: FaBrain
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.16, 1, 0.3, 1]
    }
  }
};

const manoLogos = [
  '/mano1.png',
  '/mano2.png',
  '/mano3.png',
  '/mano4.png',
  '/mano5.png'
];

export default function Mano2026Page() {
  const [currentLogoIndex, setCurrentLogoIndex] = useState(0);

  useEffect(() => {
    window.scrollTo(0, 0);

    const interval = setInterval(() => {
      setCurrentLogoIndex((prev) => (prev + 1) % manoLogos.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="pt-32 pb-32 min-h-screen bg-[#FFFDF7] relative z-10 overflow-hidden font-sans">

      {/* =========================================
          BACKGROUND GLOWS (Very Subtle Purple + Gold)
      ========================================= */}
      <div className="absolute top-[5%] left-[5%] w-[600px] h-[600px] bg-[#6C3FC7]/[0.03] blur-[100px] rounded-full pointer-events-none" />
      <div className="absolute top-[20%] right-[-10%] w-[700px] h-[700px] bg-[#F4C430]/[0.04] blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-[5%] left-[20%] w-[800px] h-[800px] bg-[#8B5CF6]/[0.02] blur-[150px] rounded-full pointer-events-none" />

      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 relative z-20">

        {/* =========================================
            HERO / INTRO SECTION 
        ========================================= */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mb-24 flex flex-col items-center text-center"
        >
          {/* Eyebrow */}
          <div className="inline-block border border-[#F4C430]/50 bg-[#FFD84D]/10 text-[#6C3FC7] px-5 py-2 rounded-full text-xs md:text-sm font-bold tracking-[0.2em] uppercase mb-8 shadow-sm backdrop-blur-sm">
            MANO • KERALA PSYCHOLOGY CONCLAVE • 2026
          </div>

          {/* Heading and Logo */}
          <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-10 mb-12">
            <h1
              className="text-6xl md:text-7xl lg:text-[5.5rem] font-bold text-[#6C3FC7] tracking-tight leading-[0.9] relative inline-block"
              style={{ fontFamily: 'Georgia, "Times New Roman", serif' }}
            >
              MANO 2026
              {/* Subtle Golden Accent */}
              <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-1/3 h-1.5 bg-gradient-to-r from-transparent via-[#F4C430] to-transparent rounded-full opacity-70" />
            </h1>

            <div className="relative w-32 h-16 md:w-48 md:h-24 flex items-center justify-center flex-shrink-0">
              <AnimatePresence>
                <motion.img
                  key={currentLogoIndex}
                  src={manoLogos[currentLogoIndex]}
                  alt="MANO Logo"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5 }}
                  className="absolute inset-0 w-full h-full object-contain"
                />
              </AnimatePresence>
            </div>
          </div>

          {/* Premium Intro Card */}
          <div className="max-w-4xl w-full bg-white rounded-[1.5rem] p-8 md:p-12 shadow-[0_4px_30px_rgba(108,63,199,0.06)] border border-[#6C3FC7]/10 relative overflow-hidden text-left">
            {/* Golden Top Accent Line */}
            <div className="absolute top-0 left-0 w-full h-1.5 bg-[#F4C430]" />

            <div className="relative z-10 space-y-8 text-[#374151] text-[1.1rem] md:text-xl leading-[1.8] font-medium">
              <p>
                MANO: Kerala Psychology Conclave is a 2-Day Residential Conclave organized by <span className="font-bold text-[#6C3FC7]">Sereniche Academy</span> in association with the <span className="font-bold text-[#6C3FC7]">PG Department of Psychology</span>, <span className="font-bold text-[#6C3FC7]">KMM College of Arts and Science</span>.
              </p>
              <p>
                The conclave bridges the gap between academic learning and real-world professional psychology practice, bringing together 250+ psychology students, educators, researchers, clinicians, counsellors, and industry professionals from across Kerala.
              </p>
            </div>
          </div>
        </motion.div>

        {/* =========================================
            RESOURCE SECTION HEADER
        ========================================= */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mb-16 text-center flex flex-col items-center"
        >
          <h2 className="text-4xl md:text-5xl font-black text-[#6C3FC7] tracking-tight leading-none mb-4">
            MANO Resources
          </h2>
          {/* Golden underline */}
          <div className="h-1 w-20 bg-[#F4C430] rounded-full mb-6" />
          <p className="text-[#8B5CF6] font-bold tracking-widest text-sm uppercase">
            SESSIONS • WORKSHOPS • PANELS • RESEARCH
          </p>
        </motion.div>

        {/* =========================================
            PDF CARDS GRID
        ========================================= */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {pdfResources.map((resource, index) => {
            const CategoryIcon = resource.icon;

            return (
              <motion.div key={index} variants={cardVariants} className="h-full">
                <div className="bg-white rounded-[24px] p-8 h-full flex flex-col border border-[#6C3FC7]/15 shadow-[0_4px_15px_rgba(108,63,199,0.03)] hover:shadow-[0_15px_35px_rgba(108,63,199,0.08)] hover:-translate-y-1 transition-all duration-300 group relative overflow-hidden cursor-pointer group/card">

                  {/* Decorative golden accent appearing on hover */}
                  <div className={`absolute top-0 left-0 w-full h-1 bg-transparent group-hover:bg-[#F4C430] transition-colors duration-300`} />

                  {/* Header: Icon & Badge */}
                  <div className="flex items-start justify-between mb-8 relative z-10">
                    <div className="relative">
                      {/* Premium Icon Container - Very light purple */}
                      <div className="w-16 h-16 bg-[#6C3FC7]/[0.05] border border-[#6C3FC7]/10 text-[#6C3FC7] rounded-2xl flex items-center justify-center group-hover:scale-105 transition-transform duration-300 relative z-10">
                        <FaFilePdf className="w-8 h-8" />
                      </div>
                    </div>

                    {/* Small gold PDF badge */}
                    <span className="bg-[#FFD84D]/20 text-[#B8860B] text-xs font-black px-3 py-1.5 rounded-full border border-[#F4C430]/30 tracking-wide shadow-sm flex items-center">
                      PDF
                    </span>
                  </div>

                  {/* Content area */}
                  <div className="mb-6 flex-grow relative z-10">
                    <h3 className="text-[1.35rem] font-bold text-[#111827] leading-tight mb-2 group-hover:text-[#6C3FC7] transition-colors duration-300">
                      {resource.title}
                    </h3>
                    <div className="flex items-center gap-1.5 text-[#8B5CF6] text-xs font-bold uppercase tracking-widest opacity-80">
                      {resource.category} • MANO 2026
                    </div>
                  </div>

                  {/* Divider */}
                  <div className="h-px w-full bg-[#6C3FC7]/10 mb-6 relative z-10" />

                  {/* Action Button */}
                  <a
                    href={`/${resource.filename}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-[#6C3FC7] text-white px-5 py-3.5 rounded-xl font-bold text-sm flex items-center justify-between w-full relative z-10 overflow-hidden group/btn hover:bg-[#5833A2] transition-colors duration-300 border border-transparent hover:border-[#F4C430]/50"
                  >
                    {/* Golden subtle hover glow inside button */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#F4C430]/10 to-transparent translate-x-[-100%] group-hover/btn:translate-x-[100%] transition-transform duration-700 ease-out" />

                    <span className="relative z-10">View Session</span>
                    <FaArrowRight className="w-4 h-4 text-[#FFD84D] group-hover/btn:translate-x-1 transition-transform duration-300 relative z-10" />
                  </a>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </div>
  );
}
