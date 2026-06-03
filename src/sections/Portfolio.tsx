import { useMemo, useState } from 'react'
import { motion } from 'framer-motion'
import PortfolioCard from '../components/PortfolioCard'
import { portfolio } from '../data/portfolio'
import { fadeInUp } from '../animations/variants'
import type { PortfolioItem } from '../data/portfolio'

const categories = ['All', 'Food Packaging', 'Ice Cream Packaging', 'Retail Packaging', 'Labels', 'Luxury Packaging']

export default function PortfolioSection() {
  const [selected, setSelected] = useState('All')
  const filtered = useMemo(
    () => (selected === 'All' ? portfolio : portfolio.filter((item) => item.category === selected)),
    [selected],
  )

  return (
    <section id="portfolio" className="bg-surface py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mb-12 max-w-3xl">
          <p className="text-sm uppercase tracking-[0.35em] text-primary">Portfolio</p>
          <h2 className="mt-4 text-3xl font-semibold text-body sm:text-4xl">A refined collection of packaging stories.</h2>
        </div>
        <div className="mb-8 flex flex-wrap gap-3">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelected(category)}
              className={`rounded-full border px-5 py-2 text-sm transition ${selected === category ? 'border-primary bg-primary/10 text-primary' : 'border-border bg-white text-body hover:border-primary hover:text-primary'}`}
            >
              {category}
            </button>
          ))}
        </div>
        <motion.div layout className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((item: PortfolioItem) => (
            <PortfolioCard key={item.title} item={item} />
          ))}
        </motion.div>
      </div>
    </section>
  )
}
