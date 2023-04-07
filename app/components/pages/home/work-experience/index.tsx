import { SectionTitle } from '@/app/components/section-title'
import { ExperienceItem } from './experience-item'

const EXPERIENCES = [
  {
    company: 'Workwolf',
    companyLogo: 'https://media.graphassets.com/Q4lS2mPkT4Kw3BHM6Ba5',
    role: 'Desenvolvedor Front-End',
    startDate: '2022-10-20',
    description:
      'Desenvolvimento e manutenção de interfaces utilizando React, Next, Tailwind, Typescript e Figma. Para o planejamento dos sprints, é utilizado o Jira.',
    techs: [
      'Next.js',
      'Next Auth',
      'Stitches',
      'Radix',
      'TypeScript',
      'Prisma',
      'React Query',
    ],
  },
  {
    company: 'Cidade Alta',
    companyLogo: 'https://media.graphassets.com/HaecH32uSOi4y1MpanTB',
    role: 'Desenvolvedor Front-End',
    startDate: '2021-01-07',
    description:
      'Desenvolvimento e manutenção de interfaces usando React, Vite, Typescript, Redux, Styled Components, e Figma. Para o planejamento dos sprints, é utilizado o Azure DevOps.',
    techs: [
      'Next.js',
      'Next Auth',
      'Stitches',
      'Radix',
      'TypeScript',
      'Prisma',
      'React Query',
    ],
  },
]

export const WorkExperience = () => {
  return (
    <section className="container py-16 flex gap-10 md:gap-4 lg:gap-16 flex-col md:flex-row">
      <div className="max-w-[420px]">
        <SectionTitle
          subtitle="experiências"
          title="Experiência Profissional"
        />
        <p className="text-gray-400 mt-6">
          Estou sempre aberto a novos desafios e projetos emocionantes. Vamos
          trabalhar juntos para criar soluções incríveis para sua empresa!
        </p>
      </div>

      <div className="flex flex-col gap-4">
        {EXPERIENCES.map((experience) => (
          <ExperienceItem key={experience.company} experience={experience} />
        ))}
      </div>
    </section>
  )
}
