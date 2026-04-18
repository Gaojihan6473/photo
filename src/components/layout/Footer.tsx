import { personalInfo } from '@/data/works'

export function Footer() {
  return (
    <footer className="bg-primary text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <p className="text-2xl font-display font-semibold mb-2">
              {personalInfo.name}
            </p>
            <p className="text-gray-400 text-sm">
              {personalInfo.title}
            </p>
          </div>

          <div className="flex items-center gap-6">
            {personalInfo.socials?.map((social) => (
              <a
                key={social.platform}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-accent transition-colors duration-300"
                aria-label={social.label}
              >
                {social.label}
              </a>
            ))}
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-800 text-center">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} {personalInfo.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
