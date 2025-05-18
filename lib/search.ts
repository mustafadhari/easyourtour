// Mock data for search results and suggestions
export const allDestinations = [
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
    thumbnail: "/placeholder.svg?height=60&width=60",
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
    thumbnail: "/placeholder.svg?height=60&width=60",
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
    thumbnail: "/placeholder.svg?height=60&width=60",
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
    thumbnail: "/placeholder.svg?height=60&width=60",
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
    thumbnail: "/placeholder.svg?height=60&width=60",
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
    thumbnail: "/placeholder.svg?height=60&width=60",
    slug: "amalfi-coast-romantic-getaway",
    description:
      "Explore the stunning Amalfi Coast with its colorful cliffside villages, crystal-clear waters, and delicious cuisine. Perfect for couples seeking a romantic Mediterranean escape.",
  },
  {
    id: 7,
    title: "Paris & Provence Cultural Tour",
    location: "France",
    duration: "8 Days",
    type: "Small Group",
    price: 2899,
    rating: 4.7,
    reviews: 68,
    image: "/placeholder.svg?height=400&width=600",
    thumbnail: "/placeholder.svg?height=60&width=60",
    slug: "paris-provence-cultural-tour",
    description:
      "Experience the best of France with this cultural tour combining the elegance of Paris with the rustic charm of Provence. Enjoy world-class museums, vineyards, and lavender fields.",
  },
  {
    id: 8,
    title: "Maldives Overwater Villa Experience",
    location: "Maldives",
    duration: "5 Days",
    type: "Luxury Stay",
    price: 4899,
    rating: 4.9,
    reviews: 103,
    image: "/placeholder.svg?height=400&width=600",
    thumbnail: "/placeholder.svg?height=60&width=60",
    slug: "maldives-overwater-villa-experience",
    description:
      "Indulge in the ultimate tropical paradise with a stay in an overwater villa in the Maldives. Crystal clear waters, vibrant coral reefs, and unparalleled luxury await.",
  },
  {
    id: 9,
    title: "Peruvian Highlights & Machu Picchu",
    location: "Peru",
    duration: "9 Days",
    type: "Adventure Tour",
    price: 3199,
    rating: 4.8,
    reviews: 85,
    image: "/placeholder.svg?height=400&width=600",
    thumbnail: "/placeholder.svg?height=60&width=60",
    slug: "peruvian-highlights-machu-picchu",
    description:
      "Discover the wonders of Peru from the colonial streets of Lima to the ancient Incan citadel of Machu Picchu. Experience rich history, stunning landscapes, and vibrant culture.",
  },
  {
    id: 10,
    title: "Northern Lights Iceland Adventure",
    location: "Iceland",
    duration: "7 Days",
    type: "Winter Tour",
    price: 3499,
    rating: 4.8,
    reviews: 79,
    image: "/placeholder.svg?height=400&width=600",
    thumbnail: "/placeholder.svg?height=60&width=60",
    slug: "northern-lights-iceland-adventure",
    description:
      "Chase the magical Northern Lights across Iceland's dramatic landscapes. Explore glaciers, waterfalls, hot springs, and volcanic beaches on this unforgettable winter adventure.",
  },
]

// Popular destinations for quick suggestions
export const popularDestinations = [
  { id: 101, name: "Bali", country: "Indonesia", thumbnail: "/placeholder.svg?height=60&width=60" },
  { id: 102, name: "Santorini", country: "Greece", thumbnail: "/placeholder.svg?height=60&width=60" },
  { id: 103, name: "Tokyo", country: "Japan", thumbnail: "/placeholder.svg?height=60&width=60" },
  { id: 104, name: "Paris", country: "France", thumbnail: "/placeholder.svg?height=60&width=60" },
  { id: 105, name: "Maldives", country: "Maldives", thumbnail: "/placeholder.svg?height=60&width=60" },
  { id: 106, name: "New York", country: "USA", thumbnail: "/placeholder.svg?height=60&width=60" },
  { id: 107, name: "Barcelona", country: "Spain", thumbnail: "/placeholder.svg?height=60&width=60" },
  { id: 108, name: "Dubai", country: "UAE", thumbnail: "/placeholder.svg?height=60&width=60" },
]

export function getDestinationSuggestions(query: string) {
  if (!query || query.length < 2) {
    return popularDestinations.slice(0, 5) // Return popular destinations if query is too short
  }

  const searchTerm = query.toLowerCase()

  // First search in popular destinations
  const popularMatches = popularDestinations.filter(
    (dest) => dest.name.toLowerCase().includes(searchTerm) || dest.country.toLowerCase().includes(searchTerm),
  )

  // Then search in all destinations
  const tourMatches = allDestinations
    .filter((dest) => dest.title.toLowerCase().includes(searchTerm) || dest.location.toLowerCase().includes(searchTerm))
    .map((tour) => ({
      id: tour.id,
      name: tour.title,
      country: tour.location,
      thumbnail: tour.thumbnail,
      type: tour.type,
      price: tour.price,
    }))

  // Combine results, remove duplicates, and limit to 5 results
  const combinedResults = [...popularMatches]

  for (const tour of tourMatches) {
    if (!combinedResults.some((item) => item.name === tour.name)) {
      combinedResults.push(tour)
    }
  }

  return combinedResults.slice(0, 5)
}

export async function searchDestinations(destination: string, date: string, travelers: string): Promise<any[]> {
  // In a real application, this would be a database query or API call

  // Filter destinations based on search criteria
  let results = [...allDestinations]

  if (destination) {
    const searchTerm = destination.toLowerCase()
    results = results.filter(
      (item) =>
        item.title.toLowerCase().includes(searchTerm) ||
        item.location.toLowerCase().includes(searchTerm) ||
        item.description.toLowerCase().includes(searchTerm),
    )
  }

  // Additional filters could be applied here based on date and travelers
  // This is a simplified implementation

  return results
}
