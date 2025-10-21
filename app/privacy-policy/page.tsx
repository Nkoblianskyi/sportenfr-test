import { Header } from "@/components/header"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Politique de Confidentialité - Meilleurs Sites de Paris Sportifs en France",
  description:
    "Découvrez comment nous protégeons vos données personnelles et respectons votre vie privée sur notre plateforme de comparaison de sites de paris sportifs. 18+ - Jouez responsable.",
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "/privacy-policy",
  },
}

export default function PrivacyPolicyPage() {
  return (
    <>
      <Header />
      <div className="min-h-screen bg-background py-12 md:py-16">
        <div className="container mx-auto max-w-4xl px-4">
          <div className="bg-white rounded-lg shadow-lg p-6 md:p-10">
            <h1 className="text-3xl md:text-4xl font-bold mb-6 text-foreground border-b-4 border-accent pb-4">
              Politique de Confidentialité
            </h1>

            <div className="space-y-8 text-foreground">
              <section className="bg-primary/5 p-6 rounded-lg border-l-4 border-primary">
                <p className="text-muted-foreground leading-relaxed">
                  Chez <strong>sportenfr</strong>, nous prenons très au sérieux la protection de vos données
                  personnelles et le respect de votre vie privée. Cette politique de confidentialité explique comment
                  nous collectons, utilisons, partageons et protégeons vos informations personnelles conformément au
                  Règlement Général sur la Protection des Données (RGPD).
                </p>
                <p className="text-sm text-muted-foreground mt-3">
                  <strong>Dernière mise à jour :</strong> {new Date().toLocaleDateString("fr-FR")}
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4 text-primary">1. Responsable du Traitement</h2>
                <div className="bg-muted/30 p-4 rounded-lg">
                  <p className="text-muted-foreground leading-relaxed">
                    Le responsable du traitement de vos données personnelles est notre plateforme de comparaison de
                    sites de paris sportifs. Pour toute question concernant vos données, vous pouvez nous contacter à
                    l'adresse : <strong>privacy@sportenfr.com</strong>
                  </p>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4 text-primary">2. Données Collectées</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Nous collectons différents types d'informations dans le cadre de nos services :
                </p>
                <div className="space-y-3">
                  <div className="border-l-4 border-accent pl-4">
                    <h3 className="font-bold mb-2">Informations que vous nous fournissez</h3>
                    <ul className="list-disc list-inside space-y-1 text-muted-foreground text-sm ml-4">
                      <li>Nom et prénom (si vous nous contactez)</li>
                      <li>Adresse email</li>
                      <li>Messages et communications que vous nous envoyez</li>
                      <li>Préférences de cookies et consentements</li>
                    </ul>
                  </div>
                  <div className="border-l-4 border-primary pl-4">
                    <h3 className="font-bold mb-2">Informations collectées automatiquement</h3>
                    <ul className="list-disc list-inside space-y-1 text-muted-foreground text-sm ml-4">
                      <li>Adresse IP et données de connexion</li>
                      <li>Type de navigateur et système d'exploitation</li>
                      <li>Pages visitées et durée de visite</li>
                      <li>Données de navigation et d'utilisation du site</li>
                      <li>Cookies et technologies similaires</li>
                    </ul>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4 text-primary">3. Finalités du Traitement</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Nous utilisons vos données personnelles pour les finalités suivantes :
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-muted/30 p-4 rounded-lg">
                    <h4 className="font-bold mb-2 text-accent">Fourniture des Services</h4>
                    <p className="text-sm text-muted-foreground">
                      Afficher les comparatifs de sites de paris, gérer vos préférences et améliorer votre expérience
                      utilisateur.
                    </p>
                  </div>
                  <div className="bg-muted/30 p-4 rounded-lg">
                    <h4 className="font-bold mb-2 text-accent">Analyses et Statistiques</h4>
                    <p className="text-sm text-muted-foreground">
                      Analyser le trafic du site, comprendre comment les utilisateurs interagissent avec notre
                      plateforme.
                    </p>
                  </div>
                  <div className="bg-muted/30 p-4 rounded-lg">
                    <h4 className="font-bold mb-2 text-accent">Communication</h4>
                    <p className="text-sm text-muted-foreground">
                      Répondre à vos questions, traiter vos demandes et vous envoyer des informations importantes.
                    </p>
                  </div>
                  <div className="bg-muted/30 p-4 rounded-lg">
                    <h4 className="font-bold mb-2 text-accent">Sécurité</h4>
                    <p className="text-sm text-muted-foreground">
                      Protéger notre site contre la fraude, les abus et garantir la sécurité de nos utilisateurs.
                    </p>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4 text-primary">4. Base Légale du Traitement</h2>
                <p className="text-muted-foreground leading-relaxed mb-3">
                  Conformément au RGPD, nous traitons vos données sur les bases légales suivantes :
                </p>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="text-accent font-bold">•</span>
                    <span>
                      <strong>Consentement :</strong> Pour les cookies non essentiels et les communications marketing
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent font-bold">•</span>
                    <span>
                      <strong>Intérêt légitime :</strong> Pour l'analyse du trafic et l'amélioration de nos services
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent font-bold">•</span>
                    <span>
                      <strong>Obligation légale :</strong> Pour respecter nos obligations légales et réglementaires
                    </span>
                  </li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4 text-primary">5. Partage des Données</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Nous ne vendons jamais vos données personnelles. Nous pouvons partager vos informations uniquement
                  dans les cas suivants :
                </p>
                <div className="space-y-3">
                  <div className="bg-blue-50 border-l-4 border-primary p-4 rounded">
                    <h4 className="font-bold mb-2">Prestataires de Services</h4>
                    <p className="text-sm text-muted-foreground">
                      Avec des prestataires tiers qui nous aident à fournir nos services (hébergement, analytics,
                      support client), sous contrat strict de confidentialité.
                    </p>
                  </div>
                  <div className="bg-blue-50 border-l-4 border-primary p-4 rounded">
                    <h4 className="font-bold mb-2">Obligations Légales</h4>
                    <p className="text-sm text-muted-foreground">
                      Lorsque la loi l'exige ou pour protéger nos droits, notre propriété ou la sécurité de nos
                      utilisateurs.
                    </p>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4 text-primary">6. Durée de Conservation</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Nous conservons vos données personnelles uniquement pendant la durée nécessaire aux finalités pour
                  lesquelles elles ont été collectées :
                </p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground mt-3 ml-4">
                  <li>Données de navigation : jusqu'à 13 mois</li>
                  <li>Cookies : selon les durées définies dans notre politique des cookies</li>
                  <li>Données de contact : jusqu'à 3 ans après le dernier contact</li>
                  <li>Données légales : selon les obligations légales applicables</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4 text-primary">7. Vos Droits (RGPD)</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Conformément au RGPD, vous disposez des droits suivants concernant vos données personnelles :
                </p>
                <div className="grid md:grid-cols-2 gap-3">
                  <div className="border-2 border-muted p-3 rounded-lg">
                    <h4 className="font-bold text-sm mb-1">Droit d'Accès</h4>
                    <p className="text-xs text-muted-foreground">Obtenir une copie de vos données</p>
                  </div>
                  <div className="border-2 border-muted p-3 rounded-lg">
                    <h4 className="font-bold text-sm mb-1">Droit de Rectification</h4>
                    <p className="text-xs text-muted-foreground">Corriger vos données inexactes</p>
                  </div>
                  <div className="border-2 border-muted p-3 rounded-lg">
                    <h4 className="font-bold text-sm mb-1">Droit à l'Effacement</h4>
                    <p className="text-xs text-muted-foreground">Supprimer vos données</p>
                  </div>
                  <div className="border-2 border-muted p-3 rounded-lg">
                    <h4 className="font-bold text-sm mb-1">Droit de Limitation</h4>
                    <p className="text-xs text-muted-foreground">Limiter le traitement de vos données</p>
                  </div>
                  <div className="border-2 border-muted p-3 rounded-lg">
                    <h4 className="font-bold text-sm mb-1">Droit à la Portabilité</h4>
                    <p className="text-xs text-muted-foreground">Recevoir vos données dans un format structuré</p>
                  </div>
                  <div className="border-2 border-muted p-3 rounded-lg">
                    <h4 className="font-bold text-sm mb-1">Droit d'Opposition</h4>
                    <p className="text-xs text-muted-foreground">Vous opposer au traitement de vos données</p>
                  </div>
                </div>
                <div className="bg-accent/10 border-l-4 border-accent p-4 mt-4 rounded">
                  <p className="text-sm text-muted-foreground">
                    <strong>Pour exercer vos droits :</strong> Contactez-nous à{" "}
                    <a href="mailto:privacy@sportenfr.com" className="text-primary hover:underline">
                      privacy@sportenfr.com
                    </a>{" "}
                    ou via notre{" "}
                    <a href="/contact" className="text-primary hover:underline">
                      formulaire de contact
                    </a>
                    . Nous répondrons dans un délai d'un mois.
                  </p>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4 text-primary">8. Sécurité des Données</h2>
                <p className="text-muted-foreground leading-relaxed mb-3">
                  Nous mettons en œuvre des mesures techniques et organisationnelles appropriées pour protéger vos
                  données personnelles contre :
                </p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                  <li>L'accès non autorisé ou illégal</li>
                  <li>La perte, la destruction ou les dommages accidentels</li>
                  <li>La divulgation ou l'utilisation non autorisée</li>
                </ul>
                <p className="text-sm text-muted-foreground mt-3">
                  Nos mesures incluent le chiffrement SSL/TLS, des contrôles d'accès stricts, des audits de sécurité
                  réguliers et la formation de notre personnel.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4 text-primary">9. Transferts Internationaux</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Vos données sont principalement stockées et traitées au sein de l'Union Européenne. Si un transfert
                  hors UE est nécessaire, nous nous assurons que des garanties appropriées sont en place (clauses
                  contractuelles types, décisions d'adéquation, etc.).
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4 text-primary">10. Modifications de cette Politique</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Nous pouvons mettre à jour cette politique de confidentialité périodiquement pour refléter les
                  changements dans nos pratiques ou pour des raisons légales. Nous vous informerons de tout changement
                  important via notre site web. Nous vous encourageons à consulter régulièrement cette page.
                </p>
              </section>

              <section className="bg-primary/5 p-6 rounded-lg border-2 border-primary">
                <h2 className="text-2xl font-bold mb-4 text-primary">11. Contact et Réclamations</h2>
                <div className="space-y-3 text-muted-foreground">
                  <p className="leading-relaxed">
                    Pour toute question concernant cette politique de confidentialité ou pour exercer vos droits :
                  </p>
                  <div className="space-y-2">
                    <p>
                      <strong>Email :</strong>{" "}
                      <a href="mailto:privacy@sportenfr.com" className="text-primary hover:underline">
                        privacy@sportenfr.com
                      </a>
                    </p>
                  </div>
                  <div className="bg-white p-4 rounded border-2 border-muted mt-4">
                    <p className="text-sm">
                      <strong>Droit de réclamation :</strong> Si vous estimez que vos droits ne sont pas respectés, vous
                      avez le droit de déposer une réclamation auprès de la Commission Nationale de l'Informatique et
                      des Libertés (CNIL) :{" "}
                      <a
                        href="https://www.cnil.fr"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary hover:underline"
                      >
                        www.cnil.fr
                      </a>
                    </p>
                  </div>
                </div>
              </section>

              <section className="bg-red-50 border-2 border-secondary p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-3 text-secondary">Jeu Responsable - 18+</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Les paris sportifs sont strictement réservés aux personnes majeures (18 ans et plus). Nous
                  encourageons le jeu responsable. Si vous ou quelqu'un que vous connaissez rencontrez des difficultés
                  avec le jeu, n'hésitez pas à contacter <strong>Joueurs Info Service</strong> au{" "}
                  <strong className="text-secondary">09 74 75 13 13</strong> (appel non surtaxé) ou à consulter{" "}
                  <a
                    href="https://www.joueurs-info-service.fr"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:underline"
                  >
                    www.joueurs-info-service.fr
                  </a>
                </p>
              </section>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
