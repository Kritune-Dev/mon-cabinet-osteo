import Head from 'next/head'

export default function Honoraires() {
  return (
    <>
      <Head>
        <title>Honoraires – Tarifs et modalités | Ostéopathe Saint Brévin</title>
        <meta name="description" content="Découvrez les tarifs, modalités de paiement et remboursements du cabinet d'ostéopathie à Saint Brévin." />
      </Head>
      <main id="main-content" className="max-w-3xl mx-auto py-8 px-4" tabIndex={-1} aria-label="Tarifs et modalités" role="main">
        <h1 className="text-3xl font-bold mb-6" id="honoraires-title">Tarifs et modalités</h1>
        <p>Informations sur les honoraires, moyens de paiement acceptés et remboursements.</p>
      </main>
    </>
  )
}