import React from 'react';
import { facultyData } from '../data/faculty';
import { Link } from '@tanstack/react-router';

export function FacultySection() {
  return (
    <section id="faculty" className="py-32 px-6 max-w-[1200px] mx-auto">
      <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
        <div className="max-w-2xl">
          <h2 className="text-sm font-bold tracking-widest text-brand-text/40 uppercase mb-4">Our Team</h2>
          <h3 className="text-4xl md:text-5xl font-medium tracking-tight text-brand-text">
            Meet the researchers behind the innovation.
          </h3>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-20 gap-x-12">
        {facultyData.map((faculty) => (
          <Link 
            key={faculty.id} 
            to="/faculty/$facultyId" 
            params={{ facultyId: faculty.id }} 
            className="group cursor-pointer block"
          >
            <div className="aspect-[4/5] bg-brand-border rounded-[24px] mb-6 overflow-hidden relative">
               <img src={faculty.image} alt={faculty.name} className="w-full h-full object-cover grayscale brightness-[1.1] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700" />
               <div className="absolute inset-0 bg-brand-text/10 opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
            <h4 className="text-2xl font-medium text-brand-text mb-1">{faculty.name}</h4>
            <p className="text-brand-text/50 font-medium mb-4 text-sm uppercase tracking-wider">{faculty.designation}</p>
            <p className="text-brand-text/70 text-sm leading-relaxed line-clamp-2">
              {faculty.profileDescription}
            </p>
          </Link>
        ))}
      </div>
    </section>
  );
}
