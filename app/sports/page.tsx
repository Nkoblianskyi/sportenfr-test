import { Header } from "@/components/header"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Guide des Sports - MeilleurSportEnFrance",
  description:
    "Découvrez les sports populaires en France, leurs tournois majeurs et règles. Guide complet pour les paris sportifs. 18+ - Jeu responsable.",
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "/sports",
  },
  openGraph: {
    title: "Guide des Sports - MeilleurSportEnFrance",
    description: "Guide complet des sports, tournois et règles pour les paris sportifs en France.",
    url: "https://meilleursportenfrance.com/sports",
  },
}

export default function SportsPage() {
  return (
    <>
      <Header />
      <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
        <div className="container mx-auto max-w-[1200px] px-4 py-16">
          <h1 className="text-4xl font-bold mb-4 text-center text-slate-900">Guide des Sports</h1>
          <p className="text-center text-slate-600 mb-12 max-w-3xl mx-auto">
            Découvrez les sports les plus populaires en France, leurs tournois majeurs et les règles essentielles pour
            mieux comprendre vos paris sportifs.
          </p>

          <div className="space-y-12">
            {/* Football */}
            <section className="bg-white rounded-lg shadow-md p-8 border border-slate-200">
              <h2 className="text-3xl font-bold mb-4 text-blue-600">Football</h2>
              <div className="space-y-4 text-slate-700">
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-slate-900">Présentation</h3>
                  <p className="leading-relaxed">
                    Le football est le sport le plus populaire en France et dans le monde. Deux équipes de 11 joueurs
                    s'affrontent pour marquer des buts dans le camp adverse pendant 90 minutes (2 mi-temps de 45
                    minutes).
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-slate-900">Tournois Majeurs</h3>
                  <ul className="list-disc list-inside space-y-1 ml-4">
                    <li>Ligue 1 - Championnat de France</li>
                    <li>Coupe de France</li>
                    <li>Ligue des Champions UEFA</li>
                    <li>Coupe du Monde FIFA</li>
                    <li>Championnat d'Europe UEFA</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-slate-900">Règles Essentielles</h3>
                  <ul className="list-disc list-inside space-y-1 ml-4">
                    <li>Pas de mains sauf pour le gardien dans sa surface</li>
                    <li>Hors-jeu si un joueur est devant le dernier défenseur au moment de la passe</li>
                    <li>Carton jaune pour avertissement, rouge pour expulsion</li>
                    <li>Penalty accordé pour faute dans la surface de réparation</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Tennis */}
            <section className="bg-white rounded-lg shadow-md p-8 border border-slate-200">
              <h2 className="text-3xl font-bold mb-4 text-blue-600">Tennis</h2>
              <div className="space-y-4 text-slate-700">
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-slate-900">Présentation</h3>
                  <p className="leading-relaxed">
                    Le tennis oppose deux joueurs (simple) ou quatre joueurs (double) qui s'échangent une balle à l'aide
                    de raquettes. Le but est de marquer des points en faisant rebondir la balle dans le camp adverse.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-slate-900">Tournois Majeurs</h3>
                  <ul className="list-disc list-inside space-y-1 ml-4">
                    <li>Roland-Garros (Grand Chelem sur terre battue)</li>
                    <li>Open d'Australie</li>
                    <li>Wimbledon</li>
                    <li>US Open</li>
                    <li>Masters 1000</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-slate-900">Règles Essentielles</h3>
                  <ul className="list-disc list-inside space-y-1 ml-4">
                    <li>Système de points : 15, 30, 40, jeu</li>
                    <li>6 jeux pour gagner un set (avec 2 jeux d'écart minimum)</li>
                    <li>2 sets gagnants en simple dames, 3 en simple messieurs (Grand Chelem)</li>
                    <li>Tie-break à 6-6 dans un set</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Basketball */}
            <section className="bg-white rounded-lg shadow-md p-8 border border-slate-200">
              <h2 className="text-3xl font-bold mb-4 text-blue-600">Basketball</h2>
              <div className="space-y-4 text-slate-700">
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-slate-900">Présentation</h3>
                  <p className="leading-relaxed">
                    Le basketball oppose deux équipes de 5 joueurs qui tentent de marquer des paniers en lançant le
                    ballon dans l'anneau adverse. Le match se joue en 4 quarts-temps de 10 minutes (FIBA) ou 12 minutes
                    (NBA).
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-slate-900">Tournois Majeurs</h3>
                  <ul className="list-disc list-inside space-y-1 ml-4">
                    <li>NBA (États-Unis)</li>
                    <li>EuroLeague</li>
                    <li>Betclic Élite (Championnat de France)</li>
                    <li>Coupe du Monde FIBA</li>
                    <li>Jeux Olympiques</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-slate-900">Règles Essentielles</h3>
                  <ul className="list-disc list-inside space-y-1 ml-4">
                    <li>2 points pour un panier normal, 3 points derrière l'arc</li>
                    <li>24 secondes pour tenter un tir (NBA/FIBA)</li>
                    <li>5 fautes personnelles maximum par joueur</li>
                    <li>Marcher interdit : dribbler pour se déplacer</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Rugby */}
            <section className="bg-white rounded-lg shadow-md p-8 border border-slate-200">
              <h2 className="text-3xl font-bold mb-4 text-blue-600">Rugby</h2>
              <div className="space-y-4 text-slate-700">
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-slate-900">Présentation</h3>
                  <p className="leading-relaxed">
                    Le rugby à XV oppose deux équipes de 15 joueurs qui tentent de marquer des essais en portant ou en
                    passant le ballon ovale. Le match dure 80 minutes (2 mi-temps de 40 minutes).
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-slate-900">Tournois Majeurs</h3>
                  <ul className="list-disc list-inside space-y-1 ml-4">
                    <li>Top 14 (Championnat de France)</li>
                    <li>Tournoi des Six Nations</li>
                    <li>Coupe du Monde de Rugby</li>
                    <li>Champions Cup</li>
                    <li>Rugby Championship</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-slate-900">Règles Essentielles</h3>
                  <ul className="list-disc list-inside space-y-1 ml-4">
                    <li>Essai : 5 points (aplatir le ballon dans l'en-but adverse)</li>
                    <li>Transformation : 2 points (coup de pied après essai)</li>
                    <li>Pénalité : 3 points</li>
                    <li>Passes uniquement vers l'arrière ou latérales</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Courses Hippiques */}
            <section className="bg-white rounded-lg shadow-md p-8 border border-slate-200">
              <h2 className="text-3xl font-bold mb-4 text-blue-600">Courses Hippiques</h2>
              <div className="space-y-4 text-slate-700">
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-slate-900">Présentation</h3>
                  <p className="leading-relaxed">
                    Les courses hippiques sont des compétitions de vitesse entre chevaux montés par des jockeys. Il
                    existe trois types principaux : le plat, le trot et l'obstacle (steeple-chase et haies).
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-slate-900">Courses Majeures</h3>
                  <ul className="list-disc list-inside space-y-1 ml-4">
                    <li>Prix de l'Arc de Triomphe (Longchamp)</li>
                    <li>Prix d'Amérique (Vincennes)</li>
                    <li>Grand Steeple-Chase de Paris (Auteuil)</li>
                    <li>Prix du Jockey Club</li>
                    <li>Prix de Diane</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-slate-900">Types de Paris</h3>
                  <ul className="list-disc list-inside space-y-1 ml-4">
                    <li>Simple : parier sur le cheval gagnant</li>
                    <li>Couplé : trouver les 2 premiers chevaux</li>
                    <li>Tiercé : trouver les 3 premiers dans l'ordre</li>
                    <li>Quarté+ : trouver les 4 premiers</li>
                    <li>Quinté+ : trouver les 5 premiers</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Handball */}
            <section className="bg-white rounded-lg shadow-md p-8 border border-slate-200">
              <h2 className="text-3xl font-bold mb-4 text-blue-600">Handball</h2>
              <div className="space-y-4 text-slate-700">
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-slate-900">Présentation</h3>
                  <p className="leading-relaxed">
                    Le handball oppose deux équipes de 7 joueurs (6 joueurs de champ + 1 gardien) qui tentent de marquer
                    des buts en lançant le ballon dans le but adverse. Le match dure 60 minutes (2 mi-temps de 30
                    minutes).
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-slate-900">Tournois Majeurs</h3>
                  <ul className="list-disc list-inside space-y-1 ml-4">
                    <li>Championnat de France (Liqui Moly Starligue)</li>
                    <li>Ligue des Champions EHF</li>
                    <li>Championnat du Monde</li>
                    <li>Championnat d'Europe</li>
                    <li>Jeux Olympiques</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-slate-900">Règles Essentielles</h3>
                  <ul className="list-disc list-inside space-y-1 ml-4">
                    <li>3 pas maximum avec le ballon sans dribbler</li>
                    <li>Zone des 6 mètres réservée au gardien</li>
                    <li>Jet de 7 mètres (penalty) pour faute grave</li>
                    <li>Carton jaune, 2 minutes d'exclusion, carton rouge</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Cyclisme */}
            <section className="bg-white rounded-lg shadow-md p-8 border border-slate-200">
              <h2 className="text-3xl font-bold mb-4 text-blue-600">Cyclisme</h2>
              <div className="space-y-4 text-slate-700">
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-slate-900">Présentation</h3>
                  <p className="leading-relaxed">
                    Le cyclisme sur route comprend des courses individuelles et par équipes sur différentes distances et
                    terrains. Les coureurs s'affrontent sur des étapes plates, vallonnées ou montagneuses.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-slate-900">Courses Majeures</h3>
                  <ul className="list-disc list-inside space-y-1 ml-4">
                    <li>Tour de France (Grand Tour)</li>
                    <li>Paris-Roubaix (Monument)</li>
                    <li>Giro d'Italia</li>
                    <li>Vuelta a España</li>
                    <li>Championnats du Monde</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-slate-900">Classifications</h3>
                  <ul className="list-disc list-inside space-y-1 ml-4">
                    <li>Maillot jaune : classement général au temps</li>
                    <li>Maillot vert : classement par points (sprints)</li>
                    <li>Maillot à pois : meilleur grimpeur</li>
                    <li>Maillot blanc : meilleur jeune (moins de 26 ans)</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Avertissement */}
            <section className="bg-red-50 rounded-lg p-8 border border-red-200">
              <h2 className="text-2xl font-bold mb-4 text-red-800">Jeu Responsable</h2>
              <p className="text-slate-700 leading-relaxed mb-4">
                La connaissance des sports et de leurs règles peut améliorer votre compréhension des paris sportifs,
                mais rappelez-vous que les paris comportent des risques. Pariez uniquement ce que vous pouvez vous
                permettre de perdre.
              </p>
              <div className="text-slate-700">
                <p className="font-semibold mb-2">Besoin d'aide ?</p>
                <p>Ligne d'écoute : 09 74 75 13 13</p>
                <p>Site web : www.joueurs-info-service.fr</p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </>
  )
}
