"use client"

import { useEffect } from "react"
import Image from "next/image"
import { X } from "lucide-react"

interface ProjectModalProps {
  isOpen: boolean
  onClose: () => void
  project: {
    title: string
    year: string
    client: string
    description: string
    images: string[]
    process?: Array<{
      phase: string
      description: string
    }>
  } | null
  hideSidebar?: boolean // <-- NEW
}

export default function ProjectModal({
  isOpen,
  onClose,
  project,
  hideSidebar = false, // <-- NEW (default keeps old behavior)
}: ProjectModalProps) {
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "unset"
    return () => {
      document.body.style.overflow = "unset"
    }
  }, [isOpen])

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose()
    }
    if (isOpen) document.addEventListener("keydown", handleEscape)
    return () => document.removeEventListener("keydown", handleEscape)
  }, [isOpen, onClose])

  if (!isOpen || !project) return null

  // <-- NEW: only show Process when we have data AND we’re not explicitly hiding the sidebar
  const showProcess = !hideSidebar && Array.isArray(project.process) && project.process.length > 0

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" onClick={onClose} />
      <div
        className={`relative bg-black border border-gray-800 rounded-lg w-full max-h-[80vh] overflow-hidden ${
          hideSidebar ? "max-w-5xl" : "max-w-4xl"
        }`}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 text-gray-400 hover:text-white transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="overflow-y-auto max-h-[80vh]">
          <div className={`grid grid-cols-1 ${showProcess ? "lg:grid-cols-3" : ""} gap-8 p-6`}>
            <div className={`${showProcess ? "lg:col-span-2" : ""} space-y-4`}>
              <div>
                <h1 className="text-2xl font-light tracking-wide mb-2">{project.title}</h1>
                <div className="flex gap-6 text-gray-400 text-sm mb-4">
                  <span>{project.year}</span>
                  <span>{project.client}</span>
                </div>
                <div
                  className="text-gray-300 leading-relaxed text-sm mb-6"
                  dangerouslySetInnerHTML={{ __html: project.description }}
                />
              </div>

              <div className="space-y-4">
                {project.images.map((image, index) => (
                  <div key={index} className="relative aspect-video">
                    <Image
                      src={image || "/placeholder.svg"}
                      alt={`${project.title} - Image ${index + 1}`}
                      fill
                      className="object-cover rounded"
                    />
                  </div>
                ))}
              </div>
            </div>

            {showProcess && (
              <div className="space-y-6">
                <h2 className="text-lg font-light mb-4">Process</h2>
                <div className="space-y-4">
                  {project.process!.map((phase, index) => (
                    <div key={index} className="border-l border-gray-700 pl-4">
                      <h3 className="text-sm font-medium mb-1">{phase.phase}</h3>
                      <p className="text-gray-400 text-xs leading-relaxed">{phase.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
