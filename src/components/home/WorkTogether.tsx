import React from 'react'
import { Button } from '../ui/button'
import ShinyButton from '../ui/ShinyButton'
import ContactMeButton from '../contact/ContactMeButton'

const WorkTogether = () => {
  return (
    <main className="flex justify-between flex-col  lg:flex-row lg:items-center">
      <div className="sm:text-left text-center flex flex-col gap-2">
        <h1 className="sm:text-4xl lg:text-5xl text-3xl font-bold">
          Stwórzmy coś razem
        </h1>
        <p className="text-muted-foreground">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint, eius.
        </p>
      </div>
      <div className="mt-8 lg:mt-0 ">
        <ContactMeButton />
        {/* <Button className="w-full sm:w-auto">Skontaktujmy się</Button> */}
      </div>
    </main>
  )
}

export default WorkTogether
