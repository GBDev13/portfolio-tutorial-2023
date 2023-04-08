import { ProjectDetails } from '@/app/components/pages/project/project-details'
import { ProjectSections } from '@/app/components/pages/project/project-sections'
import {
  TbBrandGithub,
  TbBrandLinkedin,
  TbBrandYoutube,
  TbBrandWhatsapp,
} from 'react-icons/tb'

const project = {
  title: 'BookWise',
  description:
    'BookWise é uma plataforma de avaliação de livros que foi desenvolvida durante o bootcamp Ignite da Rocketseat. Com apenas um Figma precisavamos desenvolver essa aplicação completa Full Stack com Next.js.',
  techs: [
    'Next.js',
    'Next Auth',
    'Stiches',
    'Radix',
    'TypeScript',
    'Prisma',
    'React Query',
  ],
  pageThumbnail: 'https://media.graphassets.com/7Kic5YHkQcmGrN57MSXw',
  sections: [
    {
      title: 'Login',
      image: 'https://media.graphassets.com/ZsK2GK0HTru6pi0WwEpc',
    },
    {
      title: 'Início',
      image: 'https://media.graphassets.com/7Kic5YHkQcmGrN57MSXw',
    },
  ],
}

const contacts = [
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

export default function Project() {
  return (
    <>
      <ProjectDetails
        title={project.title}
        description={project.description}
        techs={project.techs}
        contacts={contacts}
        thumbnail={project.pageThumbnail}
      />
      <ProjectSections sections={project.sections} />
    </>
  )
}
