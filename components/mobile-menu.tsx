"use client"

import { useState } from "react"
import { Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false)

  const closeMenu = () => setIsOpen(false)

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="md:hidden">
          <Menu className="h-6 w-6" />
          <span className="sr-only">Toggle menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="w-[80vw] sm:w-[350px] pt-12">
        <div className="flex flex-col gap-6">
          <nav className="flex flex-col space-y-4">
            <Link
              href="#value"
              onClick={closeMenu}
              className="text-lg font-medium text-secondary hover:text-primary transition-colors"
            >
              How We Help
            </Link>
            <Link
              href="#programs"
              onClick={closeMenu}
              className="text-lg font-medium text-secondary hover:text-primary transition-colors"
            >
              Programs
            </Link>
            <Link
              href="#mentors"
              onClick={closeMenu}
              className="text-lg font-medium text-secondary hover:text-primary transition-colors"
            >
              Mentors
            </Link>
            <Link
              href="#faq"
              onClick={closeMenu}
              className="text-lg font-medium text-secondary hover:text-primary transition-colors"
            >
              FAQ
            </Link>
          </nav>
          <div className="flex flex-col gap-3 mt-4">
            <Button asChild variant="outline" className="w-full border-primary text-primary hover:bg-primary/10">
              <Link href="#subscription-form" onClick={closeMenu}>
                Subscribe to Access Resources
              </Link>
            </Button>
            <Button asChild variant="outline" className="w-full border-primary text-primary hover:bg-primary/10">
              <Link href="https://calendly.com/modo-academy/intro_call" target="_blank">
                Book a Consultation
              </Link>
            </Button>
            <Button asChild className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
              <Link href="https://calendly.com/modo-academy/stanford-grad-mentored-spark-program" target="_blank">
                Enroll Now
              </Link>
            </Button>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  )
}
