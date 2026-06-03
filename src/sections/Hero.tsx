import { motion } from 'framer-motion'
import { ArrowRight, CheckCircle2, Package, Sparkles } from 'lucide-react'
import Button from '../components/ui/Button'
import { fadeInUp, fadeIn, staggerChildren } from '../animations/variants'

const trustIndicators = ['ISO 9001', 'GMP', 'FSSAI Compliant', 'Pan India Delivery']

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-white pt-24 pb-20 sm:pt-28 lg:pb-24">
      <div className="absolute inset-x-0 top-0 h-80 bg-hero-glow" />
      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-16 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={staggerChildren} className="space-y-8">
            <motion.div variants={fadeInUp} className="inline-flex items-center gap-3 rounded-full border border-primary/20 bg-primary/10 px-5 py-2 text-sm font-semibold text-primary shadow-sm">
              Trusted by 4000+ brands across India
            </motion.div>
            <motion.div variants={fadeInUp}>
              <h1 className="text-5xl font-semibold leading-tight text-body sm:text-6xl">
                Packaging that <span className="text-primary">builds brands</span>.
              </h1>
            </motion.div>
            <motion.p variants={fadeInUp} className="max-w-xl text-base leading-8 text-muted sm:text-lg">
              Mukesh Graphics creates premium packaging systems with luxury finishes, fast pan-India delivery, and quality audited production for modern brands.
            </motion.p>
            <motion.div variants={fadeInUp} className="flex flex-col gap-4 sm:flex-row">
              <Button href="/portfolio" size="lg">View Portfolio</Button>
              <Button href="/contact" variant="ghost" size="lg">Get a Quote</Button>
            </motion.div>
            <motion.div variants={fadeInUp} className="grid grid-cols-2 gap-4 sm:grid-cols-4">
              {trustIndicators.map((item) => (
                <div key={item} className="rounded-3xl border border-border bg-surface px-4 py-3 text-center text-sm font-medium text-body shadow-sm">
                  <span className="inline-flex items-center gap-2 text-primary"><CheckCircle2 size={16} /> {item}</span>
                </div>
              ))}
            </motion.div>
          </motion.div>

          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={fadeIn} className="relative">
            <div className="card-glass relative overflow-hidden rounded-[46px] border border-border p-8 shadow-glow">
              <div className="absolute -left-16 top-10 h-28 w-28 rounded-full bg-primary/10 blur-3xl" />
              <div className="absolute -right-14 bottom-16 h-24 w-24 rounded-full bg-sky-100 blur-3xl" />
              <div className="relative flex flex-col gap-8">
                <div className="flex items-center justify-between rounded-[32px] bg-white/75 p-5 shadow-sm">
                  <div>
                    <p className="text-xs uppercase tracking-[0.35em] text-muted">Premium pack</p>
                    <h3 className="mt-2 text-xl font-semibold text-body">Luxury box concept</h3>
                  </div>
                  <Sparkles size={28} className="text-primary" />
                </div>
                <div className="grid gap-5 sm:grid-cols-2">
                  <div className="rounded-[28px] bg-slate-100 p-5 shadow-soft overflow-hidden">
                    <div className="mb-4 h-40 rounded-[28px] bg-gradient-to-br from-orange-50 via-white to-slate-100 overflow-hidden">
                      <img src="/products/Pr 5.jpg" alt="Premium box concept" className="w-full h-full object-cover" loading="lazy" />
                    </div>
                    <p className="text-sm font-semibold text-body">Rigid Carton Mockup</p>
                  </div>
                  <div className="rounded-[28px] bg-slate-100 p-5 shadow-soft overflow-hidden">
                    <div className="mb-4 h-40 rounded-[28px] bg-gradient-to-br from-slate-50 via-white to-slate-200 overflow-hidden">
                      <img src="/products/Pr 6.jpg" alt="Label preview" className="w-full h-full object-cover" loading="lazy" />
                    </div>
                    <p className="text-sm font-semibold text-body">Label Preview Set</p>
                  </div>
                </div>
                <div className="rounded-[32px] bg-primary/10 p-6 text-body shadow-soft">
                  <div className="mb-3 flex items-center gap-3 text-sm uppercase tracking-[0.25em] text-primary">
                    <Package size={18} /> Product Preview
                  </div>
                  <p className="text-base leading-7 text-body">Create packaging with premium textures, intelligent shelf design, and durable film lamination.</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
