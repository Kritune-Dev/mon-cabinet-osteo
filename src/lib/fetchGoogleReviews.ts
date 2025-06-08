import type { GoogleReviewsResponse } from '@/types/googleReviews'

// lib/fetchGoogleReviews.ts
export async function fetchGoogleReviews(): Promise<GoogleReviewsResponse> {
  const placeId = process.env.GOOGLE_PLACE_ID
  const apiKey = process.env.GOOGLE_PLACE_API_KEY

  const response = await fetch(
    `https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeId}&fields=reviews,user_ratings_total,rating&language=fr&key=${apiKey}`
  )

  if (!response.ok) {
    throw new Error('Erreur lors de la récupération des avis Google')
  }

  const data = await response.json()
  const totalAvis = data.result.user_ratings_total
  const moyenne = data.result.rating
  return { avis: data.result.reviews || [], totalAvis, moyenne }
}
