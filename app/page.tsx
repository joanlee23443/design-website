"use client"

import Link from "next/link"
import Image from "next/image"
import { ChevronDown } from "lucide-react"
import ScrollReveal from "@/components/scroll-reveal"

const heroProjects = [
  {
    id: "hiraeth",
    title: "Recent Project",
    image: "/images/recent-project-interior.jpeg",
    logo: "hiraeth",
    tags: ["Physical Prototyping", "Illustration", "UX Research"],
  },
  {
    id: "shwood-experience",
    title: "Immersive Retail Experience",
    image: "/images/forrest-shwoodson-interior.jpeg",
    logo: "/images/shwood-logo.png",
    tags: ["Exhibition", "Game Design", "Illustration"],
  },
  {
    id: "orli",
    title: "Urban Light Installation",
    image: "/images/orli-installation.png",
    logo: "ORLI",
    tags: ["Physical Prototyping", "UI/UX", "XR"],
  },
  {
    id: "serenitea",
    title: "Interactive Museum Exhibit",
    image: "/images/serenitea-interactive.png",
    logo: "Serenitea",
    tags: ["Motion Graphics", "Physical Prototyping", "XR"],
  },
  {
    id: "imagine-usa-pavilion",
    title: "Digital Pavilion",
    image: "/images/usa-pavilion-interior.jpeg",
    logo: "Imagine: USA Pavilion",
    tags: ["Exhibition", "XR", "Motion Graphics"],
  },
  {
    id: "samsung-phantasma",
    title: "Spatial Storytelling Environment",
    image: "/images/spatial-storytelling-movement.png",
    logo: "/images/samsung-logo.png",
    tags: ["XR", "Systems Mapping", "UX Research"],
  },
  {
    id: "unhuman",
    title: "Interactive Light Installation",
    image: "/images/unhumana-exhibition.png",
    logo: "UNHUMAN Exhibition",
    tags: ["Exhibition", "XR"],
  },
]

// Updated color palette with more distinct Exhibition and XR colors
const tagColorMap: Record<string, string> = {
  "Physical Prototyping": "border-blue-300/70", // Soft blue
  Illustration: "border-amber-300/70", // Warm amber
  Exhibition: "border-rose-300/70", // Gentle rose (changed from teal)
  "Game Design": "border-purple-300/70", // Gentle purple
  "UI/UX": "border-orange-300/70", // Soft orange (swapped with rose)
  XR: "border-emerald-300/70", // Muted emerald (kept distinct)
  "Motion Graphics": "border-indigo-300/70", // Soft indigo
  "Systems Mapping": "border-teal-300/70", // Muted teal (swapped with exhibition)
  "UX Research": "border-slate-300/70", // Soft neutral
}

