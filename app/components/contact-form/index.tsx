'use client'

import { z } from 'zod'
import { SectionTitle } from '../section-title'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { Button } from '../button'
import { HiArrowNarrowRight } from 'react-icons/hi'

const contactFormSchema = z.object({
  name: z.string().min(3).max(100),
  email: z.string().email(),
  message: z.string().min(1).max(500),
})

type ContactFormData = z.infer<typeof contactFormSchema>

export const ContactForm = () => {
  const { handleSubmit, register } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
  })

  const onSubmit = (data: ContactFormData) => {
    console.log(data)
  }

  return (
    <section
      className="py-16 px-6 md:py-[128px] flex items-center justify-center bg-gray-950"
      id="contact"
    >
      <div className="w-full max-w-[420px] mx-auto">
        <SectionTitle
          subtitle="contato"
          title="Vamos trabalhar juntos? Entre em contato"
          className="items-center text-center"
        />
        <form
          className="mt-12 w-full flex flex-col gap-4"
          onSubmit={handleSubmit(onSubmit)}
        >
          <input
            placeholder="Nome"
            className="w-full h-[56px] bg-gray-800 rounded-lg placeholder:text-gray-400 text-gray-50 p-4 focus:outline-none focus:ring-2 focus:ring-emerald-600"
            {...register('name')}
          />
          <input
            placeholder="E-mail"
            type="email"
            className="w-full h-[56px] bg-gray-800 rounded-lg placeholder:text-gray-400 text-gray-50 p-4 focus:outline-none focus:ring-2 focus:ring-emerald-600"
            {...register('email')}
          />
          <textarea
            placeholder="Mensagem"
            className="resize-none w-full h-[138px] bg-gray-800 rounded-lg placeholder:text-gray-400 text-gray-50 p-4 focus:outline-none focus:ring-2 focus:ring-emerald-600"
            {...register('message')}
            maxLength={500}
          />

          <div className="relative w-max mx-auto mt-6">
            <Button className="z-[2] relative">
              Enviar mensagem
              <HiArrowNarrowRight size={18} />
            </Button>
            <div className="absolute inset-0 bg-emerald-600 blur-2xl opacity-20" />
          </div>
        </form>
      </div>
    </section>
  )
}
