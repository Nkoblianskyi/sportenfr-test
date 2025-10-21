import Link from "next/link"
import Image from "next/image"

export function Footer() {
  return (
    <footer className="bg-gradient-to-b from-slate-50 to-white border-t border-slate-200">
      <div className="container mx-auto max-w-[1200px] px-4 py-12 md:py-16">
        {/* Mobile Layout */}
        <div className="block md:hidden space-y-8">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-3 mb-4">
              <div className="w-14 h-14 bg-gradient-to-br from-blue-600 to-blue-700 rounded-xl flex items-center justify-center shadow-lg">
                <Image src="/favicon.ico" alt="Logo" width={40} height={40} />
              </div>
              <h2 className="font-bold text-xl text-slate-900">SPORTENFR</h2>
            </div>
            <p className="text-slate-600 text-sm max-w-sm mx-auto">
              Comparateur indépendant de sites de paris sportifs en France
            </p>
          </div>

          <div className="bg-blue-50 border-l-4 border-blue-600 p-4 rounded text-left">
            <p className="text-xs text-slate-700 leading-relaxed">
              <strong className="text-blue-900">Avertissement :</strong> Ce site contient des liens affiliés. Nous
              pouvons recevoir une commission si vous vous inscrivez via nos liens, sans frais supplémentaires pour
              vous. Nous sommes un comparateur indépendant, pas un opérateur de paris.
            </p>
          </div>

          <div className="flex items-center justify-center gap-4 bg-gradient-to-br from-red-50 to-red-100 rounded-2xl p-5 border-2 border-red-200 shadow-sm">
            <div className="w-16 h-16 bg-gradient-to-br from-red-600 to-red-700 rounded-full flex items-center justify-center border-4 border-white shadow-lg flex-shrink-0">
              <span className="text-white font-bold text-xl">18+</span>
            </div>
            <div className="text-slate-700 text-sm">
              <p className="font-bold text-red-700 mb-1">Jeu responsable et sécurisé</p>
              <p className="text-slate-600">Interdit aux mineurs</p>
            </div>
          </div>

          <div className="flex flex-col gap-3 bg-white rounded-xl p-5 border border-slate-200 shadow-sm">
            <h3 className="text-slate-900 font-bold text-sm uppercase tracking-wider mb-1">Navigation</h3>
            <Link href="/" className="text-blue-600 hover:text-blue-700 font-medium transition-colors text-sm py-1">
              Accueil
            </Link>
            <Link
              href="/sports"
              className="text-blue-600 hover:text-blue-700 font-medium transition-colors text-sm py-1"
            >
              Sports
            </Link>
          </div>

          <div className="flex flex-col gap-3 bg-white rounded-xl p-5 border border-slate-200 shadow-sm">
            <h3 className="text-slate-900 font-bold text-sm uppercase tracking-wider mb-1">Informations légales</h3>
            <Link
              href="/privacy-policy"
              className="text-blue-600 hover:text-blue-700 font-medium transition-colors text-sm py-1"
            >
              Politique de confidentialité
            </Link>
            <Link
              href="/cookie-policy"
              className="text-blue-600 hover:text-blue-700 font-medium transition-colors text-sm py-1"
            >
              Politique des cookies
            </Link>
          </div>
        </div>

        {/* Desktop Layout */}
        <div className="hidden md:block">
          <div className="flex justify-between items-start mb-12 pb-8 border-b border-slate-200">
            {/* Logo et Description */}
            <div className="max-w-md">
              <div className="flex items-center space-x-4 mb-4">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-blue-700 rounded-xl flex items-center justify-center shadow-lg">
                  <Image src="/favicon.ico" alt="Logo" width={44} height={44} />
                </div>
                <div>
                  <h2 className="font-bold text-2xl mb-1 text-slate-900">SPORTENFR</h2>
                  <p className="text-slate-500 text-xs uppercase tracking-wide">Comparateur indépendant</p>
                </div>
              </div>
              <p className="text-slate-600 text-sm leading-relaxed mb-4">
                Trouvez les meilleurs sites de paris sportifs en France avec nos analyses détaillées et comparaisons
                objectives.
              </p>
              <div className="bg-blue-50 border-l-4 border-blue-600 p-3 rounded">
                <p className="text-xs text-slate-700 leading-relaxed">
                  <strong className="text-blue-900">Liens affiliés :</strong> Nous pouvons recevoir une commission si
                  vous vous inscrivez via nos liens, sans frais supplémentaires pour vous.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 border border-slate-200 shadow-sm">
              <h3 className="text-slate-900 font-bold text-sm uppercase tracking-wider mb-4 pb-2 border-b border-slate-200">
                Navigation
              </h3>
              <div className="flex flex-col gap-3">
                <Link
                  href="/"
                  className="text-blue-600 hover:text-blue-700 font-medium transition-colors text-sm flex items-center gap-2 group"
                >
                  <span className="w-1.5 h-1.5 bg-blue-600 rounded-full group-hover:scale-125 transition-transform"></span>
                  Accueil
                </Link>
                <Link
                  href="/sports"
                  className="text-blue-600 hover:text-blue-700 font-medium transition-colors text-sm flex items-center gap-2 group"
                >
                  <span className="w-1.5 h-1.5 bg-blue-600 rounded-full group-hover:scale-125 transition-transform"></span>
                  Sports
                </Link>
              </div>
            </div>

            {/* Navigation Desktop */}
            <div className="bg-white rounded-xl p-6 border border-slate-200 shadow-sm">
              <h3 className="text-slate-900 font-bold text-sm uppercase tracking-wider mb-4 pb-2 border-b border-slate-200">
                Informations légales
              </h3>
              <div className="flex flex-col gap-3">
                <Link
                  href="/privacy-policy"
                  className="text-blue-600 hover:text-blue-700 font-medium transition-colors text-sm flex items-center gap-2 group"
                >
                  <span className="w-1.5 h-1.5 bg-blue-600 rounded-full group-hover:scale-125 transition-transform"></span>
                  Politique de confidentialité
                </Link>
                <Link
                  href="/cookie-policy"
                  className="text-blue-600 hover:text-blue-700 font-medium transition-colors text-sm flex items-center gap-2 group"
                >
                  <span className="w-1.5 h-1.5 bg-blue-600 rounded-full group-hover:scale-125 transition-transform"></span>
                  Politique des cookies
                </Link>
              </div>
            </div>

            <div className="flex items-center gap-4 bg-gradient-to-br from-red-50 to-red-100 rounded-2xl p-6 border-2 border-red-200 shadow-md">
              <div className="w-20 h-20 bg-gradient-to-br from-red-600 to-red-700 rounded-full flex items-center justify-center border-4 border-white shadow-lg flex-shrink-0">
                <span className="text-white font-bold text-2xl">18+</span>
              </div>
              <div className="text-slate-700">
                <p className="font-bold text-red-700 text-base mb-1">Jeu responsable</p>
                <p className="text-slate-600 text-sm">Interdit aux mineurs</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8">
          <div className="text-center mb-8">
            <h4 className="text-slate-900 font-bold text-lg mb-2">Organismes de Protection et de Régulation</h4>
            <p className="text-slate-600 text-sm">Partenaires officiels pour un jeu sûr et responsable</p>
          </div>
          <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
            <Link
              href="https://anj.fr"
              target="_blank"
              className="bg-black hover:bg-blue-50 rounded-xl p-5 flex items-center justify-center transition-all border-2 border-slate-200 hover:border-blue-400 hover:shadow-md group"
            >
              <img
                src="/logo-anj.svg"
                alt="ANJ - Autorité Nationale des Jeux"
                className="h-10 md:h-12 w-auto object-contain group-hover:scale-105 transition-transform"
              />
            </Link>

            <Link
              href="https://www.joueurs-info-service.fr"
              target="_blank"
              className="bg-black hover:bg-blue-50 rounded-xl p-5 flex items-center justify-center transition-all border-2 border-slate-200 hover:border-blue-400 hover:shadow-md group"
            >
              <img
                src="/jouers-info-service.png"
                alt="Joueurs Info Service"
                className="h-10 md:h-12 w-auto object-contain group-hover:scale-105 transition-transform"
              />
            </Link>

            <Link
              href="https://www.gambleaware.org"
              target="_blank"
              className="bg-white hover:bg-blue-50 rounded-xl p-5 flex items-center justify-center transition-all border-2 border-slate-200 hover:border-blue-400 hover:shadow-md group"
            >
              <img
                src="/gamble.webp"
                alt="GambleAware"
                className="h-10 md:h-12 w-auto object-contain group-hover:scale-105 transition-transform"
              />
            </Link>

            <Link
              href="https://www.gamcare.org.uk"
              target="_blank"
              className="bg-white hover:bg-blue-50 rounded-xl p-5 flex items-center justify-center transition-all border-2 border-slate-200 hover:border-blue-400 hover:shadow-md group"
            >
              <img
                src="/gamecare.svg"
                alt="GamCare"
                className="h-10 md:h-12 w-auto object-contain group-hover:scale-105 transition-transform"
              />
            </Link>

            <Link
              href="https://www.gamstop.co.uk"
              target="_blank"
              className="bg-white hover:bg-blue-50 rounded-xl p-5 flex items-center justify-center transition-all border-2 border-slate-200 hover:border-blue-400 hover:shadow-md group"
            >
              <img
                src="/logo-gamstop.svg"
                alt="GAMSTOP"
                className="h-10 md:h-12 w-auto object-contain group-hover:scale-105 transition-transform"
              />
            </Link>

            <Link
              href="https://www.sos-joueurs.org"
              target="_blank"
              className="bg-black hover:bg-blue-50 rounded-xl p-5 flex items-center justify-center transition-all border-2 border-slate-200 hover:border-blue-400 hover:shadow-md group"
            >
              <img
                src="/logo-sos-joueurs.svg"
                alt="SOS Joueurs"
                className="h-10 md:h-12 w-auto object-contain group-hover:scale-105 transition-transform"
              />
            </Link>

            <Link
              href="https://www.mediateur-jeux.fr"
              target="_blank"
              className="bg-black hover:bg-blue-50 rounded-xl p-5 flex items-center justify-center transition-all border-2 border-slate-200 hover:border-blue-400 hover:shadow-md group"
            >
              <img
                src="/logo-mediateurs-des-jeux.png"
                alt="Médiateur des Jeux"
                className="h-10 md:h-12 w-auto object-contain group-hover:scale-105 transition-transform"
              />
            </Link>

            <Link
              href="https://www.adictel.eu"
              target="_blank"
              className="bg-white hover:bg-blue-50 rounded-xl p-5 flex items-center justify-center transition-all border-2 border-slate-200 hover:border-blue-400 hover:shadow-md group"
            >
              <img
                src="/logo-adictel.svg"
                alt="ADICTEL"
                className="h-10 md:h-12 w-auto object-contain group-hover:scale-105 transition-transform"
              />
            </Link>

            <div className="bg-white rounded-xl p-5 flex items-center justify-center border-2 border-slate-200">
              <img src="/icn-ssl.svg" alt="SSL Sécurisé" className="h-10 md:h-12 w-auto object-contain" />
            </div>
          </div>
        </div>

        <div className="border-t-2 border-slate-200 mt-12 pt-8 text-center">
          <p className="font-bold text-slate-900 text-base mb-2">&copy; 2025 sportenfr.com</p>
          <p className="text-slate-600 text-sm">
            Tous droits réservés • Comparateur indépendant de sites de paris sportifs en France
          </p>
        </div>
      </div>
    </footer>
  )
}
