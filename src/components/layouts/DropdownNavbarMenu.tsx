'use client'
import React from 'react'
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu'
import Link from 'next/link'
import { cn } from '@/lib/utils'
import { Menu } from 'lucide-react'

const subHeaders = [
  {
    title: 'Umiejętności',
    href: '/techStack',
  },
  {
    title: 'Grafika',
    href: '/techStack',
  },
  {
    title: 'Komponenty',
    href: '/techStack',
  },
]

const DropdownNavbarMenu = () => {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger className="bg-transparent py-2 px-3 sm:py-2 sm:px-2 rounded-xl font-medium text-base ">
            <p className="hidden sm:block">Więcej</p>
            <Menu size={27} className="sm:hidden" />
          </NavigationMenuTrigger>
          <NavigationMenuContent className="flex flex-col p-4 gap-2 bg-transparent ">
            {subHeaders.map((header) => (
              <Link
                key={header.title}
                href={header.href}
                legacyBehavior
                passHref
              >
                <NavigationMenuLink
                  className={
                    'hover:bg-black/80 hover:text-white hover:dark:bg-white/15 duration-200 p-2 rounded-xl'
                  }
                >
                  {header.title}
                </NavigationMenuLink>
              </Link>
            ))}
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuIndicator className="opacity-0 hidden size-0" />
      </NavigationMenuList>
      <NavigationMenuViewport className=" right-[98px] sm:right-0 bg-popover sm:bg-popover/80 backdrop-blur-lg" />
    </NavigationMenu>
  )
}

export default DropdownNavbarMenu
