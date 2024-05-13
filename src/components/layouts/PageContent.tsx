import React from 'react'
import { Separator } from '../ui/separator'

type PageContentProps = {
  title: string
  description: string
  children: React.ReactNode
}

const PageContent = ({ title, description, children }: PageContentProps) => {
  return (
    <main className="">
      <div className="flex flex-col gap-2 relative z-20">
        <h1 className="sm:text-7xl text-5xl  font-bold">{title}</h1>
        <p className="text-muted-foreground">{description}</p>
      </div>
      <Separator className="my-6" />

      <div className="">{children}</div>
    </main>
  )
}

export default PageContent
