"use client"

import { useState, useEffect } from "react"
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { AlertTriangle, Shield, Phone, CheckCircle2 } from "lucide-react"

export function AgeVerificationModal() {
  const [isOpen, setIsOpen] = useState(false)
  const [showRestrictionWarning, setShowRestrictionWarning] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      const ageVerified = localStorage.getItem("ageVerified-new-modal")
      if (!ageVerified || ageVerified !== "true") {
        setIsOpen(true)
      }
    }, 500)

    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    if (isOpen || showRestrictionWarning) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = ""
    }

    return () => {
      document.body.style.overflow = ""
    }
  }, [isOpen, showRestrictionWarning])

  const handleConfirmAge = () => {
    localStorage.setItem("ageVerified-new-modal", "true")
    setIsOpen(false)
  }

  const handleRejectAge = () => {
    setIsOpen(false)
    setShowRestrictionWarning(true)
  }

  const handleCloseRestriction = () => {
    setShowRestrictionWarning(false)
    window.location.href = "https://www.joueurs-info-service.fr"
  }

  return (
    <>
      <style jsx global>{`
        [data-radix-dialog-overlay] {
          position: fixed !important;
          inset: 0 !important;
          z-index: 50 !important;
          background-color: rgba(0, 0, 0, 0.85) !important;
        }
        
        [data-radix-dialog-content] {
          position: fixed !important;
          left: 50% !important;
          top: 50% !important;
          transform: translate(-50%, -50%) !important;
          z-index: 51 !important;
          max-height: 90vh !important;
          width: 90vw !important;
          max-width: 500px !important;
          overflow: hidden !important;
        }

        [data-radix-dialog-content] button[aria-label="Close"] {
          display: none !important;
        }

        @media (max-width: 640px) {
          [data-radix-dialog-content] {
            width: 92vw !important;
            max-height: 85vh !important;
          }
        }
      `}</style>

      <Dialog open={isOpen} onOpenChange={() => {}} modal>
        <DialogContent className="bg-gradient-to-br from-slate-50 to-white border-none shadow-2xl rounded-2xl p-0 overflow-hidden flex flex-col">
          <div className="relative bg-gradient-to-r from-slate-800 via-slate-700 to-slate-800 px-4 py-4 md:py-6 text-center flex-shrink-0">
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-600 via-white to-red-600"></div>
            <DialogTitle className="text-white flex flex-col items-center gap-2 md:gap-3">
              <div className="relative">
                <div className="absolute inset-0 bg-white/20 blur-xl rounded-full"></div>
                <div className="relative bg-white/10 backdrop-blur-sm p-2.5 md:p-3 rounded-full border border-white/20">
                  <Shield className="w-6 h-6 md:w-8 md:h-8 text-white" />
                </div>
              </div>
              <div>
                <h2 className="text-lg md:text-2xl font-bold tracking-tight">Vérification d'Âge</h2>
                <p className="text-xs md:text-sm text-slate-300 mt-1 font-medium">Accès Réservé aux Majeurs</p>
              </div>
            </DialogTitle>
          </div>

          <div className="px-4 py-4 md:px-6 md:py-6 space-y-3 md:space-y-4 overflow-y-auto flex-1">
            <div className="bg-white border-l-4 border-red-500 rounded-lg shadow-sm p-3 md:p-4">
              <div className="flex gap-2.5 md:gap-3">
                <div className="flex-shrink-0">
                  <div className="bg-red-50 p-1.5 md:p-2 rounded-lg">
                    <AlertTriangle className="w-4 h-4 md:w-5 md:h-5 text-red-600" />
                  </div>
                </div>
                <div>
                  <h3 className="font-bold text-red-600 text-xs md:text-sm mb-1">Interdit aux mineurs</h3>
                  <p className="text-slate-600 text-[11px] md:text-sm leading-relaxed">
                    Conformément à la loi française, l'accès est strictement réservé aux personnes majeures (18 ans et
                    plus).
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-sm border border-slate-200 p-3 md:p-4">
              <h4 className="font-bold text-slate-900 text-xs md:text-sm mb-2.5 md:mb-3">Conditions d'accès</h4>
              <ul className="space-y-2 md:space-y-2.5">
                <li className="flex items-start gap-2 md:gap-2.5 text-[11px] md:text-sm text-slate-700">
                  <CheckCircle2 className="w-4 h-4 md:w-4.5 md:h-4.5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span>Avoir 18 ans ou plus</span>
                </li>
                <li className="flex items-start gap-2 md:gap-2.5 text-[11px] md:text-sm text-slate-700">
                  <CheckCircle2 className="w-4 h-4 md:w-4.5 md:h-4.5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span>Jouer de manière responsable</span>
                </li>
                <li className="flex items-start gap-2 md:gap-2.5 text-[11px] md:text-sm text-slate-700">
                  <CheckCircle2 className="w-4 h-4 md:w-4.5 md:h-4.5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span>Comprendre les risques liés aux paris</span>
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-lg shadow-sm border border-green-200 p-3 md:p-4">
              <div className="flex items-center gap-2.5 md:gap-3">
                <div className="bg-white p-1.5 md:p-2 rounded-lg shadow-sm">
                  <Phone className="w-4 h-4 md:w-5 md:h-5 text-green-600" />
                </div>
                <div className="flex-1">
                  <p className="text-green-800 font-semibold text-[11px] md:text-sm">Besoin d'aide ?</p>
                  <p className="text-green-700 font-bold text-sm md:text-lg">09 74 75 13 13</p>
                  <p className="text-green-600 text-[10px] md:text-xs">Joueurs Info Service</p>
                </div>
              </div>
            </div>

            <div className="pt-2 md:pt-3">
              <p className="text-center font-bold text-slate-900 text-sm md:text-base mb-3 md:mb-4">
                Confirmez-vous avoir 18 ans ou plus ?
              </p>
              <div className="grid grid-cols-2 gap-2.5 md:gap-3">
                <Button
                  onClick={handleConfirmAge}
                  className="bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white font-bold py-3 md:py-3.5 rounded-xl text-xs md:text-sm transition-all shadow-md hover:shadow-lg"
                >
                  OUI, J'AI 18+
                </Button>
                <Button
                  onClick={handleRejectAge}
                  variant="outline"
                  className="border-2 border-slate-300 text-slate-700 hover:bg-slate-100 hover:border-slate-400 font-bold py-3 md:py-3.5 rounded-xl text-xs md:text-sm transition-all bg-white shadow-sm"
                >
                  NON
                </Button>
              </div>
            </div>
          </div>
        </DialogContent>
      </Dialog>

      <Dialog open={showRestrictionWarning} onOpenChange={() => {}} modal>
        <DialogContent className="bg-gradient-to-br from-slate-50 to-white border-none shadow-2xl rounded-2xl p-0 overflow-hidden flex flex-col">
          <div className="relative bg-gradient-to-r from-red-600 via-red-700 to-red-600 px-4 py-4 md:py-6 text-center flex-shrink-0">
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-600 via-white to-red-600"></div>
            <DialogTitle className="text-white flex flex-col items-center gap-2 md:gap-3">
              <div className="relative">
                <div className="absolute inset-0 bg-white/20 blur-xl rounded-full"></div>
                <div className="relative bg-white/10 backdrop-blur-sm p-2.5 md:p-3 rounded-full border border-white/20">
                  <AlertTriangle className="w-6 h-6 md:w-8 md:h-8 text-white" />
                </div>
              </div>
              <h2 className="text-lg md:text-2xl font-bold tracking-tight">Accès Refusé</h2>
            </DialogTitle>
          </div>

          <div className="px-4 py-4 md:px-6 md:py-6 space-y-3 md:space-y-4 text-center overflow-y-auto flex-1">
            <div className="bg-white border-l-4 border-red-500 rounded-lg shadow-sm p-3 md:p-4 text-left">
              <h3 className="font-bold text-red-600 text-sm md:text-base mb-1.5 md:mb-2">Interdit aux mineurs</h3>
              <p className="text-slate-600 text-xs md:text-sm leading-relaxed">
                Ce site est strictement réservé aux personnes majeures (18 ans et plus) conformément à la législation
                française.
              </p>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-lg shadow-sm border border-green-200 p-4 md:p-5">
              <div className="bg-white w-fit mx-auto p-2 md:p-2.5 rounded-lg shadow-sm mb-2 md:mb-3">
                <Phone className="w-6 h-6 md:w-7 md:h-7 text-green-600" />
              </div>
              <p className="text-green-800 font-semibold text-xs md:text-sm mb-1">Besoin d'aide ?</p>
              <p className="text-green-700 font-bold text-base md:text-xl mb-0.5">09 74 75 13 13</p>
              <p className="text-green-600 text-[10px] md:text-xs">Joueurs Info Service</p>
            </div>

            <Button
              onClick={handleCloseRestriction}
              className="bg-gradient-to-r from-slate-800 to-slate-900 hover:from-slate-900 hover:to-black text-white font-bold w-full py-3 md:py-3.5 rounded-xl text-xs md:text-sm shadow-md hover:shadow-lg transition-all"
            >
              Quitter le site
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </>
  )
}
