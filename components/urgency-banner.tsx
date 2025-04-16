"use client"

import { useState } from "react"
import { X, AlertTriangle } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function UrgencyBanner() {
  const [isVisible, setIsVisible] = useState(true)

  if (!isVisible) return null

  return (
    <div className="bg-secondary text-white py-3 px-4 relative">
      <div className="container mx-auto">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="flex items-center space-x-3">
            <AlertTriangle className="h-5 w-5 text-primary animate-pulse" />
            <p className="text-sm font-medium text-center sm:text-left">
              <span className="font-bold">URGENT:</span> Early Decision deadlines approaching! Only{" "}
              <span className="text-primary font-bold">3 spots left</span> for our accelerator program before Nov 1st
              applications.
            </p>
          </div>
          <div className="flex items-center space-x-4">
            <Button
              size="sm"
              variant="outline"
              className="bg-primary/20 border-primary/30 text-white hover:bg-primary/30"
              asChild
            >
              <Link href="https://calendly.com/modo-academy/intro_call" target="_blank">
                Book a Consultation
              </Link>
            </Button>
            <button
              onClick={() => setIsVisible(false)}
              className="text-white/80 hover:text-white"
              aria-label="Close banner"
            >
              <X className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
