import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { RatingSection } from "@/components/rating-section"
import { InfoSections } from "@/components/info-sections"
import { SportsHighlight } from "@/components/sports-highlight"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "sportenfr - Comparateur Sites de Paris Sportifs France 2025",
  description:
    "Comparateur indépendant de sites de paris sportifs en France. Avis d'experts, bonus et cotes analysés. 18+ - Jeu responsable. Liens affiliés présents. Jouer comporte des risques.",
  keywords: "paris sportifs, comparateur, bonus, avis, France, 18+, jeu responsable",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "sportenfr - Comparateur Sites de Paris Sportifs France",
    description: "Comparateur indépendant de sites de paris sportifs. 18+ - Jeu responsable.",
    url: "https://sportenfr.com",
    siteName: "sportenfr",
    locale: "fr_FR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "sportenfr - Comparateur Sites de Paris Sportifs",
    description: "Comparateur indépendant de sites de paris sportifs. 18+ - Jeu responsable.",
  },
}

export default function HomePage() {
  return (
    <>
      <Header />
      <div
        className="hidden md:block fixed inset-0 -z-10 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/sports-competition-background.jpg')",
        }}
      />
      <div className="bg-black md:bg-transparent container mx-auto max-w-[1200px] px-[4px]">
        <Hero />
        <RatingSection />
        <InfoSections />

        <SportsHighlight />

        <div className="bg-white/95 backdrop-blur-sm border-t-2 border-blue-200 py-8 px-4 md:px-8 mt-12 rounded-lg shadow-lg">
          <div className="max-w-4xl mx-auto space-y-4">
            <div className="bg-amber-50 border-l-4 border-amber-600 p-4 rounded">
              <h3 className="font-bold text-amber-900 mb-2">⚠️ Responsabilité et Risques</h3>
              <p className="text-sm text-amber-800 leading-relaxed">
                Les paris sportifs comportent des risques financiers. Jouez uniquement avec de l'argent que vous pouvez
                vous permettre de perdre. Les informations sur ce site sont fournies à titre informatif uniquement et ne
                constituent pas des conseils financiers ou de paris. Nous vous encourageons à vérifier les termes et
                conditions de chaque opérateur avant de vous inscrire.
              </p>
            </div>

            <div className="bg-slate-50 border-l-4 border-slate-600 p-4 rounded">
              <h3 className="font-bold text-slate-900 mb-2">🔒 Sécurité et Légalité</h3>
              <p className="text-sm text-slate-700 leading-relaxed">
                Tous les sites de paris présentés sur notre plateforme sont licenciés par l'Autorité Nationale des Jeux
                (ANJ) et autorisés à opérer légalement en France. Nous vérifions régulièrement la validité des licences
                et la réputation des opérateurs. Cependant, nous vous recommandons de toujours vérifier vous-même la
                licence d'un opérateur sur le site officiel de l'ANJ.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
