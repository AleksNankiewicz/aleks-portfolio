import Image from 'next/image'
import React from 'react'

const TopGradient = () => {
  return (
    <div className="absolute  top-0 overflow-hidden w-[90%] md:w-[85%] lg:w-[80%] sm:max-w-[1024px] max-w-full  mx-auto pointer-events-none select-none">
      <Image
        className="sm:scale-100 scale-125"
        alt="gradient"
        width={1440}
        height={550}
        draggable={false}
        src={'/images/HeaderGradient.png'}
      />
    </div>
  )
}

export default TopGradient
