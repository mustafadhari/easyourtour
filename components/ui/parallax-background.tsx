"use client"

import { useEffect, useState } from "react"
import Image from "next/image"

interface ParallaxBackgroundProps {
  imageUrl: string
  className?: string
  overlayColor?: string
  overlayOpacity?: number
  speed?: number
}

export function ParallaxBackground({
  imageUrl,
  className = "",
  overlayColor = "#000",
  overlayOpacity = 0.4,
  speed = 0.5,
}: ParallaxBackgroundProps) {
  const [offsetY, setOffsetY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      setOffsetY(window.scrollY)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div className={`relative w-full h-full overflow-hidden ${className}`}>
      <div
        className="absolute inset-0 w-full h-full"
        style={{
          transform: `translateY(${offsetY * speed}px)`,
          transition: "transform 0.1s ease-out",
        }}
      >
        <Image src={imageUrl || "/placeholder.svg"} alt="Background" fill className="object-cover" priority />
      </div>
      <div
        className="absolute inset-0"
        style={{
          backgroundColor: overlayColor,
          opacity: overlayOpacity,
        }}
      />
    </div>
  )
}
