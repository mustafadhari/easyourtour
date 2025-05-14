import { notFound } from "next/navigation"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { MapPin, Calendar, Users, Clock, ChevronLeft } from "lucide-react"
import Link from "next/link"

export default function DestinationPage({ params }: { params: { slug: string } }) {
  // In a real app, you would fetch this data from an API or database
  const destinations = {
    maldives: {
      name: "Maldives",
      location: "Indian Ocean",
      image: "/placeholder.svg?height=800&width=1600",
      description:
        "Experience paradise on Earth with crystal clear waters, white sandy beaches, and luxurious overwater bungalows. The Maldives offers world-class diving, snorkeling, and relaxation in one of the most beautiful settings on the planet.",
      highlights: [
        "Stay in iconic overwater villas",
        "Explore vibrant coral reefs",
        "Enjoy world-class spa treatments",
        "Experience sunset dolphin cruises",
        "Dine under the stars on private beaches",
      ],
      duration: "7-10 days",
      bestTime: "November to April",
      price: "From $2,499 per person",
    },
    paris: {
      name: "Paris",
      location: "France",
      image: "/placeholder.svg?height=800&width=1600",
      description:
        "Discover the magic of the City of Light with its iconic landmarks, world-class museums, and charming neighborhoods. From the Eiffel Tower to the Louvre, Paris offers a perfect blend of history, culture, and gastronomy.",
      highlights: [
        "Visit the iconic Eiffel Tower",
        "Explore the Louvre Museum",
        "Stroll along the Seine River",
        "Experience French cuisine at local bistros",
        "Shop on the Champs-Élysées",
      ],
      duration: "4-7 days",
      bestTime: "April to June or September to October",
      price: "From $1,299 per person",
    },
    kyoto: {
      name: "Kyoto",
      location: "Japan",
      image: "/placeholder.svg?height=800&width=1600",
      description:
        "Step back in time in Japan's ancient capital, where traditional temples, shrines, and gardens create a serene atmosphere. Experience authentic Japanese culture through tea ceremonies, geisha districts, and seasonal festivals.",
      highlights: [
        "Visit the golden Kinkaku-ji Temple",
        "Explore the bamboo groves of Arashiyama",
        "Experience a traditional tea ceremony",
        "Wander through the Fushimi Inari Shrine",
        "Stay in a traditional ryokan",
      ],
      duration: "5-7 days",
      bestTime: "March-May or October-November",
      price: "From $1,899 per person",
    },
    santorini: {
      name: "Santorini",
      location: "Greece",
      image: "/placeholder.svg?height=800&width=1600",
      description:
        "Experience the breathtaking beauty of this iconic Greek island with its white-washed buildings, blue-domed churches, and stunning sunsets over the Aegean Sea. Santorini offers a perfect mix of relaxation, culture, and natural beauty.",
      highlights: [
        "Watch the sunset from Oia",
        "Explore ancient ruins at Akrotiri",
        "Swim in crystal-clear waters",
        "Sample local wines at island vineyards",
        "Hike from Fira to Oia along the caldera",
      ],
      duration: "5-7 days",
      bestTime: "April to October",
      price: "From $1,699 per person",
    },
    "swiss-alps": {
      name: "Swiss Alps",
      location: "Switzerland",
      image: "/placeholder.svg?height=800&width=1600",
      description:
        "Discover the majestic beauty of the Swiss Alps with breathtaking mountain scenery, charming villages, and world-class outdoor activities. Whether you're seeking adventure or relaxation, the Swiss Alps offer an unforgettable experience in every season.",
      highlights: [
        "Ride scenic mountain railways",
        "Ski or snowboard on world-class slopes",
        "Hike through alpine meadows",
        "Visit charming mountain villages",
        "Experience Swiss hospitality and cuisine",
      ],
      duration: "7-10 days",
      bestTime: "December to March for winter sports, June to September for hiking",
      price: "From $2,199 per person",
    },
    bali: {
      name: "Bali",
      location: "Indonesia",
      image: "/placeholder.svg?height=800&width=1600",
      description:
        "Experience the Island of the Gods with its lush landscapes, vibrant culture, and spiritual atmosphere. From sacred temples and rice terraces to beautiful beaches and luxury resorts, Bali offers something for every type of traveler.",
      highlights: [
        "Visit ancient temples like Uluwatu and Tanah Lot",
        "Explore the cultural heart of Ubud",
        "Relax on beautiful beaches",
        "Experience traditional Balinese spa treatments",
        "Take part in a cooking class or yoga retreat",
      ],
      duration: "7-14 days",
      bestTime: "April to October",
      price: "From $1,499 per person",
    },
  }

  // Format the slug to match our object keys
  const formattedSlug = params.slug.toLowerCase().replace(/\s+/g, "-")

  // @ts-ignore - We're checking if the destination exists
  const destination = destinations[formattedSlug]

  if (!destination) {
    notFound()
  }

  return (
    <main className="pt-20">
      {/* Hero Section */}
      <div className="relative h-[60vh] md:h-[70vh]">
        <Image
          src={destination.image || "/placeholder.svg"}
          alt={destination.name}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
        <div className="absolute inset-0 flex items-end">
          <div className="container mx-auto px-4 pb-16">
            <Link
              href="/destinations"
              className="inline-flex items-center text-white mb-6 hover:text-brand-teal transition-colors"
            >
              <ChevronLeft className="h-4 w-4 mr-1" />
              Back to destinations
            </Link>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-2">{destination.name}</h1>
            <div className="flex items-center text-white/90">
              <MapPin className="h-5 w-5 mr-1" />
              <span>{destination.location}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2">
            <h2 className="text-2xl font-bold mb-4">Destination Overview</h2>
            <p className="text-muted-foreground mb-8">{destination.description}</p>

            <h2 className="text-2xl font-bold mb-4">Highlights</h2>
            <ul className="space-y-2 mb-8">
              {destination.highlights.map((highlight, index) => (
                <li key={index} className="flex items-start">
                  <div className="h-6 w-6 rounded-full bg-brand-teal/20 flex items-center justify-center mr-3 mt-0.5">
                    <span className="text-brand-teal text-sm">✓</span>
                  </div>
                  <span>{highlight}</span>
                </li>
              ))}
            </ul>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="rounded-xl overflow-hidden">
                <Image
                  src="/placeholder.svg?height=400&width=600"
                  alt={`${destination.name} attraction`}
                  width={600}
                  height={400}
                  className="w-full h-auto object-cover"
                />
              </div>
              <div className="rounded-xl overflow-hidden">
                <Image
                  src="/placeholder.svg?height=400&width=600"
                  alt={`${destination.name} attraction`}
                  width={600}
                  height={400}
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>

          <div>
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 sticky top-24">
              <h3 className="text-xl font-bold mb-4">Plan Your Trip</h3>

              <div className="space-y-4 mb-6">
                <div className="flex items-start">
                  <Clock className="h-5 w-5 text-brand-teal mr-3 mt-0.5" />
                  <div>
                    <p className="font-medium">Recommended Duration</p>
                    <p className="text-sm text-muted-foreground">{destination.duration}</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Calendar className="h-5 w-5 text-brand-teal mr-3 mt-0.5" />
                  <div>
                    <p className="font-medium">Best Time to Visit</p>
                    <p className="text-sm text-muted-foreground">{destination.bestTime}</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Users className="h-5 w-5 text-brand-teal mr-3 mt-0.5" />
                  <div>
                    <p className="font-medium">Perfect For</p>
                    <p className="text-sm text-muted-foreground">Couples, Families, Solo Travelers</p>
                  </div>
                </div>
              </div>

              <div className="border-t pt-4 mb-6">
                <p className="text-lg font-bold text-brand-teal">{destination.price}</p>
                <p className="text-sm text-muted-foreground">
                  Includes accommodations, transfers, and selected activities
                </p>
              </div>

              <div className="space-y-3">
                <Button className="w-full bg-brand-teal hover:bg-brand-navy">Book This Trip</Button>
                <Button variant="outline" className="w-full">
                  Request Custom Itinerary
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
