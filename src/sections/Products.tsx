import ProductCard from '../components/ProductCard'
import { products } from '../data/products'
import { fadeInUp, staggerChildren } from '../animations/variants'
import { motion } from 'framer-motion'

export default function ProductsSection() {
  return (
    <section id="products" className="bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={staggerChildren} className="mb-12 max-w-3xl">
          <motion.p variants={fadeInUp} className="text-sm uppercase tracking-[0.35em] text-primary">Featured products</motion.p>
          <motion.h2 variants={fadeInUp} className="mt-4 text-3xl font-semibold text-body sm:text-4xl">Packaging experiences that elevate consumer trust.</motion.h2>
          <motion.p variants={fadeInUp} className="mt-5 text-base leading-7 text-muted">
            A curated collection of packaging solutions built for premium shelf presence, product protection, and brand storytelling.
          </motion.p>
        </motion.div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {products.map((product) => (
            <ProductCard key={product.title} product={product} />
          ))}
        </div>
      </div>
    </section>
  )
}
