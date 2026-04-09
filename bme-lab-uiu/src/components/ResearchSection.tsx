import React from 'react';
import { projectsData } from '../data/data';

export function ResearchSection() {
  return (
    <section className="py-32 px-6">
      <div className="max-w-[1200px] mx-auto">
        <div className="mb-24">
          <h2 className="text-sm font-bold tracking-widest text-brand-text/40 uppercase mb-4">Research Areas</h2>
          <h3 className="text-4xl md:text-5xl font-medium tracking-tight text-brand-text max-w-xl">
            Pioneering solutions for global health.
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
          {projectsData.map((project, index) => (
            <div 
              key={project.id} 
              className={`p-10 rounded-[40px] border border-brand-border transition-all duration-500 cursor-pointer group flex flex-col h-full ${
                index === 0 
                  ? 'bg-brand-text text-brand-bg shadow-2xl z-10' 
                  : 'bg-brand-bg text-brand-text hover:bg-brand-text hover:text-brand-bg hover:shadow-xl'
              } hover:scale-[1.02]`}
            >
              <span className={`text-xs font-bold mb-8 font-mono transition-colors duration-300 ${
                index === 0 ? 'text-brand-bg/40' : 'text-brand-text/30 group-hover:text-brand-bg/40'
              }`}>
                0{index + 1}
              </span>
              <h4 className="text-2xl font-medium mb-6 leading-tight">{project.title}</h4>
              <p className={`text-base font-medium leading-relaxed transition-opacity duration-300 ${
                index === 0 ? 'opacity-90' : 'opacity-60 group-hover:opacity-90'
              }`}>
                {project.description}
              </p>
              <div className="mt-auto pt-10" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
