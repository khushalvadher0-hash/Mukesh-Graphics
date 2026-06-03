import { motion } from 'framer-motion'
import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from 'react'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode
  variant?: 'primary' | 'ghost'
  size?: 'md' | 'lg'
  href?: string
}

export default function Button({ children, variant = 'primary', size = 'md', href, type = 'button', ...props }: ButtonProps) {
  const base = 'inline-flex items-center justify-center rounded-full font-semibold transition-all focus:outline-none focus:ring-2 focus:ring-primary/30'
  const variants = {
    primary: 'bg-primary text-white shadow-soft hover:-translate-y-0.5 hover:shadow-glow',
    ghost: 'border border-border bg-white text-body hover:border-primary hover:text-primary',
  }
  const sizes = {
    md: 'px-6 py-3 text-sm sm:text-base',
    lg: 'px-8 py-4 text-base',
  }

  const content = (
    <motion.span whileHover={{ y: -2 }} whileTap={{ scale: 0.98 }} className={`${base} ${variants[variant]} ${sizes[size]}`}>
      {children}
    </motion.span>
  )

  if (href) {
    const anchorProps = props as AnchorHTMLAttributes<HTMLAnchorElement>
    return (
      <a href={href} className="inline-block" {...anchorProps}>
        {content}
      </a>
    )
  }

  return (
    <button type={type} {...props}>
      {content}
    </button>
  )
}
