import { motion } from 'framer-motion'
import { Archive, Eye, Layers, PenTool, ShieldCheck, Truck } from 'lucide-react'
import { fadeInUp, staggerChildren } from '../animations/variants'

const steps = [
  { icon: PenTool, title: 'Consultation', description: 'Brand-first packaging requirements and structural evaluation.' },
  { icon: Archive, title: 'Design', description: 'Premium layout, dielines, and thoughtful customer experience.' },
  { icon: Eye, title: 'Prototype', description: 'Physical samples for validation before production.' },
  { icon: Layers, title: 'Production', description: 'High-fidelity manufacturing with controlled runs.' },
  { icon: ShieldCheck, title: 'Quality Check', description: 'Batch inspections, lab tests, and compliance review.' },
  { icon: Truck, title: 'Delivery', description: 'Timely pan-India distribution and launch support.' },
]

export default function Process() {
  return (
    <section className="bg-slate-950 py-20 sm:py-24 text-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mb-12 max-w-3xl">
          <p className="text-sm uppercase tracking-[0.35em] text-orange-300">Six steps. Zero surprises.</p>
          <h2 className="mt-4 text-3xl font-semibold leading-tight text-white sm:text-4xl">A premium packaging process built for trust and speed.</h2>
        </div>
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={staggerChildren} className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
          {steps.map((step, index) => (
            <motion.article key={step.title} variants={fadeInUp} className="rounded-[32px] border border-white/10 bg-white/5 p-8 backdrop-blur-xl transition hover:-translate-y-2 hover:border-primary/50">
              <div className="mb-5 inline-flex h-14 w-14 items-center justify-center rounded-3xl bg-orange-100 text-orange-600 shadow-glow">
                <step.icon size={24} />
              </div>
              <h3 className="text-xl font-semibold text-white">{step.title}</h3>
              <p className="mt-4 text-sm leading-7 text-slate-300">{step.description}</p>
              <div className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-orange-300">
                Learn more
                <span className="text-xl">→</span>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
