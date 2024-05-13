import ContactMeButton from '@/components/contact/ContactMeButton'
import PageContent from '@/components/layouts/PageContent'
import TopGradient from '@/components/layouts/TopGradient'
import { buttonVariants } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import { aboutMeContent } from '@/lib/constants/aboutMeContent'
import { cn } from '@/lib/utils'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const ContactSection = () => {
  return (
    <p>
      Jeśli chcesz się ze mną skontaktować, napisz na{' '}
      <Link
        href={'mailto:boryn.nankiewicz@vp.pl'}
        className="font-bold underline"
      >
        mój adres e-mail
      </Link>
      . Jeśli jesteś ciekaw moich projektów, zapraszam do odwiedzenia mojego
      profilu na{' '}
      <Link
        href={'https://github.com/AleksNankiewicz'}
        className="font-bold underline"
        target="_blank"
        rel="noopener noreferrer"
      >
        GitHubie
      </Link>
      . A jeśli wolisz być na bieżąco z moimi działaniami, śledź mnie na{' '}
      <Link
        href={'https://www.facebook.com/aleks.nankiewicz'}
        className="font-bold underline"
        target="_blank"
        rel="noopener noreferrer"
      >
        Facebooku
      </Link>{' '}
      lub{' '}
      <Link
        href={'https://www.instagram.com/aleks_nankiewicz/'}
        className="font-bold underline"
        target="_blank"
        rel="noopener noreferrer"
      >
        Instagramie
      </Link>
      .
    </p>
  )
}

const page = () => {
  return (
    <PageContent
      title="Troche więcej o mnie"
      description="Kim jestem i co robię"
    >
      <div className="flex sm:flex-row flex-col-reverse md:gap-20">
        <div className="flex flex-col gap-8">
          {Object.entries(aboutMeContent)
            .slice(0, 2)
            .map(([_, value]) => (
              <div key={value.title} className="flex flex-col gap-2">
                <b>{value.title}</b>
                <p>{value.description}</p>
              </div>
            ))}

          <div className="lg:flex hidden flex-col gap-2">
            <b>{aboutMeContent.whatIDid.title}</b>
            <p>{aboutMeContent.whatIDid.description}</p>
          </div>
          <div className="lg:flex hidden">
            <ContactSection />
          </div>
        </div>
        <div className="flex flex-col items-center gap-10">
          <Image
            className="min-w-[340px]"
            alt="Aleks"
            width={340}
            height={340}
            src={'/images/memojiOne.png'}
            quality={100}
            draggable={false}
          />
          <div className=" sm:block hidden">
            <ContactMeButton />
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-8 mt-8">
        <div className="flex lg:hidden flex-col gap-2">
          <b>{aboutMeContent.whatIDid.title}</b>
          <p>{aboutMeContent.whatIDid.description}</p>
        </div>
        <div className="flex lg:hidden sm:max-w-[calc(100%-420px)] mt-12 sm:mt-0">
          <ContactSection />
        </div>
        <div className="w-full sm:hidden">
          <ContactMeButton />
        </div>
      </div>
    </PageContent>
  )
}

export default page
