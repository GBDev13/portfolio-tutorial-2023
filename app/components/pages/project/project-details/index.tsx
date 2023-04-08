import { Button } from '@/app/components/button'
import { Link } from '@/app/components/link'
import { SectionTitle } from '@/app/components/section-title'
import { TechBadge } from '@/app/components/tech-badge'
import { ReactNode } from 'react'
import { HiArrowNarrowLeft, HiArrowNarrowRight } from 'react-icons/hi'
import NextLink from 'next/link'

type ProjectDetailsProps = {
  title: string
  description: string
  techs: string[]
  contacts: {
    icon: ReactNode
    url: string
  }[]
  thumbnail: string
}

export const ProjectDetails = ({
  title,
  description,
  techs,
  contacts,
  thumbnail,
}: ProjectDetailsProps) => {
  return (
    <section className="w-full min-h-[750px] flex flex-col items-center justify-end relative pb-10 sm:pb-24 py-24 px-6">
      <div
        className="absolute inset-0 z-[-1]"
        style={{
          background: `url(/images/hero-bg.png) no-repeat center/cover, url(${thumbnail}) no-repeat center/cover`,
          backgroundSize: 'cover',
        }}
      />

      <SectionTitle
        subtitle="projetos"
        title={title}
        className="text-center items-center sm:[&>h3]:text-4xl"
      />
      <p className="text-gray-400 text-center max-w-[640px] my-4 sm:my-6 text-sm sm:text-base">
        {description}
      </p>
      <div className="w-full max-w-[330px] flex flex-wrap gap-2 items-center justify-center">
        {techs.map((tech) => (
          <TechBadge name={tech} key={tech} />
        ))}
      </div>
      <div className="my-6 sm:my-12 flex items-center gap-2 sm:gap-4 flex-col sm:flex-row">
        <NextLink href="/#contact" target="_blank">
          <Button>
            Entre em contato
            <HiArrowNarrowRight size={20} />
          </Button>
        </NextLink>

        <div className="text-2xl text-gray-600 flex items-center h-20 gap-3">
          {contacts.map((contact, i) => (
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
      <Link href="/projects">
        <HiArrowNarrowLeft size={20} />
        Voltar para projetos
      </Link>
    </section>
  )
}
