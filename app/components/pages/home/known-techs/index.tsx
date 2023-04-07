import { SectionTitle } from '@/app/components/section-title'
import {
  TbBrandCss3,
  TbBrandHtml5,
  TbBrandJavascript,
  TbBrandNextjs,
  TbBrandReact,
  TbBrandReactNative,
  TbBrandTypescript,
} from 'react-icons/tb'
import { SiNodedotjs } from 'react-icons/si'
import { KnownTech } from './known-tech'

const TECHS = [
  {
    tech: 'HTML5',
    icon: <TbBrandHtml5 size={24} />,
    startDate: '2022-03-25',
  },
  {
    tech: 'CSS',
    icon: <TbBrandCss3 size={24} />,
    startDate: '2022-03-25',
  },
  {
    tech: 'JavaScript',
    icon: <TbBrandJavascript size={24} />,
    startDate: '2022-03-25',
  },
  {
    tech: 'TypeScript',
    icon: <TbBrandTypescript size={24} />,
    startDate: '2022-03-25',
  },
  {
    tech: 'React',
    icon: <TbBrandReact size={24} />,
    startDate: '2022-03-25',
  },
  {
    tech: 'React Native',
    icon: <TbBrandReactNative size={24} />,
    startDate: '2022-03-25',
  },
  {
    tech: 'Next.js',
    icon: <TbBrandNextjs size={24} />,
    startDate: '2022-03-25',
  },
  {
    tech: 'Node.js',
    icon: <SiNodedotjs size={24} />,
    startDate: '2022-03-25',
  },
]

export const KnownTechs = () => {
  return (
    <section className="container py-16">
      <SectionTitle subtitle="competências" title="Conhecimentos" />
      <div className="w-full grid grid-cols-[repeat(auto-fit,minmax(264px,1fr))] gap-3 mt-[60px]">
        {TECHS.map((tech) => (
          <KnownTech key={tech.tech} tech={tech} />
        ))}
      </div>
    </section>
  )
}
