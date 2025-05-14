"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Slider } from "@/components/ui/slider"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"

export default function TourFilters() {
  const [priceRange, setPriceRange] = useState([1000, 5000])
  const [duration, setDuration] = useState([3, 14])

  return (
    <div className="space-y-6 bg-card p-6 rounded-lg border">
      <div>
        <h3 className="text-lg font-semibold mb-4">Filter Tours</h3>
      </div>

      <div className="space-y-4">
        <div>
          <Label htmlFor="destination">Destination</Label>
          <Select>
            <SelectTrigger id="destination">
              <SelectValue placeholder="All Destinations" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Destinations</SelectItem>
              <SelectItem value="europe">Europe</SelectItem>
              <SelectItem value="asia">Asia</SelectItem>
              <SelectItem value="africa">Africa</SelectItem>
              <SelectItem value="north-america">North America</SelectItem>
              <SelectItem value="south-america">South America</SelectItem>
              <SelectItem value="oceania">Australia & Oceania</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div>
          <Label htmlFor="tour-type">Tour Type</Label>
          <Select>
            <SelectTrigger id="tour-type">
              <SelectValue placeholder="All Types" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Types</SelectItem>
              <SelectItem value="private">Private Tours</SelectItem>
              <SelectItem value="group">Group Tours</SelectItem>
              <SelectItem value="honeymoon">Honeymoon Packages</SelectItem>
              <SelectItem value="adventure">Adventure Tours</SelectItem>
              <SelectItem value="cultural">Cultural Experiences</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div>
          <div className="flex justify-between mb-2">
            <Label>Price Range</Label>
            <span className="text-sm text-muted-foreground">
              ${priceRange[0]} - ${priceRange[1]}
            </span>
          </div>
          <Slider
            defaultValue={[1000, 5000]}
            max={10000}
            min={0}
            step={100}
            value={priceRange}
            onValueChange={setPriceRange}
          />
        </div>

        <div>
          <div className="flex justify-between mb-2">
            <Label>Duration (Days)</Label>
            <span className="text-sm text-muted-foreground">
              {duration[0]} - {duration[1]} days
            </span>
          </div>
          <Slider defaultValue={[3, 14]} max={30} min={1} step={1} value={duration} onValueChange={setDuration} />
        </div>

        <div className="space-y-2">
          <Label>Experiences</Label>
          <div className="space-y-2">
            <div className="flex items-center space-x-2">
              <Checkbox id="beach" />
              <label htmlFor="beach" className="text-sm">
                Beach & Islands
              </label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox id="wildlife" />
              <label htmlFor="wildlife" className="text-sm">
                Wildlife & Safari
              </label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox id="city" />
              <label htmlFor="city" className="text-sm">
                City Exploration
              </label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox id="cultural" />
              <label htmlFor="cultural" className="text-sm">
                Cultural Immersion
              </label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox id="adventure" />
              <label htmlFor="adventure" className="text-sm">
                Adventure Activities
              </label>
            </div>
          </div>
        </div>
      </div>

      <div className="pt-4 border-t flex flex-col gap-2">
        <Button className="w-full bg-amber-600 hover:bg-amber-700">Apply Filters</Button>
        <Button variant="outline" className="w-full">
          Reset
        </Button>
      </div>
    </div>
  )
}
