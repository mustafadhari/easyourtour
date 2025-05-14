"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Calendar } from "@/components/ui/calendar"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { CalendarIcon, Search } from "lucide-react"
import { format } from "date-fns"

export default function FlightSearch() {
  const [tripType, setTripType] = useState("roundTrip")
  const [departureDate, setDepartureDate] = useState<Date>()
  const [returnDate, setReturnDate] = useState<Date>()

  return (
    <div className="bg-card border rounded-xl p-6 shadow-sm">
      <div className="mb-6">
        <RadioGroup defaultValue="roundTrip" className="flex space-x-4" onValueChange={setTripType}>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="roundTrip" id="roundTrip" />
            <Label htmlFor="roundTrip">Round Trip</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="oneWay" id="oneWay" />
            <Label htmlFor="oneWay">One Way</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="multiCity" id="multiCity" />
            <Label htmlFor="multiCity">Multi-City</Label>
          </div>
        </RadioGroup>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="space-y-2">
          <Label htmlFor="from">From</Label>
          <Input id="from" placeholder="City or Airport" />
        </div>

        <div className="space-y-2">
          <Label htmlFor="to">To</Label>
          <Input id="to" placeholder="City or Airport" />
        </div>

        <div className="space-y-2">
          <Label>Departure Date</Label>
          <Popover>
            <PopoverTrigger asChild>
              <Button variant="outline" className="w-full justify-start text-left font-normal">
                <CalendarIcon className="mr-2 h-4 w-4" />
                {departureDate ? format(departureDate, "PPP") : <span>Select date</span>}
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0">
              <Calendar mode="single" selected={departureDate} onSelect={setDepartureDate} initialFocus />
            </PopoverContent>
          </Popover>
        </div>

        {tripType === "roundTrip" && (
          <div className="space-y-2">
            <Label>Return Date</Label>
            <Popover>
              <PopoverTrigger asChild>
                <Button variant="outline" className="w-full justify-start text-left font-normal">
                  <CalendarIcon className="mr-2 h-4 w-4" />
                  {returnDate ? format(returnDate, "PPP") : <span>Select date</span>}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0">
                <Calendar mode="single" selected={returnDate} onSelect={setReturnDate} initialFocus />
              </PopoverContent>
            </Popover>
          </div>
        )}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
        <div className="space-y-2">
          <Label htmlFor="passengers">Passengers</Label>
          <select id="passengers" className="w-full h-10 px-3 rounded-md border">
            <option>1 Adult</option>
            <option>2 Adults</option>
            <option>3 Adults</option>
            <option>4 Adults</option>
            <option>1 Adult, 1 Child</option>
            <option>2 Adults, 1 Child</option>
            <option>2 Adults, 2 Children</option>
          </select>
        </div>

        <div className="space-y-2">
          <Label htmlFor="class">Class</Label>
          <select id="class" className="w-full h-10 px-3 rounded-md border">
            <option>Economy</option>
            <option>Premium Economy</option>
            <option>Business</option>
            <option>First Class</option>
          </select>
        </div>

        <div className="flex items-end">
          <Button className="w-full bg-amber-600 hover:bg-amber-700">
            <Search className="mr-2 h-4 w-4" /> Search Flights
          </Button>
        </div>
      </div>
    </div>
  )
}
