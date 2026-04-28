/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useEffect, useRef, useState } from 'react';
import { BrowserRouter, Routes, Route, useNavigate, useLocation } from 'react-router-dom';
import { Triangle, ArrowUpRight, Star, GraduationCap, User, Hexagon, Clock, BookOpen, Users, FileText, ArrowRight, ArrowLeft, Headphones, Brain, PenTool, BadgeCheck, BookMarked, Sparkles, Activity, Box, Layers, Circle, Building2, Stethoscope, CheckCircle2, Calendar, MonitorPlay, Mail, Globe, XCircle, Quote, Target, Award, Briefcase, MapPin, ShieldCheck, TrendingUp, HeartHandshake, FileCheck, Lightbulb, Check, Plus, Minus, Menu, X } from 'lucide-react';
import { motion, useMotionValue, useTransform, animate, useInView, useScroll, AnimatePresence } from 'motion/react';
import LiveChat from './components/LiveChat';
import InstructorPage from './pages/InstructorPage';
import CoursesPage from './pages/CoursesPage';
import TestimonialsPage from './pages/TestimonialsPage';
import MorePage from './pages/MorePage';
import ContactPage from './pages/ContactPage';
import CourseDetailPage from './pages/CourseDetailPage';
import { SerenicheLogo } from './components/Logo';



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
      transition={{ duration: 0.5 }}
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
  { image: "/Student%201.jpg", name: "Student", course: "Clinical Psychology", hasPlay: false },
  { image: "/Student%202.jpg", name: "Student", course: "Counselling Skills", hasPlay: false },
  { image: "/Student%203.jpg", name: "Student", course: "CBT Practitioner", hasPlay: false },
  { image: "/Student%204.jpg", name: "Student", course: "Mental Health", hasPlay: false },
];

const col2 = [
  { image: "/Student%202.jpg", name: "Student", course: "Counselling Skills", hasPlay: false },
  { image: "/Student%203.jpg", name: "Student", course: "CBT Practitioner", hasPlay: false },
  { image: "/Student%204.jpg", name: "Student", course: "Mental Health", hasPlay: false },
  { image: "/Student%201.jpg", name: "Student", course: "Clinical Psychology", hasPlay: false },
];

const col3 = [
  { image: "/Student%203.jpg", name: "Student", course: "CBT Practitioner", hasPlay: false },
  { image: "/Student%204.jpg", name: "Student", course: "Mental Health", hasPlay: false },
  { image: "/Student%201.jpg", name: "Student", course: "Clinical Psychology", hasPlay: false },
  { image: "/Student%202.jpg", name: "Student", course: "Counselling Skills", hasPlay: false },
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
                  <span className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-br from-gray-300 to-gray-400 group-hover:from-pink-400 group-hover:to-purple-600 transition-all duration-500">
                    {step.num}
                  </span>
                  <span className="bg-gray-50 border border-gray-200 text-xs font-bold text-purple-600 px-3 py-1 rounded-full">
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
              We equip designers with creative skills and a strong business<br />mindset. Here's how we do it:
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
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = 320;
      scrollRef.current.scrollBy({ left: direction === 'left' ? -scrollAmount : scrollAmount, behavior: 'smooth' });
    }
  };

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
        <div className="relative mb-24 group">
          
          <button 
            onClick={() => scroll('left')}
            className="absolute left-0 top-1/2 -translate-y-1/2 -ml-2 sm:-ml-6 md:-ml-8 w-12 h-12 bg-white rounded-full shadow-[0_4px_20px_rgba(124,58,237,0.15)] border border-purple-100 text-purple-600 flex items-center justify-center z-30 hover:scale-110 hover:bg-purple-50 transition-all opacity-0 group-hover:opacity-100 hidden md:flex"
          >
            <ArrowLeft className="w-6 h-6" />
          </button>

          <button 
            onClick={() => scroll('right')}
            className="absolute right-0 top-1/2 -translate-y-1/2 -mr-2 sm:-mr-6 md:-mr-8 w-12 h-12 bg-white rounded-full shadow-[0_4px_20px_rgba(124,58,237,0.15)] border border-purple-100 text-purple-600 flex items-center justify-center z-30 hover:scale-110 hover:bg-purple-50 transition-all opacity-0 group-hover:opacity-100 hidden md:flex"
          >
            <ArrowRight className="w-6 h-6" />
          </button>

          <div 
            ref={scrollRef}
            className="overflow-x-auto pb-12 pt-12 snap-x snap-mandatory [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] scroll-px-4 scroll-smooth"
          >
            <div className="flex gap-6 md:gap-8 px-4 md:px-0 relative min-w-max">
              {/* Connecting Line */}
              <div className="absolute top-[23px] left-0 right-0 h-[2px] bg-gray-200 hidden md:block" />

              {weeks.map((week, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5 }}
                  className="relative flex-shrink-0 w-[280px] snap-center group/card"
                >
                  {/* Timeline Dot */}
                  <div className="hidden md:flex absolute -top-[32px] left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-white border-2 border-gray-300 group-hover/card:border-purple-500 group-hover/card:bg-purple-500 transition-colors duration-300 z-10 shadow-[0_0_0_4px_white] group-hover/card:shadow-[0_0_15px_rgba(124,58,237,0.5)]" />

                  {/* Card */}
                  <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-[0_4px_20px_rgba(0,0,0,0.03)] group-hover/card:shadow-[0_8px_30px_rgba(124,58,237,0.15)] group-hover/card:-translate-y-2 group-hover/card:border-yellow-400 transition-all duration-500 h-full relative z-20">
                    <div className="inline-block bg-yellow-50 text-yellow-600 font-bold text-xs px-3 py-1 rounded-full mb-4 border border-yellow-200">
                      {week.w}
                    </div>
                    <h3 className="text-gray-900 font-bold text-lg leading-snug">{week.title}</h3>
                  </div>
                </motion.div>
              ))}
            </div>
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
                  transition={{ duration: 0.4 }}
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
            Limited seats
          </div>
        </motion.div>
      </div>

      {/* Contact Quick Info Strip */}
      <div className="relative w-full border-t border-gray-200/60 bg-white/50 backdrop-blur-sm py-4">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center items-center gap-x-8 gap-y-3 text-base text-gray-600 font-medium">
            <span className="flex items-center gap-2"><Mail className="w-5 h-5 text-purple-500" /> admissions@sereniche.com</span>
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
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}

