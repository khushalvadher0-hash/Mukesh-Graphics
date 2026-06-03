import { useState, type ChangeEvent, type FormEvent } from 'react'
import Button from './ui/Button'
import Input from './ui/Input'

const initialState = { name: '', company: '', phone: '', email: '', requirement: '', message: '' }

export default function QuoteForm() {
  const [form, setForm] = useState(initialState)
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [event.target.name]: event.target.value })
  }

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setSubmitted(true)
  }

  return (
    <section className="rounded-[32px] border border-border bg-white p-8 shadow-soft sm:p-10">
      <div className="mb-8">
        <p className="text-sm uppercase tracking-[0.35em] text-primary">Request a Quote</p>
        <h3 className="mt-3 text-3xl font-semibold text-body sm:text-4xl">Let's shape premium packaging together.</h3>
      </div>
      <form onSubmit={handleSubmit} className="grid gap-5 sm:grid-cols-2">
        <Input label="Name" name="name" value={form.name} onChange={handleChange} required />
        <Input label="Company" name="company" value={form.company} onChange={handleChange} required />
        <Input label="Phone" name="phone" type="tel" value={form.phone} onChange={handleChange} required />
        <Input label="Email" name="email" type="email" value={form.email} onChange={handleChange} required />
        <Input label="Requirement" name="requirement" value={form.requirement} onChange={handleChange} required className="sm:col-span-2" />
        <label className="sm:col-span-2 block text-sm font-medium text-body">
          <span className="mb-2 block text-sm text-muted">Message</span>
          <textarea
            name="message"
            rows={5}
            value={form.message}
            onChange={handleChange}
            required
            className="w-full rounded-2xl border border-border bg-surface px-4 py-3 text-body outline-none transition focus:border-primary/70 focus:ring-2 focus:ring-primary/10"
          />
        </label>
        <div className="sm:col-span-2 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <Button type="submit" variant="primary" size="lg">
            Send Inquiry
          </Button>
          {submitted ? <span className="text-sm text-primary">Submitted. We’ll contact you within 24h.</span> : null}
        </div>
      </form>
    </section>
  )
}
