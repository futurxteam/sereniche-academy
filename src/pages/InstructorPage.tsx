import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { User, X, ArrowRight, BookOpen, Star, Award, Briefcase } from 'lucide-react';

const instructors = [
  {
    id: 7,
    name: "Dr. Benzir Hussain",
    title: "MBBS, MBA, MD | Consultant Psychiatrist",
    image: "/Dr%20Benzir%20Hussain.jpg",
    bio: "Dr Benzir Hussain specialises in crisis intervention and trauma recovery, working with clients in acute hospital settings and community rehabilitation programmes.",
    expertise: ["Trauma-Informed Care", "Crisis Intervention", "PTSD"],
    experience: "11+ Years",
    courses: ["Crisis Handling", "Emotional Regulation & Trauma"]
  },
  {
    id: 5,
    name: "Dr. Femi",
    title: "MBBS, MD, FPSM | Consultant Psychiatrist",
    image: "/Dr%20Femi%20Mol.jpg",
    bio: "Dr Femi Mol is an expert in motivational interviewing and behaviour change, helping clients and trainees develop practical strategies for lasting transformation.",
    expertise: ["Motivational Interviewing", "Behaviour Therapy", "Health Psychology"],
    experience: "13+ Years",
    courses: ["Behavioural Interventions", "Client Motivation Strategies"]
  },
  {
    id: 2,
    name: "Uveysudheen K H",
    title: "MSc Counselling Psychology | Counselling Psychologist",
    image: "/Uveysudheen%20KH.jpg",
    bio: "Uveysudheen KH specialises in integrative psychotherapy approaches, supporting clients through complex emotional and relational difficulties with a person-centred lens.",
    expertise: ["Integrative Therapy", "Person-Centered", "Relational Work"],
    experience: "10+ Years",
    courses: ["Managing Client Dynamics", "Core Counselling Skills"]
  },
  {
    id: 4,
    name: "Dr. Aswathy Anand",
    title: "PG Clinical Psychology, MPhil Psychology, PhD, PGCFM | Consultant Psychologist",
    image: "/Dr%20Aswathy%20Anand.jpg",
    bio: "Works with children, adolescents, and adults, providing evidence-based psychological care. Focuses on Child & Adolescent Mental Health, Clinical Psychology, CBT, Autism Spectrum Interventions, Behaviour Therapy, Learning Disabilities, Psycho-oncology, Corporate Training, and Family & Marital Therapy, with an approach that integrates clinical expertise and empathy to support growth and well-being.",
    expertise: ["Child Psychology", "DBT", "Developmental Support"],
    experience: "9+ Years",
    courses: ["Child & Adolescent Therapy", "Behaviour Interventions"]
  },
  {
    id: 1,
    name: "Dr. Shemeena",
    title: "MBBS, MD | Consultant Psychiatrist",
    image: "/Dr%20Shemeena.jpg",
    bio: "Dr Shemeena brings deep clinical expertise in evidence-based psychological interventions, having worked across hospital and community mental health settings for over a decade.",
    expertise: ["CBT", "Trauma-Informed Care", "Anxiety Disorders"],
    experience: "12+ Years",
    courses: ["Cognitive Therapy (CBT, REBT)", "Therapist Foundation"]
  },
  {
    id: 6,
    name: "Fr. Ritto Mathew",
    title: "MSW (Medical & Psychiatry), DCP, Certified Hypnotherapist, MH Registration No: 5168 | Mental Health Professional",
    image: "/Fr.%20Ritto%20Mathew.jpg",
    bio: "Provides psychosocial support, clinical counselling, and hypnotherapy, working with individuals to manage emotional, psychological, and behavioral challenges. Follows a client-centered, ethical approach, creating a safe and confidential space, using evidence-based techniques to enhance coping skills, promote personal growth, and support overall mental well-being.",
    expertise: ["Pastoral Counselling", "Psychodynamic", "Grief & Loss"],
    experience: "15+ Years",
    courses: ["Therapist Ethics & Development", "Grief & Bereavement"]
  },

  {
    id: 3,
    name: "Mary Anusha Sebastian",
    title: "BSc Psychology, MSc Clinical Psychology – Manipal Academy of Higher Education, M.Phil Clinical Psychology – IMHANS | RCI Licensed Clinical Psychologist",
    image: "/Mary%20Anusha%20Sebastain.jpg",
    bio: "Provides psychological interventions using CBT, DBT, ACT, MET, Narrative Therapy, Behaviour Therapy, PMT and Couple Therapy, with additional training in Emotion-Focused Therapy (EFT). Conducts psychological assessments for diagnostic clarification, personality, cognitive functioning, attention, and emotional/behavioural concerns.",
    expertise: ["Family Therapy", "Couples Counseling", "Systemic Work"],
    experience: "11+ Years",
    courses: ["Relational & Systemic Work", "Emotional Regulation"]
  },
  {
    id: 8,
    name: "Aayisha Salim",
    title: "MSc Psychology | Consultant Psychologist",
    image: "/Aayisha%20Salim.jpg",
    bio: "Aayisha Salim is a consultant psychologist focusing on holistic mental health support and clinical assessments within a hospital-integrated ecosystem.",
    expertise: ["Clinical Assessment", "General Psychology", "Mental Health Support"],
    experience: "5+ Years",
    courses: ["Introduction to Clinical Practice", "Foundation Skills"]
  }

];

