import Link from "next/link"
import { Button } from "@/components/ui/button"
import { GraduationCap, Award, Clock, DollarSign } from "lucide-react"
import CosmicBackground from "@/components/cosmic-background"
import ProgramTiers from "@/components/program-tiers"
import ValueProposition from "@/components/value-proposition"
import TestimonialCarousel from "@/components/testimonial-carousel"
import MentorTeam from "@/components/mentor-team"
import CTASection from "@/components/cta-section"
import FAQAccordion from "@/components/faq-accordion"
import UrgencyBanner from "@/components/urgency-banner"
import CountdownTimer from "@/components/countdown-timer"
import ProgramStructure from "@/components/program-structure"
import StickyCountdown from "@/components/sticky-countdown"
import SupportedBy from "@/components/supported-by"
import VideoTestimonials from "@/components/video-testimonials"
import SubscriptionForm from "@/components/subscription-form"
import MobileMenu from "@/components/mobile-menu"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen relative">
      {/* Urgency Banner */}
      <UrgencyBanner />

      {/* Cosmic Background */}
      <CosmicBackground starCount={100} glowCount={3} />

      {/* Header */}
      <header className="sticky top-0 z-50 w-full backdrop-blur-md bg-white/90 border-b border-primary/10 shadow-sm">
        <div className="container flex h-16 items-center justify-between py-4">
          <div className="flex items-center gap-2">
            <GraduationCap className="h-7 w-7 text-primary" />
            <span className="text-xl font-bold text-secondary">
              Ivy <span className="text-primary">Lab</span>
            </span>
            <span className="text-xs text-muted-foreground ml-2">by Modo Academy</span>
          </div>
          <nav className="hidden md:flex items-center gap-8">
            <Link href="#value" className="text-sm font-medium text-secondary hover:text-primary transition-colors">
              How We Help
            </Link>
            <Link href="#programs" className="text-sm font-medium text-secondary hover:text-primary transition-colors">
              Programs
            </Link>
            <Link href="#mentors" className="text-sm font-medium text-secondary hover:text-primary transition-colors">
              Mentors
            </Link>
            <Link href="#faq" className="text-sm font-medium text-secondary hover:text-primary transition-colors">
              FAQ
            </Link>
          </nav>
          <div className="hidden md:flex items-center gap-3">
            <Button asChild variant="outline" className="border-primary text-primary hover:bg-primary/10">
              <Link href="#subscription-form">Subscribe to Access Resources</Link>
            </Button>
            <Button asChild className="bg-primary hover:bg-primary/90 text-primary-foreground">
              <Link href="https://calendly.com/modo-academy/stanford-grad-mentored-spark-program" target="_blank">
                Enroll Now
              </Link>
            </Button>
          </div>
          <MobileMenu />
        </div>
      </header>

      <StickyCountdown />

      <main className="flex-1 relative z-10">
        {/* Hero Section */}
        <section className="py-12 md:py-32 relative overflow-hidden">
          <div className="container px-4 md:px-6">
            <div className="grid gap-12 lg:grid-cols-2 items-center">
              <div className="space-y-6">
                <div className="inline-block px-4 py-1.5 bg-primary/20 text-primary rounded-full text-sm font-medium mb-2">
                  For Parents of 11th & 12th Grade Students
                </div>
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl text-secondary">
                  Boost Your <span className="text-primary">Child's</span> Ivy League Odds from{" "}
                  <span className="text-primary">4%</span> to <span className="text-primary">75%</span>
                </h1>
                <p className="text-xl text-muted-foreground max-w-[600px]">
                  No more scrambling — we fast-track standout extracurriculars so your child applies with confidence and
                  stands out to Ivy League.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                  <Button
                    size="lg"
                    className="bg-primary hover:bg-primary/90 text-primary-foreground text-lg font-medium px-8 py-6 h-auto shadow-md"
                    asChild
                  >
                    <Link href="https://calendly.com/modo-academy/stanford-grad-mentored-spark-program" target="_blank">
                      Enroll Now
                    </Link>
                  </Button>
                </div>
                <div className="mt-4 inline-flex items-center text-sm text-primary">
                  <Clock className="mr-1 h-4 w-4" />
                  <span className="font-medium">
                    Limited time offer: Get a free college consultation ($500 value) from experts when you enroll this
                    week
                  </span>
                </div>
              </div>
              <div className="relative lg:ml-auto">
                <div className="max-w-full w-full">
                  <img
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/0_zV6OW2xS4rUvaAyX-VoTnM6LiqwW2qSbcmwZLDlgGNr3jou.png"
                    alt="Logos of top universities including MIT, Stanford, Princeton, Yale, Harvard, Carnegie Mellon, Duke, and other prestigious institutions"
                    className="w-full h-auto rounded-lg shadow-md"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Countdown Section */}
        <section className="py-12 bg-white">
          <div className="container px-4 md:px-6">
            <div className="flex justify-center">
              <div className="max-w-4xl w-full">
                <div className="relative overflow-hidden rounded-2xl border border-primary/20 shadow-xl bg-white p-8">
                  <CountdownTimer />
                  <div className="space-y-6 mt-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                        <Clock className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-bold text-lg text-secondary">Limited Time Remains</h3>
                        <p className="text-muted-foreground">
                          College applications are due soon. Our accelerator provides quick results.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                        <Award className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-bold text-lg text-secondary">Stand Out Immediately</h3>
                        <p className="text-muted-foreground">
                          Create impressive extracurriculars that showcase your child's potential.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                        <DollarSign className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-bold text-lg text-secondary">$200,000 Scholarship Potential</h3>
                        <p className="text-muted-foreground">
                          Students with standout applications are more likely to receive merit-based scholarships,
                          averaging $200,000 over four years.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* How We Help Your Child Stand Out */}
        <ValueProposition />

        {/* Program Structure */}
        <ProgramStructure />

        {/* Program Tiers */}
        <ProgramTiers />

        {/* Supported By Section */}
        <SupportedBy />

        {/* Mentor Team */}
        <MentorTeam />

        {/* Testimonials */}
        <TestimonialCarousel />
        <VideoTestimonials />

        {/* Subscription Form */}
        <SubscriptionForm />

        {/* FAQ Section */}
        <FAQAccordion />

        {/* CTA Section */}
        <CTASection />
      </main>

      <Footer />
    </div>
  )
}
