'use client'
import React, { useEffect, useRef, useState } from 'react'
import { Button } from '../ui/button'
import { ArrowDown, ChevronDown, Menu } from 'lucide-react'
import Link from 'next/link'
import { AnimatePresence, motion } from 'framer-motion'
import { usePathname } from 'next/navigation'
import BurgerMenu from '../ui/BurgerMenu'
const subHeaders = [
  {
    title: 'Umiejętności',
    href: '/techStack',
  },
  // {
  //   title: 'Grafika',
  //   href: '/techStack',
  // },
  // {
  //   title: 'Komponenty',
  //   href: '/techStack',
  // },
]

const NavigationDropdown = () => {
  const [isOpen, setIsOpen] = useState(false)
  const pathName = usePathname()

  const isTouchDevice = () => {
    return 'ontouchstart' in window || navigator.maxTouchPoints > 0
  }

  // Usage
  // if (isTouchDevice()) {
  //   console.log('This is a touch device')
  // } else {
  //   console.log('This is not a touch device')
  // }

  const dropdownRef = useRef<HTMLDivElement>(null)
  const buttonRef = useRef<HTMLButtonElement>(null)

  const handleButtonClick = () => {
    setIsOpen((prev) => !prev)
  }

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        buttonRef.current?.contains(event.target as Node) ||
        dropdownRef.current?.contains(event.target as Node)
      ) {
        // Clicked inside the button or the dropdown, do nothing
        return
      }

      // Clicked outside the button and the dropdown, close the dropdown
      setIsOpen(false)
    }

    document.addEventListener('mousedown', handleClickOutside)

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  useEffect(() => {
    setIsOpen(false)
  }, [pathName])

  return (
    <div
      onMouseEnter={() => {
        !isTouchDevice() && setIsOpen(true)
      }}
      onMouseLeave={() => {
        !isTouchDevice() && setIsOpen(false)
      }}
      // onClick={handleButtonClick}
      className=" relative"
    >
      <Button
        onClick={handleButtonClick}
        ref={buttonRef}
        className="py-2 px-3 sm:py-2 sm:px-2  cursor-pointer bg-transparent font-medium text-base text-black  dark:text-white hover:bg-inherit sm:hover:bg-white/15 flex items-center "
      >
        <div className="hidden sm:flex gap-2 items-center">
          <p>Więcej</p>
          <ChevronDown
            size={14}
            className={`duration-200  ${isOpen && 'rotate-180'}`}
          />
        </div>

        {/* <Menu size={27} className="sm:hidden" /> */}
        <BurgerMenu className="sm:hidden" isOpen={isOpen} />
      </Button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            ref={dropdownRef}
            // onMouseEnter={() => setIsOpen(true)}
            className={` absolute translate-y-full bottom-0 -translate-x-1/2 sm:-translate-x-0    rounded-b-xl overflow-hidden`}
          >
            <div className=" p-3 flex flex-col gap-3  bg-popover sm:bg-popover/80 backdrop-blur-lg duration-200 mt-3 ">
              {subHeaders.map((header) => (
                <Link
                  key={header.title}
                  className="hover:bg-black/50 hover:text-white hover:dark:bg-white/15 duration-200 p-2 rounded-xl dark:text-white text-black"
                  href={header.href}
                >
                  {header.title}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default NavigationDropdown
