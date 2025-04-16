"use client"

import { useEffect, useState, type RefObject } from "react"

export function useIntersectionObserver(
  elementRef: RefObject<Element>,
  options: IntersectionObserverInit = {
    threshold: 0.5,
    root: null,
    rootMargin: "0px",
  },
): boolean {
  const [isIntersecting, setIsIntersecting] = useState(false)

  useEffect(() => {
    const element = elementRef.current
    if (!element) return

    const observer = new IntersectionObserver(([entry]) => {
      setIsIntersecting(entry.isIntersecting)
    }, options)

    observer.observe(element)

    return () => {
      observer.disconnect()
    }
  }, [elementRef, options])

  return isIntersecting
}
