export interface GoogleReview {
  author_name: string
  text: string
  rating: number
  relative_time_description: string
  profile_photo_url?: string
}

export interface GoogleReviewsResponse {
  avis: GoogleReview[]
  totalAvis: number
  moyenne: number
}
