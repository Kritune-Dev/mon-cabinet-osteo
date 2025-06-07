import Head from 'next/head'

export default function Sportif() {
  return (
    <>
      <Head>
        <title>Suivi des sportifs | Ostéopathe Saint Brévin</title>
        <meta name="description" content="Ostéopathie et suivi spécifique pour les sportifs à Saint Brévin." />
      </Head>
      <main id="main-content" className="max-w-3xl mx-auto py-8 px-4" tabIndex={-1} aria-label="Suivi des sportifs" role="main">
        <h1 className="text-3xl font-bold mb-6" id="sportif-title">Suivi des sportifs</h1>
        <p>Informations sur l&apos;accompagnement ostéopathique des sportifs.</p>
      </main>
    </>
  )
}
