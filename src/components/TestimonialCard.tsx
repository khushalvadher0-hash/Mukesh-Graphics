import { motion } from 'framer-motion'

interface TestimonialCardProps {
  name: string
  role: string
  quote: string
}

export default function TestimonialCard({ name, role, quote }: TestimonialCardProps) {
  return (
    <motion.div whileHover={{ y: -10 }} className="card-glass rounded-[32px] border border-border p-8 shadow-soft transition-all">
      <p className="text-base leading-8 text-body">“{quote}”</p>
      <div className="mt-8">
        <p className="font-semibold text-body">{name}</p>
        <p className="text-sm text-muted">{role}</p>
      </div>
    </motion.div>
  )
}
