import Head from 'next/head'

export default function APropos() {
  return (
    <>
      <Head>
        <title>Le praticien – Corentin Bacconnais, Ostéopathe à Saint Brévin</title>
        <meta name="description" content="Présentation du parcours, de la formation et de la philosophie de soin de Corentin Bacconnais, ostéopathe à Saint Brévin." />
      </Head>
      <main id="main-content" className="max-w-3xl mx-auto py-8 px-4" tabIndex={-1} aria-label="Présentation du praticien" role="main">
        <h1 className="text-3xl font-bold mb-6" id="a-propos-title">Le praticien</h1>
        <p>Présentation du parcours, de la formation et de la philosophie de soin du praticien.</p>
      </main>
    </>
  )
}
