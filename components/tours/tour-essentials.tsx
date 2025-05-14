import { Calendar, Clock, Users, Utensils, Home, Globe, Thermometer, CreditCard } from "lucide-react"

export default function TourEssentials() {
  return (
    <div className="space-y-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-muted p-4 rounded-lg">
          <div className="flex items-center mb-2">
            <Calendar className="h-5 w-5 text-amber-600 mr-2" />
            <h4 className="font-semibold">Best Time to Visit</h4>
          </div>
          <p className="text-sm text-muted-foreground">April to October (Dry Season)</p>
        </div>

        <div className="bg-muted p-4 rounded-lg">
          <div className="flex items-center mb-2">
            <Clock className="h-5 w-5 text-amber-600 mr-2" />
            <h4 className="font-semibold">Tour Duration</h4>
          </div>
          <p className="text-sm text-muted-foreground">8 Days / 7 Nights</p>
        </div>

        <div className="bg-muted p-4 rounded-lg">
          <div className="flex items-center mb-2">
            <Users className="h-5 w-5 text-amber-600 mr-2" />
            <h4 className="font-semibold">Group Size</h4>
          </div>
          <p className="text-sm text-muted-foreground">Private Tour (2-6 people)</p>
        </div>

        <div className="bg-muted p-4 rounded-lg">
          <div className="flex items-center mb-2">
            <Utensils className="h-5 w-5 text-amber-600 mr-2" />
            <h4 className="font-semibold">Meals</h4>
          </div>
          <p className="text-sm text-muted-foreground">7 Breakfasts, 4 Lunches, 3 Dinners</p>
        </div>
      </div>

      <div>
        <h3 className="text-xl font-semibold mb-4">Trip Essentials</h3>

        <div className="space-y-4">
          <div>
            <div className="flex items-center mb-2">
              <Home className="h-5 w-5 text-amber-600 mr-2" />
              <h4 className="font-semibold">Accommodation</h4>
            </div>
            <p className="text-sm text-muted-foreground ml-7">
              Luxury villa with private pool in Seminyak (7 nights). All accommodations include air conditioning, free
              Wi-Fi, and daily housekeeping.
            </p>
          </div>

          <div>
            <div className="flex items-center mb-2">
              <Globe className="h-5 w-5 text-amber-600 mr-2" />
              <h4 className="font-semibold">Visa Requirements</h4>
            </div>
            <p className="text-sm text-muted-foreground ml-7">
              Most nationalities receive a 30-day visa-free entry to Indonesia. Please check the latest requirements for
              your country before traveling.
            </p>
          </div>

          <div>
            <div className="flex items-center mb-2">
              <Thermometer className="h-5 w-5 text-amber-600 mr-2" />
              <h4 className="font-semibold">Weather & Packing</h4>
            </div>
            <p className="text-sm text-muted-foreground ml-7">
              Bali has a tropical climate with temperatures averaging 26-30°C (79-86°F). Pack light, breathable
              clothing, swimwear, sun protection, insect repellent, and comfortable walking shoes.
            </p>
          </div>

          <div>
            <div className="flex items-center mb-2">
              <CreditCard className="h-5 w-5 text-amber-600 mr-2" />
              <h4 className="font-semibold">Payment & Cancellation</h4>
            </div>
            <p className="text-sm text-muted-foreground ml-7">
              30% deposit required at booking, with full payment due 60 days before departure. Free cancellation up to
              90 days before departure (full refund minus processing fee). 50% refund for cancellations 60-89 days
              before departure. No refund for cancellations less than 60 days before departure.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
