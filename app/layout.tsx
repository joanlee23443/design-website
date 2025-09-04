import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Joan Lee - Spatial Experience Designer",
  description: "Portfolio of spatial experience designer Joan Lee",
  icons: {
    icon: [
      {
        url: "/images/new-logo.svg",
        type: "image/svg+xml",
      },
    ],
    shortcut: "/images/new-logo.svg",
    apple: "/images/new-logo.svg",
  },
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/images/new-logo.svg" type="image/svg+xml" />
        <link rel="shortcut icon" href="/images/new-logo.svg" />
        <link rel="apple-touch-icon" href="/images/new-logo.svg" />
      </head>
      <body className={`${inter.className} bg-black text-white`}>
        <Navigation />
        {children}
        <Footer />
      </body>
    </html>
  )
}
