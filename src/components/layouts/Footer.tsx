import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const headers = [
  // {
  //   title: 'Prace',
  //   links: [
  //     {
  //       title: 'Quizymania',
  //       href: '#',
  //     },
  //     {
  //       title: 'Quizymania',
  //       href: '#',
  //     },
  //     {
  //       title: 'Quizymania',
  //       href: '#',
  //     },
  //     {
  //       title: 'Quizymania',
  //       href: '#',
  //     },
  //   ],
  // },

  {
    title: 'Linki',
    links: [
      {
        title: 'Projekty',
        href: '/projects',
      },
      {
        title: 'O mnie',
        href: '/aboutMe',
      },
      {
        title: 'Kontakt',
        href: '/contact',
      },
      {
        title: 'Umiejętności',
        href: '/techStack',
      },
    ],
  },
  {
    title: 'Znajdź mnie',
    links: [
      {
        title: 'Github',
        href: 'https://github.com/AleksNankiewicz',
      },
      {
        title: 'Facebook',
        href: 'https://www.facebook.com/aleks.nankiewicz',
      },
      {
        title: 'Instagram',
        href: 'https://www.instagram.com/aleks_nankiewicz/',
      },
      {
        title: 'Email',
        href: 'mailto:boryn.nankiewicz@vp.pl',
      },
    ],
  },
]

const Footer = () => {
  return (
    <main className="mt-24 sm:py-10 pt-10 pb-2  border-t      relative">
      <Image
        className="sm:scale-110 scale-125 rotate-180 absolute bottom-0 pointer-events-none"
        alt="footer gradient"
        width={1440}
        height={550}
        draggable={false}
        src={'/images/HeaderGradient.png'}
      />
      <div className="flex sm:flex-row-reverse flex-col sm:items-end sm:justify-between">
        <div className="flex sm:flex-row flex-col sm:items-center justify-end sm:gap-24 gap-16 ">
          {headers.map(({ title, links }, index) => (
            <div key={index} className="flex flex-col gap-8">
              <h1 className="font-bold">{title}</h1>
              <div className="flex flex-col gap-4">
                {links.map((link, i) => (
                  <Link key={i} href={link.href}>
                    {link.title}
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
        <div className="mt-12">
          <p>© 2024 Aleks Nankiewicz.</p>
        </div>
      </div>
    </main>
  )
}

export default Footer
