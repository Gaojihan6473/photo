import { cn } from '@/utils/cn'
import type { ButtonHTMLAttributes } from 'react'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
}

export function Button({
  className,
  variant = 'primary',
  size = 'md',
  children,
  ...props
}: ButtonProps) {
  return (
    <button
      className={cn(
        'inline-flex items-center justify-center font-medium transition-all duration-300',
        'focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2',
        'disabled:opacity-50 disabled:cursor-not-allowed',
        variant === 'primary' && 'bg-primary text-white hover:bg-primary-soft',
        variant === 'secondary' && 'bg-accent text-white hover:bg-accent-soft',
        variant === 'ghost' && 'bg-transparent text-primary hover:bg-gray-100',
        size === 'sm' && 'px-3 py-1.5 text-sm rounded-md',
        size === 'md' && 'px-5 py-2.5 text-base rounded-lg',
        size === 'lg' && 'px-7 py-3.5 text-lg rounded-lg',
        className
      )}
      {...props}
    >
      {children}
    </button>
  )
}
