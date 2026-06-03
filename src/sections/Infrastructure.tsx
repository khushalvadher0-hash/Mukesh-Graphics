import { ArrowRight, Building2, Layers, ShieldCheck } from 'lucide-react'

const machines = [
  { title: 'Flexographic Printing', detail: 'High-precision prints for vibrant brand colors.' },
  { title: 'Lamination Line', detail: 'Barrier laminates for freshness and durability.' },
  { title: 'Die Cutting', detail: 'Clean contours and custom structural perfection.' },
  { title: 'Quality Lab', detail: 'In-house inspection for compliance and consistency.' },
]

export default function Infrastructure() {
  return (
    <section id="infrastructure" className="bg-surface py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mb-12 grid gap-8 lg:grid-cols-[0.95fr_0.9fr]">
          <div className="rounded-[36px] border border-border bg-white p-10 shadow-soft">
            <p className="text-sm uppercase tracking-[0.35em] text-primary">Manufacturing infrastructure</p>
            <h2 className="mt-4 text-3xl font-semibold text-body sm:text-4xl">Modern factory lines built for premium packaging delivery.</h2>
            <p className="mt-5 text-base leading-7 text-muted">
              From design validation to final packing, our production setup blends brand-first aesthetics with high-volume manufacturing discipline.
            </p>
            <div className="mt-10 space-y-6">
              {machines.map((item) => (
                <div key={item.title} className="rounded-[28px] border border-border bg-surface p-6">
                  <div className="flex items-center justify-between gap-4">
                    <div>
                      <p className="text-lg font-semibold text-body">{item.title}</p>
                      <p className="mt-2 text-sm text-muted">{item.detail}</p>
                    </div>
                    <ArrowRight size={20} className="text-primary" />
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="relative rounded-[36px] bg-gradient-to-br from-white via-sky-50 to-orange-50 p-8 shadow-soft">
            <div className="absolute -left-10 top-8 h-28 w-28 rounded-full bg-primary/10 blur-3xl" />
            <div className="absolute right-6 bottom-10 h-20 w-20 rounded-full bg-slate-200/80 blur-3xl" />
            <div className="space-y-8">
              <div className="inline-flex items-center gap-3 rounded-full bg-white/90 px-4 py-2 text-sm font-semibold text-body shadow-sm">
                <Building2 size={18} className="text-primary" /> Trusted Facility
              </div>
              <div className="rounded-[32px] border border-border bg-white p-6 shadow-soft">
                <p className="text-lg font-semibold text-body">High-Speed Production</p>
                <p className="mt-3 text-sm leading-7 text-muted">Precision assembly lines with real-time quality checks and fast sample approvals.</p>
              </div>
              <div className="rounded-[32px] border border-border bg-white p-6 shadow-soft">
                <p className="text-lg font-semibold text-body">Sustainable Sourcing</p>
                <p className="mt-3 text-sm leading-7 text-muted">Eco-conscious materials and responsible manufacturing for modern brand compliance.</p>
              </div>
              <div className="rounded-[32px] border border-border bg-white p-6 shadow-soft">
                <div className="flex items-center gap-3 text-body">
                  <Layers size={20} className="text-primary" />
                  <span className="font-semibold">End-to-end control</span>
                </div>
                <p className="mt-3 text-sm leading-7 text-muted">From structural design to finished pallets, every step is aligned for premium output.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
