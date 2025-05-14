"use client"

import { useState } from "react"
import Image from "next/image"

export default function TourGallery() {
  const [mainImage, setMainImage] = useState(0)

  const images = [
    "/placeholder.svg?height=600&width=800",
    "/placeholder.svg?height=600&width=800",
    "/placeholder.svg?height=600&width=800",
    "/placeholder.svg?height=600&width=800",
    "/placeholder.svg?height=600&width=800",
  ]

  return (
    <div className="space-y-4">
      <div className="relative h-[400px] rounded-lg overflow-hidden">
        <Image src={images[mainImage] || "/placeholder.svg"} alt="Tour destination" fill className="object-cover" />
      </div>

      <div className="grid grid-cols-5 gap-2">
        {images.map((image, index) => (
          <div
            key={index}
            className={`relative h-20 rounded-md overflow-hidden cursor-pointer ${
              mainImage === index ? "ring-2 ring-amber-600" : ""
            }`}
            onClick={() => setMainImage(index)}
          >
            <Image src={image || "/placeholder.svg"} alt={`Tour image ${index + 1}`} fill className="object-cover" />
          </div>
        ))}
      </div>
    </div>
  )
}
