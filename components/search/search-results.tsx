"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { MapPin, Calendar, Users, Star, Filter } from "lucide-react"
import { searchDestinations } from "@/lib/search"
import { Skeleton } from "@/components/ui/skeleton"

interface SearchResultsProps {
  destination: string
  date: string
  travelers: string
}

export default function SearchResults({ destination, date, travelers }: SearchResultsProps) {
  const [results, setResults] = useState<any[]>([])
  const [loading, setLoading] = useState(true)
  const [sortBy, setSortBy] = useState("popularity")

  useEffect(() => {
    const fetchResults = async () => {
      setLoading(true)
      try {
        // Simulate network request
        await new Promise((resolve) => setTimeout(resolve, 1000))
        const searchResults = await searchDestinations(destination, date, travelers)
        setResults(searchResults)
      } catch (error) {
        console.error("Error fetching search results:", error)
        setResults([])
      } finally {
        setLoading(false)
      }
    }

    fetchResults()
  }, [destination, date, travelers])

  const sortResults = (results: any[]) => {
    switch (sortBy) {
      case "price-low":
        return [...results].sort((a, b) => a.price - b.price)
      case "price-high":
        return [...results].sort((a, b) => b.price - a.price)
      case "rating":
        return [...results].sort((a, b) => b.rating - a.rating)
      case "duration":
        return [...results].sort((a, b) => {
          const daysA = Number.parseInt(a.duration.split(" ")[0])
          const daysB = Number.parseInt(b.duration.split(" ")[0])
          return daysA - daysB
        })
      case "popularity":
      default:
        return [...results].sort((a, b) => b.reviews - a.reviews)
    }
  }

  const sortedResults = sortResults(results)

  if (loading) {
    return (
      <div className="space-y-6">
        {[1, 2, 3].map((i) => (
          <Card key={i} className="overflow-hidden">
            <div className="flex flex-col md:flex-row">
              <div className="md:w-1/3 h-48 md:h-auto">
                <Skeleton className="h-full w-full" />
              </div>
              <div className="md:w-2/3 p-6 space-y-4">
                <Skeleton className="h-8 w-3/4" />
                <Skeleton className="h-4 w-1/4" />
                <Skeleton className="h-20 w-full" />
                <div className="flex justify-between">
                  <Skeleton className="h-6 w-1/3" />
                  <Skeleton className="h-10 w-1/4" />
                </div>
              </div>
            </div>
          </Card>
        ))}
      </div>
    )
  }

  if (sortedResults.length === 0) {
    return (
      <div className="text-center py-12">
        <div className="mb-4 text-brand-teal">
          <Filter className="h-12 w-12 mx-auto" />
        </div>
        <h3 className="text-2xl font-bold mb-2">No results found</h3>
        <p className="text-muted-foreground mb-6">
          We couldn't find any matches for your search criteria. Try adjusting your filters or search for a different
          destination.
        </p>
        <Link href="/">
          <Button className="bg-brand-teal hover:bg-brand-navy">Return to Homepage</Button>
        </Link>
      </div>
    )
  }

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <p className="text-muted-foreground">Showing {sortedResults.length} results</p>
        <div className="flex items-center gap-2">
          <span className="text-sm">Sort by:</span>
          <select className="border rounded-md p-1 text-sm" value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
            <option value="popularity">Popularity</option>
            <option value="price-low">Price: Low to High</option>
            <option value="price-high">Price: High to Low</option>
            <option value="duration">Duration</option>
            <option value="rating">Rating</option>
          </select>
        </div>
      </div>

      <div className="space-y-6">
        {sortedResults.map((result) => (
          <Card key={result.id} className="overflow-hidden">
            <div className="flex flex-col md:flex-row">
              <div className="md:w-1/3 relative h-48 md:h-auto">
                <Image src={result.image || "/placeholder.svg"} alt={result.title} fill className="object-cover" />
                <div className="absolute top-2 right-2 bg-amber-600 text-white px-2 py-1 rounded text-xs font-medium">
                  {result.type}
                </div>
              </div>

              <div className="md:w-2/3 p-6">
                <div className="flex flex-col md:flex-row justify-between">
                  <div>
                    <h3 className="font-bold text-xl mb-2 hover:text-amber-600 transition-colors">
                      <Link href={`/tours/${result.slug}`}>{result.title}</Link>
                    </h3>
                    <div className="flex items-center text-muted-foreground text-sm mb-2">
                      <MapPin size={14} className="mr-1" />
                      {result.location}
                    </div>
                  </div>

                  <div className="flex items-center mt-2 md:mt-0">
                    <Star size={16} className="text-yellow-400" />
                    <span className="ml-1 font-medium">{result.rating}</span>
                    <span className="text-muted-foreground text-sm ml-1">({result.reviews} reviews)</span>
                  </div>
                </div>

                <p className="text-muted-foreground my-4">{result.description}</p>

                <div className="flex flex-col md:flex-row justify-between items-start md:items-center mt-4">
                  <div className="flex gap-4 text-sm text-muted-foreground mb-4 md:mb-0">
                    <div className="flex items-center">
                      <Calendar size={14} className="mr-1" />
                      {result.duration}
                    </div>
                    <div className="flex items-center">
                      <Users size={14} className="mr-1" />
                      {result.type}
                    </div>
                  </div>

                  <div className="flex items-center">
                    <div className="text-2xl font-bold text-amber-600 mr-2">${result.price}</div>
                    <span className="text-xs text-muted-foreground">per person</span>
                  </div>
                </div>

                <div className="mt-4 pt-4 border-t flex justify-end">
                  <Link href={`/tours/${result.slug}`}>
                    <Button className="bg-amber-600 hover:bg-amber-700">View Details</Button>
                  </Link>
                </div>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  )
}
