"use client"

import type React from "react"
import { useEffect, useRef, useState } from "react"

interface MotionWrapperProps {
  children: React.ReactNode
  animation: "fadeIn" | "slideUp" | "slideDown" | "slideLeft" | "slideRight" | "scale" | "rotate"
  duration?: number
  delay?: number
  className?: string
  threshold?: number
  triggerOnce?: boolean
}

const MotionWrapper: React.FC<MotionWrapperProps> = ({
  children,
  animation,
  duration = 500,
  delay = 0,
  className = "",
  threshold = 0.1,
  triggerOnce = true,
}) => {
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          if (triggerOnce) {
            observer.disconnect()
          }
        } else if (!triggerOnce) {
          setIsVisible(false)
        }
      },
      { threshold },
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => {
      observer.disconnect()
    }
  }, [threshold, triggerOnce])

  const getAnimationClasses = () => {
    const baseClasses = `transition-all duration-${duration} delay-${delay}`

    if (!isVisible) {
      switch (animation) {
        case "fadeIn":
          return `${baseClasses} opacity-0`
        case "slideUp":
          return `${baseClasses} opacity-0 translate-y-8`
        case "slideDown":
          return `${baseClasses} opacity-0 -translate-y-8`
        case "slideLeft":
          return `${baseClasses} opacity-0 translate-x-8`
        case "slideRight":
          return `${baseClasses} opacity-0 -translate-x-8`
        case "scale":
          return `${baseClasses} opacity-0 scale-95`
        case "rotate":
          return `${baseClasses} opacity-0 rotate-12`
        default:
          return baseClasses
      }
    }

    return `${baseClasses} opacity-100 translate-x-0 translate-y-0 scale-100 rotate-0`
  }

  return (
    <div
      ref={ref}
      className={`${getAnimationClasses()} ${className}`}
      style={{
        transitionDuration: `${duration}ms`,
        transitionDelay: `${delay}ms`,
      }}
    >
      {children}
    </div>
  )
}

export default MotionWrapper
