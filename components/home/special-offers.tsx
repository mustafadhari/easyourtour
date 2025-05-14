"use client"

import { useState, useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Clock, ChevronLeft, ChevronRight } from "lucide-react"
import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils"

export default function SpecialOffers() {
  const [activeIndex, setActiveIndex] = useState(0)
  const containerRef = useRef<HTMLDivElement>(null)

  const offers = [
    {
      id: 1,
      title: "Summer Special: Maldives Getaway",
      discount: "25% OFF",
      validUntil: "June 30, 2025",
      image: "/placeholder.svg?height=300&width=600",
      description: "Enjoy crystal clear waters and white sandy beaches with our exclusive summer package.",
      slug: "maldives-summer-special",
      color: "from-blue-500/20 to-cyan-400/20",
    },
    {
      id: 2,
      title: "Early Bird: European Christmas Markets",
      discount: "20% OFF",
      validUntil: "August 31, 2025",
      image: "/placeholder.svg?height=300&width=600",
      description: "Book early and save on our magical Christmas markets tour across Europe's most charming cities.",
      slug: "european-christmas-markets",
      color: "from-red-500/20 to-amber-400/20",
    },
    {
      id: 3,
      title: "Honeymoon Package: Santorini Bliss",
      discount: "Complimentary Upgrades",
      validUntil: "December 31, 2025",
      image: "/placeholder.svg?height=300&width=600",
      description: "Start your journey together with breathtaking views and romantic experiences in Santorini.",
      slug: "santorini-honeymoon",
      color: "from-purple-500/20 to-pink-400/20",
    },
    {
      id: 4,
      title: "Adventure Deal: Costa Rica Exploration",
      discount: "15% OFF",
      validUntil: "September 30, 2025",
      image: "/placeholder.svg?height=300&width=600",
      description: "Explore rainforests, volcanoes, and beaches in this thrilling Costa Rica adventure package.",
      slug: "costa-rica-adventure",
      color: "from-green-500/20 to-emerald-400/20",
    },
  ]

  const scrollPrev = () => {
    if (activeIndex > 0) {
      setActiveIndex(activeIndex - 1)
    }
  }

  const scrollNext = () => {
    if (activeIndex < offers.length - 1) {
      setActiveIndex(activeIndex + 1)
    }
  }

  return (
    <section className="py-20 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-end mb-12">
          <div>
            <Badge
              variant="outline"
              className="mb-3 px-3 py-1 border-amber-200 bg-amber-50 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400 dark:border-amber-800"
            >
              Limited Time
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold">Special Offers & Deals</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mt-2">
              Limited-time offers on our most exclusive packages. Book now to secure these special rates.
            </p>
          </div>

          <div className="flex gap-2">
            <Button
              variant="outline"
              size="icon"
              className="rounded-full"
              onClick={scrollPrev}
              disabled={activeIndex === 0}
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="rounded-full"
              onClick={scrollNext}
              disabled={activeIndex === offers.length - 1}
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>

        <div className="relative" ref={containerRef}>
          <motion.div
            className="flex gap-6"
            animate={{ x: `-${activeIndex * 100}%` }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
          >
            {offers.map((offer) => (
              <Card
                key={offer.id}
                className="min-w-full lg:min-w-[calc(33.333%-1rem)] overflow-hidden border-none shadow-lg"
              >
                <div className={cn("relative bg-gradient-to-r p-6 rounded-xl", offer.color)}>
                  <div className="absolute top-4 left-4 bg-white dark:bg-gray-800 text-amber-600 px-3 py-1 rounded-full font-bold text-sm z-10 shadow-md">
                    {offer.discount}
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
                    <div className="relative h-48 md:h-64 rounded-lg overflow-hidden">
                      <Image src={offer.image || "/placeholder.svg"} alt={offer.title} fill className="object-cover" />
                    </div>
                    <div>
                      <h3 className="font-bold text-xl mb-2">{offer.title}</h3>
                      <p className="text-muted-foreground mb-4">{offer.description}</p>
                      <div className="flex items-center text-sm text-muted-foreground mb-6">
                        <Clock size={16} className="mr-2" />
                        Valid until: {offer.validUntil}
                      </div>
                      <Link href={`/tours/${offer.slug}`}>
                        <Button className="w-full bg-amber-600 hover:bg-amber-700 rounded-full">View Offer</Button>
                      </Link>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </motion.div>
        </div>

        <div className="flex justify-center mt-8">
          {offers.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={cn(
                "w-2 h-2 rounded-full mx-1 transition-all",
                index === activeIndex ? "bg-amber-600 w-6" : "bg-gray-300 dark:bg-gray-700",
              )}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
