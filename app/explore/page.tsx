"use client"

import { useState, useMemo, useEffect } from "react"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Slider } from "@/components/ui/slider"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { ChevronUp, ChevronDown, Search, Filter, Lock } from "lucide-react"
import { FadeIn } from "@/components/fade-in"
import { AnimatedCard } from "@/components/animated-card"
import Link from "next/link"

// Extended dataset of startup ideas
const startupIdeas = [
  {
    idea: "AI-Powered Email Assistant",
    monetisation: 9,
    monetisation_reason:
      "High recurring revenue potential with SaaS model, enterprise clients willing to pay premium for productivity gains",
    ease_of_build: 6,
    ease_of_build_reason: "Requires AI integration, email API knowledge, and sophisticated NLP processing",
    competition: 7,
    competition_reason:
      "Growing market with established players like Grammarly and Jasper, but room for specialization",
    category: "AI/SaaS",
  },
  {
    idea: "Local Service Marketplace",
    monetisation: 8,
    monetisation_reason: "Commission-based model with strong network effects, multiple revenue streams from both sides",
    ease_of_build: 7,
    ease_of_build_reason:
      "Standard marketplace features, payment integration, geolocation, and review systems required",
    competition: 8,
    competition_reason: "Highly competitive space dominated by TaskRabbit, Thumbtack, and local players",
    category: "Marketplace",
  },
  {
    idea: "Micro-Learning Platform",
    monetisation: 7,
    monetisation_reason: "Subscription model with course sales, corporate training contracts provide steady revenue",
    ease_of_build: 8,
    ease_of_build_reason: "Content management system, video streaming, progress tracking, and mobile app needed",
    competition: 6,
    competition_reason: "Niche market with room for specialization, less saturated than general education platforms",
    category: "EdTech",
  },
  {
    idea: "Smart Home Dashboard",
    monetisation: 6,
    monetisation_reason:
      "Hardware dependency limits scalability, but premium pricing possible for integrated solutions",
    ease_of_build: 5,
    ease_of_build_reason: "Complex IoT integration, device compatibility, real-time data processing challenges",
    competition: 7,
    competition_reason: "Established tech giants like Google, Amazon dominate, but niche opportunities exist",
    category: "IoT",
  },
  {
    idea: "Freelancer Time Tracker",
    monetisation: 8,
    monetisation_reason: "Clear value proposition with recurring revenue, easy to scale across different professions",
    ease_of_build: 9,
    ease_of_build_reason: "Straightforward CRUD application with time tracking, reporting, and basic integrations",
    competition: 9,
    competition_reason: "Extremely saturated market with Toggl, RescueTime, and dozens of alternatives",
    category: "Productivity",
  },
  {
    idea: "Sustainable Fashion Rental",
    monetisation: 7,
    monetisation_reason: "Subscription and rental fees, growing market awareness of sustainability",
    ease_of_build: 6,
    ease_of_build_reason: "Inventory management, logistics, cleaning processes, and mobile app required",
    competition: 5,
    competition_reason: "Emerging market with few established players, opportunity for differentiation",
    category: "Fashion",
  },
  {
    idea: "Mental Health Chatbot",
    monetisation: 8,
    monetisation_reason: "B2B sales to healthcare providers, insurance partnerships, premium individual subscriptions",
    ease_of_build: 4,
    ease_of_build_reason: "Complex AI/ML requirements, regulatory compliance, clinical validation needed",
    competition: 6,
    competition_reason: "Growing market with some players like Woebot, but still room for innovation",
    category: "HealthTech",
  },
  {
    idea: "Carbon Footprint Tracker",
    monetisation: 6,
    monetisation_reason: "Freemium model with premium analytics, corporate ESG reporting services",
    ease_of_build: 7,
    ease_of_build_reason: "Data integration from multiple sources, complex calculations, user-friendly interface",
    competition: 5,
    competition_reason: "Emerging market with growing demand but limited established solutions",
    category: "GreenTech",
  },
  {
    idea: "Virtual Interior Designer",
    monetisation: 8,
    monetisation_reason: "High-value transactions, commission from furniture sales, premium consultation fees",
    ease_of_build: 5,
    ease_of_build_reason: "AR/VR technology, 3D modeling, extensive product catalog integration required",
    competition: 6,
    competition_reason: "Some players exist but market still developing, opportunity for better UX",
    category: "PropTech",
  },
  {
    idea: "Podcast Analytics Platform",
    monetisation: 7,
    monetisation_reason: "SaaS model targeting podcasters and agencies, growing creator economy",
    ease_of_build: 6,
    ease_of_build_reason: "Data aggregation from multiple platforms, analytics dashboard, API integrations",
    competition: 7,
    competition_reason: "Established players like Chartable, but room for specialized features",
    category: "Media/Analytics",
  },
  {
    idea: "Pet Care Scheduling App",
    monetisation: 7,
    monetisation_reason: "Subscription model, commission from service providers, premium features for pet owners",
    ease_of_build: 8,
    ease_of_build_reason: "Standard booking system with notifications, payment processing, user profiles",
    competition: 6,
    competition_reason: "Some regional players but no dominant global solution, pet industry growing",
    category: "Lifestyle",
  },
  {
    idea: "Blockchain Supply Chain Tracker",
    monetisation: 6,
    monetisation_reason: "Enterprise contracts, but market still developing and adoption uncertain",
    ease_of_build: 3,
    ease_of_build_reason: "Complex blockchain integration, enterprise-grade security, industry-specific requirements",
    competition: 4,
    competition_reason: "Early market with few established players, high barriers to entry",
    category: "Blockchain",
  },
  {
    idea: "Language Exchange Platform",
    monetisation: 6,
    monetisation_reason: "Freemium model with premium matching, tutoring marketplace commission",
    ease_of_build: 7,
    ease_of_build_reason: "Video calling integration, matching algorithms, community features needed",
    competition: 8,
    competition_reason: "Competitive market with HelloTalk, Tandem, and language learning apps",
    category: "EdTech",
  },
  {
    idea: "Elderly Care Coordination",
    monetisation: 9,
    monetisation_reason: "High-value market, insurance partnerships, family willingness to pay for peace of mind",
    ease_of_build: 6,
    ease_of_build_reason: "Healthcare integrations, emergency systems, family communication features",
    competition: 5,
    competition_reason: "Underserved market with aging population, few comprehensive solutions",
    category: "HealthTech",
  },
  {
    idea: "Influencer Campaign Manager",
    monetisation: 8,
    monetisation_reason: "Commission-based model, growing influencer marketing industry",
    ease_of_build: 7,
    ease_of_build_reason: "Social media API integrations, campaign tracking, payment systems",
    competition: 7,
    competition_reason: "Several players exist but market still growing rapidly",
    category: "Marketing",
  },
]

