"use client"

import { useState, useEffect, useRef } from "react"
import Image from "next/image"
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Search, MapPin, Calendar, Users, ChevronDown, Plane } from "lucide-react"
import { cn } from "@/lib/utils"
import { useInView } from "react-intersection-observer"

export default function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [searchFocused, setSearchFocused] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)
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

  return (
    <div ref={containerRef} className="relative h-screen overflow-hidden">
      {/* Parallax Background */}
      <motion.div style={{ y, scale }} className="absolute inset-0 w-full h-full">
        <AnimatePresence mode="wait">
          {destinations.map(
            (destination, index) =>
              currentSlide === index && (
                <motion.div
                  key={destination.name}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 1 }}
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
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 left-0 right-0 h-32 wave-pattern" />
      </div>

      {/* Floating Airplane */}
      <motion.div
        className="absolute top-1/4 right-[10%] text-white/80 hidden lg:block"
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
        className="relative z-10 h-full flex flex-col justify-center items-center text-white px-4"
      >
        <div className="container mx-auto max-w-6xl">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-center mb-8"
          >
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4 tracking-tight">
              <span className="block">Make Your Travel</span>
              <span className="block mt-2 bg-clip-text text-transparent bg-gradient-to-r from-brand-teal to-brand-light">
                Easy & Affordable
              </span>
            </h1>
            <p className="text-lg md:text-xl max-w-2xl mx-auto text-white/90 mt-6">
              Extraordinary destinations, curated experiences, unforgettable journeys
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="max-w-4xl mx-auto mt-8"
          >
            <div
              className={cn(
                "bg-white/10 backdrop-blur-lg rounded-2xl p-4 md:p-6 transition-all duration-300",
                searchFocused ? "bg-white/20 shadow-2xl" : "",
              )}
            >
              <div className="flex flex-col md:flex-row gap-4">
                <div className="relative flex-1">
                  <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-white/70" />
                  <Input
                    placeholder="Where to?"
                    className="pl-10 bg-white/10 border-white/20 text-white placeholder:text-white/70 h-12 text-lg focus:bg-white/20"
                    onFocus={() => setSearchFocused(true)}
                    onBlur={() => setSearchFocused(false)}
                  />
                </div>
                <div className="relative flex-1">
                  <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-white/70" />
                  <Input
                    placeholder="When?"
                    className="pl-10 bg-white/10 border-white/20 text-white placeholder:text-white/70 h-12 text-lg focus:bg-white/20"
                    onFocus={() => setSearchFocused(true)}
                    onBlur={() => setSearchFocused(false)}
                  />
                </div>
                <div className="relative flex-1">
                  <Users className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-white/70" />
                  <Input
                    placeholder="Travelers"
                    className="pl-10 bg-white/10 border-white/20 text-white placeholder:text-white/70 h-12 text-lg focus:bg-white/20"
                    onFocus={() => setSearchFocused(true)}
                    onBlur={() => setSearchFocused(false)}
                  />
                </div>
                <Button size="lg" className="h-12 px-8 bg-brand-teal hover:bg-brand-navy text-white border-0">
                  <Search className="mr-2 h-5 w-5" /> Search
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.8 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center"
      >
        <span className="text-white/80 text-sm mb-2">Scroll to explore</span>
        <motion.div animate={{ y: [0, 10, 0] }} transition={{ repeat: Number.POSITIVE_INFINITY, duration: 1.5 }}>
          <ChevronDown className="h-6 w-6 text-white" />
        </motion.div>
      </motion.div>

      {/* Slide Indicators */}
      <div className="absolute bottom-10 right-10 z-20 hidden md:flex gap-2">
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
