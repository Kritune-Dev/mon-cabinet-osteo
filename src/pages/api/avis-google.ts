// pages/api/avis-google.ts
import type { NextApiRequest, NextApiResponse } from 'next'
import { fetchGoogleReviews } from '@/lib/fetchGoogleReviews'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const data = await fetchGoogleReviews()
    res.status(200).json(data)
  } catch {
    res.status(500).json({ error: 'Erreur lors de la récupération des avis Google' })
  }
}
