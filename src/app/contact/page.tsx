import Head from 'next/head'

export default function Contact() {
  return (
    <>
      <Head>
        <title>Contact & accès | Ostéopathe Saint Brévin</title>
        <meta name="description" content="Contact, accès et prise de rendez-vous avec votre ostéopathe à Saint Brévin." />
      </Head>
      <main id="main-content" className="max-w-3xl mx-auto py-8 px-4" tabIndex={-1} aria-label="Contact et accès" role="main">
        <h1 className="text-3xl font-bold mb-6" id="contact-title">Contact & accès</h1>
        <p>Informations pour prendre rendez-vous et accéder au cabinet.</p>
      </main>
    </>
  )
}