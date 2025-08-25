'use client'

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Check, Star, Zap } from "lucide-react"
import Link from "next/link"

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-4">Simple, Transparent Pricing</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Get lifetime access to all 200+ startup ideas for a one-time payment. No subscriptions, no hidden fees.
          </p>
        </div>

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Free Preview */}
            <Card className="relative">
              <CardHeader className="text-center pb-8">
                <CardTitle className="text-2xl">Free Preview</CardTitle>
                <CardDescription>Get a taste of what's inside</CardDescription>
                <div className="text-4xl font-bold mt-4">£0</div>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-3">
                  <li className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-primary flex-shrink-0" />
                    <span>5 startup ideas</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-primary flex-shrink-0" />
                    <span>Basic analysis scores</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-primary flex-shrink-0" />
                    <span>Limited filtering</span>
                  </li>
                </ul>
                <Link href="/explore" className="block">
                  <Button variant="outline" className="w-full mt-6 bg-transparent">
                    Explore Free Ideas
                  </Button>
                </Link>
              </CardContent>
            </Card>

            {/* Lifetime Access - Featured */}
            <Card className="relative border-primary shadow-lg scale-105">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <div className="bg-primary text-primary-foreground px-4 py-2 rounded-full text-sm font-semibold flex items-center gap-2">
                  <Star className="w-4 h-4" />
                  Most Popular
                </div>
              </div>
              <CardHeader className="text-center pb-8 pt-8">
                <CardTitle className="text-2xl">Lifetime Access</CardTitle>
                <CardDescription>Everything you need to find your next big idea</CardDescription>
                <div className="mt-4">
                  <div className="text-4xl font-bold">
                    <span className="line-through text-muted-foreground text-2xl">£20</span>
                    <span className="text-primary ml-2">£10</span>
                  </div>
                  <p className="text-sm text-muted-foreground mt-1">Limited time - 50% off</p>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-3">
                  <li className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-primary flex-shrink-0" />
                    <span>200+ validated startup ideas</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-primary flex-shrink-0" />
                    <span>Detailed monetization analysis</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-primary flex-shrink-0" />
                    <span>Competition & difficulty scores</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-primary flex-shrink-0" />
                    <span>Advanced filtering & sorting</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-primary flex-shrink-0" />
                    <span>Detailed reasoning for each score</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-primary flex-shrink-0" />
                    <span>Lifetime updates & new ideas</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-primary flex-shrink-0" />
                    <span>No recurring fees</span>
                  </li>
                </ul>
                <Button
                    size="lg" className="w-full mt-6 text-lg py-6"
                    onClick={async () => {
                      const res = await fetch("/api/create-checkout-session", {
                        method: "POST",
                        headers: { "Content-Type": "application/json" },
                      })
                      const data = await res.json()
                      if (data.url) {
                        window.location.href = data.url
                      }
                    }}
                >
                  <Zap className="w-5 h-5 mr-2" />
                  Get Lifetime Access - £10
                </Button>
                <p className="text-xs text-muted-foreground text-center">
                  Secure payment via Stripe
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="max-w-3xl mx-auto mt-20">
          <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
          <div className="space-y-8">
            <div>
              <h3 className="text-lg font-semibold mb-2">What exactly do I get with lifetime access?</h3>
              <p className="text-muted-foreground">
                You get access to our complete database of 200+ startup ideas, each with detailed analysis including
                monetization potential, ease of build, competition level, and reasoning behind each score. Plus all
                future updates and new ideas added to the database.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2">How are the ideas validated?</h3>
              <p className="text-muted-foreground">
                Each idea is scraped from Reddit and someone out there is building it. We evaluate
                market demand, competition, technical feasibility, and revenue potential to provide you with actionable
                insights.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2">Will there be new ideas added?</h3>
              <p className="text-muted-foreground">
                We continuously research and add new startup ideas to the database. All lifetime access customers get
                these updates automatically at no additional cost.
              </p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}
