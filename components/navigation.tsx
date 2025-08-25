"use client"

import Link from "next/link"
import { useTheme } from "next-themes"
import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { Moon, Sun, Menu, User, LogOut } from "lucide-react"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { useRouter } from "next/navigation"

export function Navigation() {
  const { theme, setTheme } = useTheme()
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const router = useRouter()

  // Check authentication status
  useEffect(() => {
    const checkAuth = () => {
      const authStatus = localStorage.getItem("isAuthenticated")
      setIsAuthenticated(authStatus === "true")
    }

    checkAuth()
    // Listen for storage changes (for cross-tab authentication)
    window.addEventListener("storage", checkAuth)

    return () => window.removeEventListener("storage", checkAuth)
  }, [])

  const handleLogout = () => {
    localStorage.removeItem("isAuthenticated")
    setIsAuthenticated(false)
    router.push("/")
  }

  return (
    <nav className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50 transition-all duration-200">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <Link href="/" className="text-xl font-bold text-primary transition-colors hover:text-primary/80">
              StartupIdeas
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <Link
                href="/"
                className="text-foreground hover:text-primary px-3 py-2 rounded-md text-sm font-medium transition-all duration-200 hover:bg-muted/50"
              >
                Home
              </Link>
              <Link
                href="/explore"
                className="text-muted-foreground hover:text-primary px-3 py-2 rounded-md text-sm font-medium transition-all duration-200 hover:bg-muted/50"
              >
                Explore Ideas
              </Link>
              {!isAuthenticated && (
                <Link
                  href="/pricing"
                  className="text-muted-foreground hover:text-primary px-3 py-2 rounded-md text-sm font-medium transition-all duration-200 hover:bg-muted/50"
                >
                  Pricing
                </Link>
              )}
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="transition-all duration-200 hover:scale-110"
            >
              <Sun className="h-4 w-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
              <Moon className="absolute h-4 w-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
              <span className="sr-only">Toggle theme</span>
            </Button>

            <div className="hidden md:flex items-center space-x-2">
              {isAuthenticated ? (
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" size="icon" className="transition-all duration-200 hover:scale-110">
                      <User className="h-4 w-4" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end" className="animate-in slide-in-from-top-2 duration-200">
                    <DropdownMenuItem asChild>
                      <Link href="/explore">Dashboard</Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem asChild>
                      <Link href="/profile">Profile</Link>
                    </DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem onClick={handleLogout}>
                      <LogOut className="h-4 w-4 mr-2" />
                      Sign Out
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              ) : (
                <>
                  <Link href="/login">
                    <Button variant="ghost" className="transition-all duration-200 hover:scale-105">
                      Sign In
                    </Button>
                  </Link>
                  <Link href="/pricing">
                    <Button className="transition-all duration-200 hover:scale-105">Get Access</Button>
                  </Link>
                </>
              )}
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="transition-all duration-200 hover:scale-110"
              >
                <Menu className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden animate-in slide-in-from-top-2 duration-200">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 border-t">
              <Link
                href="/"
                className="text-foreground hover:text-primary block px-3 py-2 rounded-md text-base font-medium transition-all duration-200 hover:bg-muted/50"
              >
                Home
              </Link>
              <Link
                href="/explore"
                className="text-muted-foreground hover:text-primary block px-3 py-2 rounded-md text-base font-medium transition-all duration-200 hover:bg-muted/50"
              >
                Explore Ideas
              </Link>
              {!isAuthenticated && (
                <Link
                  href="/pricing"
                  className="text-muted-foreground hover:text-primary block px-3 py-2 rounded-md text-base font-medium transition-all duration-200 hover:bg-muted/50"
                >
                  Pricing
                </Link>
              )}
              <div className="flex space-x-2 px-3 py-2">
                {isAuthenticated ? (
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={handleLogout}
                    className="transition-all duration-200 hover:scale-105 bg-transparent"
                  >
                    <LogOut className="h-4 w-4 mr-2" />
                    Sign Out
                  </Button>
                ) : (
                  <>
                    <Link href="/login">
                      <Button variant="ghost" size="sm" className="transition-all duration-200 hover:scale-105">
                        Sign In
                      </Button>
                    </Link>
                    <Link href="/pricing">
                      <Button size="sm" className="transition-all duration-200 hover:scale-105">
                        Get Access
                      </Button>
                    </Link>
                  </>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
