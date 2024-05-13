'use client'

import React, { useRef } from 'react'
import { Button } from '../ui/button'
import { Sparkles } from 'lucide-react'
import { BsSendArrowUp } from 'react-icons/bs'
import { motion, useScroll, useTransform } from 'framer-motion'
import ContactMeButton from '../contact/ContactMeButton'
const EmptyProject = () => {
  const ref = useRef<HTMLDivElement>(null)

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end end'],
  })

  const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.8, 1])
  const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.5, 1])
  return (
    <motion.div
      ref={ref}
      style={{
        scale: scaleProgress,
        opacity: opacityProgress,
      }}
      className="border-[4px]  border-dashed flex flex-col justify-evenly items-center rounded-[32px]  h-[550px] md:p-[60px] sm:p-[32px] p-[24px] overflow-hidden group  relative dark:bg-zinc-900 bg-black/[.02] mt-6 text-center"
    >
      <div className="flex flex-col items-center gap-4">
        <Sparkles size={70} />
        <h1 className="sm:text-3xl text-2xl font-extrabold">
          Twój projekt będzie tutaj
        </h1>
        <p>Zamieńmy twoją wizualizacje na realny projekt</p>
      </div>
      <ContactMeButton />
    </motion.div>
  )
}

export default EmptyProject
