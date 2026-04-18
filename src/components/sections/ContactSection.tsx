import { useState } from 'react'
import { personalInfo } from '@/data/works'
import { Container } from '@/components/layout/Container'
import { useScrollReveal } from '@/hooks/useScrollReveal'

export function ContactSection() {
  const { ref, isRevealed } = useScrollReveal()
  const [copied, setCopied] = useState<string | null>(null)

  const handleCopy = async (text: string, type: string) => {
    try {
      await navigator.clipboard.writeText(text)
      setCopied(type)
      setTimeout(() => setCopied(null), 2000)
    } catch (err) {
      console.error('复制失败:', err)
    }
  }

  return (
    <section
      id="contact"
      ref={ref as React.RefObject<HTMLElement>}
      className="py-20 sm:py-28 bg-white"
    >
      <Container>
        <div
          className={`max-w-2xl mx-auto text-center transition-all duration-1000 ${
            isRevealed ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <p className="text-accent text-sm font-medium tracking-widest uppercase mb-3">
            Contact
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-semibold text-primary mb-6">
            联系我
          </h2>
          <p className="text-gray-500 text-lg mb-12">
            无论是项目合作还是单纯交流，期待与你的连接
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-xl mx-auto">
            <ContactCard
              icon={
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              }
              label="邮箱"
              value={personalInfo.email}
              onCopy={() => handleCopy(personalInfo.email, 'email')}
              copied={copied === 'email'}
            />

            <ContactCard
              icon={
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
              }
              label="微信"
              value={personalInfo.wechat}
              onCopy={() => handleCopy(personalInfo.wechat, 'wechat')}
              copied={copied === 'wechat'}
            />

            {personalInfo.socials && personalInfo.socials.length > 0 && (
              <div className="pt-4">
                <p className="text-sm text-gray-400 mb-4">社交媒体</p>
                <div className="flex justify-center gap-6">
                  {personalInfo.socials.map((social) => (
                    <a
                      key={social.platform}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex flex-col items-center gap-2"
                    >
                      <div
                        className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center
                                   transition-all duration-300 group-hover:bg-accent"
                      >
                        <span className="text-sm font-medium text-gray-600 group-hover:text-white transition-colors">
                          {social.label.charAt(0)}
                        </span>
                      </div>
                      <span className="text-xs text-gray-400 group-hover:text-gray-600 transition-colors">
                        {social.label}
                      </span>
                    </a>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </Container>
    </section>
  )
}

interface ContactCardProps {
  icon: React.ReactNode
  label: string
  value: string
  onCopy: () => void
  copied: boolean
}

function ContactCard({ icon, label, value, onCopy, copied }: ContactCardProps) {
  return (
    <button
      onClick={onCopy}
      className="group relative flex flex-col items-center p-6 bg-white border border-gray-200 rounded-2xl
                 transition-all duration-300 hover:border-accent hover:shadow-lg hover:-translate-y-0.5"
    >
      <div className="w-12 h-12 rounded-full bg-gray-50 flex items-center justify-center mb-4 text-gray-400 group-hover:bg-accent group-hover:text-white transition-all duration-300">
        {icon}
      </div>
      <p className="text-xs text-gray-400 mb-1 uppercase tracking-wider">{label}</p>
      <p className="text-sm font-medium text-primary group-hover:text-accent transition-colors">{value}</p>
      <div className={`absolute top-3 right-3 px-2 py-0.5 rounded text-xs font-medium transition-all duration-300 ${
        copied ? 'bg-green-500 text-white opacity-100' : 'bg-gray-100 text-gray-400 opacity-0 group-hover:opacity-100'
      }`}>
        {copied ? '已复制' : '点击复制'}
      </div>
    </button>
  )
}
