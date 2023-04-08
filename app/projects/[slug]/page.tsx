import { ProjectDetails } from '@/app/components/pages/project/project-details'
import { ProjectSections } from '@/app/components/pages/project/project-sections'
import { ProjectPageData } from '@/app/types/page-info'
import { fetchHygraphQuery } from '@/app/utils/fetch-hygraph-query'

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
  return fetchHygraphQuery(query)
}

export default async function Project({ params: { slug } }: ProjectProps) {
  const { project, socials } = await getProjectDetails(slug)
  return (
    <>
      <ProjectDetails project={project} contacts={socials} />
      <ProjectSections sections={project.sections} />
    </>
  )
}
