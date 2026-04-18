import { personalInfo } from '@/data/works'
import { useScrollReveal } from '@/hooks/useScrollReveal'

export function Hero() {
  const { ref, isRevealed } = useScrollReveal()

  return (
    <section
      id="hero"
      ref={ref as React.RefObject<HTMLElement>}
      className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden"
    >
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${personalInfo.heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/70" />
      </div>

      <div
        className={`relative z-10 text-center text-white px-4 transition-all duration-1000 ${
          isRevealed ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
      >
        <p className="text-accent font-medium tracking-widest text-sm sm:text-base mb-4 uppercase">
          {personalInfo.title}
        </p>

        <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-display font-semibold mb-6 text-balance">
          {personalInfo.name}
        </h1>

        <p className="text-lg sm:text-xl md:text-2xl text-gray-200 font-light max-w-2xl mx-auto leading-relaxed">
          {personalInfo.slogan}
        </p>

        <div className="mt-12">
          <a
            href="#photography"
            className="inline-flex items-center gap-2 px-8 py-3 border border-white/30 rounded-full
                       text-sm font-medium transition-all duration-300
                       hover:bg-white hover:text-primary"
          >
            <span>探索作品</span>
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </svg>
          </a>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <svg
          className="w-6 h-6 text-white/60"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          />
        </svg>
      </div>
    </section>
  )
}
