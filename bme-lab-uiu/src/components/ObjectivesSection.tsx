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
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-[5%]">
          {/* Left Side: Cards (20%) */}
          <div className="w-full lg:w-[20%] space-y-8">
            <div className="space-y-4">
              <h2 className="text-[10px] font-bold uppercase tracking-[0.3em] text-brand-bg/30">Laboratory Objectives</h2>
              <h3 className="text-3xl md:text-4xl font-medium tracking-tighter leading-tight">
                Talent & Technology.
              </h3>
            </div>
            
            <div className="space-y-3">
              {objectives.map((obj) => (
                <button
                  key={obj.id}
                  onMouseEnter={() => setActive(obj.id)}
                  className={`w-full text-left p-5 rounded-[24px] transition-all duration-500 flex gap-4 items-start ${
                    active === obj.id 
                      ? 'bg-brand-bg text-brand-text shadow-2xl scale-[1.05]' 
                      : 'opacity-30 hover:opacity-100 hover:bg-brand-bg/5'
                  }`}
                >
                  <span className="text-[10px] font-bold font-mono mt-1">{obj.id}</span>
                  <div className="space-y-1">
                    <h4 className="text-lg font-bold tracking-tight leading-none">{obj.title}</h4>
                    <p className={`text-[11px] leading-relaxed opacity-70 transition-all duration-500 ${active === obj.id ? 'opacity-100 block' : 'opacity-0 h-0 overflow-hidden'}`}>
                      {obj.desc}
                    </p>
                  </div>
                </button>
              ))}
            </div>
          </div>
          
          {/* Right Side: Image (75%) */}
          <div className="w-full lg:w-[75%] relative aspect-[16/9] lg:aspect-auto lg:h-[70vh] rounded-[48px] overflow-hidden border-[12px] border-brand-bg/5 shadow-2xl transition-all duration-700">
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
