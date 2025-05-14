import type { Metadata } from "next"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import TourGallery from "@/components/tours/tour-gallery"
import TourItinerary from "@/components/tours/tour-itinerary"
import TourInclusions from "@/components/tours/tour-inclusions"
import TourEssentials from "@/components/tours/tour-essentials"
import TourPricing from "@/components/tours/tour-pricing"
import TourInquiryForm from "@/components/tours/tour-inquiry-form"
import RelatedTours from "@/components/tours/related-tours"

export const metadata: Metadata = {
  title: "Tour Details | Wanderlux",
  description: "Explore the details of our luxury tour packages and plan your dream vacation.",
}

export default function TourDetailsPage({ params }: { params: { slug: string } }) {
  // In a real app, you would fetch tour details based on the slug
  const tourDetails = {
    title: "Enchanting Bali Private Retreat",
    duration: "8 Days / 7 Nights",
    price: 2499,
    rating: 4.9,
    reviews: 124,
    description:
      "Experience the magic of Bali with our exclusive private tour package. From pristine beaches to ancient temples, immerse yourself in the island's rich culture and natural beauty.",
    highlights: [
      "Private villa accommodation with pool",
      "Exclusive tour of Ubud's hidden temples",
      "Sunset dinner cruise along the coast",
      "Traditional Balinese cooking class",
      "Guided trek to Mount Batur at sunrise",
    ],
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <div className="mb-6">
            <h1 className="text-3xl md:text-4xl font-bold mb-2">{tourDetails.title}</h1>
            <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
              <span>{tourDetails.duration}</span>
              <span className="flex items-center">
                ★★★★★{" "}
                <span className="ml-1">
                  {tourDetails.rating} ({tourDetails.reviews} reviews)
                </span>
              </span>
            </div>
            <p className="text-lg">{tourDetails.description}</p>
          </div>

          <TourGallery />

          <div className="mt-8">
            <Tabs defaultValue="itinerary">
              <TabsList className="grid w-full grid-cols-4">
                <TabsTrigger value="itinerary">Itinerary</TabsTrigger>
                <TabsTrigger value="inclusions">Inclusions</TabsTrigger>
                <TabsTrigger value="essentials">Essentials</TabsTrigger>
                <TabsTrigger value="reviews">Reviews</TabsTrigger>
              </TabsList>
              <TabsContent value="itinerary" className="mt-6">
                <TourItinerary />
              </TabsContent>
              <TabsContent value="inclusions" className="mt-6">
                <TourInclusions />
              </TabsContent>
              <TabsContent value="essentials" className="mt-6">
                <TourEssentials />
              </TabsContent>
              <TabsContent value="reviews" className="mt-6">
                <div className="text-center py-8">
                  <h3 className="text-xl font-semibold mb-2">Customer Reviews</h3>
                  <p>Reviews will be displayed here.</p>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>

        <div className="lg:col-span-1">
          <div className="sticky top-24 bg-card rounded-xl shadow-lg p-6 border">
            <TourPricing price={tourDetails.price} />
            <div className="mt-6">
              <Button className="w-full mb-3 bg-amber-600 hover:bg-amber-700 text-white">Book Now</Button>
              <Button variant="outline" className="w-full">
                Download Itinerary
              </Button>
            </div>
            <div className="mt-8">
              <h3 className="text-lg font-semibold mb-4">Tour Highlights</h3>
              <ul className="space-y-2">
                {tourDetails.highlights.map((highlight, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-amber-600 mr-2">✓</span>
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="mt-8">
              <h3 className="text-lg font-semibold mb-4">Have Questions?</h3>
              <TourInquiryForm />
            </div>
          </div>
        </div>
      </div>

      <div className="mt-16">
        <h2 className="text-2xl font-bold mb-6">Similar Experiences You Might Enjoy</h2>
        <RelatedTours />
      </div>
    </div>
  )
}
