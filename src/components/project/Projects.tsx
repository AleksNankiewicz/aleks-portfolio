import React from 'react'
import ProjectCard from './ProjectCard'
import { TProjectCard } from '@/lib/types/TProjectCard'
import Link from 'next/link'
import { cn } from '@/lib/utils'
import { buttonVariants } from '../ui/button'

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
            className="text text-2xl font-bold  hidden lg:block text-violet-700 hover:underline"
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
            className={cn(
              buttonVariants({
                variant: 'default',
                size: 'default',
              }),
              'text-center text-2xl font-medium mt-3 lg:hidden py-4 dark:bg-zinc-900 bg-black/[.02] text-black dark:text-white border'
            )}
          >
            Zobacz więcej
          </Link>
        )}
      </div>
    </main>
  )
}

export default Projects
