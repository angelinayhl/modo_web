"use client"

import { useEffect, useRef } from "react"

interface CosmicBackgroundProps {
  className?: string
  starCount?: number
  glowCount?: number
}

export default function CosmicBackground({ className = "", starCount = 100, glowCount = 3 }: CosmicBackgroundProps) {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!containerRef.current) return

    // Clear any existing stars/glows
    const existingStars = containerRef.current.querySelectorAll(".cosmic-star")
    const existingGlows = containerRef.current.querySelectorAll(".cosmic-glow")

    existingStars.forEach((star) => star.remove())
    existingGlows.forEach((glow) => glow.remove())

    // Create stars
    for (let i = 0; i < starCount; i++) {
      const star = document.createElement("div")
      star.className = "cosmic-star"

      // Random size between 1-3px
      const size = Math.random() * 2 + 1
      star.style.width = `${size}px`
      star.style.height = `${size}px`

      // Random position
      star.style.left = `${Math.random() * 100}%`
      star.style.top = `${Math.random() * 100}%`

      // Random animation delay
      star.style.animationDelay = `${Math.random() * 3}s`

      containerRef.current.appendChild(star)
    }

    // Create glowing orbs
    for (let i = 0; i < glowCount; i++) {
      const glow = document.createElement("div")
      glow.className = "cosmic-glow"

      // Random size between 100-300px
      const size = Math.random() * 200 + 100
      glow.style.width = `${size}px`
      glow.style.height = `${size}px`

      // Random position
      glow.style.left = `${Math.random() * 100}%`
      glow.style.top = `${Math.random() * 100}%`

      // Random animation delay
      glow.style.animationDelay = `${Math.random() * 4}s`

      containerRef.current.appendChild(glow)
    }
  }, [starCount, glowCount])

  return (
    <div
      ref={containerRef}
      className={`fixed inset-0 z-0 overflow-hidden bg-cosmic-gradient ${className}`}
      aria-hidden="true"
    />
  )
}
