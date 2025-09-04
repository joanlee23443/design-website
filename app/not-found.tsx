import Link from "next/link"

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-6 text-center">
      <h1 className="text-4xl font-light mb-4">Page Not Found</h1>
      <p className="text-gray-400 mb-8">The page you are looking for doesn't exist or has been moved.</p>
      <Link href="/" className="px-6 py-3 border border-white/20 hover:bg-white/10 transition-colors">
        Return Home
      </Link>
    </div>
  )
}
