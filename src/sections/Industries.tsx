import { motion } from 'framer-motion'
import { Briefcase, Droplet, HeartPulse, ShoppingBag, Sparkle, Truck } from 'lucide-react'
import { industries } from '../data/industries'
import { fadeInUp } from '../animations/variants'

const icons = {
  Food: Briefcase,
  FMCG: ShoppingBag,
  Healthcare: HeartPulse,
  Retail: Sparkle,
  Cosmetics: Droplet,
  Industrial: Truck,
}

export default function Industries() {
  return (
    <section id="industries" className="bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mb-12 max-w-3xl">
          <p className="text-sm uppercase tracking-[0.35em] text-primary">Industries</p>
          <h2 className="mt-4 text-3xl font-semibold text-body sm:text-4xl">Industry-specific packaging for market-leading brands.</h2>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {industries.map((industry) => {
            const Icon = icons[industry.name as keyof typeof icons]
            return (
              <motion.article initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={fadeInUp} className="group rounded-[32px] border border-border bg-surface p-8 transition hover:-translate-y-2 hover:border-primary/40 hover:bg-white">
                <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-3xl bg-primary/10 text-primary transition group-hover:bg-primary/15">
                  <Icon size={24} />
                </div>
                <h3 className="text-xl font-semibold text-body">{industry.name}</h3>
                <p className="mt-4 text-sm leading-7 text-muted">{industry.description}</p>
              </motion.article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
