import { createFileRoute } from '@tanstack/react-router'
import { MapPin, Building, Globe } from 'lucide-react'

export const Route = createFileRoute('/about')({
  component: About,
})

function About() {
  return (
    <main className="min-h-screen pt-[200px] pb-40 bg-brand-bg px-6">
      <div className="max-w-[1200px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-32 mb-40">
          <div className="space-y-12">
            <div className="space-y-6">
               <h2 className="text-sm font-bold uppercase tracking-widest text-brand-text/30">About</h2>
               <h1 className="text-[56px] md:text-[80px] font-medium leading-[1.05] tracking-tight text-brand-text">
                  Scientific discovery for humanity.
               </h1>
            </div>
            
            <p className="text-2xl font-medium text-brand-text/60 leading-relaxed max-w-xl">
               The Biomedical Research Laboratory of the Department of Pharmacy at United International University (UIU) is dedicated to advancing scientific knowledge in the field of pharmaceutical and biomedical sciences.
            </p>
          </div>

          <div className="space-y-16">
             <div className="aspect-[4/5] rounded-[48px] overflow-hidden bg-brand-border shadow-xl ring-1 ring-brand-border">
                <img 
                  src="https://images.unsplash.com/photo-1532187875605-2fe358a3d46a?auto=format&fit=crop&q=80&w=1200" 
                  alt="Laboratory" 
                  className="w-full h-full object-cover grayscale brightness-[0.9]"
                />
             </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-20 py-20 border-t border-brand-border">
           <div>
              <h3 className="text-xs font-bold uppercase tracking-widest text-brand-text/40 mb-8">Our Vision</h3>
              <p className="text-xl font-medium text-brand-text leading-relaxed">
                 To become a leading biomedical research center in Bangladesh and internationally recognized for innovation, quality research, and scientific contribution.
              </p>
           </div>
           <div>
              <h3 className="text-xs font-bold uppercase tracking-widest text-brand-text/40 mb-8">Our Mission</h3>
              <ul className="space-y-4 text-brand-text/70 font-medium">
                 <li>• Generate impactful research addressing real-world health problems</li>
                 <li>• Develop skilled researchers and future scientists</li>
                 <li>• Contribute to the advancement of pharmaceutical sciences</li>
              </ul>
           </div>
           <div>
              <h3 className="text-xs font-bold uppercase tracking-widest text-brand-text/40 mb-8">Location & Dept</h3>
              <p className="text-brand-text/70 font-medium leading-relaxed">
                 United City, Madani Ave, Dhaka 1212, Bangladesh. <br/>
                 Department of Pharmacy, UIU. <br/>
                 Lab Room 907.
              </p>
           </div>
        </div>
      </div>
    </main>
  )
}
