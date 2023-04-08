import type { RichTextContent } from '@graphcms/rich-text-types'

declare module PageInfo {
  export type Home = {
    introduction: {
      raw: RichTextContent
    }
    technologies: {
      name: string
    }[]
    profilePicture: {
      url: string
    }
  }
}
