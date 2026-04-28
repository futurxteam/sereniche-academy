import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Brain, Heart, Users, Building2, School, Briefcase, Globe,
  ArrowRight, Phone, MessageCircle, CheckCircle2,
  Stethoscope, Shield, Star, BookOpen, HeartHandshake,
  ChevronRight, Calendar, Target, Lightbulb, Award
} from 'lucide-react';

// ─── Shared CTA Block ──────────────────────────────────────────────────────────
const CTABlock = ({ onNavigate }: { onNavigate?: (page: string) => void }) => (
  <div className="mt-10 flex flex-wrap gap-4 justify-center">
    <button
      onClick={() => onNavigate?.('contact')}
      className="flex items-center gap-2 bg-[#7C3AED] hover:bg-purple-700 text-white px-7 py-3.5 rounded-full font-semibold text-sm transition-all duration-300 hover:scale-105 hover:shadow-[0_0_20px_rgba(124,58,237,0.35)]"
    >
      <Phone className="w-4 h-4" /> Get in Touch
    </button>

    <a
      href="https://wa.me/919876543210"
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-7 py-3.5 rounded-full font-semibold text-sm transition-all duration-300 hover:scale-105"
    >
      <MessageCircle className="w-4 h-4" /> WhatsApp Us
    </a>
  </div>
);

// ─── Section Wrapper ────────────────────────────────────────────────────────────
const SectionWrap = ({ children, bg = 'white', id }: { children: React.ReactNode; bg?: string; id?: string }) => (
  <section id={id} className={`py-20 relative ${bg === 'purple' ? 'bg-[#F3F0FF]' : bg === 'gold' ? 'bg-[#FFFBEB]' : 'bg-white'}`}>
    <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      {children}
    </div>
  </section>
);

// ─── Section Header ─────────────────────────────────────────────────────────────
const SectionHeader = ({ tag, title, subtitle }: { tag?: string; title: React.ReactNode; subtitle?: string }) => (
  <div className="text-center mb-14">
    {tag && (
      <span className="inline-block bg-purple-100 text-purple-700 text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-4">
        {tag}
      </span>
    )}
    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 leading-tight">{title}</h2>
    {subtitle && <p className="text-gray-500 text-lg max-w-2xl mx-auto leading-relaxed">{subtitle}</p>}
  </div>
);

