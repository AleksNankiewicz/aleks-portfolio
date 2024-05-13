import { knowMeData } from '@/lib/constants/knowMeData'
import Image from 'next/image'
import React from 'react'
import KnowMeBlock from '../layouts/KnowMeBlock'

const KnowMe = () => {
  return (
    <main className="">
      <h1 className="text-5xl font-bold  mb-8">Poznaj mnie</h1>
      <div className="grid sm:grid-cols-2 grid-cols-1 gap-6">
        {knowMeData.map((data) => (
          <KnowMeBlock key={data.title} props={data} />
        ))}
      </div>
    </main>
  )
}

export default KnowMe
