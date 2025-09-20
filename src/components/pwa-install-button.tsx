"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { Download, Smartphone } from "lucide-react"

export default function PWAInstallButton() {
  const [deferredPrompt, setDeferredPrompt] = useState<any>(null)
  const [isInstalled, setIsInstalled] = useState(false)
  const [isIOS, setIsIOS] = useState(false)

  useEffect(() => {
    // Check if app is already installed
    if (window.matchMedia("(display-mode: standalone)").matches) {
      setIsInstalled(true)
    }

    // Check if iOS
    const isIOSDevice = /iPad|iPhone|iPod/.test(navigator.userAgent) && !(window as any).MSStream
    setIsIOS(isIOSDevice)

    // Listen for install prompt
    const handleBeforeInstallPrompt = (e: Event) => {
      e.preventDefault()
      setDeferredPrompt(e)
    }

    window.addEventListener("beforeinstallprompt", handleBeforeInstallPrompt)
    window.addEventListener("appinstalled", () => setIsInstalled(true))

    return () => {
      window.removeEventListener("beforeinstallprompt", handleBeforeInstallPrompt)
      window.removeEventListener("appinstalled", () => setIsInstalled(true))
    }
  }, [])

  const handleInstallClick = async () => {
    if (deferredPrompt) {
      deferredPrompt.prompt()
      const { outcome } = await deferredPrompt.userChoice
      setDeferredPrompt(null)
    }
  }

  const showIOSInstructions = () => {
    alert(
      "To install this app on iOS:\n\n1. Tap the Share button (square with arrow)\n2. Scroll down and tap 'Add to Home Screen'\n3. Tap 'Add' to confirm"
    )
  }

  if (isInstalled) {
    return null
  }

  if (isIOS) {
    return (
      <Button
        onClick={showIOSInstructions}
        variant="outline"
        size="sm"
        className="flex items-center gap-2"
      >
        <Smartphone className="h-4 w-4" />
        Install App
      </Button>
    )
  }

  if (deferredPrompt) {
    return (
      <Button
        onClick={handleInstallClick}
        variant="outline"
        size="sm"
        className="flex items-center gap-2"
      >
        <Download className="h-4 w-4" />
        Install App
      </Button>
    )
  }

  return null
}