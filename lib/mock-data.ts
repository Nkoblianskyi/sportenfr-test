export interface BettingSite {
  id: number
  name: string
  logo: string
  bonus: string
  url: string
  rating: number
  reviews: number
  badges: string[]
  isTopRating?: boolean
  isTopLine?: boolean
  isPopular?: boolean
  isTrending?: boolean
}

export const bettingSites: BettingSite[] = [
  {
    id: 1,
    name: "Zeturf",
    logo: "/zeturf.png",
    bonus: "Bonus de Bienvenue 100% Jusqu'à 100€",
    url: "https://www.zeturf.fr/fr",
    rating: 9.8,
    reviews: 3980,
    badges: ["MEILLEUR SITE"],
    isTopRating: true,
    isTopLine: true,
  },
  {
    id: 2,
    name: "Olybet",
    logo: "/olybet.png",
    bonus: "Bonus de Bienvenue 100% Jusqu'à 100€",
    url: "https://www.olybet.fr/",
    rating: 9.5,
    reviews: 3750,
    badges: ["POPULAIRE"],
    isPopular: true,
    isTopLine: true,
  },
  {
    id: 3,
    name: "Feeling Bet",
    logo: "/feelingbet.png",
    bonus: "50€ de Freebets sur ton 1er Pari s'il est Perdant",
    url: "https://feelingbet.fr/",
    rating: 9.2,
    reviews: 3420,
    badges: ["TENDANCE"],
    isPopular: true,
  },
  {
    id: 4,
    name: "Genybet",
    logo: "/genybet.png",
    bonus: "Bonus de Bienvenue 100% Jusqu'à 250€",
    url: "https://www.genybet.fr/",
    rating: 8.9,
    reviews: 3150,
    badges: [],
  },
]

export function validateBettingSiteUrl(url: string): boolean {
  const allowedDomains = ["zeturf.fr", "olybet.fr", "genybet.fr", "feelingbet.fr"]

  try {
    const urlObj = new URL(url)
    return urlObj.protocol === "https:" && allowedDomains.some((domain) => urlObj.hostname.includes(domain))
  } catch {
    return false
  }
}
