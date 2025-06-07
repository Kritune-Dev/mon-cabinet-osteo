import Head from 'next/head'
import siteConfig from '@/lib/siteConfig.json'

export default function MentionsLegales() {
  return (
    <>
      <Head>
        <title>Mentions légales & Confidentialité | Ostéopathe Saint-Brévin</title>
        <meta
          name="description"
          content="Retrouvez les mentions légales et la politique de confidentialité du site du cabinet d'ostéopathie de Corentin Bacconnais à Saint-Brévin. Informations sur l'éditeur, l'hébergement, la protection des données et vos droits."
        />
      </Head>
      <main
        id="mentions-main"
        className="max-w-3xl mx-auto py-8 px-4"
        tabIndex={-1}
        aria-label="Mentions légales et politique de confidentialité"
        role="main"
      >
        <h1 className="text-3xl font-bold mb-6" id="mentions-title">
          Mentions légales & politique de confidentialité
        </h1>

        <section className="mb-6" aria-labelledby="editeur-title">
          <h2 id="editeur-title" className="text-xl font-semibold mb-2">Éditeur du site</h2>
          <p>
            Ce site est édité par :<br />
            <strong>Corentin Bacconnais</strong><br />
            Ostéopathe D.O.<br />
            Adresse : <a href={`https://www.google.com/maps/search/?api=1&query=Corentin+Bacconnais+Ostéopathe+Saint-Brévin-les-Pins`}>{siteConfig.address}</a><br />
            Téléphone : <a href={`tel:${siteConfig.phone}`}>{siteConfig.phone}</a><br />
            Email : <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a><br />
            SIRET : {siteConfig.siret}<br />
            RPPS : {siteConfig.rpps}
          </p>
        </section>

        <section className="mb-6" aria-labelledby="hebergeur-title">
          <h2 id="hebergeur-title" className="text-xl font-semibold mb-2">Hébergement</h2>
          <p>
            Ce site est hébergé par :<br />
            Vercel Inc.<br />
            440 N Barranca Ave #4133, Covina, CA 91723, USA<br />
            <a href="https://vercel.com" target="_blank" rel="noopener noreferrer" className="underline">https://vercel.com</a>
          </p>
        </section>

        <section className="mb-6" aria-labelledby="propriete-title">
          <h2 id="propriete-title" className="text-xl font-semibold mb-2">Propriété intellectuelle</h2>
          <p>
            L’ensemble des contenus présents sur ce site (textes, images, logo, graphismes, etc.) sont la propriété exclusive de Corentin Bacconnais, sauf mention contraire. Toute reproduction, représentation, modification, publication, adaptation de tout ou partie des éléments du site, quel que soit le moyen ou le procédé utilisé, est interdite sans l’autorisation écrite préalable de l’éditeur.
          </p>
        </section>

        <section className="mb-6" aria-labelledby="donnees-title">
          <h2 id="donnees-title" className="text-xl font-semibold mb-2">Protection des données personnelles</h2>
          <p>
            Les informations recueillies via les formulaires de contact sont destinées uniquement à la gestion de votre demande et ne sont jamais transmises à des tiers. Conformément à la loi « Informatique et Libertés » et au RGPD, vous disposez d’un droit d’accès, de rectification et de suppression de vos données personnelles. Pour exercer ce droit, contactez l’éditeur du site.
          </p>
        </section>

        <section className="mb-6" aria-labelledby="cookies-title">
          <h2 id="cookies-title" className="text-xl font-semibold mb-2">Cookies</h2>
          <p>
            Ce site utilise des cookies strictement nécessaires à son fonctionnement et à la mesure d’audience. Vous pouvez configurer votre navigateur pour refuser les cookies.
          </p>
        </section>

        <section className="mb-6" aria-labelledby="responsabilite-title">
          <h2 id="responsabilite-title" className="text-xl font-semibold mb-2">Responsabilité</h2>
          <p>
            L’éditeur du site s’efforce de fournir des informations aussi précises que possible. Toutefois, il ne pourra être tenu responsable des omissions, des inexactitudes ou des carences dans la mise à jour, qu’elles soient de son fait ou du fait des tiers partenaires.
          </p>
        </section>

        <section className="mb-6" aria-labelledby="contact-title">
          <h2 id="contact-title" className="text-xl font-semibold mb-2">Contact</h2>
          <p>
            Pour toute question concernant les mentions légales ou la politique de confidentialité, vous pouvez contacter l’éditeur à l’adresse suivante : <a href="mailto:web@baccosteo.fr">web@baccosteo.fr</a>.
          </p>
        </section>
      </main>
    </>
  )
}
