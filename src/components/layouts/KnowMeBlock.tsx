'use client'
import { TKnowMe } from '@/lib/types/TKnowMe'
import { cn } from '@/lib/utils'
import { useScroll, useTransform, motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import React, { useRef } from 'react'
import { buttonVariants } from '../ui/button'

const KnowMeBlock = ({ props }: { props: TKnowMe }) => {
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
      className="  h-[440px]  border rounded-[32px]  overflow-hidden group "
    >
      <Link
        href={props.href}
        className={cn(
          buttonVariants({
            variant: 'gooeyLeft',
          }),
          ' w-full h-full flex flex-col items-center dark:bg-zinc-900 bg-black/[.02] '
        )}
      >
        <div className="text-center py-[40px] px-6 flex flex-col gap-2">
          <h1 className="text-3xl font-extrabold text-black dark:text-white">
            {props.title}
          </h1>
          <p className="text-muted-foreground">{props.description}</p>
        </div>

        <Image
          className={cn(props.imageClassName)}
          alt={props.title}
          width={props.imageWidth}
          height={props.imageHeight}
          src={props.image}
          quality={100}
          draggable={false}
        />
      </Link>
    </motion.main>
  )
}

export default KnowMeBlock
