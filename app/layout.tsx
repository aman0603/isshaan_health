// app/layout.tsx
import type { Metadata } from "next"
import "./globals.css"
import { LanguageProvider } from "./contexts/LanguageContext"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"

export const metadata = {
  title: "Isshaan Healthcare",
  description: "Explore Isshaan Healthcare's range of quality pharmaceutical products.",
  openGraph: {
    title: "Isshaan Healthcare",
    description: "Explore Isshaan Healthcare's range of quality pharmaceutical products.",
    url: "https://isshaan-healthcare.vercel.app/",
    siteName: "Isshaan Healthcare",
    images: [
      {
        url: "/logo.png", // Replace with your own image path
        width: 1200,
        height: 630,
        alt: "Isshaan Healthcare Logo",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" />
      </head>
      <body>
        <LanguageProvider>
          <Navbar />
          <main className="min-h-screen">{children}</main>
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  )
}
