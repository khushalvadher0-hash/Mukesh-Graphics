import { motion } from 'framer-motion'
import type { PortfolioItem } from '../data/portfolio'

interface PortfolioCardProps {
  item: PortfolioItem
}

export default function PortfolioCard({ item }: PortfolioCardProps) {
  return (
    <motion.article whileHover={{ y: -10 }} className="card-glass group overflow-hidden rounded-[32px] border border-border p-6 shadow-soft transition-all hover:border-primary/40">
      <div className="mb-5 flex items-center justify-between gap-4 text-xs font-semibold uppercase tracking-[0.35em] text-primary">
        <span>{item.category}</span>
        <span>{item.title}</span>
      </div>
      <div className="aspect-[4/3] w-full overflow-hidden rounded-[28px] bg-gradient-to-br from-slate-100 via-white to-slate-200">
        <img src={item.image} alt={item.title} className="h-full w-full object-cover" loading="lazy" />
      </div>
      <p className="mt-6 text-sm leading-7 text-muted">{item.preview}</p>
    </motion.article>
  )
}
