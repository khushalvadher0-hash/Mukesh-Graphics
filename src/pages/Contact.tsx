import QuoteForm from '../components/QuoteForm'
import ContactSection from '../sections/Contact'
import { companyInfo } from '../data/company'
import { Clock, MapPin, Phone, Mail } from 'lucide-react'

export default function Contact() {
  return (
    <main className="space-y-20 bg-surface py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="rounded-[36px] border border-border bg-white p-10 shadow-soft">
          <p className="text-sm uppercase tracking-[0.35em] text-primary">Contact</p>
          <h1 className="mt-4 text-4xl font-semibold text-body sm:text-5xl">Start your premium packaging project today.</h1>
          <p className="mt-6 max-w-3xl text-base leading-8 text-muted">
            Share your brief and our team will provide a tailored quote for your packaging needs, samples, and timelines.
          </p>
        </div>
      </div>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-12 xl:grid-cols-[0.95fr_0.85fr]">
          <QuoteForm />
          <ContactSection />
        </div>
      </div>
      
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-8 md:grid-cols-2">
          <div className="rounded-[36px] border border-border bg-white p-10 shadow-soft">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-3xl bg-primary/10 text-primary">
              <Clock size={24} />
            </div>
            <h3 className="text-xl font-semibold text-body">Working Hours</h3>
            <div className="mt-6 space-y-4">
              <div>
                <p className="font-medium text-body">{companyInfo.workingHours.weekday.days}</p>
                <p className="text-sm text-muted">{companyInfo.workingHours.weekday.start} – {companyInfo.workingHours.weekday.end}</p>
              </div>
              <div>
                <p className="font-medium text-body">{companyInfo.workingHours.saturday.days}</p>
                <p className="text-sm text-muted">{companyInfo.workingHours.saturday.start} – {companyInfo.workingHours.saturday.end}</p>
              </div>
              <div>
                <p className="font-medium text-body">Sunday</p>
                <p className="text-sm text-muted">{companyInfo.workingHours.sunday}</p>
              </div>
            </div>
          </div>

          <div className="rounded-[36px] border border-border bg-white p-10 shadow-soft">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-3xl bg-primary/10 text-primary">
              <MapPin size={24} />
            </div>
            <h3 className="text-xl font-semibold text-body">Office Location</h3>
            <div className="mt-6 space-y-3">
              <p className="text-sm leading-7 text-body">
                {companyInfo.address.street}
                <br />
                {companyInfo.address.area}
                <br />
                {companyInfo.address.city}, {companyInfo.address.state} {companyInfo.address.pincode}
              </p>
              <p className="flex items-center gap-2 text-sm font-medium text-primary">
                <Phone size={16} /> 
                <a href={`tel:${companyInfo.phones[0].replace(/\s/g, '')}`} className="hover:underline">
                  {companyInfo.phones[0]}
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
