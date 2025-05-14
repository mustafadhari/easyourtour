import Image from "next/image"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Star, MapPin, Wifi, Coffee, Utensils, Car } from "lucide-react"

export default function HotelsList() {
  const hotels = [
    {
      id: 1,
      name: "Grand Hyatt Singapore",
      location: "Singapore",
      rating: 5,
      price: 320,
      image: "/placeholder.svg?height=200&width=300",
      description: "Luxury hotel in the heart of Singapore with world-class dining and spa facilities.",
      amenities: ["Free WiFi", "Breakfast Included", "Restaurant", "Parking"],
    },
    {
      id: 2,
      name: "Mandarin Oriental Bangkok",
      location: "Bangkok, Thailand",
      rating: 5,
      price: 280,
      image: "/placeholder.svg?height=200&width=300",
      description: "Historic luxury hotel on the banks of the Chao Phraya River with elegant rooms and suites.",
      amenities: ["Free WiFi", "Breakfast Included", "Restaurant", "Parking"],
    },
    {
      id: 3,
      name: "Park Hyatt Tokyo",
      location: "Tokyo, Japan",
      rating: 5,
      price: 450,
      image: "/placeholder.svg?height=200&width=300",
      description: "Sophisticated luxury hotel occupying the top floors of a skyscraper with city views.",
      amenities: ["Free WiFi", "Breakfast Included", "Restaurant", "Parking"],
    },
    {
      id: 4,
      name: "The Peninsula Hong Kong",
      location: "Hong Kong",
      rating: 5,
      price: 520,
      image: "/placeholder.svg?height=200&width=300",
      description: "Iconic luxury hotel with harbor views, elegant rooms, and Rolls-Royce airport transfers.",
      amenities: ["Free WiFi", "Breakfast Included", "Restaurant", "Parking"],
    },
  ]

  const getAmenityIcon = (amenity: string) => {
    switch (amenity) {
      case "Free WiFi":
        return <Wifi size={14} />
      case "Breakfast Included":
        return <Coffee size={14} />
      case "Restaurant":
        return <Utensils size={14} />
      case "Parking":
        return <Car size={14} />
      default:
        return null
    }
  }

  return (
    <div className="space-y-6">
      {hotels.map((hotel) => (
        <Card key={hotel.id} className="overflow-hidden">
          <div className="flex flex-col md:flex-row">
            <div className="md:w-1/3 relative h-48 md:h-auto">
              <Image src={hotel.image || "/placeholder.svg"} alt={hotel.name} fill className="object-cover" />
            </div>

            <div className="md:w-2/3 p-6">
              <div className="flex flex-col md:flex-row justify-between">
                <div>
                  <h3 className="font-bold text-xl mb-2">{hotel.name}</h3>
                  <div className="flex items-center text-muted-foreground text-sm mb-2">
                    <MapPin size={14} className="mr-1" />
                    {hotel.location}
                  </div>
                  <div className="flex mb-4">
                    {Array.from({ length: hotel.rating }).map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                </div>

                <div className="text-2xl font-bold text-amber-600 mt-2 md:mt-0">
                  ${hotel.price}
                  <span className="text-xs font-normal text-muted-foreground">/night</span>
                </div>
              </div>

              <p className="text-muted-foreground mb-4">{hotel.description}</p>

              <div className="flex flex-wrap gap-2 mb-4">
                {hotel.amenities.map((amenity, index) => (
                  <div key={index} className="flex items-center bg-muted px-2 py-1 rounded text-xs">
                    {getAmenityIcon(amenity)}
                    <span className="ml-1">{amenity}</span>
                  </div>
                ))}
              </div>

              <div className="flex justify-end">
                <Button className="bg-amber-600 hover:bg-amber-700">View Details</Button>
              </div>
            </div>
          </div>
        </Card>
      ))}

      <div className="mt-8 flex justify-center">
        <div className="flex space-x-1">
          <Button variant="outline" size="icon" className="w-8 h-8">
            1
          </Button>
          <Button variant="outline" size="icon" className="w-8 h-8">
            2
          </Button>
          <Button variant="outline" size="icon" className="w-8 h-8">
            3
          </Button>
          <Button variant="outline" size="icon" className="w-8 h-8">
            ...
          </Button>
        </div>
      </div>
    </div>
  )
}
