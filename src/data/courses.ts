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
  curriculum: string[];
  outcomes: string[];
}

export const courses: Course[] = [
  {
    id: 1,
    type: 'offline',
    slug: 'clinical-psychology-finishing-school',
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
    type: 'online',
    slug: 'advanced-cbt-masterclass',
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
    type: 'online',
    slug: 'family-therapy-foundations',
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
    type: 'offline',
    slug: 'trauma-informed-therapy-certification',
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
    type: 'online',
    slug: 'child-adolescent-counselling',
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
    type: 'online',
    slug: 'advanced-dbt-skills-training',
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
    type: 'internship',
    slug: 'clinical-case-formulation-bootcamp',
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
    type: 'internship',
    slug: 'relationship-couple-therapy',
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
    type: 'online',
    slug: 'uiux-bootcamp',
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
    type: 'offline',
    slug: 'design-fundamentals',
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
    type: 'internship',
    slug: 'creative-web',
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
