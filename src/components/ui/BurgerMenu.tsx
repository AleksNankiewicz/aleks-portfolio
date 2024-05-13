import React from 'react'
import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'

const topVariants = {
  closed: {
    rotate: 0,
  },
  opened: {
    rotate: 46,
    // backgroundColor: 'rgb(255,255,255)',
  },
}
const centerVariants = {
  closed: {
    opacity: 1,
  },
  opened: {
    opacity: 0,
  },
}

const bottomVariants = {
  closed: {
    rotate: 0,
  },
  opened: {
    rotate: -45,
    // backgroundColor: 'rgb(255,255,255)',
  },
}

type BurgerMenuProps = {
  onClick?: () => void
  isOpen?: boolean
  className?: string
}

const BurgerMenu = ({ onClick, isOpen, className }: BurgerMenuProps) => {
  const handleClick = () => {}

  return (
    <div
      className={cn(
        'w-6 h-5 flex flex-col justify-between z-[100] relative lg:hidden cursor-pointer scale-[85%]',
        className
      )}
      onClick={() => {
        // setIsInput(false)
      }}
    >
      <motion.div
        variants={topVariants}
        animate={isOpen ? 'opened' : 'closed'}
        className="w-full h-[3px] bg-black dark:bg-white rounded origin-left"
      ></motion.div>
      <motion.div
        variants={centerVariants}
        animate={isOpen ? 'opened' : 'closed'}
        className="w-full h-[3px] bg-black dark:bg-white  rounded"
      ></motion.div>
      <motion.div
        variants={bottomVariants}
        animate={isOpen ? 'opened' : 'closed'}
        className="w-full h-[3px] bg-black dark:bg-white rounded origin-left"
      ></motion.div>
    </div>
  )
}

export default BurgerMenu
