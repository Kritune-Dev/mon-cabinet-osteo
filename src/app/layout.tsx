import './globals.css'
import { ReactNode } from 'react'
import HeaderMain from '../components/HeaderMain'
import HeaderSecondary from '../components/HeaderSecondary'

export const metadata = {
  title: 'Cabinet d\'ostéopathie - Corentin Bacconnais',
  description: 'Cabinet d\'ostéopathie à Saint Brévin. Prise de rendez-vous rapide et conseils personnalisés.',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="fr">
      <body className="bg-background font-sans text-text min-h-screen">
        <HeaderMain />
        <HeaderSecondary />
        <main className="max-w-5xl mx-auto px-4 py-8">
          {children}
        </main>
      </body>
    </html>
  )
}
