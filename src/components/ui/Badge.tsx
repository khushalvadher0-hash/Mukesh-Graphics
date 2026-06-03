interface BadgeProps {
  label: string
}

export default function Badge({ label }: BadgeProps) {
  return <span className="inline-flex rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.24em] text-primary">{label}</span>
}
