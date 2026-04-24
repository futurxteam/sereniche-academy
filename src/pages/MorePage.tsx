import React, { useRef, useEffect } from 'react';
import { motion, useInView, useMotionValue, useTransform, animate } from 'motion/react';
import { 
  Building2, 
  Stethoscope, 
  Users, 
  Clock, 
  HeartHandshake, 
  FileCheck,
  TrendingUp,
  ArrowRight,
  ShieldCheck,
  Triangle,
  MonitorPlay,
  Target,
  Brain,
  Quote,
  XCircle,
  Lightbulb,
  CheckCircle2,
  Shield
} from 'lucide-react';

const Counter = ({ from, to, duration = 2, suffix = "" }: { from: number, to: number, duration?: number, suffix?: string }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });
  const count = useMotionValue(from);
  const rounded = useTransform(count, (latest) => Math.round(latest).toLocaleString() + suffix);

  useEffect(() => {
    if (inView) {
      animate(count, to, { duration: duration, ease: "easeOut" });
    }
  }, [inView, count, to, duration]);

  return <motion.span ref={ref}>{rounded}</motion.span>;
};

// VideoSection
const VideoSection = ({ onNavigate }: { onNavigate?: (page: string) => void }) => {
  return (
    <section className="relative z-20 pt-16 pb-8 bg-white overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="relative rounded-[24px] overflow-hidden shadow-[0_20px_50px_rgba(124,58,237,0.15)] ring-1 ring-purple-500/20 aspect-[16/9] md:aspect-[21/9] group cursor-pointer border border-white/50 bg-gray-900"
        >
          <img src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=2000" alt="Video thumbnail" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 relative z-0 opacity-80" />
          
          <div className="absolute inset-0 z-10" style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.3) 100%)' }} />

          <div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center z-20">
            <div className="w-20 h-20 md:w-24 md:h-24 bg-white/20 backdrop-blur-md rounded-full border border-white/50 flex items-center justify-center shadow-[0_8px_32px_rgba(0,0,0,0.2)] mb-8 transition-all duration-500 group-hover:scale-110 group-hover:shadow-[0_0_30px_rgba(124,58,237,0.5)] group-hover:bg-white/30 animate-pulse-glow">
              <Triangle className="w-8 h-8 text-white fill-white rotate-90 ml-2" />
            </div>
            
            <h2 className="text-3xl md:text-5xl font-bold mb-4 text-white tracking-tight">
              Build Real Clinical Confidence
            </h2>
            <p className="text-base md:text-xl text-gray-200 mb-8 max-w-2xl font-medium">
              Learn directly from experts and gain real-world therapy experience.
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-4">
              <button className="bg-gradient-to-r from-purple-600 to-purple-500 hover:from-purple-500 hover:to-purple-400 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 hover:scale-105 hover:shadow-[0_0_20px_rgba(124,58,237,0.4)] flex items-center gap-2">
                <MonitorPlay className="w-5 h-5" /> Watch Preview
              </button>
              <button 
                onClick={() => {
                  if (onNavigate) {
                    onNavigate('contact');
                  }
                }}
                className="group bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/40 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 hover:scale-105 flex items-center gap-2 cursor-pointer"
              >
                Apply Now <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const TheGapSection = () => {
  const points = [
    "Textbook knowledge, but no real client exposure",
    "No supervised therapy experience",
    "Unprepared for real session complexity",
    "No understanding of psychiatry interface",
    "Early career burnout",
    "No hospital ecosystem exposure"
  ];
  return (
    <section className="relative z-20 py-24 bg-[#F8F7FF]">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-purple-600/5 blur-[150px] rounded-full pointer-events-none" />
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-20px" }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 leading-tight">
              The Gap No One <br/><span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-yellow-500">Talks About</span>
            </h2>
            <p className="text-gray-600 text-lg mb-8 leading-relaxed">
              Psychology education is rich in theory — but there is a major gap between academic learning and real-world clinical readiness.
            </p>
            
            <div className="bg-white border border-gray-100 shadow-sm rounded-2xl p-6 mb-8 relative">
              <Quote className="absolute top-4 right-4 w-8 h-8 text-gray-900/5" />
              <p className="text-xl font-medium text-gray-900 italic">"What we didn’t get — you will."</p>
            </div>

            <div className="flex gap-4 items-start">
              <Target className="w-6 h-6 text-yellow-600 flex-shrink-0 mt-1" />
              <div>
                <h4 className="text-gray-900 font-bold mb-2">Our Mission</h4>
                <p className="text-gray-600 text-sm leading-relaxed">
                  To bridge the gap between academic psychology and clinical practice through a hospital-integrated, psychiatry-guided training system.
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-20px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100 rounded-[32px] p-8 md:p-10"
          >
            <div className="space-y-6">
              {points.map((point, idx) => (
                <div key={idx} className="flex items-start gap-4">
                  <XCircle className="w-6 h-6 text-pink-500/80 flex-shrink-0 mt-0.5" />
                  <span className="text-lg text-gray-700">{point}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const ClinicalEcosystemSection = () => {
  const points = [
    "Weekly Clinical Labs",
    "Therapy Skill Logs",
    "Case Diary Development",
    "Mock Therapy Sessions",
    "Case Exchange Sessions",
    "Daily Supervision Circles",
    "Shadowing Model",
    "Hospital Clinical Exposure",
    "Case Archive Portfolio"
  ];

  return (
    <section className="relative z-20 py-24 bg-white">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-20px" }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold mb-16 text-center text-gray-900"
        >
          Real Clinical Training Ecosystem
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {points.map((point, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-white border border-gray-200 shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_8px_30px_rgba(124,58,237,0.12)] hover:-translate-y-[4px] rounded-2xl p-6 flex items-center gap-4 hover:border-purple-400 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-full bg-purple-50 flex items-center justify-center flex-shrink-0">
                <Lightbulb className="w-6 h-6 text-yellow-600" />
              </div>
              <span className="text-gray-900 font-medium text-lg">{point}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const StatsSection = () => {
  return (
    <section className="relative z-20 pt-24 pb-16 bg-white border-t border-gray-100">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4 lg:gap-8 divide-x-0 md:divide-x divide-gray-100">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-center md:px-4"
          >
            <div className="text-4xl md:text-5xl font-bold mb-3 text-gray-900"><Counter from={0} to={10000} suffix="+" /></div>
            <div className="text-gray-500 text-sm font-medium uppercase tracking-wider">Students</div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-center md:px-4"
          >
            <div className="text-4xl md:text-5xl font-bold mb-3 text-gray-900"><Counter from={0} to={50000} suffix="+" /></div>
            <div className="text-gray-500 text-sm font-medium uppercase tracking-wider">Learning Minutes</div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-center md:px-4 mt-8 md:mt-0"
          >
            <div className="text-4xl md:text-5xl font-bold mb-3 text-gray-900"><Counter from={0} to={40000} suffix="+" /></div>
            <div className="text-gray-500 text-sm font-medium uppercase tracking-wider">Completed</div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-center md:px-4 mt-8 md:mt-0"
          >
            <div className="text-4xl md:text-5xl font-bold mb-3 text-gray-900"><Counter from={0} to={88} suffix="%" /></div>
            <div className="text-gray-500 text-sm font-medium uppercase tracking-wider">Success Rate</div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const EligibilityAndReceiveSection = () => {
  const eligibility = [
    "BA / BSc Psychology graduates",
    "MA / MSc Psychology graduates",
    "Counselling / Applied Psychology degrees",
    "Final-year students",
    "Professionals transitioning into therapy"
  ];

  const receive = [
    "Program Certificate",
    "Clinical Portfolio & Case Archive",
    "Therapy Skill Logs",
    "Letter of Recommendation (Top performers)",
    "Placement Support"
  ];

  return (
    <section className="relative z-20 pt-32 pb-24 bg-gradient-to-b from-white to-purple-50/50">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 tracking-tight"
          >
            Eligibility & Program Benefits
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-gray-500 text-lg max-w-2xl mx-auto"
          >
            Understand who this program is for and what you will gain from it.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Who Can Apply */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
            className="bg-white border border-purple-100 rounded-[32px] p-10 lg:p-12 shadow-[0_8px_30px_rgba(0,0,0,0.04)] hover:bg-purple-50/50 transition-colors duration-500"
          >
            <h3 className="text-3xl font-bold text-gray-900 mb-10">Who Can Apply</h3>
            <div className="space-y-8">
              {eligibility.map((point, idx) => (
                <div key={idx} className="flex items-center gap-5 group">
                  <div className="w-10 h-10 rounded-full bg-purple-50 flex items-center justify-center flex-shrink-0 group-hover:scale-110 group-hover:bg-purple-100 transition-all duration-300">
                    <CheckCircle2 className="w-5 h-5 text-purple-600" />
                  </div>
                  <span className="text-xl text-gray-700 font-medium">{point}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* What You Will Receive */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative bg-white border border-purple-100 rounded-[32px] p-10 lg:p-12 shadow-[0_8px_30px_rgba(0,0,0,0.04)] overflow-hidden"
          >
            {/* Subtle gold accent edge check */}
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-yellow-300 via-yellow-400 to-yellow-500 opacity-80" />
            
            <h3 className="text-3xl font-bold text-gray-900 mb-10">What You Will Receive</h3>
            <div className="space-y-8 relative z-10">
              {receive.map((point, idx) => {
                // Determine if we need bold text for highlight effect
                const isHighlight = point.includes("Certificate") || point.includes("Portfolio") || point.includes("Letter") || point.includes("Placement");
                return (
                  <div key={idx} className="flex items-center gap-5 group">
                    <div className="w-10 h-10 rounded-full bg-yellow-50 flex items-center justify-center flex-shrink-0 group-hover:scale-110 group-hover:bg-yellow-100 transition-all duration-300 shadow-[0_0_15px_rgba(250,204,21,0.2)]">
                      <Shield className="w-5 h-5 text-yellow-600" />
                    </div>
                    <span className={`text-xl text-gray-700 ${isHighlight ? 'font-bold text-gray-900' : 'font-medium'}`}>
                      {point}
                    </span>
                  </div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default function MorePage({ onNavigate }: { onNavigate?: (page: string) => void }) {
  return (
    <div className="pt-32 pb-0 bg-white">
      <VideoSection onNavigate={onNavigate} />
      <TheGapSection />
      <ClinicalEcosystemSection />
      <EligibilityAndReceiveSection />
      <StatsSection />

    </div>
  );
}