export default function InstructorPage() {
  const [selectedInstructor, setSelectedInstructor] = useState<typeof instructors[0] | null>(null);

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
          Our Facilitators — <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600">Real Clinicians. Real Experts.</span>
        </h1>
        <p className="text-gray-500 text-lg max-w-2xl mx-auto">
          Learn directly from senior clinical psychologists, psychiatrists, and specialized therapists who bring decades of real-world hospital experience.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {instructors.map((instructor, idx) => (
          <motion.div
            key={instructor.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.4 }}
            onClick={() => setSelectedInstructor(instructor)}
            className="bg-white border border-gray-100 rounded-[20px] overflow-hidden cursor-pointer hover:-translate-y-2.5 shadow-[0_10px_25px_rgba(0,0,0,0.08)] hover:shadow-[0_20px_40px_rgba(0,0,0,0.12)] transition-all duration-500 group"
          >
            <div className="aspect-[3/4] overflow-hidden relative">
              <img
                src={instructor.image}
                alt={instructor.name}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
            </div>
            <div className="p-7 bg-white relative z-20">
              <h3 className="text-xl font-bold text-[#111827] mb-1">{instructor.name}</h3>
              <p className="text-purple-600 font-bold text-sm mb-4">{instructor.title}</p>
              <div className="flex items-center gap-2 text-gray-500 text-sm mb-5">
                <Briefcase className="w-4 h-4 text-purple-400" />
                <span className="font-medium">{instructor.experience}</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {instructor.expertise.slice(0, 3).map((exp, i) => (
                  <span key={i} className="text-[11px] font-bold bg-gray-50 border border-gray-100 px-2.5 py-1.5 rounded-lg text-gray-500">
                    {exp}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <AnimatePresence>
        {selectedInstructor && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/75 backdrop-blur-md"
            onClick={() => setSelectedInstructor(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="bg-[#1a0b2e]/95 backdrop-blur-xl border border-purple-800/50 rounded-[32px] p-8 md:p-10 max-w-3xl w-full relative overflow-hidden shadow-[0_32px_80px_rgba(0,0,0,0.6)]"
              onClick={e => e.stopPropagation()}
            >
              {/* Subtle glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-purple-600/10 via-transparent to-yellow-500/5 pointer-events-none rounded-[32px]" />

              {/* Close button */}
              <button
                onClick={() => setSelectedInstructor(null)}
                className="absolute top-6 right-6 text-gray-300 hover:text-white transition-colors bg-white/10 hover:bg-white/20 p-2 rounded-full z-10"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="flex flex-col md:flex-row gap-8 relative z-10">
                {/* Photo */}
                <div className="w-full md:w-[38%] flex-shrink-0">
                  <img
                    src={selectedInstructor.image}
                    alt={selectedInstructor.name}
                    className="w-full aspect-[3/4] object-cover rounded-2xl border border-purple-700/40 shadow-[0_8px_32px_rgba(0,0,0,0.5)]"
                  />
                </div>

                {/* Content */}
                <div className="w-full md:w-[62%] flex flex-col justify-center">
                  <h2 className="text-3xl font-bold text-white mb-1 leading-tight">{selectedInstructor.name}</h2>
                  <p className="text-yellow-400 font-semibold text-base mb-1">{selectedInstructor.title}</p>
                  <p className="text-purple-300 text-sm font-medium mb-6 flex items-center gap-1.5">
                    <Briefcase className="w-3.5 h-3.5" />
                    {selectedInstructor.experience}
                  </p>

                  <div className="space-y-6">
                    {/* About */}
                    <div className="bg-white/5 border border-white/10 rounded-2xl p-5">
                      <h4 className="text-white font-semibold mb-2 flex items-center gap-2 text-sm uppercase tracking-wider">
                        <User className="w-4 h-4 text-purple-400" /> About
                      </h4>
                      <p className="text-gray-200 leading-[1.7] text-sm">
                        {selectedInstructor.bio}
                      </p>
                    </div>

                    {/* Expertise */}
                    <div>
                      <h4 className="text-white font-semibold mb-3 flex items-center gap-2 text-sm uppercase tracking-wider">
                        <Award className="w-4 h-4 text-purple-400" /> Expertise
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {selectedInstructor.expertise.map((exp, i) => (
                          <span key={i} className="text-xs bg-purple-500/25 border border-purple-500/40 text-purple-200 px-3 py-1.5 rounded-full font-medium">
                            {exp}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Courses */}
                    <div>
                      <h4 className="text-white font-semibold mb-3 flex items-center gap-2 text-sm uppercase tracking-wider">
                        <BookOpen className="w-4 h-4 text-purple-400" /> Courses Taught
                      </h4>
                      <ul className="space-y-2">
                        {selectedInstructor.courses.map((course, i) => (
                          <li key={i} className="text-sm text-gray-200 flex items-center gap-2.5 leading-relaxed">
                            <div className="w-1.5 h-1.5 rounded-full bg-yellow-400 flex-shrink-0" />
                            {course}
                          </li>
                        ))}
                      </ul>
                    </div>
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

