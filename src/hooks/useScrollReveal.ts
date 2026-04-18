import { useEffect, useRef, useState } from 'react'

export function useScrollReveal() {
  const [isRevealed, setIsRevealed] = useState(false)
  const ref = useRef<HTMLElement>(null)

  useEffect(() => {
    const element = ref.current
    if (!element) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsRevealed(true)
          observer.unobserve(element)
        }
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    )

    observer.observe(element)

    return () => {
      observer.unobserve(element)
    }
  }, [])

  return { ref, isRevealed }
}
