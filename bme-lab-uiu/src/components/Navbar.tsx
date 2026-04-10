import React, { useState } from 'react';
import { Link } from '@tanstack/react-router';
import { Microscope, Menu, X, Search } from 'lucide-react';
import { SearchModal } from './SearchModal';

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  const navLinks = [
    { href: '/#research', label: 'Research', type: 'anchor' },
    { to: '/about', label: 'About', type: 'link' },
    { to: '/gallery', label: 'Gallery', type: 'link' },
    { href: '/#equipment', label: 'Equipment', type: 'anchor' },
    { href: '/#faculty', label: 'Faculty', type: 'anchor' },
  ];

  return (
    <>
      <div className="fixed top-6 left-0 right-0 z-50 px-6 flex justify-center">
        <header className="pill-nav w-full max-w-[1400px] h-[72px] flex items-center justify-between px-6 md:px-10 transition-all duration-300">
          <div className="flex items-center gap-3">
            <div className="bg-brand-text text-brand-bg p- relative rounded-full shrink-0 h-10 w-10 flex items-center justify-center">
              <Microscope className="w-6 h-6" />
            </div>
            <Link to="/" className="flex flex-col font-bold text-[11px] md:text-sm tracking-[0.05em] text-brand-text uppercase leading-[1.2]">
              <span>Biomedical</span>
              <span className="flex items-center gap-1.5 leading-none">
                Research Lab 
                <span className="text-[10px] bg-brand-text text-brand-bg px-1 rounded-sm font-extrabold opacity-90">UIU</span>
              </span>
            </Link>
          </div>
          
          <nav className="hidden md:flex items-center gap-10 lg:gap-14 font-semibold">
            {navLinks.map((link) => (
              link.type === 'link' ? (
                <Link key={link.label} to={link.to} className="nav-item text-[12px] uppercase tracking-wider">
                  {link.label}
                </Link>
              ) : (
                <a key={link.label} href={link.href} className="nav-item text-[12px] uppercase tracking-wider">
                  {link.label}
                </a>
              )
            ))}
          </nav>
          
          <div className="flex items-center gap-2 md:gap-4">
            <button 
              onClick={() => setSearchOpen(true)}
              className="p-2.5 text-brand-text hover:bg-brand-text/5 rounded-full transition-colors group relative"
              aria-label="Search"
            >
              <Search className="w-5 h-5 opacity-60 group-hover:opacity-100 transition-opacity" />
              <span className="absolute -top-1 -right-1 w-2 h-2 bg-brand-text rounded-full translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300" />
            </button>

            <a 
              href="mailto:tahmina@pharmacy.uiu.ac.bd"
              className="contact-button hidden sm:block"
            >
              Contact
            </a>

            <button 
              className="md:hidden p-2 text-brand-text hover:bg-brand-text/5 rounded-full transition-colors"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </header>
      </div>

      <SearchModal open={searchOpen} onOpenChange={setSearchOpen} />

      {/* Mobile Menu Overlay */}
      <div 
        className={`fixed inset-0 z-[45] bg-brand-bg md:hidden transition-all duration-500 ease-in-out ${
          isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-[-100%] pointer-events-none'
        }`}
      >
        <div className="flex flex-col items-center justify-center h-full gap-8 px-6">
          <nav className="flex flex-col items-center gap-8">
            {navLinks.map((link, i) => (
              <div 
                key={link.label}
                style={{ transitionDelay: `${i * 50}ms` }}
                className={`transition-all duration-500 ${isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
              >
                {link.type === 'link' ? (
                  <Link 
                    to={link.to} 
                    className="text-4xl font-medium text-brand-text hover:opacity-50 transition-opacity"
                    onClick={() => setIsOpen(false)}
                  >
                    {link.label}
                  </Link>
                ) : (
                  <a 
                    href={link.href} 
                    className="text-4xl font-medium text-brand-text hover:opacity-50 transition-opacity"
                    onClick={() => setIsOpen(false)}
                  >
                    {link.label}
                  </a>
                )}
              </div>
            ))}
            <div 
               style={{ transitionDelay: `${navLinks.length * 50}ms` }}
               className={`transition-all duration-500 mt-4 ${isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
            >
              <a 
                href="mailto:tahmina@pharmacy.uiu.ac.bd"
                className="contact-button text-base px-8 py-4"
                onClick={() => setIsOpen(false)}
              >
                Contact Us
              </a>
            </div>
          </nav>

          <div className="absolute bottom-12 text-brand-text/30 text-xs font-bold uppercase tracking-[0.2em]">
            UIU Biomedical Research Lab
          </div>
        </div>
      </div>
    </>
  );
}
