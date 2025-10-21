import Image from "next/image"


export function Hero() {
  const currentDate = new Date()
  const formattedDate = currentDate.toLocaleDateString("fr-FR", {
    year: "numeric",
    month: "long",
    day: "numeric",
  })

  return (
    <section className="-mx-4 md:mx-0 md:relative mt-">
      <div className="md:rounded-lg overflow-hidden">
        <div
          className="py-8 md:py-12 flex items-center relative 
                     bg-[url('/sports-hero-mobile.jpg')] bg-cover bg-[center_30%] bg-no-repeat 
                     min-h-[255px] md:min-h-[300px]
                     md:bg-none md:bg-black/70 "
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/70 md:hidden" />

          <div className="w-full text-center relative z-10 px-4 pt-2">
            <h1 className="text-xl md:text-4xl font-bold mb-3 md:mb-4">
              <span className="text-blue-400">MEILLEURS</span> <span className="text-white">SITES DE</span>{" "}
              <span className="text-yellow-400">PARIS</span> <span className="text-red-500">SPORTIFS</span>{" "}
              <span className="text-white">EN FRANCE</span>
            </h1>

            <div className="text-slate-200 mb-4 md:mb-6 text-xs md:text-sm font-medium">
              Dernière mise à jour : {formattedDate}
            </div>

            <p className="hidden md:block text-sm md:text-base text-slate-300 max-w-4xl mx-auto leading-relaxed mb-6">
              Comparatif indépendant et objectif des meilleurs bookmakers légaux en France. Tous les sites présentés
              sont licenciés ANJ et vérifiés par nos experts. Nous analysons en détail les bonus, les cotes, la sécurité
              des transactions et la qualité du service client pour vous garantir une expérience de paris optimale.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-2 md:gap-4 text-xs md:text-sm">
              <div className="flex items-center space-x-2 bg-blue-600/80 backdrop-blur-sm px-3 py-1.5 rounded-full border border-blue-400/30">
                <Image src="/flag.png" alt="Logo" width={16} height={16} className="w-4 h-4" />
                <span className="text-white font-semibold">LICENCE ANJ</span>
              </div>

              <div className="flex items-center space-x-2 bg-green-600/80 backdrop-blur-sm px-3 py-1.5 rounded-full border border-green-400/30">
                <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fillRule="evenodd"
                    d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="text-white font-semibold">SITES VÉRIFIÉS</span>
              </div>

              <div className="flex items-center space-x-2 bg-yellow-600/80 backdrop-blur-sm px-3 py-1.5 rounded-full border border-yellow-400/30">
                <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <span className="text-white font-semibold">AVIS EXPERTS</span>
              </div>

              <div className="bg-red-600/80 backdrop-blur-sm px-3 py-1.5 rounded-full border border-red-400/30">
                <span className="text-white font-bold">18+</span>
              </div>
            </div>

            {/* SEO Hidden Content */}
            <div className="sr-only">
              <p>
                Comparateur indépendant de sites de paris sportifs en France. 18+ - Jeu responsable. Liens affiliés
                présents.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
