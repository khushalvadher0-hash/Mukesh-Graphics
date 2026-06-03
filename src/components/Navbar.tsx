import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X, ArrowRight } from 'lucide-react'
import { navLinks } from '../utils/navLinks'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 24)
    handleScroll()
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setOpen(false)
  }, [location.pathname])

  return (
    <header className={`sticky top-0 z-50 transition-all ${scrolled ? 'border-b border-border bg-white/95 backdrop-blur-xl shadow-sm' : 'bg-transparent'} `}>
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
        <Link to="/" className="text-lg font-semibold tracking-tight text-body">
          <span className="inline-flex items-center gap-2">
            <img src="/logo/Logo-dark.png" alt="Mukesh Graphics" className="h-10 w-10 object-contain" />
            Mukesh Graphics
          </span>
        </Link>

        <nav className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) => (
            <Link key={link.label} to={link.href} className="text-sm font-medium text-body transition hover:text-primary">
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-4 lg:flex">
          <Link to="/contact" className="inline-flex items-center gap-2 rounded-full border border-primary px-5 py-3 text-sm font-semibold text-primary transition hover:bg-primary/5">
            Request Quote
            <ArrowRight size={16} />
          </Link>
        </div>

        <button className="inline-flex items-center justify-center rounded-full border border-border bg-white p-3 text-body lg:hidden" onClick={() => setOpen((prev) => !prev)} aria-label="Toggle navigation">
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {open ? (
        <div className="border-t border-border bg-white/95 px-6 pb-6 shadow-soft backdrop-blur-xl lg:hidden">
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link key={link.label} to={link.href} className="text-base font-medium text-body hover:text-primary">
                {link.label}
              </Link>
            ))}
            <Link to="/contact" className="inline-flex items-center justify-center rounded-full border border-primary px-5 py-3 text-sm font-semibold text-primary transition hover:bg-primary/5">
              Request Quote
            </Link>
          </div>
        </div>
      ) : null}
    </header>
  )
}
