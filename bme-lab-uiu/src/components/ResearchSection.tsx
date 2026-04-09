import React from 'react';
import { projectsData } from '../data/data';
import { Link } from '@tanstack/react-router';
import { ArrowUpRight } from 'lucide-react';

export function ResearchSection() {
  return (
    <section id="research" className="py-32 px-6">
      <div className="max-w-[1400px] mx-auto">
        <div className="mb-24">
          <h2 className="text-sm font-bold tracking-widest text-brand-text/40 uppercase mb-4">Research Projects</h2>
          <h3 className="text-4xl md:text-5xl font-medium tracking-tight text-brand-text max-w-xl">
            Pioneering solutions for global health.
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
          {projectsData.map((project, index) => (
            <Link 
              key={project.id} 
              to="/projects/$projectId"
              params={{ projectId: project.id }}
              className={`p-10 rounded-[40px] border border-brand-border transition-all duration-500 cursor-pointer group flex flex-col h-full ${
                index === 0 
                  ? 'bg-brand-text text-brand-bg shadow-2xl z-10' 
                  : 'bg-brand-bg text-brand-text hover:bg-brand-text hover:text-brand-bg hover:shadow-xl'
              } hover:scale-[1.02]`}
            >
              <div className="flex justify-between items-start mb-8">
                <span className={`text-xs font-bold font-mono transition-colors duration-300 ${
                  index === 0 ? 'text-brand-bg/40' : 'text-brand-text/30 group-hover:text-brand-bg/40'
                }`}>
                  0{index + 1}
                </span>
                <ArrowUpRight className={`w-5 h-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1 ${
                  index === 0 ? 'text-brand-bg/40' : 'text-brand-text/20 group-hover:text-brand-bg'
                }`} />
              </div>
              <h4 className="text-xl font-medium mb-6 leading-tight">{project.title}</h4>
              <p className={`text-sm font-medium leading-relaxed transition-opacity duration-300 ${
                index === 0 ? 'opacity-90' : 'opacity-60 group-hover:opacity-90'
              }`}>
                {project.description}
              </p>
              <div className="mt-auto pt-10" />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
