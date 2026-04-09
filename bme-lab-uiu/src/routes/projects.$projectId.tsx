import { createFileRoute } from '@tanstack/react-router'
import { projectsData } from '../data/data'
import { ArrowLeft, Clock, Layout, Microscope } from 'lucide-react'
import { Link } from '@tanstack/react-router'

export const Route = createFileRoute('/projects/$projectId')({
  component: ProjectDetail,
})

function ProjectDetail() {
  const { projectId } = Route.useParams()
  const project = projectsData.find((p) => p.id === projectId)

  if (!project) {
    return (
      <div className="min-h-screen pt-40 px-6 max-w-[1200px] mx-auto text-center">
        <h1 className="text-4xl font-bold">Project not found</h1>
        <Link to="/" className="mt-8 inline-block text-brand-text/60 hover:text-brand-text underline">Return Home</Link>
      </div>
    )
  }

  return (
    <main className="min-h-screen pt-[160px] pb-32 px-6 bg-brand-bg">
      <div className="max-w-[1000px] mx-auto">
        <Link to="/" className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-brand-text/40 hover:text-brand-text mb-12 transition-colors">
          <ArrowLeft className="w-4 h-4" /> Back to Research
        </Link>

        <div className="space-y-16 rise-in">
          <div className="space-y-8">
            <div className="flex items-center gap-3 text-xs font-bold uppercase tracking-widest text-brand-text/30">
               <Clock className="w-4 h-4" /> Ongoing Project
            </div>
            <h1 className="text-[48px] md:text-[72px] font-medium leading-[1.1] tracking-tight text-brand-text">
              {project.title}
            </h1>
          </div>

          <div className="aspect-video rounded-[48px] overflow-hidden bg-brand-border shadow-2xl ring-1 ring-brand-border/50">
             <img 
               src="https://images.pexels.com/photos/8533016/pexels-photo-8533016.jpeg" 
               alt={project.title} 
               className="w-full h-full object-cover grayscale brightness-[1.05]"
             />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            <div className="lg:col-span-8 space-y-12">
               <div className="prose prose-lg max-w-none text-brand-text/70 font-medium leading-[1.8] space-y-6">
                  <p className="text-2xl text-brand-text leading-relaxed font-medium">
                     {project.description}
                  </p>
                  <p>
                     The Biomedical Research Laboratory at UIU is currently spearheading this intensive study. Our methodology integrates high-resolution molecular analysis with standardized clinical protocols to ensure the highest degree of scientific accuracy and translational value.
                  </p>
                  <p>
                     By combining microbiological culture techniques, antibiotic susceptibility testing, and advanced genetic analysis, our team aims to identify critical patterns that contribute to modern healthcare challenges. The findings from this project will directly influence local infection control strategies and global pharmaceutical development.
                  </p>
               </div>

               <div className="pt-12 border-t border-brand-border grid grid-cols-1 md:grid-cols-2 gap-12">
                  <div className="space-y-4">
                     <h3 className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-brand-text/40">
                        <Microscope className="w-4 h-4" /> Laboratory Focus
                     </h3>
                     <p className="text-brand-text/60 font-medium leading-relaxed">
                        Conducted in the Molecular Biology and Clinical Pharmacology division (Lab 907).
                     </p>
                  </div>
                  <div className="space-y-4">
                     <h3 className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-brand-text/40">
                        <Layout className="w-4 h-4" /> Methodology
                     </h3>
                     <p className="text-brand-text/60 font-medium leading-relaxed">
                        Integrating in vitro evaluation with computational molecular docking.
                     </p>
                  </div>
               </div>
            </div>

            <div className="lg:col-span-4 self-start space-y-8 sticky top-40">
               <div className="p-8 rounded-[32px] bg-brand-text text-brand-bg shadow-xl space-y-6">
                  <h4 className="text-xs font-bold uppercase tracking-widest opacity-40">Get Involved</h4>
                  <p className="font-medium leading-relaxed">
                     Are you interested in collaborating on this research or joining the team?
                  </p>
                  <a 
                    href="mailto:tahmina@pharmacy.uiu.ac.bd"
                    className="block w-full py-4 bg-brand-bg text-brand-text text-center rounded-2xl font-bold uppercase tracking-widest text-xs hover:scale-[1.02] transition-transform"
                  >
                    Contact Lab Head
                  </a>
               </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
