"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Calendar } from "@/components/ui/calendar"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { CalendarIcon, Search } from "lucide-react"
import { format } from "date-fns"

export default function HotelSearch() {
  const [checkIn, setCheckIn] = useState<Date>()
  const [checkOut, setCheckOut] = useState<Date>()

  return (
    <div className="bg-card border rounded-xl p-6 shadow-sm">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="space-y-2">
          <Label htmlFor="destination">Destination</Label>
          <Input id="destination" placeholder="City, region, or hotel name" />
        </div>

        <div className="space-y-2">
          <Label>Check-in Date</Label>
          <Popover>
            <PopoverTrigger asChild>
              <Button variant="outline" className="w-full justify-start text-left font-normal">
                <CalendarIcon className="mr-2 h-4 w-4" />
                {checkIn ? format(checkIn, "PPP") : <span>Select date</span>}
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0">
              <Calendar mode="single" selected={checkIn} onSelect={setCheckIn} initialFocus />
            </PopoverContent>
          </Popover>
        </div>

        <div className="space-y-2">
          <Label>Check-out Date</Label>
          <Popover>
            <PopoverTrigger asChild>
              <Button variant="outline" className="w-full justify-start text-left font-normal">
                <CalendarIcon className="mr-2 h-4 w-4" />
                {checkOut ? format(checkOut, "PPP") : <span>Select date</span>}
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0">
              <Calendar mode="single" selected={checkOut} onSelect={setCheckOut} initialFocus />
            </PopoverContent>
          </Popover>
        </div>

        <div className="space-y-2">
          <Label htmlFor="guests">Guests & Rooms</Label>
          <select id="guests" className="w-full h-10 px-3 rounded-md border">
            <option>1 Adult, 1 Room</option>
            <option>2 Adults, 1 Room</option>
            <option>2 Adults, 2 Children, 1 Room</option>
            <option>2 Adults, 2 Rooms</option>
            <option>3 Adults, 2 Rooms</option>
            <option>4 Adults, 2 Rooms</option>
          </select>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
        <div className="space-y-2">
          <Label htmlFor="price">Price Range</Label>
          <select id="price" className="w-full h-10 px-3 rounded-md border">
            <option>Any Price</option>
            <option>$0 - $100 per night</option>
            <option>$100 - $200 per night</option>
            <option>$200 - $300 per night</option>
            <option>$300 - $500 per night</option>
            <option>$500+ per night</option>
          </select>
        </div>

        <div className="space-y-2">
          <Label htmlFor="rating">Hotel Rating</Label>
          <select id="rating" className="w-full h-10 px-3 rounded-md border">
            <option>Any Rating</option>
            <option>5 Star</option>
            <option>4 Star & Above</option>
            <option>3 Star & Above</option>
          </select>
        </div>

        <div className="flex items-end">
          <Button className="w-full bg-amber-600 hover:bg-amber-700">
            <Search className="mr-2 h-4 w-4" /> Search Hotels
          </Button>
        </div>
      </div>
    </div>
  )
}
