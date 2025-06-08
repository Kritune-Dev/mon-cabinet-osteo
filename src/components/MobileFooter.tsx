'use client'

import { useState, useEffect } from 'react'
import { FaStar } from 'react-icons/fa'
import GoogleReviewsPopup from '@/components/ReviewsPopup'
import type { GoogleReviewsResponse } from '@/types/googleReviews'

type MobileFooterProps = GoogleReviewsResponse

export default function MobileFooter({
  moyenne,
  totalAvis,
  avis,
}: MobileFooterProps) {
  const [open, setOpen] = useState(false)
  const [isFooterVisible, setIsFooterVisible] = useState(false)

  useEffect(() => {
    function handleScroll() {
      const footer = document.getElementById('site-footer')
      if (!footer) return
      const rect = footer.getBoundingClientRect()
      setIsFooterVisible(rect.top < window.innerHeight)
    }
    window.addEventListener('scroll', handleScroll)
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const button = (
    <button
      className="w-full flex items-center justify-center gap-2 bg-[#F5E9E3] border-t border-[#E8D5CC] px-6 py-3 shadow-lg font-semibold text-[#2D1B12] text-base active:scale-95 transition rounded-none"
      aria-label={`Voir les ${totalAvis ?? 0} avis Google`}
      onClick={() => setOpen(true)}
      style={{ borderRadius: 0 }}
    >
      <FaStar className="text-yellow-500" aria-hidden="true" />
      <span className="font-bold">{moyenne?.toFixed(1) ?? '-'}</span>
      <span className="text-sm">({totalAvis ?? 0} avis Google)</span>
    </button>
  )

  return (
    <>
      {/* Flottant tant que le footer principal n'est pas visible */}
      {!isFooterVisible && (
        <footer className="fixed bottom-0 left-0 right-0 z-40 md:hidden w-full m-0 p-0">
          {button}
        </footer>
      )}
      {/* Statique juste avant le SiteFooter si le footer principal est visible */}
      {isFooterVisible && (
        <div className="md:hidden w-full m-0 p-0">{button}</div>
      )}
      <GoogleReviewsPopup
        moyenne={moyenne}
        totalAvis={totalAvis}
        avis={avis}
        open={open}
        onClose={() => setOpen(false)}
      />
    </>
  )
}
