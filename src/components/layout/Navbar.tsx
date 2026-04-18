import { useState, useEffect } from 'react'
import { cn } from '@/utils/cn'

const navItems = [
  { label: '首页', href: '#hero' },
  { label: '摄影', href: '#photography' },
  { label: '剪辑', href: '#video' },
  { label: '联系', href: '#contact' },
]

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        isScrolled
          ? 'bg-white/90 backdrop-blur-md shadow-sm'
          : 'bg-transparent'
      )}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          <a
            href="#hero"
            className={cn(
              'text-xl sm:text-2xl font-display font-semibold transition-colors duration-300',
              isScrolled ? 'text-primary' : 'text-white'
            )}
          >
            GJIHAN
          </a>

          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className={cn(
                  'text-sm font-medium transition-colors duration-300 relative',
                  'after:absolute after:bottom-0 after:left-0 after:w-0 after:h-px',
                  'after:bg-accent after:transition-all after:duration-300',
                  'hover:after:w-full',
                  isScrolled
                    ? 'text-gray-600 hover:text-primary'
                    : 'text-white/80 hover:text-white'
                )}
              >
                {item.label}
              </a>
            ))}
          </div>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={cn(
              'md:hidden p-2 transition-colors',
              isScrolled ? 'text-primary' : 'text-white'
            )}
            aria-label="菜单"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {isMobileMenuOpen && (
          <div className="md:hidden bg-white/95 backdrop-blur-md border-t border-gray-100">
            <div className="py-4 space-y-2">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block px-4 py-3 text-gray-600 hover:text-primary hover:bg-gray-50 transition-colors"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
