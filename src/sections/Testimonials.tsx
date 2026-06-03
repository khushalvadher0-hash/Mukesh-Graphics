import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import TestimonialCard from '../components/TestimonialCard'
import { testimonials } from '../data/testimonials'
import { fadeInUp } from '../animations/variants'

export default function Testimonials() {
  const [active, setActive] = useState(0)

  useEffect(() => {
    const interval = window.setInterval(() => setActive((prev) => (prev + 1) % testimonials.length), 5000)
    return () => window.clearInterval(interval)
  }, [])

  return (
    <section className="bg-surface py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mb-12 max-w-3xl">
          <p className="text-sm uppercase tracking-[0.35em] text-primary">Testimonials</p>
          <h2 className="mt-4 text-3xl font-semibold text-body sm:text-4xl">Client stories from premium packaging launches.</h2>
        </div>
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.25 }} variants={fadeInUp} className="grid gap-6 lg:grid-cols-3">
          {testimonials.map((item, index) => (
            <div key={item.name} className={`${index === active ? 'block' : 'hidden lg:block'}`}>
              <TestimonialCard {...item} />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
