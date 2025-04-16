"use client"

import { useEffect, useState } from "react"
import { AlertTriangle } from "lucide-react"

export default function StickyCountdown() {
  // Set deadline to November 1st of current year
  const currentYear = new Date().getFullYear()
  const targetDate = new Date(`November 1, ${currentYear} 23:59:59`).getTime()

  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  })

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date().getTime()
      const distance = targetDate - now

      if (distance < 0) {
        clearInterval(interval)
        return
      }

      setTimeLeft({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000),
      })
    }, 1000)

    return () => clearInterval(interval)
  }, [targetDate])

  return (
    <div className="sticky top-16 z-40 w-full bg-white/95 backdrop-blur-sm border-b border-primary/10 shadow-sm py-2">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col sm:flex-row items-center justify-between">
          <div className="flex items-center gap-2 mb-2 sm:mb-0">
            <AlertTriangle className="h-4 w-4 text-primary" />
            <span className="text-sm font-medium text-secondary">Early Decision Deadline Countdown:</span>
          </div>
          <div className="flex gap-2">
            <div className="bg-primary/10 rounded px-2 py-1">
              <div className="text-sm font-bold text-secondary">{timeLeft.days}</div>
              <div className="text-xs text-muted-foreground">Days</div>
            </div>
            <div className="bg-primary/10 rounded px-2 py-1">
              <div className="text-sm font-bold text-secondary">{timeLeft.hours}</div>
              <div className="text-xs text-muted-foreground">Hours</div>
            </div>
            <div className="bg-primary/10 rounded px-2 py-1">
              <div className="text-sm font-bold text-secondary">{timeLeft.minutes}</div>
              <div className="text-xs text-muted-foreground">Mins</div>
            </div>
            <div className="bg-primary/10 rounded px-2 py-1">
              <div className="text-sm font-bold text-secondary">{timeLeft.seconds}</div>
              <div className="text-xs text-muted-foreground">Secs</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
