import { cn } from '@/utils/cn'

interface CardProps {
  children: React.ReactNode
  className?: string
  hover?: boolean
}

export function Card({ children, className, hover = true }: CardProps) {
  return (
    <div
      className={cn(
        'bg-white rounded-xl overflow-hidden',
        hover && 'transition-all duration-500 hover:shadow-xl hover:-translate-y-1',
        className
      )}
    >
      {children}
    </div>
  )
}
