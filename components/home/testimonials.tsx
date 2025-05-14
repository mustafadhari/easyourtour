"use client"

import { useState } from "react"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { ChevronLeft, ChevronRight, Quote } from "lucide-react"

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      location: "New York, USA",
      image: "/placeholder.svg?height=100&width=100",
      text: "Our Bali private tour exceeded all expectations. The attention to detail, from the luxury accommodations to the personalized excursions, made this the trip of a lifetime. Our guide was knowledgeable and friendly, making us feel like locals.",
      tour: "Enchanting Bali Private Retreat",
    },
    {
      id: 2,
      name: "David & Emma Thompson",
      location: "London, UK",
      image: "/placeholder.svg?height=100&width=100",
      text: "The Greek Islands cruise was absolutely magical. Every detail was perfectly arranged, from the seamless transfers to the exclusive experiences on each island. Wanderlux truly understands luxury travel.",
      tour: "Greek Islands Luxury Cruise",
    },
    {
      id: 3,
      name: "Hiroshi Tanaka",
      location: "Tokyo, Japan",
      image: "/placeholder.svg?height=100&width=100",
      text: "The Swiss Alps expedition was breathtaking. The accommodations were first-class, and our guide's knowledge of the region enhanced the experience. Wanderlux handled every detail flawlessly.",
      tour: "Majestic Swiss Alps Expedition",
    },
  ]

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1))
  }

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1))
  }

  return (
    <section className="py-16 bg-amber-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">What Our Travelers Say</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Hear from our clients about their unforgettable experiences with Wanderlux
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <Card className="bg-white shadow-lg">
            <CardContent className="p-8">
              <div className="absolute -top-6 left-8 bg-amber-600 rounded-full p-3">
                <Quote className="h-6 w-6 text-white" />
              </div>

              <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="md:w-1/4 flex flex-col items-center">
                  <div className="relative w-24 h-24 rounded-full overflow-hidden mb-4">
                    <Image
                      src={testimonials[currentIndex].image || "/placeholder.svg"}
                      alt={testimonials[currentIndex].name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <h3 className="font-bold text-center">{testimonials[currentIndex].name}</h3>
                  <p className="text-sm text-muted-foreground text-center">{testimonials[currentIndex].location}</p>
                </div>

                <div className="md:w-3/4">
                  <p className="italic text-lg mb-4">{testimonials[currentIndex].text}</p>
                  <p className="font-medium text-amber-600">Tour: {testimonials[currentIndex].tour}</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="flex justify-center mt-8 gap-4">
            <button
              onClick={prevTestimonial}
              className="p-2 rounded-full bg-white shadow hover:bg-gray-100"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>
            <button
              onClick={nextTestimonial}
              className="p-2 rounded-full bg-white shadow hover:bg-gray-100"
              aria-label="Next testimonial"
            >
              <ChevronRight className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
