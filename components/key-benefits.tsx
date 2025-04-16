"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Compass, Users, Lightbulb, Star, Sparkles } from "lucide-react"

export default function KeyBenefits() {
  return (
    <section id="benefits" className="py-20 relative z-10">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-4 text-secondary">
            <span className="text-primary">Benefits</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Our program delivers more than just college acceptance—it builds lifelong skills and confidence
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          <Card className="bg-white border-primary/20 shadow-md overflow-hidden relative group">
            <CardContent className="p-6 flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Compass className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-secondary">Clarity & Direction</h3>
              <p className="text-muted-foreground">
                Students discover their true passions and develop a clear roadmap for their academic and professional
                future.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-white border-primary/20 shadow-md overflow-hidden relative group">
            <CardContent className="p-6 flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Star className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-secondary">Elite Mentorship</h3>
              <p className="text-muted-foreground">
                Direct guidance from Stanford graduate students who provide insider knowledge and personalized coaching.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-white border-primary/20 shadow-md overflow-hidden relative group">
            <CardContent className="p-6 flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Lightbulb className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-secondary">Real Projects</h3>
              <p className="text-muted-foreground">
                Students complete tangible, impressive achievements that demonstrate initiative, creativity, and
                leadership to admissions officers.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-white border-primary/20 shadow-md overflow-hidden relative group">
            <CardContent className="p-6 flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Users className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-secondary">Community</h3>
              <p className="text-muted-foreground">
                Access to a supportive network of like-minded peers and mentors who inspire and challenge each other.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-white border-primary/20 shadow-md overflow-hidden relative group md:col-span-2 lg:col-span-1">
            <CardContent className="p-6 flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Sparkles className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-secondary">Transformational Confidence</h3>
              <p className="text-muted-foreground">
                Students develop the self-assurance and skills to tackle any challenge, setting them up for success in
                college and beyond.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
