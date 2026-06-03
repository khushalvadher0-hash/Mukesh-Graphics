import { Linkedin, Instagram, Mail, MapPin } from 'lucide-react'
import { companyInfo } from '../data/company'

const footerLinks = [
  { title: 'Company', links: ['About', 'Portfolio', 'Products', 'Contact'] },
  { title: 'Services', links: ['Packaging Design', 'Manufacturing', 'Quality Audit', 'Logistics'] },
  { title: 'Support', links: ['Request Quote', 'FAQs', 'Privacy Policy', 'Terms'] },
]

export default function Footer() {
  return (
    <footer className="border-t border-border bg-surface/90 px-6 py-16 text-body sm:px-8">
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1.5fr_1fr_1fr_1fr]">
        <div>
          <p className="mb-4 text-sm uppercase tracking-[0.35em] text-primary">Mukesh Graphics</p>
          <h3 className="text-2xl font-semibold text-body">Premium packaging with nationwide reach.</h3>
          <p className="mt-4 max-w-sm text-sm leading-7 text-muted">
            Design-driven packaging for brands that demand superior shelf presence, compliance, and fast delivery.
          </p>
          <div className="mt-6 flex items-center gap-4 text-muted">
            <Mail size={18} />
            <span>{companyInfo.emails[0]}</span>
          </div>
          <div className="mt-3 flex items-center gap-4 text-muted">
            <MapPin size={18} />
            <span>{companyInfo.address.city}, {companyInfo.address.state}</span>
          </div>
        </div>

        {footerLinks.map((group) => (
          <div key={group.title}>
            <h4 className="mb-5 text-sm font-semibold uppercase tracking-[0.25em] text-body">{group.title}</h4>
            <ul className="space-y-3 text-sm text-muted">
              {group.links.map((item) => (
                <li key={item}>
                  <a href="#" className="transition hover:text-primary">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}

        <div>
          <h4 className="mb-5 text-sm font-semibold uppercase tracking-[0.25em] text-body">Newsletter</h4>
          <p className="mb-6 text-sm leading-7 text-muted">Get monthly brand packaging insights and new product launches.</p>
          <form className="flex flex-col gap-3 sm:flex-row">
            <input type="email" placeholder="Email address" className="w-full rounded-2xl border border-border bg-white px-4 py-3 text-sm outline-none transition focus:border-primary/70 focus:ring-2 focus:ring-primary/10" />
            <button type="submit" className="rounded-2xl bg-primary px-5 py-3 text-sm font-semibold text-white transition hover:bg-orange-600">
              Subscribe
            </button>
          </form>
          <div className="mt-8 flex items-center gap-4 text-body">
            <a href="#" aria-label="LinkedIn" className="transition hover:text-primary"><Linkedin size={18} /></a>
            <a href="#" aria-label="Instagram" className="transition hover:text-primary"><Instagram size={18} /></a>
          </div>
        </div>
      </div>
    </footer>
  )
}
