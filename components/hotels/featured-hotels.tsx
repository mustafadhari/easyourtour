import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Star, MapPin } from "lucide-react"

export default function FeaturedHotels() {
  const hotels = [
    {
      id: 1,
      name: "The Ritz-Carlton Bali",
      location: "Nusa Dua, Bali",
      rating: 5,
      price: 450,
      image: "/placeholder.svg?height=300&width=500",
      description: "Luxury beachfront resort with stunning ocean views and world-class amenities.",
    },
    {
      id: 2,
      name: "Four Seasons Resort Maldives",
      location: "Baa Atoll, Maldives",
      rating: 5,
      price: 850,
      image: "/placeholder.svg?height=300&width=500",
      description: "Exclusive overwater villas in a pristine lagoon with unparalleled luxury and privacy.",
    },
    {
      id: 3,
      name: "Aman Tokyo",
      location: "Tokyo, Japan",
      rating: 5,
      price: 750,
      image: "/placeholder.svg?height=300&width=500",
      description: "Urban sanctuary offering panoramic city views and traditional Japanese aesthetics.",
    },
  ]

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {hotels.map((hotel) => (
        <Card key={hotel.id} className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
          <div className="relative h-48">
            <Image src={hotel.image || "/placeholder.svg"} alt={hotel.name} fill className="object-cover" />
          </div>
          <CardContent className="p-4">
            <div className="flex items-start justify-between">
              <div>
                <h3 className="font-bold text-lg mb-1">{hotel.name}</h3>
                <div className="flex items-center text-sm text-muted-foreground mb-2">
                  <MapPin size={14} className="mr-1" />
                  {hotel.location}
                </div>
              </div>
              <div className="flex">
                {Array.from({ length: hotel.rating }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" />
                ))}
              </div>
            </div>
            <p className="text-sm text-muted-foreground mb-4">{hotel.description}</p>
            <div className="flex justify-between items-center">
              <div className="font-bold text-amber-600">
                ${hotel.price}
                <span className="text-xs font-normal text-muted-foreground">/night</span>
              </div>
              <Button className="bg-amber-600 hover:bg-amber-700">View Details</Button>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
