"use client"

import type React from "react"

import { useState, useEffect, useRef } from "react"
import Image from "next/image"
import { useRouter } from "next/navigation"
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Search, MapPin, ChevronDown, Plane } from "lucide-react"
import { cn } from "@/lib/utils"
import { useInView } from "react-intersection-observer"
import { DatePicker } from "@/components/ui/date-picker"
import { TravelersSelector } from "@/components/ui/travelers-selector"
import { DestinationSuggestions } from "@/components/ui/destination-suggestions"
import { format } from "date-fns"

export default function HeroSection() {
  const router = useRouter()
  const [currentSlide, setCurrentSlide] = useState(0)
  const [searchFocused, setSearchFocused] = useState(false)
  const [destination, setDestination] = useState("")
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(undefined)
  const [adults, setAdults] = useState(1)
  const [children, setChildren] = useState(0)
  const [isSearching, setIsSearching] = useState(false)
  const [showDestinationSuggestions, setShowDestinationSuggestions] = useState(false)

  const containerRef = useRef<HTMLDivElement>(null)
  const destinationInputRef = useRef<HTMLInputElement>(null)
  const { scrollY } = useScroll()
  const y = useTransform(scrollY, [0, 500], [0, 150])
  const opacity = useTransform(scrollY, [0, 300], [1, 0])
  const scale = useTransform(scrollY, [0, 300], [1, 1.1])
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  })

  const destinations = [
    {
      name: "Santorini",
      country: "Greece",
      image: "/images/greece.jpeg",
    },
    {
      name: "Kyoto",
      country: "Japan",
      image: "/images/japan.jpeg",
    },
    {
      name: "Bali",
      country: "Indonesia",
      image: "/images/bali.jpeg",
    },
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev === destinations.length - 1 ? 0 : prev + 1))
    }, 6000)
    return () => clearInterval(interval)
  }, [destinations.length])

  // Close destination suggestions when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (destinationInputRef.current && !destinationInputRef.current.contains(event.target as Node)) {
        setShowDestinationSuggestions(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [])

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSearching(true)

    // Construct search query parameters
    const params = new URLSearchParams()
    if (destination) params.append("destination", destination)
    if (selectedDate) params.append("date", format(selectedDate, "yyyy-MM-dd"))

    const totalTravelers = adults + children
    if (totalTravelers > 0) {
      params.append("travelers", totalTravelers.toString())
      params.append("adults", adults.toString())
      params.append("children", children.toString())
    }

    // Navigate to search results page
    router.push(`/search?${params.toString()}`)
  }

  const handleDestinationSelect = (selected: string) => {
    setDestination(selected)
    setShowDestinationSuggestions(false)
  }

  return (
    <div ref={containerRef} className="relative h-screen overflow-hidden">
      {/* Background Images - Using Slide Animation Instead of Fade */}
      <motion.div style={{ y, scale }} className="absolute inset-0 w-full h-full">
        {/* Dark overlay that stays constant */}
        <div className="absolute inset-0 bg-black/50 z-10"></div>

        {/* Slide animation instead of fade */}
        <AnimatePresence initial={false} mode="wait">
          {destinations.map(
            (destination, index) =>
              currentSlide === index && (
                <motion.div
                  key={destination.name}
                  initial={{ x: 300, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  exit={{ x: -300, opacity: 0 }}
                  transition={{
                    type: "spring",
                    stiffness: 50,
                    damping: 20,
                  }}
                  className="absolute inset-0"
                >
                  <Image
                    src={destination.image || "/placeholder.svg"}
                    alt={destination.name}
                    fill
                    priority
                    className="object-cover"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-b ${destination.color} opacity-70`} />
                </motion.div>
              ),
          )}
        </AnimatePresence>
      </motion.div>

      {/* Animated Wave Overlay */}
      <div className="absolute inset-0 pointer-events-none z-20">
        <div className="absolute bottom-0 left-0 right-0 h-32 wave-pattern" />
      </div>

      {/* Floating Airplane */}
      <motion.div
        className="absolute top-1/4 right-[10%] text-white/80 hidden lg:block z-20"
        animate={{
          y: [0, -20, 0],
          x: [0, 30, 0],
          rotate: [0, 5, 0],
        }}
        transition={{
          duration: 10,
          repeat: Number.POSITIVE_INFINITY,
          repeatType: "reverse",
        }}
      >
        <Plane className="h-16 w-16 text-brand-teal" />
      </motion.div>

      {/* Content */}
      <motion.div
        style={{ opacity }}
        className="relative z-30 h-full flex flex-col justify-center items-center text-white px-4"
      >
        <div className="container mx-auto max-w-6xl">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-center mb-8"
          >
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4 tracking-tight text-shadow-lg">
              <span className="block">Make Your Travel</span>
              {/* Fixed text effect - using solid color instead of gradient with background-clip */}
              <span className="block mt-2 text-brand-teal">Easy & Affordable</span>
            </h1>
            <p className="text-lg md:text-xl max-w-2xl mx-auto text-white mt-6 text-shadow">
              Extraordinary destinations, curated experiences, unforgettable journeys
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="max-w-4xl mx-auto mt-8"
          >
            <form
              onSubmit={handleSearch}
              className={cn(
                "bg-white/10 backdrop-blur-lg rounded-2xl p-4 md:p-6 transition-all duration-300",
                searchFocused ? "bg-white/20 shadow-2xl" : "",
              )}
            >
              <div className="flex flex-col md:flex-row gap-4">
                {/* Destination Input with Suggestions */}
                <div className="relative flex-1">
                  <div className="relative">
                    <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-white/70 z-10" />
                    <input
                      ref={destinationInputRef}
                      type="text"
                      placeholder="Where to?"
                      className="w-full pl-10 bg-white/10 border border-white/20 rounded-md text-white placeholder:text-white/70 h-12 text-lg focus:outline-none focus:ring-2 focus:ring-brand-teal focus:border-brand-teal"
                      value={destination}
                      onChange={(e) => setDestination(e.target.value)}
                      onFocus={() => {
                        setSearchFocused(true)
                        setShowDestinationSuggestions(true)
                      }}
                    />
                  </div>
                  <DestinationSuggestions
                    query={destination}
                    onSelect={handleDestinationSelect}
                    isVisible={showDestinationSuggestions}
                  />
                </div>

                {/* Date Picker */}
                <div className="relative flex-1">
                  <DatePicker
                    date={selectedDate}
                    setDate={setSelectedDate}
                    className="h-12 border border-white/20 bg-white/10 text-white hover:bg-white/20 hover:text-white"
                    placeholder="When?"
                  />
                </div>

                {/* Travelers Selector */}
                <div className="relative flex-1">
                  <TravelersSelector
                    adults={adults}
                    children={children}
                    onAdultsChange={setAdults}
                    onChildrenChange={setChildren}
                  />
                </div>

                {/* Search Button */}
                <Button
                  type="submit"
                  size="lg"
                  className="h-12 px-8 bg-brand-teal hover:bg-brand-navy text-white border-0"
                  disabled={isSearching}
                >
                  {isSearching ? (
                    <span className="flex items-center">
                      <svg
                        className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        ></circle>
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        ></path>
                      </svg>
                      Searching...
                    </span>
                  ) : (
                    <>
                      <Search className="mr-2 h-5 w-5" /> Search
                    </>
                  )}
                </Button>
              </div>
            </form>
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.8 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center z-30"
      >
        <span className="text-white/80 text-sm mb-2 text-shadow">Scroll to explore</span>
        <motion.div animate={{ y: [0, 10, 0] }} transition={{ repeat: Number.POSITIVE_INFINITY, duration: 1.5 }}>
          <ChevronDown className="h-6 w-6 text-white" />
        </motion.div>
      </motion.div>

      {/* Slide Indicators */}
      <div className="absolute bottom-10 right-10 z-30 hidden md:flex gap-2">
        {destinations.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              currentSlide === index ? "bg-white w-8" : "bg-white/50 hover:bg-white/80"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}
