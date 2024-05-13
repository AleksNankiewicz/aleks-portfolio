import React from 'react'
import ProjectCard from './ProjectCard'
import { TProjectCard } from '@/lib/types/TProjectCard'
import Link from 'next/link'

type ProjectsProps = {
  title?: string
  seeAll?: boolean
  projects: TProjectCard[]
}

const Projects = ({ title, seeAll, projects }: ProjectsProps) => {
  return (
    <main className=" ">
      <div className="flex justify-between items-center">
        {title && <h1 className="text-5xl font-bold  mb-8">{title}</h1>}
        {seeAll && (
          <Link
            href={'/projects'}
            className="text text-2xl font-bold  hidden lg:block text-violet-700"
          >
            Zobacz wszystkie
          </Link>
        )}
      </div>

      <div className="flex flex-col gap-6 ">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
        {seeAll && (
          <Link
            href={'/projects'}
            className="text-center text-2xl font-medium mt-3 lg:hidden"
          >
            Zobacz więcej
          </Link>
        )}
      </div>
    </main>
  )
}

export default Projects
