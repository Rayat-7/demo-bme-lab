import React from 'react';

const objectives = [
  { 
    id: '01', 
    title: 'Cutting-edge Research', 
    desc: 'Promoting innovation in pharmaceutical and biomedical fields with focus on novel drug delivery.',
    image: 'https://images.pexels.com/photos/8533016/pexels-photo-8533016.jpeg'
  },
  { 
    id: '02', 
    title: 'Student Excellence', 
    desc: 'Training students in modern laboratory techniques such as HPLC, cell culture, and molecular biology.',
    image: 'https://images.pexels.com/photos/3735709/pexels-photo-3735709.jpeg'
  },
  { 
    id: '03', 
    title: 'Global Collaboration', 
    desc: 'Encouraging collaboration with national and international research institutions.',
    image: 'https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg'
  },
  { 
    id: '04', 
    title: 'Scientific Impact', 
    desc: 'Publishing findings in high-impact journals to improve human health and therapeutic outcomes.',
    image: 'https://images.pexels.com/photos/3825368/pexels-photo-3825368.jpeg'
  }
];

export function ObjectivesSection() {
  const [active, setActive] = React.useState('01');

  return (
    <section className="min-h-screen py-20 px-10 bg-brand-text text-brand-bg overflow-hidden relative flex items-center">
      {/* Subtle Dotted Pattern */}
      <div className="absolute top-10 right-10 w-40 h-40 opacity-10 pointer-events-none" 
           style={{ backgroundImage: 'radial-gradient(currentColor 1px, transparent 1px)', backgroundSize: '12px 12px' }} />
      
      <div className="max-w-[1500px] w-full mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-20">
          {/* Left Side: Cards */}
          <div className="w-full lg:w-[35%] space-y-10">
            <div className="space-y-6">
              <h2 className="text-xs font-bold uppercase tracking-[0.3em] text-brand-bg/30">Laboratory Objectives</h2>
              <h3 className="text-4xl md:text-5xl lg:text-6xl font-medium tracking-tighter leading-[1.1]">
                Talent & <br className="hidden lg:block" /> Technology.
              </h3>
            </div>
            
            <div className="space-y-3">
              {objectives.map((obj) => (
                <button
                  key={obj.id}
                  onMouseEnter={() => setActive(obj.id)}
                  className={`w-full text-left p-6 md:p-8 rounded-[32px] transition-all duration-700 ease-[cubic-bezier(0.23, 1, 0.32, 1)] flex gap-6 items-start ${
                    active === obj.id 
                      ? 'bg-brand-bg text-brand-text shadow-[0_20px_50px_rgba(0,0,0,0.1)] scale-[1.02]' 
                      : 'opacity-20 hover:opacity-100 hover:bg-brand-bg/5'
                  }`}
                >
                  <div className="space-y-3">
                    <h4 className="text-xl md:text-2xl font-bold tracking-tight leading-none">{obj.title}</h4>
                    <p className={`text-xs md:text-sm leading-relaxed opacity-70 transition-all duration-700 ease-in-out ${active === obj.id ? 'opacity-100 max-h-40 mt-3' : 'opacity-0 max-h-0 overflow-hidden'}`}>
                      {obj.desc}
                    </p>
                  </div>
                </button>
              ))}
            </div>
          </div>
          
          {/* Right Side: Image (75%) */}
          <div className="w-full lg:w-[65%] relative aspect-[4/3] lg:h-[75vh] rounded-[60px] overflow-hidden border-[16px] border-brand-bg/5 shadow-3xl transition-all duration-1000 ease-in-out">
            {objectives.map((obj) => (
              <img 
                key={obj.id}
                src={obj.image} 
                alt={obj.title}
                className={`absolute inset-0 w-full h-full object-cover grayscale-[0.2] brightness-[0.9] transition-all duration-1000 ${
                  active === obj.id ? 'opacity-100 scale-100' : 'opacity-0 scale-110 pointer-events-none'
                }`}
              />
            ))}
            <div className="absolute inset-0 bg-gradient-to-t from-brand-text/40 to-transparent" />
          </div>
        </div>
      </div>
    </section>
  );
}
