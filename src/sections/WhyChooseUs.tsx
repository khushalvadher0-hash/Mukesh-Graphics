import { ShieldCheck, Sparkles, Truck, Star } from 'lucide-react'

const benefits = [
  { icon: ShieldCheck, title: 'Quality Compliance', description: 'Verified ISO, GMP, and FSSAI production processes for consistent packaging quality.' },
  { icon: Sparkles, title: 'Premium Visuals', description: 'Luxury print finishes, soft-touch coatings, and tactile embossing for high-value brands.' },
  { icon: Truck, title: 'Nationwide Delivery', description: 'Streamlined logistics and fast pan-India delivery for domestic brand rollouts.' },
  { icon: Star, title: 'Brand Partnership', description: 'Consultative design support to ensure packaging reinforces every brand promise.' },
]

export default function WhyChooseUs() {
  return (
    <section className="bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mb-12 max-w-3xl">
          <p className="text-sm uppercase tracking-[0.35em] text-primary">Why choose us</p>
          <h2 className="mt-4 text-3xl font-semibold text-body sm:text-4xl">Built for brands that demand a premium shelf experience.</h2>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
          {benefits.map((item) => (
            <article key={item.title} className="card-glass rounded-[32px] border border-border p-8 shadow-soft transition hover:-translate-y-2 hover:border-primary/40">
              <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-3xl bg-primary/10 text-primary">
                <item.icon size={24} />
              </div>
              <h3 className="text-xl font-semibold text-body">{item.title}</h3>
              <p className="mt-4 text-sm leading-7 text-muted">{item.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
