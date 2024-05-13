'use client'
import {
  BriefcaseBusiness,
  Home,
  Mail,
  Menu,
  Moon,
  SquareMenu,
  Sun,
  User,
} from 'lucide-react'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { Separator } from '../ui/separator'
import { FaFacebook, FaGithub, FaInstagram } from 'react-icons/fa'
import { motion } from 'framer-motion'
import { usePathname } from 'next/navigation'
import { cn } from '@/lib/utils'
import { useTheme } from 'next-themes'
import DropdownNavbarMenu from './DropdownNavbarMenu'
import NavigationDropdown from './NavigationDropdown'

const mobileIconSize = 27

const headers = [
  // {
  //   title: 'Początek',
  //   path: '/',
  //   icon: <Home />,
  // },
  {
    title: 'Projekty',
    path: '/projects',
    icon: <BriefcaseBusiness size={mobileIconSize} />,
  },
  {
    title: 'O mnie',
    path: '/aboutMe',
    icon: <User size={mobileIconSize} />,
  },
  {
    title: 'Kontakt',
    path: '/contact',
    icon: <Mail size={27} />,
  },
] as const
const socials = [
  {
    title: 'Github',
    path: 'https://github.com/AleksNankiewicz',
    icon: <FaGithub size={20} />,
  },
  {
    title: 'Facebook',
    path: 'https://www.facebook.com/aleks.nankiewicz',
    icon: <FaFacebook size={20} />,
  },
  {
    title: 'Instagram',
    path: 'https://www.instagram.com/aleks_nankiewicz/',
    icon: <FaInstagram size={20} />,
  },
] as const

const Navbar = () => {
  const pathName = usePathname()
  // const [theme, setTheme] = useState<Theme>('light')
  const [currentPage, setCurrentPage] = useState(pathName)
  const { theme, setTheme } = useTheme()
  const [isMounted, setIsMounted] = useState(false)

  const toggleTheme = () => {
    theme === 'light' ? setTheme('dark') : setTheme('light')
  }

  useEffect(() => {
    setIsMounted(true)
  }, [])

  useEffect(() => {
    setCurrentPage(pathName)
  }, [pathName, currentPage, setCurrentPage])

  if (!isMounted) return
  return (
    <header className="z-[999] relative">
      <motion.div
        className="w-[90%] md:w-[85%] lg:w-[80%] max-w-[1024px]   flex sm:justify-between justify-center fixed top-4  border  dark:text-muted text-black dark:text-white  font-medium  text-base bg-opacity-80 backdrop-blur-[0.5rem]  p-3 rounded-xl bg-white/20 dark:bg-black/20  border-white/10"
        initial={{ y: -40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
      >
        <div className="flex sm:w-auto w-full sm:gap-2 md:gap-4 justify-between items-center ">
          <Link
            href={'/'}
            className={cn(
              currentPage == '/' && 'text-white ',
              'py-2 px-3 sm:py-2 sm:px-2 rounded-xl relative duration-300 transition-colors'
            )}
          >
            <p className="hidden md:block">Głowna</p>
            <div className="hidden sm:block md:hidden">
              <Home size={20} />
            </div>
            <div className="block sm:hidden">
              <Home size={mobileIconSize} />
            </div>
            {'/' == currentPage && (
              <motion.div
                style={{ originY: '0px' }}
                className="bg-black/50 dark:bg-white/15 w-full h-full -z-10 rounded-xl absolute top-0 left-0"
                layoutId="currentPage"
                transition={{
                  type: 'spring',
                  stiffness: 380,
                  damping: 30,
                }}
              ></motion.div>
            )}
          </Link>
          {headers.map((header) => (
            <Link key={header.title} href={header.path}>
              <div
                className={cn(
                  currentPage == header.path && 'text-white ',
                  'py-2 px-3 sm:py-2 sm:px-2 rounded-xl relative duration-300 transition-colors'
                )}
              >
                <p className="hidden sm:block">{header.title}</p>
                <div className="block sm:hidden ">{header.icon}</div>
                {header.path == currentPage && (
                  <motion.div
                    style={{ originY: '0px' }}
                    className="bg-black/50 dark:bg-white/15 w-full h-full -z-10 rounded-xl absolute top-0 left-0"
                    layoutId="currentPage"
                    transition={{
                      type: 'spring',
                      stiffness: 380,
                      damping: 30,
                    }}
                  ></motion.div>
                )}
              </div>
            </Link>
          ))}
          {/* <DropdownNavbarMenu /> */}
          <NavigationDropdown />
          {/* <div className="sm:hidden block py-2 px-3 sm:py-2 sm:px-2 rounded-xl relative duration-300 transition-colors">
            <Menu size={mobileIconSize} />
          </div> */}

          <div
            className="sm:hidden  cursor-pointer select-none  py-2 pl-4   relative duration-300 transition-colors border-l "
            onClick={toggleTheme}
          >
            {theme === 'light' ? <Sun /> : <Moon />}
          </div>
        </div>
        <div className="sm:flex hidden lg:gap-5 gap-3 items-center ">
          {socials.map((social) => (
            <Link key={social.title} href={social.path}>
              {social.icon}
            </Link>
          ))}

          <Separator orientation="vertical" />
          <div className="cursor-pointer select-none" onClick={toggleTheme}>
            {theme === 'light' ? <Sun /> : <Moon />}
          </div>
        </div>
      </motion.div>
    </header>
  )
}

export default Navbar
