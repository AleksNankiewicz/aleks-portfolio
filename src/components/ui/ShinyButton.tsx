'use client'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { BsSendArrowUp } from 'react-icons/bs'

const ShinyButton = ({ children }: { children: React.ReactNode }) => {
  return (
    <motion.button
      initial={{ '--x': '100%', scale: 1 } as any}
      animate={{ '--x': '-100%' } as any}
      whileTap={{ scale: 0.97 }}
      transition={{
        repeat: Infinity,
        repeatType: 'loop',
        repeatDelay: 4,
        type: 'spring',
        stiffness: 20,
        damping: 15,
        mass: 2,
        scale: {
          type: 'spring',
          stiffness: 10,
          damping: 5,
          mass: 0.1,
        },
      }}
      className="py-4 rounded-md px-8 relative radial-gradient w-full sm:w-auto"
    >
      <span className=" tracking-wide font-medium h-full w-full  relative linear-mask flex justify-center items-center gap-4 text-white text-xl">
        {children}
      </span>
      <span className="block absolute inset-0 rounded-md p-px linear-overlay" />
    </motion.button>
  )
}

export default ShinyButton
