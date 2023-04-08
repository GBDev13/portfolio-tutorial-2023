import { ProjectDetails } from '@/app/components/pages/project/project-details'
import { ProjectSections } from '@/app/components/pages/project/project-sections'
import { ProjectPageData, ProjectsPageStaticData } from '@/app/types/page-info'
import { fetchHygraphQuery } from '@/app/utils/fetch-hygraph-query'
import { Metadata } from 'next'
import { notFound } from 'next/navigation'

type ProjectProps = {
  params: {
    slug: string
  }
}

const getProjectDetails = async (slug: string): Promise<ProjectPageData> => {
  const query = `
  query ProjectQuery() {
    project(where: {slug: "${slug}"}) {
      pageThumbnail {
        url
      }
      thumbnail {
        url
      }
      sections {
        title
        image {
          url
        }
      }
      title
      shortDescription
      description {
        raw
        text
      }
      technologies {
        name
      }
    }
    socials {
      url
      iconSvg
    }
  }
  `
  return fetchHygraphQuery(
    query,
    1000 * 60 * 60 * 24, // 1 day
  )
}

export default async function Project({ params: { slug } }: ProjectProps) {
  const { project, socials } = await getProjectDetails(slug)

  if (!project?.title) return notFound()

  return (
    <>
      <ProjectDetails project={project} contacts={socials} />
      <ProjectSections sections={project.sections} />
    </>
  )
}

export async function generateStaticParams() {
  const query = `
    query ProjectsSlugsQuery() {
      projects(first: 100) {
        slug
      }
    }
  `
  const { projects } = await fetchHygraphQuery<ProjectsPageStaticData>(query)

  return projects
}

export async function generateMetadata({
  params: { slug },
}: ProjectProps): Promise<Metadata> {
  const { project } = await getProjectDetails(slug)
  return {
    title: project.title,
    description: project.description.text,
    openGraph: {
      images: [
        {
          url: project.thumbnail.url,
          width: 1200,
          height: 630,
        },
      ],
    },
  }
}
