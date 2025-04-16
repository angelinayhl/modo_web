"use client"

import { useEffect, useState, useRef } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { GraduationCap, Award, DollarSign, Clock } from "lucide-react"

interface CounterProps {
  end: number
  duration: number
  prefix?: string
  suffix?: string
}

function Counter({ end, duration, prefix = "", suffix = "" }: CounterProps) {
  const [count, setCount] = useState(0)
  const countRef = useRef<HTMLSpanElement>(null)
  const observer = useRef<IntersectionObserver | null>(null)
  const hasAnimated = useRef(false)

  useEffect(() => {
    if (!countRef.current) return

    observer.current = new IntersectionObserver((entries) => {
      const [entry] = entries
      if (entry.isIntersecting && !hasAnimated.current) {
        hasAnimated.current = true
        animateCount()
      }
    })

    observer.current.observe(countRef.current)

    return () => {
      if (observer.current) {
        observer.current.disconnect()
      }
    }
  }, [])

  const animateCount = () => {
    const startTime = Date.now()
    const endTime = startTime + duration

    const updateCount = () => {
      const now = Date.now()
      const progress = Math.min(1, (now - startTime) / duration)
      const currentCount = Math.floor(progress * end)

      setCount(currentCount)

      if (now < endTime) {
        requestAnimationFrame(updateCount)
      } else {
        setCount(end)
      }
    }

    requestAnimationFrame(updateCount)
  }

  return (
    <span ref={countRef} className="text-4xl font-bold tabular-nums">
      {prefix}
      {count.toLocaleString()}
      {suffix}
    </span>
  )
}

export default function StatsCounter() {
  return (
    <section className="py-12 bg-gradient-to-b from-primary/5 to-background">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <Card className="border-none bg-transparent overflow-hidden relative group">
            <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity rounded-lg"></div>
            <CardContent className="p-6 flex flex-col items-center text-center relative z-10">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <GraduationCap className="h-8 w-8 text-primary" />
              </div>
              <Counter end={98} duration={2000} suffix="%" />
              <p className="text-muted-foreground mt-2 font-medium">Acceptance Rate to Top 10 Universities</p>
            </CardContent>
          </Card>
          <Card className="border-none bg-transparent overflow-hidden relative group">
            <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity rounded-lg"></div>
            <CardContent className="p-6 flex flex-col items-center text-center relative z-10">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Award className="h-8 w-8 text-primary" />
              </div>
              <Counter end={87} duration={2000} suffix="%" />
              <p className="text-muted-foreground mt-2 font-medium">Students Receive Merit Scholarships</p>
            </CardContent>
          </Card>
          <Card className="border-none bg-transparent overflow-hidden relative group">
            <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity rounded-lg"></div>
            <CardContent className="p-6 flex flex-col items-center text-center relative z-10">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <DollarSign className="h-8 w-8 text-primary" />
              </div>
              <Counter end={1500000} duration={2000} prefix="$" />
              <p className="text-muted-foreground mt-2 font-medium">Average Lifetime Earnings Premium</p>
            </CardContent>
          </Card>
          <Card className="border-none bg-transparent overflow-hidden relative group">
            <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity rounded-lg"></div>
            <CardContent className="p-6 flex flex-col items-center text-center relative z-10">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Clock className="h-8 w-8 text-primary" />
              </div>
              <Counter end={3} duration={2000} />
              <p className="text-muted-foreground mt-2 font-medium">Weeks to Develop Standout Extracurriculars</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
