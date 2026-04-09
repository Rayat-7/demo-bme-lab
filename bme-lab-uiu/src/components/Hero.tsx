import React from 'react';

export function Hero() {
  return (
    <section className="relative w-full pt-[200px] pb-20 flex flex-col items-center text-center px-6 overflow-hidden">
      {/* Improved DNA Helix Decoration - Bottom Right, 60deg */}
      <div className="absolute top-[5%] right-[-5%] w-[600px] h-[600px] opacity-[0.06] pointer-events-none select-none rotate-[60deg]">
        <svg viewBox="0 0 100 100" className="w-full h-full">
          <defs>
            <linearGradient id="dna-grad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="currentColor" />
              <stop offset="100%" stopColor="currentColor" stopOpacity="0.5" />
            </linearGradient>
          </defs>
          {/* Double Helix Curves */}
          <path d="M30,0 C50,20 20,40 40,60 C60,80 30,100 30,100" fill="none" stroke="url(#dna-grad)" strokeWidth="1.5" />
          <path d="M50,0 C30,20 60,40 40,60 C20,80 50,100 50,100" fill="none" stroke="url(#dna-grad)" strokeWidth="1.5" />
          {/* Base Pairs */}
          {[...Array(12)].map((_, i) => (
            <line 
              key={i} 
              x1={40 + Math.sin(i * 1.5) * 10} 
              y1={i * 8.5} 
              x2={40 - Math.sin(i * 1.5) * 10} 
              y2={i * 8.5} 
              stroke="currentColor" 
              strokeWidth="0.5" 
              opacity="0.6"
            />
          ))}
        </svg>
      </div>

      <div className="max-w-[1400px] w-full mx-auto space-y-12 rise-in flex flex-col items-center">
        <h1 className="hero-title text-[56px] md:text-[88px] text-brand-text max-w-[1100px]">
          Advancing Pharmaceutical <br /> Science through Research.
        </h1>
        
        <div className="w-full max-w-[1400px] mt-12 rounded-[40px] overflow-hidden aspect-[21/9] bg-brand-border shadow-2xl">
          <img 
            src="https://images.pexels.com/photos/8533016/pexels-photo-8533016.jpeg" 
            alt="Research Laboratory"
            className="w-full h-full object-cover grayscale-[0.2] brightness-[0.9] hover:scale-105 transition-transform duration-1000"
          />
        </div>
      </div>
    </section>
  );
}
