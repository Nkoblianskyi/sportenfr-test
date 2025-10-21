"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const cookieConsent = localStorage.getItem("cookieConsent")
    if (!cookieConsent) {
      setIsVisible(true)
    }
  }, [])

  const acceptCookies = () => {
    localStorage.setItem("cookieConsent", "accepted")
    setIsVisible(false)
  }

  const rejectCookies = () => {
    localStorage.setItem("cookieConsent", "rejected")
    setIsVisible(false)
  }

  if (!isVisible) return null

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t-2 border-primary shadow-lg p-4 md:p-6 z-50">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div className="flex-1">
            <h3 className="text-lg font-bold text-foreground mb-2">🍪 Gestion des Cookies</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Nous utilisons des cookies pour améliorer votre expérience de navigation, analyser le trafic du site et
              personnaliser le contenu. En cliquant sur "Accepter", vous consentez à l'utilisation de tous les cookies.
              Consultez notre{" "}
              <Link href="/privacy-policy" className="text-primary hover:underline font-medium">
                Politique de Confidentialité
              </Link>{" "}
              et notre{" "}
              <Link href="/cookie-policy" className="text-primary hover:underline font-medium">
                Politique des Cookies
              </Link>{" "}
              pour plus d'informations.
            </p>
          </div>
          <div className="flex items-center gap-3 w-full md:w-auto">
            <Button
              onClick={rejectCookies}
              variant="outline"
              size="default"
              className="flex-1 md:flex-none border-2 hover:bg-muted bg-transparent"
            >
              Refuser
            </Button>
            <Button
              onClick={acceptCookies}
              size="default"
              className="flex-1 md:flex-none bg-accent hover:bg-accent/90 text-white font-semibold"
            >
              Accepter Tout
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