// ─── Feature Card ────────────────────────────────────────────────────────────────
const FeatureCard = ({ icon: Icon, title, points, accent = 'purple' }: {
  icon: React.ElementType;
  title: string;
  points: string[];
  accent?: 'purple' | 'yellow' | 'green';
}) => {
  const accentMap = {
    purple: 'bg-purple-50 text-purple-600 border-purple-100 hover:border-purple-400 hover:shadow-[0_8px_30px_rgba(124,58,237,0.12)]',
    yellow: 'bg-yellow-50 text-yellow-600 border-yellow-100 hover:border-yellow-400 hover:shadow-[0_8px_30px_rgba(234,179,8,0.12)]',
    green: 'bg-green-50 text-green-600 border-green-100 hover:border-green-400 hover:shadow-[0_8px_30px_rgba(34,197,94,0.12)]',
  };
  const iconBg = { purple: 'bg-purple-100', yellow: 'bg-yellow-100', green: 'bg-green-100' };
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5 }}
      className={`bg-white border rounded-[24px] p-7 transition-all duration-400 hover:-translate-y-1 shadow-[0_4px_20px_rgba(0,0,0,0.04)] ${accentMap[accent]}`}
    >
      <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-5 ${iconBg[accent]}`}>
        <Icon className="w-6 h-6" />
      </div>
      <h3 className="text-lg font-bold text-gray-900 mb-4">{title}</h3>
      <ul className="space-y-2.5">
        {points.map((p, i) => (
          <li key={i} className="flex items-start gap-2.5 text-sm text-gray-600">
            <CheckCircle2 className="w-4 h-4 text-purple-500 flex-shrink-0 mt-0.5" />
            {p}
          </li>
        ))}
      </ul>
    </motion.div>
  );
};

// ═══════════════════════════════════════════════════════════════════════════════
// 1. PSYCHIATRIC SERVICES
// ═══════════════════════════════════════════════════════════════════════════════
const PsychiatricSection = ({ onNavigate }: { onNavigate?: (page: string) => void }) => (
  <SectionWrap id="psychiatric" bg="white">
    <SectionHeader
      tag="Psychiatric Services"
      title={<>Professional Mental Health <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-yellow-500">Care</span></>}
      subtitle="Sereniche Academy's clinical services wing provides hospital-grade psychiatric and psychological care delivered by qualified professionals."
    />

    {/* Intro */}
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="bg-[#F3F0FF] border border-purple-200 rounded-2xl p-7 mb-12 max-w-3xl mx-auto text-center"
    >
      <p className="text-gray-700 leading-relaxed">
        Sereniche Academy isn't just a training institute — it operates a full clinical services wing that delivers
        evidence-based psychiatric, psychological and counselling care to individuals, families and organisations.
        Our team of psychiatrists, clinical psychologists and licensed counsellors work within a collaborative,
        hospital-integrated ecosystem.
      </p>
    </motion.div>

    {/* Service Cards */}
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
      <FeatureCard
        icon={Stethoscope}
        title="Psychiatric Consultation & Treatment"
        accent="purple"
        points={[
          'Diagnostic psychiatric evaluation',
          'Evidence-based psychopharmacology',
          'Medication management & review',
          'Co-morbid condition assessment',
          'In-patient referral coordination',
          'Follow-up & progress monitoring',
        ]}
      />
      <FeatureCard
        icon={Brain}
        title="Clinical Psychology & Psychotherapy"
        accent="purple"
        points={[
          'Individual therapy (CBT, DBT, REBT, ACT)',
          'Trauma-informed psychotherapy',
          'Psychological testing & assessment',
          'Neuropsychological evaluation',
          'Child & adolescent psychology',
          'Crisis stabilisation sessions',
        ]}
      />
      <FeatureCard
        icon={HeartHandshake}
        title="Professional Counselling"
        accent="yellow"
        points={[
          'Grief & loss counselling',
          'Relationship & couples counselling',
          'Career & life-transition counselling',
          'Stress & burnout management',
          'Family systems counselling',
          'Online session availability',
        ]}
      />
    </div>

    {/* Book Appointment CTA */}
    <div className="bg-gradient-to-br from-purple-700 to-purple-900 rounded-[28px] p-10 text-center text-white">
      <h3 className="text-2xl font-bold mb-2">Book an Appointment</h3>
      <p className="text-purple-200 mb-6 max-w-xl mx-auto">
        Connect with our clinical team for an initial assessment. Appointments are available in-person and online.
      </p>
      <CTABlock onNavigate={onNavigate} />
    </div>
  </SectionWrap>
);

// ═══════════════════════════════════════════════════════════════════════════════
// 2. SCHOOL PROGRAMMES
// ═══════════════════════════════════════════════════════════════════════════════
const SchoolSection = ({ onNavigate }: { onNavigate?: (page: string) => void }) => {
  const programmes = [
    {
      tag: 'SMHP',
      title: 'School Mental Health Programme (SMHP)',
      icon: Shield,
      accent: 'purple' as const,
      desc: 'A structured, long-term mental health programme embedded into the school calendar to proactively support student wellbeing.',
      points: [
        'Monthly awareness sessions for students',
        'Individual counselling support on referral',
        'Teacher sensitisation workshops',
        'Mental health screening & early identification',
        'Parental engagement sessions',
        'Crisis response protocol training',
        'Customised annual mental health calendar',
      ],
    },
    {
      tag: 'Student Training',
      title: 'Student Training Workshops',
      icon: BookOpen,
      accent: 'yellow' as const,
      desc: 'Targeted skill-building workshops designed for students at different developmental stages.',
      points: [
        'Emotional regulation & resilience building',
        'Exam stress & performance anxiety management',
        'Self-esteem and identity development',
        'Peer relationship and social skills',
        'Anti-bullying awareness programmes',
        'Career uncertainty & academic pressure support',
        'Leadership and mindfulness sessions',
      ],
    },
    {
      tag: 'FDP',
      title: 'Faculty Development Programme (FDP)',
      icon: Award,
      accent: 'purple' as const,
      desc: 'Empowering teachers and school staff with mental health literacy and first-response skills.',
      points: [
        'Recognising signs of student distress',
        'Mental health first aid training',
        'Trauma-informed classroom practices',
        'Communication techniques for sensitive situations',
        'Staff wellbeing and burnout prevention',
        'Referral pathways and crisis protocols',
      ],
    },
    {
      tag: 'Parent Programme',
      title: 'Parent Mental Health Programme',
      icon: Heart,
      accent: 'yellow' as const,
      desc: 'Bridging the gap between home and school mental health through targeted parent education.',
      points: [
        'Understanding adolescent psychology',
        'Digital wellness & screen time guidance',
        'Supporting children with anxiety or depression',
        'Positive parenting techniques',
        'Open communication and active listening',
        'Navigating academic pressure as a family',
      ],
    },
  ];

  return (
    <SectionWrap id="school" bg="purple">
      <SectionHeader
        tag="School Programmes"
        title={<>Building <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-yellow-500">Mentally Healthy</span> Schools</>}
        subtitle="Comprehensive mental health support programmes for students, teachers, parents and school management — built around India's school calendar."
      />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-7 mb-12">
        {programmes.map((p, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="bg-white border border-gray-100 rounded-[24px] p-7 shadow-[0_4px_20px_rgba(0,0,0,0.04)] hover:-translate-y-1 hover:border-purple-300 hover:shadow-[0_8px_30px_rgba(124,58,237,0.1)] transition-all duration-400"
          >
            <span className="inline-block text-xs font-bold uppercase tracking-widest text-purple-600 bg-purple-50 px-3 py-1 rounded-full mb-4">
              {p.tag}
            </span>
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 rounded-xl bg-purple-100 flex items-center justify-center flex-shrink-0">
                <p.icon className="w-5 h-5 text-purple-600" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 leading-snug">{p.title}</h3>
            </div>
            <p className="text-gray-500 text-sm mb-4 leading-relaxed">{p.desc}</p>
            <ul className="space-y-2">
              {p.points.map((pt, j) => (
                <li key={j} className="flex items-start gap-2 text-sm text-gray-600">
                  <ChevronRight className="w-4 h-4 text-purple-400 flex-shrink-0 mt-0.5" />
                  {pt}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
      <div className="text-center">
        <p className="text-gray-500 mb-6 text-sm">Available for CBSE, ICSE, and State Board schools. Custom packages on request.</p>
        <CTABlock onNavigate={onNavigate} />
      </div>
    </SectionWrap>
  );
};

// ═══════════════════════════════════════════════════════════════════════════════
// 3. CORPORATE WELLNESS
// ═══════════════════════════════════════════════════════════════════════════════
const CorporateSection = ({ onNavigate }: { onNavigate?: (page: string) => void }) => {
  const programmes = [
    {
      icon: Calendar,
      title: 'One-Day Wellness Workshop',
      subtitle: 'High-impact, single-day sessions',
      accent: 'purple' as const,
      points: [
        'Stress identification & management',
        'Burnout prevention strategies',
        'Emotional resilience techniques',
        'Mindfulness and grounding practices',
        'Team wellbeing check-in exercises',
        'Interactive group activities and debrief',
      ],
    },
    {
      icon: Star,
      title: 'Wellness Series (Monthly Programme)',
      subtitle: 'Ongoing structured mental wellness',
      accent: 'yellow' as const,
      points: [
        '4–6 focus sessions per quarter',
        'Theme-based content (anxiety, burnout, relationships)',
        'Pre & post wellbeing assessment',
        'Dedicated mental wellness calendar',
        'Manager-specific emotional intelligence sessions',
        'Employee feedback & programme adaptation',
      ],
    },
    {
      icon: Users,
      title: 'Employee Access Programme (EAP)',
      subtitle: 'Confidential employee counselling access',
      accent: 'green' as const,
      points: [
        'Dedicated counsellor allocation',
        'Up to 6 sessions per employee per quarter',
        'Confidential, non-reportable support',
        'Online & in-person availability',
        'Crisis response and referral pathway',
        'Monthly utilisation report for HR',
      ],
    },
    {
      icon: Target,
      title: 'Leadership Mental Wellness Programme',
      subtitle: 'Executive and manager wellbeing',
      accent: 'purple' as const,
      points: [
        'Psychological safety in leadership',
        'Compassionate leadership training',
        'Decision-making under pressure',
        'Managing difficult conversations',
        'Preventing toxic workplace dynamics',
        '1:1 coaching sessions available',
      ],
    },
  ];

  return (
    <SectionWrap id="corporate" bg="gold">
      <SectionHeader
        tag="Corporate Wellness"
        title={<>Healthier Teams. <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 to-purple-600">Stronger Organisations.</span></>}
        subtitle="Sereniche Academy's corporate wellness arm supports businesses in building psychologically safe, high-performing workplaces through evidence-based mental health programmes."
      />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-7 mb-12">
        {programmes.map((p, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="bg-white border border-gray-100 rounded-[24px] p-7 shadow-[0_4px_20px_rgba(0,0,0,0.04)] hover:-translate-y-1 hover:border-yellow-300 hover:shadow-[0_8px_30px_rgba(234,179,8,0.1)] transition-all duration-400"
          >
            <div className="flex items-center gap-3 mb-2">
              <div className="w-10 h-10 rounded-xl bg-yellow-100 flex items-center justify-center flex-shrink-0">
                <p.icon className="w-5 h-5 text-yellow-600" />
              </div>
              <div>
                <h3 className="text-base font-bold text-gray-900 leading-snug">{p.title}</h3>
                <p className="text-xs text-gray-400">{p.subtitle}</p>
              </div>
            </div>
            <ul className="space-y-2 mt-4">
              {p.points.map((pt, j) => (
                <li key={j} className="flex items-start gap-2 text-sm text-gray-600">
                  <CheckCircle2 className="w-4 h-4 text-yellow-500 flex-shrink-0 mt-0.5" />
                  {pt}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
      <div className="bg-white border border-yellow-200 rounded-2xl p-8 text-center mb-4">
        <h4 className="text-lg font-bold text-gray-900 mb-2">Suitable For</h4>
        <div className="flex flex-wrap justify-center gap-3 mt-4">
          {['IT & Tech Companies', 'Healthcare Organisations', 'Educational Institutions', 'Manufacturing & Industry', 'NGOs & Social Enterprises', 'Startups & SMEs'].map((t, i) => (
            <span key={i} className="text-xs font-semibold bg-yellow-50 border border-yellow-200 text-yellow-700 px-4 py-1.5 rounded-full">
              {t}
            </span>
          ))}
        </div>
      </div>
      <div className="text-center mt-8">
        <CTABlock onNavigate={onNavigate} />
      </div>
    </SectionWrap>
  );
};

// ═══════════════════════════════════════════════════════════════════════════════
// 4. COMMUNITY ENRICHMENT
// ═══════════════════════════════════════════════════════════════════════════════
const CommunitySection = ({ onNavigate }: { onNavigate?: (page: string) => void }) => {
  const programmes = [
    {
      icon: Globe,
      title: 'NGO Partnership Programme',
      points: [
        'Collaborative mental health outreach at scale',
        'Training of NGO frontline workers in mental health first aid',
        'Co-developed awareness campaigns',
        'Referral network building in underserved areas',
        'Funding support & grant identification assistance',
      ],
    },
    {
      icon: Heart,
      title: 'Family Outreach Programme',
      points: [
        'Mental health literacy sessions for families',
        'Caregiver support groups (for families of people with mental illness)',
        'Home-based intervention guidance',
        'Psychoeducation on common disorders',
        'Grief, trauma and loss support for families',
      ],
    },
    {
      icon: Users,
      title: 'Community Outreach & Public Mental Health',
      points: [
        'Free community counselling camps',
        'Village and ward-level mental health awareness drives',
        'Collaboration with Panchayats and local bodies',
        'Multilingual mental health educational materials',
        'Destigmatisation campaigns in public spaces',
      ],
    },
    {
      icon: Lightbulb,
      title: 'Public Awareness Campaigns',
      points: [
        'World Mental Health Day events',
        'Suicide prevention awareness initiatives',
        'Social media mental wellness campaigns',
        'Street plays and nukkad nataks on mental health',
        'Media training for responsible mental health reporting',
      ],
    },
    {
      icon: BookOpen,
      title: 'NSS / NCC / SPC Collaboration',
      points: [
        'Mental health module for NSS and NCC volunteers',
        'Student Police Cadet (SPC) mental wellness integration',
        'Peer support training for volunteer leaders',
        'Camp-based mental health awareness sessions',
        'Certificate of participation for volunteers',
      ],
    },
  ];

  return (
    <SectionWrap id="community" bg="purple">
      <SectionHeader
        tag="Community Enrichment"
        title={<>Mental Health for <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-green-500">Everyone</span></>}
        subtitle="Beyond the classroom and clinic — Sereniche Academy reaches communities, families, NGOs and grassroots organisations to make mental health support accessible and destigmatised."
      />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
        {programmes.map((p, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            className="bg-white border border-gray-100 rounded-[24px] p-7 shadow-[0_4px_20px_rgba(0,0,0,0.04)] hover:-translate-y-1 hover:border-purple-300 hover:shadow-[0_8px_30px_rgba(124,58,237,0.1)] transition-all duration-400"
          >
            <div className="w-11 h-11 rounded-xl bg-purple-100 flex items-center justify-center mb-4">
              <p.icon className="w-5 h-5 text-purple-600" />
            </div>
            <h3 className="text-base font-bold text-gray-900 mb-4 leading-snug">{p.title}</h3>
            <ul className="space-y-2">
              {p.points.map((pt, j) => (
                <li key={j} className="flex items-start gap-2 text-sm text-gray-600">
                  <ChevronRight className="w-4 h-4 text-purple-400 flex-shrink-0 mt-0.5" />
                  {pt}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
      <div className="text-center">
        <CTABlock onNavigate={onNavigate} />
      </div>
    </SectionWrap>
  );
};

// ═══════════════════════════════════════════════════════════════════════════════
// MAIN PAGE
// ═══════════════════════════════════════════════════════════════════════════════
const TABS = [
  { id: 'psychiatric', label: 'Psychiatric Services', icon: Stethoscope },
  { id: 'school', label: 'School Programmes', icon: School },
  { id: 'corporate', label: 'Corporate Wellness', icon: Briefcase },
  { id: 'community', label: 'Community Enrichment', icon: Globe },
] as const;

type TabId = typeof TABS[number]['id'];

export default function MorePage({ onNavigate }: { onNavigate?: (page: string) => void }) {
  const [activeTab, setActiveTab] = useState<TabId>('psychiatric');

  const scrollTo = (id: TabId) => {
    setActiveTab(id);
    setTimeout(() => {
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 50);
  };

  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="pt-36 pb-16 bg-gradient-to-br from-[#F3F0FF] via-white to-[#FFFBEB] relative overflow-hidden">
        <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-purple-400/10 blur-[150px] rounded-full pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-yellow-400/10 blur-[120px] rounded-full pointer-events-none" />
        <div className="max-w-[900px] mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block bg-purple-100 text-purple-700 text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-5">
              The Complete Ecosystem
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight tracking-tight">
              More Than Training.<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-purple-500 to-yellow-500">
                A Complete Mental Health Ecosystem.
              </span>
            </h1>
            <p className="text-gray-500 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed mb-10">
              Sereniche Academy goes beyond education — delivering psychiatric services, school wellbeing programmes,
              corporate wellness solutions and community outreach that together form Kerala's most comprehensive
              mental health ecosystem.
            </p>

            {/* Stats Row */}
            <div className="flex flex-wrap justify-center gap-8 mb-8">
              {[
                { label: 'Lives Reached', value: '10,000+' },
                { label: 'Partner Schools', value: '40+' },
                { label: 'Corporate Clients', value: '25+' },
                { label: 'Community Camps', value: '60+' },
              ].map((s, i) => (
                <motion.div key={i} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 + i * 0.1 }} className="text-center">
                  <div className="text-3xl font-bold text-gray-900">{s.value}</div>
                  <div className="text-xs text-gray-500 uppercase tracking-wider mt-1">{s.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Sticky Tab Navigation */}
      <div className="sticky top-[72px] z-50 bg-white/95 backdrop-blur-xl border-b border-gray-200/60 shadow-[0_4px_20px_-10px_rgba(0,0,0,0.05)]">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex overflow-x-auto hide-scrollbar gap-4 sm:gap-6 py-5 justify-start md:justify-center items-center">
            {TABS.map((tab) => (
              <button
                key={tab.id}
                onClick={() => scrollTo(tab.id)}
                className={`flex items-center gap-3 px-7 py-3.5 rounded-full text-base font-bold whitespace-nowrap transition-all duration-300 flex-shrink-0 border-2 ${activeTab === tab.id
                    ? 'bg-gradient-to-r from-[#7C3AED] to-[#5B21B6] text-white border-purple-400/30 shadow-[0_15px_30px_-8px_rgba(124,58,237,0.5)] scale-[1.05] relative z-10'
                    : 'bg-gray-100/80 text-gray-800 border-gray-200 hover:bg-purple-50 hover:border-purple-200 hover:text-purple-700 hover:scale-[1.02] shadow-sm'
                  }`}
              >
                <tab.icon className={`w-5 h-5 ${activeTab === tab.id ? 'text-white' : 'text-purple-500'}`} />
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Sections */}
      <PsychiatricSection onNavigate={onNavigate} />
      <SchoolSection onNavigate={onNavigate} />
      <CorporateSection onNavigate={onNavigate} />
      <CommunitySection onNavigate={onNavigate} />

      <style>{`
        .hide-scrollbar::-webkit-scrollbar { display: none; }
        .hide-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>
    </div>
  );
}
