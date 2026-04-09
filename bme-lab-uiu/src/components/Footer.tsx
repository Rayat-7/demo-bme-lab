import React from 'react';
import { Microscope } from 'lucide-react';
import { Link } from '@tanstack/react-router';

export function Footer() {
  return (
    <footer className="pt-40 pb-20 px-6 border-t border-brand-border mt-20">
      <div className="max-w-[1200px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-20">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-3 mb-8">
              <div className="bg-brand-text text-brand-bg p-1.5 rounded-full">
                <Microscope className="w-5 h-5" />
              </div>
              <span className="font-bold text-lg tracking-tight text-brand-text uppercase">
                Biomedical Research Lab <span className="opacity-40">UIU</span>
              </span>
            </div>
            <p className="text-brand-text/50 max-w-sm text-lg leading-relaxed font-medium">
              Pushing the boundaries of biomedical research at United International University.
            </p>
          </div>
          
          <div className="flex flex-col gap-6">
            <h3 className="text-xs font-bold uppercase tracking-widest text-brand-text/30">Connect</h3>
            <ul className="flex flex-col gap-4 font-medium">
              <li><Link to="/" className="hover:opacity-50 transition-opacity">Research</Link></li>
              <li><Link to="/about" className="hover:opacity-50 transition-opacity">About</Link></li>
              <li><a href="#" className="hover:opacity-50 transition-opacity">Facilities</a></li>
              <li><a href="#" className="hover:opacity-50 transition-opacity">LinkedIn</a></li>
            </ul>
          </div>
          
          <div className="flex flex-col gap-6">
            <h3 className="text-xs font-bold uppercase tracking-widest text-brand-text/30">Contact</h3>
            <div className="flex flex-col gap-4 font-medium text-brand-text/70">
              <p>United City, Madani Ave,<br />Dhaka 1212, Bangladesh</p>
              <a href="mailto:tahmina@pharmacy.uiu.ac.bd" className="text-brand-text hover:underline underline-offset-4">
                tahmina@pharmacy.uiu.ac.bd
              </a>
            </div>
          </div>
        </div>
        
        <div className="mt-32 pt-12 border-t border-brand-border flex flex-col md:flex-row justify-between gap-6 text-xs font-bold uppercase tracking-widest text-brand-text/30">
          <p>&copy; {new Date().getFullYear()} UIU BME Lab</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-brand-text">Privacy Policy</a>
            <a href="#" className="hover:text-brand-text">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
