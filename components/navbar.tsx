"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu, Search, Globe, Sun, Moon, ChevronDown } from "lucide-react"
import { useTheme } from "next-themes"
import { cn } from "@/lib/utils"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Input } from "@/components/ui/input"

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isOpen, setIsOpen] = useState(false)
  const [isSearchOpen, setIsSearchOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  const pathname = usePathname()
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const isActive = (path: string) => {
    return pathname === path
  }

  const navLinks = [
    {
      name: "Destinations",
      path: "/destinations",
      dropdown: true,
      items: [
        { name: "Europe", path: "/destinations/europe" },
        { name: "Asia", path: "/destinations/asia" },
        { name: "Africa", path: "/destinations/africa" },
        { name: "Americas", path: "/destinations/americas" },
        { name: "Oceania", path: "/destinations/oceania" },
      ],
    },
    {
      name: "Experiences",
      path: "/experiences",
      dropdown: true,
      items: [
        { name: "Adventure", path: "/experiences/adventure" },
        { name: "Cultural", path: "/experiences/cultural" },
        { name: "Luxury", path: "/experiences/luxury" },
        { name: "Wellness", path: "/experiences/wellness" },
        { name: "Food & Wine", path: "/experiences/food-wine" },
      ],
    },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ]

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled ? "bg-white/80 dark:bg-gray-900/80 backdrop-blur-md shadow-sm" : "bg-transparent text-white",
      )}
    >
      <div className="container mx-auto px-4">
        <div className="flex h-20 items-center justify-between">
          <Link href="/" className="flex items-center">
            <div className="relative h-10 w-40">
              <Image src="/images/logo.png" alt="EasyOurTour" fill className="object-contain" priority />
            </div>
          </Link>

          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) =>
              link.dropdown ? (
                <div
                  key={link.name}
                  className="relative"
                  onMouseEnter={() => setActiveDropdown(link.name)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <button
                    className={cn(
                      "px-4 py-2 rounded-full text-sm font-medium transition-colors flex items-center gap-1",
                      isActive(link.path)
                        ? "text-brand-teal"
                        : isScrolled
                          ? "text-foreground hover:text-brand-teal"
                          : "text-white hover:text-brand-light",
                    )}
                  >
                    {link.name} <ChevronDown className="h-4 w-4" />
                  </button>
                  <AnimatePresence>
                    {activeDropdown === link.name && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        transition={{ duration: 0.2 }}
                        className="absolute top-full left-0 mt-1 w-48 bg-white dark:bg-gray-900 rounded-xl shadow-lg overflow-hidden"
                      >
                        <div className="py-2">
                          {link.items?.map((item) => (
                            <Link
                              key={item.path}
                              href={item.path}
                              className="block px-4 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-800"
                            >
                              {item.name}
                            </Link>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ) : (
                <Link
                  key={link.path}
                  href={link.path}
                  className={cn(
                    "px-4 py-2 rounded-full text-sm font-medium transition-colors",
                    isActive(link.path)
                      ? "text-brand-teal"
                      : isScrolled
                        ? "text-foreground hover:text-brand-teal"
                        : "text-white hover:text-brand-light",
                  )}
                >
                  {link.name}
                </Link>
              ),
            )}
          </nav>

          <div className="hidden lg:flex items-center gap-2">
            <button
              onClick={() => setIsSearchOpen(!isSearchOpen)}
              className={cn(
                "p-2 rounded-full transition-colors",
                isScrolled ? "hover:bg-gray-100 dark:hover:bg-gray-800" : "hover:bg-white/20",
              )}
            >
              <Search size={18} className={isScrolled ? "text-foreground" : "text-white"} />
            </button>

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button
                  className={cn(
                    "p-2 rounded-full transition-colors",
                    isScrolled ? "hover:bg-gray-100 dark:hover:bg-gray-800" : "hover:bg-white/20",
                  )}
                >
                  <Globe size={18} className={isScrolled ? "text-foreground" : "text-white"} />
                </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem>English</DropdownMenuItem>
                <DropdownMenuItem>Español</DropdownMenuItem>
                <DropdownMenuItem>Français</DropdownMenuItem>
                <DropdownMenuItem>Deutsch</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className={cn(
                "p-2 rounded-full transition-colors",
                isScrolled ? "hover:bg-gray-100 dark:hover:bg-gray-800" : "hover:bg-white/20",
              )}
            >
              {theme === "dark" ? (
                <Sun size={18} className={isScrolled ? "text-foreground" : "text-white"} />
              ) : (
                <Moon size={18} className={isScrolled ? "text-foreground" : "text-white"} />
              )}
            </button>

            <Button
              className={cn(
                "ml-2 rounded-full",
                isScrolled
                  ? "bg-brand-teal hover:bg-brand-navy text-white"
                  : "bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white",
              )}
            >
              Book Now
            </Button>
          </div>

          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="lg:hidden">
              <Button
                variant="ghost"
                size="icon"
                className={cn("rounded-full", !isScrolled && "text-white hover:bg-white/20")}
              >
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <div className="flex justify-center mb-8 mt-4">
                <div className="relative h-10 w-40">
                  <Image src="/images/logo.png" alt="EasyOurTour" fill className="object-contain" />
                </div>
              </div>
              <nav className="flex flex-col gap-4">
                {navLinks.map((link) =>
                  link.dropdown ? (
                    <div key={link.name} className="space-y-2">
                      <p className="font-medium text-lg">{link.name}</p>
                      <div className="pl-4 space-y-2 border-l border-gray-200 dark:border-gray-800">
                        {link.items?.map((item) => (
                          <Link
                            key={item.path}
                            href={item.path}
                            onClick={() => setIsOpen(false)}
                            className="block text-muted-foreground hover:text-brand-teal"
                          >
                            {item.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  ) : (
                    <Link
                      key={link.path}
                      href={link.path}
                      onClick={() => setIsOpen(false)}
                      className={`text-lg font-medium transition-colors hover:text-brand-teal ${
                        isActive(link.path) ? "text-brand-teal" : "text-foreground"
                      }`}
                    >
                      {link.name}
                    </Link>
                  ),
                )}
                <div className="mt-4 pt-4 border-t">
                  <Button className="w-full bg-brand-teal hover:bg-brand-navy">Book Now</Button>
                </div>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>

      <AnimatePresence>
        {isSearchOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="border-t border-gray-200 dark:border-gray-800 overflow-hidden"
          >
            <div className="container mx-auto py-4 px-4">
              <div className="relative max-w-2xl mx-auto">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                <Input
                  placeholder="Search destinations, tours, experiences..."
                  className="pl-10 pr-10 py-6 text-base rounded-full"
                  autoFocus
                />
                <Button
                  size="sm"
                  className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full bg-brand-teal hover:bg-brand-navy"
                >
                  Search
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
