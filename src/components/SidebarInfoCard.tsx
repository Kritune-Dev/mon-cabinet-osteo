import Image from 'next/image'
import { FaUserMd, FaMapMarkerAlt, FaStar } from 'react-icons/fa'
import siteConfig from '../lib/siteConfig.json'

export default function SidebarInfoCard() {
  return (
    <div
      id="sidebar-info-card"
      className="flex flex-col items-center gap-8 text-[#543C30] w-full h-full px-0"
    >
      <div
        className="bg-white/90 border border-[#E8D5CC] rounded-xl shadow-lg p-8 w-full max-w-lg"
        style={{ background: 'linear-gradient(135deg, #FFF8F3 80%, #F5E9E3 100%)' }}
      >
        <div className="flex flex-col items-center">
          <Image
            src="/images/profil.jpg"
            alt={`${siteConfig.profession} ${siteConfig.location}`}
            width={160}
            height={160}
            className="rounded-full object-cover mb-4"
          />
          <h2 className="text-2xl font-bold mb-1 text-center text-[#2D1B12]">
            {siteConfig.firstName} {siteConfig.lastName}
          </h2>
          <p className="mb-2 flex items-center justify-center gap-2 text-xl font-bold text-[#2D1B12]">
            <FaUserMd className="w-5 h-5" aria-hidden="true" />
            {siteConfig.profession}
          </p>
          <p className="mb-1 text-center flex items-center justify-center gap-2">
            <FaMapMarkerAlt className="w-4 h-4" aria-hidden="true" />
            <a
              href={siteConfig.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-orange-700 transition"
            >
              {siteConfig.location}
            </a>
          </p>
          <p className="mb-1 text-center">{siteConfig.adress}</p>
          <p className="mb-4 text-center">Accessible PMR, parking à proximité</p>
          <a
            href={siteConfig.doctolibUrl}
            className="inline-block bg-[#E8D5CC] text-[#543C30] font-semibold py-2 px-4 rounded-lg shadow hover:bg-[#e2c7b8] transition"
          >
            Prendre rendez-vous
          </a>
        </div>

        {/* Google Reviews Placeholder */}
        <div className="mt-8 w-full flex flex-col items-center">
          <div className="w-full bg-[#F5E9E3] border border-[#E8D5CC] rounded-lg py-4 px-3 flex flex-col items-center mb-6">
            <div className="flex items-center gap-2 mb-1">
              <FaStar className="text-yellow-500" />
              <span className="font-bold text-[#2D1B12]">Avis Google</span>
            </div>
            <span className="text-sm text-[#543C30] opacity-70">Les avis de vos patients s&apos;afficheront ici prochainement.</span>
          </div>
        </div>

        <div className="w-full">
          <h3 className="text-lg font-semibold mb-3 text-center text-[#2D1B12]">Horaires d&apos;ouverture</h3>
          <table className="w-full text-sm border-separate [border-spacing:0.5rem]">
            <tbody>
              <tr>
                <td className="font-bold text-[#2D1B12]">Lundi</td>
                <td className="text-right">Fermé</td>
              </tr>
              <tr>
                <td className="font-bold text-[#2D1B12]">Mardi</td>
                <td className="text-right">9h - 19h</td>
              </tr>
              <tr>
                <td className="font-bold text-[#2D1B12]">Mercredi</td>
                <td className="text-right">9h - 17h30</td>
              </tr>
              <tr>
                <td className="font-bold text-[#2D1B12]">Jeudi</td>
                <td className="text-right">Fermé</td>
              </tr>
              <tr>
                <td className="font-bold text-[#2D1B12]">Vendredi</td>
                <td className="text-right">9h - 17h30</td>
              </tr>
              <tr>
                <td className="font-bold text-[#2D1B12]">Samedi</td>
                <td className="text-right">9h30 - 16h</td>
              </tr>
              <tr>
                <td className="font-bold text-[#2D1B12]">Dimanche</td>
                <td className="text-right">Fermé</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="mt-8 w-full">
          <h3 className="text-lg font-semibold mb-2 text-center text-[#2D1B12]">Accès</h3>
          <iframe
            title="Carte Google Maps"
            src={siteConfig.mapsUrlEmbedded}
            width="100%"
            height="200"
            className="rounded-lg border"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  )
}
