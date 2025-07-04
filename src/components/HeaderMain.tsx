'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import siteConfig from '../lib/siteConfig.json'

export default function HeaderMain() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [consultationsOpen, setConsultationsOpen] = useState(false)

  return (
    <nav
      id="header-main-nav"
      className="bg-[#543C30] fixed w-full z-50 top-0 shadow-md h-16"
    >
      <div className="w-full px-4 sm:px-6 md:px-8 flex items-center justify-between h-full mx-auto max-w-screen-xl">
        {/* Logo + nom à gauche */}
        <Link
          id="header-main-logo"
          href="/"
          className="flex items-center gap-3 group"
        >
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
          <span
            id="header-main-name"
            className="text-white font-semibold text-base leading-tight uppercase tracking-wide hidden md:inline"
          >
            {siteConfig.lastName}&nbsp;{siteConfig.firstName}
          </span>
        </Link>

        {/* Actions à droite */}
        <div id="header-main-actions" className="flex items-center space-x-3 md:space-x-6">
          {/* Desktop */}
          <div className="hidden md:flex items-center space-x-6">
            <a
              id="header-main-doctolib"
              href={siteConfig.doctolibUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-[#E8D5CC] text-[#543C30] font-semibold py-2 px-4 rounded-lg shadow hover:bg-[#e2c7b8] transition"
            >
              Prendre rendez-vous
            </a>
            <a
              id="header-main-phone"
              href={"tel:" + siteConfig.phone}
              className="font-bold underline hover:text-[#E08A3D] text-[#1a120b]"
            >
              {siteConfig.phone}
            </a>
          </div>

          {/* Mobile */}
          <div className="md:hidden flex items-center space-x-3">
            <a
              id="header-main-doctolib-mobile"
              href={siteConfig.doctolibUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-[#E8D5CC] text-[#543C30] font-semibold py-2 px-4 rounded-lg shadow hover:bg-[#e2c7b8] transition"
            >
              RDV
            </a>
            <button
              id="header-main-menu-btn"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label={menuOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
              className="text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#E8D5CC]"
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
      </div>

      {/* Menu mobile */}
      {menuOpen && (
        <div
          id="header-main-mobile-menu"
          className="md:hidden bg-[#543C30] px-4 py-6 space-y-4 text-white text-center font-semibold uppercase tracking-widest"
        >
          <Link href="/" onClick={() => setMenuOpen(false)} className="block hover:text-[#E8D5CC]">
            Accueil
          </Link>
          <Link href="/a-propos" onClick={() => setMenuOpen(false)} className="block hover:text-[#E8D5CC]">
            À propos
          </Link>
          <div>
            <button
              className="w-full flex items-center justify-center gap-2 hover:text-[#E8D5CC] focus:outline-none"
              aria-expanded={consultationsOpen}
              aria-controls="consultations-submenu"
              onClick={() => setConsultationsOpen((v) => !v)}
              type="button"
            >
              Consultations
              <svg
                className={`inline-block transition-transform ${consultationsOpen ? 'rotate-180' : ''}`}
                width={18}
                height={18}
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 9l6 6 6-6" />
              </svg>
            </button>
            {consultationsOpen && (
              <div id="consultations-submenu" className="mt-2 space-y-2 text-sm">
                <Link href="/adulte" onClick={() => { setMenuOpen(false); setConsultationsOpen(false); }} className="block hover:text-[#E8D5CC]">
                  Adulte
                </Link>
                <Link href="/enfants" onClick={() => { setMenuOpen(false); setConsultationsOpen(false); }} className="block hover:text-[#E8D5CC]">
                  Enfants
                </Link>
                <Link href="/femme-enceinte" onClick={() => { setMenuOpen(false); setConsultationsOpen(false); }} className="block hover:text-[#E8D5CC]">
                  Femmes enceintes
                </Link>
                <Link href="/sportif" onClick={() => { setMenuOpen(false); setConsultationsOpen(false); }} className="block hover:text-[#E8D5CC]">
                  Sportif
                </Link>
              </div>
            )}
          </div>
          <Link href="/contact" onClick={() => setMenuOpen(false)} className="block hover:text-[#E8D5CC]">
            Contact
          </Link>
          <Link href="/mentions-legales" onClick={() => setMenuOpen(false)} className="block hover:text-[#E8D5CC]">
            Mentions légales
          </Link>
        </div>
      )}
    </nav>
  )
}
