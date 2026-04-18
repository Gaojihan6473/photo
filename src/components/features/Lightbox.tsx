import { useEffect, useState, useCallback } from 'react'
import type { PhotoWork } from '@/types'

interface LightboxProps {
  works: PhotoWork[]
  initialIndex: number
  onClose: () => void
}

export function Lightbox({ works, initialIndex, onClose }: LightboxProps) {
  const [currentIndex, setCurrentIndex] = useState(initialIndex)
  const [isLoaded, setIsLoaded] = useState(false)

  const currentWork = works[currentIndex]

  const goToPrevious = useCallback(() => {
    setCurrentIndex((prev) => (prev === 0 ? works.length - 1 : prev - 1))
    setIsLoaded(false)
  }, [works.length])

  const goToNext = useCallback(() => {
    setCurrentIndex((prev) => (prev === works.length - 1 ? 0 : prev + 1))
    setIsLoaded(false)
  }, [works.length])

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
      if (e.key === 'ArrowLeft') goToPrevious()
      if (e.key === 'ArrowRight') goToNext()
    }

    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', handleKeyDown)

    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [onClose, goToPrevious, goToNext])

  return (
    <div
      className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center"
      onClick={onClose}
    >
      <button
        onClick={onClose}
        className="absolute top-4 right-4 sm:top-6 sm:right-6 text-white/70 hover:text-white transition-colors p-2"
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

      {works.length > 1 && (
        <>
          <button
            onClick={(e) => {
              e.stopPropagation()
              goToPrevious()
            }}
            className="absolute left-2 sm:left-4 text-white/70 hover:text-white transition-colors p-2"
            aria-label="上一张"
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
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation()
              goToNext()
            }}
            className="absolute right-2 sm:right-4 text-white/70 hover:text-white transition-colors p-2"
            aria-label="下一张"
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
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </>
      )}

      <div
        className="max-w-[90vw] max-h-[85vh] flex flex-col items-center"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative">
          {!isLoaded && (
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-8 h-8 border-2 border-white/30 border-t-white rounded-full animate-spin" />
            </div>
          )}
          <img
            key={currentWork.id}
            src={currentWork.srcLarge}
            alt={currentWork.title}
            onLoad={() => setIsLoaded(true)}
            className={`max-w-full max-h-[75vh] object-contain transition-opacity duration-300 ${
              isLoaded ? 'opacity-100' : 'opacity-0'
            }`}
          />
        </div>

        <div className="mt-4 text-center">
          <p className="text-white font-medium">{currentWork.title}</p>
          <p className="text-white/50 text-sm mt-1">
            {currentIndex + 1} / {works.length}
          </p>
        </div>
      </div>
    </div>
  )
}
