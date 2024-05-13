import Hero from '@/components/home/Hero'
import KnowMe from '@/components/home/KnowMe'
import WorkTogether from '@/components/home/WorkTogether'
import Projects from '@/components/project/Projects'
import { projectsData } from '@/lib/constants/projectsData'

export default function Home() {
  return (
    <main className="flex flex-col gap-24">
      <Hero />

      <Projects projects={projectsData} title="Moje Projekty" seeAll />
      <KnowMe />
      <WorkTogether />
    </main>
  )
}
