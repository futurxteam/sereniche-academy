/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useEffect, useRef, useState } from 'react';
import { Triangle, ArrowUpRight, Star, GraduationCap, User, Hexagon, Clock, BookOpen, Users, FileText, ArrowRight, ArrowLeft, Headphones, Brain, PenTool, BadgeCheck, BookMarked, Sparkles, Activity, Box, Layers, Circle, Building2, Stethoscope, CheckCircle2, Calendar, MonitorPlay, Mail, Globe, XCircle, Quote, Target, Award, Briefcase, MapPin, ShieldCheck, TrendingUp, HeartHandshake, FileCheck, Lightbulb, Check, Plus, Minus, Menu, X } from 'lucide-react';
import { motion, useMotionValue, useTransform, animate, useInView, useScroll, AnimatePresence } from 'motion/react';
import LiveChat from './components/LiveChat';
import InstructorPage from './pages/InstructorPage';
import CoursesPage from './pages/CoursesPage';
import TestimonialsPage from './pages/TestimonialsPage';
import MorePage from './pages/MorePage';
import ContactPage from './pages/ContactPage';
import { SerenicheLogo } from './components/Logo';

const featuredCourses = [
  {
    title: "Ultimate UI/UX Design Bootcamp",
    slug: "uiux-bootcamp",
    description: "Master the art of web design with our comprehensive course. Learn HTML, CSS, and cutting-edge design principles.",
    rating: 5.0,
    students: "8500+",
    level: "Intermediate",
    instructor: { name: "David Warner", avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=100" },
    price: "$300",
    image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&q=80&w=800",
  },
  {
    title: "Interactive Design Fundamentals",
    slug: "design-fundamentals",
    description: "Master the art of web design with our comprehensive course. Learn HTML, CSS, and cutting-edge design principles.",
    rating: 4.9,
    students: "8500+",
    level: "Intermediate",
    instructor: { name: "Jessica Taylor", avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=100" },
    price: "$300",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=800",
  },
  {
    title: "Creative Web Design Essentials",
    slug: "creative-web",
    description: "Master Figma with industry-leading tactics that will help you complete projects with confidence.",
    rating: 4.8,
    students: "8500+",
    level: "Intermediate",
    instructor: { name: "James Anderson", avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=100" },
    price: "$400",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=800",
  }
];

const FeaturedCourseCard = ({ course, index, onNavigate }: { course: any, index: number, onNavigate: (page: string) => void, key?: React.Key }) => {
  const handleViewCourse = () => {
    const slug = course.slug || course.title.toLowerCase().replace(/[^a-z0-9]+/g, '-');
    window.location.hash = `#${slug}`;
    onNavigate('courses');
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-white backdrop-blur-xl border border-gray-200 rounded-[24px] overflow-hidden flex flex-col hover:-translate-y-2 hover:border-violet-300 hover:shadow-[0_8px_30px_rgba(124,58,237,0.3)] shadow-[0_4px_20px_rgba(0,0,0,0.05)] transition-all duration-500 group h-full cursor-pointer"
      onClick={handleViewCourse}
    >
      <div className="h-48 overflow-hidden relative shrink-0">
        <img 
          src={course.image} 
          alt={course.title} 
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-white to-transparent opacity-90 pointer-events-none" />
      </div>
      
      <div className="p-6 flex flex-col flex-grow relative z-10 -mt-6">
        <h3 className="text-xl font-bold text-gray-900 mb-2 leading-tight drop-shadow-md">{course.title}</h3>
        <p className="text-gray-500 text-sm mb-6 flex-grow line-clamp-2">{course.description}</p>
        
        <div className="flex items-center gap-4 text-xs font-medium text-gray-500 uppercase tracking-wider mb-6">
          <span className="flex items-center gap-1.5"><Users className="w-3.5 h-3.5" /> {course.students}</span>
          <span className="flex items-center gap-1.5"><Activity className="w-3.5 h-3.5" /> {course.level}</span>
        </div>
        
        <div className="flex items-center justify-between pt-4 border-t border-gray-200 mt-auto">
          <div className="flex items-center gap-2">
            <img 
              src={course.instructor.avatar} 
              alt={course.instructor.name} 
              className="w-6 h-6 rounded-full object-cover"
            />
            <span className="text-sm text-gray-600">{course.instructor.name}</span>
          </div>
          <button className="text-sm font-bold text-white bg-purple-600 hover:bg-purple-700 hover:-translate-y-1 hover:shadow-[0_0_15px_rgba(124,58,237,0.6)] transition-all duration-300 flex items-center gap-1 rounded-full px-4 py-2 relative group/btn">
            <span className="relative z-10 flex items-center gap-1">View Details <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" /></span>
          </button>
        </div>
      </div>
    </motion.div>
  );
};

const FeaturedCoursesSection = ({ onNavigate }: { onNavigate: (page: string) => void }) => {
  return (
    <section className="relative pt-24 pb-16 px-4 sm:px-6 lg:px-8 max-w-[1200px] mx-auto z-20 bg-[#F8F7FF] rounded-3xl mt-12 mb-12">
      {/* Noise Texture */}
      <div className="absolute inset-0 opacity-[0.015] pointer-events-none" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E")' }}></div>
      
      {/* Background Glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-[#7C3AED]/10 blur-[120px] rounded-full pointer-events-none" />
      
      {/* Decorative Wireframe Spring */}
      <div className="absolute -bottom-20 -right-20 pointer-events-none z-0 opacity-40 hidden lg:block">
        <svg width="400" height="400" viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg">
          <ellipse cx="200" cy="200" rx="150" ry="60" transform="rotate(-45 200 200)" stroke="#E5E7EB" strokeWidth="4"/>
          <ellipse cx="220" cy="220" rx="150" ry="60" transform="rotate(-45 220 220)" stroke="#E5E7EB" strokeWidth="4"/>
          <ellipse cx="240" cy="240" rx="150" ry="60" transform="rotate(-45 240 240)" stroke="#E5E7EB" strokeWidth="4"/>
          <ellipse cx="260" cy="260" rx="150" ry="60" transform="rotate(-45 260 260)" stroke="#E5E7EB" strokeWidth="4"/>
          <ellipse cx="280" cy="280" rx="150" ry="60" transform="rotate(-45 280 280)" stroke="#E5E7EB" strokeWidth="4"/>
        </svg>
      </div>

      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 relative z-10">
        <div className="text-left max-w-2xl">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="text-4xl md:text-5xl font-bold mb-6 text-gray-900"
          >
            Start Learning<br />With Our Courses
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="text-gray-600 text-lg"
          >
            From critical skills to technical topics, we support your professional development with courses that help you grow and succeed.
          </motion.p>
        </div>
        
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="hidden md:flex items-center gap-4"
        >
          <button className="w-12 h-12 rounded-full border border-gray-300 flex items-center justify-center text-gray-900 hover:bg-gray-100 hover:border-yellow-400 transition-all duration-300 group">
            <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
          </button>
          <button className="w-12 h-12 rounded-full border border-gray-300 flex items-center justify-center text-gray-900 hover:bg-gray-100 hover:border-yellow-400 transition-all duration-300 group">
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </motion.div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10 pb-12">
        {featuredCourses.map((course, index) => (
          <FeaturedCourseCard key={index} course={course} index={index} onNavigate={onNavigate} />
        ))}
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="mt-16 flex justify-center relative z-10"
      >
        <button 
          onClick={() => {
            window.location.hash = ''; // clear hash to just show top of courses page
            onNavigate('courses');
          }}
          className="flex items-center gap-2 bg-white border border-gray-200 hover:bg-gray-50 hover:scale-105 hover:shadow-[0_0_15px_rgba(124,58,237,0.3)] active:scale-95 text-gray-900 px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 group"
        >
          View All Courses
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform text-purple-600" />
        </button>
      </motion.div>
    </section>
  );
};

const CourseCard = ({ image, name, course, hasPlay = false, className = "", index = 0 }: { image: string, name: string, course: string, hasPlay?: boolean, className?: string, index?: number, key?: React.Key }) => {
  return (
    <div className={`w-[240px] h-[320px] flex-shrink-0`}>
      <div 
        className={`relative rounded-[2rem] overflow-hidden w-full h-full shadow-[0_8px_32px_rgba(124,58,237,0.15)] border border-gray-200 bg-white transition-all duration-500 hover:scale-[1.02] hover:border-purple-500/30 hover:shadow-[0_8px_32px_rgba(124,58,237,0.3)] ${className}`}
      >
        <img src={image} alt={name} className="w-full h-full object-cover opacity-90 transition-transform duration-700 hover:scale-110" />
        <div className="absolute inset-0 bg-gradient-to-t from-white via-white/40 to-transparent pointer-events-none" />
        {hasPlay && (
          <div className="absolute top-4 right-4 w-8 h-8 bg-white/80 backdrop-blur-md rounded-full flex items-center justify-center border border-gray-300 shadow-lg transition-transform hover:scale-110 cursor-pointer">
            <Triangle className="w-3 h-3 text-gray-900 fill-white" />
          </div>
        )}
        <div className="absolute bottom-5 left-5 text-gray-900 pointer-events-none">
          <div className="flex items-center gap-2 text-sm font-medium mb-1.5">
            <User className="w-3.5 h-3.5 text-gray-600" />
            {name}
          </div>
          <div className="flex items-center gap-2 text-xs text-gray-500">
            <GraduationCap className="w-3.5 h-3.5" />
            {course}
          </div>
        </div>
      </div>
    </div>
  );
};

const col1 = [
  { image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=600", name: "Abhishek S.", course: "UX Research Course", hasPlay: true },
  { image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=600", name: "Abhishek S.", course: "UX Research Course", hasPlay: true },
  { image: "https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?auto=format&fit=crop&q=80&w=600", name: "Preston B.", course: "UX Research Course", hasPlay: true }
];

const col2 = [
  { image: "https://images.unsplash.com/photo-1521119989659-a83eee488004?auto=format&fit=crop&q=80&w=600", name: "Abhishek S.", course: "UX Research Course", hasPlay: true },
  { image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=600", name: "Miles M.", course: "UX Research Course", hasPlay: true },
  { image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=600", name: "Preston B.", course: "UX Research Course", hasPlay: true }
];

const col3 = [
  { image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=600", name: "Preston B.", course: "UX Research Course", hasPlay: true },
  { image: "https://images.unsplash.com/photo-1521119989659-a83eee488004?auto=format&fit=crop&q=80&w=600", name: "Abhishek S.", course: "UX Research Course", hasPlay: true },
  { image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=600", name: "Elena R.", course: "UX Research Course", hasPlay: true }
];

const FeatureCard = ({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) => {
  return (
    <div className="bg-white border border-gray-100/50 rounded-[24px] p-8 shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_20px_40px_rgba(0,0,0,0.08)] hover:-translate-y-2 transition-all duration-500 group cursor-pointer h-full">
      <div className="text-gray-800 mb-6 group-hover:text-[#5D3FD3] transition-colors duration-300">
        {icon}
      </div>
      <h3 className="text-xl font-bold mb-3 text-gray-900 group-hover:text-[#5D3FD3] transition-colors duration-300">{title}</h3>
      <p className="text-gray-500 text-sm leading-relaxed">
        {description}
      </p>
    </div>
  );
};

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

const AdmissionProcessSection = ({ onNavigate }: { onNavigate: (page: string) => void }) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] }
    }
  };

  const steps = [
    {
      num: "01",
      title: "Submit Application",
      desc: "Fill the online application form with your degree details and a short statement of interest. No entrance exam required.",
      tag: "~10 Minutes"
    },
    {
      num: "02",
      title: "Orientation Interview",
      desc: "A short and friendly conversation with our admissions team to understand your goals.",
      tag: "~20 Min Call"
    },
    {
      num: "03",
      title: "Receive Offer Letter",
      desc: "Selected candidates receive an offer within 48 hours. Seats are limited.",
      tag: "Within 48 Hours"
    },
    {
      num: "04",
      title: "Confirm & Begin",
      desc: "Complete your payment, receive your welcome kit, and start your journey.",
      tag: "Start Immediately"
    }
  ];

  const advantages = [
    { text: "Hospital Ecosystem", icon: Building2, iconColor: "text-yellow-500" },
    { text: "Psychiatric Expert Panel", icon: Users, iconColor: "text-purple-600" },
    { text: "50 Days Intensive", icon: Clock, iconColor: "text-yellow-500" },
    { text: "90+ Training Hours", icon: BookOpen, iconColor: "text-purple-600" },
    { text: "Clinical Portfolio", icon: FileText, iconColor: "text-yellow-500" }
  ];

  return (
    <section className="relative z-20 pt-24 pb-16 bg-white">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-purple-600/20 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold mb-6 text-gray-900"
          >
            Admission Process · 2025
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-gray-500 text-lg max-w-2xl mx-auto"
          >
            A simple 4-step journey to join Sereniche Academy
          </motion.p>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
        >
          {steps.map((step, idx) => (
            <motion.div key={idx} variants={itemVariants} className="h-full">
              <div className="bg-white backdrop-blur-xl border border-gray-200 rounded-[24px] p-8 h-full flex flex-col hover:-translate-y-2 hover:border-yellow-400 shadow-[0_4px_20px_rgba(0,0,0,0.05)] hover:shadow-[0_8px_30px_rgba(124,58,237,0.15)] transition-all duration-500 group">
                <div className="flex items-center justify-between mb-6">
                  <span className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-br from-white/80 to-white/20 group-hover:from-pink-400 group-hover:to-purple-600 transition-all duration-500">
                    {step.num}
                  </span>
                  <span className="bg-gray-50 border border-gray-200 text-xs font-medium text-purple-300 px-3 py-1 rounded-full">
                    {step.tag}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{step.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed flex-1">
                  {step.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Advantages Row */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-wrap justify-center gap-4 mb-24"
        >
          {advantages.map((adv, idx) => {
            const Icon = adv.icon;
            return (
              <div 
                key={idx} 
                className="group flex items-center gap-2.5 bg-white border border-gray-200 text-gray-900 px-6 py-3 rounded-full text-sm font-semibold shadow-sm hover:bg-purple-600 hover:text-white hover:border-purple-600 hover:shadow-[0_0_20px_rgba(124,58,237,0.3)] hover:scale-105 transition-all duration-300 cursor-default"
              >
                <Icon className={`w-4 h-4 ${adv.iconColor} group-hover:text-yellow-300 transition-colors duration-300`} />
                {adv.text}
              </div>
            );
          })}
        </motion.div>

        {/* CTA */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center"
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-6">Apply Today — Seats Are Limited</h3>
          <button 
            onClick={() => onNavigate('contact')}
            className="group bg-gradient-to-r from-purple-600 to-purple-500 hover:from-purple-500 hover:to-purple-400 hover:scale-105 hover:shadow-[0_0_30px_rgba(124,58,237,0.4)] active:scale-95 text-white px-8 py-4 rounded-full font-medium transition-all duration-300 flex items-center gap-2 mx-auto cursor-pointer border border-transparent hover:border-purple-300"
          >
            Apply Now <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </motion.div>
      </div>
    </section>
  );
};

const LightSection = ({ onNavigate }: { onNavigate: (page: string) => void }) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] }
    }
  };

  return (
    <section className="bg-white text-black pt-24 pb-16 relative z-20">
      {/* Logos */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
        className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 mb-24"
      >
        <div className="flex flex-col items-center gap-8 overflow-hidden w-full">
          <p className="text-sm font-semibold text-gray-500 uppercase tracking-wider">Trusted by Industry Leaders</p>
          
          <div className="relative w-full flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
            <div className="flex animate-scroll-left whitespace-nowrap opacity-60 grayscale hover:grayscale-0 transition-all duration-500 w-max">
              {/* First set */}
              <div className="flex items-center gap-16 pr-16">
                <div className="flex items-center gap-2 font-bold text-xl hover:opacity-100 hover:scale-105 transition-all duration-300 cursor-pointer"><Hexagon className="w-6 h-6" /> OBOS</div>
                <div className="flex items-center gap-2 font-bold text-xl hover:opacity-100 hover:scale-105 transition-all duration-300 cursor-pointer"><Triangle className="w-6 h-6" /> Veidekke</div>
                <div className="flex items-center gap-2 font-bold text-xl hover:opacity-100 hover:scale-105 transition-all duration-300 cursor-pointer"><Sparkles className="w-6 h-6" /> sparkle</div>
                <div className="flex items-center gap-2 font-bold text-xl hover:opacity-100 hover:scale-105 transition-all duration-300 cursor-pointer"><Activity className="w-6 h-6" /> Pulse</div>
                <div className="flex items-center gap-2 font-bold text-xl hover:opacity-100 hover:scale-105 transition-all duration-300 cursor-pointer"><Box className="w-6 h-6" /> AF</div>
                <div className="flex items-center gap-2 font-bold text-xl hover:opacity-100 hover:scale-105 transition-all duration-300 cursor-pointer"><Layers className="w-6 h-6" /> PEAB</div>
                <div className="flex items-center gap-2 font-bold text-xl tracking-widest uppercase hover:opacity-100 hover:scale-105 transition-all duration-300 cursor-pointer">Nordr</div>
              </div>
              {/* Second set for seamless loop */}
              <div className="flex items-center gap-16 pr-16">
                <div className="flex items-center gap-2 font-bold text-xl hover:opacity-100 hover:scale-105 transition-all duration-300 cursor-pointer"><Hexagon className="w-6 h-6" /> OBOS</div>
                <div className="flex items-center gap-2 font-bold text-xl hover:opacity-100 hover:scale-105 transition-all duration-300 cursor-pointer"><Triangle className="w-6 h-6" /> Veidekke</div>
                <div className="flex items-center gap-2 font-bold text-xl hover:opacity-100 hover:scale-105 transition-all duration-300 cursor-pointer"><Sparkles className="w-6 h-6" /> sparkle</div>
                <div className="flex items-center gap-2 font-bold text-xl hover:opacity-100 hover:scale-105 transition-all duration-300 cursor-pointer"><Activity className="w-6 h-6" /> Pulse</div>
                <div className="flex items-center gap-2 font-bold text-xl hover:opacity-100 hover:scale-105 transition-all duration-300 cursor-pointer"><Box className="w-6 h-6" /> AF</div>
                <div className="flex items-center gap-2 font-bold text-xl hover:opacity-100 hover:scale-105 transition-all duration-300 cursor-pointer"><Layers className="w-6 h-6" /> PEAB</div>
                <div className="flex items-center gap-2 font-bold text-xl tracking-widest uppercase hover:opacity-100 hover:scale-105 transition-all duration-300 cursor-pointer">Nordr</div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Why Choose Us & Features */}
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 mt-24">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16"
        >
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 bg-purple-100 text-[#5D3FD3] px-4 py-2 rounded-full text-sm font-medium mb-6">
              <GraduationCap className="w-4 h-4" />
              Why Choose Us
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Skill up, stand out</h2>
            <p className="text-gray-500 text-lg">
              We equip designers with creative skills and a strong business<br/>mindset. Here's how we do it:
            </p>
          </div>
          <button onClick={() => onNavigate('courses')} className="bg-[#7C3AED] hover:bg-purple-700 hover:scale-105 hover:shadow-lg hover:shadow-purple-500/20 active:scale-95 text-white px-8 py-4 rounded-full font-medium transition-all duration-300 flex-shrink-0">
            View Courses
          </button>
        </motion.div>

        {/* Features Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          <motion.div variants={itemVariants}>
            <FeatureCard 
              icon={<BookOpen className="w-8 h-8 stroke-[1.5]" />}
              title="ESYR Learning"
              description="Explain, show, you and review. Our innovative approach makes learning fun and immersive."
            />
          </motion.div>
          <motion.div variants={itemVariants}>
            <FeatureCard 
              icon={<User className="w-8 h-8 stroke-[1.5]" />}
              title="Industry Expert-Led"
              description="Our products and courses have been crafted by experienced industry experts."
            />
          </motion.div>
          <motion.div variants={itemVariants}>
            <FeatureCard 
              icon={<Headphones className="w-8 h-8 stroke-[1.5]" />}
              title="Active Support"
              description="Got questions? Get your questions answered directly via our email channels."
            />
          </motion.div>
          <motion.div variants={itemVariants}>
            <FeatureCard 
              icon={<Brain className="w-8 h-8 stroke-[1.5]" />}
              title="Accessible Learning"
              description="All of our courses have subtitles enabled so you don't miss out on any important details."
            />
          </motion.div>
          <motion.div variants={itemVariants}>
            <FeatureCard 
              icon={<PenTool className="w-8 h-8 stroke-[1.5]" />}
              title="Practical & Hands-on"
              description="Develop your skills from theory and applied learning exercises to set you up for success."
            />
          </motion.div>
          <motion.div variants={itemVariants}>
            <FeatureCard 
              icon={<FileText className="w-8 h-8 stroke-[1.5]" />}
              title="Proven Track Record"
              description="Our students have landed dream jobs and secured higher freelance rates."
            />
          </motion.div>
          <motion.div variants={itemVariants}>
            <FeatureCard 
              icon={<BadgeCheck className="w-8 h-8 stroke-[1.5]" />}
              title="Highly Rated"
              description="With an impressive 4.9/5 rating, the impact of our courses and products is clear."
            />
          </motion.div>
          <motion.div variants={itemVariants}>
            <FeatureCard 
              icon={<BookMarked className="w-8 h-8 stroke-[1.5]" />}
              title="Flexible Learning"
              description="Our courses allow you to start whenever you're ready and learn at your own pace."
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

const ProgramPositioningSection = () => {
  const stats = [
    { value: "50", label: "Intensive Days", icon: <Calendar className="w-6 h-6 text-purple-600" /> },
    { value: "90+", label: "Training Hours", icon: <Clock className="w-6 h-6 text-purple-600" /> },
    { value: "10+", label: "Therapy Models", icon: <Brain className="w-6 h-6 text-purple-600" /> },
    { value: "#1", label: "In Kerala", icon: <Award className="w-6 h-6 text-purple-600" /> }
  ];

  return (
    <section className="relative z-20 pt-24 pb-16 bg-white">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-20px" }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold mb-6 text-gray-900"
          >
            Finishing School for Psychology Graduates
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-20px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-gray-500 text-lg max-w-3xl mx-auto"
          >
            Transform your psychology degree into confident, real-world clinical practice — in just 50 days.
          </motion.p>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          {stats.map((stat, idx) => (
            <div key={idx} className="bg-white backdrop-blur-xl border border-gray-200 rounded-[24px] p-8 text-center hover:-translate-y-2 hover:border-yellow-400 shadow-[0_4px_20px_rgba(0,0,0,0.05)] hover:shadow-[0_8px_30px_rgba(124,58,237,0.15)] transition-all duration-500 group">
              <div className="flex justify-center mb-4 opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300">
                {stat.icon}
              </div>
              <div className="text-4xl font-bold text-gray-900 mb-2">{stat.value}</div>
              <div className="text-sm font-medium text-gray-500 uppercase tracking-wider">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

const CurriculumSection = () => {
  const weeks = [
    { w: "W1", title: "Therapist Foundation & Orientation" },
    { w: "W2", title: "Core Counselling & Presence Skills" },
    { w: "W3", title: "Managing Client Dynamics" },
    { w: "W4", title: "Case Understanding & Conceptual Thinking" },
    { w: "W5", title: "Cognitive Therapy (CBT, REBT)" },
    { w: "W6", title: "Behavioural Interventions" },
    { w: "W7", title: "Emotional Regulation & Crisis Handling" },
    { w: "W8", title: "Relational & Systemic Work" },
    { w: "W9", title: "Therapist Development & Ethics" },
    { w: "W10", title: "Final Clinical Evaluation & Integration" }
  ];

  const models = [
    "CBT", "REBT", "DBT", "Person-Centered", "Psychodynamic", 
    "Trauma-Informed", "Motivational Interviewing", "Behaviour Therapy", 
    "Family Therapy", "Integrative Models"
  ];

  return (
    <section className="relative z-20 pt-24 pb-16 bg-white overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-gradient-to-r from-purple-600/5 to-yellow-500/5 blur-[120px] rounded-full pointer-events-none" />
      
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-20px" }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold mb-16 text-center text-gray-900 tracking-tight"
        >
          50-Day Learning Progression
        </motion.h2>

        {/* Horizontal Timeline */}
        <div className="relative mb-24">
          <div className="flex overflow-x-auto pb-12 pt-12 snap-x snap-mandatory gap-6 md:gap-8 px-4 md:px-0 relative [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
            {/* Connecting Line */}
            <div className="absolute top-[23px] left-0 right-0 h-[2px] bg-gray-200 hidden md:block" />

            {weeks.map((week, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="relative flex-shrink-0 w-[280px] snap-center group"
              >
                {/* Timeline Dot */}
                <div className="hidden md:flex absolute -top-[32px] left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-white border-2 border-gray-300 group-hover:border-purple-500 group-hover:bg-purple-500 transition-colors duration-300 z-10 shadow-[0_0_0_4px_white] group-hover:shadow-[0_0_15px_rgba(124,58,237,0.5)]" />
                
                {/* Card */}
                <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-[0_4px_20px_rgba(0,0,0,0.03)] group-hover:shadow-[0_8px_30px_rgba(124,58,237,0.15)] group-hover:-translate-y-2 group-hover:border-yellow-400 transition-all duration-500 h-full relative z-20">
                  <div className="inline-block bg-yellow-50 text-yellow-600 font-bold text-xs px-3 py-1 rounded-full mb-4 border border-yellow-200">
                    {week.w}
                  </div>
                  <h3 className="text-gray-900 font-bold text-lg leading-snug">{week.title}</h3>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Therapy Models */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-center"
        >
          <h4 className="text-gray-500 text-sm uppercase tracking-widest mb-8 font-semibold">Therapy Models Covered</h4>
          <div className="flex flex-wrap justify-center gap-3 md:gap-4">
            {models.map((model, idx) => (
              <span 
                key={idx} 
                className="bg-[#F3F0FF] border border-purple-200 text-purple-700 px-5 py-2.5 rounded-full text-sm font-medium hover:bg-purple-600 hover:text-white hover:border-purple-600 transition-all duration-300 cursor-default shadow-sm hover:shadow-md"
              >
                {model}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const ExpertFacultySection = ({ onNavigate }: { onNavigate?: (page: string) => void }) => {
  const facultyData = [
    {
      id: 1,
      name: "Dr. Sarah Jenkins",
      title: "Senior Clinical Psychologist",
      image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80&w=400",
      experience: "15+ Years Experience",
      expertise: ["CBT", "Trauma-Informed Care"],
      bio: "Dr. Jenkins specializes in cognitive behavioral therapy and trauma-informed care in hospital settings."
    },
    {
      id: 2,
      name: "Prof. David Chen",
      title: "Consultant Psychiatrist",
      image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&q=80&w=400",
      experience: "20+ Years Experience",
      expertise: ["Psychopharmacology", "Severe Mental Illness"],
      bio: "Prof. Chen is a leading voice in psychiatry, blending medical knowledge with psychotherapy."
    },
    {
      id: 3,
      name: "Dr. Maya Patel",
      title: "Family & Couples Therapist",
      image: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?auto=format&fit=crop&q=80&w=400",
      experience: "12+ Years Experience",
      expertise: ["Family Therapy", "Couples Counseling"],
      bio: "Dr. Patel focuses on systemic therapy and conflict resolution for diverse family structures."
    }
  ];

  return (
    <section className="relative z-20 pt-24 pb-16 bg-[#F8F7FF] overflow-hidden">
      {/* Background glow behind cards */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[500px] bg-gradient-to-r from-purple-600/10 to-yellow-500/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 tracking-tight"
          >
            Learn From Industry Experts
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-gray-500 text-lg max-w-2xl mx-auto"
          >
            Guided by experienced clinical psychologists, psychiatrists, and therapists with real-world hospital expertise.
          </motion.p>
        </div>

        {/* Horizontal Card Layout (Carousel feel on mobile) */}
        <div className="flex overflow-x-auto lg:grid lg:grid-cols-3 gap-6 lg:gap-8 pb-10 snap-x snap-mandatory hide-scrollbar">
          {facultyData.map((faculty, idx) => (
            <motion.div
              key={faculty.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="relative min-w-[300px] sm:min-w-[340px] lg:min-w-0 snap-center group rounded-[24px]"
            >
              {/* Gradient border wrapper hover glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-purple-300 via-transparent to-yellow-200 rounded-[24px] opacity-0 group-hover:opacity-100 transition-opacity duration-700 blur-[2px] -z-10" />
              
              <div className="relative h-full bg-white border border-purple-100 rounded-[24px] overflow-hidden shadow-[0_4px_20px_rgba(0,0,0,0.03)] group-hover:shadow-[0_20px_40px_rgba(124,58,237,0.15)] group-hover:border-purple-300 transition-all duration-500 group-hover:-translate-y-2 flex flex-col">
                {/* Image */}
                <div className="h-56 sm:h-64 overflow-hidden relative">
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/10 to-transparent z-10 mix-blend-multiply" />
                  <img 
                    src={faculty.image} 
                    alt={faculty.name} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>

                {/* Content */}
                <div className="p-6 sm:p-8 flex-1 flex flex-col relative bg-white z-10 transition-transform duration-500 group-hover:-translate-y-[60px]">
                  <h3 className="text-2xl font-bold text-gray-900 mb-1">{faculty.name}</h3>
                  <p className="text-yellow-600 font-medium mb-4">{faculty.title}</p>
                  
                  <div className="flex items-center gap-2 text-gray-500 text-sm mb-6">
                    <Briefcase className="w-4 h-4 opacity-70" />
                    <span className="font-medium tracking-wide">{faculty.experience}</span>
                  </div>
                  
                  <div className="flex flex-wrap gap-2 mt-auto">
                    {faculty.expertise.map((skill, i) => (
                      <span key={i} className="text-xs font-semibold bg-gray-50 border border-purple-50 text-purple-700 px-3 py-1.5 rounded-full">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Hover Overlay Panel */}
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-white via-white to-white/95 backdrop-blur-sm px-6 pb-6 pt-12 translate-y-full group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500 ease-[cubic-bezier(0.23,1,0.32,1)] z-20 flex flex-col justify-end">
                  <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-2">
                    {faculty.bio}
                  </p>
                  <div className="flex items-center justify-between mt-2 pt-4 border-t border-gray-100">
                    <div>
                      <p className="text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-1">Specializations</p>
                      <p className="text-xs font-medium text-gray-700">
                        {faculty.expertise.join(", ")}
                      </p>
                    </div>
                    <button 
                      onClick={() => onNavigate?.('instructor')}
                      className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-purple-50 text-purple-600 hover:bg-purple-600 hover:text-white transition-colors flex-shrink-0 relative group/btn"
                    >
                      <ArrowRight className="w-5 h-5 absolute group-hover/btn:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <style>{`
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </section>
  );
};

const FAQSection = () => {
  const faqs = [
    {
      question: "Is this program only for psychology postgraduates?",
      answer: "No. It is suitable for psychology graduates, postgraduates, final-year students, and professionals transitioning into therapy."
    },
    {
      question: "I’ve already done my degree, why should I pay extra for this course?",
      answer: "This program focuses on practical clinical skills, supervision, and real-world readiness that many academic programs do not provide."
    },
    {
      question: "Will this course help me get a job?",
      answer: "Yes. It improves employability through portfolio building, practical experience, and placement support."
    },
    {
      question: "What makes this different from a typical workshop or certification?",
      answer: "This is an intensive structured training experience with expert mentorship, clinical exposure, and real case-based learning."
    },
    {
      question: "I’m not confident with my therapy skills. Will this be too advanced for me?",
      answer: "No. The program is designed to support learners from beginner to intermediate level."
    },
    {
      question: "Is this course recognized or certified?",
      answer: "Yes. Participants receive a program certificate upon successful completion."
    }
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="relative z-20 pt-24 pb-16 bg-[#F8F7FF]/50 overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          
          {/* Left Column: Heading */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-4"
          >
            <div className="sticky top-32">
              <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 tracking-tight leading-tight">
                Frequently<br />Asked Questions
                <span className="block w-16 h-1 mt-6 bg-yellow-400 rounded-full"></span>
              </h2>
              <p className="text-gray-500 text-lg leading-relaxed mt-6">
                Find answers to common questions about the program, admissions, career outcomes, and certification.
              </p>
            </div>
          </motion.div>

          {/* Right Column: Accordion */}
          <div className="lg:col-span-8 flex flex-col gap-4">
            {faqs.map((faq, idx) => {
              const isOpen = openIndex === idx;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className={`bg-white rounded-[16px] overflow-hidden transition-all duration-300 shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:-translate-y-1 hover:shadow-lg border ${isOpen ? 'border-purple-300 ring-1 ring-purple-100 shadow-purple-900/5' : 'border-gray-100 hover:border-purple-200'}`}
                >
                  <button
                    onClick={() => setOpenIndex(isOpen ? null : idx)}
                    className="w-full text-left px-6 py-6 flex items-center justify-between gap-6"
                  >
                    <span className="text-lg font-semibold text-gray-900 leading-snug pr-8">
                      {faq.question}
                    </span>
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 transition-colors duration-300 ${isOpen ? 'bg-purple-100 text-purple-600' : 'bg-gray-50 text-gray-400'}`}>
                      {isOpen ? (
                        <Minus className="w-5 h-5" />
                      ) : (
                        <Plus className="w-5 h-5" />
                      )}
                    </div>
                  </button>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                      >
                        <div className="px-6 pb-6 text-gray-600 text-[17px] leading-relaxed border-t border-gray-50 pt-4 mt-2">
                          {faq.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

const FinalCTASection = ({ onNavigate }: { onNavigate: (page: string) => void }) => {
  return (
    <section className="relative z-20 pt-24 bg-[#F8F7FF] overflow-hidden flex flex-col items-center">
      {/* Soft gradient blob behind CTA */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-purple-400/10 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[200px] bg-yellow-400/10 blur-[80px] rounded-full pointer-events-none" />
      
      <div className="max-w-[800px] w-full mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center pb-16">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-20px" }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 tracking-tight"
        >
          Ready to Begin Your Journey?
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-20px" }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-gray-600 text-lg md:text-xl mb-10 max-w-2xl mx-auto"
        >
          Transform your psychology degree into real-world clinical confidence with Sereniche Academy.
        </motion.p>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-20px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-col items-center gap-6"
        >
          <button 
            onClick={() => onNavigate('contact')}
            className="group bg-gradient-to-r from-purple-600 to-purple-500 hover:from-purple-500 hover:to-purple-400 hover:scale-105 hover:shadow-[0_0_30px_rgba(124,58,237,0.4)] active:scale-95 text-white px-10 py-4 rounded-full text-lg font-semibold transition-all duration-300 flex items-center gap-3 border border-transparent hover:border-purple-300"
          >
            Apply Now <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
          
          <div className="flex items-center gap-2 text-sm text-gray-500 font-medium">
            <ShieldCheck className="w-4 h-4 text-purple-500" />
            Limited seats · Cohort 2025
          </div>
        </motion.div>
      </div>

      {/* Contact Quick Info Strip */}
      <div className="relative w-full border-t border-gray-200/60 bg-white/50 backdrop-blur-sm py-4">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center items-center gap-x-8 gap-y-3 text-base text-gray-600 font-medium">
            <span className="flex items-center gap-2"><Mail className="w-5 h-5 text-purple-500" /> admissions@sereniche.com</span>
            <span className="w-1.5 h-1.5 rounded-full bg-gray-300 hidden sm:block" />
            <span className="flex items-center gap-2"><Globe className="w-5 h-5 text-purple-500" /> www.sereniche.com</span>
            <span className="w-1.5 h-1.5 rounded-full bg-gray-300 hidden sm:block" />
            <span className="flex items-center gap-2"><MapPin className="w-5 h-5 text-purple-500" /> Kerala, India</span>
          </div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-100 pt-16 pb-8 relative z-20">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Left */}
          <div>
            <div className="mb-6">
              <SerenicheLogo className="scale-90 origin-left" />
            </div>
            <p className="text-gray-500 text-sm">
              Kerala's #1 Mental Health Training Ecosystem
            </p>
          </div>

          {/* Center */}
          <div>
            <h4 className="text-gray-900 font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-3">
              {['Courses', 'Instructors', 'Testimonials', 'Contact'].map((link) => (
                <li key={link}>
                  <a href="#" className="text-gray-500 hover:text-purple-600 transition-colors duration-300 text-base flex items-center gap-2 group">
                    <span className="w-2 h-2 rounded-full bg-purple-200 group-hover:bg-yellow-400 transition-colors duration-300" />
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Right */}
          <div>
            <h4 className="text-gray-900 font-semibold mb-4">Contact Info</h4>
            <ul className="space-y-3">
              <li>
                <a href="mailto:admissions@sereniche.com" className="text-gray-500 hover:text-purple-600 transition-colors duration-300 text-sm flex items-center gap-3 group">
                  <Mail className="w-4 h-4 text-purple-400 group-hover:text-yellow-500 transition-colors duration-300" />
                  admissions@sereniche.com
                </a>
              </li>
              <li>
                <a href="tel:+910000000000" className="text-gray-500 hover:text-purple-600 transition-colors duration-300 text-sm flex items-center gap-3 group">
                  <Headphones className="w-4 h-4 text-purple-400 group-hover:text-yellow-500 transition-colors duration-300" />
                  +91 00000 00000
                </a>
              </li>
              <li className="text-gray-500 text-sm flex items-center gap-3">
                <MapPin className="w-4 h-4 text-purple-400" />
                Kerala, India
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-gray-100 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-400 text-sm">
            © 2025 Sereniche Academy. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white text-gray-900 overflow-x-hidden relative font-sans selection:bg-purple-500/30">
      {/* Background Glows & Particles Wrapper */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        {/* Background Glows */}
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-[#7C3AED]/20 blur-[120px] rounded-full" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-pink-500/10 blur-[120px] rounded-full" />
        
        {/* Particles */}
        <div className="absolute top-[20%] left-[10%] w-2 h-2 bg-purple-400/40 rounded-full blur-[1px] animate-particle" style={{ animationDelay: '0s' }} />
        <div className="absolute top-[60%] left-[5%] w-3 h-3 bg-pink-400/30 rounded-full blur-[2px] animate-particle" style={{ animationDelay: '2s' }} />
        <div className="absolute top-[30%] right-[20%] w-2 h-2 bg-purple-300/40 rounded-full blur-[1px] animate-particle" style={{ animationDelay: '4s' }} />
        <div className="absolute top-[70%] right-[10%] w-4 h-4 bg-[#7C3AED]/30 rounded-full blur-[2px] animate-particle" style={{ animationDelay: '1s' }} />
        <div className="absolute top-[10%] right-[40%] w-2 h-2 bg-pink-300/40 rounded-full blur-[1px] animate-particle" style={{ animationDelay: '3s' }} />
        <div className="absolute bottom-[20%] left-[30%] w-3 h-3 bg-purple-500/30 rounded-full blur-[2px] animate-particle" style={{ animationDelay: '5s' }} />
      </div>

      {/* Navbar */}
      <motion.nav 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="relative z-[100] max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 pt-6"
      >
        <div className="bg-gray-50/90 border border-gray-200 backdrop-blur-lg rounded-full px-4 py-2.5 flex items-center justify-between shadow-[0_8px_30px_rgb(0,0,0,0.12)]">
          {/* Logo */}
          <div 
            className="flex items-center pl-2 cursor-pointer"
            onClick={() => setCurrentPage('home')}
          >
            <SerenicheLogo />
          </div>

          {/* Desktop Links - Hidden on Mobile */}
          <div className="hidden md:flex items-center gap-8 text-xl font-bold text-gray-800">
            {[
              { id: 'home', label: 'Home' },
              { id: 'courses', label: 'Courses' },
              { id: 'instructor', label: 'Instructor' },
              { id: 'testimonials', label: 'Testimonials' },
              { id: 'more', label: 'More' },
              { id: 'contact', label: 'Contact' }
            ].map((item) => (
              <button 
                key={item.id}
                onClick={() => setCurrentPage(item.id)} 
                className={`relative px-1 py-2 transition-all duration-300 ${currentPage === item.id ? 'text-purple-600' : 'hover:text-purple-600 text-gray-600'}`}
              >
                {item.label}
                {currentPage === item.id && (
                  <motion.span 
                    layoutId="nav-underline" 
                    className="absolute bottom-0 left-0 w-full h-0.5 bg-purple-600 rounded-full"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
              </button>
            ))}
          </div>

          {/* Right Side: CTA & Mobile Toggle */}
          <div className="flex items-center gap-2">
            <button 
              onClick={() => setCurrentPage('contact')}
              className="hover:scale-105 active:scale-95 text-[#7C3AED] px-4 py-2 rounded-full text-base font-bold transition-all duration-300 flex items-center gap-2 group border border-transparent hover:border-purple-100"
            >
              <span>Enroll Now</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-0.5 transition-transform" />
            </button>

            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden w-12 h-12 flex items-center justify-center rounded-xl text-[#7C3AED] hover:bg-purple-50 transition-all"
              aria-label="Toggle Menu"
            >
              {isMenuOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -10, scale: 0.95 }}
              className="absolute top-full left-0 right-0 mt-4 px-2 md:hidden"
            >
              <div className="bg-white border border-gray-200 rounded-3xl p-4 shadow-2xl overflow-hidden">
                <div className="flex flex-col gap-2">
                  {[
                    { id: 'home', label: 'Home' },
                    { id: 'courses', label: 'Courses' },
                    { id: 'instructor', label: 'Instructor' },
                    { id: 'testimonials', label: 'Testimonials' },
                    { id: 'more', label: 'More' },
                    { id: 'contact', label: 'Contact' }
                  ].map((item) => (
                    <button
                      key={item.id}
                      onClick={() => {
                        setCurrentPage(item.id);
                        setIsMenuOpen(false);
                      }}
                      className={`text-lg font-bold text-left px-5 py-4 rounded-2xl transition-colors ${currentPage === item.id ? 'bg-purple-50 text-purple-600' : 'text-gray-700 hover:bg-gray-50'}`}
                    >
                      {item.label}
                    </button>
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>

      <AnimatePresence mode="wait">
        {currentPage === 'home' && (
          <motion.div
            key="home"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
          >
            {/* Main Content Wrapper */}
            <div className="relative w-full min-h-[calc(100vh-100px)] flex items-center overflow-hidden">
        
        {/* Right Column - Tilted Floating Columns (Moved outside max-w container to bleed to edge) */}
        <div className="absolute top-0 right-0 w-[60vw] h-full pointer-events-none z-0 hidden lg:flex items-center justify-center" style={{ perspective: '1000px', maskImage: 'linear-gradient(to bottom, transparent, black 10%, black 90%, transparent)', WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 10%, black 90%, transparent)' }}>
          <div className="absolute top-[-50%] right-[-15%] w-[130%] h-[200%] flex gap-6 justify-center items-center [transform:rotateX(10deg)_rotateY(-15deg)_rotateZ(-15deg)_scale(0.95)] origin-center">
            
            {/* Column 1 (Scrolls Down) */}
            <div className="flex flex-col gap-6 animate-scroll-down relative z-10">
              {[...col1, ...col1, ...col1, ...col1].map((item, i) => (
                <CourseCard key={`col1-${i}`} index={i} {...item} />
              ))}
            </div>

            {/* Column 2 (Scrolls Up) */}
            <div className="flex flex-col gap-6 animate-scroll-up-slow relative z-20">
              {[...col2, ...col2, ...col2, ...col2].map((item, i) => (
                <CourseCard key={`col2-${i}`} index={i + 3} {...item} />
              ))}
            </div>

            {/* Column 3 (Scrolls Down) */}
            <div className="flex flex-col gap-6 animate-scroll-down relative z-30">
              {[...col3, ...col3, ...col3, ...col3].map((item, i) => (
                <CourseCard key={`col3-${i}`} index={i + 6} {...item} />
              ))}
            </div>

          </div>
        </div>

        <main className="relative z-10 w-full max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16 lg:pt-32 flex flex-col lg:flex-row items-center">
          
          {/* Left Column (Text) */}
          <div className="w-full lg:w-[50%] pr-0 lg:pr-8 relative z-20">
          {/* Badge */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="inline-flex items-center gap-3 bg-gray-50 border border-gray-200 rounded-full p-1 pr-4 mb-8 backdrop-blur-sm"
          >
            <span className="bg-[#7C3AED] text-white text-xs font-bold px-3 py-1 rounded-full">New</span>
            <span className="text-sm text-gray-600">Registrations are now open!</span>
          </motion.div>

          {/* Heading */}
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="text-5xl lg:text-[3.5rem] font-bold leading-[1.1] mb-6 tracking-tight"
          >
            Your Thoughts <br />
            Are <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600">Not Facts</span><br />
            But They Shape <br />
            Your World
          </motion.h1>

          {/* Subheading */}
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="text-gray-500 text-lg mb-10 max-w-xl leading-relaxed"
          >
            Learn highly demanded skills through practical online courses, created by trusted industry professionals, that focus on real-world applications.
          </motion.p>

          {/* Buttons */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-wrap items-center gap-4 mb-16"
          >
            <button onClick={() => setCurrentPage('courses')} className="bg-[#7C3AED] hover:bg-purple-700 hover:scale-105 hover:shadow-lg hover:shadow-purple-500/20 active:scale-95 text-white px-8 py-4 rounded-full font-medium flex items-center gap-2 transition-all duration-300">
              View Courses
              <ArrowUpRight className="w-5 h-5" />
            </button>
            <button className="bg-gray-50 hover:bg-gray-100 hover:scale-105 active:scale-95 border border-gray-200 text-gray-900 px-8 py-4 rounded-full font-medium flex items-center gap-2 transition-all duration-300 backdrop-blur-sm">
              Watch Preview
              <Triangle className="w-5 h-5 fill-white rotate-90" />
            </button>
          </motion.div>

          {/* Social Proof */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="flex items-center gap-8"
          >
            <div className="flex items-center gap-4">
              <div className="flex -space-x-3">
                <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=100" alt="User" className="w-10 h-10 rounded-full border-2 border-[#0B0410] object-cover" />
                <img src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=100" alt="User" className="w-10 h-10 rounded-full border-2 border-[#0B0410] object-cover" />
                <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=100" alt="User" className="w-10 h-10 rounded-full border-2 border-[#0B0410] object-cover" />
                <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=100" alt="User" className="w-10 h-10 rounded-full border-2 border-[#0B0410] object-cover" />
              </div>
              <div className="text-sm text-gray-500 leading-tight">
                Loved by 500+<br />Founders
              </div>
            </div>
            <div className="w-px h-10 bg-gray-100" />
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                 <span className="text-black font-extrabold text-xl tracking-tighter">C.</span>
              </div>
              <div>
                <div className="flex text-[#FFB800] mb-1 gap-0.5">
                  <Star className="w-3.5 h-3.5 fill-current" />
                  <Star className="w-3.5 h-3.5 fill-current" />
                  <Star className="w-3.5 h-3.5 fill-current" />
                  <Star className="w-3.5 h-3.5 fill-current" />
                  <Star className="w-3.5 h-3.5 fill-current" />
                </div>
                <div className="text-xs text-gray-500 font-medium">13 Reviews</div>
              </div>
            </div>
          </motion.div>
        </div>

        </main>
      </div>

      {/* Admission Process Section */}
      <AdmissionProcessSection onNavigate={setCurrentPage} />

      {/* Light Section */}
      <LightSection onNavigate={setCurrentPage} />

      {/* Featured Courses Section */}
      <FeaturedCoursesSection onNavigate={setCurrentPage} />

      {/* Program Positioning Section */}
      <ProgramPositioningSection />

      {/* Curriculum Section */}
      <CurriculumSection />

      {/* Expert Faculty Section */}
      <ExpertFacultySection onNavigate={setCurrentPage} />

      {/* FAQ Section */}
      <FAQSection />
          </motion.div>
        )}

        {currentPage === 'courses' && (
          <motion.div
            key="courses"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
          >
            <CoursesPage onNavigate={setCurrentPage} />
          </motion.div>
        )}

        {currentPage === 'instructor' && (
          <motion.div
            key="instructor"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
          >
            <InstructorPage />
          </motion.div>
        )}

        {currentPage === 'testimonials' && (
          <motion.div
            key="testimonials"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
          >
            <TestimonialsPage />
          </motion.div>
        )}

        {currentPage === 'more' && (
          <motion.div
            key="more"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
          >
            <MorePage onNavigate={setCurrentPage} />
          </motion.div>
        )}

        {currentPage === 'contact' && (
          <motion.div
            key="contact"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
          >
            <ContactPage />
          </motion.div>
        )}
      </AnimatePresence>

      {currentPage !== 'contact' && <FinalCTASection onNavigate={setCurrentPage} />}
      <Footer />

      {/* Live Chat Widget */}
      <LiveChat />
    </div>
  );
}

