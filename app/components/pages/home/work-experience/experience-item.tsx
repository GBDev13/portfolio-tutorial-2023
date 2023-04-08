'use client'

import { TechBadge } from '@/app/components/tech-badge'
import { differenceInMonths, differenceInYears, format } from 'date-fns'
import { ptBR } from 'date-fns/locale'
import Image from 'next/image'
import { motion } from 'framer-motion'

type ExperienceItemProps = {
  experience: {
    company: string
    companyLogo: string
    companyLink: string
    role: string
    startDate: string
    endDate?: string
    description: string
    techs: string[]
  }
}

export const ExperienceItem = ({ experience }: ExperienceItemProps) => {
  const {
    endDate,
    company,
    companyLogo,
    companyLink,
    description,
    role,
    techs,
  } = experience

  const startDate = new Date(experience.startDate)
  const now = new Date()

  const formattedStartDate = format(startDate, 'MMM yyyy', { locale: ptBR })
  const formattedEndDate = endDate
    ? format(new Date(endDate), 'MMM yyyy', { locale: ptBR })
    : 'O momento'

  const months = differenceInMonths(now, startDate)
  const anos = differenceInYears(now, startDate)
  const monthsRemaining = months % 12

  const formattedDuration =
    anos > 0
      ? `${anos} ano${anos > 1 ? 's' : ''}${
          monthsRemaining > 0
            ? ` e ${monthsRemaining} mes${monthsRemaining > 1 ? 'es' : ''}`
            : ''
        }`
      : `${months} mes${months > 1 ? 'es' : ''}`

  return (
    <motion.div
      className="grid grid-cols-[40px,1fr] gap-4 md:gap-10"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 50 }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex items-center flex-col gap-4">
        <div className="rounded-full border border-gray-500 p-0.5">
          <Image
            src={companyLogo}
            width={40}
            height={40}
            className="rounded-full"
            alt={`Logo da empresa ${company}`}
          />
        </div>

        <div className="h-full w-[1px] bg-gray-800" />
      </div>

      <div>
        <div className="flex flex-col gap-2 text-sm sm:text-base">
          <a
            href={companyLink}
            target="_blank"
            className="text-gray-500 hover:text-emerald-500 transition-colors"
            rel="noreferrer"
          >
            @ {company}
          </a>
          <h4 className="text-gray-300">{role}</h4>
          <span className="text-gray-500">
            <span className="capitalize">{formattedStartDate}</span> •{' '}
            {formattedEndDate} • ({formattedDuration})
          </span>
          <p className="text-gray-400">{description}</p>
        </div>

        <p className="text-gray-400 text-sm mb-3 mt-6 font-semibold">
          Competência
        </p>
        <div className="flex gap-x-2 gap-y-3 flex-wrap lg:max-w-[350px] mb-8">
          {techs.map((tech, i) => (
            <motion.div
              key={`experience-${company}-tech-${tech}`}
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0 }}
              transition={{ duration: 0.2, delay: i * 0.1 }}
            >
              <TechBadge name={tech} />
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  )
}
