import './globals.css'
import { ReactNode } from 'react'
import { SpeedInsights } from "@vercel/speed-insights/next"
import { fetchGoogleReviews } from '@/lib/fetchGoogleReviews'
import HeaderMain from '@/components/HeaderMain'
import HeaderSecondary from '@/components/HeaderSecondary'
import DesktopNavbar from '@/components/DesktopNavbar'
import MobileFooter from '@/components/MobileFooter'
import Footer from '@/components/Footer'
import DesktopSidebar from '@/components/DesktopSidebar'

export const metadata = {
  title: "Cabinet d'ostéopathie - Corentin Bacconnais",
  description: "Cabinet d'ostéopathie à Saint Brévin. Prise de rendez-vous rapide et conseils personnalisés.",
  url: "https://www.baccosteo.fr/",
  image: "/images/photocab.jpg"
}

export default async function RootLayout({ children }: { children: ReactNode }) {
  const { avis, totalAvis, moyenne } = await fetchGoogleReviews()

  return (
    <html lang="fr" prefix="og: http://ogp.me/ns#">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#E8D5CC" />
        <meta name="robots" content="index, follow" />
        <link rel="icon" href="/favicon.ico" />
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <link rel="canonical" href={metadata.url} />
        {/* Open Graph */}
        <meta property="og:title" content={metadata.title} />
        <meta property="og:description" content={metadata.description} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={metadata.url} />
        <meta property="og:image" content={metadata.image} />
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={metadata.title} />
        <meta name="twitter:description" content={metadata.description} />
        <meta name="twitter:image" content={metadata.image} />
      </head>
      <body className="bg-background font-sans text-text min-h-screen" id="body-root">
        {/* Skip to main content for accessibility */}
        <a href="#main" className="sr-only focus:not-sr-only absolute left-2 top-2 bg-white text-[#2D1B12] px-3 py-2 rounded z-50">
          Aller au contenu principal
        </a>
        <SpeedInsights />
        <header id="site-header" role="banner">
          <HeaderMain />
          <HeaderSecondary />
          <DesktopNavbar />
        </header>
        <div className="flex flex-col lg:flex-row max-w-[1400px] mx-auto w-full py-8" id="main-layout">
          <main
            id="main"
            className="w-full lg:w-3/5 bg-white/90 border border-[#E8D5CC] rounded-xl shadow-lg p-4 sm:p-8"
            tabIndex={-1}
            role="main"
            aria-label="Contenu principal"
            itemScope
            itemType="https://schema.org/MedicalClinic"
          >
            {children}
          </main>
          <aside
            id="sidebar-info-bg"
            className="hidden lg:flex w-2/5 min-h-[calc(100vh-64px)] items-center justify-center"
            aria-label="Informations pratiques et contact"
            role="complementary"
          >
            <DesktopSidebar avis={avis} totalAvis={totalAvis} moyenne={moyenne} />
          </aside>
        </div>
        <MobileFooter avis={avis} totalAvis={totalAvis} moyenne={moyenne} />
        <Footer />
      </body>
    </html>
  )
}