type SortField = "idea" | "monetisation" | "ease_of_build" | "competition" | "category"
type SortDirection = "asc" | "desc"

export default function ExplorePage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState<string>("all")
  const [monetisationRange, setMonetisationRange] = useState([1, 10])
  const [easeOfBuildRange, setEaseOfBuildRange] = useState([1, 10])
  const [competitionRange, setCompetitionRange] = useState([1, 10])
  const [sortField, setSortField] = useState<SortField>("monetisation")
  const [sortDirection, setSortDirection] = useState<SortDirection>("desc")
  const [isAuthenticated, setIsAuthenticated] = useState(false)

  useEffect(() => {
    const checkAuth = () => {
      const authStatus = localStorage.getItem("isAuthenticated")
      setIsAuthenticated(authStatus === "true")
    }

    checkAuth()
    window.addEventListener("storage", checkAuth)

    return () => window.removeEventListener("storage", checkAuth)
  }, [])

  // Get unique categories
  const categories = useMemo(() => {
    const cats = Array.from(new Set(startupIdeas.map((idea) => idea.category)))
    return cats.sort()
  }, [])

  // Filter and sort ideas
  const filteredAndSortedIdeas = useMemo(() => {
    const filtered = startupIdeas.filter((idea) => {
      const matchesSearch =
        idea.idea.toLowerCase().includes(searchTerm.toLowerCase()) ||
        idea.category.toLowerCase().includes(searchTerm.toLowerCase())
      const matchesCategory = selectedCategory === "all" || idea.category === selectedCategory
      const matchesMonetisation = idea.monetisation >= monetisationRange[0] && idea.monetisation <= monetisationRange[1]
      const matchesEaseOfBuild = idea.ease_of_build >= easeOfBuildRange[0] && idea.ease_of_build <= easeOfBuildRange[1]
      const matchesCompetition = idea.competition >= competitionRange[0] && idea.competition <= competitionRange[1]

      return matchesSearch && matchesCategory && matchesMonetisation && matchesEaseOfBuild && matchesCompetition
    })

    // Sort the filtered results
    filtered.sort((a, b) => {
      let aValue: string | number = a[sortField]
      let bValue: string | number = b[sortField]

      if (typeof aValue === "string") {
        aValue = aValue.toLowerCase()
        bValue = (bValue as string).toLowerCase()
      }

      if (sortDirection === "asc") {
        return aValue < bValue ? -1 : aValue > bValue ? 1 : 0
      } else {
        return aValue > bValue ? -1 : aValue < bValue ? 1 : 0
      }
    })

    return filtered
  }, [searchTerm, selectedCategory, monetisationRange, easeOfBuildRange, competitionRange, sortField, sortDirection])

  const handleSort = (field: SortField) => {
    if (sortField === field) {
      setSortDirection(sortDirection === "asc" ? "desc" : "asc")
    } else {
      setSortField(field)
      setSortDirection("desc")
    }
  }

  const getSortIcon = (field: SortField) => {
    if (sortField !== field) return null
    return sortDirection === "asc" ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />
  }

  const visibleIdeas = isAuthenticated ? filteredAndSortedIdeas : filteredAndSortedIdeas.slice(0, 5)
  const lockedIdeas = isAuthenticated ? [] : filteredAndSortedIdeas.slice(5)

  return (
    <TooltipProvider>
      <div className="min-h-screen bg-background">
        <Navigation />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <FadeIn>
            <div className="mb-8">
              <h1 className="text-3xl font-bold mb-2">Explore Startup Ideas</h1>
              <p className="text-muted-foreground">
                Discover and analyze {startupIdeas.length} validated startup opportunities
              </p>
            </div>
          </FadeIn>

          {/* Filters */}
          <FadeIn delay={0.2}>
            <Card className="mb-8 shadow-sm">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Filter className="w-5 h-5" />
                  Filters & Search
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Search */}
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                  <Input
                    placeholder="Search ideas or categories..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10 transition-all duration-200 focus:ring-2 focus:ring-primary/20"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {/* Category Filter */}
                  <div className="space-y-2">
                    <Label>Category</Label>
                    <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                      <SelectTrigger className="transition-all duration-200 hover:border-primary/50">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">All Categories</SelectItem>
                        {categories.map((category) => (
                          <SelectItem key={category} value={category}>
                            {category}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Monetisation Range */}
                  <div className="space-y-2">
                    <Label>
                      Monetisation Score: {monetisationRange[0]} - {monetisationRange[1]}
                    </Label>
                    <Slider
                      value={monetisationRange}
                      onValueChange={setMonetisationRange}
                      max={10}
                      min={1}
                      step={1}
                      className="w-full"
                    />
                  </div>

                  {/* Ease of Build Range */}
                  <div className="space-y-2">
                    <Label>
                      Ease of Build: {easeOfBuildRange[0]} - {easeOfBuildRange[1]}
                    </Label>
                    <Slider
                      value={easeOfBuildRange}
                      onValueChange={setEaseOfBuildRange}
                      max={10}
                      min={1}
                      step={1}
                      className="w-full"
                    />
                  </div>

                  {/* Competition Range */}
                  <div className="space-y-2">
                    <Label>
                      Competition Level: {competitionRange[0]} - {competitionRange[1]}
                    </Label>
                    <Slider
                      value={competitionRange}
                      onValueChange={setCompetitionRange}
                      max={10}
                      min={1}
                      step={1}
                      className="w-full"
                    />
                  </div>
                </div>
              </CardContent>
            </Card>
          </FadeIn>

          {/* Results Summary */}
          <FadeIn delay={0.3}>
            <div className="mb-6">
              <p className="text-muted-foreground">
                Showing {visibleIdeas.length} of {filteredAndSortedIdeas.length} ideas
                {!isAuthenticated && lockedIdeas.length > 0 && (
                  <span className="ml-2 text-primary">({lockedIdeas.length} more available with full access)</span>
                )}
              </p>
            </div>
          </FadeIn>

          {/* Data Table */}
          <FadeIn delay={0.4}>
            <Card className="shadow-sm">
              <CardContent className="p-0">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead className="bg-muted">
                      <tr>
                        <th
                          className="text-left p-4 font-semibold cursor-pointer hover:bg-muted/80 transition-colors duration-200"
                          onClick={() => handleSort("idea")}
                        >
                          <div className="flex items-center gap-2">
                            Startup Idea
                            {getSortIcon("idea")}
                          </div>
                        </th>
                        <th
                          className="text-left p-4 font-semibold cursor-pointer hover:bg-muted/80 transition-colors duration-200"
                          onClick={() => handleSort("monetisation")}
                        >
                          <div className="flex items-center gap-2">
                            Monetisation
                            {getSortIcon("monetisation")}
                          </div>
                        </th>
                        <th
                          className="text-left p-4 font-semibold cursor-pointer hover:bg-muted/80 transition-colors duration-200"
                          onClick={() => handleSort("ease_of_build")}
                        >
                          <div className="flex items-center gap-2">
                            Ease of Build
                            {getSortIcon("ease_of_build")}
                          </div>
                        </th>
                        <th
                          className="text-left p-4 font-semibold cursor-pointer hover:bg-muted/80 transition-colors duration-200"
                          onClick={() => handleSort("competition")}
                        >
                          <div className="flex items-center gap-2">
                            Competition
                            {getSortIcon("competition")}
                          </div>
                        </th>
                        <th
                          className="text-left p-4 font-semibold cursor-pointer hover:bg-muted/80 transition-colors duration-200"
                          onClick={() => handleSort("category")}
                        >
                          <div className="flex items-center gap-2">
                            Category
                            {getSortIcon("category")}
                          </div>
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {visibleIdeas.map((idea, index) => (
                        <tr key={index} className="border-b hover:bg-muted/30 transition-colors duration-200">
                          <td className="p-4 font-medium">{idea.idea}</td>
                          <td className="p-4">
                            <Tooltip>
                              <TooltipTrigger>
                                <div className="flex items-center gap-2 cursor-help">
                                  <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary font-semibold text-sm transition-all duration-200 hover:bg-primary/20 hover:scale-110">
                                    {idea.monetisation}
                                  </div>
                                </div>
                              </TooltipTrigger>
                              <TooltipContent className="max-w-xs">
                                <p>{idea.monetisation_reason}</p>
                              </TooltipContent>
                            </Tooltip>
                          </td>
                          <td className="p-4">
                            <Tooltip>
                              <TooltipTrigger>
                                <div className="flex items-center gap-2 cursor-help">
                                  <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary font-semibold text-sm transition-all duration-200 hover:bg-primary/20 hover:scale-110">
                                    {idea.ease_of_build}
                                  </div>
                                </div>
                              </TooltipTrigger>
                              <TooltipContent className="max-w-xs">
                                <p>{idea.ease_of_build_reason}</p>
                              </TooltipContent>
                            </Tooltip>
                          </td>
                          <td className="p-4">
                            <Tooltip>
                              <TooltipTrigger>
                                <div className="flex items-center gap-2 cursor-help">
                                  <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary font-semibold text-sm transition-all duration-200 hover:bg-primary/20 hover:scale-110">
                                    {idea.competition}
                                  </div>
                                </div>
                              </TooltipTrigger>
                              <TooltipContent className="max-w-xs">
                                <p>{idea.competition_reason}</p>
                              </TooltipContent>
                            </Tooltip>
                          </td>
                          <td className="p-4">
                            <Badge variant="secondary" className="transition-colors duration-200 hover:bg-secondary/80">
                              {idea.category}
                            </Badge>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                {/* Locked Content Overlay */}
                {!isAuthenticated && lockedIdeas.length > 0 && (
                  <div className="relative">
                    <div className="border-t">
                      {lockedIdeas.slice(0, 3).map((idea, index) => (
                        <div key={`locked-${index}`} className="border-b p-4 blur-sm opacity-50">
                          <div className="grid grid-cols-5 gap-4 items-center">
                            <div className="font-medium">{idea.idea}</div>
                            <div className="flex items-center gap-2">
                              <Lock className="w-4 h-4" />
                              <span className="text-sm">Locked</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <Lock className="w-4 h-4" />
                              <span className="text-sm">Locked</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <Lock className="w-4 h-4" />
                              <span className="text-sm">Locked</span>
                            </div>
                            <div>
                              <Badge variant="outline">
                                <Lock className="w-3 h-3 mr-1" />
                                Locked
                              </Badge>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>

                    <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent"></div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <AnimatedCard className="p-6 text-center shadow-lg max-w-md">
                        <CardHeader>
                          <CardTitle className="flex items-center gap-2 justify-center">
                            <Lock className="w-5 h-5" />
                            Unlock {lockedIdeas.length} More Ideas
                          </CardTitle>
                          <CardDescription>
                            Get lifetime access to our complete database with detailed analysis
                          </CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-4">
                          <div className="text-2xl font-bold text-primary">£10</div>
                          <div className="space-y-2">
                            <Link href="/pricing">
                              <Button size="lg" className="w-full transition-all duration-200 hover:scale-105">
                                Get Full Access
                              </Button>
                            </Link>
                            <Link href="/login">
                              <Button
                                variant="outline"
                                size="sm"
                                className="w-full bg-transparent transition-all duration-200 hover:scale-105"
                              >
                                Already have access? Sign in
                              </Button>
                            </Link>
                          </div>
                        </CardContent>
                      </AnimatedCard>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          </FadeIn>
        </div>

        <Footer />
      </div>
    </TooltipProvider>
  )
}
