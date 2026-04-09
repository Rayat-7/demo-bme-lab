import React from 'react';
import { Link } from '@tanstack/react-router';
import { Microscope } from 'lucide-react';

export function Navbar() {
  return (
    <div className="fixed top-6 left-0 right-0 z-50 px-6 flex justify-center">
      <header className="pill-nav w-full max-w-[1400px] h-[72px] flex items-center justify-between px-10">
        <div className="flex items-center gap-3">
          <div className="bg-brand-text text-brand-bg p-1.5 rounded-full">
            <Microscope className="w-5 h-5" />
          </div>
          <Link to="/" className="font-bold text-lg tracking-tight text-brand-text uppercase leading-none max-w-[200px] md:max-w-none">
            Biomedical Research Lab <span className="hidden lg:inline text-brand-text/40 ml-1">UIU</span>
          </Link>
        </div>
        
        <nav className="hidden md:flex items-center gap-12 font-semibold">
          <a href="/#research" className="nav-item text-[12px] uppercase tracking-wider">
            Research
          </a>
          <Link to="/about" className="nav-item text-[12px] uppercase tracking-wider">
            About
          </Link>
          <Link to="/gallery" className="nav-item text-[12px] uppercase tracking-wider">
            Gallery
          </Link>
          <a href="/#equipment" className="nav-item text-[12px] uppercase tracking-wider">
            Equipment
          </a>
          <a href="/#faculty" className="nav-item text-[12px] uppercase tracking-wider">
            Faculty
          </a>
        </nav>
        
        <div>
          <a 
            href="mailto:tahmina@pharmacy.uiu.ac.bd"
            className="contact-button"
          >
            Contact
          </a>
        </div>
      </header>
    </div>
  );
}
