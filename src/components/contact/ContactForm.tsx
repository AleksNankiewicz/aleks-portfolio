'use client'
import { zodResolver } from '@hookform/resolvers/zod'
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '../ui/form'
import { Input } from '../ui/input'
import { Button } from '../ui/button'
import { Textarea } from '../ui/textarea'
import { sendEmail } from '@/lib/actions/sendEmail'
import { ArrowRightIcon, ArrowUpRightIcon } from 'lucide-react'
import { toast } from 'sonner'

export const contactFormSchema = z.object({
  email: z.string().email({
    message: 'Niepoprawny adres Email.',
  }),
  fullName: z.string(),
  subject: z.string(),
  message: z.string().min(1, {
    message: 'Wiadomość nie może być pusta',
  }),
})

const ContactForm = () => {
  const [isLoading, setIsLoading] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [isError, setIsError] = useState(false)

  const form = useForm<z.infer<typeof contactFormSchema>>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      email: '',
      fullName: '',
      subject: '',
      message: '',
    },
  })

  // 2. Define a submit handler.
  async function onSubmit(values: z.infer<typeof contactFormSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.

    setIsError(false)
    setIsSuccess(false)
    setIsLoading(true)
    toast.loading('Wysyłanie maila...')
    const result = await sendEmail(values)

    toast.dismiss()
    if (result.success) {
      toast.success('Mail wysłany')
    } else {
      toast.error(
        'Niestety nie udało się wysłać maila spróbuj ponowine później'
      )
    }

    console.log(result)

    // console.log(values)
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-2  p-8 border rounded-xl"
      >
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input placeholder="Wpisz swój adres mailowy..." {...field} />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="fullName"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Imię i Nazwisko</FormLabel>
              <FormControl>
                <Input
                  placeholder="Wpisz swoje imie i nazwisko..."
                  {...field}
                />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="subject"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Temat</FormLabel>
              <FormControl>
                <Input placeholder="Wpisz temat..." {...field} />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Wiadomość</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Napisz wiadomość do mnie..."
                  className="resize-none min-h-72"
                  {...field}
                />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />
        <div className="w-full flex justify-end pt-6">
          <Button
            variant={'expandIcon'}
            Icon={ArrowRightIcon}
            iconPlacement="right"
            type="submit"
          >
            <p>Wyślij</p>
          </Button>
        </div>
      </form>
    </Form>
  )
}

export default ContactForm
