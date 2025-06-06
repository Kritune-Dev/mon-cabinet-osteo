import siteConfig from '../lib/siteConfig.json'
import Image from 'next/image'
import Head from 'next/head'

export default function Home() {
  return (
    <>
      <Head>
        <title>Ostéopathe à {siteConfig.location} – {siteConfig.firstName} {siteConfig.lastName}</title>
        <meta
          name="description"
          content={`Cabinet d'ostéopathie de ${siteConfig.firstName} ${siteConfig.lastName} à ${siteConfig.location}. Consultations pour adultes, sportifs, femmes enceintes, enfants et nourrissons. Prise de rendez-vous rapide.`}
        />
        <meta property="og:title" content={`Ostéopathe à ${siteConfig.location} – ${siteConfig.firstName} ${siteConfig.lastName}`} />
        <meta property="og:description" content={`Cabinet d'ostéopathie à ${siteConfig.location}. Consultations pour tous publics. Prendre rendez-vous avec ${siteConfig.firstName} ${siteConfig.lastName}.`} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.baccosteo.fr/" />
        <meta property="og:image" content="/images/photocab.jpg" />
        <link rel="canonical" href="https://www.baccosteo.fr/" />
      </Head>
      <main
        id="main-content"
        className="max-w-3xl mx-auto py-8 px-4"
        tabIndex={-1}
        aria-label="Présentation du cabinet d'ostéopathie"
        role="main"
        itemScope
        itemType="https://schema.org/MedicalClinic"
      >
        <article id="cabinet-article" itemScope itemType="https://schema.org/MedicalClinic">
          <header id="cabinet-header" className="mb-8" aria-labelledby="cabinet-title">
            <h1
              id="cabinet-title"
              className="text-3xl md:text-4xl font-extrabold mb-2 text-center"
              style={{ color: "#1a120b" }}
              itemProp="name"
            >
              Ostéopathe à {siteConfig.location} – {siteConfig.firstName} {siteConfig.lastName}
            </h1>
          </header>

          <section
            id="presentation-section"
            className="flex flex-col md:flex-row items-center md:items-start mb-8 gap-6"
            itemProp="department"
            itemScope
            itemType="https://schema.org/Physician"
            aria-labelledby="cabinet-title"
          >
            <div
              id="cabinet-photo-wrapper"
              className="relative flex-shrink-0 flex items-center justify-center w-[40vw] max-w-[200px] h-[40vw] max-h-[200px] sm:w-[180px] sm:h-[180px] md:w-[200px] md:h-[200px] rounded-full bg-gradient-to-br from-[#F5E9E3] via-[#E8D5CC] to-[#F9E5D9] shadow-2xl border-4 border-white"
            >
              <Image
                id="cabinet-photo"
                src="/images/photocab.jpg"
                alt={`Portrait de ${siteConfig.firstName} ${siteConfig.lastName}, ostéopathe à ${siteConfig.location}`}
                fill
                className="rounded-full object-cover"
                priority
                sizes="(max-width: 640px) 40vw, (max-width: 768px) 180px, 200px"
                itemProp="image"
              />
            </div>
            <div className="flex flex-col justify-center w-full">
              <p className="text-base md:text-lg text-left max-w-2xl mt-6 md:mt-0" itemProp="description">
                Bienvenue au cabinet d&apos;ostéopathie de <strong>{siteConfig.firstName} {siteConfig.lastName}</strong>, situé à <span itemProp="address">{siteConfig.adress}</span>.<br />
                Je vous accueille dans un espace moderne, calme et accessible à tous.<br />
                Mon approche est centrée sur l&apos;écoute, la bienveillance et l&apos;adaptation des soins à chaque patient.<br />
                Le cabinet est équipé pour garantir votre confort et votre sécurité lors de chaque consultation.
              </p>
            </div>
          </section>

          <section id="consultations-section" aria-labelledby="consultations-title" className="mb-10">
            <h2 id="consultations-title" className="text-2xl font-bold mb-3 text-left" style={{ color: "#1a120b" }}>
              À qui s&apos;adressent les consultations ?
            </h2>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-2" aria-label="Types de patients">
              <li className="bg-[#F5E9E3] rounded-lg p-4 shadow flex flex-col items-start" itemProp="medicalSpecialty">
                <span className="font-bold text-lg" style={{ color: "#1a120b" }}>Adultes</span>
                <span className="text-sm">Gestion des douleurs, troubles musculo-squelettiques, stress, troubles digestifs…</span>
              </li>
              <li className="bg-[#F5E9E3] rounded-lg p-4 shadow flex flex-col items-start" itemProp="medicalSpecialty">
                <span className="font-bold text-lg" style={{ color: "#1a120b" }}>Sportifs</span>
                <span className="text-sm">Préparation, récupération, prévention des blessures, suivi personnalisé.</span>
              </li>
              <li className="bg-[#F5E9E3] rounded-lg p-4 shadow flex flex-col items-start" itemProp="medicalSpecialty">
                <span className="font-bold text-lg" style={{ color: "#1a120b" }}>Femmes enceintes</span>
                <span className="text-sm">Accompagnement de la grossesse, soulagement des douleurs lombaires, préparation à l&apos;accouchement.</span>
              </li>
              <li className="bg-[#F5E9E3] rounded-lg p-4 shadow flex flex-col items-start" itemProp="medicalSpecialty">
                <span className="font-bold text-lg" style={{ color: "#1a120b" }}>Enfants &amp; nourrissons</span>
                <span className="text-sm">Suivi du développement, troubles du sommeil, coliques, plagiocéphalie…</span>
              </li>
            </ul>
            <p className="text-left mt-2">
              Chaque consultation est adaptée à l&apos;âge, au mode de vie et aux besoins spécifiques de chacun.
            </p>
          </section>

          <section id="why-osteo-section" aria-labelledby="why-osteo-title" className="mb-10">
            <h2 id="why-osteo-title" className="text-2xl font-bold mb-3 text-left" style={{ color: "#1a120b" }}>
              Pourquoi consulter un ostéopathe ?
            </h2>
            <p className="mb-2 text-left">
              L&apos;ostéopathie est une approche globale qui vise à restaurer la mobilité du corps et à soulager de nombreux troubles fonctionnels.
              Elle s&apos;adresse à tous, du nourrisson à la personne âgée, en passant par le sportif ou la femme enceinte.
            </p>
            <ul className="list-disc list-inside text-base max-w-xl mx-auto md:mx-0 text-left" aria-label="Motifs de consultation">
              <li>Douleurs articulaires et musculaires</li>
              <li>Maux de dos, sciatiques, torticolis</li>
              <li>Migraines, troubles digestifs, stress</li>
              <li>Accompagnement de la grossesse et du post-partum</li>
              <li>Préparation et récupération sportive</li>
              <li>Suivi du développement de l&apos;enfant</li>
            </ul>
          </section>

          <section id="access-section" aria-labelledby="access-title" className="mb-10">
            <h2 id="access-title" className="text-2xl font-bold mb-3 text-left" style={{ color: "#1a120b" }}>
              Se rendre au cabinet
            </h2>
            <p className="text-left mb-2">
              Le cabinet est idéalement situé à <strong>{siteConfig.adress}</strong>.
              Il est facilement accessible en voiture, à vélo ou à pied, avec un parking à proximité immédiate.
            </p>
            <ul className="list-disc list-inside text-base text-left mb-2" aria-label="Temps d'accès depuis les points principaux">
              <li><strong>Saint-Michel-Chef-Chef</strong> : 7 min (5 km)</li>
              <li><strong>Saint-Brevin l’Océan</strong> : 5 min (3 km)</li>
              <li><strong>Saint-Brevin les Pins centre</strong> : 2 min (1 km)</li>
              <li><strong>Camping Les Rochelets</strong> : 4 min (2,5 km)</li>
              <li><strong>Camping Les Pierres Couchées</strong> : 6 min (4 km)</li>
              <li><strong>Saint-Nazaire</strong> : 15 min (12 km)</li>
            </ul>
            <p className="text-left text-sm text-[#543C30]">
              Arrêt de bus à moins de 200m – Cabinet accessible PMR – Parking gratuit devant le cabinet.
            </p>
            <div className="mt-4">
              <a
                id="access-googlemaps"
                href={siteConfig.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-[#E8D5CC] text-[#1a120b] font-semibold py-2 px-4 rounded-lg shadow hover:bg-[#e2c7b8] transition"
                aria-label="Voir l'itinéraire vers le cabinet sur Google Maps"
              >
                Voir l&apos;itinéraire sur Google Maps
              </a>
            </div>
          </section>

          <section id="contact-section" aria-labelledby="contact-title" className="mb-10">
            <h2 id="contact-title" className="text-2xl font-bold mb-3 text-left" style={{ color: "#1a120b" }}>
              Prendre rendez-vous
            </h2>
            <p className="text-left mb-2">
              Pour toute question ou prise de rendez-vous, contactez-moi par téléphone au{' '}
              <a id="contact-phone" href={`tel:${siteConfig.telephone}`} className="underline font-semibold" aria-label={`Téléphoner au ${siteConfig.telephone}`}>{siteConfig.telephone}</a>
              {' '}ou directement via{' '}
              <a id="contact-doctolib" href={siteConfig.doctolibUrl} target="_blank" rel="noopener noreferrer" className="underline font-semibold text-[#E08A3D] hover:text-[#c76d1e]" aria-label="Prendre rendez-vous sur Doctolib">
                Doctolib
              </a>.
            </p>
          </section>
        </article>
      </main>
    </>
  )
}
