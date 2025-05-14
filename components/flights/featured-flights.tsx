import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"

export default function FeaturedFlights() {
  const airlines = [
    {
      id: 1,
      name: "Emirates",
      logo: "/placeholder.svg?height=60&width=120",
      description: "Experience luxury in the sky with Emirates' award-winning service and amenities.",
    },
    {
      id: 2,
      name: "Singapore Airlines",
      logo: "/placeholder.svg?height=60&width=120",
      description: "Enjoy world-class hospitality and comfort on Singapore Airlines' global network.",
    },
    {
      id: 3,
      name: "Qatar Airways",
      logo: "/placeholder.svg?height=60&width=120",
      description: "Fly with the World's Best Airline and experience unparalleled comfort and service.",
    },
    {
      id: 4,
      name: "Cathay Pacific",
      logo: "/placeholder.svg?height=60&width=120",
      description: "Discover the world with Cathay Pacific's premium travel experience and extensive network.",
    },
  ]

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {airlines.map((airline) => (
        <Card key={airline.id} className="hover:shadow-md transition-shadow duration-300">
          <CardContent className="p-6 flex flex-col items-center text-center">
            <div className="h-16 w-32 relative mb-4">
              <Image src={airline.logo || "/placeholder.svg"} alt={airline.name} fill className="object-contain" />
            </div>
            <h3 className="font-bold mb-2">{airline.name}</h3>
            <p className="text-sm text-muted-foreground">{airline.description}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
