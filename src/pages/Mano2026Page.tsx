import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { FaFilePdf, FaArrowRight, FaBookOpen, FaUserMd, FaUsers, FaStethoscope, FaBrain } from 'react-icons/fa';

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
    title: 'How Psychotherapy Is Evolving  Panel',
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
  hidden: { opacity: 0, y: 20 },
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
    }, 2500);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="pt-28 pb-32 min-h-screen bg-[#FDFBF7] text-[#1C2434] relative z-10 font-sans selection:bg-[#2F1B41] selection:text-[#FDFBF7]">
      
      {/* Subtle paper/texture pattern (CSS dot pattern) */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-[0.03]" 
        style={{ backgroundImage: 'radial-gradient(#1C2434 1px, transparent 1px)', backgroundSize: '40px 40px' }}
      ></div>

      <div className="max-w-[1100px] mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
        
        {/* =========================================
            HERO / INTRODUCTION (Dramatic Asymmetrical Layout)
        ========================================= */}
        <div className="relative pt-12 pb-24 md:pt-24 md:pb-32 mb-16 border-b border-[#C4A661]/30">
          
          {/* Subtle Background Motif: Oversized "M" & Neural/Flowing Curve */}
          <div className="absolute top-0 right-0 w-full h-full overflow-hidden pointer-events-none select-none z-0">
             {/* Oversized Abstract "M" */}
             <div 
                className="absolute -top-10 right-[-10%] md:right-[-5%] text-[25rem] md:text-[45rem] text-[#2F1B41] opacity-[0.02] leading-none"
                style={{ fontFamily: 'Georgia, "Times New Roman", serif', fontWeight: 900 }}
             >
                M
             </div>
             
             {/* Custom subtle neural/backwater line art (SVG) */}
             <svg className="absolute inset-0 w-full h-full opacity-40" viewBox="0 0 100 100" preserveAspectRatio="none">
               <path d="M0,50 Q25,20 50,50 T100,50" fill="none" stroke="#C4A661" strokeWidth="0.1" className="opacity-40" />
               <path d="M0,60 Q35,10 60,60 T100,60" fill="none" stroke="#2F1B41" strokeWidth="0.05" className="opacity-30" />
               <path d="M0,40 Q15,80 40,40 T100,40" fill="none" stroke="#C4A661" strokeWidth="0.05" className="opacity-30" />
               <path d="M20,0 Q30,50 80,100" fill="none" stroke="#2F1B41" strokeWidth="0.03" className="opacity-20" />
             </svg>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 relative z-10">
            
            {/* Left: Brand Identity */}
            <div className="lg:col-span-5 flex flex-col justify-center">
               <div className="mb-8">
                 <span className="text-[10px] md:text-xs font-bold tracking-[0.3em] text-[#C4A661] uppercase border-b border-[#C4A661]/30 pb-2 inline-block">
                   KERALA PSYCHOLOGY CONCLAVE
                 </span>
               </div>
               
               <div className="flex items-start">
                 <h1 
                    className="text-[5.5rem] md:text-[8rem] lg:text-[9rem] leading-[0.8] text-[#2F1B41]" 
                    style={{ fontFamily: 'Georgia, "Times New Roman", serif', fontWeight: 700, letterSpacing: '-0.02em' }}
                 >
                   MANO
                 </h1>
                 <div className="ml-2 md:ml-4 mt-2 md:mt-3 text-2xl md:text-3xl lg:text-4xl font-light text-[#4A5568] tracking-[0.3em] [writing-mode:vertical-rl] rotate-180">
                   2026
                 </div>
               </div>
               
               <div className="mt-10">
                 <span className="text-[9px] md:text-[10px] font-bold tracking-[0.25em] text-[#4A5568] uppercase bg-white/50 backdrop-blur-sm px-4 py-2 border border-[#C4A661]/30 shadow-sm">
                   02 DAYS • RESIDENTIAL CONCLAVE
                 </span>
               </div>
            </div>

            {/* Vertical Divider (Hidden on mobile, visible on lg) */}
            <div className="hidden lg:flex lg:col-span-1 justify-center">
               <div className="w-[1px] h-full bg-gradient-to-b from-transparent via-[#C4A661]/50 to-transparent"></div>
            </div>

            {/* Right: Information Panel & Logo */}
            <div className="lg:col-span-6 flex flex-col justify-center border-t border-[#C4A661]/20 lg:border-t-0 pt-10 lg:pt-0">
               
               {/* Logo Top Right */}
               <div className="flex justify-start lg:justify-end mb-12">
                  <div className="h-20 w-40 md:h-28 md:w-56 relative">
                    <AnimatePresence mode="wait">
                      <motion.img
                        key={currentLogoIndex}
                        src={manoLogos[currentLogoIndex]}
                        alt="MANO Logo"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.8 }}
                        className="absolute inset-0 w-full h-full object-contain scale-110"
                      />
                    </AnimatePresence>
                  </div>
               </div>

               {/* Intro Text */}
               <div className="space-y-8 text-[#2D3748] text-lg md:text-xl leading-[1.9] md:leading-[2.1] font-light">
                 <p className="first-letter:text-6xl first-letter:font-bold first-letter:text-[#2F1B41] first-letter:mr-2 first-letter:float-left first-letter:leading-[0.8] first-letter:font-serif">
                   MANO: Kerala Psychology Conclave is a 2-Day Residential Conclave organized by <span className="font-semibold text-[#2F1B41]">Sereniche Academy</span> in association with the <span className="font-semibold text-[#2F1B41]">PG Department of Psychology</span>, <span className="font-semibold text-[#2F1B41]">KMM College of Arts and Science</span>.
                 </p>
                 <p>
                   The conclave bridges the gap between academic learning and real-world professional psychology practice, bringing together 250+ psychology students, educators, researchers, clinicians, counsellors, and industry professionals from across Kerala.
                 </p>
               </div>
               
            </div>

          </div>
        </div>

        {/* =========================================
            RESOURCE SECTION HEADER
        ========================================= */}
        <div className="mb-12 border-l-2 border-[#C4A661] pl-6 md:pl-8 py-2">
          <h2 
            className="text-3xl md:text-[2.5rem] font-bold text-[#2F1B41] leading-tight mb-3" 
            style={{ fontFamily: 'Georgia, "Times New Roman", serif' }}
          >
            MANO Resources
          </h2>
          <p className="text-[10px] md:text-xs font-semibold tracking-[0.25em] uppercase text-[#718096]">
            SESSIONS • WORKSHOPS • PANELS • RESEARCH
          </p>
        </div>

        {/* =========================================
            PDF CARDS GRID
        ========================================= */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {pdfResources.map((resource, index) => {
            const CategoryIcon = resource.icon;

            return (
              <motion.div key={index} variants={cardVariants} className="h-full">
                <a
                  href={`/${resource.filename}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block h-full group"
                >
                  <div className="bg-white h-full p-8 flex flex-col border border-[#E2E8F0] hover:border-[#2F1B41]/30 transition-all duration-500 relative overflow-hidden group-hover:shadow-[0_10px_40px_-10px_rgba(47,27,65,0.1)]">
                    
                    {/* Thin top accent on hover */}
                    <div className="absolute top-0 left-0 w-full h-[2px] bg-transparent group-hover:bg-[#C4A661] transition-colors duration-500" />
                    
                    <div className="flex justify-between items-start mb-6">
                      <div className="text-[10px] font-bold tracking-[0.15em] uppercase text-[#C4A661]">
                        {resource.category}
                      </div>
                      <div className="text-[#A0AEC0] group-hover:text-[#2F1B41] transition-colors duration-300">
                        <FaFilePdf className="w-5 h-5" />
                      </div>
                    </div>

                    <div className="mb-8 flex-grow">
                      <h3 
                        className="text-xl md:text-2xl font-bold text-[#1C2434] leading-snug group-hover:text-[#2F1B41] transition-colors duration-300"
                        style={{ fontFamily: 'Georgia, "Times New Roman", serif' }}
                      >
                        {resource.title}
                      </h3>
                    </div>

                    <div className="flex items-center gap-3 text-xs font-semibold tracking-widest uppercase text-[#718096] group-hover:text-[#2F1B41] transition-colors duration-300">
                      <span>View Document</span>
                      <FaArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform duration-300" />
                    </div>
                  </div>
                </a>
              </motion.div>
            );
          })}
        </motion.div>

      </div>
    </div>
  );
}
