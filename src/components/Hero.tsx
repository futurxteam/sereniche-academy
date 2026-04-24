import { Play, Star, ArrowUpRight, User, GraduationCap } from 'lucide-react';
import { motion, useScroll, useTransform } from 'motion/react';

const instructors = [
  { name: "Abhishek S.", role: "UX Designer", img: "https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?auto=format&fit=crop&q=80&w=400&h=600" },
  { name: "Preston B.", role: "Prototyping", img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=400&h=600" },
  { name: "Miles M.", role: "Design Systems", img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=400&h=600" },
  { name: "Sarah K.", role: "UI Designer", img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=400&h=600" },
];

export default function Hero() {
  const { scrollY } = useScroll();
  const blob1Y = useTransform(scrollY, [0, 1000], [0, 300]);
  const blob2Y = useTransform(scrollY, [0, 1000], [0, -200]);
  
  const y1 = useTransform(scrollY, [0, 1000], [0, -80]);
  const y2 = useTransform(scrollY, [0, 1000], [0, -150]);
  const y3 = useTransform(scrollY, [0, 1000], [0, -50]);
  const y4 = useTransform(scrollY, [0, 1000], [0, -120]);

  const parallaxYs = [y1, y2, y3, y4];
  const positions = [
    "top-[5%] left-[5%] w-[260px]",
    "top-[25%] right-[5%] w-[280px] z-10",
    "top-[55%] left-[15%] w-[250px] z-20",
    "top-[70%] right-[10%] w-[240px]"
  ];
  
  const animations = [
    "animate-float-water-1",
    "animate-float-water-2",
    "animate-float-water-3",
    "animate-float-water-4"
  ];

  return (
    <section className="relative min-h-screen pt-32 pb-20 overflow-hidden bg-[#0B0B1A]">
      {/* Background Glow & Particles */}
      <motion.div 
        style={{ y: blob1Y }}
        className="absolute top-0 left-0 w-[800px] h-[800px] bg-[#7C3AED]/20 rounded-full blur-[120px] -translate-x-1/2 -translate-y-1/2 pointer-events-none"
      ></motion.div>
      
      {/* Particles */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-[#A78BFA]/40 animate-particle blur-[1px]"
            style={{
              width: Math.random() * 6 + 2 + 'px',
              height: Math.random() * 6 + 2 + 'px',
              top: Math.random() * 100 + '%',
              left: Math.random() * 100 + '%',
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${Math.random() * 5 + 5}s`
            }}
          />
        ))}
      </div>

      <div className="max-w-[1400px] mx-auto px-6 grid lg:grid-cols-[45%_55%] gap-8 items-center relative z-10 h-full">
        
        {/* Left Side */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-20 pt-10 pr-8"
        >
          <div className="inline-flex items-center gap-3 px-2 py-1.5 rounded-full bg-white/5 border border-white/10 mb-8 backdrop-blur-sm">
            <span className="bg-[#8B5CF6] text-white px-3 py-1 rounded-full text-xs font-semibold">New</span>
            <span className="text-sm font-medium text-gray-200 pr-3">Registrations are now open!</span>
          </div>
          
          <h1 className="text-5xl lg:text-[4.5rem] font-bold leading-[1.1] mb-6 tracking-tight text-white">
            Learn from Top <span className="text-gradient">UX/UI</span> <br />
            Mentors Worldwide
          </h1>
          
          <p className="text-lg text-gray-400 mb-10 max-w-xl leading-relaxed">
            Learn highly demanded skills through practical online courses, created by trusted industry professionals, that focus on real-world applications.
          </p>
          
          <div className="flex flex-wrap items-center gap-4">
            <button className="bg-[#7C3AED] hover:bg-[#6D28D9] transition-colors px-6 py-3.5 rounded-xl font-semibold flex items-center gap-2 text-white shadow-[0_0_20px_rgba(124,58,237,0.4)]">
              View Courses
              <ArrowUpRight className="w-5 h-5" />
            </button>
            <button className="bg-white/5 hover:bg-white/10 border border-white/10 transition-colors px-6 py-3.5 rounded-xl font-semibold flex items-center gap-2 text-white backdrop-blur-sm">
              Watch Preview
              <Play className="w-5 h-5 fill-current" />
            </button>
          </div>

          <div className="mt-12 flex items-center gap-8">
            <div className="flex items-center gap-3">
              <div className="flex -space-x-3">
                {[1,2,3,4].map(i => (
                  <img key={i} src={`https://i.pravatar.cc/100?img=${i+10}`} className="w-10 h-10 rounded-full border-2 border-[#0B0B1A] grayscale" alt="User" referrerPolicy="no-referrer" />
                ))}
              </div>
              <div className="text-xs text-gray-400 font-medium leading-tight">
                Loved by 500+<br/>Founders
              </div>
            </div>
            
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-black font-bold text-lg">
                C
              </div>
              <div>
                <div className="flex items-center gap-1 text-yellow-400">
                  {[1,2,3,4,5].map(i => <Star key={i} className="w-3 h-3 fill-current" />)}
                </div>
                <div className="text-xs text-gray-400 font-medium mt-0.5">13 Reviews</div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Right Side - Asymmetric Parallax Cards */}
        <div className="relative h-[800px] hidden lg:block pointer-events-auto">
           <motion.div 
             style={{ y: blob2Y }}
             className="absolute inset-0 bg-[#7C3AED]/10 blur-[100px] rounded-full"
           ></motion.div>
           
           {/* Glowing Curved Line */}
           <svg className="absolute inset-0 w-full h-full z-0 pointer-events-none" viewBox="0 0 500 800" preserveAspectRatio="none">
             <motion.path
               d="M 50 150 C 300 200, 450 400, 250 550 C 100 650, 350 750, 450 850"
               stroke="url(#glowGradient)"
               strokeWidth="2"
               fill="none"
               initial={{ pathLength: 0, opacity: 0 }}
               animate={{ pathLength: 1, opacity: 1 }}
               transition={{ duration: 2.5, ease: "easeInOut" }}
               style={{ filter: 'drop-shadow(0 0 10px rgba(124,58,237,0.6))' }}
             />
             <defs>
               <linearGradient id="glowGradient" x1="0" y1="0" x2="0" y2="1">
                 <stop offset="0%" stopColor="#7C3AED" stopOpacity="0" />
                 <stop offset="20%" stopColor="#A78BFA" stopOpacity="0.8" />
                 <stop offset="80%" stopColor="#7C3AED" stopOpacity="0.8" />
                 <stop offset="100%" stopColor="#EC4899" stopOpacity="0" />
               </linearGradient>
             </defs>
           </svg>

           {/* Mentor Cards */}
           {instructors.map((item, i) => (
             <motion.div
               key={i}
               style={{ y: parallaxYs[i] }}
               initial={{ opacity: 0, scale: 0.8, y: 50 }}
               whileInView={{ opacity: 1, scale: 1, y: 0 }}
               viewport={{ once: true, margin: "-50px" }}
               transition={{ duration: 0.8, delay: i * 0.2, ease: "easeOut" }}
               className={`absolute ${positions[i]} z-30`}
             >
               <div className={`w-full h-full ${animations[i]}`}>
                 <Card item={item} index={i} />
               </div>
             </motion.div>
           ))}
        </div>
      </div>
    </section>
  );
}

function Card({ item, index }: { item: any; index: number }) {
  return (
    <div 
      className="relative w-full rounded-[2rem] overflow-hidden glass-panel border border-[#7C3AED]/40 shadow-[0_8px_32px_rgba(124,58,237,0.15)] p-2.5 transition-all duration-500 hover:shadow-[0_16px_64px_rgba(124,58,237,0.4)] hover:border-[#A78BFA]/60 bg-[#0B0B1A]/60 backdrop-blur-2xl group hover:-translate-y-2 cursor-pointer animate-pulse-glow hover:!animate-none"
      style={{ animationDelay: `${index * 1.5}s` }}
    >
      <div className="relative h-52 rounded-2xl overflow-hidden mb-4">
        <img src={item.img} alt={item.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" referrerPolicy="no-referrer" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B1A] via-transparent to-transparent opacity-80"></div>
      </div>
      
      <div className="px-4 pb-3">
        <h3 className="text-white font-bold text-lg tracking-tight">{item.name}</h3>
        <p className="text-[#A78BFA] text-sm font-medium mt-0.5">{item.role}</p>
      </div>
    </div>
  );
}
