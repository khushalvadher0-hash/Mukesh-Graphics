import CTA from '../sections/CTA'
import Clients from '../sections/Clients'
import ContactSection from '../sections/Contact'
import Counters from '../sections/Counters'
import Hero from '../sections/Hero'
import Industries from '../sections/Industries'
import Infrastructure from '../sections/Infrastructure'
import PortfolioSection from '../sections/Portfolio'
import Process from '../sections/Process'
import ProductsSection from '../sections/Products'
import Testimonials from '../sections/Testimonials'
import WhyChooseUs from '../sections/WhyChooseUs'

export default function Home() {
  return (
    <>
      <Hero />
      <Counters />
      <Clients />
      <ProductsSection />
      <PortfolioSection />
      <WhyChooseUs />
      <Infrastructure />
      <Process />
      <Industries />
      <Testimonials />
      <CTA />
      <ContactSection />
    </>
  )
}
