import { useState } from 'react'
import { videoWorks } from '@/data/works'
import { Container } from '@/components/layout/Container'
import { Badge } from '@/components/ui/Badge'
import { VideoPlayer } from '@/components/features/VideoPlayer'
import type { VideoWork } from '@/types'

export function VideoSection() {
  const [selectedVideo, setSelectedVideo] = useState<VideoWork | null>(null)

  return (
    <section id="video" className="py-20 sm:py-28 bg-gray-50">
      <Container>
        <div className="text-center mb-12 sm:mb-16">
          <p className="text-accent text-sm font-medium tracking-widest uppercase mb-3">
            Video
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-semibold text-primary">
            剪辑作品
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {videoWorks.map((video) => (
            <VideoCard
              key={video.id}
              video={video}
              onPlay={() => setSelectedVideo(video)}
            />
          ))}
        </div>
      </Container>

      {selectedVideo && (
        <VideoPlayer
          video={selectedVideo}
          onClose={() => setSelectedVideo(null)}
        />
      )}
    </section>
  )
}

interface VideoCardProps {
  video: VideoWork
  onPlay: () => void
}

function VideoCard({ video, onPlay }: VideoCardProps) {
  return (
    <div className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-1">
      <button
        onClick={onPlay}
        className="relative aspect-video w-full overflow-hidden bg-black focus:outline-none focus-visible:ring-2 focus-visible:ring-accent"
      >
        <img
          src={video.thumbnail}
          alt={video.title}
          className="w-full h-full object-cover transition-all duration-500 group-hover:scale-105"
        />

        <div
          className="absolute inset-0 flex items-center justify-center transition-all duration-300
                         bg-black/0 group-hover:bg-black/30"
        >
          <div
            className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-white/90 flex items-center justify-center
                           shadow-lg transition-all duration-300 group-hover:scale-110 group-hover:bg-white"
          >
            <svg
              className="w-6 h-6 text-primary ml-1"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M8 5v14l11-7z" />
            </svg>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
          <span className="text-white/80 text-xs font-mono">{video.duration}</span>
        </div>
      </button>

      <div className="p-4 sm:p-6">
        <h3 className="text-lg sm:text-xl font-heading font-semibold text-primary mb-2 group-hover:text-accent transition-colors">
          {video.title}
        </h3>
        <p className="text-gray-500 text-sm sm:text-base mb-4 line-clamp-2">
          {video.description}
        </p>
        <div className="flex flex-wrap gap-2">
          {video.tags.map((tag) => (
            <Badge key={tag}>{tag}</Badge>
          ))}
        </div>
      </div>
    </div>
  )
}
