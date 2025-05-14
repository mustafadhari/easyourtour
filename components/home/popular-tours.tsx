"use client"

import type React from "react"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { MapPin, Calendar, Heart, Star } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils"

export default function PopularTours() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null)
  const [favorites, setFavorites] = useState<number[]>([])

  const tours = [
    {
      id: 1,
      title: "Enchanting Bali Private Retreat",
      location: "Bali, Indonesia",
      duration: "8 Days",
      type: "Private Tour",
      price: 2499,
      rating: 4.9,
      reviews: 124,
      image: "/placeholder.svg?height=400&width=600",
      slug: "enchanting-bali-private-retreat",
      featured: true,
    },
    {
      id: 2,
      title: "Mystical Japan Adventure",
      location: "Tokyo, Kyoto, Osaka",
      duration: "10 Days",
      type: "Group Tour",
      price: 3299,
      rating: 4.8,
      reviews: 98,
      image: "/placeholder.svg?height=400&width=600",
      slug: "mystical-japan-adventure",
      featured: false,
    },
    {
      id: 3,
      title: "Greek Islands Luxury Cruise",
      location: "Santorini, Mykonos, Crete",
      duration: "7 Days",
      type: "Private Tour",
      price: 4199,
      rating: 4.9,
      reviews: 87,
      image: "/placeholder.svg?height=400&width=600",
      slug: "greek-islands-luxury-cruise",
      featured: false,
    },
    {
      id: 4,
      title: "Majestic Swiss Alps Expedition",
      location: "Zurich, Lucerne, Zermatt",
      duration: "9 Days",
      type: "Group Tour",
      price: 3799,
      rating: 4.7,
      reviews: 112,
      image: "/placeholder.svg?height=400&width=600",
      slug: "majestic-swiss-alps-expedition",
      featured: true,
    },
  ]

  const toggleFavorite = (id: number, e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()
    setFavorites((prev) => (prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]))
  }

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <Badge
            variant="outline"
            className="mb-3 px-3 py-1 border-amber-200 bg-amber-50 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400 dark:border-amber-800"
          >
            Explore the World
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Popular Tour Packages</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover our most sought-after travel experiences, handcrafted for unforgettable adventures
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {tours.map((tour) => (
            <Link href={`/tours/${tour.slug}`} key={tour.id}>
              <Card
                className="overflow-hidden group h-full transition-all duration-300 hover:shadow-lg border-transparent hover:border-amber-200 dark:hover:border-amber-800"
                onMouseEnter={() => setHoveredCard(tour.id)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <div className="relative h-56 overflow-hidden">
                  <Image
                    src={tour.image || "/placeholder.svg"}
                    alt={tour.title}
                    fill
                    className={cn(
                      "object-cover transition-transform duration-700",
                      hoveredCard === tour.id ? "scale-110" : "scale-100",
                    )}
                  />
                  <div className="absolute top-3 right-3 z-10">
                    <button
                      onClick={(e) => toggleFavorite(tour.id, e)}
                      className="h-8 w-8 rounded-full bg-white/80 backdrop-blur-sm flex items-center justify-center transition-colors hover:bg-white"
                    >
                      <Heart
                        className={cn(
                          "h-4 w-4 transition-colors",
                          favorites.includes(tour.id) ? "fill-red-500 text-red-500" : "text-gray-600",
                        )}
                      />
                    </button>
                  </div>
                  {tour.featured && (
                    <div className="absolute top-3 left-3 z-10">
                      <Badge className="bg-amber-600 hover:bg-amber-600">Featured</Badge>
                    </div>
                  )}
                  <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-black/70 to-transparent" />
                  <div className="absolute bottom-3 left-3 right-3 flex justify-between items-end">
                    <div>
                      <Badge variant="outline" className="bg-white/20 backdrop-blur-sm border-white/10 text-white">
                        {tour.type}
                      </Badge>
                    </div>
                    <div className="flex items-center gap-1 text-white bg-black/30 backdrop-blur-sm rounded-full px-2 py-1 text-xs">
                      <Star className="h-3 w-3 fill-amber-400 text-amber-400" />
                      <span>{tour.rating}</span>
                      <span className="opacity-80">({tour.reviews})</span>
                    </div>
                  </div>
                </div>
                <CardContent className="pt-5">
                  <h3 className="font-bold text-lg mb-2 group-hover:text-amber-600 transition-colors line-clamp-1">
                    {tour.title}
                  </h3>
                  <div className="flex items-center text-muted-foreground text-sm mb-2">
                    <MapPin size={14} className="mr-1 flex-shrink-0" />
                    <span className="truncate">{tour.location}</span>
                  </div>
                  <div className="flex items-center text-muted-foreground text-sm mb-4">
                    <Calendar size={14} className="mr-1 flex-shrink-0" />
                    <span>{tour.duration}</span>
                  </div>
                  <div className="font-bold text-lg text-amber-600">
                    ${tour.price.toLocaleString()}
                    <span className="text-xs text-muted-foreground font-normal">/person</span>
                  </div>
                </CardContent>
                <CardFooter className="pt-0">
                  <Button
                    variant="outline"
                    className="w-full rounded-full group-hover:bg-amber-600 group-hover:text-white group-hover:border-amber-600 transition-colors"
                  >
                    View Details
                  </Button>
                </CardFooter>
              </Card>
            </Link>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link href="/tours">
            <Button className="bg-amber-600 hover:bg-amber-700 rounded-full px-8">View All Tours</Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
