import type { InputHTMLAttributes } from 'react'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string
}

export default function Input({ label, className = '', ...props }: InputProps) {
  return (
    <label className="block text-sm font-medium text-body">
      <span className="mb-2 block text-sm text-muted">{label}</span>
      <input
        className={`w-full rounded-2xl border border-border bg-surface px-4 py-3 text-body outline-none transition focus:border-primary/70 focus:ring-2 focus:ring-primary/10 ${className}`}
        {...props}
      />
    </label>
  )
}
