'use client'
import { TProjectCard } from '@/lib/types/TProjectCard'
import { cn } from '@/lib/utils'
import { useScroll, useTransform } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import React, { useRef } from 'react'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
const ProjectCard = ({ project }: { project: TProjectCard }) => {
  const ref = useRef<HTMLElement>(null)

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end end'],
  })

  const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.8, 1])
  const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.5, 1])

  return (
    <motion.main
      ref={ref}
      style={{
        scale: scaleProgress,
        opacity: opacityProgress,
      }}
      className={` flex sm:flex-row flex-col ${
        project.imagePosition == 'left' && 'sm:flex-row-reverse'
      }     rounded-[32px]  h-[550px] md:p-[60px] sm:p-[32px] p-[24px] overflow-hidden group  relative dark:bg-zinc-900 bg-black/[.02] border `}
    >
      {/* <div className="absolute top-0 left-0 transition-colors duration-300 dark:bg-zinc-900 bg-black/[.02] border  h-full w-full rounded-[32px]"></div> */}
      <div className="flex flex-col justify-between  sm:w-[503px] sm:min-w-[300px] md:min-w-[300px] xl:min-w-[503px] lg:min-w-[410px] z-10 gap-4">
        <div className={`flex flex-col gap-4  `}>
          <Image
            src={project.logo}
            alt={`logo ${project.title}`}
            width={50}
            height={50}
          />
          <h1 className="font-extrabold md:text-3xl text-xl">
            {project.title}
          </h1>
          <p className="text-muted-foreground text-base">
            {project.description}
          </p>
        </div>
        <Link
          href={project.siteHref}
          className="text-lg font-medium flex gap-2 group/link"
        >
          <p>Odwiedź Strone</p>
          <ArrowRight className="group-hover/link:-rotate-45 duration-300" />
        </Link>
      </div>
      <div className=" flex items-center  ">
        {project.imageDeviceType === 'desktop' && (
          <div className="  relative sm:left-8 duration-300 group-hover:rotate-6 top-[-40px] sm:top-[0px]  w-[564px] h-[441px]">
            <Image
              className="object-contain"
              quality={100}
              src={project.image}
              alt={`zdjęcie ${project.title}`}
              fill
              sizes="(max-width: 400px) 100vw, (max-width: 768px) 50vw, 700px"
            />
          </div>
        )}
        {project.imageDeviceType === 'tablet' && (
          <div
            className={cn(
              `  relative sm:left-8 duration-300 group-hover:rotate-6 top-[-40px] sm:top-[0px]  w-[551px] h-[421px]`,
              project.imagePosition === 'left' && 'sm:left-[-40px]'
            )}
          >
            <Image
              className="object-contain"
              quality={100}
              src={project.image}
              alt={`zdjęcie ${project.title}`}
              // width={564}
              // height={441}
              fill
              sizes="(max-width: 400px) 100vw, (max-width: 768px) 50vw, 700px"
            />
          </div>
        )}
        {project.imageDeviceType === 'phone' && (
          <div className="   relative  duration-300 group-hover:rotate-6 top-[20px] sm:top-[100px] sm:left-8 left-1/2 -translate-x-1/2 sm:-translate-x-0 w-[324px] h-[668px]">
            <Image
              quality={100}
              draggable={false}
              src={project.image}
              alt={`zdjęcie ${project.title}`}
              fill
              // width={324}
              // height={668}
              sizes="(max-width: 400px) 100vw, (max-width: 768px) 50vw, 324px"
            />
          </div>
        )}
      </div>
    </motion.main>
  )
}

export default ProjectCard
