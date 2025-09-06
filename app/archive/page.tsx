"use client"

import { useState } from "react"
import Image from "next/image"
import ScrollReveal from "@/components/scroll-reveal"
import ProjectModal from "@/components/project-modal"

const archiveProjects = [
  {
    id: "shwarriors-board-game",
    title: "Shwarriors: The Board Game",
    image: "/images/shwarriors-cover.png",
    year: "2024",
    client: "Shwood Eyewear",
    description:
      "Highlights the unique, natural materials used by Shwood in their products in the form of a game you can play anywhere, from a camping trip in your living room. Meant to encourage adventure and play in your everyday life.",
    images: [
      "/images/shwarriors-pieces.jpg",
      "/images/shwarriors-real.jpg",
      "/images/shwarriors-board-min.jpg",
    ],
  {
    id: "orlando-segd",
    title: "SEGD Orlando: Type + Environmental Design",
    image: "/images/orlando-pattern.png",
    year: "2023",
    client: "City of Orlando",
    description:
      "Type, logo, signage, and merchandise design for a speculative SEGD conference in Orlando, Florida.",
    images: [
      "/images/orlando-logo.png",
      "/images/orlando-pattern.png",
      "/images/orlando-signage.png",
      "/images/orlando-postcards.png",
      "/images/orlando-pres.png",
      "/images/orlando-hat.png",
      "/images/orlando-type.jpg",
    ],
  {
    id: "type-studies",
    title: "Type Studies",
    image: "/images/blues-pposter.png",
    year: "2023",
    images: [
      "/images/type-spread.webp",
      "/images/blues-pposter.png",
    ],
  {
    id: "animal-project",
    title: "California Brown Pelican: A 3-Part Series",
    image: "/images/pelican-coverr.png",
    year: "2022",
    description: `Telling the story of the endangered bird with a 2D illustration, 3D sculpture, and animation. Full process on <a href="https://medium.com/@joanlee2" target="_blank" rel="noopener noreferrer" class="underline hover:text-gray-300">Medium</a>.`,
    images: [
      "/images/pelican-illust.webp",
      "/images/pelican-3d.webp",
      "/images/pelican-back.webp",
      "/images/pelican-closeup.webp",
    ],
    videos: ["https://vimeo.com/826243059?share=copy"]
  {
    id: "pitt-water-map",
    title: "PGH Water Quality Systems Map",
    image: "/images/pgh-water.avif",
    year: "2022",
    description:
      "Systems map of the urgent matter that is Pittsburgh's highly contaminated water, from the root causes to possible interventions.",
    images: [
      "/images/pgh-water.avif",
    ],
  {
    id: "mixed-illust",
    title: "2D/3D Illustrations",
    image: "/placeholder.svg?height=400&width=400",
    images: [
      "/placeholder.svg?height=600&width=1200",
      "/placeholder.svg?height=600&width=1200",
      "/placeholder.svg?height=600&width=1200",
    ],
]

export default function ArchivePage() {
  const [selectedProject, setSelectedProject] = useState<(typeof archiveProjects)[0] | null>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const openModal = (project: (typeof archiveProjects)[0]) => {
    setSelectedProject(project)
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setIsModalOpen(false)
    setSelectedProject(null)
  }

  return (
    <main className="pt-32 px-8 md:px-6 pb-20">
      <div className="max-w-7xl mx-auto">
        <ScrollReveal>
          <h1 className="text-3xl font-light tracking-wide mb-16">More of my work...</h1>
        </ScrollReveal>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {archiveProjects.map((project, index) => (
            <ScrollReveal key={project.id} delay={index * 100}>
              <button
                onClick={() => openModal(project)}
                className="group relative block aspect-square overflow-hidden w-full text-left"
              >
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  fill
                  className="object-cover transition-all duration-500 group-hover:scale-105 group-hover:brightness-50"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/60 transition-all duration-500" />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 p-6">
                  <h3 className="text-xl font-light text-center tracking-wide text-white">{project.title}</h3>
                </div>
              </button>
            </ScrollReveal>
          ))}
        </div>
      </div>

      <ProjectModal
        isOpen={isModalOpen}
        onClose={closeModal}
        project={selectedProject}
        hideSidebar // <-- this hides the Process column and lets main content fill the space
      />
    </main>
  )
}
