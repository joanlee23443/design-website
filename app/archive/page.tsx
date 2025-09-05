"use client"

import { useState } from "react"
import Image from "next/image"
import ScrollReveal from "@/components/scroll-reveal"
import ProjectModal from "@/components/project-modal"

const archiveProjects = [
  {
    id: "spatial-branding",
    title: "Spatial Branding Project",
    image: "/placeholder.svg?height=400&width=400",
    year: "2023",
    client: "Brand Innovation Lab",
    description:
      "A comprehensive spatial branding experience that translates brand identity into physical environments through interactive installations.",
    images: [
      "/placeholder.svg?height=600&width=1200",
      "/placeholder.svg?height=600&width=1200",
      "/placeholder.svg?height=600&width=1200",
    ],
    process: [
      {
        phase: "Brand Analysis",
        description: "Deep dive into brand values and identity to understand core messaging and visual language.",
      },
      {
        phase: "Spatial Strategy",
        description: "Developed strategies for translating 2D brand elements into immersive 3D experiences.",
      },
      {
        phase: "Experience Design",
        description: "Created touchpoints and interactions that reinforce brand messaging through spatial design.",
      },
      {
        phase: "Implementation & Testing",
        description: "Executed the installation and gathered feedback to optimize brand engagement.",
      },
    ],
  },
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
    process: [
      {
        phase: "Site Research",
        description: "Analyzed building context, pedestrian patterns, and environmental conditions.",
      },
      {
        phase: "Technology Integration",
        description: "Developed sensor networks and display systems for real-time environmental response.",
      },
      {
        phase: "Visual Programming",
        description: "Created algorithms that translate data into compelling visual patterns and animations.",
      },
      {
        phase: "Installation & Calibration",
        description: "Coordinated complex installation process and fine-tuned system responsiveness.",
      },
    ],
  },
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
    process: [
      {
        phase: "Sensory Research",
        description: "Studied how different senses can be combined to create meaningful and memorable experiences.",
      },
      {
        phase: "Material Exploration",
        description: "Experimented with various materials and technologies to engage multiple sensory channels.",
      },
      {
        phase: "Journey Mapping",
        description: "Designed visitor pathways that create crescendos and transitions in sensory engagement.",
      },
      {
        phase: "Calibration & Testing",
        description: "Fine-tuned sensory elements to ensure comfortable yet impactful visitor experiences.",
      },
    ],
  },
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
    process: [
      {
        phase: "Data Analysis",
        description: "Analyzed urban data streams to identify patterns and stories worth visualizing.",
      },
      {
        phase: "Visualization Strategy",
        description: "Developed approaches for making complex data accessible and engaging to the public.",
      },
      {
        phase: "Interactive Design",
        description: "Created interfaces that allow visitors to explore and manipulate data visualizations.",
      },
      {
        phase: "Public Testing",
        description: "Conducted public trials to ensure the installation was both educational and engaging.",
      },
    ],
  },
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
    process: [
      {
        phase: "User Journey Analysis",
        description: "Mapped user journeys and identified pain points in existing navigation systems.",
      },
      {
        phase: "System Design",
        description: "Developed integrated physical and digital wayfinding solutions for seamless navigation.",
      },
      {
        phase: "Prototype Testing",
        description: "Created and tested prototypes with real users in various environmental conditions.",
      },
      {
        phase: "Implementation & Rollout",
        description: "Coordinated system-wide implementation and trained staff on maintenance procedures.",
      },
    ],
  },
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
    process: [
      {
        phase: "Site Scouting",
        description: "Identified underutilized spaces with potential for temporary community activation.",
      },
      {
        phase: "Community Engagement",
        description: "Worked with local communities to understand needs and co-create experience concepts.",
      },
      {
        phase: "Modular Design",
        description: "Created flexible, modular installations that could adapt to different spaces and contexts.",
      },
      {
        phase: "Impact Assessment",
        description: "Evaluated community response and long-term impact of temporary interventions.",
      },
    ],
  },
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
