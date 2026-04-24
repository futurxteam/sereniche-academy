import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Clock, Users, Star, ArrowRight, X, CheckCircle2, MonitorPlay, Activity, BookOpen } from 'lucide-react';

const courses = [
  {
    id: 1,
    title: "Clinical Psychology Finishing School",
    description: "Transform your psychology degree into confident, real-world clinical practice in just 50 days.",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=600",
    instructor: "Dr. Sarah Jenkins & Panel",
    duration: "50 Days",
    level: "Intermediate",
    price: "₹45,000",
    rating: 4.9,
    reviews: 128,
    fullDescription: "This intensive 50-day program is designed specifically for psychology graduates who want to bridge the gap between academic theory and real-world clinical practice. You will be immersed in a hospital-integrated ecosystem, learning directly from senior psychiatrists and clinical psychologists.",
    curriculum: [
      "Week 1-2: Foundations of Clinical Practice",
      "Week 3-4: Advanced Therapeutic Modalities",
      "Week 5-6: Psychiatric Interface & Medication",
      "Week 7: Clinical Case Formulation"
    ],
    outcomes: [
      "Conduct therapy sessions confidently",
      "Apply multiple therapy models (CBT, REBT, DBT)",
      "Understand psychiatric referrals and medication",
      "Build a professional clinical case portfolio"
    ]
  },
  {
    id: 2,
    title: "Advanced CBT Masterclass",
    description: "Deep dive into Cognitive Behavioral Therapy techniques for complex clinical presentations.",
    image: "https://images.unsplash.com/photo-1551847677-dc82d7624f5b?auto=format&fit=crop&q=80&w=600",
    instructor: "Dr. Sarah Jenkins",
    duration: "4 Weeks",
    level: "Advanced",
    price: "₹15,000",
    rating: 4.8,
    reviews: 85,
    fullDescription: "Take your CBT skills to the next level. This masterclass focuses on applying CBT to treatment-resistant depression, severe anxiety disorders, and personality disorders. Includes live demonstrations and intensive role-play.",
    curriculum: [
      "Module 1: Advanced Cognitive Restructuring",
      "Module 2: Schema-Focused CBT",
      "Module 3: Behavioral Experiments",
      "Module 4: Relapse Prevention Strategies"
    ],
    outcomes: [
      "Master advanced cognitive restructuring",
      "Develop complex case formulations",
      "Handle therapeutic resistance",
      "Integrate mindfulness with traditional CBT"
    ]
  },
  {
    id: 3,
    title: "Foundations of Family Therapy",
    description: "Learn to navigate complex family dynamics and systemic interventions.",
    image: "https://images.unsplash.com/photo-1529156069898-49953eb1b5ae?auto=format&fit=crop&q=80&w=600",
    instructor: "Dr. Maya Patel",
    duration: "6 Weeks",
    level: "Beginner to Intermediate",
    price: "₹18,000",
    rating: 4.9,
    reviews: 102,
    fullDescription: "Move beyond individual therapy and learn to treat the family system. This course covers structural, strategic, and Bowenian family therapy models, providing you with the tools to conduct effective multi-person sessions.",
    curriculum: [
      "Week 1: Systems Theory Basics",
      "Week 2-3: Structural Family Therapy",
      "Week 4: Strategic Interventions",
      "Week 5-6: Bowenian Models & Genograms"
    ],
    outcomes: [
      "Conduct systemic assessments",
      "Manage conflict in session",
      "Apply circular questioning techniques",
      "Create genograms and family maps"
    ]
  },
  {
    id: 4,
    title: "Trauma-Informed Therapy Certification",
    description: "Equip yourself with the skills to safely and effectively treat trauma survivors.",
    image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&q=80&w=600",
    instructor: "Dr. Sarah Jenkins",
    duration: "6 Weeks",
    level: "Intermediate",
    price: "₹22,000",
    rating: 4.9,
    reviews: 156,
    fullDescription: "Understand the neurobiology of trauma and learn evidence-based interventions to help clients process traumatic memories safely without re-traumatization.",
    curriculum: [
      "Week 1: Neurobiology of Trauma",
      "Week 2: Safety and Stabilization",
      "Week 3-4: Processing Traumatic Memories",
      "Week 5-6: Integration and Post-Traumatic Growth"
    ],
    outcomes: [
      "Understand trauma responses in the brain",
      "Implement grounding and stabilization techniques",
      "Safely process traumatic memories",
      "Foster post-traumatic growth"
    ]
  },
  {
    id: 5,
    title: "Child & Adolescent Counselling",
    description: "Specialized training for working with younger populations and their unique challenges.",
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=600",
    instructor: "Dr. Maya Patel",
    duration: "5 Weeks",
    level: "Beginner",
    price: "₹16,000",
    rating: 4.7,
    reviews: 92,
    fullDescription: "Learn age-appropriate therapeutic interventions, play therapy basics, and how to effectively engage with parents and schools to support child and adolescent mental health.",
    curriculum: [
      "Week 1: Developmental Psychology Review",
      "Week 2: Engaging Children in Therapy",
      "Week 3: Play Therapy Techniques",
      "Week 4: Adolescent Challenges & Interventions",
      "Week 5: Working with Parents & Schools"
    ],
    outcomes: [
      "Build rapport with children and teens",
      "Utilize play therapy techniques",
      "Address behavioral and emotional issues",
      "Collaborate effectively with parents"
    ]
  },
  {
    id: 6,
    title: "Advanced DBT Skills Training",
    description: "Master Dialectical Behavior Therapy skills for emotional dysregulation.",
    image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=80&w=600",
    instructor: "Prof. David Chen",
    duration: "4 Weeks",
    level: "Advanced",
    price: "₹19,000",
    rating: 4.8,
    reviews: 114,
    fullDescription: "An intensive dive into the four modules of DBT: Mindfulness, Distress Tolerance, Emotion Regulation, and Interpersonal Effectiveness. Ideal for treating BPD and severe emotional dysregulation.",
    curriculum: [
      "Module 1: Core Mindfulness",
      "Module 2: Distress Tolerance",
      "Module 3: Emotion Regulation",
      "Module 4: Interpersonal Effectiveness"
    ],
    outcomes: [
      "Teach core mindfulness skills",
      "Implement distress tolerance strategies",
      "Guide clients in emotion regulation",
      "Improve interpersonal effectiveness"
    ]
  },
  {
    id: 7,
    title: "Clinical Case Formulation Bootcamp",
    description: "Learn how to conceptualize cases effectively to guide your treatment plans.",
    image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&q=80&w=600",
    instructor: "Dr. Sarah Jenkins",
    duration: "3 Weeks",
    level: "Intermediate",
    price: "₹12,000",
    rating: 4.9,
    reviews: 78,
    fullDescription: "Move beyond symptom management. Learn how to connect the dots between a client's history, current presentation, and underlying mechanisms to create a cohesive and actionable treatment plan.",
    curriculum: [
      "Week 1: The Art of Assessment",
      "Week 2: Connecting the Dots (Formulation)",
      "Week 3: Translating Formulation to Treatment"
    ],
    outcomes: [
      "Conduct comprehensive clinical assessments",
      "Develop accurate case conceptualizations",
      "Create targeted treatment plans",
      "Adjust formulations based on client progress"
    ]
  },
  {
    id: 8,
    title: "Relationship & Couple Therapy",
    description: "Evidence-based approaches to helping couples navigate conflict and rebuild connection.",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=600",
    instructor: "Dr. Maya Patel",
    duration: "6 Weeks",
    level: "Intermediate",
    price: "₹18,000",
    rating: 4.8,
    reviews: 135,
    fullDescription: "Learn how to manage high-conflict couples, address infidelity, and foster secure attachment using principles from Gottman Method and Emotionally Focused Therapy (EFT).",
    curriculum: [
      "Week 1: Assessment of Couples",
      "Week 2: Managing High Conflict",
      "Week 3-4: Emotionally Focused Interventions",
      "Week 5: Addressing Infidelity & Betrayal",
      "Week 6: Fostering Secure Attachment"
    ],
    outcomes: [
      "Assess relationship dynamics accurately",
      "De-escalate high-conflict situations",
      "Facilitate emotional connection",
      "Guide couples through betrayal recovery"
    ]
  },
  {
    id: 9,
    slug: "uiux-bootcamp",
    title: "Ultimate UI/UX Design Bootcamp",
    description: "Master the art of web design with our comprehensive course. Learn HTML, CSS, and cutting-edge design principles.",
    image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&q=80&w=800",
    instructor: "David Warner",
    duration: "12 Weeks",
    level: "Intermediate",
    price: "$300",
    rating: 5.0,
    reviews: 8500,
    fullDescription: "A comprehensive journey through UI/UX design. Master tools, principles, and workflows required to build stunning interfaces that users love.",
    curriculum: [
      "Week 1-4: UX Fundamentals & Context",
      "Week 5-8: UI Principles & Typography",
      "Week 9-12: Advanced Prototyping in Figma"
    ],
    outcomes: [
      "Master Figma entirely",
      "Build a complete UI/UX portfolio",
      "Understand user psychology"
    ]
  },
  {
    id: 10,
    slug: "design-fundamentals",
    title: "Interactive Design Fundamentals",
    description: "Master the art of web design with our comprehensive course. Learn HTML, CSS, and cutting-edge design principles.",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=800",
    instructor: "Jessica Taylor",
    duration: "8 Weeks",
    level: "Intermediate",
    price: "$300",
    rating: 4.9,
    reviews: 8500,
    fullDescription: "Interactive elements bring static designs to life. Learn micro-interactions, motion design, and cutting edge web development principles.",
    curriculum: [
      "Week 1-3: Intro to Interaction",
      "Week 4-6: Advanced Micro-interactions",
      "Week 7-8: Handoff & Implementation"
    ],
    outcomes: [
      "Design advanced animations",
      "Understand developer handoff",
      "Master component states"
    ]
  },
  {
    id: 11,
    slug: "creative-web",
    title: "Creative Web Design Essentials",
    description: "Master Figma with industry-leading tactics that will help you complete projects with confidence.",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=800",
    instructor: "James Anderson",
    duration: "10 Weeks",
    level: "Intermediate",
    price: "$400",
    rating: 4.8,
    reviews: 8500,
    fullDescription: "A deep dive into creative web layout techniques, modern typography, and color theory to help you craft award-winning sites.",
    curriculum: [
      "Week 1-3: Color Theory & Typography",
      "Week 4-7: Layouts & Grids",
      "Week 8-10: Advanced Composition"
    ],
    outcomes: [
      "Design brutalist spacing",
      "Apply confident color selection",
      "Structure grid layouts"
    ]
  }
];

