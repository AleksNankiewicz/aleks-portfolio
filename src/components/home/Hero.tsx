'use client'
import Image from 'next/image'
import React from 'react'
import { Button } from '../ui/button'
import { motion } from 'framer-motion'
import ContactMeButton from '../contact/ContactMeButton'
import Link from 'next/link'
const Hero = () => {
  return (
    <main className="relative">
      <div className="flex flex-col items-center justify-center text-center relative  z-10 px-8">
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            type: 'tween',
            duration: 0.2,
          }}
        >
          <Image
            priority
            alt="To ja"
            width={260}
            height={260}
            src={'/images/memojiOne.png'}
            quality={100}
            draggable={false}
          />
        </motion.div>
        <motion.h1
          className="md:text-7xl text-5xl font-extrabold"
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
        >
          Cześć, Jestem <span className="text-violet-700">Aleks</span>
        </motion.h1>
        <motion.p
          className="font-medium sm:text-xl text-base sm:mt-0 mt-2  md:w-[729px]"
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
        >
          Jestem programistą frontendowym, z pasją do tworzenie interaktywnych i
          innowacyjnych aplikacji internetowych, które nie tylko przyciągają
          uwagę, ale także zapewniają użytkownikom niezapomniane doświadczenia.
        </motion.p>
        <motion.div
          className="flex sm:flex-row flex-col sm:w-auto w-full mt-4 sm:gap-2 gap-4"
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <Link passHref href={'/projects'}>
            <Button variant={'gooeyLeft'} className="text-xl py-4">
              Zobacz moje projekty
            </Button>
          </Link>
          <ContactMeButton />
        </motion.div>
      </div>
    </main>
  )
}

export default Hero
