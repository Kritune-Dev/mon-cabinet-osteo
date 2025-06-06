import bannerConfig from '../lib/banner.json'

export default function Banner() {
  if (!bannerConfig.show) return null

  return (
    <div className="fixed top-4 right-4 z-[100] bg-[#E8D5CC] text-[#543C30] px-4 py-2 rounded shadow-lg max-w-xs text-sm font-semibold">
      {bannerConfig.message}
    </div>
  )
}
