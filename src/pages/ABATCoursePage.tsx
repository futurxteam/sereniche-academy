import React, { useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { FiClock, FiCalendar, FiCheckCircle, FiMonitor, FiPhoneCall, FiShield, FiHeart, FiArrowLeft, FiArrowRight, FiBookOpen, FiAward, FiAlertCircle } from 'react-icons/fi';
import { FaGraduationCap, FaBrain, FaChild, FaSchool, FaHandshake, FaFileAlt } from 'react-icons/fa';

export default function ABATCoursePage({ onNavigate }: { onNavigate?: (page: string) => void }) {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
    if (onNavigate) {
      onNavigate('courses');
    }
  }, [onNavigate]);

  const modules = [
    { title: "Core principles and theories of Applied Behaviour Analysis (ABA)", icon: <FaBrain className="w-8 h-8" /> },
    { title: "Behaviour assessment techniques and functional behaviour analysis", icon: <FaFileAlt className="w-8 h-8" /> },
    { title: "Data collection methods and progress monitoring", icon: <FiMonitor className="w-8 h-8" /> },
    { title: "Designing and implementing individualised behaviour intervention plans", icon: <FaHandshake className="w-8 h-8" /> },
    { title: "Ethical standards and professional responsibilities in behaviour analysis", icon: <FiShield className="w-8 h-8" /> },
    { title: "Role of the ABAT and working effectively under supervision", icon: <FiHeart className="w-8 h-8" /> },
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

        {/* Information Notice */}
        <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-8 rounded-r-lg shadow-sm">
          <div className="flex">
            <div className="flex-shrink-0">
              <FiAlertCircle className="h-5 w-5 text-yellow-600" />
            </div>
            <div className="ml-3">
              <p className="text-sm text-yellow-800 font-medium">
                Sereniche Academy is currently in the process of obtaining QABA Approved Coursework Provider status. Our programme is designed in full alignment with QABA standards and competency requirements. Students who enrol now will receive their Certificate of Completion upon QABA approval being granted.
              </p>
            </div>
          </div>
        </div>

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
                  <FiClock className="w-4 h-4" /> 2-3 MONTHS
                </span>
              </div>
              
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-[1.1] mb-6 tracking-tight">
                Applied Behaviour <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-purple-400">Analysis Technician</span><br/>
                (ABAT)
              </h1>
              
              <p className="text-xl text-gray-500 font-medium mb-10 max-w-lg">
                An internationally recognised certification in Applied Behaviour Analysis.
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
                src="/course-abat.jpg"
                alt="Applied Behaviour Analysis Technician (ABAT)"
                className="w-full h-full object-cover object-center lg:object-top"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent lg:bg-gradient-to-l lg:from-transparent lg:to-white opacity-90" />
            </div>
          </div>
        </div>

        {/* About the Programme */}
        <div className="mt-16 sm:mt-24">
           <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">About The Programme</h2>
          </div>
          <div className="bg-white rounded-3xl p-8 lg:p-12 border border-purple-100 shadow-[0_8px_30px_rgba(124,58,237,0.04)] text-gray-600 text-lg leading-relaxed space-y-6">
            <p>
              The ABAT (Applied Behaviour Analysis Technician) certification, awarded by the QABA Board (USA), is an internationally recognised entry-level credential for professionals working in Applied Behaviour Analysis and autism services.
            </p>
            <p>
              It qualifies holders to implement evidence-based behaviour interventions under the supervision of a certified professional in clinical, educational, and community settings.
            </p>
            <p>
              Sereniche Academy is part of a complete, integrated mental health and education ecosystem in Kerala, India, where education, clinical practice, and professional training operate under a single umbrella.
            </p>
            <p>
              Our ecosystem comprises schools, undergraduate and postgraduate colleges, and a hospital with a dedicated Psychiatry Department. This foundation connects academic learning directly with real clinical environments, supervised fieldwork, professional mentorship, and hands-on experience.
            </p>
            <p>
              Our ABAT programme is being developed in full alignment with QABA's competency standards by qualified behaviour analysts, as part of our ongoing application to become a QABA Approved Coursework Provider.
            </p>
          </div>
        </div>

        {/* Training Structure (Stats Cards) */}
        <div id="training-structure" className="mt-16 sm:mt-24">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Programme Details</h2>
            <p className="text-gray-500 text-lg">Comprehensive curriculum aligned with QABA standards.</p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white rounded-3xl p-8 border border-purple-100 shadow-[0_8px_30px_rgba(124,58,237,0.04)] hover:-translate-y-1 transition-transform group text-center relative overflow-hidden">
               <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-purple-500 to-purple-300 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500" />
               <div className="w-16 h-16 bg-purple-50 rounded-2xl flex items-center justify-center mx-auto mb-6 text-purple-600 group-hover:scale-110 transition-transform">
                 <FiBookOpen className="w-8 h-8" />
               </div>
               <h3 className="text-4xl font-bold text-gray-900 mb-2">40</h3>
               <p className="text-gray-500 font-bold uppercase tracking-wider text-sm">Hours Coursework</p>
            </div>
            
            <div className="bg-white rounded-3xl p-8 border border-yellow-200 shadow-[0_8px_30px_rgba(234,179,8,0.06)] hover:-translate-y-1 transition-transform group text-center relative overflow-hidden">
               <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-yellow-400 to-yellow-200 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500" />
               <div className="w-16 h-16 bg-yellow-50 rounded-2xl flex items-center justify-center mx-auto mb-6 text-yellow-600 group-hover:scale-110 transition-transform">
                 <FiCalendar className="w-8 h-8" />
               </div>
               <h3 className="text-4xl font-bold text-gray-900 mb-2">15</h3>
               <p className="text-gray-500 font-bold uppercase tracking-wider text-sm">Hours Supervised Fieldwork</p>
            </div>

            <div className="bg-white rounded-3xl p-8 border border-purple-100 shadow-[0_8px_30px_rgba(124,58,237,0.04)] hover:-translate-y-1 transition-transform group text-center relative overflow-hidden">
               <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-purple-500 to-purple-300 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500" />
               <div className="w-16 h-16 bg-purple-50 rounded-2xl flex items-center justify-center mx-auto mb-6 text-purple-600 group-hover:scale-110 transition-transform">
                 <FiCheckCircle className="w-8 h-8" />
               </div>
               <h3 className="text-xl font-bold text-gray-900 mb-2 mt-4">English</h3>
               <p className="text-gray-500 font-bold uppercase tracking-wider text-sm">Language</p>
            </div>
            
            <div className="bg-purple-600 rounded-3xl p-8 shadow-[0_10px_30px_rgba(124,58,237,0.3)] hover:-translate-y-1 transition-transform group text-center relative overflow-hidden text-white">
               <div className="absolute top-0 right-0 p-4 opacity-10">
                 <FiAward className="w-32 h-32" />
               </div>
               <div className="w-16 h-16 bg-white/20 backdrop-blur-md rounded-2xl flex items-center justify-center mx-auto mb-6 text-white group-hover:scale-110 transition-transform relative z-10">
                 <FiAward className="w-8 h-8" />
               </div>
               <h3 className="text-xl font-bold mb-2 relative z-10 mt-4">QABA Board, USA</h3>
               <p className="text-purple-100 font-bold uppercase tracking-wider text-sm relative z-10">Certification Body</p>
            </div>
          </div>
        </div>

        {/* What You Will Learn (Modules) */}
        <div className="mt-24">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">What You Will Learn</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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

        {/* Pathway to Certification & Policies Grid */}
        <div className="mt-24 grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Pathway */}
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Pathway to Certification</h2>
            <div className="space-y-6 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-purple-200 before:to-transparent">
              {[
                "Eligibility – Be at least 18 years old with a Plus Two (+2) or equivalent qualification.",
                "Complete Coursework – Finish the 40-hour QABA-aligned ABAT programme with Sereniche Academy.",
                "Supervised Fieldwork – Complete 15 hours of supervised fieldwork. 1 hour of supervision is required for every 10 hours of independent fieldwork. Coursework must be enrolled in before fieldwork begins.",
                "Criminal Background Check – Conducted directly by the QABA Board.",
                "Pass the Exam – Register for and pass the proctored ABAT certification examination via the QABA portal.",
                "Ethics Agreement – Agree to the QABA Code of Ethics.",
                "Credential Issued – Your ABAT credential will be listed on the public QABA registry upon approval.",
                "Renewal – Renew your credential every two years as per QABA requirements."
              ].map((step, index) => (
                <div key={index} className="relative flex items-start">
                  <div className="absolute left-0 md:left-1/2 -ml-2 md:-ml-3 w-4 h-4 md:w-6 md:h-6 rounded-full border-4 border-white bg-purple-600 shadow" />
                  <div className="ml-10 md:ml-0 md:w-1/2 md:pr-12 md:text-right">
                    {index % 2 === 0 ? (
                       <div className="bg-white p-5 rounded-2xl border border-gray-100 shadow-sm relative md:mr-10">
                           <p className="text-gray-700 font-medium">{step}</p>
                       </div>
                    ) : (
                        <div className="hidden md:block"></div>
                    )}
                  </div>
                  <div className="hidden md:block md:w-1/2 md:pl-12">
                    {index % 2 !== 0 ? (
                       <div className="bg-white p-5 rounded-2xl border border-gray-100 shadow-sm relative md:ml-10">
                           <p className="text-gray-700 font-medium">{step}</p>
                       </div>
                    ) : null}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Policies & Fees */}
          <div className="space-y-8">
            <div className="bg-purple-50 rounded-3xl p-8 border border-purple-100">
               <h3 className="text-2xl font-bold text-gray-900 mb-4">Course Fee</h3>
               <div className="text-4xl font-bold text-purple-700 mb-4">₹28,000</div>
               <div className="bg-white p-4 rounded-xl border border-yellow-200">
                 <p className="text-sm text-gray-700 font-medium">
                   <strong className="text-gray-900">Important:</strong> The QABA Board examination fee is approximately $150 USD and is paid directly by the student to the QABA Board during exam registration. It is NOT included in the ₹28,000 Sereniche Academy course fee.
                 </p>
               </div>
            </div>

            <div className="bg-white rounded-3xl p-8 border border-gray-100 shadow-sm">
               <h3 className="text-2xl font-bold text-gray-900 mb-6">Policies</h3>
               <div className="space-y-6">
                 <div>
                   <h4 className="font-bold text-gray-900 mb-2">Refund & Cancellation Policy</h4>
                   <p className="text-sm text-gray-600">Once enrolment is confirmed and payment is received, the coursework fee of ₹28,000 is strictly non-refundable and non-transferable under any circumstances. The QABA Board examination fee is fully managed by the QABA Board.</p>
                 </div>
                 <div>
                   <h4 className="font-bold text-gray-900 mb-2">Privacy Policy</h4>
                   <p className="text-sm text-gray-600">Student information collected during enrolment is used solely for programme administration and QABA application purposes. All student records are maintained securely for a minimum of 3 years.</p>
                 </div>
                 <div>
                   <h4 className="font-bold text-gray-900 mb-2">Certificate Issuance</h4>
                   <p className="text-sm text-gray-600">Certificates of Completion are issued to students within 10 business days of successful programme completion.</p>
                 </div>
                 <div>
                   <h4 className="font-bold text-gray-900 mb-2">Fieldwork Policy</h4>
                   <p className="text-sm text-gray-600">Students are responsible for arranging their own fieldwork placement under a qualified QABA-approved supervisor. Sereniche Academy will provide guidance and integrated fieldwork opportunities for an additional fee.</p>
                 </div>
                 <div>
                   <h4 className="font-bold text-gray-900 mb-2">Examination Policy</h4>
                   <p className="text-sm text-gray-600">The ABAT examination is administered by the QABA Board. Students are responsible for independently registering for the examination and paying the fee directly to the QABA Board.</p>
                 </div>
               </div>
            </div>
          </div>
        </div>

        {/* Bottom Info Section (Eligibility & Admission) */}
        <div className="mt-24 grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Eligibility */}
          <div className="bg-gray-50 border border-gray-200 rounded-[32px] p-10 flex flex-col items-center text-center justify-center relative overflow-hidden group">
            <div className="w-20 h-20 rounded-full bg-white shadow-md flex items-center justify-center text-purple-600 mb-6">
              <FaGraduationCap className="w-10 h-10" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Who Can Apply</h3>
            <p className="text-lg text-gray-600 font-medium max-w-sm">
              Minimum Age: <strong className="text-gray-900">18 years</strong>. <br/>
              Minimum Qualification: <strong className="text-gray-900">Bachelor's degree in any discipline</strong> from a recognised university.
            </p>
          </div>

          {/* Admission / Contact */}
          <div className="bg-purple-900 rounded-[32px] p-10 flex flex-col items-center text-center justify-center text-white relative overflow-hidden group shadow-[0_15px_40px_rgba(88,28,135,0.4)]">
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
            <div className="w-20 h-20 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center text-yellow-400 mb-6 relative z-10 border border-white/20">
              <FiPhoneCall className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-bold mb-4 relative z-10">Enquire Now</h3>
            <p className="text-purple-200 mb-6 relative z-10">Get in touch with our admission team</p>
            <a 
              href="tel:+917025740495" 
              className="text-3xl sm:text-4xl font-bold text-white tracking-tight hover:text-yellow-400 transition-colors relative z-10 mb-2"
            >
              +91 7025740495
            </a>
            <a href="mailto:hello@sereniche.com" className="text-purple-200 hover:text-white transition-colors relative z-10">hello@sereniche.com</a>
            <p className="text-sm text-purple-300 mt-4 relative z-10">Mon to Sat, 9:00 AM – 6:00 PM IST</p>
          </div>

        </div>

      </div>
    </motion.div>
  );
}
