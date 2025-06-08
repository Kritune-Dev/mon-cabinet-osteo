'use client'

import Link from 'next/link'
import { useState, useEffect, useRef } from 'react'

export default function DesktopNavbar() {
  const [stuck, setStuck] = useState(false)
  const navRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const onScroll = () => {
      setStuck(window.scrollY > 140)
    }
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav
      ref={navRef}
      className={`
        hidden md:flex
        ${stuck ? 'fixed top-16 left-0 right-0 shadow-lg' : 'relative top-0'}
        z-40
        bg-[#F5E9E3] border-b border-[#E8D5CC]
        transition-all duration-300
        w-full
      `}
      aria-label="Navigation principale"
    >
      <div className="w-full mx-auto max-w-6xl">
        <ul className="flex flex-row items-center justify-between gap-8 py-2 px-8 font-semibold text-[#543C30]">
          <li>
            <Link href="/" className="hover:text-[#E08A3D] transition">Accueil</Link>
          </li>
          <li>
            <Link href="/a-propos" className="hover:text-[#E08A3D] transition">À propos</Link>
          </li>
          <li>
            <Link href="/adulte" className="hover:text-[#E08A3D] transition">Adulte</Link>
          </li>
          <li>
            <Link href="/enfants" className="hover:text-[#E08A3D] transition">Enfants</Link>
          </li>
          <li>
            <Link href="/femme-enceinte" className="hover:text-[#E08A3D] transition">Femmes enceintes</Link>
          </li>
          <li>
            <Link href="/sportif" className="hover:text-[#E08A3D] transition">Sportif</Link>
          </li>
          <li>
            <Link href="/contact" className="hover:text-[#E08A3D] transition">Contact</Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}
