import { Check, X } from "lucide-react"

export default function TourInclusions() {
  const inclusions = [
    "Luxury villa accommodation with private pool (7 nights)",
    "Daily breakfast and selected meals as per itinerary",
    "Private airport transfers in air-conditioned vehicle",
    "Services of an experienced English-speaking guide throughout",
    "All entrance fees to temples and attractions mentioned in the itinerary",
    "Mount Batur sunrise trek with breakfast",
    "Private boat for island hopping day trip",
    "Traditional Balinese cooking class",
    "Sunset dinner cruise on final evening",
    "Complimentary traditional Balinese spa treatment",
    "24/7 customer support during your stay",
  ]

  const exclusions = [
    "International flights to/from Bali",
    "Travel insurance (mandatory)",
    "Meals not mentioned in the itinerary",
    "Personal expenses (souvenirs, additional spa treatments, etc.)",
    "Tips and gratuities for guides and drivers",
    "Optional activities not mentioned in the itinerary",
  ]

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      <div>
        <h3 className="text-xl font-semibold mb-4">What's Included</h3>
        <ul className="space-y-2">
          {inclusions.map((item, index) => (
            <li key={index} className="flex items-start">
              <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>

      <div>
        <h3 className="text-xl font-semibold mb-4">What's Not Included</h3>
        <ul className="space-y-2">
          {exclusions.map((item, index) => (
            <li key={index} className="flex items-start">
              <X className="h-5 w-5 text-red-500 mr-2 mt-0.5 flex-shrink-0" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
