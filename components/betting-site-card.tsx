import type { BettingSite } from "@/lib/mock-data"
import Link from "next/link"

interface BettingSiteCardProps {
  site: BettingSite
  rank: number
}

export function BettingSiteCard({ site, rank }: BettingSiteCardProps) {
  const starRating = site.rating / 2

  const StarIcon = ({ fillPercentage }: { fillPercentage: number }) => {
    const fillId = `star-fill-${Math.random().toString(36).substr(2, 9)}`
    const clampedFill = Math.max(0, Math.min(100, fillPercentage))

    return (
      <svg className="w-5 h-5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id={fillId}>
            <stop offset={`${clampedFill}%`} stopColor="#d4af37" />
            <stop offset={`${clampedFill}%`} stopColor="#e5e7eb" />
          </linearGradient>
        </defs>
        <path
          d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"
          fill={`url(#${fillId})`}
        />
      </svg>
    )
  }

  const renderStars = () => {
    return [...Array(5)].map((_, i) => {
      const fillPercentage = Math.min(100, Math.max(0, (starRating - i) * 100))
      return <StarIcon key={i} fillPercentage={fillPercentage} />
    })
  }

  const UsersIcon = () => (
    <svg className="w-3 h-3" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2M9 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )

  const getBadgeColor = (badge: string) => {
    switch (badge) {
      case "MEILLEUR SITE":
        return "bg-gradient-to-br from-amber-500 to-yellow-600"
      case "POPULAIRE":
        return "bg-gradient-to-br from-blue-600 to-blue-700"
      case "TENDANCE":
        return "bg-gradient-to-br from-emerald-600 to-emerald-700"
      default:
        return "bg-gradient-to-br from-slate-700 to-slate-800"
    }
  }

  const getBadgeText = (rank: number) => {
    switch (rank) {
      case 1:
        return "MEILLEUR SITE"
      case 2:
        return "POPULAIRE"
      case 3:
        return "TENDANCE"
      default:
        return ""
    }
  }

  const badgeText = getBadgeText(rank)
  const isFirstItem = rank === 1

  return (
    <div
      className={`relative overflow-hidden transition-all duration-500 hover:scale-[1.02] ${
        isFirstItem
          ? "bg-gradient-to-br from-amber-50 via-white to-amber-50 border-2 border-amber-300 shadow-2xl shadow-amber-200/50 rounded-lg"
          : "bg-white/90 backdrop-blur-sm border border-gray-200/50 shadow-xl hover:shadow-2xl rounded-lg hover:border-blue-200"
      }`}
    >
      {badgeText && (
        <div className="absolute left-0 top-0 z-20">
          <div className={`${getBadgeColor(badgeText)} text-white px-4 py-2 rounded-br-lg shadow-lg`}>
            <div className="text-[10px] font-black uppercase tracking-wider whitespace-nowrap">{badgeText}</div>
          </div>
        </div>
      )}

      <div className="p-5 sm:p-7">
        {/* Desktop Layout */}
        <div className="hidden lg:grid lg:grid-cols-[auto_auto_1fr_auto_auto_auto] lg:gap-6 lg:items-center">
          <div
            className={`relative w-16 h-16 font-black rounded-lg flex items-center justify-center text-2xl flex-shrink-0 shadow-md ${
              isFirstItem
                ? "bg-gradient-to-br from-amber-400 via-yellow-400 to-amber-500 text-white"
                : "bg-gradient-to-br from-slate-100 via-white to-slate-100 text-slate-700"
            }`}
          >
            <span className="relative z-10">{rank}</span>
          </div>

          <div className="flex-shrink-0 relative">
            <div className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-black p-4 rounded-xl shadow-lg border border-slate-700/50">
              <img
                src={site.logo || "/placeholder.svg"}
                alt={site.name}
                className="w-[140px] h-[80px] object-contain"
              />
            </div>
          </div>

          <div className="text-center px-6">
            <div className="inline-block bg-gradient-to-r from-red-500 to-rose-600 text-white font-black px-4 py-1.5 rounded-full text-xs uppercase tracking-wider mb-3 shadow-lg shadow-red-500/30">
              Bonus de Bienvenue
            </div>
            <p className="text-slate-800 font-bold leading-snug text-xl">{site.bonus}</p>
          </div>

          <div className="text-center flex-shrink-0 px-3">
            <div className="p-4 rounded-xl">
              <div className="text-[10px] text-slate-500 mb-2 uppercase tracking-widest font-bold">Évaluation</div>
              <div className="flex items-center justify-center mb-2 gap-0.5">{renderStars()}</div>
              <div className="flex items-center justify-center text-slate-500 text-xs gap-1 font-semibold">
                <UsersIcon />
                <span>{site.reviews} avis</span>
              </div>
            </div>
          </div>

          <div className="text-center flex-shrink-0 px-5">
            <div className="text-5xl font-black bg-gradient-to-br from-blue-600 via-blue-700 to-blue-900 bg-clip-text text-transparent">
              {site.rating.toFixed(1)}
            </div>
          </div>

          <div className="flex-shrink-0">
            <Link href={site.url} target="_blank" rel="noopener noreferrer">
              <button className="bg-gradient-to-r from-green-600 via-green-500 to-emerald-600 hover:from-green-700 hover:via-green-600 hover:to-emerald-700 text-white font-black px-8 py-4 text-base rounded-xl transition-all duration-300 shadow-lg uppercase tracking-wider">
                Obtenir Bonus
              </button>
            </Link>
          </div>
        </div>

        {/* Tablet Layout */}
        <div className="hidden md:grid lg:hidden md:grid-cols-[auto_1fr_auto] md:gap-5 md:items-center">
          <div className="flex items-center gap-4 md:col-span-3">
            <div
              className={`relative w-14 h-14 font-black rounded-lg flex items-center justify-center text-xl flex-shrink-0 shadow-md ${
                isFirstItem
                  ? "bg-gradient-to-br from-amber-400 via-yellow-400 to-amber-500 text-white"
                  : "bg-gradient-to-br from-slate-100 via-white to-slate-100 text-slate-700"
              }`}
            >
              <span className="relative z-10">{rank}</span>
            </div>

            <div className="flex-shrink-0 relative">
              <div className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-black p-3 rounded-xl shadow-lg border border-slate-700/50">
                <img
                  src={site.logo || "/placeholder.svg"}
                  alt={site.name}
                  className="w-[120px] h-[60px] object-contain"
                />
              </div>
            </div>

            <div className="flex-1 text-center">
              <div className="inline-block bg-gradient-to-r from-red-500 to-rose-600 text-white font-black px-3 py-1 rounded-full text-[10px] uppercase tracking-wider mb-2 shadow-md shadow-red-500/30">
                Bonus de Bienvenue
              </div>
              <p className="text-slate-800 font-bold leading-tight text-base">{site.bonus}</p>
            </div>
          </div>

          <div className="flex flex-col items-center gap-1 md:col-span-1">
            <div className="p-3 rounded-lg w-full">
              <div className="text-[9px] text-slate-500 uppercase tracking-widest font-bold mb-1.5">Évaluation</div>
              <div className="flex items-center justify-center mb-1.5 gap-0.5">{renderStars()}</div>
              <div className="flex items-center justify-center text-slate-500 text-[10px] gap-1 font-semibold">
                <UsersIcon />
                <span>{site.reviews} avis</span>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-center md:col-span-1">
            <div className="text-4xl font-black bg-gradient-to-br from-blue-600 via-blue-700 to-blue-900 bg-clip-text text-transparent">
              {site.rating.toFixed(1)}
            </div>
          </div>

          <div className="flex items-center justify-center md:col-span-1">
            <Link href={site.url} target="_blank" rel="noopener noreferrer">
              <button className="bg-gradient-to-r from-green-600 via-green-500 to-emerald-600 hover:from-green-700 hover:via-green-600 hover:to-emerald-700 text-white font-black px-6 py-3 text-sm rounded-xl transition-all duration-300 shadow-lg uppercase tracking-wider">
                Obtenir Bonus
              </button>
            </Link>
          </div>
        </div>

        {/* Mobile Layout */}
        <div className="md:hidden space-y-4">
          <div className="flex gap-3 items-start pt-4">
            <div className="w-[45%] flex-shrink-0 relative">
              <div className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-black p-2.5 rounded-xl shadow-lg border border-slate-700/50">
                <img src={site.logo || "/placeholder.svg"} alt={site.name} className="w-full h-[50px] object-contain" />
              </div>
            </div>

            <div className="w-[55%] flex flex-col gap-2 items-center justify-center">
              <div className="text-center">
                <div className="inline-block bg-gradient-to-r from-red-500 to-rose-600 text-white font-black px-2.5 py-1 rounded-full text-[9px] uppercase tracking-wider mb-1.5 shadow-md shadow-red-500/30">
                  Bonus
                </div>
                <p className="text-slate-800 font-bold text-xl leading-tight">{site.bonus}</p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-2 items-center py-3 border-t-2 border-slate-100">
            <div className="flex flex-col items-center gap-1.5">
              <div className="p-2 rounded-lg w-full">
                <div className="flex justify-center mb-1">{renderStars()}</div>
                <div className="flex items-center justify-center gap-1 text-[9px] text-slate-500 font-semibold">
                  <UsersIcon />
                  <span>{site.reviews}</span>
                </div>
              </div>
            </div>

            <div className="flex items-center justify-center">
              <div className="text-3xl font-black bg-gradient-to-br from-blue-600 via-blue-700 to-blue-900 bg-clip-text text-transparent">
                {site.rating.toFixed(1)}
              </div>
            </div>

            <div className="flex items-center justify-center">
              <Link href={site.url} target="_blank" rel="noopener noreferrer" className="w-full">
                <button className="w-full bg-gradient-to-r from-green-600 via-green-500 to-emerald-600 active:from-green-700 active:via-green-600 active:to-emerald-700 text-white font-black px-2 py-2.5 text-[10px] text-center rounded-lg transition-all duration-300 shadow-md uppercase tracking-wider">
                  Obtenir
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="px-5 sm:px-7 py-3.5 bg-gradient-to-r from-slate-50 via-gray-50 to-slate-50 border-t-2 border-slate-100">
        <p className="text-[11px] text-slate-600 text-center leading-relaxed font-semibold">
          18+ Les T&C s'appliquent. Nouveaux inscrits uniquement
        </p>
      </div>
    </div>
  )
}
