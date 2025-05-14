"use client"

import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Search } from "lucide-react"

export default function VisaCountryList() {
  const [searchTerm, setSearchTerm] = useState("")

  const countries = [
    { name: "Australia", processingTime: "15-20 days", difficulty: "Moderate" },
    { name: "Canada", processingTime: "20-25 days", difficulty: "Moderate" },
    { name: "China", processingTime: "7-10 days", difficulty: "Moderate" },
    { name: "France", processingTime: "10-15 days", difficulty: "Easy" },
    { name: "Germany", processingTime: "10-15 days", difficulty: "Easy" },
    { name: "India", processingTime: "5-7 days", difficulty: "Easy" },
    { name: "Italy", processingTime: "10-15 days", difficulty: "Easy" },
    { name: "Japan", processingTime: "5-7 days", difficulty: "Moderate" },
    { name: "New Zealand", processingTime: "15-20 days", difficulty: "Moderate" },
    { name: "Russia", processingTime: "10-15 days", difficulty: "Complex" },
    { name: "Singapore", processingTime: "3-5 days", difficulty: "Easy" },
    { name: "South Africa", processingTime: "10-15 days", difficulty: "Moderate" },
    { name: "Spain", processingTime: "10-15 days", difficulty: "Easy" },
    { name: "Thailand", processingTime: "3-5 days", difficulty: "Easy" },
    { name: "United Arab Emirates", processingTime: "3-5 days", difficulty: "Easy" },
    { name: "United Kingdom", processingTime: "15-20 days", difficulty: "Moderate" },
    { name: "United States", processingTime: "30-90 days", difficulty: "Complex" },
  ]

  const filteredCountries = countries.filter((country) => country.name.toLowerCase().includes(searchTerm.toLowerCase()))

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case "Easy":
        return "bg-green-100 text-green-800"
      case "Moderate":
        return "bg-amber-100 text-amber-800"
      case "Complex":
        return "bg-red-100 text-red-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  return (
    <div>
      <div className="mb-6 flex">
        <Input
          placeholder="Search country..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="mr-2"
        />
        <Button variant="outline" size="icon">
          <Search className="h-4 w-4" />
        </Button>
      </div>

      <div className="border rounded-lg overflow-hidden">
        <div className="grid grid-cols-3 bg-muted p-3 font-medium">
          <div>Country</div>
          <div>Processing Time</div>
          <div>Difficulty</div>
        </div>

        <div className="divide-y">
          {filteredCountries.map((country, index) => (
            <div key={index} className="grid grid-cols-3 p-3 hover:bg-muted/50">
              <div>{country.name}</div>
              <div>{country.processingTime}</div>
              <div>
                <span className={`px-2 py-1 rounded-full text-xs ${getDifficultyColor(country.difficulty)}`}>
                  {country.difficulty}
                </span>
              </div>
            </div>
          ))}

          {filteredCountries.length === 0 && (
            <div className="p-4 text-center text-muted-foreground">No countries found matching your search.</div>
          )}
        </div>
      </div>
    </div>
  )
}
