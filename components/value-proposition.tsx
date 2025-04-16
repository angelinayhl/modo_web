"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Rocket, FileText, Trophy } from "lucide-react"

export default function ValueProposition() {
  return (
    <section id="value" className="py-20 relative z-10 bg-white">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-4 text-secondary">
            How We Help Your Child <span className="text-primary">Stand Out</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto">
            Ivy Lab helps you build a world-class extracurricular project that puts you in the top 1% of applicants. Our
            expert mentors help students launch startups, publish research, win competitions and build a standout
            portfolio for elite admissions.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          <Card className="bg-white border-primary/20 shadow-md overflow-hidden relative group">
            <div className="aspect-square relative overflow-hidden">
              <div className="w-full h-full bg-gray-100">
                <img
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/360_F_300143961_8kJTPiTbWallCIBxO0GQzoxgwE9cIRGG.jpg-2uddCAQhe1BwICgvyvnFavEY0nwl3Q.jpeg"
                  alt="Students launching a startup"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <CardContent className="p-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                  <Rocket className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2 text-secondary">Launch a Startup or Non-Profit</h3>
                  <p className="text-muted-foreground">
                    Create a real-world venture that demonstrates leadership, innovation, and entrepreneurial spirit.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white border-primary/20 shadow-md overflow-hidden relative group">
            <div className="aspect-square relative overflow-hidden">
              <div className="w-full h-full bg-gray-100">
                <img
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/persuadingsapphire-3WXKSWF8w63245CU70sD17bbyY3nCK.png"
                  alt="Scientific research poster"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <CardContent className="p-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                  <FileText className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2 text-secondary">Get Published in a Research Journal</h3>
                  <p className="text-muted-foreground">
                    Conduct meaningful research and publish your findings with guidance from Stanford mentors.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white border-primary/20 shadow-md overflow-hidden relative group">
            <div className="aspect-square relative overflow-hidden">
              <div className="w-full h-full bg-gray-100">
                <img
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/visualelectric-1744572970222-YSsRLSAY8t7wGHDdcIXaJaLQaJ5K24.png"
                  alt="Students with competition awards and medals"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <CardContent className="p-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                  <Trophy className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2 text-secondary">Win Hackathons and Competitions</h3>
                  <p className="text-muted-foreground">
                    Showcase your skills and creativity by participating in and winning prestigious competitions.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
