import { useState } from 'react'
import { ArrowUpRight, Menu, X } from 'lucide-react'

const navigation = [
  ['About TIS', '#about'],
  ['Academics', '#learning'],
  ['Boarding life', '#campus'],
  ['Beyond academics', '#beyond'],
  ['Admissions', '#admissions'],
]

export function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false)

  const closeMenu = () => setMenuOpen(false)

  return (
    <header className="site-header">
      <div className="topline">
        <span>Boarding & day school · Dehradun, India</span>
        <a href="tel:+919837983791">Admissions helpline <strong>+91 98379 83791</strong></a>
      </div>
      <div className="nav-wrap">
        <a className="wordmark" href="#home" onClick={closeMenu} aria-label="Tulas International School home">
          <span className="wordmark__seal" aria-hidden="true">T</span>
          <span className="wordmark__text"><strong>TULAS</strong><small>INTERNATIONAL SCHOOL</small></span>
        </a>
        <button
          className="menu-toggle"
          type="button"
          aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={menuOpen}
          aria-controls="primary-navigation"
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? <X size={21} /> : <Menu size={21} />}
        </button>
        <nav id="primary-navigation" className={`primary-nav ${menuOpen ? 'is-open' : ''}`} aria-label="Primary navigation">
          {navigation.map(([label, href]) => (
            <a key={label} href={href} onClick={closeMenu}>{label}</a>
          ))}
          <a className="nav-apply" href="https://admission.tis.edu.in" onClick={closeMenu}>
            Apply now <ArrowUpRight size={15} aria-hidden="true" />
          </a>
        </nav>
      </div>
    </header>
  )
}
