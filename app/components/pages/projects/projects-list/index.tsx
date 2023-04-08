'use client'

import { ProjectCard } from './project-card'
import { motion } from 'framer-motion'

export const ProjectsList = () => {
  return (
    <section className="container py-32 grid grid-cols-[repeat(auto-fit,minmax(350px,1fr))] gap-x-4 gap-y-6">
      {Array.from({ length: 6 }).map((_, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 50 }}
          transition={{ duration: 0.5, delay: i * 0.1 }}
        >
          <ProjectCard />
        </motion.div>
      ))}
    </section>
  )
}
