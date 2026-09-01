export interface Course {
  id: number;
  type: 'online' | 'offline' | 'internship';
  slug: string;
  title: string;
  description: string;
  image: string;
  instructor: string;
  duration: string;
  level: string;
  price: string;
  rating: number;
  reviews: number;
  fullDescription: string;
  highlights: string[];
  trackOptions?: { title: string; description: string; }[];
  whoThisIsFor: string | string[];
  formatDetails: {
    mode: string;
    duration: string;
    schedule?: string;
    location?: string;
    certification?: string;
    language: string;
  };
}

export const courses: Course[] = [
  {
    id: 1,
    type: 'online',
    slug: 'psychology-finishing-school-online',
    title: "Finishing School for Psychology Graduates",
    description: "Creating therapy-ready therapists.",
    image: "/course-finishing school-online.jpg",
    instructor: "Expert Faculty Panel",
    duration: "50 Days",
    level: "Postgraduates / Final Year",
    price: "Contact for Details",
    rating: 4.9,
    reviews: 154,
    fullDescription: "The Finishing School for Psychology Graduates is Sereniche Academy's flagship 50-day therapist development programme    and the only one in Kerala that trains you inside a real hospital ecosystem. Sereniche Academy operates under the Sereniche Centre for Behaviour Medicine, Futureace Hospital, Kerala. Your training happens alongside a functioning multidisciplinary mental health team: psychiatrist, clinical psychologist, counselling psychologist, psychiatric social worker, and special educator. Designed for MA/MSc Psychology graduates ready to move beyond theory, this is where clinical confidence is built through real, guided experience.",
    highlights: [
      "50 structured days across 8+ clinical modules",
      "Live online sessions    recorded sessions also available",
      "Guidance from 10+ expert clinicians, including clinical psychologists, psychiatrists, consultant psychologists, etc.",
      "Mock therapy sessions supervised from Week 1    peer observation, expert feedback, cross mentoring",
      "Peer supervision circles    daily guided reflection and feedback",
      "Case diary and case archive development",
      "Professional portfolio building",
      "Letter of Recommendation for top performers",
      "Placement support through Sereniche Ecosystem Network",
      "Alumni Network & Peer Community Access"
    ],
    whoThisIsFor: "Psychology graduates, MSc/MA Psychology students in their final year, and early-career mental health professionals looking to build structured clinical competence.",
    formatDetails: {
      mode: "Live Online",
      duration: "50 Days",
      schedule: "Weekday sessions with structured weekly progression",
      language: "Malayalam / English"
    }
  },
  {
    id: 2,
    type: 'offline',
    slug: 'psychology-finishing-school-offline',
    title: "Finishing School for Psychology Graduates",
    description: "The full clinical experience. In a real clinical world.",
    image: "/course-finishing school.jpg",
    instructor: "Expert Faculty Panel",
    duration: "50 Days",
    level: "Postgraduates",
    price: "Contact for Details",
    rating: 4.9,
    reviews: 128,
    fullDescription: "The Finishing School for Psychology Graduates is Sereniche Academy's flagship 50-day therapist development programme    and the only one in Kerala that trains you inside a real hospital ecosystem. Sereniche Academy operates under the Sereniche Centre for Behaviour Medicine, Futureace Hospital, Kerala. Your training happens alongside a functioning multidisciplinary mental health team: psychiatrist, clinical psychologist, counselling psychologist, psychiatric social worker, and special educator. Designed for MA/MSc Psychology graduates ready to move beyond theory, this is where clinical confidence is built through real, guided experience.",
    highlights: [
      "Everything included in the Online format, delivered in person",
      "Exclusive Hospital-Based Clinical Immersion    available only in the offline format",
      "Direct observation of clinical cases in a real hospital environment",
      "Supervised exposure to psychiatric assessments and clinical consultations",
      "Interaction with interdisciplinary clinical teams",
      "Live Mental Status Examination (MSE) observation and learning",
      "In-person clinical labs with hands-on therapy skill practice",
      "Face-to-face mock therapy sessions with expert feedback",
      "In-person peer supervision and case discussion circles",
      "Real-time mentoring and clinical guidance from psychiatrists and clinical psychologists",
      "Case diary, case archive, and professional portfolio development",
      "Certificate of completion from Sereniche Academy",
      "Offline graduation and certification ceremony"
    ],
    whoThisIsFor: "Psychology graduates who want the deepest, most immersive clinical training experience    combining structured programme learning with real hospital exposure in a mentored environment.",
    formatDetails: {
      mode: "In-Person (Offline) + Hospital Clinical Immersion",
      duration: "50 Days",
      location: "Sereniche Academy",
      language: "Malayalam / English"
    }
  },
  {
    id: 3,
    type: 'internship',
    slug: 'clinical-internship-programme',
    title: "Clinical Internship Programme",
    description: "Real cases. Real settings. Real clinical growth.",
    image: "/Clinical Internship Programme.JPG",
    instructor: "Expert Faculty Panel",
    duration: "15 Days / 30 Days",
    level: "UG & PG Students",
    price: "Contact for Details",
    rating: 4.8,
    reviews: 86,
    fullDescription: "The Sereniche Academy Clinical Internship Programme is a structured, supervised clinical exposure programme designed specifically for psychology students who want meaningful, hands-on experience in a real clinical environment    before they graduate. Offered as intensive 15-day and 30-day tracks, this internship places participants at the centre of active clinical practice, under the direct mentorship of experienced clinical psychologists and psychiatrists. Every day is purposeful, every session is guided, and every observation becomes a learning opportunity.",
    highlights: [
      "Live clinical case observations in a hospital and clinical setting",
      "Structured case discussions with clinical psychologists and psychiatrists",
      "Mental Status Examination (MSE)    observation, understanding, and application",
      "Case history taking    process, structure, and clinical reasoning",
      "Clinical documentation    exposure to real case files, notes, and records",
      "Diagnostic discussions    understanding how clinical formulations are built",
      "Supervised interaction with the clinical assessment process",
      "Understanding the psychiatrist-psychologist-counsellor collaboration model",
      "Exposure to diverse clinical presentations    mood disorders, anxiety, psychosis, neurodevelopmental conditions, and more",
      "Daily debriefs and guided reflection sessions"
    ],
    trackOptions: [
      {
        title: "15-Day Intensive Track",
        description: "A focused, immersive two-week clinical exposure programme. Ideal for students seeking a structured introduction to real clinical environments during semester breaks or holidays."
      },
      {
        title: "30-Day Comprehensive Track",
        description: "A deeper, month-long clinical immersion experience with broader case exposure, more supervised clinical interaction, and a more complete understanding of the clinical process from assessment to formulation. Recommended for students in their final year or those preparing to enter clinical roles."
      }
    ],
    whoThisIsFor: "Undergraduate and postgraduate psychology students looking to supplement their academic learning with real clinical exposure, build observational and clinical thinking skills, and strengthen their professional foundation before entering practice.",
    formatDetails: {
      mode: "In-Person (Clinical Setting)",
      duration: "15 Days / 30 Days",
      location: "Sereniche Academy / Futureace Hospital",
      certification: "Certificate of Internship Completion provided",
      language: "Malayalam / English"
    }
  },
  {
    id: 4,
    type: 'online',
    slug: 'art-therapy-certificate-course',
    title: "Art Therapy",
    description: "A certificate course in art therapy and expressive arts — therapeutic expression, creative interventions, and hands-on experiential sessions.",
    image: "/course-art-therapy.png",
    instructor: "Expert Faculty Panel",
    duration: "1 Month",
    level: "Psychology / Social Work",
    price: "Contact for Details",
    rating: 4.9,
    reviews: 42,
    fullDescription: "A practical certificate course introducing Art Therapy and expressive arts to candidates from Psychology or Social Work backgrounds. Spanning 30 hours of live online sessions with recorded sessions available, this programme covers therapeutic expression, creative interventions, and meaningful case discussions — all delivered through hands-on experiential learning. Participants will explore the intersection of creativity and psychological healing, developing skills to facilitate art-based therapeutic processes across diverse populations. It is made clear that expressive-arts and Art Therapy skills are an integral part of the learning focus.",
    highlights: [
      "30 hours of structured live online sessions",
      "Recorded sessions available for flexible learning",
      "Hands-on experiential and art-making sessions",
      "Introduction to art therapy theory and expressive arts frameworks",
      "Principles of creativity, symbolism and therapeutic expression",
      "Art therapy interventions for children, adolescents and adults",
      "Group art therapy activities and workshop facilitation skills",
      "Ethics, professional boundaries and scope of practice",
      "Case discussions and treatment planning in art therapy",
      "Certificate of completion from Sereniche Academy"
    ],
    whoThisIsFor: [
      "UG & PG students of Psychology and Medical Social Work (MSW)",
      "Practicing counsellors, psychologists, and special educators",
      "Working professionals in schools, NGOs, and corporate wellness",
      "Professionals looking to add expressive-arts skills"
    ],
    formatDetails: {
      mode: "Live Online",
      duration: "1 Month (30 Hours)",
      schedule: "Recorded sessions also available",
      certification: "Certificate Course — Sereniche Academy",
      language: "Malayalam / English"
    }
  },
  {
    id: 5,
    type: 'online',
    slug: 'strategic-diploma-school-counselling',
    title: "Strategic Diploma in School Counselling",
    description: "Finishing School for School Counsellors",
    image: "/course-finishing school-online.jpg",
    instructor: "Expert Faculty Panel",
    duration: "03 Months",
    level: "Psychology / Social Work",
    price: "Contact for Details",
    rating: 4.9,
    reviews: 62,
    fullDescription: "A fully online, 3-month Strategic Diploma in School Counselling. This programme is designed as a finishing school for school counsellors, providing an intensive 40-hour training breakdown with 35 hours of online sessions and 5 hours of practical school hours. The curriculum is meticulously crafted to cover every essential aspect of working with children and adolescents within a school system.",
    highlights: [
      "35 Hours of Online Sessions",
      "05 Hours Practical School Hours",
      "Mini Project Completion",
      "Comprehensive modules on Child & Adolescent Development",
      "Training in Learning, Behaviour & Neurodiversity",
      "Practical focus on Collaboration and Consultation in Schools"
    ],
    whoThisIsFor: "Candidates from Psychology or Social Work backgrounds looking to specialize in school counselling and establish a firm foundation in educational and child psychology systems.",
    formatDetails: {
      mode: "Online Programme",
      duration: "03 Months (40 Hours Total Training)",
      language: "English / Malayalam",
      certification: "Strategic Diploma in School Counselling"
    }
  }
];
