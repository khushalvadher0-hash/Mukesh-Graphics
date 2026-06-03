import Infrastructure from '../sections/Infrastructure'
import WhyChooseUs from '../sections/WhyChooseUs'
import CTA from '../sections/CTA'

export default function About() {
  return (
    <main>
      <section className="bg-white py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <p className="text-sm uppercase tracking-[0.35em] text-primary">About Mukesh Graphics</p>
          <h1 className="mt-4 text-4xl font-semibold text-body sm:text-5xl">A premium packaging partner with an Indian production network.</h1>
          <p className="mt-6 max-w-3xl text-base leading-8 text-muted">
            We craft packaging systems that support brand storytelling, protect product integrity, and scale quickly from concept to shelf.
          </p>
        </div>
      </section>
      <WhyChooseUs />
      <Infrastructure />
      <CTA />
    </main>
  )
}
