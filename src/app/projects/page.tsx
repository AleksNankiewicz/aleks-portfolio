import PageContent from '@/components/layouts/PageContent'
import EmptyProject from '@/components/project/EmptyProject'
import Projects from '@/components/project/Projects'
import { projectsData } from '@/lib/constants/projectsData'
import React from 'react'

const page = () => {
  return (
    <PageContent title="Projekty" description="Projekty nad którymi pracowałem">
      <Projects projects={projectsData} />
      <EmptyProject />
    </PageContent>
  )
}

export default page
