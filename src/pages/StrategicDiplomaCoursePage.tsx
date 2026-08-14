import React, { useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { FiClock, FiCalendar, FiCheckCircle, FiMonitor, FiPhoneCall, FiShield, FiHeart, FiArrowLeft, FiArrowRight, FiBookOpen } from 'react-icons/fi';
import { FaGraduationCap, FaBrain, FaChild, FaSchool, FaHandshake, FaFileAlt } from 'react-icons/fa';

export default function StrategicDiplomaCoursePage({ onNavigate }: { onNavigate?: (page: string) => void }) {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
    if (onNavigate) {
      onNavigate('courses');
    }
  }, [onNavigate]);

  const modules = [
    { title: "Child & Adolescent Development", icon: <FaChild className="w-8 h-8" /> },
    { title: "Learning, Behaviour & Neurodiversity", icon: <FaBrain className="w-8 h-8" /> },
    { title: "Counselling and Interventions for Children & Adolescents", icon: <FiHeart className="w-8 h-8" /> },
    { title: "Foundations of School Counselling", icon: <FaGraduationCap className="w-8 h-8" /> },
    { title: "Understanding Schools as Systems", icon: <FaSchool className="w-8 h-8" /> },
    { title: "Collaboration and Consultation", icon: <FaHandshake className="w-8 h-8" /> },
    { title: "Designing Preventing and Promotive Mental Health Interventions", icon: <FiShield className="w-8 h-8" /> },
    { title: "Assessment, Documentation and Ethical Practice", icon: <FaFileAlt className="w-8 h-8" /> },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-32 pb-24 bg-gray-50/30"
    >
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Back Link */}
        <Link
          to="/courses"
          className="inline-flex items-center gap-2 text-gray-500 hover:text-purple-600 transition-colors mb-8 group font-medium"
        >
          <FiArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
          Back to Courses
        </Link>

        <div className="bg-white border border-gray-100 rounded-[32px] overflow-hidden shadow-[0_8px_30px_rgba(124,58,237,0.06)]">
          
          {/* Hero Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2">
            
            {/* Left Content (Text) */}
            <div className="p-8 lg:p-16 flex flex-col justify-center order-2 lg:order-1 relative z-10 bg-white">
              <div className="flex flex-wrap items-center gap-3 mb-6">
                <span className="inline-flex items-center gap-1.5 bg-purple-600 text-white px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider shadow-sm shadow-purple-600/30">
                  <FiMonitor className="w-4 h-4" /> ONLINE PROGRAMME
                </span>
                <span className="inline-flex items-center gap-1.5 bg-yellow-100 text-yellow-800 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider">
                  <FiClock className="w-4 h-4" /> 03 MONTHS
                </span>
              </div>
              
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-[1.1] mb-6 tracking-tight">
                Strategic Diploma in <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-purple-400">School Counselling</span>
              </h1>
              
              <p className="text-xl text-gray-500 font-medium mb-10 max-w-lg">
                Finishing School for School Counsellors
              </p>

              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
                <button
                  onClick={() => navigate('/contact')}
                  className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 shadow-[0_10px_20px_rgba(124,58,237,0.2)] hover:-translate-y-1 hover:shadow-[0_15px_30px_rgba(124,58,237,0.4)] flex items-center justify-center gap-2 group w-full sm:w-auto"
                >
                  Enquire Now
                  <FiArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
                <a href="#training-structure" className="px-8 py-4 text-gray-600 font-medium hover:text-purple-600 transition-colors hidden sm:block">
                  View Details ↓
                </a>
              </div>
            </div>
            
            {/* Right Image / Poster */}
            <div className="relative order-1 lg:order-2 h-[300px] sm:h-[400px] lg:h-auto overflow-hidden bg-purple-50">
              <img
                src="/course-finishing school-online.jpg"
                alt="Strategic Diploma in School Counselling"
                className="w-full h-full object-cover object-center lg:object-top"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent lg:bg-gradient-to-l lg:from-transparent lg:to-white opacity-90" />
            </div>
          </div>
        </div>

        {/* Training Structure (Stats Cards) */}
        <div id="training-structure" className="mt-16 sm:mt-24">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Training Structure</h2>
            <p className="text-gray-500 text-lg">Intensive, focused, and practical training for the modern school counsellor.</p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white rounded-3xl p-8 border border-purple-100 shadow-[0_8px_30px_rgba(124,58,237,0.04)] hover:-translate-y-1 transition-transform group text-center relative overflow-hidden">
               <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-purple-500 to-purple-300 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500" />
               <div className="w-16 h-16 bg-purple-50 rounded-2xl flex items-center justify-center mx-auto mb-6 text-purple-600 group-hover:scale-110 transition-transform">
                 <FiBookOpen className="w-8 h-8" />
               </div>
               <h3 className="text-4xl font-bold text-gray-900 mb-2">40</h3>
               <p className="text-gray-500 font-bold uppercase tracking-wider text-sm">Hours Total Training</p>
            </div>
            
            <div className="bg-purple-600 rounded-3xl p-8 shadow-[0_10px_30px_rgba(124,58,237,0.3)] hover:-translate-y-1 transition-transform group text-center relative overflow-hidden text-white">
               <div className="absolute top-0 right-0 p-4 opacity-10">
                 <FiMonitor className="w-32 h-32" />
               </div>
               <div className="w-16 h-16 bg-white/20 backdrop-blur-md rounded-2xl flex items-center justify-center mx-auto mb-6 text-white group-hover:scale-110 transition-transform relative z-10">
                 <FiMonitor className="w-8 h-8" />
               </div>
               <h3 className="text-4xl font-bold mb-2 relative z-10">35</h3>
               <p className="text-purple-100 font-bold uppercase tracking-wider text-sm relative z-10">Hours Online Sessions</p>
            </div>
            
            <div className="bg-white rounded-3xl p-8 border border-yellow-200 shadow-[0_8px_30px_rgba(234,179,8,0.06)] hover:-translate-y-1 transition-transform group text-center relative overflow-hidden">
               <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-yellow-400 to-yellow-200 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500" />
               <div className="w-16 h-16 bg-yellow-50 rounded-2xl flex items-center justify-center mx-auto mb-6 text-yellow-600 group-hover:scale-110 transition-transform">
                 <FiCalendar className="w-8 h-8" />
               </div>
               <h3 className="text-4xl font-bold text-gray-900 mb-2">05</h3>
               <p className="text-gray-500 font-bold uppercase tracking-wider text-sm">Hours Practical School</p>
            </div>
            
            <div className="bg-white rounded-3xl p-8 border border-purple-100 shadow-[0_8px_30px_rgba(124,58,237,0.04)] hover:-translate-y-1 transition-transform group text-center relative overflow-hidden">
               <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-purple-500 to-purple-300 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500" />
               <div className="w-16 h-16 bg-purple-50 rounded-2xl flex items-center justify-center mx-auto mb-6 text-purple-600 group-hover:scale-110 transition-transform">
                 <FiCheckCircle className="w-8 h-8" />
               </div>
               <h3 className="text-xl font-bold text-gray-900 mb-2 mt-4">Mini Project</h3>
               <p className="text-gray-500 font-bold uppercase tracking-wider text-sm">Completion</p>
            </div>
          </div>
        </div>

        {/* What You Will Learn (Modules) */}
        <div className="mt-24">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">What You Will Learn</h2>
            <p className="text-gray-500 text-lg max-w-2xl mx-auto">Master the core competencies required to be an effective, evidence-based school counsellor.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {modules.map((module, idx) => (
              <div 
                key={idx} 
                className="bg-white p-6 rounded-[24px] border border-gray-100 shadow-sm hover:shadow-[0_15px_30px_rgba(124,58,237,0.08)] hover:border-purple-200 transition-all duration-300 group flex flex-col h-full"
              >
                <div className="w-14 h-14 rounded-2xl bg-gray-50 border border-gray-100 flex items-center justify-center text-gray-600 mb-5 group-hover:bg-purple-600 group-hover:text-white group-hover:border-purple-600 transition-colors duration-300 shadow-inner">
                  {module.icon}
                </div>
                <h3 className="text-lg font-bold text-gray-900 group-hover:text-purple-700 transition-colors flex-grow">
                  {module.title}
                </h3>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Info Section (Eligibility & Admission) */}
        <div className="mt-24 grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Eligibility */}
          <div className="bg-gray-50 border border-gray-200 rounded-[32px] p-10 flex flex-col items-center text-center justify-center relative overflow-hidden group">
            <div className="w-20 h-20 rounded-full bg-white shadow-md flex items-center justify-center text-purple-600 mb-6">
              <FaGraduationCap className="w-10 h-10" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Eligibility</h3>
            <p className="text-lg text-gray-600 font-medium max-w-sm">
              Candidates from <strong className="text-gray-900">Psychology</strong> or <strong className="text-gray-900">Social Work</strong> background.
            </p>
          </div>

          {/* Admission */}
          <div className="bg-purple-900 rounded-[32px] p-10 flex flex-col items-center text-center justify-center text-white relative overflow-hidden group shadow-[0_15px_40px_rgba(88,28,135,0.4)]">
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
            <div className="w-20 h-20 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center text-yellow-400 mb-6 relative z-10 border border-white/20">
              <FiPhoneCall className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-bold mb-4 relative z-10">Admission Open</h3>
            <p className="text-purple-200 mb-6 relative z-10">Get in touch with our admission team</p>
            <a 
              href="tel:+919567670731" 
              className="text-3xl sm:text-4xl font-bold text-white tracking-tight hover:text-yellow-400 transition-colors relative z-10"
            >
              +91 95676 70731
            </a>
          </div>

        </div>

      </div>
    </motion.div>
  );
}
