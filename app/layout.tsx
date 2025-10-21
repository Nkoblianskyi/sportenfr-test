import type React from "react"
import type { Metadata, Viewport } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { Footer } from "@/components/footer"
import { CookieBanner } from "@/components/cookie-banner"
import { AgeVerificationModal } from "@/components/age-verification-modal"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "sportenfr - Comparateur Sites de Paris Sportifs France 2025",
  description:
    "Comparateur indépendant de sites de paris sportifs en France. Avis d'experts, bonus et cotes analysés. 18+ - Jeu responsable. Liens affiliés présents. Jouer comporte des risques.",
  keywords: "paris sportifs, comparateur, bonus, avis, France, 18+, jeu responsable",
  authors: [{ name: "sportenfr" }],
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
  metadataBase: new URL("https://sportenfr.com"),
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
  other: {
    "content-language": "fr",
    rating: "mature",
    "age-rating": "18+",
  },
  generator: "v0.dev",
}

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#1e293b" },
    { media: "(prefers-color-scheme: dark)", color: "#1e293b" },
  ],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr">
      <head>
        <meta name="format-detection" content="telephone=no" />
        <meta name="msapplication-TileColor" content="#1e293b" />
        <meta name="theme-color" content="#1e293b" />
        <link rel="canonical" href="https://sportenfr.com" />
      </head>
      <body
        className={inter.className}
        style={{
          backgroundImage: "url(/bg.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
        }}
      >
        <div className="min-h-screen">
          {children}
          <Footer />
          <CookieBanner />
          <AgeVerificationModal />
        </div>
      </body>
    </html>
  )
}
