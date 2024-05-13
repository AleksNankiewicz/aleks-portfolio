import React from 'react'
import ShinyButton from '../ui/ShinyButton'
import Link from 'next/link'
import { BsSendArrowUp } from 'react-icons/bs'

const ContactMeButton = () => {
  return (
    <Link href={'/contact'}>
      <ShinyButton>
        {' '}
        <BsSendArrowUp size={18} strokeWidth={0.5} />
        Skontaktujmy się
      </ShinyButton>
    </Link>
  )
}

export default ContactMeButton
