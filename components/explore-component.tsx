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
import {startupIdeas} from "@/lib/lists";

type SortField = "idea" | "monetisation" | "ease_of_build" | "competition" | "category"
type SortDirection = "asc" | "desc"

type ExplorePageProps = {
    authenticated: boolean;
    hasAccess: boolean;
};

export default function ExploreComponent(props: ExplorePageProps) {
    const [searchTerm, setSearchTerm] = useState("")
    const [selectedCategory, setSelectedCategory] = useState<string>("all")
    const [monetisationRange, setMonetisationRange] = useState([1, 5])
    const [easeOfBuildRange, setEaseOfBuildRange] = useState([1, 5])
    const [competitionRange, setCompetitionRange] = useState([1, 5])
    const [sortField, setSortField] = useState<SortField>("monetisation")
    const [sortDirection, setSortDirection] = useState<SortDirection>("desc")
    const [isAuthenticated, setIsAuthenticated] = useState(props.authenticated)
    const [hasFullAccess, setHasFullAccess] = useState(props.hasAccess)


    // Get unique categories
    const categories = useMemo(() => {
        const cats = startupIdeas.flatMap((idea) =>
            idea.category.split(", ").map((c) => c.trim())
        )
        return Array.from(new Set(cats)).sort()
    }, [])

    // Filter and sort ideas
    const filteredAndSortedIdeas = useMemo(() => {
        const filtered = startupIdeas.filter((idea) => {
            const matchesSearch =
                idea.idea.toLowerCase().includes(searchTerm.toLowerCase()) ||
                idea.category
                    .split(", ")
                    .map((c) => c.toLowerCase())
                    .some((c) => c.includes(searchTerm.toLowerCase()))
            const matchesCategory =
                selectedCategory === "all" ||
                idea.category.split(", ").map((c) => c.trim()).includes(selectedCategory)
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

    const visibleIdeas = hasFullAccess ? filteredAndSortedIdeas : filteredAndSortedIdeas.slice(0, 5)
    const lockedIdeas = hasFullAccess ? [] : filteredAndSortedIdeas.slice(5)

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
                                            max={5}
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
                                            max={5}
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
                                            max={5}
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
                                {!hasFullAccess && lockedIdeas.length > 0 && (
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

                                                <td className="p-4 flex flex-wrap gap-2">
                                                    {idea.category.split(", ").map((cat, idx) => (
                                                        <Badge
                                                            key={idx}
                                                            variant="secondary"
                                                            className="transition-colors duration-200 hover:bg-secondary/80"
                                                        >
                                                            {cat}
                                                        </Badge>
                                                    ))}
                                                </td>


                                            </tr>
                                        ))}
                                        </tbody>
                                    </table>
                                </div>

                                {/* Locked Content Overlay */}
                                {/* Locked Content Overlay */}
                                {!hasFullAccess && lockedIdeas.length > 0 && (
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
                                                        {!isAuthenticated ? (
                                                            <Link href="/login">
                                                                <Button size="lg" className="w-full transition-all duration-200 hover:scale-105">
                                                                    Sign in to Unlock
                                                                </Button>
                                                            </Link>
                                                        ) : (
                                                            <Link href="/pricing">
                                                                <Button size="lg" className="w-full transition-all duration-200 hover:scale-105">
                                                                    Upgrade for Full Access
                                                                </Button>
                                                            </Link>
                                                        )}
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
