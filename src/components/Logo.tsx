import React from 'react';

interface LogoProps {
  className?: string;
  variant?: 'dark' | 'light';
  symbolOnly?: boolean;
}

export const SerenicheLogo: React.FC<LogoProps> = ({ 
  className = "", 
  variant = 'dark',
  symbolOnly = false 
}) => {
  const isLight = variant === 'light';
  const textColor = isLight ? 'text-white' : 'text-[#0B0410]';

  return (
    <div className={`flex items-center gap-3 transition-transform duration-300 hover:scale-[1.03] origin-left group ${className}`}>
      {/* Logo Container with conditional glassmorphism/shadow for visibility if needed */}
      <div className={`relative flex items-center justify-center shrink-0 w-10 h-10 md:w-11 md:h-11 ${!isLight ? 'drop-shadow-sm' : ''}`}>
        
        {/* Soft background glow if on dark background to make the logo pop, as per instructions */}
        {isLight && (
          <div className="absolute inset-0 bg-white/10 backdrop-blur-md rounded-full shadow-[0_0_15px_rgba(255,255,255,0.1)] scale-110" />
        )}

        {/* Circular Symbol Icon (Cairn & Rings) */}
        <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full relative z-10 transition-transform duration-500 group-hover:rotate-[-5deg]">
          {/* Outer teal/green ring */}
          <path d="M 68 18 A 36 36 0 1 0 72 82" stroke="#00A388" strokeWidth="2.5" strokeLinecap="round" />
          <path d="M 76 74 A 36 36 0 0 0 86 50" stroke="#00A388" strokeWidth="2.5" strokeLinecap="round" />
          
          {/* Middle dark blue ring */}
          <path d="M 63 22 A 30 30 0 0 0 54 80" stroke="#004B87" strokeWidth="2.5" strokeLinecap="round" />
          <path d="M 62 80 A 30 30 0 0 0 82 50" stroke="#004B87" strokeWidth="2.5" strokeLinecap="round" />
          
          {/* Inner cyan ring */}
          <path d="M 66 28 A 24 24 0 1 0 62 70" stroke="#009EB0" strokeWidth="2.5" strokeLinecap="round" />

          {/* Stacked Stones (Cairn) */}
          <ellipse cx="48" cy="68" rx="13" ry="6.5" fill="#004B87" />
          <ellipse cx="49" cy="57" rx="10" ry="5.5" fill="#004B87" />
          <ellipse cx="47" cy="48" rx="7.5" ry="4" fill="#004B87" />
          <ellipse cx="48.5" cy="41" rx="4.5" ry="3" fill="#004B87" />
        </svg>
      </div>

      {!symbolOnly && (
        <div className="hidden sm:flex flex-col -space-y-1">
          <span className={`text-xl md:text-2xl font-bold tracking-tight ${textColor} transition-colors duration-300`}>
            Sereniche
          </span>
          <span className={`text-[10px] md:text-xs font-semibold tracking-widest uppercase ${isLight ? 'text-white/80' : 'text-gray-500'} transition-colors duration-300`}>
            Academy
          </span>
        </div>
      )}
    </div>
  );
};
