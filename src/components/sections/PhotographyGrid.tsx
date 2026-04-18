import { useState } from 'react'
import { photoWorks } from '@/data/works'
import { Container } from '@/components/layout/Container'
import { Lightbox } from '@/components/features/Lightbox'
import type { PhotoWork } from '@/types'

const categories = [
  { key: 'all', label: '全部' },
  { key: 'portrait', label: '人像' },
  { key: 'landscape', label: '风光' },
  { key: 'urban', label: '城市' },
]

export function PhotographyGrid() {
  const [activeCategory, setActiveCategory] = useState('all')
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null)

  const filteredWorks =
    activeCategory === 'all'
      ? photoWorks
      : photoWorks.filter((work) => work.category === activeCategory)

  const handleOpenLightbox = (index: number) => {
    setLightboxIndex(index)
  }

  const handleCloseLightbox = () => {
    setLightboxIndex(null)
  }

  return (
    <section
      id="photography"
      className="py-20 sm:py-28 bg-white"
    >
      <Container>
        <div className="text-center mb-12 sm:mb-16">
          <p className="text-accent text-sm font-medium tracking-widest uppercase mb-3">
            Photography
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-semibold text-primary">
            摄影作品
          </h2>
        </div>

        <div className="flex flex-wrap justify-center gap-2 sm:gap-4 mb-10 sm:mb-12">
          {categories.map((cat) => (
            <button
              key={cat.key}
              onClick={() => setActiveCategory(cat.key)}
              className={`px-4 sm:px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeCategory === cat.key
                  ? 'bg-primary text-white'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
          {filteredWorks.map((work, index) => (
            <PhotoCard
              key={work.id}
              work={work}
              onClick={() => handleOpenLightbox(index)}
            />
          ))}
        </div>
      </Container>

      {lightboxIndex !== null && (
        <Lightbox
          works={filteredWorks}
          initialIndex={lightboxIndex}
          onClose={handleCloseLightbox}
        />
      )}
    </section>
  )
}

interface PhotoCardProps {
  work: PhotoWork
  onClick: () => void
}

function PhotoCard({ work, onClick }: PhotoCardProps) {
  const [isLoaded, setIsLoaded] = useState(false)

  return (
    <button
      onClick={onClick}
      className="group relative overflow-hidden rounded-lg aspect-square bg-gray-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent"
    >
      <img
        src={work.src}
        alt={work.title}
        loading="lazy"
        onLoad={() => setIsLoaded(true)}
        className={`w-full h-full object-cover transition-all duration-500 group-hover:scale-105 ${
          isLoaded ? 'blur-0' : 'blur-sm'
        }`}
      />

      <div
        className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300
                       flex items-center justify-center"
      >
        <div
          className="opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0
                         text-white text-center p-4"
        >
          <p className="font-medium text-sm sm:text-base">{work.title}</p>
          <p className="text-xs text-gray-300 mt-1">{work.year}</p>
        </div>
      </div>
    </button>
  )
}
