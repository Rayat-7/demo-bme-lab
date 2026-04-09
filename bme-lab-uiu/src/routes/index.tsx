import { createFileRoute } from '@tanstack/react-router'
import { Hero } from '../components/Hero'
import { CollaborationSection } from '../components/CollaborationSection'
import { ResearchAreasSection } from '../components/ResearchAreasSection'
import { NewsCarousel } from '../components/NewsCarousel'
import { ObjectivesSection } from '../components/ObjectivesSection'
import { ResearchSection } from '../components/ResearchSection'
import { EquipmentSection } from '../components/EquipmentSection'
import { FacultySection } from '../components/FacultySection'
import { CTASection } from '../components/CTASection'

export const Route = createFileRoute('/')({ component: App })

function App() {
  return (
    <main className="min-h-screen bg-brand-bg">
      <div id="home"><Hero /></div>
      <CollaborationSection />
      <div id="research"><ResearchAreasSection /></div>
      <div id="news"><NewsCarousel /></div>
      <ObjectivesSection />
      <div id="equipment"><EquipmentSection /></div>
      <ResearchSection />
      <div id="faculty"><FacultySection /></div>
      <CTASection />
    </main>
  )
}
