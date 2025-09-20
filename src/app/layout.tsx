"use client"

import "./globals.css"
import { Toaster } from "@/components/ui/toaster"
import { ThemeProvider } from "@/components/theme-provider"
import { Geist, Geist_Mono } from "next/font/google"
import Head from "next/head"
import { useEffect } from "react"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
})

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  useEffect(() => {
    if (typeof window !== "undefined" && "serviceWorker" in navigator) {
      // Register service worker
      navigator.serviceWorker
        .register("/sw.js")
        .then((registration) => {
          console.log("Service Worker registered successfully:", registration)
        })
        .catch((error) => {
          console.log("Service Worker registration failed:", error)
        })
    }
  }, [])

  return (
    <html lang="en" suppressHydrationWarning>
      <Head>
        <title>Next.js CRM Dashboard</title>
        <meta name="description" content="Modern CRM dashboard with live data and interactive charts" />
        <meta name="keywords" content="CRM, Dashboard, Next.js, TypeScript, Tailwind CSS, shadcn/ui, Analytics" />
        <meta name="application-name" content="CRM Dashboard" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="CRM Dashboard" />
        <meta name="format-detection" content="telephone=no" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="msapplication-config" content="/browserconfig.xml" />
        <meta name="msapplication-TileColor" content="#3b82f6" />
        <meta name="msapplication-tap-highlight" content="no" />
        <meta name="theme-color" content="#3b82f6" />
        
        <link rel="apple-touch-icon" href="/apple-icon-180x180.png" />
        <link rel="icon" type="image/png" sizes="192x192" href="/icon-192x192.png" />
        <link rel="icon" type="image/png" sizes="512x512" href="/icon-512x512.png" />
        <link rel="manifest" href="/manifest.json" />
        
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="CRM Dashboard" />
        <meta property="og:title" content="Next.js CRM Dashboard" />
        <meta property="og:description" content="Modern CRM dashboard with live data and interactive charts" />
        
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content="Next.js CRM Dashboard" />
        <meta name="twitter:description" content="Modern CRM dashboard with live data and interactive charts" />
      </Head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          disableTransitionOnChange
        >
          {children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  )
}
