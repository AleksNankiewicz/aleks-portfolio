import ContactForm from '@/components/contact/ContactForm'
import PageContent from '@/components/layouts/PageContent'
import React from 'react'

const page = () => {
  return (
    <PageContent title="Bądźmy w kontakcie" description="Zbudujmy coś razem">
      <ContactForm />
    </PageContent>
  )
}

export default page
