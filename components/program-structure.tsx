"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Check, ExternalLink } from "lucide-react"
import Link from "next/link"

export default function ProgramStructure() {
  return (
    <section id="program-structure" className="py-16 bg-white">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Program <span className="text-primary">Structure</span>
          </h2>
          <p className="mt-4 text-xl text-muted-foreground max-w-3xl mx-auto">
            Our accelerated program is designed to maximize impact in a short timeframe
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          <Card className="border-primary/10 shadow-lg">
            <CardHeader>
              <div className="bg-primary/10 inline-block p-3 rounded-lg mb-4">
                <span className="text-2xl font-bold text-primary">1</span>
              </div>
              <CardTitle className="text-2xl">Phase 1: 3-Hour Project Bootcamp</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <ul className="space-y-2">
                <li className="flex items-start">
                  <Check className="mr-2 h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span>Personalized assessment of strengths and interests</span>
                </li>
                <li className="flex items-start">
                  <Check className="mr-2 h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span>Project brainstorming with Stanford mentors</span>
                </li>
                <li className="flex items-start">
                  <Check className="mr-2 h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span>Initial roadmap for college application success</span>
                </li>
                <li className="flex items-start">
                  <Check className="mr-2 h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span>Access to exclusive resources and tools</span>
                </li>
              </ul>

              <div className="pt-4">
                <p className="text-sm text-muted-foreground mb-4">
                  Limited spots available (4 students per Bootcamp). The bootcamp serves as an opportunity for students
                  to see if they would be a good fit for our selective programs.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <Button className="w-full bg-primary hover:bg-primary/90" asChild>
                    <Link href="https://calendly.com/modo-academy/stanford-grad-mentored-spark-program" target="_blank">
                      Enroll Now <ExternalLink className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                  <Button className="w-full border-primary text-primary hover:bg-primary/10" variant="outline" asChild>
                    <Link href="https://calendly.com/modo-academy/intro_call" target="_blank">
                      Book a Consultation <ExternalLink className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-primary shadow-xl">
            <CardHeader>
              <div className="bg-primary/10 inline-block p-3 rounded-lg mb-4">
                <span className="text-2xl font-bold text-primary">2</span>
              </div>
              <CardTitle className="text-2xl">Phase 2: 10-Week Project Accelerator</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <ul className="space-y-2">
                <li className="flex items-start">
                  <Check className="mr-2 h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span>Weekly 1-on-1 mentorship with Stanford experts</span>
                </li>
                <li className="flex items-start">
                  <Check className="mr-2 h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span>Project development and execution support</span>
                </li>
                <li className="flex items-start">
                  <Check className="mr-2 h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span>Mid-program review and optimization</span>
                </li>
                <li className="flex items-start">
                  <Check className="mr-2 h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span>Access to peer community and feedback</span>
                </li>
                <li className="flex items-start">
                  <Check className="mr-2 h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span>Publication or competition submission support</span>
                </li>
                <li className="flex items-start">
                  <Check className="mr-2 h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span>College application integration strategy</span>
                </li>
              </ul>

              <div className="pt-4">
                <p className="text-sm text-muted-foreground mb-4">
                  Selected students from the bootcamp will be invited to join our comprehensive 10-week program.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <Button className="w-full bg-primary hover:bg-primary/90" asChild>
                    <Link href="https://calendly.com/modo-academy/stanford-grad-mentored-spark-program" target="_blank">
                      Enroll Now <ExternalLink className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                  <Button className="w-full border-primary text-primary hover:bg-primary/10" variant="outline" asChild>
                    <Link href="https://calendly.com/modo-academy/intro_call" target="_blank">
                      Book a Consultation <ExternalLink className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="mt-10 bg-primary/5 rounded-xl p-6 max-w-4xl mx-auto border border-primary/10 shadow-lg">
          <h3 className="text-xl font-bold mb-4">For questions, contact our team:</h3>
          <div className="grid gap-4 md:grid-cols-3">
            <div className="flex items-start gap-2">
              <span className="text-primary">📩</span>
              <div>
                <p className="font-medium">Johnny Chang</p>
                <p className="text-sm text-muted-foreground">cjohnny@stanford.edu</p>
              </div>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-primary">📩</span>
              <div>
                <p className="font-medium">Angelina You</p>
                <p className="text-sm text-muted-foreground">hyou9@stanford.edu</p>
              </div>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-primary">📩</span>
              <div>
                <p className="font-medium">Chinat Yu</p>
                <p className="text-sm text-muted-foreground">chinat@stanford.edu</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
