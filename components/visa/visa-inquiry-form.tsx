"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function VisaInquiryForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false)
      alert("Your visa inquiry has been submitted. We'll get back to you shortly!")
    }, 1500)
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="space-y-2">
        <Label htmlFor="name">Full Name (as in passport)</Label>
        <Input id="name" placeholder="Enter your full name" required />
      </div>

      <div className="space-y-2">
        <Label htmlFor="email">Email Address</Label>
        <Input id="email" type="email" placeholder="Enter your email" required />
      </div>

      <div className="space-y-2">
        <Label htmlFor="phone">Phone Number</Label>
        <Input id="phone" placeholder="Enter your phone number" required />
      </div>

      <div className="space-y-2">
        <Label htmlFor="nationality">Nationality</Label>
        <Input id="nationality" placeholder="Enter your nationality" required />
      </div>

      <div className="space-y-2">
        <Label htmlFor="destination">Destination Country</Label>
        <Select>
          <SelectTrigger id="destination">
            <SelectValue placeholder="Select country" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="australia">Australia</SelectItem>
            <SelectItem value="canada">Canada</SelectItem>
            <SelectItem value="china">China</SelectItem>
            <SelectItem value="france">France</SelectItem>
            <SelectItem value="germany">Germany</SelectItem>
            <SelectItem value="japan">Japan</SelectItem>
            <SelectItem value="uk">United Kingdom</SelectItem>
            <SelectItem value="usa">United States</SelectItem>
            <SelectItem value="other">Other</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="space-y-2">
        <Label htmlFor="visa-type">Visa Type</Label>
        <Select>
          <SelectTrigger id="visa-type">
            <SelectValue placeholder="Select visa type" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="tourist">Tourist Visa</SelectItem>
            <SelectItem value="business">Business Visa</SelectItem>
            <SelectItem value="work">Work Visa</SelectItem>
            <SelectItem value="student">Student Visa</SelectItem>
            <SelectItem value="transit">Transit Visa</SelectItem>
            <SelectItem value="other">Other</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="space-y-2">
        <Label htmlFor="travel-date">Expected Travel Date</Label>
        <Input id="travel-date" type="date" required />
      </div>

      <div className="space-y-2">
        <Label htmlFor="message">Additional Information</Label>
        <Textarea
          id="message"
          placeholder="Please provide any additional details about your visa requirements"
          rows={3}
        />
      </div>

      <Button type="submit" className="w-full bg-amber-600 hover:bg-amber-700" disabled={isSubmitting}>
        {isSubmitting ? "Submitting..." : "Submit Inquiry"}
      </Button>
    </form>
  )
}
