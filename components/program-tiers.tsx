"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Check, Award, Globe, Trophy } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function ProgramTiers() {
  return (
    <section id="programs" className="py-20 relative z-10">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-4 text-secondary">
            Our <span className="text-primary">Programs</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Choose the right accelerator program to transform your child's college application
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {/* Basic Accelerator */}
          <Card className="bg-white border-primary/20 shadow-md overflow-hidden relative group">
            <div className="absolute top-0 left-0 w-full h-1 bg-primary"></div>
            <CardHeader className="pb-4">
              <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Award className="h-8 w-8 text-primary" />
              </div>
              <CardTitle className="text-2xl text-secondary">Basic Accelerator</CardTitle>
              <CardDescription className="text-lg">$8,500</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">
                Our foundational program to help students develop impressive extracurricular projects.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <Check className="mr-2 h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span>Personalized project development with Stanford mentors</span>
                </li>
                <li className="flex items-start">
                  <Check className="mr-2 h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span>Professional project website showcasing achievements</span>
                </li>
                <li className="flex items-start">
                  <Check className="mr-2 h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span>Official certification of project completion</span>
                </li>
                <li className="flex items-start">
                  <Check className="mr-2 h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span>Weekly progress reports and feedback</span>
                </li>
                <li className="flex items-start">
                  <Check className="mr-2 h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span>College application integration strategy</span>
                </li>
              </ul>
              <div className="pt-4">
                <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground" asChild>
                  <Link href="#enroll">Get Started</Link>
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Enhanced Accelerator */}
          <Card className="bg-white border-primary/20 shadow-lg overflow-hidden relative group transform scale-105 z-10">
            <div className="absolute top-0 left-0 w-full h-1 bg-primary"></div>
            <div className="absolute top-0 right-0 transform translate-x-2 -translate-y-2">
              <Badge className="bg-primary text-primary-foreground font-bold">Most Popular</Badge>
            </div>
            <CardHeader className="pb-4">
              <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Globe className="h-8 w-8 text-primary" />
              </div>
              <CardTitle className="text-2xl text-secondary">Enhanced Accelerator</CardTitle>
              <CardDescription className="text-lg">$11,000</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">
                Our comprehensive program with additional expert mentorship and personalized recommendation.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <Check className="mr-2 h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span>Everything in Basic Accelerator, plus:</span>
                </li>
                <li className="flex items-start">
                  <Check className="mr-2 h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span>Additional expert mentorship (5 extra hours)</span>
                </li>
                <li className="flex items-start">
                  <Check className="mr-2 h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span>Personalized recommendation letter from Stanford mentor</span>
                </li>
                <li className="flex items-start">
                  <Check className="mr-2 h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span>Enhanced project website with professional design</span>
                </li>
                <li className="flex items-start">
                  <Check className="mr-2 h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span>Media kit for college application submission</span>
                </li>
                <li className="flex items-start">
                  <Check className="mr-2 h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span>Priority access to Stanford network connections</span>
                </li>
              </ul>
              <div className="pt-4">
                <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground" asChild>
                  <Link href="#enroll">Get Started</Link>
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Premier Accelerator */}
          <Card className="bg-white border-primary/20 shadow-md overflow-hidden relative group">
            <div className="absolute top-0 left-0 w-full h-1 bg-primary"></div>
            <CardHeader className="pb-4">
              <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Trophy className="h-8 w-8 text-primary" />
              </div>
              <CardTitle className="text-2xl text-secondary">Premier Accelerator</CardTitle>
              <CardDescription className="text-lg">Call to Inquiry</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">
                Our elite program with competition preparation and maximum impact for college applications.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <Check className="mr-2 h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span>Everything in Enhanced Accelerator, plus:</span>
                </li>
                <li className="flex items-start">
                  <Check className="mr-2 h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span>Competition preparation and submission support</span>
                </li>
                <li className="flex items-start">
                  <Check className="mr-2 h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span>Publication assistance in relevant journals/platforms</span>
                </li>
                <li className="flex items-start">
                  <Check className="mr-2 h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span>VIP mentorship with industry leaders</span>
                </li>
                <li className="flex items-start">
                  <Check className="mr-2 h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span>Comprehensive college application review</span>
                </li>
                <li className="flex items-start">
                  <Check className="mr-2 h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span>Lifetime access to alumni network and resources</span>
                </li>
              </ul>
              <div className="pt-4">
                <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground" asChild>
                  <Link href="#enroll">Get Started</Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
