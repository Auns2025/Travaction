import React from 'react'
import { ArrowRight } from 'lucide-react'

export default function Button({
  children,
  onClick,
  variant = 'primary', // 'primary' | 'secondary' | 'outline' | 'dark'
  size = 'md', // 'sm' | 'md' | 'lg'
  icon = true,
  className = '',
  type = 'button',
  ...props
}) {
  const baseStyles = 'group relative inline-flex items-center justify-center font-medium rounded-full overflow-hidden transition-all duration-300 active:scale-95 cursor-pointer select-none hover:-translate-y-0.5'

  const sizes = {
    sm: 'px-5 py-2 text-xs gap-2',
    md: 'px-7 py-3 text-sm gap-2.5',
    lg: 'px-9 py-4 text-base gap-3',
  }

  const variants = {
    primary: 'bg-primary text-white shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/35 hover:bg-primary-dark',
    secondary: 'bg-dark text-white hover:bg-black shadow-md',
    outline: 'border-2 border-primary text-primary hover:bg-primary hover:text-white',
    dark: 'bg-white/10 text-white backdrop-blur-md border border-white/20 hover:bg-white hover:text-dark',
  }

  return (
    <button
      type={type}
      onClick={onClick}
      className={`${baseStyles} ${sizes[size]} ${variants[variant]} ${className}`}
      {...props}
    >
      <span className="relative z-10 font-semibold tracking-wide flex items-center gap-2">
        {children}
        {icon && (
          <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
        )}
      </span>
    </button>
  )
}
