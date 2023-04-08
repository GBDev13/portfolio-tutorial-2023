'use client'

import { Button } from '@/app/components/button'
import { Link } from '@/app/components/link'
import { SectionTitle } from '@/app/components/section-title'
import { TechBadge } from '@/app/components/tech-badge'
import { HiArrowNarrowLeft, HiArrowNarrowRight } from 'react-icons/hi'
import NextLink from 'next/link'
import { motion } from 'framer-motion'
import { Project } from '@/app/types/projects'
import { RichText } from '@/app/components/rich-text'
import { Social } from '@/app/types/page-info'
import { CMSIcon } from '@/app/components/cms-icon'

type ProjectDetailsProps = {
  project: Project
  contacts: Social[]
}

export const ProjectDetails = ({ project, contacts }: ProjectDetailsProps) => {
  const baseAnimProps = {
    initial: { opacity: 0, y: 50 },
    whileInView: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: 50 },
    transition: { duration: 0.5 },
  }
  return (
    <section className="w-full min-h-[750px] flex flex-col items-center justify-end relative pb-10 sm:pb-24 py-24 px-6 overflow-hidden">
      <motion.div
        className="absolute inset-0 z-[-1]"
        style={{
          background: `url(/images/hero-bg.png) no-repeat center/cover, url(${project.pageThumbnail.url}) no-repeat center/cover`,
          backgroundSize: 'cover',
        }}
        initial={{ opacity: 0, scale: 1.3 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 1.2 }}
        transition={{ duration: 0.5 }}
      />

      <SectionTitle
        subtitle="projetos"
        title={project.title}
        className="text-center items-center sm:[&>h3]:text-4xl"
      />
      <motion.div
        className="text-gray-400 text-center max-w-[640px] my-4 sm:my-6 text-sm sm:text-base"
        {...baseAnimProps}
      >
        <RichText content={project.description.raw} />
      </motion.div>
      <div className="w-full max-w-[330px] flex flex-wrap gap-2 items-center justify-center">
        {project.technologies.map((tech, i) => (
          <motion.div
            key={tech.name}
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.5 }}
            transition={{ duration: 0.3, delay: i * 0.1 }}
          >
            <TechBadge name={tech.name} />
          </motion.div>
        ))}
      </div>
      <motion.div
        className="my-6 sm:my-12 flex items-center gap-2 sm:gap-4 flex-col sm:flex-row"
        {...baseAnimProps}
      >
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
              <CMSIcon icon={contact.iconSvg} />
            </a>
          ))}
        </div>
      </motion.div>
      <Link href="/projects">
        <HiArrowNarrowLeft size={20} />
        Voltar para projetos
      </Link>
    </section>
  )
}
