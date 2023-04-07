import { Link } from '@/app/components/link'
import { TechBadge } from '@/app/components/tech-badge'
import Image from 'next/image'
import { HiArrowNarrowRight } from 'react-icons/hi'

type ProjectCardProps = {
  project: {
    title: string
    description: string
    techs: string[]
    thumbnail: string
    slug: string
  }
}

export const ProjectCard = ({ project }: ProjectCardProps) => {
  return (
    <div className="flex gap-6 lg:gap-12 flex-col lg:flex-row">
      <Image
        src={project.thumbnail}
        width={420}
        height={304}
        alt={`Thumbnail do projeto ${project.title}`}
        className="w-full h-[200px] sm:h-[300px] lg:w-[420px] lg:min-h-full object-cover rounded-lg"
      />

      <div className="lg:py-[18px]">
        <h3 className="flex items-center gap-3 font-medium text-lg text-gray-50">
          <Image
            width={20}
            height={20}
            alt=""
            src="/images/icons/project-title-icon.svg"
          />
          {project.title}
        </h3>

        <p className="text-gray-400 my-6">{project.description}</p>

        <div className="flex gap-x-2 gap-y-3 flex-wrap lg:max-w-[350px] mb-8">
          {project.techs.map((tech) => (
            <TechBadge name={tech} key={`${project.title}-tech-${tech}`} />
          ))}
        </div>

        <Link href={`/projects/${project.slug}`}>
          Ver projeto
          <HiArrowNarrowRight />
        </Link>
      </div>
    </div>
  )
}
