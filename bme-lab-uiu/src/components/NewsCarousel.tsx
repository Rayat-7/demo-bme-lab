import React, { useRef, useEffect, useState } from 'react';
import { newsData } from '../data/data';
import { Link } from '@tanstack/react-router';
import { ArrowRight, ArrowLeft, Calendar, ChevronLeft, ChevronRight } from 'lucide-react';

export function NewsCarousel() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      if (scrollRef.current) {
        const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
        if (scrollLeft + clientWidth >= scrollWidth - 10) {
          scrollRef.current.scrollTo({ left: 0, behavior: 'smooth' });
        } else {
          scrollRef.current.scrollBy({ left: 400, behavior: 'smooth' });
        }
      }
    }, 4000);

    return () => clearInterval(interval);
  }, [isPaused]);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const offset = direction === 'left' ? -400 : 400;
      scrollRef.current.scrollBy({ left: offset, behavior: 'smooth' });
    }
  };

  return (
    <section className="py-32 px-6 overflow-hidden">
      <div className="max-w-[1200px] mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <div className="max-w-2xl">
            <h2 className="text-sm font-bold tracking-widest text-brand-text/40 uppercase mb-4">Laboratory Insights</h2>
            <h3 className="text-4xl md:text-5xl font-medium tracking-tight text-brand-text">
               Recent News & Activities.
            </h3>
          </div>
          <div className="flex items-center gap-4">
             <button 
                onClick={() => scroll('left')}
                className="w-12 h-12 rounded-full border border-brand-border flex items-center justify-center text-brand-text/40 hover:text-brand-text hover:border-brand-text transition-all"
             >
                <ChevronLeft className="w-6 h-6" />
             </button>
             <button 
                onClick={() => scroll('right')}
                className="w-12 h-12 rounded-full border border-brand-border flex items-center justify-center text-brand-text/40 hover:text-brand-text hover:border-brand-text transition-all"
             >
                <ChevronRight className="w-6 h-6" />
             </button>
          </div>
        </div>

        <div 
          ref={scrollRef}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          className="flex gap-6 overflow-x-auto pb-12 snap-x no-scrollbar"
        >
          {newsData.map((news) => (
            <Link 
              key={news.id}
              to="/news/$newsId"
              params={{ newsId: news.id }}
              className="min-w-[320px] md:min-w-[400px] bg-brand-bg border border-brand-border p-10 rounded-[40px] snap-center hover:border-brand-text transition-all duration-300 group flex flex-col justify-between h-[350px]"
            >
              <div>
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-brand-text/30 mb-8">
                   <Calendar className="w-3.5 h-3.5" />
                   {news.date}
                </div>
                <h4 className="text-2xl font-medium text-brand-text leading-tight group-hover:underline underline-offset-8 decoration-brand-text/20 transition-all">
                  {news.title}
                </h4>
              </div>
              <p className="text-brand-text/50 font-medium leading-relaxed line-clamp-2">
                {news.description}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
