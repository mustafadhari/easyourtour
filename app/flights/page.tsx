import type { Metadata } from "next"
import PageHeader from "@/components/page-header"
import FlightSearch from "@/components/flights/flight-search"
import FeaturedFlights from "@/components/flights/featured-flights"
import FlightDeals from "@/components/flights/flight-deals"

export const metadata: Metadata = {
  title: "Flight Bookings | Wanderlux",
  description: "Book premium flights to destinations worldwide with exclusive deals and offers.",
}

export default function FlightsPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <PageHeader title="Flight Bookings" description="Find and book the best flights to your dream destinations" />

      <div className="mt-8">
        <FlightSearch />
      </div>

      <div className="mt-16">
        <h2 className="text-2xl font-bold mb-6">Featured Airlines</h2>
        <FeaturedFlights />
      </div>

      <div className="mt-16">
        <h2 className="text-2xl font-bold mb-6">Special Flight Deals</h2>
        <FlightDeals />
      </div>
    </div>
  )
}
