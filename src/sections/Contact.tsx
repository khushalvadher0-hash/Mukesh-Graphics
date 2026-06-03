import { MapPin, Phone, Mail, Send } from 'lucide-react'
import { companyInfo } from '../data/company'

export default function ContactSection() {
  return (
    <section id="contact" className="bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[0.95fr_0.85fr]">
          <div className="rounded-[36px] border border-border bg-surface p-10 shadow-soft">
            <p className="text-sm uppercase tracking-[0.35em] text-primary">Contact</p>
            <h2 className="mt-4 text-3xl font-semibold text-body sm:text-4xl">Reach Mukesh Graphics for your next packaging launch.</h2>
            <p className="mt-5 text-base leading-7 text-muted">
              Our team is ready to guide your brand through concept design, compliance approvals, and nationwide manufacturing.
            </p>
            <div className="mt-10 space-y-6">
              <div className="flex items-start gap-4 rounded-[28px] border border-border bg-white p-6">
                <div className="mt-1 flex h-12 w-12 items-center justify-center rounded-3xl bg-primary/10 text-primary"><MapPin size={22} /></div>
                <div>
                  <p className="font-semibold text-body">Bhavnagar, Gujarat</p>
                  <p className="text-sm text-muted">{companyInfo.address.full}</p>
                </div>
              </div>
              <div className="flex items-start gap-4 rounded-[28px] border border-border bg-white p-6">
                <div className="mt-1 flex h-12 w-12 items-center justify-center rounded-3xl bg-primary/10 text-primary"><Phone size={22} /></div>
                <div>
                  <p className="font-semibold text-body">{companyInfo.phones[0]}</p>
                  <p className="text-sm text-muted">{companyInfo.phones[1]}</p>
                </div>
              </div>
              <div className="flex items-start gap-4 rounded-[28px] border border-border bg-white p-6">
                <div className="mt-1 flex h-12 w-12 items-center justify-center rounded-3xl bg-primary/10 text-primary"><Mail size={22} /></div>
                <div>
                  <p className="font-semibold text-body">{companyInfo.emails[0]}</p>
                  <p className="text-sm text-muted">{companyInfo.emails[1]}</p>
                </div>
              </div>
            </div>
          </div>
          <div className="rounded-[36px] border border-border bg-slate-950 p-10 text-white shadow-soft">
            <div className="mb-6 rounded-[28px] bg-gradient-to-br from-orange-500 to-orange-300 p-6 text-white shadow-glow">
              <p className="text-sm uppercase tracking-[0.35em]">WhatsApp</p>
              <h3 className="mt-4 text-2xl font-semibold">Instant project support</h3>
            </div>
            <div className="h-[420px] rounded-[28px] bg-slate-800 p-6">
              <div className="h-full rounded-[28px] border border-white/10 bg-slate-900/80 p-6 text-sm leading-7 text-slate-300">
                <p className="font-semibold text-white">Map placeholder</p>
                <p className="mt-4 text-slate-400">A visual location layer for our manufacturing network and client delivery hubs.</p>
              </div>
            </div>
            <a href={companyInfo.whatsapp} target="_blank" rel="noreferrer" className="mt-8 inline-flex items-center gap-3 rounded-full bg-white px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-slate-100">
              <Send size={18} /> Message on WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
