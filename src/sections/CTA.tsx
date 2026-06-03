import Button from '../components/ui/Button'

export default function CTA() {
  return (
    <section className="bg-primary py-20 sm:py-24 text-white">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-6 text-center lg:flex-row lg:text-left lg:px-8">
        <div className="max-w-3xl">
          <p className="text-sm uppercase tracking-[0.35em] text-orange-100">Ready to launch</p>
          <h2 className="mt-4 text-3xl font-semibold leading-tight sm:text-4xl">Partner with Mukesh Graphics for packaging that elevates your brand.</h2>
        </div>
        <Button href="/contact" size="lg">Request a Quote</Button>
      </div>
    </section>
  )
}
