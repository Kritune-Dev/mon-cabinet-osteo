import Image from 'next/image'
import { FaUserMd, FaMapMarkerAlt } from 'react-icons/fa' // Exemple d'icônes

export default function SecondaryHeader() {
  return (
    <section
      id="header-secondary-section" // Section principale du header secondaire
      className="relative w-full pt-16 pb-3 sm:pb-5 min-h-[110px] sm:min-h-[140px] overflow-hidden"
    >
      {/* Image de fond avec dégradé */}
      <div
        id="header-secondary-background" // Conteneur de l'image de fond et du dégradé
        className="absolute inset-0 z-0"
      >
        <Image
          src="/images/photocab.jpg"
          alt="Cabinet d'ostéopathie à Saint-Brévin-les-Pins"
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

      {/* Contenu principal aligné à gauche, centré verticalement, largeur max */}
      <div
        id="header-secondary-content" // Conteneur du contenu principal (photo, nom, profession, localisation)
        className="relative z-10 w-full flex items-center min-h-[110px] sm:min-h-[140px]"
      >
        <div
          id="header-secondary-profile" // Bloc contenant la photo et les infos du profil
          className="flex items-center gap-3 sm:gap-6 pl-2 sm:pl-6 max-w-4xl w-auto"
        >
          <figure className="rounded-full overflow-hidden w-[60px] h-[60px] sm:w-[90px] sm:h-[90px] flex-shrink-0 shadow-md">
            <Image
              src="/images/profil.jpg"
              alt="Ostéopathe Saint-Brévin-les-Pins"
              width={90}
              height={90}
              className="object-cover"
              loading="eager"
              fetchPriority="high"
              priority
            />
          </figure>
          <div className="text-[#543C30] text-sm sm:text-base">
            <p className="text-base sm:text-xl font-semibold mb-0.5 leading-tight">Corentin Bacconnais</p>
            <p className="flex items-center gap-2 mb-0.5">
              <FaUserMd className="w-5 h-5" aria-hidden="true" />
              Ostéopathe D.O.
            </p>
            <p className="flex items-center gap-2">
              <FaMapMarkerAlt className="w-5 h-5" aria-hidden="true" />
              <a
                href="https://www.google.com/maps/search/?api=1&query=Corentin+Bacconnais+Ostéopathe+Saint-Brévin-les-Pins"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                Saint-Brévin-les-Pins
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
