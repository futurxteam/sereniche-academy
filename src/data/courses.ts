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
  whoThisIsFor: string;
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
    title: "Psychology Finishing School — Online",
    description: "Creating therapy-ready therapists.",
    image: "/course-finishing school-online.jpg",
    instructor: "Expert Faculty Panel",
    duration: "50 Days",
    level: "Postgraduates / Final Year",
    price: "Contact for Details",
    rating: 4.9,
    reviews: 154,
    fullDescription: "The Online Psychology Finishing School is Sereniche Academy's flagship 50-day therapist development programme — delivered entirely through live, interactive online sessions. Designed for psychology post graduates who are ready to move beyond theory and step into confident, session-ready practice, this programme brings together clinical psychologists, psychiatrists, and specialist faculty into a structured, progressive learning ecosystem — accessible from wherever you are.",
    highlights: [
      "50 structured days across 8 clinical modules",
      "Live online sessions — interactive, not pre-recorded",
      "Led by clinical psychologists, psychiatrists, and specialist faculty",
      "Covers therapy foundations, major modalities (CBT, DBT, REBT, Trauma-Informed, Couple Therapy, and more)",
      "Case history taking, diagnosis, and clinical formulation training",
      "Crisis intervention and high-risk client management",
      "Weekly clinical labs — simulated, case-based practice sessions",
      "Mock therapy sessions — full intake to closure simulation",
      "Peer supervision circles — daily guided reflection and feedback",
      "Case diary and case archive development",
      "Professional portfolio building",
      "Psychiatry-integrated module — understanding medications, referrals, and interdisciplinary care",
      "Business and career development module for new therapists",
      "Certificate of completion from Sereniche Academy"
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
    title: "Psychology Finishing School — Offline",
    description: "The full clinical experience. In a real clinical world.",
    image: "/course-finishing school.jpg",
    instructor: "Expert Faculty Panel",
    duration: "50 Days",
    level: "Postgraduates",
    price: "Contact for Details",
    rating: 4.9,
    reviews: 128,
    fullDescription: "The Offline Psychology Finishing School is the premium, in-person format of Sereniche Academy's 50-day flagship programme — and it goes one significant step further. In addition to everything covered in the online format, offline participants receive an exclusive Clinical Immersion component conducted inside a real hospital setting. Under the direct supervision of psychiatrists and clinical psychologists, participants observe live clinical processes, engage with real cases, and experience the full reality of mental health practice in a professional healthcare environment. This is therapist training at its most complete.",
    highlights: [
      "Everything included in the Online format, delivered in person",
      "Exclusive Hospital-Based Clinical Immersion — available only in the offline format",
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
    whoThisIsFor: "Psychology graduates who want the deepest, most immersive clinical training experience — combining structured programme learning with real hospital exposure in a mentored environment.",
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
    image: "/internship1.png",
    instructor: "Expert Faculty Panel",
    duration: "15 Days / 30 Days",
    level: "UG & PG Students",
    price: "Contact for Details",
    rating: 4.8,
    reviews: 86,
    fullDescription: "The Sereniche Academy Clinical Internship Programme is a structured, supervised clinical exposure programme designed specifically for psychology students who want meaningful, hands-on experience in a real clinical environment — before they graduate. Offered as intensive 15-day and 30-day tracks, this internship places participants at the centre of active clinical practice, under the direct mentorship of experienced clinical psychologists and psychiatrists. Every day is purposeful, every session is guided, and every observation becomes a learning opportunity.",
    highlights: [
      "Live clinical case observations in a hospital and clinical setting",
      "Structured case discussions with clinical psychologists and psychiatrists",
      "Mental Status Examination (MSE) — observation, understanding, and application",
      "Case history taking — process, structure, and clinical reasoning",
      "Clinical documentation — exposure to real case files, notes, and records",
      "Diagnostic discussions — understanding how clinical formulations are built",
      "Supervised interaction with the clinical assessment process",
      "Understanding the psychiatrist-psychologist-counsellor collaboration model",
      "Exposure to diverse clinical presentations — mood disorders, anxiety, psychosis, neurodevelopmental conditions, and more",
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
  }
];
