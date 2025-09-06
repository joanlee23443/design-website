"use client"

import Link from "next/link"
import { Linkedin, Mail, FileText, ArrowUp } from "lucide-react"

// Medium Logo Component
const MediumIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className} xmlns="http://www.w3.org/2000/svg">
    <path d="M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zM20.96 12c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75S24 8.83 24 12z" />
  </svg>
)

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }

  return (
    <footer className="relative bottom-0 left-0 right-0 z-40 py-8 px-6 mt-24">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Back to top arrow */}
        <button
          onClick={scrollToTop}
          className="text-white/60 hover:text-white transition-all duration-300"
          aria-label="Back to top"
        >
          <ArrowUp className="w-8 h-8" />
        </button>

        {/* Social links */}
        <div className="flex gap-6">
          <Link
            href="https://www.linkedin.com/in/joan-lee-9127aa22b"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/60 hover:text-white transition-all duration-300"
            aria-label="LinkedIn"
          >
            <Linkedin className="w-6 h-6" />
          </Link>
          <Link
            href="https://medium.com/@joanlee2"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/60 hover:text-white transition-all duration-300"
            aria-label="Medium"
          >
            <MediumIcon className="w-6 h-6" />
          </Link>
          <Link
            href="mailto:joanlee252@gmail.com"
            className="text-white/60 hover:text-white transition-all duration-300"
            aria-label="Email"
          >
            <Mail className="w-6 h-6" />
          </Link>
          <Link
            href="https://drive.google.com/file/d/186gFWle9XHGEcNd-vFNZOvHZRLtXr6RG/view?usp=sharing"
            target="_blank"
            className="text-white/60 hover:text-white transition-all duration-300"
            aria-label="Resume"
          >
            <FileText className="w-6 h-6" />
          </Link>
        </div>
      </div>
    </footer>
  )
}
