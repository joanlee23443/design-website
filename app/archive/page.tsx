"use client"

import { useState } from "react"
import Image from "next/image"
import ScrollReveal from "@/components/scroll-reveal"
import ProjectModal from "@/components/project-modal"

const archiveProjects = [
  {
    id: "shwarriors-board-game",
    title: "Shwarriors: The Board Game",
    image: "/placeholder.svg?height=400&width=400",
    year: "2024",
    client: "Shwood Eyewear",
    description:
      "Highlights the unique, natural materials used by Shwood in their products in the form of a game you can play anywhere, from a camping trip in your living room. Meant to encourage adventure and play in your everyday life.",
    images: [
      "/placeholder.svg?height=600&width=1200",
      "/placeholder.svg?height=600&width=1200",
      "/placeholder.svg?height=600&width=1200",
    ],
  {
    id: "interactive-facade",
    title: "Interactive Building Facade",
    image: "/placeholder.svg?height=400&width=400",
    year: "2022",
    client: "Urban Development Corp",
    description:
      "A responsive building facade that creates dynamic visual displays based on environmental data and pedestrian interaction.",
    images: [
      "/placeholder.svg?height=600&width=1200",
      "/placeholder.svg?height=600&width=1200",
      "/placeholder.svg?height=600&width=1200",
    ],
  {
    id: "sensory-pavilion",
    title: "Sensory Experience Pavilion",
    image: "/placeholder.svg?height=400&width=400",
    year: "2023",
    client: "Arts & Culture Festival",
    description:
      "A multi-sensory pavilion that engages visitors through sound, light, texture, and scent to create immersive experiential narratives.",
    images: [
      "/placeholder.svg?height=600&width=1200",
      "/placeholder.svg?height=600&width=1200",
      "/placeholder.svg?height=600&width=1200",
    ],
  {
    id: "digital-landscape",
    title: "Digital Landscape Design",
    image: "/placeholder.svg?height=400&width=400",
    year: "2024",
    client: "Future Cities Initiative",
    description:
      "A digital landscape installation that visualizes urban data flows and creates interactive environments for public engagement.",
    images: [
      "/placeholder.svg?height=600&width=1200",
      "/placeholder.svg?height=600&width=1200",
      "/placeholder.svg?height=600&width=1200",
    ],
  {
    id: "wayfinding-system",
    title: "Wayfinding System",
    image: "/placeholder.svg?height=400&width=400",
    year: "2022",
    client: "Metropolitan Transit Authority",
    description:
      "A comprehensive wayfinding system that combines physical and digital elements to improve navigation in complex urban environments.",
    images: [
      "/placeholder.svg?height=600&width=1200",
      "/placeholder.svg?height=600&width=1200",
      "/placeholder.svg?height=600&width=1200",
    ],
  {
    id: "drawings-paintings",
    title: "Illustrations",
    image: "/placeholder.svg?height=400&width=400",
    description:
      "Drawings, paintings, and other traditional artwork.",
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
