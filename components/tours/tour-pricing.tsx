"use client"

import { useState } from "react"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Label } from "@/components/ui/label"
import { Calendar } from "lucide-react"

interface TourPricingProps {
  price: number
}

export default function TourPricing({ price }: TourPricingProps) {
  const [travelers, setTravelers] = useState("2")
  const [selectedDate, setSelectedDate] = useState("")

  const dates = [
    "May 15, 2025",
    "June 10, 2025",
    "July 5, 2025",
    "August 20, 2025",
    "September 15, 2025",
    "October 10, 2025",
  ]

  const calculateTotal = () => {
    return price * Number.parseInt(travelers)
  }

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <div className="text-2xl font-bold text-amber-600">
          ${price}
          <span className="text-sm font-normal text-muted-foreground">/person</span>
        </div>
      </div>

      <div className="space-y-4 pt-4">
        <div className="space-y-2">
          <Label htmlFor="departure-date">Departure Date</Label>
          <div className="relative">
            <Select onValueChange={setSelectedDate}>
              <SelectTrigger id="departure-date" className="w-full">
                <SelectValue placeholder="Select date" />
              </SelectTrigger>
              <SelectContent>
                {dates.map((date) => (
                  <SelectItem key={date} value={date}>
                    {date}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <Calendar className="absolute right-10 top-2.5 h-4 w-4 text-muted-foreground" />
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="travelers">Number of Travelers</Label>
          <Select defaultValue="2" onValueChange={setTravelers}>
            <SelectTrigger id="travelers" className="w-full">
              <SelectValue placeholder="Select number" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="1">1 Person</SelectItem>
              <SelectItem value="2">2 People</SelectItem>
              <SelectItem value="3">3 People</SelectItem>
              <SelectItem value="4">4 People</SelectItem>
              <SelectItem value="5">5 People</SelectItem>
              <SelectItem value="6">6 People</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="pt-4 border-t space-y-2">
        <div className="flex justify-between">
          <span>Base Price</span>
          <span>
            ${price} x {travelers}
          </span>
        </div>
        <div className="flex justify-between">
          <span>Taxes & Fees</span>
          <span>Included</span>
        </div>
        <div className="flex justify-between font-bold text-lg pt-2 border-t mt-2">
          <span>Total</span>
          <span>${calculateTotal()}</span>
        </div>
      </div>
    </div>
  )
}
