"use client"

import type React from "react"
import { useState } from "react"
import Image from "next/image"
import { ImageOff } from "lucide-react"

interface ImageWithFallbackProps {
  src: string
  alt: string
  width: number
  height: number
  className?: string
  fallbackClassName?: string
  priority?: boolean
}

const ImageWithFallback: React.FC<ImageWithFallbackProps> = ({
  src,
  alt,
  width,
  height,
  className = "",
  fallbackClassName = "",
  priority = false,
}) => {
  const [error, setError] = useState(false)

  if (error) {
    return (
      <div
        className={`flex items-center justify-center bg-gray-100 ${className} ${fallbackClassName}`}
        style={{ width: `${width}px`, height: `${height}px` }}
      >
        <div className="flex flex-col items-center justify-center text-gray-400">
          <ImageOff className="w-8 h-8 mb-2" />
          <span className="text-xs">{alt}</span>
        </div>
      </div>
    )
  }

  return (
    <Image
      src={src || "/placeholder.svg"}
      alt={alt}
      width={width}
      height={height}
      className={className}
      onError={() => setError(true)}
      priority={priority}
    />
  )
}

export default ImageWithFallback
