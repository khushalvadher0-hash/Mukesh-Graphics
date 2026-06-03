import { motion } from 'framer-motion'
import type { ProductItem } from '../data/products'

interface ProductCardProps {
  product: ProductItem
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <motion.article whileHover={{ y: -8 }} className="card-glass group overflow-hidden rounded-[32px] border border-border p-6 shadow-soft transition-all hover:border-primary/40">
      <div className="mb-5 flex items-center justify-between gap-4 text-xs font-semibold uppercase tracking-[0.35em] text-muted">
        <span className={product.accent + ' rounded-full px-3 py-1'}>{product.category}</span>
        <span className="text-body">{product.label}</span>
      </div>
      <h3 className="text-xl font-semibold text-body transition group-hover:text-primary">{product.title}</h3>
      <p className="mt-4 text-sm leading-7 text-muted">{product.feature}</p>
      <div className="mt-6 h-40 overflow-hidden rounded-[28px] bg-gradient-to-br from-orange-50 via-white to-slate-100 shadow-glow">
        <img src={product.image} alt={product.title} className="h-full w-full object-cover" loading="lazy" />
      </div>
    </motion.article>
  )
}
