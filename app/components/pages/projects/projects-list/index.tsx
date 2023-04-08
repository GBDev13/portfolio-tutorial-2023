import { ProjectCard } from './project-card'

export const ProjectsList = () => {
  return (
    <section className="container py-32 grid grid-cols-[repeat(auto-fit,minmax(350px,1fr))] gap-x-4 gap-y-6">
      <ProjectCard />
      <ProjectCard />
      <ProjectCard />
      <ProjectCard />
      <ProjectCard />
      <ProjectCard />
    </section>
  )
}
