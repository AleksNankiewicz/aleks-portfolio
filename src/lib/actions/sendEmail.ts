'use server'

import { contactFormSchema } from '@/components/contact/ContactForm'
import { z } from 'zod'

import { Resend } from 'resend'
import { getErrorMessage } from '../utils'
import ContactFormEmail from '../email/ContactFormEmail'
import React from 'react'

const resend = new Resend(process.env.RESEND_API_KEY)

export const sendEmail = async (values: z.infer<typeof contactFormSchema>) => {
  try {
    await resend.emails.send({
      from: 'Formularz Kontaktowy <onboarding@resend.dev>',
      to: 'boryn.nankiewicz@vp.pl',
      subject: values.subject || 'Wiadomość z formularza ze strony portfolio',
      reply_to: values.email,
      react: React.createElement(ContactFormEmail, {
        message: values.message as string,
        senderEmail: values.email,
        senderFullName: values.fullName,
      }),
    })

    return {
      success: 'Mail wysłany',
    }
  } catch (error: unknown) {
    return {
      error: getErrorMessage(error),
    }
  }
}
