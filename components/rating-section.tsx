import { BettingSiteCard } from "./betting-site-card"
import { bettingSites } from "@/lib/mock-data"

export function RatingSection() {
  return (
    <section className="py-4 mb-4">
      {/* SEO Hidden Content */}
      <div className="sr-only">
        <h2>Classement des meilleurs sites de paris sportifs France 2025</h2>
        <p>Comparatif expert avec bonus, avis et cotes. 18+ - Jeu responsable. Liens affiliés présents.</p>
      </div>

      <div className="space-y-4">
        {bettingSites.map((site, index) => (
          <BettingSiteCard key={site.id} site={site} rank={index + 1} />
        ))}
      </div>
    </section>
  )
}
