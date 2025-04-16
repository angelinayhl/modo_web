"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Rocket, Star, Zap } from "lucide-react"

export default function PhaseJourney() {
  return (
    <section id="programs" className="py-20 relative z-10">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-4 text-secondary">
            Our <span className="text-primary">Programs</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            From initial spark to full-fledged stellar achievement, we guide your child through a transformative journey
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {/* Phase 1: Spark */}
          <Card className="bg-white border-primary/20 shadow-md overflow-hidden relative group">
            <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="absolute top-0 left-0 w-full h-1 bg-primary"></div>
            <CardHeader className="pb-4">
              <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Zap className="h-8 w-8 text-primary" />
              </div>
              <CardTitle className="text-2xl text-secondary">Spark</CardTitle>
              <CardDescription className="text-lg">$1,000</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">
                The initial 3-hour bootcamp that ignites your child's potential and sets them on a path to success.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>Personalized assessment of strengths and interests</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>Project brainstorming with Stanford mentors</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>Initial roadmap for college application success</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>Access to exclusive resources and tools</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          {/* Phase 2: Nova */}
          <Card className="bg-white border-primary/20 shadow-lg overflow-hidden relative group transform scale-105 z-10">
            <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="absolute top-0 left-0 w-full h-1 bg-primary"></div>
            <div className="absolute top-0 right-0 transform translate-x-2 -translate-y-2">
              <Badge className="bg-primary text-primary-foreground font-bold">Most Popular</Badge>
            </div>
            <CardHeader className="pb-4">
              <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Star className="h-8 w-8 text-primary" />
              </div>
              <CardTitle className="text-2xl text-secondary">Nova</CardTitle>
              <CardDescription className="text-lg">$6,000</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">
                The 6-week intensive program where your child's project takes shape and begins to shine.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>Everything in Spark, plus:</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>Weekly 1-on-1 mentorship with Stanford experts</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>Project development and execution support</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>Mid-program review and optimization</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>Access to peer community and feedback</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          {/* Phase 3: Catalyst */}
          <Card className="bg-white border-primary/20 shadow-md overflow-hidden relative group">
            <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="absolute top-0 left-0 w-full h-1 bg-primary"></div>
            <CardHeader className="pb-4">
              <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Rocket className="h-8 w-8 text-primary" />
              </div>
              <CardTitle className="text-2xl text-secondary">Catalyst</CardTitle>
              <CardDescription className="text-lg">$10,000</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">
                The complete 10-week transformative experience that propels your child to stellar achievements.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>Everything in Nova, plus:</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>Extended mentorship through project completion</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>Publication or competition submission support</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>College application integration strategy</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>Personalized recommendation letters</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>Lifetime access to alumni network</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
