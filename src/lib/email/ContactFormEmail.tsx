import React from 'react'
import {
  Html,
  Body,
  Head,
  Heading,
  Hr,
  Container,
  Preview,
  Section,
  Text,
  Tailwind,
} from '@react-email/components'
type ConatactFormEmailProps = {
  message: string
  senderEmail: string
  senderFullName: string
}

const ContactFormEmail = ({
  message,
  senderEmail,
  senderFullName,
}: ConatactFormEmailProps) => {
  return (
    <Html>
      <Head />
      <Preview>Nowa wiadomość z twojego portfolio</Preview>
      <Tailwind>
        <Body className="bg-gray-100 text-black">
          <Container>
            <Section className="bg-white borderBlack my-10 px-10 py-4 rounded-md">
              <Heading className="text-2xl">
                Dostałeś następującą wiadomość z formularza kontakowego
              </Heading>
              <Text>{message}</Text>
              <Hr />
              <Text>Email nadawcy: {senderEmail}</Text>
              {senderFullName && (
                <Text>Imie i nazwisko nadawcy: {senderFullName}</Text>
              )}
            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  )
}

export default ContactFormEmail
