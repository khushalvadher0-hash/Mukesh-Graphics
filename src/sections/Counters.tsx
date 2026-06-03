import { motion } from 'framer-motion'
import { stats } from '../data/stats'
import { fadeInUp, staggerChildren } from '../animations/variants'

export default function Counters() {
  return (
    <section className="bg-surface py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((item, index) => (
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} variants={fadeInUp} transition={{ delay: index * 0.08 }} key={item.label} className="rounded-[32px] border border-border bg-white p-8 text-center shadow-soft">
              <p className="text-4xl font-semibold text-body">{item.value}</p>
              <p className="mt-3 text-sm leading-7 text-muted">{item.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
