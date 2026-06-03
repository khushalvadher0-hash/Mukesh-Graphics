import { ReactNode } from 'react'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'

interface MainLayoutProps {
  children: ReactNode
}

export default function MainLayout({ children }: MainLayoutProps) {
  return (
    <div className="min-h-screen bg-white text-body">
      <Navbar />
      <main>{children}</main>
      <Footer />
    </div>
  )
}
