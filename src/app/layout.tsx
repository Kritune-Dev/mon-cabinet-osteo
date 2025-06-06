import './globals.css'
import { ReactNode } from 'react'
import HeaderMain from '@/components/HeaderMain'
import HeaderSecondary from '@/components/HeaderSecondary'
import SidebarInfoCard from '@/components/SidebarInfoCard'

export const metadata = {
  title: "Cabinet d'ostéopathie - Corentin Bacconnais",
  description: "Cabinet d'ostéopathie à Saint Brévin. Prise de rendez-vous rapide et conseils personnalisés.",
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="fr">
      <body className="bg-background font-sans text-text min-h-screen">
        <header>
          <HeaderMain />
          <HeaderSecondary />
        </header>

        <div className="flex flex-col lg:flex-row max-w-[1400px] mx-auto w-full px-4 lg:px-8 py-8">
          {/* Main content */}
          <main className="w-full lg:w-3/5">
            {children}
          </main>
          {/* Sidebar zone with colored background */}
          <aside
            id="sidebar-info-bg"
            className="hidden lg:flex w-2/5 min-h-[calc(100vh-64px)] items-center justify-center"
          >
            <SidebarInfoCard />
          </aside>
        </div>
      </body>
    </html>
  )
}
