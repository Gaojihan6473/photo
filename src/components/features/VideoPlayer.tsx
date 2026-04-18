import { useEffect, useRef } from 'react'
import type { VideoWork } from '@/types'

interface VideoPlayerProps {
  video: VideoWork
  onClose: () => void
}

export function VideoPlayer({ video, onClose }: VideoPlayerProps) {
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    document.body.style.overflow = 'hidden'

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', handleKeyDown)

    if (videoRef.current) {
      videoRef.current.play()
    }

    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [onClose])

  return (
    <div
      className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-5xl aspect-video bg-black rounded-lg overflow-hidden shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute -top-10 sm:top-4 right-0 sm:right-4 text-white/70 hover:text-white transition-colors p-2 z-10"
          aria-label="关闭"
        >
          <svg
            className="w-8 h-8"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>

        {video.platform === 'bilibili' ? (
          <iframe
            src={video.videoUrl}
            className="w-full h-full"
            allowFullScreen
            scrolling="no"
            frameBorder="0"
            allow="autoplay; fullscreen"
          />
        ) : (
          <video
            ref={videoRef}
            src={video.videoUrl}
            controls
            autoPlay
            className="w-full h-full"
            playsInline
          />
        )}
      </div>

      <div className="absolute bottom-4 left-0 right-0 text-center">
        <p className="text-white font-medium">{video.title}</p>
        <p className="text-white/50 text-sm mt-1">{video.duration}</p>
      </div>
    </div>
  )
}
