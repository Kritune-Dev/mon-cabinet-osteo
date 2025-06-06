import siteConfig from '@/lib/siteConfig.json'
import Image from 'next/image'

export default function SiteFooter() {
  return (
    <footer
      id="site-footer"
      role="contentinfo"
      className="w-screen left-1/2 right-1/2 -translate-x-1/2 relative bg-[#F5E9E3] border-t border-[#E8D5CC] mt-8 py-6 px-4"
      style={{ marginLeft: 'calc(50% - 50vw)', marginRight: 'calc(50% - 50vw)' }}
    >
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row md:items-center md:justify-between gap-4 text-[#543C30]">
        {/* Infos à gauche */}
        <div className="text-left md:text-left md:mr-auto">
          <span className="font-bold text-lg text-[#2D1B12] block">
            {siteConfig.firstName} {siteConfig.lastName}
          </span>
          <span className="block">{siteConfig.profession}</span>
          <span className="block">{siteConfig.adress}</span>
          <span className="block">Tél : <a href={`tel:${siteConfig.telephone}`} className="underline hover:text-[#E08A3D]">{siteConfig.telephone}</a></span>
          <span className="block">Email : <a href={`mailto:${siteConfig.email}`} className="underline hover:text-[#E08A3D]">{siteConfig.email}</a></span>
        </div>
        {/* Logo au centre */}
        <div className="flex justify-center items-center my-4 md:my-0 md:mx-8">
          <Image
            src="/images/logo.png"
            alt="Logo du cabinet"
            width={70}
            height={70}
            className="object-contain"
            priority
          />
        </div>
        {/* Mentions à droite */}
        <div className="text-center md:text-right text-xs text-[#543C30] mt-2 md:mt-0 md:ml-auto">
          <span>© {new Date().getFullYear()} {siteConfig.firstName} {siteConfig.lastName} – Ostéopathe à {siteConfig.location}</span>
          <br />
          <span>
            Site réalisé par <a href="https://github.com/Kritune-Dev" className="underline hover:text-[#E08A3D]">Corentin Bacconnais</a>
          </span>
          <br />
          <a href="/mentions-legales" className="underline hover:text-[#E08A3D]">Mentions légales</a>
        </div>
      </div>
    </footer>
  )
}