function AppContent() {
  const [currentPage, setCurrentPage] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    // 1. Sync URL to State (Direct links, Back button)
    const pathMap: Record<string, string> = {
      '/': 'home',
      '/courses': 'courses',
      '/instructor': 'instructor',
      '/testimonials': 'testimonials',
      '/more': 'more',
      '/contact': 'contact'
    };
    if (pathMap[location.pathname] && pathMap[location.pathname] !== currentPage) {
      setCurrentPage(pathMap[location.pathname]);
    }
  }, [location.pathname]);

  useEffect(() => {
    // 2. Sync State to URL (Navbar clicks)
    const stateMap: Record<string, string> = {
      'home': '/',
      'courses': '/courses',
      'instructor': '/instructor',
      'testimonials': '/testimonials',
      'more': '/more',
      'contact': '/contact'
    };
    // Only navigate if we're not already on the correct path AND not on a course detail page
    if (stateMap[currentPage] && location.pathname !== stateMap[currentPage] && !location.pathname.startsWith('/courses/')) {
      navigate(stateMap[currentPage]);
    }
  }, [currentPage]);

  return (
    <div className="min-h-screen bg-white text-gray-900 overflow-x-hidden relative font-sans selection:bg-purple-500/30">
      {/* Background Glows & Particles Wrapper */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        {/* Background Glows */}
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-[#7C3AED]/20 blur-[120px] rounded-full" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-pink-500/10 blur-[120px] rounded-full" />
        
        {/* Contact & More Page Glow */}
        <div className={`absolute top-[200px] md:top-[150px] left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-purple-600/20 blur-[150px] rounded-full transition-opacity duration-700 delay-150 ${(currentPage === 'contact' || currentPage === 'more') ? 'opacity-100' : 'opacity-0'}`} />

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
              { id: 'more', label: 'Others' },
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
                    { id: 'more', label: 'Others' },
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

      <Routes>
        <Route path="/courses/:slug" element={<CourseDetailPage onNavigate={setCurrentPage} />} />
        <Route path="*" element={
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
                  <div className="absolute top-0 right-0 w-[150vw] sm:w-[100vw] lg:w-[60vw] h-full pointer-events-none z-0 flex items-center justify-center opacity-20 lg:opacity-100" style={{ perspective: '1000px', maskImage: 'linear-gradient(to bottom, transparent, black 10%, black 90%, transparent)', WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 10%, black 90%, transparent)' }}>
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
                        Expert <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600">Psychiatric &amp; <br />Psychological Care</span><br />
                        — Right When <br />
                        You Need It
                      </motion.h1>

                      {/* Subheading */}
                      <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                        className="text-gray-500 text-lg mb-10 max-w-xl leading-relaxed"
                      >
                        Clinical expertise, compassionate care, and evidence-based treatment available to you through Sereniche Academy's mental health services wing.
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

                      </motion.div>
                    </div>

                  </main>
                </div>

                {/* Program Positioning Section */}
                <ProgramPositioningSection />

                {/* Curriculum Section */}
                <CurriculumSection />

                {/* Admission Process Section */}
                <AdmissionProcessSection onNavigate={setCurrentPage} />

                {/* Light Section */}
                <LightSection onNavigate={setCurrentPage} />



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
                <CoursesPage />
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
        } />
      </Routes>

      {currentPage !== 'contact' && <FinalCTASection onNavigate={setCurrentPage} />}
      <Footer />

      {/* Live Chat Widget */}
      <LiveChat />
    </div>
  );
}

