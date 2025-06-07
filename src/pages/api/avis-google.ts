import type { NextApiRequest, NextApiResponse } from 'next';
import apiGoogle from '@/lib/apiGoogle.json'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const placeId = apiGoogle.placeID;
  const apiKey = apiGoogle.placeApi;

  const response = await fetch(
  `https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeId}&fields=reviews,user_ratings_total,rating&language=fr&key=${apiKey}`
);

  const data = await response.json();
  console.log(data)
  const totalAvis = data.result.user_ratings_total;
  const moyenne = data.result.rating;


  res.status(200).json({ avis: data.result.reviews || [], totalAvis, moyenne });
}
