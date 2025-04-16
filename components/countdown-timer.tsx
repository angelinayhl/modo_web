"use client"

import { useEffect, useState } from "react"
import { Clock } from "lucide-react"

export default function CountdownTimer() {
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
    <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-primary/20 shadow-lg">
      <div className="flex items-center gap-2 mb-2">
        <Clock className="h-5 w-5 text-primary" />
        <h3 className="font-bold text-secondary">Early Decision Deadline Countdown</h3>
      </div>
      <div className="grid grid-cols-4 gap-2 text-center">
        <div className="bg-white/80 rounded p-2">
          <div className="text-2xl font-bold text-secondary">{timeLeft.days}</div>
          <div className="text-xs text-muted-foreground">Days</div>
        </div>
        <div className="bg-white/80 rounded p-2">
          <div className="text-2xl font-bold text-secondary">{timeLeft.hours}</div>
          <div className="text-xs text-muted-foreground">Hours</div>
        </div>
        <div className="bg-white/80 rounded p-2">
          <div className="text-2xl font-bold text-secondary">{timeLeft.minutes}</div>
          <div className="text-xs text-muted-foreground">Mins</div>
        </div>
        <div className="bg-white/80 rounded p-2">
          <div className="text-2xl font-bold text-secondary">{timeLeft.seconds}</div>
          <div className="text-xs text-muted-foreground">Secs</div>
        </div>
      </div>
    </div>
  )
}
