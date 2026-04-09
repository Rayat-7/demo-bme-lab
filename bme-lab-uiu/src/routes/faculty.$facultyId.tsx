import { createFileRoute } from '@tanstack/react-router'
import { facultyData } from '../data/faculty'
import { Mail, GraduationCap, Briefcase, Award, Globe, ArrowLeft } from 'lucide-react'
import { Link } from '@tanstack/react-router'

export const Route = createFileRoute('/faculty/$facultyId')({
  component: FacultyProfile,
})

function FacultyProfile() {
  const { facultyId } = Route.useParams()
  const faculty = facultyData.find((f) => f.id === facultyId)

  if (!faculty) {
    return (
      <div className="min-h-screen pt-40 px-6 max-w-[1200px] mx-auto text-center">
        <h1 className="text-4xl font-bold">Faculty not found</h1>
        <Link to="/" className="mt-8 inline-block text-brand-text/60 hover:text-brand-text underline">Return Home</Link>
      </div>
    )
  }

  return (
    <main className="min-h-screen pt-[160px] pb-32 px-6 bg-brand-bg">
      <div className="max-w-[1200px] mx-auto">
        <Link to="/" className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-brand-text/40 hover:text-brand-text mb-12 transition-colors">
          <ArrowLeft className="w-4 h-4" /> Back to Team
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-20">
          <div className="lg:col-span-5">
            <div className="aspect-[4/5] rounded-[48px] overflow-hidden bg-brand-border shadow-2xl sticky top-40">
              <img src={faculty.image} alt={faculty.name} className="w-full h-full object-cover grayscale-[0.2] brightness-[1.05]" />
            </div>
          </div>

          <div className="lg:col-span-7 space-y-16">
            <div className="space-y-6">
              <h2 className="text-sm font-bold uppercase tracking-widest text-brand-text/30">{faculty.designation}</h2>
              <h1 className="text-[56px] md:text-[80px] font-medium leading-[1.05] tracking-tight text-brand-text">
                {faculty.name}
              </h1>
              <p className="text-2xl font-medium text-brand-text/60 leading-relaxed max-w-xl">
                {faculty.profileDescription}
              </p>
            </div>

            <div className="space-y-12">
              <section className="space-y-6">
                 <h3 className="flex items-center gap-3 text-xs font-bold uppercase tracking-widest text-brand-text/40 pb-4 border-b border-brand-border">
                    <GraduationCap className="w-4 h-4" /> Academic Qualifications
                 </h3>
                 <ul className="space-y-4">
                    {faculty.qualifications.map((q, i) => (
                      <li key={i} className="text-lg font-medium text-brand-text/80 leading-relaxed">{q}</li>
                    ))}
                 </ul>
              </section>

              {faculty.careerHistory && (
                <section className="space-y-6">
                   <h3 className="flex items-center gap-3 text-xs font-bold uppercase tracking-widest text-brand-text/40 pb-4 border-b border-brand-border">
                      <Briefcase className="w-4 h-4" /> Career History
                   </h3>
                   <ul className="space-y-4">
                      {faculty.careerHistory.map((c, i) => (
                        <li key={i} className="text-lg font-medium text-brand-text/80 leading-relaxed">{c}</li>
                      ))}
                   </ul>
                </section>
              )}

              <section className="space-y-6">
                 <h3 className="flex items-center gap-3 text-xs font-bold uppercase tracking-widest text-brand-text/40 pb-4 border-b border-brand-border">
                    <Globe className="w-4 h-4" /> Research Interests
                 </h3>
                 <div className="flex flex-wrap gap-2">
                    {faculty.researchInterests.map((interest, i) => (
                      <span key={i} className="px-4 py-2 rounded-full border border-brand-border text-sm font-bold uppercase tracking-wider text-brand-text/60">
                        {interest}
                      </span>
                    ))}
                 </div>
              </section>

              {faculty.fullBio && (
                <section className="space-y-6">
                   <h3 className="flex items-center gap-3 text-xs font-bold uppercase tracking-widest text-brand-text/40 pb-4 border-b border-brand-border">
                      <Mail className="w-4 h-4" /> Biography & Work
                   </h3>
                   <p className="text-lg font-medium text-brand-text/60 leading-relaxed">
                      {faculty.fullBio}
                   </p>
                </section>
              )}

              {faculty.awards && (
                <section className="space-y-6">
                   <h3 className="flex items-center gap-3 text-xs font-bold uppercase tracking-widest text-brand-text/40 pb-4 border-b border-brand-border">
                      <Award className="w-4 h-4" /> Awards & Scholarships
                   </h3>
                   <ul className="space-y-4">
                      {faculty.awards.map((a, i) => (
                        <li key={i} className="text-lg font-medium text-brand-text/80 leading-relaxed">{a}</li>
                      ))}
                   </ul>
                </section>
              )}

              <section className="pt-12 border-t border-brand-border flex flex-wrap gap-10">
                 <div className="space-y-4">
                    <h3 className="text-xs font-bold uppercase tracking-widest text-brand-text/40">Email</h3>
                    <a href={`mailto:${faculty.email}`} className="text-xl font-medium text-brand-text hover:underline underline-offset-8 transition-all">
                       {faculty.email}
                    </a>
                 </div>
                 <div className="space-y-4">
                    <h3 className="text-xs font-bold uppercase tracking-widest text-brand-text/40">External Links</h3>
                    <div className="flex gap-6">
                       {faculty.importantLinks.map((link, i) => (
                          <a key={i} href={link.url} target="_blank" rel="noopener noreferrer" className="text-sm font-bold uppercase tracking-widest text-brand-text hover:opacity-50 transition-opacity">
                             {link.label}
                          </a>
                       ))}
                    </div>
                 </div>
              </section>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
