import React from 'react';
import { equipmentData } from '../data/data';

export function EquipmentSection() {
  return (
    <section className="py-32 px-6 bg-[#e6ebe6]">
      <div className="max-w-[1200px] mx-auto">
        <div className="mb-20 space-y-4">
          <h2 className="text-sm font-bold tracking-widest text-brand-text/40 uppercase">Facility Assets</h2>
          <h3 className="text-4xl md:text-5xl font-medium tracking-tight text-brand-text">
            Advanced instrumentation. <br /> Precise results.
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {equipmentData.map((item) => (
            <div key={item.id} className="bg-brand-bg rounded-[24px] p-10 border border-brand-border hover:border-brand-text transition-colors flex flex-col items-start min-h-[400px]">
              <div className="mb-12 w-full aspect-square rounded-2xl overflow-hidden bg-brand-border">
                 <img src={item.image} alt={item.name} className="w-full h-full object-cover grayscale brightness-[1.1]" />
              </div>
              <h4 className="text-2xl font-medium text-brand-text mb-3">{item.name}</h4>
              <p className="text-sm text-brand-text/50 font-bold uppercase tracking-wider mb-6">{item.origin}</p>
              <p className="text-brand-text/60 leading-relaxed text-sm font-medium">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
