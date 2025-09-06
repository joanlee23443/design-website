interface VimeoEmbedProps {
  videoId: string
  title?: string
  className?: string
}

export default function VimeoEmbed({ videoId, title, className = "" }: VimeoEmbedProps) {
  return (
    <div className={`relative w-full ${className}`} style={{ paddingTop: "56.25%" }}>
      <iframe
        src={`https://player.vimeo.com/video/${videoId}`}
        title={title || "Vimeo video"}
        className="absolute inset-0 w-full h-full rounded"
        frameBorder="0"
        allow="autoplay; fullscreen; picture-in-picture; clipboard-write"
        allowFullScreen
      />
    </div>
  )
}
