import Image from 'next/image'
import { FaUserMd, FaMapMarkerAlt } from 'react-icons/fa'
import bannerConfig from '../lib/banner.json'
import siteConfig from '../lib/siteConfig.json'

export default function SecondaryHeader() {
  return (
    <section
      id="header-secondary-section"
      className="relative w-full pt-16 pb-3 sm:pb-5 min-h-[110px] sm:min-h-[140px] overflow-hidden"
    >
      {/* Image de fond avec dégradé */}
      <div id="header-secondary-background" className="absolute inset-0 z-0">
        <Image
          src="/images/photocab.jpg"
          alt={`Cabinet d'ostéopathie à ${siteConfig.location}`}
          fill
          className="object-cover w-full h-full"
          loading="eager"
          fetchPriority="high"
          priority
        />
        <div
          className="absolute inset-0"
          style={{
            pointerEvents: 'none',
            background:
              'linear-gradient(to right, rgba(255,255,255,0.92) 0%, rgba(255,255,255,0.92) 70%, rgba(255,255,255,0) 100%)',
          }}
        />
      </div>

      {/* Contenu principal aligné à gauche, bannière à droite, centrés verticalement */}
      <div
        id="header-secondary-content"
        className="relative z-10 w-full flex items-center justify-between min-h-[110px] sm:min-h-[140px]"
      >
        {/* Profil à gauche */}
        <div
          id="header-secondary-profile"
          className="flex items-center gap-3 sm:gap-6 pl-2 sm:pl-6 max-w-4xl w-auto"
        >
          <figure className="rounded-full overflow-hidden w-[60px] h-[60px] sm:w-[90px] sm:h-[90px] flex-shrink-0 shadow-md">
            <Image
              src="/images/profil.jpg"
              alt={`${siteConfig.profession} ${siteConfig.location}`}
              width={90}
              height={90}
              className="object-cover"
              loading="eager"
              fetchPriority="high"
              priority
            />
          </figure>
          <div className="text-[#543C30] text-sm sm:text-base">
            <p className="text-base sm:text-xl font-semibold mb-0.5 leading-tight">
              {siteConfig.firstName} {siteConfig.lastName}
            </p>
            <p className="flex items-center gap-2 mb-0.5">
              <FaUserMd className="w-5 h-5" aria-hidden="true" />
              {siteConfig.profession}
            </p>
            <p className="flex items-center gap-2">
              <FaMapMarkerAlt className="w-5 h-5" aria-hidden="true" />
              <a
                href={siteConfig.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                {siteConfig.location}
              </a>
            </p>
          </div>
        </div>
        {/* Banner à droite, centrée verticalement */}
        {bannerConfig.show && (
          <div className="flex-shrink-0 mr-4 sm:mr-8">
            <div className="bg-[#E8D5CC] text-[#543C30] px-4 py-2 rounded shadow max-w-xs text-sm font-semibold text-center">
              {bannerConfig.message}
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
