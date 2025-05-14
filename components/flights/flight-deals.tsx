import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export default function FlightDeals() {
  const deals = [
    {
      id: 1,
      from: "New York",
      to: "Paris",
      price: 599,
      airline: "Air France",
      image: "/placeholder.svg?height=200&width=300",
      period: "Sep - Nov 2025",
    },
    {
      id: 2,
      from: "London",
      to: "Tokyo",
      price: 899,
      airline: "Japan Airlines",
      image: "/placeholder.svg?height=200&width=300",
      period: "Oct - Dec 2025",
    },
    {
      id: 3,
      from: "Los Angeles",
      to: "Bali",
      price: 799,
      airline: "Singapore Airlines",
      image: "/placeholder.svg?height=200&width=300",
      period: "Aug - Oct 2025",
    },
  ]

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {deals.map((deal) => (
        <Card key={deal.id} className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
          <div className="relative h-40">
            <Image
              src={deal.image || "/placeholder.svg"}
              alt={`${deal.from} to ${deal.to}`}
              fill
              className="object-cover"
            />
          </div>
          <CardContent className="p-4">
            <div className="flex justify-between items-center mb-2">
              <h3 className="font-bold text-lg">
                {deal.from} <ArrowRight className="inline h-4 w-4" /> {deal.to}
              </h3>
              <div className="text-amber-600 font-bold">${deal.price}</div>
            </div>
            <p className="text-sm text-muted-foreground mb-4">
              {deal.airline} • {deal.period}
            </p>
            <Button className="w-full bg-amber-600 hover:bg-amber-700">View Deal</Button>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
