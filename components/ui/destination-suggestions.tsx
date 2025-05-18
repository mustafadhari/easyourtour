"use client"

import { useState, useEffect, useRef } from "react"
import Image from "next/image"
import { MapPin, TrendingUp } from "lucide-react"
import { cn } from "@/lib/utils"

// Mock data for popular destinations
const popularDestinations = [
  {
    id: 1,
    name: "Paris",
    country: "France",
    thumbnail: "/placeholder.svg?height=40&width=40",
    type: "City Break",
    price: 799,
  },
  {
    id: 2,
    name: "Bali",
    country: "Indonesia",
    thumbnail: "/placeholder.svg?height=40&width=40",
    type: "Beach",
    price: 1299,
  },
  {
    id: 3,
    name: "New York",
    country: "USA",
    thumbnail: "/placeholder.svg?height=40&width=40",
    type: "City Break",
    price: 899,
  },
  {
    id: 4,
    name: "Tokyo",
    country: "Japan",
    thumbnail: "/placeholder.svg?height=40&width=40",
    type: "Cultural",
    price: 1499,
  },
  {
    id: 5,
    name: "Santorini",
    country: "Greece",
    thumbnail: "/placeholder.svg?height=40&width=40",
    type: "Island",
    price: 1099,
  },
]

// Function to get destination suggestions based on query
const getDestinationSuggestions = (query: string) => {
  if (!query) return popularDestinations

  const lowerCaseQuery = query.toLowerCase()
  return popularDestinations.filter(
    (destination) =>
      destination.name.toLowerCase().includes(lowerCaseQuery) ||
      destination.country.toLowerCase().includes(lowerCaseQuery),
  )
}

interface DestinationSuggestionsProps {
  query: string
  onSelect: (destination: string) => void
  isVisible: boolean
  className?: string
}

export function DestinationSuggestions({ query, onSelect, isVisible, className }: DestinationSuggestionsProps) {
  const [suggestions, setSuggestions] = useState<any[]>([])
  const [loading, setLoading] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  // Get suggestions based on query
  useEffect(() => {
    if (!isVisible) return

    if (!query || query.length < 2) {
      setSuggestions(popularDestinations.slice(0, 5))
      return
    }

    setLoading(true)
    const results = getDestinationSuggestions(query)
    setSuggestions(results)
    setLoading(false)
  }, [query, isVisible])

  if (!isVisible) return null

  return (
    <div
      ref={ref}
      className={cn("absolute z-20 w-full mt-1 bg-white rounded-md shadow-lg max-h-80 overflow-y-auto", className)}
    >
      <div className="p-2">
        {query.length < 2 ? (
          <div className="px-3 py-2">
            <div className="flex items-center text-sm text-gray-500 mb-2">
              <TrendingUp className="h-4 w-4 mr-2" />
              <span>Popular Destinations</span>
            </div>
          </div>
        ) : loading ? (
          <div className="flex justify-center items-center py-4">
            <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-brand-teal"></div>
          </div>
        ) : suggestions.length === 0 ? (
          <div className="px-3 py-4 text-center text-gray-500">No destinations found for "{query}"</div>
        ) : null}

        {suggestions.map((suggestion) => (
          <div
            key={suggestion.id}
            className="px-3 py-2 hover:bg-gray-100 rounded-md cursor-pointer"
            onClick={() => onSelect(`${suggestion.name}, ${suggestion.country}`)}
          >
            <div className="flex items-center">
              <div className="relative h-10 w-10 rounded-md overflow-hidden mr-3 flex-shrink-0">
                <Image
                  src={suggestion.thumbnail || "/placeholder.svg?height=40&width=40"}
                  alt={suggestion.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="flex-1">
                <div className="font-medium text-gray-900">{suggestion.name}</div>
                <div className="flex items-center text-sm text-gray-500">
                  <MapPin className="h-3 w-3 mr-1" />
                  <span>{suggestion.country}</span>
                </div>
              </div>
              {suggestion.type && (
                <div className="text-right">
                  <div className="text-sm text-gray-900">{suggestion.type}</div>
                  {suggestion.price && <div className="text-sm font-medium text-brand-teal">${suggestion.price}</div>}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export { popularDestinations, getDestinationSuggestions }
