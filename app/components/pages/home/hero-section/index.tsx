'use client'

import { Button } from '@/app/components/button'
import { TechBadge } from '@/app/components/tech-badge'
import Image from 'next/image'
import { HiArrowNarrowRight } from 'react-icons/hi'
import {
  TbBrandGithub,
  TbBrandLinkedin,
  TbBrandYoutube,
  TbBrandWhatsapp,
} from 'react-icons/tb'

const TECHS = [
  'Next.js',
  'Next Auth',
  'Stiches',
  'Radix',
  'TypeScript',
  'Prisma',
  'React Query',
]

const CONTACTS = [
  {
    icon: <TbBrandGithub />,
    url: 'https://github.com/GBDev13',
  },
  {
    icon: <TbBrandLinkedin />,
    url: 'https://www.linkedin.com/in/gbdesigns13/',
  },
  {
    icon: <TbBrandYoutube />,
    url: 'https://www.youtube.com/c/GBDev',
  },
  {
    icon: <TbBrandWhatsapp />,
    url: 'https://wa.me/5554999999999',
  },
]

export const HeroSection = () => {
  const handleContact = () => {
    const contactSection = document.querySelector('#contact')
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' })
    }
  }
  return (
    <section className="w-full lg:h-[755px] bg-hero-image bg-cover bg-center bg-no-repeat flex flex-col justify-end pb-10 sm:pb-32 py-32 lg:pb-[110px]">
      <div className="container flex items-start justify-between flex-col-reverse lg:flex-row">
        <div className="w-full lg:max-w-[530px]">
          <p className="font-mono text-emerald-400">Olá, meu nome é</p>
          <h2 className="text-4xl font-medium mt-2">Gabriel Borges</h2>

          <p className="text-gray-400 my-6 text-sm sm:text-base">
            Olá, meu nome é Gabriel Borges e sou um desenvolvedor front-end
            apaixonado por tecnologia. Com mais de 2 anos de experiência. Meu
            objetivo é criar interfaces de usuário bonitas e funcionais, além de
            liderar equipes técnicas em projetos desafiadores. Estou sempre
            aberto a novas oportunidades e desafios.
          </p>

          <div className="flex flex-wrap gap-x-2 gap-y-3 lg:max-w-[340px]">
            {TECHS.map((tech) => (
              <TechBadge key={tech} name={tech} />
            ))}
          </div>

          <div className="mt-6 lg:mt-10 flex sm:items-center sm:gap-5 flex-col sm:flex-row">
            <div className="relative w-max">
              <Button className="z-[2] relative" onClick={handleContact}>
                Entre em contato
                <HiArrowNarrowRight size={18} />
              </Button>
              <div className="absolute inset-0 bg-emerald-600 blur-2xl opacity-40" />
            </div>

            <div className="text-2xl text-gray-600 flex items-center h-20 gap-3">
              {CONTACTS.map((contact, i) => (
                <a
                  href={contact.url}
                  key={`contact-${i}`}
                  target="_blank"
                  className="hover:text-gray-100 transition-colors"
                  rel="noreferrer"
                >
                  {contact.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        <Image
          className="w-[300px] h-[300px] lg:w-[420px] lg:h-[404px] mb-6 lg:mb-0 shadow-2xl rounded-lg object-cover"
          width={420}
          height={404}
          src="/images/profile-pic.png"
          alt="Foto de perfil do Gabriel Borges"
        />
      </div>
    </section>
  )
}