export default function CoursesPage({ onNavigate }: { onNavigate?: (page: string) => void }) {
  const [selectedCourse, setSelectedCourse] = useState<typeof courses[0] | null>(null);
  const [highlightedCourse, setHighlightedCourse] = useState<string | null>(null);

  React.useEffect(() => {
    // Need to handle both initial load and hash change if any
    const handleHash = () => {
      const hash = window.location.hash.replace('#', '');
      if (hash) {
        setHighlightedCourse(hash);
        // Scroll to the element after a short delay to let rendering finish
        setTimeout(() => {
          const el = document.getElementById(hash);
          if (el) {
            el.scrollIntoView({ behavior: 'smooth', block: 'center' });
          }
        }, 300);
        
        // Remove highlight after 2 seconds
        setTimeout(() => {
          setHighlightedCourse(null);
        }, 2000);
      }
    };

    handleHash();
    
    // Fallback occasionally since in SPA hash might change dynamically
    window.addEventListener('hashchange', handleHash);
    return () => window.removeEventListener('hashchange', handleHash);
  }, []);

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
      className="pt-32 pb-24 px-4 sm:px-6 lg:px-8 max-w-[1200px] mx-auto relative z-10"
    >
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 tracking-tight">
          Explore Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600">Courses</span>
        </h1>
        <p className="text-gray-500 text-lg max-w-2xl mx-auto">
          Hospital-integrated, clinically focused training programs designed to build real-world therapeutic competence.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {courses.map((course, idx) => {
          // @ts-ignore
          const slug = course.slug || course.title.toLowerCase().replace(/[^a-z0-9]+/g, '-');
          const isHighlighted = highlightedCourse === slug;

          return (
          <motion.div
            key={course.id}
            id={slug}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            onClick={() => setSelectedCourse(course)}
            className={`bg-white backdrop-blur-xl border ${isHighlighted ? 'border-purple-600 shadow-[0_0_30px_rgba(124,58,237,0.4)] scale-105 z-10' : 'border-gray-200 shadow-[0_4px_20px_rgba(0,0,0,0.05)]'} rounded-[24px] overflow-hidden flex flex-col cursor-pointer hover:-translate-y-2 hover:border-yellow-400 hover:shadow-[0_8px_30px_rgba(124,58,237,0.15)] transition-all duration-500 group`}
          >
            <div className="h-48 overflow-hidden relative">
              <img 
                src={course.image} 
                alt={course.title} 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute top-4 right-4 bg-black/60 backdrop-blur-md px-3 py-1 rounded-full text-sm font-medium text-white flex items-center gap-1 border border-gray-200">
                <Star className="w-3.5 h-3.5 text-yellow-400 fill-yellow-400" />
                {course.rating}
              </div>
            </div>
            
            <div className="p-6 flex flex-col flex-grow">
              <div className="flex items-center gap-4 text-xs font-medium text-gray-500 uppercase tracking-wider mb-3">
                <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5" /> {course.duration}</span>
                <span className="flex items-center gap-1"><Activity className="w-3.5 h-3.5" /> {course.level}</span>
              </div>
              
              <h3 className="text-xl font-bold text-gray-900 mb-2 leading-tight">{course.title}</h3>
              <p className="text-gray-500 text-sm mb-4 flex-grow">{course.description}</p>
              
              <div className="flex items-center gap-2 mb-6">
                <div className="w-6 h-6 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center text-xs font-bold text-gray-900">
                  {course.instructor.charAt(0)}
                </div>
                <span className="text-sm text-gray-600">{course.instructor}</span>
              </div>
              
              <div className="flex items-center justify-end pt-4 border-t border-gray-200 mt-auto">
                <button 
                  className="text-sm font-bold text-purple-600 group-hover:text-yellow-600 transition-colors flex items-center gap-1"
                >
                  View Details <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          </motion.div>
          );
        })}
      </div>

      <AnimatePresence>
        {selectedCourse && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-sm overflow-y-auto"
            onClick={() => setSelectedCourse(null)}
          >
            <motion.div 
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="bg-gradient-to-br from-white to-[#2A1035] border border-gray-200 rounded-[32px] max-w-4xl w-full relative overflow-hidden my-auto"
              onClick={e => e.stopPropagation()}
            >
              <button 
                onClick={() => setSelectedCourse(null)}
                className="absolute top-6 right-6 z-20 text-gray-900/70 hover:text-gray-900 transition-colors bg-black/40 hover:bg-black/60 backdrop-blur-md p-2 rounded-full"
              >
                <X className="w-6 h-6" />
              </button>
              
              <div className="h-64 sm:h-80 relative w-full">
                <img 
                  src={selectedCourse.image} 
                  alt={selectedCourse.title} 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-white via-[#1A1025]/60 to-transparent" />
                <div className="absolute bottom-0 left-0 p-8 w-full">
                  <div className="flex flex-wrap items-center gap-4 text-sm font-medium text-purple-300 uppercase tracking-wider mb-3">
                    <span className="flex items-center gap-1.5 bg-purple-900/50 px-3 py-1 rounded-full backdrop-blur-sm border border-purple-500/30"><Clock className="w-4 h-4" /> {selectedCourse.duration}</span>
                    <span className="flex items-center gap-1.5 bg-purple-900/50 px-3 py-1 rounded-full backdrop-blur-sm border border-purple-500/30"><Activity className="w-4 h-4" /> {selectedCourse.level}</span>
                  </div>
                  <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 leading-tight">{selectedCourse.title}</h2>
                </div>
              </div>
              
              <div className="p-8 grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="md:col-span-2 space-y-8">
                  <div>
                    <h4 className="text-xl font-bold text-gray-900 mb-4">About This Program</h4>
                    <p className="text-gray-600 leading-relaxed">
                      {selectedCourse.fullDescription}
                    </p>
                  </div>
                  
                  <div>
                    <h4 className="text-xl font-bold text-gray-900 mb-4">Curriculum Overview</h4>
                    <div className="space-y-3">
                      {selectedCourse.curriculum.map((item, i) => (
                        <div key={i} className="flex items-start gap-3 bg-gray-50 border border-gray-200 p-4 rounded-xl">
                          <BookOpen className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" />
                          <span className="text-gray-600 text-sm font-medium">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="text-xl font-bold text-gray-900 mb-4">What You Will Learn</h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {selectedCourse.outcomes.map((outcome, i) => (
                        <div key={i} className="flex items-start gap-3">
                          <CheckCircle2 className="w-5 h-5 text-yellow-600 flex-shrink-0 mt-0.5" />
                          <span className="text-gray-600 text-sm">{outcome}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                
                <div className="md:col-span-1">
                  <div className="bg-gray-50 border border-gray-200 rounded-2xl p-6 sticky top-6">
                    <div className="text-gray-500 text-sm mb-1">Program Fee</div>
                    <div className="text-3xl font-bold text-gray-900 mb-6">{selectedCourse.price}</div>
                    
                    <div className="space-y-4 mb-8">
                      <div className="flex items-center gap-3 text-sm text-gray-600">
                        <MonitorPlay className="w-4 h-4 text-purple-600" /> Live Online + Clinical Lab
                      </div>
                      <div className="flex items-center gap-3 text-sm text-gray-600">
                        <Users className="w-4 h-4 text-purple-600" /> Limited Batch Size
                      </div>
                      <div className="flex items-center gap-3 text-sm text-gray-600">
                        <Star className="w-4 h-4 text-purple-600" /> {selectedCourse.rating} ({selectedCourse.reviews} reviews)
                      </div>
                    </div>
                    
                    <button 
                      onClick={() => {
                        if (onNavigate) {
                          window.history.pushState({}, '', '#course-enquiry');
                          onNavigate('contact');
                        }
                      }}
                      className="group w-full bg-gradient-to-r from-purple-600 to-purple-500 hover:from-purple-500 hover:to-purple-400 text-white py-3 rounded-xl font-bold transition-all duration-300 shadow-[0_0_20px_rgba(124,58,237,0.3)] hover:-translate-y-1 hover:shadow-[0_0_30px_rgba(124,58,237,0.5)] flex items-center justify-center gap-2 border border-transparent hover:border-purple-300"
                    >
                      Enroll Now <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
