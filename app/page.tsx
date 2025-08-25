import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Check, Lightbulb, TrendingUp, Shield, Zap, Target, BarChart3 } from "lucide-react"
import { FadeIn } from "@/components/fade-in"
import { AnimatedCard } from "@/components/animated-card"
import { StaggerContainer, StaggerItem } from "@/components/stagger-container"
import Link from "next/link"

// Sample data for table preview
const sampleIdeas = [
  {
    idea: "AI-Powered Email Assistant",
    monetisation: 9,
    monetisation_reason: "High recurring revenue potential with SaaS model",
    ease_of_build: 6,
    ease_of_build_reason: "Requires AI integration and email API knowledge",
    competition: 7,
    competition_reason: "Growing market with established players",
    category: "AI/SaaS",
  },
  {
    idea: "Local Service Marketplace",
    monetisation: 8,
    monetisation_reason: "Commission-based model with network effects",
    ease_of_build: 7,
    ease_of_build_reason: "Standard marketplace features, payment integration",
    competition: 8,
    competition_reason: "Highly competitive space with big players",
    category: "Marketplace",
  },
  {
    idea: "Micro-Learning Platform",
    monetisation: 7,
    monetisation_reason: "Subscription model with course sales potential",
    ease_of_build: 8,
    ease_of_build_reason: "Content management and video streaming required",
    competition: 6,
    competition_reason: "Niche market with room for specialization",
    category: "EdTech",
  },
  {
    idea: "Smart Home Dashboard",
    monetisation: 6,
    monetisation_reason: "Hardware dependency limits scalability",
    ease_of_build: 5,
    ease_of_build_reason: "IoT integration and device compatibility complex",
    competition: 7,
    competition_reason: "Established tech giants dominate",
    category: "IoT",
  },
  {
    idea: "Freelancer Time Tracker",
    monetisation: 8,
    monetisation_reason: "Clear value proposition, recurring revenue",
    ease_of_build: 9,
    ease_of_build_reason: "Straightforward CRUD app with time tracking",
    competition: 9,
    competition_reason: "Saturated market with many solutions",
    category: "Productivity",
  },
]

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-4xl text-center">
          <FadeIn>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
              Discover Your Next
              <span className="text-primary block">Million-Dollar Idea</span>
            </h1>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
              Access 1,000+ validated startup ideas with detailed analysis on monetization potential, competition
              levels, and ease of build. Stop brainstorming, start building.
            </p>
          </FadeIn>
          <FadeIn delay={0.4}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/explore">
                <Button size="lg" className="text-lg px-8 py-6 transition-all duration-200 hover:scale-105">
                  Explore Ideas Now
                </Button>
              </Link>
              <Link href="#preview">
                <Button
                  variant="outline"
                  size="lg"
                  className="text-lg px-8 py-6 bg-transparent transition-all duration-200 hover:scale-105"
                >
                  See Preview
                </Button>
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Table Preview Section */}
      <section id="preview" className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <FadeIn>
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Get a Taste of What's Inside</h2>
              <p className="text-muted-foreground text-lg">
                Here's a preview of 5 startup ideas. Unlock all 1,000+ with lifetime access.
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.3}>
            <Card className="overflow-hidden shadow-lg">
              <CardContent className="p-0">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead className="bg-muted">
                      <tr>
                        <th className="text-left p-4 font-semibold">Startup Idea</th>
                        <th className="text-left p-4 font-semibold">Monetisation</th>
                        <th className="text-left p-4 font-semibold">Ease of Build</th>
                        <th className="text-left p-4 font-semibold">Competition</th>
                        <th className="text-left p-4 font-semibold">Category</th>
                      </tr>
                    </thead>
                    <tbody>
                      {sampleIdeas.map((idea, index) => (
                        <tr key={index} className="border-b transition-colors hover:bg-muted/50">
                          <td className="p-4 font-medium">{idea.idea}</td>
                          <td className="p-4">
                            <div className="flex items-center gap-2">
                              <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary font-semibold text-sm transition-all duration-200 hover:bg-primary/20">
                                {idea.monetisation}
                              </div>
                            </div>
                          </td>
                          <td className="p-4">
                            <div className="flex items-center gap-2">
                              <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary font-semibold text-sm transition-all duration-200 hover:bg-primary/20">
                                {idea.ease_of_build}
                              </div>
                            </div>
                          </td>
                          <td className="p-4">
                            <div className="flex items-center gap-2">
                              <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary font-semibold text-sm transition-all duration-200 hover:bg-primary/20">
                                {idea.competition}
                              </div>
                            </div>
                          </td>
                          <td className="p-4">
                            <Badge variant="secondary" className="transition-colors hover:bg-secondary/80">
                              {idea.category}
                            </Badge>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                {/* Locked Content Overlay */}
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent"></div>
                  <div className="blur-sm opacity-50 border-b">
                    <div className="p-4 text-muted-foreground">
                      <div className="grid grid-cols-5 gap-4">
                        <div>🔒 Premium Idea #6</div>
                        <div>🔒 Score</div>
                        <div>🔒 Score</div>
                        <div>🔒 Score</div>
                        <div>🔒 Category</div>
                      </div>
                    </div>
                  </div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <AnimatedCard className="p-6 text-center shadow-lg">
                      <CardHeader>
                        <CardTitle>Unlock 995+ More Ideas</CardTitle>
                        <CardDescription>
                          Get lifetime access to our complete database of validated startup ideas
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <Link href="/pricing">
                          <Button size="lg" className="transition-all duration-200 hover:scale-105">
                            Get Full Access - £10
                          </Button>
                        </Link>
                      </CardContent>
                    </AnimatedCard>
                  </div>
                </div>
              </CardContent>
            </Card>
          </FadeIn>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-6xl">
          <FadeIn>
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold mb-4">Why Choose IdeaBench?</h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Every idea comes with detailed analysis to help you make informed decisions about your next venture.
              </p>
            </div>
          </FadeIn>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <StaggerItem>
              <AnimatedCard className="text-center p-6 h-full">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4 transition-all duration-200 hover:bg-primary/20">
                  <TrendingUp className="w-6 h-6 text-primary" />
                </div>
                <CardHeader>
                  <CardTitle className="text-xl">Monetization Analysis</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Detailed scoring and reasoning for revenue potential, business models, and market size.
                  </p>
                </CardContent>
              </AnimatedCard>
            </StaggerItem>

            <StaggerItem>
              <AnimatedCard className="text-center p-6 h-full">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4 transition-all duration-200 hover:bg-primary/20">
                  <Zap className="w-6 h-6 text-primary" />
                </div>
                <CardHeader>
                  <CardTitle className="text-xl">Build Difficulty</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Technical complexity assessment to match ideas with your skill level and resources.
                  </p>
                </CardContent>
              </AnimatedCard>
            </StaggerItem>

            <StaggerItem>
              <AnimatedCard className="text-center p-6 h-full">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4 transition-all duration-200 hover:bg-primary/20">
                  <Target className="w-6 h-6 text-primary" />
                </div>
                <CardHeader>
                  <CardTitle className="text-xl">Competition Insights</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Market saturation analysis and competitive landscape overview for strategic planning.
                  </p>
                </CardContent>
              </AnimatedCard>
            </StaggerItem>

            <StaggerItem>
              <AnimatedCard className="text-center p-6 h-full">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4 transition-all duration-200 hover:bg-primary/20">
                  <BarChart3 className="w-6 h-6 text-primary" />
                </div>
                <CardHeader>
                  <CardTitle className="text-xl">Smart Filtering</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Filter by category, difficulty, and potential to find ideas that match your criteria.
                  </p>
                </CardContent>
              </AnimatedCard>
            </StaggerItem>

            <StaggerItem>
              <AnimatedCard className="text-center p-6 h-full">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4 transition-all duration-200 hover:bg-primary/20">
                  <Lightbulb className="w-6 h-6 text-primary" />
                </div>
                <CardHeader>
                  <CardTitle className="text-xl">Curated Quality</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Hand-picked and researched ideas, not AI-generated fluff. Real opportunities, real analysis.
                  </p>
                </CardContent>
              </AnimatedCard>
            </StaggerItem>

            <StaggerItem>
              <AnimatedCard className="text-center p-6 h-full">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4 transition-all duration-200 hover:bg-primary/20">
                  <Shield className="w-6 h-6 text-primary" />
                </div>
                <CardHeader>
                  <CardTitle className="text-xl">Lifetime Access</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    One-time payment for permanent access. No subscriptions, no recurring fees, just value.
                  </p>
                </CardContent>
              </AnimatedCard>
            </StaggerItem>
          </StaggerContainer>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="container mx-auto max-w-4xl text-center">
          <FadeIn>
            <h2 className="text-3xl font-bold mb-4">Simple, Transparent Pricing</h2>
            <p className="text-muted-foreground text-lg mb-12">
              Get lifetime access to all 1,000+ startup ideas for a one-time payment.
            </p>
          </FadeIn>

          <FadeIn delay={0.3}>
            <AnimatedCard className="max-w-md mx-auto p-8 relative overflow-hidden shadow-lg">
              <div className="absolute top-0 right-0 bg-primary text-primary-foreground px-3 py-1 text-sm font-semibold">
                50% OFF
              </div>
              <CardHeader className="text-center">
                <CardTitle className="text-2xl">Lifetime Access</CardTitle>
                <CardDescription className="text-lg">Everything you need to find your next big idea</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="text-center">
                  <div className="text-4xl font-bold">
                    <span className="line-through text-muted-foreground text-2xl">£20</span>
                    <span className="text-primary ml-2">£10</span>
                  </div>
                  <p className="text-sm text-muted-foreground mt-1">Limited time offer</p>
                </div>

                <ul className="space-y-3 text-left">
                  <li className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-primary flex-shrink-0" />
                    <span>1,000+ validated startup ideas</span>
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
                    <span>Lifetime updates & new ideas</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-primary flex-shrink-0" />
                    <span>No recurring fees</span>
                  </li>
                </ul>

                <Link href="/payment" className="block">
                  <Button size="lg" className="w-full text-lg py-6 transition-all duration-200 hover:scale-105">
                    Get Lifetime Access - £10
                  </Button>
                </Link>

                <p className="text-xs text-muted-foreground text-center">
                  Secure payment via Stripe. 30-day money-back guarantee.
                </p>
              </CardContent>
            </AnimatedCard>
          </FadeIn>
        </div>
      </section>

      <Footer />
    </div>
  )
}
