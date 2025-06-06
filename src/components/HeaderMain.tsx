'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import siteConfig from '../lib/siteConfig.json'

export default function HeaderMain() {
  const [menuOpen, setMenuOpen] = useState(false)

  const commonBtnClass = 'uppercase tracking-widest font-semibold transition-colors'

  return (
    <nav className="bg-[#543C30] fixed w-full z-50 top-0 shadow-md h-16">
      <div className="max-w-5xl mx-auto flex items-center justify-between px-4 h-full">
        {/* Logo arrondi + nom à côté */}
        <Link href="/" className="flex items-center gap-3 group">
          <span className="rounded-full bg-white flex items-center justify-center w-10 h-10 overflow-hidden">
            <Image
              src="/images/logo.png"
              alt="Logo Ostéopathie"
              width={40}
              height={40}
              className="object-contain"
              priority
            />
          </span>
          <span className="text-white font-semibold text-base leading-tight uppercase tracking-wide">
            {siteConfig.lastName}&nbsp;{siteConfig.firstName}
          </span>
        </Link>

        {/* Desktop */}
        <div className="hidden md:flex items-center space-x-6">
          <a
            href={siteConfig.doctolibUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={`bg-[#E8D5CC] text-[#543C30] px-5 py-2 rounded hover:bg-[#d3c2b6] ${commonBtnClass}`}
          >
            Prendre RDV
          </a>
          <a
            href={"tel:" + siteConfig.telephone}
            className="text-white text-[18px] font-semibold hover:text-[#E8D5CC]"
          >
            {siteConfig.telephone}
          </a>
        </div>

        {/* Mobile */}
        <div className="md:hidden flex items-center space-x-3">
          <a
            href="https://www.doctolib.fr/osteopathe/saint-nazaire/corentin-bacconnais/booking/motives?specialityId=10&telehealth=false&placeId=practice-598028"
            target="_blank"
            rel="noopener noreferrer"
            className={`bg-[#E8D5CC] text-[#543C30] px-4 py-1 rounded ${commonBtnClass}`}
          >
            RDV
          </a>
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
            className="text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#E8D5CC]"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-7 w-7"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              {menuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 8h16M4 16h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Menu mobile */}
      {menuOpen && (
        <div className="md:hidden bg-[#543C30] px-4 py-6 space-y-4 text-white text-center font-semibold uppercase tracking-widest">
          {['/', '/prestations', '/contacts'].map((href, i) => (
            <Link key={i} href={href} onClick={() => setMenuOpen(false)} className="block hover:text-[#E8D5CC]">
              {href === '/' ? 'Accueil' : href.slice(1)}
            </Link>
          ))}
        </div>
      )}
    </nav>
  )
}
