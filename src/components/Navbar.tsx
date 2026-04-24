import { GraduationCap } from 'lucide-react';

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 w-full bg-[#0B0B1A]/80 backdrop-blur-md border-b border-white/10 px-6 h-20 flex items-center justify-between">
      <div className="flex items-center gap-2 text-white">
        <div className="bg-[#7C3AED] p-2 rounded-xl shadow-[0_0_15px_rgba(124,58,237,0.5)]">
          <GraduationCap className="w-6 h-6 text-white" />
        </div>
        <span className="text-2xl font-bold tracking-tight">Sereniche</span>
      </div>
      
      <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-300">
        <a href="#" className="hover:text-white transition-colors">Courses</a>
        <a href="#" className="hover:text-white transition-colors">Instructor</a>
        <a href="#" className="hover:text-white transition-colors">Testimonials</a>
        <a href="#" className="hover:text-white transition-colors">Pricing</a>
        <a href="#" className="hover:text-white transition-colors">Contact</a>
      </div>

      <button className="bg-[#7C3AED] hover:bg-[#6D28D9] transition-colors px-6 py-2.5 rounded-xl text-sm font-semibold text-white shadow-[0_0_15px_rgba(124,58,237,0.4)]">
        Enroll Now
      </button>
    </nav>
  );
}
