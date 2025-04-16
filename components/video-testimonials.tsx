"use client"

import { useState, useRef, useEffect } from "react"
import { Card } from "@/components/ui/card"
import { Play, Pause, Volume2, VolumeX } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { useIntersectionObserver } from "@/hooks/use-intersection-observer"

interface VideoTestimonial {
  id: number
  videoUrl: string
  coverImage: string
}

const testimonials: VideoTestimonial[] = [
  {
    id: 1,
    videoUrl: "/videos/testimonial-1.mp4",
    coverImage: "/images/testimonial-cover-1.jpg",
  },
  {
    id: 2,
    videoUrl: "/videos/testimonial-2.mp4",
    coverImage: "/images/testimonial-cover-2.jpg",
  },
  {
    id: 3,
    videoUrl: "/videos/testimonial-3.mp4",
    coverImage: "/images/testimonial-cover-3.jpg",
  },
]

export default function VideoTestimonials() {
  return (
    <section id="video-testimonials" className="py-20 relative z-10 bg-white">
      <div className="container px-4 md:px-6 max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <Badge className="mb-4 bg-primary/20 text-primary hover:bg-primary/30 transition-colors">
            Video Testimonials
          </Badge>
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-4 text-secondary">
            Hear Their <span className="text-primary">Stories</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id}>
              <VideoCard testimonial={testimonial} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function VideoCard({ testimonial }: { testimonial: VideoTestimonial }) {
  const [isPlaying, setIsPlaying] = useState(false)
  const [isMuted, setIsMuted] = useState(true) // Default to muted for better UX
  const [isLoaded, setIsLoaded] = useState(false)
  const videoRef = useRef<HTMLVideoElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const isInView = useIntersectionObserver(containerRef, { threshold: 0.5 })

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.addEventListener("loadeddata", () => {
        setIsLoaded(true)
      })
    }

    return () => {
      if (videoRef.current) {
        videoRef.current.removeEventListener("loadeddata", () => {
          setIsLoaded(true)
        })
      }
    }
  }, [])

  // Pause video when it's not in view
  useEffect(() => {
    if (!isInView && isPlaying && videoRef.current) {
      videoRef.current.pause()
      setIsPlaying(false)
    }
  }, [isInView, isPlaying])

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause()
      } else {
        videoRef.current.play().catch((error) => {
          console.error("Error playing video:", error)
        })
      }
      setIsPlaying(!isPlaying)
    }
  }

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted
      setIsMuted(!isMuted)
    }
  }

  const handleVideoEnd = () => {
    setIsPlaying(false)
  }

  return (
    <Card className="bg-white border-primary/20 shadow-lg overflow-hidden relative group h-full">
      <div ref={containerRef} className="aspect-video relative overflow-hidden">
        {!isLoaded && (
          <div className="absolute inset-0 bg-gray-200 animate-pulse flex items-center justify-center">
            <span className="sr-only">Loading video...</span>
          </div>
        )}
        <video
          ref={videoRef}
          src={testimonial.videoUrl}
          className="w-full h-full object-cover"
          poster={testimonial.coverImage}
          onEnded={handleVideoEnd}
          muted={isMuted}
          playsInline
          preload="metadata"
        />
        <div
          className={`absolute inset-0 bg-black/30 flex items-center justify-center transition-opacity duration-300 hover:bg-black/20 ${isPlaying ? "opacity-0 hover:opacity-100" : "opacity-100"}`}
          onClick={togglePlay}
        >
          <div className="flex gap-3">
            <button
              onClick={(e) => {
                e.stopPropagation()
                togglePlay()
              }}
              className="bg-white/90 hover:bg-white p-3 sm:p-4 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg"
              aria-label={isPlaying ? "Pause video" : "Play video"}
            >
              {isPlaying ? (
                <Pause className="h-6 w-6 sm:h-8 sm:w-8 text-primary" />
              ) : (
                <Play className="h-6 w-6 sm:h-8 sm:w-8 text-primary" />
              )}
            </button>
            <button
              onClick={(e) => {
                e.stopPropagation()
                toggleMute()
              }}
              className="bg-white/90 hover:bg-white p-3 sm:p-4 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg"
              aria-label={isMuted ? "Unmute video" : "Mute video"}
            >
              {isMuted ? (
                <VolumeX className="h-6 w-6 sm:h-8 sm:w-8 text-primary" />
              ) : (
                <Volume2 className="h-6 w-6 sm:h-8 sm:w-8 text-primary" />
              )}
            </button>
          </div>
        </div>
      </div>
    </Card>
  )
}
