import { Header } from "@/components/header"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Politique des Cookies - Meilleurs Sites de Paris Sportifs en France",
  description:
    "Découvrez comment nous utilisons les cookies pour améliorer votre expérience sur notre plateforme de comparaison de sites de paris sportifs. 18+ - Jouez responsable.",
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "/cookie-policy",
  },
}

export default function CookiePolicyPage() {
  return (
    <>
      <Header />
      <div className="min-h-screen bg-background py-12 md:py-16">
        <div className="container mx-auto max-w-4xl px-4">
          <div className="bg-white rounded-lg shadow-lg p-6 md:p-10">
            <h1 className="text-3xl md:text-4xl font-bold mb-6 text-foreground border-b-4 border-accent pb-4">
              Politique des Cookies
            </h1>

            <div className="space-y-8 text-foreground">
              <section>
                <h2 className="text-2xl font-bold mb-4 text-primary">Qu'est-ce qu'un Cookie ?</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Un cookie est un petit fichier texte stocké sur votre appareil (ordinateur, tablette ou smartphone)
                  lorsque vous visitez un site web. Les cookies permettent au site de mémoriser vos actions et
                  préférences (comme la langue, la taille de police et autres préférences d'affichage) pendant une
                  période donnée, afin que vous n'ayez pas à les ressaisir à chaque fois que vous revenez sur le site ou
                  naviguez d'une page à l'autre.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4 text-primary">Comment nous utilisons les Cookies</h2>
                <div className="space-y-4">
                  <div className="bg-muted/30 p-4 rounded-lg border-l-4 border-accent">
                    <h3 className="font-bold text-lg mb-2">Cookies Essentiels</h3>
                    <p className="text-muted-foreground">
                      Ces cookies sont nécessaires au fonctionnement du site et ne peuvent pas être désactivés. Ils
                      permettent la navigation de base et l'accès aux zones sécurisées du site.
                    </p>
                  </div>
                  <div className="bg-muted/30 p-4 rounded-lg border-l-4 border-primary">
                    <h3 className="font-bold text-lg mb-2">Cookies Analytiques</h3>
                    <p className="text-muted-foreground">
                      Ces cookies nous aident à comprendre comment les visiteurs interagissent avec notre site en
                      collectant et en rapportant des informations de manière anonyme. Cela nous permet d'améliorer
                      continuellement notre service.
                    </p>
                  </div>
                  <div className="bg-muted/30 p-4 rounded-lg border-l-4 border-secondary">
                    <h3 className="font-bold text-lg mb-2">Cookies de Personnalisation</h3>
                    <p className="text-muted-foreground">
                      Ces cookies permettent au site de mémoriser vos choix (comme votre nom d'utilisateur, votre langue
                      ou la région où vous vous trouvez) et de fournir des fonctionnalités améliorées et plus
                      personnelles.
                    </p>
                  </div>
                  <div className="bg-muted/30 p-4 rounded-lg border-l-4 border-accent">
                    <h3 className="font-bold text-lg mb-2">Cookies de Sécurité</h3>
                    <p className="text-muted-foreground">
                      Ces cookies aident à protéger votre navigation en détectant et en prévenant les activités
                      frauduleuses ou malveillantes.
                    </p>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4 text-primary">Types de Cookies utilisés</h2>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="border-2 border-muted p-4 rounded-lg">
                    <h4 className="font-bold text-lg mb-2 text-accent">Cookies de Session</h4>
                    <p className="text-muted-foreground text-sm">
                      Temporaires et supprimés automatiquement lorsque vous fermez votre navigateur. Ils permettent de
                      maintenir votre session active pendant votre visite.
                    </p>
                  </div>
                  <div className="border-2 border-muted p-4 rounded-lg">
                    <h4 className="font-bold text-lg mb-2 text-accent">Cookies Persistants</h4>
                    <p className="text-muted-foreground text-sm">
                      Restent sur votre appareil pendant une durée déterminée (jusqu'à 12 mois maximum). Ils nous aident
                      à vous reconnaître lors de vos visites ultérieures.
                    </p>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4 text-primary">Gestion et Contrôle des Cookies</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Vous avez le contrôle total sur l'utilisation des cookies. Vous pouvez :
                </p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                  <li>Accepter ou refuser les cookies via notre bannière de consentement</li>
                  <li>Configurer votre navigateur pour bloquer ou supprimer les cookies</li>
                  <li>Supprimer tous les cookies déjà présents sur votre appareil</li>
                  <li>Modifier vos préférences à tout moment</li>
                </ul>
                <div className="bg-amber-50 border-l-4 border-amber-500 p-4 mt-4 rounded">
                  <p className="text-sm text-amber-900">
                    <strong>Attention :</strong> Le blocage de certains cookies peut affecter le fonctionnement du site
                    et limiter votre accès à certaines fonctionnalités.
                  </p>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4 text-primary">Cookies Tiers</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Notre site peut utiliser des services tiers (comme Google Analytics, services de publicité, etc.) qui
                  placent également des cookies sur votre appareil. Ces cookies sont régis par les politiques de
                  confidentialité respectives de ces tiers. Nous vous encourageons à consulter leurs politiques pour
                  comprendre comment ils utilisent vos données.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4 text-primary">Mises à Jour de cette Politique</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Nous pouvons mettre à jour cette politique des cookies de temps en temps pour refléter les changements
                  dans nos pratiques ou pour d'autres raisons opérationnelles, légales ou réglementaires. Nous vous
                  encourageons à consulter régulièrement cette page.
                </p>
                <p className="text-sm text-muted-foreground mt-2">
                  <strong>Dernière mise à jour :</strong> {new Date().toLocaleDateString("fr-FR")}
                </p>
              </section>

              <section className="bg-primary/5 p-6 rounded-lg border-2 border-primary">
                <h2 className="text-2xl font-bold mb-4 text-primary">Contact</h2>
                <p className="text-muted-foreground leading-relaxed mb-3">
                  Pour toute question concernant notre utilisation des cookies ou pour exercer vos droits, n'hésitez pas
                  à nous contacter :
                </p>
                <div className="space-y-2 text-muted-foreground">
                  <p>
                    <strong>Email :</strong>{" "}
                    <a href="mailto:cookies@sportenfr.com" className="text-primary hover:underline">
                      cookies@sportenfr.com
                    </a>
                  </p>
                </div>
              </section>

              <section className="bg-red-50 border-2 border-secondary p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-3 text-secondary">Jeu Responsable - 18+</h3>
                <p className="text-sm text-muted-foreground">
                  Les paris sportifs sont réservés aux personnes majeures. Jouez de manière responsable. Si vous ou
                  quelqu'un que vous connaissez avez un problème avec le jeu, contactez Joueurs Info Service au 09 74 75
                  13 13 (appel non surtaxé).
                </p>
              </section>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
