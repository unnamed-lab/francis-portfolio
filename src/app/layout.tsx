import type React from "react"
import type { Metadata } from "next"
import { Poppins } from "next/font/google"
import "./globals.css"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { userDetails } from "@/config/user-details"

const poppins = Poppins({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
  display: "swap",
})

export const metadata: Metadata = {
  title: `${userDetails.name} | ${userDetails.title}`,
  description: userDetails.bio,
  openGraph: {
    type: "website",
    title: `${userDetails.name} | ${userDetails.title}`,
    description: userDetails.bio,
    siteName: userDetails.name,
  },
  twitter: {
    card: "summary_large_image",
    title: `${userDetails.name} | ${userDetails.title}`,
    description: userDetails.bio,
    creator: "@yourtwitterhandle", // Add your Twitter handle here
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${poppins.className} bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-slate-50`}>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}

