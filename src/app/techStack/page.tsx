import PageContent from '@/components/layouts/PageContent'
import { Badge } from '@/components/ui/badge'
import { techStackData } from '@/lib/constants/techStackData'
import Image from 'next/image'
import React from 'react'

const page = () => {
  return (
    <PageContent title="Umiejętności" description="Narzędzia których używam">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {techStackData.map((data) => (
          <div
            key={data.title}
            className="bg-black/5 dark:bg-zinc-900  md:aspect-square rounded-3xl flex justify-center items-center relative border p-3 md:p-0 gap-4"
          >
            <div className="relative w-[60px] h-[60px] md:w-[104px] md:h-[104px] lg:mb-6">
              <Image
                className="object-contain"
                src={data.img}
                alt={`logo ${data.title}`}
                fill
                quality={100}
                draggable={false}
                sizes="(max-width: 600px) 100vw, 50vw"
              />
            </div>
            <div className="md:absolute bottom-0 left-0 md:p-6 flex flex-wrap justify-between w-full gap-2 ">
              {' '}
              <p className="font-semibold">{data.title}</p>
              <Badge variant={'outline'} className="-ml-2">
                {data.badge}
              </Badge>
            </div>
          </div>
        ))}
      </div>
    </PageContent>
  )
}

export default page
