import Image from "next/image"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export default function RelatedTours() {
  const relatedTours = [
    {
      id: 1,
      title: "Mystical Japan Adventure",
      location: "Tokyo, Kyoto, Osaka",
      price: 3299,
      image: "/placeholder.svg?height=300&width=400",
      slug: "mystical-japan-adventure",
    },
    {
      id: 2,
      title: "Greek Islands Luxury Cruise",
      location: "Santorini, Mykonos, Crete",
      price: 4199,
      image: "/placeholder.svg?height=300&width=400",
      slug: "greek-islands-luxury-cruise",
    },
    {
      id: 3,
      title: "Majestic Swiss Alps Expedition",
      location: "Zurich, Lucerne, Zermatt",
      price: 3799,
      image: "/placeholder.svg?height=300&width=400",
      slug: "majestic-swiss-alps-expedition",
    },
  ]

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {relatedTours.map((tour) => (
        <Card key={tour.id} className="overflow-hidden">
          <div className="relative h-48">
            <Image src={tour.image || "/placeholder.svg"} alt={tour.title} fill className="object-cover" />
          </div>
          <CardContent className="p-4">
            <h3 className="font-bold text-lg mb-1">{tour.title}</h3>
            <p className="text-muted-foreground text-sm mb-2">{tour.location}</p>
            <div className="flex justify-between items-center mt-4">
              <div className="font-bold text-amber-600">
                ${tour.price}
                <span className="text-xs font-normal text-muted-foreground">/person</span>
              </div>
              <Link href={`/tours/${tour.slug}`}>
                <Button variant="outline" size="sm">
                  View Tour
                </Button>
              </Link>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
