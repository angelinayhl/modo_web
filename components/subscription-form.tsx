"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { AlertCircle, CheckCircle, ExternalLink } from "lucide-react"
import Link from "next/link"

export default function SubscriptionForm() {
  const [email, setEmail] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubscribed, setIsSubscribed] = useState(false)
  const [error, setError] = useState("")

  const validateEmail = (email: string) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return regex.test(email)
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError("")

    if (!validateEmail(email)) {
      setError("Please enter a valid email address")
      return
    }

    setIsSubmitting(true)

    // Simulate API call with timeout
    setTimeout(() => {
      setIsSubmitting(false)
      setIsSubscribed(true)
      // In a real implementation, you would send the email to your backend here
    }, 1000)
  }

  return (
    <section id="subscription-form" className="py-16 bg-primary/5">
      <div className="container px-4 md:px-6 max-w-4xl mx-auto">
        <Card className="border-primary/20 shadow-lg overflow-hidden relative">
          <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 bg-primary text-white px-4 py-2 rounded-full font-medium text-sm shadow-md">
            Free Resources Inside
          </div>
          <CardHeader className="bg-primary/10 pb-6">
            <CardTitle className="text-2xl md:text-3xl text-center text-secondary">
              Subscribe to Access Our <span className="text-primary">Free Resource Hub</span>
            </CardTitle>
            <CardDescription className="text-center text-muted-foreground text-lg">
              Get exclusive access to our college admission resources, guides, and templates
            </CardDescription>
          </CardHeader>
          <CardContent className="pt-8 pb-6">
            {!isSubscribed ? (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-2">
                  <div className="relative">
                    <Input
                      type="email"
                      placeholder="Enter your email address"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className={`h-12 text-lg px-4 ${error ? "border-red-500 focus-visible:ring-red-500" : ""}`}
                      disabled={isSubmitting}
                    />
                    {error && (
                      <div className="flex items-center mt-2 text-red-500 text-sm">
                        <AlertCircle className="h-4 w-4 mr-1" />
                        <span>{error}</span>
                      </div>
                    )}
                  </div>
                </div>
                <Button
                  type="submit"
                  className="w-full h-12 text-lg font-medium bg-primary hover:bg-primary/90"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Subscribing..." : "Subscribe Now"}
                </Button>
                <p className="text-xs text-center text-muted-foreground pt-2">
                  We respect your privacy and will never share your information.
                </p>
              </form>
            ) : (
              <div className="space-y-6">
                <div className="flex flex-col items-center text-center space-y-4">
                  <div className="h-16 w-16 rounded-full bg-primary/20 flex items-center justify-center">
                    <CheckCircle className="h-8 w-8 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-secondary">Thank You for Subscribing!</h3>
                    <p className="text-muted-foreground mt-1">You now have access to our exclusive resource hub.</p>
                  </div>
                </div>
                <div className="bg-secondary/5 p-4 rounded-lg">
                  <p className="font-medium text-secondary mb-3">Access your resources here:</p>
                  <Button
                    className="w-full bg-secondary hover:bg-secondary/90 flex items-center justify-center gap-2"
                    asChild
                  >
                    <Link
                      href="https://modoacademy.notion.site/college-admission-free-resource-hub?pvs=4"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      College Admission Resource Hub
                      <ExternalLink className="h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
