"use client"

import type React from "react"
import { useEffect, useRef, useState } from "react"
import { cn } from "@/lib/utils"

interface AnimationWrapperProps {
  children: React.ReactNode
  className?: string
  animation?: "fade-up" | "fade-in" | "slide-in" | "zoom-in" | "bounce"
  delay?: number
  duration?: number
  threshold?: number
  once?: boolean
}

export function AnimationWrapper({
  children,
  className,
  animation = "fade-up",
  delay = 0,
  duration = 0.6,
  threshold = 0.1,
  once = true,
}: AnimationWrapperProps) {
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          if (once && ref.current) {
            observer.unobserve(ref.current)
          }
        } else if (!once) {
          setIsVisible(false)
        }
      },
      {
        threshold,
        rootMargin: "0px",
      },
    )

    const currentRef = ref.current
    if (currentRef) {
      observer.observe(currentRef)
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef)
      }
    }
  }, [once, threshold])

  const getAnimationClass = () => {
    if (!isVisible) return "opacity-0"

    switch (animation) {
      case "fade-up":
        return "animate-fade-up"
      case "fade-in":
        return "animate-fade-in"
      case "slide-in":
        return "animate-slide-in"
      case "zoom-in":
        return "animate-zoom-in"
      case "bounce":
        return "animate-bounce"
      default:
        return "animate-fade-in"
    }
  }

  return (
    <div
      ref={ref}
      className={cn(getAnimationClass(), "transition-all will-change-transform", className)}
      style={{
        animationDelay: `${delay}s`,
        animationDuration: `${duration}s`,
      }}
    >
      {children}
    </div>
  )
}
