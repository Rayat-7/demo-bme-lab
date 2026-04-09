import React from 'react';

const objectives = [
  { id: '01', title: 'Cutting-edge Research', desc: 'Promoting innovation in pharmaceutical and biomedical fields with focus on novel drug delivery.' },
  { id: '02', title: 'Student Excellence', desc: 'Training students in modern laboratory techniques such as HPLC, cell culture, and molecular biology.' },
  { id: '03', title: 'Global Collaboration', desc: 'Encouraging collaboration with national and international research institutions.' },
  { id: '04', title: 'Scientific Impact', desc: 'Publishing findings in high-impact journals to improve human health and therapeutic outcomes.' }
];

export function ObjectivesSection() {
  const [active, setActive] = React.useState('01');

  return (
    <section className="py-32 px-6 bg-[#0e1f1a] text-brand-bg rounded-[48px] m-4 overflow-hidden relative">
      <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        <div>
          <h2 className="text-4xl md:text-5xl font-medium tracking-tight mb-16">Who is this for?</h2>
          <div className="space-y-4">
            {objectives.map((obj) => (
              <button
                key={obj.id}
                onMouseEnter={() => setActive(obj.id)}
                className={`w-full text-left p-6 rounded-2xl transition-all flex gap-6 items-start border ${
                  active === obj.id 
                    ? 'bg-brand-bg/10 border-brand-bg/30' 
                    : 'border-transparent opacity-40 hover:opacity-100'
                }`}
              >
                <span className="text-xs font-bold font-mono mt-1">{obj.id}</span>
                <div>
                  <h4 className="text-lg font-bold uppercase tracking-widest mb-2">{obj.title}</h4>
                  <p className={`text-sm leading-relaxed transition-all ${active === obj.id ? 'block' : 'hidden'}`}>
                    {obj.desc}
                  </p>
                </div>
              </button>
            ))}
          </div>
        </div>
        
        <div className="relative aspect-[4/3] rounded-[32px] overflow-hidden border border-brand-bg/10 shadow-2xl">
          <img 
            src="https://images.pexels.com/photos/8533016/pexels-photo-8533016.jpeg" 
            alt="Laboratory Focus"
            className="w-full h-full object-cover brightness-[0.8] contrast-[1.1]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0e1f1a]/80 to-transparent" />
        </div>
      </div>
    </section>
  );
}
