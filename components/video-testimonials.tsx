"use client"

import { useState, useRef } from "react"
import { Card } from "@/components/ui/card"
import { Play, Pause, Volume2, VolumeX } from "lucide-react"
import { Badge } from "@/components/ui/badge"

interface VideoTestimonial {
  id: number
  videoUrl: string
}

const testimonials: VideoTestimonial[] = [
  {
    id: 1,
    videoUrl: "/videos/testimonial-1.mp4",
  },
  {
    id: 2,
    videoUrl: "/videos/testimonial-2.mp4",
  },
  {
    id: 3,
    videoUrl: "/videos/testimonial-3.mp4",
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

        <div className="flex flex-col lg:flex-row gap-4 lg:gap-6">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="flex-1">
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
  const [isMuted, setIsMuted] = useState(false)
  const videoRef = useRef<HTMLVideoElement>(null)

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause()
      } else {
        videoRef.current.play()
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

  return (
    <Card className="bg-white border-primary/20 shadow-lg overflow-hidden relative group h-full">
      <div className="aspect-video relative overflow-hidden">
        <video
          ref={videoRef}
          src={testimonial.videoUrl}
          className="w-full h-full object-cover"
          poster="/placeholder.svg?height=720&width=1280&text=Testimonial Video"
          onEnded={() => setIsPlaying(false)}
          muted={isMuted}
        />
        <div className="absolute inset-0 bg-black/30 flex items-center justify-center transition-opacity duration-300 hover:bg-black/20">
          <div className="flex gap-3">
            <button
              onClick={togglePlay}
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
              onClick={toggleMute}
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
