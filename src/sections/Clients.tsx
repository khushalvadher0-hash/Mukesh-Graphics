import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { useEffect, useState } from 'react'
import { fadeInUp } from '../animations/variants'
import { clients } from '../data/company'

export default function Clients() {
  const [position, setPosition] = useState(0)

  useEffect(() => {
    const timer = window.setInterval(() => setPosition((prev) => (prev > -90 ? prev - 1.2 : 0)), 40)
    return () => window.clearInterval(timer)
  }, [])

  return (
    <section id="clients" className="relative overflow-hidden py-20 sm:py-24">
      <div className="absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-white to-transparent" />
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mb-12 flex items-center justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.35em] text-primary">Trusted by clients</p>
            <h2 className="mt-4 text-3xl font-semibold text-body sm:text-4xl">Pan-India brand partnerships with premium trust.</h2>
          </div>
          <div className="inline-flex items-center gap-2 text-sm font-semibold text-primary">
            Explore clients
            <ArrowRight size={18} />
          </div>
        </div>
        <div className="overflow-hidden rounded-[36px] border border-border bg-white p-5 shadow-soft">
          <motion.div animate={{ x: [`${position}%`, '0%'] }} transition={{ ease: 'linear', duration: 20, repeat: Infinity }} className="flex min-w-full items-center gap-10">
            {[...clients, ...clients].map((name, index) => (
              <div key={`${name}-${index}`} className="min-w-[180px] rounded-3xl bg-surface px-6 py-6 text-center text-sm font-semibold text-body shadow-sm">
                {name}
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
