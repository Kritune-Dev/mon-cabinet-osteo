'use client'

import { useState } from 'react'
import Link from 'next/link'

export default function HeaderMain() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <nav id="navbar" className="bg-[#543C30] fixed w-full z-50 top-0 shadow-md">
      <div className="max-w-5xl mx-auto flex items-center justify-between px-4 py-3">

        {/* Nom/prénom à gauche */}
        <div>
          <Link href="/" className="text-white font-semibold text-lg uppercase tracking-wide hover:text-[#E8D5CC]" title="Accueil">
            Bacconnais Corentin
          </Link>
        </div>

        {/* Boutons RDV + téléphone collés à droite */}
        <div className="hidden md:flex items-center space-x-6">
          <a
            href="https://www.doctolib.fr/osteopathe/saint-nazaire/corentin-bacconnais/booking/motives?specialityId=10&telehealth=false&placeId=practice-598028"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-rdv bg-[#E8D5CC] text-[#543C30] px-5 py-2 rounded uppercase tracking-widest font-semibold hover:bg-[#d3c2b6] transition-colors"
            aria-label="Prendre rendez-vous"
          >
            PRENDRE RDV
          </a>

          <a
            href="tel:0761618447"
            className="text-[18px] font-semibold tracking-wide text-white hover:text-[#E8D5CC] transition-colors"
            aria-label="Téléphone"
          >
            07 61 61 84 47
          </a>
        </div>

        {/* Mobile buttons */}
        <div className="md:hidden flex items-center space-x-3">
          <a
            href="https://rdv.o7planning.com/osteopathe-corentin-bacconnais"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-rdv bg-[#E8D5CC] text-[#543C30] px-4 py-1 rounded uppercase tracking-widest font-semibold"
            aria-label="Prendre rendez-vous"
          >
            PRENDRE RDV
          </a>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
            className="text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#E8D5CC]"
          >
            {menuOpen ? (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 8h16M4 16h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-[#543C30] px-4 py-6 space-y-4 uppercase tracking-widest text-white text-center font-semibold">
          <Link href="/" onClick={() => setMenuOpen(false)} className="block hover:text-[#E8D5CC]">Accueil</Link>
          <Link href="/prestations" onClick={() => setMenuOpen(false)} className="block hover:text-[#E8D5CC]">Prestations</Link>
          <Link href="/contacts" onClick={() => setMenuOpen(false)} className="block hover:text-[#E8D5CC]">Contacts</Link>
        </div>
      )}
    </nav>
  )
}
