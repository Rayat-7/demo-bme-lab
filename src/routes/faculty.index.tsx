import { createFileRoute } from '@tanstack/react-router'
import { FacultySection } from '../components/FacultySection'
import { Link } from '@tanstack/react-router'
import { ArrowLeft } from 'lucide-react'

export const Route = createFileRoute('/faculty/')({
  component: FacultyPage,
})

function FacultyPage() {
  return (
    <main className="min-h-screen bg-brand-bg pt-40 pb-32">
      <div className="max-w-[1400px] mx-auto px-6">
        <div className="mb-2 space-y-2">
           <Link to="/" className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-brand-text/30 hover:text-brand-text mb-8 transition-colors group">
             <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" /> Back to Home
           </Link>
           {/* <h1 className="text-[56px] md:text-[80px] font-medium leading-[1.05] tracking-tight text-brand-text uppercase max-w-4xl">
              Faculty <br className="hidden md:block" /> Members.
           </h1> */}
        </div>

        <div className="mb-32">
           <FacultySection />
        </div>
      </div>
    </main>
  )
}
