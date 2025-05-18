"use client"

import { useState, useEffect, useRef } from "react"
import { Users, ChevronDown, ChevronUp, Plus, Minus } from "lucide-react"
import { cn } from "@/lib/utils"

interface TravelersSelectorProps {
  adults: number
  children: number
  onAdultsChange: (value: number) => void
  onChildrenChange: (value: number) => void
  className?: string
}

export function TravelersSelector({
  adults,
  children,
  onAdultsChange,
  onChildrenChange,
  className,
}: TravelersSelectorProps) {
  const [isOpen, setIsOpen] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [])

  const totalTravelers = adults + children

  return (
    <div ref={ref} className={cn("relative", className)}>
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-between w-full h-12 px-3 py-2 text-left bg-white/10 border border-white/20 rounded-md text-white placeholder:text-white/70 focus:outline-none focus:ring-2 focus:ring-brand-teal focus:border-brand-teal"
      >
        <div className="flex items-center">
          <Users className="h-5 w-5 mr-2 text-white/70" />
          <span>
            {totalTravelers === 0 ? "Travelers" : `${totalTravelers} Traveler${totalTravelers !== 1 ? "s" : ""}`}
          </span>
        </div>
        {isOpen ? <ChevronUp className="h-4 w-4 text-white/70" /> : <ChevronDown className="h-4 w-4 text-white/70" />}
      </button>

      {isOpen && (
        <div className="absolute z-10 w-full mt-1 bg-white rounded-md shadow-lg">
          <div className="p-4">
            <div className="flex items-center justify-between mb-4">
              <div>
                <h3 className="font-medium text-gray-900">Adults</h3>
                <p className="text-sm text-gray-500">Ages 13 or above</p>
              </div>
              <div className="flex items-center">
                <button
                  type="button"
                  onClick={() => onAdultsChange(Math.max(1, adults - 1))}
                  className="flex items-center justify-center w-8 h-8 rounded-full border border-gray-300 text-gray-600 hover:bg-gray-100"
                >
                  <Minus className="h-4 w-4" />
                </button>
                <span className="mx-3 w-6 text-center text-gray-900">{adults}</span>
                <button
                  type="button"
                  onClick={() => onAdultsChange(adults + 1)}
                  className="flex items-center justify-center w-8 h-8 rounded-full border border-gray-300 text-gray-600 hover:bg-gray-100"
                >
                  <Plus className="h-4 w-4" />
                </button>
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-medium text-gray-900">Children</h3>
                <p className="text-sm text-gray-500">Ages 0-12</p>
              </div>
              <div className="flex items-center">
                <button
                  type="button"
                  onClick={() => onChildrenChange(Math.max(0, children - 1))}
                  className="flex items-center justify-center w-8 h-8 rounded-full border border-gray-300 text-gray-600 hover:bg-gray-100"
                >
                  <Minus className="h-4 w-4" />
                </button>
                <span className="mx-3 w-6 text-center text-gray-900">{children}</span>
                <button
                  type="button"
                  onClick={() => onChildrenChange(children + 1)}
                  className="flex items-center justify-center w-8 h-8 rounded-full border border-gray-300 text-gray-600 hover:bg-gray-100"
                >
                  <Plus className="h-4 w-4" />
                </button>
              </div>
            </div>

            <button
              type="button"
              onClick={() => setIsOpen(false)}
              className="mt-4 w-full py-2 px-4 bg-brand-teal text-white rounded-md hover:bg-brand-navy transition-colors"
            >
              Apply
            </button>
          </div>
        </div>
      )}
    </div>
  )
}
