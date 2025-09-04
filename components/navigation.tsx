"use client"

import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { useState } from "react"
import { ChevronDown, ChevronUp } from "lucide-react"

export default function Navigation() {
  const pathname = usePathname()
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-sm">
      {/* Desktop Navigation */}
      <div className="hidden md:flex justify-between items-center p-6">
        <Link href="/" className="flex items-center gap-3 h-8">
          <div className="relative w-6 h-6 flex items-center">
            <Image
              src="/images/new-logo.svg"
              alt="Joan Lee Logo"
              fill
              className="object-contain"
              priority
              style={{ imageRendering: "crisp-edges" }}
            />
          </div>
          <span
            className="text-white font-light tracking-wide"
            style={{
              fontSize: "16px",
              fontWeight: "300",
              strokeWidth: "1px",
              WebkitTextStroke: "0.5px transparent",
            }}
          >
            Joan Lee
          </span>
        </Link>
        <div className="flex gap-8">
          <Link
            href="/"
            className={`text-sm tracking-wide transition-opacity hover:opacity-70 ${
              pathname === "/" ? "opacity-100" : "opacity-60"
            }`}
          >
            Studio
          </Link>
          <Link
            href="/archive"
            className={`text-sm tracking-wide transition-opacity hover:opacity-70 ${
              pathname === "/archive" ? "opacity-100" : "opacity-60"
            }`}
          >
            Archive
          </Link>
          <Link
            href="/about"
            className={`text-sm tracking-wide transition-opacity hover:opacity-70 ${
              pathname === "/about" ? "opacity-100" : "opacity-60"
            }`}
          >
            About
          </Link>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div className="md:hidden">
        <div className="flex justify-between items-center p-8">
          <Link href="/" className="flex items-center">
            <div className="relative w-6 h-6 flex items-center">
              <Image
                src="/images/new-logo.svg"
                alt="Joan Lee Logo"
                fill
                className="object-contain"
                priority
                style={{ imageRendering: "crisp-edges" }}
              />
            </div>
          </Link>
          <button
            onClick={toggleMenu}
            className="text-white/60 hover:text-white transition-colors"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
          </button>
        </div>

        {/* Mobile Menu Dropdown */}
        {isMenuOpen && (
          <div className="bg-black/90 backdrop-blur-sm border-t border-white/10">
            <div className="flex flex-col gap-4 p-8">
              <Link
                href="/"
                onClick={() => setIsMenuOpen(false)}
                className={`text-sm tracking-wide transition-opacity hover:opacity-70 ${
                  pathname === "/" ? "opacity-100" : "opacity-60"
                }`}
              >
                Studio
              </Link>
              <Link
                href="/archive"
                onClick={() => setIsMenuOpen(false)}
                className={`text-sm tracking-wide transition-opacity hover:opacity-70 ${
                  pathname === "/archive" ? "opacity-100" : "opacity-60"
                }`}
              >
                Archive
              </Link>
              <Link
                href="/about"
                onClick={() => setIsMenuOpen(false)}
                className={`text-sm tracking-wide transition-opacity hover:opacity-70 ${
                  pathname === "/about" ? "opacity-100" : "opacity-60"
                }`}
              >
                About
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
