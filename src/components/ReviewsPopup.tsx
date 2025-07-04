'use client'

import { useRef, useEffect } from 'react'
import { FaStar, FaUserCircle } from 'react-icons/fa'

interface GoogleReviewsPopupProps {
  moyenne: number
  totalAvis: number
  avis: Array<{
    author_name: string
    text: string
    rating: number
    relative_time_description: string
    profile_photo_url?: string
  }>
  open: boolean
  onClose: () => void
}

export default function ReviewsPopup({ moyenne, totalAvis, avis, open, onClose }: GoogleReviewsPopupProps) {
  const popupRef = useRef<HTMLDivElement>(null)

  // Fermer le popup au clic extérieur ou touche Escape
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (popupRef.current && !popupRef.current.contains(event.target as Node) && open) {
        onClose()
      }
    }
    function handleEscape(event: KeyboardEvent) {
      if (event.key === 'Escape') onClose()
    }
    if (open) {
      document.addEventListener('mousedown', handleClickOutside)
      document.addEventListener('keydown', handleEscape)
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
      document.removeEventListener('keydown', handleEscape)
    }
  }, [open, onClose])

  if (!open) return null

  return (
    <div
      ref={popupRef}
      id="google-reviews-popup"
      role="dialog"
      aria-modal="true"
      aria-labelledby="google-reviews-title"
      tabIndex={-1}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/40"
    >
      <div className="bg-white rounded-xl shadow-xl max-w-lg w-full mx-4 p-6 relative flex flex-col">
        <button
          aria-label="Fermer la fenêtre des avis"
          className="absolute top-3 right-3 text-2xl text-[#543C30] hover:text-[#E08A3D] focus:outline-none"
          onClick={onClose}
        >
          ×
        </button>
        <h2 id="google-reviews-title" className="text-xl font-bold mb-4 text-[#2D1B12] flex items-center gap-2">
          <FaStar className="text-yellow-500" aria-hidden="true" />
          {moyenne?.toFixed(1) ?? '-'} / 5 <span className="text-base font-normal">({totalAvis ?? 0} avis Google)</span>
        </h2>
        <div className="overflow-y-auto max-h-[60vh] pr-2">
          {avis && avis.length > 0 ? (
            <ul className="space-y-4">
              {avis.map((a, idx) => (
                <li key={idx} className="border-b border-[#E8D5CC] pb-3">
                  <div className="flex items-center gap-2 mb-1">
                    <FaUserCircle className="w-8 h-8 text-[#E8D5CC]" aria-label="Utilisateur" />
                    <span className="font-semibold">{a.author_name}</span>
                    <span className="flex items-center gap-1 text-yellow-500 ml-2">
                      {Array.from({ length: a.rating }).map((_, i) => (
                        <FaStar key={i} className="w-3 h-3" aria-hidden="true" />
                      ))}
                    </span>
                    <span className="ml-2 text-xs text-[#543C30]">{a.relative_time_description}</span>
                  </div>
                  <p className="text-[#543C30] text-sm">{a.text}</p>
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-[#543C30] text-center">Aucun avis Google disponible.</p>
          )}
        </div>
      </div>
    </div>
  )
}
