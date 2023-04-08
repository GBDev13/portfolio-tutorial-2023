import type { RichTextContent } from '@graphcms/rich-text-types'
import { Technology } from './projects'

export type WorkExperience = {
  companyLogo: {
    url: string
  }
  role: string
  companyName: string
  companyUrl: string
  startDate: string
  endDate: string
  technologies: Technology[]
  description: {
    raw: RichTextContent
  }
}
