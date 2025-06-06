import './globals.css'
import { ReactNode } from 'react'
import { SpeedInsights } from "@vercel/speed-insights/next"
import HeaderMain from '@/components/HeaderMain'
import HeaderSecondary from '@/components/HeaderSecondary'
import SidebarInfoCard from '@/components/SidebarInfoCard'
import SiteFooter from '@/components/SiteFooter'

export const metadata = {
  title: "Cabinet d'ostéopathie - Corentin Bacconnais",
  description: "Cabinet d'ostéopathie à Saint Brévin. Prise de rendez-vous rapide et conseils personnalisés.",
}

export default function RootLayout({ children }: { children: ReactNode }) {
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
      </head>
      <SpeedInsights />
      <body className="bg-background font-sans text-text min-h-screen" id="body-root">
        <header id="site-header" role="banner">
          <HeaderMain />
          <HeaderSecondary />
        </header>

        <div className="flex flex-col lg:flex-row max-w-[1400px] mx-auto w-full py-8" id="main-layout">
          {/* Main content */}
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
          {/* Sidebar zone with colored background */}
          <aside
            id="sidebar-info-bg"
            className="hidden lg:flex w-2/5 min-h-[calc(100vh-64px)] items-center justify-center"
            aria-label="Informations pratiques et contact"
            role="complementary"
          >
            <SidebarInfoCard />
          </aside>
        </div>
        <SiteFooter />
      </body>
    </html>
  )
}
