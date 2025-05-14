import type { Metadata } from "next"
import PageHeader from "@/components/page-header"
import HotelSearch from "@/components/hotels/hotel-search"
import HotelsList from "@/components/hotels/hotels-list"
import FeaturedHotels from "@/components/hotels/featured-hotels"

export const metadata: Metadata = {
  title: "Luxury Hotels | Wanderlux",
  description: "Discover and book luxury hotels and accommodations worldwide.",
}

export default function HotelsPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <PageHeader
        title="Luxury Hotels & Accommodations"
        description="Find the perfect place to stay for your next adventure"
      />

      <div className="mt-8">
        <HotelSearch />
      </div>

      <div className="mt-16">
        <h2 className="text-2xl font-bold mb-6">Featured Properties</h2>
        <FeaturedHotels />
      </div>

      <div className="mt-16">
        <h2 className="text-2xl font-bold mb-6">Browse Hotels</h2>
        <HotelsList />
      </div>
    </div>
  )
}
