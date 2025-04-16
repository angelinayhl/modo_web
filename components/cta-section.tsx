"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"
import { AlertTriangle, Clock } from "lucide-react"

export default function CTASection() {
  return (
    <section id="enroll" className="py-20 relative z-10">
      <div className="container px-4 md:px-6">
        <div className="max-w-4xl mx-auto bg-white shadow-lg border border-primary/20 rounded-2xl p-8 md:p-12 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-cosmic-glow opacity-30 -translate-x-12 -translate-y-24"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-cosmic-glow opacity-30 translate-x-12 translate-y-24"></div>

          <div className="relative z-10">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-secondary/10 rounded-full mb-6">
              <AlertTriangle className="h-4 w-4 text-secondary" />
              <span className="text-sm font-medium text-secondary">
                Only 3 spots remaining for November applications
              </span>
            </div>

            <div className="flex flex-col items-center text-center mb-8">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-4 text-secondary">
                <span className="text-primary">Time is Running Out</span> for This Application Cycle
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl">
                Don't let your child miss their chance at an Ivy League education. Our accelerator program can quickly
                transform their application with impressive extracurriculars, but spots are filling fast.
              </p>
            </div>

            <div className="bg-primary/10 border border-primary/20 rounded-lg p-4 mb-8">
              <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                <div className="flex items-start gap-3">
                  <Clock className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-secondary">Application Deadlines:</h3>
                    <ul className="text-sm text-muted-foreground space-y-1 mt-1">
                      <li>• Early Decision: November 1st (6 weeks away)</li>
                      <li>• Regular Decision: January 1st (14 weeks away)</li>
                    </ul>
                  </div>
                </div>
                <div className="text-center md:text-right">
                  <p className="text-sm font-medium text-secondary mb-1">Limited-Time Bonus:</p>
                  <p className="text-sm text-muted-foreground">
                    Free application review ($500 value) when you enroll this week
                  </p>
                </div>
              </div>
            </div>

            <div className="flex justify-center">
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground text-lg font-medium px-8 py-6 h-auto shadow-md animate-pulse"
                asChild
              >
                <Link href="https://calendly.com/modo-academy/stanford-grad-mentored-spark-program" target="_blank">
                  Enroll Now
                </Link>
              </Button>
            </div>

            <div className="mt-8 text-center">
              <p className="text-sm text-muted-foreground">
                Have urgent questions? Contact us directly at{" "}
                <a href="mailto:cjohnny@stanford.edu" className="text-primary hover:underline">
                  cjohnny@stanford.edu
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
