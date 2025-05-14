"use client"

import type React from "react"
import { useEffect, useState, useRef } from "react"
import LoadingSpinner from "./loading-spinner"

interface LazyLoadProps {
  children: React.ReactNode
  placeholder?: React.ReactNode
  threshold?: number
  rootMargin?: string
}

const LazyLoad: React.FC<LazyLoadProps> = ({
  children,
  placeholder = <LoadingSpinner />,
  threshold = 0.1,
  rootMargin = "100px",
}) => {
  const [isVisible, setIsVisible] = useState(false)
  const [hasLoaded, setHasLoaded] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.disconnect()
        }
      },
      {
        threshold,
        rootMargin,
      },
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => {
      observer.disconnect()
    }
  }, [threshold, rootMargin])

  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => {
        setHasLoaded(true)
      }, 500)
      return () => clearTimeout(timer)
    }
  }, [isVisible])

  return (
    <div ref={ref} className="w-full">
      {isVisible ? (
        <div className={`transition-opacity duration-500 ${hasLoaded ? "opacity-100" : "opacity-0"}`}>{children}</div>
      ) : (
        <div className="min-h-[100px] flex items-center justify-center">{placeholder}</div>
      )}
    </div>
  )
}

export default LazyLoad
