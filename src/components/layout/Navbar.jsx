import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { Link, NavLink } from 'react-router-dom'
import { navLinks } from '../../data/siteData'
import logo from '../../assets/logo.jpeg'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const linkClass = ({ isActive }) => `text-sm font-medium ${isActive ? 'text-brand' : 'text-slate-700 hover:text-brand'}`
  return <header className="sticky top-0 z-50 border-b border-slate-100 bg-white/95 backdrop-blur">
    <nav className="container-site flex h-20 items-center justify-between" aria-label="Main navigation">
      <Link to="/" className="flex items-center gap-3" onClick={() => setOpen(false)}><img src={logo} alt="SNN Compliance" className="h-12 w-16 rounded object-cover" /><span className="hidden font-heading text-lg font-bold text-slate-900 sm:block">SNN <span className="text-brand">Compliance</span></span></Link>
      <div className="hidden items-center gap-7 lg:flex">{navLinks.map(link => <NavLink key={link.to} to={link.to} className={linkClass}>{link.label}</NavLink>)}<Link to="/contact" className="btn-primary !px-5 !py-2.5">Get Consultation</Link></div>
      <button className="rounded-lg p-2 lg:hidden" onClick={() => setOpen(!open)} aria-expanded={open} aria-label="Toggle navigation">{open ? <X /> : <Menu />}</button>
    </nav>
    {open && <div className="container-site flex flex-col gap-4 border-t py-5 lg:hidden">{navLinks.map(link => <NavLink key={link.to} to={link.to} className={linkClass} onClick={() => setOpen(false)}>{link.label}</NavLink>)}</div>}
  </header>
}