export default function HomePage() {
  const scrollToProjects = () => {
    const projectsSection = document.getElementById("projects-section")
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <main>
      {/* Introduction Section - Full Screen with Background */}
      <section className="min-h-screen bg-black flex flex-col items-center justify-center px-8 md:px-6 relative overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/homepage-background.png"
            alt=""
            fill
            className="object-cover opacity-50"
            priority
            quality={90}
          />
        </div>

        {/* Content */}
        <div className="relative z-10">
          <ScrollReveal>
            <div className="max-w-4xl mx-auto">
              <h1 className="text-2xl md:text-4xl lg:text-5xl xl:text-6xl leading-relaxed text-white font-extralight">
                Hi, I'm Joan Lee! I design <span className="font-semibold font-sans italic">memorable</span> experiences
                with a focus on <span className="font-semibold italic font-sans">delightful</span> interactions. Here is
                some of my work:
              </h1>
            </div>
          </ScrollReveal>
        </div>

        {/* Scroll Indicator */}
        <button
          onClick={scrollToProjects}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white/60 hover:text-white transition-all duration-300 animate-bounce z-10"
          aria-label="Scroll to projects"
        >
          <ChevronDown className="w-8 h-8" />
        </button>
      </section>

      <div id="projects-section" className="flex flex-col">
        {heroProjects.map((project, index) => (
          <ScrollReveal key={project.id} delay={index * 200}>
            <Link href={`/project/${project.id}`} className="group relative block w-full h-[60vh] overflow-hidden">
              <Image
                src={project.image || "/placeholder.svg"}
                alt={project.title}
                fill
                className="object-cover transition-all duration-500 group-hover:scale-105 group-hover:brightness-50"
                style={
                  index === 0
                    ? { objectPosition: "center 75%" }
                    : index === 1
                      ? { objectPosition: "center 40%" }
                      : index === 2
                        ? { objectPosition: "center 20%" }
                        : index === 3
                          ? { objectPosition: "center 100%" }
                          : index === 4
                            ? { objectPosition: "center 15%" }
                            : index === 5
                              ? { objectPosition: "center 0%" }
                              : {}
                }
                priority={index === 0}
                quality={85}
                sizes="100vw"
                loading={index < 2 ? "eager" : "lazy"}
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-500" />
              <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 px-8 md:px-0">
                {/* Logo */}
                <div className="mb-6 md:mb-4">
                  {typeof project.logo === "string" && project.logo.includes("/images/") ? (
                    <div className="relative w-48 h-16 md:w-56 md:h-20">
                      <Image
                        src={project.logo || "/placeholder.svg"}
                        alt="Project Logo"
                        fill
                        className={`object-contain ${
                          project.logo.includes("shwood") || project.logo.includes("samsung")
                            ? "filter brightness-0 invert"
                            : ""
                        }`}
                        quality={90}
                        sizes="(max-width: 768px) 200px, 300px"
                      />
                    </div>
                  ) : project.logo === "Imagine: USA Pavilion" ? (
                    <div
                      className="text-3xl md:text-4xl text-white text-center"
                      style={{
                        fontFamily: "'PT Sans Narrow', 'Arial Narrow', sans-serif",
                        letterSpacing: "0.05em",
                      }}
                    >
                      <span className="font-bold">Imagine</span>: USA Pavilion
                    </div>
                  ) : project.logo === "UNHUMAN Exhibition" ? (
                    <div className="text-white text-center px-8">
                      <div className="text-4xl md:text-5xl tracking-wider mb-2">
                        <span style={{ fontWeight: "900" }}>U</span>
                        <span style={{ fontWeight: "766" }}>N</span>
                        <span style={{ fontWeight: "633" }}>H</span>
                        <span style={{ fontWeight: "500" }}>U</span>
                        <span style={{ fontWeight: "366" }}>M</span>
                        <span style={{ fontWeight: "233" }}>A</span>
                        <span style={{ fontWeight: "100" }}>N</span>
                      </div>
                      <div className="text-lg md:text-xl font-light opacity-80">A James "Yaya" Hough Exhibition</div>
                    </div>
                  ) : project.logo === "Serenitea" ? (
                    <div
                      className="text-4xl md:text-5xl opacity-80 font-extralight text-white"
                      style={{
                        fontFamily: "'Inter', 'Helvetica Neue', Arial, sans-serif",
                        letterSpacing: "0.15em",
                        transform: "scaleY(1.05)",
                        fontWeight: "200",
                      }}
                    >
                      <span style={{ display: "inline-block", transform: "translateY(-2px) rotate(-1deg)" }}>S</span>
                      <span style={{ display: "inline-block", transform: "translateY(3px) rotate(1.5deg)" }}>e</span>
                      <span style={{ display: "inline-block", transform: "translateY(-1px) rotate(-0.5deg)" }}>r</span>
                      <span style={{ display: "inline-block", transform: "translateY(2px) rotate(1deg)" }}>e</span>
                      <span style={{ display: "inline-block", transform: "translateY(-3px) rotate(-1.2deg)" }}>n</span>
                      <span style={{ display: "inline-block", transform: "translateY(1px) rotate(0.8deg)" }}>i</span>
                      <span style={{ display: "inline-block", transform: "translateY(-1px) rotate(-0.7deg)" }}>t</span>
                      <span style={{ display: "inline-block", transform: "translateY(2px) rotate(1.3deg)" }}>e</span>
                      <span style={{ display: "inline-block", transform: "translateY(-2px) rotate(-0.9deg)" }}>a</span>
                    </div>
                  ) : project.logo === "ORLI" ? (
                    <div
                      className="text-5xl md:text-6xl font-light text-white"
                      style={{
                        fontFamily:
                          "'SF Pro Display', '-apple-system', 'BlinkMacSystemFont', 'Helvetica Neue', 'Arial', sans-serif",
                        fontWeight: "100",
                        letterSpacing: "-0.05em",
                        textTransform: "uppercase",
                        transformOrigin: "bottom center",
                      }}
                    >
                      <span
                        style={{
                          display: "inline-block",
                          transform: "rotate(-8deg)",
                          transformOrigin: "bottom center",
                        }}
                      >
                        O
                      </span>
                      <span
                        style={{
                          display: "inline-block",
                          transform: "rotate(-3deg)",
                          transformOrigin: "bottom center",
                        }}
                      >
                        R
                      </span>
                      <span
                        style={{
                          display: "inline-block",
                          transform: "rotate(3deg)",
                          transformOrigin: "bottom center",
                        }}
                      >
                        L
                      </span>
                      <span
                        style={{
                          display: "inline-block",
                          transform: "rotate(8deg)",
                          transformOrigin: "bottom center",
                        }}
                      >
                        I
                      </span>
                    </div>
                  ) : (
                    <div
                      className={`font-light tracking-widest text-white ${
                        project.logo === "hiraeth"
                          ? "text-4xl md:text-5xl opacity-80 font-extralight"
                          : "text-5xl md:text-6xl"
                      }`}
                      style={
                        project.logo === "hiraeth"
                          ? {
                              fontFamily: "'Inter', 'Helvetica Neue', Arial, sans-serif",
                              letterSpacing: "0.2em",
                              fontWeight: "300",
                            }
                          : {}
                      }
                    >
                      {project.logo}
                    </div>
                  )}
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-3 md:gap-2 justify-center max-w-sm md:max-w-md">
                  {project.tags.map((tag, tagIndex) => (
                    <div
                      key={tagIndex}
                      className={`px-3 py-1.5 md:px-2 md:py-1 rounded-full border text-white/80 text-sm md:text-xs tracking-wide bg-transparent ${
                        tagColorMap[tag] || "border-gray-300/70"
                      }`}
                    >
                      {tag}
                    </div>
                  ))}
                </div>
              </div>
            </Link>
          </ScrollReveal>
        ))}
      </div>
    </main>
  )
}
