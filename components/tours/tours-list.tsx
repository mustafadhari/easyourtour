import Image from "next/image"
import Link from "next/link"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { MapPin, Calendar, Users, Star } from "lucide-react"

export default function ToursList() {
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
      description:
        "Experience the magic of Bali with our exclusive private tour package. From pristine beaches to ancient temples, immerse yourself in the island's rich culture and natural beauty.",
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
      description:
        "Discover the perfect blend of ancient traditions and modern wonders in Japan. Explore bustling Tokyo, historic Kyoto, and vibrant Osaka on this unforgettable journey.",
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
      description:
        "Sail the azure waters of the Aegean Sea on a luxury yacht, hopping between the most beautiful Greek islands. Enjoy private beaches, gourmet dining, and breathtaking sunsets.",
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
      description:
        "Experience the breathtaking beauty of the Swiss Alps with stunning mountain views, charming villages, and scenic train journeys through some of Europe's most spectacular landscapes.",
    },
    {
      id: 5,
      title: "Serengeti Safari Adventure",
      location: "Tanzania",
      duration: "10 Days",
      type: "Group Tour",
      price: 5299,
      rating: 4.9,
      reviews: 76,
      image: "/placeholder.svg?height=400&width=600",
      slug: "serengeti-safari-adventure",
      description:
        "Witness the incredible wildlife of the Serengeti on this once-in-a-lifetime safari adventure. Experience the Great Migration and stay in luxury tented camps under the African stars.",
    },
    {
      id: 6,
      title: "Amalfi Coast Romantic Getaway",
      location: "Italy",
      duration: "6 Days",
      type: "Private Tour",
      price: 3599,
      rating: 4.8,
      reviews: 92,
      image: "/placeholder.svg?height=400&width=600",
      slug: "amalfi-coast-romantic-getaway",
      description:
        "Explore the stunning Amalfi Coast with its colorful cliffside villages, crystal-clear waters, and delicious cuisine. Perfect for couples seeking a romantic Mediterranean escape.",
    },
  ]

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <p className="text-muted-foreground">Showing {tours.length} tours</p>
        <div className="flex items-center gap-2">
          <span className="text-sm">Sort by:</span>
          <select className="border rounded-md p-1 text-sm">
            <option>Popularity</option>
            <option>Price: Low to High</option>
            <option>Price: High to Low</option>
            <option>Duration</option>
            <option>Rating</option>
          </select>
        </div>
      </div>

      <div className="space-y-6">
        {tours.map((tour) => (
          <Card key={tour.id} className="overflow-hidden">
            <div className="flex flex-col md:flex-row">
              <div className="md:w-1/3 relative h-48 md:h-auto">
                <Image src={tour.image || "/placeholder.svg"} alt={tour.title} fill className="object-cover" />
                <div className="absolute top-2 right-2 bg-amber-600 text-white px-2 py-1 rounded text-xs font-medium">
                  {tour.type}
                </div>
              </div>

              <div className="md:w-2/3 p-6">
                <div className="flex flex-col md:flex-row justify-between">
                  <div>
                    <h3 className="font-bold text-xl mb-2 hover:text-amber-600 transition-colors">
                      <Link href={`/tours/${tour.slug}`}>{tour.title}</Link>
                    </h3>
                    <div className="flex items-center text-muted-foreground text-sm mb-2">
                      <MapPin size={14} className="mr-1" />
                      {tour.location}
                    </div>
                  </div>

                  <div className="flex items-center mt-2 md:mt-0">
                    <Star size={16} className="text-yellow-400" />
                    <span className="ml-1 font-medium">{tour.rating}</span>
                    <span className="text-muted-foreground text-sm ml-1">({tour.reviews} reviews)</span>
                  </div>
                </div>

                <p className="text-muted-foreground my-4">{tour.description}</p>

                <div className="flex flex-col md:flex-row justify-between items-start md:items-center mt-4">
                  <div className="flex gap-4 text-sm text-muted-foreground mb-4 md:mb-0">
                    <div className="flex items-center">
                      <Calendar size={14} className="mr-1" />
                      {tour.duration}
                    </div>
                    <div className="flex items-center">
                      <Users size={14} className="mr-1" />
                      {tour.type}
                    </div>
                  </div>

                  <div className="flex items-center">
                    <div className="text-2xl font-bold text-amber-600 mr-2">${tour.price}</div>
                    <span className="text-xs text-muted-foreground">per person</span>
                  </div>
                </div>

                <div className="mt-4 pt-4 border-t flex justify-end">
                  <Link href={`/tours/${tour.slug}`}>
                    <Button className="bg-amber-600 hover:bg-amber-700">View Details</Button>
                  </Link>
                </div>
              </div>
            </div>
          </Card>
        ))}
      </div>

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
