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
// Import the VideoTestimonials component at the top of the file
import VideoTestimonials from "@/components/video-testimonials"

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
          <div className="flex items-center">
            <Button asChild className="bg-primary hover:bg-primary/90 text-primary-foreground">
              <Link href="https://calendly.com/angelina-you/chat-with-us" target="_blank">
                Book Consultation
              </Link>
            </Button>
          </div>
        </div>
      </header>

      <StickyCountdown />

      <main className="flex-1 relative z-10">
        {/* Hero Section */}
        <section className="py-20 md:py-32 relative overflow-hidden">
          <div className="container px-4 md:px-6">
            <div className="grid gap-12 lg:grid-cols-2 items-center">
              <div className="space-y-6">
                <div className="inline-block px-4 py-1.5 bg-primary/20 text-primary rounded-full text-sm font-medium mb-2">
                  For Parents of 11th & 12th Grade Students
                </div>
                <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-6xl text-secondary">
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
                    <Link href="https://calendly.com/angelina-you/chat-with-us" target="_blank">
                      Book Your Free Consultation
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

        {/* Top University Logos Section */}
        <section className="py-12 bg-white">
          <div className="container px-4 md:px-6">
            <div className="flex justify-center">
              <div className="max-w-4xl w-full">
                <img
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/0_zV6OW2xS4rUvaAyX-VoTnM6LiqwW2qSbcmwZLDlgGNr3jou.png"
                  alt="Logos of top universities including MIT, Stanford, Princeton, Yale, Harvard, Carnegie Mellon, Duke, and other prestigious institutions"
                  className="w-full h-auto rounded-lg shadow-md"
                />
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

        {/* FAQ Section */}
        <FAQAccordion />

        {/* CTA Section */}
        <CTASection />
      </main>

      <footer className="border-t border-primary/20 py-12 relative z-10 bg-cosmic/80 backdrop-blur-sm">
        <div className="container px-4 md:px-6">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <GraduationCap className="h-6 w-6 text-primary" />
                <span className="text-xl font-bold text-secondary">
                  Ivy <span className="text-primary">Lab</span>
                </span>
              </div>
              <p className="text-muted-foreground">
                Transforming college applications with standout projects mentored by Stanford graduate students.
              </p>
              <div className="mt-4 flex space-x-4">
                <Link href="#" className="text-muted-foreground hover:text-primary">
                  <span className="sr-only">Twitter</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-5 w-5"
                  >
                    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                  </svg>
                </Link>
                <Link href="#" className="text-muted-foreground hover:text-primary">
                  <span className="sr-only">Instagram</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-5 w-5"
                  >
                    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
                  </svg>
                </Link>
                <Link href="#" className="text-muted-foreground hover:text-primary">
                  <span className="sr-only">LinkedIn</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-5 w-5"
                  >
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                    <rect width="4" height="12" x="2" y="9"></rect>
                    <circle cx="4" cy="4" r="2"></circle>
                  </svg>
                </Link>
              </div>
            </div>

            <div>
              <h3 className="font-semibold text-lg mb-4 text-secondary">Programs</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#programs" className="text-muted-foreground hover:text-primary">
                    Basic Accelerator ($8,500)
                  </Link>
                </li>
                <li>
                  <Link href="#programs" className="text-muted-foreground hover:text-primary">
                    Enhanced Accelerator ($11,000)
                  </Link>
                </li>
                <li>
                  <Link href="#programs" className="text-muted-foreground hover:text-primary">
                    Premier Accelerator (Call to Inquiry)
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-4 text-secondary">Resources</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-primary">
                    Success Stories
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-primary">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-primary">
                    College Admissions Guide
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-4 text-secondary">Contact</h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-5 w-5 mr-2 text-primary"
                  >
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                  </svg>
                  <span className="text-muted-foreground">(217) 848-4902</span>
                </li>
                <li className="flex items-start">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-5 w-5 mr-2 text-primary"
                  >
                    <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                  </svg>
                  <span className="text-muted-foreground">cjohnny@stanford.edu</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-10 pt-6 border-t border-primary/20">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-sm text-muted-foreground">
                © {new Date().getFullYear()} Ivy Lab. All rights reserved.
              </p>
              <div className="flex space-x-4 mt-4 md:mt-0">
                <Link href="#" className="text-sm text-muted-foreground hover:text-primary">
                  Privacy Policy
                </Link>
                <Link href="#" className="text-sm text-muted-foreground hover:text-primary">
                  Terms of Service
                </Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
