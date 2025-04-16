"use client"

import { useState, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { ChevronLeft, ChevronRight, Quote } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

const testimonials = [
  {
    id: 1,
    content:
      "Thank you for letting me working on Q2L during my freshman year. I just found out someone else who worked at Q2L got an internship... You deserve bragging rights for letting me work on a project that shows others impact. I truly hope you can continue Q2L or continue your hackathon stuff to inspire new programmers.",
    author: "Student",
    role: "Johns Hopkins University",
    avatar: "JH",
  },
  {
    id: 2,
    content:
      "Thank you for introducing my daughter to Stanford NeuroRad Lab! She had a great time as intern and was able to publish a paper with the professor.",
    author: "Parent",
    role: "Palo Alto High School",
    avatar: "PA",
  },
  {
    id: 3,
    content:
      "I am so glad you are doing this. This is giving us access to the resources that we couldn't have accessed!",
    author: "Parent",
    role: "8th Grader's Mom",
    avatar: "EM",
  },
  {
    id: 4,
    content: "I just received an offer for MS EE at Stanford. Thank you so much for your time!",
    author: "Student",
    role: "Stanford University",
    avatar: "SU",
  },
  {
    id: 5,
    content:
      "Grateful for you for taking this project on for mentorship! I think you can make a positive impact on young people's lives.",
    author: "Parent",
    role: "8th Grader's Mom",
    avatar: "EM",
  },
]

export default function TestimonialCarousel() {
  const [current, setCurrent] = useState(0)
  const [autoplay, setAutoplay] = useState(true)

  const next = () => {
    setCurrent((current + 1) % testimonials.length)
  }

  const prev = () => {
    setCurrent((current - 1 + testimonials.length) % testimonials.length)
  }

  useEffect(() => {
    if (!autoplay) return

    const interval = setInterval(() => {
      next()
    }, 5000)

    return () => clearInterval(interval)
  }, [current, autoplay])

  return (
    <section id="testimonials" className="py-20 relative z-10">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-12">
          <Badge className="mb-4 bg-primary/20 text-primary hover:bg-primary/30 transition-colors">
            Success Stories
          </Badge>
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-4 text-secondary">
            Voices of <span className="text-primary">Transformation</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Hear from students and parents who experienced our cosmic journey
          </p>
        </div>
        <div className="relative max-w-4xl mx-auto">
          <div
            className="overflow-hidden"
            onMouseEnter={() => setAutoplay(false)}
            onMouseLeave={() => setAutoplay(true)}
          >
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${current * 100}%)` }}
            >
              {testimonials.map((testimonial) => (
                <div key={testimonial.id} className="w-full flex-shrink-0 px-4">
                  <Card className="border-primary/20 bg-white shadow-lg">
                    <CardContent className="p-6 md:p-10">
                      <div className="absolute top-6 left-6 opacity-10">
                        <Quote className="h-24 w-24 text-primary" />
                      </div>
                      <div className="relative z-10">
                        <p className="text-lg md:text-xl mb-6 italic leading-relaxed text-secondary">
                          "{testimonial.content}"
                        </p>
                      </div>
                      <div className="flex items-center">
                        <Avatar className="h-14 w-14 mr-4 border-2 border-primary/20">
                          <AvatarImage
                            src={`/placeholder-icon.png?height=40&width=40&text=${testimonial.avatar}`}
                            alt={testimonial.author}
                          />
                          <AvatarFallback className="bg-primary/10 text-primary">{testimonial.avatar}</AvatarFallback>
                        </Avatar>
                        <div>
                          <p className="font-semibold text-lg text-secondary">{testimonial.author}</p>
                          <p className="text-sm text-primary font-medium">{testimonial.role}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>
          <Button
            variant="outline"
            size="icon"
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 rounded-full bg-white shadow-lg md:-translate-x-6 border-primary/20 hover:bg-primary/10 hover:border-primary/30 transition-colors"
            onClick={prev}
          >
            <ChevronLeft className="h-5 w-5" />
            <span className="sr-only">Previous testimonial</span>
          </Button>
          <Button
            variant="outline"
            size="icon"
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 rounded-full bg-white shadow-lg md:translate-x-6 border-primary/20 hover:bg-primary/10 hover:border-primary/30 transition-colors"
            onClick={next}
          >
            <ChevronRight className="h-5 w-5" />
            <span className="sr-only">Next testimonial</span>
          </Button>
          <div className="flex justify-center mt-6 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={`h-2 w-8 rounded-full transition-all duration-300 ${
                  current === index ? "bg-primary w-10" : "bg-muted-foreground/30"
                }`}
                onClick={() => setCurrent(index)}
              >
                <span className="sr-only">Testimonial {index + 1}</span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
